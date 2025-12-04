import { MetadataRoute } from 'next'
import { citySlugs } from '../lib/cities'
import { industrySlugs } from '../lib/industries'
import { getBlogPosts } from '../lib/get-blog-posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.webvello.com'
  
  // NOTE: Admin routes (/admin/*) are explicitly excluded from sitemap
  // They are also blocked in robots.txt and have noindex meta tags
  
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

  // Solutions pages
  const solutionsPages = [
    'agency-results',
    'declining-traffic',
    'google-visibility',
    'website-conversion',
    'website-leads',
    'website-roi'
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
    'cro-lead-generation',
    // Additional service pages
    'content-marketing',
    'core-web-vitals-optimization',
    'programmatic-seo',
    'schema-markup-services',
    'voice-search-optimization',
    'zero-click-search-optimization',
    'web-application-development-company',
    'web-application-development-chicago',
    'retail-development-services',
    'freight-forwarder-web-design',
    'seo-company-government-website',
    'seo-doctors-kansas-city',
    'seo-company-mesa-arizona',
    'wordpress-developers-denver',
    'portland-web-marketing',
    'jacksonville-ai-seo',
    'energy-seo-company',
    'real-estate-seo-california',
    'seo-company-mesa',
    'seo-baltimore',
    'seo-services-louisville',
    'seo-consulting-charlotte',
    'web-design-albuquerque',
    'web-design-columbus',
    'web-design-oklahoma-city',
    'web-development-fresno',
    'web-development-las-vegas',
    'website-design-louisville',
    'website-design-oklahoma-city',
    'auto-repair-website-design-milwaukee',
    'biotech-website-design-chicago',
    'dairy-industry-website-design-los-angeles',
    'educational-website-development-charlotte',
    'medical-website-design-austin',
    'surgeon-web-design-austin',
    // GEO Services pages
    'geo-services',
    'geo-los-angeles',
    'geo-new-york',
    'geo-chicago',
    'geo-houston',
    'geo-phoenix',
    'geo-dallas',
    'geo-san-francisco',
    'geo-seattle',
    'geo-denver',
    'geo-atlanta',
    'geo-miami',
    'geo-home-services',
    'geo-professional-services',
    'geo-saas-technology',
    'geo-boston',
    'geo-portland',
    'geo-san-diego',
    'geo-austin',
    'geo-ecommerce',
    'geo-healthcare',
    'geo-real-estate',
    'geo-financial-services',
    'geo-legal',
    'geo-restaurants',
    'geo-landscaping',
    'geo-hvac',
    'geo-plumbing',
    'geo-roofing',
    'geo-electricians',
    'geo-auto-repair',
    'seo-geo-packages',
    'web-development-packages'
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

  // Get all blog posts with error handling
  let blogPosts: Awaited<ReturnType<typeof getBlogPosts>> = []
  try {
    blogPosts = await getBlogPosts()
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  // Generate core page entries
  const coreEntries = corePages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' as const : 'monthly' as const,
    priority: page === '' ? 1.0 : 0.7,
  }))

  // Generate solutions page entries - ensure all solutions pages are included
  const solutionsEntries = solutionsPages.map((solution) => ({
    url: `${baseUrl}/solutions/${solution}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Generate service page entries
  const serviceEntries = standaloneServices.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate blog post entries with error handling for date parsing
  const blogEntries = blogPosts.map((post) => {
    let lastModified: Date
    try {
      lastModified = post.date ? new Date(post.date) : new Date()
    } catch (error) {
      lastModified = new Date()
    }
    
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  })

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

  // Generate city-industry hub page entries
  // Format: /[city]/industry/[industry]
  const cityIndustryEntries: MetadataRoute.Sitemap = []
  for (const city of allCities) {
    for (const industry of industrySlugs) {
      cityIndustryEntries.push({
        url: `${baseUrl}/${city}/industry/${industry}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    }
  }

  // Generate city-industry-service combination entries
  // Format: /[city]/industry/[industry]/[service]
  // Services: web-development, seo, website-design (as defined in generateStaticParams)
  const cityIndustryServiceEntries: MetadataRoute.Sitemap = []
  const cityIndustryServices = ['web-development', 'seo', 'website-design']
  for (const city of allCities) {
    for (const industry of industrySlugs) {
      for (const service of cityIndustryServices) {
        cityIndustryServiceEntries.push({
          url: `${baseUrl}/${city}/industry/${industry}/${service}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        })
      }
    }
  }

  return [
    ...coreEntries,
    ...solutionsEntries,
    ...serviceEntries,
    ...blogEntries,
    ...cityEntries,
    ...cityServiceEntries,
    ...cityIndustryEntries,
    ...cityIndustryServiceEntries
  ]
}
