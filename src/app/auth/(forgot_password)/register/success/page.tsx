"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RegisterSuccessPage() {
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
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-3xl border border-black/[0.04] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] bg-white">
          <div className="px-6 sm:px-12 py-12 text-center">
            <div className="relative mx-auto mb-4 h-48 w-72">
              <Image
                src="/images/confetti.png"
                alt="Confetti celebration"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-contain"
              />
            </div>
            <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-green-100">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-600" aria-hidden="true">
                <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"></path>
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Account Created Successfully
            </h1>
            <p className="mt-4 text-muted-foreground">
              We&apos;ve sent a verification link to your email. Please check your inbox to complete registration.
            </p>
            
            {/* Auto-redirect countdown */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-700">
                Redirecting to login page in {countdown} second{countdown !== 1 ? 's' : ''}...
              </p>
            </div>
            
            <div className="mt-6 space-y-3">
              <Link 
                href="/auth/login" 
                className="inline-block px-6 py-2 bg-[#6d0d75] hover:bg-[#5a0a63] text-white rounded-lg font-medium transition-colors"
              >
                Go to Login Now
              </Link>
              <p className="text-sm text-muted-foreground">
                Didn&apos;t get an email?{" "}
                <Link href="#" className="text-[#6d0d75] hover:underline">Resend Email</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}