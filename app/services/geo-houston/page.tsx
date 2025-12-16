import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target, Globe, BarChart, Droplet, Rocket } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Houston B2B Systems: GEO for Execution at Scale',
  description: 'Integrate GEO into Houston operations. Energy, medical, B2B positioning optimized for procurement and decision-making workflows.',
  keywords: ['geo houston', 'generative engine optimization houston', 'ai seo houston', 'chatgpt optimization houston texas', 'perplexity optimization houston'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-houston',
  },
  openGraph: {
    title: 'Houston B2B Systems: GEO for Execution at Scale',
    description: 'Integrate GEO into Houston operations. Energy, medical, B2B positioning optimized for procurement and decision-making workflows.',
    url: 'https://www.webvello.com/services/geo-houston',
    type: 'website',
  }
}

const houstonIndustries = [
  { name: "Energy & Oil/Gas", description: "Energy companies, oilfield services, and energy tech" },
  { name: "Healthcare & Medical", description: "Medical practices in the Texas Medical Center and beyond" },
  { name: "Aerospace", description: "NASA contractors, aerospace manufacturers, and space tech" },
  { name: "Manufacturing", description: "Industrial manufacturers and B2B services" },
  { name: "Legal Services", description: "Law firms specializing in energy, maritime, and more" },
  { name: "Real Estate", description: "Agents and developers in Houston's growing market" },
  { name: "Technology", description: "Tech companies and startups in Houston's emerging tech scene" },
  { name: "Construction", description: "Commercial and residential contractors" }
]

const houstonAreas = [
  "Downtown Houston", "Galleria/Uptown", "The Heights", "Montrose",
  "Midtown", "Medical Center", "Memorial", "River Oaks",
  "Sugar Land", "The Woodlands", "Katy", "Pearland",
  "Clear Lake", "Energy Corridor", "Westchase", "Bellaire"
]

const processSteps = [
  {
    step: "1",
    title: "Houston Market Audit",
    description: "Houston market audit analyzes how AI systems currently respond to Houston-specific queries in your industry, identifies who dominates energy, healthcare, or B2B searches, and locates gaps in your sector."
  },
  {
    step: "2",
    title: "Entity & Schema Setup",
    description: "We implement structured data that tells AI systems exactly what you do and where you serve in Greater Houston. This includes LocalBusiness schema, Service schema, and industry-specific markup for Houston's major sectors."
  },
  {
    step: "3",
    title: "Content Optimization",
    description: "We optimize your existing content and create new Houston-specific pages that answer the questions local customers and B2B buyers ask AI engines about your services."
  },
  {
    step: "4",
    title: "Authority Building",
    description: "We build topical authority through strategic content clusters, establishing your business as the definitive Houston source in your industry across all service areas."
  },
  {
    step: "5",
    title: "Monitor & Iterate",
    description: "We track AI citations, measure visibility improvements across ChatGPT, Perplexity, and Google SGE, and continuously refine strategy based on Houston market data and industry trends."
  }
]

const faqs = [
  {
    question: "How does GEO address Houston's specialized procurement processes?",
    answer: "Houston's energy, medical, and B2B sectors follow industry-specific procurement rhythms. GEO positions businesses for the moments when procurement teams actively research vendors. GEO optimization aligns with RFQ cycles, regulatory review periods, and contract renewal windows—timing optimization for when decision-makers search."
  },
  {
    question: "Can GEO integrate with technical buyers' research workflows?",
    answer: "Yes. Engineering teams, technical directors, and specialist procurement search with specific terminology. We optimize for technical query language used by specialists, not generalists. Citations appear in the search moments specialists actually use during evaluation processes."
  },
  {
    question: "How does Houston's scale require operational optimization?",
    answer: "Houston's Energy Corridor, Medical Center, and industrial zones operate at different scales with different decision-making speeds. We optimize by operational context—rapid-cycle retail differs from multi-month energy contracts. Messaging and positioning adapt to buying process realities."
  },
  {
    question: "What's special about B2B GEO for Houston manufacturers?",
    answer: "Manufacturing sales cycles are long, decisions involve multiple stakeholders. GEO builds visibility across the entire evaluation period—initial research, vendor comparison, technical review, financial approval. Each stakeholder encounters relevant credibility signals at their decision moment."
  },
  {
    question: "Can GEO support energy industry positioning?",
    answer: "Absolutely. Energy sector buyers search for specialized expertise—upstream, downstream, midstream, services differentiation. We position within industry verticals, ensuring energy procurement teams find you during their vertical-specific research."
  },
  {
    question: "How do you handle Medical Center hospital vs. practice optimization?",
    answer: "Houston Medical Center hospitals, clinics, and solo practices all search differently. We create positioning tailored by organizational type. Hospital procurement searches differ from patient-search behaviors—we optimize for each decision-maker type."
  },
  {
    question: "Does GEO work with logistics and distribution operations?",
    answer: "Yes. Logistics professionals search for solutions to specific operational challenges. GEO positions you as problem-solvers for logistics professionals, not generic service providers. We optimize for supply chain and operational terminology actual logistics teams use."
  },
  {
    question: "What operational advantage does Houston-specific GEO create?",
    answer: "Most competitors optimize generically. Houston's specialized, large-scale industries reward deep understanding of operational needs. Positioning tailored to actual buying processes becomes difficult for competitors to match. Operational alignment compounds—efficiency gains multiply as scale grows."
  }
]

export default function GEOHoustonPage() {
  
  // Generate clean schema for GEO page (NO physical address, NO fake ratings)
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-houston',
    title: 'Houston B2B Systems: GEO for Execution at Scale',
    description: 'Integrate GEO into Houston operations. Energy, medical, B2B positioning optimized for procurement and decision-making workflows.',
    geo: {
      city: 'Houston',
      cityState: 'Houston, TX'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Houston', url: 'https://www.webvello.com/services/geo-houston' }
    ]
  })
  
  return (
    <div className="min-h-screen bg-white">
      {/* Clean JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-white/80 text-sm">GEO Services in Houston, Texas</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Generative Engine Optimization in{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Houston, Texas
              </span>
            </h1>
            
            {/* Direct Answer Summary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                Houston's industries operate at specialized scales—energy systems, medical hierarchies, manufacturing networks. GEO builds visibility into industry-specific buyer flows, positioning businesses where decision-makers already search. As part of Webvello's services <Link href="/services/texas" className="text-orange-300 hover:text-orange-200 underline">throughout Texas</Link>, Houston businesses gain competitive advantage through AI-optimized visibility.
              </p>
            </div>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Houston GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Houston Needs GEO */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why GEO Matters in Houston
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Houston is the fourth-largest city in the US with 2.3 million residents and a metro area of over 7 million. As the energy capital of the world and home to the Texas Medical Center, Houston is a hub for B2B and professional services where AI search is rapidly becoming the primary discovery method.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                When someone asks AI "who's the best maritime lawyer in Houston" or "find me a good commercial contractor near the Energy Corridor," the businesses that appear are winning customers. Traditional SEO gets you into lists of links—GEO gets you into the AI answer itself, the single recommendation that matters.
              </p>
              <p className="text-lg text-slate-600">
                Voice search, ChatGPT, Perplexity, and Google's AI Overviews are now how procurement teams, decision-makers, and consumers find Houston businesses. If you're not optimized for AI, you're invisible to the majority of searches in your market.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-orange-500 mb-1">2.3M</p>
                <p className="text-sm text-slate-600">Houston residents</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-orange-500 mb-1">7.1M</p>
                <p className="text-sm text-slate-600">Metro population</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-orange-500 mb-1">$512B</p>
                <p className="text-sm text-slate-600">Metro GDP</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-orange-500 mb-1">#4</p>
                <p className="text-sm text-slate-600">US city by population</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Webvello Delivers */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              How Webvello Delivers GEO Services Remotely
            </h2>
            <p className="text-xl text-slate-600">
              All our GEO work is 100% digital. We optimize your website, implement structured data, create AI-friendly content for Houston areas, and monitor results—all without needing a local office.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Globe className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Remote Service</h3>
              <p className="text-slate-600">
                Everything happens online. We access your website, implement changes, and track results through digital tools. Meetings via Zoom, updates via email, results via dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Target className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Houston Market Expertise</h3>
              <p className="text-slate-600">
                We research Houston-specific queries, understand the Energy Corridor vs. Medical Center vs. Galleria markets, and optimize for how Houston B2B buyers and consumers search. No local office needed.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <BarChart className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">
                Monthly reports show exactly when AI systems cite your business for Houston queries. See your progress with real data, screenshots, and measurable visibility improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Houston GEO Process
            </h2>
            <p className="text-xl text-slate-600">
              A systematic approach to dominating AI search in Houston's competitive markets.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Houston Industries We Specialize In
            </h2>
            <p className="text-xl text-slate-600">
              We understand the unique competitive landscape of Houston's major industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {houstonIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <Building2 className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Houston Areas We Serve
            </h2>
            <p className="text-xl text-slate-600">
              From Downtown to The Woodlands, we optimize for all Greater Houston areas.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {houstonAreas.map((area) => (
              <span
                key={area}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 text-slate-600 text-sm">
            Plus all of Greater Houston: Cypress, Humble, Spring, Pasadena, and beyond.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Houston GEO FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Cited by AI in Houston?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            No pressure. Just a free audit showing exactly how visible your Houston business is when people ask AI for recommendations. See where you stand and what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-10 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Your Free Houston GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              className="h-14 px-10 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/services/geo-services">
                Learn More About GEO
              </Link>
            </Button>
          </div>
          
          {/* Internal Links */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Related Services:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/services/generative-engine-optimization" className="text-white/80 hover:text-white text-sm underline">
                Generative Engine Optimization
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/services/ai-seo" className="text-white/80 hover:text-white text-sm underline">
                AI-Driven Visibility
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/" className="text-white/80 hover:text-white text-sm underline">
                Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
