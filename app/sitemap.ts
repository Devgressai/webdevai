import { MetadataRoute } from 'next'
import { citySlugs } from '../lib/cities'
import { industrySlugs } from '../lib/industries'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webvello.com'
  
  // Core pages - high priority, high traffic potential
  const corePages = [
    '', // Homepage
    '/about',
    '/contact',
    '/pricing',
    '/resources',
    '/case-studies',
    '/industries',
    '/locations',
    '/solutions',
    '/blog',
    '/seo-audit',
    '/website-speed-test',
    '/enhanced-demo'
  ]

  // Top performing services - focus on high-value, high-traffic services
  const topServices = [
    'website-design',
    'web-development',
    'seo',
    'ai-consulting',
    'digital-marketing',
    'ecommerce-design',
    'ui-ux-design',
    'local-seo',
    'website-redesign',
    'ai-seo'
  ]

  // Top cities - major metropolitan areas with high search volume
  const topCities = [
    'new-york-ny',
    'los-angeles-ca',
    'chicago-il',
    'houston-tx',
    'phoenix-az',
    'philadelphia-pa',
    'san-antonio-tx',
    'san-diego-ca',
    'dallas-tx',
    'san-jose-ca',
    'austin-tx',
    'jacksonville-fl',
    'fort-worth-tx',
    'columbus-oh',
    'charlotte-nc',
    'san-francisco-ca',
    'seattle-wa',
    'denver-co',
    'washington-dc',
    'boston-ma'
  ]

  // Solutions pages
  const solutionsPages = [
    'agency-results',
    'declining-traffic',
    'google-visibility',
    'website-conversion',
    'website-leads',
    'website-roi'
  ]

  // Blog pages
  const blogPages = [
    'essential-website-features-2024'
  ]

  // Generate core page entries
  const coreEntries = corePages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' as const :
                    page.includes('/services/') ? 'weekly' as const :
                    page.includes('/blog') ? 'weekly' as const :
                    'monthly' as const,
    priority: page === '' ? 1.0 :
              page.includes('/contact') || page.includes('/pricing') ? 0.9 :
              page.includes('/services/') ? 0.8 :
              page.includes('/solutions/') ? 0.8 :
              0.7,
  }))

  // Generate top service page entries
  const serviceEntries = topServices.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate top city hub page entries
  const cityEntries = topCities.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate strategic city-service combinations (top cities × top services only)
  const cityServiceEntries = topCities.flatMap((city) =>
    topServices.slice(0, 5).map((service) => ({ // Only top 5 services per city
      url: `${baseUrl}/${city}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // Generate solutions page entries
  const solutionsEntries = solutionsPages.map((solution) => ({
    url: `${baseUrl}/solutions/${solution}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Generate blog page entries
  const blogEntries = blogPages.map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...coreEntries,
    ...serviceEntries,
    ...cityEntries,
    ...cityServiceEntries,
    ...solutionsEntries,
    ...blogEntries
  ]
}