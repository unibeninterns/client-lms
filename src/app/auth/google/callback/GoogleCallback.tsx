"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { Loader2, AlertCircle } from 'lucide-react'

export default function GoogleCallback() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { googleAuth } = useAuth()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleGoogleCallback = async () => {
      try {
        const code = searchParams.get('code')
        const state = searchParams.get('state')
        const error = searchParams.get('error')

        // Handle OAuth errors (user cancelled, etc.)
        if (error) {
          setError('Google authentication was cancelled or failed')
          setTimeout(() => {
            router.push('/auth/login')
          }, 3000)
          return
        }

        // Validate we have the authorization code
        if (!code) {
          setError('No authorization code received from Google')
          setTimeout(() => {
            router.push('/auth/login')
          }, 3000)
          return
        }

        // Exchange the code for user info via your backend
        await googleAuth(code, state === 'register')
        
        // Success - redirect will be handled by AuthContext
        
      } catch (err: unknown) {
        console.error('Google OAuth callback error:', err)
        setError((err as Error).message || 'Google authentication failed')
        setTimeout(() => {
          router.push('/auth/login')
        }, 3000)
      }
    }

    handleGoogleCallback()
  }, [searchParams, googleAuth, router])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-red-100">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <h1 className="text-lg font-semibold text-gray-900 mb-2">
              Authentication Failed
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              {error}
            </p>
            <p className="text-xs text-gray-500">
              Redirecting to login page...
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-blue-100">
            <Loader2 className="h-6 w-6 text-blue-600 animate-spin" />
          </div>
          <h1 className="text-lg font-semibold text-gray-900 mb-2">
            Completing Google Sign-in
          </h1>
          <p className="text-sm text-gray-600">
            Please wait while we sign you in...
          </p>
        </div>
      </div>
    </div>
  )
}