import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Services San Francisco | AI Search Optimization Bay Area | Web Vello',
  description: 'Get your San Francisco business found in ChatGPT, Perplexity, and Google SGE. Local GEO services for SF, Silicon Valley, and the Bay Area.',
  keywords: ['geo san francisco', 'generative engine optimization sf', 'ai seo san francisco', 'chatgpt optimization bay area', 'perplexity optimization sf'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-san-francisco',
  },
  openGraph: {
    title: 'GEO Services San Francisco | AI Search Optimization | Web Vello',
    description: 'Get found in AI search results in San Francisco. We optimize for ChatGPT, Perplexity, and Google SGE.',
    url: 'https://www.webvello.com/services/geo-san-francisco',
    type: 'website',
  }
}

const sfIndustries = [
  { name: "Technology & SaaS", description: "Tech companies, startups, and SaaS businesses" },
  { name: "Financial Services", description: "Fintech, venture capital, and financial services" },
  { name: "Biotechnology", description: "Biotech companies and life sciences" },
  { name: "Professional Services", description: "Consulting, legal, and business services" },
  { name: "Real Estate", description: "Commercial and residential real estate" },
  { name: "Creative & Design", description: "Agencies, studios, and creative services" },
  { name: "Healthcare", description: "Medical practices and healthcare tech" },
  { name: "Hospitality & Tourism", description: "Hotels, restaurants, and tourism businesses" }
]

const sfAreas = [
  "SOMA", "Financial District", "Mission District", "Marina",
  "Pacific Heights", "Nob Hill", "Castro", "Hayes Valley",
  "North Beach", "Potrero Hill", "Dogpatch", "Richmond",
  "Oakland", "Berkeley", "Palo Alto", "San Jose"
]

const faqs = [
  {
    question: "How does GEO help my San Francisco business?",
    answer: "When someone asks ChatGPT 'best SaaS marketing agency in San Francisco' or asks Perplexity 'find a venture capital lawyer in the Bay Area,' your business should be mentioned. GEO optimizes your online presence so AI systems recognize and recommend you in the Bay Area market."
  },
  {
    question: "Do you serve the entire Bay Area?",
    answer: "Yes. We serve businesses throughout the Bay Area—San Francisco, Oakland, Berkeley, Silicon Valley (Palo Alto, Mountain View, San Jose), and the greater nine-county region. We create location-specific strategies for your service areas."
  },
  {
    question: "What makes San Francisco different for GEO?",
    answer: "The Bay Area is the global center of AI and technology. Your audience is among the earliest adopters of AI search tools like ChatGPT and Perplexity. Many of your competitors are also tech-savvy and will adopt GEO quickly. Early movers have a significant advantage."
  },
  {
    question: "How long until I see AI visibility improvements?",
    answer: "For niche queries and specific neighborhoods or cities, we typically see improvements in 4-8 weeks. Broader competitive terms take 3-6 months, especially in tech-saturated categories. We prioritize quick wins while building toward larger visibility goals."
  }
]

export default function GEOSanFranciscoPage() {
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
              <span className="text-white/80 text-sm">Serving San Francisco & Bay Area</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              GEO Services{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                San Francisco
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Get your Bay Area business mentioned when customers ask AI for recommendations. 
              From SF to Silicon Valley, we help businesses dominate AI search in the world's tech capital.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free SF GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why SF Needs GEO */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Bay Area Businesses Need GEO
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                The Bay Area is the global epicenter of AI and technology. Your customers here 
                are the earliest adopters of AI search tools—many use ChatGPT, Perplexity, and 
                Claude daily for everything from restaurant recommendations to vendor research.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                When someone asks AI "who's the best startup lawyer in San Francisco" or "find me a 
                good SaaS marketing agency in the Bay Area," the businesses that appear are winning. 
                In the tech capital, GEO isn't optional—it's essential.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">7.7M</p>
                  <p className="text-sm text-slate-600">Bay Area population</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">#1</p>
                  <p className="text-sm text-slate-600">AI adoption rate</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">$700B</p>
                  <p className="text-sm text-slate-600">Bay Area GDP</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-500 mb-1">85%</p>
                  <p className="text-sm text-slate-600">Tech worker AI use</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Bay Area We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {sfAreas.map((area) => (
                  <span key={area} className="px-4 py-2 bg-white rounded-full text-sm text-slate-700 border border-slate-200">
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-slate-600 text-sm">
                Plus all nine Bay Area counties and Silicon Valley.
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
              San Francisco Industries We Specialize In
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sfIndustries.map((industry) => (
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
              Our San Francisco GEO Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200">
              <Zap className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bay Area Entity Optimization</h3>
              <p className="text-slate-600 mb-6">
                We establish your business as a recognized entity in the Bay Area. AI systems need to understand 
                who you are and which areas you serve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  SF-specific schema markup
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Multi-city targeting
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  Tech industry positioning
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <Target className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">SF Content Strategy</h3>
              <p className="text-slate-600 mb-6">
                Content that positions you as the local Bay Area expert with pages for each neighborhood 
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
                  Bay Area FAQ content
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-200">
              <TrendingUp className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Visibility Tracking</h3>
              <p className="text-slate-600 mb-6">
                Monitor when and how AI systems mention your SF business and track progress.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  SF query monitoring
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
              San Francisco GEO FAQs
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
            Ready to dominate AI search in San Francisco?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your Bay Area business. See exactly how visible you are 
            in AI search and what opportunities exist.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free SF GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

