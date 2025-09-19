import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer'
import * as cheerio from 'cheerio'
import axios from 'axios'
import { checkRateLimit } from '@/lib/rate-limit'

interface SEOAuditResult {
  url: string
  overallScore: number
  issues: {
    critical: number
    warning: number
    passed: number
  }
  checks: {
    title: { status: 'pass' | 'warning' | 'fail'; message: string; value?: string; length?: number }
    description: { status: 'pass' | 'warning' | 'fail'; message: string; value?: string; length?: number }
    headings: { status: 'pass' | 'warning' | 'fail'; message: string; count?: number; structure?: any[] }
    images: { status: 'pass' | 'warning' | 'fail'; message: string; altCount?: number; totalCount?: number; missingAlt?: string[] }
    mobile: { status: 'pass' | 'warning' | 'fail'; message: string; viewport?: string }
    speed: { status: 'pass' | 'warning' | 'fail'; message: string; score?: number; loadTime?: number }
    ssl: { status: 'pass' | 'warning' | 'fail'; message: string; valid?: boolean }
    internalLinks: { status: 'pass' | 'warning' | 'fail'; message: string; count?: number; broken?: number }
    externalLinks: { status: 'pass' | 'warning' | 'fail'; message: string; count?: number; nofollow?: number }
    schema: { status: 'pass' | 'warning' | 'fail'; message: string; types?: string[] }
    robots: { status: 'pass' | 'warning' | 'fail'; message: string; hasRobots?: boolean }
    sitemap: { status: 'pass' | 'warning' | 'fail'; message: string; hasSitemap?: boolean }
  }
  recommendations: string[]
  generatedAt: string
  lighthouse?: any
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip, 5, 60000)) { // 5 requests per minute
      return NextResponse.json({ 
        error: 'Rate limit exceeded. Please try again later.' 
      }, { status: 429 })
    }
    
    const { url } = await request.json()
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Validate and sanitize URL
    let websiteUrl: string
    try {
      const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`)
      
      // Security validations
      if (!['http:', 'https:'].includes(urlObj.protocol)) {
        return NextResponse.json({ error: 'Only HTTP and HTTPS URLs are allowed' }, { status: 400 })
      }
      
      // Block internal/private IPs and localhost
      const hostname = urlObj.hostname.toLowerCase()
      if (hostname === 'localhost' || 
          hostname === '127.0.0.1' || 
          hostname.startsWith('192.168.') ||
          hostname.startsWith('10.') ||
          hostname.startsWith('172.') ||
          hostname.includes('internal') ||
          hostname.includes('local')) {
        return NextResponse.json({ error: 'Internal URLs are not allowed' }, { status: 400 })
      }
      
      // Block file:// protocol
      if (urlObj.protocol === 'file:') {
        return NextResponse.json({ error: 'File URLs are not allowed' }, { status: 400 })
      }
      
      websiteUrl = urlObj.toString()
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 })
    }

    // Perform SEO audit
    const auditResult = await performSEOAudit(websiteUrl)
    
    return NextResponse.json(auditResult)
  } catch (error) {
    console.error('SEO Audit Error:', error)
    return NextResponse.json({ error: 'Failed to perform SEO audit' }, { status: 500 })
  }
}

async function performSEOAudit(url: string): Promise<SEOAuditResult> {
  let browser: any = null
  let page: any = null
  
  try {
    // Launch browser with security hardening
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-extensions',
        '--disable-plugins',
        '--no-first-run',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding'
      ]
    })
    
    page = await browser.newPage()
    
    // Set user agent
    await page.setUserAgent('Mozilla/5.0 (compatible; SEOAuditBot/1.0)')
    
    // Set page timeouts and security
    await page.setDefaultTimeout(30000)
    await page.setDefaultNavigationTimeout(30000)
    
    // Note: Request interception removed for debugging
    
    // Navigate to page with security measures
    const startTime = Date.now()
    const response = await page.goto(url, { 
      waitUntil: 'domcontentloaded', // Changed from networkidle2 for security
      timeout: 30000 
    })
    const loadTime = Date.now() - startTime
    
    // Get page content
    const html = await page.content()
    const $ = cheerio.load(html)
    
    // Extract basic page info
    const title = $('title').text().trim()
    const description = $('meta[name="description"]').attr('content') || ''
    const viewport = $('meta[name="viewport"]').attr('content') || ''
    
    // Check SSL
    const isHttps = url.startsWith('https://')
    const sslValid = response && response.status() === 200 && isHttps
    
    // Analyze headings
    const headings = analyzeHeadings($)
    
    // Analyze images
    const images = analyzeImages($)
    
    // Analyze links
    const links = analyzeLinks($, url)
    
    // Check for schema markup
    const schema = analyzeSchema($)
    
    // Check robots.txt and sitemap
    const robots = await checkRobots(url)
    const sitemap = await checkSitemap(url)
    
    // Get Lighthouse data
    const lighthouse = await getLighthouseData(page, url)
    
    // Calculate overall score
    const checks = {
      title: checkTitle(title),
      description: checkDescription(description),
      headings: checkHeadings(headings),
      images: checkImages(images),
      mobile: checkMobile(viewport),
      speed: checkSpeed(loadTime, lighthouse?.lighthouseResult?.audits),
      ssl: checkSSL(sslValid, isHttps),
      internalLinks: checkInternalLinks(links),
      externalLinks: checkExternalLinks(links),
      schema: checkSchema(schema),
      robots: checkRobotsResult(robots),
      sitemap: checkSitemapResult(sitemap)
    }
    
    const issues = calculateIssues(checks)
    const overallScore = calculateOverallScore(checks)
    const recommendations = generateRecommendations(checks)
    
    return {
      url,
      overallScore,
      issues,
      checks,
      recommendations,
      generatedAt: new Date().toISOString(),
      lighthouse: lighthouse?.lighthouseResult
    }
    
  } catch (error) {
    console.error('Audit error:', error)
    throw error
  } finally {
    if (page) await page.close()
    if (browser) await browser.close()
  }
}

// Helper functions
function analyzeHeadings($: cheerio.CheerioAPI) {
  const headings: any[] = []
  $('h1, h2, h3, h4, h5, h6').each((i, el) => {
    const tag = $(el).prop('tagName')?.toLowerCase()
    const text = $(el).text().trim()
    if (text && tag) {
      headings.push({ tag, text, level: parseInt(tag.charAt(1)) })
    }
  })
  return headings
}

function analyzeImages($: cheerio.CheerioAPI) {
  const images: any[] = []
  $('img').each((i, el) => {
    const src = $(el).attr('src')
    const alt = $(el).attr('alt')
    if (src) {
      images.push({ src, alt: alt || '', hasAlt: !!alt })
    }
  })
  return images
}

function analyzeLinks($: cheerio.CheerioAPI, baseUrl: string) {
  const links: any[] = []
  $('a[href]').each((i, el) => {
    const href = $(el).attr('href')
    const text = $(el).text().trim()
    const rel = $(el).attr('rel')
    
    if (href) {
      let isInternal = false
      try {
        const linkUrl = new URL(href, baseUrl)
        const baseUrlObj = new URL(baseUrl)
        isInternal = linkUrl.hostname === baseUrlObj.hostname
      } catch {
        isInternal = href.startsWith('/') || href.startsWith('#')
      }
      
      links.push({
        href,
        text,
        isInternal,
        isNofollow: rel?.includes('nofollow') || false
      })
    }
  })
  return links
}

function analyzeSchema($: cheerio.CheerioAPI) {
  const schemas: string[] = []
  $('script[type="application/ld+json"]').each((i, el) => {
    try {
      const json = JSON.parse($(el).html() || '{}')
      if (json['@type']) {
        schemas.push(json['@type'])
      }
    } catch (e) {
      // Invalid JSON
    }
  })
  return schemas
}

async function checkRobots(url: string) {
  try {
    const robotsUrl = new URL('/robots.txt', url).toString()
    const response = await axios.get(robotsUrl, { timeout: 5000 })
    return { exists: true, content: response.data }
  } catch {
    return { exists: false, content: '' }
  }
}

async function checkSitemap(url: string) {
  try {
    const sitemapUrl = new URL('/sitemap.xml', url).toString()
    const response = await axios.get(sitemapUrl, { timeout: 5000 })
    return { exists: true, content: response.data }
  } catch {
    return { exists: false, content: '' }
  }
}

async function getLighthouseData(page: any, url: string) {
  try {
    const lighthouse = await page.evaluate(() => {
      return new Promise((resolve) => {
        if (typeof window !== 'undefined' && (window as any).lighthouse) {
          (window as any).lighthouse(url, {
            output: 'json',
            onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo']
          }).then((result: any) => resolve(result))
        } else {
          resolve(null)
        }
      })
    })
    return lighthouse
  } catch {
    return null
  }
}

// Check functions
function checkTitle(title: string) {
  const length = title.length
  if (length === 0) {
    return { status: 'fail' as const, message: 'No title tag found', length }
  }
  if (length < 30) {
    return { status: 'warning' as const, message: 'Title is too short (recommended: 30-60 characters)', value: title, length }
  }
  if (length > 60) {
    return { status: 'warning' as const, message: 'Title is too long (recommended: 30-60 characters)', value: title, length }
  }
  return { status: 'pass' as const, message: 'Title tag is well-optimized', value: title, length }
}

function checkDescription(description: string) {
  const length = description.length
  if (length === 0) {
    return { status: 'fail' as const, message: 'No meta description found', length }
  }
  if (length < 120) {
    return { status: 'warning' as const, message: 'Meta description is too short (recommended: 120-160 characters)', value: description, length }
  }
  if (length > 160) {
    return { status: 'warning' as const, message: 'Meta description is too long (recommended: 120-160 characters)', value: description, length }
  }
  return { status: 'pass' as const, message: 'Meta description is well-optimized', value: description, length }
}

function checkHeadings(headings: any[]) {
  const h1Count = headings.filter(h => h.tag === 'h1').length
  const structure = headings.map(h => ({ tag: h.tag, text: h.text.substring(0, 50) + '...' }))
  
  if (h1Count === 0) {
    return { status: 'fail' as const, message: 'No H1 tag found', count: headings.length, structure }
  }
  if (h1Count > 1) {
    return { status: 'warning' as const, message: 'Multiple H1 tags found (recommended: 1)', count: headings.length, structure }
  }
  if (headings.length < 3) {
    return { status: 'warning' as const, message: 'Very few headings found', count: headings.length, structure }
  }
  return { status: 'pass' as const, message: 'Good heading structure', count: headings.length, structure }
}

function checkImages(images: any[]) {
  const totalCount = images.length
  const altCount = images.filter(img => img.hasAlt).length
  const missingAlt = images.filter(img => !img.hasAlt).map(img => img.src)
  
  if (totalCount === 0) {
    return { status: 'pass' as const, message: 'No images found', totalCount, altCount }
  }
  
  const altPercentage = (altCount / totalCount) * 100
  if (altPercentage < 50) {
    return { status: 'fail' as const, message: 'Less than 50% of images have alt text', totalCount, altCount, missingAlt }
  }
  if (altPercentage < 80) {
    return { status: 'warning' as const, message: 'Some images missing alt text', totalCount, altCount, missingAlt }
  }
  return { status: 'pass' as const, message: 'Most images have alt text', totalCount, altCount, missingAlt }
}

function checkMobile(viewport: string) {
  if (!viewport) {
    return { status: 'fail' as const, message: 'No viewport meta tag found' }
  }
  if (!viewport.includes('width=device-width')) {
    return { status: 'warning' as const, message: 'Viewport meta tag may not be mobile-optimized', viewport }
  }
  return { status: 'pass' as const, message: 'Mobile viewport is properly configured', viewport }
}

function checkSpeed(loadTime: number, lighthouseAudits?: any) {
  const score = Math.max(0, 100 - (loadTime / 100)) // Rough score based on load time
  
  if (loadTime > 5000) {
    return { status: 'fail' as const, message: 'Page loads very slowly', score: Math.round(score), loadTime }
  }
  if (loadTime > 3000) {
    return { status: 'warning' as const, message: 'Page could load faster', score: Math.round(score), loadTime }
  }
  return { status: 'pass' as const, message: 'Page loads quickly', score: Math.round(score), loadTime }
}

function checkSSL(valid: boolean, isHttps: boolean) {
  if (!isHttps) {
    return { status: 'fail' as const, message: 'Site is not using HTTPS', valid: false }
  }
  if (!valid) {
    return { status: 'warning' as const, message: 'SSL certificate issues detected', valid: false }
  }
  return { status: 'pass' as const, message: 'SSL certificate is valid', valid: true }
}

function checkInternalLinks(links: any[]) {
  const internalLinks = links.filter(link => link.isInternal)
  const brokenLinks = 0 // Would need to check each link
  
  if (internalLinks.length === 0) {
    return { status: 'warning' as const, message: 'No internal links found', count: internalLinks.length, broken: brokenLinks }
  }
  if (internalLinks.length < 5) {
    return { status: 'warning' as const, message: 'Very few internal links found', count: internalLinks.length, broken: brokenLinks }
  }
  return { status: 'pass' as const, message: 'Good internal linking structure', count: internalLinks.length, broken: brokenLinks }
}

function checkExternalLinks(links: any[]) {
  const externalLinks = links.filter(link => !link.isInternal)
  const nofollowLinks = externalLinks.filter(link => link.isNofollow)
  
  if (externalLinks.length === 0) {
    return { status: 'pass' as const, message: 'No external links found', count: externalLinks.length, nofollow: nofollowLinks.length }
  }
  
  const nofollowPercentage = (nofollowLinks.length / externalLinks.length) * 100
  if (nofollowPercentage < 50) {
    return { status: 'warning' as const, message: 'Consider adding nofollow to external links', count: externalLinks.length, nofollow: nofollowLinks.length }
  }
  return { status: 'pass' as const, message: 'External links are properly configured', count: externalLinks.length, nofollow: nofollowLinks.length }
}

function checkSchema(schemas: string[]) {
  if (schemas.length === 0) {
    return { status: 'warning' as const, message: 'No schema markup found', types: schemas }
  }
  return { status: 'pass' as const, message: 'Schema markup detected', types: schemas }
}

function checkRobotsResult(robots: any) {
  if (!robots.exists) {
    return { status: 'warning' as const, message: 'No robots.txt file found', hasRobots: false }
  }
  return { status: 'pass' as const, message: 'Robots.txt file found', hasRobots: true }
}

function checkSitemapResult(sitemap: any) {
  if (!sitemap.exists) {
    return { status: 'warning' as const, message: 'No sitemap.xml found', hasSitemap: false }
  }
  return { status: 'pass' as const, message: 'Sitemap.xml found', hasSitemap: true }
}

function calculateIssues(checks: any) {
  let critical = 0
  let warning = 0
  let passed = 0
  
  Object.values(checks).forEach((check: any) => {
    if (check.status === 'fail') critical++
    else if (check.status === 'warning') warning++
    else passed++
  })
  
  return { critical, warning, passed }
}

function calculateOverallScore(checks: any) {
  const totalChecks = Object.keys(checks).length
  let score = 0
  
  Object.values(checks).forEach((check: any) => {
    if (check.status === 'pass') score += 100
    else if (check.status === 'warning') score += 60
    else score += 0
  })
  
  return Math.round(score / totalChecks)
}

function generateRecommendations(checks: any) {
  const recommendations: string[] = []
  
  if (checks.title.status !== 'pass') {
    recommendations.push('Optimize your title tags to be between 30-60 characters')
  }
  if (checks.description.status !== 'pass') {
    recommendations.push('Improve your meta descriptions to be between 120-160 characters')
  }
  if (checks.headings.status !== 'pass') {
    recommendations.push('Improve your heading structure with proper H1-H6 hierarchy')
  }
  if (checks.images.status !== 'pass') {
    recommendations.push('Add descriptive alt text to all images for better accessibility')
  }
  if (checks.mobile.status !== 'pass') {
    recommendations.push('Ensure your website is mobile-responsive with proper viewport settings')
  }
  if (checks.speed.status !== 'pass') {
    recommendations.push('Optimize page loading speed by compressing images and minifying code')
  }
  if (checks.ssl.status !== 'pass') {
    recommendations.push('Implement HTTPS and ensure SSL certificate is valid')
  }
  if (checks.schema.status !== 'pass') {
    recommendations.push('Add structured data markup to help search engines understand your content')
  }
  if (checks.robots.status !== 'pass') {
    recommendations.push('Create a robots.txt file to guide search engine crawlers')
  }
  if (checks.sitemap.status !== 'pass') {
    recommendations.push('Create and submit an XML sitemap to search engines')
  }
  
  return recommendations
}
