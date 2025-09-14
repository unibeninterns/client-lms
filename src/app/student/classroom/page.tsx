'use client';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ClassroomPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const mobileView = searchParams.get('view');

    // Desktop logic
    if (isMobile === false && pathname === '/student/classroom') {
      const lastTab = localStorage.getItem('lastClassroomTab');
      if (lastTab) {
        router.replace(lastTab);
      } else {
        router.replace('/student/classroom/overview');
      }
      return;
    }

    // Mobile logic
    if (isMobile === true && pathname === '/student/classroom') {
      if (mobileView === 'lectures') {
        setShowMenu(false);
        return;
      }

      const lastTab = localStorage.getItem('lastClassroomTab');
      if (lastTab) {
        router.replace(lastTab);
      } else {
        setShowMenu(true);
      }
    }
  }, [pathname, router, isMobile, searchParams]);

  if (!showMenu) {
    return null; // Render nothing if we are redirecting or in lecture view
  }

  const handleTabClick = (href: string) => {
    localStorage.setItem('lastClassroomTab', href);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Module Overview Button */}
      <Link href="/student/classroom/overview" onClick={() => handleTabClick('/student/classroom/overview')}>
        <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#800080] rounded flex items-center justify-center mr-3">
              <span className="text-white text-xs">•••</span>
            </div>
            <span className="text-sm">Module Overview</span>
          </div>
        </div>
      </Link>

      {/* Notes Button */}
      <Link href="/student/classroom/notes" onClick={() => handleTabClick('/student/classroom/notes')}>
        <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center mr-3">
              <span className="text-white text-xs">📝</span>
            </div>
            <span className="text-sm">Notes</span>
          </div>
        </div>
      </Link>

      {/* Resources Button */}
      <Link href="/student/classroom/resources" onClick={() => handleTabClick('/student/classroom/resources')}>
        <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center mr-3">
              <span className="text-white text-xs">📚</span>
            </div>
            <span className="text-sm">Resources</span>
          </div>
        </div>
      </Link>

      {/* Quiz Button */}
      <Link href="/student/classroom/quiz" onClick={() => handleTabClick('/student/classroom/quiz')}>
        <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center mr-3">
              <span className="text-white text-xs">📝</span>
            </div>
            <span className="text-sm">Quiz</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ClassroomPage() {
  return (
    <Suspense fallback={null}>
      <ClassroomPageContent />
    </Suspense>
  );
}
