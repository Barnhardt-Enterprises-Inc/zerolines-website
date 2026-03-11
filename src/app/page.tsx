import Image from "next/image";
import EmailSignup from "@/components/email-signup";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="px-6 pt-16 sm:pt-24 pb-20 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Book Cover */}
          <div className="flex-shrink-0">
            <div className="shadow-[0_25px_60px_rgba(74,144,217,0.15)] rounded-sm overflow-hidden">
              <Image
                src="/book-cover.webp"
                alt="Zero Lines of Code book cover"
                width={380}
                height={600}
                priority
                className="w-[240px] sm:w-[320px] lg:w-[380px] h-auto"
              />
            </div>
          </div>
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-6">
              Coming April 21, 2026
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight mb-4">
              Zero Lines<br />of Code
            </h1>
            <p className="text-2xl sm:text-3xl text-muted font-medium max-w-2xl mb-4 leading-relaxed">
              How a 45-Year Software Veteran Rebuilt a Production SaaS with AI
            </p>
            <p className="text-lg text-accent font-medium mb-2">
              No team. No agency. Just one developer and an AI.
            </p>
            <p className="text-base text-muted mb-10">By Glen Barnhardt</p>
            <a
              href="#signup"
              className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </section>

      {/* About the Book Section */}
      <section className="px-6 py-24 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About the Book
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-10">
            After forty-five years of writing code for Fortune 500 companies,
            Glen Barnhardt rewrote a production SaaS application without typing
            a single line. This is the real story — the disasters, the
            breakthroughs, and the framework that emerged.
          </p>
          <ul className="space-y-4">
            {[
              "The real economics — what it costs, what it saves, and why $200/month replaces a dev team",
              "Why a veteran developer's judgment matters more in the age of AI, not less",
              "The Claude.md system that turned unreliable AI output into production-ready code",
              "How to build a framework of hooks, skills, and agents that makes AI obey your standards",
              "The task automation system that completes ten development tasks in thirty minutes",
            ].map((point) => (
              <li key={point} className="flex items-start gap-4">
                <svg
                  className="mt-1 w-5 h-5 text-accent flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-zinc-300 leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center text-sm text-muted">
            <span>Paperback $16.99</span>
            <span className="hidden sm:inline">|</span>
            <span>eBook $7.99</span>
            <span className="hidden sm:inline">|</span>
            <span>~100 pages</span>
          </div>
        </div>
      </section>

      {/* About the Author Section */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/author.webp"
                alt="Glen Barnhardt"
                width={180}
                height={180}
                className="rounded-full w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center sm:text-left">
                About the Author
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Glen Barnhardt has spent forty-five years in enterprise software
                — building ERP suites, managing teams, and consulting for
                Reliance Electric, Fiskars, and Allied Signal. He holds a
                Master&apos;s degree in Information Systems. Today he works as an
                Agentic AI Engineer, building production software without writing
                code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Course Section */}
      <section className="px-6 py-24 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            The Course: Build the System That Replaced a Dev Team
          </h2>
          <p className="text-base font-semibold text-accent mb-6">
            $299 at launch
          </p>
          <p className="text-lg text-muted leading-relaxed mb-10">
            The book tells the what and why. The course teaches the how. 24
            video lessons, templates, scripts, and configurations to build your
            own system.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "24 screen-recorded video lessons (~5 hours)",
              "CLAUDE.md templates for real production projects",
              "Hook, skill, and agent team configurations",
              "Complete task automation pipeline — ticket to PR in minutes",
            ].map((point) => (
              <li key={point} className="flex items-start gap-4">
                <svg
                  className="mt-1 w-5 h-5 text-accent flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-zinc-300 leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#signup"
            className="inline-block rounded-lg border-2 border-accent px-8 py-4 text-lg font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Join the Course Waitlist
          </a>
        </div>
      </section>

      {/* Email Signup Section */}
      <section id="signup" className="px-6 py-24 bg-accent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Notified When We Launch
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            Book and course launch April 21, 2026. Sign up for early access
            pricing.
          </p>
          <EmailSignup variant="dark" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; 2026 Barnhardt Enterprises, Inc.
          </p>
          <nav className="flex gap-6 text-sm text-muted">
            <a
              href="#signup"
              className="hover:text-accent transition-colors"
            >
              Book
            </a>
            <a
              href="#signup"
              className="hover:text-accent transition-colors"
            >
              Course
            </a>
            <a
              href="https://www.linkedin.com/in/glenbarnhardt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
