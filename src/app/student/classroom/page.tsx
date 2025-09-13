'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ClassroomPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const lastTab = localStorage.getItem('lastClassroomTab');
    if (pathname === '/student/classroom') {
      if (lastTab) {
        router.replace(lastTab);
      } else {
        router.replace('/student/classroom/overview');
      }
    }
  }, [pathname, router]);

  // This component will now primarily handle redirection, so it won't render any visible content.
  // The actual content is handled by the child routes (overview, notes, etc.)
  return null;
}