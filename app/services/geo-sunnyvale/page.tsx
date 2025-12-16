import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Star, BarChart, Brain, Zap, Target, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Sunnyvale Tech Leadership & Innovation Visibility | Webvello GEO',
  description: 'Reach Sunnyvale tech leaders and semiconductor companies through AI search. Dominate Silicon Valley innovation conversations on ChatGPT & Perplexity.',
  keywords: ['geo sunnyvale', 'tech leadership sunnyvale', 'semiconductor visibility', 'generative engine optimization sunnyvale'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-sunnyvale',
  },
  openGraph: {
    title: 'Sunnyvale Tech Leadership & Innovation Visibility | Webvello GEO',
    description: 'Reach Sunnyvale tech leaders and semiconductor companies through AI search. Dominate Silicon Valley innovation conversations on ChatGPT & Perplexity.',
    url: 'https://www.webvello.com/services/geo-sunnyvale',
    type: 'website',
  }
}

const industries = [
  { icon: Building2, name: "Semiconductor & Chips", description: "Semiconductor design and manufacturing" },
  { icon: TrendingUp, name: "Cloud Computing", description: "Cloud infrastructure and platforms" },
  { icon: Brain, name: "Enterprise Software", description: "Enterprise applications and tools" },
  { icon: Users, name: "Networking & Telecom", description: "Networking equipment and services" },
  { icon: Star, name: "AI & Machine Learning", description: "AI research and implementations" },
  { icon: Zap, name: "IoT & Edge Computing", description: "Internet of Things and edge systems" }
]

const neighborhoods = [
  "Sunnyvale Downtown",
  "De Anza Tech Center",
  "Enterprise Drive",
  "N. Fair Oaks Avenue",
  "Sunnyvale Baylands",
  "Lawrence Expressway corridor",
  "Mathilda Avenue tech cluster",
  "Evelyn Avenue area",
  "Calabazas Park",
  "Mountain View adjacency"
]

const processSteps = [
  {
    step: "1",
    title: "Sunnyvale Tech Market Analysis",
    description: "We analyze how semiconductor engineers, software architects, and tech procurement teams research solutions through AI. What technical specifications matter? How do they evaluate alternatives?"
  },
  {
    step: "2",
    title: "Technical Authority Building",
    description: "We establish your credibility through technical depth, specification transparency, and integration documentation visibility. AI systems recognize technical authority—we ensure yours stands out."
  },
  {
    step: "3",
    title: "Semiconductor & Enterprise Positioning",
    description: "We position your offering to resonate with both semiconductor domain and enterprise software contexts. This dual positioning captures the full spectrum of Sunnyvale's tech ecosystem."
  },
  {
    step: "4",
    title: "Innovation Narrative",
    description: "We build positioning around technological innovation, R&D investment, and forward-thinking approach. Sunnyvale's market leads with innovation signals—we ensure yours are visible in AI conversations."
  },
  {
    step: "5",
    title: "Competitive Technical Tracking",
    description: "We monitor how often you're cited relative to competitors in technical discussions. Weekly reports show citation patterns among engineers, architects, and procurement professionals."
  }
]

const faqs = [
  {
    question: "How is Sunnyvale tech research different from general enterprise research?",
    answer: "Sunnyvale engineers and architects dive deep into technical specifications, benchmark comparisons, and integration requirements. They value technical documentation, performance data, and architectural alignment. We optimize for this rigorous technical research behavior."
  },
  {
    question: "Why does semiconductor industry visibility matter for non-semiconductor companies?",
    answer: "Even non-semiconductor companies benefit from Sunnyvale positioning. Semiconductor supply chain includes software, services, and support companies. Strong Sunnyvale visibility establishes credibility throughout the entire tech ecosystem."
  },
  {
    question: "Can emerging tech companies compete in Sunnyvale's visibility space?",
    answer: "Yes. Sunnyvale's market actively seeks innovative solutions. Emerging companies often compete better because they offer fresh approaches and cutting-edge technology. We position innovation and differentiation as primary strengths."
  },
  {
    question: "How do you handle competitive technical positioning?",
    answer: "We analyze competitor technical positioning through AI. Then we identify gaps and differentiation opportunities. We position your unique technical advantages so they surface clearly in comparative research queries."
  },
  {
    question: "What's the timeline for tech community visibility?",
    answer: "Technical audience traction develops over 3-5 weeks as engineers discover you. Procurement recognition takes 2-3 months. By month 4, you typically see cross-functional awareness and business momentum."
  },
  {
    question: "How do you measure success with technical decision-makers?",
    answer: "We track technical citations, competitive comparisons, specification mentions, and integration references. Monthly reports show how technical professionals are discovering and discussing you in AI conversations."
  },
  {
    question: "Does GEO help Sunnyvale tech companies recruit engineers?",
    answer: "Absolutely. Engineers research companies through AI to understand technical challenges, innovation potential, and professional growth. Strong Sunnyvale positioning attracts top talent by signaling technical sophistication."
  },
  {
    question: "Can you optimize for both B2B and B2C tech audiences?",
    answer: "Yes. Some companies serve both enterprise and consumer markets. We segment positioning to reach B2B procurement teams and B2C customers separately while building unified brand authority across both markets."
  }
]

export default function GEOSunnyvalePage() {
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-sunnyvale',
    title: 'Sunnyvale Tech Leadership & Innovation Visibility | Webvello GEO',
    description: 'Reach Sunnyvale tech leaders and semiconductor companies through AI search. Dominate Silicon Valley innovation conversations on ChatGPT & Perplexity.',
    geo: {
      city: 'Sunnyvale',
      cityState: 'Sunnyvale, CA'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Sunnyvale', url: 'https://www.webvello.com/services/geo-sunnyvale' }
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
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-white/80 text-sm">GEO Services in Sunnyvale, California</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Silicon Valley Technical Authority
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                for Sunnyvale
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-2xl">
              Reach semiconductor engineers, cloud architects, and enterprise tech leaders. Dominate Sunnyvale's technical innovation conversations through AI search.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Link href="/contact">Get Technical Strategy</Link>
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
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Technical Credibility</h3>
              <p className="text-slate-600">Sunnyvale positions you as technically sophisticated. Engineers and architects worldwide reference Sunnyvale credibility when evaluating solutions. This positioning carries enormous weight in technical communities.</p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Specification Authority</h3>
              <p className="text-slate-600">Technical decision-makers research through AI looking for specification depth and technical documentation. Strong visibility ensures your technical details surface in these evaluation queries.</p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Innovation Signal</h3>
              <p className="text-slate-600">Sunnyvale moves on innovation. AI visibility here signals forward-thinking approach and technical leadership—critical for attracting both customers and engineering talent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Sunnyvale Tech Sectors We Dominate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon
              return (
                <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-cyan-300 transition-colors">
                  <Icon className="w-10 h-10 text-cyan-600 mb-4" />
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
          <h2 className="text-4xl font-bold mb-12 text-center">Building Sunnyvale Technical Authority</h2>
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-600 text-white font-bold text-lg">
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
          <h2 className="text-3xl font-bold mb-8 text-center">Sunnyvale Market Coverage</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {neighborhoods.map((neighborhood, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700">
                <MapPin className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                <span>{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Sunnyvale GEO Strategy Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg p-6 hover:border-cyan-300 transition-colors">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-900">
                  {faq.question}
                  <span className="text-cyan-600 group-open:hidden">+</span>
                  <span className="text-cyan-600 hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-cyan-600 to-cyan-700">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Lead Sunnyvale's Technical AI Space?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Sunnyvale's engineers and architects research through AI. Get discovered during their technical evaluation. Establish authority in Silicon Valley's innovation core.
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100">
            <Link href="/contact">Start Your Technical Strategy</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

