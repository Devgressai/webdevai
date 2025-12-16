import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Star, BarChart, Brain, Music, Zap, Target, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Austin Tech Growth & AI Visibility | Webvello GEO',
  description: 'Dominate ChatGPT & AI search in Austin\'s fast-moving tech ecosystem. Get your business cited before competitors saturate the market.',
  keywords: ['geo austin', 'ai seo austin', 'chatgpt optimization austin', 'generative engine optimization austin'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-austin',
  },
  openGraph: {
    title: 'Austin Tech Growth & AI Visibility | Webvello GEO',
    description: 'Dominate ChatGPT & AI search in Austin\'s fast-moving tech ecosystem. Get your business cited before competitors saturate the market.',
    url: 'https://www.webvello.com/services/geo-austin',
    type: 'website',
  }
}

const industries = [
  { icon: Building2, name: "Tech & Startups", description: "Austin's booming tech ecosystem" },
  { icon: TrendingUp, name: "SaaS & Software", description: "Enterprise and consumer software" },
  { icon: Music, name: "Music & Entertainment", description: "Live music capital of the world" },
  { icon: Users, name: "Food & Restaurant", description: "Vibrant food scene and hospitality" },
  { icon: Star, name: "Real Estate", description: "One of the fastest growing markets" },
  { icon: Brain, name: "Professional Services", description: "Law, accounting, consulting" }
]

const neighborhoods = [
  "Downtown Austin",
  "South Congress (SoCo)",
  "East Austin",
  "The Domain",
  "Mueller",
  "Hyde Park",
  "Westlake",
  "Round Rock",
  "Cedar Park",
  "Pflugerville"
]

const processSteps = [
  {
    step: "1",
    title: "Austin Market Audit",
    description: "We analyze how AI systems currently respond to Austin-specific queries in your industry. What are they saying? Who's being mentioned? Where are the gaps?"
  },
  {
    step: "2",
    title: "Entity & Schema Setup",
    description: "We implement structured data that tells AI systems exactly what you do and where you serve in Austin. This includes LocalBusiness schema, Service schema, and FAQ markup."
  },
  {
    step: "3",
    title: "Content Optimization",
    description: "We optimize your existing content and create new location-aware pages that answer the questions Austin customers ask AI engines."
  },
  {
    step: "4",
    title: "Authority Building",
    description: "We build topical authority through strategic content clusters, establishing your business as the definitive Austin source in your industry."
  },
  {
    step: "5",
    title: "Monitor & Iterate",
    description: "We track AI citations, measure visibility improvements, and continuously refine the strategy based on real Austin market data."
  }
]

const faqs = [
  {
    question: "Why is AI visibility urgent in Austin right now?",
    answer: "Austin's expansion happens in real-time. New competitors arrive weekly, search patterns shift monthly, and neighborhoods evolve faster than traditional SEO can track. AI engines that cite your business today lock in credibility before the next wave of competition arrives. Delay means falling behind companies that moved first."
  },
  {
    question: "How do you keep Austin GEO current as the city changes?",
    answer: "We monitor emerging neighborhoods, track industry shifts in real-time, and update optimization strategies monthly based on market activity. When new downtown development happens or a neighborhood trends upward, we adjust your content positioning. Continuous iteration keeps you ahead of market transitions."
  },
  {
    question: "Can GEO help startups establish authority faster in Austin?",
    answer: "Yes. New businesses lack the legacy authority of established companies. GEO accelerates recognition by getting AI systems to mention you immediately, positioning you as a credible player from launch. This matters enormously in Austin, where new entrants must prove themselves quickly against both legacy and competing new players."
  },
  {
    question: "Which Austin sectors face the most scaling pressure?",
    answer: "Tech services, recruiting, SaaS, commercial real estate, and hospitality experience constant influx of competitors. These sectors benefit most from GEO because AI citation becomes the fastest way to build credibility when traditional dominance takes years to establish."
  },
  {
    question: "Does remote GEO work for competitive Austin markets?",
    answer: "Absolutely. Competition level doesn't change the digital nature of GEO. Highly competitive markets actually accelerate results visibility—you see faster feedback on what's working. Our dashboard reports show you exactly how your positioning compares to competitors in real-time."
  },
  {
    question: "How do you optimize for Austin's multiple business personas?",
    answer: "Austin houses different buyer archetypes—tech executives, creative professionals, service-based business owners, hospitality decision-makers. We segment optimization by how each persona uses AI to search, ensuring your content surfaces in the specific context each audience uses."
  },
  {
    question: "What happens if competitors in Austin adopt GEO first?",
    answer: "Early movers gain positioning advantage in AI citation patterns. That advantage narrows over months as more businesses optimize. This creates urgency. Waiting six months puts you in reactive mode instead of strategic mode. We help you establish visibility before competitive saturation occurs."
  },
  {
    question: "Can you measure market velocity impact in reports?",
    answer: "Yes. We track competitive emergence rates, monitor how quickly new players claim market share, and measure citation velocity—how fast AI systems recognize your business relative to competitors. Monthly reports show momentum trends specific to Austin's pace."
  }
]

export default function GEOAustinPage() {
  // Generate clean schema for GEO page (NO physical address, NO fake ratings)
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-austin',
    title: 'Austin Tech Growth & AI Visibility | Webvello GEO',
    description: 'Dominate ChatGPT & AI search in Austin\'s fast-moving tech ecosystem. Get your business cited before competitors saturate the market.',
    geo: {
      city: 'Austin',
      cityState: 'Austin, TX'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Austin', url: 'https://www.webvello.com/services/geo-austin' }
    ]
  })
  
  return (
    <div className="min-h-screen bg-white">
      {/* Clean JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO Services in Austin, Texas</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Generative Engine Optimization in{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Austin, Texas
              </span>
            </h1>
            
            {/* Direct Answer Summary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                Austin's business landscape shifts faster than most cities. New startups, relocated talent, and aggressive market entrants compete for attention daily. Webvello's GEO services ensure your business surfaces when AI engines field customer queries—before competitors establish their own AI footprint. Remote-first optimization means you gain visibility at the speed Austin moves.
              </p>
            </div>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Austin GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Austin Needs GEO */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why GEO Matters in Austin
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Austin is America's tech capital with 2.3 million residents who are early adopters of AI tools. When someone asks ChatGPT "best web developer in Austin" or tells Perplexity "find a great taco spot on South Congress," AI engines pull from optimized sources.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Traditional SEO gets you into Google's blue links. GEO gets you into the AI answer itself—the single recommendation that AI provides. In Austin's competitive tech, food, and service markets, being that one cited business means everything.
              </p>
              <p className="text-lg text-slate-600">
                Voice search, ChatGPT, Perplexity, and Google's AI Overviews now dominate how Austin's tech-savvy population finds businesses. If you're not optimized for AI, you're invisible to the majority of searches.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-rose-500 mb-1">2.3M+</p>
                <p className="text-sm text-slate-600">Austin metro population</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-rose-500 mb-1">#1</p>
                <p className="text-sm text-slate-600">US city for tech job growth</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-rose-500 mb-1">5,500+</p>
                <p className="text-sm text-slate-600">Tech startups</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-rose-500 mb-1">$30B+</p>
                <p className="text-sm text-slate-600">VC investment (2024)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Webvello Delivers */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              How Webvello Delivers GEO Services Remotely
            </h2>
            <p className="text-xl text-slate-600">
              All our GEO work is 100% digital. We optimize your website, implement structured data, create AI-friendly content, and monitor results—all without needing a local Austin office.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Globe className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Remote Service</h3>
              <p className="text-slate-600">
                Everything happens online. We access your website, implement changes, and track results through digital tools. Meetings via Zoom, updates via email, results via dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Target className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Austin Market Expertise</h3>
              <p className="text-slate-600">
                We research Austin-specific queries, understand local neighborhoods, and optimize for how Austin residents actually search. No local office needed for this research.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <BarChart className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">
                Monthly reports show exactly when AI systems cite your business for Austin queries. See your progress with real data and screenshots.
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
              Our Austin GEO Process
            </h2>
            <p className="text-xl text-slate-600">
              A systematic approach to dominating AI search in Austin.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
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
              Austin Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help businesses across Austin's key industries get found in AI search.
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
              Austin Areas We Cover
            </h2>
            <p className="text-xl text-slate-600">
              From Downtown to The Domain, we optimize for all Austin neighborhoods and suburbs.
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
              Austin GEO FAQs
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
            Ready to Get Cited by AI in Austin?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            No pressure. Just a free audit showing exactly how visible your Austin business is when people ask AI for recommendations. See where you stand and what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Your Free Austin GEO Audit
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
          
          {/* Internal Links */}
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

