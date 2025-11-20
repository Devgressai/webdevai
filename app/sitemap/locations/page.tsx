import { Metadata } from 'next'
import Link from 'next/link'
import { cities } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Locations Sitemap | Browse Cities by Letter',
  description: 'Browse all service locations alphabetically. Find digital marketing services for your city including SEO, web development, and local SEO services.',
  keywords: 'locations sitemap, cities sitemap, service locations, city pages, location index',
  openGraph: {
    title: 'Locations Sitemap | Web Vello',
    description: 'Browse all service locations alphabetically. Find digital marketing services for your city.',
    url: 'https://webvello.com/sitemap/locations',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webvello.com/sitemap/locations',
  },
}

export default function LocationsSitemapIndex() {
  const byLetter: Record<string, number> = {}
  Object.values(cities).forEach((c) => {
    const letter = c.fullName[0].toUpperCase()
    byLetter[letter] = (byLetter[letter] || 0) + 1
  })
  const letters = Object.keys(byLetter).sort()

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Locations Sitemap</h1>
      <p className="text-secondary-600 mb-6">Browse cities by first letter.</p>
      <ul className="flex flex-wrap gap-3">
        {letters.map((l) => (
          <li key={l}>
            <Link className="px-3 py-2 rounded-md border text-primary-600 hover:bg-primary-50" href={`/sitemap/locations/${l.toLowerCase()}`}>
              {l} ({byLetter[l]})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


