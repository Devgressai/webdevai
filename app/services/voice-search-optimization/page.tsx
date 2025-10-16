import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/seo/schema-markup'
import { RelatedLinks } from '@/components/seo/related-links'

export const metadata: Metadata = {
  title: 'Voice Search Optimization Services | AI-Powered SEO for Alexa, Siri & Google Assistant',
  description: 'Dominate voice search with our AI-powered voice search optimization services. Get 300%+ more voice search traffic with Alexa, Siri & Google Assistant optimization. Free consultation!',
  keywords: 'voice search optimization, voice SEO, Alexa optimization, Siri optimization, Google Assistant SEO, voice search marketing, conversational SEO, voice search strategy',
  openGraph: {
    title: 'Voice Search Optimization Services | AI-Powered SEO for Voice Assistants',
    description: 'Dominate voice search with our AI-powered voice search optimization services. Get 300%+ more voice search traffic with Alexa, Siri & Google Assistant optimization.',
    type: 'website',
    url: 'https://www.webvello.com/services/voice-search-optimization',
    images: [
      {
        url: 'https://www.webvello.com/og-voice-search-optimization.jpg',
        width: 1200,
        height: 630,
        alt: 'Voice Search Optimization Services - Web Vello'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voice Search Optimization Services | AI-Powered SEO for Voice Assistants',
    description: 'Dominate voice search with our AI-powered voice search optimization services. Get 300%+ more voice search traffic with Alexa, Siri & Google Assistant optimization.',
    images: ['https://www.webvello.com/og-voice-search-optimization.jpg']
  },
  alternates: {
    canonical: 'https://www.webvello.com/services/voice-search-optimization'
  }
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Voice Search Optimization Services",
  "description": "AI-powered voice search optimization services for Alexa, Siri, and Google Assistant to increase voice search traffic by 300%+",
  "provider": {
    "@type": "Organization",
    "name": "Web Vello",
    "url": "https://www.webvello.com"
  },
  "serviceType": "Voice Search SEO",
  "areaServed": "United States",
  "offers": {
    "@type": "Offer",
    "description": "Voice search optimization services",
    "price": "Contact for pricing"
  }
}

export default function VoiceSearchOptimizationPage() {
  return (
    <>
      <SchemaMarkup schema={schemaData} />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Voice Search Optimization Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Dominate voice search with our AI-powered optimization strategies. Get 300%+ more traffic from Alexa, Siri, and Google Assistant searches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Free Voice Search Audit
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Search Statistics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Voice Search is the Future of Search
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
                <p className="text-gray-700">of adults use voice search daily</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">27%</div>
                <p className="text-gray-700">of global online population uses voice search</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
                <p className="text-gray-700">average increase in voice search traffic</p>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Search Optimization Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Voice Search Optimization Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Conversational Keyword Research</h3>
                <p className="text-gray-600 mb-6">Identify long-tail, question-based keywords that people actually speak to their voice assistants.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• "How to" and "What is" queries</li>
                  <li>• Local voice search terms</li>
                  <li>• Natural language patterns</li>
                  <li>• Question-based optimization</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured Snippet Optimization</h3>
                <p className="text-gray-600 mb-6">Optimize content to appear in featured snippets, which voice assistants read directly to users.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• FAQ page optimization</li>
                  <li>• Step-by-step guides</li>
                  <li>• Definition and explanation content</li>
                  <li>• List-based content structure</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Voice Search SEO</h3>
                <p className="text-gray-600 mb-6">Optimize for "near me" searches and local voice queries that drive foot traffic.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Google My Business optimization</li>
                  <li>• Local schema markup</li>
                  <li>• NAP consistency</li>
                  <li>• Local content creation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Page Speed Optimization</h3>
                <p className="text-gray-600 mb-6">Ensure your pages load quickly, as voice search results prioritize fast-loading content.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Core Web Vitals optimization</li>
                  <li>• Mobile-first design</li>
                  <li>• Image compression</li>
                  <li>• Caching strategies</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Schema Markup Implementation</h3>
                <p className="text-gray-600 mb-6">Add structured data to help search engines understand and present your content in voice results.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• FAQ schema markup</li>
                  <li>• How-to structured data</li>
                  <li>• Local business schema</li>
                  <li>• Article and blog schema</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Voice Search Analytics</h3>
                <p className="text-gray-600 mb-6">Track and analyze your voice search performance with detailed reporting and insights.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Voice search traffic tracking</li>
                  <li>• Featured snippet performance</li>
                  <li>• Voice search keyword rankings</li>
                  <li>• Conversion tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Search Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Voice Search Optimization Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Voice Search Audit</h3>
                <p className="text-gray-600">Analyze your current voice search presence and identify optimization opportunities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Keyword Research</h3>
                <p className="text-gray-600">Discover conversational keywords and question-based queries your audience uses.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Optimization</h3>
                <p className="text-gray-600">Optimize existing content and create new voice-search-friendly content.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Monitor & Optimize</h3>
                <p className="text-gray-600">Track performance and continuously optimize for better voice search rankings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Search Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Why Voice Search Optimization Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">The Future of Search is Voice</h3>
                <p className="text-gray-600 mb-6">
                  Voice search is growing exponentially, with over 50% of adults using voice search daily. 
                  By 2024, it's estimated that 50% of all searches will be voice-based. Companies that 
                  optimize for voice search now will have a significant competitive advantage.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Higher conversion rates from voice search traffic</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Featured snippet opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Local business visibility</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Competitive Advantage</h3>
                <p className="text-gray-600 mb-6">
                  Most businesses haven't optimized for voice search yet, creating a massive opportunity 
                  for early adopters. Our voice search optimization services help you capture this 
                  untapped traffic and stay ahead of the competition.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Voice Search Statistics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Daily voice search users</span>
                      <span className="font-semibold text-blue-600">50%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Mobile voice search</span>
                      <span className="font-semibold text-blue-600">27%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Local voice searches</span>
                      <span className="font-semibold text-blue-600">58%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Voice search growth</span>
                      <span className="font-semibold text-blue-600">300%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Dominate Voice Search?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your free voice search audit and discover how much traffic you're missing from voice searches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Voice Search Audit
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                View Our Case Studies
              </button>
            </div>
          </div>
        </section>

        <RelatedLinks 
          links={[
            { title: 'AI SEO Services', url: '/services/ai-seo', description: 'Advanced AI-powered SEO strategies' },
            { title: 'Local SEO Services', url: '/services/local-seo', description: 'Dominate local search results' },
            { title: 'Technical SEO Services', url: '/services/technical-seo', description: 'Optimize your website\'s technical foundation' },
            { title: 'Content Marketing', url: '/services/content-marketing', description: 'Create voice-search-friendly content' }
          ]}
        />
      </div>
    </>
  )
}