/**
 * Canonical Governance System for City×Industry Hub Pages
 * 
 * Uses precomputed overlap scores (build-time) for deterministic canonical decisions.
 * City×Industry hubs are always noindex,follow and excluded from sitemaps.
 */

import { citySlugs } from '../cities'
import { industrySlugs } from '../industries'

const BASE_URL = 'https://www.webvello.com'

// Logging configuration
const ENABLE_LOGGING = process.env.ENABLE_CANONICAL_LOGGING === 'true' || process.env.NODE_ENV === 'development'

function log(level: 'info' | 'warn' | 'error', message: string, data?: any) {
  if (!ENABLE_LOGGING) return
  const logData = { timestamp: new Date().toISOString(), level, message, ...data }
  if (level === 'error') {
    console.error('[CanonicalRules]', logData)
  } else if (level === 'warn') {
    console.warn('[CanonicalRules]', logData)
  } else {
    console.log('[CanonicalRules]', logData)
  }
}

// Overlap store type
export interface OverlapStore {
  [url: string]: {
    cityOverlap: number // 0.0-1.0
    industryOverlap: number // 0.0-1.0
    downstreamPages: number // Count of City×Industry×Service pages
    computedAt: string // ISO 8601 timestamp
  }
}

// Canonical decision result
export interface CanonicalDecision {
  canonical: string
  reasonCode: string
  reason: string
  overlapScores?: {
    city: number
    industry: number
  }
  downstreamPages?: number
}

// Cache for canonical decisions (in-memory)
const canonicalCache = new Map<string, CanonicalDecision>()

// Load overlap store (in production, this would be loaded from JSON file or KV store)
let overlapStore: OverlapStore = {}

/**
 * Load overlap store from JSON file or KV store
 * This should be called at build time or app initialization
 */
export function loadOverlapStore(store: OverlapStore): void {
  overlapStore = store
  log('info', 'Overlap store loaded', { entries: Object.keys(store).length })
}

/**
 * Get overlap scores for a City×Industry hub URL
 */
function getOverlapScores(url: string): { cityOverlap: number; industryOverlap: number; downstreamPages: number } | null {
  const entry = overlapStore[url]
  if (!entry) {
    return null
  }
  
  // Validate overlap scores are in valid range
  if (entry.cityOverlap < 0 || entry.cityOverlap > 1 || 
      entry.industryOverlap < 0 || entry.industryOverlap > 1) {
    log('error', 'Invalid overlap score range', { url, cityOverlap: entry.cityOverlap, industryOverlap: entry.industryOverlap })
    return null // Treat as missing data
  }
  
  // Validate downstreamPages is non-negative
  if (entry.downstreamPages < 0) {
    log('error', 'Invalid downstreamPages count', { url, downstreamPages: entry.downstreamPages })
    return null
  }
  
  return {
    cityOverlap: entry.cityOverlap,
    industryOverlap: entry.industryOverlap,
    downstreamPages: entry.downstreamPages
  }
}

/**
 * Check if page has unique navigational function
 */
function hasUniqueNavigation(
  city: string,
  industry: string,
  downstreamPages: number,
  cityOverlap: number,
  industryOverlap: number
): boolean {
  // Unique navigation if:
  // 1. Has 3+ downstream pages
  // 2. Low overlap with both parent pages (<0.80)
  return downstreamPages >= 3 && cityOverlap < 0.80 && industryOverlap < 0.80
}

/**
 * Get canonical URL for City×Industry hub page
 * 
 * Decision scenarios:
 * 1. Unique navigational function → canonical self
 * 2. Redundant with City page → canonical to /{city-slug}
 * 3. Redundant with Industry page → canonical to /industries/{industry-slug}
 * 4. Redundant with both → canonical to City page (prefer geo)
 * 5. Single City×Industry×Service exists → canonical to service page
 * 6. No downstream pages → canonical self (preserve for future)
 */
export function getCanonicalForCityIndustryHub(
  city: string,
  industry: string,
  downstreamServicePages?: Array<{ url: string; indexable: boolean }>
): CanonicalDecision {
  const url = `/${city}/industry/${industry}`
  const cacheKey = url

  // Check cache
  const cached = canonicalCache.get(cacheKey)
  if (cached) {
    log('info', 'Canonical decision from cache', { url, decision: cached })
    return cached
  }

  // Get overlap scores from precomputed store
  const overlapScores = getOverlapScores(url)
  
  // Get downstream pages count
  const downstreamPages = downstreamServicePages?.length || 0
  const indexableDownstreamPages = downstreamServicePages?.filter(p => p.indexable) || []

  // Scenario 5: Single City×Industry×Service page exists
  if (indexableDownstreamPages.length === 1) {
    const decision: CanonicalDecision = {
      canonical: `${BASE_URL}${indexableDownstreamPages[0].url}`,
      reasonCode: 'SINGLE_SERVICE_PAGE',
      reason: 'Only one indexable City×Industry×Service page exists',
      downstreamPages: 1
    }
    canonicalCache.set(cacheKey, decision)
    log('info', 'Canonical decision: single service page', { url, decision })
    return decision
  }

  // Scenario 6: No downstream pages
  if (downstreamPages === 0) {
    const decision: CanonicalDecision = {
      canonical: `${BASE_URL}${url}`,
      reasonCode: 'NO_DOWNSTREAM_PAGES',
      reason: 'No downstream pages exist, preserve link equity for future',
      downstreamPages: 0
    }
    canonicalCache.set(cacheKey, decision)
    log('info', 'Canonical decision: no downstream pages', { url, decision })
    return decision
  }

  // If no overlap scores available, default to self (unique navigation assumed)
  if (!overlapScores) {
    const decision: CanonicalDecision = {
      canonical: `${BASE_URL}${url}`,
      reasonCode: 'NO_OVERLAP_DATA',
      reason: 'Overlap scores not available, defaulting to self',
      downstreamPages
    }
    canonicalCache.set(cacheKey, decision)
    log('warn', 'Canonical decision: no overlap data', { url, decision })
    return decision
  }

  const { cityOverlap, industryOverlap } = overlapScores
  const redundancyThreshold = 0.80

  // Scenario 4: Redundant with both City and Industry pages
  if (cityOverlap >= redundancyThreshold && industryOverlap >= redundancyThreshold) {
    const decision: CanonicalDecision = {
      canonical: `${BASE_URL}/${city}`,
      reasonCode: 'REDUNDANT_WITH_BOTH',
      reason: 'Redundant with both City and Industry pages, prefer City for geo-specificity',
      overlapScores: { city: cityOverlap, industry: industryOverlap },
      downstreamPages
    }
    canonicalCache.set(cacheKey, decision)
    log('info', 'Canonical decision: redundant with both', { url, decision })
    return decision
  }

  // Scenario 2: Redundant with City page
  if (cityOverlap >= redundancyThreshold) {
    const decision: CanonicalDecision = {
      canonical: `${BASE_URL}/${city}`,
      reasonCode: 'REDUNDANT_WITH_CITY',
      reason: 'Redundant with City page (overlap >= 80%)',
      overlapScores: { city: cityOverlap, industry: industryOverlap },
      downstreamPages
    }
    canonicalCache.set(cacheKey, decision)
    log('info', 'Canonical decision: redundant with city', { url, decision })
    return decision
  }

  // Scenario 3: Redundant with Industry page
  if (industryOverlap >= redundancyThreshold) {
    const decision: CanonicalDecision = {
      canonical: `${BASE_URL}/industries/${industry}`,
      reasonCode: 'REDUNDANT_WITH_INDUSTRY',
      reason: 'Redundant with Industry page (overlap >= 80%)',
      overlapScores: { city: cityOverlap, industry: industryOverlap },
      downstreamPages
    }
    canonicalCache.set(cacheKey, decision)
    log('info', 'Canonical decision: redundant with industry', { url, decision })
    return decision
  }

  // Scenario 1: Unique navigational function
  if (hasUniqueNavigation(city, industry, downstreamPages, cityOverlap, industryOverlap)) {
    const decision: CanonicalDecision = {
      canonical: `${BASE_URL}${url}`,
      reasonCode: 'UNIQUE_NAVIGATION',
      reason: 'Unique navigational function (3+ downstream pages, low overlap)',
      overlapScores: { city: cityOverlap, industry: industryOverlap },
      downstreamPages
    }
    canonicalCache.set(cacheKey, decision)
    log('info', 'Canonical decision: unique navigation', { url, decision })
    return decision
  }

  // Default: Self (preserve link equity)
  const decision: CanonicalDecision = {
    canonical: `${BASE_URL}${url}`,
    reasonCode: 'DEFAULT_SELF',
    reason: 'Default: canonical self (preserve link equity)',
    overlapScores: { city: cityOverlap, industry: industryOverlap },
    downstreamPages
  }
  
  // Validate canonical target (defensive check)
  if (decision.canonical !== `${BASE_URL}${url}`) {
    // Validate canonical points to valid target
    const validPatterns = [
      new RegExp(`^${BASE_URL}/${city}$`), // City page
      new RegExp(`^${BASE_URL}/industries/${industry}$`), // Industry page
      new RegExp(`^${BASE_URL}/${city}/industry/${industry}/[^/]+$`) // Service page
    ]
    
    const isValid = validPatterns.some(pattern => pattern.test(decision.canonical))
    if (!isValid) {
      log('error', 'Invalid canonical target', { url, canonical: decision.canonical })
      // Default to self if invalid
      decision.canonical = `${BASE_URL}${url}`
      decision.reasonCode = 'INVALID_CANONICAL_TARGET'
      decision.reason = 'Invalid canonical target, defaulting to self'
    }
  }
  
  canonicalCache.set(cacheKey, decision)
  log('info', 'Canonical decision: default self', { url, decision })
  return decision
}

/**
 * Get robots directives for City×Industry hub (always noindex,follow)
 */
export function getCityIndustryHubRobots(): { index: boolean; follow: boolean } {
  return {
    index: false,
    follow: true
  }
}

/**
 * Check if URL should be in sitemap (City×Industry hubs: always false)
 */
export function shouldIncludeInSitemap(url: string): boolean {
  // City×Industry hubs are always excluded
  if (url.match(/\/[^/]+\/industry\/[^/]+$/)) {
    return false
  }
  return true
}

/**
 * Clear canonical cache (useful for testing or cache invalidation)
 */
export function clearCanonicalCache(): void {
  canonicalCache.clear()
  log('info', 'Canonical cache cleared')
}

/**
 * Get cache stats
 */
export function getCanonicalCacheStats(): { size: number; entries: string[] } {
  return {
    size: canonicalCache.size,
    entries: Array.from(canonicalCache.keys())
  }
}
