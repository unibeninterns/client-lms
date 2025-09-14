'use client';
import { useState } from 'react';

interface Event {
  tag: string;
  topic: string;
  date: string;
  time: string;
  facilitator: string;
}

export default function Sessions() {
  const tabs = ['Upcoming', 'Live', 'Past'];
  const [currentTab, setCurrentTab] = useState('Upcoming');

  // Event data
  const upcomingEvents = [
    {
      tag: 'this week',
      topic: 'Week 8: Academic Writing & Referencing',
      date: 'Saturday, September 7, 2025',
      time: '4:00 PM – 5:00 PM (WAT)',
      facilitator: 'Dr. Mfon Udoka',
    },
    {
      tag: 'upcoming',
      topic: 'Week 9: Strategic Visibility & Personal Rebranding',
      date: 'Saturday, September 14, 2025',
      time: '',
      facilitator: '',
    },
    {
      tag: 'upcoming',
      topic: 'Week 10: Proposal & Grant Writing',
      date: 'Saturday, September 21, 2025',
      time: '',
      facilitator: '',
    },
    {
      tag: 'upcoming',
      topic: 'Week 11: Capstone Project Weeks',
      date: 'Saturday, September 28, 2025',
      time: '',
      facilitator: '',
    },
  ];

  const liveEvents = [
    {
      tag: 'live now',
      topic: 'Week 7: Data Analysis & Visualization',
      date: 'Saturday, August 30, 2025',
      time: '4:00 PM – 5:00 PM (WAT)',
      facilitator: 'Dr. Trisha Okonkwo',
    },
  ];

  const pastEvents = [
    {
      tag: 'completed',
      topic: 'Week 1: Introduction to Research in the 21st Century',
      date: 'Saturday, August 9, 2025',
      time: '4:00 PM – 5:00 PM (WAT)',
      facilitator: 'Dr. Mfon Udoka',
    },
    {
      tag: 'completed',
      topic: 'Week 2: Research Design Fundamentals',
      date: 'Saturday, August 16, 2025',
      time: '4:00 PM – 5:00 PM (WAT)',
      facilitator: 'Prof. Adewale Martins',
    },
    {
      tag: 'missed',
      topic: 'Week 6: Data Cleaning & Preprocessing',
      date: 'Saturday, August 23, 2025',
      time: '4:00 PM – 5:00 PM (WAT)',
      facilitator: 'Dr. Musa Ibrahim',
    },
  ];

  // Upcoming Event Component Section
  const UpcomingEventSection = ({ event }: { event: Event }) => {
    const getBadgeStyles = (tag: string) => {
      switch (tag) {
        case 'this week':
          return 'bg-[#DEFFD8] text-[#1DAE00]';
        case 'upcoming':
          return 'bg-[#FFF9E5] text-[#F6B600]';
        default:
          return 'bg-[#FFF9E5] text-[#F6B600]';
      }
    };

    return (
      <div className='flex items-center border-b-2 w-full'>
        <div className=' flex flex-col py-2 md:p-4 w-full'>
          <div className='flex items-start'>
            <div
              className={`${getBadgeStyles(
                event.tag
              )} uppercase font-medium text-[10px] px-2 py-1 rounded-[5px] text-nowrap`}
            >
              {event.tag}
            </div>
            <h3 className='text-[14px] md:text-[16px] font-bold ml-4 md:ml-10'>
              {event.topic}
            </h3>
          </div>
          <div className='mt-1 flex gap-4 text-[12px] md:text-[16px]'>
            <div className='flex flex-col flex-1'>
              <p className='font-medium text-[#1E1E1EB2]'>{event.date}</p>
              <p
                className={`font-medium ${
                  event.time ? 'font-bold' : 'text-[#A3A3A3]'
                }`}
              >
                {event.time ? event.time : 'To be Announced'}
              </p>
            </div>
            <div className='flex flex-col flex-1'>
              <p className={`font-medium text-[#1E1E1EB2]`}>Facilitator</p>
              <p
                className={`font-medium ${
                  event.time ? 'font-bold' : 'text-[#A3A3A3]'
                }`}
              >
                {event.facilitator ? event.facilitator : 'To be Announced'}
              </p>
            </div>
          </div>
        </div>
        <button className='rounded-[5px] bg-[#800080] text-white px-[8px] py-[6px] md:px-[16px] md:py-[8px] text-[10px] font-semibold text-nowrap'>
          Join Session
        </button>
      </div>
    );
  };

  // Live Event Component Section
  const LiveEventSection = ({ event }: { event: Event }) => {
    const getBadgeStyles = (tag: string) => {
      switch (tag) {
        case 'live now':
          return 'bg-[#FBEFFF] text-[#800080]';
        default:
          return 'bg-[#FFF9E5] text-[#F6B600]';
      }
    };

    return (
      <div className='flex items-center border-b-2 w-full'>
        <div className=' flex flex-col py-2 md:p-4 w-full'>
          <div className='flex items-start'>
            <div
              className={`${getBadgeStyles(
                event.tag
              )} uppercase font-medium text-[10px] px-2 py-1 rounded-[5px] text-nowrap`}
            >
              {event.tag}
            </div>
            <h3 className='text-[14px] md:text-[16px] font-bold ml-4 md:ml-10'>
              {event.topic}
            </h3>
          </div>
          <div className='mt-1 flex text-[12px] md:text-[16px]'>
            <div className='flex flex-col flex-1'>
              <p className='font-medium text-[#1E1E1EB2]'>{event.date}</p>
              <p
                className={`font-medium ${
                  event.time ? 'font-bold' : 'text-[#A3A3A3]'
                }`}
              >
                {event.time ? event.time : 'To be Announced'}
              </p>
            </div>
            <div className='flex flex-col flex-1'>
              <p
                className={`font-medium ${
                  event.time ? 'font-bold' : 'text-[#A3A3A3]'
                }`}
              >
                Facilitator
              </p>
              <p className='font-medium text-[#1E1E1EB2]'>{event.facilitator}</p>
            </div>
          </div>
        </div>
        <button className='rounded-[5px] bg-[#800080] text-white px-[8px] py-[6px] md:px-[16px] md:py-[8px] text-[10px] font-semibold'>
          Add to Calendar
        </button>
      </div>
    );
  };

  // Past Event Component Section
  const PastEventSection = ({ event }: { event: Event }) => {
    const getBadgeStyles = (time: string) => {
      switch (time) {
        case 'completed':
          return 'bg-[#EBEBEB] text-[#848484]';
        case 'missed':
          return 'bg-[#FFDCDD] text-[#FF383C]';
        default:
          return 'bg-[#FFDCDD] text-[#FF383C]';
      }
    };

    return (
      <div className='flex items-center border-b-2 w-full'>
        <div className=' flex flex-col py-2 md:p-4 w-full'>
          <div className='flex items-start'>
            <div
              className={`${getBadgeStyles(
                event.tag
              )} uppercase font-medium text-[10px] px-2 py-1 rounded-[5px]`}
            >
              {event.tag}
            </div>
            <h3 className='text-[14px] md:text-[16px] font-bold ml-4 md:ml-10'>
              {event.topic}
            </h3>
          </div>
          <div className='mt-1 flex text-[12px] md:text-[16px]'>
            <div className='flex flex-col flex-1'>
              <p className='font-medium text-[#1E1E1EB2]'>{event.date}</p>
              <p
                className={`font-medium ${
                  event.time ? 'font-bold' : 'text-[#A3A3A3]'
                }`}
              >
                {event.time ? event.time : 'To be Announced'}
              </p>
            </div>
            <div className='flex flex-col flex-1'>
              <p
                className={`font-medium ${
                  event.time ? 'font-bold' : 'text-[#A3A3A3]'
                }`}
              >
                Facilitator
              </p>
              <p className='font-medium text-[#1E1E1EB2]'>{event.facilitator}</p>
            </div>
          </div>
        </div>
        <button className='rounded-[5px] text-[#800080] border-[#800080] border px-[8px] py-[6px] md:px-[16px] md:py-[8px] text-[10px] font-semibold'>
          Watch Replay
        </button>
      </div>
    );
  };

  // Tab Content Sections
  const UpcomingSection = () => {
    return (
      <div className='flex-col flex w-full md:w-[80%] gap-3 items-start overflow-ellipsis'>
        {upcomingEvents.map((event) => (
          <UpcomingEventSection key={event.topic} event={event} />
        ))}
      </div>
    );
  };

  const LiveSection = () => {
    return (
      <div className='flex-col flex w-full md:w-[80%] gap-3 items-start overflow-ellipsis'>
        {liveEvents.map((event) => (
          <LiveEventSection key={event.topic} event={event} />
        ))}
      </div>
    );
  };

  const PastSection = () => {
    return (
      <div className='flex-col flex w-full md:w-[80%] gap-3 items-start overflow-ellipsis'>
        {pastEvents.map((event) => (
          <PastEventSection key={event.topic} event={event} />
        ))}
      </div>
    );
  };

  return (
    <div className='md:p-6 p-2 w-full'>
      <div className=' mb-2 md:mb-6'>
        <h1 className='text-[28px] md:text-[32px] font-bold text-gray-900'>Live Sessions</h1>
        <p className='text-[16px] md:text-[20px]'>
          Join our weekly sessions to interact with tutors and deepen your
          learning.
        </p>
      </div>
      <div className='relative w-full shadow-xs'>
        <div className='flex w-full items-center justify-start gap-[36px] md:gap-[72px]'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`text-[14px] md:text-[16px] font-semibold ${
                currentTab === tab
                  ? 'text-[#800080] border-b-[#800080] border-b z-2 transition duration-100 ease-in-out transform scale-102'
                  : ''
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <hr className='absolute bottom-0 w-full' />
      </div>
      <div className='w-full mt-2'>
        {currentTab === 'Upcoming' ? (
          <UpcomingSection />
        ) : currentTab === 'Live' ? (
          <LiveSection />
        ) : currentTab === 'Past' ? (
          <PastSection />
        ) : null}
      </div>
    </div>
  );
}