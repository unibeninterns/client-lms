"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CalendarDays, Monitor, Video, ListChecks, BriefcaseBusiness, BadgeCheck, MessageSquare, CreditCard, Check, GraduationCap, Search, Presentation, Lightbulb, Briefcase, ChevronDown, ChevronRight, X, ChevronLeft } from 'lucide-react'
import { useEffect, useRef, useState } from "react"

export default function AboutCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero - exact replica styling */}
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
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {"Welcome to the "}
              <br />
              {"DRID Course Platform"}
            </h1>
            <p className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl">
              {
                "A hub for dynamic research-driven training, designed to equip you with practical tools for tomorrow."
              }
            </p>
            <div className="mt-8">
              <Link
                href="#curriculum"
                className="inline-flex items-center rounded-md bg-[#7E1A95] hover:bg-[#6F1584] text-white font-semibold px-6 md:px-8 py-3 md:py-4 transition-colors"
              >
                {"VIEW COURSE CURRICULUM"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50">
      <section className="py-14 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">
                The DRID Learning Experience
              </h2>
              <p className="mt-4 text-gray-800 leading-relaxed">
                {
                  "The Professional Diploma in Research Technologies and Innovation is offered by the Directorate of Research, Innovation, and Development (DRID) at the University of Benin."
                }
              </p>
              <p className="mt-3 text-gray-800 leading-relaxed">
                {
                  "This 12-week fully online, self-paced program is designed to empower researchers, postgraduate students, lecturers, and innovation professionals with modern research tools, AI-based methods, academic writing skills, data analysis strategies, grant writing expertise, and personal branding techniques."
                }
              </p>
              <p className="mt-3 text-gray-800 leading-relaxed">
                {
                  "With expert-led live sessions, practical assignments, and a final portfolio project, learners build core research competencies for career and academic growth in today’s knowledge economy."
                }
              </p>
            </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 min-h-[300px] lg:min-h-[500px] hidden md:block">
                <Image
                  src="/about-student.jpg"
                  fill
                  alt="Student taking notes while studying"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
          </div>
          </div>
          </section>

          {/* Nutshell feature cards (8) */}
          <section className="pt-1 md:pt-2 lg:pt-2 pb-14 md:pb-20 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold text-center text-[#1F1F1F]">
            The DRID Diploma in a Nutshell
          </h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<CalendarDays className="h-7 w-7 text-[#7E1A95]" />}
              title="Duration"
              desc="12 weeks"
            />
            <FeatureCard
              icon={<Monitor className="h-7 w-7 text-[#7E1A95]" />}
              title="Format"
              desc="Fully online & self-paced"
            />
            <FeatureCard
              icon={<Video className="h-7 w-7 text-[#7E1A95]" />}
              title="Live Sessions"
              desc="2 weekly expert-led live sessions"
            />
            <FeatureCard
              icon={<ListChecks className="h-7 w-7 text-[#7E1A95]" />}
              title="Assessment"
              desc="Continuous quizzes + final project & exam"
            />
            <FeatureCard
              icon={<BriefcaseBusiness className="h-7 w-7 text-[#7E1A95]" />}
              title="Capstone Project"
              desc="Build and present a practical research portfolio"
            />
            <FeatureCard
              icon={<BadgeCheck className="h-7 w-7 text-[#7E1A95]" />}
              title="Certification"
              desc="Digital diploma (with optional transcript)"
            />
            <FeatureCard
              icon={<MessageSquare className="h-7 w-7 text-[#7E1A95]" />}
              title="Support"
              desc="Personalized expert feedback available"
            />
            <FeatureCard
              icon={<CreditCard className="h-7 w-7 text-[#7E1A95]" />}
              title="Fee"
              desc="₦50,000+ (see full pricing for breakdown)"
            />
          </div>
        </div>
      </section>
      </div>

      {/* Curriculum Snapshot */}
      <section id="curriculum" className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">Curriculum Snapshot</h2>
            <p className="mt-2 text-gray-700">
              Explore the full learning journey—from foundational concepts to your final project.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {weeks.map((w) => (
              <ModuleRow key={w.number} number={w.number} title={w.title} desc={w.desc} />
            ))}
          </div>
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
        <section className="py-16 md:py-20 lg:py-24">
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
            <div className="rounded-2xl ring-1 ring-fuchsia-200 shadow-lg p-8">
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
          <div className="mt-8">
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center rounded-md bg-[#7E1A95] hover:bg-[#6F1584] text-white font-semibold px-8 py-4 transition-colors shadow-lg"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#7E1A95]/20 transition-transform hover:scale-[1.02]">
      <div className="flex items-start gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7E1A95]/10">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-extrabold text-[#1F1F1F]">{title}</h4>
          <p className="mt-1 text-gray-700">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function ModuleRow({
  number,
  title,
  desc,
}: {
  number: number
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 p-5 shadow-sm ring-1 ring-black/5 transition-transform hover:scale-[1.02]">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7E1A95] text-white font-bold">
          {number}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-extrabold text-[#1F1F1F]">{title}</h4>
          <p className="mt-1 text-gray-700">{desc}</p>
        </div>
      </div>
    </div>
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

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

  const canScrollLeft = currentIndex > 0
  const canScrollRight = currentIndex < lecturers.length - 3

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - 1)
      scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1)
      scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.targetTouches[0].clientX
    scrollRef.current?.setAttribute("data-touch-start-x", touchStartX.toString())
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchStartX = Number(scrollRef.current?.getAttribute("data-touch-start-x"))
    if (!touchStartX) return

    const touchEndX = e.changedTouches[0].clientX
    const distance = touchStartX - touchEndX

    if (distance > 50 && canScrollRight) {
      scrollRight()
    } else if (distance < -50 && canScrollLeft) {
      scrollLeft()
    }
  }

  return (
    <>
      <div className="relative mt-10">
        {/* Left chevron */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Previous lecturers"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
        )}

        {/* Right chevron */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next lecturers"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        )}

        {/* Cards container with touch events*/}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-8 touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {lecturers.map((lecturer) => (
            <LecturerCard key={lecturer.id} lecturer={lecturer} onClick={() => setSelectedLecturer(lecturer)} />
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.max(1, lecturers.length - 2) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#7E1A95]" : "bg-gray-300"
              }`}
              onClick={() => {
                setCurrentIndex(index)
                scrollRef.current?.scrollTo({ left: index * 320, behavior: "smooth" })
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedLecturer && <LecturerModal lecturer={selectedLecturer} onClose={() => setSelectedLecturer(null)} />}
    </>
  )
}

function LecturerCard({ lecturer, onClick }: { lecturer: Lecturer; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.targetTouches[0].clientX
    cardRef.current?.setAttribute("data-touch-start-x", touchStartX.toString())
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchStartX = Number(cardRef.current?.getAttribute("data-touch-start-x"))
    if (!touchStartX) return

    const touchEndX = e.changedTouches[0].clientX
    const distance = Math.abs(touchStartX - touchEndX)

    if (distance < 10) {
      onClick()
    }
  }

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 w-72 bg-[#F9F5FF] rounded-2xl shadow-sm ring-1 ring-[#7E1A95] cursor-pointer hover:shadow-md transition-shadow select-none overflow-hidden"
      onClick={onClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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
    </div>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
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
      </div>
    </div>
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
