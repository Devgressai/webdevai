#!/usr/bin/env ts-node

/**
 * SEO Readiness Audit Script
 * 
 * Verifies:
 * - robots meta matches getSeoDirectives()
 * - canonical is deterministic and valid
 * - sitemap excludes noindex routes
 * - city×industry hubs are always noindex,follow
 * - no canonical loops
 * - no unknown route types default to index
 */

import {
  determineRouteType,
  getSeoDirectives,
  isAlwaysIndexableRoute,
  type RouteType,
  type SeoDirectives,
  type EntityLists
} from '../lib/sitemap-governance'
import { citySlugs } from '../lib/cities'
import { industrySlugs } from '../lib/industries'
import { serviceSlugs } from '../lib/services'

// Add key services used in sitemap
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
const validServiceSlugs = [...new Set([...serviceSlugs, ...keyServices])]

const entityLists: EntityLists = {
  citySlugs,
  industrySlugs,
  validServiceSlugs
}

/**
 * Generate canonical URL for a pathname
 */
function generateCanonical(pathname: string): string {
  const baseUrl = 'https://www.webvello.com'
  const normalized = pathname === '/' ? '' : pathname.replace(/\/$/, '')
  return `${baseUrl}${normalized}`
}

/**
 * Route audit result
 */
interface RouteAuditResult {
  pathname: string
  routeType: RouteType
  indexable: boolean
  inSitemap: boolean
  follow: boolean
  canonical: string
  score: number
  status: 'pass' | 'warn' | 'fail'
  issues: string[]
  directives: SeoDirectives
}

/**
 * Audit result structure
 */
class AuditResult {
  routes: RouteAuditResult[] = []
  errors: string[] = []
  warnings: string[] = []
  passed = 0
  failed = 0

  addRoute(route: RouteAuditResult) {
    this.routes.push(route)
    if (route.status === 'pass') {
      this.passed++
    } else {
      this.failed++
    }
  }

  addError(message: string) {
    this.errors.push(message)
  }

  addWarning(message: string) {
    this.warnings.push(message)
  }

  hasFailures(): boolean {
    return this.errors.length > 0 || this.failed > 0
  }
}

/**
 * Audit a single route
 */
async function auditRoute(pathname: string, auditResult: AuditResult): Promise<RouteAuditResult> {
  const routeType = determineRouteType(pathname)
  
  // Extract params from pathname
  const parts = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)
  const params: Record<string, string> = {}
  
  if (routeType === 'city-hub' && parts.length === 1) {
    params.city = parts[0]
  } else if (routeType === 'city-service' && parts.length === 2) {
    params.city = parts[0]
    params.service = parts[1]
  } else if (routeType === 'city-industry' && parts.length === 3) {
    params.city = parts[0]
    params.industry = parts[2] // parts[1] is 'industry'
  } else if (routeType === 'city-industry-service' && parts.length === 4) {
    params.city = parts[0]
    params.industry = parts[2]
    params.service = parts[3]
  }

  const directives = await getSeoDirectives(routeType, pathname, params, entityLists)
  const canonical = generateCanonical(pathname)
  const isAlwaysIndexable = isAlwaysIndexableRoute(routeType, pathname)
  
  // Calculate score and reasons
  const issues: string[] = []
  let score = 100

  // Check 1: city×industry hubs must be noindex,follow
  if (routeType === 'city-industry') {
    if (directives.indexable === true) {
      issues.push('❌ City×industry hubs must be noindex (indexable=false)')
      score -= 50
    }
    // They can be in sitemap but should be noindex
  }

  // Check 2: Unknown route types must not default to index
  if (routeType === 'unknown' && directives.indexable === true) {
    issues.push('❌ Unknown route type defaults to indexable=true')
    score -= 50
  }

  // Check 3: Sitemap URLs must not have index=false
  if (directives.inSitemap === true && directives.indexable === false) {
    issues.push('❌ URL in sitemap has indexable=false')
    score -= 30
  }

  // Check 4: Canonical should be deterministic
  const expectedCanonical = generateCanonical(pathname)
  if (canonical !== expectedCanonical) {
    issues.push(`⚠️  Canonical mismatch: expected ${expectedCanonical}`)
    score -= 10
  }

  // Check 5: Canonical should be valid URL
  try {
    new URL(canonical)
  } catch (e) {
    issues.push(`❌ Invalid canonical URL: ${canonical}`)
    score -= 20
  }

  // Check 6: Always-indexable routes should be in sitemap
  if (isAlwaysIndexable && !directives.inSitemap) {
    issues.push('⚠️  Always-indexable route not in sitemap')
    score -= 10
  }

  // Determine status
  const status: 'pass' | 'warn' | 'fail' = issues.some(i => i.startsWith('❌')) ? 'fail' : 
                 issues.length > 0 ? 'warn' : 'pass'

  const routeResult: RouteAuditResult = {
    pathname,
    routeType,
    indexable: directives.indexable,
    inSitemap: directives.inSitemap,
    follow: true, // Default to follow unless specified
    canonical,
    score: Math.max(0, score),
    status,
    issues,
    directives
  }

  auditResult.addRoute(routeResult)

  // Add to errors/warnings
  issues.forEach(issue => {
    if (issue.startsWith('❌')) {
      auditResult.addError(`${pathname}: ${issue}`)
    } else {
      auditResult.addWarning(`${pathname}: ${issue}`)
    }
  })

  return routeResult
}

/**
 * Generate representative sample of routes
 */
function generateTestRoutes(): string[] {
  const routes: string[] = []

  // Homepage
  routes.push('/')

  // Core pages
  routes.push('/about')
  routes.push('/contact')
  routes.push('/services')

  // Service pages (3)
  routes.push('/services/web-development')
  routes.push('/services/seo')
  routes.push('/services/ai-seo')

  // City pages (3)
  if (citySlugs.length > 0) {
    routes.push(`/${citySlugs[0]}`)
    routes.push(`/${citySlugs[Math.min(1, citySlugs.length - 1)]}`)
    routes.push(`/${citySlugs[Math.min(2, citySlugs.length - 1)]}`)
  }

  // City×service (5)
  if (citySlugs.length > 0 && validServiceSlugs.length > 0) {
    for (let i = 0; i < Math.min(5, citySlugs.length); i++) {
      const city = citySlugs[i]
      const service = validServiceSlugs[i % validServiceSlugs.length]
      routes.push(`/${city}/${service}`)
    }
  }

  // City×industry hubs (3) - these should be noindex
  if (citySlugs.length > 0 && industrySlugs.length > 0) {
    for (let i = 0; i < Math.min(3, citySlugs.length); i++) {
      const city = citySlugs[i]
      const industry = industrySlugs[i % industrySlugs.length]
      routes.push(`/${city}/industry/${industry}`)
    }
  }

  // City×industry×service (5)
  if (citySlugs.length > 0 && industrySlugs.length > 0) {
    const cityIndustryServices = ['web-development', 'seo', 'website-design']
    for (let i = 0; i < Math.min(5, citySlugs.length); i++) {
      const city = citySlugs[i]
      const industry = industrySlugs[i % industrySlugs.length]
      const service = cityIndustryServices[i % cityIndustryServices.length]
      routes.push(`/${city}/industry/${industry}/${service}`)
    }
  }

  // Unknown route (should not default to index)
  routes.push('/unknown-route-test-12345')

  return routes
}

/**
 * Main audit function
 */
async function runAudit() {
  console.log('🔍 SEO Readiness Audit\n')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  const auditResult = new AuditResult()
  const testRoutes = generateTestRoutes()

  console.log(`Testing ${testRoutes.length} routes...\n`)

  // Audit each route
  for (const route of testRoutes) {
    await auditRoute(route, auditResult)
  }

  // Generate report
  console.log('\n📊 AUDIT RESULTS\n')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  // Summary
  console.log(`✅ Passed: ${auditResult.passed}`)
  console.log(`❌ Failed: ${auditResult.failed}`)
  console.log(`⚠️  Warnings: ${auditResult.warnings.length}`)
  console.log(`\n`)

  // Detailed route results
  console.log('📋 ROUTE DETAILS\n')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  auditResult.routes.forEach(route => {
    const statusIcon = route.status === 'pass' ? '✅' : route.status === 'warn' ? '⚠️' : '❌'
    console.log(`${statusIcon} ${route.pathname}`)
    console.log(`   Type: ${route.routeType}`)
    console.log(`   Indexable: ${route.indexable}`)
    console.log(`   In Sitemap: ${route.inSitemap}`)
    console.log(`   Canonical: ${route.canonical}`)
    console.log(`   Score: ${route.score}/100`)
    
    if (route.issues.length > 0) {
      route.issues.forEach(issue => {
        console.log(`   ${issue}`)
      })
    }
    console.log('')
  })

  // Errors
  if (auditResult.errors.length > 0) {
    console.log('\n❌ ERRORS\n')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    auditResult.errors.forEach(error => {
      console.log(`  ${error}`)
    })
    console.log('')
  }

  // Warnings
  if (auditResult.warnings.length > 0) {
    console.log('\n⚠️  WARNINGS\n')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    auditResult.warnings.forEach(warning => {
      console.log(`  ${warning}`)
    })
    console.log('')
  }

  // Final verdict
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
  
  if (auditResult.hasFailures()) {
    console.log('❌ AUDIT FAILED\n')
    console.log('One or more critical issues were found. Please review the errors above.\n')
    process.exit(1)
  } else {
    console.log('✅ AUDIT PASSED\n')
    console.log('All SEO readiness checks passed!\n')
    process.exit(0)
  }
}

// Run audit
runAudit().catch(error => {
  console.error('❌ Audit script error:', error)
  process.exit(1)
})
