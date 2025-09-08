'use client'

import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight, Play, Star, Users, TrendingUp, Zap, Target, Award, Shield } from "lucide-react"
// import { useConversionTracking } from "../../hooks/useConversionTracking"
// import ScrollTracker from "../analytics/scroll-tracker"

const stats = [
  { id: 1, name: "Projects Completed", value: "500+", icon: TrendingUp, color: "from-blue-500 to-blue-600" },
  { id: 2, name: "Happy Clients", value: "500+", icon: Users, color: "from-slate-600 to-slate-700" },
  { id: 3, name: "ROI Average", value: "1,200%", icon: Zap, color: "from-indigo-500 to-indigo-600" },
]

const reviews = [
  { id: 1, rating: 5, text: "Outstanding results and professional service", author: "Sarah M." },
  { id: 2, rating: 5, text: "Transformed our online presence completely", author: "Mike R." },
  { id: 3, rating: 5, text: "Best investment we've made this year", author: "Jennifer L." },
]

export function Hero() {
  // Temporarily disabled conversion tracking to fix build error
  // const { trackCTAClick, trackStrategySession } = useConversionTracking()

  const handleCTAClick = (buttonText: string, location: string) => {
    // trackCTAClick(buttonText, location)
    console.log('CTA clicked:', buttonText, 'at', location)
  }

  const handleStrategySessionClick = () => {
    // trackStrategySession('hero_section')
    console.log('Strategy session requested from hero section')
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900">
      {/* <ScrollTracker /> */}
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-office.webp')"
          }}
        ></div>
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-slate-900/30"></div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle professional overlays */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-slate-500/5 to-indigo-500/5 opacity-40"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/8 to-indigo-600/8 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-slate-600/8 to-gray-600/8 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-600/8 to-blue-600/8 blur-3xl animate-pulse delay-500"></div>
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-slate-600/10 to-gray-600/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold text-white ring-2 ring-inset ring-white/20 mb-6 sm:mb-8 shadow-2xl">
            <Star className="mr-2 h-4 w-4 sm:h-5 sm:w-5 fill-white" />
            <span className="hidden sm:inline">Trusted by 500+ businesses nationwide</span>
            <span className="sm:hidden">500+ businesses trust us</span>
          </div>

          {/* Slogan */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-white">
              <span className="text-white">Design</span>
              <span className="text-white/70 mx-2">•</span>
              <span className="text-white">Develop</span>
              <span className="text-white/70 mx-2">•</span>
              <span className="text-white">Dominate</span>
            </h2>
          </div>

          {/* Main H1 Heading for SEO */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight mb-4 sm:mb-6">
            Stop Losing Customers to Competitors
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-300 mt-1 sm:mt-2">
              Get Found First with AI-Powered SEO
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 text-white/90 max-w-3xl mx-auto px-4 sm:px-0">
            We help professional services firms dominate search results and generate 300%+ more qualified leads in 6 months. Our AI-powered strategies have generated $2.4M+ in client revenue.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-0">
            <Button 
              size="xl" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-bold shadow-2xl hover:shadow-blue-400/25 transition-all duration-300" 
              onClick={handleStrategySessionClick}
              asChild
            >
              <Link href="/contact">
                Audit My Website Now (Free)
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-primary-900 px-6 sm:px-8 py-4 text-base sm:text-lg font-bold backdrop-blur-sm" 
              onClick={() => handleCTAClick('See 300%+ Results', 'hero_section')}
              asChild
            >
              <Link href="/case-studies" className="flex items-center">
                <Play className="mr-2 h-5 w-5" />
                See Client Results
              </Link>
            </Button>
          </div>
          
          {/* Trust Signals & Urgency */}
          <div className="mt-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-3">
              <div className="flex items-center text-xs sm:text-sm text-white/80">
                <Award className="w-4 h-4 mr-1 text-yellow-400" />
                Google Partner Certified
              </div>
              <div className="flex items-center text-xs sm:text-sm text-white/80">
                <Shield className="w-4 h-4 mr-1 text-green-400" />
                30-Day Guarantee
              </div>
              <div className="flex items-center text-xs sm:text-sm text-white/80">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                4.9/5 Rating
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white mb-2">
              ⚡ <span className="font-semibold">Limited Time:</span> Free website audit (normally $500)
            </p>
            <p className="text-xs text-white/90">
              <span className="hidden sm:inline">Only 3 spots available this week • 500+ businesses trust us</span>
              <span className="sm:hidden">Only 3 spots this week</span>
            </p>
          </div>


        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-3 group">
                <div className={`mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <dt className="text-sm sm:text-base leading-7 text-white/80">{stat.name}</dt>
                <dd className="order-first text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Social Proof */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 sm:p-6 lg:p-8 shadow-2xl ring-1 ring-white/20 border border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-1 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-white">4.9/5 from 200+ reviews</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((review) => (
                <div key={review.id} className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 mb-1">"{review.text}"</p>
                  <p className="text-xs font-medium text-white/90">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
