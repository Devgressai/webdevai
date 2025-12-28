/**
 * Meta Description Optimizer
 * 
 * Generates SEO-optimized meta descriptions following 2025 best practices
 * - Optimal length: 150-160 characters
 * - Includes primary keywords
 * - Includes location for local SEO
 * - Clear call-to-action
 * - Compelling and click-worthy
 */

interface MetaDescriptionOptions {
  service?: string
  city?: string
  cityState?: string
  industry?: string
  benefit?: string
  uniqueValue?: string
}

// Meta description templates optimized for different page types
const META_TEMPLATES = {
  // Service pages
  service: [
    "{service} in {city}. {benefit}. Free consultation. {uniqueValue}. Call +1-530-553-8883 today!",
    "Professional {service} services in {city}. {benefit}. {uniqueValue}. Get a free quote!",
    "{city} {service} experts. {benefit}. {uniqueValue}. Contact us for a free strategy session!",
    "Get expert {service} in {city}. {benefit}. Trusted by 100+ businesses. {uniqueValue}.",
  ],
  
  // City-specific pages
  city: [
    "{service} services in {city}. {benefit}. Local experts with proven results. Free consultation available!",
    "Looking for {service} in {city}? {benefit}. {uniqueValue}. Call +1-530-553-8883!",
    "{city} {service} agency. {benefit}. Trusted by local businesses. Get your free quote today!",
  ],
  
  // City-service combination pages
  cityService: [
    "{service} in {city} | {benefit}. Local experts delivering results. Free consultation. Call now!",
    "Professional {service} services in {city}. {benefit}. {uniqueValue}. Get started today!",
    "{city}'s trusted {service} experts. {benefit}. Free strategy session. Call +1-530-553-8883!",
  ],
  
  // Industry-specific pages
  industry: [
    "{service} for {industry} in {city}. {benefit}. Industry-specific strategies. Free consultation!",
    "Specialized {service} for {industry} businesses in {city}. {benefit}. Get a free quote!",
  ],
  
  // Blog posts
  blog: [
    "{title}. {benefit}. Learn strategies that work. Expert insights from Web Vello.",
    "{title}. {benefit}. Actionable tips and proven strategies. Read more!",
  ],
  
  // Homepage
  homepage: [
    "Digital marketing agency specializing in AI SEO, web development & local SEO. 300%+ traffic growth. Free consultation. Call +1-530-553-8883!",
  ]
}

// Benefits for different services
const SERVICE_BENEFITS: Record<string, string[]> = {
  'web-design': [
    'Mobile-responsive designs that convert',
    'Fast-loading, SEO-friendly websites',
    'Custom designs for your brand',
    'Increase conversions by 66%',
  ],
  'website-design': [
    'Professional website design that converts',
    'Custom, mobile-first designs',
    'SEO-optimized from day one',
    'Beautiful designs that drive results',
  ],
  'web-development': [
    'Custom web development solutions',
    'Fast, secure, scalable websites',
    'Modern tech stack for performance',
    'Built for growth and conversions',
  ],
  'seo': [
    'Rank #1 on Google in 6 months',
    '300%+ organic traffic growth',
    'AI-powered SEO strategies',
    'Dominate search results',
  ],
  'local-seo': [
    'Dominate local search rankings',
    'Drive foot traffic to your business',
    'Rank #1 in Google Maps',
    'Get found by local customers',
  ],
  'ai-seo': [
    '300%+ traffic growth with AI',
    'AI-powered keyword research',
    'Outrank your competitors with AI',
    'Revolutionary SEO technology',
  ],
  'digital-marketing': [
    'Full-service digital marketing',
    'Data-driven marketing strategies',
    'Increase ROI by 250%+',
    'Grow your online presence',
  ],
  'ui-ux-design': [
    'User-centered design that converts',
    'Beautiful, intuitive interfaces',
    'Increase engagement by 45%',
    'Design that drives results',
  ],
  'ecommerce-design': [
    'E-commerce sites that sell',
    'Optimized for conversions',
    'Increase sales by 40%+',
    'Mobile-first e-commerce design',
  ],
  'wordpress-development': [
    'Custom WordPress solutions',
    'Fast, secure WordPress sites',
    'Expert WordPress development',
    'Scalable WordPress platforms',
  ],
}

// Unique value propositions
const UNIQUE_VALUES = [
  'Trusted by 100+ businesses',
  '4.9/5 star rating',
  '90-day money-back guarantee',
  'Results in 30 days or less',
  'Free strategy session',
  'No long-term contracts',
  'Proven track record',
  'Expert team with 10+ years',
]

/**
 * Generate optimized meta description
 */
export function generateMetaDescription(options: MetaDescriptionOptions): string {
  const {
    service = '',
    city = '',
    cityState = '',
    industry = '',
    benefit = '',
    uniqueValue = ''
  } = options

  // Get service-specific benefit
  const serviceBenefit = benefit || getRandomBenefit(service)
  
  // Get unique value proposition
  const serviceUniqueValue = uniqueValue || getRandomUniqueValue()
  
  // Format city name
  const formattedCity = formatCityName(city)
  const formattedCityState = cityState || formattedCity
  
  // Format service name
  const formattedService = formatServiceName(service)
  
  // Determine page type and get template
  let template: string
  
  if (industry && city && service) {
    template = META_TEMPLATES.industry[Math.floor(Math.random() * META_TEMPLATES.industry.length)]
  } else if (city && service) {
    template = META_TEMPLATES.cityService[Math.floor(Math.random() * META_TEMPLATES.cityService.length)]
  } else if (city) {
    template = META_TEMPLATES.city[Math.floor(Math.random() * META_TEMPLATES.city.length)]
  } else if (service) {
    template = META_TEMPLATES.service[Math.floor(Math.random() * META_TEMPLATES.service.length)]
  } else {
    template = META_TEMPLATES.homepage[0]
  }
  
  // Replace placeholders
  let description = template
    .replace(/{service}/g, formattedService)
    .replace(/{city}/g, formattedCityState)
    .replace(/{industry}/g, formatIndustryName(industry))
    .replace(/{benefit}/g, serviceBenefit)
    .replace(/{uniqueValue}/g, serviceUniqueValue)
  
  // Ensure optimal length (150-160 characters)
  if (description.length > 160) {
    description = truncateToOptimalLength(description)
  }
  
  return description
}

/**
 * Get random benefit for a service
 */
function getRandomBenefit(service: string): string {
  const benefits = SERVICE_BENEFITS[service] || SERVICE_BENEFITS['seo']
  return benefits[Math.floor(Math.random() * benefits.length)]
}

/**
 * Get random unique value proposition
 */
function getRandomUniqueValue(): string {
  return UNIQUE_VALUES[Math.floor(Math.random() * UNIQUE_VALUES.length)]
}

/**
 * Format city name from slug
 */
function formatCityName(city: string): string {
  if (!city) return ''
  
  return city
    .split('-')
    .map(word => {
      // Handle state abbreviations
      if (word.length === 2 && word === word.toUpperCase()) {
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

/**
 * Format service name from slug
 */
function formatServiceName(service: string): string {
  if (!service) return ''
  
  const serviceNames: Record<string, string> = {
    'web-design': 'Web Design',
    'website-design': 'Website Design',
    'web-development': 'Web Development',
    'seo': 'SEO',
    'local-seo': 'Local SEO',
    'ai-seo': 'AI SEO',
    'digital-marketing': 'Digital Marketing',
    'ui-ux-design': 'UI/UX Design',
    'ecommerce-design': 'E-commerce Design',
    'wordpress-development': 'WordPress Development',
    'ai-consulting': 'AI Consulting',
    'ai-digital-marketing': 'AI Digital Marketing',
    'chatgpt-optimization': 'ChatGPT Optimization',
    'seo-consulting': 'SEO Consulting',
    'web-application-development': 'Web Application Development',
  }
  
  return serviceNames[service] || service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Format industry name
 */
function formatIndustryName(industry: string): string {
  if (!industry) return ''
  
  return industry
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Truncate description to optimal length while preserving meaning
 */
function truncateToOptimalLength(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) return description
  
  // Try to truncate at sentence boundary
  const sentences = description.split('. ')
  let result = ''
  
  for (const sentence of sentences) {
    const withSentence = result ? `${result}. ${sentence}` : sentence
    if (withSentence.length <= maxLength - 3) {
      result = withSentence
    } else {
      break
    }
  }
  
  // If we have a result that's reasonable length, use it
  if (result.length >= maxLength * 0.8) {
    return result.endsWith('.') ? result : `${result}.`
  }
  
  // Otherwise, truncate at word boundary
  const words = description.split(' ')
  result = ''
  
  for (const word of words) {
    const withWord = result ? `${result} ${word}` : word
    if (withWord.length <= maxLength - 3) {
      result = withWord
    } else {
      break
    }
  }
  
  return `${result}...`
}

/**
 * Generate title tag (optimal: 50-60 characters)
 */
export function generateTitleTag(options: {
  service?: string
  city?: string
  cityState?: string
  modifier?: string
  year?: number
}): string {
  const {
    service = '',
    city = '',
    cityState = '',
    modifier = 'Professional',
    year = new Date().getFullYear()
  } = options
  
  const formattedService = formatServiceName(service)
  const formattedCity = cityState || formatCityName(city)
  
  if (city && service) {
    return `${formattedService} ${formattedCity} | ${modifier} Services | Web Vello`
  } else if (service) {
    return `${modifier} ${formattedService} Services ${year} | Web Vello`
  } else if (city) {
    return `Digital Marketing ${formattedCity} | SEO & Web Design | Web Vello`
  }
  
  return 'Web Vello - Digital Marketing Agency | AI SEO, Web Development'
}

/**
 * Validate meta description
 */
export function validateMetaDescription(description: string): {
  isValid: boolean
  length: number
  warnings: string[]
} {
  const warnings: string[] = []
  
  if (description.length < 120) {
    warnings.push('Description is too short (< 120 characters)')
  }
  
  if (description.length > 160) {
    warnings.push('Description is too long (> 160 characters)')
  }
  
  if (!description.includes('Web Vello') && !description.includes('webvello')) {
    warnings.push('Brand name not included')
  }
  
  if (!description.match(/\d{3}-\d{3}-\d{4}/) && !description.toLowerCase().includes('call') && !description.toLowerCase().includes('contact')) {
    warnings.push('No clear call-to-action')
  }
  
  return {
    isValid: warnings.length === 0,
    length: description.length,
    warnings
  }
}

