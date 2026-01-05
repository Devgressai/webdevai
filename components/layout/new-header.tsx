"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"
import { Logo } from "../ui/logo"
import { openCalendlyPopup } from "../../lib/calendly"
// Import only essential icons to reduce bundle size
import { 
  Menu, X, ChevronDown, Phone, BarChart3, 
  Target, Users, TrendingUp, Globe, Code, 
  Zap, Monitor, Smartphone, ShoppingCart, Mail, 
  DollarSign, AlertTriangle, Search as SearchIcon, Brain, 
  MessageSquare, MapPin, Bot
} from "lucide-react"
import { cn } from "../../lib/utils"

const navigation = [
  {
    name: "Design",
    href: "/services",
    description: "Design & Creative Services",
    children: [
      { 
        name: "Website Design", 
        href: "/services/website-design",
        description: "Custom website design that converts visitors to customers",
        icon: Monitor,
        color: "from-blue-500 to-cyan-600",
        popular: true
      },
      { 
        name: "Website Redesign", 
        href: "/services/website-redesign",
        description: "Transform your existing website for better performance",
        icon: Code,
        color: "from-purple-500 to-indigo-600"
      },
      { 
        name: "Rapid Web Design", 
        href: "/services/rapid-web-design",
        description: "Fast-track website development for quick launches",
        icon: Zap,
        color: "from-yellow-500 to-orange-600"
      },
      { 
        name: "Social Media Design", 
        href: "/services/social-media-design",
        description: "Engaging social media graphics and content",
        icon: Users,
        color: "from-pink-500 to-rose-600"
      },
      { 
        name: "Ecommerce Design", 
        href: "/services/ecommerce-design",
        description: "High-converting online store designs",
        icon: ShoppingCart,
        color: "from-green-500 to-emerald-600"
      },
      { 
        name: "Email Marketing Design", 
        href: "/services/email-marketing-design",
        description: "Optimized email campaigns that drive sales",
        icon: Mail,
        color: "from-red-500 to-pink-600"
      },
      { 
        name: "App Design & Development", 
        href: "/services/app-design-development",
        description: "Custom mobile app design and development",
        icon: Smartphone,
        color: "from-indigo-500 to-purple-600"
      },
    ],
  },
  {
    name: "AI & Marketing",
    href: "#",
    description: "AI & Advanced Marketing",
    children: [
      { 
        name: "AI Consulting", 
        href: "/services/ai-consulting",
        description: "Strategic AI implementation for your business",
        icon: Brain,
        color: "from-purple-500 to-indigo-600",
        popular: true
      },
      { 
        name: "AI Digital Marketing", 
        href: "/services/ai-digital-marketing",
        description: "AI-powered marketing strategies and automation",
        icon: Zap,
        color: "from-blue-500 to-cyan-600"
      },
      { 
        name: "AI SEO", 
        href: "/services/ai-seo",
        description: "AI-powered search engine optimization",
        icon: SearchIcon,
        color: "from-green-500 to-emerald-600"
      },
      { 
        name: "ChatGPT Optimization", 
        href: "/services/chatgpt-optimization",
        description: "Optimize your ChatGPT prompts and workflows",
        icon: MessageSquare,
        color: "from-orange-500 to-red-600"
      },
      { 
        name: "Local SEO", 
        href: "/services/local-seo",
        description: "Local search optimization and Google My Business",
        icon: Globe,
        color: "from-indigo-500 to-purple-600"
      },
      { 
        name: "Digital Marketing", 
        href: "/services/digital-marketing",
        description: "Comprehensive digital marketing strategies",
        icon: BarChart3,
        color: "from-teal-500 to-blue-600"
      },
      { 
        name: "Generative Engine Optimization (GEO)", 
        href: "/services/generative-engine-optimization",
        description: "Optimize your content for AI-powered search engines and generative AI platforms",
        icon: Bot,
        color: "from-violet-500 to-purple-600"
      },
    ],
  },
  {
    name: "Development",
    href: "#",
    description: "Development & Technical Services",
    children: [
      { 
        name: "Web Development", 
        href: "/services/web-development",
        description: "Custom web development and programming services",
        icon: Code,
        color: "from-indigo-500 to-purple-600",
        popular: true
      },
      { 
        name: "WordPress Development", 
        href: "/services/wordpress-development",
        description: "Custom WordPress solutions and optimization",
        icon: Code,
        color: "from-blue-500 to-cyan-600"
      },
      { 
        name: "Shopify Development", 
        href: "/services/shopify-development",
        description: "High-performance Shopify ecommerce solutions",
        icon: ShoppingCart,
        color: "from-green-500 to-emerald-600"
      },
      { 
        name: "Software Development", 
        href: "/services/software-development",
        description: "Custom software and application development",
        icon: Code,
        color: "from-gray-500 to-slate-600"
      },
      { 
        name: "UI/UX Design", 
        href: "/services/ui-ux-design",
        description: "User experience and interface design services",
        icon: Monitor,
        color: "from-orange-500 to-red-600"
      },
      { 
        name: "SEO Services", 
        href: "/services/seo",
        description: "Search engine optimization and digital marketing",
        icon: SearchIcon,
        color: "from-teal-500 to-blue-600"
      },
    ],
  },
  {
    name: "Conversion Optimization",
    href: "#",
    description: "CRO & Performance",
    children: [
      { 
        name: "CRO E-commerce", 
        href: "/services/cro-ecommerce",
        description: "Optimize your online store for maximum conversions",
        icon: ShoppingCart,
        color: "from-green-500 to-emerald-600"
      },
      { 
        name: "CRO Lead Generation", 
        href: "/services/cro-lead-generation",
        description: "Convert more visitors into qualified leads",
        icon: Target,
        color: "from-blue-500 to-indigo-600"
      },
    ],
  },
  {
    name: "Problem Solvers",
    href: "#",
    description: "Solutions for Common Issues",
    children: [
      { 
        name: "Website Not Driving Leads", 
        href: "/solutions/website-leads",
        description: "Transform your website into a lead generation machine",
        icon: Target,
        color: "from-red-500 to-pink-600"
      },
      { 
        name: "Declining Website Traffic", 
        href: "/solutions/declining-traffic",
        description: "Reverse declining traffic with proven strategies",
        icon: TrendingUp,
        color: "from-orange-500 to-red-600"
      },
      { 
        name: "Website Not Converting", 
        href: "/solutions/website-conversion",
        description: "Optimize your website for maximum conversions",
        icon: DollarSign,
        color: "from-green-500 to-emerald-600"
      },
      { 
        name: "Website Not Driving ROI", 
        href: "/solutions/website-roi",
        description: "Get measurable ROI from your website investment",
        icon: BarChart3,
        color: "from-blue-500 to-cyan-600"
      },
      { 
        name: "Not Showing Up on Google", 
        href: "/solutions/google-visibility",
        description: "Improve your search engine visibility and rankings",
        icon: SearchIcon,
        color: "from-purple-500 to-indigo-600"
      },
      { 
        name: "Agency Not Driving Results", 
        href: "/solutions/agency-results",
        description: "Get the results you deserve from your marketing agency",
        icon: AlertTriangle,
        color: "from-yellow-500 to-orange-600"
      },
    ],
  },
  {
    name: "About",
    href: "/about",
    description: "Learn more about Web Vello",
    children: [
      {
        name: "About Us",
        href: "/about",
        description: "Our story, values, and team",
        icon: Users,
        color: "from-slate-500 to-slate-700"
      },
      {
        name: "Case Studies",
        href: "/case-studies",
        description: "Success stories and results",
        icon: BarChart3,
        color: "from-blue-500 to-indigo-600"
      },
      {
        name: "Industries",
        href: "/industries",
        description: "Solutions by industry",
        icon: Globe,
        color: "from-green-500 to-emerald-600"
      },
      {
        name: "Pricing",
        href: "/pricing",
        description: "Transparent pricing and packages",
        icon: DollarSign,
        color: "from-yellow-500 to-orange-600"
      },
      {
        name: "Resources",
        href: "/resources",
        description: "Guides, tools, and templates",
        icon: Target,
        color: "from-purple-500 to-pink-600"
      }
    ]
  },
  {
    name: "Blog",
    href: "/blog"
  },
]

export function NewHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (itemName: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setOpenDropdown(itemName)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
    setHoverTimeout(timeout)
  }

  const handleMobileDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName)
  }

  return (
    <header className="hidden lg:block relative sticky top-0 z-50 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.08)]">
      {/* Top Banner / Info Bar */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white border-b border-blue-800/20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 py-2.5 text-sm">
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="font-semibold">USA Based</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline">2281 Lava Ridge Ct, Roseville, CA 95661</span>
                <span className="sm:hidden">Roseville, CA</span>
              </div>
              <a 
                href="tel:5305538883" 
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="font-medium">(530) 553-8883</span>
              </a>
              <a 
                href="mailto:Hello@Webvello.com" 
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="font-medium">Hello@Webvello.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="flex items-center py-2 lg:py-3">
          {/* Logo - Far Left */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="group flex items-center rounded-lg px-2 py-1.5 transition-all duration-200 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span className="sr-only">Web Vello</span>
              <Logo size={40} className="transition-transform duration-200 group-hover:scale-105" />
            </Link>
          </div>
          
          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-1 xl:gap-x-1.5 lg:flex-1 lg:justify-center lg:mx-8">
             {navigation.map((item, idx) => (
               <div key={item.name} className="relative">
                 {item.children ? (
                   <div 
                     className="relative"
                     onMouseEnter={() => handleMouseEnter(item.name)}
                     onMouseLeave={handleMouseLeave}
                   >
                     <div 
                       className={cn(
                         "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-semibold tracking-tight transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 cursor-pointer",
                         openDropdown === item.name ? "bg-blue-50 text-blue-700 shadow-sm" : "text-slate-700"
                       )}
                       role="button"
                       tabIndex={0}
                       aria-expanded={openDropdown === item.name}
                       aria-haspopup="true"
                       onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                       onKeyDown={(event) => {
                         if (event.key === 'Enter' || event.key === ' ') {
                           event.preventDefault()
                           setOpenDropdown(openDropdown === item.name ? null : item.name)
                         }
                       }}
                     >
                       {item.name}
                       <ChevronDown className={cn("h-3.5 w-3.5 text-slate-500 transition-transform duration-200", openDropdown === item.name && "rotate-180 text-blue-600")} />
                     </div>
                     
                     {openDropdown === item.name && (
                       <div 
                         className={`${idx < 2 ? 'absolute left-0 -translate-x-0' : 'absolute left-1/2 -translate-x-1/2'} z-[9999] mt-2 flex w-screen max-w-5xl px-4`}
                         onMouseEnter={() => handleMouseEnter(item.name)}
                         onMouseLeave={handleMouseLeave}
                       >
                         <div className="w-full max-w-5xl flex-auto overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-xl ring-1 ring-slate-200 border border-slate-100">
                           <div className="p-5">
                             {/* Header */}
                             <div className="mb-5 pb-4 border-b border-slate-100">
                               <h3 className="text-base font-bold text-slate-900 mb-0.5">{item.name}</h3>
                               <p className="text-xs text-slate-500">{item.description}</p>
                             </div>
                             
                             {/* Grid Layout */}
                             <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                               {item.children.map((child) => (
                                 <Link
                                   key={child.name}
                                   href={child.href}
                                   className="group relative flex gap-x-3 rounded-xl p-3 border border-transparent bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-blue-50/50 hover:shadow-md"
                                 >
                                   <div className={cn(
                                     "flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gradient-to-r shrink-0",
                                     child.color
                                   )}>
                                     <child.icon className="h-5 w-5 text-white" />
                                   </div>
                                   <div className="flex-1 min-w-0">
                                     <div className="flex items-center gap-x-2 mb-1">
                                       <span className="font-semibold text-slate-900 group-hover:text-blue-600 text-sm leading-tight">
                                         {child.name}
                                       </span>
                                       {child.popular && (
                                         <span className="inline-flex items-center rounded-full bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800 shrink-0">
                                           Popular
                                         </span>
                                       )}
                                     </div>
                                     <p className="text-xs text-slate-600 group-hover:text-slate-700 leading-relaxed line-clamp-2">
                                       {child.description}
                                     </p>
                                   </div>
                                 </Link>
                               ))}
                             </div>
                           </div>
                         </div>
                       </div>
                     )}
                   </div>
                 ) : (
                   <Link
                     href={item.href}
                     className="px-3.5 py-2 text-sm font-semibold leading-6 text-slate-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                   >
                     {item.name}
                   </Link>
                 )}
               </div>
             ))}
           </div>
          
          {/* CTA Buttons - Far Right */}
          <div className="hidden lg:flex lg:flex-shrink-0 lg:ml-auto lg:items-center lg:gap-3">
            <Button
              variant="outline"
              className="rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 px-5 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              data-cta="header-contact"
              aria-label="Contact Us"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault()
                openCalendlyPopup()
              }}
              className="rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              data-cta="header-book-discovery-call"
              aria-label="Book a Discovery Call"
            >
              Book a Discovery Call
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a 
              href="tel:5305538883" 
              className="inline-flex items-center justify-center rounded-lg p-2 text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Web Vello</span>
                <Logo size={36} />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-full p-2.5 text-slate-600 ring-1 ring-slate-200/60"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-secondary-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                                                 <div>
                           <button
                             onClick={() => handleMobileDropdownToggle(item.name)}
                             className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-lg font-semibold text-slate-800 transition hover:bg-slate-100"
                           >
                             {item.name}
                             <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                           </button>
                          {openDropdown === item.name && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="block rounded-lg px-3 py-2 text-base text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block rounded-xl px-3 py-2 text-lg font-semibold text-slate-800 transition hover:bg-slate-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
                    data-cta="header-contact"
                    aria-label="Contact Us"
                    asChild
                  >
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      openCalendlyPopup()
                    }}
                    className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
                    data-cta="header-book-discovery-call"
                    aria-label="Book a Discovery Call"
                  >
                    Book a Discovery Call
                  </Button>
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>2281 Lava Ridge Ct, Roseville, CA 95661</span>
                    </div>
                    <a 
                      href="tel:5305538883" 
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>(530) 553-8883</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
