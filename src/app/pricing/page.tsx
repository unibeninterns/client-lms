"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Check, Minus, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { easeOut, motion, useReducedMotion } from "framer-motion";
import { Star1, Star2, Star3, Star4 } from "@/components/icons";

export default function PricingPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#FBEFFFB2]/70">
      <Header />

      <div className="bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section with Pricing Cards */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#800080] uppercase tracking-wide mb-2">
              PLANS & PRICING
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1F1F1F]">
              Choose your plan
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto justify-center items-center">
            {/* Basic Plan */}
            <motion.div 
              className="relative flex flex-col h-[600px] w-[335px] xs:h-[691px] xs:w-[400px] bg-white border border-[#EAEAEA] items-center py-4 px-2 shadow-sm"
              whileHover={shouldReduceMotion ? {} : { 
                y: -8,
                boxShadow: "0 10px 40px rgba(128, 0, 128, 0.15)"
              }}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              <div className="flex flex-col items-center m-4 px-2 py-4">
                <h2 className="text-2xl font-bold text-[#1F1F1F] mb-3">Basic</h2>
                <div className="text-4xl font-extrabold text-[#1F1F1F]">
                  ₦50,000
                </div>
              </div>

              <div className="flex flex-col items-start w-full px-2 py-4 m-4 flex-grow">
                <h3 className="text-lg font-bold text-[#1F1F1F] mb-3">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check className="h-6 w-6 pl-1 text-[#800080]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      12 modules (self-paced, 12 weeks)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check className="h-6 w-6 pl-1 text-[#800080]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Live sessions (2× weekly)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check className="h-6 w-6 pl-1 text-[#800080]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Resources & templates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Check className="h-6 w-6 pb-1 pl-1 text-[#800080]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Student forum access
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Check className="h-6 w-6 pb-1 pl-1 text-[#800080]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Practice quizzes
                    </span>
                  </li>
                </ul>
              </div>

              <motion.button
                onClick={() => window.location.href = '/auth/register'}
                className="w-[200px] xs:w-[280px] bg-[#800080] hover:bg-[#690069] text-white font-bold py-4 px-10 xs:px-16 rounded-[4px] xs:rounded-[5px] transition-colors text-sm xs:text-lg absolute bottom-14 xs:bottom-20"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div 
              className="relative flex flex-col h-[610px] w-[335px] xs:h-[691px] xs:w-[400px] items-center py-4 px-2 shadow-sm"
              style={{
                background: 'linear-gradient(20deg, rgba(159, 63, 159, 0.8), rgba(251, 239, 255, 0.9) 28%, rgba(251, 239, 255, 1) 68%, rgba(159, 63, 159, 0.8))'
              }}
              whileHover={shouldReduceMotion ? {} : { 
                y: -12,
                boxShadow: "0 15px 50px rgba(128, 0, 128, 0.25)"
              }}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              {/* Star Icons Placeholders */}
              <div className="absolute w-9 h-9 top-6 left-8">
                <Star1 />
              </div>
              <div className="absolute top-14 right-18">
                <Star2 />
              </div>
              <div className="absolute bottom-40 left-6">
                <Star4 />
              </div>
              <div className="absolute top-53 right-10">
                <Star3 />
              </div>

              {/* Recommended Badge */}
              <div className="absolute -top-3 left-1/3 -translate-x-1/2">
                <div className="bg-[#800080] text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  RECOMMENDED
                </div>
              </div>

                <h2 className="text-2xl font-bold text-[#1F1F1F] mb-1 self-start pl-4 pt-6">
                  Premium
                </h2>
              <div className="flex flex-col items-center mx-4 xs:m-4 px-2 py-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-sm text-gray-600 line-through">
                    ₦100,000
                  </span>
                </div>
                <div className="text-4xl font-extrabold text-[#1F1F1F] mb-3">
                  ₦90,000
                </div>
                <div 
                  className="inline-block px-3 py-1 text-sm font-bold text-black rounded-full" 
                  style={{ 
                    background: 'linear-gradient(45deg, #EFB832 20%, #FEF092 50%, #EFB832 80%)' 
                  }}
                >
                  Save ₦10,000
                </div>
              </div>

              <div className="flex flex-col items-start w-full px-2 py-4 mx-4 xs:m-4 flex-grow">
                <h3 className="text-lg font-bold text-[#1F1F1F] mb-3">
                  Everything in Basic plus...
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check className="h-6 w-6 pl-1 text-[#800080]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Priority support
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check className="h-6 w-6 pl-1 text-[#800080]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Graded assessments + final exam
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check className="h-6 w-6 pl-1 text-[#800080]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed w-full">
                      Professional Diploma certificate (upon meeting criteria)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Check className="h-6 w-6 pb-1 pl-1 text-[#800080]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Official transcript
                    </span>
                  </li>
                </ul>
              </div>

              <motion.button 
                onClick={() => window.location.href = '/auth/register'}
                className="w-[200px] xs:w-[280px] bg-[#800080] hover:bg-[#690069] text-white font-bold py-4 px-10 xs:px-16 rounded-[4px] xs:rounded-[5px] transition-colors text-sm xs:text-lg absolute bottom-14 xs:bottom-20"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>

          <p className="text-center text-gray-800 mt-6 text-sm">
            NB: Access auto-expires after 12 weeks.
          </p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-4 md:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm py-0 shadow-sm border border-[#EAEAEA]">
            <div className="overflow-x-auto">
              <table className="w-full sm:table-fixed">
                <thead>
                  <tr className="border-b border-[#EAEAEA] bg-[#F9F9F9]">
                    <th className="sm:w-2/5 text-left py-4 pr-4 pl-4 text-sm font-bold text-[#1F1F1F]">
                      Features
                    </th>
                    <th className="sm:w-1/5 text-center py-4 px-4 text-sm font-bold text-[#1F1F1F]">
                      Basic
                    </th>
                    <th className="sm:w-2/5 text-center py-4 px-4 text-sm font-bold text-[#1F1F1F]">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2F2F2]">
                  <FeatureRow
                    feature="12 modules (self-paced, 12 weeks)"
                    basic={true}
                    premium={true}
                  />
                  <FeatureRow
                    feature="Two live sessions per week"
                    basic={true}
                    premium={true}
                  />
                  <FeatureRow
                    feature="Resources & templates"
                    basic={true}
                    premium={true}
                  />
                  <FeatureRow
                    feature="Student forum access"
                    basic={true}
                    premium={true}
                  />
                  <FeatureRow
                    feature="Practice quizzes"
                    basic={true}
                    premium={true}
                  />
                  <FeatureRow
                    feature="Tutor-graded assessments & feedback"
                    basic={false}
                    premium={true}
                  />
                  <FeatureRow feature="Final exam" basic={false} premium={true} />
                  <FeatureRow feature="Transcript" basic={false} premium={true} />
                  <FeatureRow
                    feature="Priority support"
                    basic={false}
                    premium={true}
                  />
                  <FeatureRow
                    feature="Professional Diploma Certificate (upon meeting criteria)"
                    basic={false}
                    premium={true}
                  />
                </tbody>
              </table>
            </div>
          </div>
            <motion.div 
            className="ml-6 mt-6 text-left"
          >
            <motion.a
              href="about-course#certification-requirements"
              className="text-[#800080] font-semibold hover:text-[#690069] transition-colors inline-flex items-center text-sm hover:bg-[#F9DBFF3D] rounded-full p-2"
              whileHover={shouldReduceMotion ? {} : { x: 5 }}
              transition={{ duration: 0.2, ease: easeOut }}
            >
              {"View certification requirements"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Everything at a Glance */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Everything at a Glance */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-3">
                Everything at a Glance
              </h2>
              <p className="text-gray-900 mb-6 text-sm">
                A transparent view of what you&apos;re paying for — and what it&apos;s
                really worth.
              </p>

              <div className="bg-white rounded-sm py-0 shadow-sm border border-[#EAEAEA]">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#EAEAEA] bg-[#F9F9F9]">
                      <th className="text-left py-3 pr-3 pl-3 text-xs font-semibold text-gray-900">
                        Features
                      </th>
                      <th className="text-right py-3 px-3 text-xs font-semibold text-gray-900">
                        Individual Price
                      </th>
                      <th className="text-center py-3 pl-3 pr-1  text-xs font-semibold text-gray-900">
                        Included in Premium Plan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <PriceBreakdownRow
                      feature="Full Course Access"
                      price="₦50,000"
                      included={true}
                    />
                    <PriceBreakdownRow
                      feature="Expert Grading of Assessments"
                      price="₦10,000"
                      included={true}
                    />
                    <PriceBreakdownRow
                      feature="Final Exam & Certification"
                      price="₦30,000"
                      included={true}
                    />
                    <PriceBreakdownRow
                      feature="Official Transcript"
                      price="₦10,000"
                      included={true}
                    />
                  </tbody>
                </table>
              </div>
              

                <div className="overflow-x-auto flex items-center py-4 pl-2 border-t border-[#EAEAEA] mt-0.5">
                <div className="mr-12 xs:mr-30 sm:mr-60 md:mr-80 lg:mr-48">
                  <div className="text-sm font-bold text-[#1F1F1F]">
                  Total Value
                  </div>
                  <div className="text-lg font-extrabold text-[#1F1F1F]">
                  ₦100,000
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-10 md:gap-16 lg:gap-12"> {/* Wrapped last two items */}
                  <div>
                  <div className="text-sm font-bold text-[#1F1F1F]">
                    Premium Price
                  </div>
                  <div className="text-lg font-extrabold text-[#1F1F1F]">
                    ₦90,000
                  </div>
                  </div>
                  <div className="text-right">
                  <div className="text-sm font-bold text-[#1F1F1F]">
                    You Save
                  </div>
                  <div 
  className="inline-block px-3 py-1 text-sm font-extrabold text-black rounded-full" 
  style={{ 
    background: 'linear-gradient(45deg, #EFB832 20%, #FEF092 50%, #EFB832 80%)' 
  }}
>
                    ₦10,000
                  </div>
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* Right Column - Optional Add-ons */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-3">
                Optional Add-ons
              </h2>
              <p className="text-gray-900 mb-6 text-sm">
                NB: Not included in package
              </p>

              <div className="bg-white rounded-sm py-0 shadow-sm border border-[#EAEAEA]">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#EAEAEA ] bg-[#F9F9F9]">
                      <th className="text-left py-3 pr-3 pl-3 text-xs font-semibold text-gray-900">
                        Features
                      </th>
                      <th className="text-right py-3 pl-3 pr-1 lg:pr-1 md:pr-0 md:items-center md:flex lg:block text-xs font-semibold text-gray-900">
                        Individual Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <AddOnRow
                      feature="One-on-One Research Clinic"
                      price="₦15,000"
                    />
                    <AddOnRow
                      feature="Capstone Project Feedback"
                      price="₦5,000"
                    />
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <PricingFAQ />
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
}

function FeatureRow({
  feature,
  basic,
  premium,
}: {
  feature: string;
  basic: boolean;
  premium: boolean;
}) {
  return (
    <tr>
      <td className="py-3 px-2 pr-4 text-sm text-gray-900">{feature}</td>
      <td className="text-center py-3 px-4">
        {basic ? (
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#800080] bg-white">
            <Check className="h-2.5 w-2.5 text-[#800080]" />
          </div>
        ) : (
          <Minus className="h-4 w-4 text-gray-500 mx-auto" />
        )}
      </td>
      <td className="text-center py-3 px-4">
        {premium ? (
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#800080] bg-white">
            <Check className="h-2.5 w-2.5 text-[#800080]" />
          </div>
        ) : (
          <Minus className="h-4 w-4 text-gray-500 mx-auto" />
        )}
      </td>
    </tr>
  );
}

function PriceBreakdownRow({
  feature,
  price,
  included,
}: {
  feature: string;
  price: string;
  included: boolean;
}) {
  return (
    <tr>
      <td className="py-3 pr-3 px-2 text-sm text-gray-900">{feature}</td>
      <td className="text-right py-3 px-3 font-semibold text-gray-900 text-sm">
        {price}
      </td>
      <td className="text-center py-3 pl-3">
        {included && (
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#800080] bg-white">
            <Check className="h-2.5 w-2.5 text-[#800080]" />
          </div>
        )}
      </td>
    </tr>
  );
}

function AddOnRow({ feature, price }: { feature: string; price: string }) {
  return (
    <tr>
      <td className="py-3 pr-3 px-2 text-sm text-gray-900">{feature}</td>
      <td className="text-right py-3 pl-3 lg:pl-3 md:pl-6 px-4 lg:px-4 md:px-0 md:items-center md:flex lg:block font-semibold text-gray-900 text-sm">
        {price}
      </td>
    </tr>
  );
}

function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can I upgrade from Basic to Premium later?",
      answer: "Yes—pay the difference and keep your progress.",
    },
    {
      question: "How long do I have access?",
      answer:
        "You have access for the full 12-week duration of the course, plus an additional 2 weeks for completion of final assessments.",
    },
    {
      question: "Do I get a certificate on Basic?",
      answer:
        "Basic plan includes course completion recognition, but the official Professional Diploma Certificate is only available with the Premium plan upon meeting all criteria.",
    },
    {
      question: "Is there a transcript?",
      answer:
        "Official transcripts are only available with the Premium plan. Basic plan students receive a course completion summary.",
    },
    {
      question: "What payment options are available?",
      answer:
        "We accept bank transfers, card payments, and mobile money. Payment plans are available for both Basic and Premium options.",
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-[#EAEAEA] rounded-2xl bg-white"
        >
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#F9F9F9] rounded-2xl transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold text-gray-900">
              {faq.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-800 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}