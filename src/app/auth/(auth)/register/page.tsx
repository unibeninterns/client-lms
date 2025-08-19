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

export default function Page() {
  const [showPass, setShowPass] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [formError, setFormError] = useState("")
  const { register, isLoading, error, clearError } = useAuth()
  const router = useRouter()

  // Clear form error when user starts typing
  useEffect(() => {
    if (firstName || lastName || email || password) {
      setFormError('');
    }
  }, [firstName, lastName, email, password]);

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
    if (!firstName || !lastName || !email || !password) {
      setFormError('All fields are required')
      return
    }

    if (!email.includes('@')) {
      setFormError('Please enter a valid email address')
      return
    }

    if (password.length < 8) {
      setFormError('Password must be at least 8 characters long')
      return
    }

    if (!acceptTerms) {
      setFormError('Please accept the Terms of Service and Privacy Policy')
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
      setFormError((err as Error).message || 'Registration failed. Please try again.')
    }
  }

  // Don't clear fields on error - let user correct their input
  const displayError = formError || error

  return (
    <div className="w-full">
      {/* Activate the top nav "Register" */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.currentScript?.parentElement?.previousElementSibling?.querySelectorAll('a')[0]?.setAttribute('data-active','true');`,
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
              className="h-12 pl-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#6d0d75]"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              aria-label="First Name"
              required
              disabled={isLoading}
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
              className="h-12 pl-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#6d0d75]"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              aria-label="Last Name"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="reg-email" className="sr-only">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="reg-email"
              type="email"
              placeholder="Email Address"
              className="h-12 pl-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#6d0d75]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email Address"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="reg-password" className="sr-only">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="reg-password"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="h-12 pl-10 pr-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#6d0d75]"
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
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3 text-sm">
          <Checkbox 
            id="terms" 
            className="mt-0.5 border-[#6d0d75] data-[state=checked]:bg-[#6d0d75]"
            checked={acceptTerms}
            onCheckedChange={(checked) => setAcceptTerms(!!checked)}
            disabled={isLoading}
          />
          <label htmlFor="terms" className="select-none text-muted-foreground">
            I agree to the{" "}
            <Link href="#" className="text-[#6d0d75] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#6d0d75] hover:underline">
              Privacy Policy
            </Link>
            .
          </label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full h-11 rounded-lg bg-[#6d0d75] hover:bg-[#5a0a63] text-white font-medium disabled:bg-[#6d0d75]/50 disabled:cursor-not-allowed"
          disabled={isLoading}
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
          className="mx-auto grid place-items-center h-12 w-12 rounded-xl border bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Continue with Google"
          disabled={isLoading}
        >
          <span>
            <Image
              src="/google.png"
              width={100}
              height={48}
              className="w-3 md:w-4"
              alt="Google Logo"
            />
          </span>
        </button>

        {/* Footer switch */}
        <p className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-[#6d0d75] hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}