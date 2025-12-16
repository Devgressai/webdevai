'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is Webvello?",
    answer: "Webvello is a digital marketing agency specializing in SEO (Search Engine Optimization), GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), and custom web development. Webvello helps businesses improve their visibility in both traditional search engines like Google and AI-powered search platforms like ChatGPT, Perplexity, and Google AI Overviews. The agency serves businesses across the United States with data-driven strategies, transparent reporting, and conversion-focused design."
  },
  {
    question: "What services does Webvello offer?",
    answer: "Webvello offers three core digital marketing services: AI-powered SEO (search engine optimization using artificial intelligence and machine learning), Local SEO (geo-targeted optimization to dominate local search results in specific cities and regions), and Custom Web Development (conversion-focused website design and development using React and Tailwind CSS). Additional services include GEO (Generative Engine Optimization) for AI search platforms, AEO (Answer Engine Optimization) for voice search and featured snippets, and content strategy."
  },
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer: "SEO (Search Engine Optimization) focuses on improving rankings in traditional search engines like Google and Bing. AEO (Answer Engine Optimization) optimizes content for voice search assistants and featured snippets, structuring information so search engines can extract direct answers. GEO (Generative Engine Optimization) specifically targets AI-powered search platforms like ChatGPT, Perplexity, Claude, and Google AI Overviews, ensuring businesses are cited when users ask questions to AI systems. Webvello integrates all three approaches for comprehensive search visibility."
  },
  {
    question: "How long does SEO take to show results?",
    answer: "SEO timelines vary based on competition, industry, and current website authority. Most Webvello clients see initial improvements within 30 days (technical issues resolved, long-tail keyword rankings). Significant organic traffic increases typically occur within 90-120 days. Sustainable, compounding results develop over 6-12 months. SEO is a long-term investment—results continue improving month after month when maintained properly."
  },
  {
    question: "Does Webvello work with businesses in my industry?",
    answer: "Yes. Webvello has served clients across 50+ industries including professional services (law firms, accounting, consulting), healthcare, technology, e-commerce, real estate, home services (HVAC, plumbing, roofing), restaurants, and B2B companies. The data-driven approach adapts to each industry's unique competitive landscape, audience behavior, and search patterns. Webvello serves businesses across 37+ major US cities."
  },
  {
    question: "What is included in Webvello's web development services?",
    answer: "Webvello's custom web development includes: strategic UX/UI design, mobile-first responsive development using React and Tailwind CSS, SEO-optimized code and site architecture, Core Web Vitals optimization for fast load times, conversion rate optimization, security implementation, content management system integration, analytics setup, and ongoing maintenance. Every website is custom-built for specific business goals—not from generic templates."
  },
  {
    question: "How is Webvello different from other digital marketing agencies?",
    answer: "Webvello differentiates through four key factors: (1) AI-Powered Technology that analyzes data patterns competitors miss, (2) Transparent Reporting with weekly updates and shared dashboards, (3) Senior-Level Team with certified strategists working directly on accounts, and (4) Results-Focused Approach measured by outcomes rather than activities. The agency specializes in emerging optimization categories including GEO and AEO alongside traditional SEO."
  },
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer: "Generative Engine Optimization (GEO) is the practice of optimizing digital content to be cited and referenced by AI-powered search platforms and large language models. This includes ChatGPT, Perplexity, Claude, Google AI Overviews (formerly SGE), and Microsoft Copilot. GEO focuses on creating clear, factual, structured content that AI systems can understand and quote accurately. Webvello implements GEO strategies alongside traditional SEO for comprehensive search visibility."
  }
]

export function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-secondary-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
            <MessageCircleQuestion className="w-4 h-4 mr-2" />
            Common Questions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Answers to common questions about Webvello's SEO, GEO, AEO, and web development services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg lg:text-xl font-semibold text-secondary-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
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

        {/* CTA After FAQ */}
        <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <p className="text-lg text-secondary-700 mb-6">
            Have more questions about SEO, GEO, or web development?
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>

      </div>
    </section>
  )
}

// Export FAQ data for schema generation
export const homepageFAQData = faqs
