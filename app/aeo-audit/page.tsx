import { Metadata } from 'next'
import { AEOAuditTool } from '@/components/lead-magnets/aeo-audit-tool'
import { SchemaMarkup } from '@/components/seo/schema-markup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free AEO Audit Tool | Answer Engine & AI Readiness Analysis',
  description: 'Get a free comprehensive AEO audit of your website. Analyze answer engine optimization, AI readiness, featured snippet opportunities, and get actionable recommendations to rank in position zero.',
  keywords: 'free AEO audit, answer engine optimization audit, AI readiness audit, featured snippet audit, position zero optimization, answer box optimization, voice search audit',
  openGraph: {
    title: 'Free AEO Audit Tool | Answer Engine & AI Readiness Analysis',
    description: 'Get a free comprehensive AEO audit of your website. Analyze answer engine optimization, AI readiness, and featured snippet opportunities.',
    type: 'website',
    url: 'https://www.webvello.com/aeo-audit',
    images: [
      {
        url: 'https://www.webvello.com/og-aeo-audit-tool.jpg',
        width: 1200,
        height: 630,
        alt: 'Free AEO Audit Tool - Web Vello'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AEO Audit Tool | Answer Engine & AI Readiness Analysis',
    description: 'Get a free comprehensive AEO audit of your website. Analyze answer engine optimization, AI readiness, and featured snippet opportunities.',
    images: ['https://www.webvello.com/og-aeo-audit-tool.jpg']
  },
  alternates: {
    canonical: 'https://www.webvello.com/aeo-audit'
  }
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free AEO Audit Tool",
  "description": "Comprehensive Answer Engine Optimization and AI readiness analysis tool that checks featured snippet readiness, FAQ schema, structured data, entity clarity, and provides actionable recommendations",
  "url": "https://www.webvello.com/aeo-audit",
  "applicationCategory": "SEO Tool",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "provider": {
    "@type": "Organization",
    "name": "Web Vello",
    "url": "https://www.webvello.com"
  }
}

export default function AEOAuditPage() {
  return (
    <>
      <SchemaMarkup schema={schemaData} />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Free AEO & AI Readiness Audit
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Discover how ready your website is for answer engines like ChatGPT, Perplexity, and Google SGE. 
                Get actionable insights to capture featured snippets and rank in position zero.
              </p>
            </div>

            {/* AEO Audit Tool */}
            <AEOAuditTool />

            {/* Features Section */}
            <div className="mt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                What Our AEO Audit Analyzes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Featured Snippet Readiness</h3>
                  <p className="text-gray-600">
                    Analyze content structure, formatting, and answer clarity to identify featured snippet opportunities.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">FAQ Schema Implementation</h3>
                  <p className="text-gray-600">
                    Check for proper FAQ structured data markup and identify missing question-answer pairs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Structured Data Coverage</h3>
                  <p className="text-gray-600">
                    Evaluate JSON-LD implementation, schema markup validity, and structured data completeness.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Answer Box Optimization</h3>
                  <p className="text-gray-600">
                    Assess content formatting for Google answer boxes, voice search, and AI assistant queries.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10m-7 4h7M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Entity Clarity & Definitions</h3>
                  <p className="text-gray-600">
                    Check entity definitions, clarity, and consistency to improve AI citability and Knowledge Graph presence.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Voice Search Readiness</h3>
                  <p className="text-gray-600">
                    Evaluate content structure for voice assistants like Siri, Alexa, and Google Assistant.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Why Use Our AEO Audit Tool?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Comprehensive AI Readiness Analysis</h3>
                  <p className="text-gray-600 mb-6">
                    Our AEO audit tool checks over 50 different factors that impact your answer engine visibility, 
                    from featured snippet optimization to AI citability factors.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Featured snippet opportunity analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Structured data and schema validation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Actionable optimization recommendations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Free & Instant Insights</h3>
                  <p className="text-gray-600 mb-6">
                    Get comprehensive AEO insights without any cost. Simply enter your website domain 
                    and receive a detailed analysis within minutes.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">No registration required</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Detailed reporting with priorities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Export results and share with team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Dominate Answer Engines?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get started with our free AEO audit tool and discover how to capture featured snippets and rank in position zero.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services/answer-engine-optimization"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
                >
                  Learn About AEO Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors inline-block"
                >
                  Get Expert Help
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

