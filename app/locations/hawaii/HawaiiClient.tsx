'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ArrowRight, MapPin, TrendingUp, Award, CheckCircle, Zap, Video, BarChart3, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function HawaiiClient() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index)
  }

  const locations = [
    {
      city: 'Honolulu',
      island: 'Oahu',
      slug: 'honolulu',
      description: 'Enterprise-grade SEO & web development for Honolulu\'s competitive markets. Built for medical practices, law firms, real estate agencies, and businesses that demand results. Serving Waikiki, Ala Moana, Downtown, and all of Oahu.',
      stats: ['Enterprise-ready', '340% avg ROI', 'Multi-location SEO'],
      highlights: [
        'Competitive market expertise',
        'Enterprise-grade solutions',
        'AI search optimization (GEO)',
        'Healthcare & legal focus'
      ]
    },
    {
      city: 'Kona',
      island: 'Big Island',
      slug: 'kona',
      description: 'Technical SEO & web design for Big Island businesses. We help Kona businesses in tourism, hospitality, and local services dominate Google and AI search platforms. Serving Kailua-Kona, Keauhou, Captain Cook, and surrounding areas.',
      stats: ['300%+ traffic growth', 'Tourism-focused', 'AI search optimized'],
      highlights: [
        'Tourism & hospitality expertise',
        'Local search dominance',
        'Visitor economy focus',
        'Big Island market knowledge'
      ]
    }
  ]

  const faqs = [
    {
      question: "Do you have a physical office in Hawaii?",
      answer: "No, Webvello operates remotely, which allows us to keep costs low and deliver faster results. We serve Hawaii businesses (and clients nationwide) through video calls, project management tools, and real-time dashboards. Most of our Hawaii clients prefer this model—it's more flexible, eliminates commute time, and provides better value. You'll have a dedicated team, regular check-ins, and 24/7 access to performance dashboards."
    },
    {
      question: "How do you understand Hawaii's market if you're remote?",
      answer: "We've worked with dozens of Hawaii businesses across Oahu, Big Island, Maui, and Kauai—from hotels and tour operators to medical practices and law firms. We research your local competitors, analyze Hawaii-specific search trends, and tailor strategies to the islands' unique visitor economy, seasonal patterns, and geo-targeted search behavior. Our remote model actually allows us to serve multiple Hawaii markets simultaneously with specialized expertise."
    },
    {
      question: "What's your onboarding process for Hawaii businesses?",
      answer: "Simple: (1) Schedule a free 30-minute strategy call to discuss your goals. (2) We audit your site and competitors, then send a custom proposal. (3) Once approved, we hold a kick-off meeting (video), grant dashboard access, and start work immediately. Most Hawaii clients are onboarded within 3–5 business days. You'll have a dedicated project manager and weekly updates throughout the engagement."
    },
    {
      question: "Can you help with both Honolulu and neighbor island businesses?",
      answer: "Absolutely. We serve businesses across all Hawaiian islands—Oahu (Honolulu, Pearl City, Kailua), Big Island (Kona, Hilo), Maui (Kahului, Lahaina), Kauai (Lihue, Poipu), and more. Each island has unique market dynamics, and we tailor SEO and web strategies accordingly. Whether you're a Waikiki hotel or a Kona coffee farm, we build strategies specific to your local market."
    },
    {
      question: "How long does it take to see SEO results in Hawaii?",
      answer: "Most Hawaii clients see initial ranking improvements within 4–8 weeks and significant traffic growth by month 3–4. Competitive keywords (e.g., \"Honolulu lawyer\" or \"Kona hotel\") take longer, while long-tail and local keywords rank faster. We provide weekly updates and monthly reports so you can track progress in real time. SEO is a long-term investment, but Hawaii markets are less saturated than mainland cities, which often means faster results."
    },
    {
      question: "Do you work with Hawaii-specific industries like tourism and hospitality?",
      answer: "Yes. We have deep experience with Hawaii's key industries: hotels, vacation rentals, tour operators, restaurants, real estate agencies, medical practices, law firms, and local service businesses. We understand the visitor economy, seasonal traffic patterns, and how to optimize for both tourists (research phase) and locals (transactional searches). Many of our Hawaii clients are in tourism and hospitality."
    },
    {
      question: "What makes Webvello different from Hawaii-based agencies?",
      answer: "Three things: (1) Technical expertise—we're engineers first, marketers second. We fix Core Web Vitals, mobile performance, and technical SEO issues that local agencies often miss. (2) AI search optimization (GEO)—we optimize for ChatGPT, Perplexity, and Google SGE, which is critical as travelers increasingly use AI to research Hawaii trips. (3) Transparent pricing and reporting—you'll always know what we're doing, why, and what results you're getting. No fluff, no long-term contracts, just results."
    }
  ]

  return (
    <main>
      <div className="min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Locations', href: '/locations' },
                { label: 'Hawaii', href: '/locations/hawaii' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white mb-6 ring-1 ring-white/20">
                <Award className="h-4 w-4" />
                <span>Serving All Hawaiian Islands • Remote-First Agency</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Hawaii SEO & Web Design{' '}
                <span className="text-primary-400">Services</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Professional digital marketing for Hawaiian businesses. We help Oahu, Big Island, and island-wide businesses dominate search engines and AI platforms through technical SEO, GEO optimization, and high-performance web development. Fully remote onboarding and support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  size="lg"
                  className="bg-primary-600 text-white hover:bg-primary-700 px-10 py-4 text-lg font-semibold rounded-xl shadow-xl"
                  asChild
                >
                  <Link href="/contact">
                    Get Free Strategy Session
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/40 text-white bg-white/10 hover:bg-white/20 px-10 py-4 text-lg font-semibold rounded-xl"
                  asChild
                >
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary-400" />
                  <span className="text-sm">500+ Businesses Served</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary-400" />
                  <span className="text-sm">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary-400" />
                  <span className="text-sm">300%+ Avg Traffic Growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Remote Work Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 mb-6">
                  <Video className="h-4 w-4" />
                  <span>Remote-First Agency</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                  How We Serve Hawaii Businesses Remotely
                </h2>
                <p className="text-xl text-secondary-600">
                  Professional digital marketing services delivered seamlessly across all Hawaiian islands
                </p>
              </div>

              <div className="space-y-8 mb-12">
                <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">
                    Built for Remote Collaboration
                  </h3>
                  <p className="text-secondary-700 leading-relaxed">
                    Webvello operates as a remote-first agency, which means we've perfected the art of serving businesses across Hawaii (and nationwide) without needing a physical office in every city. Our Hawaii clients—from Honolulu medical practices to Kona hotels—receive the same enterprise-grade service, strategic guidance, and technical expertise as if we were sitting across the table.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">
                    Seamless Onboarding & Ongoing Support
                  </h3>
                  <p className="text-secondary-700 leading-relaxed">
                    We start every engagement with a comprehensive video strategy session to understand your business, goals, and competitive landscape. From there, we handle everything: technical SEO audits, website development, content creation, and ongoing optimization. You'll have a dedicated project manager, real-time dashboards to track performance, and weekly updates via Slack or email. Most of our Hawaii clients prefer this model—it's faster, more flexible, and eliminates the overhead of traditional agency meetings while delivering better results.
                  </p>
                </div>
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    step: "1",
                    title: "Discovery Call",
                    description: "30-minute strategy session (video) to understand your business, current challenges, and growth goals."
                  },
                  {
                    step: "2",
                    title: "Audit & Proposal",
                    description: "We audit your site, competitors, and local market, then deliver a custom proposal with clear pricing and timelines."
                  },
                  {
                    step: "3",
                    title: "Onboarding",
                    description: "Kick-off meeting, access to dashboards, and introduction to your dedicated team. Work begins immediately."
                  },
                  {
                    step: "4",
                    title: "Execution & Reporting",
                    description: "We execute the strategy, provide weekly updates, and hold monthly review calls to track ROI and optimize."
                  }
                ].map((process) => (
                  <div key={process.step} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold">
                        {process.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2">{process.title}</h4>
                        <p className="text-sm text-secondary-600 leading-relaxed">{process.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-secondary-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 mb-6">
                <MapPin className="h-4 w-4" />
                <span>Our Service Areas</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
                Hawaii Service Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Specialized digital marketing services tailored to each island's unique business landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locations.map((location) => (
                <div
                  key={location.slug}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-1"
                >
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-1">
                        {location.city}
                      </h3>
                      <p className="text-sm text-secondary-600">{location.island}</p>
                    </div>
                  </div>

                  <p className="text-secondary-700 mb-6 leading-relaxed">
                    {location.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {location.stats.map((stat, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    {location.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm text-secondary-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/locations/hawaii/${location.slug}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    View {location.city} Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-secondary-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                Services We Offer in Hawaii
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Comprehensive digital marketing solutions for Hawaiian businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Technical SEO', href: '/services/seo' },
                { name: 'AI Search Optimization (GEO)', href: '/services/generative-engine-optimization' },
                { name: 'Web Development', href: '/services/web-development' },
                { name: 'Local SEO', href: '/services/local-seo' },
                { name: 'Web Design', href: '/services/website-design' },
                { name: 'Digital Marketing', href: '/services/digital-marketing' }
              ].map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-primary-300"
                >
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {service.name}
                  </h3>
                  <span className="text-primary-600 text-sm font-medium">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 mb-6">
                <Zap className="h-4 w-4" />
                <span>Common Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-secondary-600">
                Answers to common questions about working with Webvello remotely
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <h3 className="text-lg lg:text-xl font-semibold text-secondary-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                        openFAQIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <p className="text-secondary-700 leading-relaxed text-base lg:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Hawaii Business?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Schedule a free 30-minute strategy session to discuss your goals, competitive landscape, and how we can help you dominate search across Hawaii's islands. No pressure, no sales pitch—just honest advice on what's working in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl shadow-xl"
                asChild
              >
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-10 py-4 text-lg font-semibold rounded-xl"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
