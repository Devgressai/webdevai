import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Zap, Lightbulb, Shield, Clock, Home, AlertTriangle, Settings, Building2 } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO for Electricians | AI Search Optimization for Electrical Contractors | Web Vello',
  description: 'Get your electrical business found in ChatGPT, Perplexity, and Google SGE. GEO optimization for electricians and electrical contractors.',
  keywords: ['geo electricians', 'ai seo electricians', 'electrician chatgpt optimization', 'electrical contractor geo'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-electricians',
  },
  openGraph: {
    title: 'GEO for Electricians | AI Search for Electrical Contractors | Web Vello',
    description: 'Get your electrical business found in AI search results.',
    url: 'https://www.webvello.com/services/geo-electricians',
    type: 'website',
  }
}

const electricalServices = [
  { icon: Zap, name: "General Electrical", description: "Repairs, installations, upgrades" },
  { icon: AlertTriangle, name: "Emergency Electrical", description: "24/7 emergency service" },
  { icon: Lightbulb, name: "Lighting", description: "Lighting installation and design" },
  { icon: Settings, name: "Panel Upgrades", description: "Electrical panel services" },
  { icon: Home, name: "Residential", description: "Home electrical services" },
  { icon: Building2, name: "Commercial", description: "Commercial electrical work" },
  { icon: Shield, name: "Inspections", description: "Electrical inspections and testing" },
  { icon: Clock, name: "Same-Day Service", description: "Fast response electrical" }
]

const whyGeoMatters = [
  {
    query: "\"Best electrician near me\"",
    impact: "Homeowners ask AI for electrician recommendations when they have issues"
  },
  {
    query: "\"My power went out, who can fix it?\"",
    impact: "Emergency queries where AI recommends responsive electricians"
  },
  {
    query: "\"Electrician for home remodel\"",
    impact: "Project-specific queries where AI recommends qualified contractors"
  },
  {
    query: "\"Licensed electrician in [city]\"",
    impact: "Trust-focused queries where AI verifies credentials"
  }
]

const services = [
  {
    title: "Electrician Entity Optimization",
    description: "AI systems need to understand your electrical business as a distinct entity with clear services, licensing, and service areas.",
    features: ["LocalBusiness schema markup", "Master electrician license display", "Service area definition", "Specialty positioning"]
  },
  {
    title: "Service-Specific Content",
    description: "Create content that helps AI understand and recommend your specific electrical services.",
    features: ["Service pages", "Emergency content", "Problem-solution content", "Project galleries"]
  },
  {
    title: "Trust & Safety Signals",
    description: "Electrical work is safety-critical. We optimize the signals that AI uses to recommend licensed, insured electricians.",
    features: ["License verification", "Insurance display", "Safety certifications", "Review integration"]
  },
  {
    title: "Emergency Response Targeting",
    description: "Dominate AI recommendations for electrical emergencies in your service area.",
    features: ["24/7 availability signals", "Emergency service content", "Fast response positioning", "Local area pages"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for electricians?",
    answer: "When homeowners ask ChatGPT 'I have no power, who can help' or ask Perplexity 'best electrician near me,' AI recommends specific electricians. If you're not optimized, you're missing emergency calls and project leads."
  },
  {
    question: "How is electrical GEO different from other trades?",
    answer: "Electrical GEO emphasizes safety credentials, licensing, and trust signals more heavily. We optimize for queries where users specifically want licensed, insured professionals."
  },
  {
    question: "Can GEO help with emergency electrical calls?",
    answer: "Absolutely. Emergency targeting is crucial for electricians. We optimize for power outages, electrical hazards, and other urgent queries where homeowners need immediate help."
  },
  {
    question: "How do you incorporate our licensing?",
    answer: "We implement schema markup for your master electrician license, bonding, insurance, and any specialty certifications. AI systems use these to validate your expertise."
  },
  {
    question: "What about commercial electrical work?",
    answer: "We optimize for both residential and commercial queries. Commercial projects often come from decision-makers who use AI to research contractors."
  },
  {
    question: "How do you measure electrician GEO success?",
    answer: "We track AI mentions for service and location queries, monitor competitor visibility, and measure lead quality—especially high-value panel upgrades and commercial leads."
  }
]

export default function GEOElectriciansPage() {
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
              <Zap className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for Electricians</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Your{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Electrical Business
              </span>{' '}
              Recommended by AI
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When homeowners ask ChatGPT "I have an electrical emergency" or ask 
              Perplexity "best electrician near me"—you should be the answer.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Electrician GEO Audit
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
              Why Electricians Need GEO
            </h2>
            <p className="text-xl text-slate-600">
              Homeowners are asking AI for electrician recommendations. AI mentions 
              drive high-value service calls and project leads.
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

      {/* Electrical Services */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Electrical Services We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of electrical businesses get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {electricalServices.map((type) => (
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
              Our Electrician GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to get your electrical business recommended by AI.
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
              FAQs for Electrician GEO
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
            Ready to get more electrical leads from AI?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your electrical business. See exactly how visible you are 
            when homeowners ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Electrician GEO Audit
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

