import { MetadataRoute } from 'next'
import { citySlugs } from '../lib/cities'
import { getBlogPosts } from '../lib/get-blog-posts'
import { IndexPolicyService, getSeoDirectives } from '../lib/seo/index-policy'
import { cityDataSlugs } from '../lib/data/city-data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.webvello.com'
  
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

  // Key services for city+service (Tier 1 only; must match IndexPolicy TIER1_SERVICES)
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

  // Get all blog posts with error handling
  let blogPosts: Awaited<ReturnType<typeof getBlogPosts>> = []
  try {
    blogPosts = await getBlogPosts()
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  // Core + solutions: IndexPolicy routeType 'core' with path
  // GOVERNANCE: All core pages are always-index, but we still check directives.inSitemap
  // to ensure governance system has final say
  const corePaths = corePages.map((p) => (p === '' ? '' : p.replace(/^\//, '')))
  const solutionPaths = solutionsPages.map((s) => `solutions/${s}`)
  const hawaiiPaths = hawaiiLocationPages.map((p) => p.replace(/^\//, ''))
  const allCorePaths = [...corePaths, ...solutionPaths, ...hawaiiPaths]
  const coreEntries: MetadataRoute.Sitemap = []
  for (const path of allCorePaths) {
    const url = path ? `${baseUrl}/${path}` : baseUrl
    const directives = getSeoDirectives(url, { routeType: 'core', path })
    // GOVERNANCE: Only include if directives.inSitemap === true
    if (!directives.inSitemap) continue
    coreEntries.push({
      url: directives.canonical,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    })
  }

  // Service pages: IndexPolicy routeType 'service'
  // GOVERNANCE: All service pages are always-index, but we still check directives.inSitemap
  const serviceEntries: MetadataRoute.Sitemap = []
  for (const service of standaloneServices) {
    const url = `${baseUrl}/services/${service}`
    const directives = getSeoDirectives(url, { routeType: 'service', service })
    // GOVERNANCE: Only include if directives.inSitemap === true
    if (!directives.inSitemap) continue
    serviceEntries.push({
      url: directives.canonical,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  }

  // Generate blog post entries with error handling for date parsing
  const blogEntries = blogPosts.map((post) => {
    let lastModified: Date
    try {
      lastModified = post.date ? new Date(post.date) : new Date()
    } catch (error) {
      lastModified = new Date()
    }
    
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  })

  // City hub pages: IndexPolicy routeType 'city' (use citySlugs)
  const cityEntries: MetadataRoute.Sitemap = []
  for (const city of citySlugs) {
    const url = `${baseUrl}/${city}`
    const directives = getSeoDirectives(url, { routeType: 'city', city })
    if (!directives.inSitemap) continue
    cityEntries.push({
      url: directives.canonical,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  }

  // City+service: IndexPolicy routeType 'city-service'; cityDataSlugs × keyServices only
  // 
  // GOVERNANCE NOTE: Sitemap generation intentionally passes empty blocks.
  // This is correct behavior because:
  // 1. Sitemap is a crawl surface generator, not a page renderer
  // 2. getSeoDirectives() will treat missing blocks as non-indexable for programmatic routes
  //    (missing blocks trigger MISSING_REQUIRED_BLOCKS hard-fail, resulting in noindex)
  // 3. Pages with missing blocks will be noindex at page generation time (where blocks are fetched)
  // 4. Sitemap should reflect actual indexability, not potential indexability
  // 5. Only pages that pass quality gates at render time will be indexed
  //
  // WHY EMPTY BLOCKS IN SITEMAP:
  // - Sitemap runs at build time, before page rendering
  // - Blocks are fetched during page rendering (async data fetching)
  // - Passing empty blocks lets governance system decide: if blocks are required and missing,
  //   getSeoDirectives() returns noindex/inSitemap=false, so page is excluded from sitemap
  // - This ensures sitemap only includes pages that WILL be indexable when rendered
  //
  // Result: Sitemap includes only:
  // - Pre-approved always-index routes (core, service, city)
  // - Programmatic routes that pass quality gates when rendered (blocks present and valid)
  // - Programmatic routes with missing blocks are automatically excluded (directives.inSitemap === false)
  const cityServiceEntries: MetadataRoute.Sitemap = []
  for (const city of cityDataSlugs) {
    for (const service of keyServices) {
      const url = `${baseUrl}/${city}/${service}`
      // Empty blocks - governance will noindex if blocks are actually missing at render time
      const directives = getSeoDirectives(url, { 
        routeType: 'city-service', 
        city, 
        service,
        blocks: {} // Empty blocks - page generation will pass actual blocks
      })
      // GOVERNANCE: Only include if directives.inSitemap === true
      // This ensures sitemap reflects actual indexability from governance system
      if (!directives.inSitemap) continue
      cityServiceEntries.push({
        url: directives.canonical,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
  }

  // City-industry hubs: Tier 3 noindex — excluded from sitemap.
  // GOVERNANCE: City×Industry hubs are always noindex,follow and excluded from sitemap
  // per canonical governance rules (see lib/seo/canonical-rules.ts)
  //
  // City-industry-service: Phase 1 excluded (no reliable CMS list).
  // GOVERNANCE: City×Industry×Service pages require blocks to be indexed.
  // They are handled at page generation time, not in sitemap generation.

  return [
    ...coreEntries,
    ...serviceEntries,
    ...blogEntries,
    ...cityEntries,
    ...cityServiceEntries,
  ]
}
