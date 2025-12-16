import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Target, BarChart, Brain, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in Colorado | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and web development for Colorado businesses. Professional services across Denver, Colorado Springs, and statewide.',
  keywords: ['colorado seo', 'colorado digital marketing', 'geo colorado', 'web development colorado'],
  alternates: {
    canonical: 'https://www.webvello.com/services/colorado',
  },
  openGraph: {
    title: 'Webvello Services in Colorado | SEO & Digital Marketing',
    description: 'Remote SEO, GEO, and web development for Colorado businesses. Professional services across Denver, Colorado Springs, and statewide.',
    url: 'https://www.webvello.com/services/colorado',
    type: 'website',
  }
}

const faqs = [
  {
    question: "How does Webvello serve Colorado businesses remotely?",
    answer: "All services are delivered through video calls, project management platforms, and collaborative tools. Colorado businesses receive professional SEO, GEO, and development services with regular communication and transparent reporting throughout every engagement."
  },
  {
    question: "Which Colorado industries see the best results from SEO and GEO?",
    answer: "Technology, outdoor recreation, tourism, healthcare, energy, and professional services across Colorado benefit significantly. Any organization serving Colorado customers gains advantage from appearing in both traditional search engines and AI-powered platforms."
  },
  {
    question: "Do you have a city-specific page for Denver?",
    answer: "Yes. We maintain a dedicated Denver page with additional metro-specific insights, competitive analysis, and industry context for the Denver market. Both this Colorado state page and the Denver city page connect to the same core services."
  },
  {
    question: "How do you optimize for Colorado's outdoor recreation and tourism sectors?",
    answer: "We research seasonal search patterns, traveler behavior, and competitive positioning within Colorado tourism and recreation markets. Optimization strategies account for how visitors discover Colorado experiences and how businesses position themselves in discovery channels."
  },
  {
    question: "What's included in Colorado service delivery?",
    answer: "Comprehensive SEO audits, technical optimization, content strategy, GEO implementation for AI visibility, schema markup, and ongoing performance tracking. Every engagement includes strategy development, hands-on implementation, and continuous optimization."
  },
  {
    question: "How long does it take to see results in Colorado markets?",
    answer: "Technical improvements often appear within 4-8 weeks. Meaningful visibility gains in competitive Colorado markets typically require 3-6 months of sustained effort. Timeline varies based on industry competition and current site condition."
  }
]

const pageSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/colorado',
  title: 'Webvello Services in Colorado | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and web development for Colorado businesses. Professional services across Denver, Colorado Springs, and statewide.',
  faqs: faqs,
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'Colorado', url: 'https://www.webvello.com/services/colorado' }
  ]
})

export default function ColoradoServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">
              Webvello Services in Colorado
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Webvello delivers SEO, GEO, and web development services remotely to Colorado businesses. Organizations across the state gain visibility in traditional search and AI-powered discovery platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Serving Colorado Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Serving Businesses Across Colorado
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              Colorado's economy blends technology, energy, outdoor recreation, healthcare, and tourism. Each sector requires digital marketing that addresses both local market dynamics and the state's role in regional and national commerce. From <Link href="/services/geo-denver" className="text-primary-600 hover:text-primary-700 underline">businesses in Denver</Link> to <Link href="/services/geo-aurora" className="text-primary-600 hover:text-primary-700 underline">companies operating in Aurora</Link>, Colorado organizations benefit from comprehensive digital visibility.
            </p>
            <p className="text-lg text-secondary-600">
              Webvello provides SEO, GEO (Generative Engine Optimization), and web development through remote delivery. Colorado businesses appear in Google, ChatGPT, Perplexity, and other platforms where customers discover and evaluate services.
            </p>
          </div>
        </div>
      </section>

      {/* Remote Delivery Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              How Webvello Serves Colorado Businesses
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
                    All strategy development, technical implementation, and performance reporting occur through digital channels. Colorado businesses access the same expertise and service quality as clients in any other market.
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
                    Colorado Market Understanding
                  </h3>
                  <p className="text-secondary-600">
                    We research competitive dynamics, search patterns, and customer behavior specific to Colorado industries. Strategies account for seasonal variations, tourism trends, and how Colorado customers discover services.
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
                    Dashboard reports show visibility improvements across Colorado search results and AI platform citations. You see exactly how traffic, rankings, and brand mentions develop over time.
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
              Colorado Service Coverage
            </h2>
            <p className="text-lg text-secondary-600 mb-6">
              Webvello serves businesses throughout Colorado. Remote delivery ensures consistent service quality for organizations in urban centers and regional markets.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton', 'Arvada', 'Westminster', 'Pueblo', 'Boulder'].map((city) => (
                <div key={city} className="flex items-center gap-2 text-secondary-700">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary-600">
              For additional detail on Denver market dynamics, see our Denver city page.
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
              This Colorado state page provides statewide service overview and delivery model. City-level pages for select Colorado metros offer additional local context, competitive analysis, and industry-specific insights.
            </p>
            <p className="text-lg text-secondary-600">
              Both connect to identical services—SEO, GEO, web development. The difference is geographic specificity. State pages describe broad capabilities; city pages add localized detail where available.
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
            Ready to Improve Your Colorado Visibility?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Discover how SEO and GEO services strengthen your Colorado market presence.
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

