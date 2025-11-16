import { MetadataRoute } from 'next'
import { citySlugs } from '../lib/cities'
import { industrySlugs } from '../lib/industries'
import { readdirSync } from 'fs'
import { join } from 'path'

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

  // Use ALL cities for comprehensive coverage
  const allCities = citySlugs
  
  // Key services for city+service combinations
  const keyServices = [
    'website-design',
    'web-development',
    'seo',
    'local-seo',
    'digital-marketing',
    'ai-seo',
    'ai-consulting',
    'ui-ux-design'
  ]

  // Services for city-industry-service combinations
  const industryServices = [
    'website-design',
    'web-development',
    'seo'
  ]

  // Get all blog post slugs dynamically
  const blogDir = join(process.cwd(), 'app', 'blog')
  let blogSlugs: string[] = []
  try {
    blogSlugs = readdirSync(blogDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .filter(name => name !== 'page.tsx' && !name.startsWith('.'))
  } catch (error) {
    console.error('Error reading blog directory:', error)
  }

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

  // Generate city hub page entries
  const cityEntries = allCities.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate city+service combination entries
  const cityServiceEntries: MetadataRoute.Sitemap = []
  for (const city of allCities) {
    for (const service of keyServices) {
      cityServiceEntries.push({
        url: `${baseUrl}/${city}/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      })
    }
  }

  // Generate city-industry-service combination entries
  const cityIndustryServiceEntries: MetadataRoute.Sitemap = []
  for (const city of allCities) {
    for (const industry of industrySlugs) {
      for (const service of industryServices) {
        cityIndustryServiceEntries.push({
          url: `${baseUrl}/${city}/industry/${industry}/${service}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        })
      }
    }
  }

  // Generate blog post entries
  const blogEntries = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...coreEntries,
    ...serviceEntries,
    ...cityEntries,
    ...cityServiceEntries,
    ...cityIndustryServiceEntries,
    ...blogEntries
  ]
}
