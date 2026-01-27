import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, DollarSign, CheckCircle, FileText, AlertCircle } from 'lucide-react'
// Note: trackCTA removed - server components can't use onClick handlers

export const metadata: Metadata = {
  title: 'Local SEO Cost: Pricing Guide 2024 | Web Vello',
  description: 'Learn how much local SEO costs in 2024. Pricing breakdown for local SEO services, Google Business Profile optimization, and ongoing local SEO management.',
  keywords: ['local seo cost', 'local seo pricing', 'how much does local seo cost', 'local seo services cost', 'seo pricing guide'],
  alternates: {
    canonical: 'https://www.webvello.com/resources/local-seo-cost',
  },
  openGraph: {
    title: 'Local SEO Cost: Pricing Guide 2024',
    description: 'Learn how much local SEO costs in 2024. Pricing breakdown for local SEO services and ongoing management.',
    url: 'https://www.webvello.com/resources/local-seo-cost',
    type: 'article',
  },
}

export default function LocalSEOCostPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/resources" className="hover:text-blue-600">Resources</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Local SEO Cost</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Local SEO Cost: Pricing Guide for 2024
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Understanding local SEO pricing helps you budget effectively and choose the right service level for your business. Here's what to expect.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="mb-12">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>Pricing Disclaimer:</strong> Costs vary significantly based on business size, competition level, geographic market, and service scope. The figures below are general estimates based on industry standards. Contact us for a custom quote tailored to your specific needs.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Local SEO Pricing Factors</h2>
            <p className="text-lg text-gray-700 mb-6">
              Several factors influence local SEO costs:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Business Size:</strong>
                  <span className="text-gray-700"> Single-location businesses typically cost less than multi-location franchises.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Competition Level:</strong>
                  <span className="text-gray-700"> Highly competitive markets require more intensive optimization and ongoing work.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Service Scope:</strong>
                  <span className="text-gray-700"> Basic setup vs. comprehensive ongoing management affects pricing significantly.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Geographic Market:</strong>
                  <span className="text-gray-700"> Major metropolitan areas often command higher rates due to increased competition.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Typical Local SEO Service Tiers</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                  Basic Setup & Optimization
                </h3>
                <p className="text-gray-700 mb-4">
                  One-time setup including Google Business Profile optimization, basic citation building, and initial audit. Typically ranges from $500-$2,000 depending on business complexity.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
                  Ongoing Local SEO Management
                </h3>
                <p className="text-gray-700 mb-4">
                  Monthly retainer for ongoing optimization, citation management, review generation, and performance monitoring. Typically ranges from $500-$3,000+ per month based on service level and market competition.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
                  Enterprise Multi-Location
                </h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive local SEO for businesses with multiple locations. Pricing is typically customized based on number of locations, geographic spread, and service requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included in Local SEO Services</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Google Business Profile setup and optimization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Local citation building and management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Review generation and management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Local content creation and optimization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Performance tracking and reporting</span>
              </li>
            </ul>
          </div>

          {/* Internal Links Section */}
          <div className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/resources/what-is-local-seo" 
                className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-900 font-medium">What is Local SEO?</span>
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
                href="/services/seo" 
                className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-900 font-medium">SEO Services</span>
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
            </div>
          </div>

          {/* MOFU CTA */}
          <div className="mb-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Get a Custom Local SEO Quote</h2>
            <p className="text-blue-100 mb-6">
              Every business is unique. Get a personalized quote based on your specific needs, market, and goals.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              asChild
            >
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
