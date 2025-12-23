import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className = '', size = 64 }: LogoProps) {
  // Calculate height based on size prop (default to 64px)
  const height = size || 64
  const width = Math.round(height * 3.33) // Maintain aspect ratio (approximately 3.33:1 based on typical logo dimensions)
  
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/newlogo.png"
        alt="Webvello"
        width={width}
        height={height}
        className="h-auto w-auto object-contain"
        priority={size && size > 40} // Priority for larger logos (header)
      />
    </div>
  )
}

