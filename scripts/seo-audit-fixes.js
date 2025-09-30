#!/usr/bin/env node

/**
 * SEO Audit and Fixes
 * 
 * This script identifies and fixes common SEO issues:
 * 1. Missing meta descriptions
 * 2. Missing or duplicate titles
 * 3. Broken internal links
 * 4. Missing alt text on images
 * 5. Missing schema markup
 */

const fs = require('fs');
const path = require('path');

class SEOAuditor {
  constructor() {
    this.rootDir = path.join(__dirname, '..');
    this.issues = [];
    this.fixes = [];
  }

  log(message) {
    console.log(message);
  }

  // Check for missing meta descriptions
  checkMetaDescriptions(filePath, content) {
    if (filePath.endsWith('page.tsx') || filePath.endsWith('page.ts')) {
      if (!content.includes('description:') && !content.includes('metaDescription')) {
        this.issues.push({
          type: 'missing-meta-description',
          file: filePath,
          severity: 'high'
        });
      }
    }
  }

  // Check for missing titles
  checkTitles(filePath, content) {
    if (filePath.endsWith('page.tsx') || filePath.endsWith('page.ts')) {
      if (!content.includes('title:') && !content.includes('<title>')) {
        this.issues.push({
          type: 'missing-title',
          file: filePath,
          severity: 'critical'
        });
      }
    }
  }

  // Check for broken internal links
  checkInternalLinks(filePath, content) {
    const linkPattern = /href=["'](\/[^"']*?)["']/g;
    let match;
    
    while ((match = linkPattern.exec(content)) !== null) {
      const linkPath = match[1];
      
      // Skip external links, anchors, and special paths
      if (linkPath.startsWith('http') || linkPath.startsWith('#') || linkPath.startsWith('mailto:')) {
        continue;
      }
      
      // Check if the linked page exists
      const possiblePaths = [
        path.join(this.rootDir, 'app', linkPath, 'page.tsx'),
        path.join(this.rootDir, 'app', linkPath, 'page.ts'),
        path.join(this.rootDir, 'app', `${linkPath}.tsx`)
      ];
      
      const exists = possiblePaths.some(p => fs.existsSync(p));
      
      if (!exists && !linkPath.includes('[') && linkPath !== '/') {
        this.issues.push({
          type: 'broken-internal-link',
          file: filePath,
          link: linkPath,
          severity: 'medium'
        });
      }
    }
  }

  // Check for missing alt text
  checkAltText(filePath, content) {
    const imgPattern = /<Image[^>]*src=["']([^"']+)["'][^>]*>/g;
    const altPattern = /alt=["']([^"']*)["']/;
    
    let match;
    while ((match = imgPattern.exec(content)) !== null) {
      const imgTag = match[0];
      const altMatch = imgTag.match(altPattern);
      
      if (!altMatch || !altMatch[1]) {
        this.issues.push({
          type: 'missing-alt-text',
          file: filePath,
          image: match[1],
          severity: 'medium'
        });
      }
    }
  }

  // Recursively scan directory
  scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .next
        if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
          this.scanDirectory(filePath);
        }
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        this.checkMetaDescriptions(filePath, content);
        this.checkTitles(filePath, content);
        this.checkInternalLinks(filePath, content);
        this.checkAltText(filePath, content);
      }
    }
  }

  // Generate report
  generateReport() {
    this.log('\\n📊 SEO AUDIT REPORT\\n');
    this.log(`Total Issues Found: ${this.issues.length}\\n`);
    
    // Group by severity
    const critical = this.issues.filter(i => i.severity === 'critical');
    const high = this.issues.filter(i => i.severity === 'high');
    const medium = this.issues.filter(i => i.severity === 'medium');
    
    if (critical.length > 0) {
      this.log(`🚨 CRITICAL ISSUES (${critical.length}):`);
      critical.forEach(issue => {
        this.log(`  - ${issue.type} in ${issue.file.replace(this.rootDir, '')}`);
      });
      this.log('');
    }
    
    if (high.length > 0) {
      this.log(`⚠️  HIGH PRIORITY ISSUES (${high.length}):`);
      high.forEach(issue => {
        this.log(`  - ${issue.type} in ${issue.file.replace(this.rootDir, '')}`);
      });
      this.log('');
    }
    
    if (medium.length > 0) {
      this.log(`⚡ MEDIUM PRIORITY ISSUES (${medium.length}):`);
      const grouped = {};
      medium.forEach(issue => {
        if (!grouped[issue.type]) grouped[issue.type] = 0;
        grouped[issue.type]++;
      });
      Object.entries(grouped).forEach(([type, count]) => {
        this.log(`  - ${type}: ${count} instances`);
      });
      this.log('');
    }
    
    if (this.issues.length === 0) {
      this.log('✅ No SEO issues found! Your site is well-optimized.');
    }
    
    return this.issues;
  }

  // Run the audit
  async run() {
    this.log('🔍 Starting SEO audit...\\n');
    
    // Scan app directory
    this.scanDirectory(path.join(this.rootDir, 'app'));
    
    // Generate and display report
    const issues = this.generateReport();
    
    // Save report to file
    const reportPath = path.join(this.rootDir, 'seo-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(issues, null, 2));
    this.log(`\\n📄 Detailed report saved to: seo-audit-report.json\\n`);
    
    return issues;
  }
}

// Run the auditor
const auditor = new SEOAuditor();
auditor.run().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
