import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Star, BarChart, Brain } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Services San Diego | AI Search Optimization | Web Vello',
  description: 'Get your San Diego business found in ChatGPT, Perplexity, and Google SGE. Local GEO services for San Diego businesses to dominate AI search.',
  keywords: ['geo san diego', 'ai seo san diego', 'chatgpt optimization san diego', 'generative engine optimization san diego'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-san-diego',
  },
  openGraph: {
    title: 'GEO Services San Diego | AI Search Optimization',
    description: 'Get your San Diego business found in AI search results.',
    url: 'https://www.webvello.com/services/geo-san-diego',
    type: 'website',
  }
}

const industries = [
  { icon: Building2, name: "Biotech & Life Sciences", description: "San Diego's leading industry cluster" },
  { icon: TrendingUp, name: "Defense & Aerospace", description: "Major military and aerospace presence" },
  { icon: Users, name: "Tourism & Hospitality", description: "Hotels, restaurants, attractions" },
  { icon: Star, name: "Healthcare", description: "Medical practices and health systems" },
  { icon: BarChart, name: "Tech Startups", description: "Growing startup ecosystem" },
  { icon: Brain, name: "Professional Services", description: "Law firms, accountants, consultants" }
]

const neighborhoods = [
  "Downtown San Diego",
  "La Jolla",
  "Del Mar",
  "Coronado",
  "Pacific Beach",
  "Gaslamp Quarter",
  "Mission Valley",
  "North County",
  "East County",
  "South Bay"
]

const faqs = [
  {
    question: "Why does my San Diego business need GEO?",
    answer: "San Diego residents and tourists increasingly use AI to find local businesses. When someone asks ChatGPT 'best seafood restaurant in La Jolla' or 'top biotech companies in San Diego,' you want to be in that answer."
  },
  {
    question: "How is San Diego GEO different from general GEO?",
    answer: "San Diego GEO incorporates local context—neighborhoods like La Jolla and Gaslamp, local industries like biotech and defense, tourist considerations, and cross-border dynamics with Tijuana. We optimize for how people actually search in San Diego."
  },
  {
    question: "What industries benefit most from San Diego GEO?",
    answer: "Biotech, healthcare, tourism, real estate, and professional services see the biggest impact. These industries have high-value customers who research before buying—exactly who uses AI search."
  },
  {
    question: "How do you handle San Diego's tourism market?",
    answer: "We optimize for both resident and tourist queries. Tourists ask AI for recommendations constantly—restaurants, activities, services. We help you capture both local and visitor traffic."
  },
  {
    question: "Do you work with San Diego biotech companies?",
    answer: "Yes, biotech is a focus area. We understand how B2B decision-makers in life sciences use AI to research vendors, partners, and service providers. We optimize for technical and business queries."
  },
  {
    question: "What's the timeline for San Diego GEO results?",
    answer: "Initial visibility improvements typically appear within 4-8 weeks. For competitive San Diego markets like real estate or healthcare, full optimization may take 3-6 months for best results."
  }
]

export default function GEOSanDiegoPage() {
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
              <span className="text-white/80 text-sm">GEO Services in San Diego</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              GEO Services for{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                San Diego
              </span>{' '}
              Businesses
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When someone in San Diego asks AI "who's the best [your service] near me"—your business 
              should be the answer. We help San Diego businesses dominate AI search.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
                asChild
              >
                <Link href="/contact">
                  Get Free San Diego GEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">3.3M</p>
              <p className="text-slate-600 text-sm">San Diego County residents</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">35M+</p>
              <p className="text-slate-600 text-sm">Annual visitors</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">1,100+</p>
              <p className="text-slate-600 text-sm">Biotech companies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">#3</p>
              <p className="text-slate-600 text-sm">Largest biotech cluster</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              San Diego Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help businesses across San Diego's key industries get found in AI search.
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
              San Diego Areas We Cover
            </h2>
            <p className="text-xl text-slate-600">
              From La Jolla to Chula Vista, we optimize for all San Diego neighborhoods and communities.
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

      {/* What We Do */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our San Diego GEO Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local Entity Optimization</h3>
              <p className="text-slate-600 mb-6">Establish your business as a recognized San Diego entity in AI systems.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  LocalBusiness schema with San Diego address
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Neighborhood-specific content
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Local authority signals
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">San Diego Content Strategy</h3>
              <p className="text-slate-600 mb-6">Content that captures San Diego-specific queries and intent.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Local service pages
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  San Diego-focused FAQs
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Tourist and local intent targeting
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Review & Citation Building</h3>
              <p className="text-slate-600 mb-6">Strengthen your San Diego reputation signals for AI systems.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Google Business Profile optimization
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  San Diego directory citations
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Review generation strategy
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Competitive Positioning</h3>
              <p className="text-slate-600 mb-6">Stand out against San Diego competitors in AI recommendations.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Competitive gap analysis
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Differentiation content
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Market positioning optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              San Diego GEO FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
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
            Ready to dominate San Diego AI search?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your San Diego business. See exactly how visible you are 
            when locals ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free San Diego GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

