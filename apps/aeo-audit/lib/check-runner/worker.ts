/**
 * Check Runner Worker Implementation
 * Runs rubric-based checks, calculates scores, and generates issues
 */

import { PrismaClient } from '@prisma/client'
import { CheckRunnerPayload } from '../queues/types'
import { getConfig } from './config'
import {
  getRubric,
  getPillars,
  getCategories,
  getChecks,
  getRubricVersion,
} from '../rubric/loader'
import { computeChecks, CheckResult } from './checks'
import {
  calculateCategoryScore,
  calculatePillarScore,
  calculateOverallScore,
  CategoryScore,
  PillarScore,
} from './scoring'
import { generateIssues, persistIssues } from './issues'

const prisma = new PrismaClient()

export interface CheckRunnerResult {
  success: boolean
  overallScore: number
  pillarScores: Array<{
    pillarId: string
    score: number
  }>
  issuesGenerated: number
  reportId: string
  error?: string
}

/**
 * Main check runner function
 */
export async function runChecks(
  payload: CheckRunnerPayload
): Promise<CheckRunnerResult> {
  const { scanId, pageId, checkTypes } = payload
  const config = getConfig()

  try {
    // Load rubric
    const rubric = getRubric()
    const rubricVersion = getRubricVersion()
    const pillars = getPillars()

    // Get all checks (or filtered by checkTypes)
    const allChecks: Array<{ check: any; categoryId: string; pillarId: string }> = []
    for (const pillar of pillars) {
      for (const category of pillar.categories) {
        for (const check of category.checks) {
          if (!checkTypes || checkTypes.includes(check.id)) {
            allChecks.push({
              check,
              categoryId: category.id,
              pillarId: pillar.id,
            })
          }
        }
      }
    }

    // Compute checks
    const checkResults = await computeChecks(
      scanId,
      allChecks.map((ac) => ac.check)
    )

    // Calculate category scores
    const categoryScores: CategoryScore[] = []
    for (const pillar of pillars) {
      for (const category of pillar.categories) {
        const categoryCheckResults = checkResults.filter((cr) => {
          const checkInfo = allChecks.find((ac) => ac.check.id === cr.checkId)
          return checkInfo?.categoryId === category.id
        })

        const categoryScore = calculateCategoryScore(
          category,
          categoryCheckResults
        )
        categoryScores.push(categoryScore)
      }
    }

    // Calculate pillar scores
    const pillarScores: PillarScore[] = []
    for (const pillar of pillars) {
      const pillarCategoryScores = categoryScores.filter((cs) => {
        const category = getCategories(pillar.id).find((c) => c.id === cs.categoryId)
        return category !== undefined
      })

      const pillarScore = calculatePillarScore(pillar, pillarCategoryScores)
      pillarScores.push(pillarScore)
    }

    // Calculate overall score
    const overallScore = calculateOverallScore(
      pillars,
      pillarScores,
      config.siteType
    )

    // Generate issues
    const issues = await generateIssues(scanId, checkResults)

    // Persist issues
    await persistIssues(scanId, issues)

    // Create report snapshot
    const report = await prisma.report.create({
      data: {
        scanId,
        overallScore: overallScore.score,
        siteType: config.siteType,
        rubricVersion,
        scores: {
          pillars: pillarScores.map((ps) => ({
            pillarId: ps.pillarId,
            score: ps.score,
            categories: ps.categoryScores.map((cs) => ({
              categoryId: cs.categoryId,
              score: cs.score,
              checks: cs.checkScores,
            })),
          })),
        },
        metadata: {
          checkResults: checkResults.map((cr) => ({
            checkId: cr.checkId,
            issueCode: cr.issueCode,
            score: cr.score,
            triggered: cr.triggered,
          })),
          issuesGenerated: issues.length,
          timestamp: new Date().toISOString(),
        },
      },
    })

    // Enqueue report_build to finalize scan
    const { addJob, generateIdempotencyKey } = await import('../queues')
    const { QUEUE_NAMES } = await import('../queues/types')
    
    const reportPayload = {
      scanId,
      reportId: report.id,
    }
    
    const idempotencyKey = generateIdempotencyKey(scanId, 'report_build')
    await addJob(QUEUE_NAMES.REPORT_BUILD, reportPayload, {
      idempotencyKey,
      priority: 6,
    })

    return {
      success: true,
      overallScore: overallScore.score,
      pillarScores: pillarScores.map((ps) => ({
        pillarId: ps.pillarId,
        score: ps.score,
      })),
      issuesGenerated: issues.length,
      reportId: report.id,
    }
  } catch (error) {
    return {
      success: false,
      overallScore: 0,
      pillarScores: [],
      issuesGenerated: 0,
      reportId: '',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

