'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronDown, ChevronUp, LockKeyhole, TvMinimalPlay, Menu } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Toaster, toast } from 'sonner';

function ClassroomLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showModules, setShowModules] = useState(false);
  const [expandedModule, setExpandedModule] = useState('Module 7: Data Analysis & Visualization');
  const [isMobile, setIsMobile] = useState(false);

  const isQuizPage = pathname.includes('/quiz');
  const mobileView = searchParams.get('view');
  const mobileActiveTab = mobileView === 'lectures' ? 'lectures' : 'more';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTabClick = (href: string) => {
    localStorage.setItem('lastClassroomTab', href);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', href: '/student/classroom/overview' },
    { id: 'notes', label: 'Notes', href: '/student/classroom/notes' },
    { id: 'resources', label: 'Resources', href: '/student/classroom/resources' },
    { id: 'quiz', label: 'Quiz', href: '/student/classroom/quiz' },
  ];

  const modules = [
    {
      title: 'Module 1: Introduction to Research in the 21st Century',
      duration: '3 | 1 hour',
      lessons: [
        { title: '1. Introduction to Research in the 21st Century', duration: '15 min', completed: true },
      ],
      locked: false,
    },
    {
      title: 'Module 2: Research Design Fundamentals',
      duration: '3 | 1 hour',
      lessons: [
        { title: '1. Research Design Fundamentals', duration: '15 min', completed: true },
      ],
      locked: false,
    },
    {
      title: 'Module 3: Literature Review & Knowledge Management',
      duration: '0 | 1 hr',
      lessons: [
        { title: '1. Literature Review & Knowledge Management', duration: '15 min', completed: true },
      ],
      locked: false,
    },
    {
      title: 'Module 4: AI & Digital Tools for Research',
      duration: '0 | 1 hr 35mins',
      lessons: [
        { title: '1. AI & Digital Tools for Research', duration: '20 min', completed: true },
      ],
      locked: false,
    },
    {
      title: 'Module 5: Data Collection Methods',
      duration: '0 | 1 hr 5mins',
      lessons: [
        { title: '1. Introduction to Data Collection', duration: '15 min', completed: true },
      ],
      locked: false,
    },
    {
      title: 'Module 6: Data Cleaning & Preprocessing',
      duration: '0 | 5 3mins',
      lessons: [
        { title: '1. Data Cleaning & Preprocessing', duration: '15 min', completed: true },
      ],
      locked: false,
    },
    {
      title: 'Module 7: Data Analysis & Visualization',
      duration: '1 | 3 5mins',
      lessons: [
        { title: '1. Introduction to Data Analysis', duration: '10 min', completed: false },
        { title: '2. Preparing Your Dataset for Analysis', duration: '15 min', completed: false },
        { title: '3. Exploratory Data Analysis (EDA)', duration: '20 min', completed: false },
      ],
      locked: false,
      current: true,
    },
    {
      title: 'Module 8: Academic Writing & Referencing',
      duration: '',
      lessons: [],
      locked: true,
    },
    {
      title: 'Module 9: Strategic Visibility & Personal Rebranding',
      duration: '',
      lessons: [],
      locked: true,
    },
    {
      title: 'Module 10: Proposal & Grant Writing',
      duration: '',
      lessons: [],
      locked: true,
    },
    {
      title: 'Module 11: Capstone Project Week',
      duration: '',
      lessons: [],
      locked: true,
    },
    {
      title: 'Module 12: Final Exam & Portfolio Presentation',
      duration: '',
      lessons: [],
      locked: true,
    },
  ];

  const toggleModule = (moduleTitle: string) => {
    setExpandedModule(expandedModule === moduleTitle ? '' : moduleTitle);
  };

  let firstLockedModuleFound = false;
  const firstLockedLessonFoundInModule: { [key: string]: boolean } = {};

  if (isMobile) {
    return (
      <div className="flex flex-col h-screen bg-white">
        <Toaster />
        
        {!isQuizPage && (
          <div className="relative bg-gray-800 h-[30vh] flex-shrink-0">
            <div className="relative w-full h-full bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-4xl font-bold opacity-30 transform -rotate-12">
                  NEVER
                  <br />
                  GIVE UP
                </div>
              </div>
              
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                  <div className="w-12 h-8 bg-gray-500 rounded"></div>
                </div>
              </div>

              <div className="absolute bottom-2 left-2 right-2">
                <div className="flex items-center justify-between text-white text-xs">
                  <div className="flex items-center space-x-2">
                    <button className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <TvMinimalPlay size={12} fill="white" />
                    </button>
                    <span>0:01 / 10:00</span>
                  </div>
                </div>
                <div className="w-full bg-gray-600 h-1 rounded-full mt-1">
                  <div className="w-1/10 bg-white h-1 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white border-b border-gray-200 px-4">
          <div className="flex">
            <Link
              href="/student/classroom?view=lectures"
              className={`flex-1 py-3 text-center text-sm font-medium border-b-2 ${
                mobileActiveTab === 'lectures'
                  ? 'border-[#800080] text-[#800080]'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Lectures
            </Link>
            <Link
              href="/student/classroom"
              className={`flex-1 py-3 text-center text-sm font-medium border-b-2 ${
                mobileActiveTab === 'more'
                  ? 'border-[#800080] text-[#800080]'
                  : 'border-transparent text-gray-500'
              }`}
            >
              More
            </Link>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {mobileActiveTab === 'lectures' ? (
            <div className="p-4">
              <h2 className="font-semibold text-gray-800 mb-4">Module 7: Data Analysis & Visualization</h2>
              <p className="text-xs text-gray-600 mb-4">Lesson 1: Introduction to Data Analysis</p>
              
              <div className="space-y-2">
                {modules.map((module) => {
                  if (module.locked && !firstLockedModuleFound) {
                    firstLockedModuleFound = true;
                    return (
                      <div key={module.title} className="border-b border-gray-100">
                        <div className="flex items-center px-3 py-2">
                          <LockKeyhole color='#A3A3A3' size={12} strokeWidth={3} />
                          <p className='text-[#A3A3A3] text-xs ml-2'>{module.title}</p>
                        </div>
                      </div>
                    );
                  }
                  
                  let isCurrentLessonFound = false;

                  return (
                    <div key={module.title} className="border-b border-gray-100">
                      {module.locked ? (
                        <div className="flex items-center px-3 py-2">
                          <LockKeyhole color='#A3A3A3' size={12} strokeWidth={3} />
                          <p className='text-[#A3A3A3] text-xs ml-2'>{module.title}</p>
                        </div>
                      ) : (
                        <div className="px-3 py-2">
                          <div
                            className={`cursor-pointer ${module.current ? 'bg-[#FBF2FF] rounded p-2' : ''}`}
                            onClick={() => toggleModule(module.title)}
                          >
                            <div className="flex justify-between items-center">
                              <h3 className="text-xs font-bold text-gray-800">
                                {module.title}
                              </h3>
                              {expandedModule === module.title ? (
                                <ChevronUp size={16} />
                              ) : (
                                <ChevronDown size={16} />
                              )}
                            </div>
                            <p className='text-[9px] text-gray-500'>{`${
                              module.lessons.filter((subModule) => subModule.completed).length
                            }/${module.lessons.length} | ${module.duration}`}</p>
                          </div>

                          {expandedModule === module.title && (
                            <div className="mt-2 space-y-1">
                              {module.lessons.map((lesson, index) => {
                                let lessonLocked = false;
                                if (!lesson.completed && isCurrentLessonFound) {
                                  lessonLocked = true;
                                }
                                if (!lesson.completed && !isCurrentLessonFound) {
                                  isCurrentLessonFound = true;
                                }

                                return (
                                  <div
                                    key={index}
                                    className="flex items-center py-2 px-3 hover:bg-[rgba(251,239,255,0.4)] rounded"
                                  >
                                    {lessonLocked ? (
                                      <LockKeyhole size={12} className="mr-2" />
                                    ) : (
                                      <input
                                        type="checkbox"
                                        checked={lesson.completed}
                                        onChange={() => {}}
                                        className="mr-2 w-3 h-3"
                                      />
                                    )}
                                    <div className="flex-1">
                                      <p className='text-xs'>{lesson.title}</p>
                                      <div className="flex items-center mt-1">
                                        <TvMinimalPlay size={8} />
                                        <p className='text-[9px] text-gray-500 ml-1'>{lesson.duration}</p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="p-4">{children}</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      <Toaster />
      <div className="flex-1 flex flex-col overflow-y-auto">
        {!isQuizPage && (
          <div className="relative bg-gray-800 h-[40vh] lg:h-[60vh] flex-shrink-0">
            <div className="relative w-full h-full bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-6xl font-bold opacity-30 transform -rotate-12">
                  NEVER
                  <br />
                  GIVE UP
                </div>
              </div>
              
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center">
                  <div className="w-16 h-10 bg-gray-500 rounded"></div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex items-center space-x-4">
                    <button className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <TvMinimalPlay size={16} fill="white" />
                    </button>
                    <button className="w-6 h-6">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    </button>
                    <span>0:01 / 10:00</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                    </button>
                    <button>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="w-full bg-gray-600 h-1 rounded-full mt-2">
                  <div className="w-1/10 bg-white h-1 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isQuizPage && (
          <div className="px-6 flex-shrink-0">
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
          </div>
        )}

        <div className={`flex-1 ${isQuizPage ? 'p-6' : 'p-6'}`}>
          {children}
        </div>
      </div>

      {!isQuizPage && (
        <div className="w-full lg:w-80 border-l border-gray-200 flex flex-col flex-shrink-0 h-screen">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
            <h2 className="font-semibold text-gray-800">Course Content</h2>
          </div>

          <div className="flex-1 overflow-y-auto">
            {modules.map((module) => {
              if (module.locked && !firstLockedModuleFound) {
                firstLockedModuleFound = true;
                return (
                  <TooltipProvider key={module.title}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-full"
                        onClick={() => toast.info('complete the lessons on the previous module to unlock')}
                      >
                        <div className="border-b border-gray-100">
                          <div className="w-full flex items-center px-[12px] py-[8px]">
                            <LockKeyhole color='#A3A3A3' height={14} strokeWidth={3} />
                            <p className='text-[#A3A3A3] text-xs'>{module.title}</p>
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>complete the lessons on the previous module to unlock</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              }
              let isCurrentLessonFound = false;

              return (
                <div key={module.title} className="border-t last:border-b">
                  {module.locked ? (
                    <div className="w-full flex items-center px-[12px] py-[8px]">
                      <LockKeyhole color='#A3A3A3' height={14} strokeWidth={3} />
                      <p className='text-[#A3A3A3] text-xs'>{module.title}</p>
                    </div>
                  ) : (
                    <div className="w-full flex-col flex px-[12px] py-[8px]">
                      <div
                        className={`group cursor-pointer ${
                          module.current ? 'bg-[#FBF2FF]' : ''
                        }`}
                        onClick={() => toggleModule(module.title)}
                      >
                        <div className="flex justify-between">
                          <h3 className="text-[12px] font-bold group-hover:text-[#800080]">
                            {module.title}
                          </h3>
                          {expandedModule === module.title ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          )}
                        </div>
                        <p className='text-[10px]'>{`${
                          module.lessons.filter((subModule) => subModule.completed).length
                        }/${module.lessons.length} | ${module.duration}`}</p>
                      </div>

                      {expandedModule === module.title && (
                        <div className="flex flex-col">
                          {module.lessons.map((lesson, index) => {
                            let lessonLocked = false;
                            if (!lesson.completed && isCurrentLessonFound) {
                              lessonLocked = true;
                            }
                            if (!lesson.completed && !isCurrentLessonFound) {
                              isCurrentLessonFound = true;
                            }

                            if (lessonLocked) {
                              if (!firstLockedLessonFoundInModule[module.title]) {
                                firstLockedLessonFoundInModule[module.title] = true;
                                return (
                                  <TooltipProvider key={index}>
                                    <Tooltip>
                                      <TooltipTrigger
                                        className="w-full"
                                        onClick={() => toast.info('complete the quiz on the previous lesson to unlock')}
                                      >
                                        <div className="flex items-start py-[8px] px-[12px] hover:bg-[rgba(251,239,255,0.4)] gap-3">
                                          <LockKeyhole size={16} className="mr-3" />
                                          <div className="flex flex-col space-around">
                                            <p className='text-[12px]'>
                                              {lesson.title}
                                            </p>
                                            <div className="flex items-center">
                                              <TvMinimalPlay height={10} />
                                              <p className='text-[10px]'>{lesson.duration}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>complete the quiz on the previous lesson to unlock</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                );
                              }
                              return (
                                <div
                                  key={index}
                                  className="flex items-start py-[8px] px-[12px] hover:bg-[rgba(251,239,255,0.4)] gap-3"
                                >
                                  <LockKeyhole size={16} className="mr-3" />
                                  <div className="flex flex-col space-around">
                                    <p className='text-[12px]'>
                                      {lesson.title}
                                    </p>
                                    <div className="flex items-center">
                                      <TvMinimalPlay height={10} />
                                      <p className='text-[10px]'>{lesson.duration}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            }

                            return (
                              <div
                                key={index}
                                className="flex items-start py-[8px] px-[12px] hover:bg-[rgba(251,239,255,0.4)] gap-3"
                              >
                                <input
                                  type="checkbox"
                                  checked={lesson.completed}
                                  onChange={() => {}}
                                  className="mt-[4px]"
                                />
                                <div className="flex flex-col space-around">
                                  <p className='text-[12px]'>{lesson.title}</p>
                                  <div className="flex items-center">
                                    <TvMinimalPlay height={10} />
                                    <p className='text-[10px]'>{lesson.duration}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ClassroomLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClassroomLayoutContent>{children}</ClassroomLayoutContent>
    </Suspense>
  );
}
