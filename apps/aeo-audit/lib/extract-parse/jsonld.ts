/**
 * JSON-LD extraction and parsing utilities
 */

import * as cheerio from 'cheerio'

export interface JsonLdBlock {
  rawText: string
  parsedType: string | null
  parseOk: boolean
  parsedData: any | null
  position?: number // Order in document
}

/**
 * Extract all JSON-LD blocks from HTML
 */
export function extractJsonLdBlocks(html: string): JsonLdBlock[] {
  const $ = cheerio.load(html)
  const blocks: JsonLdBlock[] = []

  $('script[type="application/ld+json"]').each((index, el) => {
    const rawText = $(el).html() || $(el).text() || ''
    const block = parseJsonLdBlock(rawText, index)
    blocks.push(block)
  })

  return blocks
}

/**
 * Parse a single JSON-LD block
 */
function parseJsonLdBlock(rawText: string, position: number): JsonLdBlock {
  let parsedData: any = null
  let parsedType: string | null = null
  let parseOk = false

  try {
    // Try to parse JSON
    parsedData = JSON.parse(rawText.trim())

    // Extract @type
    if (parsedData && typeof parsedData === 'object') {
      if (Array.isArray(parsedData)) {
        // Handle array of schemas
        if (parsedData.length > 0 && parsedData[0]['@type']) {
          parsedType = parsedData[0]['@type']
        }
      } else if (parsedData['@type']) {
        parsedType = parsedData['@type']
      } else if (parsedData['@context'] && parsedData['@type']) {
        parsedType = parsedData['@type']
      }
    }

    parseOk = true
  } catch (error) {
    // JSON parse failed
    parseOk = false
    parsedData = null
    parsedType = null
  }

  return {
    rawText: rawText.trim(),
    parsedType,
    parseOk,
    parsedData,
    position,
  }
}

/**
 * Get first JSON-LD block (for Evidence snippet)
 */
export function getFirstJsonLdBlock(html: string): JsonLdBlock | null {
  const blocks = extractJsonLdBlocks(html)
  return blocks.length > 0 ? blocks[0] : null
}

