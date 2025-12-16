import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Wallet, Building2, TrendingUp, Shield, Briefcase, Calculator, PiggyBank, CreditCard } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO for Financial Services | AI Search Optimization for Finance | Web Vello',
  description: 'Get your financial services firm found in ChatGPT, Perplexity, and Google SGE. GEO optimization for financial advisors, accountants, and wealth managers.',
  keywords: ['geo financial services', 'ai seo financial advisors', 'financial advisor chatgpt optimization', 'wealth management geo', 'accounting ai search'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-financial-services',
  },
  openGraph: {
    title: 'GEO for Financial Services | AI Search for Finance | Web Vello',
    description: 'Get your financial services firm found in AI search results.',
    url: 'https://www.webvello.com/services/geo-financial-services',
    type: 'website',
  }
}

const financeTypes = [
  { icon: TrendingUp, name: "Financial Advisors", description: "Wealth management and financial planning" },
  { icon: Calculator, name: "CPAs & Accountants", description: "Accounting, tax, and audit services" },
  { icon: PiggyBank, name: "Retirement Planning", description: "Retirement and pension specialists" },
  { icon: Building2, name: "Business Finance", description: "CFO services, business accounting" },
  { icon: Shield, name: "Insurance", description: "Insurance agents and brokers" },
  { icon: CreditCard, name: "Lending", description: "Mortgage brokers, loan officers" },
  { icon: Briefcase, name: "Investment Advisory", description: "RIAs and investment managers" },
  { icon: Wallet, name: "Tax Specialists", description: "Tax planning and preparation" }
]

const whyGeoMatters = [
  {
    query: "\"Best financial advisor in [city]\"",
    impact: "Investors ask AI for advisor recommendations, trusting AI for major financial decisions"
  },
  {
    query: "\"CPA near me that specializes in [industry]\"",
    impact: "Business owners ask AI for industry-specialized accountants"
  },
  {
    query: "\"Compare fee-only vs. commission financial advisors\"",
    impact: "AI explains differences and recommends specific firms"
  },
  {
    query: "\"Best retirement planner for [situation]\"",
    impact: "Retirement queries where AI recommends qualified professionals"
  }
]

const services = [
  {
    title: "Financial Entity Optimization",
    description: "AI systems need to understand your firm as a distinct financial services entity with clear credentials, specialties, and fiduciary status.",
    features: ["Advisor schema markup", "Credential highlighting", "License verification", "Fiduciary status"]
  },
  {
    title: "Trust & Authority Content",
    description: "Financial services require extreme trust signals. We create authoritative content that establishes your expertise.",
    features: ["Educational content", "Compliance-friendly materials", "Client success stories", "Thought leadership"]
  },
  {
    title: "Regulatory Compliance",
    description: "All our financial services GEO work adheres to SEC, FINRA, and state regulations. We never make prohibited claims.",
    features: ["Compliant content", "Accurate disclosures", "Appropriate disclaimers", "Regulatory awareness"]
  },
  {
    title: "Specialization Positioning",
    description: "Position your firm for the specific client types, services, and situations where you excel.",
    features: ["Niche targeting", "Client type focus", "Service specialization", "Situation-specific content"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for financial services?",
    answer: "When someone asks ChatGPT 'who's the best financial advisor in Denver' or asks Perplexity 'find a CPA who specializes in real estate,' AI systems recommend specific professionals. If you're not optimized, you're invisible to these high-value prospects."
  },
  {
    question: "How do you handle financial services compliance?",
    answer: "All our work complies with SEC, FINRA, state regulations, and professional standards. We focus on educational content, accurate credentials, and appropriate disclosures. We never make performance claims or prohibited statements."
  },
  {
    question: "Can GEO help differentiate fee-only vs. commission advisors?",
    answer: "Yes. AI users often ask about advisor compensation structures. We help you appear for queries where your compensation model is what the user is seeking, such as 'fee-only financial advisor in [city].'"
  },
  {
    question: "What about credentials like CFP, CPA, CFA?",
    answer: "We implement schema markup that highlights your credentials and certifications. AI systems use these signals to validate authority and make recommendations for credential-specific queries."
  },
  {
    question: "How do you handle RIA vs. broker-dealer distinctions?",
    answer: "We optimize for your specific registration type and explain your fiduciary status in content. This helps you appear for queries where users specifically seek RIAs or understand the fiduciary difference."
  },
  {
    question: "How do you measure financial services GEO success?",
    answer: "We track AI mentions for target queries, monitor competitor visibility, and measure downstream metrics: consultation requests, lead quality, and clients who mention AI discovery during intake."
  }
]

export default function GEOFinancialServicesPage() {
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
              <Wallet className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for Financial Services</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Recommended
              </span>{' '}
              by AI to Investors
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When someone asks ChatGPT "who's the best financial advisor in my area" or asks 
              Perplexity "find a CPA who specializes in my industry"—you should be the answer.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Financial Services GEO Audit
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
              Why Financial Services Needs GEO
            </h2>
            <p className="text-xl text-slate-600">
              Investors and business owners are asking AI for financial professional recommendations. 
              AI mentions carry high trust for major financial decisions.
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

      {/* Finance Types */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Financial Services We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of financial professionals get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {financeTypes.map((type) => (
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
              Our Financial Services GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to get recommended by AI to investors and business owners.
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
              FAQs for Financial Services GEO
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
            Get a free GEO audit for your financial services firm. See exactly how visible you are 
            when investors ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Financial Services GEO Audit
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
              High-Value Client Authority
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

