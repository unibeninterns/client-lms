'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { id: 'overview', label: 'Overview', href: '/student/classroom/overview' },
  { id: 'notes', label: 'Notes', href: '/student/classroom/notes' },
  { id: 'resources', label: 'Resources', href: '/student/classroom/resources' },
  { id: 'quiz', label: 'Quiz', href: '/student/classroom/quiz' },
];

export default function ClassroomTabs() {
  const pathname = usePathname();

  const handleTabClick = (href: string) => {
    localStorage.setItem('lastClassroomTab', href);
  };

  return (
    <div className="border-b-2 border-gray-200">
      <nav className="flex space-x-12">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            onClick={() => handleTabClick(tab.href)}
            className={`pt-5 pb-0.5 px-1 border-b-2 font-medium text-sm relative ${
              pathname === tab.href
                ? 'border-[#800080] text-[#800080] -mb-px z-10'
                : 'border-transparent text-[#1E1E1E] hover:text-gray-700 hover:border-gray-300 hover:-mb-px'
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
