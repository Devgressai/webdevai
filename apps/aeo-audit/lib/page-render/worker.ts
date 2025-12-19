/**
 * Page Render Fallback Worker Implementation
 * Renders pages with Playwright when raw HTML is insufficient
 */

import { PrismaClient } from '@prisma/client'
import { PageRenderFallbackPayload } from '../queues/types'
import { shouldRenderPage } from './heuristics'
import { renderPage, RenderResult, isPlaywrightAvailable } from './playwright'
import { addJob } from '../queues/factory'
import { QUEUE_NAMES } from '../queues/types'
import { ExtractParsePayload } from '../queues/types'
import { storeRedactedEvidence } from '../evidence/storage'
import {
  incrementPagesRendered,
  canContinueProcessing,
} from '@/lib/budget/tracking'

const prisma = new PrismaClient()

export interface PageRenderWorkerResult {
  success: boolean
  pageId: string
  renderUsed: boolean
  duration: number
  htmlLength: number
  extractParseJobId?: string
  error?: string
}

/**
 * Main page render function
 */
export async function renderPageFallback(
  payload: PageRenderFallbackPayload
): Promise<PageRenderWorkerResult> {
  const { scanId, url } = payload
  const startTime = Date.now()

  try {
    // 1. Check if Playwright is available
    if (!isPlaywrightAvailable()) {
      return {
        success: false,
        pageId: '',
        renderUsed: false,
        duration: Date.now() - startTime,
        htmlLength: 0,
        error: 'Playwright not available',
      }
    }

    // 2. Get page record
    const page = await prisma.page.findFirst({
      where: {
        scanId,
        url,
      },
    })

    if (!page) {
      return {
        success: false,
        pageId: '',
        renderUsed: false,
        duration: Date.now() - startTime,
        htmlLength: 0,
        error: 'Page not found',
      }
    }

    // 3. Get HTML from page metadata or fetch it
    let html: string | null = null

    const metadata = (page.metadata as Record<string, unknown>) || {}
    if (metadata.html) {
      html = metadata.html as string
    } else {
      // Try to get from evidence
      const htmlEvidence = await prisma.evidence.findFirst({
        where: {
          pageId: page.id,
          type: 'html_content',
        },
        orderBy: { createdAt: 'desc' },
      })

      if (htmlEvidence) {
        html = htmlEvidence.content
      }
    }

    if (!html) {
      return {
        success: false,
        pageId: page.id,
        renderUsed: false,
        duration: Date.now() - startTime,
        htmlLength: 0,
        error: 'HTML content not available',
      }
    }

    // 4. Check heuristics to determine if rendering is needed
    const heuristicResult = await shouldRenderPage(scanId, page.id, html)

    if (!heuristicResult.needsRender) {
      return {
        success: true,
        pageId: page.id,
        renderUsed: false,
        duration: Date.now() - startTime,
        htmlLength: html.length,
        error: 'Rendering not needed based on heuristics',
      }
    }

    // 5. Render page with Playwright
    const renderResult = await renderPage(url, {
      timeout: 15000, // 15 seconds max
      blockAssets: true,
      waitForTimeout: 1000, // Wait 1s after load for JS to execute
    })

    if (!renderResult.success || !renderResult.html) {
      // Store render failure evidence
      await storeRenderEvidence(page.id, {
        renderUsed: true,
        success: false,
        duration: renderResult.duration,
        reason: renderResult.error || 'Render failed',
      })

      return {
        success: false,
        pageId: page.id,
        renderUsed: true,
        duration: renderResult.duration,
        htmlLength: 0,
        error: renderResult.error || 'Render failed',
      }
    }

    // 6. Store render evidence
    await storeRenderEvidence(page.id, {
      renderUsed: true,
      success: true,
      duration: renderResult.duration,
      reason: heuristicResult.reason,
      metadata: renderResult.metadata,
    })

    // 7. Enqueue extract_parse job with rendered HTML
    const extractParsePayload: ExtractParsePayload = {
      scanId,
      pageId: page.id,
      url,
      html: renderResult.html,
    }

    const extractParseJob = await addJob(QUEUE_NAMES.EXTRACT_PARSE, extractParsePayload, {
      priority: 1, // High priority for rendered content
    })

    return {
      success: true,
      pageId: page.id,
      renderUsed: true,
      duration: renderResult.duration,
      htmlLength: renderResult.html.length,
      extractParseJobId: extractParseJob.id,
    }
  } catch (error) {
    return {
      success: false,
      pageId: '',
      renderUsed: false,
      duration: Date.now() - startTime,
      htmlLength: 0,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Store render evidence
 * Uses redaction and EVIDENCE_MODE compliance
 */
async function storeRenderEvidence(
  pageId: string,
  evidence: {
    renderUsed: boolean
    success: boolean
    duration: number
    reason?: string
    metadata?: RenderResult['metadata']
  }
): Promise<void> {
  try {
    const evidenceContent = JSON.stringify({
      renderUsed: evidence.renderUsed,
      success: evidence.success,
      duration: evidence.duration,
      reason: evidence.reason,
      timestamp: new Date().toISOString(),
    })

    await storeRedactedEvidence(
      pageId,
      'render_fallback',
      evidenceContent,
      null,
      {
        duration: evidence.duration,
        reason: evidence.reason,
        metadata: evidence.metadata,
      }
    )
  } catch (error) {
    console.error('Error storing render evidence:', error)
    // Don't throw - evidence storage is best effort
  }
}

