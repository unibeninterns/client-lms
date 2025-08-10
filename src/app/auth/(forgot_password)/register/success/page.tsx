import Image from "next/image"
import Link from "next/link"

export default function RegisterSuccessPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center px-4">
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
        <p className="mt-10 text-sm text-muted-foreground">
          Didn&apos;t get an email?{" "}
          <Link href="#" className="text-[#6d0d75] hover:underline">Resend Email</Link>
        </p>
      </div>
    </section>
  )
}
