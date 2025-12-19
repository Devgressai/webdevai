/**
 * Sampling utilities for LLM evaluation
 * Selects representative pages for evaluation
 */

import { PrismaClient } from '@prisma/client'
import { LlmEvalConfig } from './config'

const prisma = new PrismaClient()

export interface SamplePage {
  pageId: string
  url: string
  reason: 'homepage' | 'top_page' | 'cluster_representative'
  clusterId?: string
  clusterName?: string
}

/**
 * Select sampling set for LLM evaluation
 */
export async function selectSamplingSet(
  scanId: string,
  config: LlmEvalConfig
): Promise<SamplePage[]> {
  const samples: SamplePage[] = []
  const usedPageIds = new Set<string>()

  // 1. Homepage/about/contact pages
  const homepagePages = await selectHomepagePages(scanId, config)
  for (const page of homepagePages) {
    if (!usedPageIds.has(page.pageId) && samples.length < config.maxTotalSamples) {
      samples.push(page)
      usedPageIds.add(page.pageId)
    }
  }

  // 2. Top pages (by internal link count or other metric)
  const topPages = await selectTopPages(scanId, config, usedPageIds)
  for (const page of topPages) {
    if (!usedPageIds.has(page.pageId) && samples.length < config.maxTotalSamples) {
      samples.push(page)
      usedPageIds.add(page.pageId)
    }
  }

  // 3. Representative per cluster (bounded)
  const clusterRepresentatives = await selectClusterRepresentatives(
    scanId,
    config,
    usedPageIds
  )
  for (const page of clusterRepresentatives) {
    if (!usedPageIds.has(page.pageId) && samples.length < config.maxTotalSamples) {
      samples.push(page)
      usedPageIds.add(page.pageId)
    }
  }

  return samples
}

/**
 * Select homepage/about/contact pages
 */
async function selectHomepagePages(
  scanId: string,
  config: LlmEvalConfig
): Promise<SamplePage[]> {
  const pages = await prisma.page.findMany({
    where: { scanId },
    select: {
      id: true,
      url: true,
    },
  })

  const homepagePages: SamplePage[] = []

  // Find homepage (root or /home or /index)
  const homepage = pages.find(
    (p) =>
      p.url.endsWith('/') ||
      p.url.endsWith('/home') ||
      p.url.endsWith('/index') ||
      p.url.match(/\/$|\/home|\/index$/i)
  )
  if (homepage) {
    homepagePages.push({
      pageId: homepage.id,
      url: homepage.url,
      reason: 'homepage',
    })
  }

  // Find about page
  const about = pages.find((p) =>
    p.url.toLowerCase().includes('/about')
  )
  if (about && homepagePages.length < config.maxHomepagePages) {
    homepagePages.push({
      pageId: about.id,
      url: about.url,
      reason: 'homepage',
    })
  }

  // Find contact page
  const contact = pages.find((p) =>
    p.url.toLowerCase().includes('/contact')
  )
  if (contact && homepagePages.length < config.maxHomepagePages) {
    homepagePages.push({
      pageId: contact.id,
      url: contact.url,
      reason: 'homepage',
    })
  }

  return homepagePages
}

/**
 * Select top pages by internal link count
 */
async function selectTopPages(
  scanId: string,
  config: LlmEvalConfig,
  excludePageIds: Set<string>
): Promise<SamplePage[]> {
  const pages = await prisma.page.findMany({
    where: {
      scanId,
      id: { notIn: Array.from(excludePageIds) },
    },
    select: {
      id: true,
      url: true,
      metadata: true,
    },
    take: config.maxTopPages * 2, // Get more to sort
  })

  // Sort by internal link count (from metadata) or word count
  const sortedPages = pages
    .map((page) => {
      const metadata = (page.metadata as Record<string, unknown>) || {}
      const linkCount = (metadata.internalLinkCount as number) || 0
      const wordCount = (metadata.wordCount as number) || 0
      return {
        page,
        score: linkCount * 2 + wordCount, // Weight links more
      }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, config.maxTopPages)
    .map((item) => ({
      pageId: item.page.id,
      url: item.page.url,
      reason: 'top_page' as const,
    }))

  return sortedPages
}

/**
 * Select representative pages per cluster
 */
async function selectClusterRepresentatives(
  scanId: string,
  config: LlmEvalConfig,
  excludePageIds: Set<string>
): Promise<SamplePage[]> {
  const clusters = await prisma.cluster.findMany({
    where: { scanId },
    include: {
      clusterPages: {
        where: {
          pageId: { notIn: Array.from(excludePageIds) },
          representativeType: { in: ['best', 'typical'] },
        },
        include: {
          page: {
            select: {
              id: true,
              url: true,
            },
          },
        },
        take: 1, // One representative per cluster
      },
    },
    take: config.maxClusterRepresentatives,
  })

  const representatives: SamplePage[] = []

  for (const cluster of clusters) {
    const representative = cluster.clusterPages[0]
    if (representative) {
      representatives.push({
        pageId: representative.page.id,
        url: representative.page.url,
        reason: 'cluster_representative',
        clusterId: cluster.id,
        clusterName: cluster.name,
      })
    }
  }

  return representatives
}

