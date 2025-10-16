import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/seo/schema-markup'
import { RelatedLinks } from '@/components/seo/related-links'

export const metadata: Metadata = {
  title: 'Core Web Vitals Optimization Services | Speed Up Your Website & Boost Rankings',
  description: 'Boost your Google rankings with our Core Web Vitals optimization services. Improve LCP, FID, CLS scores and get 40%+ more organic traffic. Free speed audit included!',
  keywords: 'core web vitals optimization, page speed optimization, LCP optimization, FID optimization, CLS optimization, website speed, Google page experience, web performance',
  openGraph: {
    title: 'Core Web Vitals Optimization Services | Speed Up Your Website & Boost Rankings',
    description: 'Boost your Google rankings with our Core Web Vitals optimization services. Improve LCP, FID, CLS scores and get 40%+ more organic traffic.',
    type: 'website',
    url: 'https://www.webvello.com/services/core-web-vitals-optimization',
    images: [
      {
        url: 'https://www.webvello.com/og-core-web-vitals-optimization.jpg',
        width: 1200,
        height: 630,
        alt: 'Core Web Vitals Optimization Services - Web Vello'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Core Web Vitals Optimization Services | Speed Up Your Website & Boost Rankings',
    description: 'Boost your Google rankings with our Core Web Vitals optimization services. Improve LCP, FID, CLS scores and get 40%+ more organic traffic.',
    images: ['https://www.webvello.com/og-core-web-vitals-optimization.jpg']
  },
  alternates: {
    canonical: 'https://www.webvello.com/services/core-web-vitals-optimization'
  }
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Core Web Vitals Optimization Services",
  "description": "Professional Core Web Vitals optimization services to improve LCP, FID, and CLS scores for better Google rankings and user experience",
  "provider": {
    "@type": "Organization",
    "name": "Web Vello",
    "url": "https://www.webvello.com"
  },
  "serviceType": "Web Performance Optimization",
  "areaServed": "United States",
  "offers": {
    "@type": "Offer",
    "description": "Core Web Vitals optimization services",
    "price": "Contact for pricing"
  }
}

export default function CoreWebVitalsOptimizationPage() {
  return (
    <>
      <SchemaMarkup schema={schemaData} />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Core Web Vitals Optimization Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Boost your Google rankings with professional Core Web Vitals optimization. Improve LCP, FID, and CLS scores to get 40%+ more organic traffic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                  Get Free Speed Audit
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors">
                  View Performance Results
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Web Vitals Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What Are Core Web Vitals?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">LCP</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Largest Contentful Paint</h3>
                <p className="text-gray-700">Measures loading performance. Should be under 2.5 seconds.</p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <div className="text-4xl font-bold text-yellow-600 mb-2">FID</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">First Input Delay</h3>
                <p className="text-gray-700">Measures interactivity. Should be under 100 milliseconds.</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">CLS</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cumulative Layout Shift</h3>
                <p className="text-gray-700">Measures visual stability. Should be under 0.1.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Optimization Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Core Web Vitals Optimization Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">LCP Optimization</h3>
                <p className="text-gray-600 mb-6">Optimize Largest Contentful Paint to load your main content faster.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Image optimization and compression</li>
                  <li>• Critical CSS inlining</li>
                  <li>• Server response time optimization</li>
                  <li>• Resource preloading</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">FID Optimization</h3>
                <p className="text-gray-600 mb-6">Reduce First Input Delay to make your site more interactive.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• JavaScript optimization</li>
                  <li>• Third-party script optimization</li>
                  <li>• Main thread blocking elimination</li>
                  <li>• Code splitting implementation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">CLS Optimization</h3>
                <p className="text-gray-600 mb-6">Eliminate Cumulative Layout Shift for a stable user experience.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Image dimension specification</li>
                  <li>• Font loading optimization</li>
                  <li>• Dynamic content handling</li>
                  <li>• Layout stability fixes</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Image Optimization</h3>
                <p className="text-gray-600 mb-6">Optimize images for faster loading and better Core Web Vitals scores.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• WebP format conversion</li>
                  <li>• Responsive image implementation</li>
                  <li>• Lazy loading optimization</li>
                  <li>• CDN integration</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Code Optimization</h3>
                <p className="text-gray-600 mb-6">Optimize CSS, JavaScript, and HTML for better performance.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Minification and compression</li>
                  <li>• Unused code elimination</li>
                  <li>• Bundle splitting</li>
                  <li>• Tree shaking implementation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Monitoring</h3>
                <p className="text-gray-600 mb-6">Continuous monitoring and optimization of Core Web Vitals scores.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Real-time performance tracking</li>
                  <li>• Automated alerts and reports</li>
                  <li>• Performance regression detection</li>
                  <li>• Optimization recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Core Web Vitals Matter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Why Core Web Vitals Matter for Your Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Google Ranking Factor</h3>
                <p className="text-gray-600 mb-6">
                  Core Web Vitals are official Google ranking factors. Websites with good Core Web Vitals 
                  scores rank higher in search results, leading to more organic traffic and better visibility.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Performance Impact</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Traffic increase with good CWV</span>
                      <span className="font-semibold text-green-600">40%+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Bounce rate reduction</span>
                      <span className="font-semibold text-green-600">32%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Conversion rate improvement</span>
                      <span className="font-semibold text-green-600">25%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">User Experience</h3>
                <p className="text-gray-600 mb-6">
                  Fast, stable websites provide better user experiences, leading to higher engagement, 
                  lower bounce rates, and increased conversions. Users expect pages to load quickly and work smoothly.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Faster page loading improves user satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Stable layouts prevent user frustration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Better mobile experience increases conversions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Optimization Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Core Web Vitals Optimization Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Audit</h3>
                <p className="text-gray-600">Analyze your current Core Web Vitals scores and identify optimization opportunities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization Plan</h3>
                <p className="text-gray-600">Create a detailed optimization strategy tailored to your website's specific needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
                <p className="text-gray-600">Implement optimizations including code changes, image optimization, and performance improvements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Monitoring</h3>
                <p className="text-gray-600">Continuously monitor performance and make ongoing optimizations to maintain good scores.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Core Web Vitals?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get your free Core Web Vitals audit and discover how much traffic you're missing due to poor performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Speed Audit
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                View Performance Results
              </button>
            </div>
          </div>
        </section>

        <RelatedLinks 
          links={[
            { title: 'Technical SEO Services', url: '/services/technical-seo', description: 'Comprehensive technical SEO optimization' },
            { title: 'Website Speed Optimization', url: '/services/website-speed-optimization', description: 'Complete website speed improvement' },
            { title: 'Mobile SEO Services', url: '/services/mobile-seo', description: 'Mobile-first SEO optimization' },
            { title: 'E-commerce SEO', url: '/services/ecommerce-seo', description: 'E-commerce performance optimization' }
          ]}
        />
      </div>
    </>
  )
}