import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'Atlanta Operations: Logistics & Systems GEO',
  description: 'Atlanta operational complexity demands strategic positioning. Logistics, corporate, startup GEO aligned with decisions.',
  keywords: 'GEO Atlanta, AI search optimization Atlanta, generative engine optimization Atlanta, ChatGPT SEO Atlanta, Perplexity optimization',
  openGraph: {
    title: 'Atlanta Operations: Logistics & Systems GEO',
    description: 'Atlanta operational complexity demands strategic positioning. Logistics, corporate, startup GEO aligned with decisions.',
    url: 'https://www.webvello.com/services/geo-atlanta',
    type: 'website',
  },
}

export default function GEOAtlantaPage() {
  const faqs = [
    {
      question: "How does Atlanta's logistics network affect GEO strategy?",
      answer: "Atlanta serves as distribution hub for Southeast. Logistics professionals, supply chain managers, and operations leaders search for solutions constantly. GEO positions you in operational queries—how Atlanta's logistics ecosystem actually searches for vendors, not generic B2B terminology."
    },
    {
      question: "Can GEO support Atlanta corporate headquarters operations?",
      answer: "Yes. Atlanta hosts 30+ Fortune 500 headquarters with established procurement systems. GEO ensures visibility in corporate research flows. When procurement teams ask AI for vendor options, being cited accelerates evaluation process. Corporate-scale operations move fast when they move—visibility matters."
    },
    {
      question: "How do you optimize for fintech's startup-to-scale trajectory?",
      answer: "Atlanta fintech grows from startup to Series C to acquisition scale. GEO messaging evolves: early-stage needs angel/VC discovery; growth-stage needs enterprise vendor relationships; scale-stage needs institutional credibility. Positioning adapts to company lifecycle moments."
    },
    {
      question: "What's special about Atlanta's logistics GEO?",
      answer: "Logistics professionals conduct searches driven by operational metrics—cost, speed, reliability. GEO positions you on performance outcomes, not features. Citations should reflect logistics operators' actual decision criteria, not marketing language."
    },
    {
      question: "Can GEO work with Atlanta's professional services scaling?",
      answer: "Absolutely. Professional services firms scale through associate hiring, office expansion, new practice development. GEO supports each scaling moment—visibility for talent recruiting, client acquisition, practice area establishment. Positioning evolves as organization scales."
    },
    {
      question: "How do you handle Atlanta's Buckhead vs. suburban operations split?",
      answer: "Buckhead hosts concentrated corporate and professional services; suburbs host logistics, manufacturing, distribution. Operations differ by location—corporate sophistication differs from operational simplicity. GEO segments positioning by organizational type and location."
    },
    {
      question: "Does Atlanta's infrastructure role create GEO opportunities?",
      answer: "Yes. Atlanta's Hartsfield-Jackson Airport, rail hub, and distribution network create specialized search behaviors. Transportation professionals, logistics operators, supply chain leaders all have distinct search patterns. We optimize for operational roles, not general audience segments."
    },
    {
      question: "What competitive advantage comes from operation-aligned GEO?",
      answer: "Competitors optimize for volume. Atlanta's sophisticated logistics, corporate, and startup ecosystems reward operational understanding. Positioning reflecting actual decision-making processes becomes difficult to match. Operational alignment compounds—buyers recognize genuine sector understanding."
    }
  ]

  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-atlanta',
    title: 'Atlanta Operations: Logistics & Systems GEO',
    description: 'Atlanta operational complexity demands strategic positioning. Logistics, corporate, startup GEO aligned with decisions.',
    geo: {
      city: 'Atlanta',
      cityState: 'Atlanta, GA'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Atlanta', url: 'https://www.webvello.com/services/geo-atlanta' }
    ]
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Clean JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-0"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
            <span className="text-blue-300 font-semibold">AI Search Optimization</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            GEO Services in Atlanta, Georgia
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl">
            <strong>Get your Atlanta business cited by ChatGPT, Perplexity, and Google AI.</strong> Webvello delivers remote GEO services that position your brand for voice search, AI-generated answers, and the next generation of search technology. We serve organizations <Link href="/services/georgia" className="text-blue-300 hover:underline">across Georgia</Link>.
          </p>
        </div>
      </section>

      {/* Direct Answer Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  What is GEO for Atlanta Businesses?
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  <strong>Generative Engine Optimization (GEO)</strong> ensures your Atlanta business appears when potential customers ask AI platforms like ChatGPT, Perplexity, Claude, or Google's AI Overviews about services in your industry. Unlike traditional SEO that targets Google's blue links, GEO optimizes your content to be cited, quoted, and recommended by AI engines that increasingly shape how Atlanta's diverse customer base discovers businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Why GEO Matters in Atlanta
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-lg leading-relaxed mb-6">
              Atlanta's economy spans Fortune 500 headquarters, thriving startups, and diverse service industries. Your customers aren't just Googling anymore - they're asking ChatGPT for recommendations, using Perplexity to research services, and trusting AI-generated answers from Google's Search Generative Experience.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              In a market as competitive as Atlanta, <strong>being invisible to AI search means losing customers to competitors who appear in AI-generated recommendations</strong>. GEO ensures your Atlanta business is cited when it matters most - when potential clients are making purchasing decisions.
            </p>
            <p className="text-lg leading-relaxed">
              This isn't speculative - it's happening now. Voice assistants, AI chatbots, and generative search engines are answering millions of business queries daily. Atlanta's forward-thinking market demands you show up in these AI-powered results.
            </p>
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            How Webvello Delivers GEO Remotely
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We serve Atlanta businesses entirely remotely. No local office needed. Here's what you can expect:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Complete Market Analysis</h3>
                  <p className="text-slate-600">We research how Atlanta customers in your industry use AI search and where your competitors appear.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">AI-Optimized Content</h3>
                  <p className="text-slate-600">We rewrite key pages to be citation-worthy for ChatGPT, Perplexity, and Google's generative AI.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Technical Implementation</h3>
                  <p className="text-slate-600">We implement schema markup, structured data, and AI-readable signals across your website.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Ongoing Monitoring</h3>
                  <p className="text-slate-600">We track your AI citations monthly and adjust strategy based on how engines respond to your content.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-slate-700">
                <strong>Communication:</strong> Expect weekly Slack/email updates, monthly strategy calls, and transparent reporting. We work as an extension of your Atlanta team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our 5-Step GEO Process
          </h2>
          <div className="grid gap-8">
            {[
              {
                number: "01",
                title: "AI Search Audit",
                description: "We test how ChatGPT, Perplexity, Google AI, and Claude currently answer queries related to your Atlanta business. This reveals gaps and opportunities.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                number: "02",
                title: "Content Strategy",
                description: "We identify which pages, topics, and formats will maximize AI citations. This includes analyzing Atlanta market search patterns and competitor positioning.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                number: "03",
                title: "Technical Optimization",
                description: "We implement structured data, schema markup, and AI-readable signals that help generative engines understand and cite your content.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                number: "04",
                title: "Content Deployment",
                description: "We publish AI-optimized content across your site, ensuring each page is structured for maximum citation potential in voice and AI search.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                )
              },
              {
                number: "05",
                title: "Monitor & Refine",
                description: "We track AI citations, measure voice search appearances, and continuously refine your GEO strategy based on real performance data.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-0"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Show Up in AI Search Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how GEO can position your Atlanta business for the next generation of search. No pressure, just a conversation about AI-driven visibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all"
            >
              Get Your Free GEO Audit
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/services/geo-services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              Learn More About GEO
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              All Services
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/services/geo-services" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              GEO Services Overview
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
