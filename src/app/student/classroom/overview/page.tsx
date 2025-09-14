'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function OverviewPage() {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <div className="h-full flex flex-col">
        {isMobile && (
            <div className="p-4 bg-white border-b border-gray-200">
                <Link href="/student/classroom" onClick={() => localStorage.removeItem('lastClassroomTab')} className="flex items-center space-x-2 text-gray-600 mb-4">
                    <ArrowLeft size={20} />
                    <span>More</span>
                </Link>
            </div>
        )}
      {/* Content */}
      <div className="flex-1 max-w-4xl">
        <div className="space-y-6">
          <div className="text-gray-700 text-base leading-relaxed">
            <p className="mb-4">
              This module provides a comprehensive introduction to the technological tools and digital infrastructures that support modern research practices. It explores how innovation and technology intersect to improve research productivity, collaboration, and dissemination. From cloud-based tools and AI-assisted research to digital archiving and knowledge management systems, learners will gain insights into the evolving landscape of academic research.
            </p>
            <p>
              The goal is to familiarize students with emerging digital trends, demonstrate how to effectively leverage them in scholarly work, and encourage critical thinking around the ethical use of these technologies in research contexts.
            </p>
          </div>

          <div
            className="transition-all duration-500 ease-in-out overflow-hidden"
            style={{ maxHeight: showMore ? contentHeight : 0 }}
          >
            <div ref={contentRef} className="space-y-6 pt-6">
              {/* Key Topics Covered */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Topics Covered</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Evolution of research technologies</li>
                  <li>Tools for literature review and data analysis</li>
                  <li>Digital research collaboration platforms</li>
                  <li>Innovations in scientific publishing</li>
                  <li>Ethics and integrity in tech-assisted research</li>
                </ul>
              </div>

              {/* Learning Outcomes */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Learning Outcomes</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>By the end of this module, you should be able to:</li>
                  <li>Identify and evaluate key digital tools used in academic research</li>
                  <li>Understand the role of technology in shaping research methodologies</li>
                  <li>Apply innovative tools in conducting and presenting scholarly work</li>
                  <li>Discuss ethical considerations in the use of digital research technologies</li>
                </ul>
              </div>

              {/* Tutor Section */}
              <div className="border-t border-b border-gray-200 py-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tutor</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-gray-300 rounded-lg flex-shrink-0 overflow-hidden">
                    {/* Placeholder for tutor image */}
                    <div className="w-full h-full bg-gradient-to-br from-[#800080] to-[#660066] flex items-center justify-center text-white font-semibold">
                      TO
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Dr. Trisha Okonkwo</h4>
                    <p className="text-gray-600 text-sm mb-3">Senior Researcher, Digital Innovation Lab</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificate Section */}
              <div className="text-center py-6">
                <p className="text-sm text-gray-600 mb-4">
                  Get DRID certificate by completing entire course
                </p>
                <button className="px-8 py-3 border-2 border-gray-300 text-gray-400 rounded text-sm font-medium cursor-not-allowed opacity-60">
                  DRID Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Show More Button */}
          <div className="flex items-center space-x-3 text-[#800080] cursor-pointer pb-16" onClick={() => setShowMore(!showMore)}>
            <span className="text-sm font-medium">Show {showMore ? 'less' : 'more'}</span>
            {showMore ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </div>
    </div>
  );
}