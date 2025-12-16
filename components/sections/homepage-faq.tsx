'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { homepageFAQData } from '@/lib/homepage-faq-data'

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
            <HelpCircle className="w-4 h-4 mr-2" />
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
          {homepageFAQData.map((faq, index) => (
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
