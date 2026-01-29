/**
 * Locations Sitemap Route
 * 
 * Returns XML sitemap for location pages (city hubs, city+service, location pages).
 * Supports chunking if there are more than MAX_URLS_PER_SITEMAP entries.
 * 
 * URLs:
 * - /locations-sitemap.xml → first chunk (or only chunk)
 * - /locations-sitemap2.xml → second chunk
 * - /locations-sitemap3.xml → third chunk
 * etc.
 */

import { NextResponse } from 'next/server'
import { generateLocationsEntries, chunkEntries, MAX_URLS_PER_SITEMAP } from '../../../lib/sitemap-entries'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

function generateSitemapXML(entries: MetadataRoute.Sitemap): string {
  const urls = entries
    .map(
      (entry) => `	<url>
		<loc>${entry.url}</loc>
		<lastmod>${(entry.lastModified || new Date()).toISOString()}</lastmod>
		${entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : ''}
		${entry.priority !== undefined ? `<priority>${entry.priority}</priority>` : ''}
	</url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

export async function GET(request: Request) {
  try {
    const allEntries = generateLocationsEntries()
    const chunks = chunkEntries(allEntries, MAX_URLS_PER_SITEMAP)
    
    // Get chunk number from query parameter (passed via rewrite)
    const url = new URL(request.url)
    const chunkParam = url.searchParams.get('chunk')
    
    let chunkIndex = 0
    
    if (chunkParam) {
      // chunkParam will be the number from the URL (e.g., "2" from locations-sitemap2.xml)
      const chunkNumber = parseInt(chunkParam, 10)
      // locations-sitemap2.xml → chunk number 2 → chunk index 1 (second chunk)
      // locations-sitemap3.xml → chunk number 3 → chunk index 2 (third chunk)
      chunkIndex = chunkNumber > 1 ? chunkNumber - 1 : 0
    }
    // If no chunk param, use chunk 0 (first chunk)
    
    // Ensure chunk index is valid
    if (chunkIndex < 0 || chunkIndex >= chunks.length) {
      chunkIndex = 0
    }
    
    const entries = chunks[chunkIndex] || []
    const xml = generateSitemapXML(entries)
    
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error generating locations sitemap:', error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}
