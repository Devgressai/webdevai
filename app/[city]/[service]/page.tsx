import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Star,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Target,
  BarChart3,
  Code,
  Smartphone,
  Brain,
  Search,
  Lightbulb,
  Filter,
  Cog,
  Rocket,
  Database,
  Network,
  Bot,
  Cpu,
  ShoppingCart,
  Share2
} from 'lucide-react'

interface CityServicePageProps {
  params: {
    city: string
    service: string
  }
}

// City data mapping
const cityData: Record<string, { name: string; state: string; fullName: string; population: string; industries: string[] }> = {
  'new-york-ny': { 
    name: 'New York', 
    state: 'NY', 
    fullName: 'New York, NY',
    population: '8.8 million',
    industries: ['Finance', 'Technology', 'Media', 'Healthcare', 'Real Estate', 'Retail', 'Tourism']
  },
  'los-angeles-ca': { 
    name: 'Los Angeles', 
    state: 'CA', 
    fullName: 'Los Angeles, CA',
    population: '4 million',
    industries: ['Entertainment', 'Technology', 'Fashion', 'Aerospace', 'Tourism', 'Healthcare', 'Manufacturing']
  },
  'chicago-il': { 
    name: 'Chicago', 
    state: 'IL', 
    fullName: 'Chicago, IL',
    population: '2.7 million',
    industries: ['Finance', 'Manufacturing', 'Transportation', 'Technology', 'Healthcare', 'Education', 'Food Processing']
  },
  'houston-tx': { 
    name: 'Houston', 
    state: 'TX', 
    fullName: 'Houston, TX',
    population: '2.3 million',
    industries: ['Energy', 'Healthcare', 'Aerospace', 'Manufacturing', 'Technology', 'Transportation', 'Education']
  },
  'phoenix-az': { 
    name: 'Phoenix', 
    state: 'AZ', 
    fullName: 'Phoenix, AZ',
    population: '1.6 million',
    industries: ['Technology', 'Healthcare', 'Tourism', 'Financial Services', 'Manufacturing', 'Education', 'Real Estate']
  },
  'philadelphia-pa': { 
    name: 'Philadelphia', 
    state: 'PA', 
    fullName: 'Philadelphia, PA',
    population: '1.6 million',
    industries: ['Healthcare', 'Education', 'Finance', 'Manufacturing', 'Technology', 'Tourism', 'Real Estate']
  },
  'san-antonio-tx': { 
    name: 'San Antonio', 
    state: 'TX', 
    fullName: 'San Antonio, TX',
    population: '1.5 million',
    industries: ['Healthcare', 'Military', 'Tourism', 'Manufacturing', 'Technology', 'Education', 'Financial Services']
  },
  'san-diego-ca': { 
    name: 'San Diego', 
    state: 'CA', 
    fullName: 'San Diego, CA',
    population: '1.4 million',
    industries: ['Biotechnology', 'Tourism', 'Military', 'Technology', 'Healthcare', 'Manufacturing', 'Education']
  },
  'dallas-tx': { 
    name: 'Dallas', 
    state: 'TX', 
    fullName: 'Dallas, TX',
    population: '1.3 million',
    industries: ['Finance', 'Technology', 'Transportation', 'Healthcare', 'Manufacturing', 'Education', 'Real Estate']
  },
  'san-jose-ca': { 
    name: 'San Jose', 
    state: 'CA', 
    fullName: 'San Jose, CA',
    population: '1 million',
    industries: ['Technology', 'Manufacturing', 'Finance', 'Healthcare', 'Education', 'Real Estate', 'Tourism']
  },
  'austin-tx': { 
    name: 'Austin', 
    state: 'TX', 
    fullName: 'Austin, TX',
    population: '978K',
    industries: ['Technology', 'Education', 'Government', 'Healthcare', 'Manufacturing', 'Financial Services', 'Tourism']
  },
  'jacksonville-fl': { 
    name: 'Jacksonville', 
    state: 'FL', 
    fullName: 'Jacksonville, FL',
    population: '949K',
    industries: ['Logistics', 'Healthcare', 'Finance', 'Manufacturing', 'Technology', 'Education', 'Tourism']
  },
  'fort-worth-tx': { 
    name: 'Fort Worth', 
    state: 'TX', 
    fullName: 'Fort Worth, TX',
    population: '918K',
    industries: ['Aerospace', 'Energy', 'Transportation', 'Manufacturing', 'Healthcare', 'Technology', 'Education']
  },
  'columbus-oh': { 
    name: 'Columbus', 
    state: 'OH', 
    fullName: 'Columbus, OH',
    population: '898K',
    industries: ['Education', 'Healthcare', 'Technology', 'Manufacturing', 'Financial Services', 'Retail', 'Transportation']
  },
  'indianapolis-in': { 
    name: 'Indianapolis', 
    state: 'IN', 
    fullName: 'Indianapolis, IN',
    population: '887K',
    industries: ['Manufacturing', 'Sports', 'Healthcare', 'Technology', 'Education', 'Financial Services', 'Transportation']
  },
  'charlotte-nc': { 
    name: 'Charlotte', 
    state: 'NC', 
    fullName: 'Charlotte, NC',
    population: '885K',
    industries: ['Finance', 'Energy', 'Technology', 'Manufacturing', 'Healthcare', 'Education', 'Real Estate']
  },
  'san-francisco-ca': { 
    name: 'San Francisco', 
    state: 'CA', 
    fullName: 'San Francisco, CA',
    population: '873K',
    industries: ['Technology', 'Finance', 'Tourism', 'Healthcare', 'Education', 'Real Estate', 'Manufacturing']
  },
  'seattle-wa': { 
    name: 'Seattle', 
    state: 'WA', 
    fullName: 'Seattle, WA',
    population: '744K',
    industries: ['Technology', 'Aerospace', 'Tourism', 'Healthcare', 'Manufacturing', 'Education', 'Financial Services']
  },
  'denver-co': { 
    name: 'Denver', 
    state: 'CO', 
    fullName: 'Denver, CO',
    population: '727K',
    industries: ['Energy', 'Technology', 'Tourism', 'Healthcare', 'Manufacturing', 'Education', 'Financial Services']
  },
  'washington-dc': { 
    name: 'Washington', 
    state: 'DC', 
    fullName: 'Washington, D.C.',
    population: '689K',
    industries: ['Government', 'Technology', 'Education', 'Healthcare', 'Financial Services', 'Tourism', 'Real Estate']
  },
  'nashville-tn': { 
    name: 'Nashville', 
    state: 'TN', 
    fullName: 'Nashville, TN',
    population: '689K',
    industries: ['Healthcare', 'Music', 'Tourism', 'Manufacturing', 'Technology', 'Education', 'Financial Services']
  },
  'oklahoma-city-ok': { 
    name: 'Oklahoma City', 
    state: 'OK', 
    fullName: 'Oklahoma City, OK',
    population: '681K',
    industries: ['Energy', 'Aerospace', 'Healthcare', 'Manufacturing', 'Technology', 'Education', 'Financial Services']
  },
  'el-paso-tx': { 
    name: 'El Paso', 
    state: 'TX', 
    fullName: 'El Paso, TX',
    population: '678K',
    industries: ['Manufacturing', 'Healthcare', 'Military', 'Technology', 'Education', 'Financial Services', 'Tourism']
  },
  'boston-ma': { 
    name: 'Boston', 
    state: 'MA', 
    fullName: 'Boston, MA',
    population: '675K',
    industries: ['Education', 'Healthcare', 'Technology', 'Financial Services', 'Manufacturing', 'Tourism', 'Real Estate']
  },
  'portland-or': { 
    name: 'Portland', 
    state: 'OR', 
    fullName: 'Portland, OR',
    population: '652K',
    industries: ['Technology', 'Manufacturing', 'Tourism', 'Healthcare', 'Education', 'Financial Services', 'Real Estate']
  },
  'las-vegas-nv': { 
    name: 'Las Vegas', 
    state: 'NV', 
    fullName: 'Las Vegas, NV',
    population: '651K',
    industries: ['Tourism', 'Entertainment', 'Hospitality', 'Technology', 'Healthcare', 'Education', 'Financial Services']
  },
  'detroit-mi': { 
    name: 'Detroit', 
    state: 'MI', 
    fullName: 'Detroit, MI',
    population: '674K',
    industries: ['Automotive', 'Manufacturing', 'Technology', 'Healthcare', 'Education', 'Financial Services', 'Transportation']
  },
  'memphis-tn': { 
    name: 'Memphis', 
    state: 'TN', 
    fullName: 'Memphis, TN',
    population: '633K',
    industries: ['Logistics', 'Healthcare', 'Manufacturing', 'Technology', 'Education', 'Financial Services', 'Tourism']
  },
  'louisville-ky': { 
    name: 'Louisville', 
    state: 'KY', 
    fullName: 'Louisville, KY',
    population: '633K',
    industries: ['Manufacturing', 'Healthcare', 'Logistics', 'Technology', 'Education', 'Financial Services', 'Tourism']
  },
  'baltimore-md': { 
    name: 'Baltimore', 
    state: 'MD', 
    fullName: 'Baltimore, MD',
    population: '585K',
    industries: ['Healthcare', 'Education', 'Manufacturing', 'Technology', 'Financial Services', 'Transportation', 'Tourism']
  },
  'milwaukee-wi': { 
    name: 'Milwaukee', 
    state: 'WI', 
    fullName: 'Milwaukee, WI',
    population: '590K',
    industries: ['Manufacturing', 'Healthcare', 'Finance', 'Technology', 'Education', 'Transportation', 'Real Estate']
  },
  'albuquerque-nm': { 
    name: 'Albuquerque', 
    state: 'NM', 
    fullName: 'Albuquerque, NM',
    population: '564K',
    industries: ['Technology', 'Healthcare', 'Education', 'Manufacturing', 'Financial Services', 'Tourism', 'Real Estate']
  },
  'tucson-az': { 
    name: 'Tucson', 
    state: 'AZ', 
    fullName: 'Tucson, AZ',
    population: '542K',
    industries: ['Education', 'Healthcare', 'Technology', 'Manufacturing', 'Financial Services', 'Tourism', 'Real Estate']
  },
  'fresno-ca': { 
    name: 'Fresno', 
    state: 'CA', 
    fullName: 'Fresno, CA',
    population: '542K',
    industries: ['Agriculture', 'Healthcare', 'Education', 'Manufacturing', 'Technology', 'Financial Services', 'Tourism']
  },
  'sacramento-ca': { 
    name: 'Sacramento', 
    state: 'CA', 
    fullName: 'Sacramento, CA',
    population: '513K',
    industries: ['Government', 'Healthcare', 'Education', 'Manufacturing', 'Technology', 'Financial Services', 'Tourism']
  },
  'kansas-city-mo': { 
    name: 'Kansas City', 
    state: 'MO', 
    fullName: 'Kansas City, MO',
    population: '508K',
    industries: ['Logistics', 'Manufacturing', 'Healthcare', 'Technology', 'Education', 'Financial Services', 'Tourism']
  },
  'mesa-az': { 
    name: 'Mesa', 
    state: 'AZ', 
    fullName: 'Mesa, AZ',
    population: '504K',
    industries: ['Technology', 'Healthcare', 'Manufacturing', 'Education', 'Financial Services', 'Tourism', 'Real Estate']
  }
}

// Service data mapping with icons and descriptions
const serviceData: Record<string, { 
  name: string; 
  category: string; 
  icon: any; 
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  process: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
}> = {
  'website-design': {
    name: 'Website Design',
    category: 'Creative Solutions',
    icon: Code,
    shortDesc: 'Professional website design services',
    longDesc: 'Custom website design that captures your brand essence and drives conversions',
    benefits: ['Modern, responsive design', 'SEO-optimized structure', 'User experience focused', 'Brand consistency'],
    process: ['Discovery & Planning', 'Design & Wireframing', 'Development & Testing', 'Launch & Optimization'],
    industries: ['E-commerce', 'Professional Services', 'Healthcare', 'Education', 'Real Estate'],
    faqs: [
      { question: 'How long does website design take?', answer: 'Typically 4-8 weeks depending on complexity and requirements.' },
      { question: 'Do you provide ongoing support?', answer: 'Yes, we offer maintenance packages and support plans.' },
      { question: 'Can you redesign my existing website?', answer: 'Absolutely! We specialize in website redesigns and improvements.' }
    ]
  },
  'web-development': {
    name: 'Web Development',
    category: 'Technical Solutions',
    icon: Code,
    shortDesc: 'Custom web development solutions',
    longDesc: 'Full-stack web development with modern technologies and best practices',
    benefits: ['Scalable architecture', 'Performance optimized', 'Security focused', 'Mobile responsive'],
    process: ['Requirements Analysis', 'Technical Architecture', 'Development & Testing', 'Deployment & Maintenance'],
    industries: ['Technology', 'Finance', 'Healthcare', 'Education', 'Manufacturing'],
    faqs: [
      { question: 'What technologies do you use?', answer: 'We use modern frameworks like React, Next.js, Node.js, and more.' },
      { question: 'How do you ensure security?', answer: 'We implement industry-standard security practices and regular audits.' },
      { question: 'Can you integrate with existing systems?', answer: 'Yes, we can integrate with your current systems and databases.' }
    ]
  },
  'ai-consulting': {
    name: 'AI Consulting',
    category: 'Intelligent Solutions',
    icon: Brain,
    shortDesc: 'Strategic AI implementation guidance',
    longDesc: 'Expert consultation on AI strategy, implementation, and optimization',
    benefits: ['Strategic AI roadmap', 'Technology selection', 'Implementation guidance', 'ROI optimization'],
    process: ['AI Assessment', 'Strategy Development', 'Implementation Planning', 'Ongoing Optimization'],
    industries: ['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Retail'],
    faqs: [
      { question: 'How do I know if AI is right for my business?', answer: 'We conduct a comprehensive assessment to determine AI opportunities.' },
      { question: 'What is the typical ROI timeline?', answer: 'Most AI implementations show ROI within 6-18 months.' },
      { question: 'Do you provide training for my team?', answer: 'Yes, we offer comprehensive training and knowledge transfer.' }
    ]
  },
  'seo': {
    name: 'SEO Services',
    category: 'Marketing Solutions',
    icon: Search,
    shortDesc: 'Search engine optimization services',
    longDesc: 'Comprehensive SEO strategies to improve search rankings and drive organic traffic',
    benefits: ['Improved search rankings', 'Increased organic traffic', 'Better user experience', 'Long-term results'],
    process: ['Technical SEO Audit', 'Keyword Research', 'Content Optimization', 'Link Building & Monitoring'],
    industries: ['E-commerce', 'Professional Services', 'Healthcare', 'Education', 'Real Estate'],
    faqs: [
      { question: 'How long until I see results?', answer: 'Initial improvements typically appear in 4-8 weeks, with full results in 3-6 months.' },
      { question: 'Do you guarantee rankings?', answer: 'While we can\'t guarantee specific rankings, we have a proven track record of improving positions.' },
      { question: 'What ongoing work is required?', answer: 'SEO requires ongoing optimization, content creation, and monitoring.' }
    ]
  },
  'digital-marketing': {
    name: 'Digital Marketing',
    category: 'Marketing Solutions',
    icon: TrendingUp,
    shortDesc: 'Comprehensive digital marketing strategies',
    longDesc: 'Full-service digital marketing including PPC, social media, email, and content marketing',
    benefits: ['Multi-channel approach', 'Data-driven strategies', 'Measurable results', 'Continuous optimization'],
    process: ['Strategy Development', 'Campaign Creation', 'Execution & Monitoring', 'Analysis & Optimization'],
    industries: ['E-commerce', 'B2B Services', 'Healthcare', 'Education', 'Real Estate'],
    faqs: [
      { question: 'Which channels should I focus on?', answer: 'We analyze your audience and industry to recommend the most effective channels.' },
      { question: 'How do you measure success?', answer: 'We track KPIs like conversions, ROI, and engagement across all campaigns.' },
      { question: 'What is your minimum contract length?', answer: 'We offer flexible terms starting with 3-month campaigns.' }
    ]
  },
  'website-redesign': {
    name: 'Website Redesign',
    category: 'Creative Solutions',
    icon: Code,
    shortDesc: 'Professional website redesign services',
    longDesc: 'Transform your existing website with modern design and improved functionality',
    benefits: ['Modern design refresh', 'Improved user experience', 'Better conversion rates', 'Enhanced SEO'],
    process: ['Current Site Analysis', 'Design Strategy', 'Redesign & Development', 'Testing & Launch'],
    industries: ['E-commerce', 'Professional Services', 'Healthcare', 'Education', 'Real Estate'],
    faqs: [
      { question: 'How do you approach website redesigns?', answer: 'We start by analyzing your current site and identifying improvement opportunities.' },
      { question: 'Will I lose my current SEO rankings?', answer: 'We implement proper redirects and maintain SEO value during redesign.' },
      { question: 'Can you keep my existing content?', answer: 'Yes, we can preserve and optimize your existing content.' }
    ]
  },
  'rapid-web-design': {
    name: 'Rapid Web Design',
    category: 'Creative Solutions',
    icon: Zap,
    shortDesc: 'Fast website design and development',
    longDesc: 'Quick turnaround website solutions for urgent business needs',
    benefits: ['Fast delivery', 'Cost-effective', 'Professional quality', 'Quick deployment'],
    process: ['Quick Assessment', 'Rapid Design', 'Fast Development', 'Quick Launch'],
    industries: ['Startups', 'Small Business', 'Events', 'Seasonal Business', 'Emergency Services'],
    faqs: [
      { question: 'How fast can you deliver?', answer: 'We can deliver basic websites in 1-2 weeks, complex sites in 3-4 weeks.' },
      { question: 'Is quality compromised for speed?', answer: 'No, we maintain high quality standards while optimizing for speed.' },
      { question: 'What\'s included in rapid design?', answer: 'Essential pages, responsive design, basic SEO, and content management.' }
    ]
  },
  'ui-ux-design': {
    name: 'UI/UX Design',
    category: 'Creative Solutions',
    icon: Smartphone,
    shortDesc: 'User interface and experience design',
    longDesc: 'Intuitive and engaging user experiences that drive engagement and conversions',
    benefits: ['Improved user engagement', 'Better conversion rates', 'Reduced user frustration', 'Competitive advantage'],
    process: ['User Research', 'Wireframing', 'Prototyping', 'Testing & Iteration'],
    industries: ['Technology', 'E-commerce', 'Healthcare', 'Finance', 'Education'],
    faqs: [
      { question: 'How do you research user needs?', answer: 'We use surveys, interviews, analytics, and user testing to understand your audience.' },
      { question: 'Do you test with real users?', answer: 'Yes, we conduct usability testing with your target audience.' },
      { question: 'How do you measure UX success?', answer: 'We track metrics like task completion rates, time on task, and user satisfaction.' }
    ]
  },
  'ecommerce-design': {
    name: 'E-commerce Design',
    category: 'Creative Solutions',
    icon: ShoppingCart,
    shortDesc: 'Professional e-commerce website design',
    longDesc: 'Conversion-focused e-commerce designs that maximize sales and user experience',
    benefits: ['Higher conversion rates', 'Better user experience', 'Mobile optimized', 'SEO friendly'],
    process: ['E-commerce Strategy', 'Design & UX', 'Development & Integration', 'Testing & Launch'],
    industries: ['Retail', 'Fashion', 'Electronics', 'Food & Beverage', 'Home & Garden'],
    faqs: [
      { question: 'Which e-commerce platforms do you work with?', answer: 'We work with Shopify, WooCommerce, Magento, and custom solutions.' },
      { question: 'How do you optimize for conversions?', answer: 'We use proven UX patterns, clear CTAs, and streamlined checkout processes.' },
      { question: 'Do you handle payment integration?', answer: 'Yes, we integrate all major payment gateways and ensure PCI compliance.' }
    ]
  },
  'app-design-development': {
    name: 'App Design & Development',
    category: 'Creative Solutions',
    icon: Smartphone,
    shortDesc: 'Mobile and web app development',
    longDesc: 'Custom mobile and web applications that solve business problems and engage users',
    benefits: ['Custom functionality', 'Cross-platform compatibility', 'Scalable architecture', 'User-focused design'],
    process: ['Requirements Gathering', 'Design & Prototyping', 'Development', 'Testing & Launch'],
    industries: ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail'],
    faqs: [
      { question: 'Do you develop for iOS and Android?', answer: 'Yes, we develop native apps for both platforms and cross-platform solutions.' },
      { question: 'How long does app development take?', answer: 'Simple apps take 8-12 weeks, complex apps 16-24 weeks.' },
      { question: 'Do you provide app maintenance?', answer: 'Yes, we offer ongoing maintenance, updates, and support.' }
    ]
  },
  'software-design-development': {
    name: 'Software Design & Development',
    category: 'Technical Solutions',
    icon: Code,
    shortDesc: 'Custom software solutions',
    longDesc: 'Enterprise-grade software development tailored to your business needs',
    benefits: ['Custom functionality', 'Scalable architecture', 'Integration capabilities', 'Long-term support'],
    process: ['Requirements Analysis', 'Architecture Design', 'Development', 'Testing & Deployment'],
    industries: ['Technology', 'Manufacturing', 'Healthcare', 'Finance', 'Logistics'],
    faqs: [
      { question: 'What types of software do you develop?', answer: 'We develop web applications, desktop software, APIs, and enterprise systems.' },
      { question: 'How do you ensure scalability?', answer: 'We design with cloud-native architecture and microservices patterns.' },
      { question: 'Do you provide ongoing support?', answer: 'Yes, we offer maintenance, updates, and technical support.' }
    ]
  },
  'software-development': {
    name: 'Software Development',
    category: 'Technical Solutions',
    icon: Code,
    shortDesc: 'Full-stack software development',
    longDesc: 'Comprehensive software development services from concept to deployment',
    benefits: ['End-to-end development', 'Modern technologies', 'Quality assurance', 'Deployment support'],
    process: ['Planning & Design', 'Development', 'Testing', 'Deployment & Support'],
    industries: ['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Education'],
    faqs: [
      { question: 'What programming languages do you use?', answer: 'We use Python, JavaScript, Java, C#, and other modern languages.' },
      { question: 'Do you handle cloud deployment?', answer: 'Yes, we deploy to AWS, Azure, Google Cloud, and other platforms.' },
      { question: 'How do you ensure code quality?', answer: 'We use automated testing, code reviews, and continuous integration.' }
    ]
  },
  'shopify-development': {
    name: 'Shopify Development',
    category: 'Technical Solutions',
    icon: ShoppingCart,
    shortDesc: 'Custom Shopify store development',
    longDesc: 'Professional Shopify development with custom themes and functionality',
    benefits: ['Custom Shopify themes', 'Enhanced functionality', 'Performance optimization', 'SEO optimization'],
    process: ['Store Planning', 'Theme Development', 'App Integration', 'Testing & Launch'],
    industries: ['E-commerce', 'Retail', 'Fashion', 'Electronics', 'Food & Beverage'],
    faqs: [
      { question: 'Do you create custom Shopify themes?', answer: 'Yes, we develop custom themes from scratch or modify existing ones.' },
      { question: 'Can you integrate third-party apps?', answer: 'Yes, we integrate all major Shopify apps and custom solutions.' },
      { question: 'Do you handle Shopify Plus stores?', answer: 'Yes, we have experience with Shopify Plus and enterprise features.' }
    ]
  },
  'wordpress-development': {
    name: 'WordPress Development',
    category: 'Technical Solutions',
    icon: Code,
    shortDesc: 'Custom WordPress development',
    longDesc: 'Professional WordPress development with custom themes and plugins',
    benefits: ['Custom themes', 'Custom plugins', 'Performance optimization', 'Security hardening'],
    process: ['Requirements Analysis', 'Theme/Plugin Development', 'Integration', 'Testing & Launch'],
    industries: ['Blogging', 'Business', 'E-commerce', 'Education', 'Non-profit'],
    faqs: [
      { question: 'Do you create custom WordPress themes?', answer: 'Yes, we develop custom themes tailored to your brand and needs.' },
      { question: 'Can you develop custom plugins?', answer: 'Yes, we create custom plugins for specific functionality.' },
      { question: 'Do you handle WordPress security?', answer: 'Yes, we implement security best practices and regular updates.' }
    ]
  },
  'ai-seo': {
    name: 'AI SEO',
    category: 'Intelligent Solutions',
    icon: Brain,
    shortDesc: 'AI-powered search engine optimization',
    longDesc: 'Advanced SEO strategies leveraging artificial intelligence for better rankings',
    benefits: ['AI-powered insights', 'Predictive analytics', 'Automated optimization', 'Better rankings'],
    process: ['AI Analysis', 'Strategy Development', 'Implementation', 'Monitoring & Optimization'],
    industries: ['E-commerce', 'Technology', 'Healthcare', 'Finance', 'Education'],
    faqs: [
      { question: 'How does AI improve SEO?', answer: 'AI helps identify patterns, predict trends, and optimize content automatically.' },
      { question: 'What AI tools do you use?', answer: 'We use advanced AI tools for keyword research, content optimization, and analytics.' },
      { question: 'How do you measure AI SEO success?', answer: 'We track rankings, traffic, and conversion improvements over time.' }
    ]
  },
  'ai-digital-marketing': {
    name: 'AI Digital Marketing',
    category: 'Intelligent Solutions',
    icon: Brain,
    shortDesc: 'AI-enhanced digital marketing strategies',
    longDesc: 'Intelligent marketing solutions that optimize campaigns and improve ROI',
    benefits: ['AI-powered targeting', 'Automated optimization', 'Better ROI', 'Predictive analytics'],
    process: ['AI Analysis', 'Strategy Development', 'Campaign Execution', 'Optimization'],
    industries: ['E-commerce', 'Technology', 'Finance', 'Healthcare', 'Retail'],
    faqs: [
      { question: 'How does AI improve marketing ROI?', answer: 'AI optimizes targeting, bidding, and content for better performance.' },
      { question: 'What marketing channels use AI?', answer: 'We apply AI to PPC, social media, email, and content marketing.' },
      { question: 'How do you measure AI marketing success?', answer: 'We track conversion rates, ROI, and customer acquisition costs.' }
    ]
  },
  'ai-gpt-integration': {
    name: 'AI GPT Integration',
    category: 'Intelligent Solutions',
    icon: Bot,
    shortDesc: 'GPT and AI model integration',
    longDesc: 'Seamless integration of GPT and other AI models into your business processes',
    benefits: ['Automated content generation', 'Customer service automation', 'Process optimization', 'Cost reduction'],
    process: ['AI Assessment', 'Integration Planning', 'Development', 'Testing & Deployment'],
    industries: ['Technology', 'Customer Service', 'Content Creation', 'E-commerce', 'Healthcare'],
    faqs: [
      { question: 'What can GPT integration do for my business?', answer: 'GPT can automate content creation, customer service, and data analysis.' },
      { question: 'How secure is GPT integration?', answer: 'We implement enterprise-grade security and data privacy measures.' },
      { question: 'Do you provide training for your team?', answer: 'Yes, we offer comprehensive training on using AI tools effectively.' }
    ]
  },
  'ai-agent-development': {
    name: 'AI Agent Development',
    category: 'Intelligent Solutions',
    icon: Bot,
    shortDesc: 'Custom AI agent development',
    longDesc: 'Intelligent AI agents that automate tasks and improve business efficiency',
    benefits: ['Task automation', '24/7 availability', 'Cost reduction', 'Improved efficiency'],
    process: ['Agent Design', 'Development', 'Training', 'Deployment & Monitoring'],
    industries: ['Customer Service', 'Sales', 'Operations', 'Healthcare', 'Finance'],
    faqs: [
      { question: 'What types of AI agents can you build?', answer: 'We build customer service bots, sales agents, and operational assistants.' },
      { question: 'How do you train AI agents?', answer: 'We use your data and industry knowledge to train agents effectively.' },
      { question: 'Can AI agents integrate with my systems?', answer: 'Yes, we integrate agents with your CRM, ERP, and other systems.' }
    ]
  },
  'chatgpt-optimization': {
    name: 'ChatGPT Optimization',
    category: 'Intelligent Solutions',
    icon: Bot,
    shortDesc: 'ChatGPT prompt engineering and optimization',
    longDesc: 'Expert optimization of ChatGPT prompts for maximum effectiveness and business value',
    benefits: ['Better AI responses', 'Improved efficiency', 'Cost optimization', 'Business value'],
    process: ['Prompt Analysis', 'Optimization', 'Testing', 'Implementation'],
    industries: ['Content Creation', 'Customer Service', 'Marketing', 'Education', 'Research'],
    faqs: [
      { question: 'How do you optimize ChatGPT prompts?', answer: 'We use advanced prompt engineering techniques and testing.' },
      { question: 'Can you optimize for specific industries?', answer: 'Yes, we specialize in industry-specific prompt optimization.' },
      { question: 'How do you measure prompt effectiveness?', answer: 'We test responses and measure quality, relevance, and efficiency.' }
    ]
  },
  'generative-engine-optimization': {
    name: 'Generative Engine Optimization',
    category: 'Intelligent Solutions',
    icon: BarChart3,
    shortDesc: 'Optimization for generative AI engines',
    longDesc: 'Strategic optimization to improve performance and results from generative AI systems',
    benefits: ['Better AI outputs', 'Improved efficiency', 'Cost optimization', 'Quality enhancement'],
    process: ['Engine Analysis', 'Optimization Strategy', 'Implementation', 'Monitoring'],
    industries: ['Content Creation', 'Design', 'Development', 'Marketing', 'Research'],
    faqs: [
      { question: 'What generative engines do you optimize?', answer: 'We optimize for GPT, DALL-E, Midjourney, and other AI engines.' },
      { question: 'How do you measure optimization success?', answer: 'We track output quality, efficiency, and cost improvements.' },
      { question: 'Can you optimize for specific use cases?', answer: 'Yes, we specialize in use-case specific optimization.' }
    ]
  },
  'answer-engine-optimization': {
    name: 'Answer Engine Optimization',
    category: 'Intelligent Solutions',
    icon: Search,
    shortDesc: 'Optimization for answer engines and AI search',
    longDesc: 'Strategic optimization to improve visibility and performance in AI-powered search engines',
    benefits: ['Better AI search visibility', 'Improved user engagement', 'Competitive advantage', 'Future-proofing'],
    process: ['Answer Engine Analysis', 'Content Optimization', 'Implementation', 'Monitoring'],
    industries: ['E-commerce', 'Professional Services', 'Healthcare', 'Education', 'Technology'],
    faqs: [
      { question: 'What are answer engines?', answer: 'Answer engines like Google\'s AI Overview provide direct answers to user queries.' },
      { question: 'How do you optimize for AI search?', answer: 'We optimize content structure, semantics, and user intent signals.' },
      { question: 'How do you measure AEO success?', answer: 'We track answer engine visibility, click-through rates, and user engagement.' }
    ]
  },
  'local-seo': {
    name: 'Local SEO',
    category: 'Marketing Solutions',
    icon: MapPin,
    shortDesc: 'Local search engine optimization',
    longDesc: 'Local SEO strategies to improve visibility in local search results and Google My Business',
    benefits: ['Local search visibility', 'Google My Business optimization', 'Local traffic increase', 'Customer reviews'],
    process: ['Local Audit', 'GMB Optimization', 'Local Content', 'Review Management'],
    industries: ['Restaurants', 'Healthcare', 'Professional Services', 'Retail', 'Automotive'],
    faqs: [
      { question: 'How do you optimize Google My Business?', answer: 'We optimize all GMB elements including photos, descriptions, and categories.' },
      { question: 'How important are local reviews?', answer: 'Local reviews significantly impact local search rankings and customer trust.' },
      { question: 'How long does local SEO take?', answer: 'Local SEO typically shows results in 2-4 weeks.' }
    ]
  },
  'email-marketing-design': {
    name: 'Email Marketing Design',
    category: 'Marketing Solutions',
    icon: Mail,
    shortDesc: 'Professional email marketing campaigns',
    longDesc: 'Engaging email marketing designs that drive opens, clicks, and conversions',
    benefits: ['Higher open rates', 'Better click-through rates', 'Improved conversions', 'Brand consistency'],
    process: ['Strategy Development', 'Design & Content', 'Testing', 'Launch & Analysis'],
    industries: ['E-commerce', 'B2B Services', 'Healthcare', 'Education', 'Non-profit'],
    faqs: [
      { question: 'How do you improve email open rates?', answer: 'We optimize subject lines, sender names, and send times.' },
      { question: 'Do you handle email automation?', answer: 'Yes, we create automated email sequences and workflows.' },
      { question: 'How do you ensure deliverability?', answer: 'We follow email best practices and maintain clean lists.' }
    ]
  },
  'social-media-design': {
    name: 'Social Media Design',
    category: 'Marketing Solutions',
    icon: Share2,
    shortDesc: 'Professional social media graphics and campaigns',
    longDesc: 'Eye-catching social media designs that increase engagement and brand awareness',
    benefits: ['Higher engagement rates', 'Brand consistency', 'Professional appearance', 'Increased reach'],
    process: ['Strategy Planning', 'Design Creation', 'Content Calendar', 'Monitoring & Optimization'],
    industries: ['E-commerce', 'Fashion', 'Food & Beverage', 'Technology', 'Healthcare'],
    faqs: [
      { question: 'Which social platforms do you design for?', answer: 'We design for Instagram, Facebook, LinkedIn, Twitter, and TikTok.' },
      { question: 'How often should I post?', answer: 'We create custom posting schedules based on your audience and platform.' },
      { question: 'Do you provide content calendars?', answer: 'Yes, we create comprehensive content calendars and posting schedules.' }
    ]
  },
  'cro-ecommerce': {
    name: 'CRO E-commerce',
    category: 'Conversion Optimization',
    icon: TrendingUp,
    shortDesc: 'E-commerce conversion rate optimization',
    longDesc: 'Data-driven optimization strategies to increase sales and improve user experience',
    benefits: ['Higher conversion rates', 'Increased revenue', 'Better user experience', 'Data-driven decisions'],
    process: ['Conversion Audit', 'Hypothesis Development', 'A/B Testing', 'Implementation & Monitoring'],
    industries: ['E-commerce', 'Retail', 'Fashion', 'Electronics', 'Home & Garden'],
    faqs: [
      { question: 'How do you identify conversion issues?', answer: 'We use analytics, heatmaps, and user testing to find problems.' },
      { question: 'What is A/B testing?', answer: 'A/B testing compares two versions to see which performs better.' },
      { question: 'How long does CRO take?', answer: 'CRO is ongoing, but initial improvements typically appear in 4-8 weeks.' }
    ]
  },
  'cro-lead-generation': {
    name: 'CRO Lead Generation',
    category: 'Conversion Optimization',
    icon: Target,
    shortDesc: 'Lead generation conversion optimization',
    longDesc: 'Optimize your lead generation process to capture more qualified leads and increase conversions',
    benefits: ['More qualified leads', 'Higher conversion rates', 'Better lead quality', 'Improved ROI'],
    process: ['Lead Funnel Analysis', 'Optimization Strategy', 'Implementation', 'Testing & Monitoring'],
    industries: ['B2B Services', 'Professional Services', 'Healthcare', 'Education', 'Real Estate'],
    faqs: [
      { question: 'How do you qualify leads?', answer: 'We use lead scoring and qualification criteria to identify quality prospects.' },
      { question: 'What is lead nurturing?', answer: 'Lead nurturing is the process of building relationships with prospects over time.' },
      { question: 'How do you measure lead quality?', answer: 'We track conversion rates, sales cycle length, and customer lifetime value.' }
    ]
  },
  'enterprise-geo-services': {
    name: 'Enterprise GEO Services',
    category: 'Intelligent Solutions',
    icon: BarChart3,
    shortDesc: 'Enterprise generative engine optimization',
    longDesc: 'Large-scale optimization services for enterprise AI and generative systems',
    benefits: ['Enterprise-scale optimization', 'Cost reduction', 'Performance improvement', 'ROI maximization'],
    process: ['Enterprise Assessment', 'Strategy Development', 'Implementation', 'Ongoing Optimization'],
    industries: ['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Retail'],
    faqs: [
      { question: 'What makes enterprise GEO different?', answer: 'Enterprise GEO handles large-scale systems and complex integrations.' },
      { question: 'How do you ensure enterprise security?', answer: 'We implement enterprise-grade security and compliance measures.' },
      { question: 'What is the typical enterprise ROI?', answer: 'Enterprise GEO typically shows ROI within 6-12 months.' }
    ]
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: CityServicePageProps): Promise<Metadata> {
  const city = cityData[params.city]
  const service = serviceData[params.service]
  
  if (!city || !service) return { title: 'Page Not Found' }

  return {
    title: `${service.name} in ${city.fullName} | Professional ${service.name} Services`,
    description: `Professional ${service.name.toLowerCase()} services in ${city.fullName}. ${service.shortDesc} tailored for ${city.name} businesses. Get expert solutions and local expertise.`,
    keywords: `${service.name.toLowerCase()}, ${city.name}, ${city.state}, business services, professional services, ${service.category.toLowerCase()}`,
    openGraph: {
      title: `${service.name} in ${city.fullName} | Web Vello`,
      description: `Professional ${service.name.toLowerCase()} services in ${city.fullName} - Expert solutions for local businesses.`,
      url: `https://webvello.com/${params.city}/${params.service}`,
      siteName: 'Web Vello',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `https://webvello.com/og-${service.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} in ${city.fullName} - Web Vello`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} in ${city.fullName} | Web Vello`,
      description: `Professional ${service.name.toLowerCase()} services in ${city.fullName} - Expert solutions for local businesses.`,
      images: [`https://webvello.com/og-${service.name.toLowerCase().replace(/\s+/g, '-')}.jpg`],
    },
  }
}

export default function CityServicePage({ params }: CityServicePageProps) {
  const city = cityData[params.city]
  const service = serviceData[params.service]
  
  if (!city || !service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">The requested service page could not be found.</p>
          <Button asChild>
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
    )
  }

  const ServiceIcon = service.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 rounded-full p-4 mr-4">
              <ServiceIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">
              {service.name} in {city.fullName}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional {service.name.toLowerCase()} services tailored for {city.name} businesses. {service.longDesc} with local expertise and proven results.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-blue-500 mr-2" />
              Serving {city.name} Area
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Local Expertise
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              Proven Results
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-3"
          >
            Get Free Consultation
          </Button>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional {service.name} Services in {city.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {city.name} businesses face unique challenges and opportunities in today’s competitive market. Our {service.name.toLowerCase()} services are specifically designed to address these local needs while leveraging global best practices.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With a population of {city.population} and thriving industries including {city.industries.slice(0, 3).join(', ')}, and more, {city.name} offers incredible potential for businesses ready to establish a strong digital presence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Why Choose Our {service.name} Services?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Market Knowledge</h4>
                    <p className="text-gray-600 text-sm">Deep understanding of {city.name} business landscape</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Results</h4>
                    <p className="text-gray-600 text-sm">Track record of success with {city.name} businesses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 rounded-full p-2 mr-4 mt-1">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                    <p className="text-gray-600 text-sm">Rigorous standards and ongoing support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven {service.name} Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure consistent, high-quality results for every {city.name} business we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step}</h3>
                <p className="text-gray-600 text-sm">
                  {index === 0 && 'Understanding your business needs and objectives'}
                  {index === 1 && 'Creating detailed plans and strategies'}
                  {index === 2 && 'Implementing solutions with quality assurance'}
                  {index === 3 && 'Ensuring long-term success and optimization'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve in {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our {service.name.toLowerCase()} services are designed to meet the unique needs of various industries in the {city.name} market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry}</h3>
                <p className="text-gray-600 text-sm">
                  Specialized {service.name.toLowerCase()} solutions for {industry.toLowerCase()} businesses in {city.name}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our {service.name.toLowerCase()} services in {city.name}.
            </p>
          </div>
          
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started with {service.name} in {city.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the growing number of {city.name} businesses that trust us with their {service.name.toLowerCase()} needs. Let’s discuss how we can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              asChild
            >
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              asChild
            >
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
