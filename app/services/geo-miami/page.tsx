import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Services Miami | AI Search Optimization Florida | Web Vello',
  description: 'Get your Miami business found in ChatGPT, Perplexity, and Google SGE. Local GEO services for Miami, Fort Lauderdale, and South Florida.',
  keywords: ['geo miami', 'generative engine optimization miami', 'ai seo miami', 'chatgpt optimization florida', 'perplexity optimization miami'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-miami',
  },
  openGraph: {
    title: 'GEO Services Miami | AI Search Optimization | Web Vello',
    description: 'Get found in AI search results in Miami. We optimize for ChatGPT, Perplexity, and Google SGE.',
    url: 'https://www.webvello.com/services/geo-miami',
    type: 'website',
  }
}

const miamiIndustries = [
  { name: "Real Estate", description: "One of the hottest real estate markets in the US" },
  { name: "Finance & Banking", description: "Growing financial hub with international presence" },
  { name: "Tourism & Hospitality", description: "Hotels, restaurants, and tourism businesses" },
  { name: "Technology", description: "Emerging tech hub with startup ecosystem" },
  { name: "Healthcare", description: "Major hospital systems and medical practices" },
  { name: "Maritime & Trade", description: "Port of Miami and international trade" },
  { name: "Legal Services", description: "Law firms specializing in immigration, real estate, and more" },
  { name: "Cryptocurrency", description: "Growing crypto and fintech scene" }
]

const miamiAreas = [
  "Downtown Miami", "Brickell", "Miami Beach", "South Beach",
  "Wynwood", "Coral Gables", "Coconut Grove", "Design District",
  "Fort Lauderdale", "Hollywood", "Aventura", "Doral",
  "Key Biscayne", "Kendall", "Miami Lakes", "Sunny Isles"
]

const faqs = [
  {
    question: "How does GEO help my Miami business?",
    answer: "When someone asks ChatGPT 'best real estate agent in Miami' or asks Perplexity 'find an immigration lawyer in Brickell,' your business should be mentioned. GEO optimizes your online presence so AI systems recognize and recommend you in the South Florida market."
  },
  {
    question: "Do you serve all of South Florida?",
    answer: "Yes. We serve businesses throughout South Florida—Miami-Dade, Broward, and Palm Beach counties. We create location-specific strategies for Miami, Fort Lauderdale, West Palm Beach, and surrounding areas."
  },
  {
    question: "What makes Miami different for GEO?",
    answer: "Miami is a major international gateway with diverse, multilingual markets. The city's rapid growth in tech, finance, and real estate means businesses need to stand out across multiple competitive sectors. Many queries come in both English and Spanish."
  },
  {
    question: "How long until I see AI visibility improvements?",
    answer: "For niche queries and specific neighborhoods, we typically see improvements in 4-8 weeks. Broader competitive terms take 3-6 months. We prioritize quick wins while building toward larger visibility goals."
  }
]

export default function GEOMiamiPage() {
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
              <span className="text-white/80 text-sm">Serving Miami & South Florida</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              GEO Services{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Miami
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Get your South Florida business mentioned when customers ask AI for recommendations. 
              From Brickell to Fort Lauderdale, we help businesses dominate AI search.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Miami GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Miami Needs GEO */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Miami Businesses Need GEO
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Miami is one of the fastest-growing metros in the US with a diverse, international 
                population of over 6 million. The city's emergence as a tech and finance hub brings 
                early AI adoption from both residents and visitors.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                When someone asks AI "who's the best luxury real estate agent in Miami Beach" or 
                "find me a good yacht broker in Fort Lauderdale," the businesses that appear 
                are winning. Traditional SEO alone isn't enough.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">6.2M</p>
                  <p className="text-sm text-slate-600">Metro population</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">#7</p>
                  <p className="text-sm text-slate-600">US metro area</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">$380B</p>
                  <p className="text-sm text-slate-600">Metro GDP</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">#1</p>
                  <p className="text-sm text-slate-600">LatAm gateway</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Miami Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {miamiAreas.map((area) => (
                  <span key={area} className="px-4 py-2 bg-white rounded-full text-sm text-slate-700 border border-slate-200">
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-slate-600 text-sm">
                Plus all of South Florida: West Palm Beach, Boca Raton, and beyond.
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
              Miami Industries We Specialize In
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {miamiIndustries.map((industry) => (
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
              Our Miami GEO Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200">
              <Zap className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Miami Entity Optimization</h3>
              <p className="text-slate-600 mb-6">
                We establish your business as a recognized entity in Miami. AI systems need to understand 
                who you are and which areas you serve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Miami-specific schema markup
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Multi-city targeting
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Bilingual optimization
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <Target className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Miami Content Strategy</h3>
              <p className="text-slate-600 mb-6">
                Content that positions you as the local Miami expert with pages for each neighborhood 
                and city you serve.
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
                  Miami FAQ content
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <TrendingUp className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Visibility Tracking</h3>
              <p className="text-slate-600 mb-6">
                Monitor when and how AI systems mention your Miami business and track progress.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Miami query monitoring
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
              Miami GEO FAQs
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
            Ready to dominate AI search in Miami?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your Miami business. See exactly how visible you are 
            in AI search and what opportunities exist.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Miami GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

