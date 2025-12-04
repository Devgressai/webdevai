import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Services Boston | AI Search Optimization Massachusetts | Web Vello',
  description: 'Get your Boston business found in ChatGPT, Perplexity, and Google SGE. Local GEO services for Boston metro, Cambridge, and greater Massachusetts.',
  keywords: ['geo boston', 'generative engine optimization boston', 'ai seo boston', 'chatgpt optimization massachusetts', 'perplexity optimization boston'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-boston',
  },
  openGraph: {
    title: 'GEO Services Boston | AI Search Optimization | Web Vello',
    description: 'Get found in AI search results in Boston. We optimize for ChatGPT, Perplexity, and Google SGE.',
    url: 'https://www.webvello.com/services/geo-boston',
    type: 'website',
  }
}

const bostonIndustries = [
  { name: "Education & EdTech", description: "Harvard, MIT, and 100+ colleges create a massive education sector" },
  { name: "Biotechnology", description: "World's leading biotech hub in Kendall Square and beyond" },
  { name: "Healthcare", description: "World-renowned hospitals and medical practices" },
  { name: "Financial Services", description: "Fidelity, State Street, and financial services hub" },
  { name: "Technology", description: "Growing tech ecosystem with major startups and tech companies" },
  { name: "Professional Services", description: "Consulting, legal, and business services" },
  { name: "Life Sciences", description: "Pharmaceutical and life sciences companies" },
  { name: "Tourism & Hospitality", description: "Hotels, restaurants, and tourism businesses" }
]

const bostonAreas = [
  "Downtown Boston", "Back Bay", "Beacon Hill", "South End",
  "Cambridge", "Somerville", "Brookline", "Newton",
  "Quincy", "Charlestown", "Seaport", "Financial District",
  "North End", "Jamaica Plain", "Allston", "Brighton"
]

const faqs = [
  {
    question: "How does GEO help my Boston business?",
    answer: "When someone asks ChatGPT 'best biotech PR firm in Boston' or asks Perplexity 'find a commercial real estate lawyer in Cambridge,' your business should be mentioned. GEO optimizes your online presence so AI systems recognize and recommend you in the Greater Boston market."
  },
  {
    question: "Do you serve the entire Boston metro area?",
    answer: "Yes. We serve businesses throughout Greater Boston—Boston proper, Cambridge, Somerville, Newton, Brookline, and the entire metro area. We create location-specific strategies across Suffolk, Middlesex, and Norfolk counties."
  },
  {
    question: "What makes Boston different for GEO?",
    answer: "Boston is a knowledge economy with the highest concentration of universities and research institutions in the country. Your audience is highly educated and tech-savvy, with early AI adoption. Competition in sectors like biotech, healthcare, and education is intense."
  },
  {
    question: "How long until I see AI visibility improvements?",
    answer: "For niche queries and specific neighborhoods, we typically see improvements in 4-8 weeks. Broader competitive terms take 3-6 months, especially in competitive sectors like biotech. We prioritize quick wins while building toward larger visibility goals."
  }
]

export default function GEOBostonPage() {
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
              <span className="text-white/80 text-sm">Serving Boston & Greater Massachusetts</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              GEO Services{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Boston
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Get your Boston business mentioned when customers ask AI for recommendations. 
              From Cambridge to Back Bay, we help businesses dominate AI search in New England.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Boston GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Boston Needs GEO */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Boston Businesses Need GEO
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Boston is a knowledge capital with world-leading universities, hospitals, and research 
                institutions. The highly educated population adopts AI tools quickly and uses them 
                for both personal and professional research.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                When someone asks AI "who's the best biotech marketing agency in Boston" or "find me a 
                good venture capital lawyer in Cambridge," the businesses that appear are winning. 
                Traditional SEO alone isn't enough in Boston's competitive knowledge economy.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">4.9M</p>
                  <p className="text-sm text-slate-600">Metro population</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">#1</p>
                  <p className="text-sm text-slate-600">Biotech hub</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">100+</p>
                  <p className="text-sm text-slate-600">Colleges/universities</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">$465B</p>
                  <p className="text-sm text-slate-600">Metro GDP</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Boston Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {bostonAreas.map((area) => (
                  <span key={area} className="px-4 py-2 bg-white rounded-full text-sm text-slate-700 border border-slate-200">
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-slate-600 text-sm">
                Plus all of Greater Boston: Worcester, Providence RI, and beyond.
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
              Boston Industries We Specialize In
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bostonIndustries.map((industry) => (
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
              Our Boston GEO Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200">
              <Zap className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Boston Entity Optimization</h3>
              <p className="text-slate-600 mb-6">
                We establish your business as a recognized entity in Boston. AI systems need to understand 
                who you are and which areas you serve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Boston-specific schema markup
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Multi-city targeting
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Academic/research positioning
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <Target className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Boston Content Strategy</h3>
              <p className="text-slate-600 mb-6">
                Content that positions you as the local Boston expert with pages for each neighborhood 
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
                  Boston FAQ content
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <TrendingUp className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Visibility Tracking</h3>
              <p className="text-slate-600 mb-6">
                Monitor when and how AI systems mention your Boston business and track progress.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Boston query monitoring
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
              Boston GEO FAQs
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
            Ready to dominate AI search in Boston?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your Boston business. See exactly how visible you are 
            in AI search and what opportunities exist.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Boston GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

