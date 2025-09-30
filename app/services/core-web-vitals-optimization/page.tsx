import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, TrendingUp, Award, Users, Sparkles, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Core Web Vitals Optimization Services | Web Vello',
  description: 'Improve your Core Web Vitals scores (LCP, FID, CLS) for better Google rankings and user experience. Professional page speed optimization services.',
  keywords: 'core web vitals, LCP optimization, FID improvement, CLS fix, page speed, Google page experience',
  openGraph: {
    title: 'Core Web Vitals Optimization | Web Vello',
    description: 'Professional Core Web Vitals optimization services to improve your search rankings.',
    url: 'https://webvello.com/services/core-web-vitals-optimization',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
  },
}

export default function CoreWebVitalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 text-sm font-semibold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Critical Ranking Factor
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Core Web Vitals Optimization</h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Improve your Core Web Vitals scores (LCP, FID, CLS) for better Google rankings and exceptional user experience.
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Core Web Vitals Matter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Google uses Core Web Vitals as a ranking factor. Optimize them to improve your search rankings and user experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Faster Loading</h3>
              <p className="text-gray-700 leading-relaxed">Optimize Largest Contentful Paint (LCP) to ensure your pages load quickly and keep visitors engaged.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Better Interactivity</h3>
              <p className="text-gray-700 leading-relaxed">Improve First Input Delay (FID) for responsive, interactive experiences that delight users.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visual Stability</h3>
              <p className="text-gray-700 leading-relaxed">Fix Cumulative Layout Shift (CLS) to prevent frustrating page jumps and improve user satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Optimization Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Comprehensive Core Web Vitals audit and analysis',
              'LCP optimization through image and resource optimization',
              'FID improvement with JavaScript optimization',
              'CLS fixes by reserving space for dynamic content',
              'Performance monitoring and ongoing optimization',
              'Mobile and desktop optimization',
              'Detailed reporting with before/after metrics',
              'Implementation of Google recommendations'
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Improve Your Core Web Vitals?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">Pass Google's Core Web Vitals assessment and improve your search rankings.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg">
              Get Your Free Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
