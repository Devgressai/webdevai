/**
 * Sitemap parsing utilities
 */

import { parseStringPromise } from 'xml2js'
import { normalizeUrl } from './domain'

export interface SitemapResult {
  success: boolean
  urls: string[]
  childSitemaps: string[]
  error?: string
}

/**
 * Fetch and parse sitemap (XML or index)
 */
export async function fetchSitemap(
  sitemapUrl: string,
  baseUrl: string,
  depth: number = 0,
  maxDepth: number = 5
): Promise<SitemapResult> {
  if (depth > maxDepth) {
    return {
      success: false,
      urls: [],
      childSitemaps: [],
      error: 'Max depth exceeded',
    }
  }

  try {
    const response = await fetch(sitemapUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'AEO-Audit-Bot/1.0',
        'Accept': 'application/xml, text/xml',
      },
      signal: AbortSignal.timeout(30000), // 30 second timeout
    })

    if (!response.ok) {
      return {
        success: false,
        urls: [],
        childSitemaps: [],
        error: `HTTP ${response.status}`,
      }
    }

    const xml = await response.text()
    const parsed = await parseStringPromise(xml)

    // Check if it's a sitemap index
    if (parsed.sitemapindex) {
      return parseSitemapIndex(parsed, baseUrl, depth, maxDepth)
    }

    // Regular sitemap
    if (parsed.urlset) {
      return parseUrlset(parsed, baseUrl)
    }

    return {
      success: false,
      urls: [],
      childSitemaps: [],
      error: 'Unknown sitemap format',
    }
  } catch (error) {
    return {
      success: false,
      urls: [],
      childSitemaps: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Parse sitemap index (recursively fetch child sitemaps)
 */
async function parseSitemapIndex(
  parsed: any,
  baseUrl: string,
  depth: number,
  maxDepth: number
): Promise<SitemapResult> {
  const childSitemaps: string[] = []
  const allUrls: string[] = []

  const sitemaps = parsed.sitemapindex.sitemap || []
  
  for (const sitemap of sitemaps) {
    if (sitemap.loc && sitemap.loc[0]) {
      const childUrl = sitemap.loc[0]
      childSitemaps.push(childUrl)
      
      // Recursively fetch child sitemap
      const childResult = await fetchSitemap(childUrl, baseUrl, depth + 1, maxDepth)
      if (childResult.success) {
        allUrls.push(...childResult.urls)
      }
    }
  }

  return {
    success: true,
    urls: allUrls,
    childSitemaps,
  }
}

/**
 * Parse URL set from sitemap
 */
function parseUrlset(parsed: any, baseUrl: string): SitemapResult {
  const urls: string[] = []
  const urlEntries = parsed.urlset.url || []

  for (const entry of urlEntries) {
    if (entry.loc && entry.loc[0]) {
      const url = entry.loc[0]
      // Normalize and validate URL
      try {
        const normalized = normalizeUrl(url)
        if (normalized.startsWith('http')) {
          urls.push(normalized)
        }
      } catch {
        // Skip invalid URLs
      }
    }
  }

  return {
    success: true,
    urls,
    childSitemaps: [],
  }
}

/**
 * Try common sitemap locations
 */
export async function tryCommonSitemaps(baseUrl: string): Promise<string[]> {
  const commonPaths = ['/sitemap.xml', '/sitemap_index.xml', '/sitemaps.xml']
  const found: string[] = []

  for (const path of commonPaths) {
    const url = `${baseUrl}${path}`
    try {
      const response = await fetch(url, {
        method: 'HEAD',
        headers: {
          'User-Agent': 'AEO-Audit-Bot/1.0',
        },
        signal: AbortSignal.timeout(5000),
      })

      if (response.ok) {
        found.push(url)
      }
    } catch {
      // Continue to next
    }
  }

  return found
}

