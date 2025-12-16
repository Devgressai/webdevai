import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target, Globe, BarChart } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'NYC Hyperlocal GEO: Borough-Specific Authority',
  description: 'Dominate NYC hyperlocal AI search across all five boroughs. Manhattan, Brooklyn positioning reflects neighborhood sophistication.',
  keywords: ['geo new york', 'generative engine optimization nyc', 'ai seo new york', 'chatgpt optimization nyc'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-new-york',
  },
  openGraph: {
    title: 'GEO Services in New York, NY | AI Search Optimization',
    description: 'Get your NYC business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for all five boroughs.',
    url: 'https://www.webvello.com/services/geo-new-york',
    type: 'website',
  }
}

const nycIndustries = [
  { name: "Financial Services", description: "Banks, investment firms, fintech companies" },
  { name: "Legal Services", description: "Law firms from boutique to BigLaw" },
  { name: "Real Estate", description: "Agents, brokerages, property managers" },
  { name: "Healthcare", description: "Medical practices, specialists, clinics" },
  { name: "Professional Services", description: "Consulting, accounting, business services" },
  { name: "Restaurants & Hospitality", description: "Restaurants, hotels, and venues" },
  { name: "Tech & Startups", description: "Silicon Alley companies and tech firms" },
  { name: "Retail & E-commerce", description: "Stores and D2C brands" }
]

const nycAreas = [
  "Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island", "Midtown", "SoHo", "Tribeca",
  "Chelsea", "Upper East Side", "Upper West Side", "Financial District", "Williamsburg", "DUMBO", "Long Island City", "Harlem"
]

const processSteps = [
  { step: "1", title: "NYC Market Audit", description: "We analyze how AI systems currently respond to New York City queries in your industry. What's being cited? Who dominates Manhattan vs. Brooklyn searches? Where are the opportunities?" },
  { step: "2", title: "Entity & Schema Setup", description: "We implement structured data that tells AI systems exactly what you do and where you serve in NYC. LocalBusiness schema, Service schema, and borough-specific markup." },
  { step: "3", title: "Content Optimization", description: "We optimize existing content and create NYC-specific pages that answer questions local customers ask AI engines." },
  { step: "4", title: "Authority Building", description: "We build topical authority through strategic content clusters, establishing your business as the definitive NYC source in your industry." },
  { step: "5", title: "Monitor & Iterate", description: "We track AI citations, measure visibility improvements across ChatGPT, Perplexity, and Google SGE, and refine strategy based on NYC market data." }
]

const faqs = [
  { question: "How does GEO help my New York City business?", answer: "When someone asks ChatGPT 'best Italian restaurant in SoHo' or asks Perplexity 'find a CPA near me in Manhattan,' AI systems need to mention your business. GEO optimizes your online presence so AI recognizes and recommends you. With NYC's competitive market and tech-savvy population, AI search visibility is becoming critical." },
  { question: "How does Webvello deliver GEO services remotely to NYC businesses?", answer: "All our GEO work is done digitally—no local office needed. We optimize your website, implement schema markup, create AI-friendly content for NYC neighborhoods, and monitor your visibility across AI platforms. You'll receive monthly reports showing exactly when and how AI systems cite your business. We've successfully served NYC businesses from financial services to restaurants entirely remotely." },
  { question: "Do you work with businesses in all five boroughs?", answer: "Yes. We serve businesses throughout NYC—Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. We also work with businesses in the greater metro area including Long Island, Westchester, and New Jersey. We create location-specific strategies for your service areas." },
  { question: "What makes NYC different for GEO?", answer: "New York is the most competitive business market in the country with the highest density of sophisticated consumers. NYC residents adopt AI tools quickly and expect to find quality local businesses through these platforms. The neighborhood-specific nature of NYC search requires hyper-local GEO strategies." },
  { question: "Do you work with NYC financial services and professional firms?", answer: "Absolutely. Wall Street, Midtown law firms, consulting companies—when decision-makers ask AI for recommendations, we ensure you're cited. We understand the professional services landscape and optimize for the specialized queries buyers use." },
  { question: "What industries benefit most from NYC GEO?", answer: "Financial services, legal firms, real estate, healthcare, professional services, and restaurants see the biggest impact. NYC's diverse economy means AI visibility drives high-value leads across nearly every industry." },
  { question: "How long until I see results in the NYC market?", answer: "For niche queries and specific neighborhoods, we typically see improvements in 4-8 weeks. Broader competitive terms take 3-6 months due to NYC's high competition. We prioritize quick wins in your specific borough or neighborhood while building toward larger visibility goals." },
  { question: "How do you measure GEO success in NYC?", answer: "We track when AI systems mention your business, monitor specific NYC-related queries, measure citation frequency across ChatGPT, Perplexity, and Google SGE, and analyze context of mentions. You'll see concrete data month over month." }
]

export default function GEONewYorkPage() {
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-new-york',
    title: 'NYC Hyperlocal GEO: Borough-Specific Authority',
    description: 'Dominate NYC hyperlocal AI search across all five boroughs. Manhattan, Brooklyn positioning reflects neighborhood sophistication.',
    geo: { city: 'New York', cityState: 'New York, NY' },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO New York', url: 'https://www.webvello.com/services/geo-new-york' }
    ]
  })
  
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-white/80 text-sm">GEO Services in New York, NY</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Generative Engine Optimization in{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                New York, NY
              </span>
            </h1>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                Webvello provides remote GEO services to New York City businesses, optimizing your online presence so AI engines like ChatGPT, Perplexity, and Google SGE cite you when customers ask for recommendations. As part of our services <Link href="/services/new-york" className="text-blue-400 hover:underline">throughout New York state</Link>, we help financial services, law firms, real estate agencies, and professional practices dominate AI search without requiring a local office visit.
              </p>
            </div>
            
            <Button className="h-14 px-8 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-xl" asChild>
              <Link href="/contact">Get Free NYC GEO Audit<ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why GEO Matters in New York</h2>
              <p className="text-lg text-slate-600 mb-4">
                New York City is the largest metro in the US with 20 million people and a $1.9 trillion economy. Manhattan alone has 1.6M residents and attracts 65 million annual tourists. As the world's business capital, NYC residents and businesses adopt AI tools first—64% of New Yorkers prefer asking ChatGPT over Google for recommendations.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                NYC's market is hyperlocal: SoHo restaurants compete with Tribeca restaurants. Upper East Side financial advisors compete with downtown firms. When someone asks ChatGPT "best Italian restaurant in SoHo" or Perplexity "find a CPA in Midtown Manhattan," only the cited businesses win. Traditional SEO puts you in lists—GEO gets you into the AI answer itself, the single recommendation that matters most.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                NYC's competitive advantage: neighborhoods have specific personas. A Williamsburg startup client differs from a Financial District trader. A Brooklyn HVAC company differs from a Manhattan luxury hotel. GEO allows hyper-targeted positioning for each market segment.
              </p>
              <p className="text-lg text-slate-600">
                Voice search, ChatGPT, Perplexity, and Google's AI Overviews are now how NYC's sophisticated consumers find businesses. In the most competitive market in America, early GEO adoption creates a 6-month competitive moat before consolidation begins.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl"><p className="text-3xl font-bold text-blue-500 mb-1">8.3M</p><p className="text-sm text-slate-600">NYC residents</p></div>
              <div className="text-center p-6 bg-slate-50 rounded-xl"><p className="text-3xl font-bold text-blue-500 mb-1">20M</p><p className="text-sm text-slate-600">Metro population</p></div>
              <div className="text-center p-6 bg-slate-50 rounded-xl"><p className="text-3xl font-bold text-blue-500 mb-1">#1</p><p className="text-sm text-slate-600">US metro area</p></div>
              <div className="text-center p-6 bg-slate-50 rounded-xl"><p className="text-3xl font-bold text-blue-500 mb-1">$1.9T</p><p className="text-sm text-slate-600">Metro GDP</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">How Webvello Delivers GEO Services Remotely</h2>
            <p className="text-xl text-slate-600">All our GEO work is 100% digital. We optimize your website, implement structured data, create AI-friendly content, and monitor results—all without needing a local NYC office.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Globe className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Remote Service</h3>
              <p className="text-slate-600">Everything happens online. Meetings via Zoom, updates via email, results via dashboard.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Target className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">NYC Market Expertise</h3>
              <p className="text-slate-600">We research NYC-specific queries and optimize for how New Yorkers actually search. No local office needed.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <BarChart className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">Monthly reports show exactly when AI systems cite your business for NYC queries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our New York GEO Process</h2>
            <p className="text-xl text-slate-600">A systematic approach to dominating AI search in NYC.</p>
          </div>
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">{step.step}</div>
                <div><h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3><p className="text-slate-600 leading-relaxed">{step.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">NYC Industries We Specialize In</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nycIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <Building2 className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">NYC Areas We Serve</h2></div>
          <div className="flex flex-wrap gap-3">
            {nycAreas.map((area) => (<span key={area} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">{area}</span>))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">New York GEO FAQs</h2></div>
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Cited by AI in NYC?</h2>
          <p className="text-xl text-white/70 mb-10">No pressure. Just a free audit showing exactly how visible your NYC business is when people ask AI for recommendations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-14 px-10 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold text-lg rounded-xl" asChild>
              <Link href="/contact">Get Your Free NYC GEO Audit<ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button className="h-14 px-10 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-lg rounded-xl" asChild>
              <Link href="/services/geo-services">Learn More About GEO</Link>
            </Button>
          </div>
          <div className="mt-16 pt-16 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Related Services:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/services/generative-engine-optimization" className="text-white/80 hover:text-white text-sm underline">Generative Engine Optimization</Link>
              <span className="text-white/40">•</span>
              <Link href="/services/local-seo" className="text-white/80 hover:text-white text-sm underline">NYC Local Authority Building</Link>
              <span className="text-white/40">•</span>
              <Link href="/" className="text-white/80 hover:text-white text-sm underline">Home</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
