/**
 * Scoring utilities
 * Calculates category scores, pillar scores, and overall score
 */

import { Category, Pillar, Check } from '../rubric/loader'
import { CheckResult } from './checks'
import { getSiteTypeWeights } from './config'

export interface CategoryScore {
  categoryId: string
  score: number // 0-100
  checkScores: Array<{
    checkId: string
    score: number // 0-5
    capped: boolean
  }>
}

export interface PillarScore {
  pillarId: string
  score: number // 0-100
  categoryScores: CategoryScore[]
}

export interface OverallScore {
  score: number // 0-100
  pillarScores: PillarScore[]
}

/**
 * Calculate category score
 * Formula: CategoryScore = avg(check_scores_0_5) * 20
 * Caps are applied when issue codes are triggered
 */
export function calculateCategoryScore(
  category: Category,
  checkResults: CheckResult[]
): CategoryScore {
  const checkScores: CategoryScore['checkScores'] = []

  for (const check of category.checks) {
    const checkResult = checkResults.find((r) => r.checkId === check.id)
    if (!checkResult) continue

    // Apply cap if issue is triggered
    // Cap reduces score by 50% if triggered
    let score = checkResult.score
    let capped = false

    if (checkResult.triggered) {
      score = Math.max(0, score * 0.5) // Cap to 50% of original score
      capped = true
    }

    checkScores.push({
      checkId: check.id,
      score,
      capped,
    })
  }

  // Calculate average of check scores (0-5 scale)
  const avgScore =
    checkScores.length > 0
      ? checkScores.reduce((sum, cs) => sum + cs.score, 0) / checkScores.length
      : 0

  // Convert to 0-100 scale: avg(0-5) * 20
  const categoryScore = avgScore * 20

  return {
    categoryId: category.id,
    score: Math.round(categoryScore * 100) / 100, // Round to 2 decimals
    checkScores,
  }
}

/**
 * Calculate pillar score
 * Uses weighted average of category scores
 */
export function calculatePillarScore(
  pillar: Pillar,
  categoryScores: CategoryScore[]
): PillarScore {
  const scores: CategoryScore[] = []

  for (const category of pillar.categories) {
    const categoryScore = categoryScores.find(
      (cs) => cs.categoryId === category.id
    )
    if (categoryScore) {
      scores.push(categoryScore)
    }
  }

  // Weighted average of category scores
  let weightedSum = 0
  let totalWeight = 0

  for (const category of pillar.categories) {
    const categoryScore = scores.find((cs) => cs.categoryId === category.id)
    if (categoryScore) {
      weightedSum += categoryScore.score * category.weight
      totalWeight += category.weight
    }
  }

  const pillarScore =
    totalWeight > 0 ? weightedSum / totalWeight : 0

  return {
    pillarId: pillar.id,
    score: Math.round(pillarScore * 100) / 100,
    categoryScores: scores,
  }
}

/**
 * Calculate overall score
 * Uses site_type weighting for pillars
 */
export function calculateOverallScore(
  pillars: Pillar[],
  pillarScores: PillarScore[],
  siteType: string
): OverallScore {
  const weights = getSiteTypeWeights(siteType)

  let weightedSum = 0
  let totalWeight = 0

  for (const pillar of pillars) {
    const pillarScore = pillarScores.find((ps) => ps.pillarId === pillar.id)
    if (pillarScore) {
      const weight = weights[pillar.id] || pillar.weight
      weightedSum += pillarScore.score * weight
      totalWeight += weight
    }
  }

  const overallScore = totalWeight > 0 ? weightedSum / totalWeight : 0

  return {
    score: Math.round(overallScore * 100) / 100,
    pillarScores,
  }
}

/**
 * Apply caps to category score based on triggered issues
 */
export function applyCaps(
  categoryScore: number,
  triggeredIssues: string[]
): number {
  // Each triggered issue reduces score by 10%
  const capReduction = triggeredIssues.length * 0.1
  const cappedScore = Math.max(0, categoryScore * (1 - capReduction))
  return Math.round(cappedScore * 100) / 100
}

