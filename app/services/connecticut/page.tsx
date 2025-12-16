import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Target, BarChart, Brain, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in Connecticut | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and web development for Connecticut businesses. Professional services across Hartford, New Haven, Stamford, and statewide.',
  keywords: ['connecticut seo', 'connecticut digital marketing', 'geo connecticut', 'web development connecticut'],
  alternates: {
    canonical: 'https://www.webvello.com/services/connecticut',
  },
  openGraph: {
    title: 'Webvello Services in Connecticut | SEO & Digital Marketing',
    description: 'Remote SEO, GEO, and web development for Connecticut businesses. Professional services across Hartford, New Haven, Stamford, and statewide.',
    url: 'https://www.webvello.com/services/connecticut',
    type: 'website',
  }
}

const faqs = [
  {
    question: "How does Webvello deliver services to Connecticut businesses?",
    answer: "All services are delivered remotely through video conferencing, project management platforms, and collaborative tools. Connecticut businesses receive professional SEO, GEO, and development services without geographic constraints, with regular communication and transparent reporting."
  },
  {
    question: "Which Connecticut industries benefit from SEO and GEO services?",
    answer: "Finance, insurance, healthcare, manufacturing, and professional services across Connecticut see strong returns. Any organization serving Connecticut customers gains advantage from appearing in both traditional search engines and AI platforms where decision-makers research solutions."
  },
  {
    question: "Can you optimize for Connecticut's proximity to New York metro markets?",
    answer: "Yes. We research competitive dynamics within Connecticut and the broader NYC metro region. Optimization strategies account for how businesses position themselves within Connecticut while potentially serving customers across state lines in the tri-state area."
  },
  {
    question: "Do Connecticut businesses need different SEO approaches than other states?",
    answer: "Core principles remain consistent, but Connecticut businesses often benefit from emphasizing regional expertise, proximity to major metros, and understanding of Northeast market characteristics. We adapt content to reflect how Connecticut customers search and evaluate providers."
  },
  {
    question: "What's included in Connecticut service delivery?",
    answer: "Comprehensive SEO audits, technical optimization, content strategy, GEO implementation for AI visibility, schema markup, and performance tracking. Every engagement includes strategy development, implementation, and ongoing optimization based on Connecticut market feedback."
  },
  {
    question: "How long does it take to see results in Connecticut markets?",
    answer: "Technical improvements often appear within 4-8 weeks. Meaningful visibility gains in Connecticut markets typically require 3-6 months of sustained effort. Timeline varies based on industry competition and current site condition."
  }
]

const pageSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/connecticut',
  title: 'Webvello Services in Connecticut | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and web development for Connecticut businesses. Professional services across Hartford, New Haven, Stamford, and statewide.',
  faqs: faqs,
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'Connecticut', url: 'https://www.webvello.com/services/connecticut' }
  ]
})

export default function ConnecticutServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">
              Webvello Services in Connecticut
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Webvello delivers SEO, GEO, and web development services remotely to Connecticut businesses. Organizations across the state gain visibility in traditional search and AI-powered platforms without geographic barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Serving Connecticut Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Serving Businesses Across Connecticut
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              Connecticut's economy blends finance, insurance, healthcare, manufacturing, and professional services. Each sector requires digital marketing that addresses both local market needs and the state's position within the Northeast business corridor.
            </p>
            <p className="text-lg text-secondary-600">
              Webvello provides SEO, GEO (Generative Engine Optimization), and web development through remote delivery. Connecticut businesses appear in Google, ChatGPT, Perplexity, and other platforms where customers and partners discover solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Remote Delivery Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Remote Service Delivery for Connecticut Businesses
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
                    All strategy development, technical implementation, and performance reporting occur through digital channels. Connecticut businesses access the same expertise and service quality as clients in any other market.
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
                    Connecticut Market Research
                  </h3>
                  <p className="text-secondary-600">
                    We analyze competitive landscapes, search patterns, and customer behavior specific to Connecticut industries. Strategies account for regional market characteristics and how Connecticut businesses position themselves within broader metro markets.
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
                    Transparent Performance Tracking
                  </h3>
                  <p className="text-secondary-600">
                    Dashboard reports show visibility improvements across Connecticut search results and AI platform mentions. You see exactly how traffic, rankings, and brand citations develop over time.
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
              Connecticut Service Coverage
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              Webvello serves businesses throughout Connecticut. Remote delivery ensures consistent service quality regardless of physical location.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Bridgeport', 'New Haven', 'Stamford', 'Hartford', 'Waterbury', 'Norwalk', 'Danbury', 'New Britain', 'West Hartford', 'Greenwich'].map((city) => (
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
              This Connecticut state page describes statewide service capabilities and remote delivery model. Where Webvello has developed concentrated expertise in specific metros, city-level pages provide additional market context and localized insights.
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
            Ready to Expand Your Connecticut Visibility?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Discover how SEO and GEO services strengthen your Connecticut market presence.
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

