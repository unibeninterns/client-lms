import Image from "next/image";
import Link from "next/link";
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#320b4e]/95 text-white">
      <div className="w-full relative overflow-hidden h-[450px] sm:h-[500px]">
        <Image
          src="/footer.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="DRID students"
          className="z-0 absolute"
        />
        <div className="absolute inset-0 backdrop-blur-xs bg-[#320b4e]/20 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 mt-24">
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-wide drop-shadow-lg">
            Learning never stops.
          </h2>
          <p className="mt-6 text-4xl font-medium md:text-6xl drop-shadow-lg">
            Join the next DRID cohort.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6">
          {/* Brand and Newsletter (left) */}
          <div className="lg:col-span-5 mr-20">
            <div className="flex items-center gap-4">
              <Image
                src="/icon.png"
                width={56}
                height={56}
                alt="DRID logo"
                className="h-10 w-12 rounded-md"
              />
              <span className="text-xl md:text-3xl font-extrabold pt-2.5 tracking-wide">DRID</span>
            </div>

            <p className="mt-4 max-w-xl text-white text-md leading-tight">
              Gain future-ready skills with structured research and
              innovation training from DRID, University of Benin.
            </p>

            <p className="mt-6 text-md text-white">
              Stay updated on new DRID courses and opportunities.
            </p>

            {/* Newsletter pill */}
            <form className="mt-4 max-w-3xl" action="#" method="post">
              <div className="flex items-stretch rounded-full border border-white/25 overflow-hidden bg-transparent">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent px-5 py-4 text-white placeholder:text-white/70 focus:outline-none"
                  aria-label="Email address"
                />
                <div className="p-1">
                  <button
                    type="submit"
                    className="h-full rounded-full bg-[#69117c] px-6 py-3 font-semibold text-white hover:bg-[#6F1584] transition-colors"
                  >
                    Notify Me
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Link Columns (right) */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-extrabold mb-6">DRID</h3>
            <ul className="space-y-4 text-white/85">
              <li><Link href="#" className="hover:text-white">About DRID</Link></li>
              <li><Link href="#" className="hover:text-white">Mission &amp; Vision</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-extrabold mb-6">Courses</h3>
            <ul className="space-y-4 text-white/85">
              <li><Link href="#" className="hover:text-white">Course Overview</Link></li>
              <li><Link href="#" className="hover:text-white">Curriculum</Link></li>
              <li><Link href="#" className="hover:text-white">Faculty</Link></li>
              <li><Link href="#" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-extrabold mb-6">Resources</h3>
            <ul className="space-y-4 text-white/85">
              <li><Link href="#" className="hover:text-white">Reviews</Link></li>
              <li><Link href="#" className="hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-white">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
              <li><Link
            href="#"
            aria-label="LinkedIn"
            className="lg:hidden inline-flex items-center gap-2 text-white/85 hover:text-white"
          >
            <span>LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/80 text-center md:text-left">
            Copyright © {year} Directorate of Research, Innovation &amp; Development (DRID), University of Benin. All rights reserved.
          </p>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 text-white/85 hover:text-white"
          >
            <span className="hidden lg:inline">LinkedIn</span>
            <Linkedin className="hidden lg:inline h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}