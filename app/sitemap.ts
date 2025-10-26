import { MetadataRoute } from 'next'
import { citySlugs } from '../lib/cities'
import { industrySlugs } from '../lib/industries'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.webvello.com'
  
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

  // Services that have standalone pages under /services/
  const standaloneServices = [
    'website-design',
    'website-redesign',
    'web-development',
    'rapid-web-design',
    'ui-ux-design',
    'ecommerce-design',
    'app-design-development',
    'software-design-development',
    'software-development',
    'shopify-development',
    'wordpress-development',
    'ai-consulting',
    'ai-seo',
    'ai-digital-marketing',
    'ai-gpt-integration',
    'ai-agent-development',
    'chatgpt-optimization',
    'generative-engine-optimization',
    'answer-engine-optimization',
    'enterprise-geo-services',
    'seo',
    'local-seo',
    'digital-marketing',
    'email-marketing-design',
    'social-media-design',
    'cro-ecommerce',
    'cro-lead-generation'
  ]

  // Limit cities to avoid timeout - use top 50 cities only
  const topCities = citySlugs.slice(0, 50)

  // Generate core page entries
  const coreEntries = corePages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' as const : 'monthly' as const,
    priority: page === '' ? 1.0 : 0.7,
  }))

  // Generate service page entries
  const serviceEntries = standaloneServices.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate city hub page entries (limited to 50 cities)
  const cityEntries = topCities.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    ...coreEntries,
    ...serviceEntries,
    ...cityEntries
  ]
}
