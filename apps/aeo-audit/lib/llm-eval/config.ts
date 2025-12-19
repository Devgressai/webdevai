/**
 * Configuration for llm_eval job
 */

export interface LlmEvalConfig {
  // Sampling limits
  maxHomepagePages: number
  maxTopPages: number
  maxClusterRepresentatives: number
  maxTotalSamples: number

  // LLM provider config
  provider: 'mock' | 'openai' | 'anthropic' | 'google'
  model?: string
  temperature?: number
  maxTokens?: number

  // Validation
  requireEvidenceQuotes: boolean
  allowInsufficientEvidence: boolean
}

export const DEFAULT_CONFIG: LlmEvalConfig = {
  maxHomepagePages: 3, // homepage, about, contact
  maxTopPages: 10, // Top pages by internal links or other metric
  maxClusterRepresentatives: 5, // Representative pages per cluster
  maxTotalSamples: 20, // Total pages to evaluate
  provider: 'mock',
  model: 'gpt-4',
  temperature: 0.7,
  maxTokens: 2000,
  requireEvidenceQuotes: true,
  allowInsufficientEvidence: true,
}

/**
 * Get config from environment or use defaults
 */
export function getConfig(): LlmEvalConfig {
  return {
    maxHomepagePages: parseInt(
      process.env.LLM_EVAL_MAX_HOMEPAGE_PAGES || '3',
      10
    ),
    maxTopPages: parseInt(process.env.LLM_EVAL_MAX_TOP_PAGES || '10', 10),
    maxClusterRepresentatives: parseInt(
      process.env.LLM_EVAL_MAX_CLUSTER_REPRESENTATIVES || '5',
      10
    ),
    maxTotalSamples: parseInt(
      process.env.LLM_EVAL_MAX_TOTAL_SAMPLES || '20',
      10
    ),
    provider: (process.env.LLM_EVAL_PROVIDER as any) || 'mock',
    model: process.env.LLM_EVAL_MODEL || DEFAULT_CONFIG.model,
    temperature: parseFloat(process.env.LLM_EVAL_TEMPERATURE || '0.7'),
    maxTokens: parseInt(process.env.LLM_EVAL_MAX_TOKENS || '2000', 10),
    requireEvidenceQuotes:
      process.env.LLM_EVAL_REQUIRE_EVIDENCE_QUOTES !== 'false',
    allowInsufficientEvidence:
      process.env.LLM_EVAL_ALLOW_INSUFFICIENT_EVIDENCE !== 'false',
  }
}

