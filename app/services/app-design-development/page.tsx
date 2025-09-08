import { Button } from '../../../components/ui/button'
import { 
  ArrowRight, TrendingUp, Users, BarChart3, Target, Zap, Shield, 
  Smartphone, Globe, Clock, Award, CheckCircle, Star, ArrowUpRight, 
  PieChart, DollarSign, Eye, MousePointer, Filter, Search, Heart, 
  Truck, CreditCard, Lock, RefreshCw, TrendingDown, AlertTriangle, 
  Lightbulb, Building2, Calculator, Calendar, UserCheck, MessageSquare, 
  Phone, Mail, MapPin, FileText, UserPlus, Brain, Code, Bot, 
  Sparkles, Layers, Palette 
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Smartphone,
    title: "Native App Development",
    description: "Build high-performance native applications for iOS and Android platforms."
  },
  {
    icon: Code,
    title: "Cross-Platform Solutions",
    description: "Develop apps that work seamlessly across multiple platforms and devices."
  },
  {
    icon: Palette,
    title: "User Experience Design",
    description: "Create intuitive, engaging user experiences that drive user engagement and retention."
  },
  {
    icon: Target,
    title: "Performance Optimization",
    description: "Ensure your apps are fast, responsive, and optimized for maximum performance."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implement robust security measures and ensure compliance with industry standards."
  },
  {
    icon: Zap,
    title: "Scalability & Maintenance",
    description: "Build apps that can grow with your business and are easy to maintain."
  }
]

const developmentAreas = [
  {
    title: "Mobile App Development",
    description: "Create powerful mobile applications that deliver exceptional user experiences across all devices and platforms.",
    features: ["iOS development", "Android development", "Cross-platform development", "Mobile optimization", "App store optimization", "Performance testing"]
  },
  {
    title: "Web Application Development",
    description: "Build robust web applications that provide seamless user experiences across all browsers and devices.",
    features: ["Frontend development", "Backend development", "API development", "Database design", "Cloud integration", "Security implementation"]
  },
  {
    title: "Custom Software Development",
    description: "Develop tailored software solutions that address your specific business needs and requirements.",
    features: ["Requirements analysis", "Custom development", "Integration services", "Testing & QA", "Deployment", "Training & support"]
  },
  {
    title: "App Maintenance & Support",
    description: "Provide ongoing maintenance, updates, and support to ensure your applications remain current and functional.",
    features: ["Regular updates", "Bug fixes", "Performance monitoring", "Security updates", "User support", "Analytics tracking"]
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Comprehensive analysis of your requirements, goals, and technical specifications to create a detailed development plan.",
    duration: "1-2 weeks",
    deliverables: ["Requirements document", "Technical specification", "Project timeline", "Resource allocation"]
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Create detailed designs, wireframes, and interactive prototypes to visualize the final application.",
    duration: "2-3 weeks",
    deliverables: ["UI/UX designs", "Interactive prototypes", "Design system", "User flow mapping"]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build the application using best practices and conduct thorough testing to ensure quality and performance.",
    duration: "6-12 weeks",
    deliverables: ["Application development", "Testing & QA", "Performance optimization", "Security implementation"]
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "Deploy the application to production and provide ongoing support and maintenance services.",
    duration: "1-2 weeks",
    deliverables: ["Production deployment", "Launch support", "User training", "Ongoing maintenance"]
  }
]

const results = [
  { metric: "App Performance", value: "98%", description: "Average app store rating" },
  { metric: "User Engagement", value: "156%", description: "Higher than industry average" },
  { metric: "Development Speed", value: "40% Faster", description: "Than industry standard" },
  { metric: "Client Satisfaction", value: "97%", description: "Client satisfaction rate" }
]

const caseStudies = [
  {
    title: "E-commerce Mobile App",
    industry: "Retail Technology",
    challenge: "Need for a high-performance mobile app to compete with major e-commerce platforms",
    solution: "Developed a native iOS and Android app with advanced features including AR product visualization, AI-powered recommendations, and seamless checkout",
    results: [
      { metric: "App Store Rating", before: "N/A", after: "4.8/5", improvement: "New app" },
      { metric: "User Engagement", before: "N/A", after: "12 min/session", improvement: "New app" },
      { metric: "Conversion Rate", before: "N/A", after: "23%", improvement: "New app" }
    ]
  },
  {
    title: "Healthcare Management Platform",
    industry: "Healthcare Technology",
    challenge: "Complex healthcare management system requiring HIPAA compliance and seamless integration",
    solution: "Built a comprehensive web application with advanced security, real-time data synchronization, and intuitive user interface",
    results: [
      { metric: "System Performance", before: "N/A", after: "99.9% uptime", improvement: "New system" },
      { metric: "User Adoption", before: "N/A", after: "94%", improvement: "New system" },
      { metric: "Efficiency Gain", before: "N/A", after: "67%", improvement: "New system" }
    ]
  }
]

const appDevelopmentStrategies = [
  {
    title: "User-Centered Design",
    description: "Design applications with the user in mind, ensuring intuitive navigation and engaging user experiences.",
    tactics: ["User research", "Persona development", "User journey mapping", "Usability testing", "Accessibility design", "Performance optimization"]
  },
  {
    title: "Agile Development Methodology",
    description: "Use agile development practices to ensure rapid iteration, continuous improvement, and timely delivery.",
    tactics: ["Sprint planning", "Daily standups", "Regular demos", "Continuous integration", "Automated testing", "Rapid prototyping"]
  },
  {
    title: "Cloud-Native Architecture",
    description: "Build applications using cloud-native technologies for scalability, reliability, and cost-effectiveness.",
    tactics: ["Microservices architecture", "Container deployment", "Auto-scaling", "Load balancing", "Cloud security", "Cost optimization"]
  },
  {
    title: "Mobile-First Development",
    description: "Prioritize mobile experience in application development to meet growing mobile user demands.",
    tactics: ["Responsive design", "Mobile optimization", "Touch-friendly interfaces", "Offline functionality", "Push notifications", "App store optimization"]
  }
]

const technologies = [
  "React Native", "Flutter", "Swift", "Kotlin", "React.js", "Node.js", "Python", "Java", "AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Firebase", "GraphQL", "REST APIs", "WebSocket", "Redis"
]

const faqs = [
  {
    question: "How long does it take to develop a mobile app from start to finish?",
    answer: "The development timeline for a mobile app typically ranges from 3-6 months for a basic app to 6-12 months for a complex application. The timeline depends on several factors including the app's complexity, number of features, platform requirements (iOS, Android, or both), and the development approach chosen. We use agile development methodologies to ensure rapid iteration and timely delivery, with regular check-ins and milestone reviews throughout the process."
  },
  {
    question: "What's the difference between native and cross-platform app development?",
    answer: "Native app development involves building separate applications for each platform (iOS and Android) using platform-specific languages and tools. This approach provides the best performance and access to platform-specific features but requires more development time and resources. Cross-platform development uses frameworks like React Native or Flutter to build a single codebase that works on multiple platforms. This approach is faster and more cost-effective but may have some performance limitations and reduced access to platform-specific features."
  },
  {
    question: "How do you ensure the security of mobile applications?",
    answer: "We implement multiple layers of security including secure coding practices, data encryption, secure API communication, user authentication and authorization, and regular security audits. We also ensure compliance with industry standards like GDPR, HIPAA, and SOC 2. Our security approach includes threat modeling, penetration testing, and ongoing security monitoring. We work closely with security experts to stay current with the latest security threats and best practices."
  },
  {
    question: "Can you help with app store optimization and marketing?",
    answer: "Yes, we provide comprehensive app store optimization (ASO) services including keyword optimization, compelling app descriptions, high-quality screenshots and videos, and user review management. We also offer marketing support including social media promotion, influencer partnerships, and paid advertising campaigns. Our team works with you to develop a comprehensive marketing strategy that maximizes your app's visibility and user acquisition."
  },
  {
    question: "What ongoing support and maintenance do you provide after launch?",
    answer: "We provide comprehensive post-launch support including bug fixes, performance monitoring, security updates, feature enhancements, and user support. Our maintenance packages include regular updates, performance optimization, security patches, and 24/7 monitoring. We also provide analytics and reporting to help you understand user behavior and app performance. Our team is always available to address any issues and ensure your app continues to perform optimally."
  },
  {
    question: "How do you handle scalability and future growth of applications?",
    answer: "We design applications with scalability in mind from the start, using cloud-native architectures, microservices, and auto-scaling capabilities. Our development approach includes performance testing, load balancing, and database optimization to ensure your app can handle increased user loads. We also implement monitoring and analytics to identify performance bottlenecks and optimize accordingly. As your business grows, we can help scale your application infrastructure and add new features to meet evolving needs."
  }
]

export default function AppDesignDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              App Design &{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Development
              </span>{" "}
              That Drives Results
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Transform your ideas into powerful, user-friendly applications. Our expert team creates 
              custom mobile apps, web applications, and software solutions that engage users, drive 
              business growth, and deliver exceptional user experiences.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Start Your App Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/case-studies">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is App Design & Development Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                What is App Design & Development?
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                App Design & Development is the comprehensive process of creating custom software applications 
                that solve specific business problems and deliver exceptional user experiences. This includes 
                mobile applications for iOS and Android, web applications, and custom software solutions 
                tailored to your unique business needs.
              </p>
              <p className="text-lg text-secondary-600 mb-6">
                Our approach combines cutting-edge technology with user-centered design principles to create 
                applications that are not only functional and reliable but also engaging and intuitive to use. 
                We focus on creating solutions that drive user engagement, improve business efficiency, and 
                provide measurable ROI for your organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Custom solutions tailored to your business needs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">User-centered design for maximum engagement</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Scalable architecture for future growth</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Ongoing support and maintenance</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Why Choose Custom App Development?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Target className="h-5 w-5 text-emerald-600" />
                  <span className="font-medium text-secondary-900">Tailored to Your Business</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Users className="h-5 w-5 text-teal-600" />
                  <span className="font-medium text-secondary-900">Enhanced User Experience</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <TrendingUp className="h-5 w-5 text-cyan-600" />
                  <span className="font-medium text-secondary-900">Competitive Advantage</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-secondary-900">Full Control & Ownership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Why Choose Our App Development Services?
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We combine cutting-edge technology with proven development practices to create 
              applications that don't just work—they excel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 group-hover:bg-emerald-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
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

      {/* Development Areas Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Comprehensive App Development Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We offer a full range of app development services to meet all your digital needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {developmentAreas.map((area) => (
              <div key={area.title} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">{area.title}</h3>
                <p className="text-secondary-600 mb-6">{area.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {area.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Development Strategies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Advanced App Development Strategies
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Discover proven strategies that go beyond basic development to create 
              exceptional applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {appDevelopmentStrategies.map((strategy) => (
              <div key={strategy.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">{strategy.title}</h3>
                <p className="text-secondary-600 mb-6">{strategy.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {strategy.tactics.map((tactic) => (
                    <div key={tactic} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-secondary-700">{tactic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Proven App Development Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A systematic approach that ensures quality, timely delivery, and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-emerald-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 mb-3">
                  {step.description}
                </p>
                <div className="text-sm text-emerald-600 font-medium mb-3">
                  {step.duration}
                </div>
                <div className="text-xs text-secondary-500">
                  {step.deliverables.join(", ")}
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
              Results That Speak for Themselves
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our app development strategies consistently deliver exceptional results that directly impact 
              your business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-secondary-900 mb-1">{result.metric}</div>
                <div className="text-sm text-secondary-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Real Results from Real Businesses
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              See how our app development strategies have transformed businesses and delivered 
              measurable improvements in performance and user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{study.title}</h3>
                  <p className="text-emerald-600 font-medium">{study.industry}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-2">Challenge:</h4>
                  <p className="text-secondary-600 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-2">Solution:</h4>
                  <p className="text-secondary-600 text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">Results:</h4>
                  <div className="space-y-2">
                    {study.results.map((result) => (
                      <div key={result.metric} className="flex justify-between items-center text-sm">
                        <span className="text-secondary-600">{result.metric}:</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-red-500 line-through">{result.before}</span>
                          <ArrowRight className="h-3 w-3 text-secondary-400" />
                          <span className="text-emerald-600 font-semibold">{result.after}</span>
                          <span className="text-emerald-600 text-xs">({result.improvement})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Advanced Technologies We Use
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We leverage cutting-edge technologies and frameworks to deliver 
              high-performance, scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => (
              <div key={tech} className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl shadow-soft flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-sm font-medium text-secondary-900">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our App Design & Development services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Next Great App?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's transform your ideas into powerful applications that drive business growth 
            and deliver exceptional user experiences. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
