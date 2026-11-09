"use client";

import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 py-8 px-4 sm:px-6 lg:px-8 font-sans print:p-0 print:bg-white print:text-black">
      {/* Top Action Bar (hidden in print) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-teal-600 transition-colors bg-white px-4 py-2 rounded-lg border border-zinc-200 shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Usman_Lawal_CV.pdf"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-300 px-4 py-2 rounded-lg shadow-sm transition-colors"
          >
            <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
        </div>
      </div>

      {/* Resume Document Paper */}
      <main className="max-w-4xl mx-auto bg-white p-8 sm:p-14 rounded-xl shadow-lg border border-zinc-200 print:shadow-none print:border-none print:p-0 print:max-w-none">
        {/* Header */}
        <header className="border-b-2 border-zinc-900 pb-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 uppercase">
            Usman Lawal
          </h1>
          <p className="text-base sm:text-lg font-bold text-teal-700 mt-1">
            Computer Science Graduate &bull; IT Systems &amp; Administrative Operations Specialist
          </p>
          <div className="mt-2.5 text-xs sm:text-sm text-zinc-600 space-y-1">
            <p>
              <span className="font-semibold text-zinc-800">Location:</span> Daura, Katsina State, Nigeria
              <span className="mx-2 text-zinc-300">&bull;</span>
              <span className="font-semibold text-zinc-800">Phone:</span> +234 706 334 9707 / +234 803 407 6853
            </p>
            <p>
              <span className="font-semibold text-zinc-800">Email:</span>{" "}
              <a href="mailto:uthmanlaw9707@gmail.com" className="text-teal-700 hover:underline">
                uthmanlaw9707@gmail.com
              </a>
            </p>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mt-6">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1">
            Professional Summary
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-700 text-justify">
            Proactive, results-oriented Computer Science professional with hands-on experience in public sector
            administration, central registry management, and network infrastructure support. Demonstrated track record
            of optimizing data handling, coordinating executive documentation, and ensuring regulatory compliance
            under high-pressure environments. Combines solid analytical rigor with strong collaborative interpersonal
            acumen to drive organizational objectives.
          </p>
        </section>

        {/* Core Competencies & Technical Skills */}
        <section className="mt-6">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1">
            Core Competencies &amp; Technical Skills
          </h2>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-lg print:border-none print:p-0 print:bg-transparent">
              <span className="font-bold text-zinc-900">IT &amp; Systems Administration:</span>{" "}
              <span className="text-zinc-700">
                Network troubleshooting, LAN setup, system configurations, preventative maintenance, peripheral installations.
              </span>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-lg print:border-none print:p-0 print:bg-transparent">
              <span className="font-bold text-zinc-900">Records &amp; Registry Operations:</span>{" "}
              <span className="text-zinc-700">
                Open/Central registry indexing, file archiving, executive dispatch tracking, records confidentiality.
              </span>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-lg print:border-none print:p-0 print:bg-transparent">
              <span className="font-bold text-zinc-900">Office Productivity &amp; Documentation:</span>{" "}
              <span className="text-zinc-700">
                Advanced digital typing, memo drafting, spreadsheet records, data validation, executive correspondence.
              </span>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-lg print:border-none print:p-0 print:bg-transparent">
              <span className="font-bold text-zinc-900">Professional Aptitudes:</span>{" "}
              <span className="text-zinc-700">
                Process optimization, cross-functional collaboration, team leadership, workflow scheduling, deadline management.
              </span>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mt-6">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1">
            Professional Experience
          </h2>

          <div className="mt-4 space-y-5">
            {/* Role 1 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm font-bold text-zinc-900">
                  Computer Operator &amp; Registry Officer &mdash;{" "}
                  <span className="font-semibold text-teal-800">Office of the Secretary to the State Government</span>
                </h3>
                <span className="text-xs text-zinc-600 font-medium">Lafia, Nasarawa State | 2020 &ndash; 2021</span>
              </div>
              <ul className="mt-2 list-disc list-outside pl-4 text-xs sm:text-sm text-zinc-700 space-y-1.5 leading-relaxed">
                <li>
                  Administered Open Registry operations, systematically indexing, classifying, and managing the movement of sensitive state documents and ministerial memos.
                </li>
                <li>
                  Executed high-speed, accurate digital processing and formal transcription of executive correspondence, briefs, and official departmental reports.
                </li>
                <li>
                  Enforced statutory information security and archiving protocols to safeguard administrative file integrity across physical and digital archives.
                </li>
                <li>
                  Provided tier-1 technical support across departmental workstations, remediating basic software, printing, and operating network hitches.
                </li>
              </ul>
            </div>

            {/* Role 2 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm font-bold text-zinc-900">
                  Network Administrator &mdash;{" "}
                  <span className="font-semibold text-teal-800">Beti ICT Ltd.</span>
                </h3>
                <span className="text-xs text-zinc-600 font-medium">Katsina State | 2018 &ndash; 2019</span>
              </div>
              <ul className="mt-2 list-disc list-outside pl-4 text-xs sm:text-sm text-zinc-700 space-y-1.5 leading-relaxed">
                <li>
                  Configured local area network (LAN) infrastructure, switches, and routers, ensuring sustained connectivity and minimal network downtime.
                </li>
                <li>
                  Conducted routine diagnostics, system upgrades, and hardware troubleshooting across multi-terminal computer labs and training hubs.
                </li>
                <li>
                  Delivered hands-on end-user assistance, guided trainees on computing standards, and implemented data backup procedures.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Professional Certifications */}
        <section className="mt-6">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1">
            Education &amp; Professional Certifications
          </h2>

          <div className="mt-3 space-y-2.5 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="font-bold text-zinc-900">Bachelor of Science (B.Sc.) in Computer Science</span>
                <p className="text-zinc-600 text-xs">Al-Qalam University, Katsina State, Nigeria</p>
              </div>
              <span className="text-xs font-semibold text-teal-800">Graduated 2019</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="font-bold text-zinc-900">National Youth Service Corps (NYSC) Discharge Certificate</span>
                <p className="text-zinc-600 text-xs">National Youth Service Corps (NYSC), Nigeria</p>
              </div>
              <span className="text-xs font-semibold text-teal-800">Issued 2020</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="font-bold text-zinc-900">Certificate in Information &amp; Communication Technology (ICT)</span>
                <p className="text-zinc-600 text-xs">Beti ICT Ltd., Katsina State, Nigeria</p>
              </div>
              <span className="text-xs font-semibold text-teal-800">Completed 2018</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="font-bold text-zinc-900">Senior Secondary School Certificate (SSCE / NECO)</span>
                <p className="text-zinc-600 text-xs">Government Science Secondary School, Batagarawa, Katsina State</p>
              </div>
              <span className="text-xs font-semibold text-teal-800">Completed 2014</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500">
          <span>Usman Lawal &bull; Curriculum Vitae</span>
          <span className="mt-1 sm:mt-0 font-medium">Professional References Available Upon Request</span>
        </footer>
      </main>
    </div>
  );
}

