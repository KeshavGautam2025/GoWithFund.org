import Link from "next/link";
import {
  CalendarDays,
  ChartLine,
  CodeXml,
  DollarSign,
  Globe,
  GraduationCap,
  MonitorCog,
  Users,

} from "lucide-react";
import { modules } from "@/lib/modules";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[url(/hero1.png)] bg-no-repeat w-full text-white py-16 px-4 md:px-5 rounded-xl shadow-md mt-4 flex min-h-[480px] flex-col gap-6 bg-cover bg-center items-center justify-center p-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight mb-6">
            Build the Future of Impact — With AI,{" "}
            <br className="hidden md:inline" />
            Ethics, and Open Innovation
          </h1>
          <p className="text-base md:text-lg text-gray-100 mb-8">
            An AI-driven, modular ecosystem for social-good infrastructure,
            connecting developers, nonprofits, donors, and educators globally.
          </p>

          <div className="flex justify-center space-x-4 flex-wrap gap-y-3">
            <Link href="/join-developer">
              <button className="bg-[var(--color-primary)] hover:bg-opacity-90 text-white font-semibold px-5 py-2 rounded-md transition">
                Join as Developer
              </button>
            </Link>

            <Link href="/campaigns">
              <button className="bg-white text-[var(--color-primary)] hover:bg-gray-100 font-semibold px-5 py-2 rounded-md border border-white transition">
                Explore Campaigns
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="pt-10 px-4 ">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Our Vision</h2>
        <div className="flex justify-center mb-5">
          <p className="">
            GoWithFund.org is the world&apos;s first AI-powered, open ecosystem
            for ethical fundraising, education, developer collaboration, job
            matching, and co-founder discovery - designed for changemakers
            worldwide.
          </p>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-10 px-4 ">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Core Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="border border-gray-200 rounded-md p-4 hover:shadow-md transition bg-white"
            >
              <mod.icon className="text-primary mb-2" />
              <h3 className="font-semibold text-sm">{mod.title}</h3>
              <p className="text-xs text-gray-600">{mod.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/*How it Work*/}
      <div className="">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          How it Work
        </h2>
        <Image
          src="/hero2.png"
          alt="How it works"
          width={5000}
          height={5000}
          className="w-full bg-center bg-no-repeat bg-cover h-100 rounded-none flex-1"
        />
      </div>

      <section className="pt-10 px-4 ">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Tech Stock & AI Trust Layer
        </h2>
        <div className="flex justify-center mb-5">
          <p className="">
            Built with Next.js, Node.js, OpenAI, LangChain, Supabase, and more.
            We prioritize transparency, AI ethics, and data trust in all our
            operations.
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-10 px-4 md:px-8 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Roadmap (2025–2026)</h2>
        <ul className="space-y-2 text-sm md:text-base">
          <li className="flex items-center space-x-2">
            <CalendarDays
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/50 px-1.5 rounded-full"
              size={25}
            />
            <span>Q1 2025: Job Board MVP</span>
          </li>
          <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow ml-2"></div>
          <li className="flex space-x-2 items-center">
            <CodeXml
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/50 px-1.5 rounded-full"
              size={25}
            />
            <span>Q2 2025: Developer Portal Launch</span>
          </li>
          <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow ml-2"></div>
          <li className="flex items-center space-x-2">
            <DollarSign
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/50 px-1.5 rounded-full"
              size={25}
            />
            <span>Q3 2025: Fundraising Platform Beta</span>
          </li>
          <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow ml-2"></div>
          <li className="flex items-center space-x-2">
            <Users
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/50 px-1.5 rounded-full"
              size={25}
            />
            <span>Q4 2025: Co-Founder Matching Alpha</span>
          </li>
          <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow ml-2"></div>
          <li className="flex items-center space-x-2">
            <GraduationCap
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/50 px-1.5 rounded-full"
              size={25}
            />
            <span>Q1 2026: E-learning Platfoam Pilot</span>
          </li>
          <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow ml-2"></div>
          <li className="flex items-center space-x-2">
            <MonitorCog
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/50 px-1.5 rounded-full"
              size={25}
            />
            <span>Q2 2026: Full Ecosystem Integration</span>
          </li>
          <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow ml-2"></div>
          <li className="flex items-center space-x-2">
            <Globe
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/50 px-1.5 rounded-full"
              size={25}
            />
            <span>Q3 2026: Global Expansion</span>
          </li>
          <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow ml-2"></div>
          <li className="flex items-center space-x-2">
            <ChartLine
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/50 px-1.5 rounded-full"
              size={25}
            />
            <span>Q4 2026: Impact Reporting & Analytics</span>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="pt-10 px-4 ">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Get Involved</h2>
        <div className="">
          <p className="flex justify-center mb-5">
            Are you a developer, educator, nonprofit, or funder? Join us today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="bg-[var(--color-dark)] text-white font-semibold px-6 py-2 rounded-md hover:bg-opacity-90 transition">
              Join Our Newsletter
            </button>
            <button className="bg-white text-[var(--color-dark)] border border-primary px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
              Contribute on GitHub
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
