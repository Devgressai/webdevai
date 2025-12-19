/**
 * Configuration for extract_parse job
 */

export interface ExtractParseConfig {
  maxEvidenceSnippetSize: number // Max size for Evidence snippets (characters)
  maxJsonLdBlockSize: number // Max size for JSON-LD block storage (characters)
  maxTitleSnippetSize: number // Max size for title/meta snippet
  maxCanonicalSnippetSize: number // Max size for canonical snippet
}

export const DEFAULT_CONFIG: ExtractParseConfig = {
  maxEvidenceSnippetSize: 5000, // 5KB for Evidence content
  maxJsonLdBlockSize: 50000, // 50KB for JSON-LD raw text
  maxTitleSnippetSize: 500, // 500 chars for title/meta snippet
  maxCanonicalSnippetSize: 200, // 200 chars for canonical snippet
}

/**
 * Get config from environment or use defaults
 */
export function getConfig(): ExtractParseConfig {
  return {
    maxEvidenceSnippetSize: parseInt(
      process.env.EXTRACT_PARSE_MAX_EVIDENCE_SNIPPET || '5000',
      10
    ),
    maxJsonLdBlockSize: parseInt(
      process.env.EXTRACT_PARSE_MAX_JSONLD_BLOCK || '50000',
      10
    ),
    maxTitleSnippetSize: parseInt(
      process.env.EXTRACT_PARSE_MAX_TITLE_SNIPPET || '500',
      10
    ),
    maxCanonicalSnippetSize: parseInt(
      process.env.EXTRACT_PARSE_MAX_CANONICAL_SNIPPET || '200',
      10
    ),
  }
}

/**
 * Truncate text deterministically
 * Rules:
 * - If text is shorter than max, return as-is
 * - If text exceeds max, truncate to (max - 3) and append "..."
 * - Always preserve at least first character
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text
  }

  if (maxLength <= 3) {
    return text.substring(0, maxLength)
  }

  return text.substring(0, maxLength - 3) + '...'
}

