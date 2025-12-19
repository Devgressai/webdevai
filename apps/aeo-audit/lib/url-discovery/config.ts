/**
 * Configuration for URL discovery
 */

export interface UrlDiscoveryConfig {
  // Sitemap limits
  maxSitemapUrls: number // Max URLs to extract from sitemaps
  maxSitemapDepth: number // Max depth for sitemap index recursion

  // Crawl limits (when sitemaps fail)
  maxCrawlDepth: number // BFS depth limit
  maxCrawlPages: number // Max pages to crawl
  crawlTimeout: number // Timeout per page fetch (ms)

  // Skip patterns (paths to skip during crawl)
  skipPatterns: RegExp[]
}

export const DEFAULT_CONFIG: UrlDiscoveryConfig = {
  maxSitemapUrls: 1000,
  maxSitemapDepth: 5,
  maxCrawlDepth: 2,
  maxCrawlPages: 200,
  crawlTimeout: 10000, // 10 seconds
  skipPatterns: [
    /^\/admin/i,
    /^\/api\//i,
    /^\/cart/i,
    /^\/checkout/i,
    /^\/account/i,
    /^\/login/i,
    /^\/logout/i,
    /^\/register/i,
    /^\/signin/i,
    /^\/signup/i,
    /^\/_next\//i,
    /^\/static\//i,
    /\.(pdf|zip|doc|docx|xls|xlsx|jpg|jpeg|png|gif|svg|css|js|json|xml)$/i,
    /\/\?/i, // Query strings
    /#/i, // Anchors
  ],
}

/**
 * Get config from environment or use defaults
 */
export function getConfig(): UrlDiscoveryConfig {
  return {
    maxSitemapUrls: parseInt(process.env.URL_DISCOVERY_MAX_SITEMAP_URLS || '1000', 10),
    maxSitemapDepth: parseInt(process.env.URL_DISCOVERY_MAX_SITEMAP_DEPTH || '5', 10),
    maxCrawlDepth: parseInt(process.env.URL_DISCOVERY_MAX_CRAWL_DEPTH || '2', 10),
    maxCrawlPages: parseInt(process.env.URL_DISCOVERY_MAX_CRAWL_PAGES || '200', 10),
    crawlTimeout: parseInt(process.env.URL_DISCOVERY_CRAWL_TIMEOUT || '10000', 10),
    skipPatterns: DEFAULT_CONFIG.skipPatterns,
  }
}

