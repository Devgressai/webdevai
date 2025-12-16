import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target, Globe, BarChart, Droplet, Rocket } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'GEO Services in Houston, Texas | AI Search Optimization',
  description: 'Get your Houston business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for Energy Capital businesses.',
  keywords: ['geo houston', 'generative engine optimization houston', 'ai seo houston', 'chatgpt optimization houston texas', 'perplexity optimization houston'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-houston',
  },
  openGraph: {
    title: 'GEO Services in Houston, Texas | AI Search Optimization',
    description: 'Get your Houston business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for Energy Capital businesses.',
    url: 'https://www.webvello.com/services/geo-houston',
    type: 'website',
  }
}

const houstonIndustries = [
  { name: "Energy & Oil/Gas", description: "Energy companies, oilfield services, and energy tech" },
  { name: "Healthcare & Medical", description: "Medical practices in the Texas Medical Center and beyond" },
  { name: "Aerospace", description: "NASA contractors, aerospace manufacturers, and space tech" },
  { name: "Manufacturing", description: "Industrial manufacturers and B2B services" },
  { name: "Legal Services", description: "Law firms specializing in energy, maritime, and more" },
  { name: "Real Estate", description: "Agents and developers in Houston's growing market" },
  { name: "Technology", description: "Tech companies and startups in Houston's emerging tech scene" },
  { name: "Construction", description: "Commercial and residential contractors" }
]

const houstonAreas = [
  "Downtown Houston", "Galleria/Uptown", "The Heights", "Montrose",
  "Midtown", "Medical Center", "Memorial", "River Oaks",
  "Sugar Land", "The Woodlands", "Katy", "Pearland",
  "Clear Lake", "Energy Corridor", "Westchase", "Bellaire"
]

const processSteps = [
  {
    step: "1",
    title: "Houston Market Audit",
    description: "We analyze how AI systems currently respond to Houston-specific queries in your industry. What's being cited? Who dominates energy, healthcare, or B2B searches? Where are the gaps in your sector?"
  },
  {
    step: "2",
    title: "Entity & Schema Setup",
    description: "We implement structured data that tells AI systems exactly what you do and where you serve in Greater Houston. This includes LocalBusiness schema, Service schema, and industry-specific markup for Houston's major sectors."
  },
  {
    step: "3",
    title: "Content Optimization",
    description: "We optimize your existing content and create new Houston-specific pages that answer the questions local customers and B2B buyers ask AI engines about your services."
  },
  {
    step: "4",
    title: "Authority Building",
    description: "We build topical authority through strategic content clusters, establishing your business as the definitive Houston source in your industry across all service areas."
  },
  {
    step: "5",
    title: "Monitor & Iterate",
    description: "We track AI citations, measure visibility improvements across ChatGPT, Perplexity, and Google SGE, and continuously refine strategy based on Houston market data and industry trends."
  }
]

const faqs = [
  {
    question: "How does GEO help my Houston business?",
    answer: "When someone asks ChatGPT 'best oil and gas lawyer in Houston' or asks Perplexity 'find an HVAC company near me in The Woodlands,' your business should be mentioned. GEO optimizes your online presence so AI systems recognize and recommend you for relevant queries in the Houston market. As AI search dominates, visibility there is critical."
  },
  {
    question: "How does Webvello deliver GEO services remotely to Houston businesses?",
    answer: "All our GEO work is done digitally—no local office needed. We optimize your website, implement schema markup, create AI-friendly content for Houston areas, and monitor your visibility across AI platforms. You'll receive monthly reports showing exactly when and how AI systems cite your business. We've successfully served Houston energy companies, medical practices, and B2B services entirely remotely."
  },
  {
    question: "Do you work with businesses throughout Greater Houston?",
    answer: "Yes. We serve businesses throughout the Houston metro area—from Downtown to the suburbs. We work with businesses in Harris County, Fort Bend, Montgomery, Brazoria, and Galveston counties. We create location-specific strategies for your service areas, whether that's the Energy Corridor, Medical Center, or The Woodlands."
  },
  {
    question: "What makes Houston different for GEO?",
    answer: "Houston is the energy capital of the world and home to the Texas Medical Center, the largest medical complex globally. B2B industries and professional services dominate, and these sectors are rapidly adopting AI search tools. We understand Houston's unique business landscape and optimize for the specialized queries buyers use in energy, healthcare, and industrial sectors."
  },
  {
    question: "Do you work with Houston B2B and industrial companies?",
    answer: "Absolutely. Houston's economy is heavily B2B—energy services, manufacturing, logistics, professional services. When procurement teams or decision-makers ask AI for vendor recommendations, we ensure you're cited. We understand the longer sales cycles and technical terminology of Houston's major industries."
  },
  {
    question: "What industries benefit most from Houston GEO?",
    answer: "Energy companies, medical practices, legal services, B2B manufacturers, construction firms, and professional services see the biggest impact. Houston's business-focused economy means AI visibility drives high-value leads and contracts."
  },
  {
    question: "How long until I see AI visibility improvements in Houston?",
    answer: "For niche queries and specific areas, we typically see improvements in 4-8 weeks. Broader competitive terms take 3-6 months. We prioritize quick wins in your specific service area while building toward larger visibility goals in competitive Houston markets."
  },
  {
    question: "How do you measure GEO success in Houston?",
    answer: "We track when AI systems mention your business, monitor specific Houston-related queries in your industry, measure citation frequency across ChatGPT, Perplexity, and Google SGE, and analyze the context and accuracy of mentions. You'll see concrete data showing your growing AI visibility month over month."
  }
]

export default function GEOHoustonPage() {
  
  // Generate clean schema for GEO page (NO physical address, NO fake ratings)
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-houston',
    title: 'GEO Services in Houston, Texas | AI Search Optimization',
    description: 'Get your Houston business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for Energy Capital businesses.',
    geo: {
      city: 'Houston',
      cityState: 'Houston, TX'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Houston', url: 'https://www.webvello.com/services/geo-houston' }
    ]
  })
  
  return (
    <div className="min-h-screen bg-white">
      {/* Clean JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-white/80 text-sm">GEO Services in Houston, Texas</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Generative Engine Optimization in{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Houston, Texas
              </span>
            </h1>
            
            {/* Direct Answer Summary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                Webvello provides remote GEO services to Houston businesses, optimizing your online presence so AI engines like ChatGPT, Perplexity, and Google SGE cite you when customers ask for recommendations. We help energy companies, medical practices, B2B services, and professional firms dominate AI search without requiring a local office visit.
              </p>
            </div>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Houston GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Houston Needs GEO */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why GEO Matters in Houston
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Houston is the fourth-largest city in the US with 2.3 million residents and a metro area of over 7 million. As the energy capital of the world and home to the Texas Medical Center, Houston is a hub for B2B and professional services where AI search is rapidly becoming the primary discovery method.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                When someone asks AI "who's the best maritime lawyer in Houston" or "find me a good commercial contractor near the Energy Corridor," the businesses that appear are winning customers. Traditional SEO gets you into lists of links—GEO gets you into the AI answer itself, the single recommendation that matters.
              </p>
              <p className="text-lg text-slate-600">
                Voice search, ChatGPT, Perplexity, and Google's AI Overviews are now how procurement teams, decision-makers, and consumers find Houston businesses. If you're not optimized for AI, you're invisible to the majority of searches in your market.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-orange-500 mb-1">2.3M</p>
                <p className="text-sm text-slate-600">Houston residents</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-orange-500 mb-1">7.1M</p>
                <p className="text-sm text-slate-600">Metro population</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-orange-500 mb-1">$512B</p>
                <p className="text-sm text-slate-600">Metro GDP</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-orange-500 mb-1">#4</p>
                <p className="text-sm text-slate-600">US city by population</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Webvello Delivers */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              How Webvello Delivers GEO Services Remotely
            </h2>
            <p className="text-xl text-slate-600">
              All our GEO work is 100% digital. We optimize your website, implement structured data, create AI-friendly content for Houston areas, and monitor results—all without needing a local office.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Globe className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Remote Service</h3>
              <p className="text-slate-600">
                Everything happens online. We access your website, implement changes, and track results through digital tools. Meetings via Zoom, updates via email, results via dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Target className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Houston Market Expertise</h3>
              <p className="text-slate-600">
                We research Houston-specific queries, understand the Energy Corridor vs. Medical Center vs. Galleria markets, and optimize for how Houston B2B buyers and consumers search. No local office needed.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <BarChart className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">
                Monthly reports show exactly when AI systems cite your business for Houston queries. See your progress with real data, screenshots, and measurable visibility improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Houston GEO Process
            </h2>
            <p className="text-xl text-slate-600">
              A systematic approach to dominating AI search in Houston's competitive markets.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Houston Industries We Specialize In
            </h2>
            <p className="text-xl text-slate-600">
              We understand the unique competitive landscape of Houston's major industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {houstonIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <Building2 className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Houston Areas We Serve
            </h2>
            <p className="text-xl text-slate-600">
              From Downtown to The Woodlands, we optimize for all Greater Houston areas.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {houstonAreas.map((area) => (
              <span
                key={area}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 text-slate-600 text-sm">
            Plus all of Greater Houston: Cypress, Humble, Spring, Pasadena, and beyond.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Houston GEO FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-slate-200">
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
            Ready to Get Cited by AI in Houston?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            No pressure. Just a free audit showing exactly how visible your Houston business is when people ask AI for recommendations. See where you stand and what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-10 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Your Free Houston GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              className="h-14 px-10 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/services/geo-services">
                Learn More About GEO
              </Link>
            </Button>
          </div>
          
          {/* Internal Links */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Related Services:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/services/geo-services" className="text-white/80 hover:text-white text-sm underline">
                GEO Services Overview
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/services/ai-seo" className="text-white/80 hover:text-white text-sm underline">
                AI-Powered SEO
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/services/local-seo" className="text-white/80 hover:text-white text-sm underline">
                Local SEO Services
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/" className="text-white/80 hover:text-white text-sm underline">
                Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
