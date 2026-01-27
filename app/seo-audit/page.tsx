import { Metadata } from 'next'
import Link from 'next/link'
import { SEOAuditTool } from '@/components/lead-magnets/seo-audit-tool'
import { SchemaMarkup } from '@/components/seo/schema-markup'
import { BOFULeadForm } from '@/components/forms/bofu-lead-form'
import { Button } from '@/components/ui/button'
import { FileText, AlertCircle, CheckCircle } from 'lucide-react'
// Note: trackCTA removed - server components can't use onClick handlers

export const metadata: Metadata = {
  title: 'Free SEO Audit Tool | Website SEO Analysis & Optimization',
  description: 'Get a free comprehensive SEO audit of your website. Analyze technical SEO, performance, content, and get actionable recommendations to improve your search rankings.',
  keywords: 'free SEO audit, website SEO analysis, SEO checker, SEO tools, search engine optimization, technical SEO audit, SEO analysis tool',
  openGraph: {
    title: 'Free SEO Audit Tool | Website SEO Analysis & Optimization',
    description: 'Get a free comprehensive SEO audit of your website. Analyze technical SEO, performance, content, and get actionable recommendations.',
    type: 'website',
    url: 'https://www.webvello.com/seo-audit',
    images: [
      {
        url: 'https://www.webvello.com/og-seo-audit-tool.jpg',
        width: 1200,
        height: 630,
        alt: 'Free SEO Audit Tool - Web Vello'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SEO Audit Tool | Website SEO Analysis & Optimization',
    description: 'Get a free comprehensive SEO audit of your website. Analyze technical SEO, performance, content, and get actionable recommendations.',
    images: ['https://www.webvello.com/og-seo-audit-tool.jpg']
  },
  alternates: {
    canonical: 'https://www.webvello.com/tools/seo-audit'
  }
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free SEO Audit Tool",
  "description": "Comprehensive SEO analysis tool that checks technical SEO, performance, content optimization, and provides actionable recommendations",
  "url": "https://www.webvello.com/seo-audit",
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

export default function SEOAuditPage() {
  return (
    <>
      <SchemaMarkup schema={schemaData} />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Free SEO Audit Tool
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Get a comprehensive SEO analysis of your website in seconds. Identify issues, 
                get actionable recommendations, and boost your search rankings.
              </p>
            </div>

            {/* SEO Audit Tool */}
            <SEOAuditTool />

            {/* Features Section */}
            <div className="mt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                What Our SEO Audit Checks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical SEO</h3>
                  <p className="text-gray-600">
                    Check meta tags, header structure, internal linking, and other technical SEO factors.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Page Speed</h3>
                  <p className="text-gray-600">
                    Analyze Core Web Vitals, loading times, and performance optimization opportunities.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Optimization</h3>
                  <p className="text-gray-600">
                    Test mobile responsiveness, touch targets, and mobile-specific SEO factors.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Analysis</h3>
                  <p className="text-gray-600">
                    Evaluate content quality, keyword usage, readability, and optimization opportunities.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Schema Markup</h3>
                  <p className="text-gray-600">
                    Check for structured data implementation and rich snippet opportunities.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Accessibility</h3>
                  <p className="text-gray-600">
                    Verify SSL certificates, accessibility compliance, and security best practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Why Use Our SEO Audit Tool?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Comprehensive Analysis</h3>
                  <p className="text-gray-600 mb-6">
                    Our SEO audit tool checks over 50 different factors that impact your search rankings, 
                    from technical SEO issues to content optimization opportunities.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Detailed technical SEO analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Performance and speed optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Actionable recommendations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Free & Easy to Use</h3>
                  <p className="text-gray-600 mb-6">
                    Get instant SEO insights without any cost or registration. Simply enter your website URL 
                    and receive a comprehensive analysis within seconds.
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
                      <span className="text-gray-700">Instant results</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Detailed reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Methodology Section */}
            <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Our SEO Audit Methodology
              </h2>
              <div className="max-w-4xl mx-auto space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">How We Analyze Your Website</h3>
                  <p className="text-gray-700 mb-6">
                    Our SEO audit tool uses a comprehensive methodology to evaluate your website across multiple dimensions. We analyze technical infrastructure, content quality, user experience, and search engine optimization factors to provide actionable insights.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Technical Analysis</h4>
                      <p className="text-sm text-gray-700">
                        We check crawlability, site structure, mobile optimization, page speed, and Core Web Vitals to ensure search engines can effectively index and rank your content.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Content Evaluation</h4>
                      <p className="text-sm text-gray-700">
                        We assess content quality, keyword optimization, internal linking, and content depth to identify opportunities for improvement.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">On-Page Optimization</h4>
                      <p className="text-sm text-gray-700">
                        We review title tags, meta descriptions, header structure, schema markup, and other on-page elements that impact search visibility.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">User Experience</h4>
                      <p className="text-sm text-gray-700">
                        We evaluate mobile responsiveness, page load times, navigation structure, and overall user experience signals that influence rankings.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700">
                        <strong>Methodology Disclaimer:</strong> Our SEO audit tool provides automated analysis based on publicly available data and industry best practices. Results are estimates and should be used as a starting point for optimization. Actual search rankings depend on many factors including competition, algorithm updates, and ongoing optimization efforts. For comprehensive analysis, consider a professional SEO audit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion Section with BOFU Form */}
            <div className="mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Get Expert Help With Your SEO
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    While our free audit tool provides valuable insights, a comprehensive SEO strategy requires expert analysis and ongoing optimization. Our team can help you:
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop a customized SEO strategy based on your business goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Implement technical SEO improvements and fixes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Create and optimize content for better rankings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build authority through strategic link building</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Monitor performance and continuously improve results</span>
                    </li>
                  </ul>
                  <div className="space-y-4">
                    <Link 
                      href="/services/seo"
                    >
                      <Button variant="outline" className="w-full">
                        <FileText className="h-5 w-5 mr-2" />
                        Learn About Our SEO Services
                      </Button>
                    </Link>
                    <Link 
                      href="/resources/what-is-local-seo"
                    >
                      <Button variant="outline" className="w-full">
                        <FileText className="h-5 w-5 mr-2" />
                        Browse SEO Resources
                      </Button>
                    </Link>
                  </div>
                </div>
                <div>
                  <BOFULeadForm 
                    serviceInterest="seo"
                    ctaTrackingId="seo-audit-tool-bofu"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}