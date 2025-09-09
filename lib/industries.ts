export interface Industry {
  slug: string
  name: string
  description: string
}

export const industries: Record<string, Industry> = {
  finance: {
    slug: 'finance',
    name: 'Finance',
    description:
      'Banks, investment firms, fintech, and financial services companies requiring compliance, trust, and conversion-focused experiences.'
  },
  technology: {
    slug: 'technology',
    name: 'Technology',
    description:
      'Software, SaaS, and tech-enabled businesses focused on growth, product launches, and complex value propositions.'
  },
  healthcare: {
    slug: 'healthcare',
    name: 'Healthcare',
    description:
      'Providers, clinics, and healthcare systems with HIPAA concerns, local visibility, and patient acquisition needs.'
  },
  manufacturing: {
    slug: 'manufacturing',
    name: 'Manufacturing',
    description:
      'Industrial manufacturers and suppliers requiring lead gen, technical content, and distributor/channel alignment.'
  },
  realestate: {
    slug: 'realestate',
    name: 'Real Estate',
    description:
      'Residential and commercial real estate firms prioritizing local SEO, listings, and investor relations.'
  },
  retail: {
    slug: 'retail',
    name: 'Retail',
    description:
      'E-commerce and omnichannel retailers focused on merchandising, CRO, and lifecycle marketing.'
  },
  education: {
    slug: 'education',
    name: 'Education',
    description:
      'Schools, universities, and edtech companies targeting enrollment, program awareness, and content authority.'
  },
  tourism: {
    slug: 'tourism',
    name: 'Tourism',
    description:
      'Travel, hospitality, and attractions requiring rich media, local SEO, and seasonality-driven campaigns.'
  },
  aerospace: {
    slug: 'aerospace',
    name: 'Aerospace',
    description:
      'Aviation and aerospace companies with long sales cycles, certifications, and complex procurement processes.'
  },
  energy: {
    slug: 'energy',
    name: 'Energy',
    description:
      'Oil and gas, renewables, and utilities requiring stakeholder communications and service visibility.'
  },
  government: {
    slug: 'government',
    name: 'Government',
    description:
      'Public sector organizations focusing on accessibility, transparency, and constituent services.'
  },
  logistics: {
    slug: 'logistics',
    name: 'Logistics',
    description:
      'Transportation, warehousing, and supply chain companies optimizing demand capture and operations.'
  },
  automotive: {
    slug: 'automotive',
    name: 'Automotive',
    description:
      'OEMs, suppliers, and mobility services with technical content needs and local presence.'
  },
  entertainment: {
    slug: 'entertainment',
    name: 'Entertainment',
    description:
      'Film, music, and media businesses prioritizing audience growth and engagement.'
  },
  fashion: {
    slug: 'fashion',
    name: 'Fashion',
    description:
      'Apparel and lifestyle brands focused on merchandising, brand, and e‑commerce.'
  },
  agriculture: {
    slug: 'agriculture',
    name: 'Agriculture',
    description:
      'Producers and agri-businesses needing B2B demand gen and local visibility.'
  },
}

export function getIndustry(slug: string): Industry | undefined {
  return industries[slug]
}

export const industrySlugs: string[] = Object.keys(industries)


