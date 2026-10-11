"use client";

import { motion } from "framer-motion";
import { portfolioData, Project } from "@/data/profile-data";
import {
  ExternalLink,
  Gauge,
  Terminal,
  Calculator,
  Layers,
  CheckCircle2,
  Cpu,
  ShieldAlert,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function ProjectExhibition() {
  const { projects } = portfolioData;

  const kacaPutih = projects.find((p) => p.id === "kaca-putih")!;
  const initiaMate = projects.find((p) => p.id === "initia-mate")!;
  const umkmAccounting = projects.find((p) => p.id === "umkm-accounting")!;

  return (
    <section id="exhibition" className="relative border-b border-archive-border bg-archive-obsidian py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-archive-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 border border-archive-border bg-archive-panel px-2.5 py-1 text-xs font-mono text-archive-rust mb-3">
              <span className="h-1.5 w-1.5 bg-archive-rust"></span>
              FEATURED PROJECTS
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-archive-parchment">
              Selected Projects
            </h2>
          </div>
          <div className="font-mono text-xs text-archive-muted text-right">
            <span>3 SELECTED WORKS</span>
            <br />
            <span className="text-archive-subtle">2024 – PRESENT</span>
          </div>
        </div>

        {/* Project 01: Kaca Putih (Visual Editorial Canvas) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border border-archive-border bg-archive-panel overflow-hidden"
        >
          {/* Top Archival Ribbon */}
          <div className="flex flex-wrap items-center justify-between border-b border-archive-border bg-archive-surface px-4 py-2 font-mono text-xs text-archive-muted">
            <div className="flex items-center gap-2">
              <span className="text-archive-rust font-bold">PROJECT 01</span>
              <span>//</span>
              <span className="uppercase text-archive-parchment">{kacaPutih.archetype}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>LOC: {kacaPutih.location}</span>
              <span className="text-archive-subtle">|</span>
              <span className="text-archive-beacon font-medium">LIGHTHOUSE: 99/100</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8 items-center">
            {/* Visual Editorial Preview Panel */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border border-archive-border bg-archive-obsidian p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-archive-rust/20 border-b border-l border-archive-rust/30 px-2 py-0.5 font-mono text-[10px] text-archive-rust">
                  EDGE VERCEL DEPLOY
                </div>
                <div className="font-editorial text-2xl text-archive-parchment italic mb-1">
                  Kaca Putih
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-archive-subtle mb-4">
                  Cafe & Kitchen — Bunulrejo, Malang
                </div>
                <div className="border-t border-b border-archive-border py-3 my-3 font-serif text-sm text-archive-parchment/80 leading-relaxed italic">
                  &ldquo;A modern digital storefront and menu platform designed for fast page loads, clear typography, and seamless mobile experience.&rdquo;
                </div>
                <div className="flex items-center justify-between font-mono text-xs pt-2">
                  <span className="text-archive-muted">ISR CACHING:</span>
                  <span className="text-archive-parchment font-semibold">ACTIVE (SUB-50ms)</span>
                </div>
              </div>

              {/* Verified Metrics Badge */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="border border-archive-border bg-archive-obsidian/70 p-3">
                  <div className="flex items-center gap-1.5 text-archive-beacon mb-1">
                    <Gauge className="h-3.5 w-3.5" />
                    <span className="font-bold">PERFORMANCE</span>
                  </div>
                  <span className="text-archive-parchment font-semibold">99 Lighthouse</span>
                  <p className="text-[10px] text-archive-muted mt-0.5">Edge asset delivery</p>
                </div>
                <div className="border border-archive-border bg-archive-obsidian/70 p-3">
                  <div className="flex items-center gap-1.5 text-archive-rust mb-1">
                    <Layers className="h-3.5 w-3.5" />
                    <span className="font-bold">ROUTING</span>
                  </div>
                  <span className="text-archive-parchment font-semibold">Next.js App Router</span>
                  <p className="text-[10px] text-archive-muted mt-0.5">Dynamic ISR catalog</p>
                </div>
              </div>
            </div>

            {/* Context & Description */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-archive-parchment font-normal mb-2">
                  {kacaPutih.name}
                </h3>
                <p className="font-mono text-xs text-archive-rust mb-4">
                  {kacaPutih.category} — Artisanal Hospitality Flagship
                </p>
                <p className="text-archive-muted text-sm sm:text-base leading-relaxed">
                  {kacaPutih.summary} Built with an editorial design system engineered from high-fidelity Figma components, optimizing typography contrast for outdoor handheld mobile devices and zero layout shift.
                </p>
              </div>

              {/* Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="text-archive-subtle mr-1 text-[11px]">STACK:</span>
                {kacaPutih.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-archive-border bg-archive-obsidian px-2.5 py-1 text-archive-parchment"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Live Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
                <a
                  href={kacaPutih.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-archive-rust bg-archive-rust px-4 py-2.5 text-white hover:bg-archive-rust/90 transition-colors shadow-sm"
                >
                  <span>VIEW LIVE SITE</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={kacaPutih.links.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-archive-border bg-archive-obsidian px-4 py-2.5 text-archive-parchment hover:border-archive-parchment/40 transition-colors"
                >
                  <GithubIcon className="h-4 w-4 text-archive-muted" />
                  <span>SOURCE CODE</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 02: initia-mate (Terminal-Grade Precision) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border border-archive-border bg-archive-panel overflow-hidden"
        >
          {/* Top Archival Ribbon */}
          <div className="flex flex-wrap items-center justify-between border-b border-archive-border bg-archive-surface px-4 py-2 font-mono text-xs text-archive-muted">
            <div className="flex items-center gap-2">
              <span className="text-archive-rust font-bold">PROJECT 02</span>
              <span>//</span>
              <span className="uppercase text-archive-parchment">{initiaMate.archetype}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>LOC: {initiaMate.location}</span>
              <span className="text-archive-subtle">|</span>
              <span className="text-archive-parchment font-medium">AUTOMATION TOOLING</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8 items-center">
            {/* Terminal Preview Interface */}
            <div className="lg:col-span-6 font-mono text-xs space-y-3">
              <div className="border border-archive-border bg-[#0B0B0C] p-4 rounded-none shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-archive-border/60 pb-2 mb-3 text-[11px] text-archive-muted">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-archive-rust inline-block"></span>
                    <span className="h-2 w-2 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="h-2 w-2 rounded-full bg-archive-beacon inline-block"></span>
                    <span className="ml-2 text-archive-parchment">initia-mate@cli ~ v1.0.4</span>
                  </div>
                  <span>BASH/DOCKER</span>
                </div>

                {/* Simulated CLI stdout */}
                <div className="space-y-1.5 text-[11px]">
                  <p className="text-archive-muted">
                    $ <span className="text-archive-parchment">initia-mate sync --network testnet --verify</span>
                  </p>
                  <p className="text-archive-rust">[INFO] Parsing ecosystem telemetry & node state...</p>
                  <p className="text-archive-parchment">[OK] Node genesis verification: 0x8a92...dc31</p>
                  <p className="text-archive-parchment">[OK] Container sandbox health: ACTIVE</p>
                  <p className="text-archive-beacon flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 inline" />
                    <span>Pipeline stabilized: ZERO-DRIFT EXECUTION (0.00ms delta)</span>
                  </p>
                </div>
              </div>

              {/* CLI Metrics */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="border border-archive-border bg-archive-obsidian/70 p-3">
                  <div className="flex items-center gap-1.5 text-archive-rust mb-1">
                    <Cpu className="h-3.5 w-3.5" />
                    <span className="font-bold">EXECUTION</span>
                  </div>
                  <span className="text-archive-parchment font-semibold">Zero-Overhead</span>
                  <p className="text-[10px] text-archive-muted mt-0.5">Headless Docker container</p>
                </div>
                <div className="border border-archive-border bg-archive-obsidian/70 p-3">
                  <div className="flex items-center gap-1.5 text-archive-beacon mb-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span className="font-bold">COVERAGE</span>
                  </div>
                  <span className="text-archive-parchment font-semibold">100% Surface</span>
                  <p className="text-[10px] text-archive-muted mt-0.5">Strict typed CLI options</p>
                </div>
              </div>
            </div>

            {/* Context & Description */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-archive-parchment font-normal mb-2">
                  {initiaMate.name}
                </h3>
                <p className="font-mono text-xs text-archive-rust mb-4">
                  {initiaMate.category} — Terminal & Node Automation
                </p>
                <p className="text-archive-muted text-sm sm:text-base leading-relaxed">
                  {initiaMate.summary} Designed for developers needing repeatable, predictable testnet orchestration without unexpected node drifts. Employs modular TypeScript runtime scripts combined with Docker sandboxes.
                </p>
              </div>

              {/* Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="text-archive-subtle mr-1 text-[11px]">STACK:</span>
                {initiaMate.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-archive-border bg-archive-obsidian px-2.5 py-1 text-archive-parchment"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Live Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
                <a
                  href={initiaMate.links.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-archive-rust bg-archive-rust px-4 py-2.5 text-white hover:bg-archive-rust/90 transition-colors shadow-sm"
                >
                  <Terminal className="h-3.5 w-3.5" />
                  <span>VIEW ON GITHUB</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 03: UMKM Accounting (Data Ledger & Computation) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-archive-border bg-archive-panel overflow-hidden"
        >
          {/* Top Archival Ribbon */}
          <div className="flex flex-wrap items-center justify-between border-b border-archive-border bg-archive-surface px-4 py-2 font-mono text-xs text-archive-muted">
            <div className="flex items-center gap-2">
              <span className="text-archive-rust font-bold">PROJECT 03</span>
              <span>//</span>
              <span className="uppercase text-archive-parchment">{umkmAccounting.archetype}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>LOC: {umkmAccounting.location}</span>
              <span className="text-archive-subtle">|</span>
              <span className="text-archive-parchment font-medium">SAK EMKM COMPLIANT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8 items-center">
            {/* Financial Ledger Display */}
            <div className="lg:col-span-6 font-mono text-xs space-y-3">
              <div className="border border-archive-border bg-archive-obsidian p-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-archive-border pb-2 mb-3 text-[11px] text-archive-muted">
                  <span className="text-archive-parchment font-bold">DOUBLE-ENTRY GENERAL LEDGER</span>
                  <span className="text-archive-beacon font-semibold">BALANCED AUDIT</span>
                </div>

                {/* Ledger Data Table */}
                <div className="divide-y divide-archive-border/50 text-[11px]">
                  <div className="grid grid-cols-12 py-1.5 text-archive-subtle text-[10px]">
                    <span className="col-span-6">ACCOUNT / SPECIFICATION</span>
                    <span className="col-span-3 text-right">DEBIT</span>
                    <span className="col-span-3 text-right">CREDIT</span>
                  </div>
                  <div className="grid grid-cols-12 py-1.5 text-archive-parchment">
                    <span className="col-span-6 text-archive-parchment">1101 — Kas & Bank Operasional</span>
                    <span className="col-span-3 text-right text-archive-beacon">IDR 14.500.000</span>
                    <span className="col-span-3 text-right text-archive-muted">-</span>
                  </div>
                  <div className="grid grid-cols-12 py-1.5 text-archive-parchment">
                    <span className="col-span-6 text-archive-parchment">5101 — HPP / COGS Persediaan</span>
                    <span className="col-span-3 text-right text-archive-beacon">IDR 8.750.000</span>
                    <span className="col-span-3 text-right text-archive-muted">-</span>
                  </div>
                  <div className="grid grid-cols-12 py-1.5 text-archive-parchment">
                    <span className="col-span-6 text-archive-parchment">4101 — Pendapatan Usaha UMKM</span>
                    <span className="col-span-3 text-right text-archive-muted">-</span>
                    <span className="col-span-3 text-right text-archive-rust">IDR 23.250.000</span>
                  </div>
                </div>

                <div className="border-t border-archive-border pt-2.5 mt-2 flex items-center justify-between text-[11px]">
                  <span className="text-archive-muted font-bold">RECONCILED DELTA:</span>
                  <span className="text-archive-beacon font-bold">0.00 IDR (ZERO DRIFT)</span>
                </div>
              </div>

              {/* Ledger Compliance Tags */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="border border-archive-border bg-archive-obsidian/70 p-3">
                  <div className="flex items-center gap-1.5 text-archive-beacon mb-1">
                    <Calculator className="h-3.5 w-3.5" />
                    <span className="font-bold">STANDARDS</span>
                  </div>
                  <span className="text-archive-parchment font-semibold">SAK EMKM & Fiscal</span>
                  <p className="text-[10px] text-archive-muted mt-0.5">Automated PP 23 Tax formulas</p>
                </div>
                <div className="border border-archive-border bg-archive-obsidian/70 p-3">
                  <div className="flex items-center gap-1.5 text-archive-rust mb-1">
                    <ShieldAlert className="h-3.5 w-3.5" />
                    <span className="font-bold">INTEGRITY</span>
                  </div>
                  <span className="text-archive-parchment font-semibold">Double-Entry Trail</span>
                  <p className="text-[10px] text-archive-muted mt-0.5">Strict SQL relational schema</p>
                </div>
              </div>
            </div>

            {/* Context & Description */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-archive-parchment font-normal mb-2">
                  {umkmAccounting.name}
                </h3>
                <p className="font-mono text-xs text-archive-rust mb-4">
                  {umkmAccounting.category} — Enterprise Financial Ledger
                </p>
                <p className="text-archive-muted text-sm sm:text-base leading-relaxed">
                  {umkmAccounting.summary} Engineered with automated COGS calculations, real-time balance checks, and compliant financial statements for small and medium Indonesian enterprises.
                </p>
              </div>

              {/* Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="text-archive-subtle mr-1 text-[11px]">STACK:</span>
                {umkmAccounting.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-archive-border bg-archive-obsidian px-2.5 py-1 text-archive-parchment"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Live Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
                <a
                  href={umkmAccounting.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-archive-rust bg-archive-rust px-4 py-2.5 text-white hover:bg-archive-rust/90 transition-colors shadow-sm"
                >
                  <Calculator className="h-3.5 w-3.5" />
                  <span>VIEW DEMO</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={umkmAccounting.links.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-archive-border bg-archive-obsidian px-4 py-2.5 text-archive-parchment hover:border-archive-parchment/40 transition-colors"
                >
                  <GithubIcon className="h-4 w-4 text-archive-muted" />
                  <span>SOURCE CODE</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
