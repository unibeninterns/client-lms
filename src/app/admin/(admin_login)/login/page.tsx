"use client"

import { useState, FormEvent, useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock, AlertCircle, Loader2 } from 'lucide-react'

export default function Page() {
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [generalError, setGeneralError] = useState("")
  const { adminLogin, isLoading, error, clearError } = useAuth()

  // Clear errors when user starts typing in the respective fields
  useEffect(() => {
    setGeneralError('');
  }, [email, password]);

  useEffect(() => {
    setEmailError('');
  }, [email]);

  useEffect(() => {
    setPasswordError('');
  }, [password]);

  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setGeneralError("")
    setEmailError("")
    setPasswordError("")
    clearError()

    // Basic validation
    if (!email || !password) {
      setGeneralError('Email and password are required')
      return
    }

    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address')
      return
    }

    // Password validation
    const missing: string[] = []
    if (password.length < 8) missing.push("at least 8 characters")
    if (!/[A-Z]/.test(password)) missing.push("a capital letter")
    if (!/[a-z]/.test(password)) missing.push("a small letter")
    if (!/[0-9]/.test(password)) missing.push("a number")
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) missing.push("a special character")

    if (missing.length > 0) {
      setPasswordError(
        `Password must contain ${missing.join(", ")}.`
      )
      return
    }

    try {
      await adminLogin(email, password)
      // Success handling is done in AuthContext (redirect to dashboard)
    } catch (err: unknown) {
      console.error('Login submission error:', err)
      setGeneralError((err as Error).message || 'Login failed. Please try again.')
    }
  }

  const displayGeneralError = generalError || error

  return (
    <div className="w-full">
      {/* Activate the top nav "Login" */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.currentScript?.parentElement?.previousElementSibling?.querySelectorAll('a')[1]?.setAttribute('data-active','true');`,
        }}
      />

      {/* General Error Display */}
      {displayGeneralError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
            <p className="text-sm text-red-600">{displayGeneralError}</p>
          </div>
        </div>
      )}

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        {/* Username or Email */}
        <div className="space-y-2">
          <Label htmlFor="login-identity" className="sr-only">
            Username or Email
          </Label>
          <div className={`relative rounded-xl border-[1px] transition-colors ${emailError ? 'border-red-500 ring-[0.5px] ring-red-500' : 'border-transparent'}`}>
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="login-identity"
              type="email"
              placeholder="Username or Email"
              className="h-12 w-full pl-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Username or Email"
              required
              disabled={isLoading}
            />
          </div>
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="login-password" className="sr-only">
            Password
          </Label>
          <div className={`relative rounded-xl border-[1px] transition-colors ${passwordError ? 'border-red-500 ring-[0.5px] ring-red-500' : 'border-transparent'}`}>
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="login-password"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="h-12 w-full pl-10 pr-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              aria-label={showPass ? "Hide password" : "Show password"}
              onClick={() => setShowPass((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground disabled:opacity-50"
              disabled={isLoading}
            >
              {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>

        {/* Remember */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <Checkbox 
              id="remember" 
              className="mt-0.5 border-[#800080] data-[state=checked]:bg-[#800080]" 
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(!!checked)}
              disabled={isLoading}
            />
            <span className="text-muted-foreground">Remember me</span>
          </label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full h-11 rounded-lg bg-[#800080] hover:bg-[#690069] text-white font-medium disabled:bg-[#800080]/50 disabled:cursor-not-allowed"
          disabled={isLoading}
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
      </form>
    </div>
  )
}