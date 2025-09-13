'use client';
import Link from 'next/link';
import { FileText, Download } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: 'Lecture Slides',
      subtitle: 'Overview of core concepts from module 6.',
      type: 'PDF',
      size: '2.4 MB',
      downloadUrl: '#',
    },
    {
      id: 2,
      title: 'The Future of Digital Research',
      subtitle: 'Trends shaping digital research globally',
      type: 'PDF',
      size: '1.8 MB',
      downloadUrl: '#',
    },
    {
      id: 3,
      title: 'Understanding Research Innovation', 
      subtitle: 'Introductory guide to research workflows and digital tools.',
      type: 'PDF',
      size: '3.2 MB',
      downloadUrl: '#',
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Content */}
      <div className="flex-1">
        <div className="max-w-4xl">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Module 7: Data Analysis & Visualization</h2>
            <p className="text-gray-600">Resources and materials for this module</p>
          </div>

          <div className="space-y-4">
            {resources.map((resource) => (
              <div key={resource.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 mb-1">{resource.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{resource.subtitle}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                          {resource.type}
                        </span>
                        <span>{resource.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button className="text-[#800080] hover:text-[#660066] text-sm font-medium">
                      View
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources Section */}
          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Resources</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-sm text-gray-700">Module 8: Academic Writing & Referencing</span>
                  <button className="text-[#800080] text-xs font-medium hover:text-[#660066]">View</button>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-sm text-gray-700">Module 9: Strategic Visibility & Personal Rebranding</span>
                  <button className="text-[#800080] text-xs font-medium hover:text-[#660066]">View</button>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-sm text-gray-700">Module 10: Proposal & Grant Writing</span>
                  <button className="text-[#800080] text-xs font-medium hover:text-[#660066]">View</button>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-sm text-gray-700">Module 11: Capstone Project Week</span>
                  <button className="text-[#800080] text-xs font-medium hover:text-[#660066]">View</button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700">Module 12: Final Exam & Portfolio Presentation</span>
                  <button className="text-[#800080] text-xs font-medium hover:text-[#660066]">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}