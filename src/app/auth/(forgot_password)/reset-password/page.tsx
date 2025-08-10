"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock } from 'lucide-react'

export default function CreateNewPasswordPage() {
  const router = useRouter()
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    // In a real application, you'd handle the password reset logic here
    setTimeout(() => {
      // Simulate success and navigate to a success page or login
      router.push("/login")
    }, 400)
  }

  return (
    <section className="rounded-3xl border border-black/[0.04] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)]">
      <div className="px-6 sm:px-12 py-12">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Create New Password</h1>
          <p className="mt-3 text-muted-foreground">
            Enter your email address and we&apos;ll send a link to your email to reset your password.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <div className="text-left space-y-4">
              <div>
                <Label htmlFor="new-password" className="sr-only">New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Password"
                    className="h-12 pl-12 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#6d0d75]"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="confirm-password" className="sr-only">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Password"
                    className="h-12 pl-12 rounded-xl bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#6d0d75]"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-lg bg-[#6d0d75] hover:bg-[#5a0a63]"
            >
              Reset Password
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}