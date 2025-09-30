import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, TrendingUp, Award, Sparkles, Zap, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Programmatic SEO Services | Scale Your Content | Web Vello',
  description: 'Scale your SEO with automated, data-driven content generation. Create thousands of optimized pages efficiently with programmatic SEO strategies.',
  keywords: 'programmatic SEO, automated content, SEO at scale, data-driven SEO, content automation',
}

export default function ProgrammaticSEOPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 text-sm font-semibold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Scale Your SEO
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Programmatic SEO</h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Scale your SEO with automated, data-driven content generation. Create thousands of optimized pages efficiently.
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Programmatic SEO?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scale Effortlessly</h3>
              <p className="text-gray-700 leading-relaxed">Create thousands of SEO-optimized pages automatically using data-driven templates.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Massive Traffic Growth</h3>
              <p className="text-gray-700 leading-relaxed">Target thousands of long-tail keywords simultaneously for exponential organic traffic growth.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost-Effective</h3>
              <p className="text-gray-700 leading-relaxed">Reduce content creation costs while maintaining high quality and SEO performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Programmatic SEO Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Data collection and keyword research at scale',
              'Template design and content structure development',
              'Automated content generation with quality controls',
              'Technical SEO implementation and optimization',
              'Internal linking and site architecture',
              'Performance monitoring and continuous optimization',
              'Quality assurance and manual review processes',
              'Scalable infrastructure for thousands of pages'
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Scale Your SEO?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">Let's discuss how programmatic SEO can help you dominate search results.</p>
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
