import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Scale, Gavel, Shield, FileText, Users, Building2, Briefcase, Award } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'GEO for Law Firms | AI Search Optimization for Attorneys | Web Vello',
  description: 'Get your law firm found in ChatGPT, Perplexity, and Google SGE. GEO optimization for lawyers, attorneys, and legal practices.',
  keywords: ['geo law firms', 'ai seo lawyers', 'law firm chatgpt optimization', 'attorney geo optimization', 'legal ai search'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-legal',
  },
  openGraph: {
    title: 'GEO for Law Firms | AI Search for Attorneys | Web Vello',
    description: 'Get your law firm found in AI search results.',
    url: 'https://www.webvello.com/services/geo-legal',
    type: 'website',
  }
}

const legalTypes = [
  { icon: Scale, name: "Personal Injury", description: "Injury, accident, and malpractice attorneys" },
  { icon: Gavel, name: "Criminal Defense", description: "Criminal defense lawyers and DUI attorneys" },
  { icon: FileText, name: "Family Law", description: "Divorce, custody, and family attorneys" },
  { icon: Building2, name: "Business Law", description: "Corporate, contract, and business attorneys" },
  { icon: Shield, name: "Employment Law", description: "Employment and labor law attorneys" },
  { icon: Briefcase, name: "Estate Planning", description: "Wills, trusts, and probate attorneys" },
  { icon: Users, name: "Immigration", description: "Immigration and visa attorneys" },
  { icon: Award, name: "IP & Tech", description: "Patent, trademark, and tech law" }
]

const whyGeoMatters = [
  {
    query: "\"Best personal injury lawyer in [city]\"",
    impact: "Accident victims ask AI for attorney recommendations when they need help fast"
  },
  {
    query: "\"Should I hire a lawyer for [situation]?\"",
    impact: "AI answers often recommend specific attorneys as part of advice"
  },
  {
    query: "\"Divorce attorney near me who handles [specialty]\"",
    impact: "Clients with specific needs ask AI for specialized attorney recommendations"
  },
  {
    query: "\"Compare [law firm] vs other options\"",
    impact: "Prospective clients use AI to vet firms before initial consultations"
  }
]

const services = [
  {
    title: "Attorney Entity Optimization",
    description: "AI systems need to recognize your firm and attorneys as distinct legal entities with clear practice areas and credentials.",
    features: ["Attorney schema markup", "Bar admission verification", "Practice area positioning", "Credential highlighting"]
  },
  {
    title: "Legal Content Authority",
    description: "Establish your firm as a trusted authority on legal topics relevant to your practice areas.",
    features: ["Practice area content", "Legal FAQs", "Case type education", "Jurisdiction-specific content"]
  },
  {
    title: "Results & Reputation Integration",
    description: "AI systems weight case results and client reviews heavily for legal recommendations.",
    features: ["Case results (where permitted)", "Client testimonials", "Peer recognition", "Award display"]
  },
  {
    title: "Bar-Compliant Implementation",
    description: "All our legal GEO work complies with state bar advertising rules and ethics requirements.",
    features: ["Ethics compliance", "Required disclaimers", "Accurate claims only", "Bar rule adherence"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for law firms?",
    answer: "When someone asks ChatGPT 'who's the best DUI lawyer in Phoenix' or asks Perplexity 'find a divorce attorney who handles high-net-worth cases,' AI recommends specific attorneys. If your firm isn't optimized, you're invisible to these potential clients."
  },
  {
    question: "How do you handle state bar advertising compliance?",
    answer: "We're experienced with legal marketing rules. All content and claims are reviewed for bar compliance. We include required disclaimers, avoid prohibited claims, and ensure all information is accurate and verifiable."
  },
  {
    question: "Can you optimize for specific practice areas?",
    answer: "Absolutely. Practice area specialization is often where legal GEO delivers the best results. We optimize for queries like 'truck accident lawyer in [city]' or 'immigration attorney for H-1B visas' where specificity matters."
  },
  {
    question: "How do you incorporate case results?",
    answer: "Where permitted by bar rules, we implement structured data around notable verdicts and settlements. In states with restrictions, we focus on experience, credentials, and client testimonials instead."
  },
  {
    question: "What about multi-location firms?",
    answer: "For firms with multiple offices, we optimize both the firm entity and individual office locations. This captures queries for both the firm brand and specific geographic areas."
  },
  {
    question: "How do you measure legal GEO success?",
    answer: "We track AI mentions for target practice areas and locations, monitor competitor visibility, and measure downstream metrics: consultation requests, lead quality, and clients who mention AI discovery."
  }
]

export default function GEOLegalPage() {
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
              <Scale className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for Law Firms</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Your{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Firm
              </span>{' '}
              Recommended by AI
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When someone asks ChatGPT "who's the best attorney for my case" or asks 
              Perplexity "find a lawyer in my area"—your firm should be in the answer.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Legal GEO Audit
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
              Why Law Firms Need GEO
            </h2>
            <p className="text-xl text-slate-600">
              Clients are asking AI for attorney recommendations. AI mentions carry high trust 
              for major legal decisions.
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

      {/* Legal Types */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Practice Areas We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help law firms across all practice areas get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {legalTypes.map((type) => (
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
              Our Legal GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to get your firm recommended by AI.
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
              FAQs for Legal GEO
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
            Ready to get more clients from AI?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your law firm. See exactly how visible you are 
            when potential clients ask AI for attorney recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Legal GEO Audit
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
              Legal Market Authority
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

