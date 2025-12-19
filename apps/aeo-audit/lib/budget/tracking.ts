/**
 * Budget tracking and accounting
 * Tracks pages, renders, LLM calls, and tokens per scan
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Budget limits configuration
 */
export interface BudgetLimits {
  maxPages: number
  maxRenders: number
  maxLlmCalls: number
  maxTokensPerCall: number
}

/**
 * Budget accounting result
 */
export interface BudgetAccounting {
  pagesFetched: number
  pagesRendered: number
  llmCalls: number
  estTokens: number
  limitsHit: {
    pages: boolean
    renders: boolean
    llmCalls: boolean
    tokens: boolean
  }
  withinBudget: boolean
}

/**
 * Get budget limits from config
 */
export function getBudgetLimits(): BudgetLimits {
  // Import config dynamically to avoid circular dependency
  try {
    const { config } = require('@/src/config')
    return {
      maxPages: config.budget.maxPages(),
      maxRenders: config.budget.maxRenders(),
      maxLlmCalls: config.budget.maxLlmCalls(),
      maxTokensPerCall: config.budget.maxTokensPerCall(),
    }
  } catch {
    // Fallback to env vars if config not available
    const maxPages = parseInt(process.env.MAX_PAGES || '200', 10)
    const maxRenders = parseInt(process.env.MAX_RENDERS || '10', 10)
    const maxLlmCalls = parseInt(process.env.MAX_LLM_CALLS || '50', 10)
    const maxTokensPerCall = parseInt(process.env.MAX_TOKENS_PER_CALL || '10000', 10)

    return {
      maxPages,
      maxRenders,
      maxLlmCalls,
      maxTokensPerCall,
    }
  }
}

/**
 * Get current budget accounting for a scan
 */
export async function getBudgetAccounting(scanId: string): Promise<BudgetAccounting> {
  const scan = await prisma.scan.findUnique({
    where: { id: scanId },
    select: {
      pagesFetched: true,
      pagesRendered: true,
      llmCalls: true,
      estTokens: true,
      budgetLimits: true,
    },
  })

  if (!scan) {
    throw new Error(`Scan ${scanId} not found`)
  }

  const limits = getBudgetLimits()
  const limitsHit = (scan.budgetLimits as Record<string, boolean>) || {}

  return {
    pagesFetched: scan.pagesFetched,
    pagesRendered: scan.pagesRendered,
    llmCalls: scan.llmCalls,
    estTokens: scan.estTokens,
    limitsHit: {
      pages: limitsHit.pages || false,
      renders: limitsHit.renders || false,
      llmCalls: limitsHit.llmCalls || false,
      tokens: limitsHit.tokens || false,
    },
    withinBudget:
      scan.pagesFetched < limits.maxPages &&
      scan.pagesRendered < limits.maxRenders &&
      scan.llmCalls < limits.maxLlmCalls,
  }
}

/**
 * Increment pages fetched
 */
export async function incrementPagesFetched(scanId: string): Promise<boolean> {
  const limits = getBudgetLimits()
  const accounting = await getBudgetAccounting(scanId)

  if (accounting.pagesFetched >= limits.maxPages) {
    await markLimitHit(scanId, 'pages')
    return false
  }

  await prisma.scan.update({
    where: { id: scanId },
    data: {
      pagesFetched: {
        increment: 1,
      },
    },
  })

  return true
}

/**
 * Increment pages rendered
 */
export async function incrementPagesRendered(scanId: string): Promise<boolean> {
  const limits = getBudgetLimits()
  const accounting = await getBudgetAccounting(scanId)

  if (accounting.pagesRendered >= limits.maxRenders) {
    await markLimitHit(scanId, 'renders')
    return false
  }

  await prisma.scan.update({
    where: { id: scanId },
    data: {
      pagesRendered: {
        increment: 1,
      },
    },
  })

  return true
}

/**
 * Increment LLM calls and tokens
 */
export async function incrementLlmCall(
  scanId: string,
  estimatedTokens: number
): Promise<boolean> {
  const limits = getBudgetLimits()
  const accounting = await getBudgetAccounting(scanId)

  // Check LLM call limit
  if (accounting.llmCalls >= limits.maxLlmCalls) {
    await markLimitHit(scanId, 'llmCalls')
    return false
  }

  // Truncate tokens if over limit
  const tokensToAdd = Math.min(estimatedTokens, limits.maxTokensPerCall)

  await prisma.scan.update({
    where: { id: scanId },
    data: {
      llmCalls: {
        increment: 1,
      },
      estTokens: {
        increment: tokensToAdd,
      },
    },
  })

  return true
}

/**
 * Mark a limit as hit
 */
async function markLimitHit(
  scanId: string,
  limitType: 'pages' | 'renders' | 'llmCalls' | 'tokens'
): Promise<void> {
  const scan = await prisma.scan.findUnique({
    where: { id: scanId },
    select: { budgetLimits: true },
  })

  if (!scan) {
    return
  }

  const limitsHit = (scan.budgetLimits as Record<string, boolean>) || {}
  limitsHit[limitType] = true

  await prisma.scan.update({
    where: { id: scanId },
    data: {
      budgetLimits: limitsHit,
      status: 'completed_with_limits',
    },
  })
}

/**
 * Check if scan should continue processing
 */
export async function canContinueProcessing(scanId: string): Promise<{
  canContinue: boolean
  reason?: string
}> {
  const limits = getBudgetLimits()
  const accounting = await getBudgetAccounting(scanId)

  if (accounting.pagesFetched >= limits.maxPages) {
    return {
      canContinue: false,
      reason: `Page limit exceeded: ${accounting.pagesFetched}/${limits.maxPages}`,
    }
  }

  if (accounting.pagesRendered >= limits.maxRenders) {
    return {
      canContinue: false,
      reason: `Render limit exceeded: ${accounting.pagesRendered}/${limits.maxRenders}`,
    }
  }

  if (accounting.llmCalls >= limits.maxLlmCalls) {
    return {
      canContinue: false,
      reason: `LLM call limit exceeded: ${accounting.llmCalls}/${limits.maxLlmCalls}`,
    }
  }

  return { canContinue: true }
}

/**
 * Estimate tokens for text (rough approximation: 1 token ≈ 4 characters)
 */
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4)
}

/**
 * Truncate text to fit within token limit deterministically
 */
export function truncateToTokenLimit(text: string, maxTokens: number): string {
  const maxChars = maxTokens * 4 // Rough approximation
  if (text.length <= maxChars) {
    return text
  }

  // Truncate at word boundary if possible
  const truncated = text.substring(0, maxChars)
  const lastSpace = truncated.lastIndexOf(' ')
  if (lastSpace > maxChars * 0.9) {
    // If we can find a space near the end, use it
    return truncated.substring(0, lastSpace) + '...'
  }

  return truncated + '...'
}

