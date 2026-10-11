import { portfolioData } from "@/data/profile-data";
import { Mail, ArrowUpRight, Compass } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Footer() {
  const { profile } = portfolioData;

  const asciiSignature = `
 ____  ___ _____    _    _     ______        _____ _  _______ __   __
|  _ \\|_ _|__  /   / \\  | |   / ___\\ \\      / /_ _| |/ / ____|\\ \\ / /
| |_) || |  / /   / _ \\ | |   \\___ \\\\ \\ /\\ / / | || ' /|  _|   \\ V / 
|  _ < | | / /_  / ___ \\| |___ ___) |\\ V  V /  | || . \\| |___   | |  
|_| \\_\\___/____|/_/   \\_\\_____|____/  \\_/\\_/  |___|_|\\_\\_____|  |_|  
  `.trim();

  return (
    <footer id="footer" className="relative border-t border-archive-border bg-archive-obsidian py-16 text-archive-muted font-mono text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
        {/* ASCII Signature block */}
        <div className="border border-archive-border bg-archive-panel p-4 overflow-x-auto text-[10px] sm:text-xs leading-none text-archive-rust">
          <pre className="font-mono">{asciiSignature}</pre>
        </div>

        {/* Colophon & Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-archive-border pb-10">
          {/* Station Coordinates */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-archive-parchment font-bold tracking-wider block">
              [PORTFOLIO COLOPHON]
            </span>
            <p className="font-sans text-archive-muted text-xs leading-relaxed">
              Designed and developed by Rizal Akbar Syah Fauzan Putra. Built with Next.js 15, TypeScript, and Tailwind CSS. Deployed on the Vercel Edge Network.
            </p>
            <div className="flex items-center gap-2 text-archive-subtle text-[11px] pt-1">
              <Compass className="h-3.5 w-3.5 text-archive-rust" />
              <span>
                LOCATION: MALANG, INDONESIA [UTC+07:00]
              </span>
            </div>
          </div>

          {/* Directory Navigation */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-archive-parchment font-bold tracking-wider block">
              [NAVIGATION]
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="#hero" className="hover:text-archive-parchment transition-colors">
                  01. ABOUT
                </a>
              </li>
              <li>
                <a href="#exhibition" className="hover:text-archive-parchment transition-colors">
                  02. PROJECTS
                </a>
              </li>
              <li>
                <a href="#matrix" className="hover:text-archive-parchment transition-colors">
                  03. SKILLS
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-archive-parchment transition-colors">
                  04. EXPERIENCE
                </a>
              </li>
            </ul>
          </div>

          {/* Transmission Channels */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-archive-parchment font-bold tracking-wider block">
              [CONTACT & PROFILES]
            </span>
            <div className="space-y-2 text-[11px]">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-archive-border bg-archive-panel p-2 hover:border-archive-parchment/40 transition-colors text-archive-parchment"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="h-3.5 w-3.5 text-archive-rust" />
                  <span>github.com/RizalSwikey</span>
                </div>
                <ArrowUpRight className="h-3 w-3 text-archive-subtle" />
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-archive-border bg-archive-panel p-2 hover:border-archive-parchment/40 transition-colors text-archive-parchment"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="h-3.5 w-3.5 text-archive-rust" />
                  <span>linkedin.com/in/rizal-akbar-s-f-707a01219</span>
                </div>
                <ArrowUpRight className="h-3 w-3 text-archive-subtle" />
              </a>

              <a
                href={profile.links.email}
                className="flex items-center justify-between border border-archive-border bg-archive-panel p-2 hover:border-archive-parchment/40 transition-colors text-archive-parchment"
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-archive-rust" />
                  <span>rizalakbarsyah@gmail.com</span>
                </div>
                <ArrowUpRight className="h-3 w-3 text-archive-subtle" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Hash */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-archive-subtle">
          <div>
            &copy; {new Date().getFullYear()} Rizal Akbar Syah Fauzan Putra. Released under the MIT License.
          </div>
          <div className="flex items-center gap-4">
            <span>COMMIT: VERIFIED</span>
            <span>BUILD: EDGE-OPTIMIZED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
