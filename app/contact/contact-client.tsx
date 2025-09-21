'use client'

import { useState } from "react"
import { Button } from '../../components/ui/button'
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Zap, CheckCircle, AlertCircle, Star, TrendingUp, Award, Shield, Globe, Calendar, ArrowRight } from 'lucide-react'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'
import Link from 'next/link'
// import { useConversionTracking } from '@/hooks/useConversionTracking'
// import ScrollTracker from '../../components/analytics/scroll-tracker'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "737-888-5723",
    description: "Call us for immediate assistance",
    href: "tel:+17378885723"
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@webvello.com",
    description: "Send us an email anytime",
    href: "mailto:hello@webvello.com"
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Austin, Texas",
    description: "Serving businesses nationwide",
    href: "https://maps.google.com/?q=Austin,+Texas"
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Fri: 9AM-6PM CST",
    description: "We’re here to help during business hours",
    href: null
  }
]

const services = [
  {
    name: "AI SEO Services",
    href: "/services/ai-seo",
    description: "Revolutionary AI-powered search optimization"
  },
  {
    name: "Local SEO",
    href: "/services/local-seo", 
    description: "Dominate local search results"
  },
  {
    name: "Web Development",
    href: "/services/web-development",
    description: "Custom websites that convert"
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
    description: "User-centered design solutions"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content: "Web Vello transformed our online presence. Our organic traffic increased by 300% in just 6 months!",
    rating: 5,
    avatar: "/testimonials/sarah-johnson.jpg"
  },
  {
    name: "Michael Chen",
    company: "LocalBiz Solutions",
    role: "Founder",
    content: "Their local SEO strategies helped us dominate our market. We’re now the #1 result for all our target keywords.",
    rating: 5,
    avatar: "/testimonials/michael-chen.jpg"
  },
  {
    name: "Emily Rodriguez",
    company: "E-commerce Plus",
    role: "Marketing Director",
    content: "The custom website they built for us increased our conversion rate by 150%. Amazing results!",
    rating: 5,
    avatar: "/testimonials/emily-rodriguez.jpg"
  }
]

const faqs = [
  {
    question: "How quickly can you start working on my project?",
    answer: "We typically begin new projects within 1-2 weeks of contract signing. For urgent projects, we can often accommodate faster timelines."
  },
  {
    question: "Do you work with businesses outside the US?",
    answer: "Yes! We work with businesses worldwide. Our digital marketing strategies are effective regardless of location."
  },
  {
    question: "What’s included in your free strategy session?",
    answer: "Our free strategy session includes a comprehensive audit of your current digital presence, competitive analysis, and a customized roadmap for growth."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Absolutely! We offer various maintenance and support packages to ensure your digital assets continue performing optimally."
  },
  {
    question: "Can you help with existing websites or only new projects?",
    answer: "We work with both new and existing websites. We can audit, optimize, and improve your current digital presence."
  }
]

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    urgency: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Request failed')
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        urgency: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleStrategySessionClick = () => {
    // Track strategy session request
    console.log('Strategy session requested')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={generateBreadcrumbs('page', { title: 'Contact' })} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Let’s Grow Your Business
              <span className="block text-blue-600">Together</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your digital presence? Get your free strategy session and discover how we can help you achieve 300%+ growth in traffic and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={handleStrategySessionClick}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Get Free Strategy Session
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 737-888-5723
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 group-hover:bg-blue-200 transition-colors mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="text-blue-600 hover:text-blue-700 font-medium block mb-1"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium mb-1">{info.value}</p>
                )}
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Strategy Session</h2>
                <p className="text-gray-600">
                  Fill out the form below and we’ll get back to you within 24 hours with a customized growth strategy for your business.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-seo">AI-Powered SEO</option>
                      <option value="local-seo">Local SEO</option>
                      <option value="web-development">Web Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Within 1 month)</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months-plus">6+ months</option>
                    <option value="just-exploring">Just exploring options</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your goals, challenges, and what you hope to achieve..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <p className="text-green-800">Thank you! We’ll be in touch within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                    <p className="text-red-800">Something went wrong. Please try again.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Get My Free Strategy Session
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Web Vello?</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mr-4">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                      <p className="text-gray-600">Our clients see an average of 300%+ traffic growth within 6 months.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 mr-4">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                      <p className="text-gray-600">Certified professionals with years of experience in digital marketing.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 mr-4">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Process</h3>
                      <p className="text-gray-600">Regular reporting and clear communication throughout your project.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Quick Links */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="group p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don’t just take our word for it. Here’s what our clients have to say about working with Web Vello.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">“{testimonial.content}”</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Got questions? We’ve got answers. Here are some common questions we receive.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of businesses that have achieved remarkable growth with Web Vello.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg"
              onClick={handleStrategySessionClick}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Get Free Strategy Session
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call 737-888-5723
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
