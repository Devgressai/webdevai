'use client'

import { Button } from '../../../components/ui/button'
import { ArrowRight, Search, TrendingUp, BarChart3, Target, Zap, Globe, Users, FileText, Settings, Code, ShoppingBag, Link as LinkIcon, CheckCircle, Clock, Shield, Award, Star, Eye, MousePointer, Filter, Heart, Truck, CreditCard, Lock, RefreshCw, TrendingDown, AlertTriangle, Lightbulb, Building2, Calculator, Calendar, UserCheck, MessageSquare, Phone, UserPlus, Palette, Monitor, ShoppingCart, Send, Bot, Factory, Wrench, Layers, Crown, Gem, Share2, MessageCircle, Cloud, Smartphone } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Search,
    title: "Advanced Keyword Research",
    description: "Comprehensive keyword analysis using cutting-edge tools to identify high-value opportunities your competitors are missing. We analyze search volume, competition levels, and user intent to build a strategic keyword foundation."
  },
  {
    icon: Target,
    title: "On-Page Optimization",
    description: "Technical SEO optimization including meta tags, content structure, internal linking, and schema markup. We ensure every page is perfectly optimized for search engines while maintaining excellent user experience."
  },
  {
    icon: BarChart3,
    title: "Performance Monitoring",
    description: "Continuous tracking and analysis of your SEO performance with detailed reporting. We monitor rankings, traffic, conversions, and provide monthly reports with actionable insights and recommendations."
  },
  {
    icon: Zap,
    title: "Technical SEO",
    description: "Site speed optimization, mobile responsiveness, Core Web Vitals, and technical improvements for better rankings. We ensure your website meets all technical requirements for optimal search engine performance."
  },
  {
    icon: Globe,
    title: "Content Strategy",
    description: "SEO-optimized content that ranks well and provides value to your target audience. We develop content strategies that align with search intent and business goals for maximum impact."
  },
  {
    icon: Users,
    title: "Link Building",
    description: "Strategic link building to increase domain authority and improve search rankings. We focus on high-quality, relevant backlinks from authoritative sources that provide real SEO value."
  }
]

const process = [
  {
    step: "01",
    title: "Comprehensive SEO Audit",
    description: "Deep analysis of your current SEO performance, technical issues, content gaps, and competitive landscape. We identify opportunities and create a roadmap for improvement.",
    duration: "1-2 weeks",
    details: [
      "Technical SEO audit and site health check",
      "Keyword research and competitive analysis", 
      "Content gap analysis and opportunity identification",
      "Backlink profile analysis and link audit",
      "Local SEO assessment (if applicable)",
      "Performance and Core Web Vitals evaluation"
    ]
  },
  {
    step: "02",
    title: "Strategic Planning",
    description: "Create a customized SEO strategy based on your business goals, target audience, and competitive landscape. We develop a comprehensive plan with clear objectives and timelines.",
    duration: "1 week",
    details: [
      "Goal setting and KPI definition",
      "Keyword strategy and content planning",
      "Technical optimization roadmap",
      "Link building strategy development",
      "Local SEO strategy (if applicable)",
      "Reporting and monitoring setup"
    ]
  },
  {
    step: "03",
    title: "Implementation & Optimization",
    description: "Execute on-page optimizations, content improvements, technical enhancements, and begin link building campaigns. We implement changes systematically for maximum impact.",
    duration: "2-4 weeks",
    details: [
      "On-page SEO optimization",
      "Content creation and optimization",
      "Technical improvements and fixes",
      "Schema markup implementation",
      "Local SEO optimization",
      "Initial link building outreach"
    ]
  },
  {
    step: "04",
    title: "Monitoring & Continuous Improvement",
    description: "Ongoing monitoring, reporting, and optimization to ensure sustained growth. We continuously refine strategies based on performance data and algorithm updates.",
    duration: "Ongoing",
    details: [
      "Monthly performance reporting",
      "Ranking monitoring and analysis",
      "Content performance optimization",
      "Link building campaign management",
      "Algorithm update adaptation",
      "Strategy refinement and improvement"
    ]
  }
]

const results = [
  { metric: "Organic Traffic Growth", value: "200%+", description: "Average increase in 6 months", icon: TrendingUp },
  { metric: "Keyword Rankings", value: "150%+", description: "More keywords on page 1", icon: Target },
  { metric: "Click-Through Rate", value: "40%+", description: "Improved CTR from search results", icon: MousePointer },
  { metric: "Conversion Rate", value: "25%+", description: "Higher conversion from organic traffic", icon: BarChart3 }
]

const seoFactors = [
  {
    title: "Page Speed & Performance",
    description: "Optimizing loading times, Core Web Vitals, and overall site performance for better user experience and search rankings.",
    icon: Zap
  },
  {
    title: "Mobile-First Indexing",
    description: "Ensuring your website is fully optimized for mobile devices, as Google primarily uses mobile versions for indexing.",
    icon: Smartphone
  },
  {
    title: "Core Web Vitals",
    description: "Optimizing Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) for better rankings.",
    icon: Eye
  },
  {
    title: "Content Quality & Relevance",
    description: "Creating high-quality, relevant content that answers user questions and provides genuine value to your audience.",
    icon: FileText
  },
  {
    title: "User Experience Signals",
    description: "Improving bounce rate, time on site, pages per session, and other user engagement metrics that impact SEO.",
    icon: Users
  },
  {
    title: "Technical SEO Health",
    description: "Maintaining clean code, proper site structure, XML sitemaps, robots.txt, and other technical SEO elements.",
    icon: Settings
  }
]

const seoTechniques = [
  {
    category: "On-Page SEO",
    techniques: [
      "Title tag optimization for maximum click-through rates",
      "Meta description writing that drives engagement",
      "Header tag structure (H1, H2, H3) optimization",
      "Internal linking strategy for better page authority distribution",
      "Image alt text optimization for accessibility and SEO",
      "URL structure optimization for better crawling",
      "Schema markup implementation for rich snippets",
      "Content optimization for target keywords"
    ]
  },
  {
    category: "Technical SEO",
    techniques: [
      "Site speed optimization and Core Web Vitals improvement",
      "Mobile responsiveness and mobile-first indexing optimization",
      "XML sitemap creation and submission",
      "Robots.txt file optimization",
      "Canonical URL implementation to prevent duplicate content",
      "SSL certificate installation and HTTPS implementation",
      "Site architecture and navigation optimization",
      "Crawl error identification and resolution"
    ]
  },
  {
    category: "Content SEO",
    techniques: [
      "Keyword research and content gap analysis",
      "Content strategy development based on search intent",
      "Long-form content creation for topic authority",
      "Content freshness and update strategies",
      "Featured snippet optimization",
      "Content clustering and topic modeling",
      "User-generated content optimization",
      "Content performance tracking and optimization"
    ]
  },
  {
    category: "Link Building",
    techniques: [
      "High-quality backlink acquisition from authoritative sites",
      "Broken link building and resource page link acquisition",
      "Guest posting on relevant industry websites",
      "Digital PR and media outreach campaigns",
      "Local citation building and directory submissions",
      "Internal linking optimization for better page authority",
      "Link disavowal for toxic backlinks",
      "Competitor backlink analysis and acquisition"
    ]
  }
]

const industries = [
  {
    name: "E-commerce",
    description: "Product page optimization, category page SEO, and conversion-focused strategies for online stores.",
    icon: ShoppingCart,
    challenges: ["Product page optimization", "Category page rankings", "Product review SEO", "E-commerce site structure"]
  },
  {
    name: "Healthcare",
    description: "HIPAA-compliant SEO strategies for medical practices, hospitals, and healthcare providers.",
    icon: Heart,
    challenges: ["Local medical SEO", "Medical content optimization", "Healthcare directory listings", "Patient review management"]
  },
  {
    name: "Legal Services",
    description: "Specialized SEO for law firms, attorneys, and legal service providers in competitive markets.",
    icon: Shield,
    challenges: ["Legal content marketing", "Local attorney SEO", "Case study optimization", "Legal directory optimization"]
  },
  {
    name: "Real Estate",
    description: "Local SEO and property listing optimization for real estate agents and agencies.",
    icon: Building2,
    challenges: ["Local real estate SEO", "Property listing optimization", "Neighborhood page SEO", "Real estate content marketing"]
  },
  {
    name: "Technology",
    description: "B2B SEO strategies for tech companies, SaaS providers, and software developers.",
    icon: Code,
    challenges: ["Technical content optimization", "B2B keyword targeting", "Software documentation SEO", "Tech industry link building"]
  },
  {
    name: "Professional Services",
    description: "SEO for consultants, agencies, and professional service providers across various industries.",
    icon: UserCheck,
    challenges: ["Service page optimization", "Professional directory listings", "Thought leadership content", "Client case study SEO"]
  }
]

const tools = [
  {
    name: "Google Search Console",
    description: "Monitor search performance, identify issues, and track keyword rankings.",
    category: "Analytics & Monitoring"
  },
  {
    name: "Google Analytics",
    description: "Track organic traffic, user behavior, and conversion metrics.",
    category: "Analytics & Monitoring"
  },
  {
    name: "Ahrefs",
    description: "Comprehensive keyword research, competitor analysis, and backlink tracking.",
    category: "Research & Analysis"
  },
  {
    name: "SEMrush",
    description: "Keyword research, site audit, and competitive intelligence.",
    category: "Research & Analysis"
  },
  {
    name: "Screaming Frog",
    description: "Technical SEO auditing and website crawling analysis.",
    category: "Technical SEO"
  },
  {
    name: "PageSpeed Insights",
    description: "Core Web Vitals analysis and performance optimization recommendations.",
    category: "Technical SEO"
  }
]

const pricing = [
  {
    name: "Starter SEO",
    price: "$2,500",
    period: "/month",
    description: "Perfect for small businesses looking to establish their online presence",
    features: [
      "Monthly keyword research (50 keywords)",
      "On-page optimization for 10 pages",
      "Basic technical SEO audit",
      "Monthly performance report",
      "Google Analytics setup",
      "Google Search Console setup",
      "Basic local SEO optimization",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional SEO",
    price: "$5,000",
    period: "/month",
    description: "Comprehensive SEO strategy for growing businesses",
    features: [
      "Monthly keyword research (150 keywords)",
      "On-page optimization for 25 pages",
      "Comprehensive technical SEO audit",
      "Content strategy and optimization",
      "Monthly performance report with insights",
      "Advanced analytics setup",
      "Local SEO optimization",
      "Basic link building (5 links/month)",
      "Priority support",
      "Monthly strategy call"
    ],
    popular: true
  },
  {
    name: "Enterprise SEO",
    price: "$10,000",
    period: "/month",
    description: "Full-scale SEO solution for large businesses and enterprises",
    features: [
      "Unlimited keyword research",
      "Unlimited on-page optimization",
      "Advanced technical SEO audit",
      "Comprehensive content strategy",
      "Detailed monthly performance report",
      "Advanced analytics and tracking",
      "Multi-location local SEO",
      "Advanced link building (15 links/month)",
      "Dedicated account manager",
      "Weekly strategy calls",
      "Custom reporting dashboard",
      "24/7 priority support"
    ],
    popular: false
  }
]

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Professional{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                SEO Services
              </span>{" "}
              That Drive Results
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Comprehensive search engine optimization strategies that have helped hundreds of businesses 
              achieve top search rankings and sustainable organic traffic growth. We combine proven 
              traditional SEO techniques with modern optimization strategies to deliver measurable results 
              that drive business growth and increase revenue.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/case-studies">
                  View Our Results
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Comprehensive SEO Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              From technical optimization to content strategy, we provide end-to-end SEO 
              services that deliver sustainable, long-term results. Our comprehensive approach 
              covers every aspect of search engine optimization to ensure maximum visibility 
              and organic traffic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 group-hover:bg-primary-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Comprehensive SEO Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A systematic, data-driven approach to SEO that ensures consistent progress and 
              measurable results month after month. Our proven methodology has helped hundreds 
              of businesses achieve top search rankings and sustainable organic growth.
            </p>
          </div>

          <div className="space-y-16">
            {process.map((step, index) => (
              <div key={step.step} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <div className="flex items-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mr-6">
                      <span className="text-2xl font-bold text-primary-600">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-secondary-900">
                        {step.title}
                      </h3>
                      <div className="text-sm text-primary-600 font-medium">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-secondary-600 mb-6">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-secondary-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-8 text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-4">
                      {step.step}
                    </div>
                    <div className="text-lg text-primary-700 mb-2">
                      {step.title}
                    </div>
                    <div className="text-sm text-primary-600">
                      {step.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Proven SEO Results
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our comprehensive SEO strategies consistently deliver measurable improvements 
              in search rankings and organic traffic growth. These results are based on 
              real client data from our portfolio of successful SEO campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
                    <result.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-secondary-900 mb-1">{result.metric}</div>
                <div className="text-sm text-secondary-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Factors Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Modern SEO Factors We Optimize
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We stay current with Google's latest algorithm updates and optimize for 
              the factors that matter most in today's search landscape. Our team 
              continuously monitors search engine changes and adapts strategies accordingly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoFactors.map((factor) => (
              <div key={factor.title} className="bg-white p-8 rounded-2xl shadow-soft ring-1 ring-secondary-900/5">
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 mr-4">
                    <factor.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">{factor.title}</h3>
                </div>
                <p className="text-secondary-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Techniques Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Advanced SEO Techniques We Use
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our SEO experts employ a wide range of proven techniques and strategies 
              to improve your search rankings and organic visibility. We combine 
              traditional SEO methods with cutting-edge optimization strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {seoTechniques.map((category) => (
              <div key={category.category} className="bg-secondary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.techniques.map((technique, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-600">{technique}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              SEO Services by Industry
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We understand that different industries have unique SEO challenges and opportunities. 
              Our industry-specific expertise ensures your SEO strategy is tailored to your 
              market and competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white p-8 rounded-2xl shadow-soft ring-1 ring-secondary-900/5">
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 mr-4">
                    <industry.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">{industry.name}</h3>
                </div>
                <p className="text-secondary-600 mb-6">{industry.description}</p>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">Key Challenges:</h4>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-secondary-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Professional SEO Tools We Use
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We leverage industry-leading SEO tools and platforms to deliver comprehensive 
              analysis, monitoring, and optimization. Our tool stack ensures we have access 
              to the most accurate data and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-secondary-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{tool.name}</h3>
                <p className="text-secondary-600 mb-3">{tool.description}</p>
                <div className="text-sm text-primary-600 font-medium">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              SEO Service Pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Choose the SEO package that best fits your business needs and budget. 
              All packages include our proven methodology and dedicated support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan) => (
              <div key={plan.name} className={`bg-white rounded-2xl p-8 shadow-soft ring-1 ring-secondary-900/5 relative ${plan.popular ? 'ring-2 ring-primary-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {plan.price}
                    <span className="text-lg text-secondary-600 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-secondary-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary-600 hover:bg-primary-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Traditional SEO Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
                Why Professional SEO Still Works
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                While AI and new technologies are changing the landscape, professional SEO 
                fundamentals remain the foundation of sustainable search success. We combine 
                proven techniques with modern insights to deliver results that last.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 mr-4 mt-1">
                    <Shield className="h-4 w-4 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900 mb-1">Sustainable Results</div>
                    <div className="text-secondary-600">Build lasting authority that withstands algorithm changes and provides long-term value</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 mr-4 mt-1">
                    <Award className="h-4 w-4 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900 mb-1">Proven Methodology</div>
                    <div className="text-secondary-600">Time-tested strategies that consistently deliver results across different industries and markets</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 mr-4 mt-1">
                    <TrendingUp className="h-4 w-4 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900 mb-1">Long-term Growth</div>
                    <div className="text-secondary-600">Organic traffic that grows steadily over time and provides compounding returns on investment</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-primary-600 mb-4">15+</div>
              <div className="text-xl text-primary-700 mb-2">Years of SEO Experience</div>
              <div className="text-lg text-primary-600 mb-6">Proven track record</div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-primary-700">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">200%</div>
                  <div className="text-sm text-primary-700">Average Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Related Services
            </h2>
            <p className="text-lg leading-8 text-secondary-600">
              Professional SEO works best when combined with our other digital marketing services. 
              Create a comprehensive search strategy that dominates your market and drives 
              sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI-Powered SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Enhance traditional SEO with cutting-edge AI optimization strategies and machine learning insights.
              </p>
              <Link 
                href="/services/ai-seo" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Local SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-blue-600 transition-colors">
                Local/GEO SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Dominate local search results while building national authority and visibility.
              </p>
              <Link 
                href="/services/local-seo" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Content Strategy */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-green-600 transition-colors">
                Content Strategy
              </h3>
              <p className="text-secondary-600 mb-4">
                Create high-quality content that ranks well and converts visitors into customers.
              </p>
              <Link 
                href="/services/digital-marketing" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Technical SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                <Settings className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-orange-600 transition-colors">
                Technical SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Optimize your website's technical foundation for maximum search engine performance.
              </p>
              <Link 
                href="/services/web-development" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Link Building */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 group-hover:bg-red-200 transition-colors mb-4">
                <LinkIcon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-red-600 transition-colors">
                Link Building
              </h3>
              <p className="text-secondary-600 mb-4">
                Build authoritative backlinks that strengthen your SEO foundation and domain authority.
              </p>
              <Link 
                href="/services/digital-marketing" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* CRO Services */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 group-hover:bg-teal-200 transition-colors mb-4">
                <TrendingUp className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-teal-600 transition-colors">
                CRO Services
              </h3>
              <p className="text-secondary-600 mb-4">
                Convert SEO traffic into customers with advanced conversion rate optimization.
              </p>
              <Link 
                href="/services/cro-lead-generation" 
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's implement proven SEO strategies that drive sustainable organic growth 
            and help you capture more search traffic than ever before. Get started with 
            a free SEO audit and discover your optimization opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free SEO Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}