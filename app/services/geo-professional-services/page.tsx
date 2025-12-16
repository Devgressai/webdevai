import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Briefcase, Scale, Calculator, Stethoscope, Building2, Users, BookOpen, LineChart } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO for Professional Services | AI Search for Law Firms, Accountants, Consultants | Web Vello',
  description: 'Get your professional services firm found in ChatGPT, Perplexity, and Google SGE. GEO optimization for lawyers, accountants, consultants, and B2B service providers.',
  keywords: ['geo professional services', 'ai seo law firms', 'accountant chatgpt optimization', 'consultant geo optimization', 'professional services ai search'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-professional-services',
  },
  openGraph: {
    title: 'GEO for Professional Services | AI Search | Web Vello',
    description: 'Get your professional services firm found in AI search results.',
    url: 'https://www.webvello.com/services/geo-professional-services',
    type: 'website',
  }
}

const professionalServiceTypes = [
  { icon: Scale, name: "Law Firms", description: "Attorneys, legal practices, all practice areas" },
  { icon: Calculator, name: "Accounting", description: "CPAs, tax preparation, bookkeeping, audit" },
  { icon: Briefcase, name: "Business Consulting", description: "Management consulting, strategy, operations" },
  { icon: LineChart, name: "Financial Advisory", description: "Wealth management, financial planning, insurance" },
  { icon: Stethoscope, name: "Healthcare", description: "Medical practices, specialists, clinics" },
  { icon: Building2, name: "Real Estate", description: "Agents, brokerages, property management" },
  { icon: Users, name: "HR & Recruiting", description: "Staffing, executive search, HR consulting" },
  { icon: BookOpen, name: "Marketing Agencies", description: "Digital marketing, PR, branding agencies" }
]

const whyGeoMatters = [
  {
    query: "\"Best employment lawyer in [city]\"",
    impact: "83% of B2B buyers now use AI tools during their research phase before contacting vendors"
  },
  {
    query: "\"Find a CPA that specializes in startups\"",
    impact: "AI recommendations carry high trust—users often contact only the businesses mentioned"
  },
  {
    query: "\"Top wealth managers for high net worth\"",
    impact: "High-ticket services see 3x higher conversion from AI referrals vs. cold leads"
  },
  {
    query: "\"Recommend a marketing agency for B2B SaaS\"",
    impact: "Being cited as an expert by AI establishes authority and shortens sales cycles"
  }
]

const services = [
  {
    title: "Authority Building",
    description: "Professional services require demonstrated expertise. We build your topical authority so AI systems recognize you as a go-to expert in your practice area.",
    features: ["Thought leadership content", "Practice area optimization", "Credential highlighting", "Publication & citation building"]
  },
  {
    title: "Local + Specialty Optimization",
    description: "Many professional services queries combine location and specialty. We optimize for both dimensions.",
    features: ["City + practice area pages", "Industry specialization content", "Multi-location optimization", "Service area clarity"]
  },
  {
    title: "Reputation & Trust Signals",
    description: "AI systems consider trust signals when recommending professional services. We help you leverage your reputation.",
    features: ["Review optimization", "Case study integration", "Client testimonial structure", "Award & recognition highlighting"]
  },
  {
    title: "Competitive Positioning",
    description: "When AI compares firms, you want to be positioned favorably. We optimize your content for comparison queries.",
    features: ["Comparison content", "Differentiator highlighting", "Value proposition clarity", "FAQ optimization"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for professional services?",
    answer: "Professional services purchases are high-consideration. Clients research extensively before reaching out. AI tools are increasingly part of that research—83% of B2B buyers now use AI during their buying journey. If AI systems don't recommend you, you're missing qualified leads."
  },
  {
    question: "How is GEO different for professional services vs. other industries?",
    answer: "Professional services require strong authority and trust signals. AI systems are more selective about recommending lawyers, accountants, and consultants because the stakes are higher. We focus heavily on expertise demonstration, credentials, and reputation signals."
  },
  {
    question: "Can GEO help with specific practice areas?",
    answer: "Absolutely. We optimize for both general visibility ('best law firm in [city]') and specialty queries ('employment lawyer for startups,' 'CPA specializing in real estate investors'). Specialty targeting often delivers faster results due to lower competition."
  },
  {
    question: "How do you handle compliance and ethical considerations?",
    answer: "We understand that professional services have advertising restrictions. All content we create complies with bar association rules, CPA regulations, and other professional standards. We focus on educational content that demonstrates expertise without making prohibited claims."
  },
  {
    question: "What's the ROI for professional services GEO?",
    answer: "Professional services typically see strong ROI because client lifetime value is high. One new client from AI visibility can be worth $10,000-$100,000+ depending on your practice. Most firms see positive ROI within 6-12 months of implementation."
  },
  {
    question: "How do you track AI visibility for professional services?",
    answer: "We test AI systems with queries relevant to your services and location. We track when and how you're mentioned, compare against competitors, and monitor improvement. We also track attribution—when new clients mention finding you through AI recommendations."
  }
]

export default function GEOProfessionalServicesPage() {
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
              <Briefcase className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for Professional Services</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Found When Clients Ask AI for{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Professional Services
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When someone asks ChatGPT "who's the best corporate attorney in Dallas" or 
              asks Perplexity "find a CPA for my startup"—your firm should be the recommendation.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Professional Services GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why GEO Matters */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Professional Services Need GEO
            </h2>
            <p className="text-xl text-slate-600">
              Your prospective clients are researching before they reach out. AI is increasingly 
              part of that research process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyGeoMatters.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
                <p className="text-lg font-bold text-slate-900 mb-3">{item.query}</p>
                <p className="text-slate-600">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Professional Services We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of professional service firms get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {professionalServiceTypes.map((service) => (
              <div key={service.name} className="bg-white rounded-xl p-6 text-center border border-slate-200">
                <service.icon className="w-10 h-10 text-rose-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Professional Services GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to dominate AI search for your practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              FAQs for Professional Services GEO
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
            Ready to attract more high-value clients?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your professional services firm. See exactly how visible 
            you are when prospective clients ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Professional Services GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-slate-600 text-sm mb-4 text-center">Related Services:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/services/generative-engine-optimization" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Generative Engine Optimization
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/services/local-seo" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Local Search Authority
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

