import React from 'react'

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className = '', size = 64 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 160 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Left Segment Gradient - Vibrant Medium-Light Blue */}
        <linearGradient id="gradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        
        {/* Middle Segment Gradient - Richer Medium Blue */}
        <linearGradient id="gradientMiddle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        
        {/* Right Segment Gradient - Deep Blue-Purple */}
        <linearGradient id="gradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        
        {/* Shadow filters for 3D depth effect */}
        <filter id="shadowLeft">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(59, 130, 246, 0.3)"/>
        </filter>
        <filter id="shadowMiddle">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="rgba(37, 99, 235, 0.4)"/>
        </filter>
        <filter id="shadowRight">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="rgba(29, 78, 216, 0.5)"/>
        </filter>
      </defs>
      
      {/* Left Segment - Light Blue (Leftmost downward stroke and beginning of upward stroke) */}
      <path
        d="M10 112 L10 8 L30 8 L30 50 L25 50 L25 90 L30 90 L30 112 L10 112 Z"
        fill="url(#gradientLeft)"
        filter="url(#shadowLeft)"
      />
      
      {/* Middle Segment - Medium Blue (Central V shape, overlapping left) */}
      <path
        d="M30 8 L70 8 L70 50 L65 50 L65 90 L70 90 L70 112 L30 112 L30 90 L25 90 L25 50 L30 50 Z"
        fill="url(#gradientMiddle)"
        filter="url(#shadowMiddle)"
      />
      
      {/* Right Segment - Dark Blue-Purple (Rightmost strokes, overlapping middle) */}
      <path
        d="M70 8 L110 8 L110 50 L105 50 L105 90 L110 90 L110 112 L70 112 L70 90 L65 90 L65 50 L70 50 Z"
        fill="url(#gradientRight)"
        filter="url(#shadowRight)"
      />
      <path
        d="M110 8 L150 8 L150 112 L110 112 L110 90 L105 90 L105 50 L110 50 Z"
        fill="url(#gradientRight)"
        filter="url(#shadowRight)"
      />
    </svg>
  )
}

