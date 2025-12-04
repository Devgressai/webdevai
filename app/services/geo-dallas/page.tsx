import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Services Dallas | AI Search Optimization DFW | Web Vello',
  description: 'Get your Dallas business found in ChatGPT, Perplexity, and Google SGE. Local GEO services for Dallas-Fort Worth metroplex.',
  keywords: ['geo dallas', 'generative engine optimization dallas', 'ai seo dallas', 'chatgpt optimization dfw', 'perplexity optimization dallas'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-dallas',
  },
  openGraph: {
    title: 'GEO Services Dallas | AI Search Optimization | Web Vello',
    description: 'Get found in AI search results in Dallas. We optimize for ChatGPT, Perplexity, and Google SGE.',
    url: 'https://www.webvello.com/services/geo-dallas',
    type: 'website',
  }
}

const dallasIndustries = [
  { name: "Technology", description: "Growing tech hub with major corporate relocations" },
  { name: "Finance & Banking", description: "Major banking and financial services center" },
  { name: "Healthcare", description: "Medical practices and healthcare systems" },
  { name: "Real Estate", description: "One of the fastest-growing real estate markets" },
  { name: "Professional Services", description: "Consulting, legal, and accounting firms" },
  { name: "Telecommunications", description: "AT&T headquarters and telecom industry" },
  { name: "Retail & E-commerce", description: "Major retail headquarters and D2C brands" },
  { name: "Transportation & Logistics", description: "Major logistics hub for the Southwest" }
]

const dallasAreas = [
  "Downtown Dallas", "Uptown", "Deep Ellum", "Highland Park",
  "University Park", "Plano", "Frisco", "Irving",
  "Fort Worth", "Arlington", "Richardson", "Addison",
  "Las Colinas", "McKinney", "Allen", "Garland"
]

const faqs = [
  {
    question: "How does GEO help my Dallas business?",
    answer: "When someone asks ChatGPT 'best financial advisor in Dallas' or asks Perplexity 'find a commercial real estate broker in Plano,' your business should be mentioned. GEO optimizes your online presence so AI systems recognize and recommend you for queries in the DFW market."
  },
  {
    question: "Do you serve the entire DFW metroplex?",
    answer: "Yes. We serve businesses throughout Dallas-Fort Worth—from Downtown Dallas to Fort Worth, Plano to Arlington. We create location-specific strategies for your service areas across all DFW counties including Dallas, Tarrant, Collin, and Denton."
  },
  {
    question: "What makes Dallas-Fort Worth different for GEO?",
    answer: "DFW is the fourth-largest metro in the US and one of the fastest-growing. The influx of corporate relocations and tech companies means a tech-savvy population increasingly using AI for search. Competition is growing, making early GEO adoption valuable."
  },
  {
    question: "How long until I see AI visibility improvements?",
    answer: "For niche queries and specific cities within DFW, we typically see improvements in 4-8 weeks. Broader competitive terms take 3-6 months. We prioritize quick wins in your specific area while building toward larger visibility goals."
  }
]

export default function GEODallasPage() {
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
              <span className="text-white/80 text-sm">Serving Dallas-Fort Worth Metroplex</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              GEO Services{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Dallas
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Get your DFW business mentioned when customers ask AI for recommendations. 
              From Dallas to Fort Worth, Plano to Arlington, we help businesses dominate AI search.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Dallas GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Dallas Needs GEO */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Dallas-Fort Worth Businesses Need GEO
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                The Dallas-Fort Worth metroplex is the fourth-largest metro area in the US with 
                over 7.5 million people. It's one of the fastest-growing regions, with major 
                corporate relocations bringing tech-savvy consumers and businesses.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                When someone asks AI "who's the best tax attorney in Dallas" or "find me a 
                good IT company in Plano," the businesses that appear are winning customers. 
                Traditional SEO alone isn't enough in DFW's competitive market.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">7.5M</p>
                  <p className="text-sm text-slate-600">Metro population</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">#4</p>
                  <p className="text-sm text-slate-600">US metro area</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">$600B</p>
                  <p className="text-sm text-slate-600">Metro GDP</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">24</p>
                  <p className="text-sm text-slate-600">Fortune 500 HQs</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">DFW Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {dallasAreas.map((area) => (
                  <span key={area} className="px-4 py-2 bg-white rounded-full text-sm text-slate-700 border border-slate-200">
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-slate-600 text-sm">
                Plus all of DFW: Denton, Rockwall, Southlake, Grapevine, and beyond.
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
              Dallas Industries We Specialize In
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dallasIndustries.map((industry) => (
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
              Our Dallas GEO Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200">
              <Zap className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">DFW Entity Optimization</h3>
              <p className="text-slate-600 mb-6">
                We establish your business as a recognized entity in DFW. AI systems need to understand 
                who you are and which cities you serve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  DFW-specific schema markup
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Multi-city targeting
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Local authority building
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <Target className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">DFW Content Strategy</h3>
              <p className="text-slate-600 mb-6">
                Content that positions you as the local DFW expert with pages for each city 
                and suburb you serve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  City landing pages
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Local topic clusters
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  DFW-focused FAQ content
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <TrendingUp className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Visibility Tracking</h3>
              <p className="text-slate-600 mb-6">
                Monitor when and how AI systems mention your DFW business and track progress 
                over time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  DFW query monitoring
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
              Dallas GEO FAQs
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
            Ready to dominate AI search in Dallas?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your DFW business. See exactly how visible you are 
            in AI search and what opportunities exist.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Dallas GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

