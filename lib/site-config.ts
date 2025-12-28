/**
 * Site-wide configuration
 * This file contains all the core contact information and branding details
 * 
 * ⚠️ IMPORTANT: Always use these constants instead of hardcoding values
 */

export const SITE_CONFIG = {
  // Company Information
  name: 'Web Vello',
  legalName: 'Webvello',
  
  // Contact Information - USE THESE VALUES SITEWIDE
  phone: {
    display: '(530) 553-8883',
    tel: '+15305538883',       // For tel: links
    international: '+1-530-553-8883',  // For schema markup
    raw: '5305538883'          // For tracking/analytics
  },
  
  email: {
    primary: 'hello@webvello.com',
    info: 'info@webvello.com',
    support: 'support@webvello.com'
  },
  
  address: {
    street: '2281 Lava Ridge Ct',
    city: 'Roseville',
    state: 'CA',
    zip: '95661',
    full: '2281 Lava Ridge Ct, Roseville, CA 95661'
  },
  
  // Business Hours
  hours: {
    display: 'Mon-Fri: 9AM-6PM PST',
    structured: {
      monday: '09:00-18:00',
      tuesday: '09:00-18:00',
      wednesday: '09:00-18:00',
      thursday: '09:00-18:00',
      friday: '09:00-18:00',
      saturday: 'Closed',
      sunday: 'Closed'
    }
  },
  
  // Social Media
  social: {
    facebook: 'https://www.facebook.com/people/Webvello/61583979327301/',
    twitter: 'https://twitter.com/webvello',
    linkedin: 'https://www.linkedin.com/company/webvello'
  },
  
  // Website
  url: 'https://www.webvello.com',
  
  // Description
  description: 'Professional digital marketing services that drive real results. From AI-powered SEO to custom web development, we help businesses dominate their markets.',
  
  // SEO
  tagline: 'AI-Powered SEO, GEO & Web Development Experts',
  keywords: 'SEO services, GEO agency, generative engine optimization, web development, AI SEO, local SEO, AEO, answer engine optimization, web design'
} as const

// Type export for TypeScript safety
export type SiteConfig = typeof SITE_CONFIG

