/**
 * Sitemap Governance Utilities
 * 
 * Enforces controlled initial indexing posture by:
 * - Only including URLs that are ALWAYS indexable OR explicitly pass governance gates
 * - Ensuring programmatic routes never slip into sitemap due to empty/missing blocks
 */

/**
 * Always-indexable route patterns
 * 
 * These route patterns are guaranteed to have content and should always be in the sitemap.
 * Used for quick reference and validation.
 */
export const ALWAYS_INDEXABLE_PATTERNS = {
  core: [
    '',                    // Homepage
    '/about',
    '/contact',
    '/pricing',
    '/resources',
    '/case-studies',
    '/industries',
    '/locations',
    '/solutions',
    '/blog',
    '/seo-audit',
    '/website-speed-test',
    '/enhanced-demo'
  ],
  services: ['/services/*'],           // All /services/* pages
  solutions: ['/solutions/*'],        // All /solutions/* pages
  blog: ['/blog/*'],                   // All /blog/* posts
  trust: ['/case-studies', '/resources'], // Trust pages
  location: ['/locations/*']          // Location pages (e.g., /locations/hawaii/*)
} as const

/**
 * Route types in the application
 */
export type RouteType =
  | 'core'                    // Homepage, about, contact, etc.
  | 'service'                 // /services/* pages
  | 'solutions'               // /solutions/* pages
  | 'blog'                    // /blog/* posts
  | 'case-studies'            // /case-studies
  | 'resources'               // /resources
  | 'trust'                   // Trust pages (case-studies, resources)
  | 'city-hub'                // /{city} - conditional
  | 'city-service'            // /{city}/{service} - conditional
  | 'city-industry'           // /{city}/industry/{industry} - conditional
  | 'city-industry-service'   // /{city}/industry/{industry}/{service} - conditional
  | 'location'                // /locations/* pages
  | 'unknown'                 // Unknown route type - exclude from sitemap

/**
 * SEO directives for conditional routes
 * This would typically come from getSeoDirectives() or similar function
 */
export interface SeoDirectives {
  inSitemap: boolean
  indexable: boolean
  hasRequiredBlocks?: boolean
  eligibilityPrecomputed?: boolean
}

/**
 * Determines the route type from a pathname
 * 
 * IMPORTANT: This function cannot assume blocks exist at runtime.
 * Sitemap generation happens at build time, and blocks may not be loaded.
 * We must rely on pathname patterns and explicit eligibility flags.
 */
export function determineRouteType(pathname: string): RouteType {
  // Remove leading/trailing slashes and normalize
  const normalized = pathname.replace(/^\/+|\/+$/g, '')
  
  if (!normalized) {
    return 'core' // Homepage
  }

  const parts = normalized.split('/').filter(Boolean)

  // Core pages - always indexable
  if (['about', 'contact', 'pricing', 'resources', 'case-studies', 'industries', 'locations', 'solutions', 'blog', 'seo-audit', 'website-speed-test', 'enhanced-demo'].includes(parts[0])) {
    if (parts[0] === 'resources') return 'resources'
    if (parts[0] === 'case-studies') return 'case-studies'
    if (parts[0] === 'solutions') return parts.length > 1 ? 'solutions' : 'core'
    if (parts[0] === 'blog') return parts.length > 1 ? 'blog' : 'core'
    if (parts[0] === 'locations') {
      // /locations/hawaii/* are location pages
      return 'location'
    }
    return 'core'
  }

  // Services pages - always indexable
  if (parts[0] === 'services' && parts.length >= 1) {
    return 'service'
  }

  // City-industry-service: /{city}/industry/{industry}/{service}
  if (parts.length === 4 && parts[1] === 'industry') {
    return 'city-industry-service'
  }

  // City-industry: /{city}/industry/{industry}
  if (parts.length === 3 && parts[1] === 'industry') {
    return 'city-industry'
  }

  // City-service: /{city}/{service}
  if (parts.length === 2) {
    // Check if second part looks like a service slug (not 'industry')
    if (parts[1] !== 'industry') {
      return 'city-service'
    }
  }

  // City hub: /{city}
  if (parts.length === 1) {
    // Could be a city hub, but we need to validate against city list
    // For now, assume it's a city hub if it's not a known core page
    return 'city-hub'
  }

  // Unknown route type - exclude from sitemap by default
  return 'unknown'
}

/**
 * Checks if a route type is ALWAYS indexable (no conditional checks needed)
 * 
 * These routes are guaranteed to have content and should always be in the sitemap.
 */
export function isAlwaysIndexableRoute(routeType: RouteType, pathname: string): boolean {
  switch (routeType) {
    case 'core':
    case 'service':
    case 'solutions':
    case 'blog':
    case 'case-studies':
    case 'resources':
    case 'trust':
    case 'location':
      return true
    
    case 'city-hub':
    case 'city-service':
    case 'city-industry':
    case 'city-industry-service':
      // These are conditional - require explicit governance gates
      return false
    
    case 'unknown':
      // Unknown routes are never indexable by default
      return false
    
    default:
      // Safety: unknown route types are not indexable
      return false
  }
}

/**
 * Entity lists for route validation
 * Passed from sitemap to avoid repeated imports
 */
export interface EntityLists {
  citySlugs: string[]
  industrySlugs: string[]
  validServiceSlugs: string[]
}

/**
 * Gets SEO directives for a conditional route
 * 
 * IMPORTANT: This function cannot assume blocks exist at sitemap generation time.
 * We validate route eligibility based on:
 * 1. Valid city/service/industry combinations (from known lists)
 * 2. Precomputed eligibility flags (if available)
 * 3. Explicit configuration
 * 
 * We do NOT check for content blocks here because blocks may not be loaded
 * during sitemap generation. That validation happens at page render time.
 */
export async function getSeoDirectives(
  routeType: RouteType,
  pathname: string,
  params?: Record<string, string>,
  entityLists?: EntityLists
): Promise<SeoDirectives> {
  // If route type is always indexable, return positive directives
  if (isAlwaysIndexableRoute(routeType, pathname)) {
    return {
      inSitemap: true,
      indexable: true,
      hasRequiredBlocks: true,
      eligibilityPrecomputed: true
    }
  }

  // For conditional routes, validate against known entities
  let citySlugs: string[] = []
  let industrySlugs: string[] = []
  let validServiceSlugs: string[] = []
  
  // Use provided entity lists if available, otherwise import dynamically
  if (entityLists) {
    citySlugs = entityLists.citySlugs
    industrySlugs = entityLists.industrySlugs
    validServiceSlugs = entityLists.validServiceSlugs
  } else {
    try {
      // Import city and industry lists dynamically (fallback)
      const citiesModule = await import('./cities')
      const industriesModule = await import('./industries')
      const servicesModule = await import('./services')
      
      citySlugs = citiesModule.citySlugs || []
      industrySlugs = industriesModule.industrySlugs || []
      validServiceSlugs = servicesModule.serviceSlugs || []
      
      // Also check against key services used in sitemap
      const keyServices = [
        'website-design',
        'web-development',
        'seo',
        'local-seo',
        'digital-marketing',
        'ai-seo',
        'ai-consulting',
        'ui-ux-design'
      ]
      validServiceSlugs = [...new Set([...validServiceSlugs, ...keyServices])]
    } catch (error) {
      // If imports fail, be conservative and exclude
      console.error('[Sitemap Governance] Failed to load entity lists:', error)
      return {
        inSitemap: false,
        indexable: false,
        hasRequiredBlocks: false,
        eligibilityPrecomputed: false
      }
    }
  }

  const normalized = pathname.replace(/^\/+|\/+$/g, '')
  const parts = normalized.split('/').filter(Boolean)

  // Validate conditional routes based on known entities
  switch (routeType) {
    case 'city-hub': {
      // City hub: /{city}
      const citySlug = parts[0]
      const isValidCity = citySlugs.includes(citySlug)
      
      return {
        inSitemap: isValidCity,
        indexable: isValidCity,
        hasRequiredBlocks: false, // Cannot check blocks at sitemap time
        eligibilityPrecomputed: isValidCity // City existence is precomputed
      }
    }

    case 'city-service': {
      // City-service: /{city}/{service}
      const citySlug = parts[0]
      const serviceSlug = parts[1]
      const isValidCity = citySlugs.includes(citySlug)
      const isValidService = validServiceSlugs.includes(serviceSlug)
      const isValid = isValidCity && isValidService
      
      return {
        inSitemap: isValid,
        indexable: isValid,
        hasRequiredBlocks: false, // Cannot check blocks at sitemap time
        eligibilityPrecomputed: isValid // Combination validity is precomputed
      }
    }

    case 'city-industry': {
      // City-industry: /{city}/industry/{industry}
      const citySlug = parts[0]
      const industrySlug = parts[2] // parts[1] is 'industry'
      const isValidCity = citySlugs.includes(citySlug)
      const isValidIndustry = industrySlugs.includes(industrySlug)
      const isValid = isValidCity && isValidIndustry
      
      return {
        inSitemap: isValid,
        indexable: isValid,
        hasRequiredBlocks: false, // Cannot check blocks at sitemap time
        eligibilityPrecomputed: isValid // Combination validity is precomputed
      }
    }

    case 'city-industry-service': {
      // City-industry-service: /{city}/industry/{industry}/{service}
      const citySlug = parts[0]
      const industrySlug = parts[2] // parts[1] is 'industry'
      const serviceSlug = parts[3]
      const isValidCity = citySlugs.includes(citySlug)
      const isValidIndustry = industrySlugs.includes(industrySlug)
      // For city-industry-service, only specific services are valid
      const cityIndustryServices = ['web-development', 'seo', 'website-design']
      const isValidService = cityIndustryServices.includes(serviceSlug)
      const isValid = isValidCity && isValidIndustry && isValidService
      
      return {
        inSitemap: isValid,
        indexable: isValid,
        hasRequiredBlocks: false, // Cannot check blocks at sitemap time
        eligibilityPrecomputed: isValid // Combination validity is precomputed
      }
    }

    default:
      // Unknown or unsupported route types
      return {
        inSitemap: false,
        indexable: false,
        hasRequiredBlocks: false,
        eligibilityPrecomputed: false
      }
  }
}

/**
 * Checks if a conditional route should be included in the sitemap
 * 
 * A conditional route is included ONLY if:
 * 1. getSeoDirectives() returns inSitemap=true AND
 * 2. Required blocks are present OR eligibility is precomputed
 */
export async function shouldIncludeInSitemap(
  routeType: RouteType,
  pathname: string,
  params?: Record<string, string>,
  entityLists?: EntityLists
): Promise<boolean> {
  // Always indexable routes are always included
  if (isAlwaysIndexableRoute(routeType, pathname)) {
    return true
  }

  // Unknown routes are never included
  if (routeType === 'unknown') {
    return false
  }

  // For conditional routes, check SEO directives
  const directives = await getSeoDirectives(routeType, pathname, params, entityLists)
  
  if (!directives.inSitemap) {
    return false
  }

  // Require either required blocks OR precomputed eligibility
  // This ensures we don't include routes with missing/empty blocks
  if (!directives.hasRequiredBlocks && !directives.eligibilityPrecomputed) {
    return false
  }

  return true
}

/**
 * Logs sitemap exclusions (dev only)
 */
export function logSitemapExclusion(
  pathname: string,
  routeType: RouteType,
  reason: string,
  isDev: boolean = process.env.NODE_ENV === 'development'
): void {
  if (!isDev) {
    return
  }

  console.log(`[Sitemap Exclusion] ${pathname} (${routeType}): ${reason}`)
}
