import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Home, Hammer, Shield, AlertTriangle, Sun, CloudRain, Building2, Clock } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO for Roofing Companies | AI Search Optimization for Roofers | Web Vello',
  description: 'Get your roofing business found in ChatGPT, Perplexity, and Google SGE. GEO optimization for roofers and roofing contractors.',
  keywords: ['geo roofing', 'ai seo roofers', 'roofing chatgpt optimization', 'roofer geo', 'roofing ai search'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-roofing',
  },
  openGraph: {
    title: 'GEO for Roofing | AI Search for Roofing Companies | Web Vello',
    description: 'Get your roofing business found in AI search results.',
    url: 'https://www.webvello.com/services/geo-roofing',
    type: 'website',
  }
}

const roofingServices = [
  { icon: Home, name: "Roof Replacement", description: "Full roof replacement services" },
  { icon: Hammer, name: "Roof Repair", description: "Leak repair and damage repair" },
  { icon: AlertTriangle, name: "Emergency Roofing", description: "Storm damage and emergency service" },
  { icon: Shield, name: "Roof Inspections", description: "Inspections and assessments" },
  { icon: Sun, name: "Residential", description: "Home roofing services" },
  { icon: Building2, name: "Commercial", description: "Commercial roofing services" },
  { icon: CloudRain, name: "Storm Damage", description: "Storm and hail damage repair" },
  { icon: Clock, name: "Maintenance", description: "Preventive maintenance programs" }
]

const whyGeoMatters = [
  {
    query: "\"Best roofer in [city]\"",
    impact: "Homeowners ask AI for roofer recommendations when planning projects"
  },
  {
    query: "\"My roof is leaking, who can fix it?\"",
    impact: "Emergency queries where AI recommends responsive, reliable roofers"
  },
  {
    query: "\"How much does a new roof cost in [city]?\"",
    impact: "Information queries that lead to contractor recommendations"
  },
  {
    query: "\"Roofing company near me with good reviews\"",
    impact: "Trust-focused queries where AI recommends well-reviewed contractors"
  }
]

const services = [
  {
    title: "Roofing Entity Optimization",
    description: "AI systems need to understand your roofing business as a distinct entity with clear services, licensing, and service areas.",
    features: ["LocalBusiness schema markup", "Contractor license display", "Service area definition", "Specialty positioning"]
  },
  {
    title: "Project & Portfolio Content",
    description: "Showcase your roofing work in ways that AI can understand and cite when recommending contractors.",
    features: ["Project galleries", "Before/after content", "Material specialties", "Service descriptions"]
  },
  {
    title: "Trust & Emergency Signals",
    description: "Roofing is a high-trust purchase. We optimize the signals that AI uses to recommend reliable contractors.",
    features: ["Review integration", "License display", "Insurance verification", "Manufacturer certifications"]
  },
  {
    title: "Local Storm Response",
    description: "Dominate AI recommendations for storm damage and emergency roofing needs in your service area.",
    features: ["Emergency response content", "Storm damage pages", "Fast response positioning", "Local area pages"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for roofing companies?",
    answer: "When homeowners ask ChatGPT 'my roof is leaking, who can fix it' or ask Perplexity 'best roofer in my area,' AI recommends specific contractors. If you're not optimized, you're missing emergency calls and replacement leads."
  },
  {
    question: "How is roofing GEO different from other industries?",
    answer: "Roofing GEO focuses on high-trust signals, storm response capabilities, and project portfolios. We optimize for both emergency queries and planned replacement projects."
  },
  {
    question: "Can GEO help with storm damage leads?",
    answer: "Absolutely. Storm damage is a major lead source for roofers. We optimize for storm-related queries and help AI understand your emergency response capabilities."
  },
  {
    question: "How do you incorporate our manufacturer certifications?",
    answer: "We implement schema markup for your GAF, Owens Corning, or other manufacturer certifications. AI systems use these to validate your expertise and make recommendations."
  },
  {
    question: "What about commercial roofing?",
    answer: "We optimize for both residential and commercial queries. Commercial roofing often has different decision-makers who use AI for vendor research."
  },
  {
    question: "How do you measure roofing GEO success?",
    answer: "We track AI mentions for service and location queries, monitor competitor visibility, and measure lead quality—especially high-value replacement and commercial leads."
  }
]

export default function GEORoofingPage() {
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
              <span className="text-white/80 text-sm">GEO for Roofing</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Your{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Roofing Company
              </span>{' '}
              Recommended by AI
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When homeowners ask ChatGPT "I need a new roof" or ask 
              Perplexity "best roofer near me"—you should be the answer.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Roofing GEO Audit
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
              Why Roofing Companies Need GEO
            </h2>
            <p className="text-xl text-slate-600">
              Homeowners are asking AI for roofer recommendations. AI mentions drive 
              high-value replacement and repair leads.
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

      {/* Roofing Services */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Roofing Services We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of roofing businesses get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {roofingServices.map((type) => (
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
              Our Roofing GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to get your roofing company recommended by AI.
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
              FAQs for Roofing GEO
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
            Ready to get more roofing leads from AI?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your roofing company. See exactly how visible you are 
            when homeowners ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Roofing GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-slate-600 text-sm mb-4 text-center">Related Services:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/services/geo-home-services" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Home Services GEO
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/services/local-seo" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Local Service Authority
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

