"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, User } from 'lucide-react'

const nav = [
  { href: "/", label: "Home", current: true },
  { href: "/about-course", label: "About Course" },
  { href: "/pricing", label: "Pricing" },
  { href: "/my-classroom", label: "My Classroom" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              width={50}
              height={50}
              alt="DRID logo"
              className="h-14 w-16"
            />
            <span className="sr-only">{"Directorate of Research, Innovation and Development"}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.current ? "text-[#800080] hover:text-[#4a2952]" : "text-gray-900 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <button
              aria-label="User"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <User className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 py-3 space-y-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    item.current ? "text-[#7E1A95]" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="User">
                  <User className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
