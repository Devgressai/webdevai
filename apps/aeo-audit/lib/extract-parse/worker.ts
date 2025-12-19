/**
 * Extract Parse Worker Implementation
 * Parses HTML and extracts metadata, JSON-LD, and content metrics
 */

import { PrismaClient } from '@prisma/client'
import { ExtractParsePayload } from '../queues/types'
import { getConfig, truncateText } from './config'
import { parseHtml, ParsedMetadata } from './html-parser'
import { extractJsonLdBlocks, JsonLdBlock } from './jsonld'

const prisma = new PrismaClient()

export interface ExtractParseResult {
  success: boolean
  pageId: string
  metadata: ParsedMetadata
  jsonLdBlocks: JsonLdBlock[]
  error?: string
}

/**
 * Main extract parse function
 */
export async function extractAndParse(
  payload: ExtractParsePayload
): Promise<ExtractParseResult> {
  const { scanId, pageId, url, html } = payload
  const config = getConfig()

  let htmlContent = html

  // If HTML not provided, try to get from Page record metadata
  if (!htmlContent) {
    const page = await prisma.page.findUnique({
      where: { id: pageId },
    })

    if (!page) {
      return {
        success: false,
        pageId,
        metadata: getEmptyMetadata(),
        jsonLdBlocks: [],
        error: 'Page not found',
      }
    }

    // Try to get HTML from metadata
    const pageMetadata = page.metadata as Record<string, unknown> | null
    if (pageMetadata && typeof pageMetadata.html === 'string') {
      htmlContent = pageMetadata.html
    } else {
      return {
        success: false,
        pageId,
        metadata: getEmptyMetadata(),
        jsonLdBlocks: [],
        error: 'HTML content not available in payload or page metadata',
      }
    }
  }

  try {
    // Parse HTML
    const metadata = parseHtml(htmlContent)

    // Extract JSON-LD blocks
    const jsonLdBlocks = extractJsonLdBlocks(htmlContent)

    // Update Page record
    await updatePageMetadata(pageId, metadata, jsonLdBlocks)

    // Store JSON-LD blocks in SchemaBlock table
    await storeSchemaBlocks(pageId, jsonLdBlocks, config)

    // Store Evidence snippets
    await storeEvidenceSnippets(pageId, metadata, jsonLdBlocks, config)

    // Check if all pages for this scan have been extracted
    // If so, trigger cluster_build
    const allPagesExtracted = await checkAllPagesExtracted(scanId)
    if (allPagesExtracted) {
      const { addJob, generateIdempotencyKey } = await import('../queues')
      const { QUEUE_NAMES } = await import('../queues/types')
      
      const clusterPayload = {
        scanId,
        pageIds: null, // Process all pages
      }
      
      const idempotencyKey = generateIdempotencyKey(scanId, 'cluster_build')
      await addJob(QUEUE_NAMES.CLUSTER_BUILD, clusterPayload, {
        idempotencyKey,
        priority: 4,
      })
    }

    return {
      success: true,
      pageId,
      metadata,
      jsonLdBlocks,
    }
  } catch (error) {
    return {
      success: false,
      pageId,
      metadata: getEmptyMetadata(),
      jsonLdBlocks: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Get empty metadata structure
 */
function getEmptyMetadata(): ParsedMetadata {
  return {
    title: null,
    metaDescription: null,
    metaRobots: null,
    canonical: null,
    ogTags: {
      present: false,
      tags: {},
    },
    twitterTags: {
      present: false,
      tags: {},
    },
    headings: {
      h1: [],
      h2: [],
      h3: [],
    },
    wordCount: 0,
    lists: {
      ulCount: 0,
      olCount: 0,
    },
    images: {
      count: 0,
      withAlt: 0,
      withoutAlt: 0,
    },
  }
}

/**
 * Update Page record with extracted metadata
 */
async function updatePageMetadata(
  pageId: string,
  metadata: ParsedMetadata,
  jsonLdBlocks: JsonLdBlock[]
): Promise<void> {
  const existing = await prisma.page.findUnique({
    where: { id: pageId },
  })

  if (!existing) {
    throw new Error(`Page ${pageId} not found`)
  }

  const existingMetadata = (existing.metadata as Record<string, unknown>) || {}

  await prisma.page.update({
    where: { id: pageId },
    data: {
      title: metadata.title,
      metadata: {
        ...existingMetadata,
        // SEO metadata
        metaDescription: metadata.metaDescription,
        metaRobots: metadata.metaRobots,
        canonical: metadata.canonical,
        // Social tags
        ogTags: metadata.ogTags,
        twitterTags: metadata.twitterTags,
        // Content structure
        headings: metadata.headings,
        wordCount: metadata.wordCount,
        lists: metadata.lists,
        images: metadata.images,
        // JSON-LD summary
        jsonLdBlockCount: jsonLdBlocks.length,
        jsonLdTypes: jsonLdBlocks
          .map((b) => b.parsedType)
          .filter((t): t is string => t !== null),
        jsonLdParseOkCount: jsonLdBlocks.filter((b) => b.parseOk).length,
        // Extraction timestamp
        extractedAt: new Date().toISOString(),
      },
    },
  })
}

/**
 * Store JSON-LD blocks in SchemaBlock table
 */
async function storeSchemaBlocks(
  pageId: string,
  jsonLdBlocks: JsonLdBlock[],
  config: ReturnType<typeof getConfig>
): Promise<void> {
  // Delete existing schema blocks for this page
  await prisma.schemaBlock.deleteMany({
    where: { pageId },
  })

  // Insert new blocks
  for (const block of jsonLdBlocks) {
    // Truncate raw text if needed
    const rawText = truncateText(block.rawText, config.maxJsonLdBlockSize)

    await prisma.schemaBlock.create({
      data: {
        pageId,
        rawText,
        parsedType: block.parsedType,
        parseOk: block.parseOk,
        parsedData: block.parseOk && block.parsedData ? block.parsedData : null,
        metadata: {
          position: block.position,
          originalSize: block.rawText.length,
          truncated: block.rawText.length > config.maxJsonLdBlockSize,
        },
      },
    })
  }
}

/**
 * Check if all pages for a scan have been extracted
 */
async function checkAllPagesExtracted(scanId: string): Promise<boolean> {
  const totalPages = await prisma.page.count({
    where: {
      scanId,
      statusCode: { not: null }, // Has been fetched
    },
  })

  const extractedPages = await prisma.page.count({
    where: {
      scanId,
      statusCode: { not: null },
      metadata: {
        path: ['extractedAt'],
        not: null,
      },
    },
  })

  return totalPages > 0 && extractedPages === totalPages
}

/**
 * Store Evidence snippets
 * Uses redaction and EVIDENCE_MODE compliance
 */
async function storeEvidenceSnippets(
  pageId: string,
  metadata: ParsedMetadata,
  jsonLdBlocks: JsonLdBlock[],
  config: ReturnType<typeof getConfig>
): Promise<void> {
  const { storeRedactedEvidence } = await import('../evidence/storage')

  // Canonical tag snippet
  if (metadata.canonical) {
    await storeRedactedEvidence(
      pageId,
      'canonical_tag',
      metadata.canonical,
      'link[rel="canonical"]',
      {
        fullUrl: metadata.canonical,
        truncated: metadata.canonical.length > config.maxCanonicalSnippetSize,
      }
    )
  }

  // Title/meta snippet
  const titleMetaSnippet = [
    metadata.title ? `Title: ${metadata.title}` : 'Title: (missing)',
    metadata.metaDescription
      ? `Meta Description: ${metadata.metaDescription}`
      : 'Meta Description: (missing)',
    metadata.metaRobots ? `Meta Robots: ${metadata.metaRobots}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  if (titleMetaSnippet) {
    await storeRedactedEvidence(
      pageId,
      'title_meta_snippet',
      titleMetaSnippet,
      'head',
      {
        hasTitle: !!metadata.title,
        hasMetaDescription: !!metadata.metaDescription,
        hasMetaRobots: !!metadata.metaRobots,
        truncated: titleMetaSnippet.length > config.maxTitleSnippetSize,
      }
    )
  }

  // First JSON-LD block snippet
  if (jsonLdBlocks.length > 0) {
    const firstBlock = jsonLdBlocks[0]
    await storeRedactedEvidence(
      pageId,
      'jsonld_block_snippet',
      firstBlock.rawText,
      'script[type="application/ld+json"]',
      {
        blockIndex: 0,
        parsedType: firstBlock.parsedType,
        parseOk: firstBlock.parseOk,
        totalBlocks: jsonLdBlocks.length,
        originalSize: firstBlock.rawText.length,
        truncated: firstBlock.rawText.length > config.maxEvidenceSnippetSize,
      }
    )
  }
}

