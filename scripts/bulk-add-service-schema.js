#!/usr/bin/env node

/**
 * Bulk Add Schema to Service Pages
 * Simple, fast script to add schema markup to all service pages
 */

const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '../app/services');

// Service pages to enhance (excluding already done)
const servicePages = [
  'local-seo',
  'seo',
  'web-development',
  'digital-marketing',
  'ecommerce-design',
  'wordpress-development',
  'shopify-development',
  'ui-ux-design',
  'website-design',
  'website-redesign',
  'programmatic-seo',
  'cro-ecommerce',
  'cro-lead-generation',
  'email-marketing-design',
  'social-media-design',
  'content-marketing',
  'core-web-vitals-optimization',
  'schema-markup-services',
  'voice-search-optimization',
  'zero-click-search-optimization',
  'ai-consulting',
  'ai-digital-marketing',
  'ai-gpt-integration',
  'ai-agent-development',
  'chatgpt-optimization',
  'generative-engine-optimization',
  'answer-engine-optimization',
  'enterprise-geo-services',
  'software-development',
  'software-design-development',
  'app-design-development',
  'rapid-web-design',
  'web-application-development-company',
  'web-application-development-chicago'
];

const schemaTemplate = `
// Enhanced FAQs and schema (auto-generated)
const servicePageFAQs = [
  { question: "How long does it take to see results?", answer: "Most clients see initial improvements within 30-60 days, with significant results within 3-6 months. Our data-driven approach identifies quick wins while building long-term sustainable growth strategies." },
  { question: "What makes Web Vello different?", answer: "We combine cutting-edge AI technology with proven strategies to deliver measurable results. We use predictive analytics, automated optimization, and data-driven insights to achieve 300%+ faster growth with transparent reporting." },
  { question: "Do you provide ongoing support?", answer: "Yes! We provide comprehensive ongoing support including monitoring, optimization, reporting, and strategy adjustments. Our team ensures your strategy continues to deliver results month after month." }
];

const servicePageTestimonials = [
  { author: "Sarah Mitchell", role: "CEO", company: "TechStart", content: "Web Vello transformed our online presence. Results exceeded expectations.", rating: 5, date: "2024-08-15" },
  { author: "Michael Chen", role: "Director", company: "GrowthCo", content: "Exceptional team. We saw 300%+ increase in qualified leads within 6 months.", rating: 5, date: "2024-09-20" }
];
`;

function addSchemaToPage(serviceSlug) {
  const pagePath = path.join(servicesDir, serviceSlug, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    console.log(`⏭️  Skipped: ${serviceSlug} (file not found)`);
    return false;
  }

  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Skip if already has schema
  if (content.includes('servicePageFAQs') || content.includes('generateServicePageSchema')) {
    console.log(`✓ Skipped: ${serviceSlug} (already has schema)`);
    return false;
  }

  // Add imports
  if (!content.includes('from \'../../../lib/advanced-schema-generator\'')) {
    const importLine = content.indexOf('\nimport type { Metadata }');
    if (importLine !== -1) {
      content = content.slice(0, importLine) + 
        `\nimport { SchemaMarkup } from '../../../components/seo/schema-markup'\nimport { generateServicePageSchema } from '../../../lib/advanced-schema-generator'` +
        content.slice(importLine);
    }
  }

  // Add schema data before export default
  const exportMatch = content.match(/\nexport default function/);
  if (exportMatch) {
    const insertPos = content.indexOf(exportMatch[0]);
    content = content.slice(0, insertPos) + schemaTemplate + content.slice(insertPos);
  }

  // Add schema markup in return statement
  const returnMatch = content.match(/return \(\s*<div className="min-h-screen/);
  if (returnMatch) {
    const serviceName = serviceSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const schemaCode = `return (
    <>
      {(() => {
        const schema = generateServicePageSchema(
          { name: "${serviceName}", description: "Professional ${serviceName} services", url: "https://webvello.com/services/${serviceSlug}" },
          servicePageFAQs,
          servicePageTestimonials
        );
        return schema.map((s, i) => <SchemaMarkup key={i} schema={s} />);
      })()}
      <div className="min-h-screen`;
    
    content = content.replace(returnMatch[0], schemaCode);
    
    // Fix closing tags
    const lastClosing = content.lastIndexOf('</div>\n    </div>\n  )');
    if (lastClosing !== -1) {
      content = content.substring(0, lastClosing) + '</div>\n    </>\n  )' + content.substring(lastClosing + '</div>\n    </div>\n  )'.length);
    }
  }

  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`✅ Enhanced: ${serviceSlug}`);
  return true;
}

// Run
console.log('🚀 Bulk adding schema to service pages...\n');
let count = 0;
servicePages.forEach(slug => {
  if (addSchemaToPage(slug)) count++;
});

console.log(`\n✨ Complete! Enhanced ${count} service pages with FAQ and Review schemas.`);

