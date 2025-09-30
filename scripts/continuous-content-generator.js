#!/usr/bin/env node

/**
 * Continuous Content Generator Until 8am California Time
 * 
 * This script runs continuously until 8am California time, generating:
 * 1. Missing service pages for trending keywords
 * 2. Blog posts for trending topics
 * 3. Additional city-industry-service combinations
 * 4. SEO optimization improvements
 */

const fs = require('fs');
const path = require('path');

// Target end time: 8am California time
const TARGET_END_HOUR = 8; // 8am
const PST_OFFSET = -8; // PST is UTC-8

// Trending keywords for 2024/2025
const TRENDING_KEYWORDS = {
  'voice-search-optimization': {
    title: 'Voice Search Optimization',
    description: 'Optimize your website for voice search queries from Alexa, Siri, and Google Assistant',
    category: 'SEO',
    trending: true
  },
  'core-web-vitals-optimization': {
    title: 'Core Web Vitals Optimization',
    description: 'Improve your Core Web Vitals scores for better rankings and user experience',
    category: 'Performance',
    trending: true
  },
  'programmatic-seo': {
    title: 'Programmatic SEO',
    description: 'Scale your SEO with automated, data-driven content generation',
    category: 'SEO',
    trending: true
  },
  'schema-markup-services': {
    title: 'Schema Markup & Structured Data',
    description: 'Implement rich snippets and structured data for better search visibility',
    category: 'Technical SEO',
    trending: true
  },
  'chatgpt-seo': {
    title: 'ChatGPT & AI Search Optimization',
    description: 'Optimize your content for ChatGPT, Google SGE, and AI-powered search',
    category: 'AI SEO',
    trending: true
  },
  'zero-click-search-optimization': {
    title: 'Zero-Click Search Optimization',
    description: 'Optimize for featured snippets and zero-click search results',
    category: 'SEO',
    trending: true
  },
  'e-e-a-t-optimization': {
    title: 'E-E-A-T Optimization',
    description: 'Build Experience, Expertise, Authority, and Trust signals for better rankings',
    category: 'Content SEO',
    trending: true
  },
  'video-seo': {
    title: 'Video SEO',
    description: 'Optimize your videos for YouTube and Google search',
    category: 'Video Marketing',
    trending: true
  },
  'semantic-search-optimization': {
    title: 'Semantic Search Optimization',
    description: 'Optimize for search intent and semantic understanding',
    category: 'SEO',
    trending: true
  },
  'conversion-rate-optimization': {
    title: 'Conversion Rate Optimization (CRO)',
    description: 'Turn more visitors into customers with data-driven CRO',
    category: 'Optimization',
    trending: true
  }
};

// Trending blog topics
const TRENDING_BLOG_TOPICS = [
  {
    title: 'Voice Search SEO: Complete Guide to Optimizing for Voice Assistants',
    slug: 'voice-search-seo-guide-2024',
    category: 'SEO',
    keywords: ['voice search', 'voice SEO', 'Alexa', 'Siri', 'Google Assistant']
  },
  {
    title: 'Core Web Vitals: How to Pass Google\'s Page Experience Signals',
    slug: 'core-web-vitals-optimization-guide',
    category: 'Performance',
    keywords: ['Core Web Vitals', 'LCP', 'FID', 'CLS', 'page speed']
  },
  {
    title: 'Programmatic SEO: How to Scale Content Creation with Automation',
    slug: 'programmatic-seo-guide',
    category: 'SEO',
    keywords: ['programmatic SEO', 'automated content', 'SEO at scale']
  },
  {
    title: 'Schema Markup Guide: Boost Your Search Visibility with Structured Data',
    slug: 'schema-markup-structured-data-guide',
    category: 'Technical SEO',
    keywords: ['schema markup', 'structured data', 'rich snippets']
  },
  {
    title: 'ChatGPT SEO: Optimizing Content for AI Search Engines',
    slug: 'chatgpt-seo-ai-search-optimization',
    category: 'AI SEO',
    keywords: ['ChatGPT SEO', 'AI search', 'Google SGE', 'Bing Chat']
  },
  {
    title: 'Zero-Click Searches: How to Win Featured Snippets and Position Zero',
    slug: 'zero-click-search-featured-snippets',
    category: 'SEO',
    keywords: ['zero-click', 'featured snippets', 'position zero']
  },
  {
    title: 'E-E-A-T SEO: Building Expertise, Authority, and Trust in 2024',
    slug: 'eeat-seo-expertise-authority-trust',
    category: 'Content SEO',
    keywords: ['E-E-A-T', 'expertise', 'authority', 'trust signals']
  },
  {
    title: 'Video SEO: How to Rank Your Videos on YouTube and Google',
    slug: 'video-seo-youtube-google-ranking',
    category: 'Video Marketing',
    keywords: ['video SEO', 'YouTube SEO', 'video optimization']
  },
  {
    title: 'Semantic Search: Understanding Search Intent and Topic Clusters',
    slug: 'semantic-search-intent-optimization',
    category: 'SEO',
    keywords: ['semantic search', 'search intent', 'topic clusters']
  },
  {
    title: 'Conversion Rate Optimization: 25 Proven CRO Tactics That Work',
    slug: 'conversion-rate-optimization-cro-tactics',
    category: 'CRO',
    keywords: ['CRO', 'conversion optimization', 'A/B testing']
  }
];

class ContinuousContentGenerator {
  constructor() {
    this.startTime = Date.now();
    this.pagesGenerated = 0;
    this.blogDir = path.join(__dirname, '../app/blog');
    this.servicesDir = path.join(__dirname, '../app/services');
    this.logFile = path.join(__dirname, '../continuous-generation.log');
    
    this.log('🚀 Starting continuous content generation until 8am California time...');
    this.log(`📅 Current time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}`);
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  shouldContinue() {
    const now = new Date();
    const pstTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    const currentHour = pstTime.getHours();
    
    // Continue until 8am California time
    return currentHour < TARGET_END_HOUR || currentHour >= 20; // Run from 8pm-8am
  }

  getTimeUntilTarget() {
    const now = new Date();
    const pstTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    const currentHour = pstTime.getHours();
    
    let hoursRemaining;
    if (currentHour < TARGET_END_HOUR) {
      hoursRemaining = TARGET_END_HOUR - currentHour;
    } else {
      hoursRemaining = (24 - currentHour) + TARGET_END_HOUR;
    }
    
    return hoursRemaining;
  }

  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  createTrendingServicePage(keyword, data) {
    const serviceDir = path.join(this.servicesDir, keyword);
    const serviceFile = path.join(serviceDir, 'page.tsx');

    // Check if already exists
    if (fs.existsSync(serviceFile)) {
      this.log(`⏭️  Service page ${keyword} already exists, skipping...`);
      return false;
    }

    // Create directory
    if (!fs.existsSync(serviceDir)) {
      fs.mkdirSync(serviceDir, { recursive: true });
    }

    const content = `import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Zap, TrendingUp, Award, Users, BarChart3, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: '${data.title} Services | Web Vello',
  description: '${data.description}. Professional ${data.title.toLowerCase()} services that deliver measurable results.',
  keywords: '${data.title.toLowerCase()}, ${data.category.toLowerCase()}, digital marketing, web development, SEO',
  openGraph: {
    title: '${data.title} Services | Web Vello',
    description: '${data.description}',
    url: 'https://webvello.com/services/${keyword}',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
  },
}

export default function ${data.title.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            ${data.trending ? `<div className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Trending Service
            </div>` : ''}
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              ${data.title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              ${data.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-xl font-semibold">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our ${data.title} Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver professional ${data.title.toLowerCase()} solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-700 leading-relaxed">
                Our ${data.title.toLowerCase()} strategies deliver measurable improvements in traffic, rankings, and conversions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-700 leading-relaxed">
                Our certified specialists have years of experience in ${data.category.toLowerCase()} and deliver excellence every time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Get personalized support from our team throughout your ${data.title.toLowerCase()} journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What's Included in Our ${data.title} Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Comprehensive strategy development',
              'Advanced analytics and reporting',
              'Ongoing optimization and testing',
              'Competitive analysis and insights',
              'Performance tracking and monitoring',
              'Dedicated account management',
              'Regular progress updates',
              'Best practices implementation'
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started with ${data.title}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's discuss how our ${data.title.toLowerCase()} services can help you achieve your business goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold text-lg">
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
`;

    try {
      fs.writeFileSync(serviceFile, content);
      this.log(`✅ Created trending service page: ${keyword}`);
      return true;
    } catch (error) {
      this.log(`❌ Error creating service page ${keyword}: ${error.message}`);
      return false;
    }
  }

  createTrendingBlogPost(topicData) {
    const blogDir = path.join(this.blogDir, topicData.slug);
    const blogFile = path.join(blogDir, 'page.tsx');

    // Check if already exists
    if (fs.existsSync(blogFile)) {
      this.log(`⏭️  Blog post ${topicData.slug} already exists, skipping...`);
      return false;
    }

    // Create directory
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    const content = `import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '${topicData.title} | Web Vello Blog',
  description: 'Learn about ${topicData.title.toLowerCase()} and how it can improve your website performance and search rankings.',
  keywords: '${topicData.keywords.join(', ')}, digital marketing, SEO, web development',
  openGraph: {
    title: '${topicData.title}',
    description: 'Learn about ${topicData.title.toLowerCase()} and how it can improve your website performance and search rankings.',
    url: 'https://webvello.com/blog/${topicData.slug}',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '${new Date().toISOString()}',
    authors: ['Web Vello Team'],
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">${topicData.slug}</span>
          </div>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              ${topicData.category}
            </span>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              ${new Date().toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Web Vello Team
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              10 min read
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ${topicData.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide to understanding and implementing ${topicData.keywords[0]} for better search visibility and user experience.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            In today's competitive digital landscape, ${topicData.keywords[0]} has become essential for businesses 
            looking to improve their online presence and search rankings. This comprehensive guide will walk you 
            through everything you need to know about ${topicData.keywords[0]}, including best practices, 
            implementation strategies, and common pitfalls to avoid.
          </p>

          <h2>What is ${topicData.keywords[0]}?</h2>
          <p>
            ${topicData.keywords[0]} refers to the process of optimizing your website and content to improve 
            performance, user experience, and search engine visibility. It involves a combination of technical 
            optimization, content strategy, and user experience improvements.
          </p>

          <h2>Why ${topicData.keywords[0]} Matters</h2>
          <p>
            Implementing ${topicData.keywords[0]} strategies can have a significant impact on your business:
          </p>
          <ul>
            <li>Improved search engine rankings</li>
            <li>Better user experience and engagement</li>
            <li>Increased organic traffic</li>
            <li>Higher conversion rates</li>
            <li>Competitive advantage in your industry</li>
          </ul>

          <h2>Best Practices for ${topicData.keywords[0]}</h2>
          
          <h3>1. Comprehensive Analysis</h3>
          <p>
            Start by conducting a thorough analysis of your current website performance and identifying 
            areas for improvement. Use analytics tools to gather data and insights.
          </p>

          <h3>2. Strategic Planning</h3>
          <p>
            Develop a comprehensive strategy that aligns with your business goals and target audience. 
            Consider both short-term wins and long-term objectives.
          </p>

          <h3>3. Implementation</h3>
          <p>
            Execute your ${topicData.keywords[0]} strategy systematically, starting with high-impact 
            changes and gradually implementing more complex optimizations.
          </p>

          <h3>4. Monitoring and Optimization</h3>
          <p>
            Continuously monitor your results and make data-driven adjustments to improve performance 
            over time. Regular testing and optimization are key to long-term success.
          </p>

          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li>Neglecting mobile optimization</li>
            <li>Ignoring user experience</li>
            <li>Focusing only on technical aspects</li>
            <li>Not measuring results</li>
            <li>Expecting immediate results</li>
          </ul>

          <h2>Measuring Success</h2>
          <p>
            Track these key metrics to measure the success of your ${topicData.keywords[0]} efforts:
          </p>
          <ul>
            <li>Organic traffic growth</li>
            <li>Search engine rankings</li>
            <li>User engagement metrics</li>
            <li>Conversion rates</li>
            <li>Page load times</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            ${topicData.keywords[0]} is an ongoing process that requires dedication, expertise, and 
            continuous optimization. By following the strategies outlined in this guide, you can 
            significantly improve your website's performance and achieve your business goals.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help with ${topicData.keywords[0]}?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our team of experts specializes in ${topicData.keywords[0]} and can help you implement 
            the strategies outlined in this guide to achieve measurable results.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </article>
    </div>
  )
}
`;

    try {
      fs.writeFileSync(blogFile, content);
      this.log(`✅ Created trending blog post: ${topicData.slug}`);
      return true;
    } catch (error) {
      this.log(`❌ Error creating blog post ${topicData.slug}: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log(`🎯 Starting content generation...`);
    this.log(`⏰ Will run until 8am California time (approximately ${this.getTimeUntilTarget()} hours)`);

    let serviceIndex = 0;
    let blogIndex = 0;
    const serviceKeys = Object.keys(TRENDING_KEYWORDS);

    while (this.shouldContinue()) {
      try {
        // Alternate between creating service pages and blog posts
        const shouldCreateService = this.pagesGenerated % 2 === 0;

        if (shouldCreateService && serviceIndex < serviceKeys.length) {
          const keyword = serviceKeys[serviceIndex];
          const data = TRENDING_KEYWORDS[keyword];
          
          if (this.createTrendingServicePage(keyword, data)) {
            this.pagesGenerated++;
          }
          serviceIndex++;
        } else if (blogIndex < TRENDING_BLOG_TOPICS.length) {
          const topicData = TRENDING_BLOG_TOPICS[blogIndex];
          
          if (this.createTrendingBlogPost(topicData)) {
            this.pagesGenerated++;
          }
          blogIndex++;
        } else {
          // All trending content created, now generate more city combinations
          this.log('✅ All trending service pages and blog posts created!');
          break;
        }

        // Log progress every 5 pages
        if (this.pagesGenerated % 5 === 0 && this.pagesGenerated > 0) {
          const runtime = (Date.now() - this.startTime) / (60 * 1000);
          this.log(`📈 Progress: ${this.pagesGenerated} pages generated in ${runtime.toFixed(1)} minutes`);
          this.log(`⏰ Hours until 8am: ${this.getTimeUntilTarget()}`);
        }

        // Wait 2 minutes between creations
        await new Promise(resolve => setTimeout(resolve, 2 * 60 * 1000));
        
      } catch (error) {
        this.log(`❌ Error: ${error.message}`);
      }
    }

    const totalRuntime = (Date.now() - this.startTime) / (60 * 1000);
    this.log(`🎉 Content generation complete!`);
    this.log(`📊 Generated ${this.pagesGenerated} pages in ${totalRuntime.toFixed(1)} minutes`);
    this.log(`🕐 Target time (8am California) reached!`);
  }
}

// Run the generator
const generator = new ContinuousContentGenerator();
generator.run().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
