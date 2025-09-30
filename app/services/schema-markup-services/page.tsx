import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, TrendingUp, Code, Sparkles, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Schema Markup & Structured Data Services | Web Vello',
  description: 'Implement rich snippets and structured data for better search visibility. Professional schema markup services that improve your click-through rates.',
  keywords: 'schema markup, structured data, rich snippets, JSON-LD, microdata, rich results',
}

export default function SchemaMarkupPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 text-sm font-semibold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Boost Your Click-Through Rates
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Schema Markup & Structured Data</h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Implement rich snippets and structured data for better search visibility and higher click-through rates.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Schema Markup Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rich Snippets</h3>
              <p className="text-gray-700 leading-relaxed">Stand out in search results with star ratings, prices, availability, and more.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Higher CTR</h3>
              <p className="text-gray-700 leading-relaxed">Increase click-through rates by up to 30% with enhanced search results.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Better Understanding</h3>
              <p className="text-gray-700 leading-relaxed">Help search engines understand your content for better rankings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Schema Types We Implement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Product schema for e-commerce sites',
              'Local business schema for local SEO',
              'Article and blog post schema',
              'Review and rating schema',
              'FAQ schema for common questions',
              'Event schema for calendars',
              'Organization schema for brand identity',
              'Breadcrumb schema for site navigation'
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Implement Schema Markup?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">Stand out in search results with rich snippets and structured data.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg">
              Get Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
