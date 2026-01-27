/**
 * CI Validation: CTA Governance Compliance
 * 
 * Validates that all pages comply with CTA governance rules:
 * - BOFU pages have exactly 1 primary CTA
 * - No multiple primary CTAs
 * - CTA destinations match funnel stage
 * - BOFU CTAs have tracking
 * 
 * Run: node ci/validate-ctas.js
 * 
 * This script scans built route manifest or a curated list of routes.
 * For Next.js, it checks the .next directory or uses a route manifest.
 */

const fs = require('fs')
const path = require('path')

// Import validation functions (using require for CommonJS compatibility)
// Note: In production, you may need to compile TypeScript or use ts-node
let validateCTAs, getFunnelStage, inferPageTypeFromPath, isExemptFromPrimaryCTA

try {
  // Try to load compiled JS (if TypeScript is compiled)
  const ctaValidation = require('../lib/cta/validation')
  const ctaFunnelStages = require('../lib/cta/funnel-stages')
  validateCTAs = ctaValidation.validateCTAs
  getFunnelStage = ctaFunnelStages.getFunnelStage
  inferPageTypeFromPath = ctaFunnelStages.inferPageTypeFromPath
  isExemptFromPrimaryCTA = ctaFunnelStages.isExemptFromPrimaryCTA
} catch (error) {
  console.error('Error loading CTA validation modules. Ensure TypeScript is compiled or use ts-node.')
  console.error('Error:', error.message)
  process.exit(1)
}

const violations = []
const warnings = []

/**
 * Routes to validate
 * In production, this could be generated from:
 * - Next.js route manifest (.next/routes-manifest.json)
 * - Static route list
 * - File system scan of app directory
 */
const ROUTES_TO_VALIDATE = [
  // Core pages
  { path: '/', type: 'core' },
  { path: '/about', type: 'core' },
  { path: '/contact', type: 'core' },
  { path: '/pricing', type: 'pricing' },
  
  // Service pages
  { path: '/services/seo', type: 'service' },
  { path: '/services/web-development', type: 'service' },
  { path: '/services/website-design', type: 'service' },
  { path: '/services/ai-seo', type: 'service' },
  
  // City pages
  { path: '/denver-co', type: 'city' },
  { path: '/new-york-ny', type: 'city' },
  { path: '/los-angeles-ca', type: 'city' },
  
  // City×Service pages
  { path: '/denver-co/seo', type: 'city-service' },
  { path: '/denver-co/web-development', type: 'city-service' },
  { path: '/new-york-ny/seo', type: 'city-service' },
  
  // City×Industry×Service pages
  { path: '/denver-co/industry/healthcare/web-development', type: 'city-industry-service' },
  { path: '/new-york-ny/industry/legal/seo', type: 'city-industry-service' },
  
  // Tools
  { path: '/seo-audit', type: 'tool' },
  { path: '/website-speed-test', type: 'tool' },
  
  // Solutions
  { path: '/solutions/website-conversion', type: 'solutions' },
  { path: '/solutions/website-leads', type: 'solutions' },
  
  // Case studies
  { path: '/case-studies', type: 'case-study' },
  
  // Exempt pages (should not fail if missing CTA)
  { path: '/entity/nextjs', type: 'entity' },
  { path: '/glossary/seo', type: 'glossary' },
  { path: '/trust/privacy', type: 'trust' }
]

/**
 * Extract CTAs from a page file
 * This is a simplified version - in production, you'd parse the actual component
 * or use a more sophisticated AST parser
 */
function extractCTAsFromFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return null
  }
  
  const content = fs.readFileSync(filePath, 'utf8')
  const ctas = []
  
  // Look for Button components with href or Link components
  // This is a heuristic - in production, use AST parsing
  const buttonMatches = content.matchAll(/<Button[^>]*>[\s\S]*?<\/Button>/g)
  const linkMatches = content.matchAll(/<Link[^>]*href=["']([^"']+)["'][^>]*>([^<]+)<\/Link>/g)
  
  // Extract from Button components
  for (const match of buttonMatches) {
    const buttonContent = match[0]
    const hrefMatch = buttonContent.match(/href=["']([^"']+)["']/)
    const textMatch = buttonContent.match(/>([^<]+)</)
    
    if (hrefMatch && textMatch) {
      ctas.push({
        label: textMatch[1].trim(),
        href: hrefMatch[1],
        isPrimary: buttonContent.includes('primary') || buttonContent.includes('size="lg"')
      })
    }
  }
  
  // Extract from Link components
  for (const match of linkMatches) {
    ctas.push({
      label: match[2].trim(),
      href: match[1],
      isPrimary: false // Links are typically secondary
    })
  }
  
  return ctas.length > 0 ? ctas : null
}

/**
 * Validate a single route
 */
function validateRoute(route) {
  const { path: pathname, type: pageType } = route
  
  // Infer page type if not provided
  const inferredType = pageType || inferPageTypeFromPath(pathname)
  if (!inferredType) {
    warnings.push({
      path: pathname,
      issue: 'Could not infer page type from path',
      severity: 'warning'
    })
    return
  }
  
  // Get funnel stage
  const funnelStage = getFunnelStage(inferredType, pathname)
  
  // Try to extract CTAs from page file
  // In Next.js app directory, pages are in app/[route]/page.tsx
  const routeParts = pathname.split('/').filter(Boolean)
  let pageFilePath = path.join(__dirname, '../app')
  
  if (routeParts.length === 0) {
    pageFilePath = path.join(pageFilePath, 'page.tsx')
  } else {
    // Build path for dynamic routes
    const filePathParts = routeParts.map(part => {
      // Check if it's a dynamic segment
      if (part.includes('-') && part.length > 10) {
        // Likely a dynamic segment like [city] or [service]
        return `[${part.split('-')[0]}]` // Simplified - would need route manifest
      }
      return part
    })
    pageFilePath = path.join(pageFilePath, ...filePathParts, 'page.tsx')
  }
  
  // Extract CTAs (simplified - in production, use AST or route manifest)
  const ctas = extractCTAsFromFile(pageFilePath)
  
  if (!ctas) {
    // If we can't extract CTAs, check if page is exempt
    if (isExemptFromPrimaryCTA(inferredType, pathname)) {
      return // Exempt pages are OK
    }
    
    // For BOFU pages, missing CTAs is an error
    if (funnelStage === 'BOFU') {
      violations.push({
        path: pathname,
        pageType: inferredType,
        funnelStage,
        issue: 'BOFU page missing primary CTA',
        severity: 'error',
        file: pageFilePath
      })
    } else {
      warnings.push({
        path: pathname,
        pageType: inferredType,
        funnelStage,
        issue: 'Could not extract CTAs from page file',
        severity: 'warning',
        file: pageFilePath
      })
    }
    return
  }
  
  // Validate CTAs
  const validation = validateCTAs({
    pageType: inferredType,
    pathname,
    funnelStage,
    ctas
  })
  
  if (!validation.ok) {
    validation.errors.forEach(error => {
      violations.push({
        path: pathname,
        pageType: inferredType,
        funnelStage,
        issue: error.message,
        code: error.code,
        severity: 'error',
        file: pageFilePath,
        ctaIndex: error.ctaIndex
      })
    })
  }
  
  if (validation.warnings.length > 0) {
    validation.warnings.forEach(warning => {
      warnings.push({
        path: pathname,
        pageType: inferredType,
        funnelStage,
        issue: warning.message,
        code: warning.code,
        severity: 'warning',
        file: pageFilePath,
        ctaIndex: warning.ctaIndex
      })
    })
  }
}

/**
 * Main validation function
 */
function main() {
  console.log('Validating CTA governance compliance...\n')
  
  // Validate each route
  ROUTES_TO_VALIDATE.forEach(route => {
    validateRoute(route)
  })
  
  // Report violations
  if (violations.length > 0) {
    console.error('❌ CTA Governance Violations Found:\n')
    violations.forEach((v, i) => {
      console.error(`${i + 1}. [${v.severity.toUpperCase()}] ${v.path}`)
      console.error(`   Page Type: ${v.pageType}, Funnel: ${v.funnelStage}`)
      console.error(`   Issue: ${v.issue}`)
      if (v.code) {
        console.error(`   Code: ${v.code}`)
      }
      if (v.file) {
        console.error(`   File: ${v.file}`)
      }
      if (v.ctaIndex !== undefined) {
        console.error(`   CTA Index: ${v.ctaIndex}`)
      }
      console.error('')
    })
    process.exit(1)
  }
  
  if (warnings.length > 0) {
    console.warn('⚠️  CTA Governance Warnings:\n')
    warnings.forEach((w, i) => {
      console.warn(`${i + 1}. ${w.path}: ${w.issue}`)
      if (w.file) {
        console.warn(`   File: ${w.file}`)
      }
      console.warn('')
    })
  }
  
  if (violations.length === 0) {
    console.log('✅ CTA governance validation passed')
  }
  
  process.exit(violations.length > 0 ? 1 : 0)
}

// Run if executed directly
if (require.main === module) {
  main()
}

module.exports = { validateRoute, extractCTAsFromFile }
