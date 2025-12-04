import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Services Houston | AI Search Optimization Texas | Web Vello',
  description: 'Get your Houston business found in ChatGPT, Perplexity, and Google SGE. Local GEO services for the Energy Capital serving Houston and greater Harris County.',
  keywords: ['geo houston', 'generative engine optimization houston', 'ai seo houston', 'chatgpt optimization houston texas', 'perplexity optimization houston'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-houston',
  },
  openGraph: {
    title: 'GEO Services Houston | AI Search Optimization | Web Vello',
    description: 'Get found in AI search results in Houston. We optimize your business for ChatGPT, Perplexity, and Google SGE.',
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

const faqs = [
  {
    question: "How does GEO help my Houston business?",
    answer: "When someone asks ChatGPT 'best oil and gas lawyer in Houston' or asks Perplexity 'find an HVAC company near me in The Woodlands,' your business should be mentioned. GEO optimizes your online presence so AI systems recognize and recommend you for relevant queries in the Houston market."
  },
  {
    question: "Do you work with businesses throughout Greater Houston?",
    answer: "Yes. We serve businesses throughout the Houston metro area—from Downtown to the suburbs. We work with businesses in Harris County, Fort Bend, Montgomery, Brazoria, and Galveston counties. We create location-specific strategies for your service areas."
  },
  {
    question: "What makes Houston different for GEO?",
    answer: "Houston is the energy capital of the world and home to the Texas Medical Center, the largest medical complex globally. B2B industries and professional services dominate, and these sectors are rapidly adopting AI search tools. We understand Houston's unique business landscape."
  },
  {
    question: "How long until I see AI visibility improvements in Houston?",
    answer: "For niche queries and specific areas, we typically see improvements in 4-8 weeks. Broader competitive terms take 3-6 months. We prioritize quick wins in your specific service area while building toward larger visibility goals."
  }
]

export default function GEOHoustonPage() {
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
              <span className="text-white/80 text-sm">Serving Houston & Greater Houston Area</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              GEO Services{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Houston
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Get your Houston business mentioned when customers ask AI for recommendations. 
              From the Energy Corridor to the Medical Center, we help Houston businesses dominate AI search.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
                asChild
              >
                <Link href="/contact">
                  Get Free Houston GEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Houston Needs GEO */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Houston Businesses Need GEO
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Houston is the fourth-largest city in the US with 2.3 million residents and a 
                metro area of over 7 million. As the energy capital of the world and home to the 
                Texas Medical Center, Houston is a hub for B2B and professional services.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                When someone asks AI "who's the best maritime lawyer in Houston" or "find me a 
                good commercial contractor near the Energy Corridor," the businesses that appear 
                are winning customers. Traditional SEO alone isn't enough in Houston's competitive market.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">2.3M</p>
                  <p className="text-sm text-slate-600">Houston residents</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">7.1M</p>
                  <p className="text-sm text-slate-600">Metro population</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">$512B</p>
                  <p className="text-sm text-slate-600">Metro GDP</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">#4</p>
                  <p className="text-sm text-slate-600">US city by population</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Houston Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {houstonAreas.map((area) => (
                  <span key={area} className="px-4 py-2 bg-white rounded-full text-sm text-slate-700 border border-slate-200">
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-slate-600 text-sm">
                Plus all of Greater Houston: Cypress, Humble, Spring, Pasadena, and beyond.
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
              Houston Industries We Specialize In
            </h2>
            <p className="text-xl text-slate-600">
              We understand the unique competitive landscape of Houston industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {houstonIndustries.map((industry) => (
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
              Our Houston GEO Services
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to dominate AI search in Houston.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200">
              <Zap className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Houston Entity Optimization</h3>
              <p className="text-slate-600 mb-6">
                We establish your business as a recognized entity in Houston. AI systems need to understand 
                who you are, what you do, and which areas you serve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Houston-specific schema markup
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Service area targeting
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Local authority building
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <Target className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Houston Content Strategy</h3>
              <p className="text-slate-600 mb-6">
                Content that positions you as the local Houston expert. We create location-specific pages 
                and content clusters that AI systems cite.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Area landing pages
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Local topic clusters
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Houston-focused FAQ content
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <TrendingUp className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Visibility Tracking</h3>
              <p className="text-slate-600 mb-6">
                Monitor when and how AI systems mention your Houston business. See your progress 
                and identify new opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Houston query monitoring
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
              Houston GEO FAQs
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
            Ready to dominate AI search in Houston?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your Houston business. See exactly how visible you are 
            in AI search and what opportunities exist in your market.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Houston GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

