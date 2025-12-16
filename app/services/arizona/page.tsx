import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Target, BarChart, Brain, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in Arizona | SEO & Digital Marketing',
  description: 'Professional SEO, GEO, and web development for Arizona businesses. Serving Phoenix, Tucson, Mesa, Scottsdale, and statewide.',
  keywords: ['arizona seo', 'arizona digital marketing', 'geo arizona', 'web development arizona'],
  alternates: {
    canonical: 'https://www.webvello.com/services/arizona',
  },
  openGraph: {
    title: 'Webvello Services in Arizona | SEO & Digital Marketing',
    description: 'Professional SEO, GEO, and web development for Arizona businesses. Serving Phoenix, Tucson, Mesa, Scottsdale, and statewide.',
    url: 'https://www.webvello.com/services/arizona',
    type: 'website',
  }
}

const faqs = [
  {
    question: "How does Webvello deliver services to Arizona businesses?",
    answer: "All services are delivered remotely through video conferencing, project management platforms, and collaborative tools. Arizona businesses receive professional SEO, GEO, and development services without requiring in-person meetings, maintaining efficiency while delivering results."
  },
  {
    question: "Which Arizona industries see the best results from SEO and GEO?",
    answer: "Technology companies, healthcare providers, real estate firms, tourism businesses, and professional services across Arizona benefit significantly. Any organization serving Arizona customers gains advantage from appearing in both traditional search engines and AI platforms."
  },
  {
    question: "Do you have city-specific pages for Arizona metros?",
    answer: "Yes. We maintain dedicated pages for Phoenix, Tucson, Mesa, and Scottsdale where we've developed concentrated market expertise. These city pages provide additional local context while connecting to the same core services described on this Arizona state page."
  },
  {
    question: "How do you optimize for Arizona's competitive tech and real estate markets?",
    answer: "We conduct thorough competitive analysis within Arizona sectors, identifying positioning opportunities and content gaps. Optimization strategies emphasize differentiation factors that help Arizona businesses stand out in crowded digital landscapes."
  },
  {
    question: "What's included in your Arizona SEO and GEO services?",
    answer: "Comprehensive technical SEO, content optimization, AI visibility enhancement, schema implementation, and performance tracking. Every engagement includes strategy development, hands-on implementation, and ongoing optimization based on Arizona market feedback."
  },
  {
    question: "How long does it take to see results in Arizona markets?",
    answer: "Technical improvements often show within 4-8 weeks. Competitive visibility gains in major Arizona metros typically require 3-6 months of strategic effort. Timeline varies based on industry competition and current site condition."
  }
]

const pageSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/arizona',
  title: 'Webvello Services in Arizona | SEO & Digital Marketing',
  description: 'Professional SEO, GEO, and web development for Arizona businesses. Serving Phoenix, Tucson, Mesa, Scottsdale, and statewide.',
  faqs: faqs,
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'Arizona', url: 'https://www.webvello.com/services/arizona' }
  ]
})

export default function ArizonaServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">
              Webvello Services in Arizona
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Webvello provides SEO, GEO, and web development services to Arizona businesses through expert remote delivery. Organizations across the state gain visibility in traditional search and AI-powered discovery platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Serving Arizona Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Serving Businesses Across Arizona
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              Arizona's diverse economy—from technology and healthcare in Phoenix to education and aerospace in Tucson—creates opportunities for businesses that establish strong digital visibility across both traditional and emerging search channels. From <Link href="/services/geo-phoenix" className="text-primary-600 hover:text-primary-700 underline">businesses in Phoenix</Link> to <Link href="/services/geo-tucson" className="text-primary-600 hover:text-primary-700 underline">companies operating in Tucson</Link>, Arizona organizations benefit from comprehensive digital visibility.
            </p>
            <p className="text-lg text-secondary-600">
              Webvello delivers comprehensive SEO, GEO (Generative Engine Optimization), and web development services remotely. Whether you're a <Link href="/services/geo-scottsdale" className="text-primary-600 hover:text-primary-700 underline">Scottsdale-based team</Link> or <Link href="/services/geo-mesa" className="text-primary-600 hover:text-primary-700 underline">organizations across Mesa</Link>, Arizona businesses appear in Google, ChatGPT, Perplexity, and other platforms where customers discover and evaluate services.
            </p>
          </div>
        </div>
      </section>

      {/* Remote Delivery Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              How Webvello Serves Arizona Businesses
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
                    Fully Remote Service Model
                  </h3>
                  <p className="text-secondary-600">
                    All strategy, implementation, and reporting occur through digital collaboration. Arizona clients receive premium service quality without travel overhead or scheduling constraints of physical meetings.
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
                    Arizona Market Expertise
                  </h3>
                  <p className="text-secondary-600">
                    We research competitive landscapes, search patterns, and customer behavior specific to Arizona industries. Service delivery adapts to regional market dynamics and opportunity areas unique to Arizona commerce.
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
                    Regular dashboards show visibility improvements across Arizona search results and AI platform mentions. You see traffic growth, ranking changes, and brand citations as they develop.
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
              Arizona Coverage Areas
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              Webvello serves businesses throughout Arizona, including <Link href="/services/geo-chandler" className="text-primary-600 hover:text-primary-700 underline">Chandler enterprises</Link> and <Link href="/services/geo-tempe" className="text-primary-600 hover:text-primary-700 underline">Tempe-based organizations</Link>. Our remote delivery model ensures consistent service quality for organizations in major metros and regional markets alike.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale', 'Gilbert', 'Tempe', 'Peoria', 'Surprise'].map((city) => (
                <div key={city} className="flex items-center gap-2 text-secondary-700">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary-600">
              For additional detail on Phoenix, Tucson, Mesa, and Scottsdale markets, see our city-specific service pages.
            </p>
          </div>
        </div>
      </section>

      {/* State and City Pages Relationship */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              State Pages and City Pages Work Together
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              This Arizona state page provides statewide service overview and delivery model. City-level pages for select Arizona metros offer additional local context, industry-specific insights, and market dynamics for those areas.
            </p>
            <p className="text-lg text-secondary-600">
              Both connect to identical services—SEO, GEO, web development. The difference is geographic specificity. State pages describe broad capabilities; city pages add localized detail where we've built concentrated expertise.
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
            Ready to Strengthen Your Arizona Market Position?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Explore how SEO and GEO services improve visibility across Arizona markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Discuss Your Needs</Link>
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

