import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Wrench, Home, Zap, Droplets, Wind, Flame, Shield, Hammer } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO for Home Services | AI Search Optimization for Contractors | Web Vello',
  description: 'Get your home services business found in ChatGPT, Perplexity, and Google SGE. GEO optimization for plumbers, HVAC, roofers, electricians, and contractors.',
  keywords: ['geo home services', 'ai seo contractors', 'plumber chatgpt optimization', 'hvac geo optimization', 'contractor ai search'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-home-services',
  },
  openGraph: {
    title: 'GEO for Home Services | AI Search for Contractors | Web Vello',
    description: 'Get your home services business found in AI search results.',
    url: 'https://www.webvello.com/services/geo-home-services',
    type: 'website',
  }
}

const homeServiceTypes = [
  { icon: Droplets, name: "Plumbing", description: "Emergency plumbers, drain cleaning, water heater installation" },
  { icon: Wind, name: "HVAC", description: "Air conditioning repair, heating installation, duct cleaning" },
  { icon: Zap, name: "Electrical", description: "Electricians, panel upgrades, wiring, lighting" },
  { icon: Home, name: "Roofing", description: "Roof repair, replacement, inspection, gutters" },
  { icon: Hammer, name: "General Contractors", description: "Remodeling, additions, renovations" },
  { icon: Flame, name: "Pest Control", description: "Exterminators, termite treatment, wildlife removal" },
  { icon: Shield, name: "Landscaping", description: "Lawn care, tree service, hardscaping" },
  { icon: Wrench, name: "Appliance Repair", description: "Washer, dryer, refrigerator, dishwasher repair" }
]

const whyGeoMatters = [
  {
    query: "\"Who's a good plumber near me?\"",
    impact: "Voice and conversational AI queries are growing 40% year-over-year for home services"
  },
  {
    query: "\"Find emergency HVAC repair\"",
    impact: "Urgent service queries increasingly go to AI assistants instead of Google"
  },
  {
    query: "\"Best roofer in [city]\"",
    impact: "AI recommendations carry high trust—users act on them immediately"
  },
  {
    query: "\"How much does [service] cost?\"",
    impact: "Businesses cited in AI answers capture customers during research phase"
  }
]

const services = [
  {
    title: "Local Entity Optimization",
    description: "We establish your home services business as a recognized entity in your service area. AI systems need to understand your services, coverage area, and expertise.",
    features: ["Service area mapping", "Service-specific schema", "Local authority building", "Citation consistency"]
  },
  {
    title: "Service Page Optimization",
    description: "Each service you offer gets optimized content that AI can easily extract and cite. Emergency services, pricing info, and service details.",
    features: ["Service landing pages", "FAQ content", "Pricing information", "Emergency service content"]
  },
  {
    title: "Review & Reputation Optimization",
    description: "AI systems factor in reviews and reputation. We help you leverage your positive reviews for AI visibility.",
    features: ["Review integration", "Testimonial optimization", "Reputation signals", "Trust indicators"]
  },
  {
    title: "Multi-City Coverage",
    description: "If you serve multiple cities, we create location-specific content for each area to maximize AI visibility.",
    features: ["City landing pages", "Neighborhood targeting", "Service area content", "Local relevance signals"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for home services businesses?",
    answer: "When someone asks ChatGPT 'who's a good plumber in Denver' or asks their smart speaker for an emergency HVAC company, AI systems recommend specific businesses. If you're not optimized, you're missing these customers. Home services is one of the fastest-growing categories for AI search queries."
  },
  {
    question: "How is this different from regular local SEO?",
    answer: "Local SEO focuses on ranking in Google's map pack and organic results. GEO focuses on getting mentioned when people ask AI systems for recommendations. You need both—local SEO for traditional search, GEO for AI search. They work together but require different optimization approaches."
  },
  {
    question: "How quickly will I see results?",
    answer: "For specific services in your primary city, we typically see AI visibility improvements within 4-8 weeks. Building visibility for broader terms and multiple service areas takes 3-6 months. We focus on quick wins first—your core services in your main market."
  },
  {
    question: "What home services benefit most from GEO?",
    answer: "All home services benefit, but emergency services (plumbing, HVAC, electrical) see particularly fast results because customers turn to AI for immediate recommendations. High-ticket services (roofing, remodeling) also benefit strongly because customers do more research before deciding."
  },
  {
    question: "Do I need to change my website?",
    answer: "Usually, we work with your existing website. We'll optimize your content structure, add schema markup, and create targeted content. Major website changes are rarely needed—GEO optimization builds on what you already have."
  },
  {
    question: "How do you track AI visibility for home services?",
    answer: "We regularly test AI systems with queries relevant to your services and location. We track when and how you're mentioned, compare against competitors, and monitor improvement over time. You'll get monthly reports showing your AI visibility progress."
  }
]

export default function GEOHomeServicesPage() {
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
              <Wrench className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for Home Services & Contractors</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Found When Customers Ask AI for{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Home Services
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When someone asks ChatGPT "who's a good plumber near me" or tells Perplexity 
              "find emergency HVAC repair"—your business should be the recommendation. 
              GEO makes it happen.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Home Services GEO Audit
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
              Why Home Services Need GEO
            </h2>
            <p className="text-xl text-slate-600">
              Your customers are changing how they find contractors. AI search is becoming 
              the first place people turn for home services recommendations.
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

      {/* Service Types */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Home Services We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of home services businesses get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {homeServiceTypes.map((service) => (
              <div key={service.name} className="bg-white rounded-xl p-6 text-center border border-slate-200">
                <service.icon className="w-10 h-10 text-rose-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
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
              Our Home Services GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to dominate AI search in your service area.
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
              FAQs for Home Services GEO
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
            Ready to get more calls from AI search?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your home services business. See exactly how visible 
            you are when customers ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Home Services GEO Audit
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
            <Link href="/services/generative-engine-optimization" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Generative Engine Optimization
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/services/local-seo" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Local Service Discovery
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

