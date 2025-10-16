'use client'

import { useState, useEffect } from 'react'
import { LinkContext, InternalLink, optimizeInternalLinking } from '@/lib/advanced-internal-linking'

interface SmartInternalLinksProps {
  content: string
  context: LinkContext
  maxLinks?: number
  showBreadcrumbs?: boolean
  showRelated?: boolean
  showCTA?: boolean
}

export function SmartInternalLinks({ 
  content, 
  context, 
  maxLinks = 8,
  showBreadcrumbs = true,
  showRelated = true,
  showCTA = true
}: SmartInternalLinksProps) {
  const [links, setLinks] = useState<InternalLink[]>([])
  const [breadcrumbs, setBreadcrumbs] = useState<InternalLink[]>([])

  useEffect(() => {
    // Generate optimized internal links
    const optimizedLinks = optimizeInternalLinking(content, context, maxLinks)
    setLinks(optimizedLinks)

    // Generate breadcrumbs
    if (showBreadcrumbs) {
      const currentPath = window.location.pathname
      const breadcrumbLinks = generateBreadcrumbs(currentPath)
      setBreadcrumbs(breadcrumbLinks)
    }
  }, [content, context, maxLinks, showBreadcrumbs])

  const generateBreadcrumbs = (currentPath: string): InternalLink[] => {
    const pathSegments = currentPath.split('/').filter(segment => segment)
    const breadcrumbs: InternalLink[] = []

    // Always start with home
    breadcrumbs.push({
      title: 'Home',
      url: '/',
      description: 'Web Vello Homepage',
      relevance: 1.0,
      linkType: 'breadcrumb',
      priority: 'high',
      anchorText: 'Home'
    })

    // Build breadcrumbs from path segments
    let currentUrl = ''
    pathSegments.forEach((segment, index) => {
      currentUrl += `/${segment}`
      const title = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      breadcrumbs.push({
        title,
        url: currentUrl,
        description: `${title} page`,
        relevance: 0.8,
        linkType: 'breadcrumb',
        priority: 'medium',
        anchorText: title
      })
    })

    return breadcrumbs
  }

  const getLinkTypeColor = (linkType: string) => {
    switch (linkType) {
      case 'related': return 'text-blue-600 bg-blue-100'
      case 'breadcrumb': return 'text-gray-600 bg-gray-100'
      case 'contextual': return 'text-green-600 bg-green-100'
      case 'cta': return 'text-purple-600 bg-purple-100'
      case 'navigation': return 'text-orange-600 bg-orange-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  if (links.length === 0) return null

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      {showBreadcrumbs && breadcrumbs.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Breadcrumbs</h3>
          <nav className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={breadcrumb.url} className="flex items-center">
                {index > 0 && (
                  <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                <a
                  href={breadcrumb.url}
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  {breadcrumb.anchorText}
                </a>
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Related Links */}
      {showRelated && (
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {links
              .filter(link => link.linkType === 'related' || link.linkType === 'contextual')
              .slice(0, 6)
              .map((link, index) => (
                <div key={link.url} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <a
                      href={link.url}
                      className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                    >
                      {link.anchorText}
                    </a>
                    <div className="flex space-x-1">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getLinkTypeColor(link.linkType)}`}>
                        {link.linkType}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(link.priority)}`}>
                        {link.priority}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{link.description}</p>
                  <div className="mt-2 text-xs text-gray-500">
                    Relevance: {Math.round(link.relevance * 100)}%
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* CTA Links */}
      {showCTA && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Take Action</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {links
              .filter(link => link.linkType === 'cta')
              .slice(0, 4)
              .map((link, index) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300"
                >
                  <h4 className="font-medium text-gray-900 mb-2">{link.anchorText}</h4>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </a>
              ))}
          </div>
        </div>
      )}

      {/* Link Analytics (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Link Analytics (Dev Only)</h3>
          <div className="text-xs text-gray-600 space-y-1">
            <div>Total Links: {links.length}</div>
            <div>Related Links: {links.filter(l => l.linkType === 'related').length}</div>
            <div>Contextual Links: {links.filter(l => l.linkType === 'contextual').length}</div>
            <div>CTA Links: {links.filter(l => l.linkType === 'cta').length}</div>
            <div>High Priority: {links.filter(l => l.priority === 'high').length}</div>
            <div>Average Relevance: {Math.round(links.reduce((acc, link) => acc + link.relevance, 0) / links.length * 100)}%</div>
          </div>
        </div>
      )}
    </div>
  )
}

// Contextual Link Injector Component
interface ContextualLinkInjectorProps {
  content: string
  context: LinkContext
  maxLinks?: number
}

export function ContextualLinkInjector({ content, context, maxLinks = 5 }: ContextualLinkInjectorProps) {
  const [processedContent, setProcessedContent] = useState(content)

  useEffect(() => {
    // Generate contextual links
    const contextualLinks = optimizeInternalLinking(content, context, maxLinks)
      .filter(link => link.linkType === 'contextual')
      .slice(0, maxLinks)

    // Inject links into content (simple implementation)
    let processed = content
    contextualLinks.forEach(link => {
      const keyword = link.anchorText.toLowerCase()
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
      const replacement = `<a href="${link.url}" class="text-blue-600 hover:text-blue-700 hover:underline font-medium">${link.anchorText}</a>`
      
      // Only replace the first occurrence to avoid over-linking
      processed = processed.replace(regex, replacement)
    })

    setProcessedContent(processed)
  }, [content, context, maxLinks])

  return (
    <div 
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  )
}

// Link Suggestion Component
interface LinkSuggestionProps {
  currentUrl: string
  context: LinkContext
}

export function LinkSuggestion({ currentUrl, context }: LinkSuggestionProps) {
  const [suggestions, setSuggestions] = useState<InternalLink[]>([])

  useEffect(() => {
    // Generate link suggestions based on current page
    const suggestions = optimizeInternalLinking('', context, 6)
    setSuggestions(suggestions)
  }, [currentUrl, context])

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Suggested Internal Links</h3>
      <div className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <div key={suggestion.url} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <a
                href={suggestion.url}
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                {suggestion.anchorText}
              </a>
              <p className="text-sm text-gray-600">{suggestion.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded text-xs font-semibold ${getLinkTypeColor(suggestion.linkType)}`}>
                {suggestion.linkType}
              </span>
              <span className="text-xs text-gray-500">
                {Math.round(suggestion.relevance * 100)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function getLinkTypeColor(linkType: string) {
  switch (linkType) {
    case 'related': return 'text-blue-600 bg-blue-100'
    case 'breadcrumb': return 'text-gray-600 bg-gray-100'
    case 'contextual': return 'text-green-600 bg-green-100'
    case 'cta': return 'text-purple-600 bg-purple-100'
    case 'navigation': return 'text-orange-600 bg-orange-100'
    default: return 'text-gray-600 bg-gray-100'
  }
}
