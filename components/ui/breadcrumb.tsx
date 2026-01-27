import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

interface GenerateBreadcrumbsOptions {
  title?: string
}

/**
 * Generate breadcrumbs for a page based on its path
 * @param path - The path string (e.g., '/about' or 'about'), or a type hint ('page', 'service')
 * @param options - Optional configuration including custom title for the last segment
 * @returns Array of breadcrumb items with label and href
 */
export function generateBreadcrumbs(
  path: string,
  options?: GenerateBreadcrumbsOptions
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ]
  
  // Handle special case: 'page' type hint with title option
  // This is a legacy pattern used by some pages (e.g., generateBreadcrumbs('page', { title: 'About' }))
  if (path === 'page' && options?.title) {
    // Infer the actual path from the title
    const inferredPath = options.title.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')
    breadcrumbs.push({
      label: options.title,
      href: `/${inferredPath}`
    })
    return breadcrumbs
  }
  
  // Normalize path: remove leading slash if present, ensure it starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const segments = normalizedPath.split('/').filter(Boolean)
  
  let currentPath = ''
  
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    currentPath += `/${segment}`
    
    // Format segment name
    let label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    // Special cases for common segments
    if (segment === 'seo') label = 'SEO'
    if (segment === 'ui-ux-design') label = 'UI/UX Design'
    if (segment === 'ai-seo') label = 'AI SEO'
    if (segment === 'local-seo') label = 'Local SEO'
    
    // Use custom title for the last segment if provided
    if (i === segments.length - 1 && options?.title) {
      label = options.title
    }
    
    breadcrumbs.push({
      label,
      href: currentPath
    })
  }
  
  return breadcrumbs
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex items-center text-sm", className)}
    >
      <ol className="flex items-center flex-wrap gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          
          return (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight 
                  className="h-4 w-4 text-gray-400 mx-1" 
                  aria-hidden="true" 
                />
              )}
              {isLast ? (
                <span 
                  className="text-gray-600 font-medium" 
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
