'use client'

import { useState } from 'react'

interface ChecklistItem {
  id: string
  category: string
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  completed: boolean
}

export function SEOChecklist() {
  const [items, setItems] = useState<ChecklistItem[]>([
    {
      id: 'meta-title',
      category: 'On-Page SEO',
      title: 'Optimize Meta Titles',
      description: 'Create unique, compelling meta titles (50-60 characters) with target keywords',
      priority: 'high',
      completed: false
    },
    {
      id: 'meta-description',
      category: 'On-Page SEO',
      title: 'Write Meta Descriptions',
      description: 'Add compelling meta descriptions (150-160 characters) with CTAs',
      priority: 'high',
      completed: false
    },
    {
      id: 'header-tags',
      category: 'On-Page SEO',
      title: 'Structure Header Tags',
      description: 'Use proper H1, H2, H3 hierarchy with keywords',
      priority: 'high',
      completed: false
    },
    {
      id: 'alt-text',
      category: 'On-Page SEO',
      title: 'Add Alt Text to Images',
      description: 'Include descriptive alt text for all images',
      priority: 'medium',
      completed: false
    },
    {
      id: 'internal-links',
      category: 'On-Page SEO',
      title: 'Build Internal Links',
      description: 'Create relevant internal links to other pages',
      priority: 'medium',
      completed: false
    },
    {
      id: 'page-speed',
      category: 'Technical SEO',
      title: 'Optimize Page Speed',
      description: 'Achieve Core Web Vitals scores (LCP < 2.5s, FID < 100ms, CLS < 0.1)',
      priority: 'high',
      completed: false
    },
    {
      id: 'mobile-friendly',
      category: 'Technical SEO',
      title: 'Ensure Mobile Responsiveness',
      description: 'Test and optimize for mobile devices',
      priority: 'high',
      completed: false
    },
    {
      id: 'ssl-certificate',
      category: 'Technical SEO',
      title: 'Install SSL Certificate',
      description: 'Secure your website with HTTPS',
      priority: 'high',
      completed: false
    },
    {
      id: 'xml-sitemap',
      category: 'Technical SEO',
      title: 'Create XML Sitemap',
      description: 'Generate and submit XML sitemap to Google Search Console',
      priority: 'medium',
      completed: false
    },
    {
      id: 'robots-txt',
      category: 'Technical SEO',
      title: 'Configure Robots.txt',
      description: 'Set up robots.txt file to guide search engine crawlers',
      priority: 'medium',
      completed: false
    },
    {
      id: 'google-analytics',
      category: 'Analytics & Tracking',
      title: 'Set Up Google Analytics',
      description: 'Install and configure Google Analytics 4',
      priority: 'high',
      completed: false
    },
    {
      id: 'google-search-console',
      category: 'Analytics & Tracking',
      title: 'Connect Google Search Console',
      description: 'Verify and set up Google Search Console',
      priority: 'high',
      completed: false
    },
    {
      id: 'schema-markup',
      category: 'Structured Data',
      title: 'Implement Schema Markup',
      description: 'Add structured data for rich snippets',
      priority: 'medium',
      completed: false
    },
    {
      id: 'local-seo',
      category: 'Local SEO',
      title: 'Optimize for Local Search',
      description: 'Set up Google My Business and local citations',
      priority: 'medium',
      completed: false
    },
    {
      id: 'content-quality',
      category: 'Content Marketing',
      title: 'Create High-Quality Content',
      description: 'Publish original, valuable content regularly',
      priority: 'high',
      completed: false
    },
    {
      id: 'keyword-research',
      category: 'Content Marketing',
      title: 'Conduct Keyword Research',
      description: 'Identify and target relevant keywords',
      priority: 'high',
      completed: false
    },
    {
      id: 'backlink-strategy',
      category: 'Link Building',
      title: 'Develop Backlink Strategy',
      description: 'Create plan for earning quality backlinks',
      priority: 'medium',
      completed: false
    },
    {
      id: 'social-media',
      category: 'Social Media',
      title: 'Optimize Social Media Profiles',
      description: 'Complete and optimize social media profiles',
      priority: 'low',
      completed: false
    }
  ])

  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all')
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState('')

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const filteredItems = items.filter(item => 
    filter === 'all' || item.priority === filter
  )

  const completedCount = items.filter(item => item.completed).length
  const totalCount = items.length
  const completionPercentage = Math.round((completedCount / totalCount) * 100)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'On-Page SEO': 'bg-blue-100 text-blue-800',
      'Technical SEO': 'bg-green-100 text-green-800',
      'Analytics & Tracking': 'bg-purple-100 text-purple-800',
      'Structured Data': 'bg-orange-100 text-orange-800',
      'Local SEO': 'bg-pink-100 text-pink-800',
      'Content Marketing': 'bg-indigo-100 text-indigo-800',
      'Link Building': 'bg-red-100 text-red-800',
      'Social Media': 'bg-gray-100 text-gray-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          SEO Checklist
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Complete this comprehensive SEO checklist to optimize your website
        </p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div 
            className="bg-blue-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          {completedCount} of {totalCount} tasks completed ({completionPercentage}%)
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            filter === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All ({totalCount})
        </button>
        <button
          onClick={() => setFilter('high')}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            filter === 'high' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          High Priority ({items.filter(i => i.priority === 'high').length})
        </button>
        <button
          onClick={() => setFilter('medium')}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            filter === 'medium' 
              ? 'bg-yellow-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Medium Priority ({items.filter(i => i.priority === 'medium').length})
        </button>
        <button
          onClick={() => setFilter('low')}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            filter === 'low' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Low Priority ({items.filter(i => i.priority === 'low').length})
        </button>
      </div>

      {/* Checklist Items */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className={`border rounded-lg p-4 transition-all duration-200 ${
              item.completed 
                ? 'bg-green-50 border-green-200' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start space-x-4">
              <button
                onClick={() => toggleItem(item.id)}
                className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center ${
                  item.completed
                    ? 'bg-green-600 border-green-600 text-white'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {item.completed && (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className={`font-medium ${
                    item.completed ? 'text-green-800 line-through' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(item.priority)}`}>
                    {item.priority.toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
                <p className={`text-sm ${
                  item.completed ? 'text-green-700' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Email Form */}
      {completionPercentage >= 50 && !showEmailForm && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowEmailForm(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
          >
            Get SEO Optimization Guide
          </button>
        </div>
      )}

      {showEmailForm && (
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Get Your SEO Optimization Guide
          </h3>
          <p className="text-gray-600 mb-4">
            Receive a detailed SEO optimization guide with step-by-step instructions for each checklist item.
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={() => {
                // Handle email submission
                alert('Thank you! Your SEO optimization guide will be sent to your email.')
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Get Guide
            </button>
          </div>
        </div>
      )}

      {/* Reset Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            setItems(items.map(item => ({ ...item, completed: false })))
            setShowEmailForm(false)
            setEmail('')
          }}
          className="text-gray-600 hover:text-gray-700 font-medium"
        >
          Reset Checklist
        </button>
      </div>
    </div>
  )
}
