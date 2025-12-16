import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target, Globe, BarChart, Sun } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'GEO Services in Phoenix, Arizona | AI Search Optimization',
  description: 'Get your Phoenix business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for the Valley of the Sun.',
  keywords: ['geo phoenix', 'generative engine optimization phoenix', 'ai seo phoenix', 'chatgpt optimization arizona', 'perplexity optimization phoenix'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-phoenix',
  },
  openGraph: {
    title: 'GEO Services in Phoenix, Arizona | AI Search Optimization',
    description: 'Get your Phoenix business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for the Valley of the Sun.',
    url: 'https://www.webvello.com/services/geo-phoenix',
    type: 'website',
  }
}

const phoenixIndustries = [
  { name: "Technology", description: "Growing tech hub with semiconductor and software companies" },
  { name: "Healthcare", description: "Major healthcare systems and medical practices" },
  { name: "Real Estate", description: "One of the hottest real estate markets in the US" },
  { name: "Tourism & Hospitality", description: "Resorts, hotels, and tourism businesses" },
  { name: "Financial Services", description: "Regional banking and financial services" },
  { name: "Construction", description: "Booming construction and development industry" },
  { name: "Aerospace & Defense", description: "Major aerospace and defense contractors" },
  { name: "Home Services", description: "HVAC, pool service, and home maintenance" }
]

const phoenixAreas = [
  "Downtown Phoenix", "Scottsdale", "Mesa", "Tempe",
  "Chandler", "Gilbert", "Glendale", "Peoria",
  "Paradise Valley", "Arcadia", "Ahwatukee", "Cave Creek",
  "Fountain Hills", "Queen Creek", "Surprise", "Goodyear"
]

const processSteps = [
  {
    step: "1",
    title: "Phoenix Market Audit",
    description: "We analyze how AI systems currently respond to Phoenix and Valley queries in your industry. What's being cited? Who dominates Scottsdale vs. Mesa searches? Where are the opportunities?"
  },
  {
    step: "2",
    title: "Entity & Schema Setup",
    description: "We implement structured data that tells AI systems exactly what you do and where you serve in the Valley. This includes LocalBusiness schema, Service schema, and area-specific markup."
  },
  {
    step: "3",
    title: "Content Optimization",
    description: "We optimize your existing content and create new Phoenix-specific pages that answer the questions Valley residents ask AI engines about your services."
  },
  {
    step: "4",
    title: "Authority Building",
    description: "We build topical authority through strategic content clusters, establishing your business as the definitive Phoenix source in your industry across all Valley cities."
  },
  {
    step: "5",
    title: "Monitor & Iterate",
    description: "We track AI citations, measure visibility improvements across ChatGPT, Perplexity, and Google SGE, and continuously refine strategy based on Phoenix market data."
  }
]

const faqs = [
  {
    question: "How does Phoenix's buying speed affect GEO timing?",
    answer: "Phoenix buyers act quickly—window from awareness to decision is narrow. GEO that establishes credibility before purchase moments begin captures high-conversion traffic. Early visibility becomes critical when buyer research window compresses into days. We prioritize getting you cited for high-intent queries first."
  },
  {
    question: "Can GEO improve lead quality and conversion rates?",
    answer: "Yes. Prospects finding you through AI citations are pre-qualified—they've already received credibility signals. This produces higher conversion rates than cold outreach. Citation context determines qualification level—we optimize for discovery moments preceding purchase intent."
  },
  {
    question: "How do you measure ROI directly from GEO in Phoenix?",
    answer: "We track citation context, keywords appearing alongside your mentions, and prospect source quality. High-intent queries (\"find\", \"need\", \"buy\") produce faster conversions than exploratory queries. Monthly reports segment leads by intent type, showing ROI improvement from focused optimization."
  },
  {
    question: "What Phoenix industries see fastest ROI from GEO?",
    answer: "Home services (HVAC, pool, plumbing) convert fastest because decision windows are short and budget-driven. Real estate and healthcare also show strong near-term ROI. Service frequency and price points determine conversion speed—we prioritize highest-ROI query segments."
  },
  {
    question: "Does GEO work for seasonal Phoenix businesses?",
    answer: "Absolutely. Seasonal demand patterns create concentrated conversion windows. Summer HVAC demand, winter tourism peaks, spring construction booms—we align optimization with seasonal demand cycles, maximizing visibility during high-conversion windows."
  },
  {
    question: "Can GEO support sales team efficiency?",
    answer: "Yes. When prospects call already aware you're recommended by AI, sales conversations skip credibility-building phases. Shorter sales cycles and higher close rates directly increase efficiency. We track how AI visibility compresses sales timelines."
  },
  {
    question: "How do you optimize for Scottsdale vs. Phoenix economics?",
    answer: "Scottsdale buyers have different price sensitivity and expectations than broader Phoenix market. We segment positioning by economic context—Scottsdale premium positioning emphasizes luxury and exclusivity, Phoenix-wide positioning emphasizes value and accessibility."
  },
  {
    question: "What competitive advantage does ROI-focused GEO create?",
    answer: "Most competitors optimize for volume instead of conversion efficiency. Phoenix's tight buyer windows reward conversion-optimized positioning. Early citations in high-intent queries generate disproportionate revenue compared to general visibility. Conversion focus creates economic advantage competitors struggle to match."
  }
]

export default function GEOPhoenixPage() {
  
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-phoenix',
    title: 'GEO Services in Phoenix, Arizona | AI Search Optimization',
    description: 'Get your Phoenix business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for the Valley of the Sun.',
    geo: {
      city: 'Phoenix',
      cityState: 'Phoenix, AZ'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Phoenix', url: 'https://www.webvello.com/services/geo-phoenix' }
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
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-white/80 text-sm">GEO Services in Phoenix, Arizona</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Generative Engine Optimization in{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Phoenix, Arizona
              </span>
            </h1>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                Phoenix buyers convert faster than most markets—they've done their research before calling. GEO ensures you're already trusted by the time prospects ask for recommendations. ROI-focused positioning emphasizes cost-efficiency, reliability, and proven results. Early visibility translates directly to increased lead volume and higher conversion rates.
              </p>
            </div>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Phoenix GEO Audit
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
                Why GEO Matters in Phoenix
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Phoenix is the fifth-largest city in the US with 1.7 million residents and a metro area of 5 million. As one of America's fastest-growing cities, Phoenix attracts tech-savvy transplants who rely heavily on AI search for local recommendations.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                When someone asks AI "best HVAC company in Scottsdale" or "find a pool service near me in Chandler," the businesses that appear in AI answers win the customers. Traditional SEO puts you in lists—GEO gets you into the AI answer itself.
              </p>
              <p className="text-lg text-slate-600">
                Voice search, ChatGPT, Perplexity, and Google's AI Overviews are now how Phoenix residents find services. With the Valley's explosive growth, early GEO adoption gives you a massive competitive advantage.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-amber-500 mb-1">1.7M</p>
                <p className="text-sm text-slate-600">Phoenix residents</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-amber-500 mb-1">5M+</p>
                <p className="text-sm text-slate-600">Metro population</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-amber-500 mb-1">#5</p>
                <p className="text-sm text-slate-600">US city by population</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-amber-500 mb-1">1st</p>
                <p className="text-sm text-slate-600">Fastest growing major city</p>
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
              All our GEO work is 100% digital. We optimize your website, implement structured data, create AI-friendly content, and monitor results—all without needing a local Phoenix office.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Globe className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Remote Service</h3>
              <p className="text-slate-600">
                Everything happens online. We access your website, implement changes, and track results through digital tools. Meetings via Zoom, updates via email, results via dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Target className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Phoenix Market Expertise</h3>
              <p className="text-slate-600">
                We research Phoenix-specific queries, understand Scottsdale vs. Mesa vs. Chandler markets, and optimize for how Valley residents search. No local office needed.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <BarChart className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">
                Monthly reports show exactly when AI systems cite your business for Phoenix queries. See your progress with real data and screenshots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Phoenix GEO Process
            </h2>
            <p className="text-xl text-slate-600">
              A systematic approach to dominating AI search in the Valley.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
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
              Phoenix Industries We Specialize In
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phoenixIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <Building2 className="w-8 h-8 text-amber-500 mb-4" />
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
              Phoenix Areas We Serve
            </h2>
            <p className="text-xl text-slate-600">
              From Downtown Phoenix to Scottsdale, we optimize for all Valley cities.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {phoenixAreas.map((area) => (
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
              Phoenix GEO FAQs
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
            Ready to Get Cited by AI in Phoenix?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            No pressure. Just a free audit showing exactly how visible your Phoenix business is when people ask AI for recommendations. See where you stand and what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-10 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Your Free Phoenix GEO Audit
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
