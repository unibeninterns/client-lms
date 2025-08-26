"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen">
      {/* Background image using Next.js Image with fill to cover the screen */}
      <div className="fixed inset-0 -z-10">
      <Image
        src="/library.png"
        alt="Library shelves background"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      </div>
      {/* Blurred and dark overlay for the background */}
      <main className="relative z-10 flex items-center justify-center px-4 py-8 min-h-screen overflow-y-auto overscroll-contain">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/50 bg-white/10 shadow-2xl">
          {/* Left hero */}
          <section
            aria-labelledby="hero-title"
            className="relative isolate flex min-h-[320px] md:min-h-[640px] items-center justify-center bg-transparent"
          >
            {/* gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/35 to-transparent" />
            <div className="relative z-10 w-full h-full flex items-center">
              <div className="px-8 sm:px-12 py-10 text-white/95">
                <Image
                  src="/logo-header.png"
                  width={250}
                  height={98}
                  className="w-44 md:w-64"
                  alt="Logo : DEPARTMENT OF RESEARCH, INNOVATION AND RESEARCH"
                />
                <h1 id="hero-title" className="font-serif text-4xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                  Enter a World of Knowledge
                </h1>
                <p className="mt-4 max-w-sm text-white text-sm sm:text-base">
                  Begin your research journey and start your quest to discover the unknown
                </p>
              </div>
            </div>
          </section>

          {/* Right pane - page content */}
          <section className="bg-white text-foreground relative">
            {/* top switch like the design */}
            <nav className="flex items-center justify-center gap-8 pt-8 text-sm">
              <Link
                href="/auth/register"
                className="relative text-muted-foreground hover:text-[#800080] transition-colors data-[active=true]:text-[#800080] data-[active=true]:shadow-none data-[active=true]:underline underline-offset-8 decoration-2"
                data-active={pathname === "/auth/register"}
              >
                Register
              </Link>
              <Link
                href="/auth/login"
                className="relative text-muted-foreground hover:text-[#800080] transition-colors data-[active=true]:text-[#800080] data-[active=true]:shadow-none data-[active=true]:underline underline-offset-8 decoration-2"
                data-active={pathname === "/auth/login"}
              >
                Login
              </Link>
            </nav>
            <div className="px-6 sm:px-10 pb-10">{children}</div>
          </section>
        </div>
      </main>
    </div>
  )
}