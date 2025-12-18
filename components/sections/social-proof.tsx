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

function SocialProof() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        {/* Stats Section */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50 mb-3">
            Results That Speak for Themselves
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto">
            We've helped hundreds of businesses achieve remarkable growth through strategic digital marketing.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-11 h-11 rounded-xl bg-sky-500/15 text-sky-300 flex items-center justify-center">
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-semibold text-slate-50 mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>



        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-50 text-center mb-8">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col h-full rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_16px_35px_rgba(15,23,42,0.75)]"
              >
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-4 w-4 text-slate-500 ml-auto" />
                </div>

                <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed mb-3 flex-1 italic">
                  "{testimonial.content}"
                </p>

                <div className="mb-3">
                  <p className="text-sm font-semibold text-slate-50">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>

                <div className="space-y-2">
                  {testimonial.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-14">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-50 text-center mb-6">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-7 w-7" />
                </div>
                <p className="font-medium text-slate-100 mb-1 text-sm">
                  {award.name}
                </p>
                <p className="text-xs text-slate-400">
                  {award.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-7 sm:px-8 sm:py-8 shadow-[0_18px_45px_rgba(15,23,42,0.85)]">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-3">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results. Get a free consultation and discover your growth potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="
                  inline-flex items-center justify-center
                  px-6 sm:px-8
                  py-3.5 sm:py-4
                  rounded-xl
                  bg-gradient-to-r from-sky-500 to-indigo-500
                  text-white text-sm sm:text-base font-semibold
                  shadow-[0_12px_30px_rgba(15,23,42,0.75)]
                  hover:from-sky-500/90 hover:to-indigo-500/90
                  hover:shadow-[0_16px_40px_rgba(15,23,42,0.9)]
                  active:scale-[0.97]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300
                  transition-all duration-200
                "
              >
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="
                  inline-flex items-center justify-center
                  px-5 sm:px-6
                  py-3 sm:py-3.5
                  rounded-xl
                  border border-slate-600
                  bg-transparent
                  text-slate-100 text-sm sm:text-base font-medium
                  hover:border-sky-400 hover:bg-slate-900/40 hover:text-white
                  active:scale-[0.98]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300
                  transition-all duration-200
                "
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
export { SocialProof }
