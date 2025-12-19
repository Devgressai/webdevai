/**
 * Zod schemas for LLM evaluation output validation
 */

import { z } from 'zod'

/**
 * Evidence quote schema
 */
export const EvidenceQuoteSchema = z.object({
  quote: z.string().min(1, 'Quote cannot be empty'),
  source: z.string().url('Source must be a valid URL'),
  context: z.string().optional(), // Optional context around the quote
})

/**
 * LLM evaluation result schema
 */
export const LlmEvalResultSchema = z.object({
  // Overall assessment
  overallScore: z.number().min(0).max(100),
  readinessLevel: z.enum(['excellent', 'good', 'fair', 'poor', 'critical']),

  // Detailed scores
  schemaReadiness: z.number().min(0).max(100).optional(),
  contentQuality: z.number().min(0).max(100).optional(),
  metadataCompleteness: z.number().min(0).max(100).optional(),
  aiReadiness: z.number().min(0).max(100).optional(),

  // Evidence quotes (required unless insufficient_evidence=true)
  evidence_quotes: z.array(EvidenceQuoteSchema).optional(),

  // Insufficient evidence flag
  insufficient_evidence: z.boolean().optional().default(false),

  // Recommendations
  recommendations: z.array(
    z.object({
      priority: z.enum(['low', 'medium', 'high', 'critical']),
      category: z.string(),
      suggestion: z.string(),
      rationale: z.string().optional(),
    })
  ),

  // Strengths
  strengths: z.array(z.string()).optional(),

  // Weaknesses
  weaknesses: z.array(z.string()).optional(),

  // Reasoning
  reasoning: z.string().optional(),
})

export type LlmEvalResult = z.infer<typeof LlmEvalResultSchema>
export type EvidenceQuote = z.infer<typeof EvidenceQuoteSchema>

/**
 * Validate LLM evaluation result
 */
export function validateLlmEvalResult(
  data: unknown
): { success: true; data: LlmEvalResult } | { success: false; error: z.ZodError } {
  try {
    const result = LlmEvalResultSchema.parse(data)
    return { success: true, data: result }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error }
    }
    throw error
  }
}

