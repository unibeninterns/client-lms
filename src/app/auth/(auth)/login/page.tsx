"use client"

import Link from "next/link"
import { useState, FormEvent, useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock, AlertCircle, Loader2 } from 'lucide-react'
import Image from "next/image"

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""

export default function Page() {
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [formError, setFormError] = useState("")
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const { studentLogin, isLoading, error, clearError } = useAuth()

  // Clear form error when user starts typing
  useEffect(() => {
    if (email || password) {
      setFormError('');
    }
  }, [email, password]);

  // Clear auth error when component mounts or when user starts interacting
  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormError("")
    clearError() // Clear any existing auth errors
    
    // Basic validation
    if (!email || !password) {
      setFormError('Email and password are required')
      return
    }

    if (!email.includes('@')) {
      setFormError('Please enter a valid email address')
      return
    }
    
    try {
      await studentLogin(email, password)
      // Success handling is done in AuthContext (redirect to student dashboard)
    } catch (err: unknown) {
      console.error('Login submission error:', err)
      setFormError((err as Error).message || 'Login failed. Please try again.')
    }
  }

  const handleGoogleLogin = async () => {
    if (!GOOGLE_CLIENT_ID) {
      setFormError('Google OAuth is not configured')
      return
    }
    
    const GOOGLE_OAUTH_URL = `https://accounts.google.com/oauth/authorize?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(window.location.origin + '/auth/google/callback')}&response_type=code&scope=openid%20email%20profile`

    setIsGoogleLoading(true)
    setFormError("")
    clearError()
    
    try {
      // Redirect to Google OAuth
      window.location.href = GOOGLE_OAUTH_URL
    } catch (err: unknown) {
      console.error('Google login error:', err)
      setFormError('Failed to initiate Google login')
      setIsGoogleLoading(false)
    }
  }

  // Don't clear fields on error - let user correct their input
  const displayError = formError || error

  return (
    <div className="w-full">
      {/* Activate the top nav "Login" */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.currentScript?.parentElement?.previousElementSibling?.querySelectorAll('a')[1]?.setAttribute('data-active','true');`,
        }}
      />

      {/* Error Display */}
      {displayError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
            <p className="text-sm text-red-600">{displayError}</p>
          </div>
        </div>
      )}

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        {/* Username or Email */}
        <div className="space-y-2">
          <Label htmlFor="login-identity" className="sr-only">
            Username or Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="login-identity"
              type="email"
              placeholder="Username or Email"
              className="h-12 pl-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#6d0d75]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Username or Email"
              required
              disabled={isLoading || isGoogleLoading}
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="login-password" className="sr-only">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="login-password"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="h-12 pl-10 pr-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#6d0d75]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
              required
              disabled={isLoading || isGoogleLoading}
            />
            <button
              type="button"
              aria-label={showPass ? "Hide password" : "Show password"}
              onClick={() => setShowPass((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground disabled:opacity-50"
              disabled={isLoading || isGoogleLoading}
            >
              {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <Checkbox 
              id="remember" 
              className="mt-0.5 border-[#6d0d75] data-[state=checked]:bg-[#6d0d75]" 
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(!!checked)}
              disabled={isLoading || isGoogleLoading}
            />
            <span className="text-muted-foreground">Remember me</span>
          </label>
          <Link href="/auth/forgot-password" className="text-[#6d0d75] hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full h-11 rounded-lg bg-[#6d0d75] hover:bg-[#5a0a63] text-white font-medium disabled:bg-[#6d0d75]/50 disabled:cursor-not-allowed"
          disabled={isLoading || isGoogleLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
              Logging in...
            </>
          ) : (
            'Login'
          )}
        </Button>

        {/* OR divider */}
        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-muted" />
          <span className="text-xs text-muted-foreground">OR</span>
          <div className="h-px flex-1 bg-muted" />
        </div>

        {/* Google tile */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mx-auto grid place-items-center h-12 w-12 rounded-xl border bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Continue with Google"
          disabled={isLoading || isGoogleLoading || !GOOGLE_CLIENT_ID}
        >
          {isGoogleLoading ? (
            <Loader2 className="animate-spin h-4 w-4 text-gray-600" />
          ) : (
            <span>
              <Image
                src="/google.png"
                width={100}
                height={48}
                className="w-3 md:w-4"
                alt="Google Logo"
              />
            </span>
          )}
        </button>

        {/* Footer switch */}
        <p className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="text-[#6d0d75] hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}