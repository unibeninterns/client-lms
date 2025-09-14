'use client';
import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  LockKeyhole,
  TvMinimalPlay,
} from 'lucide-react';

export default function Resources() {
  const [focus, setFocus] = useState('');
  const handleFocus = (topic: string) => setFocus(focus === topic ? '' : topic);
  
  const modules = [
    {
      topic: 'Module 1: Introduction to Research in the 21st Century',
      subModules: [
        { topic: 'Introduction to Data Analysis', len: 4, checked: true },
        {
          topic: 'Preparing Your Dataset for Analysis',
          len: 23,
          checked: true,
        },
        { topic: 'Exploratory Data Analysis (DEA)', len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: 'Module 2: Research Design Fundamentals',
      subModules: [
        { topic: 'Introduction to Data Analysis', len: 4, checked: true },
        {
          topic: 'Preparing Your Dataset for Analysis',
          len: 23,
          checked: true,
        },
        { topic: 'Exploratory Data Analysis (DEA)', len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: 'Module 3: Literature Review & Knowledge Management',
      subModules: [
        { topic: 'Introduction to Data Analysis', len: 4, checked: true },
        {
          topic: 'Preparing Your Dataset for Analysis',
          len: 23,
          checked: true,
        },
        { topic: 'Exploratory Data Analysis (DEA)', len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: 'Module 4: AI & Digital Tools for Research',
      subModules: [
        { topic: 'Introduction to Data Analysis', len: 4, checked: true },
        {
          topic: 'Preparing Your Dataset for Analysis',
          len: 23,
          checked: true,
        },
        { topic: 'Exploratory Data Analysis (DEA)', len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: 'Module 5: Data Collection Methods',
      subModules: [
        { topic: 'Introduction to Data Analysis', len: 4, checked: true },
        {
          topic: 'Preparing Your Dataset for Analysis',
          len: 23,
          checked: true,
        },
        { topic: 'Exploratory Data Analysis (DEA)', len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: 'Module 6: Data Cleaning & Preprocessing',
      subModules: [
        { topic: 'Introduction to Data Analysis', len: 4, checked: true },
        {
          topic: 'Preparing Your Dataset for Analysis',
          len: 23,
          checked: true,
        },
        { topic: 'Exploratory Data Analysis (DEA)', len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: 'Module 7: Data Analysis & Visualization',
      subModules: [
        { topic: 'Introduction to Data Analysis', len: 4, checked: true },
        {
          topic: 'Preparing Your Dataset for Analysis',
          len: 23,
          checked: true,
        },
        { topic: 'Exploratory Data Analysis (DEA)', len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: 'Module 8: Academic Writing & Referencing',
      subModules: [
        { topic: 'Introduction to Data Analysis', len: 4, checked: true },
        {
          topic: 'Preparing Your Dataset for Analysis',
          len: 23,
          checked: true,
        },
        { topic: 'Exploratory Data Analysis (DEA)', len: 23, checked: true },
      ],
      locked: true,
    },
    {
      topic: 'Module 9: Strategic Visibility & Personal Rebranding',
      subModules: [
        { topic: 'Introduction to Data Analysis', len: 4, checked: true },
        {
          topic: 'Preparing Your Dataset for Analysis',
          len: 23,
          checked: true,
        },
        { topic: 'Exploratory Data Analysis (DEA)', len: 23, checked: true },
      ],
      locked: true,
    },
    {
      topic: 'Module 10: Proposal & Grant Writing',
      subModules: [
        { topic: 'Introduction to Data Analysis', len: 4, checked: true },
        {
          topic: 'Preparing Your Dataset for Analysis',
          len: 23,
          checked: true,
        },
        { topic: 'Exploratory Data Analysis (DEA)', len: 23, checked: true },
      ],
      locked: true,
    },
    {
      topic: 'Module 11: Capstone Project Week',
      subModules: [
        { topic: 'Introduction to Data Analysis', len: 4, checked: true },
        {
          topic: 'Preparing Your Dataset for Analysis',
          len: 23,
          checked: true,
        },
        { topic: 'Exploratory Data Analysis (DEA)', len: 23, checked: true },
      ],
      locked: true,
    },
    {
      topic: 'Module 12: Final Exam & Portfolio Presentation',
      subModules: [
        { topic: 'Introduction to Data Analysis', len: 4, checked: true },
        {
          topic: 'Preparing Your Dataset for Analysis',
          len: 23,
          checked: true,
        },
        { topic: 'Exploratory Data Analysis (DEA)', len: 23, checked: true },
      ],
      locked: true,
    },
  ];

  // Open Module Component Section
  const OpenModuleSection = ({
    module,
    isFocused,
    handleFocus,
  }: {
    module: {
      topic: string;
      subModules: {
        topic: string;
        len: number;
        checked: boolean;
      }[];
      locked: boolean;
    };
    isFocused: boolean;
    handleFocus: (topic: string) => void;
  }) => {
    return (
      <div className='w-full flex-col flex px-[12px] py-[8px]'>
        <div>
          <div className='flex justify-between'>
            <h3 className='text-[12px] font-bold'>{module.topic}</h3>
            <button onClick={() => handleFocus(module.topic)}>
              {isFocused ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>
          <p className='text-[10px]'>{`${
            module.subModules.filter((subModule) => subModule.checked).length
          }/${module.subModules.length} | ${module.subModules.reduce(
            (acc, curr) => acc + curr.len,
            0
          )} min`}</p>
        </div>
        <div className='flex flex-col'>
          {isFocused &&
            module.subModules.map((subModule) => (
              <div
                key={subModule.topic}
                className='flex items-start py-[8px] px-[12px] hover:bg-[rgba(251,239,255,0.4)] gap-3'
              >
                <input
                  type='checkbox'
                  name={subModule.topic}
                  checked={subModule.checked}
                  className='mt-[4px]'
                  readOnly
                />
                <div className='flex flex-col space-around'>
                  <p className='text-[12px]'>{subModule.topic}</p>
                  <div className='flex items-center'>
                    <TvMinimalPlay height={10} />
                    <p className='text-[10px]'>{subModule.len} min</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  // Locked Module Component Section
  const LockedModuleSection = ({ topic }: { topic: string }) => {
    return (
      <div className='w-full flex items-center px-[12px] py-[8px]'>
        <LockKeyhole color='#A3A3A3' height={14} strokeWidth={3} />
        <p className='text-[#A3A3A3] text-xs'>{topic}</p>
      </div>
    );
  };

  return (
    <div className='p-6'>
      <div className='w-full h-full bg-white'>
        <div className='w-full justify-between px-2 flex items center border'>
          <h2 className='w-full text-14px font-bold text-center py-2'>
            All Course Resources
          </h2>
        </div>
        <div className='w-full overflow-y-scroll'>
          {modules.map((module) => (
            <div key={module.topic} className='border-t last:border-b'>
              {module.locked ? (
                <LockedModuleSection topic={module.topic} />
              ) : (
                <OpenModuleSection
                  module={module}
                  isFocused={focus === module.topic}
                  handleFocus={handleFocus}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}