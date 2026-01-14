import { Metadata } from 'next'
import { LocationLandingTemplate } from '@/components/templates/LocationLandingTemplate'
import { konaConfig } from '@/lib/location-configs/kona'
import { generateLocationPageSchema } from '@/lib/location-schema-generator'
import { SchemaMarkup } from '@/components/seo/schema-markup'

export const metadata: Metadata = {
  title: 'Kona SEO & Web Design | AI-Powered Digital Marketing',
  description: 'Kona\'s premier SEO & web design agency. We help Big Island businesses dominate Google + AI search with technical SEO, GEO optimization, and high-performance websites.',
  keywords: 'Kona SEO, Big Island web design, Hawaii digital marketing, Kona web development, local SEO Kona, AI search optimization Hawaii',
  openGraph: {
    title: 'Web Vello Kona | Technical SEO & Web Development for Big Island Businesses',
    description: 'Dominate local search and AI platforms. Technical SEO, GEO optimization, and conversion-focused web development for Kona businesses. Free strategy session.',
    url: 'https://www.webvello.com/locations/hawaii/kona',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.webvello.com/og-kona.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Vello Kona - Technical SEO & Web Development for Big Island Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Vello Kona | Technical SEO & Web Development',
    description: 'Dominate local search and AI platforms. Technical SEO, GEO optimization, and conversion-focused web development for Kona businesses.',
    images: ['https://www.webvello.com/og-kona.jpg'],
  },
  alternates: {
    canonical: 'https://www.webvello.com/locations/hawaii/kona',
  },
}

export default function KonaPage() {
  // Generate enhanced schema for this location
  const locationSchema = generateLocationPageSchema(
    {
      city: konaConfig.metadata.city,
      state: konaConfig.metadata.state,
      stateCode: konaConfig.metadata.stateCode,
      fullName: konaConfig.metadata.fullName,
      slug: konaConfig.metadata.slug,
      island: 'Big Island',
      areasServed: konaConfig.areasServed.map(area => area.name)
    },
    konaConfig.faqs,
    konaConfig.services
  )

  return (
    <>
      {/* Schema Markup */}
      {locationSchema.map((schema, index) => (
        <SchemaMarkup key={index} schema={schema} />
      ))}
      
      {/* Page Content */}
      <LocationLandingTemplate config={konaConfig} />
    </>
  )
}

