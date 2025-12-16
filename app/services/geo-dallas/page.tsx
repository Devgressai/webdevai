import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target, Globe, BarChart } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'GEO Services in Dallas, Texas | AI Search Optimization',
  description: 'Get your Dallas business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for DFW metroplex.',
  keywords: ['geo dallas', 'generative engine optimization dallas', 'ai seo dallas', 'chatgpt optimization dfw', 'perplexity optimization dallas'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-dallas',
  },
  openGraph: {
    title: 'GEO Services in Dallas, Texas | AI Search Optimization',
    description: 'Get your Dallas business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for DFW metroplex.',
    url: 'https://www.webvello.com/services/geo-dallas',
    type: 'website',
  }
}

const dallasIndustries = [
  { name: "Technology", description: "Growing tech hub with major corporate relocations" },
  { name: "Finance & Banking", description: "Major banking and financial services center" },
  { name: "Healthcare", description: "Medical practices and healthcare systems" },
  { name: "Real Estate", description: "One of the fastest-growing real estate markets" },
  { name: "Professional Services", description: "Consulting, legal, and accounting firms" },
  { name: "Telecommunications", description: "AT&T headquarters and telecom industry" },
  { name: "Retail & E-commerce", description: "Major retail headquarters and D2C brands" },
  { name: "Transportation & Logistics", description: "Major logistics hub for the Southwest" }
]

const dallasAreas = [
  "Downtown Dallas", "Uptown", "Deep Ellum", "Highland Park",
  "University Park", "Plano", "Frisco", "Irving",
  "Fort Worth", "Arlington", "Richardson", "Addison",
  "Las Colinas", "McKinney", "Allen", "Garland"
]

const processSteps = [
  {
    step: "1",
    title: "DFW Market Audit",
    description: "We analyze how AI systems currently respond to Dallas-Fort Worth queries in your industry. What's being cited? Who dominates Dallas vs. Fort Worth searches? Where are the gaps?"
  },
  {
    step: "2",
    title: "Entity & Schema Setup",
    description: "We implement structured data that tells AI systems exactly what you do and where you serve in DFW. This includes LocalBusiness schema, Service schema, and metroplex-wide targeting."
  },
  {
    step: "3",
    title: "Content Optimization",
    description: "We optimize your existing content and create new DFW-specific pages that answer the questions local customers ask AI engines about your services."
  },
  {
    step: "4",
    title: "Authority Building",
    description: "We build topical authority through strategic content clusters, establishing your business as the definitive DFW source in your industry across all major cities."
  },
  {
    step: "5",
    title: "Monitor & Iterate",
    description: "We track AI citations, measure visibility improvements across ChatGPT, Perplexity, and Google SGE, and continuously refine strategy based on DFW market data."
  }
]

const faqs = [
  {
    question: "How does GEO help my Dallas business?",
    answer: "When someone asks ChatGPT 'best financial advisor in Dallas' or asks Perplexity 'find a commercial real estate broker in Plano,' your business should be mentioned. GEO optimizes your online presence so AI systems recognize and recommend you for queries in the DFW market. As AI search grows, visibility there is critical."
  },
  {
    question: "How does Webvello deliver GEO services remotely to Dallas businesses?",
    answer: "All our GEO work is done digitally—no local office needed. We optimize your website, implement schema markup, create AI-friendly content for DFW areas, and monitor your visibility across AI platforms. You'll receive monthly reports showing exactly when and how AI systems cite your business. We've successfully served Dallas businesses from tech startups to financial services entirely remotely."
  },
  {
    question: "Do you serve the entire DFW metroplex?",
    answer: "Yes. We serve businesses throughout Dallas-Fort Worth—from Downtown Dallas to Fort Worth, Plano to Arlington. We create location-specific strategies for your service areas across all DFW counties including Dallas, Tarrant, Collin, and Denton."
  },
  {
    question: "What makes Dallas-Fort Worth different for GEO?",
    answer: "DFW is the fourth-largest metro in the US and one of the fastest-growing. The influx of corporate relocations from California and the Northeast means a tech-savvy population increasingly using AI for search. Competition is growing rapidly, making early GEO adoption valuable."
  },
  {
    question: "Do you work with Dallas tech companies and corporate relocations?",
    answer: "Absolutely. DFW has seen massive corporate relocations—Oracle, Tesla, CBRE, and hundreds more. These companies and their employees use AI search heavily. We help tech companies, professional services, and B2B businesses establish AI visibility quickly in this growing market."
  },
  {
    question: "What industries benefit most from Dallas GEO?",
    answer: "Financial services, tech companies, real estate, professional services, healthcare, and retail headquarters see the biggest impact. DFW's diverse, growing economy means AI visibility drives high-value leads across nearly every industry."
  },
  {
    question: "How long until I see AI visibility improvements in Dallas?",
    answer: "For niche queries and specific DFW cities like Plano or Frisco, we typically see improvements in 4-8 weeks. Broader competitive terms take 3-6 months. We prioritize quick wins in your specific area while building toward larger metroplex-wide visibility."
  },
  {
    question: "How do you measure GEO success in Dallas?",
    answer: "We track when AI systems mention your business, monitor specific DFW-related queries in your industry, measure citation frequency across ChatGPT, Perplexity, and Google SGE, and analyze the context of mentions. You'll see concrete data showing your growing AI visibility month over month."
  }
]

export default function GEODallasPage() {
  
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-dallas',
    title: 'GEO Services in Dallas, Texas | AI Search Optimization',
    description: 'Get your Dallas business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for DFW metroplex.',
    geo: {
      city: 'Dallas',
      cityState: 'Dallas, TX'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Dallas', url: 'https://www.webvello.com/services/geo-dallas' }
    ]
  })
  
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-white/80 text-sm">GEO Services in Dallas, Texas</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Generative Engine Optimization in{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dallas, Texas
              </span>
            </h1>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                Webvello provides remote GEO services to Dallas-Fort Worth businesses, optimizing your online presence so AI engines like ChatGPT, Perplexity, and Google SGE cite you when customers ask for recommendations. We help tech companies, financial services, real estate firms, and professional practices dominate AI search without requiring a local office visit.
              </p>
            </div>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Dallas GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why GEO Matters in Dallas
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Dallas-Fort Worth is the fourth-largest metro in the US with 7.6 million people and a $512 billion economy. As one of America's fastest-growing business hubs with major corporate relocations from California and the Northeast, DFW attracts tech-savvy professionals who rely heavily on AI search.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                When someone asks AI "best financial advisor in Dallas" or "find a commercial contractor in Plano," the businesses cited win the customers. Traditional SEO puts you in lists—GEO gets you into the AI answer itself, the single recommendation that matters.
              </p>
              <p className="text-lg text-slate-600">
                Voice search, ChatGPT, Perplexity, and Google's AI Overviews are now how DFW residents find services. With major companies relocating here daily, early GEO adoption gives you a massive competitive advantage in this booming market.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-purple-500 mb-1">1.3M</p>
                <p className="text-sm text-slate-600">Dallas residents</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-purple-500 mb-1">7.6M</p>
                <p className="text-sm text-slate-600">Metro population</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-purple-500 mb-1">$512B</p>
                <p className="text-sm text-slate-600">Metro GDP</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-purple-500 mb-1">#4</p>
                <p className="text-sm text-slate-600">US metro area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              How Webvello Delivers GEO Services Remotely
            </h2>
            <p className="text-xl text-slate-600">
              All our GEO work is 100% digital. We optimize your website, implement structured data, create AI-friendly content, and monitor results—all without needing a local Dallas office.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Globe className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Remote Service</h3>
              <p className="text-slate-600">
                Everything happens online. We access your website, implement changes, and track results through digital tools. Meetings via Zoom, updates via email, results via dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Target className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">DFW Market Expertise</h3>
              <p className="text-slate-600">
                We research Dallas-Fort Worth queries, understand Plano vs. Fort Worth vs. Frisco markets, and optimize for how DFW residents search. No local office needed.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <BarChart className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">
                Monthly reports show exactly when AI systems cite your business for DFW queries. See your progress with real data and screenshots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Dallas GEO Process
            </h2>
            <p className="text-xl text-slate-600">
              A systematic approach to dominating AI search in DFW.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
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

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Dallas Industries We Specialize In
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dallasIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <Building2 className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Dallas-Fort Worth Areas We Serve
            </h2>
            <p className="text-xl text-slate-600">
              From Downtown Dallas to Fort Worth, we optimize for all DFW cities and suburbs.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {dallasAreas.map((area) => (
              <span
                key={area}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Dallas GEO FAQs
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

      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Cited by AI in Dallas?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            No pressure. Just a free audit showing exactly how visible your Dallas business is when people ask AI for recommendations. See where you stand and what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Your Free Dallas GEO Audit
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
          
          <div className="mt-16 pt-16 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Related Services:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/services/geo-services" className="text-white/80 hover:text-white text-sm underline">
                GEO Services Overview
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/services/ai-seo" className="text-white/80 hover:text-white text-sm underline">
                AI-Powered SEO
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/services/local-seo" className="text-white/80 hover:text-white text-sm underline">
                Local SEO Services
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
