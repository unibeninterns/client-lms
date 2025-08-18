import type React from "react"
import type { Metadata } from "next"
import { AuthProvider } from '@/contexts/AuthContext';
import { StudentLayout } from "@/components/student/StudentLayout"

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
        <AuthProvider userType="student">
        <StudentLayout>{children}</StudentLayout>
        </AuthProvider>
  )
}