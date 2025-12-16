import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Code, Cloud, Database, Shield, Cpu, LineChart, Globe, Zap } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO for SaaS & Technology Companies | AI Search Optimization | Web Vello',
  description: 'Get your SaaS or technology product found in ChatGPT, Perplexity, and Google SGE. GEO optimization for software companies, tech products, and B2B technology.',
  keywords: ['geo saas', 'ai seo technology', 'software chatgpt optimization', 'saas geo optimization', 'tech company ai search'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-saas-technology',
  },
  openGraph: {
    title: 'GEO for SaaS & Technology | AI Search | Web Vello',
    description: 'Get your SaaS or tech product found in AI search results.',
    url: 'https://www.webvello.com/services/geo-saas-technology',
    type: 'website',
  }
}

const techCategories = [
  { icon: Cloud, name: "SaaS Products", description: "CRM, project management, marketing tools, etc." },
  { icon: Code, name: "Dev Tools", description: "Developer tools, APIs, code libraries" },
  { icon: Database, name: "Data & Analytics", description: "BI tools, data platforms, analytics" },
  { icon: Shield, name: "Security", description: "Cybersecurity, identity management, compliance" },
  { icon: Cpu, name: "AI & ML", description: "AI tools, machine learning platforms" },
  { icon: LineChart, name: "Martech", description: "Marketing technology, automation tools" },
  { icon: Globe, name: "E-commerce Tech", description: "Platforms, plugins, integrations" },
  { icon: Zap, name: "Productivity", description: "Workflow tools, collaboration software" }
]

const whyGeoMatters = [
  {
    query: "\"What's the best CRM for small businesses?\"",
    impact: "AI comparison queries are the new battleground—businesses cited first win market share"
  },
  {
    query: "\"Compare [your product] vs [competitor]\"",
    impact: "When users ask AI to compare tools, your product needs optimized positioning"
  },
  {
    query: "\"Best tools for [use case]\"",
    impact: "Category queries send highly qualified traffic—users ready to evaluate and buy"
  },
  {
    query: "\"How to solve [problem]\"",
    impact: "Problem-solution queries where your product is mentioned as the answer drive signups"
  }
]

const services = [
  {
    title: "Product Positioning Optimization",
    description: "AI systems need to understand what your product does, who it's for, and why it's differentiated. We optimize your positioning for AI extraction.",
    features: ["Product description optimization", "Use case content", "Feature documentation", "Comparison positioning"]
  },
  {
    title: "Category & Keyword Ownership",
    description: "Own your category in AI responses. We build comprehensive content that establishes you as a leader in your product category.",
    features: ["Category pillar content", "Alternative to [competitor] pages", "Best X for Y content", "Buying guide content"]
  },
  {
    title: "Documentation & Resource Optimization",
    description: "AI systems often cite documentation and help content. We optimize your docs for AI extraction while maintaining helpfulness.",
    features: ["Documentation structure", "FAQ optimization", "Help center content", "API documentation"]
  },
  {
    title: "Integration & Ecosystem Content",
    description: "Users often search for tools that integrate with their stack. We optimize your integration content for AI visibility.",
    features: ["Integration pages", "Partnership content", "Ecosystem positioning", "Tech stack content"]
  }
]

const faqs = [
  {
    question: "Why is GEO critical for SaaS companies?",
    answer: "When someone asks ChatGPT 'what's the best project management tool' or asks Perplexity 'compare Slack alternatives,' the products that get mentioned win the consideration set. GEO determines whether your product is recommended in these high-intent queries."
  },
  {
    question: "How is GEO different from traditional SEO for tech?",
    answer: "Traditional SEO focuses on ranking in search results. GEO focuses on being mentioned and recommended in AI answers. For SaaS, this often means optimizing comparison content, documentation, and category positioning—things that AI systems use to make recommendations."
  },
  {
    question: "Can GEO help with competitor comparisons?",
    answer: "Absolutely. When users ask 'X vs Y' queries to AI, you want favorable positioning. We optimize your comparison content, differentiators, and use case fit so AI systems present you well in head-to-head queries."
  },
  {
    question: "How do you handle different product categories?",
    answer: "Many SaaS products span multiple categories. We identify all relevant categories, use cases, and user personas, then create optimized content for each. This ensures you're visible across all relevant AI queries."
  },
  {
    question: "What about developer-focused products?",
    answer: "Developer products have unique GEO considerations—documentation, API references, and technical content matter more. We optimize technical documentation for AI extraction while maintaining developer experience."
  },
  {
    question: "How do you measure GEO success for SaaS?",
    answer: "We track AI mentions across major platforms, monitor competitor comparisons, and measure downstream metrics: branded search increases, demo requests citing AI discovery, and signup source attribution."
  }
]

export default function GEOSaaSTechnologyPage() {
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
              <Code className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for SaaS & Technology</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Your{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                SaaS Product
              </span>{' '}
              Recommended by AI
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When someone asks ChatGPT "what's the best CRM for startups" or asks Perplexity 
              "compare project management tools"—your product should be in that answer.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free SaaS GEO Audit
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
              Why Tech Companies Need GEO
            </h2>
            <p className="text-xl text-slate-600">
              B2B buyers increasingly use AI to research, compare, and shortlist tools. 
              If your product isn't mentioned, you're not in the consideration set.
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

      {/* Tech Categories */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Technology Categories We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of tech products get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techCategories.map((category) => (
              <div key={category.name} className="bg-white rounded-xl p-6 text-center border border-slate-200">
                <category.icon className="w-10 h-10 text-rose-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{category.name}</h3>
                <p className="text-sm text-slate-600">{category.description}</p>
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
              Our SaaS GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to dominate AI search in your product category.
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
              FAQs for SaaS GEO
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
            Ready to win AI search in your category?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your SaaS product. See exactly how visible you are 
            when buyers ask AI to compare tools in your category.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free SaaS GEO Audit
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
            <Link href="/services/ai-seo" className="text-slate-700 hover:text-slate-900 text-sm underline">
              AI-Driven Visibility Strategy
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

