export interface LocationCoordinates {
  lat: number;
  lng: number;
}

export interface ProfileLocation {
  base: string;
  timezone: string;
  coordinates: LocationCoordinates;
}

export interface Thesis {
  domain: string;
  title: string;
}

export interface Education {
  degree: string;
  faculty: string;
  institution: string;
  gpa: number;
  thesis: Thesis;
}

export interface ProfileLinks {
  email: string;
  github: string;
  linkedin: string;
  vercel: string;
}

export interface Profile {
  fullName: string;
  handle: string;
  headline: string;
  status: string;
  location: ProfileLocation;
  education: Education;
  links: ProfileLinks;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  focus: string[];
}

export interface TechnicalTaxonomy {
  productDesign: string[];
  systemsAndBackend: string[];
  clientAndPlatform: string[];
  testingAndDevOps: string[];
  certifications: string[];
}

export interface ProjectLinks {
  live: string;
  repository: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  archetype: string;
  summary: string;
  stack: string[];
  location: string;
  metrics: {
    lighthousePerformance?: number;
    delivery?: string;
    reliability?: string;
    executionMode?: string;
    precision?: string;
    compliance?: string;
    [key: string]: string | number | undefined;
  };
  links: ProjectLinks;
}

export interface PortfolioData {
  $schema?: string;
  profile: Profile;
  experienceHistory: Experience[];
  technicalTaxonomy: TechnicalTaxonomy;
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "Rizal Akbar Syah Fauzan Putra",
    handle: "RizalSwikey",
    headline: "Human-Centered Design × Rigorous QA × Precision Engineering",
    status: "Available for high-impact software engineering & product design roles",
    location: {
      base: "Malang / Jakarta, Indonesia",
      timezone: "Asia/Jakarta (UTC+07:00)",
      coordinates: {
        lat: -7.9666,
        lng: 112.6326,
      },
    },
    education: {
      degree: "Bachelor of Information Systems",
      faculty: "Faculty of Computer Science",
      institution: "University of Brawijaya",
      gpa: 3.61,
      thesis: {
        domain: "Natural Language Processing & Machine Learning",
        title: "Aspect-Based Sentiment Analysis with Support Vector Machine (SVM)",
      },
    },
    links: {
      email: "mailto:rizalswikey@gmail.com",
      github: "https://github.com/RizalSwikey",
      linkedin: "https://www.linkedin.com/in/rizal-akbar-s-f-707a01219/",
      vercel: "https://vercel.com/rizalswikey",
    },
  },
  experienceHistory: [
    {
      company: "Dinas Komunikasi dan Informatika (Diskominfo) Kota Malang",
      role: "QA Tester Intern",
      period: "Internship",
      location: "Malang, Indonesia",
      focus: [
        "SURADI (Sistem Surat Masuk & Keluar Digital) end-to-end testing",
        "E-Kelurahan SOP compliance & flow boundary validation",
        "Edge-case discovery, defect logging, and cross-department verification",
      ],
    },
    {
      company: "Perempuan Masa Depan.id",
      role: "UI/UX Designer Intern",
      period: "Internship",
      location: "Remote / Indonesia",
      focus: [
        "Figma component library and modular design token architecture",
        "High-fidelity interactive prototyping for multi-screen responsive viewports",
        "User research synthesis into ergonomic digital interfaces",
      ],
    },
    {
      company: "PT Telkom Akses",
      role: "Data Operations Intern",
      period: "Internship",
      location: "Kediri, Indonesia",
      focus: [
        "Operational network and telecommunication data reconciliation",
        "Database querying, anomaly verification, and status reporting",
      ],
    },
  ],
  technicalTaxonomy: {
    productDesign: [
      "Figma",
      "Design Systems",
      "Wireframing",
      "High-Fidelity Prototyping",
      "User Journey Mapping",
      "Accessibility (WCAG 2.1 AA)",
    ],
    systemsAndBackend: [
      "TypeScript",
      "JavaScript",
      "Python",
      "PHP",
      "Node.js",
      "Express.js",
      "Laravel",
      "RESTful API Design",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
    clientAndPlatform: [
      "Next.js (App Router)",
      "React",
      "Tailwind CSS",
      "Flutter",
      "HTML5 Semantics",
      "Modern CSS Architecture",
    ],
    testingAndDevOps: [
      "Software Quality Assurance (QA)",
      "Boundary & Regression Testing",
      "Docker",
      "Git",
      "Postman API Automation",
      "Vercel Edge Delivery",
    ],
    certifications: [
      "Full-Stack Web Development Bootcamp",
      "Google IT Support Specialization",
    ],
  },
  projects: [
    {
      id: "kaca-putih",
      name: "Kaca Putih Cafe & Kitchen",
      category: "Live Production Showcase",
      archetype: "Visual Editorial Canvas",
      summary:
        "Artisanal hospitality digital flagship featuring localized identity, dynamic interactive catalog architecture, and sub-second asset delivery.",
      stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      location: "Bunulrejo, Malang",
      metrics: {
        lighthousePerformance: 99,
        delivery: "Edge-optimized static + dynamic ISR",
      },
      links: {
        live: "https://kacaputih.vercel.app",
        repository: "https://github.com/RizalSwikey/kaca-putih",
      },
    },
    {
      id: "initia-mate",
      name: "initia-mate",
      category: "Open Source / Infrastructure Tooling",
      archetype: "Terminal-Grade Precision",
      summary:
        "Developer utilities and operational automation tooling built with strict CLI ergonomics and predictable ecosystem pipelines for Initia.",
      stack: ["TypeScript", "Node.js", "Docker", "Shell"],
      location: "Global / Remote",
      metrics: {
        executionMode: "Zero-overhead headless execution",
        reliability: "100% test-verified command surface",
      },
      links: {
        live: "https://github.com/RizalSwikey/initia-mate",
        repository: "https://github.com/RizalSwikey/initia-mate",
      },
    },
    {
      id: "umkm-accounting",
      name: "Web-Based Accounting Engine for UMKM",
      category: "Production Architecture",
      archetype: "Data Ledger & Computation",
      summary:
        "Production financial platform managing COGS/HPP formulas, automated tax scheduling, double-entry audit journals, and cloud balance reconciliation.",
      stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "REST API"],
      location: "Indonesia",
      metrics: {
        precision: "Zero-drift double-entry balance validation",
        compliance: "Standard Indonesian Tax & SAK EMKM rules",
      },
      links: {
        live: "https://umkm-accounting-demo.vercel.app",
        repository: "https://github.com/RizalSwikey/umkm-accounting",
      },
    },
  ],
};
