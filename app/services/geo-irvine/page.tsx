import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, MapPin, Building2, TrendingUp, Users, Star, BarChart, Brain, Zap, Target, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Irvine Orange County Tech & Corporate AI Visibility | Webvello GEO',
  description: 'Reach Orange County corporate and tech leaders. AI visibility for Orange County\'s largest tech cluster. ChatGPT & Perplexity search optimization.',
  keywords: ['geo irvine', 'orange county tech visibility', 'irvine corporate ai search', 'generative engine optimization orange county'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-irvine',
  },
  openGraph: {
    title: 'Irvine Orange County Tech & Corporate AI Visibility | Webvello GEO',
    description: 'Reach Orange County corporate and tech leaders. AI visibility for Orange County\'s largest tech cluster. ChatGPT & Perplexity search optimization.',
    url: 'https://www.webvello.com/services/geo-irvine',
    type: 'website',
  }
}

const industries = [
  { icon: Building2, name: "Corporate Headquarters", description: "Major corporations and regional HQs" },
  { icon: TrendingUp, name: "Technology & Biotech", description: "Emerging tech and life sciences" },
  { icon: Brain, name: "Financial Services", description: "Banking and financial institutions" },
  { icon: Users, name: "Professional Services", description: "Legal, consulting, and advisory" },
  { icon: Star, name: "Real Estate & Development", description: "Commercial and mixed-use development" },
  { icon: Zap, name: "Manufacturing & Supply Chain", description: "Advanced manufacturing and logistics" }
]

const neighborhoods = [
  "Irvine Tech Corridor",
  "Spectrum Business Center",
  "University of California Irvine",
  "The Irvine Company centers",
  "Newport Beach proximity",
  "Laguna Niguel corridor",
  "Business Park areas",
  "Great Park innovation",
  "Fashion Island area",
  "Tustin border region"
]

const processSteps = [
  {
    step: "1",
    title: "Orange County Market Intelligence",
    description: "We analyze how corporate executives, tech leaders, and decision-makers in Orange County research solutions through AI. What queries drive their decisions? What positioning influences them?"
  },
  {
    step: "2",
    title: "Enterprise & Tech Positioning",
    description: "We establish your credibility in Orange County's corporate and tech landscape. This combines enterprise sophistication with startup innovation positioning—satisfying both established companies and growth-oriented organizations."
  },
  {
    step: "3",
    title: "Cross-Industry Authority",
    description: "We build positioning that resonates across Irvine's diverse sectors. Whether you serve corporate clients or tech companies, we establish authority across multiple buying committees simultaneously."
  },
  {
    step: "4",
    title: "Regional Visibility",
    description: "We optimize for Orange County's regional influence. Irvine draws executives from throughout Southern California. We position you to capture this regional buying authority."
  },
  {
    step: "5",
    title: "Quarterly Growth Tracking",
    description: "We monitor your visibility growth through Irvine's diverse sectors. Weekly reports track how different buyer personas discover you, which positioning resonates most, and where to prioritize optimization."
  }
]

const faqs = [
  {
    question: "Why is Irvine different from other Orange County markets?",
    answer: "Irvine is Orange County's primary tech and corporate hub. The Irvine Company controls significant real estate, influencing the entire business ecosystem. We optimize specifically for Irvine's corporate-tech mix and the decision-making patterns this environment creates."
  },
  {
    question: "How do Orange County corporate buyers research differently?",
    answer: "OC corporate decision-makers want regional expertise, stability signals, and local market understanding. They query AI engines for vendor credibility, local references, and regional market positioning. We optimize for this geographic and sector-specific research pattern."
  },
  {
    question: "Can tech startups compete with established Irvine corporations?",
    answer: "Yes. Irvine's business environment values both innovation and stability. Startups succeed by emphasizing technical differentiation and growth trajectory. We position emerging companies to compete by highlighting what they do differently and better."
  },
  {
    question: "How do you reach both corporate and tech audiences simultaneously?",
    answer: "We segment positioning so corporate messaging emphasizes stability and integration, while tech messaging emphasizes innovation and efficiency. AI systems recognize these contextual differences, showing the right message to each audience type."
  },
  {
    question: "What's the typical timeline for Irvine tech/corporate visibility?",
    answer: "Initial citations appear in 3-4 weeks. Corporate audience traction develops over 2-3 months. Tech community visibility accelerates faster. By month 4-5, you typically see cross-sector discovery momentum."
  },
  {
    question: "How do you handle Irvine's mix of established and emerging companies?",
    answer: "We recognize the bifurcated market. Established companies need positioning that maintains market leadership. Emerging companies need positioning that disrupts established narratives. We adapt strategy accordingly."
  },
  {
    question: "Does GEO help recruit talent to Irvine-based companies?",
    answer: "Absolutely. Talent researches companies through AI to evaluate growth potential, market position, and workplace culture. Strong Irvine positioning attracts talent by signaling both stability and opportunity."
  },
  {
    question: "Can you measure success across Irvine's diverse sectors?",
    answer: "Yes. We track citations and visibility across corporate, tech, biotech, and service sectors separately. Monthly reports show you exactly which buyer personas are discovering you and which sectors show strongest traction."
  }
]

export default function GEOIrvinePage() {
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-irvine',
    title: 'Irvine Orange County Tech & Corporate AI Visibility | Webvello GEO',
    description: 'Reach Orange County corporate and tech leaders. AI visibility for Orange County\'s largest tech cluster. ChatGPT & Perplexity search optimization.',
    geo: {
      city: 'Irvine',
      cityState: 'Irvine, CA'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Irvine', url: 'https://www.webvello.com/services/geo-irvine' }
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
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span className="text-white/80 text-sm">GEO Services in Irvine, California</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Orange County Corporate Tech Authority
              <span className="block bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                for Irvine
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-2xl">
              Reach corporate executives and tech leaders where Orange County businesses research solutions. Dominate Irvine's enterprise and tech marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="/contact">Get Corporate Strategy</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Corporate Gateway</h3>
              <p className="text-slate-600">Irvine serves Orange County and Southern California corporate clients. Strong positioning here captures regional buying authority—influential far beyond Irvine itself.</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Tech-Corporate Hybrid</h3>
              <p className="text-slate-600">Irvine uniquely bridges corporate and tech sectors. We position to reach both audiences—satisfying enterprise procurement and tech buyer personas simultaneously.</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Regional Market Signal</h3>
              <p className="text-slate-600">Irvine positioning influences how companies throughout Southern California perceive your credibility. AI visibility here carries weight across a multi-city region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Irvine Corporate & Tech Sectors We Dominate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon
              return (
                <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors">
                  <Icon className="w-10 h-10 text-indigo-600 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">{industry.name}</h3>
                  <p className="text-slate-600 text-sm">{industry.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Building Irvine Corporate Authority</h2>
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600 text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Irvine Market Coverage</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {neighborhoods.map((neighborhood, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700">
                <MapPin className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Irvine GEO Strategy Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg p-6 hover:border-indigo-300 transition-colors">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-900">
                  {faq.question}
                  <span className="text-indigo-600 group-open:hidden">+</span>
                  <span className="text-indigo-600 hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-indigo-600 to-indigo-700">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Lead Irvine's Corporate AI Search?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Orange County corporations and tech leaders research through AI. Get discovered during their evaluation. Establish authority across corporate and tech sectors.
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100">
            <Link href="/contact">Start Your Corporate Strategy</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

