"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import Image from "next/image"

export default function Page() {
  const [showPass, setShowPass] = useState(false)

  return (
    <div className="w-full">
      {/* Activate the top nav "Login" */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.currentScript?.parentElement?.previousElementSibling?.querySelectorAll('a')[1]?.setAttribute('data-active','true');`,
        }}
      />
      <form className="mt-6 space-y-5">
        {/* Username or Email */}
        <div className="space-y-2">
          <Label htmlFor="login-identity" className="sr-only">
            Username or Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="login-identity"
              type="text"
              placeholder="Username or Email"
              className="h-12 pl-10 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#6d0d75]"
              defaultValue=""
              aria-label="Username or Email"
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
              defaultValue=""
              aria-label="Password"
            />
            <button
              type="button"
              aria-label={showPass ? "Hide password" : "Show password"}
              onClick={() => setShowPass((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <Checkbox id="remember" className="mt-0.5 border-[#6d0d75] data-[state=checked]:bg-[#6d0d75]" defaultChecked />
            <span className="text-muted-foreground">Remember me</span>
          </label>
          <Link href="suth/forgot-password" className="text-[#6d0d75] hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full h-11 rounded-lg bg-[#6d0d75] hover:bg-[#5a0a63] text-white font-medium"
        >
          Login
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
          className="mx-auto grid place-items-center h-12 w-12 rounded-xl border bg-white shadow-sm hover:bg-gray-50"
          aria-label="Continue with Google"
        >
          <span >
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
          Don&apos;t have an account?{" "}
          <Link href="auth/register" className="text-[#6d0d75] hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}
