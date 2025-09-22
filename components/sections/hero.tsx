"use client"

import { useState } from 'react'
import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ArrowLeft, ArrowRight, CheckCircle, Star, Users, TrendingUp, Zap } from "lucide-react"

const stats = [
  { id: 1, name: "Projects Completed", value: "500+", icon: TrendingUp },
  { id: 2, name: "Happy Clients", value: "500+", icon: Users },
  { id: 3, name: "ROI Average", value: "1,200%", icon: Zap },
]

export function Hero() {
  const [step, setStep] = useState<'url' | 'details' | 'success'>('url')
  const [formData, setFormData] = useState({
    website: '',
    name: '',
    email: '',
    phone: '',
    goals: ''
  })

  return (
      <section className="relative min-h-screen flex items-center justify-center bg-[#1e3a8a] overflow-hidden">
        {/* Silverstream-inspired background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#1e3a8a]"></div>
          
          {/* Subtle geometric patterns like Silverstream */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent transform -rotate-12"></div>
            <div className="absolute top-1/2 right-1/4 w-80 h-px bg-gradient-to-l from-transparent via-cyan-300 to-transparent transform rotate-12"></div>
            <div className="absolute bottom-1/3 left-1/3 w-64 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent transform -rotate-6"></div>
            <div className="absolute top-3/4 right-1/3 w-72 h-px bg-gradient-to-l from-transparent via-cyan-300 to-transparent transform rotate-3"></div>
          </div>
          
          {/* Subtle depth effects */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl"></div>
        </div>
       
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          {/* Tagline - matching Silverstream style */}
          <p className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
            THE WEB VELLO® SYSTEM: MARKET-LEADING
          </p>
          
          {/* Main headline - matching Silverstream's bold, clean typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-tight mb-6">
            DIGITAL GROWTH FOR THE MODERN BUSINESS.
          </h1>
          
          {/* Sub-headline - matching Silverstream's description style */}
          <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto mb-12 font-light">
            Harnessing AI and advanced SEO to deliver proven 300%+ organic traffic growth and lead generation.
          </p>
          
          {/* Decorative elements - inspired by Silverstream's propeller icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="w-16 h-16 border-2 border-cyan-300 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-cyan-300 rounded-full"></div>
            </div>
            <div className="w-16 h-16 border-2 border-cyan-300 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-cyan-300 rounded-full"></div>
            </div>
          </div>
          
          {/* CTA Button - Silverstream style */}
          <div className="max-w-2xl mx-auto">
            <Link href="/contact">
              <Button
                size="lg"
                className="h-14 px-12 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg"
              >
                GET MY PROPOSAL →
              </Button>
            </Link>
            
            {/* Awards/Certifications section - matching Silverstream's bottom section */}
            <div className="mt-16 flex justify-center items-center space-x-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <p className="text-white font-semibold text-sm">FINANCIAL TIMES</p>
                <p className="text-cyan-300 text-xs">1000 AMERICA&apos;S FASTEST GROWING</p>
                <p className="text-cyan-300 text-xs">COMPANIES 2024.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <p className="text-white font-semibold text-sm">TOP 25 IN AMERICA</p>
                <p className="text-cyan-300 text-xs">3RD IN US IN 2023 & 2024</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
