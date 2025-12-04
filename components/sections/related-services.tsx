'use client'

import Link from 'next/link'
import { ArrowRight, Brain, Globe, Code, Search, Palette, Zap } from 'lucide-react'

interface RelatedService {
  title: string
  description: string
  href: string
  icon: keyof typeof icons
}

const icons = {
  brain: Brain,
  globe: Globe,
  code: Code,
  search: Search,
  palette: Palette,
  zap: Zap
}

interface RelatedServicesProps {
  currentService: string
  services?: RelatedService[]
}

const defaultServices: RelatedService[] = [
  {
    title: "GEO (Generative Engine Optimization)",
    description: "Get found in ChatGPT, Perplexity, and Google SGE",
    href: "/services/geo-services",
    icon: "brain"
  },
  {
    title: "AI-Powered SEO",
    description: "Data-driven SEO with AI optimization",
    href: "/services/ai-seo",
    icon: "zap"
  },
  {
    title: "Local SEO",
    description: "Dominate local search results",
    href: "/services/local-seo",
    icon: "globe"
  },
  {
    title: "Web Development",
    description: "Custom websites built for performance",
    href: "/services/web-development",
    icon: "code"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that converts",
    href: "/services/ui-ux-design",
    icon: "palette"
  },
  {
    title: "Traditional SEO",
    description: "Foundational search optimization",
    href: "/services/seo",
    icon: "search"
  }
]

export function RelatedServices({ currentService, services = defaultServices }: RelatedServicesProps) {
  // Filter out current service
  const filteredServices = services
    .filter(service => !service.href.includes(currentService))
    .slice(0, 3)

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Related Services</h2>
          <p className="text-slate-600">Explore other ways we can help grow your business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = icons[service.icon]
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-rose-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4">
                  {service.description}
                </p>
                
                <span className="text-rose-500 text-sm font-medium flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="text-rose-500 font-medium hover:text-rose-600 inline-flex items-center"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

