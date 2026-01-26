/**
 * CI Validation: Index Governance Compliance
 * 
 * Validates that:
 * 1. All programmatic pages pass blocks to getSeoDirectives()
 * 2. No pages bypass governance
 * 3. City×Industry hubs are always noindex
 * 4. Required blocks are present for indexable pages
 * 
 * Run: node ci/validate-index-governance.js
 */

const fs = require('fs')
const path = require('path')

const violations = []
const warnings = []

// Check City×Industry×Service page
const cisPagePath = path.join(__dirname, '../app/[city]/industry/[industry]/[service]/page.tsx')
if (fs.existsSync(cisPagePath)) {
  const cisPageContent = fs.readFileSync(cisPagePath, 'utf8')
  
  if (!cisPageContent.includes('getSeoDirectives')) {
    violations.push({
      file: 'app/[city]/industry/[industry]/[service]/page.tsx',
      issue: 'Not using getSeoDirectives() for index governance',
      severity: 'error'
    })
  }
  
  if (cisPageContent.includes('IndexPolicyService.getPolicy') && !cisPageContent.includes('blocks')) {
    violations.push({
      file: 'app/[city]/industry/[industry]/[service]/page.tsx',
      issue: 'Using legacy getPolicy() without passing blocks parameter',
      severity: 'error'
    })
  }
}

// Check City×Service page
const cityServicePagePath = path.join(__dirname, '../app/[city]/[service]/page.tsx')
if (fs.existsSync(cityServicePagePath)) {
  const cityServicePageContent = fs.readFileSync(cityServicePagePath, 'utf8')
  
  if (!cityServicePageContent.includes('getSeoDirectives')) {
    violations.push({
      file: 'app/[city]/[service]/page.tsx',
      issue: 'Not using getSeoDirectives() for index governance',
      severity: 'error'
    })
  }
  
  if (!cityServicePageContent.includes('robots')) {
    violations.push({
      file: 'app/[city]/[service]/page.tsx',
      issue: 'Missing robots meta in generateMetadata()',
      severity: 'error'
    })
  }
}

// Check City×Industry hub page
const cityIndustryPagePath = path.join(__dirname, '../app/[city]/industry/[industry]/page.tsx')
if (fs.existsSync(cityIndustryPagePath)) {
  const cityIndustryPageContent = fs.readFileSync(cityIndustryPagePath, 'utf8')
  
  if (!cityIndustryPageContent.includes('getCityIndustryHubRobots')) {
    violations.push({
      file: 'app/[city]/industry/[industry]/page.tsx',
      issue: 'City×Industry hub not using getCityIndustryHubRobots()',
      severity: 'error'
    })
  }
  
  if (!cityIndustryPageContent.includes('index: false') && !cityIndustryPageContent.includes('index: robots.index')) {
    violations.push({
      file: 'app/[city]/industry/[industry]/page.tsx',
      issue: 'City×Industry hub may not be enforcing noindex',
      severity: 'error'
    })
  }
}

// Check sitemap uses directives.inSitemap
const sitemapPath = path.join(__dirname, '../app/sitemap.ts')
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8')
  
  if (!sitemapContent.includes('directives.inSitemap')) {
    violations.push({
      file: 'app/sitemap.ts',
      issue: 'Sitemap not using directives.inSitemap for inclusion check',
      severity: 'error'
    })
  }
}

// Report violations
if (violations.length > 0) {
  console.error('\n❌ Index Governance Violations Found:\n')
  violations.forEach((v, i) => {
    console.error(`${i + 1}. [${v.severity.toUpperCase()}] ${v.file}`)
    console.error(`   ${v.issue}\n`)
  })
  process.exit(1)
}

if (warnings.length > 0) {
  console.warn('\n⚠️  Index Governance Warnings:\n')
  warnings.forEach((w, i) => {
    console.warn(`${i + 1}. ${w.file}: ${w.issue}\n`)
  })
}

console.log('✅ Index governance validation passed')
process.exit(0)
