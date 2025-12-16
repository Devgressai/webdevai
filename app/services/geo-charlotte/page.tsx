import { Button } from '../../../components/ui/button'
import { ArrowRight, MapPin, Building2, TrendingUp, Users, Star, BarChart, Globe, Target, Wrench, ShoppingBag, Briefcase } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Charlotte GEO Services | AI Search Optimization NC',
  description: 'Get your Charlotte business cited by ChatGPT, Perplexity & AI search. Expert GEO services for NC businesses.',
  keywords: ['geo charlotte', 'ai seo charlotte', 'chatgpt optimization charlotte', 'generative engine optimization Charlotte'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-charlotte',
  },
  openGraph: {
    title: 'Charlotte GEO Services | AI Search Optimization NC',
    description: 'Get your Charlotte business cited by ChatGPT, Perplexity & AI search. Expert GEO services for NC businesses.',
    url: 'https://www.webvello.com/services/geo-charlotte',
    type: 'website',
  }
}

const industries = [
  {
    "name": "Professional Services",
    "description": "Law, accounting, and consulting"
  },
  {
    "name": "Real Estate",
    "description": "Brokers and property management"
  },
  {
    "name": "Home Services",
    "description": "HVAC, plumbing, and contractors"
  },
  {
    "name": "Healthcare",
    "description": "Medical practices and providers"
  },
  {
    "name": "Restaurants",
    "description": "Dining and food service"
  },
  {
    "name": "Retail",
    "description": "Local shops and boutiques"
  }
]

const neighborhoods = [
  "Downtown Charlotte",
  "Charlotte Metro Area",
  "Greater Charlotte",
  "Charlotte Business District",
  "Charlotte Suburbs",
  "Charlotte Historic District",
  "Charlotte Waterfront",
  "Charlotte Arts District"
]

const processSteps = [
  {
    "step": "1",
    "title": "Charlotte Market Audit",
    "description": "We analyze how AI systems currently respond to Charlotte-specific queries in your industry. What are they saying? Who's being mentioned? Where are the gaps in AI visibility?"
  },
  {
    "step": "2",
    "title": "Entity & Schema Implementation",
    "description": "We implement structured data that tells AI systems exactly what you do and where you serve in Charlotte. This includes LocalBusiness schema, Service schema, and FAQ markup optimized for AI parsing."
  },
  {
    "step": "3",
    "title": "Content Optimization",
    "description": "We optimize your existing content and create new location-aware pages that answer the questions Charlotte customers ask AI engines like ChatGPT and Perplexity."
  },
  {
    "step": "4",
    "title": "Authority Building",
    "description": "We build topical authority through strategic content clusters, establishing your business as the definitive Charlotte source in your industry for AI recommendation engines."
  },
  {
    "step": "5",
    "title": "Monitor & Iterate",
    "description": "We track AI citations, measure visibility improvements, and continuously refine the strategy based on real Charlotte market data and AI engine behavior patterns."
  }
]

const faqs = [
  {
    "question": "Why is GEO important for Charlotte businesses specifically?",
    "answer": "Charlotte customers increasingly use AI tools like ChatGPT, Perplexity, and Google's AI Overviews to find local services. When someone asks \"best [service] in Charlotte,\" AI engines cite businesses they recognize as authoritative. GEO ensures your business appears in those AI-generated recommendations instead of competitors."
  },
  {
    "question": "How quickly can my Charlotte business appear in AI search results?",
    "answer": "Initial improvements typically appear within 4-6 weeks as AI systems index your optimized content. Full visibility usually takes 2-3 months. The timeline depends on your industry's competitiveness in Charlotte and your site's current authority. We provide monthly reports showing citation progress."
  },
  {
    "question": "Do you have a physical office in Charlotte?",
    "answer": "No, and we don't need one. GEO is entirely digital—we optimize your website, implement structured data, create AI-friendly content, and track results remotely. Many Charlotte businesses prefer this because there are no overhead costs passed to you, and we can start immediately without scheduling site visits."
  },
  {
    "question": "What makes Charlotte GEO different from traditional SEO?",
    "answer": "Traditional SEO targets Google's blue links. GEO targets the AI-generated answer itself—the single recommendation ChatGPT or Perplexity provides. In Charlotte, this matters because AI users rarely click past the first answer. If AI doesn't cite you, you're invisible to that entire search segment."
  },
  {
    "question": "Which Charlotte industries benefit most from GEO?",
    "answer": "Any service business where customers research online before buying: professional services (law, accounting), home services (HVAC, plumbing), healthcare, real estate, restaurants, and retail. If Charlotte customers might ask AI for recommendations in your industry, you need GEO."
  },
  {
    "question": "Can GEO help my new Charlotte business compete with established companies?",
    "answer": "Absolutely. New businesses often struggle with traditional SEO because it takes years to build domain authority. GEO levels the playing field—AI engines cite businesses based on relevance and structured data, not just age. We've helped new Charlotte businesses get cited alongside 20-year-old competitors within months."
  },
  {
    "question": "How do you measure GEO success for Charlotte businesses?",
    "answer": "We track AI citations (when your business appears in ChatGPT, Perplexity, and Google AI results), query visibility (which Charlotte-specific searches trigger your business), and competitive positioning (how you rank against Charlotte competitors in AI results). Monthly reports show exactly where you appear."
  },
  {
    "question": "What happens if my Charlotte competitors adopt GEO first?",
    "answer": "Early movers gain positioning advantage in AI citation patterns. That advantage compounds over time as AI systems reinforce established citations. This creates urgency—waiting six months could mean your competitors own the AI visibility in Charlotte while you're playing catch-up. We help you establish visibility before competitive saturation occurs."
  }
]

export default function GEOCharlottePage() {
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-charlotte',
    title: 'Charlotte GEO Services | AI Search Optimization NC',
    description: 'Get your Charlotte business cited by ChatGPT, Perplexity & AI search. Expert GEO services for NC businesses.',
    geo: {
      city: 'Charlotte',
      cityState: 'Charlotte, NC'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Charlotte', url: 'https://www.webvello.com/services/geo-charlotte' }
    ]
  })
  
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-600 to-teal-500 opacity-10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-white/80 text-sm">GEO Services in Charlotte, North Carolina</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Generative Engine Optimization in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Charlotte, NC
              </span>
            </h1>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                Get found by AI when Charlotte customers search for your services. Webvello's remote GEO services ensure your Charlotte business surfaces when AI engines field customer queries—positioning you ahead of competitors who haven't optimized for AI search yet. We serve organizations <Link href="/services/north-carolina" className="text-teal-400 hover:underline">throughout North Carolina</Link>.
              </p>
            </div>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-blue-600 to-teal-500 hover:opacity-90 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Charlotte GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why GEO Matters */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why GEO Matters in Charlotte
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Charlotte customers increasingly turn to AI tools like ChatGPT, Perplexity, and Google's AI Overviews when searching for local services. These tools don't show a list of links—they provide direct recommendations based on businesses they recognize as authoritative.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Traditional SEO gets you into Google's blue links. Generative Engine Optimization gets you into the AI answer itself—the single recommendation that ChatGPT or Perplexity provides when a Charlotte customer asks for help.
              </p>
              <p className="text-lg text-slate-600">
                In Charlotte's competitive market, being the one business AI engines cite means capturing customers before they ever see competitor listings. That's the power of GEO.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-1">900K</p>
                <p className="text-sm text-slate-600">Charlotte population</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-1">2.7M</p>
                <p className="text-sm text-slate-600">Metro area population</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-1">#2</p>
                <p className="text-sm text-slate-600">Banking center in US</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-1">$185B</p>
                <p className="text-sm text-slate-600">Metro GDP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              How Webvello Delivers GEO Services Remotely
            </h2>
            <p className="text-xl text-slate-600">
              All our GEO work is 100% digital. We optimize your website, implement structured data, create AI-friendly content, and monitor results—all without needing a local Charlotte office.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Remote Service</h3>
              <p className="text-slate-600">
                Everything happens online. We access your website, implement changes, and track results through digital tools. Meetings via Zoom, updates via email, results via dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Target className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Charlotte Market Expertise</h3>
              <p className="text-slate-600">
                We research Charlotte-specific queries, understand local market dynamics, and optimize for how Charlotte residents actually search. No local office needed for this research.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <BarChart className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">
                Monthly reports show exactly when AI systems cite your business for Charlotte queries. See your progress with real data and screenshots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Charlotte GEO Process
            </h2>
            <p className="text-xl text-slate-600">
              A systematic approach to dominating AI search in Charlotte.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Charlotte Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help businesses across Charlotte's key industries get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <Building2 className="w-10 h-10 text-blue-600 mb-4" />
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
              Charlotte Areas We Cover
            </h2>
            <p className="text-xl text-slate-600">
              We optimize for all Charlotte neighborhoods and surrounding areas.
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
              Charlotte GEO FAQs
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
            Ready to Get Cited by AI in Charlotte?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            No pressure. Just a free audit showing exactly how visible your Charlotte business is when people ask AI for recommendations. See where you stand and what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-10 bg-gradient-to-r from-blue-600 to-teal-500 hover:opacity-90 text-white font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Your Free Charlotte GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              className="h-14 px-10 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/services/geo-services">
                Learn More About GEO
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 pt-16 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Related Services:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/services/generative-engine-optimization" className="text-white/80 hover:text-white text-sm underline">
                Generative Engine Optimization
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/services/ai-seo" className="text-white/80 hover:text-white text-sm underline">
                AI Search Optimization
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/" className="text-white/80 hover:text-white text-sm underline">
                Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
