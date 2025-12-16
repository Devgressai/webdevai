import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target, Globe, BarChart, Film } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'LA Enterprise Complexity: Segmented GEO Positioning',
  description: 'Navigate LA\'s fragmented business universes. Entertainment, tech, real estate positioned distinctly through AI citations.',
  keywords: ['geo los angeles', 'generative engine optimization los angeles', 'ai seo los angeles', 'chatgpt optimization la'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-los-angeles',
  },
  openGraph: {
    title: 'GEO Services in Los Angeles, California | AI Search',
    description: 'Get your LA business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for greater Los Angeles.',
    url: 'https://www.webvello.com/services/geo-los-angeles',
    type: 'website',
  }
}

const laIndustries = [
  { name: "Entertainment & Media", description: "Production companies, agencies, studios" },
  { name: "Tech & Startups", description: "Silicon Beach companies and tech firms" },
  { name: "Real Estate", description: "Agents and brokerages in competitive LA market" },
  { name: "Legal Services", description: "Law firms in Beverly Hills, Downtown LA, Century City" },
  { name: "Healthcare", description: "Medical practices, specialists, clinics across LA County" },
  { name: "Home Services", description: "Contractors, HVAC, plumbers serving LA neighborhoods" },
  { name: "Restaurants & Hospitality", description: "Restaurants, hotels, and venues" },
  { name: "Automotive", description: "Dealerships and auto services" }
]

const laAreas = [
  "Downtown LA", "Beverly Hills", "Santa Monica", "Hollywood", "West Hollywood", "Pasadena", 
  "Glendale", "Burbank", "Long Beach", "Venice", "Malibu", "Culver City", 
  "Century City", "Brentwood", "Westwood", "Sherman Oaks"
]

const processSteps = [
  {
    step: "1",
    title: "LA Market Audit",
    description: "We analyze how AI systems currently respond to Los Angeles queries in your industry. What's being cited? Who dominates Beverly Hills vs. Santa Monica searches? Where are the opportunities?"
  },
  {
    step: "2",
    title: "Entity & Schema Setup",
    description: "We implement structured data that tells AI systems exactly what you do and where you serve in LA County. This includes LocalBusiness schema, Service schema, and neighborhood-specific markup."
  },
  {
    step: "3",
    title: "Content Optimization",
    description: "We optimize your existing content and create new LA-specific pages that answer the questions local customers ask AI engines about your services."
  },
  {
    step: "4",
    title: "Authority Building",
    description: "We build topical authority through strategic content clusters, establishing your business as the definitive LA source in your industry across all neighborhoods."
  },
  {
    step: "5",
    title: "Monitor & Iterate",
    description: "We track AI citations, measure visibility improvements across ChatGPT, Perplexity, and Google SGE, and continuously refine strategy based on LA market data."
  }
]

const faqs = [
  {
    question: "How does LA's industry fragmentation affect GEO strategy?",
    answer: "LA contains distinct business universes with different decision-making hierarchies. Entertainment companies, tech firms, real estate groups, and medical practices operate under completely different buyer personas and search behaviors. We segment optimization by industry ecosystem, ensuring positioning resonates within the specific community you serve."
  },
  {
    question: "Can you optimize for multiple LA markets simultaneously?",
    answer: "Yes. Large LA companies often serve diverse stakeholder groups. We create nuanced positioning that addresses different personas using different terminology. Your GEO strategy branches by audience segment, ensuring credibility within each professional network."
  },
  {
    question: "How does stakeholder complexity change GEO priorities?",
    answer: "Larger decisions involve multiple stakeholders with different information needs. A real estate transaction requires agents, financing professionals, title companies, and inspectors. GEO targets each stakeholder type separately, ensuring you appear in the AI queries they each use during their decision process."
  },
  {
    question: "What's LA-specific about serving enterprise accounts?",
    answer: "LA enterprise clients operate across global networks with local execution requirements. GEO positioning must demonstrate both international sophistication and local market mastery simultaneously. We craft messaging that appeals to C-suite decision-makers researching vendor credibility."
  },
  {
    question: "How do you handle cross-neighborhood optimization in LA?",
    answer: "Different LA neighborhoods have completely different buyer demographics and search behaviors. Beverly Hills professional searches differ from Downtown LA searches. We optimize separately for each neighborhood cluster, acknowledging distinct market segments within the broader metro."
  },
  {
    question: "Can GEO support complex service offerings?",
    answer: "Absolutely. Consulting firms, legal practices, and healthcare networks offer multiple service lines to distinct client types. GEO creates dimensional positioning—different aspects of your company appear in different relevant contexts, avoiding generic descriptions that underserve nuanced offerings."
  },
  {
    question: "How do you ensure positioning works across organizational levels?",
    answer: "Purchasing decisions involve different hierarchies. Department heads search differently than procurement specialists. We optimize for search patterns across the buying committee structure, ensuring each decision-maker encounters relevant credibility evidence during their research phase."
  },
  {
    question: "What's the advantage of LA-specific enterprise GEO?",
    answer: "Competitors often take one-size-fits-all approaches. LA enterprises benefit from segmented optimization recognizing the complexity of their markets. This creates durable advantage—your sophistication positioning becomes difficult for generalist competitors to match."
  }
]

export default function GEOLosAngelesPage() {
  
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-los-angeles',
    title: 'LA Enterprise Complexity: Segmented GEO Positioning',
    description: 'Navigate LA\'s fragmented business universes. Entertainment, tech, real estate positioned distinctly through AI citations.',
    geo: {
      city: 'Los Angeles',
      cityState: 'Los Angeles, CA'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Los Angeles', url: 'https://www.webvello.com/services/geo-los-angeles' }
    ]
  })
  
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO Services in Los Angeles, California</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Generative Engine Optimization in{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Los Angeles, California
              </span>
            </h1>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                Los Angeles operates across multiple business universes—entertainment, technology, real estate, finance, healthcare. Managing reputation across these fragmented ecosystems requires nuance. As part of our services <Link href="/services/california" className="text-rose-400 hover:underline">across California</Link>, GEO positions your company distinctly within the specific stakeholder networks you serve, ensuring the right audience discovers you when they ask AI for help.
              </p>
            </div>
            
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
      </section>

      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why GEO Matters in Los Angeles
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Los Angeles is the second-largest metro in the US with 13.2 million people and a $1.1 trillion economy. As the entertainment and tech capital, LA attracts early adopters who use AI search heavily for both business and personal needs.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                When someone asks AI "best production company in LA" or "find a dentist in Beverly Hills," the businesses that appear in AI answers win. Traditional SEO gets you into lists—GEO gets you into the AI answer itself, the single recommendation that matters.
              </p>
              <p className="text-lg text-slate-600">
                Voice search, ChatGPT, Perplexity, and Google's AI Overviews dominate how LA's tech-savvy, entertainment-industry population finds services. If you're not optimized for AI, you're invisible to modern search.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-rose-500 mb-1">4M</p>
                <p className="text-sm text-slate-600">LA city residents</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-rose-500 mb-1">13.2M</p>
                <p className="text-sm text-slate-600">Metro population</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-rose-500 mb-1">#2</p>
                <p className="text-sm text-slate-600">US metro area</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-rose-500 mb-1">$1.1T</p>
                <p className="text-sm text-slate-600">Metro GDP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              How Webvello Delivers GEO Services Remotely
            </h2>
            <p className="text-xl text-slate-600">
              All our GEO work is 100% digital. We optimize your website, implement structured data, create AI-friendly content, and monitor results—all without needing a local LA office.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">LA Market Expertise</h3>
              <p className="text-slate-600">
                We research LA-specific queries, understand Beverly Hills vs. Santa Monica vs. Downtown markets, and optimize for how Angelenos search. No local office needed.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <BarChart className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">
                Monthly reports show exactly when AI systems cite your business for LA queries. See your progress with real data and screenshots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Los Angeles GEO Process
            </h2>
            <p className="text-xl text-slate-600">
              A systematic approach to dominating AI search in LA.
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

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Los Angeles Industries We Specialize In
            </h2>
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

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Los Angeles Areas We Serve
            </h2>
            <p className="text-xl text-slate-600">
              From Beverly Hills to Long Beach, we optimize for all LA neighborhoods and cities.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {laAreas.map((area) => (
              <span
                key={area}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Los Angeles GEO FAQs
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

      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Cited by AI in Los Angeles?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            No pressure. Just a free audit showing exactly how visible your LA business is when people ask AI for recommendations. See where you stand and what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Your Free LA GEO Audit
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
                Enterprise AI Search Strategy
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
