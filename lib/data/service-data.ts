/**
 * Service Data for City-Service Pages
 * 
 * This file exports service data specifically for the /[city]/[service] route.
 * Contains all 28 services available for city-service combinations.
 */

export interface ServiceData {
  slug: string
  name: string
  category: string
  longDesc?: string
  benefits: string[]
  process: string[]
  industries: string[]
  faqs: Array<{ question: string; answer: string }>
}

// Default data for all services
const defaultServiceData = {
  benefits: [
    'Expert local market knowledge',
    'Proven track record of success',
    'Customized solutions for your business',
    'Ongoing support and optimization'
  ],
  process: [
    'Discovery & Planning',
    'Strategy & Design',
    'Implementation',
    'Optimization & Support'
  ],
  industries: [
    'Technology',
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Real Estate'
  ],
  faqs: [
    {
      question: 'How long does it take to see results?',
      answer: 'Results vary by service and business goals, but most clients see initial improvements within 30-60 days.'
    },
    {
      question: 'Do you work with businesses of all sizes?',
      answer: 'Yes, we work with small businesses, mid-market companies, and enterprises across various industries.'
    },
    {
      question: 'What makes your services different?',
      answer: 'We combine local market expertise with proven methodologies and cutting-edge technology to deliver exceptional results.'
    }
  ]
}

// All 28 services available for city-service pages
export const serviceData: Record<string, ServiceData> = {
  'website-design': { 
    slug: 'website-design', 
    name: 'Website Design', 
    category: 'Creative Solutions',
    longDesc: 'Custom website design solutions',
    ...defaultServiceData
  },
  'website-redesign': { 
    slug: 'website-redesign', 
    name: 'Website Redesign', 
    category: 'Creative Solutions',
    longDesc: 'Professional website redesign services',
    ...defaultServiceData
  },
  'web-development': { 
    slug: 'web-development', 
    name: 'Web Development', 
    category: 'Technical Solutions',
    longDesc: 'Custom web development solutions',
    ...defaultServiceData
  },
  'rapid-web-design': { 
    slug: 'rapid-web-design', 
    name: 'Rapid Web Design', 
    category: 'Creative Solutions',
    longDesc: 'Fast-track website design services',
    ...defaultServiceData
  },
  'ui-ux-design': { 
    slug: 'ui-ux-design', 
    name: 'UI/UX Design', 
    category: 'Creative Solutions',
    longDesc: 'User-centered design solutions',
    ...defaultServiceData
  },
  'ecommerce-design': { 
    slug: 'ecommerce-design', 
    name: 'E-commerce Design', 
    category: 'Creative Solutions',
    longDesc: 'E-commerce website design services',
    ...defaultServiceData
  },
  'app-design-development': { 
    slug: 'app-design-development', 
    name: 'App Design & Development', 
    category: 'Creative Solutions',
    longDesc: 'Mobile and web app design and development',
    ...defaultServiceData
  },
  'software-design-development': { 
    slug: 'software-design-development', 
    name: 'Software Design & Development', 
    category: 'Technical Solutions',
    longDesc: 'Custom software design and development',
    ...defaultServiceData
  },
  'software-development': { 
    slug: 'software-development', 
    name: 'Software Development', 
    category: 'Technical Solutions',
    longDesc: 'Professional software development services',
    ...defaultServiceData
  },
  'shopify-development': { 
    slug: 'shopify-development', 
    name: 'Shopify Development', 
    category: 'Technical Solutions',
    longDesc: 'Shopify store development and customization',
    ...defaultServiceData
  },
  'wordpress-development': { 
    slug: 'wordpress-development', 
    name: 'WordPress Development', 
    category: 'Technical Solutions',
    longDesc: 'WordPress website development services',
    ...defaultServiceData
  },
  'ai-consulting': { 
    slug: 'ai-consulting', 
    name: 'AI Consulting', 
    category: 'Intelligent Solutions',
    longDesc: 'AI strategy and implementation consulting',
    ...defaultServiceData
  },
  'ai-seo': { 
    slug: 'ai-seo', 
    name: 'AI SEO', 
    category: 'Intelligent Solutions',
    longDesc: 'AI-powered SEO optimization services',
    ...defaultServiceData
  },
  'ai-digital-marketing': { 
    slug: 'ai-digital-marketing', 
    name: 'AI Digital Marketing', 
    category: 'Intelligent Solutions',
    longDesc: 'AI-enhanced digital marketing solutions',
    ...defaultServiceData
  },
  'ai-gpt-integration': { 
    slug: 'ai-gpt-integration', 
    name: 'AI GPT Integration', 
    category: 'Intelligent Solutions',
    longDesc: 'GPT and AI model integration services',
    ...defaultServiceData
  },
  'ai-agent-development': { 
    slug: 'ai-agent-development', 
    name: 'AI Agent Development', 
    category: 'Intelligent Solutions',
    longDesc: 'Custom AI agent development services',
    ...defaultServiceData
  },
  'chatgpt-optimization': { 
    slug: 'chatgpt-optimization', 
    name: 'ChatGPT Optimization', 
    category: 'Intelligent Solutions',
    longDesc: 'ChatGPT integration and optimization',
    ...defaultServiceData
  },
  'generative-engine-optimization': { 
    slug: 'generative-engine-optimization', 
    name: 'Generative Engine Optimization', 
    category: 'Intelligent Solutions',
    longDesc: 'Optimization for generative AI search engines',
    ...defaultServiceData
  },
  'answer-engine-optimization': { 
    slug: 'answer-engine-optimization', 
    name: 'Answer Engine Optimization', 
    category: 'Intelligent Solutions',
    longDesc: 'Optimization for answer engines and voice search',
    ...defaultServiceData
  },
  'seo': { 
    slug: 'seo', 
    name: 'SEO Services', 
    category: 'Marketing Solutions',
    longDesc: 'Comprehensive SEO optimization services',
    ...defaultServiceData
  },
  'local-seo': { 
    slug: 'local-seo', 
    name: 'Local SEO', 
    category: 'Marketing Solutions',
    longDesc: 'Local search engine optimization services',
    ...defaultServiceData
  },
  'digital-marketing': { 
    slug: 'digital-marketing', 
    name: 'Digital Marketing', 
    category: 'Marketing Solutions',
    longDesc: 'Comprehensive digital marketing services',
    ...defaultServiceData
  },
  'email-marketing-design': { 
    slug: 'email-marketing-design', 
    name: 'Email Marketing Design', 
    category: 'Marketing Solutions',
    longDesc: 'Email marketing campaign design and optimization',
    ...defaultServiceData
  },
  'social-media-design': { 
    slug: 'social-media-design', 
    name: 'Social Media Design', 
    category: 'Marketing Solutions',
    longDesc: 'Social media content and campaign design',
    ...defaultServiceData
  },
  'cro-ecommerce': { 
    slug: 'cro-ecommerce', 
    name: 'CRO E-commerce', 
    category: 'Conversion Optimization',
    longDesc: 'E-commerce conversion rate optimization',
    ...defaultServiceData
  },
  'cro-lead-generation': { 
    slug: 'cro-lead-generation', 
    name: 'CRO Lead Generation', 
    category: 'Conversion Optimization',
    longDesc: 'Lead generation conversion optimization',
    ...defaultServiceData
  },
  'enterprise-geo-services': { 
    slug: 'enterprise-geo-services', 
    name: 'Enterprise GEO Services', 
    category: 'Intelligent Solutions',
    longDesc: 'Enterprise-grade generative engine optimization',
    ...defaultServiceData
  }
}

// Export service slugs as an array for iteration
export const serviceDataSlugs: string[] = Object.keys(serviceData)
