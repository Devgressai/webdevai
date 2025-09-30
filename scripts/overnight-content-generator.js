#!/usr/bin/env node

/**
 * Overnight Content Generator
 * 
 * This script runs continuously to generate comprehensive content for all missing
 * city-industry-service combinations. It will run for hours, creating thousands
 * of SEO-optimized pages.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  // Run for 8 hours (8 * 60 * 60 * 1000 ms)
  MAX_RUNTIME: 8 * 60 * 60 * 1000,
  // Add 1-2 pages per minute to avoid overwhelming the system
  PAGES_PER_MINUTE: 1.5,
  // Delay between page generations (in milliseconds)
  DELAY_BETWEEN_PAGES: 40000,
  // Log progress every 10 pages
  LOG_INTERVAL: 10
};

// All cities from your system
const CITIES = [
  'new-york-ny', 'los-angeles-ca', 'chicago-il', 'houston-tx', 'phoenix-az',
  'philadelphia-pa', 'san-antonio-tx', 'san-diego-ca', 'dallas-tx', 'san-jose-ca',
  'austin-tx', 'jacksonville-fl', 'fort-worth-tx', 'columbus-oh', 'charlotte-nc',
  'seattle-wa', 'denver-co', 'washington-dc', 'boston-ma', 'el-paso-tx',
  'nashville-tn', 'detroit-mi', 'oklahoma-city-ok', 'portland-or', 'las-vegas-nv',
  'memphis-tn', 'louisville-ky', 'baltimore-md', 'milwaukee-wi', 'albuquerque-nm',
  'tucson-az', 'fresno-ca', 'sacramento-ca', 'kansas-city-mo', 'mesa-az',
  'atlanta-ga', 'omaha-ne', 'miami-fl', 'cleveland-oh', 'tulsa-ok',
  'oakland-ca', 'minneapolis-mn', 'wichita-ks', 'arlington-tx', 'bakersfield-ca',
  'new-orleans-la', 'honolulu-hi', 'anaheim-ca', 'tampa-fl', 'aurora-co'
];

// All industries
const INDUSTRIES = [
  'fashion', 'technology', 'healthcare', 'finance', 'manufacturing',
  'retail', 'education', 'tourism', 'aerospace', 'energy',
  'government', 'logistics', 'automotive', 'entertainment', 'agriculture',
  'realestate', 'construction', 'foodservice', 'consulting', 'legal'
];

// All services
const SERVICES = [
  'website-design', 'web-development', 'seo', 'digital-marketing',
  'ai-consulting', 'local-seo', 'e-commerce-development', 'mobile-app-development',
  'ui-ux-design', 'content-marketing', 'social-media-marketing', 'email-marketing',
  'ppc-advertising', 'conversion-optimization', 'analytics-consulting'
];

// City characteristics for content personalization
const CITY_CHARACTERISTICS = {
  'new-york-ny': { style: 'luxury', focus: 'fashion capital', market: 'high-end' },
  'los-angeles-ca': { style: 'entertainment', focus: 'celebrity culture', market: 'trendy' },
  'chicago-il': { style: 'professional', focus: 'business hub', market: 'sophisticated' },
  'san-francisco-ca': { style: 'tech-forward', focus: 'innovation', market: 'cutting-edge' },
  'seattle-wa': { style: 'outdoor-tech', focus: 'nature + innovation', market: 'adventure' },
  'denver-co': { style: 'outdoor-active', focus: 'mountain lifestyle', market: 'adventure' },
  'austin-tx': { style: 'music-tech', focus: 'creative culture', market: 'vibrant' },
  'boston-ma': { style: 'academic', focus: 'education + innovation', market: 'intellectual' },
  'miami-fl': { style: 'tropical-luxury', focus: 'beach culture', market: 'vibrant' },
  'atlanta-ga': { style: 'southern-modern', focus: 'business + culture', market: 'diverse' }
};

// Industry-specific content templates
const INDUSTRY_TEMPLATES = {
  'fashion': {
    keywords: ['fashion', 'style', 'clothing', 'apparel', 'trends'],
    focus: 'visual appeal, brand storytelling, seasonal collections'
  },
  'technology': {
    keywords: ['tech', 'innovation', 'digital', 'software', 'AI'],
    focus: 'cutting-edge design, performance, scalability'
  },
  'healthcare': {
    keywords: ['healthcare', 'medical', 'patient', 'clinical', 'wellness'],
    focus: 'compliance, accessibility, trust, patient experience'
  },
  'finance': {
    keywords: ['finance', 'banking', 'financial', 'investment', 'fintech'],
    focus: 'security, compliance, trust, performance'
  },
  'manufacturing': {
    keywords: ['manufacturing', 'industrial', 'production', 'supply chain'],
    focus: 'efficiency, quality, safety, operational excellence'
  }
};

class OvernightContentGenerator {
  constructor() {
    this.startTime = Date.now();
    this.pagesGenerated = 0;
    this.currentFile = path.join(__dirname, '../lib/cis-static.ts');
    this.backupFile = path.join(__dirname, '../lib/cis-static-backup.ts');
    this.logFile = path.join(__dirname, '../overnight-generation.log');
    
    // Create backup
    this.createBackup();
    
    // Initialize log
    this.log('🚀 Starting overnight content generation...');
    this.log(`📊 Target: ${Math.floor(CONFIG.MAX_RUNTIME / CONFIG.DELAY_BETWEEN_PAGES)} pages over ${CONFIG.MAX_RUNTIME / (60 * 60 * 1000)} hours`);
  }

  createBackup() {
    try {
      const content = fs.readFileSync(this.currentFile, 'utf8');
      fs.writeFileSync(this.backupFile, content);
      this.log('✅ Backup created successfully');
    } catch (error) {
      this.log(`❌ Backup failed: ${error.message}`);
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  getCityInfo(citySlug) {
    const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const state = citySlug.split('-').pop().toUpperCase();
    const fullName = cityName.includes(state) ? cityName : `${cityName}, ${state}`;
    
    return {
      slug: citySlug,
      name: cityName,
      fullName: fullName,
      characteristics: CITY_CHARACTERISTICS[citySlug] || { style: 'professional', focus: 'business', market: 'competitive' }
    };
  }

  getIndustryInfo(industrySlug) {
    const industryName = industrySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
      slug: industrySlug,
      name: industryName,
      template: INDUSTRY_TEMPLATES[industrySlug] || { keywords: [industrySlug], focus: 'professional services' }
    };
  }

  getServiceInfo(serviceSlug) {
    const serviceName = serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
      slug: serviceSlug,
      name: serviceName
    };
  }

  generateContent(city, industry, service) {
    const cityInfo = this.getCityInfo(city);
    const industryInfo = this.getIndustryInfo(industry);
    const serviceInfo = this.getServiceInfo(service);
    
    const key = `${city}__${industry}__${service}`;
    const title = `${serviceInfo.name} in ${cityInfo.fullName} for ${industryInfo.name} Companies`;
    const metaTitle = `${industryInfo.name} ${serviceInfo.name} in ${cityInfo.name} | Professional Services`;
    
    // Generate industry-specific content
    const focus = industryInfo.template.focus;
    const keywords = industryInfo.template.keywords.join(', ');
    const style = cityInfo.characteristics.style;
    const market = cityInfo.characteristics.market;
    
    const hero = `Professional ${serviceInfo.name.toLowerCase()} in ${cityInfo.fullName} for ${industryInfo.name.toLowerCase()} companies. ${focus} solutions tailored to the ${market} ${cityInfo.name} market.`;
    
    const sections = [
      `${industryInfo.name} expertise: specialized ${serviceInfo.name.toLowerCase()} solutions designed for ${industryInfo.name.toLowerCase()} companies in ${cityInfo.name}.`,
      `Local market focus: ${cityInfo.name}-specific ${industryInfo.name.toLowerCase()} trends, regulations, and business requirements.`,
      `Professional approach: ${focus} methodology that delivers measurable results for ${industryInfo.name.toLowerCase()} businesses.`,
      `Performance optimization: fast, reliable, and scalable ${serviceInfo.name.toLowerCase()} solutions for the competitive ${cityInfo.name} market.`
    ];

    const faqs = [
      {
        question: `What makes your ${serviceInfo.name.toLowerCase()} different for ${industryInfo.name.toLowerCase()} companies?`,
        answer: `We specialize in ${industryInfo.name.toLowerCase()} requirements, understanding compliance needs, industry standards, and ${cityInfo.name} market dynamics.`
      },
      {
        question: `Do you have experience with ${industryInfo.name.toLowerCase()} businesses in ${cityInfo.name}?`,
        answer: `Yes, we have extensive experience working with ${industryInfo.name.toLowerCase()} companies in ${cityInfo.name} and understand the local market requirements.`
      },
      {
        question: `How do you ensure compliance with ${industryInfo.name.toLowerCase()} regulations?`,
        answer: `We stay updated with all relevant regulations and implement best practices to ensure full compliance for ${industryInfo.name.toLowerCase()} businesses.`
      }
    ];

    return {
      key,
      title,
      metaTitle,
      metaDescription: `${serviceInfo.name} in ${cityInfo.fullName} for ${industryInfo.name} companies. Professional ${serviceInfo.name.toLowerCase()} solutions with ${focus} approach.`,
      hero,
      sections,
      faqs
    };
  }

  addContentToFile(content) {
    try {
      // Read current file
      let fileContent = fs.readFileSync(this.currentFile, 'utf8');
      
      // Find the insertion point (before the closing brace)
      const lastEntryIndex = fileContent.lastIndexOf('  },\n\n  // ');
      if (lastEntryIndex === -1) {
        this.log('❌ Could not find insertion point in file');
        return false;
      }
      
      // Create new content entry
      const newEntry = `  '${content.key}': {
    title: '${content.title}',
    metaTitle: '${content.metaTitle}',
    metaDescription: '${content.metaDescription}',
    hero: '${content.hero}',
    sections: [
      '${content.sections.join("',\n      '")}'
    ],
    faqs: [
      { question: '${content.faqs[0].question}', answer: '${content.faqs[0].answer}' },
      { question: '${content.faqs[1].question}', answer: '${content.faqs[1].answer}' },
      { question: '${content.faqs[2].question}', answer: '${content.faqs[2].answer}' }
    ]
  },

`;
      
      // Insert new content
      fileContent = fileContent.slice(0, lastEntryIndex) + newEntry + fileContent.slice(lastEntryIndex);
      
      // Write back to file
      fs.writeFileSync(this.currentFile, fileContent);
      return true;
    } catch (error) {
      this.log(`❌ Error adding content: ${error.message}`);
      return false;
    }
  }

  shouldContinue() {
    const runtime = Date.now() - this.startTime;
    return runtime < CONFIG.MAX_RUNTIME;
  }

  async run() {
    this.log('🎯 Starting content generation...');
    
    // Generate all possible combinations
    const combinations = [];
    for (const city of CITIES) {
      for (const industry of INDUSTRIES) {
        for (const service of SERVICES) {
          combinations.push({ city, industry, service });
        }
      }
    }
    
    // Shuffle for random distribution
    for (let i = combinations.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combinations[i], combinations[j]] = [combinations[j], combinations[i]];
    }
    
    this.log(`📋 Generated ${combinations.length} possible combinations`);
    
    let processed = 0;
    for (const combo of combinations) {
      if (!this.shouldContinue()) {
        this.log('⏰ Time limit reached, stopping generation');
        break;
      }
      
      try {
        const content = this.generateContent(combo.city, combo.industry, combo.service);
        
        if (this.addContentToFile(content)) {
          this.pagesGenerated++;
          processed++;
          
          if (this.pagesGenerated % CONFIG.LOG_INTERVAL === 0) {
            const runtime = (Date.now() - this.startTime) / (60 * 1000);
            this.log(`📈 Progress: ${this.pagesGenerated} pages generated in ${runtime.toFixed(1)} minutes`);
          }
        }
        
        // Wait before next generation
        await new Promise(resolve => setTimeout(resolve, CONFIG.DELAY_BETWEEN_PAGES));
        
      } catch (error) {
        this.log(`❌ Error processing ${combo.city}-${combo.industry}-${combo.service}: ${error.message}`);
      }
    }
    
    const totalRuntime = (Date.now() - this.startTime) / (60 * 1000);
    this.log(`🎉 Generation complete! Generated ${this.pagesGenerated} pages in ${totalRuntime.toFixed(1)} minutes`);
    this.log(`📊 Average: ${(this.pagesGenerated / totalRuntime).toFixed(2)} pages per minute`);
  }
}

// Run the generator
const generator = new OvernightContentGenerator();
generator.run().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
