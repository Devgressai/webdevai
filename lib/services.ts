export interface Service {
  slug: string
  name: string
  category: string
}

export const services: Record<string, Service> = {
  'web-development': { slug: 'web-development', name: 'Web Development', category: 'Technical Solutions' },
  'seo': { slug: 'seo', name: 'SEO Services', category: 'Marketing Solutions' },
  'website-design': { slug: 'website-design', name: 'Website Design', category: 'Creative Solutions' },
}

export function getService(slug: string): Service | undefined {
  return services[slug]
}

export const serviceSlugs: string[] = Object.keys(services)


