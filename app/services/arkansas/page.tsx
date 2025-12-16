import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Target, BarChart, Brain, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in Arkansas | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and web development for Arkansas businesses. Professional services across Little Rock, Fayetteville, and statewide.',
  keywords: ['arkansas seo', 'arkansas digital marketing', 'geo arkansas', 'web development arkansas'],
  alternates: {
    canonical: 'https://www.webvello.com/services/arkansas',
  },
  openGraph: {
    title: 'Webvello Services in Arkansas | SEO & Digital Marketing',
    description: 'Remote SEO, GEO, and web development for Arkansas businesses. Professional services across Little Rock, Fayetteville, and statewide.',
    url: 'https://www.webvello.com/services/arkansas',
    type: 'website',
  }
}

const faqs = [
  {
    question: "How does Webvello serve Arkansas businesses remotely?",
    answer: "All services are delivered through video calls, project management platforms, and cloud-based collaboration tools. Arkansas businesses receive professional SEO, GEO, and development services without geographic constraints, with regular communication and transparent progress reporting."
  },
  {
    question: "Which Arkansas industries benefit most from SEO and GEO services?",
    answer: "Retail, manufacturing, healthcare, professional services, and agriculture-related businesses across Arkansas see strong returns. Any organization serving Arkansas customers benefits from improved visibility in traditional search engines and AI platforms where buyers research solutions."
  },
  {
    question: "Can you optimize for Northwest Arkansas tech corridor markets?",
    answer: "Yes. We research competitive dynamics and search patterns specific to Fayetteville, Bentonville, Rogers, and Springdale markets. Optimization strategies account for the region's unique technology, retail, and logistics ecosystem."
  },
  {
    question: "Do Arkansas businesses need different SEO strategies than national companies?",
    answer: "Core principles remain consistent, but Arkansas businesses often benefit from emphasizing regional expertise, local service capabilities, and understanding of Arkansas market characteristics. We adapt content to reflect how Arkansas customers search and evaluate providers."
  },
  {
    question: "What's included in Arkansas service delivery?",
    answer: "Comprehensive SEO audits, technical optimization, content strategy, GEO implementation for AI visibility, schema markup, and performance tracking. Each engagement includes strategy development, implementation, and ongoing optimization based on Arkansas market feedback."
  },
  {
    question: "How long before Arkansas businesses see results?",
    answer: "Technical improvements often appear within 4-8 weeks. Meaningful visibility gains in Arkansas markets typically require 3-6 months of consistent effort. Timeline depends on competition level and current site condition."
  }
]

const pageSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/arkansas',
  title: 'Webvello Services in Arkansas | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and web development for Arkansas businesses. Professional services across Little Rock, Fayetteville, and statewide.',
  faqs: faqs,
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'Arkansas', url: 'https://www.webvello.com/services/arkansas' }
  ]
})

export default function ArkansasServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">
              Webvello Services in Arkansas
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Webvello delivers SEO, GEO, and web development services remotely to Arkansas businesses. Organizations throughout the state gain visibility in traditional search and AI-powered platforms without geographic barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Serving Arkansas Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Serving Businesses Across Arkansas
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              Arkansas businesses span retail, manufacturing, agriculture, healthcare, and technology sectors. Each industry requires digital marketing that addresses both local market needs and broader regional commerce opportunities.
            </p>
            <p className="text-lg text-secondary-600">
              Webvello provides SEO, GEO (Generative Engine Optimization), and web development through remote delivery. Arkansas organizations appear in Google search, AI platform responses, and other discovery channels where customers research Arkansas services.
            </p>
          </div>
        </div>
      </section>

      {/* Remote Delivery Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Remote Service Delivery Across Arkansas
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                    <Globe className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    Complete Remote Operations
                  </h3>
                  <p className="text-secondary-600">
                    All strategy sessions, technical work, and reporting happen through digital channels. Arkansas businesses access the same expertise and service quality as organizations in any other market.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                    <Target className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    Arkansas Market Research
                  </h3>
                  <p className="text-secondary-600">
                    We analyze search patterns, competitive landscapes, and customer behavior specific to Arkansas industries. Strategies account for regional market characteristics and how Arkansas customers discover services.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                    <BarChart className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    Transparent Performance Reporting
                  </h3>
                  <p className="text-secondary-600">
                    Dashboard reports show visibility improvements across Arkansas search results and AI citations. You see traffic growth, ranking changes, and brand mentions develop over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Arkansas Service Coverage
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              Webvello serves businesses throughout Arkansas, from major metros to regional markets. Remote delivery ensures consistent service quality regardless of physical location.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Little Rock', 'Fayetteville', 'Fort Smith', 'Springdale', 'Jonesboro', 'Rogers', 'Conway', 'Bentonville', 'Pine Bluff', 'Hot Springs'].map((city) => (
                <div key={city} className="flex items-center gap-2 text-secondary-700">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* State and City Pages Relationship */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              How State and City Pages Work Together
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              This Arkansas state page describes statewide service delivery and capabilities. For specific metros where Webvello has developed concentrated expertise, city-level pages provide additional local context and market insights.
            </p>
            <p className="text-lg text-secondary-600">
              Both page types connect to the same services—the distinction is geographic detail. State pages offer broad overview; city pages add local specificity where available.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-secondary-200 pb-6 last:border-0">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Improve Your Arkansas Market Visibility?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Discover how SEO and GEO services expand your reach across Arkansas markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Discussion</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

