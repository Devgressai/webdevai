import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle, ExternalLink, Truck, Package, Globe, Target, MapPin, Phone, Mail, Star, Award, DollarSign, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Freight Forwarder Web Design: Complete Guide 2025 | Web Vello',
  description: 'Complete guide to web design for freight forwarders in 2025. Learn about logistics website design, shipping tracking, and digital strategies for freight companies.',
  keywords: 'freight forwarder web design, logistics website design, shipping company website, freight forwarding digital marketing, logistics web development',
  openGraph: {
    title: 'Freight Forwarder Web Design: Complete Guide 2025',
    description: 'Complete guide to web design for freight forwarders in 2025. Learn about logistics website design, shipping tracking, and digital strategies for freight companies.',
    url: 'https://webvello.com/blog/freight-forwarder-web-design-guide',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-30T00:00:00.000Z',
    authors: ['Web Vello Team'],
    tags: ['Freight Forwarder Web Design', 'Logistics Website Design', 'Shipping Company Website', 'Freight Forwarding'],
  },
}

export default function FreightForwarderWebDesignGuidePage() {
  const freightStats = [
    {
      stat: "$2.1T",
      label: "Global Market",
      description: "Freight forwarding industry value"
    },
    {
      stat: "78%",
      label: "Digital Adoption",
      description: "Of freight companies use digital tools"
    },
    {
      stat: "65%",
      label: "Online Bookings",
      description: "Customers prefer online freight booking"
    },
    {
      stat: "42%",
      label: "Mobile Usage",
      description: "Of freight inquiries come from mobile"
    }
  ]

  const keyFeatures = [
    {
      feature: "Real-Time Tracking",
      description: "Live shipment tracking and status updates",
      importance: "Critical",
      implementation: [
        "API integration with carriers",
        "Real-time status updates",
        "GPS tracking integration",
        "Automated notifications"
      ],
      benefits: "Improved customer satisfaction and transparency"
    },
    {
      feature: "Online Booking System",
      description: "Streamlined freight booking and quote requests",
      importance: "Critical",
      implementation: [
        "Quote request forms",
        "Rate calculation engine",
        "Booking confirmation system",
        "Payment processing integration"
      ],
      benefits: "Reduced manual work and faster response times"
    },
    {
      feature: "Document Management",
      description: "Digital document handling and storage",
      importance: "High",
      implementation: [
        "Document upload system",
        "Digital signature capability",
        "Document version control",
        "Secure file storage"
      ],
      benefits: "Improved efficiency and compliance"
    },
    {
      feature: "Customer Portal",
      description: "Self-service portal for customers",
      importance: "High",
      implementation: [
        "Account management",
        "Shipment history",
        "Invoice access",
        "Communication tools"
      ],
      benefits: "Enhanced customer experience and reduced support load"
    }
  ]

  const designConsiderations = [
    {
      consideration: "User Experience",
      description: "Intuitive navigation for complex logistics processes",
      bestPractices: [
        "Clear, logical navigation structure",
        "Simplified booking process",
        "Mobile-responsive design",
        "Accessible design for all users"
      ],
      impact: "Critical"
    },
    {
      consideration: "Performance",
      description: "Fast loading times for global users",
      bestPractices: [
        "Optimized images and content",
        "CDN implementation",
        "Caching strategies",
        "Minimal page load times"
      ],
      impact: "High"
    },
    {
      consideration: "Security",
      description: "Protection of sensitive shipping and customer data",
      bestPractices: [
        "SSL encryption",
        "Secure data transmission",
        "Regular security updates",
        "Compliance with regulations"
      ],
      impact: "Critical"
    },
    {
      consideration: "Integration",
      description: "Seamless connection with logistics systems",
      bestPractices: [
        "API-first architecture",
        "Third-party integrations",
        "Data synchronization",
        "Scalable infrastructure"
      ],
      impact: "High"
    }
  ]

  const targetAudiences = [
    {
      audience: "Importers/Exporters",
      demographics: "Business owners, procurement managers, supply chain professionals",
      needs: [
        "Reliable shipping services",
        "Transparent pricing",
        "Real-time tracking",
        "Documentation support"
      ],
      painPoints: [
        "Complex shipping processes",
        "Unclear pricing structures",
        "Poor communication",
        "Documentation delays"
      ],
      messaging: "Focus on reliability, transparency, and expertise"
    },
    {
      audience: "E-commerce Businesses",
      demographics: "Online retailers, dropshippers, marketplace sellers",
      needs: [
        "Fast shipping options",
        "International shipping",
        "Cost-effective solutions",
        "Integration capabilities"
      ],
      painPoints: [
        "High shipping costs",
        "Slow delivery times",
        "Complex international shipping",
        "Limited tracking visibility"
      ],
      messaging: "Emphasize speed, cost-effectiveness, and integration"
    },
    {
      audience: "Manufacturing Companies",
      demographics: "Production managers, logistics coordinators, procurement teams",
      needs: [
        "Bulk shipping solutions",
        "Supply chain optimization",
        "Compliance support",
        "Cost management"
      ],
      painPoints: [
        "Supply chain disruptions",
        "Compliance requirements",
        "Cost volatility",
        "Limited visibility"
      ],
      messaging: "Highlight expertise, compliance, and supply chain optimization"
    },
    {
      audience: "Small Businesses",
      demographics: "Small business owners, entrepreneurs, startups",
      needs: [
        "Affordable shipping",
        "Simple processes",
        "Educational resources",
        "Personalized service"
      ],
      painPoints: [
        "Complex shipping requirements",
        "High minimum volumes",
        "Lack of guidance",
        "Limited resources"
      ],
      messaging: "Focus on simplicity, affordability, and support"
    }
  ]

  const technologyStack = [
    {
      technology: "Content Management Systems",
      options: ["WordPress", "Drupal", "Custom Solutions"],
      pros: ["Easy content updates", "SEO optimization", "Plugin ecosystem"],
      cons: ["Security concerns", "Performance limitations", "Scalability issues"],
      recommendation: "Custom solutions for complex logistics needs"
    },
    {
      technology: "Tracking Systems",
      options: ["Custom Development", "Third-party APIs", "Hybrid Solutions"],
      pros: ["Real-time updates", "Carrier integration", "Custom features"],
      cons: ["Development complexity", "Maintenance overhead", "Integration challenges"],
      recommendation: "Hybrid solutions with API integration"
    },
    {
      technology: "Payment Processing",
      options: ["Stripe", "PayPal", "Custom Gateway"],
      pros: ["Secure transactions", "Multiple currencies", "Fraud protection"],
      cons: ["Transaction fees", "Compliance requirements", "Integration complexity"],
      recommendation: "Multiple payment options for flexibility"
    },
    {
      technology: "Communication Tools",
      options: ["Live Chat", "Email Integration", "SMS Notifications"],
      pros: ["Real-time support", "Automated updates", "Multi-channel communication"],
      cons: ["Implementation complexity", "Maintenance requirements", "User adoption"],
      recommendation: "Integrated communication platform"
    }
  ]

  const contentStrategies = [
    {
      strategy: "Educational Content",
      description: "Content that helps customers understand freight forwarding",
      topics: [
        "Shipping documentation guides",
        "Customs clearance processes",
        "International shipping regulations",
        "Supply chain optimization tips"
      ],
      format: "Blog posts, guides, videos, infographics",
      frequency: "Weekly"
    },
    {
      strategy: "Industry Insights",
      description: "Content showcasing industry expertise and trends",
      topics: [
        "Market analysis reports",
        "Industry trend updates",
        "Regulatory changes",
        "Technology innovations"
      ],
      format: "Reports, whitepapers, webinars, case studies",
      frequency: "Monthly"
    },
    {
      strategy: "Customer Success Stories",
      description: "Content highlighting customer achievements",
      topics: [
        "Case studies",
        "Customer testimonials",
        "Success metrics",
        "Industry-specific solutions"
      ],
      format: "Case studies, testimonials, videos, interviews",
      frequency: "Bi-weekly"
    },
    {
      strategy: "Service-Specific Content",
      description: "Content explaining specific freight forwarding services",
      topics: [
        "Air freight services",
        "Ocean freight options",
        "Land transportation",
        "Warehousing solutions"
      ],
      format: "Service pages, comparison guides, FAQs",
      frequency: "As needed"
    }
  ]

  const successMetrics = [
    {
      metric: "Website Traffic",
      description: "Track overall website visitors and page views",
      target: "25-40% annual growth",
      tools: ["Google Analytics", "Search Console", "Heat mapping tools"],
      frequency: "Weekly"
    },
    {
      metric: "Lead Generation",
      description: "Monitor quote requests and inquiries",
      target: "15-25% increase in qualified leads",
      tools: ["CRM systems", "Form analytics", "Lead tracking"],
      frequency: "Daily"
    },
    {
      metric: "Conversion Rates",
      description: "Track visitor-to-customer conversion",
      target: "3-5% conversion rate",
      tools: ["Google Analytics", "Conversion tracking", "A/B testing"],
      frequency: "Monthly"
    },
    {
      metric: "Customer Engagement",
      description: "Monitor customer portal usage and satisfaction",
      target: "80%+ customer satisfaction",
      tools: ["Customer surveys", "Usage analytics", "Support tickets"],
      frequency: "Quarterly"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Freight Forwarder Web Design: Complete Guide 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Comprehensive guide to web design for freight forwarders, covering logistics 
              websites, shipping tracking, and digital strategies for freight companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Link href="/contact">
                  Get Freight Web Design Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                <Link href="#features">
                  View Key Features
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
              Freight Forwarding Industry Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key statistics that highlight the importance of digital presence in freight forwarding
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {freightStats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.stat}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              The Digital Transformation of Freight Forwarding
            </h2>
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                The freight forwarding industry is undergoing a significant digital transformation, 
                driven by customer expectations for transparency, real-time tracking, and seamless 
                online experiences. A well-designed website is no longer optional—it's essential 
                for competing in today's global logistics market.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Modern freight forwarders must balance complex operational requirements with 
                user-friendly digital experiences. From real-time shipment tracking to online 
                booking systems, freight forwarding websites must handle sophisticated logistics 
                processes while remaining accessible to customers with varying levels of technical 
                expertise.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                This comprehensive guide explores the essential features, design considerations, 
                and strategies that freight forwarders need to create effective digital 
                experiences that drive business growth and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential Features for Freight Forwarder Websites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Critical features that modern freight forwarding websites must include
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{feature.feature}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    feature.importance === 'Critical' ? 'bg-red-100 text-red-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {feature.importance}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900">Implementation:</span>
                    <ul className="mt-2 space-y-1">
                      {feature.implementation.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <span className="font-semibold text-green-800">Benefits:</span>
                    <span className="text-green-700 ml-2">{feature.benefits}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Considerations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Design Considerations for Freight Forwarding Websites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key design principles that ensure effective freight forwarding websites
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designConsiderations.map((consideration, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{consideration.consideration}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    consideration.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {consideration.impact} Impact
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{consideration.description}</p>
                <div>
                  <span className="font-semibold text-gray-900">Best Practices:</span>
                  <ul className="mt-2 space-y-1">
                    {consideration.bestPractices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="text-gray-600 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Target Audiences for Freight Forwarding Websites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key customer segments and their specific needs and pain points
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{audience.audience}</h3>
                <p className="text-gray-600 mb-4">{audience.demographics}</p>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900">Key Needs:</span>
                    <ul className="mt-2 space-y-1">
                      {audience.needs.map((need, needIndex) => (
                        <li key={needIndex} className="text-gray-600 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Pain Points:</span>
                    <ul className="mt-2 space-y-1">
                      {audience.painPoints.map((pain, painIndex) => (
                        <li key={painIndex} className="text-gray-600 flex items-center">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <span className="font-semibold text-blue-800">Messaging Focus:</span>
                    <span className="text-blue-700 ml-2">{audience.messaging}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack for Freight Forwarding Websites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technology choices that impact freight forwarding website performance and functionality
            </p>
          </div>
          <div className="space-y-8">
            {technologyStack.map((tech, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{tech.technology}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <span className="font-semibold text-gray-900">Options:</span>
                    <ul className="mt-2 space-y-1">
                      {tech.options.map((option, optionIndex) => (
                        <li key={optionIndex} className="text-gray-600 flex items-center">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Pros:</span>
                    <ul className="mt-2 space-y-1">
                      {tech.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="text-green-600 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Cons:</span>
                    <ul className="mt-2 space-y-1">
                      {tech.cons.map((con, conIndex) => (
                        <li key={conIndex} className="text-red-600 flex items-center">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <span className="font-semibold text-blue-800">Recommendation:</span>
                  <span className="text-blue-700 ml-2">{tech.recommendation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Strategies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Content Strategies for Freight Forwarding Websites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Content approaches that educate customers and establish industry expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentStrategies.map((strategy, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{strategy.strategy}</h3>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900">Content Topics:</span>
                    <ul className="mt-2 space-y-1">
                      {strategy.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-gray-600 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-semibold text-gray-900">Format:</span>
                      <span className="text-blue-600 font-medium ml-2">{strategy.format}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Frequency:</span>
                      <span className="text-green-600 font-medium ml-2">{strategy.frequency}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measuring Freight Forwarding Website Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key metrics to track freight forwarding website performance and business impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{metric.metric}</h3>
                <p className="text-gray-600 mb-4">{metric.description}</p>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900">Target:</span>
                    <span className="text-green-600 font-medium ml-2">{metric.target}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Tracking Tools:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {metric.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Review Frequency:</span>
                    <span className="text-blue-600 font-medium ml-2">{metric.frequency}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Implementing Freight Forwarding Website Design
            </h2>
            <div className="prose prose-lg prose-gray max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Phase 1: Planning and Discovery</h3>
              <p className="text-lg text-gray-600 mb-4">
                Start with a comprehensive analysis of your current operations, customer needs, 
                and competitive landscape. This phase should include stakeholder interviews, 
                user research, and technical requirements gathering.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Phase 2: Design and Development</h3>
              <p className="text-lg text-gray-600 mb-4">
                Focus on creating intuitive user experiences that simplify complex logistics 
                processes. Prioritize mobile responsiveness, security, and integration with 
                existing systems.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Phase 3: Testing and Launch</h3>
              <p className="text-lg text-gray-600 mb-6">
                Conduct thorough testing with real users and scenarios. Ensure all integrations 
                work properly and that the website performs well under various conditions before 
                launching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Freight Forwarding Website?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Partner with freight forwarding web design experts who understand the unique 
            challenges and opportunities in the logistics industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link href="/contact">
                Get Freight Web Design Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Link href="/services">
                View Our Web Design Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
