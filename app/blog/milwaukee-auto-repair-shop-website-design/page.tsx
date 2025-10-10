import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle, ExternalLink, Wrench, Car, MapPin, Phone, Mail, Monitor, Smartphone, Palette, Code, Zap, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Milwaukee Auto Repair Shop Website Design: Professional Sites for WI Auto Shops 2025 | Web Vello',
  description: 'Professional website design for Milwaukee auto repair shops. Modern, mobile-responsive websites that showcase your services and drive customer bookings. Free consultation available.',
  keywords: 'milwaukee auto repair shop website design, auto repair website Milwaukee, car repair website design Wisconsin, Milwaukee auto shop web design, automotive website design Milwaukee',
  openGraph: {
    title: 'Milwaukee Auto Repair Shop Website Design: Professional Sites for WI Auto Shops 2025',
    description: 'Professional website design for Milwaukee auto repair shops. Modern, mobile-responsive websites that showcase your services and drive customer bookings.',
    url: 'https://webvello.com/blog/milwaukee-auto-repair-shop-website-design',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-30T00:00:00.000Z',
    authors: ['Web Vello Team'],
    tags: ['Auto Repair Website Design', 'Milwaukee Auto Shops', 'Website Design', 'Automotive'],
  },
}

export default function MilwaukeeAutoRepairWebsiteDesignBlogPost() {
  const autoRepairStats = [
    {
      stat: "78%",
      label: "Milwaukee Auto Shops",
      description: "Need professional website updates"
    },
    {
      stat: "68%",
      label: "Mobile Traffic",
      description: "Milwaukee auto repair customers browse on mobile"
    },
    {
      stat: "2.8s",
      label: "Average Load Time",
      description: "Milwaukee users expect fast auto repair websites"
    },
    {
      stat: "52%",
      label: "Bounce Rate",
      description: "Poor design leads to high bounce rates"
    }
  ]

  const designProcess = [
    {
      phase: "Discovery & Strategy",
      duration: "Week 1",
      description: "Understanding your Milwaukee auto repair business goals and target audience",
      tasks: [
        "Business goals analysis",
        "Target audience research",
        "Competitive analysis",
        "Content strategy planning",
        "Milwaukee auto repair market research"
      ]
    },
    {
      phase: "Design & Prototyping",
      duration: "Week 2-3",
      description: "Creating visual designs and user experience prototypes",
      tasks: [
        "Wireframe creation",
        "Visual design mockups",
        "Mobile-first approach",
        "User experience testing",
        "Design revisions"
      ]
    },
    {
      phase: "Development & Testing",
      duration: "Week 4-6",
      description: "Building responsive, fast-loading auto repair websites",
      tasks: [
        "Frontend development",
        "Backend integration",
        "Mobile optimization",
        "Performance optimization",
        "Cross-browser testing"
      ]
    },
    {
      phase: "Launch & Optimization",
      duration: "Week 7-8",
      description: "Going live and continuous improvement",
      tasks: [
        "Website launch",
        "SEO optimization",
        "Analytics setup",
        "Performance monitoring",
        "Ongoing support"
      ]
    }
  ]

  const milwaukeeAutoServices = [
    {
      service: "Engine Repair",
      challenge: "Complex technical explanations and pricing transparency",
      solution: "Clear service descriptions and transparent pricing pages",
      result: "35% increase in engine repair bookings"
    },
    {
      service: "Brake Service",
      challenge: "Safety concerns and urgency communication",
      solution: "Safety-focused content and emergency service highlighting",
      result: "42% improvement in brake service appointments"
    },
    {
      service: "Oil Changes",
      challenge: "Routine maintenance scheduling and reminders",
      solution: "Online scheduling system and maintenance reminders",
      result: "48% increase in recurring customers"
    },
    {
      service: "Transmission Repair",
      challenge: "High-cost service explanation and trust building",
      solution: "Detailed service explanations and warranty information",
      result: "38% increase in transmission service bookings"
    }
  ]

  const caseStudies = [
    {
      company: "Milwaukee Auto Care Center",
      industry: "Full-Service Auto Repair",
      challenge: "Outdated website hurting online bookings",
      solution: "Modern design with online scheduling and service showcase",
      results: [
        "60% increase in online bookings",
        "45% improvement in user engagement",
        "$180K additional revenue in 6 months"
      ]
    },
    {
      company: "Brew City Brake & Tire",
      industry: "Brake & Tire Specialists",
      challenge: "Poor lead generation and low mobile traffic",
      solution: "Mobile-first design with emergency service highlighting",
      results: [
        "70% increase in mobile bookings",
        "55% improvement in emergency service calls",
        "250% ROI on website investment"
      ]
    },
    {
      company: "Milwaukee Transmission Pro",
      industry: "Transmission Specialists",
      challenge: "Low trust and complex service explanations",
      solution: "Trust-building design with detailed service information",
      results: [
        "50% increase in consultation requests",
        "40% improvement in customer trust scores",
        "$220K additional revenue"
      ]
    }
  ]

  const autoRepairFeatures = [
    {
      feature: "Online Scheduling",
      description: "Easy appointment booking system for Milwaukee customers",
      impact: "Critical for customer convenience"
    },
    {
      feature: "Service Showcase",
      description: "Visual galleries of auto repair services and facilities",
      impact: "High impact on trust building"
    },
    {
      feature: "Mobile Optimization",
      description: "Responsive design for customers on-the-go",
      impact: "Essential for Milwaukee auto repair"
    },
    {
      feature: "Emergency Services",
      description: "Prominent emergency repair and towing information",
      impact: "Important for urgent situations"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">Milwaukee Auto Repair Website Design</span>
          </div>
        </nav>

        {/* Article Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
              Auto Repair Website Design
            </span>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              January 30, 2025
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Web Vello Team
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              12 min read
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Milwaukee Auto Repair Shop Website Design: Professional Sites for WI Auto Shops in 2025
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Milwaukee auto repair shops need websites that showcase their services and drive customer bookings. 
            Our comprehensive guide covers everything Milwaukee auto shops need to know about 
            professional website design, from mobile optimization to online scheduling.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 h-64 flex items-center justify-center">
              <div className="text-center text-white">
                <Wrench className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-2xl font-bold">Milwaukee Auto Repair Website Design</h2>
                <p className="text-lg opacity-90">Professional Sites for WI Auto Shops</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Milwaukee Auto Repair Website Design Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {autoRepairStats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-100">
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.stat}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Great Auto Repair Website Design Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Great Auto Repair Website Design in Milwaukee?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Milwaukee auto repair shops face unique challenges in the digital landscape. 
            A successful auto repair website must be mobile-first, fast-loading, and optimized for 
            local search while building trust and showcasing expertise.
          </p>
          
          <div className="bg-red-50 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Elements for Milwaukee Auto Repair Websites</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Mobile-responsive design (68% mobile traffic)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Online appointment scheduling</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Service showcase and pricing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Fast loading speed (<3 seconds)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Emergency service information</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Customer testimonials and reviews</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common Auto Repair Website Design Mistakes in Milwaukee</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 rounded-full p-1 mr-4 mt-1">
                <span className="text-sm font-bold">✗</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Ignoring Mobile Users</h4>
                <p className="text-gray-600">With 68% of Milwaukee auto repair traffic on mobile, non-responsive sites lose customers immediately.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 rounded-full p-1 mr-4 mt-1">
                <span className="text-sm font-bold">✗</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">No Online Scheduling</h4>
                <p className="text-gray-600">Milwaukee customers expect to book appointments online. Missing this feature hurts conversions.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 rounded-full p-1 mr-4 mt-1">
                <span className="text-sm font-bold">✗</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Poor Trust Signals</h4>
                <p className="text-gray-600">Auto repair customers need trust. Missing certifications, reviews, and guarantees hurts credibility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Milwaukee Auto Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Milwaukee Auto Repair Service-Specific Web Design</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service-Specific Design Challenges in Milwaukee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {milwaukeeAutoServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.service}</h4>
                  <p className="text-gray-600 mb-3"><strong>Challenge:</strong> {service.challenge}</p>
                  <p className="text-gray-600 mb-3"><strong>Solution:</strong> {service.solution}</p>
                  <p className="text-green-600 font-semibold"><strong>Result:</strong> {service.result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Milwaukee Auto Repair Market Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">1.6M</div>
                <div className="text-sm text-gray-600">Milwaukee Metro Population</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">850K</div>
                <div className="text-sm text-gray-600">Registered Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">72%</div>
                <div className="text-sm text-gray-600">Online Booking Preference</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Design Process Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Milwaukee Auto Repair Website Design Process</h2>
          <div className="space-y-8">
            {designProcess.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-red-600 font-medium">{phase.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Milwaukee Auto Repair Website Design Case Studies</h2>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-red-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                    <p className="text-gray-600">{study.industry} • Milwaukee, WI</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2025 Auto Repair Website Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2025 Auto Repair Website Features for Milwaukee</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {autoRepairFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.feature}</h3>
                <p className="text-gray-600 mb-3">{feature.description}</p>
                <div className="bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 font-medium inline-block">
                  {feature.impact}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Choose a Milwaukee Auto Repair Web Designer Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose a Milwaukee Auto Repair Web Designer</h2>
          
          <div className="bg-red-50 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Look for in a Milwaukee Auto Repair Web Designer</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</div>
                <span>Local Milwaukee auto repair industry experience</span>
              </div>
              <div className="flex items-center">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</div>
                <span>Online scheduling system integration</span>
              </div>
              <div className="flex items-center">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</div>
                <span>Mobile-first design approach</span>
              </div>
              <div className="flex items-center">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">4</div>
                <span>SEO optimization and local search expertise</span>
              </div>
              <div className="flex items-center">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">5</div>
                <span>Ongoing support and maintenance services</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions to Ask Potential Designers</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Can you show me examples of Milwaukee auto repair websites you've designed?</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>How do you integrate online scheduling systems?</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>What's your process for mobile optimization?</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Do you provide ongoing support and maintenance?</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Red Flags to Avoid</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3">
                    <span className="text-sm font-bold">✗</span>
                  </div>
                  <span>Designers who only use templates</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3">
                    <span className="text-sm font-bold">✗</span>
                  </div>
                  <span>No auto repair industry experience</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3">
                    <span className="text-sm font-bold">✗</span>
                  </div>
                  <span>Unrealistic promises or timelines</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3">
                    <span className="text-sm font-bold">✗</span>
                  </div>
                  <span>No online scheduling capabilities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Milwaukee Auto Repair Website?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get a free website audit and discover how to improve your online presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3">
                <Link href="/contact">
                  Get Free Website Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3">
                <Link href="/services/web-development">
                  View Web Design Services
                </Link>
              </Button>
            </div>
            <div className="mt-6 text-sm opacity-75">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Milwaukee, WI
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (414) 555-0123
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  milwaukee@webvello.com
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-lg text-gray-700 mb-6">
            Milwaukee auto repair shops need websites that reflect their expertise and drive customer bookings. 
            A professional auto repair website design can significantly impact your business success, from 
            improved search rankings to increased customer trust and bookings.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The key is working with a web designer who understands the Milwaukee auto repair market and has 
            proven experience creating successful websites for auto shops. Our mobile-first approach, combined 
            with deep industry knowledge, helps Milwaukee auto repair businesses achieve their digital goals.
          </p>
          <div className="bg-red-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Take Action Today</h3>
            <p className="text-gray-700 mb-4">
              Don't let a poor website hold your Milwaukee auto repair business back. Start with a free 
              website audit to identify opportunities for improvement.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/contact">
                Schedule Your Free Website Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/milwaukee-content-development" className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Milwaukee Content Development</h3>
              <p className="text-gray-600 text-sm">Professional content marketing for Milwaukee businesses.</p>
            </Link>
            <Link href="/blog/website-design-detroit" className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Website Design in Detroit</h3>
              <p className="text-gray-600 text-sm">Complete guide to professional website design for Detroit businesses.</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
