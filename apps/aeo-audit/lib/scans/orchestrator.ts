/**
 * Scan Orchestrator
 * Orchestrates the full scan pipeline: URL discovery → fetch → extract → cluster → check → report
 */

import { PrismaClient } from '@prisma/client'
import { ScanOrchestratorPayload } from '../queues/types'
import { QUEUE_NAMES } from '../queues/types'
import { addJob, generateIdempotencyKey } from '../queues'
import {
  markScanRunning,
  markScanFailed,
  markScanCompletedWithLimits,
} from './status'
import { canContinueProcessing } from '../budget/tracking'
import { getBudgetLimits } from '../budget/tracking'

const prisma = new PrismaClient()

export interface OrchestratorResult {
  success: boolean
  urlsDiscovered: number
  pagesFetched: number
  pagesExtracted: number
  clustersCreated: number
  checksRun: boolean
  reportGenerated: boolean
  error?: string
}

/**
 * Main orchestrator function
 */
export async function orchestrateScan(
  payload: ScanOrchestratorPayload
): Promise<OrchestratorResult> {
  const { scanId, domain } = payload

  try {
    // 1. Mark scan as running
    await markScanRunning(scanId)

    // 2. Check budget before starting
    const budgetLimits = await getBudgetLimits(scanId)
    const canContinue = await canContinueProcessing(scanId, 'pages')
    if (!canContinue) {
      await markScanCompletedWithLimits(scanId, { pages: true })
      return {
        success: false,
        urlsDiscovered: 0,
        pagesFetched: 0,
        pagesExtracted: 0,
        clustersCreated: 0,
        checksRun: false,
        reportGenerated: false,
        error: 'Budget limit exceeded before starting',
      }
    }

    // 3. Enqueue URL discovery
    const urlDiscoveryPayload = {
      scanId,
      domain,
      depth: 2,
      maxUrls: 200, // Will be capped by config
    }

    const urlDiscoveryIdempotencyKey = generateIdempotencyKey(scanId, 'url_discovery')
    await addJob(QUEUE_NAMES.URL_DISCOVERY, urlDiscoveryPayload, {
      idempotencyKey: urlDiscoveryIdempotencyKey,
      priority: 1,
    })

    // URL discovery will enqueue page_fetch jobs
    // Page fetch will enqueue extract_parse jobs
    // Extract parse completion will trigger cluster_build
    // Cluster build completion will trigger check_runner
    // Check runner completion will trigger report_build

    return {
      success: true,
      urlsDiscovered: 0, // Will be updated by URL discovery
      pagesFetched: 0,
      pagesExtracted: 0,
      clustersCreated: 0,
      checksRun: false,
      reportGenerated: false,
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    await markScanFailed(scanId, errorMessage, 'Orchestrator error')
    return {
      success: false,
      urlsDiscovered: 0,
      pagesFetched: 0,
      pagesExtracted: 0,
      clustersCreated: 0,
      checksRun: false,
      reportGenerated: false,
      error: errorMessage,
    }
  }
}

