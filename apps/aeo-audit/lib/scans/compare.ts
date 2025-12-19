/**
 * Compare Scans - Compute diff between two scans
 */

import { PrismaClient } from '@prisma/client'
import { diffIssues, diffClusters, ScoreDelta, IssueDelta, ClusterDelta } from '../monitoring/diff'

const prisma = new PrismaClient()

export interface ScanCompareResult {
  fromScanId: string
  toScanId: string
  fromScan: {
    id: string
    targetUrl: string
    createdAt: Date
    completedAt: Date | null
  }
  toScan: {
    id: string
    targetUrl: string
    createdAt: Date
    completedAt: Date | null
  }
  overallScoreDelta: number
  overallScoreDeltaPercent: number
  fromOverallScore: number
  toOverallScore: number
  pillarScoreDeltas: ScoreDelta[]
  newIssues: IssueDelta[]
  resolvedIssues: IssueDelta[]
  regressedClusters: ClusterDelta[]
  improvedClusters: ClusterDelta[]
  newClusters: ClusterDelta[]
  removedClusters: ClusterDelta[]
  pageCountDelta: number
}

/**
 * Compute diff between two scans
 */
export async function computeDiff(
  fromScanId: string,
  toScanId: string
): Promise<ScanCompareResult> {
  // Get both scans
  const fromScan = await prisma.scan.findUnique({
    where: { id: fromScanId },
  })

  const toScan = await prisma.scan.findUnique({
    where: { id: toScanId },
  })

  if (!fromScan || !toScan) {
    throw new Error('One or both scans not found')
  }

  // Get reports for both scans
  const fromReport = await prisma.report.findFirst({
    where: { scanId: fromScanId },
    orderBy: { createdAt: 'desc' },
  })

  const toReport = await prisma.report.findFirst({
    where: { scanId: toScanId },
    orderBy: { createdAt: 'desc' },
  })

  if (!fromReport || !toReport) {
    throw new Error('One or both scans missing reports')
  }

  // Extract scores
  const fromOverallScore = fromReport.overallScore
  const toOverallScore = toReport.overallScore
  const overallScoreDelta = toOverallScore - fromOverallScore
  const overallScoreDeltaPercent =
    fromOverallScore > 0 ? (overallScoreDelta / fromOverallScore) * 100 : 0

  // Extract pillar scores
  const fromPillarScores = fromReport.pillarScores as Record<string, number>
  const toPillarScores = toReport.pillarScores as Record<string, number>

  const pillarScoreDeltas: ScoreDelta[] = []
  const allPillarIds = new Set([
    ...Object.keys(fromPillarScores),
    ...Object.keys(toPillarScores),
  ])

  for (const pillarId of allPillarIds) {
    const previousScore = fromPillarScores[pillarId] || 0
    const currentScore = toPillarScores[pillarId] || 0
    const delta = currentScore - previousScore
    const deltaPercent = previousScore > 0 ? (delta / previousScore) * 100 : 0

    pillarScoreDeltas.push({
      pillarId,
      previousScore,
      currentScore,
      delta,
      deltaPercent,
    })
  }

  // Get issue diffs
  const issueDiff = await diffIssues(fromScanId, toScanId, prisma)

  // Get cluster diffs
  const clusterDeltas = await diffClusters(fromScanId, toScanId, prisma)

  // Categorize clusters
  const regressedClusters = clusterDeltas.filter((c) => c.status === 'regressed')
  const improvedClusters = clusterDeltas.filter((c) => c.status === 'improved')
  const newClusters = clusterDeltas.filter((c) => c.status === 'new')
  const removedClusters = clusterDeltas.filter((c) => c.status === 'removed')

  // Get page count delta
  const fromPageCount = await prisma.page.count({
    where: { scanId: fromScanId },
  })

  const toPageCount = await prisma.page.count({
    where: { scanId: toScanId },
  })

  const pageCountDelta = toPageCount - fromPageCount

  return {
    fromScanId,
    toScanId,
    fromScan: {
      id: fromScan.id,
      targetUrl: fromScan.targetUrl,
      createdAt: fromScan.createdAt,
      completedAt: fromScan.completedAt,
    },
    toScan: {
      id: toScan.id,
      targetUrl: toScan.targetUrl,
      createdAt: toScan.createdAt,
      completedAt: toScan.completedAt,
    },
    overallScoreDelta,
    overallScoreDeltaPercent,
    fromOverallScore,
    toOverallScore,
    pillarScoreDeltas,
    newIssues: issueDiff.newIssues,
    resolvedIssues: issueDiff.resolvedIssues,
    regressedClusters,
    improvedClusters,
    newClusters,
    removedClusters,
    pageCountDelta,
    fromPageCount,
    toPageCount,
  }
}

/**
 * Get changed URLs for a specific issue between two scans
 */
export async function getChangedUrlsForIssue(
  fromScanId: string,
  toScanId: string,
  issueCode: string
): Promise<{ url: string; status: 'new' | 'resolved' | 'unchanged' }[]> {
  // Get issues with this code from both scans
  const fromIssue = await prisma.issue.findFirst({
    where: {
      scanId: fromScanId,
      issueCode,
    },
    include: {
      issuePages: {
        include: {
          page: true,
        },
      },
      issueClusters: {
        include: {
          cluster: {
            include: {
              clusterPages: {
                include: {
                  page: true,
                },
              },
            },
          },
        },
      },
    },
  })

  const toIssue = await prisma.issue.findFirst({
    where: {
      scanId: toScanId,
      issueCode,
    },
    include: {
      issuePages: {
        include: {
          page: true,
        },
      },
      issueClusters: {
        include: {
          cluster: {
            include: {
              clusterPages: {
                include: {
                  page: true,
                },
              },
            },
          },
        },
      },
    },
  })

  const fromUrls = new Set<string>()
  const toUrls = new Set<string>()

  // Collect URLs from "from" scan
  if (fromIssue) {
    // Page-level URLs
    fromIssue.issuePages.forEach((ip: any) => {
      fromUrls.add(ip.page.url)
    })

    // Cluster-level URLs
    fromIssue.issueClusters.forEach((ic: any) => {
      ic.cluster.clusterPages.forEach((cp: any) => {
        fromUrls.add(cp.page.url)
      })
    })
  }

  // Collect URLs from "to" scan
  if (toIssue) {
    // Page-level URLs
    toIssue.issuePages.forEach((ip: any) => {
      toUrls.add(ip.page.url)
    })

    // Cluster-level URLs
    toIssue.issueClusters.forEach((ic: any) => {
      ic.cluster.clusterPages.forEach((cp: any) => {
        toUrls.add(cp.page.url)
      })
    })
  }

  // Build result
  const result: { url: string; status: 'new' | 'resolved' | 'unchanged' }[] = []

  // URLs in "to" but not in "from" = new
  for (const url of toUrls) {
    if (!fromUrls.has(url)) {
      result.push({ url, status: 'new' })
    } else {
      result.push({ url, status: 'unchanged' })
    }
  }

  // URLs in "from" but not in "to" = resolved
  for (const url of fromUrls) {
    if (!toUrls.has(url)) {
      result.push({ url, status: 'resolved' })
    }
  }

  return result
}

