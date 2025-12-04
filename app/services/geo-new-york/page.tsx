import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Services New York | AI Search Optimization NYC | Web Vello',
  description: 'Get your NYC business found in ChatGPT, Perplexity, and Google SGE. Local GEO services for Manhattan, Brooklyn, Queens, and all NYC boroughs.',
  keywords: ['geo new york', 'generative engine optimization nyc', 'ai seo new york', 'chatgpt optimization nyc', 'perplexity optimization new york'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-new-york',
  },
  openGraph: {
    title: 'GEO Services New York | AI Search Optimization | Web Vello',
    description: 'Get found in AI search results in New York City. We optimize your business for ChatGPT, Perplexity, and Google SGE.',
    url: 'https://www.webvello.com/services/geo-new-york',
    type: 'website',
  }
}

const nycIndustries = [
  { name: "Financial Services", description: "Banks, investment firms, fintech companies in the financial capital" },
  { name: "Legal Services", description: "Law firms from boutique to BigLaw, all practice areas" },
  { name: "Real Estate", description: "Agents, brokerages, property managers in NYC's competitive market" },
  { name: "Healthcare", description: "Medical practices, specialists, clinics across the five boroughs" },
  { name: "Professional Services", description: "Consulting, accounting, and business services" },
  { name: "Restaurants & Hospitality", description: "Restaurants, hotels, and venues in the food capital" },
  { name: "Tech & Startups", description: "Silicon Alley companies and tech firms" },
  { name: "Retail & E-commerce", description: "Stores and D2C brands based in NYC" }
]

const nycAreas = [
  "Manhattan", "Brooklyn", "Queens", "The Bronx",
  "Staten Island", "Midtown", "SoHo", "Tribeca",
  "Chelsea", "Upper East Side", "Upper West Side", "Financial District",
  "Williamsburg", "DUMBO", "Long Island City", "Harlem"
]

const faqs = [
  {
    question: "How does GEO help my New York City business?",
    answer: "When someone asks ChatGPT 'best Italian restaurant in SoHo' or asks Perplexity 'find a CPA near me in Manhattan,' AI systems need to mention your business. GEO optimizes your online presence so AI recognizes and recommends you. With NYC's competitive market and tech-savvy population, AI search visibility is becoming critical."
  },
  {
    question: "Do you work with businesses in all five boroughs?",
    answer: "Yes. We serve businesses throughout NYC—Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. We also work with businesses in the greater metro area including Long Island, Westchester, and New Jersey. We create location-specific strategies for your service areas."
  },
  {
    question: "What makes NYC different for GEO?",
    answer: "New York is the most competitive business market in the country with the highest density of sophisticated consumers. NYC residents adopt AI tools quickly and expect to find quality local businesses through these platforms. The neighborhood-specific nature of NYC search requires hyper-local GEO strategies."
  },
  {
    question: "How long until I see results in the NYC market?",
    answer: "For niche queries and specific neighborhoods, we typically see improvements in 4-8 weeks. Broader competitive terms take 3-6 months due to NYC's high competition. We prioritize quick wins in your specific borough or neighborhood while building toward larger visibility goals."
  },
  {
    question: "Can you help with both GEO and traditional local SEO?",
    answer: "Absolutely. We recommend combining GEO with traditional local SEO for maximum visibility in NYC. We optimize your Google Business Profile, build local citations, manage reviews, and create location-specific content while ensuring AI systems cite your business."
  }
]

export default function GEONewYorkPage() {
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
              <MapPin className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">Serving NYC & Greater Metro Area</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              GEO Services{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                New York City
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Get your NYC business mentioned when customers ask AI for recommendations. 
              From Manhattan to Brooklyn, we help New York businesses dominate AI search results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
                asChild
              >
                <Link href="/contact">
                  Get Free NYC GEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why NYC Needs GEO */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why New York Businesses Need GEO
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                New York City is the most competitive business market in the world. With 8.8 million 
                residents and millions of daily visitors, NYC businesses face unprecedented competition 
                for visibility. AI search is the new battleground.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                When someone asks AI "who's the best employment lawyer in Manhattan" or "find me a 
                good Thai restaurant in Williamsburg," the businesses that appear are winning the 
                customers. Traditional SEO alone isn't enough in NYC anymore.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">8.8M</p>
                  <p className="text-sm text-slate-600">NYC residents</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">72%</p>
                  <p className="text-sm text-slate-600">Use AI weekly</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">$1.8T</p>
                  <p className="text-sm text-slate-600">Metro GDP</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">#1</p>
                  <p className="text-sm text-slate-600">US business hub</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">NYC Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {nycAreas.map((area) => (
                  <span key={area} className="px-4 py-2 bg-white rounded-full text-sm text-slate-700 border border-slate-200">
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-slate-600 text-sm">
                Plus the greater metro: Long Island, Westchester, Northern NJ, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              NYC Industries We Specialize In
            </h2>
            <p className="text-xl text-slate-600">
              We understand the unique competitive landscape of New York industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nycIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <Building2 className="w-8 h-8 text-rose-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our NYC GEO Services
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to dominate AI search in New York City.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200">
              <Zap className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">NYC Entity Optimization</h3>
              <p className="text-slate-600 mb-6">
                We establish your business as a recognized entity in New York. AI systems need to understand 
                who you are, what you do, and which boroughs you serve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  NYC-specific schema markup
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Borough & neighborhood targeting
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Local authority building
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <Target className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">NYC Content Strategy</h3>
              <p className="text-slate-600 mb-6">
                Content that positions you as the local NYC expert. We create location-specific pages 
                and content clusters that AI systems cite when New Yorkers search.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Neighborhood landing pages
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Local topic clusters
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  NYC-focused FAQ content
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <TrendingUp className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Visibility Tracking</h3>
              <p className="text-slate-600 mb-6">
                Monitor when and how AI systems mention your NYC business. See your progress 
                and identify new opportunities in the New York market.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  NYC query monitoring
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Competitor analysis
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Monthly reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              New York GEO FAQs
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
            Ready to dominate AI search in New York?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your NYC business. See exactly how visible you are 
            in AI search and what opportunities exist in your market.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free NYC GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

