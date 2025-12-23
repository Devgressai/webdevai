import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className = '', size = 64 }: LogoProps) {
  // Use the size prop directly for height, maintain aspect ratio
  const height = size || 64
  
  return (
    <div className={`flex items-center ${className}`} style={{ height: `${height}px` }}>
      <Image
        src="/webvello_logo.jpg"
        alt="Webvello"
        width={height * 3}
        height={height}
        className="h-full w-auto object-contain"
        priority={size ? size > 40 : false}
        unoptimized
      />
    </div>
  )
}

