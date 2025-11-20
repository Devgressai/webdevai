import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle, ExternalLink, TrendingUp, Target, BarChart3, DollarSign, MapPin, Phone, Mail, Star, Award, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Charlotte SEO Consulting Services: Expert SEO Consultants in NC | Web Vello',
  description: 'Professional SEO consulting services in Charlotte, NC. Expert SEO consultants help Charlotte businesses increase organic traffic, improve rankings, and grow revenue. Free consultation available.',
  keywords: 'seo consulting charlotte nc, charlotte seo consultant, seo services charlotte, charlotte seo company, seo consulting north carolina',
  openGraph: {
    title: 'Charlotte SEO Consulting Services: Expert SEO Consultants in NC',
    description: 'Professional SEO consulting services in Charlotte, NC. Expert SEO consultants help Charlotte businesses increase organic traffic, improve rankings, and grow revenue.',
    url: 'https://www.webvello.com/services/seo-consulting-charlotte',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-30T00:00:00.000Z',
    authors: ['Web Vello Team'],
    tags: ['SEO Consulting', 'Charlotte SEO', 'North Carolina SEO', 'SEO Services'],
  },
}

export default function CharlotteSEOConsultingServicesPage() {
  const seoStats = [
    {
      stat: "300%",
      label: "Average Traffic Increase",
      description: "Our Charlotte SEO clients see significant organic growth"
    },
    {
      stat: "85%",
      label: "First Page Rankings",
      description: "Charlotte businesses achieve top Google rankings"
    },
    {
      stat: "45%",
      label: "Lead Generation Boost",
      description: "SEO consulting drives qualified Charlotte leads"
    },
    {
      stat: "6 Months",
      label: "Average Timeline",
      description: "To see measurable SEO results"
    }
  ]

  const seoProcess = [
    {
      phase: "SEO Audit & Analysis",
      duration: "Week 1-2",
      description: "Comprehensive analysis of your current SEO performance",
      tasks: [
        "Technical SEO audit",
        "Keyword research and analysis",
        "Competitive analysis",
        "Content gap analysis",
        "Charlotte market research"
      ]
    },
    {
      phase: "Strategy Development",
      duration: "Week 3-4",
      description: "Custom SEO strategy tailored for Charlotte businesses",
      tasks: [
        "SEO roadmap creation",
        "Keyword targeting strategy",
        "Content strategy development",
        "Local SEO optimization plan",
        "Technical improvements planning"
      ]
    },
    {
      phase: "Implementation & Optimization",
      duration: "Week 5-16",
      description: "Execute SEO strategy and monitor performance",
      tasks: [
        "On-page optimization",
        "Technical SEO improvements",
        "Content creation and optimization",
        "Local SEO implementation",
        "Link building campaigns"
      ]
    },
    {
      phase: "Monitoring & Reporting",
      duration: "Ongoing",
      description: "Continuous monitoring and strategy refinement",
      tasks: [
        "Performance tracking",
        "Monthly reporting",
        "Strategy adjustments",
        "ROI analysis",
        "Long-term optimization"
      ]
    }
  ]

  const charlotteIndustries = [
    {
      industry: "Banking & Finance",
      challenge: "High competition and strict compliance requirements",
      solution: "Compliance-focused SEO strategy with financial keyword targeting",
      result: "40% increase in qualified leads"
    },
    {
      industry: "Healthcare",
      challenge: "HIPAA compliance and patient privacy concerns",
      solution: "Healthcare-specific SEO with patient education content",
      result: "35% improvement in patient acquisition"
    },
    {
      industry: "Manufacturing",
      challenge: "B2B sales cycles and technical product descriptions",
      solution: "Technical SEO with B2B content strategy",
      result: "50% increase in industrial leads"
    },
    {
      industry: "Real Estate",
      challenge: "Local competition and seasonal fluctuations",
      solution: "Hyperlocal SEO with neighborhood-specific content",
      result: "60% increase in property inquiries"
    }
  ]

  const caseStudies = [
    {
      company: "Charlotte Financial Group",
      industry: "Banking & Finance",
      challenge: "Low organic visibility in competitive financial market",
      solution: "Comprehensive SEO strategy with financial content marketing",
      results: [
        "250% increase in organic traffic",
        "40% improvement in lead quality",
        "$180K additional revenue in 6 months"
      ]
    },
    {
      company: "Queen City Medical Center",
      industry: "Healthcare",
      challenge: "Poor online visibility for patient acquisition",
      solution: "Healthcare SEO with patient education content strategy",
      results: [
        "180% increase in organic traffic",
        "35% improvement in patient appointments",
        "200% ROI on SEO investment"
      ]
    },
    {
      company: "Charlotte Manufacturing Co.",
      industry: "Manufacturing",
      challenge: "Low B2B lead generation from organic search",
      solution: "B2B SEO strategy with technical content optimization",
      results: [
        "320% increase in qualified leads",
        "45% improvement in sales conversion",
        "$280K additional revenue"
      ]
    }
  ]

  const seoServices = [
    {
      service: "Technical SEO Audit",
      description: "Comprehensive analysis of your website's technical SEO foundation",
      features: ["Site speed optimization", "Mobile responsiveness", "Crawl error analysis", "Schema markup implementation"],
      price: "Starting at $2,500"
    },
    {
      service: "Keyword Research & Strategy",
      description: "Data-driven keyword targeting for Charlotte market dominance",
      features: ["Competitive keyword analysis", "Local keyword research", "Search volume analysis", "Keyword difficulty assessment"],
      price: "Starting at $1,800"
    },
    {
      service: "Content Marketing Strategy",
      description: "Content creation and optimization for maximum SEO impact",
      features: ["Content calendar development", "Blog post creation", "Page optimization", "Content performance tracking"],
      price: "Starting at $3,200"
    },
    {
      service: "Local SEO Optimization",
      description: "Hyperlocal SEO strategy for Charlotte market dominance",
      features: ["Google My Business optimization", "Local citation building", "Review management", "Local content creation"],
      price: "Starting at $2,200"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Charlotte Financial Group",
      role: "Marketing Director",
      content: "Web Vello's SEO consulting transformed our online presence. We went from page 3 to top 3 rankings in just 6 months, resulting in a 250% increase in qualified leads.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Queen City Medical Center",
      role: "Practice Manager",
      content: "The healthcare SEO expertise and HIPAA-compliant approach helped us attract more patients while maintaining compliance. Our organic traffic increased by 180%.",
      rating: 5
    },
    {
      name: "Jennifer Williams",
      company: "Charlotte Manufacturing Co.",
      role: "VP of Sales",
      content: "The B2B SEO strategy delivered exactly what we needed - high-quality industrial leads. We saw a 320% increase in qualified prospects and $280K in additional revenue.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Charlotte SEO Consulting Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Expert SEO consultants helping Charlotte businesses dominate search results, 
              increase organic traffic, and grow revenue with proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Link href="/contact">
                  Get Free SEO Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                <Link href="#case-studies">
                  View Success Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven SEO Results for Charlotte Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Charlotte SEO consulting services deliver measurable results that drive business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoStats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.stat}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Charlotte SEO Consulting Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local Charlotte market expertise with proven SEO strategies to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Charlotte Expertise</h3>
              <p className="text-gray-600">Deep understanding of Charlotte market dynamics, competition, and local search behavior</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600">Over 200 successful SEO campaigns for Charlotte businesses across all industries</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Approach</h3>
              <p className="text-gray-600">Advanced analytics and reporting to track progress and optimize performance</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Team</h3>
              <p className="text-gray-600">Experienced SEO specialists dedicated to your Charlotte business success</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Results</h3>
              <p className="text-gray-600">Optimized strategies that deliver measurable improvements within 90 days</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI Focused</h3>
              <p className="text-gray-600">Every strategy designed to maximize return on investment and business growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Charlotte SEO Consulting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to SEO success tailored for Charlotte businesses
            </p>
          </div>
          <div className="space-y-8">
            {seoProcess.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-blue-600 font-medium">{phase.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{phase.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charlotte Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Charlotte Industry-Specific SEO Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized SEO strategies for Charlotte's key industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {charlotteIndustries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{industry.industry}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{industry.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{industry.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Result:</h4>
                    <p className="text-green-600 font-medium">{industry.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Charlotte SEO Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our Charlotte SEO consulting clients
            </p>
          </div>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{study.company}</h3>
                    <p className="text-gray-600">{study.industry} • Charlotte, NC</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <ul className="text-gray-600 space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Charlotte SEO Consulting Services & Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO solutions tailored for Charlotte businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.service}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Charlotte Business Owners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by Charlotte's leading businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Charlotte Search Results?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get a free SEO consultation and discover how our Charlotte SEO consulting services 
            can transform your online presence and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link href="/contact">
                Get Free SEO Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Link href="tel:+17045550123">
                Call (704) 555-0123
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Charlotte, NC
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (704) 555-0123
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                charlotte@webvello.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
