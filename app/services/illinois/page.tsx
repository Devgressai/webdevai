import { Button } from '../../../components/ui/button'
import { MapPin, Target, BarChart, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Webvello Services in Illinois | SEO & Digital Marketing',
  description: 'Professional SEO, GEO, and web development for Illinois businesses. Remote services across Chicago, Springfield, Naperville, and statewide.',
  keywords: ['illinois seo', 'illinois digital marketing', 'geo illinois'], alternates: { canonical: 'https://www.webvello.com/services/illinois' },
  openGraph: { title: 'Webvello Services in Illinois | SEO & Digital Marketing', description: 'Professional SEO, GEO, and web development for Illinois businesses. Remote services across Chicago, Springfield, Naperville, and statewide.', url: 'https://www.webvello.com/services/illinois', type: 'website' }
}

const faqs = [
  { question: "How does Webvello serve Illinois businesses remotely?", answer: "All services are delivered through video calls, project management platforms, and collaborative tools. Illinois businesses receive professional SEO, GEO, and development services with regular communication and transparent reporting." },
  { question: "Which Illinois industries benefit from SEO and GEO?", answer: "Finance, manufacturing, healthcare, technology, and professional services across Illinois see strong returns. Any organization serving Illinois customers gains advantage from appearing in both traditional search engines and AI platforms." },
  { question: "Do you have a city page for Chicago?", answer: "Yes. We maintain a dedicated Chicago page with additional metro-specific insights and competitive analysis. Both this Illinois state page and the Chicago city page connect to the same core services." },
  { question: "How do you optimize for Illinois's competitive markets?", answer: "We conduct thorough competitive analysis within Illinois sectors, identifying differentiation opportunities and content gaps. Strategies emphasize unique positioning factors that help Illinois businesses stand out." },
  { question: "What's included in Illinois service delivery?", answer: "Comprehensive SEO audits, technical optimization, content strategy, GEO implementation for AI visibility, schema markup, and performance tracking. Every engagement includes strategy development and ongoing optimization." },
  { question: "How long does it take to see results in Illinois markets?", answer: "Technical improvements often appear within 4-8 weeks. Competitive visibility gains in major Illinois metros typically require 3-6 months of sustained effort." }
]

const pageSchema = generatePageSchema({ pageType: 'service', url: 'https://www.webvello.com/services/illinois', title: 'Webvello Services in Illinois | SEO & Digital Marketing', description: 'Professional SEO, GEO, and web development for Illinois businesses. Remote services across Chicago, Springfield, Naperville, and statewide.', faqs: faqs, breadcrumbs: [{ name: 'Home', url: 'https://www.webvello.com' }, { name: 'Services', url: 'https://www.webvello.com/services' }, { name: 'Illinois', url: 'https://www.webvello.com/services/illinois' }] })

export default function IllinoisServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">Webvello Services in Illinois</h1><p className="text-xl text-secondary-600 mb-8">Webvello provides SEO, GEO, and web development services to Illinois businesses through expert remote delivery. Organizations across the state gain visibility in traditional search and AI-powered platforms.</p></div></div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold text-secondary-900 mb-6">Serving Businesses Across Illinois</h2><p className="text-lg text-secondary-600 mb-4">Illinois's economy encompasses finance, manufacturing, healthcare, technology, and agriculture. Each sector requires digital marketing that addresses both local market needs and broader regional commerce.</p><p className="text-lg text-secondary-600">Webvello delivers comprehensive SEO, GEO (Generative Engine Optimization), and web development services remotely. Illinois businesses appear in Google, ChatGPT, Perplexity, and other platforms where customers discover solutions.</p></div></div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold text-secondary-900 mb-6">Remote Service Delivery for Illinois Businesses</h2><div className="space-y-6">{[{ icon: Globe, title: "Fully Remote Operations", desc: "All strategy, implementation, and reporting occur through digital channels. Illinois businesses receive premium service quality without geographic constraints." }, { icon: Target, title: "Illinois Market Expertise", desc: "We research competitive landscapes, search patterns, and customer behavior specific to Illinois industries and regions." }, { icon: BarChart, title: "Performance Transparency", desc: "Dashboard reports show visibility improvements across Illinois search results and AI platform mentions." }].map((item, i) => <div key={i} className="flex gap-4"><div className="flex-shrink-0"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100"><item.icon className="h-6 w-6 text-primary-600" /></div></div><div><h3 className="text-xl font-semibold text-secondary-900 mb-2">{item.title}</h3><p className="text-secondary-600">{item.desc}</p></div></div>)}</div></div></div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold text-secondary-900 mb-6">Illinois Coverage Areas</h2><p className="text-lg text-secondary-600 mb-6">Webvello serves businesses throughout Illinois. Remote delivery ensures consistent service quality for organizations in major metros and regional markets.</p><div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">{['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield', 'Elgin', 'Peoria', 'Champaign', 'Waukegan', 'Cicero', 'Bloomington'].map(city => <div key={city} className="flex items-center gap-2 text-secondary-700"><MapPin className="h-4 w-4 text-primary-600" /><span>{city}</span></div>)}</div><p className="text-sm text-secondary-600">For additional detail on Chicago market dynamics, see our Chicago city page.</p></div></div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold text-secondary-900 mb-6">State Pages and City Pages Work Together</h2><p className="text-lg text-secondary-600 mb-4">This Illinois state page provides statewide service overview. City-level pages for select metros offer additional local context, competitive analysis, and industry-specific insights.</p><p className="text-lg text-secondary-600">Both connect to identical services—the difference is geographic specificity.</p></div></div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Frequently Asked Questions</h2><div className="space-y-6">{faqs.map((faq, i) => <div key={i} className="border-b border-secondary-200 pb-6 last:border-0"><h3 className="text-xl font-semibold text-secondary-900 mb-3">{faq.question}</h3><p className="text-secondary-600 leading-relaxed">{faq.answer}</p></div>)}</div></div></div>
      </section>
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center px-6"><h2 className="text-3xl font-bold text-white mb-4">Ready to Strengthen Your Illinois Market Position?</h2><p className="text-xl text-primary-100 mb-8">Explore how SEO and GEO services improve visibility across Illinois markets.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" variant="secondary" asChild><Link href="/contact">Discuss Your Goals</Link></Button><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild><Link href="/services">View All Services</Link></Button></div></div>
      </section>
    </div>
  )
}

