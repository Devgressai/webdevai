import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/seo/schema-markup'
import { RelatedLinks } from '@/components/seo/related-links'

export const metadata: Metadata = {
  title: 'Content Marketing Services | Strategic Content Creation & SEO',
  description: 'Professional content marketing services that drive traffic, engagement, and conversions. Strategic content creation, SEO optimization, and content distribution.',
  keywords: 'content marketing, content creation, content strategy, SEO content, blog writing, content distribution',
  openGraph: {
    title: 'Content Marketing Services | Strategic Content Creation & SEO',
    description: 'Professional content marketing services that drive traffic, engagement, and conversions.',
    type: 'website',
    url: 'https://www.webvello.com/services/content-marketing',
    images: [
      {
        url: 'https://www.webvello.com/og-content-marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Marketing Services'
      }
    ]
  }
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Content Marketing Services",
  "description": "Strategic content creation and marketing services that drive traffic, engagement, and conversions",
  "provider": {
    "@type": "Organization",
    "name": "Web Vello",
    "url": "https://www.webvello.com"
  },
  "serviceType": "Content Marketing",
  "areaServed": "United States",
  "offers": {
    "@type": "Offer",
    "description": "Comprehensive content marketing strategy and execution",
    "price": "Contact for pricing"
  }
}

export default function ContentMarketingPage() {
  return (
    <>
      <SchemaMarkup schema={schemaData} />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Content Marketing Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Strategic content creation that drives traffic, builds authority, and converts visitors into customers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Content Strategy
                </a>
                <a href="/seo-audit" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-blue-600">
                  Free Content Audit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Content Marketing Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From strategy development to content creation and distribution, we handle every aspect of your content marketing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Content Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Develop comprehensive content strategies aligned with your business goals and target audience
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Audience research and persona development</li>
                  <li>• Content calendar planning</li>
                  <li>• Brand voice and tone guidelines</li>
                  <li>• Content pillar development</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Content Creation</h3>
                <p className="text-gray-600 mb-4">
                  High-quality content creation across all formats and platforms
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Blog posts and articles</li>
                  <li>• Social media content</li>
                  <li>• Video scripts and storyboards</li>
                  <li>• Email marketing content</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Optimize content for search engines to maximize organic reach
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Keyword research and integration</li>
                  <li>• On-page SEO optimization</li>
                  <li>• Meta descriptions and titles</li>
                  <li>• Internal linking strategies</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 9h6m-6 4h6m-6 4h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Content Distribution</h3>
                <p className="text-gray-600 mb-4">
                  Strategic content distribution across multiple channels
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Social media management</li>
                  <li>• Email marketing campaigns</li>
                  <li>• Content syndication</li>
                  <li>• Influencer outreach</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & Reporting</h3>
                <p className="text-gray-600 mb-4">
                  Track performance and optimize content based on data insights
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Content performance tracking</li>
                  <li>• Engagement metrics analysis</li>
                  <li>• ROI measurement</li>
                  <li>• Monthly performance reports</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Content Management</h3>
                <p className="text-gray-600 mb-4">
                  Ongoing content management and optimization
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Content updates and refreshes</li>
                  <li>• A/B testing and optimization</li>
                  <li>• Content repurposing</li>
                  <li>• Editorial calendar management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Content Marketing Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proven methodology that delivers measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Research & Strategy</h3>
                <p className="text-gray-600">Audience research, competitor analysis, and content strategy development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Content Planning</h3>
                <p className="text-gray-600">Editorial calendar creation and content pillar development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Creation & Optimization</h3>
                <p className="text-gray-600">High-quality content creation with SEO optimization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Distribution & Analysis</h3>
                <p className="text-gray-600">Strategic distribution and performance tracking</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Marketing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create a content strategy that drives real business results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started Today
              </a>
              <a href="/seo-audit" className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 border-2 border-white">
                Free Content Audit
              </a>
            </div>
          </div>
        </section>

        <RelatedLinks 
          links={[
            { title: 'SEO Services', url: '/services/seo', description: 'Search engine optimization services' },
            { title: 'Digital Marketing', url: '/services/digital-marketing', description: 'Comprehensive digital marketing solutions' },
            { title: 'Local SEO', url: '/services/local-seo', description: 'Local search optimization' },
            { title: 'AI SEO', url: '/services/ai-seo', description: 'AI-powered SEO strategies' }
          ]}
        />
      </div>
    </>
  )
}
