/**
 * Service Page Canonical URL Helper
 * 
 * Maps service page URLs to their canonical targets:
 * - /services/geo-{city} → /{city-slug} (if city exists)
 * - /services/{city}-{service} → /{city}/{service} (if both exist)
 * 
 * Prevents circular canonicals and only returns canonicals when target exists.
 */

import { cities, getCity } from '../cities'
import { serviceData } from '../data/service-data'
import { cityData } from '../data/city-data'

const BASE_URL = 'https://www.webvello.com'

/**
 * Industry geo pages that should NOT map to cities
 * These are industry-specific pages, not city pages
 */
const INDUSTRY_GEO_PAGES = new Set([
  'auto-repair',
  'ecommerce',
  'electricians',
  'financial-services',
  'healthcare',
  'home-services',
  'hvac',
  'landscaping',
  'legal',
  'plumbing',
  'professional-services',
  'real-estate',
  'restaurants',
  'roofing',
  'saas-technology',
  'services'
])

/**
 * Check if a geo page name is an industry page (not a city)
 */
function isIndustryGeoPage(geoCityName: string): boolean {
  return INDUSTRY_GEO_PAGES.has(geoCityName.toLowerCase().trim())
}

/**
 * Normalize city name from geo-* slug to city-slug format
 * Examples:
 * - "new-york" → "new-york-ny"
 * - "los-angeles" → "los-angeles-ca"
 * - "kansas-city" → "kansas-city-mo"
 * - "palo-alto" → "palo-alto-ca" (if exists)
 * - "oklahoma-city" → "oklahoma-city-ok"
 */
function normalizeGeoCityToCitySlug(geoCityName: string): string | null {
  const normalized = geoCityName.toLowerCase().trim()
  
  // Skip industry pages
  if (isIndustryGeoPage(normalized)) {
    return null
  }
  
  // Try exact match first: city name (e.g., "new-york" matches "New York")
  for (const citySlug of Object.keys(cities)) {
    const cityName = cities[citySlug].name.toLowerCase().replace(/\s+/g, '-')
    if (cityName === normalized) {
      return citySlug
    }
  }
  
  // Try matching city slug without state (e.g., "new-york" matches "new-york-ny")
  for (const citySlug of Object.keys(cities)) {
    const cityNamePart = citySlug.split('-').slice(0, -1).join('-') // Remove state part
    if (cityNamePart === normalized) {
      return citySlug
    }
  }
  
  // Try fuzzy matching for multi-word cities (e.g., "kansas-city" → "kansas-city-mo")
  // This handles cases where the geo slug matches the city slug prefix
  for (const citySlug of Object.keys(cities)) {
    const slugParts = citySlug.split('-')
    // Match if all parts except last (state) match
    if (slugParts.slice(0, -1).join('-') === normalized) {
      return citySlug
    }
  }
  
  return null
}

/**
 * Extract city and service from service page slug
 * Examples:
 * - "seo-baltimore" → { city: "baltimore-md", service: "seo" }
 * - "web-design-albuquerque" → { city: "albuquerque-nm", service: "website-design" }
 * - "seo-doctors-kansas-city" → { city: "kansas-city-mo", service: "seo" }
 * - "medical-website-design-austin" → { city: "austin-tx", service: "website-design" }
 */
function extractCityAndService(serviceSlug: string): { city: string | null; service: string | null } {
  const slug = serviceSlug.toLowerCase()
  
  // Service prefix mappings: prefix → actual service slug
  // Order matters: longer prefixes should be checked first
  const servicePrefixMap: Record<string, string> = {
    // Longest prefixes first
    'dairy-industry-website-design': 'website-design',
    'auto-repair-website-design': 'website-design',
    'biotech-website-design': 'website-design',
    'medical-website-design': 'website-design',
    'surgeon-web-design': 'website-design',
    'freight-forwarder-web-design': 'website-design',
    'educational-website-development': 'web-development',
    'web-application-development': 'web-development',
    'wordpress-development': 'wordpress-development',
    'website-redesign': 'website-redesign',
    'website-design': 'website-design',
    'portland-web-marketing': 'digital-marketing',
    'jacksonville-ai-seo': 'ai-seo',
    'real-estate-seo': 'seo',
    'energy-seo': 'seo',
    'seo-doctors': 'seo',
    'seo-company': 'seo',
    'seo-consulting': 'seo',
    'seo-services': 'seo',
    'seo-geo': 'generative-engine-optimization',
    // Medium prefixes
    'dairy-industry-website': 'website-design',
    'auto-repair-website': 'website-design',
    'biotech-website': 'website-design',
    'medical-website': 'website-design',
    'surgeon-web': 'website-design',
    'freight-forwarder-web': 'website-design',
    'retail-development': 'web-development',
    'web-application': 'web-development',
    'wordpress-developers': 'wordpress-development',
    'portland-web': 'digital-marketing',
    'jacksonville-ai': 'ai-seo',
    // Short prefixes
    'web-development': 'web-development',
    'web-design': 'website-design',
    'wordpress': 'wordpress-development',
    'seo': 'seo'
  }
  
  // Try to find service prefix at the start (longest match first)
  const sortedPrefixes = Object.keys(servicePrefixMap).sort((a, b) => b.length - a.length)
  
  for (const prefix of sortedPrefixes) {
    if (slug.startsWith(prefix + '-')) {
      const cityPart = slug.slice(prefix.length + 1) // Remove prefix and dash
      const citySlug = normalizeGeoCityToCitySlug(cityPart)
      if (citySlug && cityData[citySlug]) {
        const mappedService = servicePrefixMap[prefix]
        if (mappedService && serviceData[mappedService]) {
          return { city: citySlug, service: mappedService }
        }
      }
    }
  }
  
  // Try reverse: city at start (e.g., "jacksonville-ai-seo", "website-design-louisville")
  // First try city slug format (e.g., "oklahoma-city" matches "oklahoma-city-ok")
  for (const citySlug of Object.keys(cityData)) {
    const cityNamePart = citySlug.split('-').slice(0, -1).join('-') // Remove state
    if (slug.startsWith(cityNamePart + '-')) {
      const servicePart = slug.slice(cityNamePart.length + 1)
      // Try direct match first
      if (serviceData[servicePart]) {
        return { city: citySlug, service: servicePart }
      }
      // Try prefix mapping
      for (const [prefix, mappedService] of Object.entries(servicePrefixMap)) {
        if (servicePart === prefix || servicePart.startsWith(prefix + '-')) {
          if (serviceData[mappedService]) {
            return { city: citySlug, service: mappedService }
          }
        }
      }
    }
  }
  
  // Also try city name format (e.g., "louisville" matches "Louisville")
  for (const citySlug of Object.keys(cityData)) {
    const cityName = cities[citySlug].name.toLowerCase().replace(/\s+/g, '-')
    if (slug.startsWith(cityName + '-')) {
      const servicePart = slug.slice(cityName.length + 1)
      // Try direct match first
      if (serviceData[servicePart]) {
        return { city: citySlug, service: servicePart }
      }
      // Try prefix mapping
      for (const [prefix, mappedService] of Object.entries(servicePrefixMap)) {
        if (servicePart === prefix || servicePart.startsWith(prefix + '-')) {
          if (serviceData[mappedService]) {
            return { city: citySlug, service: mappedService }
          }
        }
      }
    }
  }
  
  return { city: null, service: null }
}

/**
 * Get canonical URL for a service page
 * 
 * @param pathname - Full pathname (e.g., "/services/geo-new-york" or "/services/seo-baltimore")
 * @returns Canonical URL string, or null if no canonical should be set
 */
export function getServicePageCanonical(pathname: string): string | null {
  // Remove leading/trailing slashes and normalize
  const normalized = pathname.replace(/^\/+|\/+$/g, '').toLowerCase()
  
  if (!normalized.startsWith('services/')) {
    return null // Not a service page
  }
  
  const serviceSlug = normalized.replace('services/', '')
  
  // Pattern 1: /services/geo-{city} → /{city-slug}
  if (serviceSlug.startsWith('geo-')) {
    const geoCityName = serviceSlug.replace('geo-', '')
    
    // Skip industry pages (they shouldn't canonicalize to cities)
    if (isIndustryGeoPage(geoCityName)) {
      return null
    }
    
    const citySlug = normalizeGeoCityToCitySlug(geoCityName)
    
    if (citySlug && cityData[citySlug]) {
      const canonical = `${BASE_URL}/${citySlug}`
      
      // Prevent circular canonical: if city page would canonicalize back, return null
      // (City pages canonicalize to themselves, so this is safe)
      return canonical
    }
    
    return null // City not found, no canonical
  }
  
  // Pattern 2: /services/{city}-{service} → /{city}/{service}
  const { city: citySlug, service: mappedServiceSlug } = extractCityAndService(serviceSlug)
  
  if (citySlug && mappedServiceSlug && cityData[citySlug] && serviceData[mappedServiceSlug]) {
    const canonical = `${BASE_URL}/${citySlug}/${mappedServiceSlug}`
    
    // Prevent circular canonical: check if target would canonicalize back
    // Programmatic city-service pages canonicalize to themselves, so this is safe
    return canonical
  }
  
  return null // No match found, no canonical
}

/**
 * Check if a canonical URL would create a circular reference
 * (Currently unused, but kept for future validation)
 */
export function isCircularCanonical(sourcePath: string, canonicalPath: string): boolean {
  // Normalize paths
  const source = sourcePath.replace(/^\/+|\/+$/g, '').toLowerCase()
  const canonical = canonicalPath.replace(/^\/+|\/+$/g, '').toLowerCase()
  
  // If canonical points back to source, it's circular
  if (source === canonical) {
    return true
  }
  
  // Check if canonical would canonicalize back to source
  const canonicalCanonical = getServicePageCanonical(`/${canonical}`)
  if (canonicalCanonical && canonicalCanonical.replace(/^https?:\/\/[^/]+/, '').replace(/^\/+|\/+$/g, '').toLowerCase() === source) {
    return true
  }
  
  return false
}
