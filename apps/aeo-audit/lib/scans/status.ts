/**
 * Scan status transition utilities
 * Manages scan lifecycle and status updates
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export type ScanStatus = 'pending' | 'running' | 'completed' | 'failed' | 'completed_with_limits'

export interface StatusUpdateOptions {
  error?: string
  failureReason?: string
  budgetLimits?: {
    pages?: boolean
    renders?: boolean
    llmCalls?: boolean
    tokens?: boolean
  }
}

/**
 * Update scan status with proper transitions
 */
export async function updateScanStatus(
  scanId: string,
  status: ScanStatus,
  options: StatusUpdateOptions = {}
): Promise<void> {
  const updateData: {
    status: ScanStatus
    startedAt?: Date
    completedAt?: Date
    metadata?: Record<string, unknown>
  } = {
    status,
  }

  // Set startedAt when transitioning to running
  if (status === 'running') {
    updateData.startedAt = new Date()
  }

  // Set completedAt when transitioning to completed/failed/completed_with_limits
  if (['completed', 'failed', 'completed_with_limits'].includes(status)) {
    updateData.completedAt = new Date()
  }

  // Update metadata with error/failure info
  const existingScan = await prisma.scan.findUnique({
    where: { id: scanId },
    select: { metadata: true, budgetLimits: true },
  })

  const existingMetadata = (existingScan?.metadata as Record<string, unknown>) || {}
  const existingBudgetLimits = (existingScan?.budgetLimits as Record<string, boolean>) || {}

  const newMetadata: Record<string, unknown> = {
    ...existingMetadata,
  }

  if (options.error) {
    newMetadata.lastError = options.error
    newMetadata.lastErrorAt = new Date().toISOString()
  }

  if (options.failureReason) {
    newMetadata.failureReason = options.failureReason
  }

  if (options.budgetLimits) {
    const budgetLimits = {
      ...existingBudgetLimits,
      ...options.budgetLimits,
    }
    updateData.metadata = {
      ...newMetadata,
      budgetLimits,
    }
    // Also update budgetLimits field directly
    await prisma.scan.update({
      where: { id: scanId },
      data: {
        ...updateData,
        budgetLimits,
      },
    })
    return
  }

  if (Object.keys(newMetadata).length > 0) {
    updateData.metadata = newMetadata
  }

  await prisma.scan.update({
    where: { id: scanId },
    data: updateData,
  })
}

/**
 * Mark scan as running
 */
export async function markScanRunning(scanId: string): Promise<void> {
  await updateScanStatus(scanId, 'running')
}

/**
 * Mark scan as completed
 */
export async function markScanCompleted(scanId: string): Promise<void> {
  await updateScanStatus(scanId, 'completed')
}

/**
 * Mark scan as failed
 */
export async function markScanFailed(
  scanId: string,
  error: string,
  failureReason?: string
): Promise<void> {
  await updateScanStatus(scanId, 'failed', {
    error,
    failureReason: failureReason || error,
  })
}

/**
 * Mark scan as completed with limits
 */
export async function markScanCompletedWithLimits(
  scanId: string,
  budgetLimits: StatusUpdateOptions['budgetLimits']
): Promise<void> {
  await updateScanStatus(scanId, 'completed_with_limits', {
    budgetLimits,
  })
}

