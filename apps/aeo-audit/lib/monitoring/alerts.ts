/**
 * Alert rule evaluation and storage
 */

import { PrismaClient } from '@prisma/client'
import { ScanDiff, ScoreDelta } from './diff'

const prisma = new PrismaClient()

export interface AlertContext {
  scanId: string
  domainId: string
  diff: ScanDiff
  currentScore: number
  previousScore: number | null
}

/**
 * Evaluate alert rules and create alerts
 */
export async function evaluateAlertRules(
  context: AlertContext
): Promise<void> {
  const { domainId, diff, currentScore, previousScore } = context

  // Get enabled alert rules for domain
  const rules = await prisma.alertRule.findMany({
    where: {
      domainId,
      enabled: true,
    },
  })

  for (const rule of rules) {
    const shouldTrigger = evaluateRule(rule, diff, currentScore, previousScore)

    if (shouldTrigger) {
      await createAlert(rule, context)
    }
  }
}

/**
 * Evaluate a single alert rule
 */
function evaluateRule(
  rule: any,
  diff: ScanDiff,
  currentScore: number,
  previousScore: number | null
): boolean {
  const threshold = (rule.threshold as Record<string, unknown>) || {}

  switch (rule.ruleType) {
    case 'score_drop':
      if (previousScore === null) return false
      const dropAmount = threshold.dropAmount as number || 5
      const dropPercent = threshold.dropPercent as number || 10
      const actualDrop = previousScore - currentScore
      const actualDropPercent =
        previousScore > 0 ? (actualDrop / previousScore) * 100 : 0
      return actualDrop >= dropAmount || actualDropPercent >= dropPercent

    case 'new_issue':
      const minSeverity = (threshold.minSeverity as string) || 'medium'
      const severityOrder = { critical: 4, high: 3, medium: 2, low: 1 }
      const minSeverityLevel = severityOrder[minSeverity as keyof typeof severityOrder] || 2
      return diff.newIssues.some(
        (issue) =>
          (severityOrder[issue.severity as keyof typeof severityOrder] || 0) >=
          minSeverityLevel
      )

    case 'issue_resolved':
      // Alert when issues are resolved (positive signal)
      return diff.resolvedIssues.length > 0

    case 'cluster_regression':
      const regressionThreshold = (threshold.clusterCount as number) || 1
      return (
        diff.clusterDeltas.filter((c) => c.status === 'regressed').length >=
        regressionThreshold
      )

    case 'pillar_score_drop':
      const pillarId = threshold.pillarId as string
      const pillarDrop = threshold.dropAmount as number || 5
      const pillarDelta = diff.scoreDeltas.find((d) => d.pillarId === pillarId)
      return pillarDelta ? pillarDelta.delta <= -pillarDrop : false

    default:
      return false
  }
}

/**
 * Create alert record
 */
async function createAlert(rule: any, context: AlertContext): Promise<void> {
  const message = generateAlertMessage(rule, context)

  // Check if alert already exists (avoid duplicates)
  const existing = await prisma.alert.findFirst({
    where: {
      alertRuleId: rule.id,
      domainId: context.domainId,
      status: 'pending',
      triggeredAt: {
        gte: new Date(Date.now() - 24 * 60 * 60 * 1000), // Last 24 hours
      },
    },
  })

  if (existing) {
    // Update existing alert instead of creating duplicate
    await prisma.alert.update({
      where: { id: existing.id },
      data: {
        triggeredAt: new Date(),
        message,
        context: {
          scanId: context.scanId,
          diff: context.diff,
        } as any,
      },
    })
    return
  }

  // Determine severity based on rule type and context
  const severity = determineSeverity(rule, context)

  await prisma.alert.create({
    data: {
      alertRuleId: rule.id,
      domainId: context.domainId,
      severity,
      message,
      context: {
        scanId: context.scanId,
        diff: context.diff,
      } as any,
      metadata: {
        ruleType: rule.ruleType,
        threshold: rule.threshold,
      },
    },
  })
}

/**
 * Generate alert message
 */
function generateAlertMessage(rule: any, context: AlertContext): string {
  const { diff, currentScore, previousScore } = context

  switch (rule.ruleType) {
    case 'score_drop':
      const drop = previousScore ? previousScore - currentScore : 0
      return `Overall score dropped by ${drop.toFixed(1)} points (${currentScore.toFixed(1)} from ${previousScore?.toFixed(1)})`

    case 'new_issue':
      const criticalNew = diff.newIssues.filter((i) => i.severity === 'critical')
        .length
      const highNew = diff.newIssues.filter((i) => i.severity === 'high').length
      if (criticalNew > 0) {
        return `${criticalNew} critical issue(s) detected`
      }
      if (highNew > 0) {
        return `${highNew} high-severity issue(s) detected`
      }
      return `${diff.newIssues.length} new issue(s) detected`

    case 'issue_resolved':
      return `${diff.resolvedIssues.length} issue(s) resolved`

    case 'cluster_regression':
      const regressed = diff.clusterDeltas.filter((c) => c.status === 'regressed')
        .length
      return `${regressed} cluster(s) regressed`

    case 'pillar_score_drop':
      const pillarId = (rule.threshold as any)?.pillarId
      const pillarDelta = diff.scoreDeltas.find((d) => d.pillarId === pillarId)
      if (pillarDelta) {
        return `Pillar ${pillarId} score dropped by ${Math.abs(pillarDelta.delta).toFixed(1)} points`
      }
      return `Pillar score drop detected`

    default:
      return `Alert triggered: ${rule.name}`
  }
}

/**
 * Determine alert severity
 */
function determineSeverity(
  rule: any,
  context: AlertContext
): 'low' | 'medium' | 'high' | 'critical' {
  const { diff } = context

  switch (rule.ruleType) {
    case 'score_drop':
      const dropPercent = Math.abs(context.diff.overallScoreDeltaPercent)
      if (dropPercent >= 20) return 'critical'
      if (dropPercent >= 10) return 'high'
      if (dropPercent >= 5) return 'medium'
      return 'low'

    case 'new_issue':
      const hasCritical = diff.newIssues.some((i) => i.severity === 'critical')
      const hasHigh = diff.newIssues.some((i) => i.severity === 'high')
      if (hasCritical) return 'critical'
      if (hasHigh) return 'high'
      return 'medium'

    case 'cluster_regression':
      return 'medium'

    case 'pillar_score_drop':
      return 'high'

    default:
      return 'medium'
  }
}

