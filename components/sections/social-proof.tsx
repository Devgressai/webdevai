import { Star, Quote, Award, Users, TrendingUp, CheckCircle } from 'lucide-react'
import { METRICS } from '@/lib/site-metrics'
import { Button } from '../ui/button'
import Link from 'next/link'



const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechStart Solutions',
    content: 'Web Vello transformed our online presence completely. We went from 50 leads per month to over 200, and our revenue increased by 150% in just 6 months.',
    rating: 5,
    results: ['150% revenue increase', '300% more leads', '6 month timeline']
  },
  {
    name: 'Michael Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthCo',
    content: 'The AI-powered SEO strategies are incredible. We\'re ranking for keywords we never thought possible, and our organic traffic has grown 400% year-over-year.',
    rating: 5,
    results: ['400% traffic growth', 'Top keyword rankings', 'Year-over-year success']
  },
  {
    name: 'Jennifer Chen',
    role: 'Founder',
    company: 'LegalTech Pro',
    content: 'Professional, results-driven, and incredibly effective. Web Vello helped us establish authority in our niche and attract high-value clients consistently.',
    rating: 5,
    results: ['Authority established', 'High-value clients', 'Consistent results']
  }
]

const stats = [
  { number: METRICS.revenue, label: METRICS.revenueLabel, icon: TrendingUp },
  { number: '500+', label: 'Happy Clients', icon: Users },
  { number: '1,200%', label: 'Average ROI', icon: Award },
  { number: '300%+', label: 'Traffic Growth', icon: TrendingUp }
]

const awards = [
  { name: 'Media Innovator Award 2020', issuer: 'Corporate Vision Magazine' },
  { name: 'Best International Web Development Agency', issuer: 'Corporate Vision Magazine' },
  { name: 'West Coast USA Excellence Award', issuer: 'Corporate Vision Magazine' },
  { name: 'Client Satisfaction Excellence', issuer: 'Industry Recognition' }
]

export function SocialProof() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We've helped hundreds of businesses achieve remarkable growth through strategic digital marketing.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-secondary-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>



        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-secondary-900 text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-soft border border-secondary-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-gray-400 ml-auto" />
                </div>
                
                <p className="text-secondary-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="mb-4">
                  <p className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-secondary-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {testimonial.results.map((result, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-secondary-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-secondary-900 text-center mb-8">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <p className="font-medium text-secondary-900 mb-1 text-sm">
                  {award.name}
                </p>
                <p className="text-xs text-secondary-500">
                  {award.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results. Get a free consultation and discover your growth potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-primary hover:shadow-glow px-8 py-3">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="outline" asChild className="px-8 py-3">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
