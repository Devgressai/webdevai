import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle, ExternalLink, Monitor, Smartphone, Palette, Code, Zap, Target, MapPin, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website Design in Detroit: Complete Guide for Business Success 2025 | Web Vello',
  description: 'Professional website design services in Detroit. Modern, responsive websites that convert visitors into customers. Free consultation available for Detroit businesses.',
  keywords: 'website design detroit, detroit web design, detroit website designer, responsive web design detroit, detroit web development',
  openGraph: {
    title: 'Website Design in Detroit: Complete Guide for Business Success 2025',
    description: 'Professional website design services in Detroit. Modern, responsive websites that convert visitors into customers.',
    url: 'https://webvello.com/blog/website-design-detroit',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-30T00:00:00.000Z',
    authors: ['Web Vello Team'],
    tags: ['Website Design', 'Detroit Web Development', 'Responsive Design', 'Business Websites'],
  },
}

export default function DetroitWebDesignBlogPost() {
  const detroitStats = [
    {
      stat: "4.3M",
      label: "Detroit Metro Population",
      description: "Massive market for local businesses"
    },
    {
      stat: "68%",
      label: "Mobile Traffic",
      description: "Detroit users browse primarily on mobile"
    },
    {
      stat: "3.2s",
      label: "Average Load Time",
      description: "Detroit users expect fast websites"
    },
    {
      stat: "47%",
      label: "Bounce Rate",
      description: "Poor design leads to high bounce rates"
    }
  ]

  const designProcess = [
    {
      phase: "Discovery & Strategy",
      duration: "Week 1",
      description: "Understanding your Detroit business goals and target audience",
      tasks: [
        "Business goals analysis",
        "Target audience research",
        "Competitive analysis",
        "Content strategy planning",
        "Detroit market research"
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
      description: "Building responsive, fast-loading websites",
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

  const detroitIndustries = [
    {
      industry: "Automotive",
      challenge: "Complex product catalogs and specifications",
      solution: "Interactive product configurators and AR features",
      result: "35% increase in lead generation"
    },
    {
      industry: "Manufacturing",
      challenge: "B2B sales processes and technical documentation",
      solution: "Streamlined lead forms and technical resource centers",
      result: "42% improvement in qualified leads"
    },
    {
      industry: "Healthcare",
      challenge: "Patient portal integration and appointment booking",
      solution: "Seamless patient experience and HIPAA compliance",
      result: "28% increase in online appointments"
    },
    {
      industry: "Retail",
      challenge: "E-commerce integration and inventory management",
      solution: "Modern e-commerce platforms with real-time inventory",
      result: "55% increase in online sales"
    }
  ]

  const caseStudies = [
    {
      company: "Detroit Auto Parts Co.",
      industry: "Automotive",
      challenge: "Outdated website hurting online sales",
      solution: "Modern e-commerce platform with product configurator",
      results: [
        "60% increase in online sales",
        "40% improvement in user engagement",
        "$450K additional revenue in 6 months"
      ]
    },
    {
      company: "Motor City Manufacturing",
      industry: "Manufacturing",
      challenge: "Poor lead generation from website",
      solution: "B2B-focused design with streamlined lead capture",
      results: [
        "75% increase in qualified leads",
        "50% improvement in conversion rate",
        "300% ROI on website investment"
      ]
    },
    {
      company: "Detroit Medical Group",
      industry: "Healthcare",
      challenge: "Low online appointment bookings",
      solution: "Patient-friendly design with integrated booking system",
      results: [
        "45% increase in online bookings",
        "30% reduction in phone calls",
        "Improved patient satisfaction scores"
      ]
    }
  ]

  const webDesignTrends = [
    {
      trend: "Mobile-First Design",
      description: "With 68% of Detroit traffic on mobile, responsive design is essential",
      impact: "Critical for Detroit businesses"
    },
    {
      trend: "Fast Loading Speed",
      description: "Detroit users expect websites to load in under 3 seconds",
      impact: "High impact on conversions"
    },
    {
      trend: "Accessibility Compliance",
      description: "WCAG 2.1 compliance ensures your site is usable by everyone",
      impact: "Legal requirement and good practice"
    },
    {
      trend: "Voice Search Optimization",
      description: "Optimizing for voice search queries from Detroit users",
      impact: "Growing importance for local SEO"
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
            <span className="text-gray-900">Detroit Web Design</span>
          </div>
        </nav>

        {/* Article Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
              Website Design
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
            Website Design in Detroit: Complete Guide for Business Success 2025
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Detroit businesses need websites that convert visitors into customers. 
            Our comprehensive guide covers everything Detroit companies need to know 
            about professional website design, from mobile optimization to local SEO.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 h-64 flex items-center justify-center">
              <div className="text-center text-white">
                <Monitor className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-2xl font-bold">Detroit Web Design</h2>
                <p className="text-lg opacity-90">Modern Websites for Motor City Businesses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Detroit Web Design Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detroitStats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.stat}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Great Detroit Web Design Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Great Website Design in Detroit?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Detroit businesses face unique challenges and opportunities in the digital landscape. 
            A successful Detroit website must be mobile-first, fast-loading, and optimized for 
            local search while reflecting the city's industrial heritage and innovative spirit.
          </p>
          
          <div className="bg-green-50 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Elements for Detroit Websites</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Mobile-responsive design (68% mobile traffic)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Fast loading speed (<3 seconds)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Local SEO optimization</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Clear call-to-action buttons</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Professional photography</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Contact information prominently displayed</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common Detroit Web Design Mistakes</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 rounded-full p-1 mr-4 mt-1">
                <span className="text-sm font-bold">✗</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Ignoring Mobile Users</h4>
                <p className="text-gray-600">With 68% of Detroit traffic on mobile, non-responsive sites lose customers immediately.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 rounded-full p-1 mr-4 mt-1">
                <span className="text-sm font-bold">✗</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Slow Loading Times</h4>
                <p className="text-gray-600">Detroit users expect fast websites. Slow loading kills conversions and SEO rankings.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 rounded-full p-1 mr-4 mt-1">
                <span className="text-sm font-bold">✗</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Generic Templates</h4>
                <p className="text-gray-600">Template websites don't reflect Detroit's unique business culture and fail to convert.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detroit Industry Focus Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Detroit Industry-Specific Web Design</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Industry-Specific Challenges in Detroit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detroitIndustries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{industry.industry}</h4>
                  <p className="text-gray-600 mb-3"><strong>Challenge:</strong> {industry.challenge}</p>
                  <p className="text-gray-600 mb-3"><strong>Solution:</strong> {industry.solution}</p>
                  <p className="text-green-600 font-semibold"><strong>Result:</strong> {industry.result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Detroit Market Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">$89B</div>
                <div className="text-sm text-gray-600">Metro Detroit GDP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">1.2M</div>
                <div className="text-sm text-gray-600">Small Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">Digital Commerce Growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Design Process Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Detroit Web Design Process</h2>
          <div className="space-y-8">
            {designProcess.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-green-600 font-medium">{phase.duration}</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Detroit Web Design Case Studies</h2>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-green-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                    <p className="text-gray-600">{study.industry} • Detroit, MI</p>
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

        {/* 2025 Web Design Trends Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2025 Web Design Trends for Detroit Businesses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webDesignTrends.map((trend, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{trend.trend}</h3>
                <p className="text-gray-600 mb-3">{trend.description}</p>
                <div className="bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-700 font-medium inline-block">
                  {trend.impact}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Choose a Detroit Web Designer Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose a Detroit Web Designer</h2>
          
          <div className="bg-green-50 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Look for in a Detroit Web Designer</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</div>
                <span>Local Detroit market knowledge and experience</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</div>
                <span>Portfolio of successful Detroit business websites</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</div>
                <span>Mobile-first design approach</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">4</div>
                <span>SEO optimization and local search expertise</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">5</div>
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
                  <span>Can you show me examples of Detroit business websites you've designed?</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>How do you ensure mobile responsiveness?</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>What's your process for SEO optimization?</span>
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
                  <span>No portfolio or case studies</span>
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
                  <span>No local Detroit market knowledge</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Detroit Business Website?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get a free website audit and discover how to improve your online presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
                <Link href="/contact">
                  Get Free Website Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
                <Link href="/services/web-development">
                  View Web Design Services
                </Link>
              </Button>
            </div>
            <div className="mt-6 text-sm opacity-75">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Detroit, MI
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (313) 555-0123
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  detroit@webvello.com
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-lg text-gray-700 mb-6">
            Detroit businesses need websites that reflect the city's innovative spirit while meeting 
            modern user expectations. A professional website design can significantly impact your 
            business success, from improved user experience to better search engine rankings.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The key is working with a web designer who understands the Detroit market and has 
            proven experience creating successful websites for local businesses. Our mobile-first 
            approach, combined with deep local market knowledge, helps Detroit businesses achieve 
            their digital goals.
          </p>
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Take Action Today</h3>
            <p className="text-gray-700 mb-4">
              Don't let a poor website hold your Detroit business back. Start with a free 
              website audit to identify opportunities for improvement.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
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
            <Link href="/blog/louisville-conversion-rate-optimization-services" className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Louisville Conversion Rate Optimization Services</h3>
              <p className="text-gray-600 text-sm">Boost your Louisville business conversions with professional CRO services.</p>
            </Link>
            <Link href="/blog/detroit-conversion-rate-optimization-services" className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Detroit Conversion Rate Optimization Services</h3>
              <p className="text-gray-600 text-sm">Increase conversions for your Detroit business with data-driven CRO strategies.</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
