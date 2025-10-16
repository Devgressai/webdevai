'use client'

import { useEffect } from 'react'

interface EnhancedSchemaMarkupProps {
  schemas: Array<{
    type: string
    data: any
  }>
  priority?: boolean
}

export function EnhancedSchemaMarkup({ schemas, priority = false }: EnhancedSchemaMarkupProps) {
  useEffect(() => {
    // Remove existing schema markup
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]')
    existingSchemas.forEach(schema => schema.remove())

    // Add new schema markup
    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = `schema-${schema.type}-${index}`
      script.textContent = JSON.stringify(schema.data, null, 2)
      
      if (priority) {
        script.setAttribute('data-priority', 'true')
      }
      
      document.head.appendChild(script)
    })

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`schema-${schemas[index].type}-${index}`)
        if (script) {
          script.remove()
        }
      })
    }
  }, [schemas, priority])

  return null
}

// Breadcrumb Schema Component
interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return <EnhancedSchemaMarkup schemas={[{ type: 'BreadcrumbList', data: breadcrumbSchema }]} />
}

// FAQ Schema Component
interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const faqSchema = {
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

  return <EnhancedSchemaMarkup schemas={[{ type: 'FAQPage', data: faqSchema }]} />
}

// Review Schema Component
interface ReviewData {
  itemName: string
  itemDescription: string
  rating: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}

interface ReviewSchemaProps {
  reviews: Array<{
    author: string
    rating: number
    text: string
    date: string
  }>
  itemData: ReviewData
}

export function ReviewSchema({ reviews, itemData }: ReviewSchemaProps) {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": itemData.itemName,
    "description": itemData.itemDescription,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": itemData.rating,
      "reviewCount": itemData.reviewCount,
      ...(itemData.bestRating && { "bestRating": itemData.bestRating }),
      ...(itemData.worstRating && { "worstRating": itemData.worstRating })
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.text,
      "datePublished": review.date
    }))
  }

  return <EnhancedSchemaMarkup schemas={[{ type: 'Product', data: reviewSchema }]} />
}

// How-To Schema Component
interface HowToStep {
  name: string
  text: string
  image?: string
  url?: string
}

interface HowToSchemaProps {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string
  estimatedCost?: {
    currency: string
    value: string
  }
  supply?: string[]
  tool?: string[]
}

export function HowToSchema({ 
  name, 
  description, 
  steps, 
  totalTime, 
  estimatedCost, 
  supply, 
  tool 
}: HowToSchemaProps) {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map(step => ({
      "@type": "HowToStep",
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image }),
      ...(step.url && { "url": step.url })
    })),
    ...(totalTime && { "totalTime": totalTime }),
    ...(estimatedCost && {
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": estimatedCost.currency,
        "value": estimatedCost.value
      }
    }),
    ...(supply && {
      "supply": supply.map(item => ({
        "@type": "HowToSupply",
        "name": item
      }))
    }),
    ...(tool && {
      "tool": tool.map(item => ({
        "@type": "HowToTool",
        "name": item
      }))
    })
  }

  return <EnhancedSchemaMarkup schemas={[{ type: 'HowTo', data: howToSchema }]} />
}

// Event Schema Component
interface EventData {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: {
    name: string
    address?: {
      streetAddress: string
      addressLocality: string
      addressRegion: string
      postalCode: string
      addressCountry: string
    }
  }
  organizer?: {
    name: string
    url?: string
  }
  offers?: {
    price: string
    priceCurrency: string
    availability: string
    url?: string
  }
}

interface EventSchemaProps {
  event: EventData
}

export function EventSchema({ event }: EventSchemaProps) {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    ...(event.endDate && { "endDate": event.endDate }),
    "location": {
      "@type": "Place",
      "name": event.location.name,
      ...(event.location.address && {
        "address": {
          "@type": "PostalAddress",
          "streetAddress": event.location.address.streetAddress,
          "addressLocality": event.location.address.addressLocality,
          "addressRegion": event.location.address.addressRegion,
          "postalCode": event.location.address.postalCode,
          "addressCountry": event.location.address.addressCountry
        }
      })
    },
    ...(event.organizer && {
      "organizer": {
        "@type": "Organization",
        "name": event.organizer.name,
        ...(event.organizer.url && { "url": event.organizer.url })
      }
    }),
    ...(event.offers && {
      "offers": {
        "@type": "Offer",
        "price": event.offers.price,
        "priceCurrency": event.offers.priceCurrency,
        "availability": event.offers.availability,
        ...(event.offers.url && { "url": event.offers.url })
      }
    })
  }

  return <EnhancedSchemaMarkup schemas={[{ type: 'Event', data: eventSchema }]} />
}

// Course Schema Component
interface CourseData {
  name: string
  description: string
  provider: {
    name: string
    url?: string
  }
  courseCode?: string
  educationalLevel?: string
  teaches?: string[]
  offers?: {
    price: string
    priceCurrency: string
    availability: string
  }
}

interface CourseSchemaProps {
  course: CourseData
}

export function CourseSchema({ course }: CourseSchemaProps) {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": course.provider.name,
      ...(course.provider.url && { "url": course.provider.url })
    },
    ...(course.courseCode && { "courseCode": course.courseCode }),
    ...(course.educationalLevel && { "educationalLevel": course.educationalLevel }),
    ...(course.teaches && { "teaches": course.teaches }),
    ...(course.offers && {
      "offers": {
        "@type": "Offer",
        "price": course.offers.price,
        "priceCurrency": course.offers.priceCurrency,
        "availability": course.offers.availability
      }
    })
  }

  return <EnhancedSchemaMarkup schemas={[{ type: 'Course', data: courseSchema }]} />
}

// Software Application Schema Component
interface SoftwareData {
  name: string
  description: string
  applicationCategory: string
  operatingSystem: string | string[]
  offers?: {
    price: string
    priceCurrency: string
    availability: string
  }
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
  screenshot?: string | string[]
  softwareVersion?: string
  downloadUrl?: string
  installUrl?: string
}

interface SoftwareSchemaProps {
  software: SoftwareData
}

export function SoftwareSchema({ software }: SoftwareSchemaProps) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": software.name,
    "description": software.description,
    "applicationCategory": software.applicationCategory,
    "operatingSystem": software.operatingSystem,
    ...(software.offers && {
      "offers": {
        "@type": "Offer",
        "price": software.offers.price,
        "priceCurrency": software.offers.priceCurrency,
        "availability": software.offers.availability
      }
    }),
    ...(software.aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": software.aggregateRating.ratingValue,
        "reviewCount": software.aggregateRating.reviewCount
      }
    }),
    ...(software.screenshot && {
      "screenshot": Array.isArray(software.screenshot) ? software.screenshot : [software.screenshot]
    }),
    ...(software.softwareVersion && { "softwareVersion": software.softwareVersion }),
    ...(software.downloadUrl && { "downloadUrl": software.downloadUrl }),
    ...(software.installUrl && { "installUrl": software.installUrl })
  }

  return <EnhancedSchemaMarkup schemas={[{ type: 'SoftwareApplication', data: softwareSchema }]} />
}

// Video Object Schema Component
interface VideoData {
  name: string
  description: string
  thumbnailUrl: string | string[]
  uploadDate: string
  duration?: string
  contentUrl?: string
  embedUrl?: string
  publisher?: {
    name: string
    logo: string
  }
  creator?: {
    name: string
    type: 'Person' | 'Organization'
  }
  keywords?: string[]
}

interface VideoSchemaProps {
  video: VideoData
}

export function VideoSchema({ video }: VideoSchemaProps) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": Array.isArray(video.thumbnailUrl) ? video.thumbnailUrl : [video.thumbnailUrl],
    "uploadDate": video.uploadDate,
    ...(video.duration && { "duration": video.duration }),
    ...(video.contentUrl && { "contentUrl": video.contentUrl }),
    ...(video.embedUrl && { "embedUrl": video.embedUrl }),
    ...(video.publisher && {
      "publisher": {
        "@type": "Organization",
        "name": video.publisher.name,
        "logo": {
          "@type": "ImageObject",
          "url": video.publisher.logo
        }
      }
    }),
    ...(video.creator && {
      "creator": {
        "@type": video.creator.type,
        "name": video.creator.name
      }
    }),
    ...(video.keywords && { "keywords": video.keywords.join(", ") })
  }

  return <EnhancedSchemaMarkup schemas={[{ type: 'VideoObject', data: videoSchema }]} />
}
