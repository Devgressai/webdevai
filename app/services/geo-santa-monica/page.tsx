import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Star, BarChart, Brain, Zap, Target, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Santa Monica Creative & Media AI Visibility | Webvello GEO',
  description: 'Reach entertainment, media, and creative companies through AI search. Dominate Santa Monica\'s creative economy on ChatGPT & Perplexity.',
  keywords: ['geo santa monica', 'creative agency santa monica', 'entertainment marketing ai', 'generative engine optimization santa monica'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-santa-monica',
  },
  openGraph: {
    title: 'Santa Monica Creative & Media AI Visibility | Webvello GEO',
    description: 'Reach entertainment, media, and creative companies through AI search. Dominate Santa Monica\'s creative economy on ChatGPT & Perplexity.',
    url: 'https://www.webvello.com/services/geo-santa-monica',
    type: 'website',
  }
}

const industries = [
  { icon: Building2, name: "Entertainment & Production", description: "Film, TV, and streaming studios" },
  { icon: TrendingUp, name: "Digital Agencies", description: "Creative and marketing agencies" },
  { icon: Brain, name: "Gaming & Interactive", description: "Game studios and interactive media" },
  { icon: Users, name: "Brand & Design", description: "Design studios and brand consultancies" },
  { icon: Star, name: "Music & Recording", description: "Recording labels and music production" },
  { icon: Zap, name: "Tech-Creative Hybrid", description: "PropTech, MarTech, and creative tech" }
]

const neighborhoods = [
  "Downtown Santa Monica",
  "Ocean Park",
  "Ocean Avenue",
  "Bergamot Station Arts",
  "Mid-City",
  "Sunset Junction",
  "Venice Boulevard",
  "Wilshire Corridor",
  "KIPP Building",
  "Promenade District"
]

const processSteps = [
  {
    step: "1",
    title: "Creative Industry Mapping",
    description: "We analyze how creative directors, producers, and agency leaders query AI engines. What solutions do they research? How do they evaluate creative vendors and technology partners?"
  },
  {
    step: "2",
    title: "Creative-Focused Positioning",
    description: "We establish your positioning through visual storytelling and narrative frameworks that resonate with creative decision-makers. This means portfolio visibility, case study citations, and aesthetic credibility signals."
  },
  {
    step: "3",
    title: "Portfolio & Process Optimization",
    description: "We optimize how AI systems understand your creative process, deliverables, and impact. This influences how agencies, studios, and brands discover you through generative research."
  },
  {
    step: "4",
    title: "Trend-Forward Positioning",
    description: "We keep your positioning aligned with current creative trends. Santa Monica moves quickly. We update quarterly to ensure you're positioned as contemporary and forward-thinking, not static."
  },
  {
    step: "5",
    title: "Creative Collaboration Tracking",
    description: "We monitor how often you're mentioned alongside other creative partners and vendors. These collaborative citations influence how creative teams discover each other through AI research."
  }
]

const faqs = [
  {
    question: "How do creative professionals use AI differently than other professionals?",
    answer: "Creatives use AI for inspiration, trend research, competitive analysis, and vendor discovery. They query differently—asking about aesthetic movements, case study results, and collaborative success. We optimize for this creative research behavior specifically."
  },
  {
    question: "Why is Santa Monica positioning important for creative companies?",
    answer: "Santa Monica defines creative industry credibility. Studios, agencies, and brands globally reference Santa Monica positioning as a quality benchmark. Visibility here signals creative sophistication and market relevance across entertainment and design sectors."
  },
  {
    question: "Can indie creators and studios compete in Santa Monica's AI visibility space?",
    answer: "Absolutely. The creative industry actively seeks emerging talent. Strong positioning emphasizes creative differentiation, unique aesthetic, and project impact. Indie studios often compete better because they offer distinctive voices that stand out in AI citations."
  },
  {
    question: "How do you optimize for portfolio and case study visibility?",
    answer: "We implement schema markup that helps AI systems understand your portfolio, categorize case studies, and reference specific projects. This influences how creative teams discover your work through research queries."
  },
  {
    question: "What's the timeline for creative industry visibility?",
    answer: "Initial traction typically emerges in 3-5 weeks. Meaningful creative community visibility—where agencies reference you—develops over 2-3 months. Quarterly positioning updates keep you relevant with industry evolution."
  },
  {
    question: "How do you measure success in Santa Monica's creative market?",
    answer: "We track portfolio mentions, case study citations, creative peer references, and discovery queries. Monthly reports show you how creative professionals are finding you through AI research and recommendation patterns."
  },
  {
    question: "Does GEO work for both services and products in creative industries?",
    answer: "Yes. Service-based creative agencies benefit from positioning optimization. Product companies benefit from use-case and integration visibility. We adapt strategy based on your offering model and customer decision-making behavior."
  },
  {
    question: "Can entertainment and media companies use GEO for talent recruitment?",
    answer: "Absolutely. Creative talent researches companies through AI to understand project types, creative culture, and growth opportunities. Strong AI visibility positions you as an attractive creative workplace—influencing recruiting outcomes."
  }
]

export default function GEOSantaMonicaPage() {
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-santa-monica',
    title: 'Santa Monica Creative & Media AI Visibility | Webvello GEO',
    description: 'Reach entertainment, media, and creative companies through AI search. Dominate Santa Monica\'s creative economy on ChatGPT & Perplexity.',
    geo: {
      city: 'Santa Monica',
      cityState: 'Santa Monica, CA'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Santa Monica', url: 'https://www.webvello.com/services/geo-santa-monica' }
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
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span className="text-white/80 text-sm">GEO Services in Santa Monica, California</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Creative Economy AI Visibility
              <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                for Santa Monica
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-2xl">
              Reach creative directors, producers, and brand leaders where they research partners. Dominate Santa Monica's creative industry on AI platforms. As part of our services <Link href="/services/california" className="text-pink-300 hover:text-pink-200 underline">across California</Link>, we help businesses gain competitive advantage through AI-optimized visibility.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                <Link href="/contact">Get Creative Strategy</Link>
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
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Creative Credibility</h3>
              <p className="text-slate-600">Santa Monica positioning establishes creative credibility globally. Studios, agencies, and brands reference Santa Monica quality benchmarks. AI visibility here signals sophistication worldwide.</p>
            </div>
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Portfolio Discovery</h3>
              <p className="text-slate-600">Creative professionals research through AI to find portfolio examples, case studies, and collaborative references. Strong visibility ensures you appear in these discovery conversations.</p>
            </div>
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Talent & Collaboration</h3>
              <p className="text-slate-600">Creative talent and partner companies discover opportunities through AI research. Strong positioning attracts both emerging collaborators and experienced creative professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Santa Monica Creative Sectors We Dominate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon
              return (
                <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-pink-300 transition-colors">
                  <Icon className="w-10 h-10 text-pink-600 mb-4" />
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
          <h2 className="text-4xl font-bold mb-12 text-center">Building Creative Authority in AI</h2>
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-pink-600 text-white font-bold text-lg">
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
          <h2 className="text-3xl font-bold mb-8 text-center">Santa Monica Market Coverage</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {neighborhoods.map((neighborhood, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700">
                <MapPin className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span>{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Santa Monica GEO Strategy Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg p-6 hover:border-pink-300 transition-colors">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-900">
                  {faq.question}
                  <span className="text-pink-600 group-open:hidden">+</span>
                  <span className="text-pink-600 hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-pink-600 to-pink-700">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate Santa Monica's Creative AI Space?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Creative professionals move through AI research. Get discovered during their evaluation. Establish creative leadership before competitors define the narrative.
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-slate-100">
            <Link href="/contact">Begin Your Creative Strategy</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

