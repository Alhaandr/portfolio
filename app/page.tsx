"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Project", id: "projects" },
  { name: "Background", id: "background" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // When near bottom, activate contact section
      if (window.scrollY + winHeight >= docHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // Check sections from bottom to top
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const id = navLinks[i].id;
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (window.scrollY >= top - 160) {
            setActiveSection(id);
            return;
          }
        }
      }

      // Above projects (hero area)
      setActiveSection("");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-[#ededed] selection:bg-teal-500/20 selection:text-teal-300 font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f17]/85 border-b border-zinc-800/80">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-wider text-white hover:text-teal-400 transition-colors uppercase"
          >
            USMAN LAWAL
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`transition-colors py-1 relative ${isActive
                      ? "text-teal-400 font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 font-medium"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Drawer Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/70 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-64 max-w-[80vw] bg-[#0d131f] border-l border-zinc-800/90 p-6 flex flex-col justify-start gap-6 shadow-2xl z-50">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="font-mono text-xs font-semibold tracking-wider text-teal-400 uppercase">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close navigation drawer"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${isActive
                        ? "bg-teal-400/10 text-teal-400 font-semibold border-l-2 border-teal-400"
                        : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
                      }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-6 pt-12 pb-24 space-y-24">
        {/* Hero Section */}
        <section className="pt-6 pb-2">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10">
            <div className="flex-1 space-y-6 w-full text-left">
              <div className="inline-block text-xs font-mono font-medium tracking-wider text-teal-400 uppercase">
                Computer Science Graduate &bull; IT Systems &amp; Operations Specialist &bull; Daura, Katsina State
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Optimizing IT infrastructure &amp; operations.{" "}
                <span className="text-teal-400">Delivering analytical rigor.</span>
              </h1>

              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
                Proactive Computer Science graduate with hands-on experience in public sector
                administration, central registry management, and network infrastructure support.
                Committed to writing clean code, maintaining robust systems, and driving organizational objectives.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection(e, "projects")}
                  className="bg-teal-400 hover:bg-teal-300 text-zinc-950 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm"
                >
                  See my project
                </a>
                <Link
                  href="/resume"
                  target="_blank"
                  className="border border-teal-500/50 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
                >
                  View Full Résumé
                </Link>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Square Headshot - Centered on small screens */}
            <div className="w-full flex justify-center md:w-auto md:justify-end">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl group hover:border-teal-500/50 transition-all duration-300 mx-auto md:mx-0">
                <Image
                  src="/profile.jpg"
                  alt="Usman Lawal"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 192px, 240px"
                />
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 pt-16 border-t border-zinc-800/80 mt-16">
            <div>
              <div className="text-3xl font-bold text-teal-400">2+ yrs</div>
              <div className="text-xs text-zinc-400 mt-1">IT Systems &amp; Ops</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 font-mono">B.Sc.</div>
              <div className="text-xs text-zinc-400 mt-1">Computer Science</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 font-mono">NYSC</div>
              <div className="text-xs text-zinc-400 mt-1">Certified (2020)</div>
            </div>
          </div>
        </section>

        {/* 01 / PROJECT */}
        <section id="projects" className="space-y-6 scroll-mt-24">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-teal-400 uppercase">
              01 / PROJECT
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              What I&apos;ve built
            </h2>
          </div>

          <div className="bg-[#111726]/80 border border-zinc-800/90 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-zinc-700/80 transition-colors">
            <div className="text-xs font-mono text-zinc-400 tracking-wider">
              [PROJECT NAME] · [YEAR]
            </div>

            <h3 className="text-xl font-bold text-white">[Project name]</h3>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              [One sentence on the problem it solves. One sentence on what you built and how.
              One sentence on what you learned or what it can do.]
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                [Stack]
              </span>
              <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                [Stack]
              </span>
              <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                [Stack]
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-sm">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-teal-400 font-medium inline-flex items-center gap-1.5 transition-colors"
              >
                Live demo <span>&rarr;</span>
              </a>
              <a
                href="https://github.com/Alhaandr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-teal-400 font-medium inline-flex items-center gap-1.5 transition-colors"
              >
                Source on GitHub <span>&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* 02 / BACKGROUND */}
        <section id="background" className="space-y-6 scroll-mt-24">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-teal-400 uppercase">
              02 / BACKGROUND
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Education &amp; Professional Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[#111726]/80 border border-zinc-800/90 rounded-2xl p-6 space-y-3 hover:border-zinc-700/80 transition-colors">
              <div className="text-xs font-mono text-teal-400 tracking-wider uppercase font-semibold">
                EDUCATION
              </div>
              <h3 className="text-base font-bold text-white">
                B.Sc. in Computer Science
              </h3>
              <div className="text-sm text-zinc-400">Al-Qalam University, Katsina State, Nigeria</div>
              <div className="text-xs font-mono text-zinc-500 pt-1">
                Graduated 2019
              </div>
            </div>

            <div className="bg-[#111726]/80 border border-zinc-800/90 rounded-2xl p-6 space-y-3 hover:border-zinc-700/80 transition-colors">
              <div className="text-xs font-mono text-teal-400 tracking-wider uppercase font-semibold">
                CERTIFICATIONS &amp; CREDENTIALS
              </div>
              <h3 className="text-base font-bold text-white">
                Certificate in ICT &bull; NYSC Discharge
              </h3>
              <div className="text-sm text-zinc-400">
                Beti ICT Ltd. &amp; National Youth Service Corps (NYSC)
              </div>
              <div className="text-xs font-mono text-zinc-500 pt-1">2018 &ndash; 2020</div>
            </div>
          </div>
        </section>

        {/* 03 / SKILLS */}
        <section id="skills" className="space-y-6 scroll-mt-24">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-teal-400 uppercase">
              03 / SKILLS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Core Competencies &amp; Toolbox</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-[#111726]/80 border border-zinc-800/90 rounded-2xl p-6 space-y-4 hover:border-zinc-700/80 transition-colors">
              <h3 className="text-base font-bold text-white">IT &amp; Systems Admin</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                  Network Troubleshooting
                </span>
                <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                  LAN Setup &amp; Routers
                </span>
                <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                  Hardware Diagnostics
                </span>
              </div>
            </div>

            <div className="bg-[#111726]/80 border border-zinc-800/90 rounded-2xl p-6 space-y-4 hover:border-zinc-700/80 transition-colors">
              <h3 className="text-base font-bold text-white">Records &amp; Operations</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                  Open/Central Registry
                </span>
                <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                  File Archiving
                </span>
                <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                  Information Security
                </span>
              </div>
            </div>

            <div className="bg-[#111726]/80 border border-zinc-800/90 rounded-2xl p-6 space-y-4 hover:border-zinc-700/80 transition-colors">
              <h3 className="text-base font-bold text-white">Productivity &amp; Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                  Git &amp; GitHub
                </span>
                <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                  Data Validation
                </span>
                <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                  Executive Reports
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / CONTACT */}
        <section id="contact" className="space-y-6 pt-4 scroll-mt-24">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-teal-400 uppercase">
              04 / CONTACT
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1 leading-snug">
              Let&apos;s talk. I&apos;m open to new opportunities and internships.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Email - Outlined style with outline icon */}
            <a
              href="mailto:uthmanlaw9707@gmail.com"
              className="border border-zinc-700 hover:border-zinc-500 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-medium px-4 py-2.5 rounded-lg text-sm transition-colors inline-flex items-center gap-2.5 group"
            >
              <svg
                className="w-4 h-4 text-zinc-400 group-hover:text-teal-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>uthmanlaw9707@gmail.com</span>
            </a>

            {/* Phone Number - Outlined style with outline icon */}
            <a
              href="tel:07063349707"
              className="border border-zinc-700 hover:border-zinc-500 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-medium px-4 py-2.5 rounded-lg text-sm transition-colors inline-flex items-center gap-2.5 group"
            >
              <svg
                className="w-4 h-4 text-zinc-400 group-hover:text-teal-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call 07063349707</span>
            </a>

            {/* WhatsApp - Outlined style with authentic outline WhatsApp icon */}
            <a
              href="https://wa.me/2347063349707"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-700 hover:border-zinc-500 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-medium px-4 py-2.5 rounded-lg text-sm transition-colors inline-flex items-center gap-2.5 group hover:text-emerald-400"
            >
              <svg
                className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M3 21l1.65-3.8A9 9 0 1 1 21 12a8.96 8.96 0 0 1-2.9 6.6L3 21" />
                <path d="M9.5 9.5c.3-.5.7-.5 1 0 .2.4.6 1.4.7 1.6.1.2 0 .4-.1.6l-.4.5c-.1.2-.1.4 0 .6.4.7 1.1 1.4 1.8 1.8.2.1.4.1.6 0l.5-.4c.2-.1.4-.2.6-.1.2.1 1.2.5 1.6.7.5.3.5.7 0 1-.4.3-.9.7-1.5.7-1.1 0-2.6-1-3.8-2.2-1.2-1.2-2.2-2.7-2.2-3.8 0-.6.4-1.1.7-1.5z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Social Links - Open in new tab */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-zinc-400">
            <a
              href="https://github.com/Alhaandr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              GitHub
            </a>
            {/* This a comment */}
            <a
              href="https://www.linkedin.com/in/usmanlawal07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
            <Link
              href="/resume"
              target="_blank"
              className="hover:text-teal-400 transition-colors font-medium text-teal-400/90"
            >
              R&eacute;sum&eacute; (PDF)
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 py-8 text-center text-xs text-zinc-500 font-mono">
        &copy; {new Date().getFullYear()} USMAN LAWAL
      </footer>
    </div>
  );
}
