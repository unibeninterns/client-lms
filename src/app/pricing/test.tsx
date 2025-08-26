'use client';
import { ArrowRight, Check, Minus } from 'lucide-react';
import FAQs from '@/components/FAQs';

const Pricing = () => {
  const features = [
    {
      feature: '12 modules (self-paced, 12 weeks)',
      basic: true,
      premium: true,
    },
    {
      feature: 'Two live sessions per week',
      basic: true,
      premium: true,
    },
    {
      feature: 'Resources & templates',
      basic: true,
      premium: true,
    },
    {
      feature: 'Student forum access',
      basic: true,
      premium: true,
    },
    {
      feature: 'Practice quizzes',
      basic: true,
      premium: true,
    },
    {
      feature: 'Tutor-graded assessments & feedback',
      basic: false,
      premium: true,
    },
    {
      feature: 'Final exam',
      basic: false,
      premium: true,
    },
    {
      feature: 'Transcript',
      basic: false,
      premium: true,
    },
    {
      feature: 'Priority support',
      basic: false,
      premium: true,
    },
    {
      feature: 'Professional Diploma Certificate (upon meeting criteria)',
      basic: false,
      premium: true,
    },
  ];
  const glance = [
    { feature: 'Full Course Access', price: '₦50,000' },
    { feature: 'Expert Grading of Assessments', price: '₦10,000' },
    { feature: 'Final Exam & Certification', price: '₦30,000' },
    { feature: 'Official Transcript', price: '₦10,000' },
  ];
  const addOns = [
    { feature: 'One-on-One Research Clinic', price: '₦15,000' },
    { feature: 'Capstone Project Feedback', price: '₦5,000' },
  ];
  const faqs = [
    {
      question: 'Can I upgrade from Basic to Premium later?',
      answer: 'Yes—pay the difference and keep your progress.',
    },
    {
      question: 'How long do I have access?',
      answer: 'Yes—pay the difference and keep your progress.',
    },
    {
      question: 'Do I get a certificate on Basic?',
      answer: 'Yes—pay the difference and keep your progress.',
    },
    {
      question: 'Is there a transcript?',
      answer: 'Yes—pay the difference and keep your progress.',
    },
    {
      question: 'What payment options are available?',
      answer: 'Yes—pay the difference and keep your progress.',
    },
  ];
  return (
    <>
      <section className='min-h-screen w-full flex flex-col items-center px-10 py-20'>
        <div className='mt-10 flex flex-col items-center'>
          <h2 className='text-[#800080] text-[18px] font-semibold uppercase'>
            Plans & Pricing
          </h2>
          <h3 className='text-[48px] font-[700]'>Choose your plan</h3>
        </div>
        <div className='flex md:flex-row flex-col gap-5 mt-4'>
          <div className='relative flex flex-col h-[691px] w-[400px] border border-[#D9D9D9] items-center py-4 px-2'>
            <div className='flex flex-col items-center m-4 px-2 py-4'>
              <h4 className='text-[24px] font-[700]'>Basic</h4>
              <h4 className='text-[36px] font-[700]'>₦50,000</h4>
            </div>
            <div className='flex flex-col items-start w-full px-2 py-4 m-4'>
              <h4 className='text-[18px] font-[700] my-4'>Key Features</h4>
              <div>
                {features
                  .filter((feature) => feature.basic)
                  .map((f) => (
                    <div key={f.feature} className='flex items-center gap-3'>
                      <Check strokeWidth={3} color='#800080' />
                      <p className='text-[16px]'>{f.feature}</p>
                    </div>
                  ))}
              </div>
            </div>
            <button className='text-[24px] text-white font-[700] bg-[#800080] rounded-[5px] px-[60px] py-[20px] absolute bottom-20'>
              Get Started
            </button>
          </div>
          <div className='flex flex-col h-[691px] w-[400px] border border-[#D9D9D9] items-center py-4 px-2 bg-[linear-gradient(30deg,rgba(159,63,159,0.8),rgba(251,239,255,0.9),rgba(251,239,255,1),rgba(159,63,159,0.8))] relative'>
            <button className='uppercase text-[12px] text-white font-bold absolute top-[-16px] left-[50px] px-4 py-2 bg-[#800080] rounded-[50px]'>
              recommended
            </button>
            <h4 className='text-[24px] font-[700] self-start mt-4'>Premium</h4>
            <div className='flex flex-col items-center px-2 py-1'>
              <h4 className='text-[16px] font-[700] line-through '>₦100,000</h4>
              <h4 className='text-[36px] font-[700] mb-2'>₦90,000</h4>
              <button className='bg-[linear-gradient(30deg,rgba(239,184,50,1),rgba(254,240,146,1),rgba(239,84,50,1))] px-[12px] py-[px] rounded-[50px] text-[12px] font-semibold'>
                Save ₦10,000
              </button>
            </div>
            <div className='flex flex-col items-start w-full px-2 py-4 m-4'>
              <h4 className='text-[18px] font-[700] my-4'>
                Everything in Basic plus...
              </h4>
              <div>
                {features
                  .filter((feature) => !feature.basic)
                  .map((f) => (
                    <div key={f.feature} className='flex items-center gap-3'>
                      <Check strokeWidth={3} color='#800080' />
                      <p className='text-[16px] w-full'>{f.feature}</p>
                    </div>
                  ))}
              </div>
            </div>
            <button className='text-[24px] text-white font-[700] bg-[#800080] rounded-[5px] px-[60px] py-[20px] absolute bottom-20'>
              Get Started
            </button>
          </div>
        </div>
        <div className='w-full flex items-center flex-col'>
          <table className='bg-white mt-10 md:w-[70%] shadow-sm'>
            <thead className='bg-[rgba(251,239,255,0.4)] shadow-b-sm'>
              <tr>
                <th className='text-left text-[16px] font-[500] px-2 py-1'>
                  Features
                </th>
                <th className='text-left text-[16px] font-[500] px-2 py-1'>
                  Basic
                </th>
                <th className='text-left text-[16px] font-[500] px-2 py-1'>
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr
                  key={f.feature}
                  className='border-b-[1px] border-b-[rgba(237,238,241,1)] last:border-b-0'
                >
                  <td className='py-1 px-2 text-[18px]'>{f.feature}</td>
                  <td className='py-1 px-2'>
                    {f.basic ? (
                      <Check
                        color='#800080'
                        className='p-1 border-2 rounded-full border-[#800080]'
                        strokeWidth={4}
                      />
                    ) : (
                      <Minus color='#800080' />
                    )}
                  </td>
                  <td className='py-1 px-2'>
                    {f.premium ? (
                      <Check
                        color='#800080'
                        className='p-1 border-2 rounded-full border-[#800080]'
                        strokeWidth={4}
                      />
                    ) : (
                      <Minus color='#800080' />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href='' className='text-[#800080] flex items-center mt-5'>
            <p className='mr-5 text-[20px]'>View certification requirements</p>
            <ArrowRight color='#800080' />
          </a>
        </div>
        <div className='mt-10 flex flex-col md:flex-row items-start px-20 justify-around w-full'>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
              <h3 className='text-[36px] font-bold'>Everything at a Glance</h3>
              <p className='text-[16px]'>
                A transparent view of what you’re paying for — and what it’s
                really worth.
              </p>
            </div>
            <table className='bg-white shadow-sm w-full mt-2'>
              <thead className='bg-[rgba(251,239,255,0.4)] shadow-b-sm'>
                <tr>
                  <th className='text-left text-[16px] font-[500] px-2 py-1'>
                    Features
                  </th>
                  <th className='text-left text-[16px] font-[500] px-2 py-1'>
                    Individual Price
                  </th>
                  <th className='text-left text-[16px] font-[500] px-2 py-1'>
                    Included Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                {glance.map((g) => (
                  <tr
                    key={g.feature}
                    className='border-b-[1px] border-b-[rgba(237,238,241,1)] last:border-b-0'
                  >
                    <td className='py-1 px-2 text-[18px]'>{g.feature}</td>
                    <td className='py-1 px-2 text-[18px]'>{g.price}</td>
                    <td>
                      <Check
                        color='#800080'
                        className='p-1 border-2 rounded-full border-[#800080]'
                        strokeWidth={4}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='flex flex-col items-center mt-4 md:mt-0'>
            <div className='flex flex-col items-center'>
              <h3 className='text-[36px] font-bold'>Optional Add-ons</h3>
              <p className='text-[16px]'>NB: Not included in package</p>
            </div>
            <table className='bg-white w-full mt-2 shadow-sm'>
              <thead className='bg-[rgba(251,239,255,0.4)] shadow-b-sm'>
                <tr>
                  <th className='text-left text-[16px] font-[500] px-2 py-1'>
                    Features
                  </th>
                  <th className='text-left text-[16px] font-[500] px-2 py-1'>
                    Individual Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((g) => (
                  <tr
                    key={g.feature}
                    className='border-b-[1px] border-b-[rgba(237,238,241,1)] last:border-b-0'
                  >
                    <td className='py-1 px-2 text-[18px]'>{g.feature}</td>
                    <td className='py-1 px-2 text-[18px]'>{g.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='w-[80%] mt-20'>
            <h3 className='text-[36px] font-bold text-center mb-5'>Frequently Asked Questions</h3>
          <FAQs faqs={faqs} />
        </div>
      </section>
    </>
  );
};

export default Pricing;
