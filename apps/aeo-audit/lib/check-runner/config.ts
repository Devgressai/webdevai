/**
 * Configuration for check_runner job
 */

export interface CheckRunnerConfig {
  sampleSize: number // Number of pages to sample for schema validity checks
  siteType: string // Site type for weighting (default: "corporate")
  minConfidence: number // Minimum confidence for issue generation (0-1)
}

export const DEFAULT_CONFIG: CheckRunnerConfig = {
  sampleSize: 10, // Sample 10 pages for schema validity
  siteType: 'corporate', // Default site type
  minConfidence: 0.7, // 70% confidence minimum
}

/**
 * Get config from environment or use defaults
 */
export function getConfig(): CheckRunnerConfig {
  return {
    sampleSize: parseInt(process.env.CHECK_RUNNER_SAMPLE_SIZE || '10', 10),
    siteType: process.env.CHECK_RUNNER_SITE_TYPE || DEFAULT_CONFIG.siteType,
    minConfidence: parseFloat(
      process.env.CHECK_RUNNER_MIN_CONFIDENCE || '0.7'
    ),
  }
}

/**
 * Site type weightings for pillar scores
 */
export const SITE_TYPE_WEIGHTS: Record<
  string,
  Record<string, number>
> = {
  corporate: {
    structured_data: 0.3,
    content_structure: 0.25,
    metadata: 0.2,
    ai_readiness: 0.25,
  },
  ecommerce: {
    structured_data: 0.35,
    content_structure: 0.2,
    metadata: 0.25,
    ai_readiness: 0.2,
  },
  blog: {
    structured_data: 0.2,
    content_structure: 0.3,
    metadata: 0.25,
    ai_readiness: 0.25,
  },
  default: {
    structured_data: 0.25,
    content_structure: 0.25,
    metadata: 0.2,
    ai_readiness: 0.3,
  },
}

/**
 * Get weights for site type
 */
export function getSiteTypeWeights(siteType: string): Record<string, number> {
  return SITE_TYPE_WEIGHTS[siteType] || SITE_TYPE_WEIGHTS.default
}

