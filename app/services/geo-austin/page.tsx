import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Star, BarChart, Brain, Music } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Services Austin | AI Search Optimization | Web Vello',
  description: 'Get your Austin business found in ChatGPT, Perplexity, and Google SGE. Local GEO services for Austin businesses to dominate AI search.',
  keywords: ['geo austin', 'ai seo austin', 'chatgpt optimization austin', 'generative engine optimization austin'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-austin',
  },
  openGraph: {
    title: 'GEO Services Austin | AI Search Optimization',
    description: 'Get your Austin business found in AI search results.',
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

const faqs = [
  {
    question: "Why does my Austin business need GEO?",
    answer: "Austin is one of the most tech-savvy cities in America. Your potential customers are early adopters of AI search tools. When someone asks ChatGPT 'best tech recruiting firm in Austin' or 'top restaurants on South Congress,' you want to be in that answer."
  },
  {
    question: "How is Austin GEO different from general GEO?",
    answer: "Austin GEO incorporates local context—neighborhoods like SoCo and The Domain, the tech and startup culture, the music scene, and the unique Austin identity. We optimize for how Austin residents actually ask AI for recommendations."
  },
  {
    question: "What industries benefit most from Austin GEO?",
    answer: "Tech companies, SaaS businesses, professional services, restaurants, and real estate see the biggest impact. Austin's tech-savvy population uses AI search heavily for both business and personal decisions."
  },
  {
    question: "Do you work with Austin tech startups?",
    answer: "Absolutely. We understand the Austin tech ecosystem and how startup founders, investors, and employees use AI to research vendors, partners, and service providers."
  },
  {
    question: "How do you handle Austin's rapid growth?",
    answer: "Austin is one of the fastest-growing cities in the US. We help new businesses establish AI visibility quickly and help established businesses maintain dominance as competition increases."
  },
  {
    question: "What's the timeline for Austin GEO results?",
    answer: "Initial visibility improvements typically appear within 4-8 weeks. For competitive Austin markets like tech services or real estate, full optimization may take 3-6 months."
  }
]

export default function GEOAustinPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO Services in Austin</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              GEO Services for{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Austin
              </span>{' '}
              Businesses
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Austin is full of tech-savvy AI adopters. When they ask ChatGPT for recommendations, 
              your business should be the answer.
            </p>
            
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

      {/* Local Stats */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">2.3M+</p>
              <p className="text-slate-600 text-sm">Austin metro population</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">#1</p>
              <p className="text-slate-600 text-sm">US city for tech job growth</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">5,500+</p>
              <p className="text-slate-600 text-sm">Tech startups</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">$30B+</p>
              <p className="text-slate-600 text-sm">VC investment (2024)</p>
            </div>
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
            Ready to dominate Austin AI search?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your Austin business. See exactly how visible you are 
            when Austin's tech-savvy population asks AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Austin GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

