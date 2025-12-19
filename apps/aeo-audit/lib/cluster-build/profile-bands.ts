/**
 * Profile band computation utilities
 */

import { ClusterBuildConfig } from './config'

export interface ProfileBands {
  wordCountBand: 'low' | 'medium' | 'high' | 'very_high'
  headingCountBand: 'low' | 'medium' | 'high' | 'very_high'
  faqPresenceBand: 'present' | 'absent'
  profileKey: string // Combined profile key
}

/**
 * Compute profile bands from page metadata
 */
export function computeProfileBands(
  metadata: {
    wordCount?: number
    headings?: {
      h1?: string[]
      h2?: string[]
      h3?: string[]
    }
    hasFaqSection?: boolean
  },
  config: ClusterBuildConfig
): ProfileBands {
  // Word count band
  const wordCount = metadata.wordCount || 0
  let wordCountBand: 'low' | 'medium' | 'high' | 'very_high'
  if (wordCount < config.wordCountBands.low) {
    wordCountBand = 'low'
  } else if (wordCount < config.wordCountBands.medium) {
    wordCountBand = 'medium'
  } else if (wordCount < config.wordCountBands.high) {
    wordCountBand = 'high'
  } else {
    wordCountBand = 'very_high'
  }

  // Heading count band
  const h1Count = metadata.headings?.h1?.length || 0
  const h2Count = metadata.headings?.h2?.length || 0
  const h3Count = metadata.headings?.h3?.length || 0
  const totalHeadings = h1Count + h2Count + h3Count

  let headingCountBand: 'low' | 'medium' | 'high' | 'very_high'
  if (totalHeadings < config.headingCountBands.low) {
    headingCountBand = 'low'
  } else if (totalHeadings < config.headingCountBands.medium) {
    headingCountBand = 'medium'
  } else if (totalHeadings < config.headingCountBands.high) {
    headingCountBand = 'high'
  } else {
    headingCountBand = 'very_high'
  }

  // FAQ presence band
  const faqPresenceBand: 'present' | 'absent' = metadata.hasFaqSection
    ? 'present'
    : 'absent'

  // Combined profile key
  const profileKey = `${wordCountBand}:${headingCountBand}:${faqPresenceBand}`

  return {
    wordCountBand,
    headingCountBand,
    faqPresenceBand,
    profileKey,
  }
}

/**
 * Detect FAQ section from metadata
 * Heuristic: Look for FAQ-related schema types or headings
 */
export function detectFaqSection(metadata: {
  jsonLdTypes?: string[]
  headings?: {
    h1?: string[]
    h2?: string[]
    h3?: string[]
  }
}): boolean {
  // Check for FAQ schema type
  const hasFaqSchema =
    metadata.jsonLdTypes?.some(
      (type) =>
        type.toLowerCase().includes('faq') ||
        type.toLowerCase().includes('question')
    ) || false

  // Check for FAQ-related headings
  const allHeadings = [
    ...(metadata.headings?.h1 || []),
    ...(metadata.headings?.h2 || []),
    ...(metadata.headings?.h3 || []),
  ]

  const hasFaqHeading = allHeadings.some((heading) => {
    const lower = heading.toLowerCase()
    return (
      lower.includes('faq') ||
      lower.includes('frequently asked') ||
      lower.includes('questions')
    )
  })

  return hasFaqSchema || hasFaqHeading
}

