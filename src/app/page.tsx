"use client"

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { ScholarCap, Search, Project, Badge } from "@/components/icons/index";
import { ArrowRight, Quote } from 'lucide-react';
import { motion, useReducedMotion, easeOut, easeInOut } from "framer-motion";

export default function Page() {
  const shouldReduceMotion = useReducedMotion()

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: easeOut }
  }

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  }

  const staggerItem = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.5 }
  }

  const buttonHover = {
    whileHover: shouldReduceMotion ? {} : { scale: 1.05, y: -2 },
    whileTap: shouldReduceMotion ? {} : { scale: 0.95 },
    transition: { duration: 0.2, ease: easeOut }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <Header />

      {/* Hero */}
      <section className="relative bg-[url('/hero-image.png')] bg-no-repeat bg-cover bg-center">
      {/* Overlay */}
  <div className="lg:hidden absolute inset-0 bg-[#351046] opacity-70"></div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 md:pt-16 md:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-14 lg:mt-">
            <motion.div 
              className="text-white"
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: easeOut }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 1, ease: easeOut, delay: shouldReduceMotion ? 0 : 0.2 }}
              >
                {"Connect."}
                <br />
                {"Learn. Grow."}
              </motion.h1>
              <motion.p 
                className="mt-6 text-base md:text-lg lg:text-xl text-[#D9C7E8] max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
              >
                {
                  "Advance your skills through structured research and innovation courses curated by the Directorate of Research, Innovation and Development (DRID), University of Benin."
                }
              </motion.p>
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.6 }}
              >
                <motion.a
                  href="auth/register"
                  className="inline-flex items-center justify-center rounded-md bg-[#7E1A95] hover:bg-[#6F1584] text-white font-semibold px-6 md:px-8 py-3 md:py-4 transition-colors shadow-lg"
                  {...buttonHover}
                >
                  {"REGISTER NOW"}
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div 
  className="relative hidden lg:block"
  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: easeOut, delay: shouldReduceMotion ? 0 : 0.3 }}
>
  <motion.div 
    className="relative hover:transform hover:rotate-3 rotate-0 hover:transition-transform duration-500"
    whileHover={shouldReduceMotion ? {} : { rotate: 3, scale: 1.02 }}
    transition={{ duration: 0.5, ease: easeOut }}
  >
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
  </motion.div>
</motion.div>
          </div>
        </div>
      </section>

      <div className="bg-[#FBEFFF]">
      {/* About the DRID Course */}
      <section className="py-13 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div {...fadeInUp} viewport={{ once: true, margin: "10px" }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">{"About the DRID Course"}</h2>
            <p className="mt-4 text-gray-700 text-lg max-w-2xl">
              {
                "Get cutting-edge research and innovation training through our online, expert-led course tailored for students, researchers, and professionals."
              }
            </p>

            <motion.ul 
              className="mt-8 space-y-5 text-base md:text-lg"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.li className="flex items-start gap-3" variants={staggerItem}>
                <span><ScholarCap/></span>
                <span className="text-[#1F1F1F]">{"Learn from experienced faculty"}</span>
              </motion.li>
              <motion.li className="flex items-start gap-3" variants={staggerItem}>
                <span><Search/></span>
                <span className="text-[#1F1F1F]">{"Research-driven practical insights"}</span>
              </motion.li>
              <motion.li className="flex items-start gap-3" variants={staggerItem}>
                <span><Badge/></span>
                <span className="text-[#1F1F1F]">{"Award-winning curriculum"}</span>
              </motion.li>
              <motion.li className="flex items-start gap-3" variants={staggerItem}>
                <span><Project/></span>
                <span className="text-[#1F1F1F]">{"Hands-on case studies and projects"}</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div 
            className="relative"
            {...fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute -inset-4 blur-4xl" aria-hidden="true" />
            <div className="relative hidden lg:block">
              <Image
                src="/about-illustration.png"
                width={900}
                height={450}
                alt="Course illustration with books, cap and magnifier"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Modules Preview */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            {...fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">{"Course Modules Preview"}</h2>
            <p className="mt-3 text-gray-700 text-lg">
              {"Explore core topics covered in the DRID course"}
            </p>
          </motion.div>

          <div className="relative mt-10 lg:mt-12">
            {/* Decorative docs illustration on the right */}
            <motion.div 
              className="hidden md:block absolute -top-28 right-0"
              initial={{ opacity: 0, rotate: shouldReduceMotion ? 0 : -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src="/modules-illustration.png"
                width={220}
                height={160}
                alt="Documents graphic"
                className="w-[160px] lg:w-[200px] h-auto"
              />
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 z-10 relative"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
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

            <motion.div 
              className="mt-10 flex justify-center"
              {...fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.a
                href="/about-course#curriculum"
                className="inline-flex items-center rounded-md border-2 border-[#7E1A95] text-[#7E1A95] px-6 py-3 font-semibold hover:bg-[#7E1A95] hover:text-white transition-colors"
                {...buttonHover}
              >
                {"View Full Curriculum"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What learners are saying */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-center text-3xl md:text-4xl font-extrabold text-[#1F1F1F]"
            {...fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
          >
            {"What learners are saying"}
          </motion.h2>

          <motion.div 
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            <TestimonialCard name="Royal O." />
            <TestimonialCard name="Caleb U." />
            <TestimonialCard name="Joseph O." />
          </motion.div>

          <motion.div 
            className="mt-6 text-center"
            {...fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.a
              href="#more-testimonials"
              className="inline-flex items-center text-[#7E1A95] font-semibold hover:text-[#6F1584] transition-colors"
              whileHover={shouldReduceMotion ? {} : { x: 5 }}
              transition={{ duration: 0.2, ease: easeOut }}
            >
              {"See More"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 lg:py-24">
        <motion.div 
          className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          {...fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#7E1A95] text-white text-3xl font-bold"
            whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6, ease: easeOut }}
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
            <motion.a
              href="#faqs"
              className="inline-flex items-center text-[#7E1A95] font-semibold hover:text-[#6F1584] transition-colors"
              whileHover={shouldReduceMotion ? {} : { x: 5 }}
              transition={{ duration: 0.2, ease: easeOut }}
            >
              {"View FAQs"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section id="register" className="py-16 md:py-20 lg:py-24">
        <motion.div 
          className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          {...fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">
            {"Ready to start learning with DRID?"}
          </h2>
          <p className="mt-3 text-gray-700 text-lg">
            {
              "Join a growing community of learners across Nigeria. Gain skills. Earn certificates. Grow your future."
            }
          </p>
          <motion.div 
            className="mt-8 space-y-5"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={staggerItem}>
              <motion.a
                href="auth/register"
                className="inline-flex items-center justify-center rounded-md bg-[#7E1A95] hover:bg-[#6F1584] text-white font-semibold px-8 py-4 transition-colors shadow-lg"
                {...buttonHover}
              >
                {"REGISTER NOW"}
              </motion.a>
            </motion.div>

            <motion.div className="text-gray-600" variants={staggerItem}>
              <p className="mb-3">{"Not sure yet?"}</p>
              <motion.a
                href="/about-course#curriculum"
                className="inline-flex items-center rounded-md border-2 border-[#7E1A95] text-[#7E1A95] px-6 py-3 font-semibold hover:bg-[#7E1A95] hover:text-white transition-colors"
                {...buttonHover}
              >
                {"View Full Curriculum"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      </div>
      <Footer />
    </div>
  )
}

function ModuleCard({
  number,
  title,
  desc,
}: {
  number: number
  title: string
  desc: string
}) {
  const shouldReduceMotion = useReducedMotion()
  
  const staggerItem = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.5 }
  }

  const hoverEffect = {
    whileHover: shouldReduceMotion ? {} : { y: -5, scale: 1.02 },
    transition: { duration: 0.2, ease: easeOut }
  }

  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 md:p-7 shadow-sm ring-1 ring-black/5"
      variants={staggerItem}
      {...hoverEffect}
    >
      <div className="flex items-start gap-4">
        <motion.div 
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7E1A95] text-white font-bold"
          whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
          transition={{ duration: 0.2, ease: easeOut }}
        >
          {number}
        </motion.div>
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-extrabold text-[#1F1F1F]">{title}</h3>
          <p className="mt-2 text-gray-700">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

function TestimonialCard({ name }: { name: string }) {
  const shouldReduceMotion = useReducedMotion()
  
  const staggerItem = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.5 }
  }

  const hoverEffect = {
    whileHover: shouldReduceMotion ? {} : { y: -3, scale: 1.02 },
    transition: { duration: 0.2, ease: easeInOut }
  }

  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5"
      variants={staggerItem}
      {...hoverEffect}
    >
      <Quote className="h-6 w-6 text-[#7E1A95] mb-4" />
      <p className="text-gray-700 leading-relaxed">
        {"Lorem ipsum dolor sit amet consectetur. Faucibus lectus lacus nunc eget pretium ipsum cras interdum turpis."}
      </p>
      <p className="mt-6 font-semibold text-[#1F1F1F]">{"— "}{name}</p>
    </motion.div>
  )
}
