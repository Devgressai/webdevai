/**
 * HTML parsing utilities using Cheerio
 */

import * as cheerio from 'cheerio'

export interface ParsedMetadata {
  title: string | null
  metaDescription: string | null
  metaRobots: string | null
  canonical: string | null
  ogTags: {
    present: boolean
    tags: Record<string, string>
  }
  twitterTags: {
    present: boolean
    tags: Record<string, string>
  }
  headings: {
    h1: string[]
    h2: string[]
    h3: string[]
  }
  wordCount: number
  lists: {
    ulCount: number
    olCount: number
  }
  images: {
    count: number
    withAlt: number
    withoutAlt: number
  }
}

/**
 * Parse HTML and extract metadata
 */
export function parseHtml(html: string): ParsedMetadata {
  const $ = cheerio.load(html)

  // Title
  const title = $('title').first().text().trim() || null

  // Meta description
  const metaDescription =
    $('meta[name="description"]').attr('content')?.trim() || null

  // Meta robots
  const metaRobots =
    $('meta[name="robots"]').attr('content')?.trim() || null

  // Canonical
  const canonical =
    $('link[rel="canonical"]').attr('href')?.trim() || null

  // OG tags
  const ogTags: Record<string, string> = {}
  $('meta[property^="og:"]').each((_, el) => {
    const property = $(el).attr('property')
    const content = $(el).attr('content')
    if (property && content) {
      ogTags[property] = content
    }
  })

  // Twitter tags
  const twitterTags: Record<string, string> = {}
  $('meta[name^="twitter:"]').each((_, el) => {
    const name = $(el).attr('name')
    const content = $(el).attr('content')
    if (name && content) {
      twitterTags[name] = content
    }
  })

  // Headings
  const h1: string[] = []
  $('h1').each((_, el) => {
    const text = $(el).text().trim()
    if (text) h1.push(text)
  })

  const h2: string[] = []
  $('h2').each((_, el) => {
    const text = $(el).text().trim()
    if (text) h2.push(text)
  })

  const h3: string[] = []
  $('h3').each((_, el) => {
    const text = $(el).text().trim()
    if (text) h3.push(text)
  })

  // Word count (visible text heuristic)
  // Remove script, style, and other non-visible elements
  $('script, style, noscript, iframe').remove()
  const visibleText = $('body').text() || $('html').text()
  const wordCount = countWords(visibleText)

  // Lists
  const ulCount = $('ul').length
  const olCount = $('ol').length

  // Images
  let imageCount = 0
  let withAlt = 0
  let withoutAlt = 0

  $('img').each((_, el) => {
    imageCount++
    const alt = $(el).attr('alt')
    if (alt && alt.trim()) {
      withAlt++
    } else {
      withoutAlt++
    }
  })

  return {
    title,
    metaDescription,
    metaRobots,
    canonical,
    ogTags: {
      present: Object.keys(ogTags).length > 0,
      tags: ogTags,
    },
    twitterTags: {
      present: Object.keys(twitterTags).length > 0,
      tags: twitterTags,
    },
    headings: {
      h1,
      h2,
      h3,
    },
    wordCount,
    lists: {
      ulCount,
      olCount,
    },
    images: {
      count: imageCount,
      withAlt,
      withoutAlt,
    },
  }
}

/**
 * Count words in text (simple heuristic)
 */
function countWords(text: string): number {
  if (!text || !text.trim()) return 0

  // Remove extra whitespace and split
  const words = text
    .replace(/\s+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)

  return words.length
}

