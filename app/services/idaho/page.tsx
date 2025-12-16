import { Button } from '../../../components/ui/button'
import { MapPin, Target, BarChart, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in Idaho | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and web development for Idaho businesses. Professional services across Boise, Meridian, Nampa, and statewide.',
  keywords: ['idaho seo', 'idaho digital marketing', 'geo idaho', 'web development idaho'],
  alternates: { canonical: 'https://www.webvello.com/services/idaho' },
  openGraph: {
    title: 'Webvello Services in Idaho | SEO & Digital Marketing',
    description: 'Remote SEO, GEO, and web development for Idaho businesses. Professional services across Boise, Meridian, Nampa, and statewide.',
    url: 'https://www.webvello.com/services/idaho',
    type: 'website',
  }
}

const faqs = [
  { question: "How does Webvello serve Idaho businesses remotely?", answer: "All services are delivered through video calls, project management platforms, and collaborative tools. Idaho businesses receive professional SEO, GEO, and development services with regular communication and transparent reporting." },
  { question: "Which Idaho industries benefit from SEO and GEO services?", answer: "Technology, agriculture, manufacturing, healthcare, and professional services across Idaho see strong returns. Any organization serving Idaho customers gains advantage from appearing in both traditional search engines and AI platforms." },
  { question: "Can you optimize for Idaho's growing tech sector?", answer: "Yes. We research competitive dynamics and search patterns within Idaho's technology and business services markets. Optimization strategies account for how Idaho businesses position themselves regionally and nationally." },
  { question: "What's included in Idaho service delivery?", answer: "Comprehensive SEO audits, technical optimization, content strategy, GEO implementation for AI visibility, schema markup, and performance tracking. Every engagement includes strategy development, implementation, and ongoing optimization." },
  { question: "How long does it take to see results in Idaho markets?", answer: "Technical improvements often appear within 4-8 weeks. Meaningful visibility gains in Idaho markets typically require 3-6 months of sustained effort. Timeline varies based on industry competition and current site condition." },
  { question: "Do you have a city page for Boise?", answer: "Yes. We maintain a dedicated Boise page with additional metro-specific insights and market context. Both this Idaho state page and the Boise city page connect to the same core services." }
]

const pageSchema = generatePageSchema({
  pageType: 'service', url: 'https://www.webvello.com/services/idaho',
  title: 'Webvello Services in Idaho | SEO & Digital Marketing',
  description: 'Remote SEO, GEO, and web development for Idaho businesses. Professional services across Boise, Meridian, Nampa, and statewide.',
  faqs: faqs, breadcrumbs: [{ name: 'Home', url: 'https://www.webvello.com' }, { name: 'Services', url: 'https://www.webvello.com/services' }, { name: 'Idaho', url: 'https://www.webvello.com/services/idaho' }]
})

export default function IdahoServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">Webvello Services in Idaho</h1>
            <p className="text-xl text-secondary-600 mb-8">Webvello delivers SEO, GEO, and web development services remotely to Idaho businesses. Organizations across the state gain visibility in traditional search and AI-powered platforms.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Serving Businesses Across Idaho</h2>
            <p className="text-lg text-secondary-600 mb-4">Idaho's economy blends technology, agriculture, manufacturing, and healthcare. Each sector requires digital marketing that addresses both local market needs and broader regional commerce opportunities.</p>
            <p className="text-lg text-secondary-600">Webvello provides SEO, GEO (Generative Engine Optimization), and web development through remote delivery. Idaho businesses appear in Google, ChatGPT, Perplexity, and other platforms where customers discover solutions.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Remote Service Delivery for Idaho Businesses</h2>
            <div className="space-y-6">
              {[
                { icon: Globe, title: "Complete Remote Operations", desc: "All strategy, implementation, and reporting occur through digital channels. Idaho businesses access the same expertise and service quality as clients in any other market." },
                { icon: Target, title: "Idaho Market Understanding", desc: "We research competitive landscapes, search patterns, and customer behavior specific to Idaho industries. Strategies account for regional market characteristics." },
                { icon: BarChart, title: "Performance Transparency", desc: "Dashboard reports show visibility improvements across Idaho search results and AI citations. You see traffic growth, rankings, and brand mentions develop." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100"><item.icon className="h-6 w-6 text-primary-600" /></div></div>
                  <div><h3 className="text-xl font-semibold text-secondary-900 mb-2">{item.title}</h3><p className="text-secondary-600">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Idaho Service Coverage</h2>
            <p className="text-lg text-secondary-600 mb-6">Webvello serves businesses throughout Idaho. Remote delivery ensures consistent service quality regardless of physical location.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello', 'Caldwell', 'Coeur d\'Alene', 'Twin Falls', 'Post Falls', 'Lewiston'].map(city => <div key={city} className="flex items-center gap-2 text-secondary-700"><MapPin className="h-4 w-4 text-primary-600" /><span>{city}</span></div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Understanding State and City Service Pages</h2>
            <p className="text-lg text-secondary-600 mb-4">This Idaho state page describes statewide service capabilities. Where Webvello has developed concentrated expertise in specific metros, city-level pages provide additional local context.</p>
            <p className="text-lg text-secondary-600">Both page types lead to the same services—the distinction is geographic detail. State pages offer broad overview; city pages add local specificity where available.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => <div key={i} className="border-b border-secondary-200 pb-6 last:border-0"><h3 className="text-xl font-semibold text-secondary-900 mb-3">{faq.question}</h3><p className="text-secondary-600 leading-relaxed">{faq.answer}</p></div>)}</div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Improve Your Idaho Visibility?</h2>
          <p className="text-xl text-primary-100 mb-8">Discover how SEO and GEO services strengthen your Idaho market presence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><Link href="/contact">Start Discussion</Link></Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild><Link href="/services">Explore Services</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}

