"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export default function ResetSuccessPage() {
  const [countdown, setCountdown] = useState(5)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push('/auth/login')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-3xl border border-black/[0.04] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] bg-white">
          <div className="px-6 sm:px-12 py-12 text-center">
            <div className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-full bg-green-100">
              <Check className="h-9 w-9 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Password Reset Successful
            </h1>
            <p className="mt-4 text-muted-foreground">
              Your password has been updated. You can now log in with your new credentials.
            </p>
            
            {/* Auto-redirect countdown */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-700">
                Redirecting to login page in {countdown} second{countdown !== 1 ? 's' : ''}...
              </p>
            </div>
            
            <div className="mt-6">
              <Button asChild className="h-11 rounded-lg bg-[#6d0d75] hover:bg-[#5a0a63]">
                <Link href="/auth/login">Login Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}