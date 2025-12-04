"use client"

import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

const testimonials = [
  {
    content: 'Web Vello completely transformed our online presence. We went from invisible to page 1 rankings in just 4 months. The ROI has been incredible.',
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechStart Solutions',
    result: '3x traffic',
    image: 'SM'
  },
  {
    content: 'Finally an agency that delivers what they promise. Our leads have tripled and the quality is better than ever.',
    name: 'Michael Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthCo',
    result: '400% growth',
    image: 'MR'
  },
  {
    content: 'The best investment we\'ve made. Professional, transparent, and the results speak for themselves.',
    name: 'Jennifer Chen',
    role: 'Founder',
    company: 'LegalTech Pro',
    result: '5x revenue',
    image: 'JC'
  }
]

function SocialProof() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        
        <div className="max-w-2xl mb-16">
          <p className="text-rose-500 font-semibold mb-3">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Loved by growing businesses
          </h2>
          <p className="text-xl text-slate-600">
            Don&apos;t take our word for it—hear from our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Result badge */}
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-rose-50 to-orange-50 text-rose-600 text-sm font-semibold rounded-full mb-4">
                {testimonial.result}
              </div>
              
              {/* Quote */}
              <p className="text-slate-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/case-studies"
            className="inline-flex items-center text-slate-900 font-semibold hover:text-rose-500 transition-colors"
          >
            View all case studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
export { SocialProof }
