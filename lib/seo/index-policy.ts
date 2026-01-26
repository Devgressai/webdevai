/**
 * IndexPolicy: Single source of truth for indexing decisions
 * 
 * Implements 2-stage quality-based governance:
 * - Stage A (hard gate): 2-of-3 rule for required uniqueness blocks
 * - Stage B (scoring): Normalized 0.0-1.0 score with weighted signals
 * 
 * This enforces tiered indexing:
 * - Tier 1: Always index (core, services, city hubs, city+primary-service)
 * - Tier 2: Conditional index (city+industry+service with quality gates)
 * - Tier 3: Noindex (navigation pages, long-tail combinations)
 */

import { citySlugs } from '../cities'
import { industrySlugs } from '../industries'
import { cityDataSlugs } from '../data/city-data'
import { 
  validateLocalDataCard, 
  LocalDataCard,
  validateIndustryKpiMap,
  IndustryKpiMap,
  validateProofSlot,
  ProofSlot
} from '../blocks'
import { checkDirectivesForViolations } from './governance-monitor'

export type RouteType = 
  | 'core'
  | 'service'
  | 'city'
  | 'city-service'
  | 'city-industry'
  | 'city-industry-service'

export interface IndexPolicyParams {
  routeType: RouteType
  path?: string
  city?: string
  service?: string
  industry?: string
  hasUniqueContent?: boolean
  hasCmsContent?: boolean
  wordCount?: number
  // Uniqueness injection blocks
  blocks?: {
    LOCAL_DATA_CARD?: LocalDataCard
    INDUSTRY_KPI_MAP?: IndustryKpiMap
    PROOF_SLOT?: ProofSlot
  }
  // Metadata for hard triggers
  metadata?: {
    duplicateContent?: boolean
    manualNoindex?: boolean
    manualIndex?: boolean
    featured?: boolean
    priority?: 'high' | 'medium' | 'low'
    engagementScore?: number
    externalCitations?: number
  }
}

// Block type definitions
export interface LocalDataCard {
  city?: string
  state?: string
  service?: string
  serp_data?: {
    avg_competitor_count?: number
    [key: string]: any
  }
  market_data?: {
    market_size?: number
    [key: string]: any
  }
  review_data?: {
    avg_rating_range?: string
    [key: string]: any
  }
  competitor_data?: {
    competitor_categories?: string[]
    [key: string]: any
  }
  ranking_environment?: {
    local_seo_importance?: string
    [key: string]: any
  }
  data_sources?: Array<{ name: string; url?: string; type: string }>
  last_updated?: string
  [key: string]: any
}

export interface IndustryKpiMap {
  industry?: string
  service?: string
  kpis?: Array<{ metric: string; benchmark?: number; context?: string }>
  constraints?: Array<{ type: string; description: string; impact?: string }>
  compliance?: Array<{ regulation: string; requirement: string; link?: string }>
  buyer_journey?: {
    awareness?: string[]
    consideration?: string[]
    decision?: string[]
  }
  last_updated?: string
  [key: string]: any
}

export interface ProofSlot {
  type?: 'case_study' | 'aggregate' | 'team'
  case_study_ref?: {
    case_study_verified?: boolean
    testimonial?: {
      client_verified?: boolean
      [key: string]: any
    }
    [key: string]: any
  }
  aggregate_metrics?: Array<{ metric: string; value: number; context?: string }>
  team_proof?: Array<{ member: string; credential: string; attribution: string }>
  last_updated?: string
  [key: string]: any
}

// SEO Directives - single source of truth
export interface SeoDirectives {
  index: boolean
  follow: boolean
  canonical: string
  inSitemap: boolean
  score: number
  reasonCodes: string[]
  gates: {
    twoOfThree: boolean
    scorePass: boolean
    hardFail: boolean
    hardPass: boolean
  }
}

// Legacy interface for backward compatibility
export interface IndexPolicy {
  indexable: boolean
  sitemapBucket: 'core' | 'services' | 'locations-tier1' | 'programmatic-tier2' | null
  robotsDirectives: {
    index: boolean
    follow: boolean
    noarchive?: boolean
    nosnippet?: boolean
  }
  canonical: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

const BASE_URL = 'https://www.webvello.com'

// Tier 1 services (always indexable for city+service combinations)
const TIER1_SERVICES = [
  'web-development',
  'seo',
  'website-design',
  'local-seo',
  'digital-marketing',
  'ai-seo',
  'ai-consulting',
  'ui-ux-design'
]

// Logging configuration
const ENABLE_LOGGING = process.env.ENABLE_INDEX_LOGGING === 'true' || process.env.NODE_ENV === 'development'

// Environment validation
if (process.env.NODE_ENV === 'production') {
  if (ENABLE_LOGGING) {
    console.warn('[IndexPolicy] Logging enabled in production. Set ENABLE_INDEX_LOGGING=false to disable.')
  }
}

// Validate TIER1_SERVICES is not empty
if (TIER1_SERVICES.length === 0) {
  throw new Error('TIER1_SERVICES must not be empty. This is a critical configuration error.')
}

function log(level: 'info' | 'warn' | 'error', message: string, data?: any) {
  if (!ENABLE_LOGGING) return
  const logData = { timestamp: new Date().toISOString(), level, message, ...data }
  if (level === 'error') {
    console.error('[IndexPolicy]', logData)
  } else if (level === 'warn') {
    console.warn('[IndexPolicy]', logData)
  } else {
    console.log('[IndexPolicy]', logData)
  }
}

/**
 * Validate LOCAL_DATA_CARD block using block validation function
 * Returns true if valid, false otherwise
 */
function isValidLocalDataCard(block: LocalDataCard | undefined): boolean {
  if (!block) return false
  const validation = validateLocalDataCard(block)
  return validation.valid
}

/**
 * Validate INDUSTRY_KPI_MAP block using block validation function
 * Returns true if valid, false otherwise
 */
function isValidIndustryKpiMap(block: IndustryKpiMap | undefined): boolean {
  if (!block) return false
  const validation = validateIndustryKpiMap(block)
  return validation.valid
}

/**
 * Validate PROOF_SLOT block using block validation function
 * Returns true if valid, false otherwise
 */
function isValidProofSlot(block: ProofSlot | undefined): boolean {
  if (!block) return false
  const validation = validateProofSlot(block)
  return validation.valid
}

/**
 * Check hard-fail triggers (10 triggers)
 * Returns trigger reason if hard-fail detected, null otherwise
 */
function checkHardFailTriggers(params: IndexPolicyParams): string | null {
  const { routeType, city, service, industry, blocks, metadata } = params
  
  // Trigger 1: Invalid city slug
  if (city && !cityDataSlugs.includes(city) && !citySlugs.includes(city)) {
    return 'INVALID_CITY_SLUG'
  }
  
  // Trigger 2: Invalid service slug
  if (service && !TIER1_SERVICES.includes(service)) {
    // For city-service, must be Tier 1
    if (routeType === 'city-service') {
      return 'INVALID_SERVICE_SLUG'
    }
  }
  
  // Trigger 3: Invalid industry slug
  if (industry && !industrySlugs.includes(industry)) {
    return 'INVALID_INDUSTRY_SLUG'
  }
  
  // Trigger 4: Duplicate content detected
  if (metadata?.duplicateContent === true) {
    return 'DUPLICATE_CONTENT'
  }
  
  // Trigger 5: Missing required blocks (programmatic only)
  if (routeType === 'city-service') {
    if (!blocks?.LOCAL_DATA_CARD || !blocks?.PROOF_SLOT) {
      const missing = []
      if (!blocks?.LOCAL_DATA_CARD) missing.push('LOCAL_DATA_CARD')
      if (!blocks?.PROOF_SLOT) missing.push('PROOF_SLOT')
      log('warn', 'Missing required blocks for city-service', { 
        city, 
        service, 
        missing,
        hasBlocks: !!blocks
      })
      return 'MISSING_REQUIRED_BLOCKS'
    }
  }
  if (routeType === 'city-industry-service') {
    if (!blocks?.LOCAL_DATA_CARD || !blocks?.INDUSTRY_KPI_MAP || !blocks?.PROOF_SLOT) {
      const missing = []
      if (!blocks?.LOCAL_DATA_CARD) missing.push('LOCAL_DATA_CARD')
      if (!blocks?.INDUSTRY_KPI_MAP) missing.push('INDUSTRY_KPI_MAP')
      if (!blocks?.PROOF_SLOT) missing.push('PROOF_SLOT')
      log('warn', 'Missing required blocks for city-industry-service', { 
        city, 
        industry, 
        service, 
        missing,
        hasBlocks: !!blocks
      })
      return 'MISSING_REQUIRED_BLOCKS'
    }
  }
  
  // Trigger 6: Invalid block data (validation failed)
  if (blocks?.LOCAL_DATA_CARD && !isValidLocalDataCard(blocks.LOCAL_DATA_CARD)) {
    return 'LOCAL_DATA_CARD_INVALID'
  }
  if (blocks?.INDUSTRY_KPI_MAP && !isValidIndustryKpiMap(blocks.INDUSTRY_KPI_MAP)) {
    return 'INDUSTRY_KPI_MAP_INVALID'
  }
  if (blocks?.PROOF_SLOT && !isValidProofSlot(blocks.PROOF_SLOT)) {
    return 'PROOF_SLOT_INVALID'
  }
  
  // Trigger 7: Stale data (last_updated > 90 days for programmatic)
  if (routeType === 'city-service' || routeType === 'city-industry-service') {
    if (blocks?.LOCAL_DATA_CARD) {
      const lastUpdated = new Date(blocks.LOCAL_DATA_CARD.last_updated || '')
      const maxAge = 90 * 24 * 60 * 60 * 1000 // 90 days
      if (!isNaN(lastUpdated.getTime()) && Date.now() - lastUpdated.getTime() > maxAge) {
        return 'STALE_DATA'
      }
    }
  }
  
  // Trigger 8: Invalid URL pattern (handled by route type validation)
  
  // Trigger 9: Manual noindex override
  if (metadata?.manualNoindex === true) {
    return 'MANUAL_NOINDEX'
  }
  
  // Trigger 10: Expected CMS content missing
  if (routeType === 'city-industry-service' && 
      metadata?.hasCmsContent === false && 
      params.hasCmsContent === false) {
    // Only fail if we expected CMS content but it's missing
    // This is a soft check, not always a hard fail
  }
  
  return null
}

/**
 * Check hard-pass triggers (10 triggers)
 * Returns trigger reason if hard-pass detected, null otherwise
 */
function checkHardPassTriggers(params: IndexPolicyParams): string | null {
  const { routeType, blocks, metadata } = params
  
  // Trigger 1: CMS content flag true
  if (metadata?.hasCmsContent === true || params.hasCmsContent === true) {
    return 'CMS_CONTENT_PRESENT'
  }
  
  // Trigger 2: All 3 uniqueness blocks present with valid data (City×Industry×Service)
  if (routeType === 'city-industry-service') {
    if (blocks?.LOCAL_DATA_CARD && 
        blocks?.INDUSTRY_KPI_MAP && 
        blocks?.PROOF_SLOT &&
        isValidLocalDataCard(blocks.LOCAL_DATA_CARD) &&
        isValidIndustryKpiMap(blocks.INDUSTRY_KPI_MAP) &&
        isValidProofSlot(blocks.PROOF_SLOT)) {
      return 'ALL_BLOCKS_VALID'
    }
  }
  
  // Trigger 3: Verified case study proof
  if (blocks?.PROOF_SLOT && 
      blocks.PROOF_SLOT.type === 'case_study' &&
      blocks.PROOF_SLOT.case_study_ref?.case_study_verified === true &&
      blocks.PROOF_SLOT.case_study_ref?.testimonial?.client_verified === true) {
    return 'VERIFIED_CASE_STUDY'
  }
  
  // Trigger 4: High-quality local data (all data sources present)
  if (blocks?.LOCAL_DATA_CARD &&
      blocks.LOCAL_DATA_CARD.serp_data &&
      blocks.LOCAL_DATA_CARD.market_data &&
      blocks.LOCAL_DATA_CARD.review_data &&
      blocks.LOCAL_DATA_CARD.competitor_data &&
      blocks.LOCAL_DATA_CARD.data_sources &&
      blocks.LOCAL_DATA_CARD.data_sources.length >= 2) {
    return 'HIGH_QUALITY_LOCAL_DATA'
  }
  
  // Trigger 5: Comprehensive KPI map (8+ KPIs)
  if (blocks?.INDUSTRY_KPI_MAP &&
      blocks.INDUSTRY_KPI_MAP.kpis &&
      blocks.INDUSTRY_KPI_MAP.kpis.length >= 8) {
    return 'COMPREHENSIVE_KPI_MAP'
  }
  
  // Trigger 6: Recent data updates (all blocks updated within 30 days)
  const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000
  if (routeType === 'city-industry-service') {
    const allRecent = 
      (!blocks?.LOCAL_DATA_CARD || (() => {
        const updated = new Date(blocks.LOCAL_DATA_CARD.last_updated || '')
        return !isNaN(updated.getTime()) && updated.getTime() >= thirtyDaysAgo
      })()) &&
      (!blocks?.INDUSTRY_KPI_MAP || (() => {
        const updated = new Date(blocks.INDUSTRY_KPI_MAP.last_updated || '')
        return !isNaN(updated.getTime()) && updated.getTime() >= thirtyDaysAgo
      })()) &&
      (!blocks?.PROOF_SLOT || (() => {
        const updated = new Date(blocks.PROOF_SLOT.last_updated || '')
        return !isNaN(updated.getTime()) && updated.getTime() >= thirtyDaysAgo
      })())
    if (allRecent) {
      return 'RECENT_DATA_UPDATES'
    }
  }
  
  // Trigger 7: Manual index override
  if (metadata?.manualIndex === true) {
    return 'MANUAL_INDEX'
  }
  
  // Trigger 8: Featured/priority page
  if (metadata?.featured === true || metadata?.priority === 'high') {
    return 'FEATURED_PAGE'
  }
  
  // Trigger 9: High engagement score
  if (metadata?.engagementScore && metadata.engagementScore >= 0.8) {
    return 'HIGH_ENGAGEMENT'
  }
  
  // Trigger 10: External citations
  if (metadata?.externalCitations && metadata.externalCitations >= 3) {
    return 'EXTERNAL_CITATIONS'
  }
  
  return null
}

/**
 * Stage A: Check 2-of-3 rule (hard gate)
 * Returns true if passes, false otherwise
 */
function checkTwoOfThreeRule(routeType: RouteType, blocks?: IndexPolicyParams['blocks']): boolean {
  if (routeType === 'city-service') {
    // Requires: LOCAL_DATA_CARD + PROOF_SLOT (2 of 2)
    const hasLocalData = isValidLocalDataCard(blocks?.LOCAL_DATA_CARD)
    const hasProof = isValidProofSlot(blocks?.PROOF_SLOT)
    return hasLocalData && hasProof
  }
  
  if (routeType === 'city-industry-service') {
    // Requires: LOCAL_DATA_CARD + INDUSTRY_KPI_MAP + PROOF_SLOT (3 of 3)
    const hasLocalData = isValidLocalDataCard(blocks?.LOCAL_DATA_CARD)
    const hasIndustryKpi = isValidIndustryKpiMap(blocks?.INDUSTRY_KPI_MAP)
    const hasProof = isValidProofSlot(blocks?.PROOF_SLOT)
    return hasLocalData && hasIndustryKpi && hasProof
  }
  
  // Not applicable to other route types
  return true
}

/**
 * Stage B: Compute normalized quality score (0.0-1.0)
 * Weighted signals with thresholds
 */
function computeQualityScore(
  routeType: RouteType,
  params: IndexPolicyParams
): number {
  const { blocks, wordCount, hasCmsContent, hasUniqueContent } = params
  
  let score = 0.0
  
  // LocalData (0.25 weight)
  const localDataValid = isValidLocalDataCard(blocks?.LOCAL_DATA_CARD)
  if (localDataValid) {
    score += 0.25
    // Bonus for high-quality local data
    if (blocks?.LOCAL_DATA_CARD?.data_sources && blocks.LOCAL_DATA_CARD.data_sources.length >= 2) {
      score += 0.02 // Small bonus
    }
  }
  
  // IndustryLogic (0.20 weight) - only for city-industry-service
  if (routeType === 'city-industry-service') {
    const industryKpiValid = isValidIndustryKpiMap(blocks?.INDUSTRY_KPI_MAP)
    if (industryKpiValid) {
      score += 0.20
      // Bonus for comprehensive KPI map (8+ KPIs)
      if (blocks?.INDUSTRY_KPI_MAP?.kpis && blocks.INDUSTRY_KPI_MAP.kpis.length >= 8) {
        score += 0.02 // Small bonus
      }
    }
  } else {
    // For city-service, give partial credit if not applicable
    score += 0.20
  }
  
  // Proof (0.25 weight)
  const proofValid = isValidProofSlot(blocks?.PROOF_SLOT)
  if (proofValid) {
    score += 0.25
    // Bonus for verified case study
    if (blocks?.PROOF_SLOT?.type === 'case_study' &&
        blocks.PROOF_SLOT.case_study_ref?.case_study_verified === true) {
      score += 0.02 // Small bonus
    }
  }
  
  // SERPIntentMatch (0.10 weight) - simplified: based on hasUniqueContent
  if (hasUniqueContent === true) {
    score += 0.10
  }
  
  // TechnicalQuality (0.10 weight) - simplified: based on CMS content
  if (hasCmsContent === true) {
    score += 0.10
  }
  
  // TrustSignals (0.10 weight) - based on metadata
  const { metadata } = params
  if (metadata?.featured === true || metadata?.priority === 'high') {
    score += 0.05
  }
  if (metadata?.engagementScore && metadata.engagementScore >= 0.8) {
    score += 0.05
  }
  
  // SecondarySignals (0.00-0.05 weight) - word count bonus
  if (wordCount !== undefined) {
    if (wordCount >= 2000) {
      score += 0.05
    } else if (wordCount >= 1200) {
      score += 0.03
    }
    // <1200 = +0.00 (no bonus)
  }
  
  // Cap at 1.0
  return Math.min(score, 1.0)
}

/**
 * Get canonical URL from route params
 */
function getCanonicalUrl(params: IndexPolicyParams): string {
  const { routeType, path, city, service, industry } = params
  const seg = (v: string | undefined) => (v == null || v === '' || String(v).includes('undefined') ? '' : String(v).replace(/undefined/g, ''))
  
  if (routeType === 'city-industry-service') {
    return `${BASE_URL}/${seg(city)}/industry/${seg(industry)}/${seg(service)}`
  }
  if (routeType === 'city-industry') {
    return `${BASE_URL}/${seg(city)}/industry/${seg(industry)}`
  }
  if (routeType === 'city-service') {
    return `${BASE_URL}/${seg(city)}/${seg(service)}`
  }
  if (routeType === 'city') {
    return `${BASE_URL}/${seg(city)}`
  }
  if (routeType === 'service') {
    return `${BASE_URL}/services/${seg(service)}`
  }
  if (routeType === 'core') {
    const p = seg(path ?? '')
    return p ? `${BASE_URL}/${p.replace(/^\//, '')}` : BASE_URL
  }
  return BASE_URL
}

/**
 * Single source of truth: Get SEO directives for a URL
 */
export function getSeoDirectives(url: string, params: IndexPolicyParams): SeoDirectives {
  const { routeType } = params
  const reasonCodes: string[] = []
  
  // Hard-fail check (overrides everything)
  const hardFailReason = checkHardFailTriggers(params)
  if (hardFailReason) {
    log('warn', 'Hard-fail trigger', { url, routeType, reason: hardFailReason })
    return {
      index: false,
      follow: true,
      canonical: getCanonicalUrl(params),
      inSitemap: false,
      score: 0.0,
      reasonCodes: [hardFailReason],
      gates: {
        twoOfThree: false,
        scorePass: false,
        hardFail: true,
        hardPass: false
      }
    }
  }
  
  // City×Industry hub: ALWAYS noindex,follow, excluded from sitemap
  if (routeType === 'city-industry') {
    return {
      index: false,
      follow: true,
      canonical: getCanonicalUrl(params),
      inSitemap: false,
      score: 0.0,
      reasonCodes: ['CITY_INDUSTRY_HUB_ALWAYS_NOINDEX'],
      gates: {
        twoOfThree: false,
        scorePass: false,
        hardFail: false,
        hardPass: false
      }
    }
  }
  
  // Hard-pass check (bypasses Stage A/B)
  const hardPassReason = checkHardPassTriggers(params)
  if (hardPassReason) {
    reasonCodes.push(hardPassReason)
    // CRITICAL: City×Industry hub exception - hard-pass NEVER overrides noindex rule
    // This check is redundant (city-industry already returned above) but defensive
    if (routeType === 'city-industry') {
      // This should never happen due to early return above, but guard against logic errors
      log('error', 'Hard-pass attempted on city-industry hub (should be impossible)', { url, routeType, reason: hardPassReason })
      // Fall through - city-industry hub is already handled above
    }
    // City×Industry hub exception: hard-pass doesn't override noindex rule
    if (routeType !== 'city-industry') {
      log('info', 'Hard-pass trigger', { url, routeType, reason: hardPassReason })
      return {
        index: true,
        follow: true,
        canonical: getCanonicalUrl(params),
        inSitemap: true,
        score: 1.0,
        reasonCodes: [hardPassReason],
        gates: {
          twoOfThree: true,
          scorePass: true,
          hardFail: false,
          hardPass: true
        }
      }
    }
  }
  
  // Core, Service, City: Always index
  if (routeType === 'core' || routeType === 'service' || routeType === 'city') {
    return {
      index: true,
      follow: true,
      canonical: getCanonicalUrl(params),
      inSitemap: true,
      score: 1.0,
      reasonCodes: ['TIER1_ALWAYS_INDEX'],
      gates: {
        twoOfThree: true,
        scorePass: true,
        hardFail: false,
        hardPass: false
      }
    }
  }
  
  // City×Service: Tier 1 service check + quality gates
  if (routeType === 'city-service') {
    const service = params.service
    const isTier1Service = service && TIER1_SERVICES.includes(service)
    
    if (!isTier1Service) {
      return {
        index: false,
        follow: true,
        canonical: getCanonicalUrl(params),
        inSitemap: false,
        score: 0.0,
        reasonCodes: ['NOT_TIER1_SERVICE'],
        gates: {
          twoOfThree: false,
          scorePass: false,
          hardFail: false,
          hardPass: false
        }
      }
    }
    
    // Stage A: 2-of-3 rule (actually 2-of-2 for city-service)
    const twoOfThree = checkTwoOfThreeRule(routeType, params.blocks)
    if (!twoOfThree) {
      reasonCodes.push('STAGE_A_FAILED')
      return {
        index: false,
        follow: true,
        canonical: getCanonicalUrl(params),
        inSitemap: false,
        score: 0.0,
        reasonCodes,
        gates: {
          twoOfThree: false,
          scorePass: false,
          hardFail: false,
          hardPass: false
        }
      }
    }
    
    // Stage B: Scoring (threshold: 0.65)
    const score = computeQualityScore(routeType, params)
    const scorePass = score >= 0.65
    
    if (!scorePass) {
      reasonCodes.push('STAGE_B_FAILED', `SCORE_${score.toFixed(2)}`)
      return {
        index: false,
        follow: true,
        canonical: getCanonicalUrl(params),
        inSitemap: false,
        score,
        reasonCodes,
        gates: {
          twoOfThree: true,
          scorePass: false,
          hardFail: false,
          hardPass: false
        }
      }
    }
    
    reasonCodes.push('PASSED_QUALITY_GATES', `SCORE_${score.toFixed(2)}`)
    log('info', 'City×Service indexed', { url, routeType, score, reasonCodes })
    return {
      index: true,
      follow: true,
      canonical: getCanonicalUrl(params),
      inSitemap: true,
      score,
      reasonCodes,
      gates: {
        twoOfThree: true,
        scorePass: true,
        hardFail: false,
        hardPass: false
      }
    }
  }
  
  // City×Industry×Service: Quality gates only
  if (routeType === 'city-industry-service') {
    // Stage A: 2-of-3 rule (3-of-3 required)
    const twoOfThree = checkTwoOfThreeRule(routeType, params.blocks)
    if (!twoOfThree) {
      reasonCodes.push('STAGE_A_FAILED')
      return {
        index: false,
        follow: true,
        canonical: getCanonicalUrl(params),
        inSitemap: false,
        score: 0.0,
        reasonCodes,
        gates: {
          twoOfThree: false,
          scorePass: false,
          hardFail: false,
          hardPass: false
        }
      }
    }
    
    // Stage B: Scoring (threshold: 0.75)
    const score = computeQualityScore(routeType, params)
    const scorePass = score >= 0.75
    
    if (!scorePass) {
      reasonCodes.push('STAGE_B_FAILED', `SCORE_${score.toFixed(2)}`)
      return {
        index: false,
        follow: true,
        canonical: getCanonicalUrl(params),
        inSitemap: false,
        score,
        reasonCodes,
        gates: {
          twoOfThree: true,
          scorePass: false,
          hardFail: false,
          hardPass: false
        }
      }
    }
    
    reasonCodes.push('PASSED_QUALITY_GATES', `SCORE_${score.toFixed(2)}`)
    log('info', 'City×Industry×Service indexed', { url, routeType, score, reasonCodes })
    return {
      index: true,
      follow: true,
      canonical: getCanonicalUrl(params),
      inSitemap: true,
      score,
      reasonCodes,
      gates: {
        twoOfThree: true,
        scorePass: true,
        hardFail: false,
        hardPass: false
      }
    }
  }
  
  // Default: noindex
  const directives: SeoDirectives = {
    index: false,
    follow: true,
    canonical: getCanonicalUrl(params),
    inSitemap: false,
    score: 0.0,
    reasonCodes: ['UNKNOWN_ROUTE_TYPE'],
    gates: {
      twoOfThree: false,
      scorePass: false,
      hardFail: false,
      hardPass: false
    }
  }
  
  // Check for violations
  checkDirectivesForViolations(url, routeType, directives)
  
  return directives
}

/**
 * Legacy shouldIndex function (backward compatibility)
 * Calls getSeoDirectives internally
 */
export function shouldIndex(url: string, params: IndexPolicyParams): boolean {
  const directives = getSeoDirectives(url, params)
  return directives.index
}

/**
 * Legacy IndexPolicyService class (backward compatibility)
 * Wraps getSeoDirectives to maintain existing API
 */
export class IndexPolicyService {
  /**
   * Get indexing policy for a given route (legacy method)
   * Now uses getSeoDirectives internally
   */
  static getPolicy(params: IndexPolicyParams): IndexPolicy {
    const url = getCanonicalUrl(params)
    const directives = getSeoDirectives(url, params)
    
    // Map directives to legacy IndexPolicy format
    const sitemapBucket = directives.inSitemap ? (
      params.routeType === 'core' ? 'core' :
      params.routeType === 'service' ? 'services' :
      params.routeType === 'city' || params.routeType === 'city-service' ? 'locations-tier1' :
      params.routeType === 'city-industry-service' ? 'programmatic-tier2' :
      null
    ) : null
    
    // Determine priority and change frequency
    let priority = 0.5
    let changeFrequency: IndexPolicy['changeFrequency'] = 'monthly'
    
    if (params.routeType === 'core') {
      priority = 1.0
      changeFrequency = 'daily'
    } else if (params.routeType === 'service') {
      priority = 0.8
      changeFrequency = 'weekly'
    } else if (params.routeType === 'city') {
      priority = 0.8
      changeFrequency = 'weekly'
    } else if (params.routeType === 'city-service') {
      priority = 0.7
      changeFrequency = 'weekly'
    } else if (params.routeType === 'city-industry-service') {
      priority = 0.6
      changeFrequency = 'monthly'
    }
    
    return {
      indexable: directives.index,
      sitemapBucket,
      robotsDirectives: {
        index: directives.index,
        follow: directives.follow
      },
      canonical: directives.canonical,
      priority,
      changeFrequency
    }
  }

  /**
   * Check if a city exists in the valid city list
   */
  static isValidCity(city: string): boolean {
    return citySlugs.includes(city)
  }

  /**
   * Check if an industry exists in the valid industry list
   */
  static isValidIndustry(industry: string): boolean {
    return industrySlugs.includes(industry)
  }

  /**
   * Check if a service is a Tier 1 service
   */
  static isTier1Service(service: string): boolean {
    return TIER1_SERVICES.includes(service)
  }
}
