'use client'

import { useEffect, useState } from 'react'

// Mobile-specific hooks and utilities
export function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      const isMobileDevice = width < 768
      const isTabletDevice = width >= 768 && width < 1024
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

      setIsMobile(isMobileDevice)
      setIsTablet(isTabletDevice)
      setIsTouch(isTouchDevice)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return { isMobile, isTablet, isTouch }
}

// Touch-friendly button component
interface TouchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export function TouchButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}: TouchButtonProps) {
  const { isMobile, isTouch } = useMobileDetection()
  
  const baseClasses = 'relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const sizeClasses = {
    sm: isMobile ? 'min-h-[44px] px-4 py-2 text-sm' : 'min-h-[36px] px-3 py-1.5 text-sm',
    md: isMobile ? 'min-h-[48px] px-6 py-3 text-base' : 'min-h-[40px] px-4 py-2 text-base',
    lg: isMobile ? 'min-h-[52px] px-8 py-4 text-lg' : 'min-h-[44px] px-6 py-3 text-lg'
  }
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 active:bg-gray-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100'
  }
  
  const widthClasses = fullWidth ? 'w-full' : ''
  
  // Enhanced touch feedback
  const touchClasses = isTouch ? 'active:scale-95 active:shadow-inner' : 'hover:scale-105 hover:shadow-lg'
  
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${touchClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// Mobile-optimized input component
interface MobileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

export function MobileInput({ 
  label, 
  error, 
  fullWidth = false,
  className = '',
  ...props 
}: MobileInputProps) {
  const { isMobile } = useMobileDetection()
  
  const inputClasses = `
    block w-full rounded-lg border border-gray-300 px-4 py-3 text-base
    placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500
    disabled:bg-gray-50 disabled:text-gray-500
    ${isMobile ? 'text-base' : 'text-sm'}
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `
  
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

// Mobile-optimized card component
interface MobileCardProps {
  children: React.ReactNode
  className?: string
  interactive?: boolean
  onClick?: () => void
}

export function MobileCard({ 
  children, 
  className = '', 
  interactive = false,
  onClick 
}: MobileCardProps) {
  const { isMobile, isTouch } = useMobileDetection()
  
  const baseClasses = 'bg-white rounded-xl shadow-sm border border-gray-200 p-6'
  const interactiveClasses = interactive ? 'cursor-pointer transition-all duration-200 hover:shadow-md' : ''
  const touchClasses = isTouch && interactive ? 'active:scale-98 active:shadow-sm' : ''
  
  return (
    <div
      className={`${baseClasses} ${interactiveClasses} ${touchClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

// Mobile navigation component
interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function MobileNav({ isOpen, onClose, children }: MobileNavProps) {
  const { isMobile } = useMobileDetection()
  
  if (!isMobile) return <>{children}</>
  
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Mobile menu */}
      <div className={`
        fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50
        transform transition-transform duration-300 ease-in-out
        flex flex-col
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </>
  )
}

// Mobile-optimized grid component
interface MobileGridProps {
  children: React.ReactNode
  cols?: number
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function MobileGrid({ 
  children, 
  cols = 1, 
  gap = 'md',
  className = '' 
}: MobileGridProps) {
  const { isMobile, isTablet } = useMobileDetection()
  
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6'
  }
  
  // Responsive grid columns
  const gridCols = isMobile ? 1 : isTablet ? Math.min(cols, 2) : cols
  
  return (
    <div className={`
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gridCols}
      ${gapClasses[gap]}
      ${className}
    `}>
      {children}
    </div>
  )
}

// Mobile-optimized text component
interface MobileTextProps {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'primary' | 'secondary' | 'gray' | 'white'
  className?: string
}

export function MobileText({ 
  children, 
  size = 'base',
  weight = 'normal',
  color = 'primary',
  className = '' 
}: MobileTextProps) {
  const { isMobile } = useMobileDetection()
  
  const sizeClasses = {
    xs: isMobile ? 'text-xs' : 'text-xs',
    sm: isMobile ? 'text-sm' : 'text-sm',
    base: isMobile ? 'text-base' : 'text-sm',
    lg: isMobile ? 'text-lg' : 'text-base',
    xl: isMobile ? 'text-xl' : 'text-lg',
    '2xl': isMobile ? 'text-2xl' : 'text-xl'
  }
  
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }
  
  const colorClasses = {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    gray: 'text-gray-500',
    white: 'text-white'
  }
  
  return (
    <span className={`
      ${sizeClasses[size]}
      ${weightClasses[weight]}
      ${colorClasses[color]}
      ${className}
    `}>
      {children}
    </span>
  )
}

// Mobile viewport optimization hook
export function useMobileViewport() {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
    isLandscape: false,
    isPortrait: false
  })

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const isLandscape = width > height
      const isPortrait = height > width

      setViewport({ width, height, isLandscape, isPortrait })
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)
    window.addEventListener('orientationchange', updateViewport)
    
    return () => {
      window.removeEventListener('resize', updateViewport)
      window.removeEventListener('orientationchange', updateViewport)
    }
  }, [])

  return viewport
}

// Mobile gesture detection hook
export function useMobileGestures() {
  const [gestures, setGestures] = useState({
    swipeLeft: false,
    swipeRight: false,
    swipeUp: false,
    swipeDown: false,
    pinch: false,
    tap: false
  })

  useEffect(() => {
    let startX = 0
    let startY = 0
    let startDistance = 0

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX
        startY = e.touches[0].clientY
      } else if (e.touches.length === 2) {
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        startDistance = Math.sqrt(
          Math.pow(touch2.clientX - touch1.clientX, 2) +
          Math.pow(touch2.clientY - touch1.clientY, 2)
        )
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length === 0) {
        const endX = e.changedTouches[0].clientX
        const endY = e.changedTouches[0].clientY
        const deltaX = endX - startX
        const deltaY = endY - startY
        const minSwipeDistance = 50

        setGestures(prev => ({
          ...prev,
          swipeLeft: deltaX < -minSwipeDistance,
          swipeRight: deltaX > minSwipeDistance,
          swipeUp: deltaY < -minSwipeDistance,
          swipeDown: deltaY > minSwipeDistance,
          tap: Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10
        }))

        // Reset gestures after a short delay
        setTimeout(() => {
          setGestures(prev => ({
            ...prev,
            swipeLeft: false,
            swipeRight: false,
            swipeUp: false,
            swipeDown: false,
            tap: false
          }))
        }, 100)
      }
    }

    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return gestures
}
