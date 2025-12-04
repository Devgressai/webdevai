import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Star, BarChart, Brain, Leaf } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Services Portland | AI Search Optimization | Web Vello',
  description: 'Get your Portland business found in ChatGPT, Perplexity, and Google SGE. Local GEO services for Portland businesses to dominate AI search.',
  keywords: ['geo portland', 'ai seo portland', 'chatgpt optimization portland', 'generative engine optimization portland'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-portland',
  },
  openGraph: {
    title: 'GEO Services Portland | AI Search Optimization',
    description: 'Get your Portland business found in AI search results.',
    url: 'https://www.webvello.com/services/geo-portland',
    type: 'website',
  }
}

const industries = [
  { icon: Building2, name: "Tech & Software", description: "Portland's growing tech scene" },
  { icon: Leaf, name: "Sustainable Business", description: "Eco-friendly and green businesses" },
  { icon: TrendingUp, name: "Creative Services", description: "Design, marketing, creative agencies" },
  { icon: Users, name: "Food & Beverage", description: "Restaurants, breweries, coffee" },
  { icon: Star, name: "Outdoor & Active", description: "Outdoor recreation and sports" },
  { icon: Brain, name: "Professional Services", description: "Law firms, accountants, consultants" }
]

const neighborhoods = [
  "Downtown Portland",
  "Pearl District",
  "Alberta Arts District",
  "Hawthorne",
  "Division Street",
  "Northwest Portland",
  "Sellwood",
  "Beaverton",
  "Lake Oswego",
  "Hillsboro"
]

const faqs = [
  {
    question: "Why does my Portland business need GEO?",
    answer: "Portland residents are early tech adopters and heavy AI users. When someone asks ChatGPT 'best coffee roaster in Portland' or 'sustainable business consultant near me,' you want to be in that answer."
  },
  {
    question: "How is Portland GEO different from general GEO?",
    answer: "Portland GEO incorporates local context—neighborhoods like the Pearl District and Alberta Arts, the sustainability focus, the food and creative culture, and how Portland residents actually search."
  },
  {
    question: "What industries benefit most from Portland GEO?",
    answer: "Tech startups, sustainable businesses, creative agencies, food and beverage, and professional services see the biggest impact. Portland's tech-savvy population uses AI search heavily."
  },
  {
    question: "Do you work with Portland tech companies?",
    answer: "Yes. We understand Portland's tech ecosystem and how startups, agencies, and tech businesses can leverage GEO to attract customers and talent."
  },
  {
    question: "How do you handle Portland's unique culture?",
    answer: "Portland has a distinct identity. We optimize for queries that reflect Portland values—sustainability, local focus, quality over scale, and authentic business practices."
  },
  {
    question: "What's the timeline for Portland GEO results?",
    answer: "Initial visibility improvements typically appear within 4-8 weeks. For competitive Portland markets like food or creative services, full optimization may take 3-6 months."
  }
]

export default function GEOPortlandPage() {
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
              <span className="text-white/80 text-sm">GEO Services in Portland</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              GEO Services for{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Portland
              </span>{' '}
              Businesses
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Portland's tech-savvy population uses AI search daily. When they ask for 
              recommendations, your business should be the answer.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Portland GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">2.5M+</p>
              <p className="text-slate-600 text-sm">Portland metro population</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">#1</p>
              <p className="text-slate-600 text-sm">Most sustainable US city</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">1,400+</p>
              <p className="text-slate-600 text-sm">Tech companies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">Top 5</p>
              <p className="text-slate-600 text-sm">Best cities for startups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Portland Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help businesses across Portland's key industries get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <industry.icon className="w-10 h-10 text-rose-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Portland Areas We Cover
            </h2>
            <p className="text-xl text-slate-600">
              From the Pearl District to Beaverton, we optimize for all Portland neighborhoods.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {neighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Portland GEO FAQs
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
            Ready to dominate Portland AI search?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your Portland business. See exactly how visible you are 
            when locals ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Portland GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

