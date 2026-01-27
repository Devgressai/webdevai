#!/usr/bin/env node
/**
 * Release Gate: Pre-deployment validation
 * 
 * Runs all required checks before deployment:
 * 1. Build
 * 2. Lint
 * 3. Tests (if configured)
 * 4. Index governance validation
 * 5. CTA governance validation
 * 
 * Fails fast on first error.
 * 
 * Usage: npm run release:check
 */

const { execSync } = require('child_process')
const path = require('path')

const ROOT_DIR = path.join(__dirname, '..')

// Color codes for terminal output
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

function logStep(step, description) {
  log(`\n${'='.repeat(60)}`, 'cyan')
  log(`Step ${step}: ${description}`, 'blue')
  log('='.repeat(60), 'cyan')
}

function runCommand(command, description, optional = false) {
  try {
    log(`Running: ${command}`, 'cyan')
    execSync(command, {
      cwd: ROOT_DIR,
      stdio: 'inherit',
      env: { ...process.env, FORCE_COLOR: '1' }
    })
    log(`✅ ${description}`, 'green')
    return true
  } catch (error) {
    if (optional) {
      log(`⚠️  ${description} (optional) - skipped`, 'yellow')
      return true
    }
    log(`\n❌ ${description} FAILED`, 'red')
    log(`\nCommand: ${command}`, 'red')
    log(`\nFix the errors above and try again.`, 'red')
    process.exit(1)
  }
}

// Main release check
function main() {
  log('\n🚀 Release Gate: Pre-deployment Validation', 'blue')
  log('This will validate your code before deployment.\n', 'cyan')

  const checks = [
    {
      step: 1,
      command: 'npm run build',
      description: 'Build',
      optional: false
    },
    {
      step: 2,
      command: 'npm run lint',
      description: 'Lint',
      optional: false
    },
    {
      step: 3,
      command: 'node ci/validate-index-governance.js',
      description: 'Index Governance Validation',
      optional: false
    },
    {
      step: 4,
      command: 'node ci/validate-ctas.js',
      description: 'CTA Governance Validation',
      optional: false
    }
  ]

  // Run all checks in sequence (fail fast)
  for (const check of checks) {
    logStep(check.step, check.description)
    runCommand(check.command, check.description, check.optional)
  }

  // Success
  log('\n' + '='.repeat(60), 'green')
  log('✅ All release checks passed!', 'green')
  log('🚀 Ready for deployment.', 'green')
  log('='.repeat(60) + '\n', 'green')
  process.exit(0)
}

// Run if called directly
if (require.main === module) {
  main()
}

module.exports = { main }
