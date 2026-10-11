"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/profile-data";
import {
  ArrowUpRight,
  Terminal,
  ShieldCheck,
  Palette,
  GraduationCap,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Hero() {
  const { profile } = portfolioData;

  return (
    <section id="hero" className="relative border-b border-archive-border bg-archive-obsidian">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        {/* Section Index Marker */}
        <div className="mb-6 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 border border-archive-border bg-archive-panel px-2.5 py-1 text-xs font-mono text-archive-rust">
            <span className="h-1.5 w-1.5 bg-archive-rust"></span>
            ABOUT // PROFILE
          </div>
          <div className="font-mono text-xs text-archive-subtle hidden sm:block">
            SOFTWARE ENGINEER & PRODUCT DESIGNER
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline and Identity */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-archive-muted mb-2">
                Engineer & Product Designer — Malang / Jakarta
              </p>
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-archive-parchment">
                {profile.fullName}
              </h1>
            </motion.div>

            {/* Asymmetric Core Axiom */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-l-2 border-archive-rust pl-4 sm:pl-6 py-1"
            >
              <p className="font-editorial italic text-xl sm:text-2xl text-archive-parchment/90">
                &ldquo;Great software combines thoughtful interface design, rigorous testing, and reliable engineering.&rdquo;
              </p>
            </motion.div>

            {/* Sub-Manifesto */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-archive-muted text-sm sm:text-base leading-relaxed font-sans"
            >
              <p>
                Information Systems graduate from University of Brawijaya with hands-on experience in modern frontend development, UI/UX design, and quality assurance testing. Focused on building responsive, accessible web applications with clean architecture and solid code quality.
              </p>
            </motion.div>

            {/* Call-to-action Links & Verified Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-4 font-mono text-xs"
            >
              <a
                href={profile.links.email}
                className="inline-flex items-center gap-2 border border-archive-rust bg-archive-rust px-4 py-2.5 text-white hover:bg-archive-rust/90 transition-all shadow-sm"
              >
                <Mail className="h-4 w-4" />
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-archive-border bg-archive-panel px-4 py-2.5 text-archive-parchment hover:border-archive-parchment/40 transition-colors"
              >
                <GithubIcon className="h-4 w-4 text-archive-muted" />
                <span>GITHUB</span>
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-archive-border bg-archive-panel px-4 py-2.5 text-archive-parchment hover:border-archive-parchment/40 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 text-archive-muted" />
                <span>LINKEDIN</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Instrument Telemetry Ledger Card */}
          <div className="lg:col-span-4 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-archive-border bg-archive-panel p-5 font-mono text-xs space-y-4"
            >
              <div className="flex items-center justify-between border-b border-archive-border pb-3">
                <span className="text-archive-muted">[PROFILE OVERVIEW]</span>
                <span className="text-archive-rust font-semibold">VERIFIED</span>
              </div>

              {/* Academic Record */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-archive-parchment font-semibold">
                  <GraduationCap className="h-4 w-4 text-archive-rust" />
                  <span>EDUCATION</span>
                </div>
                <div className="text-archive-parchment">
                  {profile.education.degree}
                </div>
                <div className="text-archive-muted text-[11px]">
                  {profile.education.faculty}
                  <br />
                  {profile.education.institution}
                </div>
                <div className="inline-block border border-archive-border bg-archive-obsidian px-2 py-0.5 text-archive-parchment text-[11px] font-bold">
                  CUMULATIVE GPA: {profile.education.gpa} / 4.00
                </div>
              </div>

              {/* Thesis Specification */}
              <div className="border-t border-archive-border pt-3 space-y-1">
                <span className="text-archive-subtle block text-[10px] uppercase">
                  UNDERGRADUATE THESIS:
                </span>
                <p className="text-archive-parchment text-[11px] leading-snug">
                  {profile.education.thesis.title}
                </p>
                <span className="text-archive-rust text-[10px] block">
                  [{profile.education.thesis.domain}]
                </span>
              </div>

              {/* Status Beacon */}
              <div className="border-t border-archive-border pt-3 space-y-2">
                <span className="text-archive-subtle block text-[10px] uppercase">
                  AVAILABILITY:
                </span>
                <div className="flex items-start gap-2 bg-archive-obsidian/70 p-2.5 border border-archive-border">
                  <span className="mt-1 h-2 w-2 rounded-full bg-archive-beacon flex-shrink-0 animate-pulse"></span>
                  <span className="text-archive-parchment text-[11px] leading-tight">
                    {profile.status}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Triad of Competencies */}
            <div className="grid grid-cols-3 gap-2 font-mono text-[11px]">
              <div className="border border-archive-border bg-archive-panel/80 p-2.5 text-center">
                <Palette className="h-4 w-4 text-archive-rust mx-auto mb-1" />
                <span className="text-archive-parchment font-medium block">UI/UX</span>
                <span className="text-archive-subtle text-[10px]">Figma & Design</span>
              </div>
              <div className="border border-archive-border bg-archive-panel/80 p-2.5 text-center">
                <ShieldCheck className="h-4 w-4 text-archive-beacon mx-auto mb-1" />
                <span className="text-archive-parchment font-medium block">QA TESTING</span>
                <span className="text-archive-subtle text-[10px]">Manual & Auto</span>
              </div>
              <div className="border border-archive-border bg-archive-panel/80 p-2.5 text-center">
                <Terminal className="h-4 w-4 text-archive-rust mx-auto mb-1" />
                <span className="text-archive-parchment font-medium block">FULL STACK</span>
                <span className="text-archive-subtle text-[10px]">TS, React & PHP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
