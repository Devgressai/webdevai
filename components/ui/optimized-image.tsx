'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { OptimizedImage, ImageOptimizationConfig, createOptimizedImage, getOptimalFormat } from '@/lib/image-optimizer'

interface OptimizedImageProps {
  src: string
  alt: string
  config?: Partial<ImageOptimizationConfig>
  className?: string
  priority?: boolean
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedImageComponent({ 
  src, 
  alt, 
  config = {}, 
  className = '',
  priority = false,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [optimizedImage, setOptimizedImage] = useState<OptimizedImage | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [optimalFormat, setOptimalFormat] = useState<'webp' | 'avif' | 'jpeg'>('webp')

  useEffect(() => {
    const initializeImage = async () => {
      try {
        // Get optimal format based on browser support
        const format = await getOptimalFormat()
        setOptimalFormat(format)

        // Create optimized image configuration
        const imageConfig: ImageOptimizationConfig = {
          quality: 80,
          format: format,
          placeholder: 'blur',
          lazy: !priority,
          ...config
        }

        // Generate optimized image
        const optimized = createOptimizedImage(src, alt, imageConfig)
        setOptimizedImage(optimized)
      } catch (error) {
        console.error('Error initializing optimized image:', error)
        setHasError(true)
      }
    }

    initializeImage()
  }, [src, alt, config, priority])

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <svg className="w-8 h-8 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-sm text-gray-500">Failed to load image</p>
        </div>
      </div>
    )
  }

  if (!optimizedImage) {
    return (
      <div className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={optimizedImage.src}
        alt={optimizedImage.alt}
        width={optimizedImage.width}
        height={optimizedImage.height}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        placeholder={optimizedImage.placeholder ? 'blur' : 'empty'}
        blurDataURL={optimizedImage.placeholder}
        loading={optimizedImage.loading}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
        sizes={optimizedImage.sizes}
      />
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
            <p className="text-sm text-gray-500">Loading...</p>
          </div>
        </div>
      )}

      {/* Format indicator (development only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {optimalFormat.toUpperCase()}
        </div>
      )}
    </div>
  )
}

// Responsive Image Component
interface ResponsiveImageProps {
  src: string
  alt: string
  breakpoints?: { [key: string]: string }
  className?: string
  priority?: boolean
}

export function ResponsiveImage({ 
  src, 
  alt, 
  breakpoints = {
    '768': '100vw',
    '1200': '50vw',
    '1920': '33vw'
  },
  className = '',
  priority = false
}: ResponsiveImageProps) {
  const [optimizedImage, setOptimizedImage] = useState<OptimizedImage | null>(null)

  useEffect(() => {
    const initializeImage = async () => {
      const format = await getOptimalFormat()
      const config: ImageOptimizationConfig = {
        quality: 80,
        format: format,
        placeholder: 'blur',
        lazy: !priority
      }

      const optimized = createOptimizedImage(src, alt, config)
      setOptimizedImage(optimized)
    }

    initializeImage()
  }, [src, alt, priority])

  if (!optimizedImage) {
    return (
      <div className={`bg-gray-200 animate-pulse ${className}`}>
        <div className="w-full h-64 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
            <p className="text-sm text-gray-500">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <picture className={className}>
      {/* AVIF source */}
      <source
        srcSet={optimizedImage.srcSet.replace(/f=webp/g, 'f=avif')}
        sizes={optimizedImage.sizes}
        type="image/avif"
      />
      
      {/* WebP source */}
      <source
        srcSet={optimizedImage.srcSet}
        sizes={optimizedImage.sizes}
        type="image/webp"
      />
      
      {/* Fallback image */}
      <img
        src={optimizedImage.src.replace(/f=webp/g, 'f=jpeg')}
        alt={optimizedImage.alt}
        width={optimizedImage.width}
        height={optimizedImage.height}
        loading={optimizedImage.loading}
        className="w-full h-auto"
      />
    </picture>
  )
}

// Image Gallery Component
interface ImageGalleryProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
  className?: string
}

export function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <OptimizedImageComponent
              src={image.src}
              alt={image.alt}
              config={IMAGE_PRESETS.card}
              className="w-full h-48 object-cover rounded-lg"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 rounded-b-lg">
                <p className="text-sm">{image.caption}</p>
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selected image */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <OptimizedImageComponent
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              config={IMAGE_PRESETS.hero}
              className="max-w-full max-h-full object-contain"
            />
            {images[selectedImage].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                <p className="text-lg">{images[selectedImage].caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Import IMAGE_PRESETS from the image optimizer
import { IMAGE_PRESETS } from '@/lib/image-optimizer'