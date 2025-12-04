import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Droplet, Wrench, Shield, Clock, Home, AlertTriangle, Gauge, Pipe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO for Plumbers | AI Search Optimization for Plumbing Companies | Web Vello',
  description: 'Get your plumbing business found in ChatGPT, Perplexity, and Google SGE. GEO optimization for plumbers and plumbing contractors.',
  keywords: ['geo plumbing', 'ai seo plumbers', 'plumber chatgpt optimization', 'plumbing geo', 'plumber ai search'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-plumbing',
  },
  openGraph: {
    title: 'GEO for Plumbers | AI Search for Plumbing Companies | Web Vello',
    description: 'Get your plumbing business found in AI search results.',
    url: 'https://www.webvello.com/services/geo-plumbing',
    type: 'website',
  }
}

const plumbingServices = [
  { icon: Droplet, name: "General Plumbing", description: "Repairs, installations, and maintenance" },
  { icon: AlertTriangle, name: "Emergency Plumbing", description: "24/7 emergency service calls" },
  { icon: Wrench, name: "Drain Cleaning", description: "Clogged drain and sewer service" },
  { icon: Gauge, name: "Water Heaters", description: "Water heater repair and replacement" },
  { icon: Pipe, name: "Pipe Services", description: "Pipe repair, replacement, repiping" },
  { icon: Shield, name: "Inspections", description: "Plumbing inspections and diagnostics" },
  { icon: Clock, name: "Same-Day Service", description: "Fast response plumbing" },
  { icon: Home, name: "Commercial", description: "Commercial plumbing services" }
]

const whyGeoMatters = [
  {
    query: "\"Best plumber near me\"",
    impact: "Homeowners ask AI for plumber recommendations when they have a plumbing issue"
  },
  {
    query: "\"Who can fix a leak today?\"",
    impact: "Emergency queries where AI recommends responsive, reliable plumbers"
  },
  {
    query: "\"Plumber for water heater replacement\"",
    impact: "Project-specific queries where AI recommends qualified specialists"
  },
  {
    query: "\"24 hour plumber in [city]\"",
    impact: "Urgent nighttime and weekend queries when AI is often the first resource"
  }
]

const services = [
  {
    title: "Plumber Entity Optimization",
    description: "AI systems need to understand your plumbing business as a distinct entity with clear services, licensing, and service areas.",
    features: ["LocalBusiness schema markup", "License display", "Service area definition", "Specialty positioning"]
  },
  {
    title: "Service-Specific Content",
    description: "Create content that helps AI understand and recommend your specific plumbing services.",
    features: ["Service pages", "Emergency content", "Problem-solution content", "Pricing guidance"]
  },
  {
    title: "Trust & Emergency Signals",
    description: "Plumbing is about trust and availability. We optimize the signals that AI uses to recommend reliable plumbers.",
    features: ["Review integration", "License verification", "Insurance display", "Response time content"]
  },
  {
    title: "Local Emergency Targeting",
    description: "Dominate AI recommendations for emergency and urgent plumbing needs in your service area.",
    features: ["24/7 availability signals", "Emergency service content", "Fast response positioning", "Local area pages"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for plumbers?",
    answer: "When homeowners ask ChatGPT 'I have a leak, who can fix it today' or ask Perplexity 'best plumber near me,' AI recommends specific plumbers. If you're not optimized, you're missing emergency calls and project leads."
  },
  {
    question: "How is plumbing GEO different from other industries?",
    answer: "Plumbing GEO focuses on emergency availability, trust signals, and licensing. We optimize for urgent queries and help AI understand your response time and reliability."
  },
  {
    question: "Can GEO help with emergency service calls?",
    answer: "Absolutely. Emergency targeting is crucial for plumbers. We optimize for 'same-day,' 'emergency,' and '24/7' queries to ensure you appear when homeowners need immediate help."
  },
  {
    question: "How do you incorporate our licensing?",
    answer: "We implement schema markup for your plumbing license, bonding, and insurance. AI systems use these to validate your legitimacy and make recommendations."
  },
  {
    question: "What about specific plumbing services?",
    answer: "We optimize for service-specific queries like 'water heater installation,' 'drain cleaning service,' and 'sewer line repair.' Specialty targeting often delivers the best results."
  },
  {
    question: "How do you measure plumbing GEO success?",
    answer: "We track AI mentions for service and location queries, monitor competitor visibility, and measure lead quality—especially emergency and high-value project leads."
  }
]

export default function GEOPlumbingPage() {
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
              <Droplet className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for Plumbing</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Your{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Plumbing Business
              </span>{' '}
              Recommended by AI
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When homeowners ask ChatGPT "I have a leak, who can fix it" or ask 
              Perplexity "best plumber near me"—you should be the answer.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Plumbing GEO Audit
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
              Why Plumbers Need GEO
            </h2>
            <p className="text-xl text-slate-600">
              Homeowners are asking AI for plumber recommendations—especially during emergencies. 
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

      {/* Plumbing Services */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Plumbing Services We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of plumbing businesses get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {plumbingServices.map((type) => (
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
              Our Plumbing GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to get your plumbing business recommended by AI.
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
              FAQs for Plumbing GEO
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
            Ready to get more plumbing calls from AI?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your plumbing business. See exactly how visible you are 
            when homeowners ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Plumbing GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

