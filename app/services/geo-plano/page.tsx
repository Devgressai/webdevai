import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Star, BarChart, Brain, Zap, Target, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Plano Corporate Tech & Enterprise Leadership Visibility | Webvello GEO',
  description: 'Reach Plano tech leaders, corporate headquarters & Fortune 500 decision-makers. AI visibility strategy for North Texas corporate hub.',
  keywords: ['geo plano', 'plano corporate tech', 'dallas fort worth visibility', 'generative engine optimization plano', 'fortune 500 visibility'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-plano',
  },
  openGraph: {
    title: 'Plano Corporate Tech & Enterprise Leadership Visibility | Webvello GEO',
    description: 'Reach Plano tech leaders, corporate headquarters & Fortune 500 decision-makers. AI visibility strategy for North Texas corporate hub.',
    url: 'https://www.webvello.com/services/geo-plano',
    type: 'website',
  }
}

const industries = [
  { icon: Building2, name: "Fortune 500 HQs", description: "Major corporations and headquarters" },
  { icon: TrendingUp, name: "Technology Firms", description: "Tech companies and software firms" },
  { icon: Brain, name: "Telecommunications", description: "Telecom and connectivity services" },
  { icon: Users, name: "Enterprise Services", description: "Consulting and professional services" },
  { icon: Star, name: "Financial Services", description: "Financial firms and institutions" },
  { icon: Zap, name: "Business Solutions", description: "Enterprise software and solutions" }
]

const neighborhoods = [
  "Downtown Plano",
  "Legacy Town Center",
  "Granite Park",
  "Plano Technology Center",
  "Corporate Drive",
  "Coit Road corridor",
  "Dallas North Tollway",
  "Frisco adjacency",
  "Richardson border",
  "McKinney proximity"
]

const processSteps = [
  {
    step: "1",
    title: "North Texas Corporate Analysis",
    description: "We analyze how Fortune 500 executives, corporate tech leaders, and enterprise decision-makers in Plano research solutions. What strategic priorities influence their vendor choices?"
  },
  {
    step: "2",
    title: "Enterprise Corporate Positioning",
    description: "We establish your credibility for serving corporate clients at scale. This means emphasizing enterprise stability, corporate references, and large-scale implementation success."
  },
  {
    step: "3",
    title: "Regional Corporate Authority",
    description: "We position you as a key player in North Texas corporate ecosystem. Plano's influence extends across Dallas-Fort Worth and Texas. Regional positioning multiplies your market reach exponentially."
  },
  {
    step: "4",
    title: "C-Suite Visibility",
    description: "We optimize for how corporate executives and c-suite decision-makers research solutions through AI. This means emphasizing ROI, strategic value, and executive-level impact."
  },
  {
    step: "5",
    title: "Corporate Network Tracking",
    description: "We monitor your visibility within Plano's corporate network. Weekly reports show how corporate decision-makers and Fortune 500 procurement teams are discovering you."
  }
]

const faqs = [
  {
    question: "Why is Plano positioning significant for enterprise companies?",
    answer: "Plano is one of North America's corporate headquarters hubs with numerous Fortune 500 companies. Visibility here establishes credibility for serving enterprise markets. Corporate decision-makers worldwide reference Plano positioning when evaluating enterprise vendors."
  },
  {
    question: "How do corporate procurement teams query AI differently?",
    answer: "Corporate procurement queries emphasize ROI, implementation scale, vendor stability, and reference-ability. They want evidence of large-scale deployments. We optimize for this corporate buying behavior specifically."
  },
  {
    question: "Can mid-market companies compete in Plano?",
    answer: "Absolutely. While large enterprises dominate Plano, the market also includes mid-market companies and regional leaders. We position mid-market companies to emphasize specialized expertise and responsive service—competitive advantages over enterprise vendors."
  },
  {
    question: "How do you reach c-suite decision-makers?",
    answer: "C-suite executives research through AI looking for strategic value and executive-level impact. We position your solution emphasizing business transformation, executive benefits, and strategic alignment—not technical specs."
  },
  {
    question: "What's the timeline for corporate visibility in Plano?",
    answer: "Initial corporate decision-maker awareness emerges in 4-6 weeks. Meaningful procurement team engagement develops in 2-3 months. By month 4-5, you typically see c-suite visibility and enterprise sales momentum."
  },
  {
    question: "How do you measure success with corporate buyers?",
    answer: "We track corporate references, enterprise mentions, Fortune 500 company citations, and c-suite decision-maker discovery patterns. Monthly reports show visibility among high-value buyer segments."
  },
  {
    question: "Does Plano positioning help recruit corporate talent?",
    answer: "Absolutely. Corporate employees research companies through AI to understand corporate fit, growth potential, and stability. Strong Plano positioning attracts corporate talent seeking established organizations."
  },
  {
    question: "Can startups compete in Plano's corporate environment?",
    answer: "Yes. Corporations seek innovative solutions. Startups succeed by positioning specialized innovation and disruption potential. We emphasize how startups solve problems entrenched solutions ignore."
  }
]

export default function GEOPlanoPage() {
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-plano',
    title: 'Plano Corporate Tech & Enterprise Leadership Visibility | Webvello GEO',
    description: 'Reach Plano tech leaders, corporate headquarters & Fortune 500 decision-makers. AI visibility strategy for North Texas corporate hub.',
    geo: {
      city: 'Plano',
      cityState: 'Plano, TX'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Plano', url: 'https://www.webvello.com/services/geo-plano' }
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
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span className="text-white/80 text-sm">GEO Services in Plano, Texas</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              North Texas Corporate Authority
              <span className="block bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                for Plano
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-2xl">
              Reach Fortune 500 executives, corporate tech leaders, and enterprise decision-makers. Dominate Plano's corporate ecosystem through AI search visibility.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                <Link href="/contact">Get Corporate Strategy</Link>
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
            <div className="border-l-4 border-sky-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Enterprise Headquarters</h3>
              <p className="text-slate-600">Plano hosts more Fortune 500 headquarters than any city outside New York. Visibility here signals enterprise credibility. Corporate executives worldwide reference Plano positioning.</p>
            </div>
            <div className="border-l-4 border-sky-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">C-Suite Authority</h3>
              <p className="text-slate-600">Enterprise executives research through AI looking for strategic vendors and partners. Strong visibility ensures your executive value proposition surfaces in these high-stakes conversations.</p>
            </div>
            <div className="border-l-4 border-sky-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Regional Scale</h3>
              <p className="text-slate-600">Plano positioning carries weight across North Texas and beyond. Enterprise decision-makers from multiple regions reference this market as authority benchmark.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Plano Corporate Sectors We Dominate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon
              return (
                <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-sky-300 transition-colors">
                  <Icon className="w-10 h-10 text-sky-600 mb-4" />
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
          <h2 className="text-4xl font-bold mb-12 text-center">Building Plano Enterprise Authority</h2>
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-sky-600 text-white font-bold text-lg">
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
          <h2 className="text-3xl font-bold mb-8 text-center">Plano Market Coverage</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {neighborhoods.map((neighborhood, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700">
                <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Plano GEO Strategy Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg p-6 hover:border-sky-300 transition-colors">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-900">
                  {faq.question}
                  <span className="text-sky-600 group-open:hidden">+</span>
                  <span className="text-sky-600 hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-sky-600 to-sky-700">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Lead Plano's Corporate AI Search?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Fortune 500 executives and corporate decision-makers research through AI. Get discovered during enterprise evaluation. Establish authority in North America's corporate headquarters hub.
          </p>
          <Button size="lg" className="bg-white text-sky-600 hover:bg-slate-100">
            <Link href="/contact">Start Your Enterprise Strategy</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

