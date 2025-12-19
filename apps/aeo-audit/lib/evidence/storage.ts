/**
 * Evidence storage utilities
 * Handles redaction and EVIDENCE_MODE compliance
 */

import { PrismaClient } from '@prisma/client'
import { config } from '@/src/config'
import {
  redactSensitiveData,
  hashContent,
  truncateContent,
  countRedactedItems,
} from './redaction'

const prisma = new PrismaClient()

/**
 * Evidence storage options
 */
export interface EvidenceStorageOptions {
  type: string
  content: string
  selector?: string | null
  metadata?: Record<string, unknown>
  maxLength?: number // Max length for content (default: 5000)
}

/**
 * Store evidence with redaction and mode compliance
 */
export async function storeEvidence(
  pageId: string,
  options: EvidenceStorageOptions
): Promise<string> {
  const evidenceMode = config.evidence.mode()
  const maxLength = options.maxLength || 5000

  // Redact sensitive data
  const redactedContent = redactSensitiveData(options.content)

  // Count redacted items
  const redactionCounts = countRedactedItems(options.content)

  // Generate hash
  const contentHash = hashContent(redactedContent)

  // Prepare evidence data based on mode
  let finalContent: string
  let finalMetadata: Record<string, unknown> = {
    ...(options.metadata || {}),
    contentHash,
    redactionCounts,
    evidenceMode,
  }

  if (evidenceMode === 'extract-only') {
    // Extract-only mode: store only hash + selector + counts
    finalContent = JSON.stringify({
      hash: contentHash,
      selector: options.selector,
      length: redactedContent.length,
      redactionCounts,
    })
    finalMetadata = {
      ...finalMetadata,
      originalLength: redactedContent.length,
      hasContent: false, // Flag to indicate no excerpt stored
    }
  } else {
    // Full mode: store excerpt snippet
    const truncated = truncateContent(redactedContent, maxLength)
    finalContent = truncated
    finalMetadata = {
      ...finalMetadata,
      originalLength: redactedContent.length,
      truncated: truncated.length < redactedContent.length,
      hasContent: true,
    }
  }

  // Create evidence record
  const evidence = await prisma.evidence.create({
    data: {
      pageId,
      type: options.type,
      content: finalContent,
      selector: options.selector || null,
      metadata: finalMetadata,
    },
  })

  return evidence.id
}

/**
 * Store evidence with automatic redaction
 * Convenience wrapper around storeEvidence
 */
export async function storeRedactedEvidence(
  pageId: string,
  type: string,
  content: string,
  selector?: string,
  metadata?: Record<string, unknown>
): Promise<string> {
  return storeEvidence(pageId, {
    type,
    content,
    selector,
    metadata,
  })
}

/**
 * Get evidence content (with redaction info)
 */
export async function getEvidenceContent(evidenceId: string): Promise<{
  content: string
  hash: string
  redactionCounts: {
    emails: number
    phones: number
    addresses: number
    tokens: number
    total: number
  }
  evidenceMode: string
  hasContent: boolean
}> {
  const evidence = await prisma.evidence.findUnique({
    where: { id: evidenceId },
  })

  if (!evidence) {
    throw new Error(`Evidence ${evidenceId} not found`)
  }

  const metadata = (evidence.metadata as Record<string, unknown>) || {}
  const evidenceMode = config.evidence.mode()

  // If extract-only mode, parse stored JSON
  if (evidenceMode === 'extract-only' || metadata.hasContent === false) {
    const stored = JSON.parse(evidence.content)
    return {
      content: '', // No content in extract-only mode
      hash: stored.hash || metadata.contentHash as string || '',
      redactionCounts: stored.redactionCounts || metadata.redactionCounts as any || {
        emails: 0,
        phones: 0,
        addresses: 0,
        tokens: 0,
        total: 0,
      },
      evidenceMode,
      hasContent: false,
    }
  }

  return {
    content: evidence.content,
    hash: metadata.contentHash as string || hashContent(evidence.content),
    redactionCounts: metadata.redactionCounts as any || {
      emails: 0,
      phones: 0,
      addresses: 0,
      tokens: 0,
      total: 0,
    },
    evidenceMode,
    hasContent: true,
  }
}

