import { MetadataRoute } from 'next'
import { citySlugs } from '../lib/cities'
import { industrySlugs } from '../lib/industries'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webvello.com'
  
  // Core pages
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
    '/enhanced-demo',
    '/sitemap'
  ]

  // All 28 services
  const allServices = [
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

  // Generate service page entries
  const serviceEntries = allServices.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate city hub page entries
  const cityEntries = citySlugs.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate city-service page entries (all 28 services × 40 cities)
  const cityServiceEntries = citySlugs.flatMap((city) =>
    allServices.map((service) => ({
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

  // Generate city-industry-service entries (if they exist)
  const cityIndustryServiceEntries = citySlugs.flatMap((city) =>
    industrySlugs.flatMap((industry) =>
      ['web-development', 'seo', 'website-design'].map((service) => ({
        url: `${baseUrl}/${city}/industry/${industry}/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
    )
  )

  return [
    ...coreEntries,
    ...serviceEntries,
    ...cityEntries,
    ...cityServiceEntries,
    ...solutionsEntries,
    ...blogEntries,
    ...cityIndustryServiceEntries
  ]
}