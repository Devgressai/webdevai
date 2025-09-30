import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Target, Award, Sparkles, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zero-Click Search Optimization | Featured Snippets | Web Vello',
  description: 'Optimize for featured snippets and zero-click search results to dominate position zero. Professional featured snippet optimization services.',
  keywords: 'zero-click search, featured snippets, position zero, answer boxes, SERP features',
}

export default function ZeroClickSearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 text-sm font-semibold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Dominate Position Zero
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Zero-Click Search Optimization</h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Optimize for featured snippets and zero-click search results to dominate position zero and maximize visibility.
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Target Featured Snippets?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Position Zero</h3>
              <p className="text-gray-700 leading-relaxed">Appear above all organic results in the coveted position zero spot.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Increased Visibility</h3>
              <p className="text-gray-700 leading-relaxed">Get maximum visibility and brand exposure in search results.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authority Building</h3>
              <p className="text-gray-700 leading-relaxed">Establish your brand as the authoritative source in your industry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Featured Snippet Strategy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Featured snippet opportunity analysis',
              'Content optimization for answer boxes',
              'Question-based content strategy',
              'List and table format optimization',
              'Paragraph snippet optimization',
              'Video snippet optimization',
              'People Also Ask (PAA) targeting',
              'Ongoing monitoring and optimization'
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Win Position Zero?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">Let's optimize your content for featured snippets and zero-click searches.</p>
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
