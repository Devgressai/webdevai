import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle, ExternalLink, Code, Monitor, Smartphone, Palette, Zap, Target, MapPin, Phone, Mail, Star, Award, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chicago Web Application Development: Custom Web Apps for IL Businesses | Web Vello',
  description: 'Professional web application development in Chicago, IL. Expert developers create custom web applications, SaaS platforms, and digital solutions for Chicago businesses. Free consultation available.',
  keywords: 'chicago web application development, chicago web app developer, web application development illinois, chicago custom web applications, web app development chicago',
  openGraph: {
    title: 'Chicago Web Application Development: Custom Web Apps for IL Businesses',
    description: 'Professional web application development in Chicago, IL. Expert developers create custom web applications, SaaS platforms, and digital solutions for Chicago businesses.',
    url: 'https://www.webvello.com/services/web-application-development-chicago',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-30T00:00:00.000Z',
    authors: ['Web Vello Team'],
    tags: ['Web Application Development', 'Chicago Web Apps', 'Illinois Web Development', 'Custom Web Applications'],
  },
}

export default function ChicagoWebApplicationDevelopmentPage() {
  const webAppStats = [
    {
      stat: "85%",
      label: "Mobile Usage",
      description: "Chicago users access web applications primarily on mobile"
    },
    {
      stat: "1.8s",
      label: "Average Load Time",
      description: "Chicago users expect lightning-fast web applications"
    },
    {
      stat: "72%",
      label: "User Engagement Increase",
      description: "Custom web applications improve user engagement"
    },
    {
      stat: "60%",
      label: "Operational Efficiency",
      description: "Web applications streamline business processes"
    }
  ]

  const developmentProcess = [
    {
      phase: "Requirements & Planning",
      duration: "Week 1-2",
      description: "Understanding your Chicago business requirements and technical specifications",
      tasks: [
        "Business requirements analysis",
        "Technical specifications gathering",
        "Technology stack selection",
        "Project architecture planning",
        "Chicago market research"
      ]
    },
    {
      phase: "Design & Prototyping",
      duration: "Week 3-4",
      description: "Creating user interface designs and application prototypes",
      tasks: [
        "UI/UX design creation",
        "Application wireframing",
        "Database architecture design",
        "API design and planning",
        "User flow optimization"
      ]
    },
    {
      phase: "Development & Integration",
      duration: "Week 5-14",
      description: "Building scalable, secure web applications",
      tasks: [
        "Frontend application development",
        "Backend API development",
        "Database implementation",
        "Third-party integrations",
        "Security implementation"
      ]
    },
    {
      phase: "Testing & Deployment",
      duration: "Week 15-16",
      description: "Quality assurance, testing, and production deployment",
      tasks: [
        "Comprehensive testing",
        "Performance optimization",
        "Security auditing",
        "Production deployment",
        "Documentation and training"
      ]
    }
  ]

  const chicagoIndustries = [
    {
      industry: "Financial Services",
      challenge: "Complex financial calculations and regulatory compliance",
      solution: "Secure financial web applications with compliance features",
      result: "45% increase in operational efficiency"
    },
    {
      industry: "Manufacturing",
      challenge: "Supply chain management and production tracking",
      solution: "Integrated manufacturing management systems",
      result: "50% improvement in production visibility"
    },
    {
      industry: "Healthcare",
      challenge: "Patient data management and HIPAA compliance",
      solution: "Secure healthcare applications with patient portals",
      result: "40% improvement in patient satisfaction"
    },
    {
      industry: "Technology",
      challenge: "SaaS platform development and scalability",
      solution: "Scalable cloud-based web applications",
      result: "65% increase in user adoption"
    }
  ]

  const caseStudies = [
    {
      company: "Chicago Financial Group",
      industry: "Financial Services",
      challenge: "Outdated financial management system affecting efficiency",
      solution: "Modern financial web application with real-time analytics",
      results: [
        "80% increase in operational efficiency",
        "60% improvement in data accuracy",
        "$650K additional revenue in 8 months"
      ]
    },
    {
      company: "Midwest Manufacturing Co.",
      industry: "Manufacturing",
      challenge: "Poor supply chain visibility and production tracking",
      solution: "Integrated manufacturing management web application",
      results: [
        "70% improvement in production visibility",
        "45% reduction in inventory costs",
        "300% ROI on web application investment"
      ]
    },
    {
      company: "Chicago Medical Center",
      industry: "Healthcare",
      challenge: "Inefficient patient data management and low engagement",
      solution: "Comprehensive healthcare web application with patient portal",
      results: [
        "75% increase in patient engagement",
        "50% improvement in appointment scheduling",
        "$420K additional revenue"
      ]
    }
  ]

  const webAppServices = [
    {
      service: "Custom Web Applications",
      description: "Bespoke web applications tailored to your Chicago business needs",
      features: ["Custom functionality", "Database integration", "API development", "Scalable architecture"],
      price: "Starting at $12,500"
    },
    {
      service: "SaaS Platform Development",
      description: "Software-as-a-Service platforms for Chicago businesses",
      features: ["Multi-tenant architecture", "Subscription management", "User management", "Analytics dashboard"],
      price: "Starting at $18,500"
    },
    {
      service: "Enterprise Web Applications",
      description: "Large-scale web applications for enterprise Chicago businesses",
      features: ["Enterprise integration", "Advanced security", "High availability", "Custom reporting"],
      price: "Starting at $25,000"
    },
    {
      service: "Web Application Maintenance",
      description: "Ongoing maintenance and support for web applications",
      features: ["Regular updates", "Security monitoring", "Performance optimization", "Feature enhancements"],
      price: "Starting at $500/month"
    }
  ]

  const testimonials = [
    {
      name: "Robert Johnson",
      company: "Chicago Financial Group",
      role: "CTO",
      content: "Web Vello's web application development expertise transformed our financial operations. We saw an 80% increase in efficiency and $650K in additional revenue within 8 months.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      company: "Midwest Manufacturing Co.",
      role: "Operations Director",
      content: "The integrated manufacturing management application improved our production visibility by 70% and reduced inventory costs by 45%. Excellent ROI.",
      rating: 5
    },
    {
      name: "Dr. James Chen",
      company: "Chicago Medical Center",
      role: "IT Director",
      content: "The healthcare web application with patient portal increased our patient engagement by 75% and improved appointment scheduling by 50%.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Chicago Web Application Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Professional web application development creating custom web apps, 
              SaaS platforms, and digital solutions for Chicago businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Link href="/contact">
                  Get Free App Consultation
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
              Proven Web Application Results for Chicago Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Chicago web application development services deliver measurable improvements that drive business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webAppStats.map((stat, index) => (
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
              Why Choose Our Chicago Web Application Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local Chicago market expertise with cutting-edge development to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Chicago Expertise</h3>
              <p className="text-gray-600">Deep understanding of Chicago market dynamics and business needs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Award-Winning Development</h3>
              <p className="text-gray-600">Recognized for excellence in web application development and user experience</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile-First Development</h3>
              <p className="text-gray-600">Optimized for mobile devices where 85% of Chicago users access applications</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning-Fast Performance</h3>
              <p className="text-gray-600">Ultra-fast loading speeds that Chicago users expect</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Team</h3>
              <p className="text-gray-600">Experienced developers and designers focused on your success</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI Focused</h3>
              <p className="text-gray-600">Every development decision optimized for maximum return on investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Development Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Chicago Web Application Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to web application success tailored for Chicago businesses
            </p>
          </div>
          <div className="space-y-8">
            {developmentProcess.map((phase, index) => (
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

      {/* Chicago Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Chicago Industry-Specific Web Application Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized web application solutions for Chicago's key industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chicagoIndustries.map((industry, index) => (
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
              Chicago Web Application Development Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our Chicago web application development clients
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
                    <p className="text-gray-600">{study.industry} • Chicago, IL</p>
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
              Chicago Web Application Development Services & Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web application development solutions tailored for Chicago businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webAppServices.map((service, index) => (
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
              What Chicago Business Owners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by Chicago's leading businesses
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Chicago Business with Custom Web Applications?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get a free application consultation and discover how our Chicago web application development services 
            can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link href="/contact">
                Get Free App Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Link href="tel:+13125550123">
                Call (312) 555-0123
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Chicago, IL
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (312) 555-0123
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                chicago@webvello.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
