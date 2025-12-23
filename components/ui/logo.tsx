import React from 'react'

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className = '', size = 64 }: LogoProps) {
  // Calculate font size based on size prop (default to text-xl equivalent)
  const fontSize = size ? `${size * 0.4}px` : '1.25rem'
  
  return (
    <div className={`flex items-baseline gap-1 ${className}`} style={{ fontSize }}>
      <span className="font-bold text-slate-900">Web</span>
      <span className="font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Vello</span>
    </div>
  )
}

