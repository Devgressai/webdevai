/**
 * Sanitized extract builder
 * Builds payloads for LLM evaluation WITHOUT raw HTML
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface SanitizedExtract {
  url: string
  title: string | null
  metaDescription: string | null
  canonical: string | null
  headings: {
    h1: string[]
    h2: string[]
    h3: string[]
  }
  wordCount: number
  schemaTypes: string[]
  schemaSummary: Array<{
    type: string
    parseOk: boolean
  }>
  images: {
    total: number
    withAlt: number
  }
  lists: {
    ul: number
    ol: number
  }
  // NO raw HTML - only structured data
}

/**
 * Build sanitized extract for a page
 */
export async function buildSanitizedExtract(
  pageId: string
): Promise<SanitizedExtract> {
  const page = await prisma.page.findUnique({
    where: { id: pageId },
    include: {
      schemaBlocks: true,
    },
  })

  if (!page) {
    throw new Error(`Page ${pageId} not found`)
  }

  const metadata = (page.metadata as Record<string, unknown>) || {}

  // Extract structured data (NO HTML)
  const extract: SanitizedExtract = {
    url: page.url,
    title: page.title,
    metaDescription: (metadata.metaDescription as string) || null,
    canonical: (metadata.canonical as string) || null,
    headings: {
      h1: (metadata.headings as any)?.h1 || [],
      h2: (metadata.headings as any)?.h2 || [],
      h3: (metadata.headings as any)?.h3 || [],
    },
    wordCount: (metadata.wordCount as number) || 0,
    schemaTypes: (metadata.jsonLdTypes as string[]) || [],
    schemaSummary: page.schemaBlocks.map((sb) => ({
      type: sb.parsedType || 'unknown',
      parseOk: sb.parseOk,
    })),
    images: {
      total: (metadata.images as any)?.count || 0,
      withAlt: (metadata.images as any)?.withAlt || 0,
    },
    lists: {
      ul: (metadata.lists as any)?.ulCount || 0,
      ol: (metadata.lists as any)?.olCount || 0,
    },
  }

  return extract
}

/**
 * Build sanitized extracts for multiple pages
 */
export async function buildSanitizedExtracts(
  pageIds: string[]
): Promise<SanitizedExtract[]> {
  const extracts: SanitizedExtract[] = []

  for (const pageId of pageIds) {
    try {
      const extract = await buildSanitizedExtract(pageId)
      extracts.push(extract)
    } catch (error) {
      console.error(`Failed to build extract for page ${pageId}:`, error)
      // Continue with other pages
    }
  }

  return extracts
}

