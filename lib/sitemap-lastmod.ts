/**
 * Sitemap lastmod timestamp resolution for /sitemap.xml generation.
 *
 * LASTMOD HIERARCHY (in order of preference):
 * 1. CMS/frontmatter date — For blog posts, use the post's published/updated date
 * 2. Content timestamp map — For static core pages, use manually maintained timestamps
 * 3. Data file baseline — For programmatic pages, use the data source's baseline date
 * 4. Fallback baseline — If nothing else, use a static baseline (never "now")
 *
 * DESIGN PRINCIPLES:
 * - Never use `new Date()` at build time — this stamps all URLs with the same time
 * - Prefer stable dates that reflect actual content changes
 * - ISO 8601 UTC format for all dates
 * - Each URL type has a clear, documented date source
 */

/**
 * Content timestamp map for static core pages.
 * 
 * Maintain this map when pages are meaningfully updated.
 * Use git log to find actual last-modified dates:
 *   git log -1 --format="%ci" -- app/about/page.tsx
 * 
 * Format: ISO 8601 date strings (YYYY-MM-DD or full ISO timestamp)
 */
export const CORE_PAGE_TIMESTAMPS: Record<string, string> = {
  // Homepage and main navigation pages
  '': '2025-01-15',                    // Homepage
  'about': '2025-01-10',               // About page
  'contact': '2025-01-10',             // Contact page
  'pricing': '2025-01-12',             // Pricing page
  'privacy': '2024-12-01',             // Privacy policy (rarely changes)
  'terms': '2024-12-01',               // Terms of service (rarely changes)
  
  // Content hub pages
  'resources': '2025-01-08',           // Resources landing
  'case-studies': '2025-01-05',        // Case studies landing
  'industries': '2025-01-06',          // Industries landing
  'locations': '2025-01-10',           // Locations landing
  'locations/hawaii': '2025-01-10',    // Hawaii locations hub
  'solutions': '2025-01-08',           // Solutions landing
  'blog': '2025-01-20',                // Blog landing (updates with new posts)
  
  // Tool pages
  'seo-audit': '2025-01-15',           // SEO audit tool
  'website-speed-test': '2025-01-15',  // Speed test tool
  'enhanced-demo': '2025-01-10',       // Demo page
  
  // Solutions sub-pages
  'solutions/agency-results': '2025-01-08',
  'solutions/declining-traffic': '2025-01-08',
  'solutions/google-visibility': '2025-01-08',
  'solutions/website-conversion': '2025-01-08',
  'solutions/website-leads': '2025-01-08',
  'solutions/website-roi': '2025-01-08',
  
  // Hawaii location sub-pages
  'locations/hawaii/kona': '2025-01-10',
  'locations/hawaii/honolulu': '2025-01-10',
}

/**
 * Baseline timestamp for service pages.
 * Update this when service content is refreshed across the board.
 */
export const SERVICE_PAGE_BASELINE = '2025-01-10'

/**
 * Baseline timestamp for city hub pages.
 * Update this when city data (lib/cities.ts) is refreshed.
 */
export const CITY_DATA_BASELINE = '2025-01-15'

/**
 * Baseline timestamp for city+service programmatic pages.
 * Update this when the city-service page template or data structure changes.
 */
export const CITY_SERVICE_BASELINE = '2025-01-15'

/**
 * Absolute fallback baseline (should rarely be used).
 * This is the last resort if no other date source is available.
 */
export const FALLBACK_BASELINE = '2024-12-01'

export type LastModSource = 
  | 'cms'           // From CMS/frontmatter (e.g., blog post date)
  | 'content-map'   // From CORE_PAGE_TIMESTAMPS
  | 'service-baseline' // SERVICE_PAGE_BASELINE
  | 'city-baseline' // CITY_DATA_BASELINE
  | 'city-service-baseline' // CITY_SERVICE_BASELINE
  | 'fallback'      // FALLBACK_BASELINE

export interface LastModResult {
  date: Date
  source: LastModSource
}

/**
 * Get lastmod for a core/static page.
 * Uses the content timestamp map, falling back to baseline.
 */
export function getCorePageLastMod(path: string): LastModResult {
  // Normalize path (remove leading slash if present)
  const normalizedPath = path.replace(/^\//, '')
  
  const timestamp = CORE_PAGE_TIMESTAMPS[normalizedPath]
  if (timestamp) {
    return {
      date: new Date(timestamp),
      source: 'content-map',
    }
  }
  
  return {
    date: new Date(FALLBACK_BASELINE),
    source: 'fallback',
  }
}

/**
 * Get lastmod for a service page.
 * Uses the service page baseline.
 */
export function getServicePageLastMod(_service: string): LastModResult {
  return {
    date: new Date(SERVICE_PAGE_BASELINE),
    source: 'service-baseline',
  }
}

/**
 * Get lastmod for a blog post.
 * Uses the post's date from frontmatter/CMS, falling back to baseline.
 */
export function getBlogPostLastMod(postDate: string | undefined): LastModResult {
  if (postDate) {
    try {
      const parsed = new Date(postDate)
      // Validate the date is reasonable (not NaN, not in distant future)
      if (!isNaN(parsed.getTime()) && parsed.getTime() < Date.now() + 86400000) {
        return {
          date: parsed,
          source: 'cms',
        }
      }
    } catch {
      // Fall through to fallback
    }
  }
  
  return {
    date: new Date(FALLBACK_BASELINE),
    source: 'fallback',
  }
}

/**
 * Get lastmod for a city hub page.
 * Uses the city data baseline.
 */
export function getCityPageLastMod(_city: string): LastModResult {
  return {
    date: new Date(CITY_DATA_BASELINE),
    source: 'city-baseline',
  }
}

/**
 * Get lastmod for a city+service programmatic page.
 * Uses the city-service baseline.
 */
export function getCityServicePageLastMod(_city: string, _service: string): LastModResult {
  return {
    date: new Date(CITY_SERVICE_BASELINE),
    source: 'city-service-baseline',
  }
}

/**
 * Validates that the sitemap doesn't have too many identical timestamps.
 * Warns if >30% of URLs share the same lastmod date.
 * 
 * This is a debug/sanity check to catch accidental "stamp everything with now()" regressions.
 */
export function validateLastModDistribution(
  entries: Array<{ url: string; lastModified?: Date | string }>
): { valid: boolean; warning?: string; distribution: Map<string, number> } {
  const distribution = new Map<string, number>()
  let entriesWithValidDates = 0
  
  for (const entry of entries) {
    if (!entry.lastModified) continue
    
    try {
      // Normalize to date string (YYYY-MM-DD) for comparison
      const date = entry.lastModified instanceof Date
        ? entry.lastModified
        : new Date(entry.lastModified)
      
      // Skip invalid dates
      if (isNaN(date.getTime())) continue
      
      const dateStr = date.toISOString().split('T')[0]
      distribution.set(dateStr, (distribution.get(dateStr) || 0) + 1)
      entriesWithValidDates++
    } catch {
      // Skip entries with unparseable dates
      continue
    }
  }
  
  if (entriesWithValidDates === 0) {
    return { valid: true, distribution }
  }
  
  // Find the most common timestamp
  let maxCount = 0
  let maxDate = ''
  for (const [date, count] of distribution) {
    if (count > maxCount) {
      maxCount = count
      maxDate = date
    }
  }
  
  const percentage = (maxCount / entriesWithValidDates) * 100
  const threshold = 30
  
  if (percentage > threshold) {
    return {
      valid: false,
      warning: `[sitemap] Warning: ${percentage.toFixed(1)}% of URLs (${maxCount}/${entriesWithValidDates}) share lastmod=${maxDate}. ` +
        `This exceeds the ${threshold}% threshold. Ensure meaningful timestamps are being used.`,
      distribution,
    }
  }
  
  return { valid: true, distribution }
}

/**
 * Format a Date to ISO 8601 string for sitemap output.
 * Returns YYYY-MM-DD format (date only, no time).
 */
export function formatLastMod(date: Date): string {
  return date.toISOString().split('T')[0]
}
