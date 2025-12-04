import { Button } from '../../../components/ui/button'
import { 
  ArrowRight, CheckCircle, Zap, Target, TrendingUp, 
  Brain, MessageSquare, Search, Globe, BarChart3,
  Building2, Users, Award, Clock, Shield, Sparkles
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Services | Generative Engine Optimization Agency | Web Vello',
  description: 'Get found in AI search results. Our GEO services optimize your business for ChatGPT, Perplexity, Google SGE, and Claude. Increase AI visibility and capture leads from the new search landscape.',
  keywords: ['geo services', 'generative engine optimization', 'ai seo agency', 'chatgpt optimization', 'perplexity optimization', 'google sge optimization', 'ai search optimization'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-services',
  },
  openGraph: {
    title: 'GEO Services | AI Search Optimization | Web Vello',
    description: 'Get your business found in AI search results. We optimize for ChatGPT, Perplexity, Google SGE, and more.',
    url: 'https://www.webvello.com/services/geo-services',
    type: 'website',
  }
}

const whyGeoMatters = [
  {
    stat: "1.2B+",
    label: "Monthly AI users",
    description: "People actively using ChatGPT, Claude, and Perplexity for search"
  },
  {
    stat: "64%",
    label: "Prefer AI to Google",
    description: "Users under 35 now prefer asking AI over traditional search"
  },
  {
    stat: "84%",
    label: "SGE in commercial queries",
    description: "Google's AI results appear in most money-making searches"
  },
  {
    stat: "59%",
    label: "Zero-click searches",
    description: "Users get answers without ever visiting a website"
  }
]

const services = [
  {
    icon: Brain,
    title: "AI Content Optimization",
    description: "We restructure your content so AI systems can easily extract and cite your information. Clear entities, fact blocks, and semantic structure.",
    deliverables: ["Content audit", "Entity optimization", "Fact block creation", "Semantic restructuring"]
  },
  {
    icon: Search,
    title: "Schema & Structured Data",
    description: "Comprehensive schema markup that helps AI understand your business, services, and expertise. Organization, LocalBusiness, Service, FAQ schemas.",
    deliverables: ["Schema audit", "Custom implementation", "Rich result optimization", "Testing & validation"]
  },
  {
    icon: Target,
    title: "Topical Authority Building",
    description: "Content clusters that establish your brand as the definitive source on topics in your industry. AI systems cite authoritative sources.",
    deliverables: ["Topic cluster strategy", "Pillar content creation", "Supporting content", "Internal linking"]
  },
  {
    icon: MessageSquare,
    title: "AI Answer Optimization",
    description: "Direct optimization for how AI systems construct answers. We analyze what AI is saying about your industry and position you as the answer.",
    deliverables: ["AI response monitoring", "Citation optimization", "Query analysis", "Ongoing iteration"]
  },
  {
    icon: Globe,
    title: "Local GEO",
    description: "Optimize for local AI queries. When someone asks 'best plumber in Phoenix' to ChatGPT, your business should be mentioned.",
    deliverables: ["Local entity optimization", "City page creation", "Service area content", "Local authority building"]
  },
  {
    icon: BarChart3,
    title: "GEO Analytics & Reporting",
    description: "Track your AI visibility with custom monitoring. See when and how AI systems mention your brand and measure growth over time.",
    deliverables: ["AI visibility tracking", "Citation monitoring", "Monthly reports", "Strategy adjustments"]
  }
]

const process = [
  {
    step: "1",
    title: "GEO Audit",
    description: "We analyze your current AI visibility. What are AI systems saying about your industry? Where do you appear? Where are the gaps?",
    duration: "Week 1"
  },
  {
    step: "2",
    title: "Strategy Development",
    description: "Based on the audit, we create a prioritized roadmap. Quick wins first, then systematic authority building.",
    duration: "Week 2"
  },
  {
    step: "3",
    title: "Technical Implementation",
    description: "Schema markup, content restructuring, entity optimization. The foundational work that makes AI systems understand you.",
    duration: "Weeks 3-4"
  },
  {
    step: "4",
    title: "Content Development",
    description: "New content optimized for AI extraction. Topical clusters, FAQ pages, comparison content, how-to guides.",
    duration: "Weeks 5-8"
  },
  {
    step: "5",
    title: "Monitor & Iterate",
    description: "Track AI responses, measure citations, refine content. GEO is ongoing—AI systems evolve, and so does our strategy.",
    duration: "Ongoing"
  }
]

const industries = [
  { name: "Home Services", examples: "Plumbing, HVAC, Roofing, Electrical" },
  { name: "Professional Services", examples: "Legal, Accounting, Consulting" },
  { name: "Healthcare", examples: "Dentists, Doctors, Clinics, Surgeons" },
  { name: "Real Estate", examples: "Agents, Property Management, Commercial" },
  { name: "SaaS & Technology", examples: "Software, Apps, B2B Tech" },
  { name: "E-commerce", examples: "Retail, D2C, Marketplaces" },
  { name: "Financial Services", examples: "Insurance, Mortgage, Wealth Management" },
  { name: "Automotive", examples: "Dealers, Repair Shops, Detailing" }
]

const faqs = [
  {
    question: "What exactly is GEO and why do I need it?",
    answer: "GEO (Generative Engine Optimization) is optimizing your website so AI search tools like ChatGPT, Perplexity, and Google SGE mention and recommend your business. With over 1 billion people now using AI for search, you need to be visible where your customers are looking. Traditional SEO gets you ranked in Google's 10 blue links—GEO gets you mentioned in AI-generated answers."
  },
  {
    question: "How is GEO different from regular SEO?",
    answer: "SEO focuses on ranking URLs in search results. GEO focuses on getting your information extracted and cited by AI systems. SEO uses keywords and backlinks. GEO uses entities, structured data, and semantic content. You need both—SEO for traditional search traffic, GEO for AI visibility. They work together, but require different optimization approaches."
  },
  {
    question: "How quickly will I see results from GEO?",
    answer: "Initial visibility improvements typically appear within 4-8 weeks for niche queries. Broader competitive terms take 3-6 months. Full market impact with consistent AI citations usually requires 6-12 months of sustained effort. We focus on quick wins first—low-competition queries where we can get you mentioned fast—while building toward bigger targets."
  },
  {
    question: "Can you guarantee I'll appear in ChatGPT or Perplexity?",
    answer: "No one can guarantee AI responses—they're dynamic and vary by user, location, and context. What we can guarantee is implementing proven optimization strategies that significantly increase your chances of being cited. Our clients consistently see improved AI visibility after implementation. We track and measure this so you can see the progress."
  },
  {
    question: "Do I need a new website for GEO?",
    answer: "No. GEO works with your existing website. We optimize your current content structure, add schema markup, and create new content that builds on what you have. Sometimes we recommend website improvements, but GEO doesn't require starting from scratch."
  },
  {
    question: "How much does GEO cost?",
    answer: "GEO services range from $2,500/month for small businesses to $10,000+/month for enterprise. The investment depends on your industry competitiveness, current website state, and goals. We offer a free audit to assess your situation and provide a custom quote. Most clients see positive ROI within 6-12 months."
  },
  {
    question: "Which AI platforms do you optimize for?",
    answer: "We optimize for all major AI search platforms: ChatGPT (OpenAI), Claude (Anthropic), Perplexity AI, Google SGE/AI Overviews, and Gemini. The good news is that content optimized properly works across all platforms—they share similar principles for extracting and citing information."
  },
  {
    question: "I'm a local business. Does GEO work for me?",
    answer: "Absolutely. Local GEO is one of our specialties. When someone asks AI 'Who's the best dentist in Austin?' or 'Find me a plumber in Chicago,' your business should be mentioned. We create location-specific content, optimize your local entity, and build the topical authority that makes AI recommend local businesses."
  }
]

export default function GEOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">The future of search is AI. Are you visible?</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Found in{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                AI Search Results
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              1.2 billion people use ChatGPT, Perplexity, and Google SGE every month. 
              When they search for businesses like yours, do AI systems mention you? 
              Our GEO services make sure they do.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
                asChild
              >
                <Link href="/contact">
                  Get Free GEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 border-white/20 text-white hover:bg-white/10 font-semibold rounded-xl"
                asChild
              >
                <Link href="/blog/what-is-generative-engine-optimization-geo-2025">
                  Learn About GEO
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why GEO Matters Stats */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why GEO Matters Right Now
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The search landscape has fundamentally changed. Here's what the data says.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {whyGeoMatters.map((item) => (
              <div key={item.label} className="text-center p-6 rounded-2xl bg-slate-50">
                <p className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </p>
                <p className="text-lg font-semibold text-slate-900 mb-2">{item.label}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-rose-500 font-semibold mb-3">Our GEO Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Everything you need to dominate AI search
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive optimization for ChatGPT, Perplexity, Google SGE, Claude, and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-rose-500 font-semibold mb-3">How we work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our GEO Process
            </h2>
            <p className="text-xl text-slate-600">
              A systematic approach that delivers measurable AI visibility improvements.
            </p>
          </div>
          
          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={item.step} className="flex gap-8 items-start">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 pb-8 border-b border-slate-200 last:border-0">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">{item.duration}</span>
                  </div>
                  <p className="text-slate-600">{item.description}</p>
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
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              GEO works for any business that wants to be found when customers ask AI for recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-500">{industry.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-rose-500 font-semibold mb-3">Why Web Vello</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                GEO specialists, not generalists
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We've been optimizing for AI search since before it was mainstream. 
                While other agencies are still figuring out what GEO means, we're 
                getting our clients cited in AI responses.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Early GEO adopters</h3>
                    <p className="text-slate-600">We've been studying and implementing GEO strategies since AI search emerged. Real experience, not theory.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Senior team only</h3>
                    <p className="text-slate-600">Your project is handled by experienced strategists. No handoffs to juniors.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Full transparency</h3>
                    <p className="text-slate-600">Weekly updates, shared dashboards, clear reporting. You always know what's happening and why.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">No long contracts</h3>
                    <p className="text-slate-600">Month-to-month after initial setup. We earn your business with results, not contracts.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Get Your Free GEO Audit</h3>
              <p className="text-white/70 mb-8">
                Find out how visible your business is in AI search results. 
                We'll show you exactly where you stand and what opportunities exist.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-400" />
                  <span>AI visibility analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-400" />
                  <span>Competitor comparison</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-400" />
                  <span>Quick-win opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-400" />
                  <span>Custom recommendations</span>
                </li>
              </ul>
              <Button
                className="w-full h-14 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
                asChild
              >
                <Link href="/contact">
                  Request Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about GEO and our services.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Services</h2>
            <p className="text-xl text-slate-600">GEO works best combined with these services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/ai-seo" className="group p-8 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all">
              <Zap className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-500">AI SEO</h3>
              <p className="text-slate-600">Traditional SEO enhanced with AI-powered strategies.</p>
            </Link>
            
            <Link href="/services/local-seo" className="group p-8 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all">
              <Globe className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-500">Local SEO</h3>
              <p className="text-slate-600">Dominate local search with Google Business Profile optimization.</p>
            </Link>
            
            <Link href="/services/content-marketing" className="group p-8 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all">
              <TrendingUp className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-500">Content Marketing</h3>
              <p className="text-slate-600">Strategic content that builds authority and drives traffic.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-rose-500/20 via-orange-500/10 to-transparent rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to get found in AI search?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Your competitors are already optimizing for AI. Don't let them capture your market share 
            in the new search landscape. Get started with a free GEO audit.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl shadow-lg shadow-rose-500/25"
            asChild
          >
            <Link href="/contact">
              Get Your Free GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <p className="mt-6 text-white/50 text-sm">
            Free analysis · No commitment · Response within 24 hours
          </p>
        </div>
      </section>
    </div>
  )
}

