'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Check if already authenticated
    fetch('/api/auth/check')
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          router.push('/admin/dashboard')
        }
        setIsChecking(false)
      })
      .catch(() => {
        setIsChecking(false)
      })
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin', // Include cookies
        body: JSON.stringify({ password }),
      })

      const result = await response.json()

      if (result.success) {
        router.push('/admin/dashboard')
        router.refresh()
      } else {
        // Handle rate limiting
        if (response.status === 429) {
          const retryAfter = result.retryAfter || 60
          setError(`${result.error} Please wait ${Math.ceil(retryAfter / 60)} minute(s) before trying again.`)
        } else {
          setError(result.error || 'Invalid credentials')
          if (result.remainingAttempts !== undefined) {
            setError(`${result.error} (${result.remainingAttempts} attempts remaining)`)
          }
        }
      }
    } catch (error) {
      setError('Login failed. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isChecking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-secondary-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            Admin Login
          </h1>
          <p className="text-secondary-600">
            Enter your password to access the admin dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div 
              className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
              role="alert"
              aria-live="assertive"
            >
              {error}
            </div>
          )}

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-secondary-900 mb-2">
              Password
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? 'password-error' : undefined}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter admin password"
              />
            </label>
            {error && (
              <p id="password-error" className="mt-2 text-sm text-red-600" role="alert" aria-live="assertive">
                {error}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-secondary-500">
            Default password is set in environment variables
          </p>
        </div>
      </div>
    </div>
  )
}

