import { Button } from '../../../components/ui/button'
import { ArrowRight, Check, X, Zap, TrendingUp, Crown, MapPin, Home, Briefcase, Building2, HelpCircle, Phone, FileText, Rocket } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO & GEO Packages for Local Businesses | Web Vello',
  description: 'Done-for-you SEO & GEO packages for local service businesses across the USA. Get found in Google and AI search. More leads, more calls, more booked jobs.',
  keywords: ['seo packages', 'geo packages', 'local seo services', 'generative engine optimization', 'seo agency', 'local business seo', 'done for you seo'],
  alternates: {
    canonical: 'https://www.webvello.com/services/seo-geo-packages',
  },
  openGraph: {
    title: 'SEO & GEO Packages for Local Businesses | Web Vello',
    description: 'Done-for-you SEO & GEO packages. Get found in Google and AI search.',
    url: 'https://www.webvello.com/services/seo-geo-packages',
    type: 'website',
  }
}

const packages = [
  {
    name: "Starter",
    icon: Zap,
    tagline: "Get found locally",
    description: "For businesses getting started with SEO. Build a solid foundation and start ranking in your primary service area.",
    idealFor: "Local businesses with one location, solo practitioners, new businesses establishing online presence.",
    features: [
      { text: "Local SEO setup & optimization", included: true },
      { text: "Google Business Profile optimization", included: true },
      { text: "Website SEO audit & fixes", included: true },
      { text: "Core service page optimization", included: true },
      { text: "Monthly performance reporting", included: true },
      { text: "Basic GEO content foundation", included: true },
      { text: "Multi-city expansion", included: false },
      { text: "Content marketing system", included: false },
      { text: "Weekly strategy calls", included: false },
    ]
  },
  {
    name: "Growth",
    icon: TrendingUp,
    tagline: "Scale your reach",
    popular: true,
    description: "For businesses ready to dominate their market. Consistent content, multi-city targeting, and full GEO optimization.",
    idealFor: "Growing service businesses, multi-location companies, businesses targeting multiple cities.",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Full GEO content engine", included: true },
      { text: "Regular city page buildout", included: true },
      { text: "Service area expansion", included: true },
      { text: "Blog & content clusters", included: true },
      { text: "Conversion optimization", included: true },
      { text: "Bi-weekly strategy calls", included: true },
      { text: "Priority support", included: true },
      { text: "Dedicated account manager", included: false },
    ]
  },
  {
    name: "Dominator",
    icon: Crown,
    tagline: "Own your market",
    description: "For businesses that want to be the #1 choice in their market—on Google and in AI search. Full-service, aggressive growth.",
    idealFor: "Established companies, regional leaders, businesses ready for aggressive multi-market expansion.",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Aggressive content velocity", included: true },
      { text: "Multi-market domination", included: true },
      { text: "Advanced link building", included: true },
      { text: "Custom landing pages", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Weekly strategy calls", included: true },
      { text: "Custom integrations", included: true },
      { text: "White-label options", included: true },
    ]
  }
]

const coreInclusions = [
  {
    title: "Strategy & Keyword Research",
    description: "We research your market, competitors, and opportunities. Every action is backed by data."
  },
  {
    title: "Website or Funnel Optimization",
    description: "We optimize your existing site or build conversion-focused pages that turn visitors into leads."
  },
  {
    title: "Local SEO Setup & Optimization",
    description: "Google Business Profile, citations, reviews, and local signals to dominate your service area."
  },
  {
    title: "GEO Content Engine",
    description: "City pages, service pages, and blog clusters that get you found in Google and AI search."
  },
  {
    title: "Technical SEO Foundation",
    description: "Site speed, mobile optimization, schema markup, and the technical basics that matter."
  },
  {
    title: "Tracking & Reporting",
    description: "Clear reporting on rankings, traffic, leads, and the metrics that actually matter to your business."
  }
]

const processSteps = [
  {
    step: "1",
    title: "Strategy",
    description: "We learn your business, market, and goals. We research keywords, competitors, and opportunities."
  },
  {
    step: "2",
    title: "Build",
    description: "We optimize your website, create landing pages, and build the content foundation."
  },
  {
    step: "3",
    title: "Optimize",
    description: "On-page SEO, local SEO, technical fixes, and conversion optimization to maximize results."
  },
  {
    step: "4",
    title: "Scale",
    description: "We add more cities, more services, more content clusters. Continuous growth, month after month."
  }
]

const industries = [
  {
    category: "Home Services",
    icon: Home,
    description: "HVAC, plumbing, roofing, electrical, landscaping, painting, remodeling, cleaning, and more.",
    howWeHelp: "We build city pages for every area you serve, create content that answers what homeowners search for, and get you found when someone asks AI 'who's the best plumber near me.' More visibility means more calls."
  },
  {
    category: "Professional Services",
    icon: Briefcase,
    description: "Doctors, dentists, lawyers, accountants, financial advisors, therapists, and specialized practitioners.",
    howWeHelp: "Trust matters in professional services. We build authority through quality content, reviews, and E-E-A-T signals. When someone asks AI for a recommendation, you're the answer."
  },
  {
    category: "Real Estate & Property",
    icon: Building2,
    description: "Real estate agents, property managers, investors, home buyers/sellers, and property-related services.",
    howWeHelp: "Real estate is hyperlocal. We target specific neighborhoods, create market-specific content, and position you as the local expert—in Google and in AI search."
  }
]

const faqs = [
  {
    question: "How long before I see results?",
    answer: "Most clients see initial improvements within 60-90 days. Significant traffic and lead growth typically happens by month 4-6. SEO and GEO are long-term strategies that compound over time—the longer you invest, the stronger your results become."
  },
  {
    question: "Do you build the website too, or just do SEO?",
    answer: "We do both. If you need a new website, we can build one as part of your package or as a separate project. If you have an existing website, we'll optimize what you have. Either way, we make sure your site is built to convert."
  },
  {
    question: "Can you help me rank in multiple cities?",
    answer: "Yes. Multi-city expansion is a core part of our Growth and Dominator packages. We create targeted city pages, build local signals for each area, and systematically expand your service area footprint."
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer: "No. We work month-to-month because we believe our results should earn your business, not a contract. That said, SEO and GEO are long-term strategies—clients who commit for 6-12 months see the best results."
  },
  {
    question: "What's the difference between your SEO & GEO approach and a regular SEO agency?",
    answer: "Most SEO agencies focus only on Google rankings. We optimize for both Google AND AI search (ChatGPT, Perplexity, Google AI Overviews). As more people use AI to find businesses, having visibility in both channels is critical."
  },
  {
    question: "How do we measure success?",
    answer: "We track rankings, traffic, and visibility—but ultimately, we measure success by leads and revenue. You'll get regular reports showing keyword rankings, organic traffic, AI visibility improvements, and most importantly, the leads and calls you're receiving."
  },
  {
    question: "Can I start small and scale up later?",
    answer: "Absolutely. Many clients start with our Starter package to build the foundation, then upgrade to Growth or Dominator as they see results. We make it easy to scale your investment as your business grows."
  },
  {
    question: "What industries do you work with?",
    answer: "We specialize in local service businesses: home services (HVAC, plumbing, roofing, etc.), professional services (medical, legal, financial), and real estate. If you serve customers in a specific geographic area, we can help."
  },
  {
    question: "What is GEO and why does it matter?",
    answer: "GEO stands for Generative Engine Optimization. It's about getting your business mentioned in AI-generated answers—when someone asks ChatGPT or Perplexity for a recommendation. Over a billion people now use AI search tools monthly. If you're not visible there, you're missing customers."
  },
  {
    question: "Do you guarantee results?",
    answer: "We don't make fake guarantees. What we can guarantee is our process: proven strategies, consistent execution, transparent reporting, and a team that's obsessed with your results. Our track record speaks for itself."
  },
  {
    question: "How involved do I need to be?",
    answer: "We handle the work—that's what 'done-for-you' means. You'll have regular calls to review progress and provide input on your business, but you don't need to manage anything day-to-day. We run it; you focus on running your business."
  },
  {
    question: "What happens if I want to cancel?",
    answer: "You can cancel anytime with 30 days notice. We'll provide a full handoff of everything we've built—your website, content, accounts, and data are yours. No hostage situations."
  }
]

export default function SEOGEOPackagesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            SEO & GEO Packages That{' '}
            <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
              Bring You Leads
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed">
            We help local service businesses across the USA get found on Google and in AI search. 
            More visibility. More calls. More booked jobs.
          </p>
          
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Web development. SEO. GEO. Done for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get a Custom SEO & GEO Plan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-14 px-8 border-white/20 text-white hover:bg-white/10 font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="#packages">
                View Packages
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is GEO */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              What Is GEO (Generative Engine Optimization) and Why It Matters Now
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="text-xl leading-relaxed mb-6">
              When someone asks ChatGPT "who's the best plumber in Phoenix" or asks Perplexity 
              "find me a roofer near me"—is your business in the answer?
            </p>
            
            <p className="leading-relaxed mb-6">
              That's GEO: <strong>Generative Engine Optimization</strong>. It's about getting your 
              business visible not just in Google search results, but in AI-generated answers and 
              recommendations.
            </p>
            
            <p className="leading-relaxed mb-6">
              Over <strong>1.2 billion people</strong> now use AI search tools monthly. When they 
              ask for business recommendations, AI pulls from structured content, authoritative 
              sources, and well-organized information. If your website isn't optimized for how AI 
              reads and recommends, you're invisible to this massive audience.
            </p>
            
            <p className="leading-relaxed">
              GEO isn't about tricks or hacks. It's about <strong>content quality, coverage, and 
              structure</strong>. City pages that establish you as a local expert. Service pages that 
              answer real customer questions. Blog content that builds topical authority. The same 
              things that make you rank in Google also make AI recommend you—when done right.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our SEO & GEO Packages at a Glance
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Three tiers designed to meet you where you are and scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 transition-all ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl ring-2 ring-rose-500/50 scale-105' 
                    : 'bg-white border border-slate-200 hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs font-bold rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    pkg.popular ? 'bg-white/10' : 'bg-rose-50'
                  }`}>
                    <pkg.icon className={`w-6 h-6 ${pkg.popular ? 'text-rose-400' : 'text-rose-500'}`} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm ${pkg.popular ? 'text-white/60' : 'text-slate-500'}`}>
                      {pkg.tagline}
                    </p>
                  </div>
                </div>
                
                <p className={`mb-4 ${pkg.popular ? 'text-white/80' : 'text-slate-600'}`}>
                  {pkg.description}
                </p>
                
                <p className={`text-sm mb-6 ${pkg.popular ? 'text-white/60' : 'text-slate-500'}`}>
                  <strong>Ideal for:</strong> {pkg.idealFor}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-rose-400' : 'text-rose-500'}`} />
                      ) : (
                        <X className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-white/30' : 'text-slate-300'}`} />
                      )}
                      <span className={`text-sm ${
                        feature.included 
                          ? (pkg.popular ? 'text-white/90' : 'text-slate-700')
                          : (pkg.popular ? 'text-white/50' : 'text-slate-600')
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full h-12 font-semibold rounded-xl transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                  asChild
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-8 text-slate-600">
            Not sure which package is right for you?{' '}
            <Link href="/contact" className="text-rose-500 font-semibold hover:text-rose-600">
              Let's talk and figure it out together →
            </Link>
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What's Included in Every Package
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Every package includes the core elements you need to rank and convert.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreInclusions.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-rose-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How We Turn SEO & GEO into Leads
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A clear, repeatable process that delivers results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Who Our SEO & GEO Packages Are Perfect For
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We specialize in local service businesses that depend on visibility to grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.category} className="bg-slate-50 rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center mb-6">
                  <industry.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.category}</h3>
                <p className="text-slate-500 text-sm mb-4">{industry.description}</p>
                <p className="text-slate-700">{industry.howWeHelp}</p>
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
              FAQs About Our SEO & GEO Packages
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Next Steps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-rose-400" />
              </div>
              <p className="text-white font-semibold mb-2">1. Tell Us About Your Business</p>
              <p className="text-white/60 text-sm">Fill out a short form or book a call.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-rose-400" />
              </div>
              <p className="text-white font-semibold mb-2">2. We Audit Your Market</p>
              <p className="text-white/60 text-sm">We research your online presence and opportunities.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-rose-400" />
              </div>
              <p className="text-white font-semibold mb-2">3. We Propose a Plan</p>
              <p className="text-white/60 text-sm">A custom package tailored to your goals and budget.</p>
            </div>
          </div>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Tell us about your business and we'll map out exactly how SEO & GEO can grow your leads.
          </p>
          
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Request Your Custom SEO & GEO Package
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          
          <p className="text-white/50 text-sm mt-6">
            No pressure. No commitment. Just a conversation about what's possible.
          </p>
        </div>
      </section>
    </div>
  )
}

