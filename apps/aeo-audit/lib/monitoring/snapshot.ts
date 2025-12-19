/**
 * Scan snapshot utilities
 * Creates immutable snapshots of scan state
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface SnapshotData {
  overallScore: number
  pillarScores: Record<string, number>
  issueCounts: {
    critical: number
    high: number
    medium: number
    low: number
    total: number
  }
  clusterCounts: {
    total: number
    byType: Record<string, number>
  }
  pageCount: number
  timestamp: string
}

/**
 * Create immutable snapshot of scan state
 */
export async function createScanSnapshot(scanId: string): Promise<string> {
  // Get latest report
  const report = await prisma.report.findFirst({
    where: { scanId },
    orderBy: { createdAt: 'desc' },
  })

  if (!report) {
    throw new Error(`No report found for scan ${scanId}`)
  }

  // Get issue counts
  const issues = await prisma.issue.findMany({
    where: { scanId },
    select: { severity: true },
  })

  const issueCounts = {
    critical: issues.filter((i) => i.severity === 'critical').length,
    high: issues.filter((i) => i.severity === 'high').length,
    medium: issues.filter((i) => i.severity === 'medium').length,
    low: issues.filter((i) => i.severity === 'low').length,
    total: issues.length,
  }

  // Get cluster counts
  const clusters = await prisma.cluster.findMany({
    where: { scanId },
    select: { type: true },
  })

  const clusterCounts = {
    total: clusters.length,
    byType: clusters.reduce((acc, c) => {
      acc[c.type] = (acc[c.type] || 0) + 1
      return acc
    }, {} as Record<string, number>),
  }

  // Get page count
  const pageCount = await prisma.page.count({
    where: { scanId },
  })

  // Extract pillar scores from report
  const reportScores = report.scores as {
    pillars?: Array<{
      pillarId: string
      score: number
    }>
  }

  const pillarScores: Record<string, number> = {}
  if (reportScores.pillars) {
    for (const pillar of reportScores.pillars) {
      pillarScores[pillar.pillarId] = pillar.score
    }
  }

  // Build snapshot data
  const snapshotData: SnapshotData = {
    overallScore: report.overallScore,
    pillarScores,
    issueCounts,
    clusterCounts,
    pageCount,
    timestamp: new Date().toISOString(),
  }

  // Create snapshot record
  const snapshot = await prisma.scanSnapshot.create({
    data: {
      scanId,
      snapshotData: snapshotData as any,
      overallScore: report.overallScore,
      pillarScores: pillarScores as any,
      issueCounts: issueCounts as any,
      clusterCounts: clusterCounts as any,
      metadata: {
        reportId: report.id,
        rubricVersion: report.rubricVersion,
        siteType: report.siteType,
      },
    },
  })

  return snapshot.id
}

/**
 * Get latest snapshot for a domain
 */
export async function getLatestSnapshot(domainId: string): Promise<SnapshotData | null> {
  const scan = await prisma.scan.findFirst({
    where: {
      domainId,
      status: 'completed',
    },
    include: {
      snapshots: {
        orderBy: { createdAt: 'desc' },
        take: 1,
      },
    },
    orderBy: { completedAt: 'desc' },
  })

  if (!scan || scan.snapshots.length === 0) {
    return null
  }

  return scan.snapshots[0].snapshotData as SnapshotData
}

/**
 * Get previous snapshot for comparison
 */
export async function getPreviousSnapshot(
  domainId: string,
  currentScanId: string
): Promise<SnapshotData | null> {
  // Get current scan
  const currentScan = await prisma.scan.findUnique({
    where: { id: currentScanId },
  })

  if (!currentScan) {
    return null
  }

  // Get previous completed scan for same domain
  const previousScan = await prisma.scan.findFirst({
    where: {
      domainId,
      status: 'completed',
      completedAt: {
        lt: currentScan.completedAt || currentScan.createdAt,
      },
    },
    include: {
      snapshots: {
        orderBy: { createdAt: 'desc' },
        take: 1,
      },
    },
    orderBy: { completedAt: 'desc' },
  })

  if (!previousScan || previousScan.snapshots.length === 0) {
    return null
  }

  return previousScan.snapshots[0].snapshotData as SnapshotData
}

