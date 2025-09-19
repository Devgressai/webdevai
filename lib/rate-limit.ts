// Simple in-memory rate limiting for SEO audit API
const requests = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(ip: string, maxRequests: number = 10, windowMs: number = 60000): boolean {
  const now = Date.now()
  const key = ip
  
  const current = requests.get(key)
  
  if (!current) {
    requests.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (now > current.resetTime) {
    requests.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (current.count >= maxRequests) {
    return false
  }
  
  current.count++
  return true
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of requests.entries()) {
    if (now > value.resetTime) {
      requests.delete(key)
    }
  }
}, 60000) // Clean up every minute
