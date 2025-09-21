import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import * as cheerio from 'cheerio'
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
    ssl: { status: 'pass' | 'warning' | 'fail'; message: string; valid?: boolean }
    internalLinks: { status: 'pass' | 'warning' | 'fail'; message: string; count?: number; broken?: number }
    externalLinks: { status: 'pass' | 'warning' | 'fail'; message: string; count?: number; nofollow?: number }
    schema: { status: 'pass' | 'warning' | 'fail'; message: string; types?: string[] }
    robots: { status: 'pass' | 'warning' | 'fail'; message: string; hasRobots?: boolean }
    sitemap: { status: 'pass' | 'warning' | 'fail'; message: string; hasSitemap?: boolean }
    social: { status: 'pass' | 'warning' | 'fail'; message: string; ogTags?: number; twitterTags?: number }
  }
  recommendations: string[]
  generatedAt: string
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip, 10, 60000)) { // 10 requests per minute
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
      
      websiteUrl = urlObj.toString()
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 })
    }

    // Perform secure SEO audit
    const auditResult = await performSecureSEOAudit(websiteUrl)
    return NextResponse.json(auditResult)
    
  } catch (error) {
    console.error('SEO Audit Error:', error)
    return NextResponse.json({ 
      error: 'Failed to perform SEO audit',
      details: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status: 500 })
  }
}

async function performSecureSEOAudit(url: string): Promise<SEOAuditResult> {
  try {
    console.log('Performing secure SEO audit for:', url)
    
    // Secure HTTP request with timeout and proper headers
    const response = await axios.get(url, {
      timeout: 15000,
      maxRedirects: 5,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SEOAuditBot/2.0; +https://webvello.com/seo-audit)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      },
      validateStatus: (status) => status < 500 // Accept redirects and client errors
    })
    
    const $ = cheerio.load(response.data)
    
    // Analyze page content
    const title = $('title').text().trim()
    const description = $('meta[name="description"]').attr('content') || ''
    const viewport = $('meta[name="viewport"]').attr('content') || ''
    const robots = $('meta[name="robots"]').attr('content') || ''
    const canonical = $('link[rel="canonical"]').attr('href') || ''
    
    // Check for social media tags
    const ogTitle = $('meta[property="og:title"]').attr('content')
    const ogDescription = $('meta[property="og:description"]').attr('content')
    const ogImage = $('meta[property="og:image"]').attr('content')
    const twitterCard = $('meta[name="twitter:card"]').attr('content')
    const twitterTitle = $('meta[name="twitter:title"]').attr('content')
    
    // Check for structured data
    const jsonLd = $('script[type="application/ld+json"]').length
    const microdata = $('[itemscope]').length
    
    // Analyze headings
    const headings = analyzeHeadings($)
    const images = analyzeImages($)
    const links = analyzeLinks($, url)
    
    // Check for sitemap references
    const sitemapLinks = $('a[href*="sitemap"], link[href*="sitemap"]').length
    const robotsTxt = await checkRobotsTxt(url)
    
    // Perform checks
    const checks = {
      title: {
        status: (title.length > 0 && title.length <= 60 ? 'pass' : title.length === 0 ? 'fail' : 'warning') as 'pass' | 'warning' | 'fail',
        message: title.length === 0 ? 'No title tag found' : 
                 title.length > 60 ? `Title is too long (${title.length} characters)` : 'Title tag is optimal',
        value: title,
        length: title.length
      },
      description: {
        status: (description.length > 0 && description.length <= 160 ? 'pass' : 
                description.length === 0 ? 'fail' : 'warning') as 'pass' | 'warning' | 'fail',
        message: description.length === 0 ? 'No meta description found' :
                 description.length > 160 ? `Meta description is too long (${description.length} characters)` : 'Meta description is optimal',
        value: description,
        length: description.length
      },
      headings: {
        status: (headings.h1Count === 1 && headings.structure.length > 0 ? 'pass' : 
                headings.h1Count === 0 ? 'fail' : 'warning') as 'pass' | 'warning' | 'fail',
        message: headings.h1Count === 0 ? 'No H1 heading found' :
                 headings.h1Count > 1 ? 'Multiple H1 headings found' :
                 headings.structure.length === 0 ? 'Poor heading structure' : 'Good heading structure',
        count: headings.totalCount,
        structure: headings.structure
      },
      images: {
        status: (images.totalCount === 0 ? 'pass' : 
                images.altPercentage >= 90 ? 'pass' : 
                images.altPercentage >= 70 ? 'warning' : 'fail') as 'pass' | 'warning' | 'fail',
        message: images.totalCount === 0 ? 'No images found' :
                 images.altPercentage >= 90 ? `${images.altPercentage}% of images have alt text` :
                 images.altPercentage >= 70 ? `${images.altPercentage}% of images have alt text - needs improvement` :
                 `Only ${images.altPercentage}% of images have alt text`,
        altCount: images.altCount,
        totalCount: images.totalCount,
        missingAlt: images.missingAlt
      },
      mobile: {
        status: (viewport.includes('width=device-width') ? 'pass' : 'fail') as 'pass' | 'warning' | 'fail',
        message: viewport.includes('width=device-width') ? 'Mobile viewport configured correctly' : 'No mobile viewport found',
        viewport: viewport
      },
      ssl: {
        status: (url.startsWith('https://') ? 'pass' : 'fail') as 'pass' | 'warning' | 'fail',
        message: url.startsWith('https://') ? 'HTTPS enabled' : 'HTTPS not detected',
        valid: url.startsWith('https://')
      },
      internalLinks: {
        status: (links.internalCount > 0 ? 'pass' : 'warning') as 'pass' | 'warning' | 'fail',
        message: links.internalCount > 0 ? `${links.internalCount} internal links found` : 'No internal links found',
        count: links.internalCount,
        broken: links.brokenCount
      },
      externalLinks: {
        status: (links.externalCount > 0 ? 'pass' : 'warning') as 'pass' | 'warning' | 'fail',
        message: links.externalCount > 0 ? `${links.externalCount} external links found` : 'No external links found',
        count: links.externalCount,
        nofollow: links.nofollowCount
      },
      schema: {
        status: (jsonLd > 0 || microdata > 0 ? 'pass' : 'warning') as 'pass' | 'warning' | 'fail',
        message: jsonLd > 0 || microdata > 0 ? 'Structured data found' : 'No structured data found',
        types: jsonLd > 0 ? ['JSON-LD'] : microdata > 0 ? ['Microdata'] : []
      },
      robots: {
        status: (robotsTxt ? 'pass' : 'warning') as 'pass' | 'warning' | 'fail',
        message: robotsTxt ? 'Robots.txt found' : 'No robots.txt found',
        hasRobots: robotsTxt
      },
      sitemap: {
        status: (sitemapLinks > 0 ? 'pass' : 'warning') as 'pass' | 'warning' | 'fail',
        message: sitemapLinks > 0 ? 'Sitemap reference found' : 'No sitemap reference found',
        hasSitemap: sitemapLinks > 0
      },
      social: {
        status: (ogTitle && ogDescription ? 'pass' : 
                ogTitle || ogDescription ? 'warning' : 'fail') as 'pass' | 'warning' | 'fail',
        message: ogTitle && ogDescription ? 'Social media tags configured' :
                 ogTitle || ogDescription ? 'Partial social media tags' : 'No social media tags found',
        ogTags: [ogTitle, ogDescription, ogImage].filter(Boolean).length,
        twitterTags: [twitterCard, twitterTitle].filter(Boolean).length
      }
    }
    
    // Calculate score
    const passedChecks = Object.values(checks).filter(check => check.status === 'pass').length
    const totalChecks = Object.keys(checks).length
    const overallScore = Math.round((passedChecks / totalChecks) * 100)
    
    const issues = {
      critical: Object.values(checks).filter(check => check.status === 'fail').length,
      warning: Object.values(checks).filter(check => check.status === 'warning').length,
      passed: passedChecks
    }
    
    const recommendations = generateRecommendations(checks)
    
    return {
      url,
      overallScore,
      issues,
      checks,
      recommendations,
      generatedAt: new Date().toISOString()
    }
    
  } catch (error) {
    console.error('Secure audit failed:', error)
    throw new Error('Failed to analyze website')
  }
}

// Helper functions
function analyzeHeadings($: cheerio.CheerioAPI) {
  const headings: any[] = []
  let h1Count = 0
  
  $('h1, h2, h3, h4, h5, h6').each((i, el) => {
    const tag = $(el).prop('tagName')?.toLowerCase()
    const text = $(el).text().trim()
    
    if (tag === 'h1') h1Count++
    
    headings.push({
      tag,
      text: text.substring(0, 100),
      level: parseInt(tag?.replace('h', '') || '0')
    })
  })
  
  return {
    totalCount: headings.length,
    h1Count,
    structure: headings
  }
}

function analyzeImages($: cheerio.CheerioAPI) {
  const images = $('img')
  const totalCount = images.length
  const altCount = images.filter((i, el) => !!$(el).attr('alt')).length
  const missingAlt: string[] = []
  
  images.each((i, el) => {
    const src = $(el).attr('src')
    const alt = $(el).attr('alt')
    if (src && !alt) {
      missingAlt.push(src)
    }
  })
  
  return {
    totalCount,
    altCount,
    altPercentage: totalCount > 0 ? Math.round((altCount / totalCount) * 100) : 100,
    missingAlt: missingAlt.slice(0, 5) // Limit to first 5
  }
}

function analyzeLinks($: cheerio.CheerioAPI, baseUrl: string) {
  const links = $('a[href]')
  let internalCount = 0
  let externalCount = 0
  let nofollowCount = 0
  let brokenCount = 0
  
  try {
    const baseHostname = new URL(baseUrl).hostname
    
    links.each((i, el) => {
      const href = $(el).attr('href')
      const rel = $(el).attr('rel') || ''
      
      if (href) {
        if (href.startsWith('/') || href.includes(baseHostname)) {
          internalCount++
        } else if (href.startsWith('http')) {
          externalCount++
        }
        
        if (rel.includes('nofollow')) {
          nofollowCount++
        }
      }
    })
  } catch (error) {
    console.error('Error analyzing links:', error)
  }
  
  return {
    internalCount,
    externalCount,
    nofollowCount,
    brokenCount
  }
}

async function checkRobotsTxt(url: string): Promise<boolean> {
  try {
    const robotsUrl = new URL('/robots.txt', url).toString()
    const response = await axios.get(robotsUrl, { timeout: 5000 })
    return response.status === 200
  } catch {
    return false
  }
}

function generateRecommendations(checks: any): string[] {
  const recommendations: string[] = []
  
  if (checks.title.status !== 'pass') {
    recommendations.push('Add a compelling title tag between 30-60 characters')
  }
  if (checks.description.status !== 'pass') {
    recommendations.push('Create a meta description between 120-160 characters')
  }
  if (checks.headings.status !== 'pass') {
    recommendations.push('Improve heading structure with proper H1 and hierarchical headings')
  }
  if (checks.images.status !== 'pass') {
    recommendations.push('Add alt text to all images for better accessibility and SEO')
  }
  if (checks.mobile.status !== 'pass') {
    recommendations.push('Add mobile viewport meta tag for responsive design')
  }
  if (checks.ssl.status !== 'pass') {
    recommendations.push('Implement HTTPS for better security and SEO rankings')
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
  if (checks.social.status !== 'pass') {
    recommendations.push('Add Open Graph and Twitter Card meta tags for social media sharing')
  }
  
  return recommendations
}
