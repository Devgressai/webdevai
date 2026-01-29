/**
 * Sitemap entry generation for split sitemaps.
 * 
 * This module provides the shared logic for generating sitemap entries
 * across multiple child sitemaps (core, services, blog, locations).
 * 
 * SITEMAP STRUCTURE:
 * - /sitemap.xml (index) → points to child sitemaps
 * - /sitemap/0.xml (core) → homepage, about, contact, pricing, privacy, terms
 * - /sitemap/1.xml (services) → /services/*, /solutions/*, tools
 * - /sitemap/2.xml (blog) → /blog/*
 * - /sitemap/3.xml (locations) → city hubs, city+service pages, location pages
 * 
 * PROTOCOL LIMITS:
 * - Max 50,000 URLs per sitemap
 * - Max 50MB uncompressed per sitemap
 * - Chunking is applied if limits are exceeded
 */

import type { MetadataRoute } from 'next'
import { citySlugs } from './cities'
import { getBlogPosts } from './get-blog-posts'
import { getSeoDirectives } from './seo/index-policy'
import { cityDataSlugs } from './data/city-data'
import { deduplicateSitemapEntries } from './sitemap-dedupe'
import {
  getCorePageLastMod,
  getServicePageLastMod,
  getBlogPostLastMod,
  getCityPageLastMod,
  getCityServicePageLastMod,
} from './sitemap-lastmod'

export type SitemapEntry = MetadataRoute.Sitemap[number]

/** Sitemap category identifiers */
export type SitemapCategory = 'core' | 'services' | 'blog' | 'locations'

/** 
 * Maximum URLs per sitemap file for chunking purposes.
 * Protocol limit is 50,000, but we use 45,000 with a 5k buffer
 * to leave room for any last-minute additions without re-chunking.
 */
export const MAX_URLS_PER_SITEMAP = 45000

/** Base URL for the site */
export const BASE_URL = 'https://www.webvello.com'

// ============================================================================
// CHANGEFREQ & PRIORITY CONFIGURATION
// ============================================================================
/**
 * CHANGEFREQ VALUES - How often the page content actually changes
 * 
 * These values should reflect REALITY, not aspirations:
 * - 'weekly'  → Page content is updated at least once per week
 * - 'monthly' → Page content is updated roughly once per month
 * - 'yearly'  → Page content is rarely updated (legal pages, old blog posts)
 * 
 * Google largely ignores changefreq, but it helps other crawlers and
 * serves as internal documentation of our content update cadence.
 */

/**
 * PRIORITY VALUES - Relative importance within this site (0.0 to 1.0)
 * 
 * Priority is a HINT to crawlers about relative importance. It does NOT
 * affect ranking - it only suggests crawl priority within your own site.
 * 
 * Our priority tiers:
 * - 1.0: Homepage only (the single most important page)
 * - 0.8: High-value pages (pricing, main service pages, location hubs)
 * - 0.7: Standard pages (about, contact, solutions, tools)
 * - 0.6: Content pages (blog posts, case studies)
 * - 0.5: Programmatic pages (city+service combinations)
 * 
 * If all pages have the same priority, it provides no signal. Differentiation
 * matters more than absolute values.
 */

// ============================================================================
// PAGE LISTS (same as original sitemap.ts)
// ============================================================================

/** Core pages - homepage, about, contact, pricing, legal */
export const CORE_PAGES = [
  '', // Homepage
  '/about',
  '/founder',
  '/contact',
  '/pricing',
  '/privacy',
  '/terms',
  '/ai-search-optimization',
  '/entity-seo',
  '/programmatic-seo',
  '/index-governance',
]

/** Tool pages - included in services sitemap */
export const TOOL_PAGES = [
  '/seo-audit',
  '/website-speed-test',
  '/enhanced-demo',
]

/** Hub pages - included in core sitemap */
export const HUB_PAGES = [
  '/resources',
  '/case-studies',
  '/industries',
  '/solutions',
  '/blog', // blog landing goes in core, individual posts go in blog sitemap
]

/** Solutions pages */
export const SOLUTIONS_PAGES = [
  'agency-results',
  'declining-traffic',
  'google-visibility',
  'website-conversion',
  'website-leads',
  'website-roi',
]

/** Services under /services/ */
export const STANDALONE_SERVICES = [
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
  'wyoming',
]

/** Location hub pages */
export const LOCATION_HUB_PAGES = [
  '/locations',
  '/locations/hawaii',
  '/locations/hawaii/kona',
  '/locations/hawaii/honolulu',
]

/** Key services for city+service pages (Tier 1 only) */
export const KEY_SERVICES = [
  'website-design',
  'web-development',
  'seo',
  'local-seo',
  'digital-marketing',
  'ai-seo',
  'ai-consulting',
  'ui-ux-design',
]

// ============================================================================
// ENTRY GENERATORS
// ============================================================================

/**
 * Generate core sitemap entries (homepage, about, contact, pricing, legal, hubs).
 * 
 * CHANGEFREQ: 'weekly' - Core pages are updated periodically but not daily.
 * PRIORITY: 
 *   - Homepage: 1.0 (single highest priority page)
 *   - Pricing: 0.8 (high-value conversion page)
 *   - Other core pages: 0.7 (standard importance)
 *   - Legal pages (privacy, terms): 0.5 (rarely visited, low priority)
 */
export function generateCoreEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = []
  
  // Core pages + hub pages
  const allCorePaths = [
    ...CORE_PAGES.map(p => p === '' ? '' : p.replace(/^\//, '')),
    ...HUB_PAGES.map(p => p.replace(/^\//, '')),
  ]
  
  for (const path of allCorePaths) {
    const url = path ? `${BASE_URL}/${path}` : BASE_URL
    const directives = getSeoDirectives(url, { routeType: 'core', path })
    if (!directives.inSitemap) continue
    
    const { date: lastMod } = getCorePageLastMod(path)
    
    // Determine priority based on page type
    let priority: number
    let changeFrequency: 'weekly' | 'monthly' | 'yearly'
    
    if (path === '') {
      // Homepage - highest priority, updated weekly with fresh content
      priority = 1.0
      changeFrequency = 'weekly'
    } else if (path === 'pricing') {
      // Pricing - high-value conversion page
      priority = 0.8
      changeFrequency = 'monthly'
    } else if (path === 'privacy' || path === 'terms') {
      // Legal pages - rarely change, low crawl priority
      priority = 0.5
      changeFrequency = 'yearly'
    } else if (path === 'blog') {
      // Blog landing - updates when new posts are added
      priority = 0.7
      changeFrequency = 'weekly'
    } else {
      // Standard core pages (about, contact, hubs)
      priority = 0.7
      changeFrequency = 'monthly'
    }
    
    entries.push({
      url: directives.canonical,
      lastModified: lastMod,
      changeFrequency,
      priority,
    })
  }
  
  return deduplicateSitemapEntries(entries)
}

/**
 * Generate services sitemap entries (/services/*, /solutions/*, tools).
 * 
 * NOTE: Service pages that canonicalize to city/city-service pages are EXCLUDED
 * from this sitemap. They will be included in the locations sitemap instead
 * via their canonical target. This prevents duplicates across sitemaps.
 * 
 * CHANGEFREQ: 'monthly' - Service descriptions don't change frequently.
 * PRIORITY:
 *   - Tools (seo-audit, speed-test): 0.7 (interactive utilities)
 *   - Solutions pages: 0.7 (value-proposition pages)
 *   - Service pages: 0.8 (core offering pages, high conversion value)
 */
export function generateServicesEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = []
  
  // Tool pages - interactive utilities, moderate priority
  for (const page of TOOL_PAGES) {
    const path = page.replace(/^\//, '')
    const url = `${BASE_URL}/${path}`
    const directives = getSeoDirectives(url, { routeType: 'core', path })
    if (!directives.inSitemap) continue
    
    const { date: lastMod } = getCorePageLastMod(path)
    entries.push({
      url: directives.canonical,
      lastModified: lastMod,
      changeFrequency: 'monthly', // Tools don't change often
      priority: 0.7,
    })
  }
  
  // Solutions pages - problem/solution oriented landing pages
  for (const solution of SOLUTIONS_PAGES) {
    const path = `solutions/${solution}`
    const url = `${BASE_URL}/${path}`
    const directives = getSeoDirectives(url, { routeType: 'core', path })
    if (!directives.inSitemap) continue
    
    const { date: lastMod } = getCorePageLastMod(path)
    entries.push({
      url: directives.canonical,
      lastModified: lastMod,
      changeFrequency: 'monthly', // Solutions content is relatively stable
      priority: 0.7,
    })
  }
  
  // Service pages - core offerings, higher priority
  // Skip services that canonicalize to non-/services/ URLs (they belong in other sitemaps)
  for (const service of STANDALONE_SERVICES) {
    const url = `${BASE_URL}/services/${service}`
    const directives = getSeoDirectives(url, { routeType: 'service', service })
    if (!directives.inSitemap) continue
    
    // Skip if canonical URL is not a /services/ URL (it canonicalizes to city/city-service)
    // These will be included in the locations sitemap
    const canonicalPath = directives.canonical.replace(BASE_URL, '')
    if (!canonicalPath.startsWith('/services/')) {
      continue
    }
    
    const { date: lastMod } = getServicePageLastMod(service)
    entries.push({
      url: directives.canonical,
      lastModified: lastMod,
      changeFrequency: 'monthly', // Service descriptions are updated infrequently
      priority: 0.8, // Core service pages are high-value for conversion
    })
  }
  
  return deduplicateSitemapEntries(entries)
}

/**
 * Generate blog sitemap entries (/blog/*).
 * 
 * CHANGEFREQ: 'yearly' - Blog posts are rarely updated after publication.
 *   If you actively update posts (add sections, refresh stats), use 'monthly'.
 * PRIORITY: 0.6 - Content pages, valuable for SEO but lower conversion priority.
 *   
 * Note: Blog post lastmod comes from frontmatter/CMS date, so crawlers
 * will see the actual publication date, not a fake "updated" timestamp.
 */
export async function generateBlogEntries(): Promise<SitemapEntry[]> {
  let blogPosts: Awaited<ReturnType<typeof getBlogPosts>> = []
  try {
    blogPosts = await getBlogPosts()
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }
  
  const entries: SitemapEntry[] = blogPosts.map((post) => {
    const { date: lastMod } = getBlogPostLastMod(post.date)
    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: lastMod,
      changeFrequency: 'yearly' as const, // Blog posts rarely change after publication
      priority: 0.6, // Content pages - valuable but not primary conversion pages
    }
  })
  
  return deduplicateSitemapEntries(entries)
}

/**
 * Generate locations sitemap entries (city hubs, city+service, location pages).
 * 
 * CHANGEFREQ: 'monthly' - Programmatic geo pages don't change often.
 *   City data (population, stats) is updated periodically, not weekly.
 * PRIORITY:
 *   - Location hub pages (/locations, /locations/hawaii): 0.7 (navigation hubs)
 *   - City hub pages (/new-york-ny): 0.6 (geo landing pages)
 *   - City+service pages (/new-york-ny/seo): 0.5 (programmatic combinations)
 * 
 * Note: Programmatic pages have lower priority than hand-crafted pages because
 * they're generated from templates. Crawlers should prioritize unique content.
 */
export function generateLocationsEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = []
  
  // Location hub pages - navigation/index pages for locations
  for (const page of LOCATION_HUB_PAGES) {
    const path = page.replace(/^\//, '')
    const url = `${BASE_URL}/${path}`
    const directives = getSeoDirectives(url, { routeType: 'core', path })
    if (!directives.inSitemap) continue
    
    const { date: lastMod } = getCorePageLastMod(path)
    entries.push({
      url: directives.canonical,
      lastModified: lastMod,
      changeFrequency: 'monthly', // Hub pages don't change often
      priority: 0.7, // Navigation hubs, moderate importance
    })
  }
  
  // City hub pages - main landing page for each city
  for (const city of citySlugs) {
    const url = `${BASE_URL}/${city}`
    const directives = getSeoDirectives(url, { routeType: 'city', city })
    if (!directives.inSitemap) continue
    
    const { date: lastMod } = getCityPageLastMod(city)
    entries.push({
      url: directives.canonical,
      lastModified: lastMod,
      changeFrequency: 'monthly', // City data updates infrequently
      priority: 0.6, // Programmatic geo pages, lower than hand-crafted
    })
  }
  
  // City+service pages - programmatic combinations
  for (const city of cityDataSlugs) {
    for (const service of KEY_SERVICES) {
      const url = `${BASE_URL}/${city}/${service}`
      const directives = getSeoDirectives(url, {
        routeType: 'city-service',
        city,
        service,
        blocks: {},
      })
      if (!directives.inSitemap) continue
      
      const { date: lastMod } = getCityServicePageLastMod(city, service)
      entries.push({
        url: directives.canonical,
        lastModified: lastMod,
        changeFrequency: 'monthly', // Template-based, rarely changes
        priority: 0.5, // Lowest tier - programmatic combinations
      })
    }
  }
  
  return deduplicateSitemapEntries(entries)
}

/**
 * Get the newest lastmod date from a set of entries.
 * Used to set the <lastmod> on the sitemap index entry.
 */
export function getNewestLastMod(entries: SitemapEntry[]): Date {
  if (entries.length === 0) {
    return new Date('2024-12-01')
  }
  
  let newest = new Date(0)
  for (const entry of entries) {
    const date = entry.lastModified instanceof Date
      ? entry.lastModified
      : new Date(entry.lastModified || 0)
    if (date > newest) {
      newest = date
    }
  }
  
  return newest
}

/**
 * Chunk entries into multiple arrays if they exceed the limit.
 * Returns an array of entry arrays, each within the URL limit.
 */
export function chunkEntries(
  entries: SitemapEntry[],
  maxPerChunk: number = MAX_URLS_PER_SITEMAP
): SitemapEntry[][] {
  if (entries.length <= maxPerChunk) {
    return [entries]
  }
  
  const chunks: SitemapEntry[][] = []
  for (let i = 0; i < entries.length; i += maxPerChunk) {
    chunks.push(entries.slice(i, i + maxPerChunk))
  }
  
  return chunks
}

// ============================================================================
// SITEMAP ID MAPPING
// ============================================================================

/**
 * Sitemap ID to category mapping.
 * 
 * Next.js generateSitemaps() returns an array of { id: number },
 * and the sitemap function receives that id. We map IDs to categories:
 * 
 * - 0: core (homepage, about, contact, pricing, legal, hubs)
 * - 1: services (/services/*, /solutions/*, tools)
 * - 2: blog (/blog/*)
 * - 3+: locations (chunked if needed)
 */
export const SITEMAP_IDS: Record<number, SitemapCategory> = {
  0: 'core',
  1: 'services',
  2: 'blog',
  3: 'locations',
}

/**
 * Get all entries for a given sitemap ID.
 * Handles chunking for locations if needed.
 */
export async function getEntriesForSitemapId(id: number): Promise<SitemapEntry[]> {
  switch (id) {
    case 0:
      return generateCoreEntries()
    case 1:
      return generateServicesEntries()
    case 2:
      return await generateBlogEntries()
    default: {
      // IDs 3+ are for locations (chunked if needed)
      const allLocationEntries = generateLocationsEntries()
      const chunks = chunkEntries(allLocationEntries, MAX_URLS_PER_SITEMAP)
      const chunkIndex = id - 3
      
      if (chunkIndex >= 0 && chunkIndex < chunks.length) {
        return chunks[chunkIndex]
      }
      
      // Invalid ID - return empty array
      return []
    }
  }
}

/**
 * Get the list of sitemap IDs to generate.
 * This is used by generateSitemaps() in Next.js.
 */
export function getSitemapIds(): { id: number }[] {
  // Check if locations need chunking
  const locationEntries = generateLocationsEntries()
  const locationChunks = chunkEntries(locationEntries)
  
  const ids: { id: number }[] = [
    { id: 0 }, // core
    { id: 1 }, // services
    { id: 2 }, // blog
  ]
  
  // Add location chunks (starting at id 3)
  for (let i = 0; i < locationChunks.length; i++) {
    ids.push({ id: 3 + i })
  }
  
  return ids
}
