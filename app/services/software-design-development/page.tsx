import { Button } from '../../../components/ui/button'
import { 
  ArrowRight, TrendingUp, Users, BarChart3, Target, Zap, Shield, 
  Smartphone, Globe, Clock, Award, CheckCircle, Star, ArrowUpRight, 
  PieChart, DollarSign, Eye, MousePointer, Filter, Search, Heart, 
  Truck, CreditCard, Lock, RefreshCw, TrendingDown, AlertTriangle, 
  Lightbulb, Building2, Calculator, Calendar, UserCheck, MessageSquare, 
  Phone, Mail, MapPin, FileText, UserPlus, Brain, Code, Bot, 
  Sparkles, Layers, Palette, Monitor, Settings, Server, Cloud 
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: BarChart3,
    title: "Custom Software Solutions",
    description: "Build tailored software systems that perfectly align with your business processes and requirements."
  },
  {
    icon: Server,
    title: "Enterprise Software Development",
    description: "Create robust, scalable enterprise solutions that handle complex business operations."
  },
  {
    icon: Cloud,
    title: "Cloud-Native Applications",
    description: "Develop modern applications built for the cloud with scalability and reliability in mind."
  },
  {
    icon: Target,
    title: "Business Process Automation",
    description: "Automate repetitive tasks and streamline workflows to improve efficiency and productivity."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Implement enterprise-grade security measures and ensure compliance with industry standards."
  },
  {
    icon: Zap,
    title: "Integration & API Development",
    description: "Connect your software systems and create seamless data flow across your organization."
  }
]

const developmentAreas = [
  {
    title: "Custom Software Development",
    description: "Create tailored software solutions that address your specific business needs and operational requirements.",
    features: ["Requirements analysis", "Custom development", "Integration services", "Testing & QA", "Deployment", "Training & support"]
  },
  {
    title: "Enterprise Software Solutions",
    description: "Build robust, scalable enterprise applications that handle complex business operations and large user bases.",
    features: ["Enterprise architecture", "Scalability planning", "Performance optimization", "Security implementation", "Compliance management", "Disaster recovery"]
  },
  {
    title: "Business Process Automation",
    description: "Automate repetitive tasks and streamline workflows to improve efficiency and reduce operational costs.",
    features: ["Process analysis", "Automation design", "Workflow optimization", "Integration development", "Monitoring & analytics", "Continuous improvement"]
  },
  {
    title: "Software Integration & APIs",
    description: "Connect your existing software systems and create seamless data flow across your organization.",
    features: ["API development", "System integration", "Data migration", "Real-time synchronization", "Error handling", "Performance monitoring"]
  }
]

const process = [
  {
    step: "01",
    title: "Business Analysis & Planning",
    description: "Comprehensive analysis of your business processes, requirements, and goals to create a detailed software development plan.",
    duration: "2-3 weeks",
    deliverables: ["Business requirements document", "Technical specification", "Project roadmap", "Resource allocation plan"]
  },
  {
    step: "02",
    title: "Architecture & Design",
    description: "Design the software architecture, database structure, and user interface to ensure scalability and performance.",
    duration: "3-4 weeks",
    deliverables: ["System architecture", "Database design", "UI/UX designs", "Technical documentation"]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build the software using best practices and conduct thorough testing to ensure quality and reliability.",
    duration: "8-16 weeks",
    deliverables: ["Software development", "Testing & QA", "Performance optimization", "Security implementation"]
  },
  {
    step: "04",
    title: "Deployment & Training",
    description: "Deploy the software to production and provide comprehensive training and ongoing support services.",
    duration: "2-3 weeks",
    deliverables: ["Production deployment", "User training", "Documentation", "Ongoing support"]
  }
]

const results = [
  { metric: "Process Efficiency", value: "234%", description: "Average improvement in business processes" },
  { metric: "Cost Reduction", value: "156%", description: "Reduction in operational costs" },
  { metric: "User Productivity", value: "189%", description: "Increase in user productivity" },
  { metric: "System Reliability", value: "99.9%", description: "Uptime and system reliability" }
]

const caseStudies = [
  {
    title: "Manufacturing Management System",
    industry: "Manufacturing Technology",
    challenge: "Complex manufacturing operations requiring real-time monitoring, inventory management, and quality control",
    solution: "Developed a comprehensive manufacturing execution system with real-time data collection, automated workflows, and advanced analytics",
    results: [
      { metric: "Production Efficiency", before: "67%", after: "89%", improvement: "33%" },
      { metric: "Inventory Accuracy", before: "78%", after: "97%", improvement: "24%" },
      { metric: "Quality Defects", before: "12%", after: "3%", improvement: "75% reduction" }
    ]
  },
  {
    title: "Healthcare Management Platform",
    industry: "Healthcare Technology",
    challenge: "Need for HIPAA-compliant patient management system with integrated billing and appointment scheduling",
    solution: "Built a comprehensive healthcare management platform with advanced security, real-time synchronization, and intuitive user interface",
    results: [
      { metric: "Patient Processing", before: "45 min", after: "18 min", improvement: "60%" },
      { metric: "Billing Accuracy", before: "82%", after: "98%", improvement: "20%" },
      { metric: "User Satisfaction", before: "6.2/10", after: "9.1/10", improvement: "47%" }
    ]
  }
]

const softwareDevelopmentStrategies = [
  {
    title: "Agile Development Methodology",
    description: "Use agile development practices to ensure rapid iteration, continuous improvement, and timely delivery of software solutions.",
    tactics: ["Sprint planning", "Daily standups", "Regular demos", "Continuous integration", "Automated testing", "Rapid prototyping"]
  },
  {
    title: "DevOps & CI/CD",
    description: "Implement DevOps practices and continuous integration/continuous deployment to accelerate software delivery and improve quality.",
    tactics: ["Automated testing", "Continuous integration", "Automated deployment", "Infrastructure as code", "Monitoring & alerting", "Performance optimization"]
  },
  {
    title: "Microservices Architecture",
    description: "Build software using microservices architecture for improved scalability, maintainability, and deployment flexibility.",
    tactics: ["Service decomposition", "API design", "Data management", "Service communication", "Deployment strategies", "Monitoring & observability"]
  },
  {
    title: "Cloud-Native Development",
    description: "Develop software using cloud-native technologies and practices for improved scalability, reliability, and cost-effectiveness.",
    tactics: ["Container deployment", "Auto-scaling", "Load balancing", "Cloud security", "Cost optimization", "Disaster recovery"]
  }
]

const technologies = [
  "Java", "Python", "C#", "Node.js", "React.js", "Angular", "Vue.js", "Spring Boot", "Django", "ASP.NET Core", "PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack"
]

const faqs = [
  {
    question: "How long does it take to develop custom enterprise software?",
    answer: "The development timeline for custom enterprise software typically ranges from 4-8 months for a basic system to 8-18 months for a complex enterprise solution. The timeline depends on several factors including the software's complexity, number of features, integration requirements, and the development approach chosen. We use agile development methodologies to ensure rapid iteration and timely delivery, with regular check-ins and milestone reviews throughout the process."
  },
  {
    question: "What's the difference between custom software and off-the-shelf solutions?",
    answer: "Custom software is specifically designed and built for your business needs, offering perfect alignment with your processes and requirements. Off-the-shelf solutions are pre-built software packages that may require workarounds or compromises to fit your business needs. Custom software provides better integration, scalability, and competitive advantage, while off-the-shelf solutions offer faster deployment and lower initial costs. The choice depends on your specific business requirements and long-term goals."
  },
  {
    question: "How do you ensure the security of enterprise software?",
    answer: "We implement multiple layers of security including secure coding practices, data encryption, secure authentication and authorization, regular security audits, and compliance with industry standards like SOC 2, ISO 27001, and GDPR. Our security approach includes threat modeling, penetration testing, and ongoing security monitoring. We work closely with security experts to stay current with the latest security threats and best practices."
  },
  {
    question: "Can you help with software integration and data migration?",
    answer: "Yes, we provide comprehensive software integration and data migration services. This includes API development, system integration, data migration from legacy systems, real-time data synchronization, and error handling. We ensure seamless data flow across your organization while maintaining data integrity and security. Our team has extensive experience integrating various software systems and can handle complex integration scenarios."
  },
  {
    question: "What ongoing support and maintenance do you provide after deployment?",
    answer: "We provide comprehensive post-deployment support including bug fixes, performance monitoring, security updates, feature enhancements, and user support. Our maintenance packages include regular updates, performance optimization, security patches, and 24/7 monitoring. We also provide analytics and reporting to help you understand system performance and user behavior. Our team is always available to address any issues and ensure your software continues to perform optimally."
  },
  {
    question: "How do you handle scalability and future growth of software systems?",
    answer: "We design software with scalability in mind from the start, using cloud-native architectures, microservices, and auto-scaling capabilities. Our development approach includes performance testing, load balancing, and database optimization to ensure your software can handle increased user loads and data volumes. We also implement monitoring and analytics to identify performance bottlenecks and optimize accordingly. As your business grows, we can help scale your software infrastructure and add new features to meet evolving needs."
  }
]

export default function SoftwareDesignDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Software Design &{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Development
              </span>{" "}
              That Transforms Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Create powerful, custom software solutions that streamline operations, automate processes, 
              and drive business growth. Our expert team builds enterprise-grade software that perfectly 
              aligns with your business needs and scales with your success.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Start Your Software Project
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

      {/* What is Software Design & Development Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                What is Software Design & Development?
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Software Design & Development is the comprehensive process of creating custom software 
                solutions that address specific business challenges and operational requirements. This 
                includes enterprise software systems, business process automation tools, custom applications, 
                and software integration solutions tailored to your unique business needs.
              </p>
              <p className="text-lg text-secondary-600 mb-6">
                Our approach combines cutting-edge technology with deep business understanding to create 
                software that not only meets your current needs but also scales with your business growth. 
                We focus on creating solutions that improve efficiency, reduce costs, and provide measurable 
                ROI for your organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Custom solutions tailored to your business processes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Enterprise-grade security and compliance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Scalable architecture for future growth</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Ongoing support and system optimization</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Why Choose Custom Software Development?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Target className="h-5 w-5 text-orange-600" />
                  <span className="font-medium text-secondary-900">Perfect Business Alignment</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Users className="h-5 w-5 text-red-600" />
                  <span className="font-medium text-secondary-900">Enhanced User Experience</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <TrendingUp className="h-5 w-5 text-pink-600" />
                  <span className="font-medium text-secondary-900">Competitive Advantage</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-secondary-900">Full Control & Security</span>
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
              Why Choose Our Software Development Services?
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We combine cutting-edge technology with proven development practices to create 
              software solutions that don't just work—they transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-orange-600" />
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
              Comprehensive Software Development Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We offer a full range of software development services to meet all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {developmentAreas.map((area) => (
              <div key={area.title} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">{area.title}</h3>
                <p className="text-secondary-600 mb-6">{area.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {area.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Development Strategies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Advanced Software Development Strategies
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Discover proven strategies that go beyond basic development to create 
              exceptional software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {softwareDevelopmentStrategies.map((strategy) => (
              <div key={strategy.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">{strategy.title}</h3>
                <p className="text-secondary-600 mb-6">{strategy.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {strategy.tactics.map((tactic) => (
                    <div key={tactic} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
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
              Our Proven Software Development Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A systematic approach that ensures quality, timely delivery, and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-orange-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 mb-3">
                  {step.description}
                </p>
                <div className="text-sm text-orange-600 font-medium mb-3">
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
              Our software development strategies consistently deliver exceptional results that directly impact 
              your business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{result.value}</div>
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
              See how our software development strategies have transformed businesses and delivered 
              measurable improvements in efficiency and productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{study.title}</h3>
                  <p className="text-orange-600 font-medium">{study.industry}</p>
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
                          <span className="text-orange-600 font-semibold">{result.after}</span>
                          <span className="text-orange-600 text-xs">({result.improvement})</span>
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
              high-performance, scalable software solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => (
              <div key={tech} className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-xl shadow-soft flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-orange-600" />
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
              Get answers to the most common questions about our Software Design & Development services.
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
      <section className="py-24 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with Custom Software?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's build powerful software solutions that streamline your operations, 
            automate your processes, and drive business growth. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
