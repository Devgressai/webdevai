import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target, Globe, BarChart, Anchor, Palmtree } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'GEO Services in Miami, Florida | AI Search Optimization',
  description: 'Get your Miami business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for South Florida businesses.',
  keywords: ['geo miami', 'generative engine optimization miami', 'ai seo miami', 'chatgpt optimization florida', 'perplexity optimization miami'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-miami',
  },
  openGraph: {
    title: 'GEO Services in Miami, Florida | AI Search Optimization',
    description: 'Get your Miami business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for South Florida businesses.',
    url: 'https://www.webvello.com/services/geo-miami',
    type: 'website',
  }
}

const miamiIndustries = [
  { name: "Real Estate", description: "One of the hottest real estate markets in the US" },
  { name: "Finance & Banking", description: "Growing financial hub with international presence" },
  { name: "Tourism & Hospitality", description: "Hotels, restaurants, and tourism businesses" },
  { name: "Technology", description: "Emerging tech hub with startup ecosystem" },
  { name: "Healthcare", description: "Major hospital systems and medical practices" },
  { name: "Maritime & Trade", description: "Port of Miami and international trade" },
  { name: "Legal Services", description: "Law firms specializing in immigration, real estate, and more" },
  { name: "Cryptocurrency", description: "Growing crypto and fintech scene" }
]

const miamiAreas = [
  "Downtown Miami", "Brickell", "Miami Beach", "South Beach",
  "Wynwood", "Coral Gables", "Coconut Grove", "Design District",
  "Fort Lauderdale", "Hollywood", "Aventura", "Doral",
  "Key Biscayne", "Kendall", "Miami Lakes", "Sunny Isles"
]

const processSteps = [
  {
    step: "1",
    title: "Miami Market Audit",
    description: "We analyze how AI systems currently respond to Miami and South Florida queries in your industry. What's being cited? Who's dominating? Where are the opportunities?"
  },
  {
    step: "2",
    title: "Entity & Schema Setup",
    description: "We implement structured data that tells AI systems exactly what you do and where you serve in Miami. This includes LocalBusiness schema, multilingual support, and Service schema optimized for South Florida."
  },
  {
    step: "3",
    title: "Content Optimization",
    description: "We optimize your existing content and create new Miami-specific pages that answer the questions local customers ask AI engines—in both English and Spanish where relevant."
  },
  {
    step: "4",
    title: "Authority Building",
    description: "We build topical authority through strategic content clusters, establishing your business as the definitive Miami source in your industry across all major neighborhoods."
  },
  {
    step: "5",
    title: "Monitor & Iterate",
    description: "We track AI citations, measure visibility improvements across ChatGPT, Perplexity, and Google SGE, and continuously refine strategy based on Miami market data."
  }
]

const faqs = [
  {
    question: "How does GEO help my Miami business?",
    answer: "When someone asks ChatGPT 'best real estate agent in Miami' or asks Perplexity 'find an immigration lawyer in Brickell,' your business should be mentioned. GEO optimizes your online presence so AI systems recognize and recommend you in the South Florida market. AI search is how modern customers find businesses—you need to be visible there."
  },
  {
    question: "How does Webvello deliver GEO services remotely to Miami businesses?",
    answer: "All our GEO work is done digitally—no local office needed. We optimize your website, implement schema markup, create AI-friendly content for Miami neighborhoods, and monitor your visibility across AI platforms. You'll receive monthly reports showing exactly when and how AI systems cite your business. We've successfully served Miami real estate agencies, law firms, and restaurants entirely remotely."
  },
  {
    question: "Do you serve all of South Florida?",
    answer: "Yes. We serve businesses throughout South Florida—Miami-Dade, Broward, and Palm Beach counties. We create location-specific strategies for Miami, Fort Lauderdale, West Palm Beach, and surrounding areas. Each area gets its own optimization targeting."
  },
  {
    question: "What makes Miami different for GEO?",
    answer: "Miami is a major international gateway with diverse, multilingual markets. The city's rapid growth in tech, finance, and real estate means businesses need to stand out across multiple competitive sectors. Many queries come in both English and Spanish. We optimize for both languages and understand Miami's unique cultural context."
  },
  {
    question: "Do you handle Spanish-language GEO for Miami businesses?",
    answer: "Yes. Many Miami searches happen in Spanish. We create bilingual content and optimize for Spanish-language AI queries where relevant to your business. This is especially important for legal services, real estate, healthcare, and local services."
  },
  {
    question: "What industries benefit most from Miami GEO?",
    answer: "Real estate, legal services, financial services, hospitality, healthcare, and maritime businesses see the biggest impact. Miami's diverse economy and international clientele make AI visibility crucial across nearly every industry."
  },
  {
    question: "How long until I see AI visibility improvements?",
    answer: "For niche queries and specific neighborhoods, we typically see improvements in 4-8 weeks. Broader competitive terms take 3-6 months. Miami is highly competitive, so we prioritize quick wins in your specific service area while building toward larger visibility goals."
  },
  {
    question: "How do you measure GEO success in Miami?",
    answer: "We track when AI systems mention your business, monitor specific Miami-related queries in English and Spanish, measure citation frequency across ChatGPT, Perplexity, and Google SGE, and analyze the context and accuracy of mentions. You'll see concrete data monthly."
  }
]

export default function GEOMiamiPage() {
  
  // Generate clean schema for GEO page (NO physical address, NO fake ratings)
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-miami',
    title: 'GEO Services in Miami, Florida | AI Search Optimization',
    description: 'Get your Miami business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for South Florida businesses.',
    geo: {
      city: 'Miami',
      cityState: 'Miami, FL'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Miami', url: 'https://www.webvello.com/services/geo-miami' }
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
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-white/80 text-sm">GEO Services in Miami, Florida</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Generative Engine Optimization in{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Miami, Florida
              </span>
            </h1>
            
            {/* Direct Answer Summary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                Webvello provides remote GEO services to Miami and South Florida businesses, optimizing your online presence so AI engines like ChatGPT, Perplexity, and Google SGE cite you when customers ask for recommendations. We help real estate firms, law practices, hospitality businesses, and tech companies dominate AI search without requiring a local office visit.
              </p>
            </div>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Miami GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Miami Needs GEO */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why GEO Matters in Miami
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Miami is a global gateway city with over 6 million people in the metro area. It's not just a tourist destination—it's become a major hub for tech, finance, crypto, and international business. When someone asks AI "best real estate attorney in Brickell" or "top yacht broker in Miami Beach," the businesses cited win the customers.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Traditional SEO puts you in Google's list of links. GEO gets you into the AI answer itself—the single recommendation that ChatGPT or Perplexity provides. In Miami's hyper-competitive markets, being that one cited business is the difference between thriving and being invisible.
              </p>
              <p className="text-lg text-slate-600">
                Voice search, ChatGPT, Perplexity, and Google's AI Overviews now dominate how Miami's diverse, international population finds businesses. Many searches happen in Spanish. If you're not optimized for AI, you're missing the majority of modern searches.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-cyan-500 mb-1">6.2M</p>
                <p className="text-sm text-slate-600">Metro population</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-cyan-500 mb-1">#7</p>
                <p className="text-sm text-slate-600">US metro area</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-cyan-500 mb-1">$380B</p>
                <p className="text-sm text-slate-600">Metro GDP</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-cyan-500 mb-1">#1</p>
                <p className="text-sm text-slate-600">LatAm gateway</p>
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
              All our GEO work is 100% digital. We optimize your website, implement structured data, create AI-friendly content for Miami neighborhoods, and monitor results—all without needing a local office.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Globe className="w-10 h-10 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Remote Service</h3>
              <p className="text-slate-600">
                Everything happens online. We access your website, implement changes, and track results through digital tools. Meetings via Zoom, updates via email, results via dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Target className="w-10 h-10 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Miami Market Expertise</h3>
              <p className="text-slate-600">
                We research Miami-specific queries in English and Spanish, understand South Florida neighborhoods, and optimize for how Miami residents actually search. No local office needed.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <BarChart className="w-10 h-10 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">
                Monthly reports show exactly when AI systems cite your business for Miami and South Florida queries. See your progress with real data and screenshots.
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
              Our Miami GEO Process
            </h2>
            <p className="text-xl text-slate-600">
              A systematic approach to dominating AI search in Miami and South Florida.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
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
              Miami Industries We Specialize In
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {miamiIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <Building2 className="w-8 h-8 text-cyan-500 mb-4" />
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
              Miami & South Florida Areas We Serve
            </h2>
            <p className="text-xl text-slate-600">
              From Brickell to Fort Lauderdale, we optimize for all South Florida neighborhoods and cities.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {miamiAreas.map((area) => (
              <span
                key={area}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 text-slate-600 text-sm">
            Plus all of South Florida: West Palm Beach, Boca Raton, Pompano Beach, and beyond.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Miami GEO FAQs
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
            Ready to Get Cited by AI in Miami?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            No pressure. Just a free audit showing exactly how visible your Miami business is when people ask AI for recommendations. See where you stand and what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Your Free Miami GEO Audit
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
