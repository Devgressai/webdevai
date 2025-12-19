/**
 * Representative URL selection utilities
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface RepresentativeUrls {
  best: string | null // Highest internal link count
  typical: string | null // Median internal link count
  worst: string | null // Lowest internal link count (or fallback)
}

/**
 * Select representative URLs using internal link count proxy
 * Falls back to heuristic if link counts unavailable
 */
export async function selectRepresentativeUrls(
  pageIds: string[],
  scanId: string
): Promise<RepresentativeUrls> {
  if (pageIds.length === 0) {
    return { best: null, typical: null, worst: null }
  }

  // Get pages with metadata
  const pages = await prisma.page.findMany({
    where: {
      id: { in: pageIds },
      scanId,
    },
    select: {
      id: true,
      url: true,
      metadata: true,
    },
  })

  if (pages.length === 0) {
    return { best: null, typical: null, worst: null }
  }

  // Extract internal link counts from metadata
  const pagesWithLinks = pages.map((page) => {
    const metadata = (page.metadata as Record<string, unknown>) || {}
    const internalLinkCount =
      typeof metadata.internalLinkCount === 'number'
        ? metadata.internalLinkCount
        : null

    // Fallback heuristic: use word count as proxy
    const fallbackScore =
      typeof metadata.wordCount === 'number' ? metadata.wordCount : 0

    return {
      id: page.id,
      url: page.url,
      linkCount: internalLinkCount,
      fallbackScore,
    }
  })

  // Sort by link count (descending), fallback to word count
  pagesWithLinks.sort((a, b) => {
    if (a.linkCount !== null && b.linkCount !== null) {
      return b.linkCount - a.linkCount
    }
    if (a.linkCount !== null) return -1
    if (b.linkCount !== null) return 1
    return b.fallbackScore - a.fallbackScore
  })

  // Select representatives
  const best = pagesWithLinks[0]?.url || null
  const typical =
    pagesWithLinks[Math.floor(pagesWithLinks.length / 2)]?.url || null
  const worst =
    pagesWithLinks[pagesWithLinks.length - 1]?.url || null

  return { best, typical, worst }
}

/**
 * Get page ID from URL for representative selection
 */
export async function getPageIdFromUrl(
  url: string,
  scanId: string
): Promise<string | null> {
  const page = await prisma.page.findFirst({
    where: {
      url,
      scanId,
    },
    select: {
      id: true,
    },
  })

  return page?.id || null
}

