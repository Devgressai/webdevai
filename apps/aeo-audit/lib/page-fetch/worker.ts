/**
 * Page Fetch Worker Implementation
 * Fetches HTML pages with redirect tracking, robots checking, and evidence storage
 */

import { PrismaClient } from '@prisma/client'
import { PageFetchPayload } from '../queues/types'
import { getConfig } from './config'
import { fetchPageWithRedirects, FetchResult } from './fetch'
import { checkRobots, RobotsCheckResult, shouldSkipUrl } from './robots'
import {
  extractHost,
  waitForHostSlot,
  incrementHostConcurrency,
  decrementHostConcurrency,
} from '@/lib/crawl-politeness/concurrency'
import {
  waitForDelay,
} from '@/lib/crawl-politeness/delay'
import {
  checkBudget,
  getDefaultBudget,
} from '@/lib/crawl-politeness/budget'
import {
  storeRobotsEvidence,
} from '@/lib/crawl-politeness/evidence'
import {
  storeRedactedEvidence,
} from '@/lib/evidence/storage'
import {
  incrementPagesFetched,
  canContinueProcessing,
} from '@/lib/budget/tracking'

const prisma = new PrismaClient()

export interface PageFetchWorkerResult {
  success: boolean
  pageId: string
  statusCode: number
  finalUrl: string
  contentType: string | null
  loadTime: number
  contentLength: number
  robotsAllowed: boolean
  confidence: 'high' | 'medium' | 'low'
  error?: string
}

/**
 * Main page fetch function
 */
export async function fetchPage(
  payload: PageFetchPayload
): Promise<PageFetchWorkerResult> {
  const { scanId, url, retryCount = 0 } = payload
  const config = getConfig()

  // 1. Check scan budget
  const budget = getDefaultBudget(scanId)
  const budgetCheck = await checkBudget(budget)
  if (!budgetCheck.withinBudget) {
    return {
      success: false,
      pageId: '',
      statusCode: 0,
      finalUrl: url,
      contentType: null,
      loadTime: 0,
      contentLength: 0,
      robotsAllowed: false,
      confidence: 'low',
      error: `Budget exceeded: ${budgetCheck.reason}`,
    }
  }

  // 2. Check if URL should be skipped
  if (shouldSkipUrl(url)) {
    return {
      success: false,
      pageId: '',
      statusCode: 0,
      finalUrl: url,
      contentType: null,
      loadTime: 0,
      contentLength: 0,
      robotsAllowed: false,
      confidence: 'low',
      error: 'URL matches skip pattern',
    }
  }

  // 3. Extract host and check concurrency
  const host = extractHost(url)
  const slotAvailable = await waitForHostSlot(host, 10000) // 10s timeout
  if (!slotAvailable) {
    return {
      success: false,
      pageId: '',
      statusCode: 0,
      finalUrl: url,
      contentType: null,
      loadTime: 0,
      contentLength: 0,
      robotsAllowed: false,
      confidence: 'low',
      error: 'Timeout waiting for host concurrency slot',
    }
  }

  // 4. Increment host concurrency
  await incrementHostConcurrency(host)

  try {
    // 5. Check robots.txt
    const robotsCheck = await checkRobots(scanId, url)
    let confidence: 'high' | 'medium' | 'low' = robotsCheck.confidence
    let robotsAllowed = robotsCheck.allowed

    // Store robots decision evidence
    await storeRobotsEvidence(
      scanId,
      url,
      robotsAllowed,
      robotsCheck.reason,
      undefined // crawlDelay would come from parsed robots.txt
    )

    // 6. Wait for crawl delay (if robots.txt specifies one)
    // Note: crawlDelay would need to be extracted from parsed robots.txt
    await waitForDelay(host)

    // 7. If blocked by robots, set low confidence and skip content extraction
    if (!robotsAllowed) {
    // Still fetch to get status code, but don't extract content
    const fetchResult = await fetchPageWithRedirects(url, config, retryCount + 1)
    
    // Create/update page with minimal data
    const page = await upsertPage(scanId, url, fetchResult, {
      robotsBlocked: true,
      confidence: 'low',
      skipContentExtraction: true,
    })

    // Store evidence
    await storeFetchEvidence(page.id, fetchResult, robotsCheck)

    return {
      success: false,
      pageId: page.id,
      statusCode: fetchResult.statusCode,
      finalUrl: fetchResult.finalUrl,
      contentType: fetchResult.contentType,
      loadTime: fetchResult.timing.duration,
      contentLength: 0, // Content not extracted
      robotsAllowed: false,
      confidence: 'low',
      error: robotsCheck.reason,
    }
  }

  // Fetch page normally
  const fetchResult = await fetchPageWithRedirects(url, config, retryCount + 1)

  // Update confidence based on fetch result
  if (!fetchResult.success) {
    confidence = 'low'
  } else if (fetchResult.statusCode >= 400) {
    confidence = 'medium'
  }

  // Create/update page
  const page = await upsertPage(scanId, url, fetchResult, {
    robotsBlocked: false,
    confidence,
    skipContentExtraction: false,
  })

  // Store evidence
  await storeFetchEvidence(page.id, fetchResult, robotsCheck)

  // Enqueue extract_parse job if fetch was successful and content extraction not skipped
  if (fetchResult.success && !options.skipContentExtraction && fetchResult.contentLength > 0 && fetchResult.html) {
    const { addJob, generateIdempotencyKey } = await import('../queues')
    const { QUEUE_NAMES } = await import('../queues/types')
    
    // HTML is stored in page metadata, extract_parse will retrieve it
    const extractPayload = {
      scanId,
      pageId: page.id,
      url: fetchResult.finalUrl,
      html: fetchResult.html, // Pass HTML directly
    }
    
    const idempotencyKey = generateIdempotencyKey(scanId, `extract_${page.id}`)
    await addJob(QUEUE_NAMES.EXTRACT_PARSE, extractPayload, {
      idempotencyKey,
      priority: 3,
    })
  }

  return {
    success: fetchResult.success,
    pageId: page.id,
    statusCode: fetchResult.statusCode,
    finalUrl: fetchResult.finalUrl,
    contentType: fetchResult.contentType,
    loadTime: fetchResult.timing.duration,
    contentLength: fetchResult.contentLength,
    robotsAllowed: true,
    confidence,
    error: fetchResult.error,
  }
}

/**
 * Upsert page record
 */
async function upsertPage(
  scanId: string,
  originalUrl: string,
  fetchResult: FetchResult,
  options: {
    robotsBlocked: boolean
    confidence: 'high' | 'medium' | 'low'
    skipContentExtraction: boolean
  }
) {
  // Find existing page by scanId and original URL
  const existing = await prisma.page.findFirst({
    where: {
      scanId,
      url: originalUrl,
    },
  })

  const pageData = {
    scanId,
    url: originalUrl,
    statusCode: fetchResult.statusCode,
    loadTime: fetchResult.timing.duration,
    metadata: {
      ...(existing?.metadata as Record<string, unknown> || {}),
      status: 'fetched',
      finalUrl: fetchResult.finalUrl,
      contentType: fetchResult.contentType,
      contentLength: options.skipContentExtraction ? 0 : fetchResult.contentLength,
      redirectCount: fetchResult.redirectChain.length,
      robotsBlocked: options.robotsBlocked,
      confidence: options.confidence,
      skipContentExtraction: options.skipContentExtraction,
      fetchedAt: new Date().toISOString(),
      error: fetchResult.error || null,
      // Store HTML for extract_parse (only if not skipping extraction)
      html: options.skipContentExtraction ? null : (fetchResult.html || null),
    },
  }

  let page
  if (existing) {
    page = await prisma.page.update({
      where: { id: existing.id },
      data: pageData,
    })
  } else {
    page = await prisma.page.create({
      data: pageData,
    })
    // Increment pages fetched counter
    await incrementPagesFetched(scanId)
  }

  return page
}

/**
 * Store fetch evidence
 * Uses redaction and EVIDENCE_MODE compliance
 */
async function storeFetchEvidence(
  pageId: string,
  fetchResult: FetchResult,
  robotsCheck: RobotsCheckResult
): Promise<void> {
  // Store HTTP response evidence (redact URLs in finalUrl and error)
  const httpResponseContent = JSON.stringify({
    statusCode: fetchResult.statusCode,
    finalUrl: fetchResult.finalUrl,
    contentType: fetchResult.contentType,
    contentLength: fetchResult.contentLength,
    redirectCount: fetchResult.redirectChain.length,
    success: fetchResult.success,
    error: fetchResult.error,
  })
  await storeRedactedEvidence(
    pageId,
    'http_response',
    httpResponseContent,
    null,
    {
      statusCode: fetchResult.statusCode,
      finalUrl: fetchResult.finalUrl,
      contentType: fetchResult.contentType,
      contentLength: fetchResult.contentLength,
      redirectCount: fetchResult.redirectChain.length,
      success: fetchResult.success,
    }
  )

  // Store headers evidence (redact sensitive headers)
  const headersContent = JSON.stringify(fetchResult.headers)
  await storeRedactedEvidence(
    pageId,
    'http_headers',
    headersContent,
    null,
    {
      headerCount: Object.keys(fetchResult.headers).length,
      contentType: fetchResult.headers['content-type'] || null,
      server: fetchResult.headers['server'] || null,
    }
  )

  // Store redirect chain evidence (redact URLs)
  if (fetchResult.redirectChain.length > 0) {
    const redirectContent = JSON.stringify(fetchResult.redirectChain)
    await storeRedactedEvidence(
      pageId,
      'redirect_chain',
      redirectContent,
      null,
      {
        redirectCount: fetchResult.redirectChain.length,
        finalUrl: fetchResult.finalUrl,
      }
    )
  }

  // Store robots check evidence
  const robotsContent = JSON.stringify(robotsCheck)
  await storeRedactedEvidence(
    pageId,
    'robots_check',
    robotsContent,
    null,
    {
      allowed: robotsCheck.allowed,
      confidence: robotsCheck.confidence,
      reason: robotsCheck.reason || null,
    }
  )

  // Store timing evidence (no redaction needed)
  const timingContent = JSON.stringify(fetchResult.timing)
  await storeRedactedEvidence(
    pageId,
    'fetch_timing',
    timingContent,
    null,
    {
      duration: fetchResult.timing.duration,
      startTime: fetchResult.timing.startTime,
      endTime: fetchResult.timing.endTime,
    }
  )

  // Store error if present (redact sensitive data)
  if (fetchResult.error) {
    await storeRedactedEvidence(
      pageId,
      'fetch_error',
      fetchResult.error,
      null,
      {
        errorType: 'fetch_error',
        statusCode: fetchResult.statusCode,
      }
    )
  }
}

