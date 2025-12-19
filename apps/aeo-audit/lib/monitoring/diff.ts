/**
 * Diff engine for comparing scan snapshots
 */

import { SnapshotData } from './snapshot'

export interface ScoreDelta {
  pillarId: string
  previousScore: number
  currentScore: number
  delta: number
  deltaPercent: number
}

export interface IssueDelta {
  issueCode: string
  issueId: string
  status: 'new' | 'resolved' | 'unchanged'
  severity: string
  title: string
}

export interface ClusterDelta {
  clusterId: string
  clusterName: string
  status: 'new' | 'removed' | 'regressed' | 'improved'
  pageCountDelta: number
  metrics?: Record<string, number>
}

export interface ScanDiff {
  overallScoreDelta: number
  overallScoreDeltaPercent: number
  scoreDeltas: ScoreDelta[]
  newIssues: IssueDelta[]
  resolvedIssues: IssueDelta[]
  clusterDeltas: ClusterDelta[]
  pageCountDelta: number
}

/**
 * Compare two scan snapshots
 */
export function diffSnapshots(
  previous: SnapshotData | null,
  current: SnapshotData
): ScanDiff {
  if (!previous) {
    // First scan - no previous to compare
    return {
      overallScoreDelta: 0,
      overallScoreDeltaPercent: 0,
      scoreDeltas: [],
      newIssues: [],
      resolvedIssues: [],
      clusterDeltas: [],
      pageCountDelta: 0,
    }
  }

  // Overall score delta
  const overallScoreDelta = current.overallScore - previous.overallScore
  const overallScoreDeltaPercent =
    previous.overallScore > 0
      ? (overallScoreDelta / previous.overallScore) * 100
      : 0

  // Pillar score deltas
  const scoreDeltas: ScoreDelta[] = []
  const allPillarIds = new Set([
    ...Object.keys(previous.pillarScores),
    ...Object.keys(current.pillarScores),
  ])

  for (const pillarId of allPillarIds) {
    const previousScore = previous.pillarScores[pillarId] || 0
    const currentScore = current.pillarScores[pillarId] || 0
    const delta = currentScore - previousScore
    const deltaPercent = previousScore > 0 ? (delta / previousScore) * 100 : 0

    scoreDeltas.push({
      pillarId,
      previousScore,
      currentScore,
      delta,
      deltaPercent,
    })
  }

  // Page count delta
  const pageCountDelta = current.pageCount - previous.pageCount

  return {
    overallScoreDelta,
    overallScoreDeltaPercent,
    scoreDeltas,
    newIssues: [], // Will be populated by comparing actual issues
    resolvedIssues: [], // Will be populated by comparing actual issues
    clusterDeltas: [], // Will be populated by comparing clusters
    pageCountDelta,
  }
}

/**
 * Compare issues between scans
 */
export async function diffIssues(
  previousScanId: string | null,
  currentScanId: string,
  prisma: any
): Promise<{ newIssues: IssueDelta[]; resolvedIssues: IssueDelta[] }> {
  if (!previousScanId) {
    // Get all issues from current scan
    const currentIssues = await prisma.issue.findMany({
      where: { scanId: currentScanId },
      select: {
        id: true,
        issueCode: true,
        severity: true,
        title: true,
      },
    })

    return {
      newIssues: currentIssues.map((issue: any) => ({
        issueCode: issue.issueCode,
        issueId: issue.id,
        status: 'new' as const,
        severity: issue.severity,
        title: issue.title,
      })),
      resolvedIssues: [],
    }
  }

  // Get issues from both scans
  const previousIssues = await prisma.issue.findMany({
    where: { scanId: previousScanId },
    select: { issueCode: true },
  })

  const currentIssues = await prisma.issue.findMany({
    where: { scanId: currentScanId },
    select: {
      id: true,
      issueCode: true,
      severity: true,
      title: true,
    },
  })

  const previousIssueCodes = new Set(previousIssues.map((i: any) => i.issueCode))
  const currentIssueCodes = new Set(currentIssues.map((i: any) => i.issueCode))

  // New issues (in current but not in previous)
  const newIssues: IssueDelta[] = currentIssues
    .filter((issue: any) => !previousIssueCodes.has(issue.issueCode))
    .map((issue: any) => ({
      issueCode: issue.issueCode,
      issueId: issue.id,
      status: 'new' as const,
      severity: issue.severity,
      title: issue.title,
    }))

  // Resolved issues (in previous but not in current)
  const resolvedIssues: IssueDelta[] = previousIssues
    .filter((issue: any) => !currentIssueCodes.has(issue.issueCode))
    .map((issue: any) => ({
      issueCode: issue.issueCode,
      issueId: '',
      status: 'resolved' as const,
      severity: '',
      title: '',
    }))

  return { newIssues, resolvedIssues }
}

/**
 * Compare clusters between scans
 */
export async function diffClusters(
  previousScanId: string | null,
  currentScanId: string,
  prisma: any
): Promise<ClusterDelta[]> {
  if (!previousScanId) {
    // Get all clusters from current scan
    const currentClusters = await prisma.cluster.findMany({
      where: { scanId: currentScanId },
      include: {
        clusterPages: true,
      },
    })

    return currentClusters.map((cluster: any) => ({
      clusterId: cluster.id,
      clusterName: cluster.name,
      status: 'new' as const,
      pageCountDelta: cluster.clusterPages.length,
    }))
  }

  // Get clusters from both scans
  const previousClusters = await prisma.cluster.findMany({
    where: { scanId: previousScanId },
    include: {
      clusterPages: true,
    },
  })

  const currentClusters = await prisma.cluster.findMany({
    where: { scanId: currentScanId },
    include: {
      clusterPages: true,
    },
  })

  const previousClusterIds = new Set(previousClusters.map((c: any) => c.clusterId))
  const currentClusterIds = new Set(currentClusters.map((c: any) => c.clusterId))

  const deltas: ClusterDelta[] = []

  // New clusters
  for (const cluster of currentClusters) {
    if (!previousClusterIds.has(cluster.clusterId)) {
      deltas.push({
        clusterId: cluster.clusterId,
        clusterName: cluster.name,
        status: 'new',
        pageCountDelta: cluster.clusterPages.length,
      })
    }
  }

  // Removed clusters
  for (const cluster of previousClusters) {
    if (!currentClusterIds.has(cluster.clusterId)) {
      deltas.push({
        clusterId: cluster.clusterId,
        clusterName: cluster.name,
        status: 'removed',
        pageCountDelta: -cluster.clusterPages.length,
      })
    }
  }

  // Changed clusters (compare by clusterId)
  const previousClusterMap = new Map(
    previousClusters.map((c: any) => [c.clusterId, c])
  )

  for (const currentCluster of currentClusters) {
    const previousCluster = previousClusterMap.get(currentCluster.clusterId)
    if (previousCluster) {
      const pageCountDelta =
        currentCluster.clusterPages.length - previousCluster.clusterPages.length

      // Determine if regressed or improved (simplified - could be enhanced)
      const status: 'regressed' | 'improved' =
        pageCountDelta < 0 ? 'regressed' : 'improved'

      deltas.push({
        clusterId: currentCluster.clusterId,
        clusterName: currentCluster.name,
        status,
        pageCountDelta,
      })
    }
  }

  return deltas
}

/**
 * Complete diff between two scans
 */
export async function diffScans(
  previousScanId: string | null,
  currentScanId: string,
  previousSnapshot: SnapshotData | null,
  currentSnapshot: SnapshotData,
  prisma: any
): Promise<ScanDiff> {
  // Get snapshot diff
  const snapshotDiff = diffSnapshots(previousSnapshot, currentSnapshot)

  // Get issue diff
  const issueDiff = await diffIssues(previousScanId, currentScanId, prisma)

  // Get cluster diff
  const clusterDeltas = await diffClusters(previousScanId, currentScanId, prisma)

  return {
    ...snapshotDiff,
    newIssues: issueDiff.newIssues,
    resolvedIssues: issueDiff.resolvedIssues,
    clusterDeltas,
  }
}

