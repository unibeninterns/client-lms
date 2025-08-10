import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export default function ResetSuccessPage() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl text-center px-4">
        <div className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-full bg-green-100">
          <Check className="h-9 w-9 text-green-600" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Password Reset Successful
        </h1>
        <p className="mt-4 text-muted-foreground">
          Your password has been updated. You can now log in with your new credentials.
        </p>
        <div className="mt-8">
          <Button asChild className="h-11 rounded-lg bg-[#6d0d75] hover:bg-[#5a0a63]">
            <Link href="auth/login">Login</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
