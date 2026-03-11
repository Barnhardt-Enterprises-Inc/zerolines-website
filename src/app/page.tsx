import Image from "next/image";
import EmailSignup from "@/components/email-signup";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-6 pt-24 pb-20 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Book Cover */}
          <div className="flex-shrink-0">
            <div className="shadow-2xl rounded-sm overflow-hidden">
              <Image
                src="/book-cover.webp"
                alt="Zero Lines of Code book cover"
                width={380}
                height={600}
                priority
                className="w-[280px] sm:w-[320px] lg:w-[380px] h-auto"
              />
            </div>
          </div>
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase mb-6">
              Coming April 21, 2026
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-none mb-6">
              Zero Lines<br />of Code
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mb-4 leading-relaxed">
              How a 45-Year Software Veteran Rebuilt a Production SaaS with AI
            </p>
            <p className="text-base text-gray-500 mb-10">By Glen Barnhardt</p>
            <a
              href="#signup"
              className="inline-block rounded-lg bg-blue-700 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-800"
            >
              Get Notified at Launch
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* About the Book Section */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About the Book</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          After forty-five years of writing code for Fortune 500 companies, Glen Barnhardt rewrote
          a production SaaS application without typing a single line. No team. No agency. Just one
          developer and an AI. This is the real story — the disasters, the breakthroughs, and the
          framework that emerged.
        </p>
        <ul className="space-y-4">
          {[
            "Why a veteran developer's judgment matters more in the age of AI, not less",
            "The Claude.md system that turned unreliable AI output into production-ready code",
            "How to build a framework of hooks, skills, and agents that makes AI obey your standards",
            "The task automation system that completes ten development tasks in thirty minutes",
            "The real economics — what it costs, what it saves, and why $200/month replaces a dev team",
          ].map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-700" />
              <span className="text-base text-gray-700 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* The Course Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            The Course: Build Your Own AI Development Framework
          </h2>
          <p className="text-base font-semibold text-blue-700 mb-6">$299 at launch</p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            The book tells the what and why. The course teaches the how. 24 video lessons,
            templates, scripts, and configurations to build your own system.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "24 screen-recorded video lessons (~5 hours)",
              "CLAUDE.md templates for real production projects",
              "Hook, skill, and agent team configurations",
              "Complete task automation pipeline — ticket to PR in minutes",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-700" />
                <span className="text-base text-gray-700 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
          <a
            href="#signup"
            className="inline-block rounded-lg bg-blue-700 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Join the Course Waitlist
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Email Signup Section */}
      <section id="signup" className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Get Notified When We Launch
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Be the first to know when the book and course are available — plus early access pricing.
        </p>
        <EmailSignup />
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* About the Author Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About the Author</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Glen Barnhardt has spent forty-five years in enterprise software — building ERP suites,
            managing teams, and consulting for Reliance Electric, Fiskars, and Allied Signal. He
            holds a Master&apos;s degree in Information Systems. Today he works as an Agentic AI
            Engineer, building production software without writing code.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-10">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 Barnhardt Enterprises, Inc.
          </p>
          <nav className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-700 transition-colors">
              Book
            </a>
            <a href="#signup" className="hover:text-blue-700 transition-colors">
              Course
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
