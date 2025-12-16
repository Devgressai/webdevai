import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Target, BarChart, Brain, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in Alabama | SEO & Digital Marketing',
  description: 'Professional SEO, GEO, and digital marketing services for Alabama businesses. Remote delivery across Birmingham, Montgomery, Mobile, and beyond.',
  keywords: ['alabama seo', 'alabama digital marketing', 'geo alabama', 'web development alabama'],
  alternates: {
    canonical: 'https://www.webvello.com/services/alabama',
  },
  openGraph: {
    title: 'Webvello Services in Alabama | SEO & Digital Marketing',
    description: 'Professional SEO, GEO, and digital marketing services for Alabama businesses. Remote delivery across Birmingham, Montgomery, Mobile, and beyond.',
    url: 'https://www.webvello.com/services/alabama',
    type: 'website',
  }
}

const faqs = [
  {
    question: "How does Webvello serve businesses across Alabama?",
    answer: "We deliver all services remotely through video calls, project management tools, and collaborative platforms. Alabama businesses receive the same high-quality service as local clients, with regular communication and transparent reporting throughout every project."
  },
  {
    question: "Which Alabama industries benefit most from SEO and GEO?",
    answer: "Manufacturing, healthcare, professional services, education, and aerospace companies in Alabama see strong ROI from strategic SEO and AI visibility optimization. Any business serving Alabama customers benefits from appearing in both traditional and AI-powered search results."
  },
  {
    question: "Do you have physical offices in Alabama?",
    answer: "No. We operate entirely remotely and serve clients nationwide, including throughout Alabama. This model lets us maintain lower overhead while delivering premium service quality to businesses in Birmingham, Montgomery, Mobile, Huntsville, and other Alabama markets."
  },
  {
    question: "How do state pages relate to your city-specific pages?",
    answer: "State pages provide Alabama-wide service overviews. City pages offer localized insights for specific metros where we have concentrated expertise. Both connect businesses to the same core services—just with different geographic context."
  },
  {
    question: "What's included in your Alabama service delivery?",
    answer: "Full-service SEO, GEO (AI search optimization), web development, content strategy, and technical optimization. Every engagement includes strategy development, implementation, performance tracking, and ongoing optimization based on Alabama market dynamics."
  },
  {
    question: "How long does it take to see results in Alabama markets?",
    answer: "Initial improvements often appear within 4-8 weeks for technical and content optimizations. Competitive positioning in search results typically requires 3-6 months of sustained effort. Timeline varies based on competition level and current site condition."
  }
]

const pageSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/alabama',
  title: 'Webvello Services in Alabama | SEO & Digital Marketing',
  description: 'Professional SEO, GEO, and digital marketing services for Alabama businesses. Remote delivery across Birmingham, Montgomery, Mobile, and beyond.',
  faqs: faqs,
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'Alabama', url: 'https://www.webvello.com/services/alabama' }
  ]
})

export default function AlabamaServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">
              Webvello Services in Alabama
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Webvello provides professional SEO, GEO, and web development services to businesses across Alabama through expert remote delivery. Alabama organizations gain visibility in traditional search and AI-powered platforms without requiring physical meetings.
            </p>
          </div>
        </div>
      </section>

      {/* Serving Alabama Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Serving Businesses Across Alabama
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              Alabama's diverse economy—from manufacturing and aerospace in Huntsville to healthcare and education in Birmingham—requires digital marketing expertise that understands both traditional and emerging search technologies.
            </p>
            <p className="text-lg text-secondary-600">
              Webvello delivers SEO, GEO (Generative Engine Optimization), and web development services remotely to Alabama businesses seeking visibility in Google, ChatGPT, Perplexity, and other search platforms where their customers discover solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Remote Delivery Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              How Webvello Delivers Services Across Alabama
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
                    All strategy, implementation, and reporting happens through video calls and collaborative platforms. Alabama clients receive the same attention and quality as if we were local, without travel overhead.
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
                    Alabama Market Understanding
                  </h3>
                  <p className="text-secondary-600">
                    We research competitive dynamics, search patterns, and customer behavior specific to Alabama industries. Service delivery adapts to regional business characteristics and opportunity areas.
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
                    Transparent Reporting
                  </h3>
                  <p className="text-secondary-600">
                    Regular performance dashboards show exactly how Alabama visibility improves across search platforms. No hidden metrics—you see traffic, rankings, and AI citations as they develop.
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
              Alabama Coverage Areas
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              Webvello serves businesses throughout Alabama, from major metropolitan centers to regional markets. Our remote delivery model provides consistent service quality regardless of location.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Birmingham', 'Montgomery', 'Mobile', 'Huntsville', 'Tuscaloosa', 'Hoover', 'Dothan', 'Auburn', 'Decatur', 'Madison'].map((city) => (
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
              State Pages and City Pages: How They Work Together
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              This Alabama state page provides service overview and statewide capabilities. For businesses in specific metros where we've developed concentrated expertise, city-level pages offer additional local context and industry-specific insights.
            </p>
            <p className="text-lg text-secondary-600">
              Both page types connect to identical core services—SEO, GEO, web development. The difference is geographic specificity. State pages describe broad capabilities; city pages add localized detail where available.
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
            Ready to Improve Your Alabama Market Visibility?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Explore how SEO and GEO services can expand your reach across Alabama markets.
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

