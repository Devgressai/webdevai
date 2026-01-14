import { LocationPageConfig } from './types'

export const honoluluConfig: LocationPageConfig = {
  metadata: {
    city: 'Honolulu',
    state: 'Hawaii',
    stateCode: 'HI',
    fullName: 'Honolulu, Hawaii',
    slug: 'honolulu',
    population: '~350,000',
    timezone: 'Hawaii-Aleutian (HST)'
  },
  
  hero: {
    badge: 'Trusted by 500+ businesses nationwide',
    headline: 'Honolulu Web Design & Digital Marketing That Delivers',
    highlightText: '300%+ Growth',
    subheadline: 'We help Honolulu businesses dominate local search, attract more customers, and scale revenue through AI-powered SEO, conversion-focused web design, and data-driven digital marketing strategies.',
    primaryCTA: {
      text: 'Get Free Consultation',
      href: '/contact'
    },
    secondaryCTA: {
      text: 'See Our Results',
      href: '/case-studies'
    }
  },
  
  stats: [
    { value: '500+', label: 'Businesses Served' },
    { value: '300%+', label: 'Average Growth' },
    { value: '1,200%', label: 'Average ROI' },
    { value: '24/7', label: 'Support Available' }
  ],
  
  services: [
    {
      name: 'Honolulu Web Design',
      description: 'Professional websites designed for Honolulu\'s diverse business landscape. From tourism to healthcare, we create sites that convert visitors into customers.',
      features: [
        'Mobile-first responsive design',
        'Conversion-focused layouts',
        'Brand-aligned aesthetics',
        'Fast loading speeds'
      ],
      href: '/services/website-design'
    },
    {
      name: 'Local SEO Honolulu',
      description: 'Dominate local search for Honolulu businesses. Rank for "near me" searches, Google Maps, and location-based keywords that drive foot traffic and calls.',
      features: [
        'Google Business Profile optimization',
        'Local citation management',
        'Review generation & management',
        'Neighborhood targeting'
      ],
      href: '/services/local-seo'
    },
    {
      name: 'E-commerce Development',
      description: 'High-converting online stores built on Shopify or custom platforms. Perfect for Honolulu retailers looking to expand beyond physical locations.',
      features: [
        'Shopify & custom solutions',
        'Payment gateway integration',
        'Inventory management',
        'Mobile shopping optimization'
      ],
      href: '/services/ecommerce-design'
    },
    {
      name: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including SEO, PPC, social media, and content marketing tailored for Honolulu businesses.',
      features: [
        'Multi-channel campaigns',
        'Social media management',
        'Content marketing',
        'Analytics & reporting'
      ],
      href: '/services/digital-marketing'
    }
  ],
  
  testimonials: [
    {
      name: 'David Tanaka',
      role: 'CEO',
      company: 'Honolulu Medical Group',
      content: 'Web Vello helped us completely transform our online presence. We now rank #1 for key medical searches in Honolulu and our patient inquiries have tripled. Exceptional work.',
      rating: 5,
      results: ['300% more inquiries', '#1 medical rankings', 'Professional design']
    },
    {
      name: 'Jennifer Wong',
      role: 'Owner',
      company: 'Waikiki Beach Boutique',
      content: 'Our new e-commerce site is beautiful and our online sales have exploded. We\'re now shipping products worldwide and it\'s become a major revenue stream for our business.',
      rating: 5,
      results: ['400% online sales', 'Worldwide shipping', 'Beautiful design']
    },
    {
      name: 'Michael Santos',
      role: 'Managing Partner',
      company: 'Honolulu Law Firm',
      content: 'The SEO results have been outstanding. We\'re getting high-quality leads every week and our cost per acquisition has dropped significantly. Highly recommend Web Vello.',
      rating: 5,
      results: ['Weekly quality leads', 'Lower acquisition cost', 'Strong ROI']
    }
  ],
  
  faqs: [
    {
      question: 'Why should Honolulu businesses choose Web Vello?',
      answer: 'Web Vello combines cutting-edge technology with proven marketing strategies to deliver measurable results for Honolulu businesses. We understand the unique challenges of Hawaii\'s market, including competition from mainland companies, tourism seasonality, and local consumer behavior. Our data-driven approach and transparent reporting ensure you always know exactly how your investment is performing.'
    },
    {
      question: 'How quickly can I see results in Honolulu?',
      answer: 'Most Honolulu businesses see initial improvements within 30-60 days, with significant growth within 3-6 months. Local SEO often shows faster results, especially for Google Business Profile optimization. Our AI-powered approach accelerates results by identifying quick wins while building long-term sustainable growth.'
    },
    {
      question: 'Do you work with Honolulu businesses remotely?',
      answer: 'Yes! We serve Honolulu businesses entirely remotely with the same high-quality service as local agencies. Our team has extensive experience working with Hawaii businesses and understands the local market dynamics. We provide regular video consultations, transparent reporting, and responsive communication throughout our partnership.'
    },
    {
      question: 'What types of Honolulu businesses do you work with?',
      answer: 'We work with diverse Honolulu businesses including hotels and hospitality, medical and healthcare practices, law firms, restaurants and food services, retail stores, real estate agencies, professional services, and technology companies. Our strategies are customized for each industry and business size.'
    },
    {
      question: 'What are your pricing and packages?',
      answer: 'We offer flexible pricing based on your specific needs and goals. Website design projects typically start at $3,500, while ongoing SEO and digital marketing services start at $2,500/month. We also offer custom enterprise packages for larger Honolulu businesses. Contact us for a free consultation and personalized quote.'
    }
  ],
  
  areasServed: [
    { name: 'Waikiki', description: 'Premier tourist destination and business district' },
    { name: 'Downtown Honolulu', description: 'Financial and government center' },
    { name: 'Ala Moana', description: 'Shopping and business hub' },
    { name: 'Kakaako', description: 'Emerging tech and creative district' },
    { name: 'Manoa', description: 'Residential and university area' },
    { name: 'Kaimuki', description: 'Trendy dining and retail neighborhood' },
    { name: 'Hawaii Kai', description: 'East Honolulu residential community' },
    { name: 'Pearl City', description: 'Central Oahu business corridor' },
    { name: 'Aiea', description: 'Commercial and residential area' },
    { name: 'Kahala', description: 'Upscale residential neighborhood' }
  ],
  
  whyChooseUs: {
    title: 'Why Honolulu Businesses Trust Web Vello',
    description: 'We deliver results-driven digital marketing solutions tailored for Hawaii\'s unique business environment.',
    features: [
      {
        title: 'Hawaii Market Expertise',
        description: 'Deep understanding of Honolulu\'s diverse economy and competitive landscape',
        icon: 'Globe'
      },
      {
        title: 'Proven Track Record',
        description: 'Consistent 300%+ growth for businesses across industries in Honolulu',
        icon: 'Award'
      },
      {
        title: 'Transparent Reporting',
        description: 'Weekly updates and shared dashboards so you always know your ROI',
        icon: 'BarChart3'
      },
      {
        title: 'Full-Service Solutions',
        description: 'From web design to SEO to digital marketing - everything under one roof',
        icon: 'Layers'
      }
    ]
  },
  
  finalCTA: {
    title: 'Ready to Dominate Honolulu\'s Digital Landscape?',
    description: 'Schedule a free strategy session and discover how we can help your Honolulu business achieve 300%+ growth. Our team will analyze your current online presence and show you exactly how to outrank your competition.',
    primaryCTA: {
      text: 'Get Free Strategy Session',
      href: '/contact'
    },
    secondaryCTA: {
      text: 'View Success Stories',
      href: '/case-studies'
    }
  }
}

