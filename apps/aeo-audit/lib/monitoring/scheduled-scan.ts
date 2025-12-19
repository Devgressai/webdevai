/**
 * Scheduled scan job handler
 */

import { PrismaClient } from '@prisma/client'
import { ScheduledScanPayload } from '../queues/types'
import { addJob } from '../queues/factory'
import { QUEUE_NAMES } from '../queues/types'
import { createScanSnapshot } from './snapshot'
import { getPreviousSnapshot, getLatestSnapshot } from './snapshot'
import { diffScans } from './diff'
import { evaluateAlertRules } from './alerts'

const prisma = new PrismaClient()

export interface ScheduledScanResult {
  success: boolean
  scanId: string
  snapshotId: string
  diffGenerated: boolean
  alertsCreated: number
  error?: string
}

/**
 * Handle scheduled scan job
 */
export async function handleScheduledScan(
  payload: ScheduledScanPayload
): Promise<ScheduledScanResult> {
  const { domainId, domain } = payload

  try {
    // 1. Create new scan
    const scan = await prisma.scan.create({
      data: {
        targetUrl: `https://${domain}`,
        domainId,
        status: 'pending',
        metadata: {
          scheduled: true,
          scheduledAt: new Date().toISOString(),
        },
      },
    })

    // 2. Enqueue scan_orchestrator job
    await addJob(
      QUEUE_NAMES.SCAN_ORCHESTRATOR,
      {
        scanId: scan.id,
        domain,
      },
      {
        priority: 1,
      }
    )

    // Note: Snapshot and diff will be created after scan completes
    // This is handled by the report_build job or a separate completion handler

    return {
      success: true,
      scanId: scan.id,
      snapshotId: '',
      diffGenerated: false,
      alertsCreated: 0,
    }
  } catch (error) {
    return {
      success: false,
      scanId: '',
      snapshotId: '',
      diffGenerated: false,
      alertsCreated: 0,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Process scan completion (create snapshot, diff, alerts)
 * Called after scan completes
 */
export async function processScanCompletion(scanId: string): Promise<void> {
  try {
    // 1. Create snapshot
    const snapshotId = await createScanSnapshot(scanId)

    // 2. Get scan and domain
    const scan = await prisma.scan.findUnique({
      where: { id: scanId },
      select: { domainId: true },
    })

    if (!scan || !scan.domainId) {
      return // No domain, skip diff/alerts
    }

    // 3. Get snapshots for diff
    const currentSnapshot = await getLatestSnapshot(scan.domainId)
    const previousSnapshot = await getPreviousSnapshot(scan.domainId, scanId)

    if (!currentSnapshot) {
      return // No snapshot created
    }

    // 4. Get previous scan ID
    const previousScan = await prisma.scan.findFirst({
      where: {
        domainId: scan.domainId,
        status: 'completed',
        id: { not: scanId },
      },
      orderBy: { completedAt: 'desc' },
      select: { id: true },
    })

    // 5. Generate diff
    const diff = await diffScans(
      previousScan?.id || null,
      scanId,
      previousSnapshot,
      currentSnapshot,
      prisma
    )

    // 6. Evaluate alert rules
    await evaluateAlertRules({
      scanId,
      domainId: scan.domainId,
      diff,
      currentScore: currentSnapshot.overallScore,
      previousScore: previousSnapshot?.overallScore || null,
    })
  } catch (error) {
    console.error(`Error processing scan completion for ${scanId}:`, error)
    // Don't throw - allow scan to complete even if monitoring fails
  }
}

