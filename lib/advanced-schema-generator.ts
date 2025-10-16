// Advanced Schema Markup Generator for Enhanced SEO
export interface SchemaConfig {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'Article' | 'BreadcrumbList' | 'FAQPage' | 'HowTo' | 'WebPage' | 'Review' | 'Product' | 'Event' | 'Course' | 'SoftwareApplication' | 'VideoObject' | 'ImageObject'
  data: any
}

// Enhanced Organization Schema
export function generateOrganizationSchema(data: {
  name: string
  description: string
  url: string
  logo: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  contactPoint?: {
    telephone: string
    contactType: string
    areaServed: string
  }
  sameAs?: string[]
  foundingDate?: string
  numberOfEmployees?: string
  industry?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    "logo": {
      "@type": "ImageObject",
      "url": data.logo,
      "width": 400,
      "height": 400
    },
    ...(data.address && {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": data.address.streetAddress,
        "addressLocality": data.address.addressLocality,
        "addressRegion": data.address.addressRegion,
        "postalCode": data.address.postalCode,
        "addressCountry": data.address.addressCountry
      }
    }),
    ...(data.contactPoint && {
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": data.contactPoint.telephone,
        "contactType": data.contactPoint.contactType,
        "areaServed": data.contactPoint.areaServed
      }
    }),
    ...(data.sameAs && { "sameAs": data.sameAs }),
    ...(data.foundingDate && { "foundingDate": data.foundingDate }),
    ...(data.numberOfEmployees && { "numberOfEmployees": data.numberOfEmployees }),
    ...(data.industry && { "industry": data.industry })
  }
}

// Enhanced Local Business Schema
export function generateLocalBusinessSchema(data: {
  name: string
  description: string
  url: string
  telephone: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  openingHours?: string[]
  priceRange?: string
  paymentAccepted?: string[]
  currenciesAccepted?: string[]
  areaServed?: string[]
  serviceArea?: {
    "@type": "GeoCircle"
    geoMidpoint: {
      "@type": "GeoCoordinates"
      latitude: number
      longitude: number
    }
    geoRadius: number
  }
  hasOfferCatalog?: {
    "@type": "OfferCatalog"
    name: string
    itemListElement: Array<{
      "@type": "Offer"
      itemOffered: {
        "@type": "Service"
        name: string
        description: string
      }
    }>
  }
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    "telephone": data.telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address.streetAddress,
      "addressLocality": data.address.addressLocality,
      "addressRegion": data.address.addressRegion,
      "postalCode": data.address.postalCode,
      "addressCountry": data.address.addressCountry
    },
    ...(data.geo && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": data.geo.latitude,
        "longitude": data.geo.longitude
      }
    }),
    ...(data.openingHours && { "openingHours": data.openingHours }),
    ...(data.priceRange && { "priceRange": data.priceRange }),
    ...(data.paymentAccepted && { "paymentAccepted": data.paymentAccepted }),
    ...(data.currenciesAccepted && { "currenciesAccepted": data.currenciesAccepted }),
    ...(data.areaServed && { "areaServed": data.areaServed }),
    ...(data.serviceArea && { "serviceArea": data.serviceArea }),
    ...(data.hasOfferCatalog && { "hasOfferCatalog": data.hasOfferCatalog })
  }
}

// Enhanced Service Schema
export function generateServiceSchema(data: {
  name: string
  description: string
  provider: {
    "@type": "Organization"
    name: string
    url: string
  }
  serviceType: string
  areaServed: string | string[]
  offers?: {
    "@type": "Offer"
    price?: string
    priceCurrency?: string
    availability?: string
    validFrom?: string
    validThrough?: string
  }
  category?: string
  audience?: {
    "@type": "Audience"
    audienceType: string
  }
  providerMobility?: string
  availableChannel?: {
    "@type": "ServiceChannel"
    serviceUrl: string
    serviceSmsNumber?: string
    servicePhone?: string
  }
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.name,
    "description": data.description,
    "provider": data.provider,
    "serviceType": data.serviceType,
    "areaServed": data.areaServed,
    ...(data.offers && { "offers": data.offers }),
    ...(data.category && { "category": data.category }),
    ...(data.audience && { "audience": data.audience }),
    ...(data.providerMobility && { "providerMobility": data.providerMobility }),
    ...(data.availableChannel && { "availableChannel": data.availableChannel })
  }
}

// Enhanced Article Schema
export function generateArticleSchema(data: {
  headline: string
  description: string
  image: string | string[]
  author: {
    "@type": "Person"
    name: string
    url?: string
  }
  publisher: {
    "@type": "Organization"
    name: string
    logo: {
      "@type": "ImageObject"
      url: string
    }
  }
  datePublished: string
  dateModified?: string
  mainEntityOfPage: {
    "@type": "WebPage"
    "@id": string
  }
  articleSection?: string
  keywords?: string[]
  wordCount?: number
  timeRequired?: string
  inLanguage?: string
  isAccessibleForFree?: boolean
  genre?: string
  about?: Array<{
    "@type": "Thing"
    name: string
  }>
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.headline,
    "description": data.description,
    "image": Array.isArray(data.image) ? data.image : [data.image],
    "author": data.author,
    "publisher": data.publisher,
    "datePublished": data.datePublished,
    ...(data.dateModified && { "dateModified": data.dateModified }),
    "mainEntityOfPage": data.mainEntityOfPage,
    ...(data.articleSection && { "articleSection": data.articleSection }),
    ...(data.keywords && { "keywords": data.keywords.join(", ") }),
    ...(data.wordCount && { "wordCount": data.wordCount }),
    ...(data.timeRequired && { "timeRequired": data.timeRequired }),
    ...(data.inLanguage && { "inLanguage": data.inLanguage }),
    ...(data.isAccessibleForFree !== undefined && { "isAccessibleForFree": data.isAccessibleForFree }),
    ...(data.genre && { "genre": data.genre }),
    ...(data.about && { "about": data.about })
  }
}

// Enhanced FAQ Schema
export function generateFAQSchema(data: {
  mainEntity: Array<{
    "@type": "Question"
    name: string
    acceptedAnswer: {
      "@type": "Answer"
      text: string
    }
  }>
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.mainEntity
  }
}

// Enhanced How-To Schema
export function generateHowToSchema(data: {
  name: string
  description: string
  image?: string | string[]
  estimatedCost?: {
    "@type": "MonetaryAmount"
    currency: string
    value: string
  }
  totalTime?: string
  supply?: Array<{
    "@type": "HowToSupply"
    name: string
  }>
  tool?: Array<{
    "@type": "HowToTool"
    name: string
  }>
  step: Array<{
    "@type": "HowToStep"
    name: string
    text: string
    image?: string
    url?: string
  }>
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": data.name,
    "description": data.description,
    ...(data.image && { "image": Array.isArray(data.image) ? data.image : [data.image] }),
    ...(data.estimatedCost && { "estimatedCost": data.estimatedCost }),
    ...(data.totalTime && { "totalTime": data.totalTime }),
    ...(data.supply && { "supply": data.supply }),
    ...(data.tool && { "tool": data.tool }),
    "step": data.step
  }
}

// Enhanced Review Schema
export function generateReviewSchema(data: {
  itemReviewed: {
    "@type": "Service" | "Product" | "Organization"
    name: string
    description?: string
  }
  reviewRating: {
    "@type": "Rating"
    ratingValue: number
    bestRating?: number
    worstRating?: number
  }
  author: {
    "@type": "Person"
    name: string
  }
  reviewBody: string
  datePublished: string
  publisher?: {
    "@type": "Organization"
    name: string
  }
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": data.itemReviewed,
    "reviewRating": data.reviewRating,
    "author": data.author,
    "reviewBody": data.reviewBody,
    "datePublished": data.datePublished,
    ...(data.publisher && { "publisher": data.publisher })
  }
}

// Enhanced Product Schema
export function generateProductSchema(data: {
  name: string
  description: string
  image: string | string[]
  brand?: {
    "@type": "Brand"
    name: string
  }
  offers?: {
    "@type": "Offer"
    price: string
    priceCurrency: string
    availability: string
    seller: {
      "@type": "Organization"
      name: string
    }
  }
  aggregateRating?: {
    "@type": "AggregateRating"
    ratingValue: number
    reviewCount: number
  }
  review?: Array<{
    "@type": "Review"
    reviewRating: {
      "@type": "Rating"
      ratingValue: number
    }
    author: {
      "@type": "Person"
      name: string
    }
    reviewBody: string
  }>
  category?: string
  sku?: string
  gtin?: string
  mpn?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": data.name,
    "description": data.description,
    "image": Array.isArray(data.image) ? data.image : [data.image],
    ...(data.brand && { "brand": data.brand }),
    ...(data.offers && { "offers": data.offers }),
    ...(data.aggregateRating && { "aggregateRating": data.aggregateRating }),
    ...(data.review && { "review": data.review }),
    ...(data.category && { "category": data.category }),
    ...(data.sku && { "sku": data.sku }),
    ...(data.gtin && { "gtin": data.gtin }),
    ...(data.mpn && { "mpn": data.mpn })
  }
}

// Enhanced Event Schema
export function generateEventSchema(data: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: {
    "@type": "Place"
    name: string
    address?: {
      "@type": "PostalAddress"
      streetAddress: string
      addressLocality: string
      addressRegion: string
      postalCode: string
      addressCountry: string
    }
  }
  organizer?: {
    "@type": "Organization"
    name: string
    url?: string
  }
  offers?: {
    "@type": "Offer"
    price: string
    priceCurrency: string
    availability: string
    url?: string
  }
  eventStatus?: string
  eventAttendanceMode?: string
  maximumAttendeeCapacity?: number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": data.name,
    "description": data.description,
    "startDate": data.startDate,
    ...(data.endDate && { "endDate": data.endDate }),
    "location": data.location,
    ...(data.organizer && { "organizer": data.organizer }),
    ...(data.offers && { "offers": data.offers }),
    ...(data.eventStatus && { "eventStatus": data.eventStatus }),
    ...(data.eventAttendanceMode && { "eventAttendanceMode": data.eventAttendanceMode }),
    ...(data.maximumAttendeeCapacity && { "maximumAttendeeCapacity": data.maximumAttendeeCapacity })
  }
}

// Enhanced Course Schema
export function generateCourseSchema(data: {
  name: string
  description: string
  provider: {
    "@type": "Organization"
    name: string
    url?: string
  }
  courseCode?: string
  educationalLevel?: string
  teaches?: string[]
  coursePrerequisites?: string[]
  syllabusSections?: Array<{
    "@type": "Syllabus"
    name: string
    description: string
  }>
  hasCourseInstance?: {
    "@type": "CourseInstance"
    courseMode: string
    instructor: {
      "@type": "Person"
      name: string
    }
  }
  offers?: {
    "@type": "Offer"
    price: string
    priceCurrency: string
    availability: string
  }
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": data.name,
    "description": data.description,
    "provider": data.provider,
    ...(data.courseCode && { "courseCode": data.courseCode }),
    ...(data.educationalLevel && { "educationalLevel": data.educationalLevel }),
    ...(data.teaches && { "teaches": data.teaches }),
    ...(data.coursePrerequisites && { "coursePrerequisites": data.coursePrerequisites }),
    ...(data.syllabusSections && { "syllabusSections": data.syllabusSections }),
    ...(data.hasCourseInstance && { "hasCourseInstance": data.hasCourseInstance }),
    ...(data.offers && { "offers": data.offers })
  }
}

// Enhanced Software Application Schema
export function generateSoftwareApplicationSchema(data: {
  name: string
  description: string
  applicationCategory: string
  operatingSystem: string | string[]
  offers?: {
    "@type": "Offer"
    price: string
    priceCurrency: string
    availability: string
  }
  aggregateRating?: {
    "@type": "AggregateRating"
    ratingValue: number
    reviewCount: number
  }
  screenshot?: string | string[]
  softwareVersion?: string
  releaseNotes?: string
  downloadUrl?: string
  installUrl?: string
  fileSize?: string
  memoryRequirements?: string
  storageRequirements?: string
  processorRequirements?: string
  permissions?: string[]
  featureList?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": data.name,
    "description": data.description,
    "applicationCategory": data.applicationCategory,
    "operatingSystem": data.operatingSystem,
    ...(data.offers && { "offers": data.offers }),
    ...(data.aggregateRating && { "aggregateRating": data.aggregateRating }),
    ...(data.screenshot && { "screenshot": Array.isArray(data.screenshot) ? data.screenshot : [data.screenshot] }),
    ...(data.softwareVersion && { "softwareVersion": data.softwareVersion }),
    ...(data.releaseNotes && { "releaseNotes": data.releaseNotes }),
    ...(data.downloadUrl && { "downloadUrl": data.downloadUrl }),
    ...(data.installUrl && { "installUrl": data.installUrl }),
    ...(data.fileSize && { "fileSize": data.fileSize }),
    ...(data.memoryRequirements && { "memoryRequirements": data.memoryRequirements }),
    ...(data.storageRequirements && { "storageRequirements": data.storageRequirements }),
    ...(data.processorRequirements && { "processorRequirements": data.processorRequirements }),
    ...(data.permissions && { "permissions": data.permissions }),
    ...(data.featureList && { "featureList": data.featureList })
  }
}

// Enhanced Video Object Schema
export function generateVideoObjectSchema(data: {
  name: string
  description: string
  thumbnailUrl: string | string[]
  uploadDate: string
  duration?: string
  contentUrl?: string
  embedUrl?: string
  publisher?: {
    "@type": "Organization"
    name: string
    logo: {
      "@type": "ImageObject"
      url: string
    }
  }
  creator?: {
    "@type": "Person" | "Organization"
    name: string
  }
  keywords?: string[]
  genre?: string
  inLanguage?: string
  isAccessibleForFree?: boolean
  interactionStatistic?: {
    "@type": "InteractionCounter"
    interactionType: string
    userInteractionCount: number
  }
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": data.name,
    "description": data.description,
    "thumbnailUrl": Array.isArray(data.thumbnailUrl) ? data.thumbnailUrl : [data.thumbnailUrl],
    "uploadDate": data.uploadDate,
    ...(data.duration && { "duration": data.duration }),
    ...(data.contentUrl && { "contentUrl": data.contentUrl }),
    ...(data.embedUrl && { "embedUrl": data.embedUrl }),
    ...(data.publisher && { "publisher": data.publisher }),
    ...(data.creator && { "creator": data.creator }),
    ...(data.keywords && { "keywords": data.keywords.join(", ") }),
    ...(data.genre && { "genre": data.genre }),
    ...(data.inLanguage && { "inLanguage": data.inLanguage }),
    ...(data.isAccessibleForFree !== undefined && { "isAccessibleForFree": data.isAccessibleForFree }),
    ...(data.interactionStatistic && { "interactionStatistic": data.interactionStatistic })
  }
}

// Enhanced Image Object Schema
export function generateImageObjectSchema(data: {
  contentUrl: string
  name?: string
  description?: string
  caption?: string
  creator?: {
    "@type": "Person" | "Organization"
    name: string
  }
  copyrightHolder?: {
    "@type": "Person" | "Organization"
    name: string
  }
  copyrightYear?: number
  license?: string
  encodingFormat?: string
  width?: number
  height?: number
  keywords?: string[]
  dateCreated?: string
  dateModified?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": data.contentUrl,
    ...(data.name && { "name": data.name }),
    ...(data.description && { "description": data.description }),
    ...(data.caption && { "caption": data.caption }),
    ...(data.creator && { "creator": data.creator }),
    ...(data.copyrightHolder && { "copyrightHolder": data.copyrightHolder }),
    ...(data.copyrightYear && { "copyrightYear": data.copyrightYear }),
    ...(data.license && { "license": data.license }),
    ...(data.encodingFormat && { "encodingFormat": data.encodingFormat }),
    ...(data.width && { "width": data.width }),
    ...(data.height && { "height": data.height }),
    ...(data.keywords && { "keywords": data.keywords.join(", ") }),
    ...(data.dateCreated && { "dateCreated": data.dateCreated }),
    ...(data.dateModified && { "dateModified": data.dateModified })
  }
}

// Schema validation utility
export function validateSchema(schema: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!schema["@context"] || schema["@context"] !== "https://schema.org") {
    errors.push("Missing or invalid @context")
  }
  
  if (!schema["@type"]) {
    errors.push("Missing @type")
  }
  
  if (!schema.name && !schema.headline) {
    errors.push("Missing required name or headline")
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// Generate multiple schemas for a page
export function generatePageSchemas(schemas: SchemaConfig[]): string {
  return schemas.map(schema => JSON.stringify(schema.data, null, 2)).join('\n\n')
}
