import type { Metadata } from 'next';
import StudentLayout from '@/components/student/StudentLayout';

export const metadata: Metadata = {
  title: 'DRID - Learning Management System',
  description: 'Student Dashboard',
};

export default function StudentRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <StudentLayout>{children}</StudentLayout>
  );
}

