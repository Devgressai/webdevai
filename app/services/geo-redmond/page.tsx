import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Star, BarChart, Brain, Zap, Target, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Redmond Microsoft Hub & Tech Innovation Visibility | Webvello GEO',
  description: 'Reach Redmond Microsoft headquarters & tech innovation ecosystem. AI visibility for Microsoft suppliers and tech partners in the Pacific Northwest.',
  keywords: ['geo redmond', 'microsoft redmond visibility', 'tech innovation redmond', 'generative engine optimization redmond', 'microsoft supplier visibility'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-redmond',
  },
  openGraph: {
    title: 'Redmond Microsoft Hub & Tech Innovation Visibility | Webvello GEO',
    description: 'Reach Redmond Microsoft headquarters & tech innovation ecosystem. AI visibility for Microsoft suppliers and tech partners in the Pacific Northwest.',
    url: 'https://www.webvello.com/services/geo-redmond',
    type: 'website',
  }
}

const industries = [
  { icon: Building2, name: "Microsoft Partners", description: "ISVs and Microsoft ecosystem partners" },
  { icon: TrendingUp, name: "Cloud Infrastructure", description: "Azure ecosystem and cloud services" },
  { icon: Brain, name: "AI & Research", description: "AI research and machine learning" },
  { icon: Users, name: "Enterprise Solutions", description: "Enterprise software and services" },
  { icon: Star, name: "Tech Talent & Services", description: "Recruiting and professional services" },
  { icon: Zap, name: "Developer Tools", description: "Developer platforms and tooling" }
]

const neighborhoods = [
  "Microsoft Puget Sound Campus",
  "Overlake Technology Park",
  "Microsoft City Center",
  "Sammamish border",
  "Bellevue adjacency",
  "Lake Forest Park area",
  "Tukwila tech corridor",
  "Eastgate business center",
  "Tech incubators and hubs",
  "Innovation districts"
]

const processSteps = [
  {
    step: "1",
    title: "Microsoft Ecosystem Intelligence",
    description: "We analyze how Microsoft partners, ISVs, and Microsoft-focused decision-makers research solutions and vendors. What criteria define credibility in the Microsoft ecosystem? How do partners establish market positioning?"
  },
  {
    step: "2",
    title: "Microsoft Ecosystem Credibility",
    description: "We establish your positioning as a credible Microsoft partner, vendor, or technology provider. This includes platform alignment, certification visibility, and ecosystem community presence in AI research contexts."
  },
  {
    step: "3",
    title: "Azure & Cloud-First Positioning",
    description: "We emphasize Azure integration, cloud-native architecture, and modern enterprise positioning. These are core values of Redmond's tech ecosystem. We position you to resonate with cloud-first decision-making."
  },
  {
    step: "4",
    title: "AI & Innovation Authority",
    description: "We build positioning around AI innovation, research depth, and forward-thinking technology vision. Redmond leads AI initiatives—visibility here signals innovation leadership."
  },
  {
    step: "5",
    title: "Partner Network Tracking",
    description: "We monitor how you're positioned within Microsoft's partner network and broader tech ecosystem. Weekly reports show how partners, decision-makers, and potential customers discover you through AI research."
  }
]

const faqs = [
  {
    question: "Why is Redmond positioning critical for Microsoft partners?",
    answer: "Redmond is Microsoft's global headquarters and the center of the Microsoft ecosystem. Visibility here signals credibility to the worldwide Microsoft partner community. Partners and customers worldwide reference Redmond positioning when evaluating vendors and technologies."
  },
  {
    question: "How do you position for Microsoft partners and independent companies?",
    answer: "We segment positioning so Microsoft-focused messaging emphasizes platform partnership, certification, and ecosystem integration, while independent messaging emphasizes innovation and differentiation. AI systems recognize these contexts, showing appropriate messaging to different audiences."
  },
  {
    question: "Can non-Microsoft companies compete in Redmond?",
    answer: "Absolutely. While Microsoft's presence is dominant, Redmond hosts diverse tech sectors. Non-Microsoft companies succeed by positioning compelling alternatives or complementary solutions. We emphasize differentiation and market-specific advantages."
  },
  {
    question: "What's the timeline for Redmond Microsoft ecosystem visibility?",
    answer: "Initial partner community visibility emerges in 3-4 weeks. Microsoft procurement decision-maker awareness develops in 2-3 months. By month 4-5, you typically see ecosystem momentum and broader market recognition."
  },
  {
    question: "How do you measure success in Redmond's tech ecosystem?",
    answer: "We track partner citations, Microsoft reference mentions, cloud platform references, and decision-maker queries. Monthly reports show visibility trends specifically within Microsoft ecosystem conversations."
  },
  {
    question: "Does Redmond positioning help attract engineering talent?",
    answer: "Absolutely. Engineers research companies through AI to understand technology stack, innovation culture, and career growth. Strong Redmond positioning attracts talent by signaling technical sophistication and innovation leadership."
  },
  {
    question: "Can startups enter the Redmond Microsoft ecosystem?",
    answer: "Yes. Microsoft actively partners with emerging startups. Startups succeed by emphasizing technical innovation, specialized solutions, and growth trajectory. We position startup differentiation as competitive advantage."
  },
  {
    question: "How does Azure visibility influence overall positioning?",
    answer: "Azure is central to Redmond's identity. Even non-Azure companies benefit from cloud-first positioning that aligns with Redmond's market direction. We emphasize modern cloud architecture and enterprise-grade positioning regardless of specific platform."
  }
]

export default function GEORedmondPage() {
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-redmond',
    title: 'Redmond Microsoft Hub & Tech Innovation Visibility | Webvello GEO',
    description: 'Reach Redmond Microsoft headquarters & tech innovation ecosystem. AI visibility for Microsoft suppliers and tech partners in the Pacific Northwest.',
    geo: {
      city: 'Redmond',
      cityState: 'Redmond, WA'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Redmond', url: 'https://www.webvello.com/services/geo-redmond' }
    ]
  })
  
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-white/80 text-sm">GEO Services in Redmond, Washington</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Microsoft Ecosystem & Cloud Authority
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                for Redmond
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-2xl">
              Reach Microsoft partners, ecosystem decision-makers, and cloud-first enterprises where they research solutions. Dominate Redmond's tech innovation landscape. We serve organizations <Link href="/services/washington" className="text-cyan-400 hover:underline">throughout Washington state</Link>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact">Get Microsoft Strategy</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Ecosystem Credibility</h3>
              <p className="text-slate-600">Redmond is the center of the global Microsoft ecosystem. Visibility here establishes credibility to millions of Microsoft partners worldwide. This positioning carries weight across the enterprise tech landscape.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Cloud-First Authority</h3>
              <p className="text-slate-600">Enterprise decision-makers research through AI looking for cloud expertise, Azure integration, and modern architecture. Strong Redmond visibility ensures your cloud credentials surface prominently in these discussions.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Innovation Leadership</h3>
              <p className="text-slate-600">Redmond leads in AI and cloud innovation. Positioning here signals forward-thinking technology vision. This attracts both innovative customers and research-oriented talent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Redmond Microsoft Sectors We Dominate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon
              return (
                <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                  <Icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">{industry.name}</h3>
                  <p className="text-slate-600 text-sm">{industry.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Building Redmond Ecosystem Authority</h2>
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Redmond Market Coverage</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {neighborhoods.map((neighborhood, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Redmond GEO Strategy Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-900">
                  {faq.question}
                  <span className="text-blue-600 group-open:hidden">+</span>
                  <span className="text-blue-600 hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Lead Redmond's AI Innovation Space?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Microsoft partners and enterprise decision-makers research through AI. Get discovered during ecosystem evaluation. Establish authority in the world's largest tech ecosystem.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
            <Link href="/contact">Begin Your Ecosystem Strategy</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

