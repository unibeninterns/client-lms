"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, AlertCircle, Loader2 } from 'lucide-react'
import { authApi } from "@/services/api"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError("")
    
    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!email.includes('@')) {
      setError("Please enter a valid email address")
      return
    }
    
    setIsLoading(true)
    
    try {
      await authApi.resetPassword({ email })
      setSuccess(true)
      // Redirect to success page after a short delay
      setTimeout(() => {
        router.push("/auth/reset-password/success")
      }, 2000)
    } catch (err: unknown) {
      console.error('Password reset error:', err)
      const errorMessage = (err as { response?: { data?: { detail?: string; message?: string; }; }; message?: string; }).response?.data?.detail || 
                          (err as { response?: { data?: { detail?: string; message?: string; }; }; message?: string; }).response?.data?.message || 
                          (err as Error).message || 
                          "Failed to send reset email. Please try again."
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <section className="rounded-3xl border border-black/[0.04] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)]">
        <div className="px-6 sm:px-12 py-12">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-green-100 text-green-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Email Sent!</h1>
            <p className="mt-3 text-muted-foreground">
              We&apos;ve sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
            </p>
            <div className="mt-6">
              <Link href="/auth/login" className="text-[#800080] hover:underline">
                Return to Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="rounded-3xl border border-black/[0.04] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)]">
      <div className="px-6 sm:px-12 py-12">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#800080]/10 text-[#800080]">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Reset Password</h1>
          <p className="mt-3 text-muted-foreground">
            Enter your email address and we&apos;ll send a link to your email to
            reset your password.
          </p>

          {/* Error Display */}
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                <p className="text-sm text-red-600">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <div className="text-left">
              <Label htmlFor="email" className="sr-only">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="h-12 pl-12 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#800080]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-lg bg-[#800080] hover:bg-[#690069] disabled:bg-[#800080]/50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Sending Reset Link...
                </>
              ) : (
                'Send Reset Link'
              )}
            </Button>

            <p className="text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link href="/auth/login" className="text-[#800080] hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}