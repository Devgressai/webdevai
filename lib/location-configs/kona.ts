import { LocationPageConfig } from './types'

export const konaConfig: LocationPageConfig = {
  metadata: {
    city: 'Kona',
    state: 'Hawaii',
    stateCode: 'HI',
    fullName: 'Kona, Hawaii',
    slug: 'kona',
    population: '~11,000',
    timezone: 'Hawaii-Aleutian (HST)'
  },
  
  hero: {
    badge: 'Trusted by 500+ businesses nationwide',
    headline: 'Kona Web Design & Digital Marketing That Drives',
    highlightText: '3-5x Growth',
    subheadline: 'We help Kona businesses dominate local search, attract more tourists, and convert website visitors into customers through AI-powered SEO, stunning web design, and data-driven marketing.',
    primaryCTA: {
      text: 'Get Free Strategy Session',
      href: '/contact'
    },
    secondaryCTA: {
      text: 'View Our Work',
      href: '/case-studies'
    }
  },
  
  stats: [
    { value: '500+', label: 'Businesses Served' },
    { value: '3-5x', label: 'Average Growth' },
    { value: '300%+', label: 'Traffic Increase' },
    { value: '24/7', label: 'Support Available' }
  ],
  
  services: [
    {
      name: 'Kona Web Design',
      description: 'Custom websites designed for Kona\'s tourism and hospitality industry. Mobile-first, fast-loading, and optimized for conversions.',
      features: [
        'Mobile-responsive design',
        'Booking system integration',
        'High-quality image optimization',
        'Fast page load speeds'
      ],
      href: '/services/website-design'
    },
    {
      name: 'Local SEO for Kona',
      description: 'Dominate local search results for "Kona hotels," "Kona restaurants," and "things to do in Kona." Get found by tourists planning their trip.',
      features: [
        'Google Business Profile optimization',
        'Local citation building',
        'Review management',
        'Tourism keyword targeting'
      ],
      href: '/services/local-seo'
    },
    {
      name: 'AI-Powered SEO',
      description: 'Advanced SEO strategies using artificial intelligence to identify ranking opportunities and optimize content for maximum visibility.',
      features: [
        'AI keyword research',
        'Content optimization',
        'Competitor analysis',
        'Performance tracking'
      ],
      href: '/services/ai-seo'
    },
    {
      name: 'Web Development',
      description: 'Custom web applications built with React and Next.js. Perfect for booking systems, e-commerce, and complex business needs.',
      features: [
        'React & Next.js development',
        'API integrations',
        'Payment processing',
        'Custom functionality'
      ],
      href: '/services/web-development'
    }
  ],
  
  testimonials: [
    {
      name: 'Alana Kealoha',
      role: 'Owner',
      company: 'Kona Coffee Plantation Tours',
      content: 'Web Vello transformed our online presence. We went from barely showing up in Google to ranking #1 for "Kona coffee tours." Our bookings increased 250% in just 4 months.',
      rating: 5,
      results: ['250% more bookings', '#1 Google ranking', '4 month timeline']
    },
    {
      name: 'Marcus Chen',
      role: 'General Manager',
      company: 'Oceanfront Resort Kona',
      content: 'The new website is stunning and our direct bookings have skyrocketed. We\'re no longer as dependent on OTAs. The ROI has been incredible.',
      rating: 5,
      results: ['180% direct bookings', 'Reduced OTA fees', 'Beautiful design']
    },
    {
      name: 'Leilani Nakamura',
      role: 'Owner',
      company: 'Kona Adventure Excursions',
      content: 'Professional, responsive, and results-driven. Our website now ranks for all our target keywords and we\'re getting quality leads every single day.',
      rating: 5,
      results: ['Daily quality leads', 'Top keyword rankings', 'Excellent support']
    }
  ],
  
  faqs: [
    {
      question: 'Why should Kona businesses choose Web Vello for digital marketing?',
      answer: 'Web Vello specializes in helping tourism, hospitality, and local businesses in Kona attract more visitors and customers. We understand the unique challenges of marketing in Hawaii\'s competitive tourism market and use proven strategies to help you stand out. Our clients typically see 3-5x growth in organic traffic and significant increases in bookings and revenue.'
    },
    {
      question: 'How long does it take to see results from SEO in Kona?',
      answer: 'Most Kona businesses see initial improvements within 30-60 days, with significant results appearing within 3-6 months. Local SEO for Kona can show faster results, especially for Google Business Profile optimization and local citations. Tourism-related keywords often see quick wins during peak season.'
    },
    {
      question: 'Do you work with Kona businesses remotely?',
      answer: 'Yes! We work with businesses throughout Kona and the Big Island entirely remotely. Our team has experience serving Hawaii businesses and understands the local market, tourism industry, and seasonal patterns. We provide the same high-quality service regardless of location, with regular video calls and transparent reporting.'
    },
    {
      question: 'What industries do you serve in Kona?',
      answer: 'We specialize in Kona\'s key industries including hotels and resorts, vacation rentals, restaurants and cafes, coffee farms and tours, snorkeling and diving operations, adventure tours, wedding services, and retail shops. We understand the unique needs of Hawaii\'s tourism and hospitality sector.'
    },
    {
      question: 'How much does web design and SEO cost for Kona businesses?',
      answer: 'Our services are customized based on your specific needs and goals. Web design projects typically start at $3,500, while ongoing SEO and digital marketing services start at $2,500/month. We offer flexible packages for Kona businesses of all sizes. Contact us for a free consultation and custom quote.'
    }
  ],
  
  areasServed: [
    { name: 'Kailua-Kona', description: 'Downtown Kona and waterfront district' },
    { name: 'Keauhou', description: 'South Kona resort area' },
    { name: 'Holualoa', description: 'Upcountry Kona coffee country' },
    { name: 'Kealakekua', description: 'Historic bay and coffee farms' },
    { name: 'Captain Cook', description: 'South Kona residential and agricultural' },
    { name: 'Honalo', description: 'Central Kona corridor' },
    { name: 'Kainaliu', description: 'Small town Kona charm' },
    { name: 'Waikoloa', description: 'North Kona resort destination' }
  ],
  
  whyChooseUs: {
    title: 'Why Kona Businesses Choose Web Vello',
    description: 'We understand the unique challenges of marketing in Hawaii\'s competitive tourism market and deliver solutions that drive real results.',
    features: [
      {
        title: 'Tourism Industry Expertise',
        description: 'Deep understanding of Kona\'s tourism market, seasonal patterns, and visitor behavior',
        icon: 'Palmtree'
      },
      {
        title: 'Local Market Knowledge',
        description: 'Experience serving Hawaii businesses with strategies tailored for island markets',
        icon: 'MapPin'
      },
      {
        title: 'Proven Results',
        description: 'Track record of helping Kona businesses achieve 3-5x growth in traffic and bookings',
        icon: 'TrendingUp'
      },
      {
        title: 'Fast Turnaround',
        description: 'Quick project delivery with ongoing optimization to maximize your ROI',
        icon: 'Zap'
      }
    ]
  },
  
  finalCTA: {
    title: 'Ready to Grow Your Kona Business?',
    description: 'Get a free strategy session and discover how we can help you dominate local search, attract more visitors, and increase revenue. Limited spots available this month.',
    primaryCTA: {
      text: 'Get Free Strategy Session',
      href: '/contact'
    },
    secondaryCTA: {
      text: 'View Case Studies',
      href: '/case-studies'
    }
  }
}

