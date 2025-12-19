/**
 * Bounded crawl utilities (BFS)
 */

import { normalizeUrl, isSameDomain } from './domain'
import { UrlDiscoveryConfig } from './config'

export interface CrawlResult {
  urls: string[]
  visited: Set<string>
  depth: number
}

/**
 * BFS crawl from homepage
 */
export async function crawlBfs(
  startUrl: string,
  baseUrl: string,
  config: UrlDiscoveryConfig
): Promise<CrawlResult> {
  const urls: string[] = []
  const visited = new Set<string>()
  const queue: Array<{ url: string; depth: number }> = [{ url: startUrl, depth: 0 }]
  const normalizedStart = normalizeUrl(startUrl)
  visited.add(normalizedStart)

  while (queue.length > 0 && urls.length < config.maxCrawlPages) {
    const { url, depth } = queue.shift()!

    if (depth > config.maxCrawlDepth) {
      continue
    }

    // Skip if already visited
    const normalized = normalizeUrl(url)
    if (visited.has(normalized)) {
      continue
    }

    // Check skip patterns
    if (shouldSkipUrl(url, config.skipPatterns)) {
      continue
    }

    // Must be same domain
    if (!isSameDomain(url, baseUrl)) {
      continue
    }

    visited.add(normalized)
    urls.push(url)

    // Fetch page and extract links (if not at max depth)
    if (depth < config.maxCrawlDepth && urls.length < config.maxCrawlPages) {
      const links = await extractLinks(url, baseUrl, config.crawlTimeout)
      
      for (const link of links) {
        const linkNormalized = normalizeUrl(link)
        if (!visited.has(linkNormalized) && isSameDomain(link, baseUrl)) {
          queue.push({ url: link, depth: depth + 1 })
        }
      }
    }
  }

  return {
    urls,
    visited,
    depth: config.maxCrawlDepth,
  }
}

/**
 * Extract links from HTML page
 */
async function extractLinks(
  url: string,
  baseUrl: string,
  timeout: number
): Promise<string[]> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'AEO-Audit-Bot/1.0',
      },
      signal: AbortSignal.timeout(timeout),
    })

    if (!response.ok) {
      return []
    }

    const html = await response.text()
    const links: string[] = []
    const baseUrlObj = new URL(baseUrl)

    // Simple regex-based link extraction (can be improved with proper HTML parser)
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi
    let match

    while ((match = linkRegex.exec(html)) !== null && links.length < 100) {
      const href = match[1]
      try {
        // Resolve relative URLs
        const absoluteUrl = new URL(href, baseUrlObj).href
        links.push(absoluteUrl)
      } catch {
        // Skip invalid URLs
      }
    }

    return links
  } catch {
    return []
  }
}

/**
 * Check if URL should be skipped
 */
function shouldSkipUrl(url: string, skipPatterns: RegExp[]): boolean {
  try {
    const urlObj = new URL(url)
    const path = urlObj.pathname

    for (const pattern of skipPatterns) {
      if (pattern.test(path)) {
        return true
      }
    }

    return false
  } catch {
    return true
  }
}

