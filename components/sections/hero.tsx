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
            backgroundImage: "url('/images/hero-night-orbit.webp?v=1')"
          }}
        ></div>
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-slate-950/10 to-slate-950/20"></div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle professional overlays */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-slate-500/5 to-indigo-500/5 opacity-40"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/8 to-indigo-600/8 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-slate-600/8 to-gray-600/8 blur-3xl"></div>
        {/* Removed central blur circle for a cleaner, sharper center */}
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-slate-600/10 to-gray-600/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Simplified headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4 sm:mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Design. Develop. Dominate.
          </h1>
          {/* Short supporting line */}
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto px-4 sm:px-0 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            High-converting websites and SEO that grow revenue—fast.
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
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-primary-900 px-6 sm:px-8 py-4 text-base sm:text-lg font-bold" 
              onClick={() => handleCTAClick('See Work', 'hero_section')}
              asChild
            >
              <Link href="/case-studies" className="flex items-center">
                <Play className="mr-2 h-5 w-5" />
                See Our Work
              </Link>
            </Button>
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

        
      </div>
    </section>
  )
}
