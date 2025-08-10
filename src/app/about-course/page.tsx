import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CalendarDays, Monitor, Video, ListChecks, BriefcaseBusiness, BadgeCheck, MessageSquare, CreditCard, CheckCircle2, GraduationCap, Search, Presentation, Users, Lightbulb } from 'lucide-react'

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
      <section className="bg-[#F4E7FA] py-14 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
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
            <div className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <Image
                  src="/images/about-student.png"
                  width={640}
                  height={800}
                  alt="Student taking notes while studying"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Nutshell feature cards (8) */}
          <h3 className="mt-10 md:mt-12 text-xl font-extrabold text-[#2A2A2A]">
            The DRID Diploma in a Nutshell
          </h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              icon={<CalendarDays className="h-6 w-6 text-[#7E1A95]" />}
              title="Duration"
              desc="12 weeks"
            />
            <FeatureCard
              icon={<Monitor className="h-6 w-6 text-[#7E1A95]" />}
              title="Format"
              desc="Fully online & self-paced"
            />
            <FeatureCard
              icon={<Video className="h-6 w-6 text-[#7E1A95]" />}
              title="Live Sessions"
              desc="2 weekly expert-led live sessions"
            />
            <FeatureCard
              icon={<ListChecks className="h-6 w-6 text-[#7E1A95]" />}
              title="Assessment"
              desc="Continuous quizzes + final project & exam"
            />
            <FeatureCard
              icon={<BriefcaseBusiness className="h-6 w-6 text-[#7E1A95]" />}
              title="Capstone Project"
              desc="Build and present a practical research portfolio"
            />
            <FeatureCard
              icon={<BadgeCheck className="h-6 w-6 text-[#7E1A95]" />}
              title="Certification"
              desc="Digital diploma (with optional transcript)"
            />
            <FeatureCard
              icon={<MessageSquare className="h-6 w-6 text-[#7E1A95]" />}
              title="Support"
              desc="Personalized expert feedback available"
            />
            <FeatureCard
              icon={<CreditCard className="h-6 w-6 text-[#7E1A95]" />}
              title="Fee"
              desc="₦50,000+ (see full pricing for breakdown)"
            />
          </div>
        </div>
      </section>

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
            <WhoItem icon={<Users className="h-5 w-5 text-[#7E1A95]" />} text="NGO researchers and data officers – working on evidence-based programs." />
            <WhoItem icon={<Lightbulb className="h-5 w-5 text-[#7E1A95]" />} text="Innovation and grant-focused professionals – involved in proposal writing and research-driven projects." />
          </ul>
        </div>
      </section>

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
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#7E1A95]/20">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7E1A95]/10">
          {icon}
        </div>
        <div>
          <h4 className="text-lg font-extrabold text-[#1F1F1F]">{title}</h4>
          <p className="text-gray-700">{desc}</p>
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
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
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
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-1 h-6 w-6 text-[#7E1A95]" />
      <span className="text-gray-800">{text}</span>
    </li>
  )
}

function WhoItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <span className="text-gray-800">{text}</span>
    </li>
  )
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
