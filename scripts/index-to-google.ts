#!/usr/bin/env ts-node
/**
 * Index Pages to Google Indexing API
 * 
 * This script submits your most important pages to Google for fast indexing
 * 
 * Usage:
 *   npm run index-pages           # Index priority pages
 *   npm run index-pages --all     # Index ALL pages from sitemap
 *   npm run index-pages --new     # Index only new content
 */

import { google } from 'googleapis'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

const BASE_URL = process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL || 'https://www.webvello.com'

// Initialize Google Auth Client
function getGoogleAuthClient() {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
    const client = new google.auth.JWT()
    client.email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    client.key = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    client.scopes = ['https://www.googleapis.com/auth/indexing']
    return client
  }

  throw new Error('Google API credentials not configured. Please set environment variables.')
}

// Priority pages to index first
const PRIORITY_PAGES = [
  // Homepage
  '/',
  
  // Key service pages
  '/services/seo',
  '/services/local-seo',
  '/services/ai-seo',
  '/services/web-development',
  '/services/website-design',
  '/services/ui-ux-design',
  '/services/digital-marketing',
  
  // New service pages (just added)
  '/services/seo-consulting-charlotte',
  '/services/web-design-albuquerque',
  '/services/seo-baltimore',
  '/services/web-development-las-vegas',
  '/services/web-application-development-chicago',
  '/services/website-design-louisville',
  '/services/web-design-columbus',
  '/services/website-design-oklahoma-city',
  '/services/seo-company-mesa',
  '/services/web-design-oklahoma-city',
  
  // Important pages
  '/contact',
  '/pricing',
  '/about',
  '/case-studies',
  '/seo-audit',
  
  // Top city pages
  '/new-york-ny',
  '/los-angeles-ca',
  '/chicago-il',
  '/houston-tx',
  '/phoenix-az',
  '/philadelphia-pa',
  '/san-antonio-tx',
  '/san-diego-ca',
  '/dallas-tx',
  '/san-francisco-ca',
  
  // New blog posts (just added)
  '/blog/louisville-conversion-rate-optimization-services',
  '/blog/website-design-detroit',
  '/blog/el-paso-conversion-rate-optimization-services',
  '/blog/oklahoma-city-conversion-rate-optimization-company',
  '/blog/detroit-conversion-rate-optimization-services',
  '/blog/oklahoma-city-conversion-rate-optimization-services',
  '/blog/logistics-web-design-california',
  '/blog/milwaukee-content-development',
  '/blog/milwaukee-auto-repair-shop-website-design',
  '/blog/web-developer-fresno',
  '/blog/seattle-software-development-guide',
  '/blog/healthcare-web-design-companies-guide',
  '/blog/arizona-organic-seo-growth-strategy',
  '/blog/education-companies-el-paso-guide',
  '/blog/freight-forwarder-web-design-guide',
  '/blog/government-companies-el-paso-guide',
  '/blog/seo-partnership-milwaukee-guide',
  '/blog/seo-service-complete-guide',
]

// Notify Google about a single URL
async function notifyGoogle(url: string, auth: any): Promise<{ success: boolean; error?: string }> {
  try {
    const indexing = google.indexing({ version: 'v3', auth })
    
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: 'URL_UPDATED',
      },
    })

    console.log(`✅ Indexed: ${url}`)
    return { success: true }
  } catch (error: any) {
    const errorMsg = error.message || 'Unknown error'
    console.error(`❌ Failed: ${url} - ${errorMsg}`)
    return { success: false, error: errorMsg }
  }
}

// Add delay between requests
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Main indexing function
async function indexPages(mode: 'priority' | 'all' | 'new' = 'priority') {
  console.log('🚀 Starting Google Indexing API submission...\n')
  console.log(`Mode: ${mode.toUpperCase()}`)
  console.log(`Base URL: ${BASE_URL}\n`)

  try {
    const auth = getGoogleAuthClient()
    
    let urlsToIndex: string[] = []
    
    if (mode === 'priority' || mode === 'new') {
      urlsToIndex = PRIORITY_PAGES.map(path => `${BASE_URL}${path}`)
    } else if (mode === 'all') {
      // For 'all' mode, we'll just use priority pages for now
      // You can extend this to fetch from sitemap
      urlsToIndex = PRIORITY_PAGES.map(path => `${BASE_URL}${path}`)
      console.log('⚠️  "all" mode not yet implemented, using priority pages\n')
    }

    console.log(`📊 Total URLs to index: ${urlsToIndex.length}\n`)
    console.log('━'.repeat(60))

    const results = {
      total: urlsToIndex.length,
      successful: 0,
      failed: 0,
      errors: [] as string[]
    }

    // Process URLs with delay to respect rate limits
    for (let i = 0; i < urlsToIndex.length; i++) {
      const url = urlsToIndex[i]
      const progress = `[${i + 1}/${urlsToIndex.length}]`
      
      console.log(`${progress} Processing: ${url}`)
      
      const result = await notifyGoogle(url, auth)
      
      if (result.success) {
        results.successful++
      } else {
        results.failed++
        results.errors.push(`${url}: ${result.error}`)
      }

      // Add delay between requests (Google recommends 200 requests per minute max)
      // 300ms = ~200 requests per minute
      if (i < urlsToIndex.length - 1) {
        await delay(300)
      }
    }

    console.log('\n' + '━'.repeat(60))
    console.log('\n📊 Indexing Complete!\n')
    console.log(`✅ Successful: ${results.successful}`)
    console.log(`❌ Failed: ${results.failed}`)
    console.log(`📈 Success Rate: ${((results.successful / results.total) * 100).toFixed(1)}%`)

    if (results.errors.length > 0) {
      console.log('\n❌ Errors:')
      results.errors.forEach(error => console.log(`   - ${error}`))
    }

    console.log('\n✨ Done! Your pages have been submitted to Google for indexing.')
    console.log('⏱️  It may take 24-48 hours for pages to appear in search results.\n')

    return results

  } catch (error: any) {
    console.error('❌ Fatal error:', error.message)
    process.exit(1)
  }
}

// Parse command line arguments
const args = process.argv.slice(2)
const mode = args.includes('--all') ? 'all' : args.includes('--new') ? 'new' : 'priority'

// Run the indexing
indexPages(mode)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Unexpected error:', error)
    process.exit(1)
  })

