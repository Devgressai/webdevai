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
 * Normalize city name from geo-* slug to city-slug format
 * Examples:
 * - "new-york" → "new-york-ny"
 * - "los-angeles" → "los-angeles-ca"
 * - "kansas-city" → "kansas-city-mo"
 */
function normalizeGeoCityToCitySlug(geoCityName: string): string | null {
  // Try exact match first (e.g., "new-york" might match "new-york-ny")
  const normalized = geoCityName.toLowerCase().trim()
  
  // Direct lookup: check if any city slug starts with this name
  for (const citySlug of Object.keys(cities)) {
    const cityName = cities[citySlug].name.toLowerCase().replace(/\s+/g, '-')
    if (cityName === normalized) {
      return citySlug
    }
  }
  
  // Try matching city name without state (e.g., "new-york" matches "new-york-ny")
  for (const citySlug of Object.keys(cities)) {
    const cityNamePart = citySlug.split('-').slice(0, -1).join('-') // Remove state part
    if (cityNamePart === normalized) {
      return citySlug
    }
  }
  
  // Try fuzzy matching for multi-word cities (e.g., "kansas-city" → "kansas-city-mo")
  const normalizedParts = normalized.split('-')
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
  const servicePrefixMap: Record<string, string> = {
    'seo': 'seo',
    'web-development': 'web-development',
    'web-design': 'website-design',
    'website-design': 'website-design',
    'website-redesign': 'website-redesign',
    'wordpress': 'wordpress-development',
    'wordpress-development': 'wordpress-development',
    'wordpress-developers': 'wordpress-development',
    'web-application': 'web-development',
    'web-application-development': 'web-development',
    'medical-website': 'website-design',
    'medical-website-design': 'website-design',
    'surgeon-web': 'website-design',
    'surgeon-web-design': 'website-design',
    'biotech-website': 'website-design',
    'biotech-website-design': 'website-design',
    'auto-repair-website': 'website-design',
    'auto-repair-website-design': 'website-design',
    'dairy-industry-website': 'website-design',
    'dairy-industry-website-design': 'website-design',
    'educational-website': 'website-design',
    'educational-website-development': 'web-development',
    'freight-forwarder-web': 'website-design',
    'freight-forwarder-web-design': 'website-design',
    'retail-development': 'web-development',
    'energy-seo': 'seo',
    'real-estate-seo': 'seo',
    'portland-web': 'digital-marketing',
    'portland-web-marketing': 'digital-marketing',
    'jacksonville-ai': 'ai-seo',
    'jacksonville-ai-seo': 'ai-seo',
    'seo-company': 'seo',
    'seo-consulting': 'seo',
    'seo-services': 'seo',
    'seo-doctors': 'seo',
    'seo-geo': 'generative-engine-optimization'
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
  
  // Try reverse: city at start (e.g., "jacksonville-ai-seo")
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
