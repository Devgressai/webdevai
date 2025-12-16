import { Button } from '../../../components/ui/button'
import { ArrowRight, MapPin, Target, BarChart, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in Georgia | SEO & Digital Marketing',
  description: 'Professional SEO, GEO, and web development for Georgia businesses. Remote services across Atlanta, Savannah, Augusta, and statewide.',
  keywords: ['georgia seo', 'georgia digital marketing', 'geo georgia', 'web development georgia'],
  alternates: {
    canonical: 'https://www.webvello.com/services/georgia',
  },
  openGraph: {
    title: 'Webvello Services in Georgia | SEO & Digital Marketing',
    description: 'Professional SEO, GEO, and web development for Georgia businesses. Remote services across Atlanta, Savannah, Augusta, and statewide.',
    url: 'https://www.webvello.com/services/georgia',
    type: 'website',
  }
}

const faqs = [
  {
    question: "How does Webvello serve Georgia businesses remotely?",
    answer: "All services are delivered through video calls, project management platforms, and collaborative tools. Georgia businesses receive professional SEO, GEO, and development services with regular communication and transparent reporting throughout every engagement."
  },
  {
    question: "Which Georgia industries benefit from SEO and GEO services?",
    answer: "Technology, logistics, film production, healthcare, financial services, and professional services across Georgia see strong returns. Any organization serving Georgia customers gains advantage from appearing in both traditional search engines and AI platforms where decision-makers research solutions."
  },
  {
    question: "Do you have a city-specific page for Atlanta?",
    answer: "Yes. We maintain a dedicated Atlanta page with additional metro-specific insights, competitive analysis, and industry context for the Atlanta market. Both this Georgia state page and the Atlanta city page connect to the same core services."
  },
  {
    question: "How do you optimize for Georgia's diverse economy?",
    answer: "We research competitive landscapes and customer behavior across Georgia's key sectors—from Atlanta's technology and finance hub to Savannah's logistics corridor. Optimization strategies account for regional differences and how Georgia businesses position themselves within different markets."
  },
  {
    question: "What's included in Georgia service delivery?",
    answer: "Comprehensive SEO audits, technical optimization, content strategy, GEO implementation for AI visibility, schema markup, and performance tracking. Every engagement includes strategy development, implementation, and ongoing optimization based on Georgia market feedback."
  },
  {
    question: "How long does it take to see results in Georgia markets?",
    answer: "Technical improvements often appear within 4-8 weeks. Meaningful visibility gains in competitive Georgia markets typically require 3-6 months of sustained effort. Timeline varies based on industry competition and current site condition."
  }
]

const pageSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/georgia',
  title: 'Webvello Services in Georgia | SEO & Digital Marketing',
  description: 'Professional SEO, GEO, and web development for Georgia businesses. Remote services across Atlanta, Savannah, Augusta, and statewide.',
  faqs: faqs,
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'Georgia', url: 'https://www.webvello.com/services/georgia' }
  ]
})

export default function GeorgiaServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section className="relative py-24 bg-gradient-to-br from-rose-50 via-white to-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">
              Webvello Services in Georgia
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Webvello delivers SEO, GEO, and web development services remotely to Georgia businesses. Organizations across the state gain visibility in traditional search and AI-powered discovery platforms without geographic barriers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Serving Businesses Across Georgia
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              Georgia's economy encompasses technology, logistics, film production, healthcare, financial services, and manufacturing. Each sector requires digital marketing that addresses both local market needs and Georgia's position as a Southeast regional hub. <Link href="/services/geo-atlanta" className="text-primary-600 hover:text-primary-700 underline">Businesses in Atlanta</Link> and organizations throughout Georgia benefit from comprehensive digital visibility strategies.
            </p>
            <p className="text-lg text-secondary-600">
              Webvello provides SEO, GEO (Generative Engine Optimization), and web development through remote delivery. Georgia businesses appear in Google, ChatGPT, Perplexity, and other platforms where customers and partners discover solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Remote Service Delivery for Georgia Businesses
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
                    All strategy, implementation, and reporting occur through digital channels. Georgia businesses access the same expertise and service quality as clients in any other market.
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
                    Georgia Market Understanding
                  </h3>
                  <p className="text-secondary-600">
                    We research competitive dynamics, search patterns, and customer behavior specific to Georgia industries. Strategies account for regional market characteristics and how Georgia businesses position themselves within Southeast commerce.
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
                    Dashboard reports show visibility improvements across Georgia search results and AI citations. You see traffic growth, ranking changes, and brand mentions develop over time.
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
              Georgia Service Coverage
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              Webvello serves businesses throughout Georgia. Remote delivery ensures consistent service quality for organizations in urban centers and regional markets.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['Atlanta', 'Columbus', 'Augusta', 'Savannah', 'Athens', 'Sandy Springs', 'Roswell', 'Macon', 'Johns Creek', 'Albany', 'Warner Robins', 'Alpharetta'].map((city) => (
                <div key={city} className="flex items-center gap-2 text-secondary-700">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary-600">
              For additional detail on Atlanta market dynamics, see our Atlanta city page.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Understanding State and City Service Pages
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              This Georgia state page provides statewide service overview and remote delivery model. City-level pages for select metros offer additional local context, competitive analysis, and industry-specific insights for those markets.
            </p>
            <p className="text-lg text-secondary-600">
              Both page types connect to identical services—SEO, GEO, web development. The difference is geographic specificity. State pages describe broad capabilities; city pages add localized detail where available.
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
            Ready to Strengthen Your Georgia Market Position?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Discover how SEO and GEO services expand your reach across Georgia markets.
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

