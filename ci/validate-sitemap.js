#!/usr/bin/env node
/**
 * CI Sitemap Validation
 * 
 * Validates sitemap generation without running the full build.
 * This is a lightweight check that runs in <1s for typical sites.
 * 
 * CHECKS PERFORMED:
 * 1. No duplicate <loc> URLs within or across sitemaps
 * 2. All <loc> values are absolute HTTPS URLs
 * 3. All <lastmod> values are valid ISO 8601 UTC dates
 * 4. No sitemap exceeds 50,000 URLs (protocol limit)
 * 5. Sitemap index references all child sitemaps
 * 6. Warning if >30% of URLs share identical lastmod
 * 
 * Usage:
 *   node ci/validate-sitemap.js
 *   # or
 *   npm run validate:sitemap
 * 
 * Exit codes:
 *   0 = All checks passed
 *   1 = Validation errors found
 */

const { execSync } = require('child_process')
const path = require('path')

const ROOT_DIR = path.join(__dirname, '..')

// Color codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

async function main() {
  log('\n🗺️  Sitemap Validation', 'blue')
  log('Validating sitemap entries without full build...\n', 'cyan')
  
  const startTime = Date.now()
  
  try {
    // Run the TypeScript validation script using tsx
    execSync('npx tsx lib/sitemap-validation.ts', {
      cwd: ROOT_DIR,
      stdio: 'inherit',
      env: { ...process.env, FORCE_COLOR: '1' }
    })
    
    const elapsed = Date.now() - startTime
    log(`\n⏱️  Validation completed in ${elapsed}ms`, 'cyan')
    process.exit(0)
    
  } catch (error) {
    const elapsed = Date.now() - startTime
    log(`\n⏱️  Validation failed after ${elapsed}ms`, 'red')
    log('\nFix the sitemap errors above and try again.', 'red')
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  main()
}

module.exports = { main }
