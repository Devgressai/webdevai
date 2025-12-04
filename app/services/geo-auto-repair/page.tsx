import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Car, Wrench, Shield, Clock, AlertTriangle, Settings, Gauge, Cog } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO for Auto Repair Shops | AI Search Optimization | Web Vello',
  description: 'Get your auto repair shop found in ChatGPT, Perplexity, and Google SGE. GEO optimization for mechanics and auto service centers.',
  keywords: ['geo auto repair', 'ai seo mechanics', 'auto shop chatgpt optimization', 'mechanic geo', 'auto repair ai search'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-auto-repair',
  },
  openGraph: {
    title: 'GEO for Auto Repair | AI Search for Mechanics | Web Vello',
    description: 'Get your auto repair shop found in AI search results.',
    url: 'https://www.webvello.com/services/geo-auto-repair',
    type: 'website',
  }
}

const autoServices = [
  { icon: Car, name: "General Repair", description: "Full-service auto repair" },
  { icon: Wrench, name: "Brake Service", description: "Brake repair and replacement" },
  { icon: Gauge, name: "Diagnostics", description: "Computer diagnostics and testing" },
  { icon: Cog, name: "Transmission", description: "Transmission service and repair" },
  { icon: Settings, name: "Engine Repair", description: "Engine diagnostics and repair" },
  { icon: Shield, name: "Inspections", description: "State inspections and safety checks" },
  { icon: AlertTriangle, name: "Emergency", description: "Emergency breakdown service" },
  { icon: Clock, name: "Same-Day", description: "Same-day service available" }
]

const whyGeoMatters = [
  {
    query: "\"Best mechanic near me\"",
    impact: "Car owners ask AI for mechanic recommendations when their car needs service"
  },
  {
    query: "\"Honest auto repair shop in [city]\"",
    impact: "Trust-focused queries where AI recommends reputable shops"
  },
  {
    query: "\"Check engine light on, who should I see?\"",
    impact: "Problem-specific queries where AI recommends qualified shops"
  },
  {
    query: "\"Cheapest brake repair near me\"",
    impact: "Price-conscious queries where AI factors in value and reviews"
  }
]

const services = [
  {
    title: "Auto Shop Entity Optimization",
    description: "AI systems need to understand your auto repair shop as a distinct entity with clear services, certifications, and specialties.",
    features: ["LocalBusiness schema markup", "ASE certification display", "Service menu optimization", "Brand specialization"]
  },
  {
    title: "Service-Specific Content",
    description: "Create content that helps AI understand and recommend your specific auto services.",
    features: ["Service pages", "Make/model specialties", "Common repair content", "Pricing guidance"]
  },
  {
    title: "Trust & Reputation Signals",
    description: "Auto repair is trust-dependent. We optimize the signals that AI uses to recommend honest, reputable shops.",
    features: ["Review integration", "Certification display", "Warranty information", "Transparent pricing"]
  },
  {
    title: "Local Area Targeting",
    description: "Dominate AI recommendations for auto repair in your service area.",
    features: ["Neighborhood targeting", "Commuter route content", "Local area pages", "Community involvement"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for auto repair shops?",
    answer: "When car owners ask ChatGPT 'my car is making a noise, who should I see' or ask Perplexity 'best mechanic near me,' AI recommends specific shops. If you're not optimized, you're missing customers who research via AI."
  },
  {
    question: "How is auto repair GEO different?",
    answer: "Auto repair GEO emphasizes trust signals heavily—certifications, warranties, transparent pricing, and honest reviews. We help AI understand that you're a trustworthy shop."
  },
  {
    question: "Can GEO help with specific car makes?",
    answer: "Absolutely. Specialization queries like 'BMW specialist in [city]' or 'Honda mechanic near me' are valuable. We optimize for your make/model specialties."
  },
  {
    question: "How do you incorporate ASE certifications?",
    answer: "We implement schema markup for your ASE certifications and other credentials. AI systems use these to validate expertise and make recommendations."
  },
  {
    question: "What about fleet services?",
    answer: "We optimize for both consumer and commercial/fleet queries. Fleet managers use AI to research auto service providers for their vehicles."
  },
  {
    question: "How do you measure auto repair GEO success?",
    answer: "We track AI mentions for service and location queries, monitor competitor visibility, and measure lead quality from customers who found you through AI recommendations."
  }
]

export default function GEOAutoRepairPage() {
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
              <Car className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for Auto Repair</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Your{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Auto Shop
              </span>{' '}
              Recommended by AI
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When car owners ask ChatGPT "where should I take my car" or ask 
              Perplexity "best mechanic near me"—you should be the answer.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Auto Repair GEO Audit
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
              Why Auto Shops Need GEO
            </h2>
            <p className="text-xl text-slate-600">
              Car owners are asking AI for mechanic recommendations. AI mentions 
              drive customers who trust AI to vet quality shops.
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

      {/* Auto Services */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Auto Services We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of auto repair businesses get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {autoServices.map((type) => (
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
              Our Auto Repair GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to get your auto shop recommended by AI.
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
              FAQs for Auto Repair GEO
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
            Ready to get more customers from AI?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your auto repair shop. See exactly how visible you are 
            when car owners ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Auto Repair GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

