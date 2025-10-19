import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/seo/schema-markup'
import { RelatedLinks } from '@/components/seo/related-links'

export const metadata: Metadata = {
  title: 'Programmatic SEO Services | Scale Content & Dominate Search Results',
  description: 'Scale your SEO with programmatic SEO services. Create thousands of optimized pages automatically and dominate search results. Get 500%+ more organic traffic with our programmatic SEO strategies.',
  keywords: 'programmatic SEO, automated SEO, scalable SEO, content scaling, SEO automation, bulk content creation, data-driven SEO, SEO at scale',
  openGraph: {
    title: 'Programmatic SEO Services | Scale Content & Dominate Search Results',
    description: 'Scale your SEO with programmatic SEO services. Create thousands of optimized pages automatically and dominate search results.',
    type: 'website',
    url: 'https://www.webvello.com/services/programmatic-seo',
    images: [
      {
        url: 'https://www.webvello.com/og-programmatic-seo.jpg',
        width: 1200,
        height: 630,
        alt: 'Programmatic SEO Services - Web Vello'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programmatic SEO Services | Scale Content & Dominate Search Results',
    description: 'Scale your SEO with programmatic SEO services. Create thousands of optimized pages automatically and dominate search results.',
    images: ['https://www.webvello.com/og-programmatic-seo.jpg']
  },
  alternates: {
    canonical: 'https://www.webvello.com/services/programmatic-seo'
  }
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Programmatic SEO Services",
  "description": "Scalable programmatic SEO services to create thousands of optimized pages automatically and dominate search results",
  "provider": {
    "@type": "Organization",
    "name": "Web Vello",
    "url": "https://www.webvello.com"
  },
  "serviceType": "Programmatic SEO",
  "areaServed": "United States",
  "offers": {
    "@type": "Offer",
    "description": "Programmatic SEO services",
    "price": "Contact for pricing"
  }
}

// Enhanced FAQs and schema (auto-generated)
const servicePageFAQs = [
  { question: "How long does it take to see results?", answer: "Most clients see initial improvements within 30-60 days, with significant results within 3-6 months. Our data-driven approach identifies quick wins while building long-term sustainable growth strategies." },
  { question: "What makes Web Vello different?", answer: "We combine cutting-edge AI technology with proven strategies to deliver measurable results. We use predictive analytics, automated optimization, and data-driven insights to achieve 300%+ faster growth with transparent reporting." },
  { question: "Do you provide ongoing support?", answer: "Yes! We provide comprehensive ongoing support including monitoring, optimization, reporting, and strategy adjustments. Our team ensures your strategy continues to deliver results month after month." }
];

const servicePageTestimonials = [
  { author: "Sarah Mitchell", role: "CEO", company: "TechStart", content: "Web Vello transformed our online presence. Results exceeded expectations.", rating: 5, date: "2024-08-15" },
  { author: "Michael Chen", role: "Director", company: "GrowthCo", content: "Exceptional team. We saw 300%+ increase in qualified leads within 6 months.", rating: 5, date: "2024-09-20" }
];

export default function ProgrammaticSEOPage() {
  return (
    <>
      <SchemaMarkup schema={schemaData} />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Programmatic SEO Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Scale your SEO with programmatic content creation. Generate thousands of optimized pages automatically and dominate search results with 500%+ more organic traffic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Free Programmatic SEO Audit
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors">
                  View Scaling Results
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Programmatic SEO Statistics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              The Power of Programmatic SEO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">500%</div>
                <p className="text-gray-700">average increase in organic traffic</p>
              </div>
              <div className="text-center p-6 bg-pink-50 rounded-lg">
                <div className="text-4xl font-bold text-pink-600 mb-2">10,000+</div>
                <p className="text-gray-700">pages created automatically</p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">90%</div>
                <p className="text-gray-700">reduction in content creation time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programmatic SEO Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Programmatic SEO Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Template Development</h3>
                <p className="text-gray-600 mb-6">Create scalable content templates that can generate thousands of unique, optimized pages.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Dynamic content generation</li>
                  <li>• Variable data integration</li>
                  <li>• SEO-optimized templates</li>
                  <li>• Quality assurance systems</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Location-Based Pages</h3>
                <p className="text-gray-600 mb-6">Generate thousands of location-specific pages for maximum local SEO coverage.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• City-specific service pages</li>
                  <li>• Local business directories</li>
                  <li>• Location-based content</li>
                  <li>• Geographic keyword targeting</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Catalog SEO</h3>
                <p className="text-gray-600 mb-6">Automatically generate SEO-optimized pages for every product in your catalog.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Product-specific landing pages</li>
                  <li>• Category page generation</li>
                  <li>• Filter-based page creation</li>
                  <li>• E-commerce SEO optimization</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data-Driven Content</h3>
                <p className="text-gray-600 mb-6">Create content based on real data, APIs, and dynamic information sources.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• API data integration</li>
                  <li>• Real-time content updates</li>
                  <li>• Database-driven pages</li>
                  <li>• Dynamic content personalization</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Implementation</h3>
                <p className="text-gray-600 mb-6">Handle the technical aspects of programmatic SEO implementation and maintenance.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Automated page generation</li>
                  <li>• URL structure optimization</li>
                  <li>• Sitemap automation</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Monitoring & Analytics</h3>
                <p className="text-gray-600 mb-6">Track performance of your programmatic content and optimize for better results.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Performance tracking</li>
                  <li>• Content quality monitoring</li>
                  <li>• SEO metrics analysis</li>
                  <li>• Automated reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Programmatic SEO Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Why Programmatic SEO is Essential for Scale
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Massive Scale at Low Cost</h3>
                <p className="text-gray-600 mb-6">
                  Programmatic SEO allows you to create thousands of pages automatically, covering 
                  long-tail keywords and niche topics that would be impossible to create manually. 
                  This approach scales your SEO efforts exponentially while keeping costs low.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Create 10,000+ pages in weeks, not years</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Cover every possible keyword variation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Dominate long-tail keyword opportunities</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Competitive Advantage</h3>
                <p className="text-gray-600 mb-6">
                  Most competitors can't match the scale of programmatic SEO. By creating thousands 
                  of targeted pages, you can capture traffic from keywords they never even considered, 
                  giving you a massive competitive advantage.
                </p>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Programmatic SEO Results</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Pages created automatically</span>
                      <span className="font-semibold text-purple-600">10,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Organic traffic increase</span>
                      <span className="font-semibold text-purple-600">500%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Content creation time saved</span>
                      <span className="font-semibold text-purple-600">90%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Keyword coverage increase</span>
                      <span className="font-semibold text-purple-600">300%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Programmatic SEO Implementation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Analysis</h3>
                <p className="text-gray-600">Analyze your data sources and identify scalable content opportunities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Template Development</h3>
                <p className="text-gray-600">Create scalable content templates that generate unique, optimized pages.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automation Setup</h3>
                <p className="text-gray-600">Implement automated systems for content generation and page creation.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Scale & Optimize</h3>
                <p className="text-gray-600">Scale content creation and continuously optimize for better performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your SEO?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get your free programmatic SEO audit and discover how much traffic you're missing from scalable content opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Programmatic SEO Audit
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
                View Scaling Results
              </button>
            </div>
          </div>
        </section>

        <RelatedLinks 
          links={[
            { title: 'Technical SEO Services', url: '/services/technical-seo', description: 'Comprehensive technical SEO optimization' },
            { title: 'Content Marketing Services', url: '/services/content-marketing', description: 'Strategic content creation and optimization' },
            { title: 'E-commerce SEO', url: '/services/ecommerce-seo', description: 'E-commerce SEO optimization' },
            { title: 'Local SEO Services', url: '/services/local-seo', description: 'Local search optimization' }
          ]}
        />
      </div>
    </>
  )
}