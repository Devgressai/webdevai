import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Services Chicago | AI Search Optimization | Web Vello',
  description: 'Get your Chicago business found in ChatGPT, Perplexity, and Google SGE. Local GEO services for the Loop, North Side, South Side, and greater Chicagoland.',
  keywords: ['geo chicago', 'generative engine optimization chicago', 'ai seo chicago', 'chatgpt optimization chicago', 'perplexity optimization chicago'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-chicago',
  },
  openGraph: {
    title: 'GEO Services Chicago | AI Search Optimization | Web Vello',
    description: 'Get found in AI search results in Chicago. We optimize your business for ChatGPT, Perplexity, and Google SGE.',
    url: 'https://www.webvello.com/services/geo-chicago',
    type: 'website',
  }
}

const chicagoIndustries = [
  { name: "Financial Services", description: "Banks, trading firms, fintech in the Midwest financial hub" },
  { name: "Manufacturing", description: "Industrial businesses and B2B manufacturers" },
  { name: "Legal Services", description: "Law firms from LaSalle Street to the suburbs" },
  { name: "Healthcare", description: "Medical practices, hospitals, specialists across Cook County" },
  { name: "Real Estate", description: "Agents and brokerages in Chicago's diverse neighborhoods" },
  { name: "Food & Hospitality", description: "Restaurants, hotels, and venues in the food city" },
  { name: "Technology", description: "Tech companies and startups in Chicago's growing tech scene" },
  { name: "Transportation & Logistics", description: "Shipping, trucking, and logistics companies" }
]

const chicagoAreas = [
  "The Loop", "River North", "Lincoln Park", "Wicker Park",
  "Lakeview", "Gold Coast", "Old Town", "Wrigleyville",
  "Hyde Park", "Pilsen", "Logan Square", "Bucktown",
  "West Loop", "South Loop", "Streeterville", "Magnificent Mile"
]

const faqs = [
  {
    question: "How does GEO help my Chicago business?",
    answer: "When someone asks ChatGPT 'best deep dish pizza in Chicago' or asks Perplexity 'find a commercial real estate lawyer near me,' your business should be mentioned. GEO optimizes your online presence so AI systems recognize and recommend you for relevant local queries in the Chicago market."
  },
  {
    question: "Do you work with businesses throughout Chicagoland?",
    answer: "Yes. We serve businesses throughout the Chicago metro area—from the Loop to the suburbs, North Side to South Side. We also work with businesses in the collar counties: DuPage, Lake, Will, Kane, and McHenry. We create location-specific strategies for your service areas."
  },
  {
    question: "What makes Chicago different for GEO?",
    answer: "Chicago is the business hub of the Midwest with strong B2B and professional services sectors. The neighborhood-specific nature of Chicago means hyper-local GEO strategies are essential. We understand Chicago's diverse business landscape and optimize accordingly."
  },
  {
    question: "How long until I see AI visibility improvements in Chicago?",
    answer: "For niche queries and specific neighborhoods, we typically see improvements in 4-8 weeks. Broader competitive terms take 3-6 months. We prioritize quick wins in your specific area while building toward larger visibility goals."
  }
]

export default function GEOChicagoPage() {
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
              <span className="text-white/80 text-sm">Serving Chicago & Chicagoland</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              GEO Services{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Chicago
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Get your Chicago business mentioned when customers ask AI for recommendations. 
              From the Loop to the suburbs, we help Chicagoland businesses dominate AI search results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
                asChild
              >
                <Link href="/contact">
                  Get Free Chicago GEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chicago Needs GEO */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Chicago Businesses Need GEO
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Chicago is the business capital of the Midwest with 2.7 million residents and a 
                metro area of nearly 10 million. As the third-largest city in the US, competition 
                for visibility is intense. AI search is changing how Chicagoans find businesses.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                When someone asks AI "who's the best employment lawyer in Chicago" or "find me a 
                good Italian restaurant in River North," the businesses that appear are winning the 
                customers. Traditional SEO alone isn't enough anymore.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">2.7M</p>
                  <p className="text-sm text-slate-600">Chicago residents</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">9.5M</p>
                  <p className="text-sm text-slate-600">Metro population</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">$770B</p>
                  <p className="text-sm text-slate-600">Metro GDP</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">#3</p>
                  <p className="text-sm text-slate-600">US city by population</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Chicago Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {chicagoAreas.map((area) => (
                  <span key={area} className="px-4 py-2 bg-white rounded-full text-sm text-slate-700 border border-slate-200">
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-slate-600 text-sm">
                Plus all collar counties: Naperville, Evanston, Schaumburg, Oak Brook, and beyond.
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
              Chicago Industries We Specialize In
            </h2>
            <p className="text-xl text-slate-600">
              We understand the unique competitive landscape of Chicago industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chicagoIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <Building2 className="w-8 h-8 text-rose-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Chicago GEO Services
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to dominate AI search in Chicago.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200">
              <Zap className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Chicago Entity Optimization</h3>
              <p className="text-slate-600 mb-6">
                We establish your business as a recognized entity in Chicago. AI systems need to understand 
                who you are, what you do, and which neighborhoods you serve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Chicago-specific schema markup
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Chicago Content Strategy</h3>
              <p className="text-slate-600 mb-6">
                Content that positions you as the local Chicago expert. We create location-specific pages 
                and content clusters that AI systems cite when Chicagoans search.
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
                  Chicago-focused FAQ content
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <TrendingUp className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Visibility Tracking</h3>
              <p className="text-slate-600 mb-6">
                Monitor when and how AI systems mention your Chicago business. See your progress 
                and identify new opportunities in the Chicagoland market.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Chicago query monitoring
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
              Chicago GEO FAQs
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
            Ready to dominate AI search in Chicago?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your Chicago business. See exactly how visible you are 
            in AI search and what opportunities exist in your market.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Chicago GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

