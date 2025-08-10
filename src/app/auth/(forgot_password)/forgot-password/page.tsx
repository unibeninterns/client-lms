"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock } from 'lucide-react'
import { FormEvent, useState } from "react"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    // Simulate sending an email. In a real app, call a Server Action here.
    setTimeout(() => {
      router.push("/reset-password/success")
    }, 400)
  }

  return (
    <section className="rounded-3xl border border-black/[0.04] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)]">
      <div className="px-6 sm:px-12 py-12">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#6d0d75]/10 text-[#6d0d75]">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Reset Password</h1>
          <p className="mt-3 text-muted-foreground">
            Enter your email address and we&apos;ll send a link to your email to
            reset your password.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <div className="text-left">
              <Label htmlFor="email" className="sr-only">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="h-12 pl-12 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#6d0d75]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-lg bg-[#6d0d75] hover:bg-[#5a0a63]"
            >
              Send Reset Link
            </Button>

            <p className="text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link href="auth/login" className="text-[#6d0d75] hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
