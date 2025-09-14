'use client';
import { useState, useEffect } from 'react';
import { ArrowLeft, FileText, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const resources = [
    {
      id: 1,
      title: 'Lecture Slides',
      subtitle: 'Overview of core concepts from module 6.',
      type: 'PDF',
      icon: '📄',
    },
    {
      id: 2,
      title: 'The Future of Digital Research',
      subtitle: 'Trends shaping digital research globally.',
      type: 'Link',
      icon: '🔗',
    },
    {
      id: 3,
      title: 'Understanding Research Innovation', 
      subtitle: 'Introductory guide to research workflows and digital tools.',
      type: 'PDF',
      icon: '📄',
    },
  ];

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="h-full bg-gray-50">
        {/* Mobile Header */}
        <div className="p-4 bg-white border-b border-gray-200">
          <Link href="/student/classroom" onClick={() => localStorage.removeItem('lastClassroomTab')} className="flex items-center space-x-2 text-gray-600 mb-4">
            <ArrowLeft size={20} />
            <span>More</span>
          </Link>
        </div>

        <div className="p-4">
          {/* Lecture Slides Section */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Lecture Slides</h3>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-gray-900">Overview of core concepts from module 6.</h4>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">PDF</span>
                    <a href="#" className="text-[#800080] text-xs font-medium">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Resources Section */}
          <div className="space-y-3">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🔗</span>
                  <div>
                    <h4 className="font-medium text-sm text-gray-900">The Future of Digital Research</h4>
                    <p className="text-xs text-gray-600">Trends shaping digital research globally</p>
                  </div>
                </div>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#800080] text-xs font-medium flex items-center">
                  Visit <ExternalLink size={12} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-900">Understanding Research Innovation</h4>
                    <p className="text-xs text-gray-600">Introductory guide to research workflows and digital tools.</p>
                  </div>
                </div>
                <a href="#" className="text-[#800080] text-xs font-medium">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <div className="max-w-4xl">
          {/* Lecture Slides Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Lecture Slides</h2>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 mb-2">Overview of core concepts from module 6.</h3>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                        PDF
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <a href="#" className="text-[#800080] hover:text-[#660066] text-sm font-medium">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Resources Section */}
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 mb-1">The Future of Digital Research</h3>
                    <p className="text-sm text-gray-600 mb-2">Trends shaping digital research globally</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                        Link
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#800080] hover:text-[#660066] text-sm font-medium flex items-center">
                    Visit <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 mb-1">Understanding Research Innovation</h3>
                    <p className="text-sm text-gray-600 mb-2">Introductory guide to research workflows and digital tools.</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                        PDF
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <a href="#" className="text-[#800080] hover:text-[#660066] text-sm font-medium">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
