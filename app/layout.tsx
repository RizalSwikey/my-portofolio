import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rizal Akbar Syah Fauzan Putra — Software Engineer & Product Designer",
  description:
    "Personal portfolio of Rizal Akbar Syah Fauzan Putra. Software Engineer and UI/UX Designer with experience in frontend development, QA testing, and full-stack systems.",
  authors: [{ name: "Rizal Akbar Syah Fauzan Putra", url: "https://github.com/RizalSwikey" }],
  keywords: [
    "Rizal Akbar Syah Fauzan Putra",
    "RizalSwikey",
    "Frontend Engineer",
    "UI/UX Designer",
    "QA Tester",
    "Full-Stack Developer",
    "University of Brawijaya",
    "Malang",
  ],
  openGraph: {
    title: "Rizal Akbar Syah Fauzan Putra — Software Engineer & Product Designer",
    description:
      "Personal portfolio of Rizal Akbar Syah Fauzan Putra. Software Engineer and UI/UX Designer based in Malang, Indonesia.",
    url: "https://portfolio.rizalswikey.com",
    siteName: "Rizal Akbar Syah Fauzan Putra Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-archive-obsidian text-archive-parchment antialiased selection:bg-archive-rust selection:text-white">
        {children}
      </body>
    </html>
  );
}
