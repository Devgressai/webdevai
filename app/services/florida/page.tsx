import { Button } from '../../../components/ui/button'
import { ArrowRight, MapPin, Target, BarChart, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in Florida | SEO & Digital Marketing',
  description: 'Professional SEO, GEO, and web development for Florida businesses. Remote services across Miami, Jacksonville, Tampa, Orlando, and statewide.',
  keywords: ['florida seo', 'florida digital marketing', 'geo florida', 'web development florida'],
  alternates: {
    canonical: 'https://www.webvello.com/services/florida',
  },
  openGraph: {
    title: 'Webvello Services in Florida | SEO & Digital Marketing',
    description: 'Professional SEO, GEO, and web development for Florida businesses. Remote services across Miami, Jacksonville, Tampa, Orlando, and statewide.',
    url: 'https://www.webvello.com/services/florida',
    type: 'website',
  }
}

const faqs = [
  {
    question: "How does Webvello deliver services to Florida businesses?",
    answer: "All services are delivered remotely through video conferencing, project management platforms, and collaborative tools. Florida businesses receive professional SEO, GEO, and development services without geographic constraints, with regular communication and transparent reporting."
  },
  {
    question: "Which Florida industries benefit most from SEO and GEO?",
    answer: "Tourism, hospitality, real estate, healthcare, technology, and professional services across Florida see significant ROI. Any organization serving Florida customers gains advantage from appearing in both traditional search engines and AI platforms where travelers and decision-makers research solutions."
  },
  {
    question: "Do you have city-specific pages for Florida metros?",
    answer: "Yes. We maintain dedicated pages for Miami, Jacksonville, Tampa, and Orlando where we've developed concentrated expertise. These city pages provide additional local context while connecting to the same core services described on this Florida state page."
  },
  {
    question: "How do you optimize for Florida's diverse regional markets?",
    answer: "We research competitive dynamics across Florida's distinct regions—South Florida, Central Florida, North Florida, and the Gulf Coast. Optimization strategies account for regional differences in customer behavior, seasonal patterns, and competitive landscapes."
  },
  {
    question: "What's included in Florida service delivery?",
    answer: "Comprehensive SEO audits, technical optimization, content strategy, GEO implementation for AI visibility, schema markup, and performance tracking. Every engagement includes strategy development, hands-on implementation, and ongoing optimization based on Florida market feedback."
  },
  {
    question: "How long does it take to see results in Florida markets?",
    answer: "Technical improvements often appear within 4-8 weeks. Competitive visibility gains in major Florida metros typically require 3-6 months of sustained effort. Timeline varies based on industry competition and current site condition."
  }
]

const pageSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/florida',
  title: 'Webvello Services in Florida | SEO & Digital Marketing',
  description: 'Professional SEO, GEO, and web development for Florida businesses. Remote services across Miami, Jacksonville, Tampa, Orlando, and statewide.',
  faqs: faqs,
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'Florida', url: 'https://www.webvello.com/services/florida' }
  ]
})

export default function FloridaServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section className="relative py-24 bg-gradient-to-br from-cyan-50 via-white to-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">
              Webvello Services in Florida
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Webvello provides SEO, GEO, and web development services to Florida businesses through expert remote delivery. Organizations across the state gain visibility in traditional search engines and AI-powered discovery platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Serving Businesses Across Florida
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              Florida's diverse economy spans tourism, real estate, healthcare, technology, finance, and international trade. Each sector requires digital marketing that addresses both local market dynamics and the state's role in national and international commerce.
            </p>
            <p className="text-lg text-secondary-600">
              Webvello delivers comprehensive SEO, GEO (Generative Engine Optimization), and web development services remotely. Florida businesses appear in Google, ChatGPT, Perplexity, and other platforms where customers discover and evaluate services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              How Webvello Serves Florida Businesses
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
                    Complete Remote Service Model
                  </h3>
                  <p className="text-secondary-600">
                    All strategy development, technical implementation, and performance reporting occur through digital channels. Florida businesses receive premium service quality without travel overhead or geographic constraints.
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
                    Florida Market Expertise
                  </h3>
                  <p className="text-secondary-600">
                    We research competitive landscapes, seasonal patterns, and customer behavior specific to Florida industries and regions. Service delivery adapts to market dynamics from South Florida's international focus to Central Florida's tourism ecosystem.
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
                    Performance Transparency
                  </h3>
                  <p className="text-secondary-600">
                    Regular dashboards show visibility improvements across Florida search results and AI platform mentions. You see traffic growth, ranking changes, and brand citations develop in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Florida Coverage Areas
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              Webvello serves businesses throughout Florida. Our remote delivery model ensures consistent service quality for organizations in major metros and regional markets.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Hialeah', 'Tallahassee', 'Fort Lauderdale', 'Port St. Lucie', 'Cape Coral', 'Pembroke Pines', 'Hollywood'].map((city) => (
                <div key={city} className="flex items-center gap-2 text-secondary-700">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary-600">
              For additional detail on Miami, Jacksonville, Tampa, and Orlando markets, see our city-specific service pages.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              State Pages and City Pages Work Together
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              This Florida state page provides statewide service overview and delivery model. City-level pages for select Florida metros offer additional local context, competitive analysis, and industry-specific insights.
            </p>
            <p className="text-lg text-secondary-600">
              Both connect to identical services—SEO, GEO, web development. The difference is geographic specificity. State pages describe broad capabilities; city pages add localized detail where we've built concentrated expertise.
            </p>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Strengthen Your Florida Market Position?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Explore how SEO and GEO services improve visibility across Florida's diverse markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Discuss Your Goals</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

