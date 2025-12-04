import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Star, Users, Zap, Target } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Services Los Angeles | AI Search Optimization Agency | Web Vello',
  description: 'Get your Los Angeles business found in ChatGPT, Perplexity, and Google SGE. Local GEO services that make AI recommend your business when LA customers search.',
  keywords: ['geo los angeles', 'generative engine optimization los angeles', 'ai seo los angeles', 'chatgpt optimization la', 'perplexity optimization los angeles'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-los-angeles',
  },
  openGraph: {
    title: 'GEO Services Los Angeles | AI Search Optimization | Web Vello',
    description: 'Get found in AI search results in Los Angeles. We optimize your business for ChatGPT, Perplexity, and Google SGE.',
    url: 'https://www.webvello.com/services/geo-los-angeles',
    type: 'website',
  }
}

const laIndustries = [
  { name: "Entertainment & Media", description: "Production companies, agencies, studios looking to be found when talent and partners search" },
  { name: "Tech & Startups", description: "Silicon Beach companies competing for visibility in AI-powered search" },
  { name: "Real Estate", description: "Agents and brokerages in competitive LA neighborhoods" },
  { name: "Legal Services", description: "Law firms in Beverly Hills, Downtown LA, Century City" },
  { name: "Healthcare", description: "Medical practices, specialists, and clinics across LA County" },
  { name: "Home Services", description: "Contractors, HVAC, plumbers serving LA's diverse neighborhoods" },
  { name: "Restaurants & Hospitality", description: "Restaurants, hotels, and venues looking for AI visibility" },
  { name: "Automotive", description: "Dealerships and auto services in the car capital of America" }
]

const laAreas = [
  "Downtown LA", "Beverly Hills", "Santa Monica", "Hollywood", 
  "West Hollywood", "Pasadena", "Glendale", "Burbank",
  "Long Beach", "Venice", "Malibu", "Culver City",
  "Century City", "Brentwood", "Westwood", "Sherman Oaks"
]

const faqs = [
  {
    question: "How does GEO help my Los Angeles business?",
    answer: "When someone in LA asks ChatGPT 'best dentist in Beverly Hills' or tells Perplexity 'find a plumber near me in Santa Monica,' your business should be mentioned. GEO optimizes your online presence so AI systems recognize and recommend you for relevant local queries. This is increasingly how LA residents find local services."
  },
  {
    question: "Do you work with businesses throughout LA County?",
    answer: "Yes. We serve businesses throughout Los Angeles County, from Downtown LA to the Westside, the Valley to the South Bay. We create location-specific content and optimization strategies for your service areas, whether you serve one neighborhood or all of LA."
  },
  {
    question: "What makes LA different for GEO?",
    answer: "Los Angeles is highly competitive with tech-savvy consumers who adopt AI tools quickly. The entertainment and tech industries mean your audience is more likely to use AI for search. LA also has distinct neighborhoods with different search behaviors—we optimize for this local complexity."
  },
  {
    question: "How long until I see AI visibility improvements in LA?",
    answer: "For niche queries and specific LA neighborhoods, we often see improvements in 4-8 weeks. Broader, competitive terms like 'best restaurant in LA' take 3-6 months. We focus on quick wins in your specific area first while building toward bigger targets."
  },
  {
    question: "Can you help with both GEO and traditional local SEO?",
    answer: "Absolutely. We recommend combining GEO with traditional local SEO for maximum visibility. We'll optimize your Google Business Profile, build local citations, and create location-specific content while also ensuring AI systems cite your business."
  }
]

export default function GEOLosAngelesPage() {
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
              <span className="text-white/80 text-sm">Serving Los Angeles & LA County</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              GEO Services{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Los Angeles
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Get your LA business mentioned when customers ask AI for recommendations. 
              From Beverly Hills to Long Beach, we help Los Angeles businesses dominate AI search results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
                asChild
              >
                <Link href="/contact">
                  Get Free LA GEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why LA Needs GEO */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Los Angeles Businesses Need GEO
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Los Angeles is one of the most competitive markets in the country. With a tech-savvy 
                population and early adoption of AI tools, LA residents are increasingly using ChatGPT, 
                Perplexity, and Google's AI features to find local businesses.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                When someone asks AI "who's the best personal injury lawyer in Los Angeles" or 
                "find me a good HVAC company in the Valley," the businesses that appear are the 
                ones winning the new search game. Traditional SEO alone isn't enough anymore.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">4M+</p>
                  <p className="text-sm text-slate-600">LA residents</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">68%</p>
                  <p className="text-sm text-slate-600">Use AI weekly</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">$850B</p>
                  <p className="text-sm text-slate-600">Metro GDP</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">#2</p>
                  <p className="text-sm text-slate-600">US tech hub</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">LA Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {laAreas.map((area) => (
                  <span key={area} className="px-4 py-2 bg-white rounded-full text-sm text-slate-700 border border-slate-200">
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-slate-600 text-sm">
                Plus all of LA County: Southbay, San Gabriel Valley, Antelope Valley, and more.
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
              LA Industries We Specialize In
            </h2>
            <p className="text-xl text-slate-600">
              We understand the unique competitive landscape of Los Angeles industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {laIndustries.map((industry) => (
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
              Our LA GEO Services
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to dominate AI search in Los Angeles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200">
              <Zap className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local Entity Optimization</h3>
              <p className="text-slate-600 mb-6">
                We establish your business as a recognized entity in Los Angeles. AI systems need to understand 
                who you are, what you do, and where you serve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  LA-specific schema markup
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Neighborhood targeting
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Local authority building
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <Target className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">LA Content Strategy</h3>
              <p className="text-slate-600 mb-6">
                Content that positions you as the local expert. We create location-specific pages 
                and content clusters that AI systems cite when LA users search.
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
                  LA-focused FAQ content
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <TrendingUp className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Visibility Tracking</h3>
              <p className="text-slate-600 mb-6">
                Monitor when and how AI systems mention your LA business. See your progress 
                and identify new opportunities in the LA market.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  LA query monitoring
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
              Los Angeles GEO FAQs
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
            Ready to dominate AI search in Los Angeles?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your LA business. See exactly how visible you are 
            in AI search and what opportunities exist in your market.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free LA GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

