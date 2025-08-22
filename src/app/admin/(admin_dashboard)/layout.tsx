import type { Metadata } from "next"
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata: Metadata = {
  title: "DRID - Learning Management System",
  description: "Admin Dashboard",
}

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
        <AuthProvider userType="admin" requireAuth={true}>
        {children}
        </AuthProvider>
  )
}