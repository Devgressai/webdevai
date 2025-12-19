/**
 * Cluster predicate computation utilities
 */

import { extractUrlPattern } from './url-signature'

export interface ClusterPredicates {
  isHomepage: boolean
  isServiceTemplate: boolean
  isLocationTemplate: boolean
  isBlogTemplate: boolean
  isPolicyTemplate: boolean
  hasFaqSection: boolean
}

/**
 * Compute cluster predicates from page data
 */
export function computePredicates(
  url: string,
  metadata: {
    jsonLdTypes?: string[]
    headings?: {
      h1?: string[]
      h2?: string[]
      h3?: string[]
    }
    canonical?: string
  }
): ClusterPredicates {
  const urlPattern = extractUrlPattern(url)
  const normalizedUrl = urlPattern.pattern.toLowerCase()

  // Homepage predicate
  const isHomepage =
    normalizedUrl === '/' ||
    normalizedUrl === '/home' ||
    normalizedUrl === '/index' ||
    (metadata.canonical &&
      (metadata.canonical.endsWith('/') ||
        metadata.canonical.match(/\/$|\/home|\/index$/i)))

  // Service template predicate
  const isServiceTemplate =
    normalizedUrl.includes('/service') ||
    normalizedUrl.includes('/services') ||
    normalizedUrl.includes('/{id}') ||
    (urlPattern.hasNumericSegments &&
      (normalizedUrl.includes('/service') ||
        normalizedUrl.includes('/services'))) ||
    metadata.jsonLdTypes?.some(
      (type) =>
        type.toLowerCase().includes('service') ||
        type.toLowerCase().includes('offering')
    ) ||
    false

  // Location template predicate
  const isLocationTemplate =
    normalizedUrl.includes('/location') ||
    normalizedUrl.includes('/locations') ||
    normalizedUrl.includes('/city') ||
    normalizedUrl.includes('/cities') ||
    normalizedUrl.includes('/state') ||
    normalizedUrl.includes('/states') ||
    (urlPattern.hasNumericSegments &&
      (normalizedUrl.includes('/location') ||
        normalizedUrl.includes('/city'))) ||
    metadata.jsonLdTypes?.some(
      (type) =>
        type.toLowerCase().includes('localbusiness') ||
        type.toLowerCase().includes('place')
    ) ||
    false

  // Blog template predicate
  const isBlogTemplate =
    normalizedUrl.includes('/blog') ||
    normalizedUrl.includes('/post') ||
    normalizedUrl.includes('/article') ||
    normalizedUrl.includes('/news') ||
    urlPattern.hasNumericSegments ||
    urlPattern.hasUuidSegments ||
    metadata.jsonLdTypes?.some(
      (type) =>
        type.toLowerCase().includes('article') ||
        type.toLowerCase().includes('blogposting') ||
        type.toLowerCase().includes('newsarticle')
    ) ||
    false

  // Policy template predicate
  const isPolicyTemplate =
    normalizedUrl.includes('/policy') ||
    normalizedUrl.includes('/policies') ||
    normalizedUrl.includes('/privacy') ||
    normalizedUrl.includes('/terms') ||
    normalizedUrl.includes('/legal') ||
    normalizedUrl.includes('/cookie') ||
    normalizedUrl.includes('/gdpr') ||
    false

  // FAQ section predicate
  const allHeadings = [
    ...(metadata.headings?.h1 || []),
    ...(metadata.headings?.h2 || []),
    ...(metadata.headings?.h3 || []),
  ]

  const hasFaqSection =
    metadata.jsonLdTypes?.some(
      (type) =>
        type.toLowerCase().includes('faq') ||
        type.toLowerCase().includes('question')
    ) ||
    allHeadings.some((heading) => {
      const lower = heading.toLowerCase()
      return (
        lower.includes('faq') ||
        lower.includes('frequently asked') ||
        lower.includes('questions')
      )
    }) ||
    false

  return {
    isHomepage,
    isServiceTemplate,
    isLocationTemplate,
    isBlogTemplate,
    isPolicyTemplate,
    hasFaqSection,
  }
}

