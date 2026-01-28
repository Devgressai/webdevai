/**
 * Service Page Metadata Helper
 * 
 * Provides canonical URL and SEO directives for service pages.
 * Ensures all /services/* pages use governance system for canonicals.
 */

import { Metadata } from 'next'
import { getSeoDirectives } from './index-policy'

const BASE_URL = 'https://www.webvello.com'

/**
 * Extract service slug from pathname
 * Examples:
 * - "/services/seo" → "seo"
 * - "/services/geo-new-york" → "geo-new-york"
 * - "services/california" → "california"
 */
function extractServiceSlug(pathname: string): string {
  const normalized = pathname.replace(/^\/+|\/+$/g, '').toLowerCase()
  if (normalized.startsWith('services/')) {
    return normalized.replace('services/', '')
  }
  if (normalized.startsWith('/services/')) {
    return normalized.replace('/services/', '')
  }
  return normalized
}

/**
 * Get canonical URL for a service page using governance system
 * 
 * This ensures all service pages use the same canonical logic as the sitemap.
 * The canonical may point to a city or city-service page if a mapping exists.
 * 
 * @param pathname - Full pathname (e.g., "/services/seo" or "/services/geo-new-york")
 * @returns Canonical URL string
 */
export function getServicePageCanonicalUrl(pathname: string): string {
  const serviceSlug = extractServiceSlug(pathname)
  const url = `${BASE_URL}/services/${serviceSlug}`
  
  const directives = getSeoDirectives(url, {
    routeType: 'service',
    service: serviceSlug,
    path: `/services/${serviceSlug}`
  })
  
  return directives.canonical
}

/**
 * Get SEO directives for a service page
 * 
 * @param pathname - Full pathname (e.g., "/services/seo")
 * @returns SeoDirectives object with index, follow, canonical, etc.
 */
export function getServicePageDirectives(pathname: string) {
  const serviceSlug = extractServiceSlug(pathname)
  const url = `${BASE_URL}/services/${serviceSlug}`
  
  return getSeoDirectives(url, {
    routeType: 'service',
    service: serviceSlug,
    path: `/services/${serviceSlug}`
  })
}

/**
 * Generate metadata alternates object with canonical URL
 * 
 * @param pathname - Full pathname (e.g., "/services/seo")
 * @returns Metadata alternates object with canonical
 */
export function getServicePageAlternates(pathname: string): Metadata['alternates'] {
  return {
    canonical: getServicePageCanonicalUrl(pathname)
  }
}
