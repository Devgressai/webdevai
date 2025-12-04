#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const appDir = path.join(rootDir, 'app');

// Track all found links and pages
const foundLinks = new Set();
const existingPages = new Set();
const brokenLinks = [];

// Get all existing pages
function scanPages(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);
    
    if (entry.isDirectory()) {
      // Check for page.tsx or page.ts
      const pageFiles = ['page.tsx', 'page.ts'];
      for (const pageFile of pageFiles) {
        const pagePath = path.join(fullPath, pageFile);
        if (fs.existsSync(pagePath)) {
          const url = relativePath === '' ? '/' : `/${relativePath}`;
          existingPages.add(url);
          existingPages.add(`${url}/`); // Also track with trailing slash
        }
      }
      scanPages(fullPath, relativePath);
    }
  }
}

// Extract links from file content
function extractLinks(filePath, content) {
  const links = [];
  
  // Match href="..." or href='...'
  const hrefPattern = /href=["']([^"']+)["']/g;
  let match;
  
  while ((match = hrefPattern.exec(content)) !== null) {
    const link = match[1];
    
    // Skip external links, anchors, mailto, tel, etc.
    if (
      link.startsWith('http://') ||
      link.startsWith('https://') ||
      link.startsWith('#') ||
      link.startsWith('mailto:') ||
      link.startsWith('tel:') ||
      link.startsWith('javascript:') ||
      link.startsWith('data:')
    ) {
      continue;
    }
    
    // Normalize the link
    let normalizedLink = link;
    if (normalizedLink.startsWith('/')) {
      // Remove query strings and hashes
      normalizedLink = normalizedLink.split('?')[0].split('#')[0];
      // Remove trailing slash for consistency
      if (normalizedLink !== '/' && normalizedLink.endsWith('/')) {
        normalizedLink = normalizedLink.slice(0, -1);
      }
      
      links.push({
        file: filePath,
        link: normalizedLink,
        original: link
      });
    }
  }
  
  return links;
}

// Scan all files
function scanFiles(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);
    
    if (entry.isDirectory()) {
      // Skip node_modules and other non-app directories
      if (entry.name === 'node_modules' || entry.name === '.next' || entry.name.startsWith('.')) {
        continue;
      }
      scanFiles(fullPath, relativePath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.jsx') || entry.name.endsWith('.js')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const links = extractLinks(fullPath, content);
        links.forEach(link => foundLinks.add(link));
      } catch (err) {
        // Skip files that can't be read
      }
    }
  }
}

// Check if a link is broken
function isLinkBroken(link) {
  // Check if page exists
  if (existingPages.has(link.link)) {
    return false;
  }
  
  // Check for dynamic routes (contain [param])
  if (link.link.includes('[') || link.link.includes(']')) {
    return false; // Dynamic routes are handled at runtime
  }
  
  // Check common redirects (we'll verify these exist in next.config.js)
  const commonRedirects = [
    '/portfolio',
    '/privacy',
    '/seo-audit',
    '/pricing',
    '/contact',
    '/services',
    '/blog',
    '/case-studies',
    '/industries',
    '/solutions',
    '/locations'
  ];
  
  // If it's a common page, it might be a redirect or should exist
  const isCommonPage = commonRedirects.some(redirect => link.link.startsWith(redirect));
  
  // Check if it's a service page
  if (link.link.startsWith('/services/')) {
    const serviceSlug = link.link.replace('/services/', '');
    // Check if service page exists
    const servicePagePath = path.join(rootDir, 'app', 'services', serviceSlug, 'page.tsx');
    if (!fs.existsSync(servicePagePath)) {
      return true; // Service page doesn't exist
    }
  }
  
  // Check if it's a solution page
  if (link.link.startsWith('/solutions/')) {
    const solutionSlug = link.link.replace('/solutions/', '');
    const solutionPagePath = path.join(rootDir, 'app', 'solutions', solutionSlug, 'page.tsx');
    if (!fs.existsSync(solutionPagePath)) {
      return true; // Solution page doesn't exist
    }
  }
  
  // Check if it's a blog post
  if (link.link.startsWith('/blog/')) {
    const blogSlug = link.link.replace('/blog/', '');
    const blogPagePath = path.join(rootDir, 'app', 'blog', blogSlug, 'page.tsx');
    if (!fs.existsSync(blogPagePath)) {
      return true; // Blog post doesn't exist
    }
  }
  
  // Check if it's a city page (dynamic route, but we can check the pattern)
  if (link.link.match(/^\/[a-z-]+-[a-z]{2}$/)) {
    return false; // City pages are dynamic routes
  }
  
  // For other links, check if a page exists
  if (link.link === '/') {
    return false; // Home page always exists
  }
  
  // Try to find the page
  const linkPath = link.link.startsWith('/') ? link.link.slice(1) : link.link;
  const possiblePaths = [
    path.join(rootDir, 'app', linkPath, 'page.tsx'),
    path.join(rootDir, 'app', linkPath, 'page.ts'),
    path.join(rootDir, 'app', `${linkPath}.tsx`),
    path.join(rootDir, 'app', `${linkPath}.ts`)
  ];
  
  const pageExists = possiblePaths.some(p => fs.existsSync(p));
  
  if (!pageExists && !isCommonPage) {
    return true;
  }
  
  return false;
}

// Main execution
console.log('🔍 Scanning for broken links...\n');

// First, scan all existing pages
console.log('📄 Scanning existing pages...');
scanPages(appDir);
console.log(`   Found ${existingPages.size} existing pages\n`);

// Then, scan all files for links
console.log('🔗 Scanning files for links...');
scanFiles(appDir);
console.log(`   Found ${foundLinks.size} unique links\n`);

// Check for broken links
console.log('❌ Checking for broken links...\n');

const linkArray = Array.from(foundLinks);
const checkedLinks = new Set();

for (const linkObj of linkArray) {
  const linkKey = linkObj.link;
  
  // Skip if we've already checked this link
  if (checkedLinks.has(linkKey)) {
    continue;
  }
  checkedLinks.add(linkKey);
  
  if (isLinkBroken(linkObj)) {
    brokenLinks.push(linkObj);
  }
}

// Report results
if (brokenLinks.length === 0) {
  console.log('✅ No broken links found!');
} else {
  console.log(`❌ Found ${brokenLinks.length} potentially broken links:\n`);
  
  // Group by file
  const brokenByFile = {};
  brokenLinks.forEach(link => {
    if (!brokenByFile[link.file]) {
      brokenByFile[link.file] = [];
    }
    brokenByFile[link.file].push(link);
  });
  
  Object.keys(brokenByFile).sort().forEach(file => {
    const relativeFile = path.relative(rootDir, file);
    console.log(`📄 ${relativeFile}`);
    brokenByFile[file].forEach(link => {
      console.log(`   ❌ ${link.original} → ${link.link}`);
    });
    console.log('');
  });
  
  // Summary
  console.log(`\n📊 Summary:`);
  console.log(`   Total links scanned: ${linkArray.length}`);
  console.log(`   Broken links found: ${brokenLinks.length}`);
  console.log(`   Success rate: ${((linkArray.length - brokenLinks.length) / linkArray.length * 100).toFixed(1)}%`);
}

// Save results to file
const resultsPath = path.join(rootDir, 'broken-links-report.json');
fs.writeFileSync(resultsPath, JSON.stringify({
  totalLinks: linkArray.length,
  brokenLinks: brokenLinks,
  scanDate: new Date().toISOString()
}, null, 2));

console.log(`\n💾 Results saved to: broken-links-report.json`);





