/**
 * Internal Linking Architecture
 * 
 * Intelligent internal linking system for SEO optimization
 * - Contextual link suggestions
 * - Related content recommendations
 * - Link distribution optimization
 * - Anchor text variation
 */

interface InternalLink {
  url: string
  title: string
  description: string
  category: 'service' | 'blog' | 'city' | 'solution' | 'resource'
  relevanceScore?: number
}

interface LinkingContext {
  currentPage: string
  pageType: 'service' | 'blog' | 'city' | 'home' | 'solution'
  service?: string
  city?: string
  industry?: string
  keywords?: string[]
}

// Core services for internal linking
const CORE_SERVICES: InternalLink[] = [
  {
    url: '/services/seo',
    title: 'SEO Services',
    description: 'Professional SEO services to rank #1 on Google',
    category: 'service'
  },
  {
    url: '/services/local-seo',
    title: 'Local SEO Services',
    description: 'Dominate local search results in your market',
    category: 'service'
  },
  {
    url: '/services/ai-seo',
    title: 'AI SEO Services',
    description: 'Revolutionary AI-powered SEO for 300%+ traffic growth',
    category: 'service'
  },
  {
    url: '/services/web-development',
    title: 'Web Development Services',
    description: 'Custom web development with modern technologies',
    category: 'service'
  },
  {
    url: '/services/website-design',
    title: 'Website Design Services',
    description: 'Professional website design that converts',
    category: 'service'
  },
  {
    url: '/services/ui-ux-design',
    title: 'UI/UX Design Services',
    description: 'User-centered design for better conversions',
    category: 'service'
  },
  {
    url: '/services/digital-marketing',
    title: 'Digital Marketing Services',
    description: 'Full-service digital marketing solutions',
    category: 'service'
  },
  {
    url: '/services/wordpress-development',
    title: 'WordPress Development',
    description: 'Expert WordPress development and customization',
    category: 'service'
  },
  {
    url: '/services/ecommerce-design',
    title: 'E-commerce Design',
    description: 'E-commerce websites that drive sales',
    category: 'service'
  },
  {
    url: '/services/ai-consulting',
    title: 'AI Consulting Services',
    description: 'Strategic AI consulting for business growth',
    category: 'service'
  },
]

// Solution pages
const SOLUTION_PAGES: InternalLink[] = [
  {
    url: '/solutions/google-visibility',
    title: 'Improve Google Visibility',
    description: 'Get found on Google and drive more traffic',
    category: 'solution'
  },
  {
    url: '/solutions/website-conversion',
    title: 'Increase Website Conversions',
    description: 'Turn visitors into customers with CRO',
    category: 'solution'
  },
  {
    url: '/solutions/website-leads',
    title: 'Generate More Leads',
    description: 'Proven strategies to generate quality leads',
    category: 'solution'
  },
  {
    url: '/solutions/declining-traffic',
    title: 'Fix Declining Traffic',
    description: 'Recover and grow your website traffic',
    category: 'solution'
  },
  {
    url: '/solutions/website-roi',
    title: 'Maximize Website ROI',
    description: 'Get measurable returns from your website',
    category: 'solution'
  },
  {
    url: '/solutions/agency-results',
    title: 'Agency-Level Results',
    description: 'Enterprise-quality marketing for your business',
    category: 'solution'
  },
]

// Resource pages
const RESOURCE_PAGES: InternalLink[] = [
  {
    url: '/pricing',
    title: 'View Our Pricing',
    description: 'Transparent pricing for digital marketing services',
    category: 'resource'
  },
  {
    url: '/case-studies',
    title: 'Success Stories',
    description: 'Real results from our digital marketing campaigns',
    category: 'resource'
  },
  {
    url: '/contact',
    title: 'Get a Free Consultation',
    description: 'Schedule your free digital marketing strategy session',
    category: 'resource'
  },
  {
    url: '/seo-audit',
    title: 'Free SEO Audit',
    description: 'Get a comprehensive SEO audit for your website',
    category: 'resource'
  },
  {
    url: '/website-speed-test',
    title: 'Website Speed Test',
    description: 'Test your website speed and performance',
    category: 'resource'
  },
]

/**
 * Get related services based on current service
 */
export function getRelatedServices(currentService: string, limit: number = 4): InternalLink[] {
  const serviceRelationships: Record<string, string[]> = {
    'seo': ['local-seo', 'ai-seo', 'website-design', 'digital-marketing'],
    'local-seo': ['seo', 'website-design', 'digital-marketing', 'ai-seo'],
    'ai-seo': ['seo', 'local-seo', 'digital-marketing', 'ai-consulting'],
    'web-development': ['website-design', 'ui-ux-design', 'wordpress-development', 'ecommerce-design'],
    'website-design': ['web-development', 'ui-ux-design', 'seo', 'digital-marketing'],
    'ui-ux-design': ['website-design', 'web-development', 'ecommerce-design', 'digital-marketing'],
    'digital-marketing': ['seo', 'local-seo', 'website-design', 'ai-digital-marketing'],
    'wordpress-development': ['web-development', 'website-design', 'ecommerce-design', 'seo'],
    'ecommerce-design': ['website-design', 'web-development', 'ui-ux-design', 'digital-marketing'],
    'ai-consulting': ['ai-seo', 'ai-digital-marketing', 'digital-marketing', 'seo'],
  }
  
  const relatedServiceSlugs = serviceRelationships[currentService] || []
  
  return CORE_SERVICES
    .filter(service => relatedServiceSlugs.some(slug => service.url.includes(slug)))
    .slice(0, limit)
}

/**
 * Get related blog posts based on topic
 */
export function getRelatedBlogPosts(keywords: string[], limit: number = 3): InternalLink[] {
  // This would ideally query your blog posts
  // For now, return example structure
  const blogPosts: InternalLink[] = [
    {
      url: '/blog/essential-website-features-2024',
      title: 'Essential Website Features for 2024',
      description: 'Must-have features for modern websites',
      category: 'blog'
    },
    {
      url: '/blog/local-seo-checklist-25-steps',
      title: 'Local SEO Checklist: 25 Steps',
      description: 'Complete guide to local SEO optimization',
      category: 'blog'
    },
    {
      url: '/blog/ai-powered-seo-machine-learning',
      title: 'AI-Powered SEO & Machine Learning',
      description: 'How AI is revolutionizing SEO',
      category: 'blog'
    },
  ]
  
  // Filter based on keyword relevance (simplified)
  return blogPosts.slice(0, limit)
}

/**
 * Get city-specific pages for internal linking
 */
export function getNearbyCities(currentCity: string, limit: number = 5): InternalLink[] {
  const cityGroups: Record<string, string[]> = {
    // California cities
    'los-angeles-ca': ['san-francisco-ca', 'san-diego-ca', 'sacramento-ca', 'fresno-ca', 'long-beach-ca'],
    'san-francisco-ca': ['los-angeles-ca', 'san-jose-ca', 'oakland-ca', 'sacramento-ca', 'san-diego-ca'],
    'san-diego-ca': ['los-angeles-ca', 'san-francisco-ca', 'long-beach-ca', 'sacramento-ca', 'fresno-ca'],
    
    // Texas cities
    'houston-tx': ['dallas-tx', 'austin-tx', 'san-antonio-tx', 'fort-worth-tx', 'el-paso-tx'],
    'dallas-tx': ['houston-tx', 'austin-tx', 'fort-worth-tx', 'san-antonio-tx', 'arlington-tx'],
    'austin-tx': ['houston-tx', 'dallas-tx', 'san-antonio-tx', 'fort-worth-tx', 'el-paso-tx'],
    
    // Florida cities
    'miami-fl': ['orlando-fl', 'tampa-fl', 'jacksonville-fl', 'st-petersburg-fl', 'fort-lauderdale-fl'],
    'orlando-fl': ['miami-fl', 'tampa-fl', 'jacksonville-fl', 'st-petersburg-fl', 'fort-lauderdale-fl'],
    
    // New York area
    'new-york-ny': ['buffalo-ny', 'rochester-ny', 'yonkers-ny', 'newark-nj', 'jersey-city-nj'],
    
    // Illinois
    'chicago-il': ['aurora-il', 'rockford-il', 'naperville-il', 'joliet-il', 'elgin-il'],
    
    // Ohio
    'columbus-oh': ['cleveland-oh', 'toledo-oh', 'akron-oh', 'dayton-oh', 'cincinnati-oh'],
  }
  
  const nearbyCities = cityGroups[currentCity] || []
  
  return nearbyCities.slice(0, limit).map(citySlug => ({
    url: `/${citySlug}`,
    title: formatCityName(citySlug),
    description: `Digital marketing services in ${formatCityName(citySlug)}`,
    category: 'city' as const
  }))
}

/**
 * Get contextual internal links based on page context
 */
export function getContextualLinks(context: LinkingContext, limit: number = 6): InternalLink[] {
  const links: InternalLink[] = []
  
  // Add related services
  if (context.service) {
    links.push(...getRelatedServices(context.service, 3))
  }
  
  // Add solution pages (always relevant)
  links.push(...SOLUTION_PAGES.slice(0, 2))
  
  // Add resource pages
  links.push(...RESOURCE_PAGES.slice(0, 1))
  
  // Add nearby cities if on city page
  if (context.city && context.pageType === 'city') {
    links.push(...getNearbyCities(context.city, 2))
  }
  
  // Add blog posts if relevant
  if (context.keywords && context.keywords.length > 0) {
    links.push(...getRelatedBlogPosts(context.keywords, 1))
  }
  
  return links.slice(0, limit)
}

/**
 * Generate anchor text variations for a link
 */
export function generateAnchorTextVariations(service: string, city?: string): string[] {
  const serviceNames: Record<string, string[]> = {
    'seo': [
      'SEO services',
      'search engine optimization',
      'SEO experts',
      'professional SEO',
      'SEO optimization'
    ],
    'local-seo': [
      'local SEO',
      'local search optimization',
      'local SEO services',
      'local search marketing',
      'geo-targeted SEO'
    ],
    'web-development': [
      'web development',
      'custom web development',
      'professional web development',
      'web development services',
      'website development'
    ],
    'website-design': [
      'website design',
      'web design services',
      'professional web design',
      'custom website design',
      'web design'
    ],
  }
  
  const baseVariations = serviceNames[service] || [service.replace(/-/g, ' ')]
  
  if (city) {
    const cityName = formatCityName(city)
    return [
      ...baseVariations.map(v => `${v} in ${cityName}`),
      ...baseVariations.map(v => `${cityName} ${v}`),
      ...baseVariations
    ]
  }
  
  return baseVariations
}

/**
 * Format city name from slug
 */
function formatCityName(city: string): string {
  return city
    .split('-')
    .map(word => {
      if (word.length === 2 && word === word.toUpperCase()) {
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

/**
 * Get strategic internal links for footer/sidebar
 */
export function getStrategicFooterLinks(): {
  services: InternalLink[]
  solutions: InternalLink[]
  resources: InternalLink[]
} {
  return {
    services: CORE_SERVICES.slice(0, 8),
    solutions: SOLUTION_PAGES,
    resources: RESOURCE_PAGES
  }
}

/**
 * Generate breadcrumbs for a page
 */
export function generateBreadcrumbs(path: string): Array<{ name: string; url: string }> {
  const segments = path.split('/').filter(Boolean)
  const breadcrumbs: Array<{ name: string; url: string }> = [
    { name: 'Home', url: '/' }
  ]
  
  let currentPath = ''
  
  for (const segment of segments) {
    currentPath += `/${segment}`
    
    // Format segment name
    let name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    // Special cases
    if (segment === 'seo') name = 'SEO'
    if (segment === 'ui-ux-design') name = 'UI/UX Design'
    
    breadcrumbs.push({
      name,
      url: currentPath
    })
  }
  
  return breadcrumbs
}

/**
 * Calculate link distribution for a page
 */
export function calculateLinkDistribution(pageType: string): {
  internal: number
  external: number
  recommended: string
} {
  const recommendations: Record<string, { internal: number; external: number; recommended: string }> = {
    'service': {
      internal: 8,
      external: 2,
      recommended: '8-12 internal links to related services, solutions, and resources. 1-2 external authoritative links.'
    },
    'blog': {
      internal: 6,
      external: 4,
      recommended: '6-10 internal links to relevant content. 3-5 external authoritative citations.'
    },
    'city': {
      internal: 10,
      external: 1,
      recommended: '10-15 internal links to services and nearby cities. 1-2 external local resources.'
    },
    'home': {
      internal: 12,
      external: 0,
      recommended: '12-20 internal links to key services and pages. Focus on conversion paths.'
    }
  }
  
  return recommendations[pageType] || recommendations['service']
}

