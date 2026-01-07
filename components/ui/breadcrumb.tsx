import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // Build JSON-LD BreadcrumbList
  const itemList = items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.label,
    item: item.href ? `https://www.webvello.com${item.href}` : undefined,
  }))

  return (
    <nav aria-label="Breadcrumb" className={`py-4 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: itemList,
          }),
        }}
      />
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {/* Home Icon */}
        <li>
          <Link 
            href="/" 
            className="flex items-center hover:text-primary-600 transition-colors"
            aria-label="Go to homepage"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {/* Breadcrumb Items */}
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-500 mx-2" />
            {item.current ? (
              <span 
                className="text-gray-900 font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : item.href ? (
              <Link 
                href={item.href}
                className="hover:text-primary-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-600">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Helper function to generate breadcrumbs for common page types
export function generateBreadcrumbs(
  type: 'service' | 'case-study' | 'industry' | 'page',
  data: { title: string; slug?: string }
): BreadcrumbItem[] {
  switch (type) {
    case 'service':
      return [
        { label: 'Services', href: '/services' },
        { label: data.title, current: true }
      ]
    case 'case-study':
      return [
        { label: 'Case Studies', href: '/case-studies' },
        { label: data.title, current: true }
      ]
    case 'industry':
      return [
        { label: 'Industries', href: '/industries' },
        { label: data.title, current: true }
      ]
    case 'page':
      return [
        { label: data.title, current: true }
      ]
    default:
      return []
  }
}

