/**
 * Issue generation utilities
 * Generates Issue records with scope, affected counts, evidence pointers, and priority scores
 */

import { PrismaClient } from '@prisma/client'
import { getIssue } from '../rubric/loader'
import { CheckResult } from './checks'

const prisma = new PrismaClient()

export interface IssueGenerationData {
  issueCode: string
  scope: 'site' | 'cluster' | 'page'
  affectedCount: number
  evidencePointers: string[] // Evidence IDs
  priorityScore: number // (impact * confidence) / effort
  clusterId?: string
  pageIds?: string[]
}

/**
 * Generate issues from check results
 */
export async function generateIssues(
  scanId: string,
  checkResults: CheckResult[]
): Promise<IssueGenerationData[]> {
  const issues: IssueGenerationData[] = []

  for (const checkResult of checkResults) {
    if (!checkResult.triggered) continue

    const issueData = await generateIssueForCheck(
      scanId,
      checkResult
    )

    if (issueData) {
      issues.push(issueData)
    }
  }

  return issues
}

/**
 * Generate issue for a single check result
 */
async function generateIssueForCheck(
  scanId: string,
  checkResult: CheckResult
): Promise<IssueGenerationData | null> {
  const issueDef = getIssue(checkResult.issueCode)
  if (!issueDef) {
    console.warn(`Issue definition not found for: ${checkResult.issueCode}`)
    return null
  }

  // Determine scope
  const scope = determineScope(scanId, checkResult)

  // Get affected counts
  const affectedCount = await getAffectedCount(scanId, checkResult, scope)

  // Get evidence pointers
  const evidencePointers = await getEvidencePointers(
    scanId,
    checkResult,
    scope
  )

  // Calculate priority score
  const priorityScore = calculatePriorityScore(
    issueDef.severity,
    checkResult.score,
    affectedCount
  )

  // Get cluster/page IDs if applicable
  const { clusterId, pageIds } = await getScopeIds(scanId, checkResult, scope)

  return {
    issueCode: checkResult.issueCode,
    scope,
    affectedCount,
    evidencePointers,
    priorityScore,
    clusterId,
    pageIds,
  }
}

/**
 * Determine issue scope
 */
function determineScope(
  scanId: string,
  checkResult: CheckResult
): 'site' | 'cluster' | 'page' {
  // Site-level: affects majority of pages (> 50%)
  // Cluster-level: affects specific cluster
  // Page-level: affects individual pages

  // For now, default to site-level
  // Could be enhanced to check cluster/page patterns
  return 'site'
}

/**
 * Get affected count based on scope
 */
async function getAffectedCount(
  scanId: string,
  checkResult: CheckResult,
  scope: 'site' | 'cluster' | 'page'
): Promise<number> {
  switch (scope) {
    case 'site':
      // Count total pages in scan
      const totalPages = await prisma.page.count({
        where: { scanId },
      })
      // Use evidence metadata if available
      const evidence = checkResult.evidence[0]
      if (evidence?.metadata) {
        const metadata = evidence.metadata as Record<string, unknown>
        if (typeof metadata.totalPages === 'number') {
          const affected = metadata.totalPages - (metadata.pagesWithX as number || 0)
          return affected
        }
      }
      // Fallback: estimate based on score
      const affectedRate = (5 - checkResult.score) / 5
      return Math.round(totalPages * affectedRate)

    case 'cluster':
      // Would need cluster context
      return 1

    case 'page':
      // Count specific affected pages
      return checkResult.evidence.length

    default:
      return 0
  }
}

/**
 * Get evidence pointers (Evidence IDs)
 */
async function getEvidencePointers(
  scanId: string,
  checkResult: CheckResult,
  scope: 'site' | 'cluster' | 'page'
): Promise<string[]> {
  const evidenceIds: string[] = []

  // Find evidence records matching check result evidence
  for (const evidence of checkResult.evidence) {
    const evidenceRecords = await prisma.evidence.findMany({
      where: {
        page: { scanId },
        type: evidence.type,
      },
      take: 5, // Limit to 5 evidence records per check
      select: { id: true },
    })

    evidenceIds.push(...evidenceRecords.map((e) => e.id))
  }

  return evidenceIds
}

/**
 * Calculate priority score
 * Formula: (impact * confidence) / effort
 */
function calculatePriorityScore(
  severity: 'low' | 'medium' | 'high' | 'critical',
  checkScore: number,
  affectedCount: number
): number {
  // Impact: based on severity
  const impactMap: Record<string, number> = {
    low: 1,
    medium: 2,
    high: 3,
    critical: 4,
  }
  const impact = impactMap[severity] || 1

  // Confidence: based on check score (inverse - lower score = higher confidence issue exists)
  const confidence = (5 - checkScore) / 5 // 0-1 scale

  // Effort: estimated based on issue type (simplified)
  // Could be enhanced with effort data from rubric
  const effort = 1 // Default effort (1 = easy, higher = harder)

  const priorityScore = (impact * confidence) / effort

  return Math.round(priorityScore * 100) / 100
}

/**
 * Get scope IDs (cluster or page IDs)
 */
async function getScopeIds(
  scanId: string,
  checkResult: CheckResult,
  scope: 'site' | 'cluster' | 'page'
): Promise<{ clusterId?: string; pageIds?: string[] }> {
  if (scope === 'cluster') {
    // Get representative cluster (simplified)
    const cluster = await prisma.cluster.findFirst({
      where: { scanId },
      select: { id: true },
    })
    return { clusterId: cluster?.id }
  }

  if (scope === 'page') {
    // Get affected pages (simplified - would need better logic)
    const pages = await prisma.page.findMany({
      where: { scanId },
      take: 10, // Limit to 10 pages
      select: { id: true },
    })
    return { pageIds: pages.map((p) => p.id) }
  }

  return {}
}

/**
 * Persist issues to database
 */
export async function persistIssues(
  scanId: string,
  issues: IssueGenerationData[]
): Promise<void> {
  for (const issueData of issues) {
    const issueDef = getIssue(issueData.issueCode)
    if (!issueDef) continue

    // Check if issue exists
    const existing = await prisma.issue.findUnique({
      where: {
        scanId_issueCode: {
          scanId,
          issueCode: issueData.issueCode,
        },
      },
    })

    // Create or update issue
    const issue = existing
      ? await prisma.issue.update({
          where: { id: existing.id },
          data: {
            severity: issueDef.severity,
            title: issueDef.title,
            description: issueDef.description,
            metadata: {
              scope: issueData.scope,
              affectedCount: issueData.affectedCount,
              evidencePointers: issueData.evidencePointers,
              priorityScore: issueData.priorityScore,
              clusterId: issueData.clusterId,
              pageIds: issueData.pageIds,
            },
          },
        })
      : await prisma.issue.create({
          data: {
            scanId,
            issueCode: issueData.issueCode,
            severity: issueDef.severity,
            title: issueDef.title,
            description: issueDef.description,
            metadata: {
              scope: issueData.scope,
              affectedCount: issueData.affectedCount,
              evidencePointers: issueData.evidencePointers,
              priorityScore: issueData.priorityScore,
              clusterId: issueData.clusterId,
              pageIds: issueData.pageIds,
            },
          },
        })
      create: {
        scanId,
        issueCode: issueData.issueCode,
        severity: issueDef.severity,
        title: issueDef.title,
        description: issueDef.description,
        metadata: {
          scope: issueData.scope,
          affectedCount: issueData.affectedCount,
          evidencePointers: issueData.evidencePointers,
          priorityScore: issueData.priorityScore,
          clusterId: issueData.clusterId,
          pageIds: issueData.pageIds,
        },
      },
      update: {
        severity: issueDef.severity,
        title: issueDef.title,
        description: issueDef.description,
        metadata: {
          scope: issueData.scope,
          affectedCount: issueData.affectedCount,
          evidencePointers: issueData.evidencePointers,
          priorityScore: issueData.priorityScore,
          clusterId: issueData.clusterId,
          pageIds: issueData.pageIds,
        },
      },
    })

    // Link to pages if page-level
    if (issueData.scope === 'page' && issueData.pageIds) {
      for (const pageId of issueData.pageIds) {
        const existing = await prisma.issuePageMap.findUnique({
          where: {
            issueId_pageId: {
              issueId: issue.id,
              pageId,
            },
          },
        })

        if (!existing) {
          await prisma.issuePageMap.create({
            data: {
              issueId: issue.id,
              pageId,
            },
          })
        }
      }
    }

    // Link to cluster if cluster-level
    if (issueData.scope === 'cluster' && issueData.clusterId) {
      const existing = await prisma.issueClusterMap.findUnique({
        where: {
          issueId_clusterId: {
            issueId: issue.id,
            clusterId: issueData.clusterId,
          },
        },
      })

      if (!existing) {
        await prisma.issueClusterMap.create({
          data: {
            issueId: issue.id,
            clusterId: issueData.clusterId,
            scanId,
          },
        })
      }
    }
  }
}

