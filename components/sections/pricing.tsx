"use client"

import { Button } from '../ui/button'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function Pricing() {
  const plans = [
    {
      name: 'Growth',
      price: '$2,500',
      description: 'For businesses getting started with SEO',
      features: [
        'Local SEO optimization',
        'Google Business Profile',
        'Monthly reporting',
        'Website audit',
        'Email support',
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$5,000',
      description: 'Our most popular plan for serious growth',
      features: [
        'Everything in Growth',
        'AI-powered SEO strategy',
        'Content marketing',
        'Conversion optimization',
        'Weekly strategy calls',
        'Priority support',
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '$12,000',
      description: 'Full-service for established companies',
      features: [
        'Everything in Professional',
        'Custom development',
        'Advanced analytics',
        'Dedicated account manager',
        'White-label options',
        '24/7 priority support',
      ],
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="py-28 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        
        <div className="text-center mb-16">
          <p className="text-rose-500 font-semibold mb-3">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-slate-600">
            No hidden fees. No surprises. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 transition-all ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl scale-105' 
                  : 'bg-white border border-slate-200'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs font-bold rounded-full mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-white/60' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? 'text-white/60' : 'text-slate-500'}>/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-rose-400' : 'text-rose-500'}`} />
                    <span className={plan.highlighted ? 'text-white/80' : 'text-slate-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-12 font-semibold rounded-xl transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mb-24">
          <p className="text-slate-600">
            Need something custom?{' '}
            <Link href="/contact" className="text-rose-500 font-semibold hover:text-rose-600 transition-colors">
              Let&apos;s talk →
            </Link>
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">Common questions</h3>
          <div className="space-y-8">
            <div>
              <p className="font-bold text-slate-900 text-lg mb-2">How quickly will I see results?</p>
              <p className="text-slate-600">Most clients see initial improvements within 60-90 days, with significant growth by 6 months. We focus on quick wins while building long-term success.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-lg mb-2">Do I need to sign a long contract?</p>
              <p className="text-slate-600">No. We work month-to-month because we believe our results should earn your business, not a contract. Cancel anytime with 30 days notice.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-lg mb-2">What makes you different from other agencies?</p>
              <p className="text-slate-600">Senior team only (no junior handoffs), full transparency with weekly updates, and we&apos;re obsessed with results—not activities.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-white rounded-3xl p-12 text-center shadow-sm border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Schedule a free call. We&apos;ll answer your questions and help you figure out the best plan for your business.
          </p>
          <Button 
            className="h-12 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl" 
            asChild
          >
            <Link href="/contact">
              Book a Free Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
export { Pricing }
