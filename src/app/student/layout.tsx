import type { Metadata } from "next"
import { AuthProvider } from '@/contexts/AuthContext';
import { StudentLayout } from "@/components/student/StudentLayout"

export const metadata: Metadata = {
  title: "DRID - Learning Management System",
  description: "Student Dashboard",
}

export default function StudentRootLayout({
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