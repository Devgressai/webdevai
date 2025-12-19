/**
 * Versioning utilities for methodology and limitations pages
 */

import { getRubricVersion } from '../rubric/loader'
import crypto from 'crypto'

/**
 * Get rubric version
 */
export function getRubricVersionString(): string {
  try {
    return getRubricVersion()
  } catch {
    return process.env.AEO_RUBRIC_VERSION || '1.0.0'
  }
}

/**
 * Generate prompt hash from prompt text
 * Used for versioning LLM evaluation prompts
 */
export function hashPrompt(prompt: string): string {
  return crypto.createHash('sha256').update(prompt).digest('hex').substring(0, 8)
}

/**
 * Get default prompt hash (for methodology display)
 * This represents the current prompt template version
 */
export function getPromptHash(): string {
  // This would be the hash of the current LLM evaluation prompt template
  // For now, return a placeholder that can be updated when prompts are versioned
  const defaultPrompt = `Evaluate the following page for AI readiness and answer engine optimization.`
  return hashPrompt(defaultPrompt)
}

