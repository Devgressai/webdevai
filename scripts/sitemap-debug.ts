/**
 * Sitemap Debug Script
 * Simulates sitemap generation to count URLs and exclusions
 */

import { citySlugs } from '../lib/cities'
import { cityDataSlugs } from '../lib/data/city-data'
import { getSeoDirectives } from '../lib/seo/index-policy'

const baseUrl = 'https://www.webvello.com'

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
  '/locations/hawaii',
  '/solutions',
  '/blog',
  '/seo-audit',
  '/website-speed-test',
  '/enhanced-demo'
]

// Hawaii location pages
const hawaiiLocationPages = [
  '/locations/hawaii/kona',
  '/locations/hawaii/honolulu'
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

// Standalone services (from sitemap.ts)
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
  'geo-san-jose',
  'geo-palo-alto',
  'geo-mountain-view',
  'geo-santa-monica',
  'geo-irvine',
  'geo-sunnyvale',
  'geo-cupertino',
  'geo-bellevue',
  'geo-redmond',
  'geo-plano',
  'geo-frisco',
  'geo-scottsdale',
  'geo-tempe',
  'geo-chandler',
  'geo-naperville',
  'geo-philadelphia',
  'geo-pittsburgh',
  'geo-nashville',
  'geo-charlotte',
  'geo-memphis',
  'geo-louisville',
  'geo-milwaukee',
  'geo-jacksonville',
  'geo-tampa',
  'geo-orlando',
  'geo-san-antonio',
  'geo-fort-worth',
  'geo-arlington',
  'geo-el-paso',
  'geo-corpus-christi',
  'geo-las-vegas',
  'geo-reno',
  'geo-kansas-city',
  'geo-st-louis',
  'geo-oklahoma-city',
  'geo-tulsa',
  'geo-detroit',
  'geo-cleveland',
  'geo-cincinnati',
  'geo-columbus',
  'geo-indianapolis',
  'geo-minneapolis',
  'geo-salt-lake-city',
  'geo-aurora',
  'geo-sacramento',
  'geo-fresno',
  'geo-bakersfield',
  'geo-baltimore',
  'geo-richmond',
  'geo-virginia-beach',
  'geo-buffalo',
  'geo-rochester',
  'geo-albuquerque',
  'geo-tucson',
  'geo-mesa',
  'geo-spokane',
  'geo-boise',
  'geo-anchorage',
  'geo-honolulu',
  'geo-madison',
  'geo-wichita',
  'geo-omaha',
  'geo-raleigh',
  'geo-new-orleans',
  'seo-geo-packages',
  'web-development-packages',
  'alabama',
  'alaska',
  'arizona',
  'arkansas',
  'california',
  'colorado',
  'connecticut',
  'delaware',
  'florida',
  'georgia',
  'hawaii',
  'idaho',
  'illinois',
  'indiana',
  'iowa',
  'kansas',
  'kentucky',
  'louisiana',
  'maine',
  'maryland',
  'massachusetts',
  'michigan',
  'minnesota',
  'mississippi',
  'missouri',
  'montana',
  'nebraska',
  'nevada',
  'new-hampshire',
  'new-jersey',
  'new-mexico',
  'new-york',
  'north-carolina',
  'north-dakota',
  'ohio',
  'oklahoma',
  'oregon',
  'pennsylvania',
  'rhode-island',
  'south-carolina',
  'south-dakota',
  'tennessee',
  'texas',
  'utah',
  'vermont',
  'virginia',
  'washington',
  'west-virginia',
  'wisconsin',
  'wyoming'
]

// Key services for city+service (Tier 1 only)
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

interface Counts {
  core: number
  service: number
  city: number
  cityService: number
  blog: number
  total: number
}

interface ExclusionStats {
  routeType: string
  reasonCode: string
  count: number
}

function main() {
  console.log('=== SITEMAP DEBUG REPORT ===\n')

  // A) Identify which lists are used
  console.log('A) DATA SOURCES:')
  console.log(`  - Cities (citySlugs): ${citySlugs.length}`)
  console.log(`  - Cities (cityDataSlugs): ${cityDataSlugs.length}`)
  console.log(`  - Services (keyServices/TIER1): ${keyServices.length}`)
  console.log(`  - Services (standaloneServices): ${standaloneServices.length}`)
  console.log('')

  // B) Count cities/services used by sitemap
  const countCitiesUsedBySitemap = citySlugs.length // For city hubs
  const countCitiesUsedForCityService = cityDataSlugs.length // For city×service
  const countServicesUsedBySitemap = keyServices.length // For city×service
  const computedCityServiceCount = countCitiesUsedForCityService * countServicesUsedBySitemap

  console.log('B) SITEMAP INPUT COUNTS:')
  console.log(`  - Cities for city hubs: ${countCitiesUsedBySitemap}`)
  console.log(`  - Cities for city×service: ${countCitiesUsedForCityService}`)
  console.log(`  - Services for city×service: ${countServicesUsedBySitemap}`)
  console.log(`  - Computed city×service URLs: ${computedCityServiceCount}`)
  console.log('')

  // C) Simulate sitemap generation
  const counts: Counts = {
    core: 0,
    service: 0,
    city: 0,
    cityService: 0,
    blog: 0,
    total: 0
  }

  const exclusionStats: Map<string, number> = new Map()
  const routeTypeStats: Map<string, number> = new Map()

  // Core entries
  const corePaths = corePages.map((p) => (p === '' ? '' : p.replace(/^\//, '')))
  const solutionPaths = solutionsPages.map((s) => `solutions/${s}`)
  const hawaiiPaths = hawaiiLocationPages.map((p) => p.replace(/^\//, ''))
  const allCorePaths = [...corePaths, ...solutionPaths, ...hawaiiPaths]

  for (const path of allCorePaths) {
    const url = path ? `${baseUrl}/${path}` : baseUrl
    const directives = getSeoDirectives(url, { routeType: 'core', path })
    routeTypeStats.set('core', (routeTypeStats.get('core') || 0) + 1)
    if (directives.inSitemap) {
      counts.core++
    } else {
      const key = `core:${directives.reasonCodes[0] || 'UNKNOWN'}`
      exclusionStats.set(key, (exclusionStats.get(key) || 0) + 1)
    }
  }

  // Service entries
  for (const service of standaloneServices) {
    const url = `${baseUrl}/services/${service}`
    const directives = getSeoDirectives(url, { routeType: 'service', service })
    routeTypeStats.set('service', (routeTypeStats.get('service') || 0) + 1)
    if (directives.inSitemap) {
      counts.service++
    } else {
      const key = `service:${directives.reasonCodes[0] || 'UNKNOWN'}`
      exclusionStats.set(key, (exclusionStats.get(key) || 0) + 1)
    }
  }

  // City entries
  for (const city of citySlugs) {
    const url = `${baseUrl}/${city}`
    const directives = getSeoDirectives(url, { routeType: 'city', city })
    routeTypeStats.set('city', (routeTypeStats.get('city') || 0) + 1)
    if (directives.inSitemap) {
      counts.city++
    } else {
      const key = `city:${directives.reasonCodes[0] || 'UNKNOWN'}`
      exclusionStats.set(key, (exclusionStats.get(key) || 0) + 1)
    }
  }

  // City×Service entries
  let cityServiceIncluded = 0
  let cityServiceExcluded = 0
  for (const city of cityDataSlugs) {
    for (const service of keyServices) {
      const url = `${baseUrl}/${city}/${service}`
      const directives = getSeoDirectives(url, {
        routeType: 'city-service',
        city,
        service,
        blocks: {} // Empty blocks as in sitemap.ts
      })
      routeTypeStats.set('city-service', (routeTypeStats.get('city-service') || 0) + 1)
      if (directives.inSitemap) {
        cityServiceIncluded++
        counts.cityService++
      } else {
        cityServiceExcluded++
        const reasonCode = directives.reasonCodes[0] || 'UNKNOWN'
        const key = `city-service:${reasonCode}`
        exclusionStats.set(key, (exclusionStats.get(key) || 0) + 1)
      }
    }
  }

  // Blog entries (simulated as 0, actual count depends on CMS)
  counts.blog = 0

  counts.total = counts.core + counts.service + counts.city + counts.cityService + counts.blog

  console.log('C) SITEMAP OUTPUT COUNTS:')
  console.log(`  - Core entries: ${counts.core}`)
  console.log(`  - Service entries: ${counts.service}`)
  console.log(`  - City entries: ${counts.city}`)
  console.log(`  - City×Service entries: ${counts.cityService} (included: ${cityServiceIncluded}, excluded: ${cityServiceExcluded})`)
  console.log(`  - Blog entries: ${counts.blog} (dynamic, not counted)`)
  console.log(`  - TOTAL URLs: ${counts.total}`)
  console.log('')

  // D) Route type breakdown
  console.log('D) ROUTE TYPE BREAKDOWN:')
  const sortedRouteTypes = Array.from(routeTypeStats.entries()).sort((a, b) => b[1] - a[1])
  for (const [routeType, count] of sortedRouteTypes) {
    console.log(`  - ${routeType}: ${count} URLs processed`)
  }
  console.log('')

  // E) Top exclusion reasons
  console.log('E) TOP 20 EXCLUSION REASONS:')
  const sortedExclusions = Array.from(exclusionStats.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
  
  if (sortedExclusions.length === 0) {
    console.log('  (No exclusions found)')
  } else {
    for (const [key, count] of sortedExclusions) {
      console.log(`  - ${key}: ${count}`)
    }
  }
  console.log('')

  // Summary
  console.log('=== SUMMARY ===')
  console.log(`Total URLs in sitemap: ${counts.total}`)
  console.log(`City×Service URLs excluded: ${cityServiceExcluded} (${((cityServiceExcluded / computedCityServiceCount) * 100).toFixed(1)}%)`)
  console.log(`City×Service URLs included: ${cityServiceIncluded} (${((cityServiceIncluded / computedCityServiceCount) * 100).toFixed(1)}%)`)
}

main()
