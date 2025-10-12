/**
 * Schema Markup Component
 * 
 * Reusable component for adding structured data to pages
 */

import React from 'react'

interface SchemaMarkupProps {
  schema: object | object[]
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  const schemaString = JSON.stringify(schema, null, 0)
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaString }}
    />
  )
}

// Specific schema components for common use cases

interface ServiceSchemaProps {
  serviceName: string
  description: string
  url: string
  city?: string
  rating?: number
  reviewCount?: number
}

export function ServiceSchema({
  serviceName,
  description,
  url,
  city,
  rating = 4.9,
  reviewCount = 127
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": "Web Vello",
      "url": "https://webvello.com"
    },
    "areaServed": city ? {
      "@type": "City",
      "name": city
    } : {
      "@type": "Country",
      "name": "United States"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.toString(),
      "reviewCount": reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  }
  
  return <SchemaMarkup schema={schema} />
}

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified: string
  author?: string
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = "Web Vello Team"
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Web Vello",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webvello.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }
  
  return <SchemaMarkup schema={schema} />
}

interface BreadcrumbSchemaProps {
  breadcrumbs: Array<{ name: string; url: string }>
}

export function BreadcrumbSchema({ breadcrumbs }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }
  
  return <SchemaMarkup schema={schema} />
}

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
  
  return <SchemaMarkup schema={schema} />
}

interface LocalBusinessSchemaProps {
  name: string
  url: string
  city: string
  state: string
  phone: string
  rating?: number
  reviewCount?: number
}

export function LocalBusinessSchema({
  name,
  url,
  city,
  state,
  phone,
  rating = 4.9,
  reviewCount = 127
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": name,
    "url": url,
    "telephone": phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": city
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.toString(),
      "reviewCount": reviewCount.toString()
    }
  }
  
  return <SchemaMarkup schema={schema} />
}

interface HowToSchemaProps {
  name: string
  description: string
  steps: Array<{ name: string; text: string }>
  totalTime?: string
}

export function HowToSchema({
  name,
  description,
  steps,
  totalTime = "P7D"
}: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "totalTime": totalTime,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  }
  
  return <SchemaMarkup schema={schema} />
}

