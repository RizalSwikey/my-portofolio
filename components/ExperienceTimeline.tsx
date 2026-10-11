"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/profile-data";
import { Briefcase, MapPin, Check, Building2 } from "lucide-react";

export function ExperienceTimeline() {
  const { experienceHistory } = portfolioData;

  return (
    <section id="timeline" className="relative border-b border-archive-border bg-archive-obsidian py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-archive-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 border border-archive-border bg-archive-panel px-2.5 py-1 text-xs font-mono text-archive-rust mb-3">
              <span className="h-1.5 w-1.5 bg-archive-rust"></span>
              SECTION 04 // EXPERIENCE TIMELINE & ARCHIVAL LEDGER
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-archive-parchment">
              Operational Engagements
            </h2>
          </div>
          <div className="font-mono text-xs text-archive-muted text-right">
            <span>FORMAT: ARCHIVAL AUDIT LOG</span>
            <br />
            <span className="text-archive-subtle">GOVERNMENT, INDUSTRY & NON-PROFIT</span>
          </div>
        </div>

        {/* Ledger Entries */}
        <div className="space-y-6">
          {experienceHistory.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-archive-border bg-archive-panel overflow-hidden"
            >
              {/* Ledger Row Top Strip */}
              <div className="flex flex-wrap items-center justify-between border-b border-archive-border bg-archive-surface px-4 py-2 font-mono text-xs text-archive-muted">
                <div className="flex items-center gap-2">
                  <span className="text-archive-rust font-bold">
                    LOG_ENTRY 0{idx + 1}
                  </span>
                  <span>//</span>
                  <span className="text-archive-parchment">{exp.period.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-1.5 text-archive-muted">
                  <MapPin className="h-3 w-3 text-archive-rust" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Main Content Details */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Role and Organization */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-start gap-2">
                    <Building2 className="h-4 w-4 text-archive-rust mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-editorial text-xl sm:text-2xl text-archive-parchment font-normal leading-snug">
                        {exp.company}
                      </h3>
                      <p className="font-mono text-xs text-archive-rust mt-1 font-semibold">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Audited Focus Points */}
                <div className="lg:col-span-7">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-archive-subtle block mb-3">
                    AUDITED WORKFLOW DELIVERABLES & RESPONSIBILITIES:
                  </span>
                  <ul className="space-y-2.5 font-sans text-sm text-archive-muted">
                    {exp.focus.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <span className="mt-1 flex h-4 w-4 items-center justify-center border border-archive-border bg-archive-obsidian text-archive-beacon flex-shrink-0">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span className="leading-relaxed text-archive-parchment/90">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
