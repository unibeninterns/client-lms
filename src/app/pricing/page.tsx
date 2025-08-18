"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Check, Minus, ChevronDown, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Pricing Cards */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7E1A95] uppercase tracking-wide mb-2">PLANS & PRICING</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">Choose your plan</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-extrabold text-[#1F1F1F] mb-4">Basic</h2>
                <div className="text-5xl font-extrabold text-[#1F1F1F] mb-6">₦50,000</div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-extrabold text-[#1F1F1F] mb-6">Key Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#7E1A95] bg-white flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-[#7E1A95]" />
                    </div>
                    <span className="text-gray-700">12 modules (self-paced, 12 weeks)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#7E1A95] bg-white flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-[#7E1A95]" />
                    </div>
                    <span className="text-gray-700">Live sessions (2× weekly)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#7E1A95] bg-white flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-[#7E1A95]" />
                    </div>
                    <span className="text-gray-700">Resources & templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#7E1A95] bg-white flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-[#7E1A95]" />
                    </div>
                    <span className="text-gray-700">Student forum access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#7E1A95] bg-white flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-[#7E1A95]" />
                    </div>
                    <span className="text-gray-700">Practice quizzes</span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-[#7E1A95] hover:bg-[#6F1584] text-white font-semibold py-4 rounded-xl transition-colors">
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className="relative bg-gradient-to-br from-[#E8D5F2] to-[#D4B8E8] rounded-3xl p-8 shadow-sm">
              {/* Recommended Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-[#7E1A95] text-white px-6 py-2 rounded-full text-sm font-semibold">RECOMMENDED</div>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-extrabold text-[#1F1F1F] mb-2">Premium</h2>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg text-gray-500 line-through">₦100,000</span>
                </div>
                <div className="text-5xl font-extrabold text-[#1F1F1F] mb-4">₦90,000</div>
                <div className="inline-block bg-[#F59E0B] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Save ₦10,000
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-extrabold text-[#1F1F1F] mb-6">Everything in Basic plus...</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#7E1A95] bg-white flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-[#7E1A95]" />
                    </div>
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#7E1A95] bg-white flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-[#7E1A95]" />
                    </div>
                    <span className="text-gray-700">Graded assessments + final exam</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#7E1A95] bg-white flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-[#7E1A95]" />
                    </div>
                    <span className="text-gray-700">Professional Diploma certificate (upon meeting criteria)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#7E1A95] bg-white flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-[#7E1A95]" />
                    </div>
                    <span className="text-gray-700">Official transcript</span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-[#7E1A95] hover:bg-[#6F1584] text-white font-semibold py-4 rounded-xl transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">NB: Access auto-expires after 12 weeks.</p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-6 pr-8 text-lg font-extrabold text-[#1F1F1F]">Features</th>
                    <th className="text-center py-6 px-4 text-lg font-extrabold text-[#1F1F1F]">Basic</th>
                    <th className="text-center py-6 px-4 text-lg font-extrabold text-[#1F1F1F]">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <FeatureRow feature="12 modules (self-paced, 12 weeks)" basic={true} premium={true} />
                  <FeatureRow feature="Two live sessions per week" basic={true} premium={true} />
                  <FeatureRow feature="Resources & templates" basic={true} premium={true} />
                  <FeatureRow feature="Student forum access" basic={true} premium={true} />
                  <FeatureRow feature="Practice quizzes" basic={true} premium={true} />
                  <FeatureRow feature="Tutor-graded assessments & feedback" basic={false} premium={true} />
                  <FeatureRow feature="Final exam" basic={false} premium={true} />
                  <FeatureRow feature="Transcript" basic={false} premium={true} />
                  <FeatureRow feature="Priority support" basic={false} premium={true} />
                  <FeatureRow
                    feature="Professional Diploma Certificate (upon meeting criteria)"
                    basic={false}
                    premium={true}
                  />
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <button className="text-[#7E1A95] font-semibold hover:text-[#6F1584] transition-colors inline-flex items-center">
                View certification requirements
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Everything at a Glance */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Everything at a Glance */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F] mb-2">Everything at a Glance</h2>
              <p className="text-gray-600 mb-8">
                A transparent view of what you&apos;re paying for — and what it&apos;s really worth.
              </p>

              <div className="space-y-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 pr-4 text-sm font-semibold text-gray-700">Features</th>
                        <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">Individual Price</th>
                        <th className="text-center py-4 pl-4 text-sm font-semibold text-gray-700">
                          Included in Premium Plan
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <PriceBreakdownRow feature="Full Course Access" price="₦50,000" included={true} />
                      <PriceBreakdownRow feature="Expert Grading of Assessments" price="₦10,000" included={true} />
                      <PriceBreakdownRow feature="Final Exam & Certification" price="₦30,000" included={true} />
                      <PriceBreakdownRow feature="Official Transcript" price="₦10,000" included={true} />
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between items-end pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-lg font-extrabold text-[#1F1F1F]">Total Value</div>
                    <div className="text-2xl font-extrabold text-[#1F1F1F]">₦100,000</div>
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-[#1F1F1F]">Premium Price</div>
                    <div className="text-2xl font-extrabold text-[#1F1F1F]">₦90,000</div>
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-[#1F1F1F]">You Save</div>
                    <div className="inline-block bg-[#F59E0B] text-white px-4 py-2 rounded-full text-lg font-extrabold">
                      ₦10,000
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Optional Add-ons */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F] mb-2">Optional Add-ons</h2>
              <p className="text-gray-600 mb-8">NB: Not included in package</p>

              <div className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 pr-4 text-sm font-semibold text-gray-700">Features</th>
                        <th className="text-right py-4 pl-4 text-sm font-semibold text-gray-700">Individual Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <AddOnRow feature="One-on-One Research Clinic" price="₦15,000" />
                      <AddOnRow feature="Capstone Project Feedback" price="₦5,000" />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <PricingFAQ />
        </div>
      </section>

      <Footer />
    </div>
  )
}

function FeatureRow({ feature, basic, premium }: { feature: string; basic: boolean; premium: boolean }) {
  return (
    <tr>
      <td className="py-6 pr-8 text-gray-700">{feature}</td>
      <td className="text-center py-6 px-4">
        {basic ? (
          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#7E1A95] bg-white">
            <Check className="h-3 w-3 text-[#7E1A95]" />
          </div>
        ) : (
          <Minus className="h-5 w-5 text-gray-300 mx-auto" />
        )}
      </td>
      <td className="text-center py-6 px-4">
        {premium ? (
          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#7E1A95] bg-white">
            <Check className="h-3 w-3 text-[#7E1A95]" />
          </div>
        ) : (
          <Minus className="h-5 w-5 text-gray-300 mx-auto" />
        )}
      </td>
    </tr>
  )
}

function PriceBreakdownRow({ feature, price, included }: { feature: string; price: string; included: boolean }) {
  return (
    <tr>
      <td className="py-4 pr-4 text-gray-700">{feature}</td>
      <td className="text-right py-4 px-4 font-semibold text-gray-900">{price}</td>
      <td className="text-center py-4 pl-4">
        {included && (
          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#7E1A95] bg-white">
            <Check className="h-3 w-3 text-[#7E1A95]" />
          </div>
        )}
      </td>
    </tr>
  )
}

function AddOnRow({ feature, price }: { feature: string; price: string }) {
  return (
    <tr>
      <td className="py-4 pr-4 text-gray-700">{feature}</td>
      <td className="text-right py-4 pl-4 font-semibold text-gray-900">{price}</td>
    </tr>
  )
}

function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-2xl bg-white">
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold text-gray-900">{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
