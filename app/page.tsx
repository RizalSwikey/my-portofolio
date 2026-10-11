import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectExhibition } from "@/components/ProjectExhibition";
import { TechnicalMatrix } from "@/components/TechnicalMatrix";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-archive-obsidian text-archive-parchment">
      <Header />
      <Hero />
      <ProjectExhibition />
      <TechnicalMatrix />
      <ExperienceTimeline />
      <Footer />
    </main>
  );
}
