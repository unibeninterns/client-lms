"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Check, Minus, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <Header />

      <div className="bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section with Pricing Cards */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7E1A95] uppercase tracking-wide mb-2">
              PLANS & PRICING
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1F1F1F]">
              Choose your plan
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-sm p-6 shadow-sm border border-[#EAEAEA]">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#1F1F1F] mb-3">Basic</h2>
                <div className="text-4xl font-extrabold text-[#1F1F1F] mb-4">
                  ₦50,000
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#1F1F1F] mb-3">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check className="h-6 w-6 text-[#7E1A95]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      12 modules (self-paced, 12 weeks)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check className="h-6 w-6 text-[#7E1A95]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Live sessions (2× weekly)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check className="h-6 w-6 text-[#7E1A95]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Resources & templates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Check className="h-6 w-6 text-[#7E1A95]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Student forum access
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Check className="h-6 w-6 text-[#7E1A95]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Practice quizzes
                    </span>
                  </li>
                </ul>
              </div>

                <button
                onClick={() => window.location.href = '/auth/register'}
                className="w-full bg-[#7E1A95] hover:bg-[#6F1584] text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                Get Started
                </button>
            </div>

            {/* Premium Plan */}
            <div className="relative bg-gradient-to-br from-[#E8D5F2] to-[#D4B8E8] rounded-sm p-6 shadow-sm">
              {/* Recommended Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-[#7E1A95] text-white px-4 py-1 rounded-full text-xs font-bold">
                  RECOMMENDED
                </div>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#1F1F1F] mb-1">
                  Premium
                </h2>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-sm text-gray-600 line-through">
                    ₦100,000
                  </span>
                </div>
                <div className="text-4xl font-extrabold text-[#1F1F1F] mb-3">
                  ₦90,000
                </div>
                <div className="inline-block bg-[#F59E0B] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Save ₦10,000
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#1F1F1F] mb-3">
                  Everything in Basic plus...
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check className="h-6 w-6 text-[#7E1A95]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Priority support
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check className="h-6 w-6 text-[#7E1A95]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Graded assessments + final exam
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check className="h-6 w-6 text-[#7E1A95]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Professional Diploma certificate (upon meeting criteria)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Check className="h-6 w-6 text-[#7E1A95]" />
                    </div>
                    <span className="text-sm text-gray-900 leading-relaxed">
                      Official transcript
                    </span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => window.location.href = '/auth/register'}
                className="w-full bg-[#7E1A95] hover:bg-[#6F1584] text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                Get Started
              </button>
            </div>
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
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#EAEAEA] bg-[#F9F9F9]">
                    <th className="text-left py-4 pr-4 pl-4 text-sm font-bold text-[#1F1F1F]">
                      Features
                    </th>
                    <th className="text-center py-4 px-4 text-sm font-bold text-[#1F1F1F]">
                      Basic
                    </th>
                    <th className="text-center py-4 px-4 text-sm font-bold text-[#1F1F1F]">
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
            <div className="ml-6 mt-6 text-left">
              <button className="text-[#7E1A95] font-semibold hover:text-[#6F1584] transition-colors inline-flex items-center text-sm">
                View certification requirements
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
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
                <div className="mr-28 sm:mr-60 md:mr-80 lg:mr-48">
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
                  <div className="inline-block bg-[#F59E0B] text-white px-3 py-1 rounded-full text-sm font-extrabold">
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
          <h2 className="text-3xlxl md:text-4xl font-extrabold text-[#1F1F1F] text-center mb-12">
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
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#7E1A95] bg-white">
            <Check className="h-2.5 w-2.5 text-[#7E1A95]" />
          </div>
        ) : (
          <Minus className="h-4 w-4 text-gray-500 mx-auto" />
        )}
      </td>
      <td className="text-center py-3 px-4">
        {premium ? (
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#7E1A95] bg-white">
            <Check className="h-2.5 w-2.5 text-[#7E1A95]" />
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
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#7E1A95] bg-white">
            <Check className="h-2.5 w-2.5 text-[#7E1A95]" />
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