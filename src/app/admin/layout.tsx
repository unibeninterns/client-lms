import type React from "react"
import type { Metadata } from "next"
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata: Metadata = {
  title: "DRID - Learning Management System",
  description: "Dashboard",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
        <AuthProvider userType="admin">
        {children}
        </AuthProvider>
  )
}