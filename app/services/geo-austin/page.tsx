import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Star, BarChart, Brain, Music, Zap, Target, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'GEO Services in Austin, Texas | AI Search Optimization',
  description: 'Get your Austin business cited by ChatGPT, Perplexity & Google AI. Remote GEO services optimizing for voice search and AI engines.',
  keywords: ['geo austin', 'ai seo austin', 'chatgpt optimization austin', 'generative engine optimization austin'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-austin',
  },
  openGraph: {
    title: 'GEO Services in Austin, Texas | AI Search Optimization',
    description: 'Get your Austin business cited by ChatGPT, Perplexity & Google AI. Remote GEO services optimizing for voice search and AI engines.',
    url: 'https://www.webvello.com/services/geo-austin',
    type: 'website',
  }
}

const industries = [
  { icon: Building2, name: "Tech & Startups", description: "Austin's booming tech ecosystem" },
  { icon: TrendingUp, name: "SaaS & Software", description: "Enterprise and consumer software" },
  { icon: Music, name: "Music & Entertainment", description: "Live music capital of the world" },
  { icon: Users, name: "Food & Restaurant", description: "Vibrant food scene and hospitality" },
  { icon: Star, name: "Real Estate", description: "One of the fastest growing markets" },
  { icon: Brain, name: "Professional Services", description: "Law, accounting, consulting" }
]

const neighborhoods = [
  "Downtown Austin",
  "South Congress (SoCo)",
  "East Austin",
  "The Domain",
  "Mueller",
  "Hyde Park",
  "Westlake",
  "Round Rock",
  "Cedar Park",
  "Pflugerville"
]

const processSteps = [
  {
    step: "1",
    title: "Austin Market Audit",
    description: "We analyze how AI systems currently respond to Austin-specific queries in your industry. What are they saying? Who's being mentioned? Where are the gaps?"
  },
  {
    step: "2",
    title: "Entity & Schema Setup",
    description: "We implement structured data that tells AI systems exactly what you do and where you serve in Austin. This includes LocalBusiness schema, Service schema, and FAQ markup."
  },
  {
    step: "3",
    title: "Content Optimization",
    description: "We optimize your existing content and create new location-aware pages that answer the questions Austin customers ask AI engines."
  },
  {
    step: "4",
    title: "Authority Building",
    description: "We build topical authority through strategic content clusters, establishing your business as the definitive Austin source in your industry."
  },
  {
    step: "5",
    title: "Monitor & Iterate",
    description: "We track AI citations, measure visibility improvements, and continuously refine the strategy based on real Austin market data."
  }
]

const faqs = [
  {
    question: "Why does my Austin business need GEO?",
    answer: "Austin is one of the most tech-savvy cities in America. Your potential customers are early adopters of AI search tools. When someone asks ChatGPT 'best tech recruiting firm in Austin' or 'top restaurants on South Congress,' you want to be in that answer. GEO ensures AI engines cite your business when Austin residents and visitors ask for recommendations."
  },
  {
    question: "How does Webvello deliver GEO services remotely to Austin businesses?",
    answer: "All our GEO work is done digitally—no local office needed. We optimize your website, implement schema markup, create AI-friendly content, and monitor your visibility across AI platforms. Results are tracked through dashboards and monthly reports. We've successfully served Austin businesses from tech startups to established restaurants, all remotely."
  },
  {
    question: "How is Austin GEO different from general GEO?",
    answer: "Austin GEO incorporates local context—neighborhoods like SoCo and The Domain, the tech and startup culture, the music scene, and the unique Austin identity. We optimize for how Austin residents actually ask AI for recommendations, using location-specific terminology and cultural references."
  },
  {
    question: "What industries benefit most from Austin GEO?",
    answer: "Tech companies, SaaS businesses, professional services, restaurants, and real estate see the biggest impact. Austin's tech-savvy population uses AI search heavily for both business and personal decisions. Any business serving local Austin customers can benefit."
  },
  {
    question: "Do you work with Austin tech startups?",
    answer: "Absolutely. We understand the Austin tech ecosystem and how startup founders, investors, and employees use AI to research vendors, partners, and service providers. We've worked with SaaS companies, dev shops, and B2B services throughout Austin."
  },
  {
    question: "How do you handle Austin's rapid growth and changing market?",
    answer: "Austin is one of the fastest-growing cities in the US. We help new businesses establish AI visibility quickly and help established businesses maintain dominance as competition increases. Our strategy adapts to new neighborhoods, emerging industries, and evolving search patterns."
  },
  {
    question: "What's the timeline for Austin GEO results?",
    answer: "Initial visibility improvements typically appear within 4-8 weeks for niche queries and specific neighborhoods. For competitive Austin markets like tech services or real estate, full optimization may take 3-6 months. We prioritize quick wins while building long-term authority."
  },
  {
    question: "How do you measure GEO success in Austin?",
    answer: "We track when AI systems mention your business, monitor specific Austin-related queries, measure citation frequency across ChatGPT, Perplexity, and Google SGE, and analyze the context of mentions. You'll see concrete data on your AI visibility month over month."
  }
]

export default function GEOAustinPage() {
  // Generate clean schema for GEO page (NO physical address, NO fake ratings)
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-austin',
    title: 'GEO Services in Austin, Texas | AI Search Optimization',
    description: 'Get your Austin business cited by ChatGPT, Perplexity & Google AI. Remote GEO services optimizing for voice search and AI engines.',
    geo: {
      city: 'Austin',
      cityState: 'Austin, TX'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Austin', url: 'https://www.webvello.com/services/geo-austin' }
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
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO Services in Austin, Texas</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Generative Engine Optimization in{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Austin, Texas
              </span>
            </h1>
            
            {/* Direct Answer Summary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                Webvello provides remote GEO services to Austin businesses, optimizing your online presence so AI engines like ChatGPT, Perplexity, and Google SGE cite you when Austin customers ask for recommendations. We help tech startups, restaurants, real estate firms, and professional services dominate AI search without requiring a local office visit.
              </p>
            </div>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Austin GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Austin Needs GEO */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why GEO Matters in Austin
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Austin is America's tech capital with 2.3 million residents who are early adopters of AI tools. When someone asks ChatGPT "best web developer in Austin" or tells Perplexity "find a great taco spot on South Congress," AI engines pull from optimized sources.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Traditional SEO gets you into Google's blue links. GEO gets you into the AI answer itself—the single recommendation that AI provides. In Austin's competitive tech, food, and service markets, being that one cited business means everything.
              </p>
              <p className="text-lg text-slate-600">
                Voice search, ChatGPT, Perplexity, and Google's AI Overviews now dominate how Austin's tech-savvy population finds businesses. If you're not optimized for AI, you're invisible to the majority of searches.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-rose-500 mb-1">2.3M+</p>
                <p className="text-sm text-slate-600">Austin metro population</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-rose-500 mb-1">#1</p>
                <p className="text-sm text-slate-600">US city for tech job growth</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-rose-500 mb-1">5,500+</p>
                <p className="text-sm text-slate-600">Tech startups</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-rose-500 mb-1">$30B+</p>
                <p className="text-sm text-slate-600">VC investment (2024)</p>
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
              All our GEO work is 100% digital. We optimize your website, implement structured data, create AI-friendly content, and monitor results—all without needing a local Austin office.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Globe className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Remote Service</h3>
              <p className="text-slate-600">
                Everything happens online. We access your website, implement changes, and track results through digital tools. Meetings via Zoom, updates via email, results via dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Target className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Austin Market Expertise</h3>
              <p className="text-slate-600">
                We research Austin-specific queries, understand local neighborhoods, and optimize for how Austin residents actually search. No local office needed for this research.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <BarChart className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">
                Monthly reports show exactly when AI systems cite your business for Austin queries. See your progress with real data and screenshots.
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
              Our Austin GEO Process
            </h2>
            <p className="text-xl text-slate-600">
              A systematic approach to dominating AI search in Austin.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Austin Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help businesses across Austin's key industries get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <industry.icon className="w-10 h-10 text-rose-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Austin Areas We Cover
            </h2>
            <p className="text-xl text-slate-600">
              From Downtown to The Domain, we optimize for all Austin neighborhoods and suburbs.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {neighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Austin GEO FAQs
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
            Ready to Get Cited by AI in Austin?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            No pressure. Just a free audit showing exactly how visible your Austin business is when people ask AI for recommendations. See where you stand and what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Your Free Austin GEO Audit
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

