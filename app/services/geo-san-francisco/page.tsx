import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Zap, Target, Globe, BarChart } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'GEO Services in San Francisco, CA | AI Search',
  description: 'Get your SF business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for Bay Area tech capital.',
  keywords: ['geo san francisco', 'generative engine optimization sf', 'ai seo san francisco'],
  alternates: { canonical: 'https://www.webvello.com/services/geo-san-francisco' },
  openGraph: {
    title: 'GEO Services in San Francisco, CA | AI Search',
    description: 'Get your SF business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for Bay Area.',
    url: 'https://www.webvello.com/services/geo-san-francisco',
    type: 'website',
  }
}

const sfIndustries = [
  { name: "Technology & SaaS", description: "Software companies, startups, tech giants" },
  { name: "Fintech & Crypto", description: "Financial technology and blockchain" },
  { name: "Biotech & Healthcare", description: "Medical and biotech companies" },
  { name: "Professional Services", description: "Consulting, legal, accounting for tech" },
  { name: "Real Estate", description: "Commercial and residential" },
  { name: "Marketing & Creative", description: "Agencies serving tech industry" },
  { name: "Venture Capital", description: "Investment firms and VCs" },
  { name: "Legal Services", description: "Tech law, IP, corporate law" }
]

const sfAreas = [
  "Downtown SF", "SOMA", "Financial District", "Mission", "North Beach", "Pacific Heights",
  "Marina", "Hayes Valley", "Nob Hill", "Presidio", "Richmond", "Castro", "Potrero Hill", "Dogpatch"
]

const processSteps = [
  { step: "1", title: "SF Market Audit", description: "We analyze how AI responds to SF tech queries. What's being cited in your industry?" },
  { step: "2", title: "Entity & Schema Setup", description: "Implement structured data optimized for SF's tech ecosystem." },
  { step: "3", title: "Content Optimization", description: "Create SF-specific content that AI engines cite." },
  { step: "4", title: "Authority Building", description: "Establish your business as the definitive SF source." },
  { step: "5", title: "Monitor & Iterate", description: "Track AI citations and refine strategy based on SF data." }
]

const faqs = [
  { question: "How does GEO help my San Francisco business?", answer: "When someone asks ChatGPT 'best SaaS consultant in SF' or 'find a tech lawyer in SOMA,' your business should be cited. GEO optimizes for AI visibility in SF's competitive tech market." },
  { question: "How does Webvello deliver GEO services remotely to SF businesses?", answer: "All work is digital. We optimize your site, implement schema, create AI-friendly content, and monitor visibility—no local office needed. Monthly reports show when AI systems cite you." },
  { question: "What makes San Francisco different for GEO?", answer: "SF is the global tech capital with the highest concentration of AI early adopters. Everyone here uses ChatGPT and AI tools. If you serve tech companies, GEO is essential." },
  { question: "Do you work with SF tech startups and SaaS companies?", answer: "Absolutely. We understand the tech ecosystem and how founders, investors, and buyers use AI search. We optimize for B2B tech queries." },
  { question: "What industries benefit most from SF GEO?", answer: "Tech, SaaS, fintech, biotech, professional services, and legal firms see huge impact. SF's business community relies heavily on AI search." },
  { question: "How long until I see results in SF?", answer: "For niche tech queries, 4-8 weeks. Broader terms take 3-6 months due to competition. We prioritize quick wins while building authority." },
  { question: "Can you handle technical B2B queries?", answer: "Yes. We understand developer tools, enterprise software, and technical services. We optimize for how technical buyers actually search." },
  { question: "How do you measure GEO success?", answer: "We track AI citations, monitor SF tech queries, measure visibility across ChatGPT, Perplexity, and Google SGE with concrete monthly data." }
]

export default function GEOSanFranciscoPage() {
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-san-francisco',
    title: 'GEO Services in San Francisco, CA | AI Search',
    description: 'Get your SF business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for Bay Area tech capital.',
    geo: { city: 'San Francisco', cityState: 'San Francisco, CA' },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO San Francisco', url: 'https://www.webvello.com/services/geo-san-francisco' }
    ]
  })
  
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span className="text-white/80 text-sm">GEO Services in San Francisco, CA</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Generative Engine Optimization in{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                San Francisco, CA
              </span>
            </h1>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                Webvello provides remote GEO services to San Francisco businesses, optimizing your online presence so AI engines like ChatGPT, Perplexity, and Google SGE cite you when tech buyers ask for recommendations. We help SaaS companies, startups, and tech services dominate AI search without requiring a local office visit.
              </p>
            </div>
            
            <Button className="h-14 px-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl" asChild>
              <Link href="/contact">Get Free SF GEO Audit<ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why GEO Matters in San Francisco</h2>
              <p className="text-lg text-slate-600 mb-4">
                San Francisco is the global tech capital with the highest concentration of tech workers and early AI adopters. With 870K residents and 4.7M in the Bay Area, SF leads in AI tool adoption.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                When someone asks AI "best SaaS consultant in SF" or "find a tech lawyer in SOMA," being cited wins business. SF's tech community uses AI search more than anywhere else.
              </p>
              <p className="text-lg text-slate-600">
                Voice search, ChatGPT, and Perplexity are standard here. The city that builds AI is also the city that uses it most. GEO isn't optional in SF.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl"><p className="text-3xl font-bold text-emerald-500 mb-1">870K</p><p className="text-sm text-slate-600">SF residents</p></div>
              <div className="text-center p-6 bg-slate-50 rounded-xl"><p className="text-3xl font-bold text-emerald-500 mb-1">4.7M</p><p className="text-sm text-slate-600">Bay Area</p></div>
              <div className="text-center p-6 bg-slate-50 rounded-xl"><p className="text-3xl font-bold text-emerald-500 mb-1">#1</p><p className="text-sm text-slate-600">Tech hub</p></div>
              <div className="text-center p-6 bg-slate-50 rounded-xl"><p className="text-3xl font-bold text-emerald-500 mb-1">$550B</p><p className="text-sm text-slate-600">Metro GDP</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">How Webvello Delivers GEO Services Remotely</h2>
            <p className="text-xl text-slate-600">All work is 100% digital. No local office needed.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Globe className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Remote</h3>
              <p className="text-slate-600">Everything online. Zoom meetings, email updates, dashboard results.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <Target className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">SF Tech Expertise</h3>
              <p className="text-slate-600">We understand SF's tech ecosystem and optimize accordingly.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <BarChart className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">Monthly reports show when AI cites your business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our San Francisco GEO Process</h2>
          </div>
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">{step.step}</div>
                <div><h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3><p className="text-slate-600">{step.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">SF Industries We Specialize In</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sfIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <Building2 className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">SF Areas We Serve</h2></div>
          <div className="flex flex-wrap gap-3">
            {sfAreas.map((area) => (<span key={area} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">{area}</span>))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">San Francisco GEO FAQs</h2></div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Cited by AI in SF?</h2>
          <p className="text-xl text-white/70 mb-10">No pressure. Free audit showing your SF AI visibility.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-14 px-10 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-lg rounded-xl" asChild>
              <Link href="/contact">Get Your Free SF GEO Audit<ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button className="h-14 px-10 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-lg rounded-xl" asChild>
              <Link href="/services/geo-services">Learn More About GEO</Link>
            </Button>
          </div>
          <div className="mt-16 pt-16 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Related Services:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/services/geo-services" className="text-white/80 hover:text-white text-sm underline">GEO Services</Link>
              <span className="text-white/40">•</span>
              <Link href="/services/ai-seo" className="text-white/80 hover:text-white text-sm underline">AI-Powered SEO</Link>
              <span className="text-white/40">•</span>
              <Link href="/services/local-seo" className="text-white/80 hover:text-white text-sm underline">Local SEO</Link>
              <span className="text-white/40">•</span>
              <Link href="/" className="text-white/80 hover:text-white text-sm underline">Home</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
