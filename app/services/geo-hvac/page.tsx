import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Thermometer, Wind, Snowflake, Flame, Wrench, Shield, Clock, Home } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO for HVAC Companies | AI Search Optimization | Web Vello',
  description: 'Get your HVAC business found in ChatGPT, Perplexity, and Google SGE. GEO optimization for heating, cooling, and air conditioning companies.',
  keywords: ['geo hvac', 'ai seo hvac', 'hvac chatgpt optimization', 'heating cooling geo', 'hvac ai search'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-hvac',
  },
  openGraph: {
    title: 'GEO for HVAC | AI Search for HVAC Companies | Web Vello',
    description: 'Get your HVAC business found in AI search results.',
    url: 'https://www.webvello.com/services/geo-hvac',
    type: 'website',
  }
}

const hvacServices = [
  { icon: Thermometer, name: "HVAC Installation", description: "New system installation and replacement" },
  { icon: Wrench, name: "HVAC Repair", description: "Emergency and scheduled repairs" },
  { icon: Shield, name: "Maintenance", description: "Preventive maintenance plans" },
  { icon: Snowflake, name: "AC Service", description: "Air conditioning specialists" },
  { icon: Flame, name: "Heating", description: "Furnace and heat pump services" },
  { icon: Wind, name: "Ventilation", description: "Ductwork and air quality" },
  { icon: Clock, name: "Emergency", description: "24/7 emergency service" },
  { icon: Home, name: "Commercial", description: "Commercial HVAC services" }
]

const whyGeoMatters = [
  {
    query: "\"Best HVAC company near me\"",
    impact: "Homeowners ask AI for HVAC recommendations when their system needs service"
  },
  {
    query: "\"Who can fix my AC today?\"",
    impact: "Emergency queries where AI recommends responsive, reliable companies"
  },
  {
    query: "\"HVAC company for new home install\"",
    impact: "High-value installation projects where AI recommends qualified contractors"
  },
  {
    query: "\"Compare HVAC maintenance plans\"",
    impact: "Recurring service queries where AI recommends trusted providers"
  }
]

const services = [
  {
    title: "HVAC Entity Optimization",
    description: "AI systems need to understand your HVAC business as a distinct entity with clear services, certifications, and service areas.",
    features: ["LocalBusiness schema markup", "Service type positioning", "Certification display", "Brand partnerships"]
  },
  {
    title: "Service-Specific Content",
    description: "Create content that helps AI understand and recommend your specific HVAC services.",
    features: ["Service pages", "Emergency content", "Brand-specific content", "Maintenance plans"]
  },
  {
    title: "Trust & Emergency Signals",
    description: "HVAC is about trust and availability. We optimize the signals that AI uses to recommend reliable providers.",
    features: ["Review integration", "License display", "Insurance verification", "Response time content"]
  },
  {
    title: "Local Emergency Targeting",
    description: "Dominate AI recommendations for emergency and urgent HVAC needs in your service area.",
    features: ["24/7 availability signals", "Emergency service content", "Fast response positioning", "Local area targeting"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for HVAC companies?",
    answer: "When homeowners ask ChatGPT 'my AC stopped working, who can fix it today' or ask Perplexity 'best HVAC company near me,' AI recommends specific companies. If you're not optimized, you're missing emergency calls and installation leads."
  },
  {
    question: "How is HVAC GEO different from other industries?",
    answer: "HVAC GEO focuses on emergency availability, trust signals, and certification/licensing. We optimize for urgent queries and help AI understand your response time and reliability."
  },
  {
    question: "Can GEO help with emergency service calls?",
    answer: "Absolutely. Emergency targeting is crucial for HVAC. We optimize for 'same-day,' 'emergency,' and '24/7' queries to ensure you appear when homeowners need immediate help."
  },
  {
    question: "How do you incorporate our certifications?",
    answer: "We implement schema markup for your NATE certifications, manufacturer authorizations, and licensing. AI systems use these to validate your expertise and make recommendations."
  },
  {
    question: "What about brand-specific queries?",
    answer: "We optimize for queries like 'Carrier dealer in [city]' or 'Lennox authorized service.' Brand relationships are valuable for both SEO and GEO visibility."
  },
  {
    question: "How do you measure HVAC GEO success?",
    answer: "We track AI mentions for service and location queries, monitor competitor visibility, and measure lead quality—especially high-value installation and maintenance contract leads."
  }
]

export default function GEOHVACPage() {
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
              <Thermometer className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for HVAC</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Your{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                HVAC Company
              </span>{' '}
              Recommended by AI
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When homeowners ask ChatGPT "my AC is broken, who can fix it today" or ask 
              Perplexity "best HVAC company near me"—you should be the answer.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free HVAC GEO Audit
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
              Why HVAC Companies Need GEO
            </h2>
            <p className="text-xl text-slate-600">
              Homeowners are asking AI for HVAC recommendations—especially during emergencies. 
              AI mentions drive high-value service calls.
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

      {/* HVAC Services */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              HVAC Services We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of HVAC businesses get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hvacServices.map((type) => (
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
              Our HVAC GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to get your HVAC company recommended by AI.
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
              FAQs for HVAC GEO
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
            Ready to get more HVAC calls from AI?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your HVAC company. See exactly how visible you are 
            when homeowners ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free HVAC GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

