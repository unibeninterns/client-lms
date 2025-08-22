"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CalendarDays, Monitor, Video, ListChecks, BriefcaseBusiness, BadgeCheck, MessageSquare, CreditCard, Check, GraduationCap, Search, Presentation, Lightbulb, Briefcase, ChevronDown, ChevronRight, X, ChevronLeft } from 'lucide-react'
import { motion, useReducedMotion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"

export default function AboutCoursePage() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <Header />

      {/* Hero section */}
      <section className="relative">
  {/* Background photo */}
  <div className="absolute inset-0">
    <Image
      src="/about-hero.jpg"
      alt="Group learning together around a laptop"
      fill
      priority
      className="object-cover object-center"
    />
    {/* Purple overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#2B0D24]/70 to-[#2F1432]/70" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <motion.div 
      className="max-w-3xl"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
    >
      <motion.h1 
        className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.2 }}
      >
        {"Welcome to the "}
        <br />
        {"DRID Course Platform"}
      </motion.h1>
      <motion.p 
        className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
      >
        {
          "A hub for dynamic research-driven training, designed to equip you with practical tools for tomorrow."
        }
      </motion.p>
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
      >
      <motion.a
          href="#curriculum"
          className="inline-flex items-center rounded-md bg-[#7E1A95] hover:bg-[#6F1584] text-white font-semibold px-6 md:px-8 py-3 md:py-4 transition-colors"
          whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {"VIEW COURSE CURRICULUM"}
        </motion.a>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Learning Experience */}
      <div id="learning-experience" className="bg-gradient-to-br from-pink-50 to-purple-50">
  <section className="py-14 md:py-20 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">
            The DRID Learning Experience
          </h2>
          <motion.p 
            className="mt-4 text-gray-800 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
            viewport={{ once: true }}
          >
            {
              "The Professional Diploma in Research Technologies and Innovation is offered by the Directorate of Research, Innovation, and Development (DRID) at the University of Benin."
            }
          </motion.p>
          <motion.p 
            className="mt-3 text-gray-800 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
            viewport={{ once: true }}
          >
            {
              "This 12-week fully online, self-paced program is designed to empower researchers, postgraduate students, lecturers, and innovation professionals with modern research tools, AI-based methods, academic writing skills, data analysis strategies, grant writing expertise, and personal branding techniques."
            }
          </motion.p>
          <motion.p 
            className="mt-3 text-gray-800 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
            viewport={{ once: true }}
          >
            {
              "With expert-led live sessions, practical assignments, and a final portfolio project, learners build core research competencies for career and academic growth in today's knowledge economy."
            }
          </motion.p>
        </motion.div>
        <motion.div 
          className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 min-h-[300px] lg:min-h-[500px] hidden md:block"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        >
          <Image
            src="/about-student.jpg"
            fill
            alt="Student taking notes while studying"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </div>
  </section>

          {/* Nutshell feature cards (8) */}
          <section id="features" className="pt-1 md:pt-2 lg:pt-2 pb-14 md:pb-20 lg:pb-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h3 
      className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold text-center text-[#1F1F1F]"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      The DRID Diploma in a Nutshell
    </motion.h3>

    <motion.div 
      className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        whileInView: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.1
          }
        }
      }}
    >
      <AnimatedFeatureCard
        icon={<CalendarDays className="h-7 w-7 text-[#7E1A95]" />}
        title="Duration"
        desc="12 weeks"
      />
      <AnimatedFeatureCard
        icon={<Monitor className="h-7 w-7 text-[#7E1A95]" />}
        title="Format"
        desc="Fully online & self-paced"
      />
      <AnimatedFeatureCard
        icon={<Video className="h-7 w-7 text-[#7E1A95]" />}
        title="Live Sessions"
        desc="2 weekly expert-led live sessions"
      />
      <AnimatedFeatureCard
        icon={<ListChecks className="h-7 w-7 text-[#7E1A95]" />}
        title="Assessment"
        desc="Continuous quizzes + final project & exam"
      />
      <AnimatedFeatureCard
        icon={<BriefcaseBusiness className="h-7 w-7 text-[#7E1A95]" />}
        title="Capstone Project"
        desc="Build and present a practical research portfolio"
      />
      <AnimatedFeatureCard
        icon={<BadgeCheck className="h-7 w-7 text-[#7E1A95]" />}
        title="Certification"
        desc="Digital diploma (with optional transcript)"
      />
      <AnimatedFeatureCard
        icon={<MessageSquare className="h-7 w-7 text-[#7E1A95]" />}
        title="Support"
        desc="Personalized expert feedback available"
      />
      <AnimatedFeatureCard
        icon={<CreditCard className="h-7 w-7 text-[#7E1A95]" />}
        title="Fee"
        desc="₦50,000+ (see full pricing for breakdown)"
      />
    </motion.div>
  </div>
</section>
      </div>

      {/* Curriculum Snapshot */}
      <section id="curriculum" className="bg-white py-16 md:py-20 lg:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">Curriculum Snapshot</h2>
      <p className="mt-2 text-gray-700">
        Explore the full learning journey—from foundational concepts to your final project.
      </p>
    </motion.div>

    <motion.div 
      className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        whileInView: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.05
          }
        }
      }}
    >
      {weeks.map((w) => (
        <AnimatedModuleRow key={w.number} number={w.number} title={w.title} desc={w.desc} />
      ))}
    </motion.div>
  </div>
</section>

      {/* What you'll gain & Who should enroll */}
      <section className="bg-white py-8 md:py-10 lg:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-[#1F1F1F]">
            What You’ll Gain
          </h3>

          <ul className="mt-8 space-y-4 text-lg">
            <GainItem text="Hands-on Research Skills – Gain a practical understanding of modern research workflows." />
            <GainItem text="AI & Digital Tools Mastery – Learn how to use smart tools to boost research productivity." />
            <GainItem text="Data Fluency – Develop skills in analysis, visualization, and academic publishing." />
            <GainItem text="Capstone Project – Create a real-world research project to showcase in your portfolio." />
            <GainItem text="Verified Certification – Earn a professional digital diploma from DRID, University of Benin." />
          </ul>

          <h3 className="mt-14 text-3xl md:text-4xl font-extrabold text-center text-[#1F1F1F]">
            Who Should Enroll
          </h3>
          <ul className="mt-8 space-y-4 text-lg">
            <WhoItem icon={<GraduationCap className="h-5 w-5 text-[#7E1A95]" />} text="Postgraduate students – seeking structured support in their research journey." />
            <WhoItem icon={<Search className="h-5 w-5 text-[#7E1A95]" />} text="Early-career researchers – who want to strengthen their methodology and data skills." />
            <WhoItem icon={<Presentation className="h-5 w-5 text-[#7E1A95]" />} text="Faculty and lecturers – aiming to update their research practice with digital tools." />
            <WhoItem icon={<Briefcase className="h-5 w-5 text-[#7E1A95]" />} text="NGO researchers and data officers – working on evidence-based programs." />
            <WhoItem icon={<Lightbulb className="h-5 w-5 text-[#7E1A95]" />} text="Innovation and grant-focused professionals – involved in proposal writing and research-driven projects." />
          </ul>
        </div>
      </section>

      {/* Meet Your Lecturers */}
      <div className="bg-gradient-to-br from-gray-50 to-purple-50">
        <section id="lecturers" className="py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">Meet Your Lecturers</h2>
              <p className="mt-2 text-gray-700">Get mentored by top researchers across Africa.</p>
            </div>
            <LecturerCarousel />
          </div>
        </section>
      

      {/* Certification & FAQ */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Certification Criteria */}
            <div>
              <div className="rounded-2xl p-8 ring-1 ring-fuchsia-200 shadow-lg">
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F] mb-8">Certification Criteria</h3>
                <ul className="space-y-4">
                  <CriteriaItem text="Complete all weekly modules" />
                  <CriteriaItem text="Score at least 70% in the final assessment" />
                  <CriteriaItem text="Attend 80% of live sessions" />
                  <CriteriaItem text="Complete final capstone project" />
                </ul>
              </div>

              <p className="mt-8 text-gray-600">NB: Tuition for this program is ₦50,000 only.</p>
              <Link
                href="/pricing"
                className="inline-flex items-center mt-2 text-[#7E1A95] font-semibold hover:text-[#6F1584] transition-colors"
              >
                View full pricing details
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* FAQ */}
            <div id="faq" className="rounded-2xl ring-1 ring-fuchsia-200 shadow-lg p-8">
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F] mb-8">Frequently Asked Questions</h3>
              <FAQSection />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">Ready to take the next step?</h2>
          <p className="mt-3 text-gray-700 text-lg">Join other research professionals building the future.</p>
          <motion.div 
        className="mt-8"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
      >
      <motion.a
          href="/auth/register"
          className="inline-flex items-center rounded-md bg-[#7E1A95] hover:bg-[#6F1584] text-white font-semibold px-6 md:px-8 py-3 md:py-4 transition-colors"
          whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {"REGISTER NOW"}
        </motion.a>
      </motion.div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  )
}

function AnimatedFeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div 
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#7E1A95]/20 transition-transform hover:scale-[1.02]"
      variants={{
        initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        whileInView: { opacity: 1, y: 0 }
      }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -5 }}
    >
      <div className="flex items-start gap-5">
        <motion.div 
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7E1A95]/10"
          whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {icon}
        </motion.div>
        <div className="flex-1">
          <h4 className="text-lg font-extrabold text-[#1F1F1F]">{title}</h4>
          <p className="mt-1 text-gray-700">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

function AnimatedModuleRow({
  number,
  title,
  desc,
}: {
  number: number
  title: string
  desc: string
}) {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div 
      className="rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 p-5 shadow-sm ring-1 ring-black/5 transition-transform hover:scale-[1.02]"
      variants={{
        initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        whileInView: { opacity: 1, y: 0 }
      }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -3 }}
    >
      <div className="flex items-start gap-4">
        <motion.div 
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7E1A95] text-white font-bold"
          whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {number}
        </motion.div>
        <div className="flex-1">
          <h4 className="text-lg font-extrabold text-[#1F1F1F]">{title}</h4>
          <p className="mt-1 text-gray-700">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

function GainItem({ text }: { text: string }) {
  const [title, description] = text.split(" – ")
  return (
    <li className="flex items-start gap-3">
      <Check className="mt-1 h-6 w-6 text-[#7E1A95]" />
      <span className="text-gray-800">
        <span className="font-bold">{title}</span>
        {description && ` – ${description}`}
      </span>
    </li>
  )
}

function WhoItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  const [title, description] = text.split(" – ")
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <span className="text-gray-800">
        <span className="font-bold">{title}</span>
        {description && ` – ${description}`}
      </span>
    </li>
  )
}

function LecturerCarousel() {
  const [selectedLecturer, setSelectedLecturer] = useState<Lecturer | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const [isInView, setIsInView] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentOffset, setCurrentOffset] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const lecturers: Lecturer[] = [
    {
      id: 1,
      name: "Dr. Trisha Okonkwo",
      title: "Senior Researcher, Digital Innovation Lab",
      image: "/tutor1.png",
      bio: "Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Prof. Daniel Moore",
      title: "Data Scientist & Program Director, OpenGov Africa",
      image: "/tutor2.png",
      bio: "Prof. Daniel Moore is a leading expert in data science and governance, with over 20 years of experience in research methodology and statistical analysis.",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Dr. Tunde Salami",
      title: "Research Methodology Instructor, EduBridge Institute",
      image: "/tutor3.png",
      bio: "Dr. Tunde Salami specializes in research methodology and has trained hundreds of researchers across West Africa in modern research techniques.",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Prof. Ifeoma Eze",
      title: "Lead Researcher, Centre for Advanced Learning Technologies",
      image: "/tutor4.png",
      bio: "Prof. Ifeoma Eze is a pioneer in educational technology research with extensive experience in digital learning platforms and innovation.",
      linkedin: "#",
    },
  ]

  // Duplicate lecturers for infinite scroll
  const duplicatedLecturers = [...lecturers, ...lecturers, ...lecturers]
  const cardWidth = 320 // 288px width + 24px gap
  const maxOffset = -(cardWidth * lecturers.length)

  // Auto-scroll animation
  const animate = useCallback(() => {
    if (!isInView || isPaused || shouldReduceMotion) return

    setCurrentOffset(prev => {
      const newOffset = prev - 1
      return newOffset <= maxOffset ? 0 : newOffset
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [isInView, isPaused, shouldReduceMotion, maxOffset])

  // Start/stop animation based on viewport visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Handle animation lifecycle
  useEffect(() => {
    if (isInView && !isPaused && !shouldReduceMotion) {
      animationRef.current = requestAnimationFrame(animate)
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isInView, isPaused, shouldReduceMotion, animate])

  const scrollLeft = () => {
    setCurrentOffset(prev => Math.min(prev + cardWidth, 0))
  }

  const scrollRight = () => {
    setCurrentOffset(prev => {
      const newOffset = prev - cardWidth
      return newOffset <= maxOffset ? maxOffset : newOffset
    })
  }

  return (
    <>
      <motion.div 
        ref={containerRef}
        className="relative mt-10 overflow-hidden"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous lecturers"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next lecturers"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={carouselRef}
          className="flex gap-6 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(${currentOffset}px)`,
            width: `${cardWidth * duplicatedLecturers.length}px`
          }}
        >
          {duplicatedLecturers.map((lecturer, index) => (
            <LecturerCard 
              key={`${lecturer.id}-${index}`} 
              lecturer={lecturer} 
              onClick={() => setSelectedLecturer(lecturer)} 
            />
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedLecturer && <LecturerModal lecturer={selectedLecturer} onClose={() => setSelectedLecturer(null)} />}
    </>
  )
}

function LecturerCard({ lecturer, onClick }: { lecturer: Lecturer; onClick: () => void }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="flex-shrink-0 w-72 bg-[#F9F5FF] rounded-2xl shadow-sm ring-1 ring-[#7E1A95] cursor-pointer hover:shadow-md transition-shadow select-none overflow-hidden"
      onClick={onClick}
      whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={lecturer.image || "/placeholder.svg"}
          alt={lecturer.name}
          fill
          className="object-cover"
          draggable={false}
        />
      </div>
      <div className="p-4">
        <h4 className="text-xl font-extrabold text-[#1F1F1F] mb-1">{lecturer.name}</h4>
        <p className="text-gray-700 text-sm leading-relaxed">{lecturer.title}</p>
      </div>
    </motion.div>
  )
}

function LecturerModal({ lecturer, onClose }: { lecturer: Lecturer; onClose: () => void }) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Modal with entrance animation */}
      <motion.div
        className="relative bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ 
          duration: 0.3, 
          ease: [0.16, 0.23, 0.32, 0.96] 
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-2xl overflow-hidden">
              <Image
                src={lecturer.image || "/placeholder.svg"}
                alt={lecturer.name}
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-[#1F1F1F] mb-2">{lecturer.name}</h2>
            <p className="text-xl text-gray-600 mb-6">{lecturer.title}</p>
            <p className="text-gray-800 leading-relaxed mb-8">{lecturer.bio}</p>

            <Link
              href={lecturer.linkedin}
              className="inline-flex items-center text-[#7E1A95] font-semibold hover:text-[#6F1584] transition-colors"
            >
              View Profile on LinkedIn
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CriteriaItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <Check className="mt-1 h-6 w-6 text-[#7E1A95]" />
      <span className="text-gray-800 text-lg">{text}</span>
    </li>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is the duration of the course?",
      answer: "The course lasts for 12 weeks including virtual classes, assignments, and examination.",
    },
    {
      question: "Do I need any prior knowledge before enrolling?",
      answer:
        "No prior knowledge is required. The course is designed to accommodate learners from various backgrounds.",
    },
    {
      question: "How can I track my learning progress?",
      answer:
        "You'll have access to a personal dashboard where you can monitor your progress, view completed modules, and track your performance.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept bank transfers, card payments, and mobile money transfers. Payment plans are also available.",
    },
    {
      question: "Can I interact with lecturers during the course?",
      answer:
        "Yes! You'll have access to live sessions, Q&A forums, and can schedule one-on-one consultations with instructors.",
    },
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`rounded-2xl ring-1 ring-gray-200 transition-all ${
            openIndex === index ? "bg-white ring-2 ring-fuchsia-400 transition-all" : ""
          }`}
        >
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between"
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

interface Lecturer {
  id: number
  name: string
  title: string
  image: string
  bio: string
  linkedin: string
}

const weeks = [
  { number: 1, title: "Week 1: Introduction to Research in the 21st Century", desc: "Orientation, course objectives, and relevance in the digital age." },
  { number: 2, title: "Week 2: Research Approaches", desc: "Explore qualitative, quantitative & mixed-method frameworks." },
  { number: 3, title: "Week 3: Literature Review & Knowledge Management", desc: "Master sourcing and organizing key academic materials." },
  { number: 4, title: "Week 4: AI & Digital Tools for Research", desc: "Boost research efficiency using AI tools and open-source platforms." },
  { number: 5, title: "Week 5: Data Collection Methods", desc: "Design and implement surveys, interviews, and observational techniques." },
  { number: 6, title: "Week 6: Data Cleaning & Preprocessing", desc: "Prepare raw data for analysis using modern cleaning techniques." },
  { number: 7, title: "Week 7: Data Analysis & Visualization", desc: "Apply analytical tools and visualize research insights with clarity." },
  { number: 8, title: "Week 8: Academic Writing & Referencing + Live Session", desc: "Structure research papers and cite sources using standard styles." },
  { number: 9, title: "Week 9: Strategic Visibility & Personal Rebranding", desc: "Build a compelling digital presence and professional brand." },
  { number: 10, title: "Week 10: Proposal & Grant Writing", desc: "Craft winning proposals and identify funding opportunities." },
  { number: 11, title: "Week 11: Capstone Project Week", desc: "Plan, execute, and finalize your independent research project." },
  { number: 12, title: "Week 12: Final Exam & Portfolio Presentation", desc: "Submit your portfolio and complete final assessments to graduate." },
]
