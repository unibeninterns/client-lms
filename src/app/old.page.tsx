"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { ArrowRight, Award, GraduationCap, Quote, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />

      {/* Hero - No animation as it's above fold */}
      <section className="relative bg-[url('/hero-image.png')] bg-no-repeat bg-cover bg-center">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 md:pt-16 md:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-14 lg:mt-">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                {"Connect."}
                <br />
                {"Learn. Grow."}
              </h1>
              <p className="mt-6 text-base md:text-lg lg:text-xl text-[#D9C7E8] max-w-xl">
                {
                  "Advance your skills through structured research and innovation courses curated by the Directorate of Research, Innovation and Development (DRID), University of Benin."
                }
              </p>
              <div className="mt-8">
                <a
                  href="auth/register"
                  className="inline-flex items-center justify-center rounded-md bg-[#7E1A95] hover:bg-[#6F1584] text-white font-semibold px-6 md:px-8 py-3 md:py-4 transition-colors shadow-lg"
                >
                  {"REGISTER NOW"}
                </a>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="relative hover:transform hover:rotate-3 rotate-0 hover:transition-transform duration-500">
              <div className="absolute -inset-6" aria-hidden="true" />
              <div className="relative rounded-[20px] p-1 md:p-2">
                <Image
                  src="/hero-illustration.png"
                  width={820}
                  height={620}
                  alt="People collaborating at computers"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the DRID Course - Image fade-in animation */}
      <AboutSection />

      {/* Course Modules Preview - Card animations */}
      <ModulesSection />

      {/* What learners are saying - Testimonial cards animation */}
      <TestimonialsSection />

      {/* FAQ - Simple fade-in for icon */}
      <FAQSection />

      {/* Final CTA */}
      <section id="register" className="py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">
            {"Ready to start learning with DRID?"}
          </h2>
          <p className="mt-3 text-gray-700 text-lg">
            {
              "Join a growing community of learners across Nigeria. Gain skills. Earn certificates. Grow your future."
            }
          </p>
          <div className="mt-8 space-y-5">
            <a
              href="auth/register"
              className="inline-flex items-center justify-center rounded-md bg-[#7E1A95] hover:bg-[#6F1584] text-white font-semibold px-8 py-4 transition-colors shadow-lg"
            >
              {"REGISTER NOW"}
            </a>

            <div className="text-gray-600">
              <p className="mb-3">{"Not sure yet?"}</p>
              <a
                href="/about-course#curriculum"
                className="inline-flex items-center rounded-md border-2 border-[#7E1A95] text-[#7E1A95] px-6 py-3 font-semibold hover:bg-[#7E1A95] hover:text-white transition-colors"
              >
                {"View Full Curriculum"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

// Animated About Section Component
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    amount: 0.6, 
    once: true 
  })

  return (
    <section className="py-13 md:py-16 lg:py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">{"About the DRID Course"}</h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl">
            {
              "Get cutting-edge research and innovation training through our online, expert-led course tailored for students, researchers, and professionals."
            }
          </p>

          <ul className="mt-8 space-y-5 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span><GraduationCap className="h-6 w-6 text-[#7E1A95]" /></span>
              <span className="text-[#1F1F1F]">{"Learn from experienced faculty"}</span>
            </li>
            <li className="flex items-start gap-3">
              <span><Search className="h-6 w-6 text-[#7E1A95]" /></span>
              <span className="text-[#1F1F1F]">{"Research-driven practical insights"}</span>
            </li>
            <li className="flex items-start gap-3">
              <span><Award className="h-6 w-6 text-[#7E1A95]" /></span>
              <span className="text-[#1F1F1F]">{"Award-winning curriculum"}</span>
            </li>
            <li className="flex items-start gap-3">
              <span><Award className="h-6 w-6 text-[#7E1A95]" /></span>
              <span className="text-[#1F1F1F]">{"Hands-on case studies and projects"}</span>
            </li>
          </ul>
        </div>

        {/* Animation rationale: Image fade-in enhances visual engagement for non-textual content with sufficient whitespace */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 0.23, 0.32, 0.96],
            delay: 0.1 
          }}
        >
          <div className="absolute -inset-4 blur-4xl bg-gradient-to-br from-pink-50 to-purple-50" aria-hidden="true" />
          <div className="relative hidden lg:block">
            <Image
              src="/about-illustration.png"
              width={900}
              height={450}
              alt="Course illustration with books, cap and magnifier"
              className="w-full h-auto bg-gradient-to-br from-pink-50 to-purple-50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Animated Modules Section
function ModulesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    amount: 0.6, 
    once: true 
  })

  return (
    <section className="py-16 md:py-20 lg:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">{"Course Modules Preview"}</h2>
          <p className="mt-3 text-gray-700 text-lg">
            {"Explore core topics covered in the DRID course"}
          </p>
        </div>

        <div className="relative mt-10 lg:mt-12">
          {/* Animation rationale: Decorative illustration fade-in for visual enhancement */}
          <motion.div 
            className="hidden md:block absolute -top-28 right-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 0.23, 0.32, 0.96],
              delay: 0.2 
            }}
          >
            <Image
              src="/modules-illustration.png"
              width={220}
              height={160}
              alt="Documents graphic"
              className="w-[160px] lg:w-[200px] h-auto"
            />
          </motion.div>

          {/* Animation rationale: Module cards staggered slide-in for resource card prioritization */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 z-10 relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <ModuleCard
              number={1}
              title="Week 1: Introduction to Research in the 21st Century"
              desc="Orientation, course objectives, and relevance in the digital age."
            />
            <ModuleCard
              number={2}
              title="Week 2: Research Approaches"
              desc="Explore qualitative, quantitative & mixed-method frameworks."
            />
            <ModuleCard
              number={3}
              title="Week 3: Literature Review & Knowledge Management"
              desc="Master sourcing and organizing key academic materials."
            />
            <ModuleCard
              number={4}
              title="Week 4: AI & Digital Tools for Research"
              desc="Boost research efficiency using AI tools and open-source platforms."
            />
          </motion.div>

          <div className="mt-10 flex justify-center">
            <a
              href="/about-course#curriculum"
              className="inline-flex items-center rounded-md border-2 border-[#7E1A95] text-[#7E1A95] px-6 py-3 font-semibold hover:bg-[#7E1A95] hover:text-white transition-colors"
            >
              {"View Full Curriculum"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Animated Testimonials Section
function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    amount: 0.6, 
    once: true 
  })

  return (
    <section className="py-16 md:py-20 lg:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">
          {"What learners are saying"}
        </h2>

        {/* Animation rationale: Testimonial cards staggered slide-in for visual engagement */}
        <motion.div 
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <TestimonialCard name="Royal O." />
          <TestimonialCard name="Caleb U." />
          <TestimonialCard name="Joseph O." />
        </motion.div>

        <div className="mt-6 text-center">
          <a
            href="#more-testimonials"
            className="inline-flex items-center text-[#7E1A95] font-semibold hover:text-[#6F1584] transition-colors"
          >
            {"See More"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

// Animated FAQ Section
function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    amount: 0.6, 
    once: true 
  })

  return (
    <section className="py-16 md:py-20 lg:py-24" ref={ref}>
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Animation rationale: Icon scale animation for visual accent element */}
        <motion.div 
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#7E1A95] text-white text-3xl font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 0.23, 0.32, 0.96] 
          }}
        >
          {"?"}
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">
          {"Got Questions About the Course?"}
        </h2>
        <p className="mt-3 text-gray-700 text-lg">
          {
            "We've answered your top questions on duration, requirements, certification and more."
          }
        </p>
        <div className="mt-6">
          <a
            href="#faqs"
            className="inline-flex items-center text-[#7E1A95] font-semibold hover:text-[#6F1584] transition-colors"
          >
            {"View FAQs"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

// Animated Module Card Component
function ModuleCard({
  number,
  title,
  desc,
}: {
  number: number
  title: string
  desc: string
}) {
  return (
    <motion.div 
  className="bg-white rounded-2xl p-6 md:p-7 shadow-sm ring-1 ring-black/5 prefers-reduced-motion"
  variants={{
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 0.23, 0.32, 0.96] 
      }
    }
  }}
  initial="hidden"
  animate="visible"
>
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7E1A95] text-white font-bold">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-extrabold text-[#1F1F1F]">{title}</h3>
          <p className="mt-2 text-gray-700">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Animated Testimonial Card Component
function TestimonialCard({ name }: { name: string }) {
  return (
    <motion.div
  className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5 prefers-reduced-motion"
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 0.23, 0.32, 0.96] 
      }
    }
  }}
  initial="hidden"
  animate="visible"
>
      <Quote className="h-6 w-6 text-[#7E1A95] mb-4" />
      <p className="text-gray-700 leading-relaxed">
        {"Lorem ipsum dolor sit amet consectetur. Faucibus lectus lacus nunc eget pretium ipsum cras interdum turpis."}
      </p>
      <p className="mt-6 font-semibold text-[#1F1F1F]">{"— "}{name}</p>
    </motion.div>
  )
}
