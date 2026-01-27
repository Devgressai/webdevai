/**
 * CTA Governance: Funnel Stage Definitions and Page Type Mapping
 * 
 * Maps page types to funnel stages based on user intent and conversion goals.
 * Used by CTA validation and recommendation systems.
 */

export type FunnelStage = 'TOFU' | 'MOFU' | 'BOFU'

/**
 * Page types in the WebVello platform
 * Matches route types and page template classifications
 */
export type PageType =
  | 'authority-hub'
  | 'authority-hub-educational' // /resources, /blog
  | 'ai-geo-hub'
  | 'cluster'
  | 'service'
  | 'industry'
  | 'city'
  | 'city-service'
  | 'city-industry-hub'
  | 'city-industry-service'
  | 'case-study'
  | 'proof-engine'
  | 'trust'
  | 'entity'
  | 'glossary'
  | 'tool'
  | 'research'
  | 'comparison'
  | 'pricing'
  | 'solutions'
  | 'media-pr'
  | 'core' // Homepage, about, contact, etc.

/**
 * Page types that are exempt from primary CTA requirement
 */
export const EXEMPT_PAGE_TYPES: PageType[] = [
  'entity',
  'glossary'
]

/**
 * Legal/governance pages that are exempt from primary CTA requirement
 * These are typically trust/privacy/compliance pages
 */
export const LEGAL_PAGE_PATHS: string[] = [
  '/trust/privacy',
  '/trust/terms',
  '/trust/compliance',
  '/trust/data-ethics',
  '/trust/ai-ethics',
  '/trust/security-architecture'
]

/**
 * Map page type to default funnel stage
 * Based on Page Template System v1.1 Section 19.2
 */
export const PAGE_TYPE_TO_FUNNEL_STAGE: Record<PageType, FunnelStage> = {
  'authority-hub': 'MOFU', // Main hub pages focus on consideration
  'authority-hub-educational': 'TOFU', // Educational content for awareness
  'ai-geo-hub': 'MOFU', // Can serve both consideration and conversion (default MOFU)
  'cluster': 'TOFU', // Educational clusters (default TOFU)
  'service': 'BOFU', // Direct service pages target conversion
  'industry': 'MOFU', // Industry pages focus on qualification
  'city': 'MOFU', // City pages focus on local qualification
  'city-service': 'BOFU', // Local service pages target conversion
  'city-industry-hub': 'TOFU', // Navigation pages, low conversion intent
  'city-industry-service': 'BOFU', // Highly specific, high conversion intent
  'case-study': 'MOFU', // Proof and validation for consideration
  'proof-engine': 'MOFU', // Aggregated proof for consideration
  'trust': 'TOFU', // Trust building for awareness/consideration (default TOFU)
  'entity': 'TOFU', // Educational entity pages
  'glossary': 'TOFU', // Educational definitions
  'tool': 'TOFU', // Tools for awareness and engagement
  'research': 'TOFU', // Research content for awareness
  'comparison': 'TOFU', // Comparisons for awareness/consideration (default TOFU)
  'pricing': 'BOFU', // Pricing pages target conversion
  'solutions': 'MOFU', // Solutions can serve consideration or conversion (default MOFU)
  'media-pr': 'TOFU', // Media content for awareness
  'core': 'MOFU' // Core pages (homepage, about, etc.) default to MOFU
}

/**
 * Infer funnel stage from page type and optional pathname
 * Some page types can have different funnel stages based on path
 */
export function getFunnelStage(pageType: PageType, pathname?: string): FunnelStage {
  // Special cases based on pathname
  if (pathname) {
    // Authority hub educational pages
    if (pageType === 'authority-hub' && (pathname.startsWith('/resources') || pathname.startsWith('/blog'))) {
      return 'TOFU'
    }
    
    // Trust pages can be TOFU or MOFU based on content
    if (pageType === 'trust' && pathname.includes('/trust/our-')) {
      return 'MOFU' // Process/methodology pages are more MOFU
    }
    
    // Solutions pages can be MOFU or BOFU
    if (pageType === 'solutions' && pathname.includes('/solutions/')) {
      // Check if it's a conversion-focused solution page
      const conversionSolutions = ['website-conversion', 'website-leads', 'website-roi']
      if (conversionSolutions.some(s => pathname.includes(s))) {
        return 'BOFU'
      }
    }
  }
  
  // Return default mapping
  return PAGE_TYPE_TO_FUNNEL_STAGE[pageType] || 'MOFU'
}

/**
 * Infer page type from route path
 * Used by CI validation and automatic page type detection
 */
export function inferPageTypeFromPath(pathname: string): PageType | null {
  // Remove leading/trailing slashes and normalize
  const path = pathname.replace(/^\/|\/$/g, '').toLowerCase()
  
  if (path === '' || path === 'about' || path === 'contact') {
    return 'core'
  }
  
  if (path === 'pricing') {
    return 'pricing'
  }
  
  if (path.startsWith('blog/')) {
    return 'authority-hub-educational'
  }
  
  if (path.startsWith('resources/') || path === 'resources') {
    return 'authority-hub-educational'
  }
  
  if (path.startsWith('services/')) {
    return 'service'
  }
  
  if (path.startsWith('industries/')) {
    return 'industry'
  }
  
  if (path.startsWith('tools/') || path === 'seo-audit' || path === 'website-speed-test') {
    return 'tool'
  }
  
  if (path.startsWith('case-studies/') || path === 'case-studies') {
    return 'case-study'
  }
  
  if (path.startsWith('solutions/')) {
    return 'solutions'
  }
  
  if (path.startsWith('entity/')) {
    return 'entity'
  }
  
  if (path.startsWith('trust/')) {
    return 'trust'
  }
  
  // City patterns
  const cityServiceMatch = path.match(/^([^/]+)\/([^/]+)$/)
  if (cityServiceMatch) {
    // Check if second segment is a service (not industry)
    const service = cityServiceMatch[2]
    if (!service.includes('industry')) {
      return 'city-service'
    }
  }
  
  const cityIndustryServiceMatch = path.match(/^([^/]+)\/industry\/([^/]+)\/([^/]+)$/)
  if (cityIndustryServiceMatch) {
    return 'city-industry-service'
  }
  
  const cityIndustryMatch = path.match(/^([^/]+)\/industry\/([^/]+)$/)
  if (cityIndustryMatch) {
    return 'city-industry-hub'
  }
  
  // City-only (must be after other city patterns)
  const cityOnlyMatch = path.match(/^[^/]+$/)
  if (cityOnlyMatch && !path.includes('/')) {
    return 'city'
  }
  
  // Default: unknown
  return null
}

/**
 * Check if page type is exempt from primary CTA requirement
 */
export function isExemptFromPrimaryCTA(pageType: PageType, pathname?: string): boolean {
  if (EXEMPT_PAGE_TYPES.includes(pageType)) {
    return true
  }
  
  if (pathname && LEGAL_PAGE_PATHS.some(legalPath => pathname.startsWith(legalPath))) {
    return true
  }
  
  return false
}
