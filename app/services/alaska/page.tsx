import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Target, BarChart, Brain, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in Alaska | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and digital marketing for Alaska businesses. Professional services across Anchorage, Fairbanks, Juneau, and statewide.',
  keywords: ['alaska seo', 'alaska digital marketing', 'geo alaska', 'web development alaska'],
  alternates: {
    canonical: 'https://www.webvello.com/services/alaska',
  },
  openGraph: {
    title: 'Webvello Services in Alaska | SEO & Digital Marketing',
    description: 'Remote SEO, GEO, and digital marketing for Alaska businesses. Professional services across Anchorage, Fairbanks, Juneau, and statewide.',
    url: 'https://www.webvello.com/services/alaska',
    type: 'website',
  }
}

const faqs = [
  {
    question: "How does remote service delivery work for Alaska businesses?",
    answer: "All services are delivered through video calls, collaborative platforms, and cloud-based tools. Alaska businesses receive identical service quality to clients in any other state, with communication scheduled around your timezone and operational needs."
  },
  {
    question: "Which Alaska industries benefit from SEO and GEO optimization?",
    answer: "Tourism, hospitality, natural resources, healthcare, and professional services across Alaska gain significant advantage from strategic visibility in both traditional search engines and AI platforms where travelers and decision-makers research Alaska services."
  },
  {
    question: "Can you optimize for Alaska-specific search behavior?",
    answer: "Yes. We research search patterns unique to Alaska markets, including seasonal tourism trends, resource industry cycles, and regional service needs. Optimization strategies account for Alaska's distinctive market characteristics and geographic distribution."
  },
  {
    question: "Do Alaska businesses need different SEO approaches than Lower 48 companies?",
    answer: "Core SEO principles remain consistent, but Alaska businesses often benefit from emphasizing remote capabilities, seasonal availability, and regional expertise. We adapt content strategy to reflect how Alaska customers search for and evaluate services."
  },
  {
    question: "How do you handle timezone differences with Alaska clients?",
    answer: "We schedule meetings during overlapping business hours and maintain flexible communication channels. Most Alaska businesses prefer asynchronous updates via project dashboards, with periodic video check-ins scheduled at mutually convenient times."
  },
  {
    question: "What's the typical timeline for results in Alaska markets?",
    answer: "Initial technical improvements show within 4-8 weeks. Meaningful visibility gains in competitive Alaska markets typically require 3-6 months. Lower-competition niches may see faster improvement, while highly competitive sectors demand sustained effort."
  }
]

const pageSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/alaska',
  title: 'Webvello Services in Alaska | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and digital marketing for Alaska businesses. Professional services across Anchorage, Fairbanks, Juneau, and statewide.',
  faqs: faqs,
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'Alaska', url: 'https://www.webvello.com/services/alaska' }
  ]
})

export default function AlaskaServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">
              Webvello Services in Alaska
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Webvello delivers SEO, GEO, and web development services remotely to Alaska businesses. Organizations across the state gain visibility in traditional and AI-powered search without geographic barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Serving Alaska Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Serving Businesses Across Alaska
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              Alaska's unique economy—spanning tourism, natural resources, healthcare, and professional services—requires digital marketing that addresses both local market needs and the state's role in broader regional commerce. <Link href="/services/geo-anchorage" className="text-primary-600 hover:text-primary-700 underline">Businesses in Anchorage</Link> and organizations throughout Alaska benefit from comprehensive digital visibility strategies.
            </p>
            <p className="text-lg text-secondary-600">
              Webvello provides SEO, GEO (Generative Engine Optimization), and web development through remote delivery. Alaska businesses appear in Google search results, AI platform responses, and other discovery channels where customers and partners research Alaska services.
            </p>
          </div>
        </div>
      </section>

      {/* Remote Delivery Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Remote Service Delivery for Alaska Businesses
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
                    All strategy development, technical implementation, and performance reporting occur through digital channels. Alaska businesses access the same expertise and service quality as clients in any other market.
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
                    Alaska Market Research
                  </h3>
                  <p className="text-secondary-600">
                    We analyze search patterns, seasonal trends, and competitive dynamics specific to Alaska industries. Strategies account for how customers discover and evaluate Alaska businesses through different channels and platforms.
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
                    Dashboard reports show visibility improvements across Alaska search results and AI platform citations. You see exactly how traffic, rankings, and brand mentions develop over time.
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
              Alaska Service Coverage
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              Webvello serves businesses throughout Alaska, from urban centers to regional communities. Remote delivery ensures consistent service regardless of physical location.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Anchorage', 'Fairbanks', 'Juneau', 'Sitka', 'Ketchikan', 'Wasilla', 'Kenai', 'Kodiak', 'Bethel', 'Palmer'].map((city) => (
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
              Understanding State and City Service Pages
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              This Alaska state page describes statewide service capabilities and remote delivery model. Where Webvello has developed concentrated expertise in specific metros, city-level pages provide additional market context and localized insights.
            </p>
            <p className="text-lg text-secondary-600">
              Both page types lead to the same services—the distinction is geographic detail level. State pages offer broad overview; city pages add local specificity where available.
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
            Ready to Expand Your Alaska Visibility?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Discover how remote SEO and GEO services strengthen your Alaska market presence.
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

