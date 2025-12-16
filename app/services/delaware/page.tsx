import { Button } from '../../../components/ui/button'
import { ArrowRight, MapPin, Target, BarChart, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in Delaware | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and web development for Delaware businesses. Professional services across Wilmington, Dover, Newark, and statewide.',
  keywords: ['delaware seo', 'delaware digital marketing', 'geo delaware', 'web development delaware'],
  alternates: {
    canonical: 'https://www.webvello.com/services/delaware',
  },
  openGraph: {
    title: 'Webvello Services in Delaware | SEO & Digital Marketing',
    description: 'Remote SEO, GEO, and web development for Delaware businesses. Professional services across Wilmington, Dover, Newark, and statewide.',
    url: 'https://www.webvello.com/services/delaware',
    type: 'website',
  }
}

const faqs = [
  {
    question: "How does Webvello serve Delaware businesses remotely?",
    answer: "All services are delivered through video calls, project management platforms, and collaborative tools. Delaware businesses receive professional SEO, GEO, and development services with regular communication and transparent reporting throughout every engagement."
  },
  {
    question: "Which Delaware industries benefit from SEO and GEO services?",
    answer: "Finance, corporate services, healthcare, manufacturing, and professional services across Delaware see strong returns. Any organization serving Delaware customers or leveraging Delaware's business-friendly environment gains advantage from appearing in both traditional and AI search platforms."
  },
  {
    question: "Can you optimize for Delaware's role as a corporate headquarters state?",
    answer: "Yes. We understand Delaware's unique position in corporate America and optimize content to reach decision-makers researching Delaware business services. Strategies account for how companies evaluate Delaware-based service providers and corporate solutions."
  },
  {
    question: "How do you handle Delaware's proximity to major metro markets?",
    answer: "We research competitive dynamics within Delaware and the broader Philadelphia-Baltimore corridor. Optimization strategies account for how Delaware businesses position themselves regionally while serving customers across state lines."
  },
  {
    question: "What's included in Delaware service delivery?",
    answer: "Comprehensive SEO audits, technical optimization, content strategy, GEO implementation for AI visibility, schema markup, and performance tracking. Every engagement includes strategy development, implementation, and ongoing optimization."
  },
  {
    question: "How long does it take to see results in Delaware markets?",
    answer: "Technical improvements often appear within 4-8 weeks. Meaningful visibility gains in Delaware markets typically require 3-6 months of sustained effort. Timeline varies based on industry competition and current site condition."
  }
]

const pageSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/delaware',
  title: 'Webvello Services in Delaware | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and web development for Delaware businesses. Professional services across Wilmington, Dover, Newark, and statewide.',
  faqs: faqs,
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'Delaware', url: 'https://www.webvello.com/services/delaware' }
  ]
})

export default function DelawareServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">
              Webvello Services in Delaware
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Webvello delivers SEO, GEO, and web development services remotely to Delaware businesses. Organizations across the state gain visibility in traditional search and AI-powered platforms without geographic constraints.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Serving Businesses Across Delaware
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              Delaware's economy blends finance, corporate services, healthcare, and manufacturing. Each sector requires digital marketing that addresses both local market needs and Delaware's unique role in American commerce.
            </p>
            <p className="text-lg text-secondary-600">
              Webvello provides SEO, GEO (Generative Engine Optimization), and web development through remote delivery. Delaware businesses appear in Google, ChatGPT, Perplexity, and other platforms where customers discover solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Remote Service Delivery for Delaware Businesses
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
                    Fully Remote Operations
                  </h3>
                  <p className="text-secondary-600">
                    All strategy, implementation, and reporting occur through digital channels. Delaware businesses access the same expertise and service quality as clients in any other market.
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
                    Delaware Market Understanding
                  </h3>
                  <p className="text-secondary-600">
                    We research competitive landscapes, search patterns, and customer behavior specific to Delaware industries. Strategies account for regional characteristics and how Delaware businesses position themselves.
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
                    Clear Performance Tracking
                  </h3>
                  <p className="text-secondary-600">
                    Dashboard reports show visibility improvements across Delaware search results and AI citations. You see traffic growth, ranking changes, and brand mentions develop over time.
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
              Delaware Service Coverage
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              Webvello serves businesses throughout Delaware. Remote delivery ensures consistent service quality regardless of physical location.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Wilmington', 'Dover', 'Newark', 'Middletown', 'Smyrna', 'Milford', 'Seaford', 'Georgetown', 'Elsmere', 'New Castle'].map((city) => (
                <div key={city} className="flex items-center gap-2 text-secondary-700">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              How State and City Pages Work Together
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              This Delaware state page provides statewide service overview. Where Webvello has developed concentrated expertise in specific metros, city-level pages offer additional local context and market insights.
            </p>
            <p className="text-lg text-secondary-600">
              Both connect to identical services—the distinction is geographic detail. State pages describe broad capabilities; city pages add localized specificity where available.
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
            Ready to Strengthen Your Delaware Visibility?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Explore how SEO and GEO services improve your Delaware market presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Conversation</Link>
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

