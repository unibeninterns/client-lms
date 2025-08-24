"use client"

import Link from "next/link"
import { useState, FormEvent, useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, User, Mail, Lock, AlertCircle, Loader2 } from 'lucide-react'
import Image from "next/image"

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""

export default function Page() {
  const [showPass, setShowPass] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [termsError, setTermsError] = useState("")
  const [generalError, setGeneralError] = useState("")
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const { register, isLoading, error, clearError } = useAuth()
  const router = useRouter()

  // Clear errors when user starts typing in the respective fields
  useEffect(() => {
    if (firstName || lastName || email || password) {
      setGeneralError('');
    }
  }, [firstName, lastName, email, password]);
  
  useEffect(() => {
    setEmailError('');
  }, [email]);
  
  useEffect(() => {
    setPasswordError('');
  }, [password]);

  // Clear auth error when component mounts or when user starts interacting
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
    setTermsError("")
    clearError() // Clear any existing auth errors
    
    // Basic validation
    if (!firstName || !lastName || !email || !password) {
      setGeneralError('All fields are required')
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
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) missing.push("a special character")

  if (missing.length > 0) {
    setPasswordError(
      `Password must contain ${missing.join(", ")}.`
    )
    return
  }

    if (!acceptTerms) {
  setTermsError('Please accept the Terms of Service and Privacy Policy')
  return
}
    
    try {
      await register({
        first_name: firstName,
        last_name: lastName,
        email,
        password
      })
      // Redirect to success page
      router.push('/auth/register/success')
    } catch (err: unknown) {
      console.error('Registration submission error:', err)
      setGeneralError((err as Error).message || 'Registration failed. Please try again.')
    }
  }

  const handleGoogleRegister = async () => {
    if (!GOOGLE_CLIENT_ID) {
      setGeneralError('Google OAuth is not configured')
      return
    }
    
    const GOOGLE_OAUTH_URL = `https://accounts.google.com/oauth/authorize?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(window.location.origin + '/auth/google/callback')}&response_type=code&scope=openid%20email%20profile`

    setIsGoogleLoading(true)
    setGeneralError("")
    clearError()
    
    try {
      // Redirect to Google OAuth with register flag
      const registerUrl = `${GOOGLE_OAUTH_URL}&state=register`
      window.location.href = registerUrl
    } catch (err: unknown) {
      console.error('Google register error:', err)
      setGeneralError('Failed to initiate Google registration')
      setIsGoogleLoading(false)
    }
  }

  const displayGeneralError = generalError || error

  return (
    <div className="w-full">
      {/* Activate the top nav "Register" */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.currentScript?.parentElement?.previousElementSibling?.querySelectorAll('a')[0]?.setAttribute('data-active','true');`,
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
        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="reg-firstname" className="sr-only">
            First Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="reg-firstname"
              type="text"
              placeholder="First Name"
              className="h-12 pl-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#800080]"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              aria-label="First Name"
              required
              disabled={isLoading || isGoogleLoading}
            />
          </div>
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="reg-lastname" className="sr-only">
            Last Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="reg-lastname"
              type="text"
              placeholder="Last Name"
              className="h-12 pl-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#800080]"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              aria-label="Last Name"
              required
              disabled={isLoading || isGoogleLoading}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="reg-email" className="sr-only">
            Email Address
          </Label>
            <div className={`relative rounded-xl border-[1px] transition-colors ${emailError ? 'border-red-500 ring-[0.5px] ring-red-500' : 'border-transparent'}`}>
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="reg-email"
              type="email"
              placeholder="Email Address"
              className="h-12 w-full pl-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email Address"
              required
              disabled={isLoading || isGoogleLoading}
            />
            </div>
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="reg-password" className="sr-only">
            Password
          </Label>
            <div className={`relative rounded-xl border-[1px] transition-colors ${passwordError ? 'border-red-500 ring-[0.5px] ring-red-500' : 'border-transparent'}`}>
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="reg-password"
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="h-12 w-full pl-10 pr-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-0"
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
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3 text-sm">
  <Checkbox 
    id="terms" 
    className="mt-0.5 border-[#800080] data-[state=checked]:bg-[#800080]"
    checked={acceptTerms}
    onCheckedChange={(checked) => setAcceptTerms(!!checked)}
    disabled={isLoading || isGoogleLoading}
  />
  <label htmlFor="terms" className="select-none text-muted-foreground">
    I agree to the{" "}
    <Link href="#" className="text-[#800080] hover:underline">
      Terms of Service
    </Link>{" "}
    and{" "}
    <Link href="#" className="text-[#800080] hover:underline">
      Privacy Policy
    </Link>
    .
  </label>
</div>
{termsError && (
  <p className="text-red-500 text-sm mt-1">{termsError}</p>
)}

        {/* Submit */}
        <Button
          type="submit"
          className="w-full h-11 rounded-lg bg-[#800080] hover:bg-[#690069] text-white font-medium disabled:bg-[#800080]/50 disabled:cursor-not-allowed"
          disabled={isLoading || isGoogleLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
              Creating account...
            </>
          ) : (
            'Register'
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
          onClick={handleGoogleRegister}
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
          Already have an account?{" "}
          <Link href="/auth/login" className="text-[#800080] hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}