"use client"

import { useState, FormEvent, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Eye, EyeOff, AlertCircle, Loader2 } from 'lucide-react'
import { authApi } from "@/services/api"

function ResetPasswordFormComponent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Get uid and token from URL parameters
  const uid = searchParams.get('uid') || ''
  const token = searchParams.get('token') || ''

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError("")
    
    // Validation
    if (!newPassword || !confirmPassword) {
      setError("Please fill in both password fields")
      return
    }
    
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!")
      return
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }

    if (!uid || !token) {
      setError("Invalid reset link. Please request a new password reset.")
      return
    }

    setIsLoading(true)
    
    try {
      await authApi.confirmPasswordReset({
        uid,
        token,
        new_password1: newPassword,
        new_password2: confirmPassword
      })
      
      // Redirect to success page
      router.push("/auth/reset-password/success")
    } catch (err: unknown) {
      console.error('Password reset confirmation error:', err)
      const errorMessage = (err as { response?: { data?: { detail?: string; message?: string; }; }; message?: string; }).response?.data?.detail || 
                          (err as { response?: { data?: { detail?: string; message?: string; }; }; message?: string; }).response?.data?.message || 
                          (err as Error).message || 
                          "Failed to reset password. Please try again or request a new reset link."
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="rounded-3xl border border-black/[0.04] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)]">
      <div className="px-6 sm:px-12 py-12">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Create New Password</h1>
          <p className="mt-3 text-muted-foreground">
            Enter your new password below. Make sure it&apos;s secure and at least 8 characters long.
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
            <div className="text-left space-y-4">
              <div>
                <Label htmlFor="new-password" className="sr-only">New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="new-password"
                    type={showNewPassword ? "text" : "password"}
                    placeholder="New Password"
                    className="h-12 pl-12 pr-12 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#6d0d75]"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    aria-label={showNewPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground disabled:opacity-50"
                    disabled={isLoading}
                  >
                    {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <div>
                <Label htmlFor="confirm-password" className="sr-only">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="h-12 pl-12 pr-12 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#6d0d75]"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground disabled:opacity-50"
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-lg bg-[#6d0d75] hover:bg-[#5a0a63] disabled:bg-[#6d0d75]/50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Resetting Password...
                </>
              ) : (
                'Reset Password'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function ResetPasswordForm() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResetPasswordFormComponent />
        </Suspense>
    )
}