import { Metadata } from 'next'
import { LocationLandingTemplate } from '@/components/templates/LocationLandingTemplate'
import { honoluluConfig } from '@/lib/location-configs/honolulu'
import { generateLocationPageSchema } from '@/lib/location-schema-generator'
import { SchemaMarkup } from '@/components/seo/schema-markup'

export const metadata: Metadata = {
  title: 'Honolulu SEO & Web Development | Enterprise Digital Marketing',
  description: 'Enterprise-grade SEO & web development for Honolulu businesses. Technical SEO, AI search optimization, and high-performance websites for competitive markets.',
  keywords: 'Honolulu SEO, Oahu web development, Hawaii digital marketing, enterprise SEO Honolulu, technical SEO Hawaii, AI search optimization',
  openGraph: {
    title: 'Web Vello Honolulu | Enterprise SEO & Web Development for Oahu Businesses',
    description: 'Dominate Honolulu\'s competitive digital landscape. Enterprise-grade technical SEO, GEO optimization, and conversion-focused web development. Trusted by Hawaii\'s leading businesses.',
    url: 'https://www.webvello.com/locations/hawaii/honolulu',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.webvello.com/og-honolulu.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Vello Honolulu - Enterprise SEO & Web Development for Oahu Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Vello Honolulu | Enterprise SEO & Web Development',
    description: 'Dominate Honolulu\'s competitive digital landscape. Enterprise-grade technical SEO, GEO optimization, and conversion-focused web development.',
    images: ['https://www.webvello.com/og-honolulu.jpg'],
  },
  alternates: {
    canonical: 'https://www.webvello.com/locations/hawaii/honolulu',
  },
}

export default function HonoluluPage() {
  // Generate enhanced schema for this location
  const locationSchema = generateLocationPageSchema(
    {
      city: honoluluConfig.metadata.city,
      state: honoluluConfig.metadata.state,
      stateCode: honoluluConfig.metadata.stateCode,
      fullName: honoluluConfig.metadata.fullName,
      slug: honoluluConfig.metadata.slug,
      island: 'Oahu',
      areasServed: honoluluConfig.areasServed.map(area => area.name)
    },
    honoluluConfig.faqs,
    honoluluConfig.services
  )

  return (
    <>
      {/* Schema Markup */}
      {locationSchema.map((schema, index) => (
        <SchemaMarkup key={index} schema={schema} />
      ))}
      
      {/* Page Content */}
      <LocationLandingTemplate config={honoluluConfig} />
    </>
  )
}

