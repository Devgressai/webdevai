/**
 * SEO Breadcrumbs Component
 * 
 * Provides both visual breadcrumbs and JSON-LD BreadcrumbList schema.
 * Works for all route patterns and uses canonical URLs from governance.
 */

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SchemaMarkup } from './schema-markup'
import { getSeoDirectives } from '@/lib/seo/index-policy'
import { getCity } from '@/lib/cities'
import { serviceData } from '@/lib/data/service-data'
import { getIndustry } from '@/lib/industries'

// Helper to get service name (fallback to formatted slug)
function getServiceName(serviceSlug: string): string {
  const service = serviceData[serviceSlug]
  return service?.name || formatLabel(serviceSlug)
}

const BASE_URL = 'https://www.webvello.com'

export interface BreadcrumbItem {
  label: string
  href: string
  canonical?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * Format a slug into a human-friendly label (Title Case)
 */
function formatLabel(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Get canonical URL for a breadcrumb item using governance
 */
function getCanonicalForBreadcrumb(
  routeType: 'core' | 'service' | 'city' | 'city-service' | 'city-industry' | 'city-industry-service',
  params: {
    path?: string
    city?: string
    service?: string
    industry?: string
  }
): string {
  const url = params.path 
    ? `${BASE_URL}${params.path.startsWith('/') ? params.path : `/${params.path}`}`
    : `${BASE_URL}/${params.city || ''}${params.industry ? `/industry/${params.industry}` : ''}${params.service ? `/${params.service}` : ''}`
  
  const directives = getSeoDirectives(url, {
    routeType,
    ...params
  })
  
  return directives.canonical
}

/**
 * Generate breadcrumbs for /services/* routes
 */
export function generateServiceBreadcrumbs(serviceSlug: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    {
      label: 'Home',
      href: '/',
      canonical: getCanonicalForBreadcrumb('core', { path: '/' })
    }
  ]
  
  // Services hub
  items.push({
    label: 'Services',
    href: '/services',
    canonical: getCanonicalForBreadcrumb('service', { path: '/services' })
  })
  
  // Service page
  const serviceLabel = getServiceName(serviceSlug)
  const serviceCanonical = getCanonicalForBreadcrumb('service', { service: serviceSlug, path: `/services/${serviceSlug}` })
  
  items.push({
    label: serviceLabel,
    href: `/services/${serviceSlug}`,
    canonical: serviceCanonical
  })
  
  return items
}

/**
 * Generate breadcrumbs for /locations/* routes
 */
export function generateLocationBreadcrumbs(pathSegments: string[]): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    {
      label: 'Home',
      href: '/',
      canonical: getCanonicalForBreadcrumb('core', { path: '/' })
    }
  ]
  
  // Locations hub
  items.push({
    label: 'Locations',
    href: '/locations',
    canonical: getCanonicalForBreadcrumb('core', { path: '/locations' })
  })
  
  // Location sub-pages
  let currentPath = '/locations'
  for (const segment of pathSegments) {
    currentPath += `/${segment}`
    items.push({
      label: formatLabel(segment),
      href: currentPath,
      canonical: getCanonicalForBreadcrumb('core', { path: currentPath })
    })
  }
  
  return items
}

/**
 * Generate breadcrumbs for /[city] routes
 */
export function generateCityBreadcrumbs(citySlug: string): BreadcrumbItem[] {
  const city = getCity(citySlug)
  if (!city) return []
  
  const items: BreadcrumbItem[] = [
    {
      label: 'Home',
      href: '/',
      canonical: getCanonicalForBreadcrumb('core', { path: '/' })
    }
  ]
  
  // City page
  const cityCanonical = getCanonicalForBreadcrumb('city', { city: citySlug })
  items.push({
    label: city.fullName,
    href: `/${citySlug}`,
    canonical: cityCanonical
  })
  
  return items
}

/**
 * Generate breadcrumbs for /[city]/[service] routes
 */
export function generateCityServiceBreadcrumbs(citySlug: string, serviceSlug: string): BreadcrumbItem[] {
  const city = getCity(citySlug)
  const service = serviceData[serviceSlug]
  if (!city || !service) return []
  
  const items: BreadcrumbItem[] = [
    {
      label: 'Home',
      href: '/',
      canonical: getCanonicalForBreadcrumb('core', { path: '/' })
    }
  ]
  
  // City page
  const cityCanonical = getCanonicalForBreadcrumb('city', { city: citySlug })
  items.push({
    label: city.fullName,
    href: `/${citySlug}`,
    canonical: cityCanonical
  })
  
  // City×Service page
  const cityServiceCanonical = getCanonicalForBreadcrumb('city-service', { city: citySlug, service: serviceSlug })
  items.push({
    label: `${service.name} in ${city.fullName}`,
    href: `/${citySlug}/${serviceSlug}`,
    canonical: cityServiceCanonical
  })
  
  return items
}

/**
 * Generate breadcrumbs for /[city]/industry/[industry] routes
 */
export function generateCityIndustryBreadcrumbs(citySlug: string, industrySlug: string): BreadcrumbItem[] {
  const city = getCity(citySlug)
  const industry = getIndustry(industrySlug)
  if (!city || !industry) return []
  
  const items: BreadcrumbItem[] = [
    {
      label: 'Home',
      href: '/',
      canonical: getCanonicalForBreadcrumb('core', { path: '/' })
    }
  ]
  
  // City page
  const cityCanonical = getCanonicalForBreadcrumb('city', { city: citySlug })
  items.push({
    label: city.fullName,
    href: `/${citySlug}`,
    canonical: cityCanonical
  })
  
  // City×Industry page
  const cityIndustryCanonical = getCanonicalForBreadcrumb('city-industry', { city: citySlug, industry: industrySlug })
  items.push({
    label: `${industry.name} in ${city.fullName}`,
    href: `/${citySlug}/industry/${industrySlug}`,
    canonical: cityIndustryCanonical
  })
  
  return items
}

/**
 * Generate breadcrumbs for /[city]/industry/[industry]/[service] routes
 */
export function generateCityIndustryServiceBreadcrumbs(
  citySlug: string,
  industrySlug: string,
  serviceSlug: string
): BreadcrumbItem[] {
  const city = getCity(citySlug)
  const industry = getIndustry(industrySlug)
  const service = serviceData[serviceSlug]
  if (!city || !industry || !service) return []
  
  const items: BreadcrumbItem[] = [
    {
      label: 'Home',
      href: '/',
      canonical: getCanonicalForBreadcrumb('core', { path: '/' })
    }
  ]
  
  // City page
  const cityCanonical = getCanonicalForBreadcrumb('city', { city: citySlug })
  items.push({
    label: city.fullName,
    href: `/${citySlug}`,
    canonical: cityCanonical
  })
  
  // City×Industry page
  const cityIndustryCanonical = getCanonicalForBreadcrumb('city-industry', { city: citySlug, industry: industrySlug })
  items.push({
    label: `${industry.name} in ${city.fullName}`,
    href: `/${citySlug}/industry/${industrySlug}`,
    canonical: cityIndustryCanonical
  })
  
  // City×Industry×Service page
  const cityIndustryServiceCanonical = getCanonicalForBreadcrumb('city-industry-service', {
    city: citySlug,
    industry: industrySlug,
    service: serviceSlug
  })
  items.push({
    label: `${service.name} for ${industry.name} in ${city.fullName}`,
    href: `/${citySlug}/industry/${industrySlug}/${serviceSlug}`,
    canonical: cityIndustryServiceCanonical
  })
  
  return items
}

/**
 * Visual Breadcrumbs Component
 */
export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (items.length === 0) return null
  
  return (
    <>
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center text-sm text-gray-600 ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            const href = item.canonical ? item.canonical.replace(BASE_URL, '') : item.href
            
            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight 
                    className="h-4 w-4 text-gray-400 mx-1" 
                    aria-hidden="true" 
                  />
                )}
                {isLast ? (
                  <span 
                    className="text-gray-900 font-medium" 
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      
      {/* JSON-LD BreadcrumbList Schema */}
      <BreadcrumbSchema items={items} />
    </>
  )
}

/**
 * JSON-LD BreadcrumbList Schema Component
 */
function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.canonical || `${BASE_URL}${item.href}`
    }))
  }
  
  return <SchemaMarkup schema={schema} />
}
