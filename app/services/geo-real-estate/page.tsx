import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Home, Building2, Key, MapPin, TrendingUp, DollarSign, Users, Star } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO for Real Estate | AI Search Optimization for Agents & Brokers | Web Vello',
  description: 'Get your real estate business found in ChatGPT, Perplexity, and Google SGE. GEO optimization for agents, brokers, and property companies.',
  keywords: ['geo real estate', 'ai seo realtors', 'real estate chatgpt optimization', 'realtor geo optimization', 'real estate ai search'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-real-estate',
  },
  openGraph: {
    title: 'GEO for Real Estate | AI Search for Agents | Web Vello',
    description: 'Get your real estate business found in AI search results.',
    url: 'https://www.webvello.com/services/geo-real-estate',
    type: 'website',
  }
}

const realEstateTypes = [
  { icon: Home, name: "Residential Agents", description: "Home buying and selling agents" },
  { icon: Building2, name: "Commercial Brokers", description: "Office, retail, and industrial properties" },
  { icon: Key, name: "Property Management", description: "Rental and property management companies" },
  { icon: MapPin, name: "Luxury Specialists", description: "High-end and luxury property agents" },
  { icon: TrendingUp, name: "Investment Brokers", description: "Investment property specialists" },
  { icon: DollarSign, name: "Mortgage Brokers", description: "Mortgage and lending professionals" },
  { icon: Users, name: "Real Estate Teams", description: "Brokerages and real estate teams" },
  { icon: Star, name: "New Construction", description: "Builders and new development sales" }
]

const whyGeoMatters = [
  {
    query: "\"Best realtor in [city]\"",
    impact: "Home buyers and sellers ask AI for agent recommendations in their area"
  },
  {
    query: "\"What neighborhoods in [city] are best for families?\"",
    impact: "AI recommends agents who demonstrate expertise in specific neighborhoods"
  },
  {
    query: "\"Find a commercial real estate broker in [city]\"",
    impact: "Business owners ask AI for commercial property specialists"
  },
  {
    query: "\"Best time to sell a house in [city]\"",
    impact: "Market-timing queries where AI recommends knowledgeable local agents"
  }
]

const services = [
  {
    title: "Agent Entity Optimization",
    description: "AI systems need to understand you as a distinct real estate professional with clear specialties, credentials, and market expertise.",
    features: ["Realtor schema markup", "License verification", "Specialty positioning", "Market area definition"]
  },
  {
    title: "Market Expertise Content",
    description: "Establish yourself as the local market expert through content that AI recognizes as authoritative.",
    features: ["Neighborhood guides", "Market reports", "Local insights", "Area comparisons"]
  },
  {
    title: "Transaction & Review Integration",
    description: "AI systems weight transaction history and client reviews heavily for real estate recommendations.",
    features: ["Transaction highlights", "Review aggregation", "Testimonial optimization", "Success metrics"]
  },
  {
    title: "Local Market Optimization",
    description: "Dominate AI recommendations for your specific neighborhoods and market segments.",
    features: ["Hyperlocal targeting", "Neighborhood specialization", "Property type focus", "Price range positioning"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for real estate professionals?",
    answer: "When someone asks ChatGPT 'who's the best realtor in Scottsdale' or asks Perplexity 'find a commercial broker in downtown Austin,' AI systems recommend specific agents. If you're not optimized, you're invisible to these high-intent leads."
  },
  {
    question: "How do you differentiate agents in competitive markets?",
    answer: "We focus on establishing clear specializations—specific neighborhoods, property types, price ranges, or client types. AI systems are better at recommending specialists than generalists. We find your unique positioning and optimize for it."
  },
  {
    question: "Can GEO help with commercial real estate?",
    answer: "Absolutely. Commercial real estate sees heavy AI usage from business owners and investors researching brokers. GEO helps you appear for commercial-specific queries like 'industrial property broker in [city]' or 'retail lease specialist.'"
  },
  {
    question: "How do you incorporate my transaction history?",
    answer: "We implement schema markup that highlights your transaction volume, specialties, and success metrics. We also create content around your track record that AI can use to validate your expertise."
  },
  {
    question: "What about team vs. individual agent optimization?",
    answer: "For teams, we optimize both the team entity and individual agent profiles. This captures queries for both the team brand and individual agents, maximizing your coverage."
  },
  {
    question: "How do you measure real estate GEO success?",
    answer: "We track AI mentions for target queries, monitor your visibility vs. competitors, and measure downstream metrics: website inquiries, lead quality, and clients who mention finding you through AI recommendations."
  }
]

export default function GEORealEstatePage() {
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
              <Home className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for Real Estate</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Recommended
              </span>{' '}
              by AI to Home Buyers
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When someone asks ChatGPT "who's the best realtor in my area" or asks Perplexity 
              "find a real estate agent who specializes in my neighborhood"—you should be the answer.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Real Estate GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why GEO Matters */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Real Estate Needs GEO
            </h2>
            <p className="text-xl text-slate-600">
              Home buyers and sellers are asking AI for agent recommendations. AI mentions 
              carry high trust for major decisions like real estate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyGeoMatters.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
                <p className="text-lg font-bold text-slate-900 mb-3">{item.query}</p>
                <p className="text-slate-600">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Types */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Real Estate Professionals We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of real estate professionals get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {realEstateTypes.map((type) => (
              <div key={type.name} className="bg-white rounded-xl p-6 text-center border border-slate-200">
                <type.icon className="w-10 h-10 text-rose-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{type.name}</h3>
                <p className="text-sm text-slate-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Real Estate GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to get recommended by AI to home buyers and sellers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              FAQs for Real Estate GEO
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
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
            Ready to get more leads from AI?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your real estate business. See exactly how visible you are 
            when home buyers ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Real Estate GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

