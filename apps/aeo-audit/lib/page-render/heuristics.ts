/**
 * Heuristics to determine if page rendering is needed
 * Checks if raw HTML is insufficient for extraction
 */

import { PrismaClient } from '@prisma/client'
import { ParsedMetadata } from '../extract-parse/html-parser'

const prisma = new PrismaClient()

export interface RenderHeuristicResult {
  needsRender: boolean
  reason?: string
  confidence: 'high' | 'medium' | 'low'
}

/**
 * Check if page needs rendering based on heuristics
 */
export async function shouldRenderPage(
  scanId: string,
  pageId: string,
  html: string
): Promise<RenderHeuristicResult> {
  // Parse HTML to get basic metadata
  const metadata = parseBasicMetadata(html)

  // Heuristic 1: Visible text < 500 chars
  if (metadata.visibleTextLength < 500) {
    return {
      needsRender: true,
      reason: `Insufficient visible text: ${metadata.visibleTextLength} chars (threshold: 500)`,
      confidence: 'high',
    }
  }

  // Heuristic 2: SPA shell detected AND missing key metadata
  if (isSpaShell(html) && isMissingKeyMetadata(metadata)) {
    return {
      needsRender: true,
      reason: 'SPA shell detected with missing key metadata',
      confidence: 'high',
    }
  }

  // Heuristic 3: Critical extraction fields missing suspiciously
  if (areCriticalFieldsMissing(metadata)) {
    return {
      needsRender: true,
      reason: 'Critical extraction fields missing (title, meta description, headings)',
      confidence: 'medium',
    }
  }

  return {
    needsRender: false,
    confidence: 'high',
  }
}

/**
 * Parse basic metadata from HTML (lightweight, no full parsing)
 */
function parseBasicMetadata(html: string): {
  visibleTextLength: number
  hasTitle: boolean
  hasMetaDescription: boolean
  hasHeadings: boolean
  hasJsonLd: boolean
  scriptCount: number
  divCount: number
} {
  // Extract visible text (rough estimate)
  const textContent = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  const visibleTextLength = textContent.length

  // Check for key elements
  const hasTitle = /<title[^>]*>[\s\S]*?<\/title>/i.test(html)
  const hasMetaDescription = /<meta[^>]*name=["']description["'][^>]*>/i.test(html)
  const hasHeadings = /<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/i.test(html)
  const hasJsonLd = /<script[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(html)

  // Count scripts and divs (SPA indicators)
  const scriptMatches = html.match(/<script[^>]*>/gi)
  const scriptCount = scriptMatches ? scriptMatches.length : 0

  const divMatches = html.match(/<div[^>]*>/gi)
  const divCount = divMatches ? divMatches.length : 0

  return {
    visibleTextLength,
    hasTitle,
    hasMetaDescription,
    hasHeadings,
    hasJsonLd,
    scriptCount,
    divCount,
  }
}

/**
 * Detect SPA shell (Single Page Application)
 */
function isSpaShell(html: string): boolean {
  // Common SPA indicators:
  // 1. Lots of scripts
  // 2. Root div with id (React/Vue/Angular)
  // 3. Minimal visible content in initial HTML
  // 4. Script tags loading framework bundles

  const metadata = parseBasicMetadata(html)

  // High script count + low visible text = likely SPA
  if (metadata.scriptCount > 5 && metadata.visibleTextLength < 1000) {
    return true
  }

  // Root div with common SPA IDs
  const spaRootPatterns = [
    /<div[^>]*id=["']root["'][^>]*>/i,
    /<div[^>]*id=["']app["'][^>]*>/i,
    /<div[^>]*id=["']main["'][^>]*>/i,
    /<div[^>]*id=["']__next["'][^>]*>/i, // Next.js
  ]

  if (spaRootPatterns.some((pattern) => pattern.test(html))) {
    return true
  }

  // Framework detection
  const frameworkPatterns = [
    /react/i,
    /vue/i,
    /angular/i,
    /next\.js/i,
    /nuxt/i,
    /gatsby/i,
  ]

  if (frameworkPatterns.some((pattern) => pattern.test(html))) {
    return true
  }

  return false
}

/**
 * Check if key metadata is missing
 */
function isMissingKeyMetadata(metadata: ReturnType<typeof parseBasicMetadata>): boolean {
  // Missing 2+ key fields
  let missingCount = 0

  if (!metadata.hasTitle) missingCount++
  if (!metadata.hasMetaDescription) missingCount++
  if (!metadata.hasHeadings) missingCount++
  if (!metadata.hasJsonLd) missingCount++

  return missingCount >= 2
}

/**
 * Check if critical extraction fields are missing
 */
function areCriticalFieldsMissing(metadata: ReturnType<typeof parseBasicMetadata>): boolean {
  // All critical fields missing
  return (
    !metadata.hasTitle &&
    !metadata.hasMetaDescription &&
    !metadata.hasHeadings &&
    metadata.visibleTextLength < 200
  )
}

/**
 * Get page metadata from database for heuristic check
 */
export async function getPageMetadataForHeuristic(
  scanId: string,
  pageId: string
): Promise<ParsedMetadata | null> {
  const page = await prisma.page.findUnique({
    where: { id: pageId },
    select: { metadata: true },
  })

  if (!page || !page.metadata) {
    return null
  }

  const metadata = page.metadata as any

  // Return parsed metadata if available
  return {
    title: metadata.title || null,
    metaDescription: metadata.metaDescription || null,
    metaRobots: metadata.metaRobots || null,
    canonical: metadata.canonical || null,
    ogTags: metadata.ogTags || { present: false, tags: {} },
    twitterTags: metadata.twitterTags || { present: false, tags: {} },
    headings: metadata.headings || { h1: [], h2: [], h3: [] },
    wordCount: metadata.wordCount || 0,
    lists: metadata.lists || { ulCount: 0, olCount: 0 },
    images: metadata.images || { count: 0, withAlt: 0, withoutAlt: 0 },
  }
}

