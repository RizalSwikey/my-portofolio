"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/profile-data";
import {
  Palette,
  Server,
  MonitorSmartphone,
  ShieldCheck,
  Award,
  Layers,
} from "lucide-react";

export function TechnicalMatrix() {
  const { technicalTaxonomy } = portfolioData;

  const categories = [
    {
      title: "Product Design & Ergonomics",
      code: "DESIGN_01",
      icon: Palette,
      description: "Figma token systems, WCAG 2.1 AA, human-centered interaction architecture",
      skills: technicalTaxonomy.productDesign,
      borderAccent: "border-archive-rust/40",
    },
    {
      title: "Core Languages & Systems Backend",
      code: "SYSTEMS_02",
      icon: Server,
      description: "Strict typing, relational database schema modeling, scalable REST APIs",
      skills: technicalTaxonomy.systemsAndBackend,
      borderAccent: "border-archive-border",
    },
    {
      title: "Client & Platform Runtimes",
      code: "CLIENT_03",
      icon: MonitorSmartphone,
      description: "Modern component architectures, edge routing, responsive interfaces",
      skills: technicalTaxonomy.clientAndPlatform,
      borderAccent: "border-archive-border",
    },
    {
      title: "Testing, QA & DevOps Delivery",
      code: "QA_DEVOPS_04",
      icon: ShieldCheck,
      description: "Boundary testing, regression suites, Docker containerization, edge CI/CD",
      skills: technicalTaxonomy.testingAndDevOps,
      borderAccent: "border-archive-beacon/40",
    },
  ];

  return (
    <section id="matrix" className="relative border-b border-archive-border bg-archive-obsidian py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-archive-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 border border-archive-border bg-archive-panel px-2.5 py-1 text-xs font-mono text-archive-rust mb-3">
              <span className="h-1.5 w-1.5 bg-archive-rust"></span>
              SECTION 03 // TECHNICAL CAPABILITIES MATRIX
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-archive-parchment">
              Verified Technical Runtimes
            </h2>
          </div>
          <div className="font-mono text-xs text-archive-muted text-right">
            <span>TAXONOMY: HIGH-DENSITY GRID</span>
            <br />
            <span className="text-archive-subtle">PROVEN PRODUCTION PROFICIENCIES</span>
          </div>
        </div>

        {/* 2x2 Grid of Technical Disciplines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="border border-archive-border bg-archive-panel p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-archive-border pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 border border-archive-border bg-archive-obsidian text-archive-rust">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-editorial text-lg text-archive-parchment">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-archive-subtle">
                      [{cat.code}]
                    </span>
                  </div>

                  <p className="text-archive-muted text-xs font-sans mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs border border-archive-border bg-archive-obsidian px-2.5 py-1 text-archive-parchment hover:border-archive-rust/50 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-archive-border/60 flex items-center justify-between font-mono text-[11px] text-archive-subtle">
                  <span>AUDITED STATUS: PASS</span>
                  <span className="text-archive-muted">TOTAL: {cat.skills.length} TOKENS</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications and Specializations Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 border border-archive-border bg-archive-panel p-6"
        >
          <div className="flex items-center justify-between border-b border-archive-border pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-archive-rust" />
              <h3 className="font-editorial text-lg text-archive-parchment">
                Verified Credentials & Certifications
              </h3>
            </div>
            <span className="font-mono text-xs text-archive-subtle">[CERT_05]</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            {technicalTaxonomy.certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center justify-between border border-archive-border bg-archive-obsidian p-3"
              >
                <div className="flex items-center gap-2 text-archive-parchment">
                  <span className="h-1.5 w-1.5 bg-archive-rust"></span>
                  <span>{cert}</span>
                </div>
                <span className="text-archive-beacon text-[10px] uppercase font-bold">
                  VERIFIED
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
