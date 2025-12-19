/**
 * Report Builder
 * Finalizes scan by updating status and creating final report snapshot
 */

import { PrismaClient } from '@prisma/client'
import { ReportBuildPayload } from '../queues/types'
import {
  markScanCompleted,
  markScanFailed,
  markScanCompletedWithLimits,
} from './status'
import { getBudgetLimits } from '../budget/tracking'

const prisma = new PrismaClient()

export interface ReportBuildResult {
  success: boolean
  reportId: string
  scanStatus: string
  error?: string
}

/**
 * Build final report and mark scan as completed
 */
export async function buildReport(
  payload: ReportBuildPayload
): Promise<ReportBuildResult> {
  const { scanId, reportId } = payload

  try {
    // Get scan to check budget limits
    const scan = await prisma.scan.findUnique({
      where: { id: scanId },
      select: {
        id: true,
        status: true,
        budgetLimits: true,
      },
    })

    if (!scan) {
      throw new Error(`Scan ${scanId} not found`)
    }

    // Check if report exists
    const report = await prisma.report.findUnique({
      where: { id: reportId },
    })

    if (!report) {
      throw new Error(`Report ${reportId} not found`)
    }

    // Check budget limits
    const budgetLimits = await getBudgetLimits(scanId)
    const hasLimits = budgetLimits.pages || budgetLimits.renders || budgetLimits.llmCalls || budgetLimits.tokens

    // Mark scan as completed (with or without limits)
    if (hasLimits) {
      await markScanCompletedWithLimits(scanId, {
        pages: budgetLimits.pages || false,
        renders: budgetLimits.renders || false,
        llmCalls: budgetLimits.llmCalls || false,
        tokens: budgetLimits.tokens || false,
      })
    } else {
      await markScanCompleted(scanId)
    }

    return {
      success: true,
      reportId: report.id,
      scanStatus: hasLimits ? 'completed_with_limits' : 'completed',
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    await markScanFailed(scanId, errorMessage, 'Report build error')
    return {
      success: false,
      reportId: '',
      scanStatus: 'failed',
      error: errorMessage,
    }
  }
}

