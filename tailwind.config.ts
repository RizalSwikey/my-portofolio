import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        archive: {
          obsidian: "#0E0E10",
          panel: "#151518",
          surface: "#1C1C21",
          parchment: "#F3EFE6",
          muted: "#8E8D8A",
          subtle: "#5A5955",
          border: "#26262B",
          rust: "#D34528",
          beacon: "#22C55E",
        },
      },
      fontFamily: {
        editorial: ["var(--font-serif)", "Newsreader", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        "precision-stamp": "0 0 0 1px #26262B, 0 8px 24px -4px rgba(0, 0, 0, 0.6)",
        "rust-glow": "0 0 20px -2px rgba(211, 69, 40, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
