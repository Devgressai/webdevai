// Advanced Internal Linking System for Enhanced SEO
export interface LinkContext {
  currentPage: string
  pageType: 'service' | 'blog' | 'location' | 'industry' | 'home' | 'about' | 'contact'
  category?: string
  location?: string
  industry?: string
}

export interface InternalLink {
  title: string
  url: string
  description: string
  relevance: number // 0-1 score
  linkType: 'related' | 'breadcrumb' | 'contextual' | 'cta' | 'navigation'
  priority: 'high' | 'medium' | 'low'
  anchorText: string
}

export interface LinkCluster {
  topic: string
  pages: InternalLink[]
  hubPage?: string
}

// Service page internal linking
export function getServicePageLinks(context: LinkContext): InternalLink[] {
  const baseLinks: InternalLink[] = [
    {
      title: 'SEO Services',
      url: '/services/seo',
      description: 'Professional SEO services to boost your search rankings',
      relevance: 0.9,
      linkType: 'related',
      priority: 'high',
      anchorText: 'SEO services'
    },
    {
      title: 'Website Design',
      url: '/services/website-design',
      description: 'Custom website design and development services',
      relevance: 0.8,
      linkType: 'related',
      priority: 'high',
      anchorText: 'website design'
    },
    {
      title: 'Digital Marketing',
      url: '/services/digital-marketing',
      description: 'Comprehensive digital marketing solutions',
      relevance: 0.8,
      linkType: 'related',
      priority: 'high',
      anchorText: 'digital marketing'
    },
    {
      title: 'Local SEO',
      url: '/services/local-seo',
      description: 'Local search optimization for businesses',
      relevance: 0.7,
      linkType: 'related',
      priority: 'medium',
      anchorText: 'local SEO'
    },
    {
      title: 'Technical SEO',
      url: '/services/technical-seo',
      description: 'Technical SEO optimization and fixes',
      relevance: 0.7,
      linkType: 'related',
      priority: 'medium',
      anchorText: 'technical SEO'
    }
  ]

  // Add location-specific links if context has location
  if (context.location) {
    baseLinks.push({
      title: `SEO Services in ${context.location}`,
      url: `/services/seo-${context.location.toLowerCase().replace(/\s+/g, '-')}`,
      description: `Professional SEO services in ${context.location}`,
      relevance: 0.9,
      linkType: 'contextual',
      priority: 'high',
      anchorText: `SEO services in ${context.location}`
    })
  }

  // Add industry-specific links if context has industry
  if (context.industry) {
    baseLinks.push({
      title: `${context.industry} SEO Services`,
      url: `/services/${context.industry.toLowerCase().replace(/\s+/g, '-')}-seo`,
      description: `Specialized SEO services for ${context.industry} businesses`,
      relevance: 0.9,
      linkType: 'contextual',
      priority: 'high',
      anchorText: `${context.industry} SEO services`
    })
  }

  return baseLinks.sort((a, b) => b.relevance - a.relevance)
}

// Blog post internal linking
export function getBlogPostLinks(context: LinkContext): InternalLink[] {
  const baseLinks: InternalLink[] = [
    {
      title: 'SEO Blog',
      url: '/blog',
      description: 'Latest SEO tips, strategies, and industry insights',
      relevance: 0.9,
      linkType: 'navigation',
      priority: 'high',
      anchorText: 'SEO blog'
    },
    {
      title: 'SEO Services',
      url: '/services/seo',
      description: 'Professional SEO services to boost your rankings',
      relevance: 0.8,
      linkType: 'cta',
      priority: 'high',
      anchorText: 'SEO services'
    },
    {
      title: 'Free SEO Audit',
      url: '/seo-audit',
      description: 'Get a free comprehensive SEO audit of your website',
      relevance: 0.8,
      linkType: 'cta',
      priority: 'high',
      anchorText: 'free SEO audit'
    },
    {
      title: 'Website Speed Test',
      url: '/website-speed-test',
      description: 'Test your website speed and get optimization tips',
      relevance: 0.7,
      linkType: 'related',
      priority: 'medium',
      anchorText: 'website speed test'
    },
    {
      title: 'SEO Checklist',
      url: '/seo-checklist',
      description: 'Complete SEO checklist to optimize your website',
      relevance: 0.7,
      linkType: 'related',
      priority: 'medium',
      anchorText: 'SEO checklist'
    }
  ]

  // Add related blog posts based on category
  if (context.category) {
    const relatedPosts = getRelatedBlogPosts(context.category)
    baseLinks.push(...relatedPosts)
  }

  return baseLinks.sort((a, b) => b.relevance - a.relevance)
}

// Location page internal linking
export function getLocationPageLinks(context: LinkContext): InternalLink[] {
  const baseLinks: InternalLink[] = [
    {
      title: 'SEO Services',
      url: '/services/seo',
      description: 'Professional SEO services nationwide',
      relevance: 0.9,
      linkType: 'related',
      priority: 'high',
      anchorText: 'SEO services'
    },
    {
      title: 'Website Design',
      url: '/services/website-design',
      description: 'Custom website design and development',
      relevance: 0.8,
      linkType: 'related',
      priority: 'high',
      anchorText: 'website design'
    },
    {
      title: 'Local SEO Services',
      url: '/services/local-seo',
      description: 'Local search optimization for businesses',
      relevance: 0.9,
      linkType: 'contextual',
      priority: 'high',
      anchorText: 'local SEO services'
    },
    {
      title: 'Digital Marketing',
      url: '/services/digital-marketing',
      description: 'Comprehensive digital marketing solutions',
      relevance: 0.8,
      linkType: 'related',
      priority: 'medium',
      anchorText: 'digital marketing'
    }
  ]

  // Add nearby locations
  if (context.location) {
    const nearbyLocations = getNearbyLocations(context.location)
    baseLinks.push(...nearbyLocations)
  }

  return baseLinks.sort((a, b) => b.relevance - a.relevance)
}

// Industry page internal linking
export function getIndustryPageLinks(context: LinkContext): InternalLink[] {
  const baseLinks: InternalLink[] = [
    {
      title: 'SEO Services',
      url: '/services/seo',
      description: 'Professional SEO services for all industries',
      relevance: 0.9,
      linkType: 'related',
      priority: 'high',
      anchorText: 'SEO services'
    },
    {
      title: 'Website Design',
      url: '/services/website-design',
      description: 'Industry-specific website design solutions',
      relevance: 0.8,
      linkType: 'related',
      priority: 'high',
      anchorText: 'website design'
    },
    {
      title: 'Digital Marketing',
      url: '/services/digital-marketing',
      description: 'Targeted digital marketing strategies',
      relevance: 0.8,
      linkType: 'related',
      priority: 'high',
      anchorText: 'digital marketing'
    }
  ]

  // Add industry-specific service pages
  if (context.industry) {
    const industryServices = getIndustrySpecificServices(context.industry)
    baseLinks.push(...industryServices)
  }

  return baseLinks.sort((a, b) => b.relevance - a.relevance)
}

// Generate contextual links based on content
export function generateContextualLinks(content: string, context: LinkContext): InternalLink[] {
  const contextualLinks: InternalLink[] = []
  
  // Keywords to look for and their corresponding links
  const keywordMap: { [key: string]: InternalLink } = {
    'seo': {
      title: 'SEO Services',
      url: '/services/seo',
      description: 'Professional SEO services',
      relevance: 0.9,
      linkType: 'contextual',
      priority: 'high',
      anchorText: 'SEO services'
    },
    'website design': {
      title: 'Website Design Services',
      url: '/services/website-design',
      description: 'Custom website design',
      relevance: 0.9,
      linkType: 'contextual',
      priority: 'high',
      anchorText: 'website design services'
    },
    'digital marketing': {
      title: 'Digital Marketing',
      url: '/services/digital-marketing',
      description: 'Digital marketing solutions',
      relevance: 0.8,
      linkType: 'contextual',
      priority: 'high',
      anchorText: 'digital marketing'
    },
    'local seo': {
      title: 'Local SEO Services',
      url: '/services/local-seo',
      description: 'Local search optimization',
      relevance: 0.8,
      linkType: 'contextual',
      priority: 'high',
      anchorText: 'local SEO services'
    },
    'technical seo': {
      title: 'Technical SEO',
      url: '/services/technical-seo',
      description: 'Technical SEO optimization',
      relevance: 0.8,
      linkType: 'contextual',
      priority: 'high',
      anchorText: 'technical SEO'
    },
    'content marketing': {
      title: 'Content Marketing',
      url: '/services/content-marketing',
      description: 'Content marketing strategies',
      relevance: 0.7,
      linkType: 'contextual',
      priority: 'medium',
      anchorText: 'content marketing'
    },
    'social media': {
      title: 'Social Media Marketing',
      url: '/services/social-media-marketing',
      description: 'Social media marketing services',
      relevance: 0.7,
      linkType: 'contextual',
      priority: 'medium',
      anchorText: 'social media marketing'
    }
  }

  // Find keywords in content and add corresponding links
  const contentLower = content.toLowerCase()
  Object.entries(keywordMap).forEach(([keyword, link]) => {
    if (contentLower.includes(keyword)) {
      contextualLinks.push(link)
    }
  })

  return contextualLinks
}

// Generate breadcrumb links
export function generateBreadcrumbs(currentPath: string): InternalLink[] {
  const pathSegments = currentPath.split('/').filter(segment => segment)
  const breadcrumbs: InternalLink[] = []

  // Always start with home
  breadcrumbs.push({
    title: 'Home',
    url: '/',
    description: 'Web Vello Homepage',
    relevance: 1.0,
    linkType: 'breadcrumb',
    priority: 'high',
    anchorText: 'Home'
  })

  // Build breadcrumbs from path segments
  let currentUrl = ''
  pathSegments.forEach((segment, index) => {
    currentUrl += `/${segment}`
    const title = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    breadcrumbs.push({
      title,
      url: currentUrl,
      description: `${title} page`,
      relevance: 0.8,
      linkType: 'breadcrumb',
      priority: 'medium',
      anchorText: title
    })
  })

  return breadcrumbs
}

// Generate CTA links
export function generateCTALinks(context: LinkContext): InternalLink[] {
  const ctaLinks: InternalLink[] = [
    {
      title: 'Get Free SEO Audit',
      url: '/seo-audit',
      description: 'Get a free comprehensive SEO audit of your website',
      relevance: 0.9,
      linkType: 'cta',
      priority: 'high',
      anchorText: 'Get Free SEO Audit'
    },
    {
      title: 'Contact Us',
      url: '/contact',
      description: 'Get in touch with our SEO experts',
      relevance: 0.8,
      linkType: 'cta',
      priority: 'high',
      anchorText: 'Contact Us'
    },
    {
      title: 'View Our Services',
      url: '/services',
      description: 'Explore our comprehensive SEO services',
      relevance: 0.8,
      linkType: 'cta',
      priority: 'high',
      anchorText: 'View Our Services'
    }
  ]

  return ctaLinks
}

// Helper functions
function getRelatedBlogPosts(category: string): InternalLink[] {
  // This would typically come from a CMS or database
  const blogPosts: { [key: string]: InternalLink[] } = {
    'seo': [
      {
        title: 'SEO Best Practices 2024',
        url: '/blog/seo-best-practices-2024',
        description: 'Latest SEO best practices for 2024',
        relevance: 0.8,
        linkType: 'related',
        priority: 'medium',
        anchorText: 'SEO best practices'
      }
    ],
    'technical-seo': [
      {
        title: 'Technical SEO Checklist',
        url: '/blog/technical-seo-checklist',
        description: 'Complete technical SEO checklist',
        relevance: 0.8,
        linkType: 'related',
        priority: 'medium',
        anchorText: 'technical SEO checklist'
      }
    ]
  }

  return blogPosts[category] || []
}

function getNearbyLocations(location: string): InternalLink[] {
  // This would typically come from a database of locations
  const nearbyMap: { [key: string]: InternalLink[] } = {
    'new-york-ny': [
      {
        title: 'SEO Services in Brooklyn',
        url: '/seo-services-brooklyn-ny',
        description: 'Professional SEO services in Brooklyn, NY',
        relevance: 0.7,
        linkType: 'related',
        priority: 'medium',
        anchorText: 'SEO services in Brooklyn'
      }
    ]
  }

  return nearbyMap[location] || []
}

function getIndustrySpecificServices(industry: string): InternalLink[] {
  const industryServices: { [key: string]: InternalLink[] } = {
    'healthcare': [
      {
        title: 'Healthcare SEO Services',
        url: '/services/healthcare-seo',
        description: 'Specialized SEO services for healthcare businesses',
        relevance: 0.9,
        linkType: 'contextual',
        priority: 'high',
        anchorText: 'healthcare SEO services'
      }
    ],
    'ecommerce': [
      {
        title: 'E-commerce SEO Services',
        url: '/services/ecommerce-seo',
        description: 'SEO services for e-commerce businesses',
        relevance: 0.9,
        linkType: 'contextual',
        priority: 'high',
        anchorText: 'e-commerce SEO services'
      }
    ]
  }

  return industryServices[industry] || []
}

// Generate link clusters for topic authority
export function generateLinkClusters(topic: string): LinkCluster[] {
  const clusters: LinkCluster[] = [
    {
      topic: 'SEO',
      pages: [
        {
          title: 'SEO Services',
          url: '/services/seo',
          description: 'Professional SEO services',
          relevance: 0.9,
          linkType: 'related',
          priority: 'high',
          anchorText: 'SEO services'
        },
        {
          title: 'Local SEO',
          url: '/services/local-seo',
          description: 'Local search optimization',
          relevance: 0.8,
          linkType: 'related',
          priority: 'high',
          anchorText: 'local SEO'
        },
        {
          title: 'Technical SEO',
          url: '/services/technical-seo',
          description: 'Technical SEO optimization',
          relevance: 0.8,
          linkType: 'related',
          priority: 'high',
          anchorText: 'technical SEO'
        }
      ],
      hubPage: '/services/seo'
    }
  ]

  return clusters
}

// Calculate link juice distribution
export function calculateLinkJuice(links: InternalLink[]): { [url: string]: number } {
  const linkJuice: { [url: string]: number } = {}
  
  links.forEach(link => {
    const baseJuice = link.relevance * (link.priority === 'high' ? 1.0 : link.priority === 'medium' ? 0.7 : 0.4)
    linkJuice[link.url] = (linkJuice[link.url] || 0) + baseJuice
  })

  return linkJuice
}

// Optimize internal linking for SEO
export function optimizeInternalLinking(
  content: string, 
  context: LinkContext, 
  maxLinks: number = 10
): InternalLink[] {
  const allLinks: InternalLink[] = []
  
  // Get different types of links
  allLinks.push(...getServicePageLinks(context))
  allLinks.push(...getBlogPostLinks(context))
  allLinks.push(...getLocationPageLinks(context))
  allLinks.push(...getIndustryPageLinks(context))
  allLinks.push(...generateContextualLinks(content, context))
  allLinks.push(...generateCTALinks(context))

  // Remove duplicates and sort by relevance
  const uniqueLinks = allLinks.filter((link, index, self) => 
    index === self.findIndex(l => l.url === link.url)
  )

  return uniqueLinks
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, maxLinks)
}
