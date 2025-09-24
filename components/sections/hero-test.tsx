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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1e3a8a]"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
          THE WEB VELLO® SYSTEM: MARKET-LEADING
        </p>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-tight mb-6">
          DIGITAL GROWTH FOR THE MODERN BUSINESS.
        </h1>
        
        <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto mb-12 font-light">
          Harnessing AI and advanced SEO to deliver proven 300%+ organic traffic growth and lead generation.
        </p>
      </div>
    </section>
  )
}

