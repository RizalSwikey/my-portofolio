"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/profile-data";
import { Compass, Clock, Radio } from "lucide-react";

export function Header() {
  const { profile } = portfolioData;
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateMalangTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setLocalTime(formatted);
    };

    updateMalangTime();
    const interval = setInterval(updateMalangTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-archive-border bg-archive-obsidian/90 backdrop-blur-md">
      {/* Top Telemetry Bar */}
      <div className="border-b border-archive-border/50 px-4 py-1.5 text-[11px] font-mono tracking-wider text-archive-muted">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-1">
          {/* Coordinates */}
          <div className="flex items-center gap-2">
            <Compass className="h-3 w-3 text-archive-rust" />
            <span>
              LAT: {Math.abs(profile.location.coordinates.lat)}° S | LNG:{" "}
              {profile.location.coordinates.lng}° E
            </span>
            <span className="hidden sm:inline text-archive-subtle">/</span>
            <span className="hidden sm:inline">MALANG, ID [UTC+07:00]</span>
          </div>

          {/* Time & Beacon */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-archive-muted" />
              <span>STATION TIME:</span>
              <span className="font-semibold text-archive-parchment">
                {localTime || "12:00:00"} WIB
              </span>
            </div>

            <div className="flex items-center gap-1.5 pl-2 border-l border-archive-border">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-archive-beacon opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-archive-beacon"></span>
              </span>
              <span className="hidden md:inline text-archive-parchment font-medium">
                OPEN TO ROLES
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="group flex items-center gap-2 font-mono text-sm tracking-widest text-archive-parchment"
          >
            <span className="flex h-6 w-6 items-center justify-center border border-archive-border bg-archive-panel text-xs text-archive-rust group-hover:border-archive-rust transition-colors">
              R
            </span>
            <span className="font-bold uppercase tracking-widest">
              {profile.handle}
            </span>
          </a>
          <span className="text-xs text-archive-subtle font-mono hidden sm:inline">
            // REV 2026.10
          </span>
        </div>

        {/* Archival Navigation Ledger */}
        <nav className="flex items-center gap-1 sm:gap-4 font-mono text-xs">
          <a
            href="#hero"
            className="px-2 py-1 text-archive-muted hover:text-archive-parchment hover:bg-archive-panel transition-colors"
          >
            [01.MANIFESTO]
          </a>
          <a
            href="#exhibition"
            className="px-2 py-1 text-archive-muted hover:text-archive-parchment hover:bg-archive-panel transition-colors"
          >
            [02.EXHIBITION]
          </a>
          <a
            href="#matrix"
            className="px-2 py-1 text-archive-muted hover:text-archive-parchment hover:bg-archive-panel transition-colors"
          >
            [03.MATRIX]
          </a>
          <a
            href="#timeline"
            className="px-2 py-1 text-archive-muted hover:text-archive-parchment hover:bg-archive-panel transition-colors hidden md:inline"
          >
            [04.TIMELINE]
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 border border-archive-rust/40 bg-archive-rust/10 px-2.5 py-1 text-archive-rust hover:bg-archive-rust hover:text-white transition-all font-mono"
          >
            GH://RizalSwikey
          </a>
        </nav>
      </div>
    </header>
  );
}
