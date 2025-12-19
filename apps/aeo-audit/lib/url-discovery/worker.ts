/**
 * URL Discovery Worker Implementation
 * Discovers URLs via sitemaps or bounded crawl
 */

import { PrismaClient } from '@prisma/client'
import { UrlDiscoveryPayload } from '../queues/types'
import { normalizeDomain } from './domain'
import { fetchRobots, RobotsResult, isUrlAllowedByRobots } from './robots'
import { fetchSitemap, tryCommonSitemaps } from './sitemap'
import { crawlBfs } from './crawl'
import { getConfig, UrlDiscoveryConfig } from './config'
import { normalizeUrl } from './domain'
import { config as appConfig } from '@/src/config'
import { storeRedactedEvidence } from '../evidence/storage'

const prisma = new PrismaClient()

export interface DiscoveryResult {
  urls: string[]
  source: 'sitemap' | 'crawl'
  evidence: {
    robotsFetch: RobotsResult
    sitemapFetch?: {
      success: boolean
      urls: string[]
      sitemapUrl?: string
      error?: string
    }
    crawlStats?: {
      depth: number
      visited: number
    }
    counts: {
      fromRobots: number
      fromSitemap: number
      fromCrawl: number
      total: number
    }
  }
}

/**
 * Main URL discovery function
 */
export async function discoverUrls(
  payload: UrlDiscoveryPayload
): Promise<DiscoveryResult> {
  const { scanId, domain, depth, maxUrls } = payload
  const config = getConfig()

  // Normalize domain
  const { baseUrl, normalized } = normalizeDomain(domain)
  const maxUrlsToReturn = maxUrls || config.maxSitemapUrls

  // Initialize evidence tracking
  const evidence: DiscoveryResult['evidence'] = {
    robotsFetch: { success: false, sitemaps: [] },
    counts: {
      fromRobots: 0,
      fromSitemap: 0,
      fromCrawl: 0,
      total: 0,
    },
  }

  // Step 1: Fetch robots.txt
  const robotsResult = await fetchRobots(baseUrl)
  evidence.robotsFetch = robotsResult

  let discoveredUrls: string[] = []
  let source: 'sitemap' | 'crawl' = 'sitemap'
  
  // Get user agent for robots.txt filtering
  const userAgent = appConfig.crawler.userAgent()

  // Step 2: Try sitemaps from robots.txt
  const sitemapUrls: string[] = [...robotsResult.sitemaps]

  // Step 3: Try common sitemap locations if none found
  if (sitemapUrls.length === 0) {
    const commonSitemaps = await tryCommonSitemaps(baseUrl)
    sitemapUrls.push(...commonSitemaps)
  }

  // Step 4: Parse sitemaps recursively
  if (sitemapUrls.length > 0) {
    const sitemapResults = await parseAllSitemaps(
      sitemapUrls,
      baseUrl,
      config.maxSitemapDepth
    )

    discoveredUrls = sitemapResults.urls
    evidence.sitemapFetch = {
      success: sitemapResults.success,
      urls: discoveredUrls,
      sitemapUrl: sitemapUrls[0],
      error: sitemapResults.error,
    }
    evidence.counts.fromSitemap = discoveredUrls.length
  }

  // Step 5: Fallback to crawl if sitemaps failed or returned too few URLs
  if (discoveredUrls.length === 0 || discoveredUrls.length < 10) {
    console.log(`[URL Discovery] Sitemaps failed or insufficient, falling back to crawl`)
    source = 'crawl'
    
    const crawlResult = await crawlBfs(baseUrl, baseUrl, config)
    discoveredUrls = crawlResult.urls
    evidence.counts.fromCrawl = discoveredUrls.length
    evidence.crawlStats = {
      depth: crawlResult.depth,
      visited: crawlResult.visited.size,
    }
  }

  // Filter discovered URLs by robots.txt rules (using enhanced parser)
  if (robotsResult.parsedRobots) {
    discoveredUrls = discoveredUrls.filter((url) => {
      return isUrlAllowedByRobots(url, robotsResult.parsedRobots, userAgent)
    })
  } else if (robotsResult.disallowedPaths) {
    // Fallback to simple path matching if parsed robots not available
    discoveredUrls = discoveredUrls.filter((url) => {
      const urlObj = new URL(url)
      const path = urlObj.pathname
      
      for (const disallowedPath of robotsResult.disallowedPaths || []) {
        if (path.startsWith(disallowedPath) || path === disallowedPath) {
          return false
        }
      }
      
      return true
    })
  }

  // Cap URLs
  if (discoveredUrls.length > maxUrlsToReturn) {
    discoveredUrls = discoveredUrls.slice(0, maxUrlsToReturn)
  }

  // Deduplicate
  const uniqueUrls = Array.from(new Set(discoveredUrls.map(normalizeUrl)))
  evidence.counts.total = uniqueUrls.length

  // Step 6: Persist discovered URLs to Page table
  await persistDiscoveredUrls(scanId, uniqueUrls)

  // Step 7: Store evidence
  await storeEvidence(scanId, evidence)

  // Step 8: Enqueue page_fetch jobs for discovered URLs
  const { addJob, generateIdempotencyKey } = await import('../queues')
  const { QUEUE_NAMES } = await import('../queues/types')
  
  for (const url of uniqueUrls) {
    const pageFetchPayload = {
      scanId,
      url,
      retryCount: 0,
    }
    
    const idempotencyKey = generateIdempotencyKey(scanId, url)
    await addJob(QUEUE_NAMES.PAGE_FETCH, pageFetchPayload, {
      idempotencyKey,
      priority: 2,
    })
  }

  return {
    urls: uniqueUrls,
    source,
    evidence,
  }
}

/**
 * Parse all sitemaps recursively
 */
async function parseAllSitemaps(
  sitemapUrls: string[],
  baseUrl: string,
  maxDepth: number
): Promise<{ success: boolean; urls: string[]; error?: string }> {
  const allUrls: string[] = []
  let lastError: string | undefined

  for (const sitemapUrl of sitemapUrls) {
    try {
      const result = await fetchSitemap(sitemapUrl, baseUrl, 0, maxDepth)
      if (result.success) {
        allUrls.push(...result.urls)
      } else {
        lastError = result.error
      }
    } catch (error) {
      lastError = error instanceof Error ? error.message : 'Unknown error'
    }
  }

  return {
    success: allUrls.length > 0,
    urls: allUrls,
    error: allUrls.length === 0 ? lastError : undefined,
  }
}

/**
 * Persist discovered URLs to Page table with status "discovered"
 */
async function persistDiscoveredUrls(scanId: string, urls: string[]): Promise<void> {
  // Batch insert for performance
  const batchSize = 100
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize)
    
    await prisma.$transaction(
      async (tx) => {
        for (const url of batch) {
          // Check if page already exists
          const existing = await tx.page.findFirst({
            where: {
              scanId,
              url,
            },
          })

          if (existing) {
            // Update existing
            await tx.page.update({
              where: { id: existing.id },
              data: {
                metadata: {
                  ...(existing.metadata as Record<string, unknown> || {}),
                  status: 'discovered',
                  discoveredAt: new Date().toISOString(),
                },
              },
            })
          } else {
            // Create new
            await tx.page.create({
              data: {
                scanId,
                url,
                metadata: {
                  status: 'discovered',
                  discoveredAt: new Date().toISOString(),
                },
              },
            })
          }
        }
      },
      {
        timeout: 30000, // 30 second timeout
      }
    )
  }
}

/**
 * Store evidence in Evidence table
 * Uses redaction and EVIDENCE_MODE compliance
 */
async function storeEvidence(
  scanId: string,
  evidence: DiscoveryResult['evidence']
): Promise<void> {
  // Get a representative page ID for storing evidence (use first discovered page)
  const firstPage = await prisma.page.findFirst({
    where: { scanId },
    orderBy: { createdAt: 'asc' },
  })

  if (!firstPage) {
    console.warn(`[URL Discovery] No pages found for scan ${scanId}, skipping evidence storage`)
    return
  }

  // Store robots.txt evidence
  await storeRedactedEvidence(
    firstPage.id,
    'robots_txt',
    JSON.stringify(evidence.robotsFetch),
    null,
    {
      success: evidence.robotsFetch.success,
      statusCode: evidence.robotsFetch.statusCode,
      sitemapsFound: evidence.robotsFetch.sitemaps.length,
      error: evidence.robotsFetch.error,
    }
  )

  // Store sitemap evidence
  if (evidence.sitemapFetch) {
    await storeRedactedEvidence(
      firstPage.id,
      'sitemap_fetch',
      JSON.stringify(evidence.sitemapFetch),
      null,
      {
        success: evidence.sitemapFetch.success,
        sitemapUrl: evidence.sitemapFetch.sitemapUrl,
        urlsFound: evidence.sitemapFetch.urls.length,
        error: evidence.sitemapFetch.error,
      }
    )
  }

  // Store crawl evidence
  if (evidence.crawlStats) {
    await storeRedactedEvidence(
      firstPage.id,
      'crawl_stats',
      JSON.stringify(evidence.crawlStats),
      null,
      {
        depth: evidence.crawlStats.depth,
        visited: evidence.crawlStats.visited,
      }
    )
  }

  // Store summary counts
  await storeRedactedEvidence(
    firstPage.id,
    'discovery_summary',
    JSON.stringify(evidence.counts),
    null,
    {
      fromRobots: evidence.counts.fromRobots,
      fromSitemap: evidence.counts.fromSitemap,
      fromCrawl: evidence.counts.fromCrawl,
      total: evidence.counts.total,
    }
  )
}

