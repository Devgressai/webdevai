import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Target, BarChart, Brain, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in California | SEO & Digital Marketing',
  description: 'Professional SEO, GEO, and web development for California businesses. Remote services across Los Angeles, San Francisco, San Diego, and statewide.',
  keywords: ['california seo', 'california digital marketing', 'geo california', 'web development california'],
  alternates: {
    canonical: 'https://www.webvello.com/services/california',
  },
  openGraph: {
    title: 'Webvello Services in California | SEO & Digital Marketing',
    description: 'Professional SEO, GEO, and web development for California businesses. Remote services across Los Angeles, San Francisco, San Diego, and statewide.',
    url: 'https://www.webvello.com/services/california',
    type: 'website',
  }
}

const faqs = [
  {
    question: "How does Webvello deliver services to California businesses?",
    answer: "All services are delivered remotely through video conferencing, project management tools, and collaborative platforms. California businesses receive professional SEO, GEO, and development services without requiring physical meetings, maintaining efficiency while delivering measurable results."
  },
  {
    question: "Which California industries benefit most from SEO and GEO?",
    answer: "Technology, entertainment, healthcare, real estate, professional services, and e-commerce companies across California see significant ROI. Any organization serving California customers gains advantage from appearing in both traditional search engines and AI platforms like ChatGPT and Perplexity."
  },
  {
    question: "Do you have city-specific pages for California metros?",
    answer: "Yes. We maintain dedicated pages for Los Angeles, San Francisco, San Diego, San Jose, Sacramento, and other major California markets where we've built concentrated expertise. These city pages provide additional local context while connecting to the same core services."
  },
  {
    question: "How do you optimize for California's highly competitive markets?",
    answer: "We conduct thorough competitive analysis within California sectors, identifying differentiation opportunities and content gaps. Strategies emphasize unique positioning factors that help California businesses stand out in saturated digital environments."
  },
  {
    question: "What's the difference between state and city service pages?",
    answer: "This California state page provides statewide service overview. City pages offer metro-specific market insights, competitive analysis, and industry context for areas where we've developed concentrated expertise. Both connect to identical services—SEO, GEO, web development."
  },
  {
    question: "How long does it take to see results in California markets?",
    answer: "Initial technical improvements often show within 4-8 weeks. Competitive visibility gains in major California metros typically require 3-6 months of sustained effort. Timeline varies based on industry competition and current site condition."
  }
]

const pageSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/california',
  title: 'Webvello Services in California | SEO & Digital Marketing',
  description: 'Professional SEO, GEO, and web development for California businesses. Remote services across Los Angeles, San Francisco, San Diego, and statewide.',
  faqs: faqs,
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'California', url: 'https://www.webvello.com/services/california' }
  ]
})

export default function CaliforniaServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">
              Webvello Services in California
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Webvello provides SEO, GEO, and web development services to California businesses through expert remote delivery. Organizations across the state gain visibility in traditional search engines and AI-powered discovery platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Serving California Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Serving Businesses Across California
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              California's economy—the world's fifth largest—spans technology, entertainment, healthcare, agriculture, manufacturing, and professional services. Each sector requires digital marketing expertise that addresses both local market dynamics and national visibility. From <Link href="/services/geo-los-angeles" className="text-primary-600 hover:text-primary-700 underline">businesses in Los Angeles</Link> to <Link href="/services/geo-san-francisco" className="text-primary-600 hover:text-primary-700 underline">companies operating in San Francisco</Link>, California organizations benefit from comprehensive digital visibility.
            </p>
            <p className="text-lg text-secondary-600">
              Webvello delivers comprehensive SEO, GEO (Generative Engine Optimization), and web development services remotely. Whether you're a <Link href="/services/geo-san-jose" className="text-primary-600 hover:text-primary-700 underline">San Jose-based team</Link> in tech or <Link href="/services/geo-san-diego" className="text-primary-600 hover:text-primary-700 underline">organizations across San Diego</Link> in healthcare, California businesses appear in Google, ChatGPT, Perplexity, and other platforms where customers and partners discover solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Remote Delivery Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Remote Service Delivery for California Businesses
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
                    All strategy, implementation, and reporting occur through digital collaboration tools. California businesses receive premium service quality without travel overhead or geographic constraints.
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
                    California Market Expertise
                  </h3>
                  <p className="text-secondary-600">
                    We research competitive landscapes, search patterns, and customer behavior specific to California industries and regions. Service delivery adapts to market dynamics from Silicon Valley tech to Southern California entertainment.
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
                    Regular dashboards show visibility improvements across California search results and AI platform mentions. You see traffic growth, ranking changes, and brand citations develop in real-time.
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
              California Coverage Areas
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              Webvello serves businesses throughout California, including <Link href="/services/geo-sacramento" className="text-primary-600 hover:text-primary-700 underline">Sacramento enterprises</Link>, <Link href="/services/geo-fresno" className="text-primary-600 hover:text-primary-700 underline">Fresno companies</Link>, <Link href="/services/geo-irvine" className="text-primary-600 hover:text-primary-700 underline">Irvine-based organizations</Link>, and <Link href="/services/geo-palo-alto" className="text-primary-600 hover:text-primary-700 underline">teams in Palo Alto</Link>. Our remote delivery model ensures consistent service quality for organizations in major metros and regional markets.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim', 'Santa Ana', 'Riverside'].map((city) => (
                <div key={city} className="flex items-center gap-2 text-secondary-700">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary-600">
              For additional detail on specific California metros, see our city-level service pages for Los Angeles, San Francisco, San Diego, San Jose, Sacramento, and other major markets.
            </p>
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
              This California state page provides statewide service overview and remote delivery model. City-level pages for select metros offer additional local context, competitive analysis, and industry-specific insights for those markets.
            </p>
            <p className="text-lg text-secondary-600">
              Both page types connect to identical services—SEO, GEO, web development. The difference is geographic specificity. State pages describe broad capabilities; city pages add localized detail where we've built concentrated expertise.
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
            Ready to Strengthen Your California Market Position?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Explore how SEO and GEO services improve visibility across California's competitive markets.
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

