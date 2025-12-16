import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Star, BarChart, Brain, Zap, Target, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'San Jose AI Visibility & Tech Market Domination | Webvello GEO',
  description: 'Capture AI search citations in Silicon Valley\'s competitive tech landscape. Reach San Jose tech buyers through ChatGPT, Perplexity & Claude.',
  keywords: ['geo san jose', 'ai visibility silicon valley', 'generative engine optimization san jose', 'chatgpt seo silicon valley'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-san-jose',
  },
  openGraph: {
    title: 'San Jose AI Visibility & Tech Market Domination | Webvello GEO',
    description: 'Capture AI search citations in Silicon Valley\'s competitive tech landscape. Reach San Jose tech buyers through ChatGPT, Perplexity & Claude.',
    url: 'https://www.webvello.com/services/geo-san-jose',
    type: 'website',
  }
}

const industries = [
  { icon: Building2, name: "Semiconductor & Chip Design", description: "Core of Silicon Valley innovation" },
  { icon: TrendingUp, name: "Venture Capital & Finance", description: "Investment firms and private equity" },
  { icon: Brain, name: "Software & Cloud Services", description: "Enterprise SaaS and platforms" },
  { icon: Users, name: "IT Services & Consulting", description: "System integration and technical advisory" },
  { icon: Star, name: "Hardware & Equipment", description: "Electronics manufacturing and supply" },
  { icon: Zap, name: "AI & Machine Learning", description: "Emerging AI solution providers" }
]

const neighborhoods = [
  "Downtown San Jose",
  "Willow Glen",
  "East Side (Jackson, McLaughlin)",
  "Almaden Valley",
  "Los Gatos (foothills)",
  "Campbell",
  "Saratoga",
  "Cupertino spillover",
  "Fremont corridor",
  "Milpitas tech cluster"
]

const processSteps = [
  {
    step: "1",
    title: "Silicon Valley Market Mapping",
    description: "We identify how AI systems currently respond to San Jose and Silicon Valley queries. What companies get cited? Which niches have gaps? What terminology do AI models use when discussing your sector?"
  },
  {
    step: "2",
    title: "Tech-Focused Entity Development",
    description: "We establish your entity in AI systems through strategic schema implementation. Service schema, FAQPage markup, and technical documentation optimization position you as a credible player in San Jose's innovation ecosystem."
  },
  {
    step: "3",
    title: "Vertical-Specific Content",
    description: "We create content that speaks directly to how venture capitalists, CTOs, and tech decision-makers query AI engines. This means technical depth, market positioning, and competitive differentiation."
  },
  {
    step: "4",
    title: "Authority in Tech Conversations",
    description: "We build topical authority by establishing your expertise in specific technologies, methodologies, and market segments that define San Jose's business landscape."
  },
  {
    step: "5",
    title: "Competitive Citation Tracking",
    description: "We monitor how often you're cited relative to competitors in AI responses. Weekly dashboards show citation velocity, positioning trends, and emerging opportunities in your sector."
  }
]

const faqs = [
  {
    question: "Why does San Jose need specialized GEO strategy?",
    answer: "San Jose sits at the center of global tech. Every AI model builder, researcher, and engineer researches San Jose tech markets through generative engines. Your visibility here influences B2B relationships worldwide. Generic optimization misses this nuance—you need Silicon Valley market expertise."
  },
  {
    question: "How do tech decision-makers query AI engines differently?",
    answer: "CTOs ask about technical specifications and integration complexity. VCs query market sizing and growth trajectories. HR leaders search for talent competitiveness. Each persona queries differently. We segment optimization so your content surfaces precisely when each decision-maker is researching."
  },
  {
    question: "Can early-stage startups compete in San Jose's AI visibility space?",
    answer: "Yes. Startups often have advantages—founder credibility, technical novelty, and mission clarity resonate strongly with AI citation patterns. However, execution matters. We help startups compete by positioning technical innovation and market timing as primary strengths in AI responses."
  },
  {
    question: "What's the timeline for AI citations in competitive San Jose sectors?",
    answer: "Semiconductor, venture capital, and enterprise software are highly competitive. We typically see initial citations within 4-6 weeks, with visibility acceleration in months 2-3. Competitive sectors show faster velocity because AI models actively cite when multiple credible sources validate your positioning."
  },
  {
    question: "How do you handle the pace of San Jose tech evolution?",
    answer: "We maintain monthly optimization cycles that track emerging sectors, new company formations, and shifting market narratives. When the market pivots to new technologies, we adjust positioning immediately. Monthly strategy reviews ensure your optimization stays aligned with Silicon Valley's rapid evolution."
  },
  {
    question: "Does GEO help B2B tech companies more than consumer-focused businesses?",
    answer: "GEO is exceptionally strong for B2B tech because technical decision-makers rely heavily on AI engines for research. However, consumer companies also benefit—we simply adjust messaging and positioning. The strategy adapts to your buyer's research behavior."
  },
  {
    question: "How do you optimize for venture capital and corporate development queries?",
    answer: "These audiences query AI engines differently—looking for growth metrics, exit potential, competitive dynamics. We optimize content to emphasize market opportunity, technical differentiation, and commercial viability. This positions you for institutional interest."
  },
  {
    question: "Can remote optimization work for San Jose tech companies?",
    answer: "Absolutely. San Jose's tech sector is globally connected. Remote optimization is actually standard for the industry. We work with companies across geographies while specializing in San Jose market dynamics and buyer behavior patterns."
  }
]

export default function GEOSanJosePage() {
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-san-jose',
    title: 'San Jose AI Visibility & Tech Market Domination | Webvello GEO',
    description: 'Capture AI search citations in Silicon Valley\'s competitive tech landscape. Reach San Jose tech buyers through ChatGPT, Perplexity & Claude.',
    geo: {
      city: 'San Jose',
      cityState: 'San Jose, CA'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO San Jose', url: 'https://www.webvello.com/services/geo-san-jose' }
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
              <span className="text-white/80 text-sm">GEO Services in San Jose, California</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Silicon Valley AI Visibility
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                for Tech Leaders
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-2xl">
              Capture AI search citations where Silicon Valley talent, investors, and tech buyers research. As part of our services <Link href="/services/california" className="text-blue-400 hover:underline">across California</Link>, dominate ChatGPT, Perplexity, and Claude conversations in San Jose's most competitive tech sectors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact">Get AI Visibility Strategy</Link>
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
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Tech Buyer Behavior</h3>
              <p className="text-slate-600">San Jose tech decision-makers query AI engines to validate technical approaches, compare vendor viability, and research emerging solutions. Visibility here influences millions in B2B decisions.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Market Velocity</h3>
              <p className="text-slate-600">Silicon Valley moves at startup speed. New companies launch weekly, technologies shift monthly, and market leadership changes seasonally. Your GEO strategy must keep pace with this velocity.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Global Influence</h3>
              <p className="text-slate-600">San Jose tech visibility influences corporate decisions globally. Your positioning here carries weight beyond regional boundaries—AI researchers, investors, and executives worldwide reference Silicon Valley credibility signals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">San Jose Tech Sectors We Dominate</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">How We Build San Jose Tech Visibility</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-center">San Jose Market Coverage</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">San Jose GEO Strategy Questions</h2>
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate San Jose's AI Search?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Silicon Valley moves fast. So does generative engine optimization. Let's establish your AI visibility before competitors saturate the market.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
            <Link href="/contact">Start Your Strategy Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

