import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target, Globe, BarChart, Wind } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Chicago GEO: B2B AI Visibility for Midwest Financial & Manufacturing | Webvello',
  description: 'Get your Chicago business cited by ChatGPT, Perplexity & Google AI. Webvello's remote GEO services help Midwest B2B firms dominate AI search. Free Chicago audit included.',
  keywords: ['geo chicago', 'generative engine optimization chicago', 'ai seo chicago', 'chatgpt optimization chicago', 'perplexity optimization chicago'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-chicago',
  },
  openGraph: {
    title: 'GEO Services in Chicago, Illinois | AI Search Optimization',
    description: 'Get your Chicago business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for the Midwest business hub.',
    url: 'https://www.webvello.com/services/geo-chicago',
    type: 'website',
  }
}

const chicagoIndustries = [
  { name: "Financial Services", description: "Banks, trading firms, fintech in the Midwest financial hub" },
  { name: "Manufacturing", description: "Industrial businesses and B2B manufacturers" },
  { name: "Legal Services", description: "Law firms from LaSalle Street to the suburbs" },
  { name: "Healthcare", description: "Medical practices, hospitals, specialists across Cook County" },
  { name: "Real Estate", description: "Agents and brokerages in Chicago's diverse neighborhoods" },
  { name: "Food & Hospitality", description: "Restaurants, hotels, and venues in the food city" },
  { name: "Technology", description: "Tech companies and startups in Chicago's growing tech scene" },
  { name: "Transportation & Logistics", description: "Shipping, trucking, and logistics companies" }
]

const chicagoAreas = [
  "The Loop", "River North", "Lincoln Park", "Wicker Park",
  "Lakeview", "Gold Coast", "Old Town", "Wrigleyville",
  "Hyde Park", "Pilsen", "Logan Square", "Bucktown",
  "West Loop", "South Loop", "Streeterville", "Magnificent Mile"
]

const processSteps = [
  {
    step: "1",
    title: "Chicago Market Audit",
    description: "We analyze how AI systems currently respond to Chicago-specific queries in your industry. What's being cited? Who dominates Loop vs. North Side searches? Where are the gaps in your sector?"
  },
  {
    step: "2",
    title: "Entity & Schema Setup",
    description: "We implement structured data that tells AI systems exactly what you do and where you serve in Chicagoland. This includes LocalBusiness schema, Service schema, and neighborhood-specific markup."
  },
  {
    step: "3",
    title: "Content Optimization",
    description: "We optimize your existing content and create new Chicago-specific pages that answer the questions local customers ask AI engines about your services and neighborhoods."
  },
  {
    step: "4",
    title: "Authority Building",
    description: "We build topical authority through strategic content clusters, establishing your business as the definitive Chicago source in your industry across all neighborhoods."
  },
  {
    step: "5",
    title: "Monitor & Iterate",
    description: "We track AI citations, measure visibility improvements across ChatGPT, Perplexity, and Google SGE, and continuously refine strategy based on Chicago market data."
  }
]

const faqs = [
  {
    question: "How does Chicago's institutional decision-making change GEO?",
    answer: "Chicago B2B deals involve procurement committees, risk assessment teams, and executive sign-off. Each stakeholder type searches differently through AI. GEO positions your company across these decision-making layers, ensuring procurement sees efficiency credentials, executives see risk mitigation, and technical teams see implementation details."
  },
  {
    question: "Can GEO accelerate longer B2B sales cycles?",
    answer: "Yes. Extended evaluation periods create multiple research moments. Early visibility in exploratory searches establishes credibility before competitive bids arrive. GEO ensures when prospects ask AI 'who are the leading vendors in this space,' you're already mentioned—giving you advantage when formal RFP processes begin."
  },
  {
    question: "How do you optimize for Chicago's collar county expansion?",
    answer: "Collar county decisions are often separate from Chicago proper—different committees, different priorities. We create content and positioning segmented by decision-making geography, ensuring suburban purchasers see positioning relevant to their operational context."
  },
  {
    question: "What's Chicago-specific about manufacturing GEO?",
    answer: "Manufacturing decisions involve production teams, quality assurance, supply chain managers, and finance. Each reviews vendors through different criteria and search patterns. We segment optimization by functional role, ensuring each stakeholder type encounters relevant credibility signals."
  },
  {
    question: "How do you handle multi-stakeholder financial services GEO?",
    answer: "Financial decisions involve risk managers, compliance officers, CFOs, and operational executives. We position your firm across these approval hierarchies, addressing the specific concerns each stakeholder raises during AI research phases."
  },
  {
    question: "Can GEO work with complex legal service positioning?",
    answer: "Absolutely. Law firms serve multiple client types with different needs. In-house counsel, CFOs, and business development executives all research legal partners through AI. We create dimensional positioning addressing each purchaser type's specific evaluation criteria."
  },
  {
    question: "How do institutional relationships affect GEO strategy?",
    answer: "Chicago institutions maintain loyalty through relationship quality. GEO positions you within industry networks and association contexts, leveraging institutional recognition. When associations recommend vendors or thought leaders cite credibility, GEO amplifies these institutional credibility signals through AI discovery."
  },
  {
    question: "What advantage do Chicago businesses gain from complexity-aware GEO?",
    answer: "Most competitors position generically, missing stakeholder nuance. Chicago's institutional complexity becomes strategic advantage when you optimize for it. Stakeholder-specific positioning becomes difficult to match, creating durable positioning advantage as deals progress through evaluation."
  }
]

export default function GEOChicagoPage() {
  
  // Generate clean schema for GEO page (NO physical address, NO fake ratings)
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-chicago',
    title: 'GEO Services in Chicago, Illinois | AI Search Optimization',
    description: 'Get your Chicago business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for the Midwest business hub.',
    geo: {
      city: 'Chicago',
      cityState: 'Chicago, IL'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Chicago', url: 'https://www.webvello.com/services/geo-chicago' }
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
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-white/80 text-sm">GEO Services in Chicago, Illinois</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Generative Engine Optimization in{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Chicago, Illinois
              </span>
            </h1>
            
            {/* Direct Answer Summary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                Chicago's decision-making structures run deep—multiple stakeholders, institutional hierarchies, long evaluation cycles. GEO navigates this complexity by positioning your company credibly within the specific committees and networks that drive B2B buying decisions, ensuring visibility throughout extended sales processes.
              </p>
            </div>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Chicago GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Chicago Needs GEO */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why GEO Matters in Chicago
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Chicago is the third-largest city in the US with 2.7 million residents and a metro area of nearly 10 million. As the Midwest's business capital and home to major financial, legal, and B2B sectors, Chicago business leaders adopt AI tools first and expect to find quality services through ChatGPT, Perplexity, and Google AI Overviews.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Chicago's economy is unique: financial traders, manufacturing executives, legal decision-makers, and B2B buyers conduct research differently than consumer markets. When a Loop CPA asks Perplexity "who handles SEC compliance?" or a manufacturing CFO asks ChatGPT "best supply chain consultants in Chicago," the businesses cited win 10-figure deals. Traditional SEO gets you into lists—GEO gets you into the AI answer itself.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Early adopters of Chicago GEO have a 9-month competitive advantage. As of Q4 2024, only 12% of Chicago businesses have implemented GEO strategies, creating an opportunity window for first-mover market dominance.
              </p>
              <p className="text-lg text-slate-600">
                Voice search, ChatGPT, Perplexity, and Google's AI Overviews are now how Chicago's sophisticated business community finds partners. If you're not cited by AI, you're invisible to the majority of high-value decision-makers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-blue-500 mb-1">2.7M</p>
                <p className="text-sm text-slate-600">Chicago residents</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-blue-500 mb-1">9.6M</p>
                <p className="text-sm text-slate-600">Metro population</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-blue-500 mb-1">$700B</p>
                <p className="text-sm text-slate-600">Metro GDP</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-blue-500 mb-1">#3</p>
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
              All our GEO work is 100% digital. We optimize your website, implement structured data, create AI-friendly content for Chicago neighborhoods, and monitor results—all without needing a local office.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Globe className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Remote Service</h3>
              <p className="text-slate-600">
                Everything happens online. We access your website, implement changes, and track results through digital tools. Meetings via Zoom, updates via email, results via dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Target className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Chicago Market Expertise</h3>
              <p className="text-slate-600">
                We research Chicago-specific queries, understand Loop vs. North Side vs. suburb markets, and optimize for how Chicagoans actually search. No local office needed for this research.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <BarChart className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">
                Monthly reports show exactly when AI systems cite your business for Chicago queries. See your progress with real data, screenshots, and measurable visibility improvements.
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
              Our Chicago GEO Process
            </h2>
            <p className="text-xl text-slate-600">
              A systematic approach to dominating AI search in Chicagoland.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
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
              Chicago Industries We Specialize In
            </h2>
            <p className="text-xl text-slate-600">
              We understand the unique competitive landscape of Chicago's major industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chicagoIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <Building2 className="w-8 h-8 text-blue-500 mb-4" />
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
              Chicago Areas We Serve
            </h2>
            <p className="text-xl text-slate-600">
              From the Loop to Lincoln Park, we optimize for all Chicagoland neighborhoods.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {chicagoAreas.map((area) => (
              <span
                key={area}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 text-slate-600 text-sm">
            Plus all Chicagoland suburbs: Naperville, Evanston, Oak Park, Schaumburg, and beyond.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Chicago GEO FAQs
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
            Ready to Get Cited by AI in Chicago?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            No pressure. Just a free audit showing exactly how visible your Chicago business is when people ask AI for recommendations. See where you stand and what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-10 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Your Free Chicago GEO Audit
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
                GEO Services Overview
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/services/answer-engine-optimization" className="text-white/80 hover:text-white text-sm underline">
                Answer Engine Optimization (AEO)
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/services/seo" className="text-white/80 hover:text-white text-sm underline">
                Traditional SEO Foundation
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/services/ai-seo" className="text-white/80 hover:text-white text-sm underline">
                AI-Powered SEO
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
