/**
 * Dynamic Sitemap Route Handler - handles /sitemap/[id].xml
 * 
 * Generates individual sitemaps for:
 * - 0: Core pages
 * - 1: Services
 * - 2: Blog
 * - 3+: Location chunks
 */

import { NextRequest, NextResponse } from 'next/server'
import { MetadataRoute } from 'next'
import {
  generateCoreEntries,
  generateServicesEntries,
  generateBlogEntries,
  generateLocationsEntries,
  getNewestLastMod,
  chunkEntries,
  MAX_URLS_PER_SITEMAP,
} from '../../../lib/sitemap-entries'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Parse the sitemap ID from the URL (e.g., "0.xml" -> 0)
    const idMatch = params.id.match(/^(\d+)(?:\.xml)?$/)
    if (!idMatch) {
      return new NextResponse('Not Found', { status: 404 })
    }

    const sitemapId = parseInt(idMatch[1], 10)
    let entries: MetadataRoute.Sitemap = []

    if (sitemapId === 0) {
      entries = generateCoreEntries()
    } else if (sitemapId === 1) {
      entries = generateServicesEntries()
    } else if (sitemapId === 2) {
      entries = await generateBlogEntries()
    } else {
      // Location chunks (id 3+)
      const allLocationEntries = generateLocationsEntries()
      const chunks = chunkEntries(allLocationEntries, MAX_URLS_PER_SITEMAP)
      const chunkIndex = sitemapId - 3

      if (chunkIndex >= 0 && chunkIndex < chunks.length) {
        entries = chunks[chunkIndex]
      } else {
        return new NextResponse('Not Found', { status: 404 })
      }
    }

    // Convert to XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(entry => {
    let entryXml = `  <url>
    <loc>${escapeXml(entry.url)}</loc>`

    if (entry.lastModified) {
      entryXml += `
    <lastmod>${new Date(entry.lastModified).toISOString().split('T')[0]}</lastmod>`
    }

    if (entry.changeFrequency) {
      entryXml += `
    <changefreq>${entry.changeFrequency}</changefreq>`
    }

    if (entry.priority) {
      entryXml += `
    <priority>${entry.priority}</priority>`
    }

    entryXml += `
  </url>`

    return entryXml
  })
  .join('\n')}
</urlset>`

    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error(`[sitemap/${params.id}] Error generating sitemap:`, error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}

/**
 * Escape XML special characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
