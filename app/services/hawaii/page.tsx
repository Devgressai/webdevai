import { Button } from '../../../components/ui/button'
import { ArrowRight, MapPin, Target, BarChart, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in Hawaii | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and web development for Hawaii businesses. Professional services across Honolulu, Hilo, Kailua, and statewide.',
  keywords: ['hawaii seo', 'hawaii digital marketing', 'geo hawaii', 'web development hawaii'],
  alternates: {
    canonical: 'https://www.webvello.com/services/hawaii',
  },
  openGraph: {
    title: 'Webvello Services in Hawaii | SEO & Digital Marketing',
    description: 'Remote SEO, GEO, and web development for Hawaii businesses. Professional services across Honolulu, Hilo, Kailua, and statewide.',
    url: 'https://www.webvello.com/services/hawaii',
    type: 'website',
  }
}

const faqs = [
  {
    question: "How does remote service delivery work for Hawaii businesses?",
    answer: "All services are delivered through video calls, collaborative platforms, and cloud-based tools. Hawaii businesses receive identical service quality to clients in any other state, with communication scheduled around Pacific timezone and operational needs."
  },
  {
    question: "Which Hawaii industries benefit from SEO and GEO optimization?",
    answer: "Tourism, hospitality, real estate, healthcare, and professional services across Hawaii gain significant advantage. Any organization serving Hawaii residents or travelers benefits from appearing in both traditional search engines and AI platforms where customers research Hawaii services."
  },
  {
    question: "Can you optimize for Hawaii's unique tourism market?",
    answer: "Yes. We research seasonal patterns, traveler behavior, and competitive positioning within Hawaii tourism sectors. Optimization strategies account for how visitors discover Hawaii experiences and how businesses differentiate themselves in discovery channels."
  },
  {
    question: "How do you handle timezone differences with Hawaii clients?",
    answer: "We schedule meetings during overlapping business hours and maintain flexible communication channels. Most Hawaii businesses prefer asynchronous updates via project dashboards, with periodic video check-ins scheduled at mutually convenient times."
  },
  {
    question: "What's included in Hawaii service delivery?",
    answer: "Comprehensive SEO audits, technical optimization, content strategy, GEO implementation for AI visibility, schema markup, and performance tracking. Every engagement includes strategy development, implementation, and ongoing optimization."
  },
  {
    question: "How long does it take to see results in Hawaii markets?",
    answer: "Technical improvements often appear within 4-8 weeks. Meaningful visibility gains in Hawaii markets typically require 3-6 months. Tourism-focused businesses may see seasonal variation in results based on visitor patterns."
  }
]

const pageSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/hawaii',
  title: 'Webvello Services in Hawaii | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and web development for Hawaii businesses. Professional services across Honolulu, Hilo, Kailua, and statewide.',
  faqs: faqs,
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'Hawaii', url: 'https://www.webvello.com/services/hawaii' }
  ]
})

export default function HawaiiServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section className="relative py-24 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">
              Webvello Services in Hawaii
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Webvello delivers SEO, GEO, and web development services remotely to Hawaii businesses. Organizations across the islands gain visibility in traditional search and AI-powered platforms without geographic constraints.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Serving Businesses Across Hawaii
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              Hawaii's economy centers on tourism, hospitality, real estate, healthcare, and professional services. Each sector requires digital marketing that addresses both local resident needs and visitor discovery patterns.
            </p>
            <p className="text-lg text-secondary-600">
              Webvello provides SEO, GEO (Generative Engine Optimization), and web development through remote delivery. Hawaii businesses appear in Google, ChatGPT, Perplexity, and other platforms where customers and travelers research Hawaii services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Remote Service Delivery for Hawaii Businesses
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
                    Complete Remote Capabilities
                  </h3>
                  <p className="text-secondary-600">
                    All strategy development, technical implementation, and performance reporting occur through digital channels. Hawaii businesses access the same expertise and service quality as clients in any other market.
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
                    Hawaii Market Research
                  </h3>
                  <p className="text-secondary-600">
                    We analyze seasonal trends, visitor behavior, and competitive dynamics specific to Hawaii industries. Strategies account for how customers discover Hawaii services through different channels and platforms.
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
                    Dashboard reports show visibility improvements across Hawaii search results and AI platform citations. You see exactly how traffic, rankings, and brand mentions develop over time.
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
              Hawaii Service Coverage
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              Webvello serves businesses across all Hawaiian islands. Remote delivery ensures consistent service quality regardless of physical location.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Honolulu', 'Hilo', 'Kailua', 'Kapolei', 'Kaneohe', 'Waipahu', 'Pearl City', 'Wailuku', 'Mililani', 'Kahului'].map((city) => (
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
              State Pages and City Pages Work Together
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              This Hawaii state page provides statewide service overview and delivery model. Where Webvello has developed concentrated expertise in specific markets, city-level pages offer additional local context and insights.
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
            Ready to Expand Your Hawaii Visibility?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Discover how SEO and GEO services strengthen your Hawaii market presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Conversation</Link>
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

