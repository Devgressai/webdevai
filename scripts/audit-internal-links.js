#!/usr/bin/env node

/**
 * Internal Link Audit Script
 * Scans the website for broken internal links and provides a detailed report
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const BASE_URL = 'https://www.webvello.com';
const OUTPUT_FILE = 'internal-link-audit.json';
const EXCLUDED_PATHS = [
  '/api/',
  '/_next/',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml'
];

// Pages to check (core pages that should exist)
const CORE_PAGES = [
  '',
  '/about',
  '/contact',
  '/pricing',
  '/resources',
  '/case-studies',
  '/industries',
  '/locations',
  '/solutions',
  '/blog',
  '/seo-audit',
  '/website-speed-test',
  '/enhanced-demo'
];

// Top services to check
const TOP_SERVICES = [
  'website-design',
  'web-development',
  'seo',
  'ai-consulting',
  'digital-marketing',
  'ecommerce-design',
  'ui-ux-design',
  'local-seo',
  'website-redesign',
  'ai-seo'
];

// Top cities to check
const TOP_CITIES = [
  'new-york-ny',
  'los-angeles-ca',
  'chicago-il',
  'houston-tx',
  'phoenix-az',
  'philadelphia-pa',
  'san-antonio-tx',
  'san-diego-ca',
  'dallas-tx',
  'san-jose-ca',
  'austin-tx',
  'jacksonville-fl',
  'fort-worth-tx',
  'columbus-oh',
  'charlotte-nc',
  'san-francisco-ca',
  'seattle-wa',
  'denver-co',
  'washington-dc',
  'boston-ma'
];

// Solutions pages
const SOLUTIONS_PAGES = [
  'agency-results',
  'declining-traffic',
  'google-visibility',
  'website-conversion',
  'website-leads',
  'website-roi'
];

// Blog pages
const BLOG_PAGES = [
  'essential-website-features-2024'
];

class LinkAuditor {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      baseUrl: BASE_URL,
      totalPagesChecked: 0,
      brokenLinks: [],
      workingLinks: [],
      redirects: [],
      errors: [],
      summary: {
        totalBroken: 0,
        totalWorking: 0,
        totalRedirects: 0,
        totalErrors: 0
      }
    };
  }

  // Generate all URLs to check
  generateUrlsToCheck() {
    const urls = new Set();
    
    // Core pages
    CORE_PAGES.forEach(page => {
      urls.add(`${BASE_URL}${page}`);
    });
    
    // Service pages
    TOP_SERVICES.forEach(service => {
      urls.add(`${BASE_URL}/services/${service}`);
    });
    
    // City pages
    TOP_CITIES.forEach(city => {
      urls.add(`${BASE_URL}/${city}`);
    });
    
    // City-service combinations (top 5 services per city)
    TOP_CITIES.forEach(city => {
      TOP_SERVICES.slice(0, 5).forEach(service => {
        urls.add(`${BASE_URL}/${city}/${service}`);
      });
    });
    
    // Solutions pages
    SOLUTIONS_PAGES.forEach(solution => {
      urls.add(`${BASE_URL}/solutions/${solution}`);
    });
    
    // Blog pages
    BLOG_PAGES.forEach(post => {
      urls.add(`${BASE_URL}/blog/${post}`);
    });
    
    return Array.from(urls);
  }

  // Check if a URL is accessible
  async checkUrl(url) {
    try {
      const response = await fetch(url, {
        method: 'HEAD',
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; LinkAuditor/1.0)'
        }
      });
      
      return {
        url,
        status: response.status,
        statusText: response.statusText,
        redirected: response.redirected,
        finalUrl: response.url,
        headers: Object.fromEntries(response.headers.entries())
      };
    } catch (error) {
      return {
        url,
        status: 'ERROR',
        statusText: error.message,
        error: true
      };
    }
  }

  // Check all URLs
  async auditLinks() {
    console.log('🔍 Starting internal link audit...');
    
    const urls = this.generateUrlsToCheck();
    this.results.totalPagesChecked = urls.length;
    
    console.log(`📊 Checking ${urls.length} URLs...`);
    
    // Process URLs in batches to avoid overwhelming the server
    const batchSize = 10;
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      console.log(`📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(urls.length / batchSize)}`);
      
      const promises = batch.map(url => this.checkUrl(url));
      const results = await Promise.all(promises);
      
      results.forEach(result => {
        this.processResult(result);
      });
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    this.generateSummary();
    this.saveResults();
    this.printReport();
  }

  // Process individual URL result
  processResult(result) {
    if (result.error) {
      this.results.errors.push(result);
      this.results.summary.totalErrors++;
    } else if (result.status >= 200 && result.status < 300) {
      this.results.workingLinks.push(result);
      this.results.summary.totalWorking++;
    } else if (result.status >= 300 && result.status < 400) {
      this.results.redirects.push(result);
      this.results.summary.totalRedirects++;
    } else {
      this.results.brokenLinks.push(result);
      this.results.summary.totalBroken++;
    }
  }

  // Generate summary statistics
  generateSummary() {
    const { totalBroken, totalWorking, totalRedirects, totalErrors } = this.results.summary;
    const total = totalBroken + totalWorking + totalRedirects + totalErrors;
    
    this.results.summary = {
      totalBroken,
      totalWorking,
      totalRedirects,
      totalErrors,
      totalChecked: total,
      successRate: total > 0 ? ((totalWorking / total) * 100).toFixed(2) : 0
    };
  }

  // Save results to file
  saveResults() {
    const outputPath = path.join(process.cwd(), OUTPUT_FILE);
    fs.writeFileSync(outputPath, JSON.stringify(this.results, null, 2));
    console.log(`💾 Results saved to ${outputPath}`);
  }

  // Print audit report
  printReport() {
    console.log('\n📋 INTERNAL LINK AUDIT REPORT');
    console.log('================================');
    console.log(`🕐 Timestamp: ${this.results.timestamp}`);
    console.log(`🌐 Base URL: ${this.results.baseUrl}`);
    console.log(`📊 Total Pages Checked: ${this.results.totalPagesChecked}`);
    console.log('');
    
    const { totalBroken, totalWorking, totalRedirects, totalErrors, successRate } = this.results.summary;
    
    console.log('📈 SUMMARY:');
    console.log(`✅ Working Links: ${totalWorking}`);
    console.log(`🔄 Redirects: ${totalRedirects}`);
    console.log(`❌ Broken Links: ${totalBroken}`);
    console.log(`⚠️  Errors: ${totalErrors}`);
    console.log(`📊 Success Rate: ${successRate}%`);
    console.log('');
    
    if (totalBroken > 0) {
      console.log('🚨 BROKEN LINKS:');
      this.results.brokenLinks.forEach(link => {
        console.log(`   ${link.status} - ${link.url}`);
        if (link.statusText) {
          console.log(`      ${link.statusText}`);
        }
      });
      console.log('');
    }
    
    if (totalRedirects > 0) {
      console.log('🔄 REDIRECTS:');
      this.results.redirects.forEach(link => {
        console.log(`   ${link.status} - ${link.url}`);
        if (link.finalUrl && link.finalUrl !== link.url) {
          console.log(`      → ${link.finalUrl}`);
        }
      });
      console.log('');
    }
    
    if (totalErrors > 0) {
      console.log('⚠️  ERRORS:');
      this.results.errors.forEach(link => {
        console.log(`   ERROR - ${link.url}`);
        console.log(`      ${link.statusText}`);
      });
      console.log('');
    }
    
    console.log('🎯 RECOMMENDATIONS:');
    if (totalBroken > 0) {
      console.log('   • Fix broken links by updating URLs or creating redirects');
      console.log('   • Check for typos in internal links');
      console.log('   • Ensure all referenced pages exist');
    }
    if (totalRedirects > 0) {
      console.log('   • Consider updating internal links to point directly to final URLs');
      console.log('   • Check if redirects are necessary or if URLs can be updated');
    }
    if (totalErrors > 0) {
      console.log('   • Check server configuration and DNS settings');
      console.log('   • Verify SSL certificates and server availability');
    }
    console.log('   • Run this audit regularly to catch new issues early');
    console.log('');
  }
}

// Main execution
async function main() {
  console.log('🚀 Web Vello Internal Link Audit Tool');
  console.log('=====================================\n');
  
  const auditor = new LinkAuditor();
  await auditor.auditLinks();
  
  console.log('✅ Audit completed!');
}

// Run the audit
if (require.main === module) {
  main().catch(console.error);
}

module.exports = LinkAuditor;
