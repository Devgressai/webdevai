/**
 * Services Sitemap Route
 * 
 * Returns XML sitemap for service pages (/services/*, /solutions/*, tools).
 */

import { NextResponse } from 'next/server'
import { generateServicesEntries } from '../../../lib/sitemap-entries'
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

export async function GET() {
  try {
    const entries = generateServicesEntries()
    const xml = generateSitemapXML(entries)
    
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error generating services sitemap:', error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}
