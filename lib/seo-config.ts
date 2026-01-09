import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://www.webvello.com'),
  title: {
    default: 'Web Vello - Digital Marketing Agency | AI SEO, Local SEO, Web Development',
    template: '%s | Web Vello'
  },
  description: 'Drive revenue growth with data-driven digital marketing. Specializing in AI-powered SEO, local search dominance, and conversion-focused web development. Get 300%+ traffic growth in 6 months.',
  keywords: [
    'digital marketing agency',
    'AI SEO services',
    'local SEO optimization',
    'web development company',
    'UI/UX design services',
    'conversion rate optimization',
    'digital marketing consulting',
    'SEO agency',
    'web design services',
    'marketing automation'
  ],
  authors: [{ name: 'Web Vello', url: 'https://www.webvello.com' }],
  creator: 'Web Vello',
  publisher: 'Web Vello',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.webvello.com',
    siteName: 'Web Vello',
    title: 'Web Vello - Digital Marketing Agency',
    description: 'Drive revenue growth with data-driven digital marketing. Get 300%+ traffic growth in 6 months.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Vello - Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Vello - Digital Marketing Agency',
    description: 'Drive revenue growth with data-driven digital marketing',
    images: ['/og-image.jpg'],
    creator: '@webvello',
    site: '@webvello',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
    yandex: 'REPLACE_WITH_BING_WEBMASTER_VERIFICATION_CODE',
    yahoo: 'REPLACE_WITH_YAHOO_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://www.webvello.com',
  },
  category: 'Digital Marketing',
  classification: 'Business',
  other: {
    'theme-color': '#4C74B9',
    'msapplication-TileColor': '#4C74B9',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Web Vello',
  },
}

// Service-specific metadata
export const serviceMetadata: Record<string, Metadata> = {
  'web-development': {
    title: 'Custom Web Development Services | Fast, Mobile-Optimized Websites',
    description: 'Professional web development services with modern technologies. Custom websites built with Next.js, React, and optimized for speed, SEO, and conversions. Get a quote today!',
    keywords: [
      'web development services',
      'custom website development',
      'Next.js development',
      'React development',
      'mobile responsive design',
      'web development company',
      'custom web applications',
      'website performance optimization',
      'modern web development',
      'professional web design'
    ],
    openGraph: {
      title: 'Custom Web Development Services | Web Vello',
      description: 'Professional web development with modern technologies. Fast, mobile-optimized websites that convert visitors into customers.',
      url: 'https://www.webvello.com/services/web-development',
      images: [
        {
          url: '/og-web-development.jpg',
          width: 1200,
          height: 630,
          alt: 'Web Development Services - Web Vello',
        },
      ],
    },
    twitter: {
      title: 'Custom Web Development Services | Web Vello',
      description: 'Professional web development with modern technologies. Fast, mobile-optimized websites.',
      images: ['/og-web-development.jpg'],
    },
    alternates: {
      canonical: 'https://www.webvello.com/services/web-development',
    },
  },
  'wordpress-development': {
    title: 'WordPress Development Services | Custom & Elementor Websites',
    description: 'Expert WordPress development services including custom themes, plugins, and Elementor-based websites. Professional WordPress solutions for businesses of all sizes.',
    keywords: [
      'WordPress development',
      'custom WordPress themes',
      'WordPress plugins',
      'Elementor development',
      'WordPress customization',
      'WordPress maintenance',
      'WordPress SEO',
      'WordPress security',
      'WordPress performance',
      'WordPress consulting'
    ],
    openGraph: {
      title: 'WordPress Development Services | Web Vello',
      description: 'Expert WordPress development including custom themes, plugins, and Elementor websites. Professional WordPress solutions for your business.',
      url: 'https://www.webvello.com/services/wordpress-development',
      images: [
        {
          url: '/og-wordpress-development.jpg',
          width: 1200,
          height: 630,
          alt: 'WordPress Development Services - Web Vello',
        },
      ],
    },
    twitter: {
      title: 'WordPress Development Services | Web Vello',
      description: 'Expert WordPress development including custom themes, plugins, and Elementor websites.',
      images: ['/og-wordpress-development.jpg'],
    },
    alternates: {
      canonical: 'https://www.webvello.com/services/wordpress-development',
    },
  },
  'seo': {
    title: 'SEO Services | AI-Powered Search Engine Optimization',
    description: 'Professional SEO services with AI-powered strategies. Improve your search rankings, drive organic traffic, and increase conversions with our proven SEO methods.',
    keywords: [
      'SEO services',
      'search engine optimization',
      'AI SEO',
      'local SEO',
      'SEO consulting',
      'keyword research',
      'content optimization',
      'technical SEO',
      'link building',
      'SEO audit'
    ],
    openGraph: {
      title: 'SEO Services | AI-Powered Search Optimization',
      description: 'Professional SEO services with AI-powered strategies. Improve rankings and drive organic traffic with proven methods.',
      url: 'https://www.webvello.com/services/seo',
      images: [
        {
          url: '/og-seo-services.jpg',
          width: 1200,
          height: 630,
          alt: 'SEO Services - Web Vello',
        },
      ],
    },
    twitter: {
      title: 'SEO Services | AI-Powered Search Optimization',
      description: 'Professional SEO services with AI-powered strategies. Improve rankings and drive organic traffic.',
      images: ['/og-seo-services.jpg'],
    },
    alternates: {
      canonical: 'https://www.webvello.com/services/seo',
    },
  },
  'ai-seo': {
    title: 'AI SEO Services | Revolutionary Search Engine Optimization',
    description: 'Revolutionary AI-powered SEO services that analyze millions of data points to identify opportunities your competitors miss. Get 300%+ traffic growth in 6 months.',
    keywords: [
      'AI SEO services',
      'artificial intelligence SEO',
      'machine learning SEO',
      'AI keyword research',
      'AI content optimization',
      'predictive SEO',
      'AI SEO tools',
      'automated SEO',
      'AI SEO analysis',
      'intelligent SEO'
    ],
    openGraph: {
      title: 'AI SEO Services | Revolutionary Search Optimization',
      description: 'Revolutionary AI-powered SEO that analyzes millions of data points. Get 300%+ traffic growth in 6 months.',
      url: 'https://www.webvello.com/services/ai-seo',
      images: [
        {
          url: '/og-ai-seo.jpg',
          width: 1200,
          height: 630,
          alt: 'AI SEO Services - Web Vello',
        },
      ],
    },
    twitter: {
      title: 'AI SEO Services | Revolutionary Search Optimization',
      description: 'Revolutionary AI-powered SEO that analyzes millions of data points. Get 300%+ traffic growth.',
      images: ['/og-ai-seo.jpg'],
    },
    alternates: {
      canonical: 'https://www.webvello.com/services/ai-seo',
    },
  },
  'local-seo': {
    title: 'Local SEO Services | Dominate Local Search Results',
    description: 'Dominate local search results and drive foot traffic to your business. Our geo-targeted strategies help you rank #1 in your local market and capture nearby customers.',
    keywords: [
      'local SEO services',
      'local search optimization',
      'Google My Business optimization',
      'local citations',
      'local keyword research',
      'geo-targeted SEO',
      'local business SEO',
      'neighborhood SEO',
      'local search marketing',
      'location-based SEO'
    ],
    openGraph: {
      title: 'Local SEO Services | Dominate Local Search',
      description: 'Dominate local search results and drive foot traffic. Rank #1 in your local market with geo-targeted strategies.',
      url: 'https://www.webvello.com/services/local-seo',
      images: [
        {
          url: '/og-local-seo.jpg',
          width: 1200,
          height: 630,
          alt: 'Local SEO Services - Web Vello',
        },
      ],
    },
    twitter: {
      title: 'Local SEO Services | Dominate Local Search',
      description: 'Dominate local search results and drive foot traffic. Rank #1 in your local market.',
      images: ['/og-local-seo.jpg'],
    },
    alternates: {
      canonical: 'https://www.webvello.com/services/local-seo',
    },
  },
  'ui-ux-design': {
    title: 'UI/UX Design Services | User-Centered Design Solutions',
    description: 'User-centered design that creates seamless experiences and drives engagement. Our designs focus on conversion optimization and user satisfaction.',
    keywords: [
      'UI design services',
      'UX design services',
      'user interface design',
      'user experience design',
      'web design',
      'mobile app design',
      'conversion optimization',
      'usability testing',
      'wireframing',
      'prototyping'
    ],
    openGraph: {
      title: 'UI/UX Design Services | User-Centered Design',
      description: 'User-centered design that creates seamless experiences and drives engagement. Focus on conversion optimization.',
      url: 'https://www.webvello.com/services/ui-ux-design',
      images: [
        {
          url: '/og-ui-ux-design.jpg',
          width: 1200,
          height: 630,
          alt: 'UI/UX Design Services - Web Vello',
        },
      ],
    },
    twitter: {
      title: 'UI/UX Design Services | User-Centered Design',
      description: 'User-centered design that creates seamless experiences and drives engagement.',
      images: ['/og-ui-ux-design.jpg'],
    },
    alternates: {
      canonical: 'https://www.webvello.com/services/ui-ux-design',
    },
  },
}

// Page-specific metadata
export const pageMetadata: Record<string, Metadata> = {
  'contact': {
    title: 'Contact Web Vello | Get Your Free Digital Marketing Strategy',
    description: 'Ready to grow your business? Contact Web Vello for a free digital marketing strategy session. Get expert advice on SEO, web development, and conversion optimization.',
    keywords: [
      'contact digital marketing agency',
      'free marketing consultation',
      'digital marketing strategy',
      'marketing consultation',
      'contact Web Vello',
      'marketing advice',
      'business growth consultation'
    ],
    openGraph: {
      title: 'Contact Web Vello | Free Digital Marketing Strategy',
      description: 'Get your free digital marketing strategy session. Expert advice on SEO, web development, and conversion optimization.',
      url: 'https://www.webvello.com/contact',
      images: [
        {
          url: 'https://www.webvello.com/api/og?title=Let%27s%20Connect&subtitle=Free%20Digital%20Marketing%20Strategy&type=contact',
          width: 1200,
          height: 630,
          alt: 'Contact Web Vello - Free Marketing Strategy with code preview',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Web Vello | Free Digital Marketing Strategy',
      description: 'Get your free digital marketing strategy session. Expert advice on growth.',
      images: ['https://www.webvello.com/api/og?title=Let%27s%20Connect&subtitle=Free%20Strategy%20Session&type=contact'],
    },
    alternates: {
      canonical: 'https://www.webvello.com/contact',
    },
  },
  'pricing': {
    title: 'Digital Marketing Pricing | Transparent Pricing Plans',
    description: 'Transparent pricing for digital marketing services. Choose from our flexible plans for SEO, web development, and digital marketing. No hidden fees, clear value.',
    keywords: [
      'digital marketing pricing',
      'SEO pricing',
      'web development pricing',
      'marketing agency pricing',
      'transparent pricing',
      'marketing packages',
      'affordable marketing services'
    ],
    openGraph: {
      title: 'Digital Marketing Pricing | Transparent Plans',
      description: 'Transparent pricing for digital marketing services. Flexible plans for SEO, web development, and marketing.',
      url: 'https://www.webvello.com/pricing',
      images: [
        {
          url: '/og-pricing.jpg',
          width: 1200,
          height: 630,
          alt: 'Digital Marketing Pricing - Web Vello',
        },
      ],
    },
    twitter: {
      title: 'Digital Marketing Pricing | Transparent Plans',
      description: 'Transparent pricing for digital marketing services. Flexible plans available.',
      images: ['/og-pricing.jpg'],
    },
    alternates: {
      canonical: 'https://www.webvello.com/pricing',
    },
  },
  'about': {
    title: 'About Web Vello | Digital Marketing Agency Story',
    description: 'Learn about Web Vello\'s mission to drive business growth through data-driven digital marketing. Our team of experts delivers results with AI-powered strategies.',
    keywords: [
      'about Web Vello',
      'digital marketing agency story',
      'marketing team',
      'company mission',
      'marketing expertise',
      'agency background',
      'marketing philosophy'
    ],
    openGraph: {
      title: 'About Web Vello | Digital Marketing Agency',
      description: 'Learn about Web Vello\'s mission to drive business growth through data-driven digital marketing.',
      url: 'https://www.webvello.com/about',
      images: [
        {
          url: '/og-about.jpg',
          width: 1200,
          height: 630,
          alt: 'About Web Vello - Digital Marketing Agency',
        },
      ],
    },
    twitter: {
      title: 'About Web Vello | Digital Marketing Agency',
      description: 'Learn about Web Vello\'s mission to drive business growth through digital marketing.',
      images: ['/og-about.jpg'],
    },
    alternates: {
      canonical: 'https://www.webvello.com/about',
    },
  },
  'case-studies': {
    title: 'Digital Marketing Case Studies | Real Results & Success Stories',
    description: 'Explore our digital marketing case studies and success stories. See real results from our SEO, web development, and marketing campaigns for businesses.',
    keywords: [
      'digital marketing case studies',
      'SEO case studies',
      'marketing success stories',
      'client results',
      'marketing portfolio',
      'business growth examples',
      'marketing testimonials'
    ],
    openGraph: {
      title: 'Digital Marketing Case Studies | Real Results',
      description: 'Explore our digital marketing case studies and success stories. See real results from our campaigns.',
      url: 'https://www.webvello.com/case-studies',
      images: [
        {
          url: '/og-case-studies.jpg',
          width: 1200,
          height: 630,
          alt: 'Digital Marketing Case Studies - Web Vello',
        },
      ],
    },
    twitter: {
      title: 'Digital Marketing Case Studies | Real Results',
      description: 'Explore our digital marketing case studies and success stories.',
      images: ['/og-case-studies.jpg'],
    },
    alternates: {
      canonical: 'https://www.webvello.com/case-studies',
    },
  },
}

// Helper function to generate metadata for any page
export function generateMetadata(page: string, customData?: Partial<Metadata>): Metadata {
  const baseMetadata = defaultMetadata
  const serviceData = serviceMetadata[page]
  const pageData = pageMetadata[page]
  
  const specificData = serviceData || pageData || {}
  
  return {
    ...baseMetadata,
    ...specificData,
    ...customData,
    openGraph: {
      ...baseMetadata.openGraph,
      ...specificData.openGraph,
      ...customData?.openGraph,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...specificData.twitter,
      ...customData?.twitter,
    },
  }
}
