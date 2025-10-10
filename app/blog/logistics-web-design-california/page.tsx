import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle, ExternalLink, Truck, Package, MapPin, Phone, Mail, Monitor, Smartphone, Palette, Code, Zap, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Logistics Web Design California: Professional Websites for CA Logistics Companies 2025 | Web Vello',
  description: 'Professional web design services for California logistics companies. Modern, responsive websites that showcase your logistics services and drive business growth. Free consultation available.',
  keywords: 'logistics web design california, california logistics website design, logistics website designer CA, freight logistics web design, supply chain website design California',
  openGraph: {
    title: 'Logistics Web Design California: Professional Websites for CA Logistics Companies 2025',
    description: 'Professional web design services for California logistics companies. Modern, responsive websites that showcase your logistics services and drive business growth.',
    url: 'https://webvello.com/blog/logistics-web-design-california',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-30T00:00:00.000Z',
    authors: ['Web Vello Team'],
    tags: ['Logistics Web Design', 'California Logistics', 'Website Design', 'Supply Chain'],
  },
}

export default function LogisticsWebDesignCaliforniaBlogPost() {
  const logisticsStats = [
    {
      stat: "72%",
      label: "California Logistics Companies",
      description: "Need professional website updates"
    },
    {
      stat: "65%",
      label: "Mobile Traffic",
      description: "California logistics users browse on mobile"
    },
    {
      stat: "3.1s",
      label: "Average Load Time",
      description: "California users expect fast logistics websites"
    },
    {
      stat: "45%",
      label: "Bounce Rate",
      description: "Poor design leads to high bounce rates"
    }
  ]

  const designProcess = [
    {
      phase: "Discovery & Strategy",
      duration: "Week 1",
      description: "Understanding your California logistics business goals and target audience",
      tasks: [
        "Business goals analysis",
        "Target audience research",
        "Competitive analysis",
        "Content strategy planning",
        "California logistics market research"
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
      description: "Building responsive, fast-loading logistics websites",
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

  const californiaLogisticsTypes = [
    {
      type: "Freight Forwarding",
      challenge: "Complex shipping routes and international regulations",
      solution: "Interactive route maps and compliance documentation",
      result: "40% increase in quote requests"
    },
    {
      type: "Warehouse Management",
      challenge: "Inventory tracking and space optimization",
      solution: "Real-time inventory dashboards and capacity calculators",
      result: "35% improvement in lead generation"
    },
    {
      type: "Last-Mile Delivery",
      challenge: "Delivery tracking and customer communication",
      solution: "Real-time tracking integration and SMS notifications",
      result: "50% increase in customer satisfaction"
    },
    {
      type: "Supply Chain Consulting",
      challenge: "Complex service offerings and case studies",
      solution: "Interactive service showcases and success story galleries",
      result: "42% increase in consultation bookings"
    }
  ]

  const caseStudies = [
    {
      company: "California Freight Solutions",
      industry: "Freight Forwarding",
      challenge: "Outdated website hurting online quote requests",
      solution: "Modern design with interactive quote calculator",
      results: [
        "55% increase in online quotes",
        "40% improvement in user engagement",
        "$320K additional revenue in 6 months"
      ]
    },
    {
      company: "Golden State Warehousing",
      industry: "Warehouse Management",
      challenge: "Poor lead generation from website",
      solution: "B2B-focused design with capacity calculator",
      results: [
        "65% increase in qualified leads",
        "45% improvement in conversion rate",
        "280% ROI on website investment"
      ]
    },
    {
      company: "California Last Mile",
      industry: "Last-Mile Delivery",
      challenge: "Low customer engagement and tracking issues",
      solution: "Real-time tracking integration and mobile optimization",
      results: [
        "60% increase in customer satisfaction",
        "35% reduction in support calls",
        "Improved delivery efficiency"
      ]
    }
  ]

  const logisticsFeatures = [
    {
      feature: "Real-Time Tracking",
      description: "Integration with GPS and delivery management systems",
      impact: "Critical for customer satisfaction"
    },
    {
      feature: "Quote Calculators",
      description: "Interactive tools for instant freight quotes",
      impact: "High impact on lead generation"
    },
    {
      feature: "Mobile Optimization",
      description: "Responsive design for drivers and customers on-the-go",
      impact: "Essential for California logistics"
    },
    {
      feature: "Compliance Documentation",
      description: "Easy access to shipping regulations and requirements",
      impact: "Important for B2B credibility"
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
            <span className="text-gray-900">California Logistics Web Design</span>
          </div>
        </nav>

        {/* Article Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
              Logistics Web Design
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
            Logistics Web Design California: Professional Websites for CA Logistics Companies in 2025
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            California logistics companies need websites that showcase their services and drive business growth. 
            Our comprehensive guide covers everything California logistics businesses need to know about 
            professional web design, from mobile optimization to real-time tracking integration.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-orange-600 to-blue-600 h-64 flex items-center justify-center">
              <div className="text-center text-white">
                <Truck className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-2xl font-bold">California Logistics Web Design</h2>
                <p className="text-lg opacity-90">Professional Websites for CA Logistics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">California Logistics Web Design Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {logisticsStats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-blue-50 p-6 rounded-xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.stat}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Great Logistics Web Design Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Great Logistics Web Design in California?</h2>
          <p className="text-lg text-gray-700 mb-6">
            California logistics companies face unique challenges in the digital landscape. 
            A successful logistics website must be mobile-first, fast-loading, and optimized for 
            real-time tracking while reflecting the state's innovation and efficiency standards.
          </p>
          
          <div className="bg-orange-50 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Elements for California Logistics Websites</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Mobile-responsive design (65% mobile traffic)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Real-time tracking integration</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Interactive quote calculators</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Fast loading speed (<3 seconds)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Compliance documentation access</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Professional service photography</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common California Logistics Web Design Mistakes</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 rounded-full p-1 mr-4 mt-1">
                <span className="text-sm font-bold">✗</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Ignoring Mobile Users</h4>
                <p className="text-gray-600">With 65% of California logistics traffic on mobile, non-responsive sites lose customers immediately.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 rounded-full p-1 mr-4 mt-1">
                <span className="text-sm font-bold">✗</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">No Real-Time Tracking</h4>
                <p className="text-gray-600">California customers expect real-time shipment tracking. Missing this feature hurts credibility.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 rounded-full p-1 mr-4 mt-1">
                <span className="text-sm font-bold">✗</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Generic Templates</h4>
                <p className="text-gray-600">Template websites don't reflect California's logistics innovation and fail to convert.</p>
              </div>
            </div>
          </div>
        </section>

        {/* California Logistics Types Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">California Logistics-Specific Web Design</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Logistics Type-Specific Challenges in California</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {californiaLogisticsTypes.map((logisticsType, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{logisticsType.type}</h4>
                  <p className="text-gray-600 mb-3"><strong>Challenge:</strong> {logisticsType.challenge}</p>
                  <p className="text-gray-600 mb-3"><strong>Solution:</strong> {logisticsType.solution}</p>
                  <p className="text-green-600 font-semibold"><strong>Result:</strong> {logisticsType.result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">California Logistics Market Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">$1.2T</div>
                <div className="text-sm text-gray-600">California Logistics Market</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">15K</div>
                <div className="text-sm text-gray-600">Logistics Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">78%</div>
                <div className="text-sm text-gray-600">Digital Commerce Growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Design Process Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our California Logistics Web Design Process</h2>
          <div className="space-y-8">
            {designProcess.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-orange-600 font-medium">{phase.duration}</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">California Logistics Web Design Case Studies</h2>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-orange-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                    <p className="text-gray-600">{study.industry} • California</p>
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

        {/* 2025 Logistics Web Design Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2025 Logistics Web Design Features for California</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {logisticsFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.feature}</h3>
                <p className="text-gray-600 mb-3">{feature.description}</p>
                <div className="bg-orange-50 px-3 py-1 rounded-full text-sm text-orange-700 font-medium inline-block">
                  {feature.impact}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Choose a California Logistics Web Designer Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose a California Logistics Web Designer</h2>
          
          <div className="bg-orange-50 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Look for in a California Logistics Web Designer</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</div>
                <span>California logistics industry experience</span>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</div>
                <span>Real-time tracking integration capabilities</span>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</div>
                <span>Mobile-first design approach</span>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">4</div>
                <span>SEO optimization and local search expertise</span>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">5</div>
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
                  <span>Can you show me examples of California logistics websites you've designed?</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>How do you integrate real-time tracking systems?</span>
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
                  <span>No logistics industry experience</span>
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
                  <span>No real-time tracking integration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your California Logistics Website?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get a free website audit and discover how to improve your online presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
                <Link href="/contact">
                  Get Free Website Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
                <Link href="/services/web-development">
                  View Web Design Services
                </Link>
              </Button>
            </div>
            <div className="mt-6 text-sm opacity-75">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  California
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 555-0123
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  california@webvello.com
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-lg text-gray-700 mb-6">
            California logistics companies need websites that reflect the state's innovation and efficiency 
            while meeting modern user expectations. A professional logistics website design can significantly 
            impact your business success, from improved user experience to better search engine rankings.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The key is working with a web designer who understands the California logistics market and has 
            proven experience creating successful websites for logistics companies. Our mobile-first approach, 
            combined with deep industry knowledge, helps California logistics businesses achieve their digital goals.
          </p>
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Take Action Today</h3>
            <p className="text-gray-700 mb-4">
              Don't let a poor website hold your California logistics business back. Start with a free 
              website audit to identify opportunities for improvement.
            </p>
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
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
            <Link href="/blog/website-design-detroit" className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Website Design in Detroit</h3>
              <p className="text-gray-600 text-sm">Complete guide to professional website design for Detroit businesses.</p>
            </Link>
            <Link href="/blog/web-developer-fresno" className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Developer Fresno</h3>
              <p className="text-gray-600 text-sm">Professional web development services for Fresno businesses.</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
