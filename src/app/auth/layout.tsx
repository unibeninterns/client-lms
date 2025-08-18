import { AuthProvider } from '@/contexts/AuthContext';

export default function ResearchersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider userType="student">
      {children}
    </AuthProvider>
  );
}