import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/seo/schema-markup'
import { RelatedLinks } from '@/components/seo/related-links'

export const metadata: Metadata = {
  title: 'Schema Markup Services | Rich Snippets & Structured Data SEO',
  description: 'Boost your search visibility with professional schema markup services. Get rich snippets, featured snippets, and 30%+ more click-through rates with our structured data optimization.',
  keywords: 'schema markup services, structured data, rich snippets, featured snippets, JSON-LD, microdata, RDFa, SEO markup, search engine optimization',
  openGraph: {
    title: 'Schema Markup Services | Rich Snippets & Structured Data SEO',
    description: 'Boost your search visibility with professional schema markup services. Get rich snippets, featured snippets, and 30%+ more click-through rates.',
    type: 'website',
    url: 'https://www.webvello.com/services/schema-markup-services',
    images: [
      {
        url: 'https://www.webvello.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Schema Markup Services - Web Vello'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schema Markup Services | Rich Snippets & Structured Data SEO',
    description: 'Boost your search visibility with professional schema markup services. Get rich snippets, featured snippets, and 30%+ more click-through rates.',
    images: ['https://www.webvello.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://www.webvello.com/services/schema-markup-services'
  }
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Schema Markup Services",
  "description": "Professional schema markup and structured data services to improve search visibility with rich snippets and featured snippets",
  "provider": {
    "@type": "Organization",
    "name": "Web Vello",
    "url": "https://www.webvello.com"
  },
  "serviceType": "Schema Markup & Structured Data",
  "areaServed": "United States",
  "offers": {
    "@type": "Offer",
    "description": "Schema markup services",
    "price": "Contact for pricing"
  }
}

export default function SchemaMarkupServicesPage() {
  return (
    <>
      <SchemaMarkup schema={schemaData} />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Schema Markup Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Boost your search visibility with professional schema markup services. Get rich snippets, featured snippets, and 30%+ more click-through rates with structured data optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
                  Get Free Schema Audit
                </button>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors">
                  View Rich Snippet Results
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Schema Markup Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Schema Markup Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">30%</div>
                <p className="text-gray-700">increase in click-through rates</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
                <p className="text-gray-700">more likely to appear in featured snippets</p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <div className="text-4xl font-bold text-yellow-600 mb-2">25%</div>
                <p className="text-gray-700">improvement in search visibility</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schema Markup Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Schema Markup Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Organization Schema</h3>
                <p className="text-gray-600 mb-6">Mark up your business information to appear in knowledge panels and local search results.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Business name and description</li>
                  <li>• Contact information</li>
                  <li>• Social media profiles</li>
                  <li>• Logo and branding</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Business Schema</h3>
                <p className="text-gray-600 mb-6">Optimize for local search with comprehensive local business markup.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Address and location data</li>
                  <li>• Business hours and availability</li>
                  <li>• Reviews and ratings</li>
                  <li>• Service areas and coverage</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Article Schema</h3>
                <p className="text-gray-600 mb-6">Enhance blog posts and articles with structured data for better search visibility.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Author and publisher information</li>
                  <li>• Publication dates and updates</li>
                  <li>• Article categories and tags</li>
                  <li>• Featured images and media</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">FAQ Schema</h3>
                <p className="text-gray-600 mb-6">Mark up frequently asked questions to appear in featured snippets and voice search.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Question and answer pairs</li>
                  <li>• FAQ page optimization</li>
                  <li>• Voice search compatibility</li>
                  <li>• Featured snippet targeting</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How-To Schema</h3>
                <p className="text-gray-600 mb-6">Structure step-by-step guides and tutorials for better search visibility.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Step-by-step instructions</li>
                  <li>• Required tools and materials</li>
                  <li>• Estimated time and difficulty</li>
                  <li>• Video and image integration</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Review Schema</h3>
                <p className="text-gray-600 mb-6">Display star ratings and reviews in search results for better click-through rates.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Star ratings display</li>
                  <li>• Review count and aggregation</li>
                  <li>• Review text snippets</li>
                  <li>• Reviewer information</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Schema Markup Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Schema Markup Implementation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Schema Audit</h3>
                <p className="text-gray-600">Analyze your current schema markup and identify optimization opportunities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategy Development</h3>
                <p className="text-gray-600">Create a comprehensive schema markup strategy tailored to your business.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
                <p className="text-gray-600">Implement schema markup across your website using JSON-LD, microdata, or RDFa.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Testing & Monitoring</h3>
                <p className="text-gray-600">Test schema markup validity and monitor performance in search results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rich Snippets Examples */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Rich Snippets in Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Before Schema Markup</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Web Vello - Digital Marketing Agency</h4>
                  <p className="text-gray-600 text-sm">https://www.webvello.com</p>
                  <p className="text-gray-700 mt-2">Professional digital marketing services including SEO, web design, and content marketing...</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">After Schema Markup</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                  <div className="flex items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 mr-2">Web Vello - Digital Marketing Agency</h4>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      </div>
                      <span className="text-sm text-gray-600 ml-1">(4.8) • 127 reviews</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">https://www.webvello.com</p>
                  <p className="text-gray-700 mt-2">Professional digital marketing services including SEO, web design, and content marketing...</p>
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="inline-block bg-gray-100 px-2 py-1 rounded mr-2">Digital Marketing</span>
                    <span className="inline-block bg-gray-100 px-2 py-1 rounded mr-2">SEO Services</span>
                    <span className="inline-block bg-gray-100 px-2 py-1 rounded">Web Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Rich Snippets?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get your free schema markup audit and discover how much visibility you're missing from rich snippets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Schema Audit
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
                View Rich Snippet Results
              </button>
            </div>
          </div>
        </section>

        <RelatedLinks 
          links={[
            { title: 'Technical SEO Services', url: '/services/technical-seo', description: 'Comprehensive technical SEO optimization' },
            { title: 'Local SEO Services', url: '/services/local-seo', description: 'Local search optimization' },
            { title: 'Voice Search Optimization', url: '/services/voice-search-optimization', description: 'Voice search and featured snippet optimization' },
            { title: 'E-commerce SEO', url: '/services/ecommerce-seo', description: 'E-commerce SEO optimization' }
          ]}
        />
      </div>
    </>
  )
}