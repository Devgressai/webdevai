import { MetadataRoute } from 'next'
import { citySlugs } from '../lib/cities'
import { industrySlugs } from '../lib/industries'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webvello.com'
  
  // Only include pages that actually exist
  const pages = [
    '', // Homepage
    '/contact',
    '/pricing',
    '/services/web-development',
    '/services/wordpress-development',
    '/services/seo'
  ]

  // Generate all city × industry × (web-development|seo|website-design)
  const allowedServices = ['web-development', 'seo', 'website-design'] as const
  const comboEntries = citySlugs.flatMap((city) =>
    industrySlugs.flatMap((industry) =>
      allowedServices.map((service) => ({
        url: `${baseUrl}/${city}/industry/${industry}/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      }))
    )
  )

  const baseEntries = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page.includes('/services/') ? ('weekly' as const) : ('monthly' as const),
    priority: page === '' ? 1.0 : 
              page.includes('/services/') ? 0.9 :
              page.includes('/contact') || page.includes('/pricing') ? 0.8 : 0.7,
  }))

  return [...baseEntries, ...comboEntries]
}