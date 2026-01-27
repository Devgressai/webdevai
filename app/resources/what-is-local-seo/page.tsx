import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Search, TrendingUp, CheckCircle, FileText, ExternalLink } from 'lucide-react'
import { BOFULeadForm } from '@/components/forms/bofu-lead-form'
// Note: trackCTA removed - server components can't use onClick handlers

export const metadata: Metadata = {
  title: 'What is Local SEO? Complete Guide for 2024 | Web Vello',
  description: 'Learn what local SEO is, how it works, and why it matters for local businesses. Complete guide to local search optimization, Google Business Profile, and local citations.',
  keywords: ['what is local seo', 'local seo guide', 'local search optimization', 'google business profile', 'local seo explained'],
  alternates: {
    canonical: 'https://www.webvello.com/resources/what-is-local-seo',
  },
  openGraph: {
    title: 'What is Local SEO? Complete Guide for 2024',
    description: 'Learn what local SEO is, how it works, and why it matters for local businesses. Complete guide to local search optimization.',
    url: 'https://www.webvello.com/resources/what-is-local-seo',
    type: 'article',
  },
}

export default function WhatIsLocalSEOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/resources" className="hover:text-blue-600">Resources</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">What is Local SEO?</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is Local SEO? Complete Guide for 2024
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Local SEO helps businesses appear in local search results when customers search for products or services in their area. Learn how it works and why it's essential for local businesses.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Local SEO</h2>
            <p className="text-lg text-gray-700 mb-6">
              Local SEO (Search Engine Optimization) is the practice of optimizing your online presence to attract more business from relevant local searches. When someone searches for "plumber near me" or "best restaurant in [city]," local SEO helps your business appear in those results.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Unlike traditional SEO that targets broad, national keywords, local SEO focuses on location-based queries and helps businesses connect with customers in their immediate geographic area.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Local SEO Works</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                  Google Business Profile
                </h3>
                <p className="text-gray-700">
                  Your Google Business Profile (formerly Google My Business) is the foundation of local SEO. It's your free business listing that appears in Google Search and Maps when people search for your business or services in your area.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Search className="h-6 w-6 text-green-600 mr-2" />
                  Local Citations
                </h3>
                <p className="text-gray-700">
                  Citations are online mentions of your business name, address, and phone number (NAP) across directories, review sites, and local listings. Consistent citations help Google verify your business location and improve local rankings.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                  Reviews and Ratings
                </h3>
                <p className="text-gray-700">
                  Customer reviews and ratings are crucial ranking factors for local SEO. Businesses with more positive reviews and higher ratings typically rank higher in local search results.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Local SEO Matters</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Increased Visibility:</strong>
                  <span className="text-gray-700"> Appear in local search results and Google Maps when customers search for your services.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">More Qualified Leads:</strong>
                  <span className="text-gray-700"> Local searches have high commercial intent—people searching locally are ready to buy.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Competitive Advantage:</strong>
                  <span className="text-gray-700"> Many local businesses haven't optimized their local SEO, giving you an opportunity to dominate local search.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Internal Links Section */}
          <div className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/resources/local-seo-cost" 
                className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-900 font-medium">Local SEO Cost Guide</span>
                <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
              </Link>
              <Link 
                href="/resources/local-seo-checklist" 
                className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-900 font-medium">Local SEO Checklist</span>
                <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
              </Link>
              <Link 
                href="/tools/seo-audit" 
                className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-900 font-medium">Free SEO Audit Tool</span>
                <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
              </Link>
              <Link 
                href="/services/seo" 
                className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-900 font-medium">SEO Services</span>
                <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
              </Link>
            </div>
          </div>

          {/* MOFU CTA */}
          <div className="mb-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Local Visibility?</h2>
            <p className="text-blue-100 mb-6">
              Get a free SEO audit to see how your business currently ranks in local search and discover opportunities for improvement.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              asChild
            >
              <Link href="/tools/seo-audit">Get Free SEO Audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
