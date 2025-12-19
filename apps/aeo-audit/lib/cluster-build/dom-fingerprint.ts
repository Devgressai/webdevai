/**
 * DOM fingerprinting utilities
 */

export interface DomFingerprint {
  mainTagPattern: string
  headingOutline: string
  schemaTypesSet: string[]
  fingerprint: string // Combined fingerprint
}

/**
 * Compute DOM fingerprint from:
 * - Main tag pattern (main, article, section structure)
 * - Heading outline (h1-h3 hierarchy)
 * - Schema types set (from JSON-LD)
 */
export function computeDomFingerprint(
  metadata: {
    headings?: {
      h1?: string[]
      h2?: string[]
      h3?: string[]
    }
    jsonLdTypes?: string[]
  }
): DomFingerprint {
  // Main tag pattern (simplified - would need HTML parsing for full pattern)
  // For now, infer from structure
  const mainTagPattern = inferMainTagPattern(metadata)

  // Heading outline
  const headingOutline = computeHeadingOutline(metadata.headings)

  // Schema types set (sorted for consistency)
  const schemaTypesSet = (metadata.jsonLdTypes || []).sort()

  // Combined fingerprint
  const fingerprint = [
    mainTagPattern,
    headingOutline,
    schemaTypesSet.join(','),
  ].join('|')

  return {
    mainTagPattern,
    headingOutline,
    schemaTypesSet,
    fingerprint,
  }
}

/**
 * Infer main tag pattern from metadata
 * This is a heuristic - full implementation would parse HTML
 */
function inferMainTagPattern(metadata: {
  headings?: { h1?: string[]; h2?: string[]; h3?: string[] }
  jsonLdTypes?: string[]
}): string {
  const h1Count = metadata.headings?.h1?.length || 0
  const h2Count = metadata.headings?.h2?.length || 0
  const h3Count = metadata.headings?.h3?.length || 0

  // Infer structure from heading hierarchy
  if (h1Count === 1 && h2Count > 0) {
    return 'article' // Typical article structure
  }
  if (h1Count === 1 && h2Count === 0 && h3Count === 0) {
    return 'landing' // Landing page
  }
  if (h1Count > 1) {
    return 'multi-h1' // Multiple H1s (unusual)
  }
  if (h2Count > 5 && h3Count > 0) {
    return 'structured' // Well-structured content
  }

  return 'default'
}

/**
 * Compute heading outline
 * Format: h1_count:h2_count:h3_count
 */
function computeHeadingOutline(headings?: {
  h1?: string[]
  h2?: string[]
  h3?: string[]
}): string {
  const h1Count = headings?.h1?.length || 0
  const h2Count = headings?.h2?.length || 0
  const h3Count = headings?.h3?.length || 0

  return `${h1Count}:${h2Count}:${h3Count}`
}

