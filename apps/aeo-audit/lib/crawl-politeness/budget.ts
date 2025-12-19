/**
 * Scan budget management
 * Tracks time limit and page limit for scans
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Budget configuration
 */
export interface BudgetConfig {
  maxPages: number // Maximum pages to process
  maxTimeMs: number // Maximum time in milliseconds
  scanId: string
}

/**
 * Check if scan is within budget
 */
export interface BudgetCheck {
  withinBudget: boolean
  pagesRemaining: number
  timeRemaining: number
  reason?: string
}

/**
 * Get scan budget status
 */
export async function checkBudget(
  config: BudgetConfig
): Promise<BudgetCheck> {
  const scan = await prisma.scan.findUnique({
    where: { id: config.scanId },
    select: {
      createdAt: true,
      startedAt: true,
    },
  })

  if (!scan) {
    return {
      withinBudget: false,
      pagesRemaining: 0,
      timeRemaining: 0,
      reason: 'Scan not found',
    }
  }

  // Count pages processed
  const pagesProcessed = await prisma.page.count({
    where: { scanId: config.scanId },
  })

  // Calculate time elapsed
  const startTime = scan.startedAt || scan.createdAt
  const elapsedMs = Date.now() - startTime.getTime()

  // Check page limit
  const pagesRemaining = Math.max(0, config.maxPages - pagesProcessed)
  const pageLimitExceeded = pagesProcessed >= config.maxPages

  // Check time limit
  const timeRemaining = Math.max(0, config.maxTimeMs - elapsedMs)
  const timeLimitExceeded = elapsedMs >= config.maxTimeMs

  if (pageLimitExceeded) {
    return {
      withinBudget: false,
      pagesRemaining: 0,
      timeRemaining,
      reason: `Page limit exceeded: ${pagesProcessed}/${config.maxPages}`,
    }
  }

  if (timeLimitExceeded) {
    return {
      withinBudget: false,
      pagesRemaining,
      timeRemaining: 0,
      reason: `Time limit exceeded: ${Math.round(elapsedMs / 1000)}s/${Math.round(config.maxTimeMs / 1000)}s`,
    }
  }

  return {
    withinBudget: true,
    pagesRemaining,
    timeRemaining,
  }
}

/**
 * Get default budget from config
 */
export function getDefaultBudget(scanId: string): BudgetConfig {
  // Import config dynamically to avoid circular dependency
  const maxPages = parseInt(process.env.MAX_PAGES || '200', 10)
  const maxTimeMinutes = parseInt(process.env.MAX_SCAN_TIME_MINUTES || '60', 10)
  
  return {
    scanId,
    maxPages,
    maxTimeMs: maxTimeMinutes * 60 * 1000,
  }
}

