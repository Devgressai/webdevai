/**
 * LLM Eval Worker Implementation
 * Evaluates pages using LLM with sanitized extracts
 */

import { PrismaClient } from '@prisma/client'
import { LlmEvalPayload } from '../queues/types'
import { getConfig } from './config'
import { selectSamplingSet } from './sampling'
import { buildSanitizedExtracts } from './extract'
import { getLlmProvider } from './provider'
import { validateLlmEvalResult, EvidenceQuote } from './schemas'
import { storeRedactedEvidence } from '../evidence/storage'
import {
  incrementLlmCall,
  canContinueProcessing,
  estimateTokens,
  truncateToTokenLimit,
  getBudgetLimits,
} from '@/lib/budget/tracking'

const prisma = new PrismaClient()

export interface LlmEvalResult {
  success: boolean
  evalId: string
  evalType: string
  overallScore: number
  evidenceQuotes: EvidenceQuote[]
  error?: string
}

/**
 * Main LLM evaluation function
 */
export async function evaluateWithLlm(
  payload: LlmEvalPayload
): Promise<LlmEvalResult> {
  const { scanId, evalType, context } = payload
  const config = getConfig()

  try {
    // 1. Select sampling set
    const samples = await selectSamplingSet(scanId, config)

    if (samples.length === 0) {
      return {
        success: false,
        evalId: '',
        evalType,
        overallScore: 0,
        evidenceQuotes: [],
        error: 'No pages available for evaluation',
      }
    }

    // 2. Check if we can continue processing (budget limits)
    const canContinue = await canContinueProcessing(scanId)
    if (!canContinue.canContinue) {
      return {
        success: false,
        evalId: '',
        evalType,
        overallScore: 0,
        evidenceQuotes: [],
        error: `Budget limit exceeded: ${canContinue.reason}`,
      }
    }

    // 3. Build sanitized extracts (NO raw HTML)
    const extracts = await buildSanitizedExtracts(
      samples.map((s) => s.pageId)
    )

    if (extracts.length === 0) {
      return {
        success: false,
        evalId: '',
        evalType,
        overallScore: 0,
        evidenceQuotes: [],
        error: 'Failed to build extracts',
      }
    }

    // 4. Truncate extracts to fit token limit
    const limits = getBudgetLimits()
    const truncatedExtracts = extracts.map((extract) => ({
      ...extract,
      content: truncateToTokenLimit(extract.content, limits.maxTokensPerCall),
    }))

    // 5. Estimate tokens for the call
    const estimatedTokens = estimateTokens(
      JSON.stringify(truncatedExtracts)
    )

    // 6. Check LLM call budget before making call
    const canCall = await incrementLlmCall(scanId, estimatedTokens)
    if (!canCall) {
      return {
        success: false,
        evalId: '',
        evalType,
        overallScore: 0,
        evidenceQuotes: [],
        error: 'LLM call budget limit exceeded',
      }
    }

    // 7. Get LLM provider
    const provider = getLlmProvider(config)

    // 8. Call LLM provider with truncated extracts
    const llmResult = await provider.evaluate(truncatedExtracts, evalType, config)

    // 5. Validate result
    const validation = validateLlmEvalResult(llmResult)
    if (!validation.success) {
      return {
        success: false,
        evalId: '',
        evalType,
        overallScore: 0,
        evidenceQuotes: [],
        error: `LLM response validation failed: ${validation.error.message}`,
      }
    }

    const validatedResult = validation.data

    // 6. Enforce evidence quotes requirement
    // Evidence quotes are required unless insufficient_evidence=true
    const hasInsufficientEvidence =
      validatedResult.insufficient_evidence === true
    const hasEvidenceQuotes =
      validatedResult.evidence_quotes &&
      validatedResult.evidence_quotes.length > 0

    if (config.requireEvidenceQuotes && !hasInsufficientEvidence && !hasEvidenceQuotes) {
      return {
        success: false,
        evalId: '',
        evalType,
        overallScore: 0,
        evidenceQuotes: [],
        error:
          'evidence_quotes required but not provided and insufficient_evidence is not true',
      }
    }

    if (!config.allowInsufficientEvidence && hasInsufficientEvidence) {
      return {
        success: false,
        evalId: '',
        evalType,
        overallScore: 0,
        evidenceQuotes: [],
        error: 'insufficient_evidence flag not allowed by configuration',
      }
    }

    // 7. Store LlmEval record
    const llmEval = await prisma.llmEval.create({
      data: {
        scanId,
        evalType,
        result: validatedResult as any, // Store full result as JSON
        model: config.model,
        metadata: {
          provider: config.provider,
          sampleCount: extracts.length,
          samples: samples.map((s) => ({
            pageId: s.pageId,
            url: s.url,
            reason: s.reason,
          })),
          temperature: config.temperature,
          maxTokens: config.maxTokens,
        },
      },
    })

    // 8. Store evidence quotes as Evidence records
    const evidenceQuotes: EvidenceQuote[] = []
    if (validatedResult.evidence_quotes) {
      for (const quote of validatedResult.evidence_quotes) {
        // Find page for this quote
        const page = await prisma.page.findFirst({
          where: {
            scanId,
            url: quote.source,
          },
        })

        if (page) {
          await storeRedactedEvidence(
            page.id,
            'llm_evidence_quote',
            quote.quote,
            quote.context || null,
            {
              source: quote.source,
              context: quote.context,
              evalId: llmEval.id,
              evalType,
            }
          )

          evidenceQuotes.push(quote)
        }
      }
    }

    return {
      success: true,
      evalId: llmEval.id,
      evalType,
      overallScore: validatedResult.overallScore,
      evidenceQuotes,
    }
  } catch (error) {
    return {
      success: false,
      evalId: '',
      evalType,
      overallScore: 0,
      evidenceQuotes: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

