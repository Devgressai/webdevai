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
    // Core services
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
    // AI services
    'ai-consulting',
    'ai-seo',
    'ai-digital-marketing',
    'ai-gpt-integration',
    'ai-agent-development',
    'chatgpt-optimization',
    'generative-engine-optimization',
    'answer-engine-optimization',
    'enterprise-geo-services',
    // Marketing services
    'seo',
    'local-seo',
    'digital-marketing',
    'email-marketing-design',
    'social-media-design',
    'cro-ecommerce',
    'cro-lead-generation',
    'content-marketing',
    'programmatic-seo',
    // SEO optimization services
    'schema-markup-services',
    'voice-search-optimization',
    'zero-click-search-optimization',
    'core-web-vitals-optimization',
    // City-specific service pages
    'seo-consulting-charlotte',
    'web-design-albuquerque',
    'seo-baltimore',
    'web-development-las-vegas',
    'web-application-development-chicago',
    'website-design-louisville',
    'web-design-columbus',
    'website-design-oklahoma-city',
    'seo-company-mesa',
    'web-design-oklahoma-city',
    'web-development-fresno',
    'seo-services-louisville',
    'real-estate-seo-california',
    'biotech-website-design-chicago',
    'medical-website-design-austin',
    'educational-website-development-charlotte',
    'auto-repair-website-design-milwaukee',
    'seo-company-mesa-arizona',
    'dairy-industry-website-design-los-angeles',
    'seo-company-government-website',
    'seo-doctors-kansas-city',
    'portland-web-marketing',
    'surgeon-web-design-austin',
    'retail-development-services',
    'freight-forwarder-web-design',
    'energy-seo-company',
    'web-application-development-company',
    'wordpress-developers-denver',
    'jacksonville-ai-seo'
  ]

  // Services supported by city-service pages (27 core services only)
  const cityServices = [
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

  // All cities - include all for comprehensive coverage
  const allCities = citySlugs

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
    'essential-website-features-2024',
    'voice-search-seo-optimization-2024',
    'local-seo-checklist-25-steps',
    'ai-powered-seo-machine-learning',
    // New blog posts added
    'seattle-software-development-guide',
    'healthcare-web-design-companies-guide',
    'arizona-organic-seo-growth-strategy',
    'education-companies-el-paso-guide',
    'freight-forwarder-web-design-guide',
    'government-companies-el-paso-guide',
    'seo-partnership-milwaukee-guide',
    'seo-service-complete-guide',
    'detroit-conversion-rate-optimization-services',
    'el-paso-conversion-rate-optimization-services',
    'louisville-conversion-rate-optimization-services',
    'oklahoma-city-conversion-rate-optimization-company',
    'oklahoma-city-conversion-rate-optimization-services',
    'logistics-web-design-california',
    'milwaukee-auto-repair-shop-website-design',
    'milwaukee-content-development',
    'web-developer-fresno',
    'website-design-detroit',
    'website-design-in-detroit',
    // Latest blog posts (January 2025)
    'best-seo-software-seattle-businesses-2025',
    'local-seo-guide-sacramento-businesses',
    'content-development-services-milwaukee-complete-guide'
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

  // Generate all service page entries (standalone services only)
  const serviceEntries = standaloneServices.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate all city hub page entries
  const cityEntries = allCities.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate city-service combinations (27 core services only)
  const cityServiceEntries = allCities.flatMap((city) =>
    cityServices.map((service) => ({
      url: `${baseUrl}/${city}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // Generate city-industry hub pages (109 cities × 16 industries = 1,744 pages)
  const cityIndustryHubEntries = allCities.flatMap((city) =>
    industrySlugs.map((industry) => ({
      url: `${baseUrl}/${city}/industry/${industry}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  // Generate city-industry-service combinations (only for the 3 core services)
  const coreServices = ['web-development', 'seo', 'website-design']
  const cityIndustryServiceEntries = allCities.flatMap((city) =>
    industrySlugs.flatMap((industry) =>
      coreServices.map((service) => ({
        url: `${baseUrl}/${city}/industry/${industry}/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
    )
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
    ...cityIndustryHubEntries,
    ...cityIndustryServiceEntries,
    ...solutionsEntries,
    ...blogEntries
  ]
}