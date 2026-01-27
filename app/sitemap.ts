import { MetadataRoute } from 'next'
import { citySlugs } from '../lib/cities'
import { industrySlugs } from '../lib/industries'
import { getBlogPosts } from '../lib/get-blog-posts'
import {
  determineRouteType,
  isAlwaysIndexableRoute,
  shouldIncludeInSitemap,
  logSitemapExclusion,
  type RouteType
} from '../lib/sitemap-governance'

/**
 * Sitemap Generation with Governance Gates
 * 
 * GOVERNANCE PRINCIPLES:
 * 1. Only include URLs that are ALWAYS indexable OR explicitly pass governance gates
 * 2. Programmatic routes (city×service, city×industry×service) are conditional
 * 3. Cannot assume blocks exist at sitemap generation time (build-time vs runtime)
 * 
 * WHY WE CAN'T ASSUME BLOCKS EXIST:
 * - Sitemap generation happens at build time
 * - Content blocks may be loaded at runtime (e.g., from CMS, API)
 * - Empty/missing blocks would create thin pages that hurt SEO
 * - We validate route eligibility based on known entity lists (cities, services, industries)
 * 
 * SAFEGUARDS:
 * - Unknown route types => excluded by default
 * - Conditional routes require: inSitemap=true AND (hasRequiredBlocks OR eligibilityPrecomputed)
 * - Always-indexable routes are validated but always included
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.webvello.com'
  const isDev = process.env.NODE_ENV === 'development'
  
  // NOTE: Admin routes (/admin/*) are explicitly excluded from sitemap
  // They are also blocked in robots.txt and have noindex meta tags
  
  // Core pages - high priority, high traffic potential
  const corePages = [
    '', // Homepage
    '/about',
    '/contact',
    '/pricing',
    '/resources',
    '/case-studies',
    '/industries',
    '/locations',
    '/locations/hawaii',
    '/solutions',
    '/blog',
    '/seo-audit',
    '/website-speed-test',
    '/enhanced-demo'
  ]

  // Hawaii location pages - high priority for local SEO
  const hawaiiLocationPages = [
    '/locations/hawaii/kona',
    '/locations/hawaii/honolulu'
  ]

  // Solutions pages
  const solutionsPages = [
    'agency-results',
    'declining-traffic',
    'google-visibility',
    'website-conversion',
    'website-leads',
    'website-roi'
  ]

  // Services that have standalone pages under /services/
  const standaloneServices = [
    'website-design',
    'website-redesign',
    'web-development',
    'rapid-web-design',
    'ui-ux-design',
    'ecommerce-design',
    'app-design-development',
    'software-design-development',
    'software-development',
    'shopify-development',
    'wordpress-development',
    'ai-consulting',
    'ai-seo',
    'ai-digital-marketing',
    'ai-gpt-integration',
    'ai-agent-development',
    'chatgpt-optimization',
    'generative-engine-optimization',
    'answer-engine-optimization',
    'enterprise-geo-services',
    'seo',
    'local-seo',
    'digital-marketing',
    'email-marketing-design',
    'social-media-design',
    'cro-ecommerce',
    'cro-lead-generation',
    // Additional service pages
    'content-marketing',
    'core-web-vitals-optimization',
    'programmatic-seo',
    'schema-markup-services',
    'voice-search-optimization',
    'zero-click-search-optimization',
    'web-application-development-company',
    'web-application-development-chicago',
    'retail-development-services',
    'freight-forwarder-web-design',
    'seo-company-government-website',
    'seo-doctors-kansas-city',
    'seo-company-mesa-arizona',
    'wordpress-developers-denver',
    'portland-web-marketing',
    'jacksonville-ai-seo',
    'energy-seo-company',
    'real-estate-seo-california',
    'seo-company-mesa',
    'seo-baltimore',
    'seo-services-louisville',
    'seo-consulting-charlotte',
    'web-design-albuquerque',
    'web-design-columbus',
    'web-design-oklahoma-city',
    'web-development-fresno',
    'web-development-las-vegas',
    'website-design-louisville',
    'website-design-oklahoma-city',
    'auto-repair-website-design-milwaukee',
    'biotech-website-design-chicago',
    'dairy-industry-website-design-los-angeles',
    'educational-website-development-charlotte',
    'medical-website-design-austin',
    'surgeon-web-design-austin',
    // GEO Services pages
    'geo-services',
    'geo-los-angeles',
    'geo-new-york',
    'geo-chicago',
    'geo-houston',
    'geo-phoenix',
    'geo-dallas',
    'geo-san-francisco',
    'geo-seattle',
    'geo-denver',
    'geo-atlanta',
    'geo-miami',
    'geo-home-services',
    'geo-professional-services',
    'geo-saas-technology',
    'geo-boston',
    'geo-portland',
    'geo-san-diego',
    'geo-austin',
    'geo-ecommerce',
    'geo-healthcare',
    'geo-real-estate',
    'geo-financial-services',
    'geo-legal',
    'geo-restaurants',
    'geo-landscaping',
    'geo-hvac',
    'geo-plumbing',
    'geo-roofing',
    'geo-electricians',
    'geo-auto-repair',
    'geo-san-jose',
    'geo-palo-alto',
    'geo-mountain-view',
    'geo-santa-monica',
    'geo-irvine',
    'geo-sunnyvale',
    'geo-cupertino',
    'geo-bellevue',
    'geo-redmond',
    'geo-plano',
    'geo-frisco',
    'geo-scottsdale',
    'geo-tempe',
    'geo-chandler',
    'geo-naperville',
    'geo-philadelphia',
    'geo-pittsburgh',
    'geo-nashville',
    'geo-charlotte',
    'geo-memphis',
    'geo-louisville',
    'geo-milwaukee',
    'geo-jacksonville',
    'geo-tampa',
    'geo-orlando',
    'geo-san-antonio',
    'geo-fort-worth',
    'geo-arlington',
    'geo-el-paso',
    'geo-corpus-christi',
    'geo-las-vegas',
    'geo-reno',
    'geo-kansas-city',
    'geo-st-louis',
    'geo-oklahoma-city',
    'geo-tulsa',
    'geo-detroit',
    'geo-cleveland',
    'geo-cincinnati',
    'geo-columbus',
    'geo-indianapolis',
    'geo-minneapolis',
    'geo-salt-lake-city',
    'geo-aurora',
    'geo-sacramento',
    'geo-fresno',
    'geo-bakersfield',
    'geo-baltimore',
    'geo-richmond',
    'geo-virginia-beach',
    'geo-buffalo',
    'geo-rochester',
    'geo-albuquerque',
    'geo-tucson',
    'geo-mesa',
    'geo-spokane',
    'geo-boise',
    'geo-anchorage',
    'geo-honolulu',
    'geo-madison',
    'geo-wichita',
    'geo-omaha',
    'geo-raleigh',
    'geo-new-orleans',
    'seo-geo-packages',
    'web-development-packages',
    // State service pages (50 US states)
    'alabama',
    'alaska',
    'arizona',
    'arkansas',
    'california',
    'colorado',
    'connecticut',
    'delaware',
    'florida',
    'georgia',
    'hawaii',
    'idaho',
    'illinois',
    'indiana',
    'iowa',
    'kansas',
    'kentucky',
    'louisiana',
    'maine',
    'maryland',
    'massachusetts',
    'michigan',
    'minnesota',
    'mississippi',
    'missouri',
    'montana',
    'nebraska',
    'nevada',
    'new-hampshire',
    'new-jersey',
    'new-mexico',
    'new-york',
    'north-carolina',
    'north-dakota',
    'ohio',
    'oklahoma',
    'oregon',
    'pennsylvania',
    'rhode-island',
    'south-carolina',
    'south-dakota',
    'tennessee',
    'texas',
    'utah',
    'vermont',
    'virginia',
    'washington',
    'west-virginia',
    'wisconsin',
    'wyoming'
  ]

  // Use ALL cities for comprehensive coverage
  const allCities = citySlugs
  
  // Key services for city+service combinations
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

  // Prepare entity lists once for governance functions (performance optimization)
  // This avoids repeated dynamic imports in getSeoDirectives
  const entityLists = {
    citySlugs: allCities,
    industrySlugs: industrySlugs,
    validServiceSlugs: [...new Set([...keyServices, 'web-development', 'seo', 'website-design'])]
  }

  // Get all blog posts with error handling
  let blogPosts: Awaited<ReturnType<typeof getBlogPosts>> = []
  try {
    blogPosts = await getBlogPosts()
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  // Generate core page entries
  // These are always-indexable routes - validated but always included
  const coreEntries: MetadataRoute.Sitemap = []
  for (const page of corePages) {
    const pathname = page || '/'
    const routeType = determineRouteType(pathname)
    
    // Validate that it's actually an always-indexable route
    if (!isAlwaysIndexableRoute(routeType, pathname)) {
      logSitemapExclusion(pathname, routeType, 'Expected always-indexable but failed check', isDev)
      continue
    }
    
    // Safeguard: if routeType is unknown, exclude
    if (routeType === 'unknown') {
      logSitemapExclusion(pathname, routeType, 'Unknown route type - excluded by default', isDev)
      continue
    }
    
    coreEntries.push({
      url: `${baseUrl}${pathname}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'daily' as const : 'monthly' as const,
      priority: page === '' ? 1.0 : 0.7,
    })
  }

  // Generate solutions page entries - ensure all solutions pages are included
  // These are always-indexable routes
  const solutionsEntries: MetadataRoute.Sitemap = []
  for (const solution of solutionsPages) {
    const pathname = `/solutions/${solution}`
    const routeType = determineRouteType(pathname)
    
    // Validate that it's actually an always-indexable route
    if (!isAlwaysIndexableRoute(routeType, pathname)) {
      logSitemapExclusion(pathname, routeType, 'Expected always-indexable but failed check', isDev)
      continue
    }
    
    solutionsEntries.push({
      url: `${baseUrl}${pathname}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })
  }

  // Generate service page entries
  // These are always-indexable routes
  const serviceEntries: MetadataRoute.Sitemap = []
  for (const service of standaloneServices) {
    const pathname = `/services/${service}`
    const routeType = determineRouteType(pathname)
    
    // Validate that it's actually an always-indexable route
    if (!isAlwaysIndexableRoute(routeType, pathname)) {
      logSitemapExclusion(pathname, routeType, 'Expected always-indexable but failed check', isDev)
      continue
    }
    
    serviceEntries.push({
      url: `${baseUrl}${pathname}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
  }

  // Generate blog post entries with error handling for date parsing
  // These are always-indexable routes
  const blogEntries: MetadataRoute.Sitemap = []
  for (const post of blogPosts) {
    const pathname = `/blog/${post.slug}`
    const routeType = determineRouteType(pathname)
    
    // Validate that it's actually an always-indexable route
    if (!isAlwaysIndexableRoute(routeType, pathname)) {
      logSitemapExclusion(pathname, routeType, 'Expected always-indexable but failed check', isDev)
      continue
    }
    
    let lastModified: Date
    try {
      lastModified = post.date ? new Date(post.date) : new Date()
    } catch (error) {
      lastModified = new Date()
    }
    
    blogEntries.push({
      url: `${baseUrl}${pathname}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })
  }

  // Generate city hub page entries
  // IMPORTANT: These are conditional routes - must pass governance gates
  const cityEntries: MetadataRoute.Sitemap = []
  for (const city of allCities) {
    const pathname = `/${city}`
    const routeType = determineRouteType(pathname)
    
    // Only include if it passes governance gates
    const shouldInclude = await shouldIncludeInSitemap(routeType, pathname, { city }, entityLists)
    
    if (shouldInclude) {
      cityEntries.push({
        url: `${baseUrl}${pathname}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })
    } else {
      logSitemapExclusion(pathname, routeType, 'Failed governance gates', isDev)
    }
  }

  // Generate city+service combination entries
  // IMPORTANT: These are conditional routes - must pass governance gates
  // We cannot assume blocks exist, so we only include if eligibility is precomputed
  const cityServiceEntries: MetadataRoute.Sitemap = []
  for (const city of allCities) {
    for (const service of keyServices) {
      const pathname = `/${city}/${service}`
      const routeType = determineRouteType(pathname)
      
      // Only include if it passes governance gates
      const shouldInclude = await shouldIncludeInSitemap(routeType, pathname, { city, service }, entityLists)
      
      if (shouldInclude) {
        cityServiceEntries.push({
          url: `${baseUrl}${pathname}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        })
      } else {
        logSitemapExclusion(pathname, routeType, 'Failed governance gates', isDev)
      }
    }
  }

  // Generate city-industry hub page entries
  // Format: /[city]/industry/[industry]
  // IMPORTANT: These are conditional routes - must pass governance gates
  // We cannot assume blocks exist, so we only include if eligibility is precomputed
  const cityIndustryEntries: MetadataRoute.Sitemap = []
  for (const city of allCities) {
    for (const industry of industrySlugs) {
      const pathname = `/${city}/industry/${industry}`
      const routeType = determineRouteType(pathname)
      
      // Only include if it passes governance gates
      const shouldInclude = await shouldIncludeInSitemap(routeType, pathname, { city, industry }, entityLists)
      
      if (shouldInclude) {
        cityIndustryEntries.push({
          url: `${baseUrl}${pathname}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        })
      } else {
        logSitemapExclusion(pathname, routeType, 'Failed governance gates', isDev)
      }
    }
  }

  // Generate city-industry-service combination entries
  // Format: /[city]/industry/[industry]/[service]
  // Services: web-development, seo, website-design (as defined in generateStaticParams)
  // IMPORTANT: These are conditional routes - must pass governance gates
  // We cannot assume blocks exist, so we only include if eligibility is precomputed
  const cityIndustryServiceEntries: MetadataRoute.Sitemap = []
  const cityIndustryServices = ['web-development', 'seo', 'website-design']
  for (const city of allCities) {
    for (const industry of industrySlugs) {
      for (const service of cityIndustryServices) {
        const pathname = `/${city}/industry/${industry}/${service}`
        const routeType = determineRouteType(pathname)
        
        // Only include if it passes governance gates
        const shouldInclude = await shouldIncludeInSitemap(routeType, pathname, { city, industry, service }, entityLists)
        
        if (shouldInclude) {
          cityIndustryServiceEntries.push({
            url: `${baseUrl}${pathname}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          })
        } else {
          logSitemapExclusion(pathname, routeType, 'Failed governance gates', isDev)
        }
      }
    }
  }

  // Generate Hawaii location page entries
  // These are always-indexable routes (location pages)
  const hawaiiLocationEntries: MetadataRoute.Sitemap = []
  for (const page of hawaiiLocationPages) {
    const pathname = page
    const routeType = determineRouteType(pathname)
    
    // Validate that it's actually an always-indexable route
    if (!isAlwaysIndexableRoute(routeType, pathname)) {
      logSitemapExclusion(pathname, routeType, 'Expected always-indexable but failed check', isDev)
      continue
    }
    
    hawaiiLocationEntries.push({
      url: `${baseUrl}${pathname}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
  }

  return [
    ...coreEntries,
    ...solutionsEntries,
    ...serviceEntries,
    ...blogEntries,
    ...hawaiiLocationEntries,
    ...cityEntries,
    ...cityServiceEntries,
    ...cityIndustryEntries,
    ...cityIndustryServiceEntries
  ]
}
