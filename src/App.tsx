/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Trophy, 
  Flag, 
  ChevronRight,
  Download,
  Calendar,
  MapPin,
  Car,
  Dribbble // Using Dribbble as a soccer-adjacent icon since there is no specific soccer ball in lucide-react standard set easily recognizable, or I'll use Activity
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

// --- Types ---

interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
}

interface Interest {
  title: string;
  description: string;
  icon: any;
  color: string;
}

// --- Data ---

const EXPERIENCES: Experience[] = [
  {
    company: "General Motors",
    location: "Warren, MI",
    role: "TRACK Service Engineering Process & Systems Analyst",
    period: "Jul 2025 – Present",
    description: [
      "Architected and developed a Python-based full-stack internal web application used daily by a 7-person analyst team, enabling real-time multi-user data entry, centralized task tracking, and streamlined workflows.",
      "Designed and implemented a MySQL cloud-based database to replace a legacy Excel system with 20,000+ records, improved scalability, reliability, and data accessibility.",
      "Analyzed and refactored system logic to eliminate inefficiencies, reduce processing errors, and improve overall operational efficiencies.",
      "Streamlined operational workflows by developing custom Python/SQL automation tools, achieving an 80% reduction in execution latency and eliminating manual data entry.",
      "Leveraged Glean AI to build a retrieval-augmented search tool that autonomously extracted specifications from public files to auto-populate complex engineering schematic templates."
    ]
  },
  {
    company: "General Motors",
    location: "Warren, MI",
    role: "Software Engineering Intern",
    period: "May 2024 – August 2024",
    description: [
      "Programmed data-cleanup protocols for vehicle-mounted systems, implementing a Python algorithm that synchronized GeoTile lifecycles with local storage constraints to prevent performance degradation during active driving modes.",
      "Automated algorithmic verification processes by designing and executing detailed test plans, ensuring 100% alignment with enterprise software quality standards and performance metrics.",
      "Facilitated seamless cross-functional integrations of new feature modules into legacy architectures, maintaining 100% system uptime and ensuring compatibility across distributed engineering teams."
    ]
  },
  {
    company: "General Motors",
    location: "Warren, MI",
    role: "Software Engineering Intern",
    period: "May 2023 – Nov 2023",
    description: [
      "Developed and deployed scalable RESTful APIs and web applications, streamlining server-side logic and optimizing database queries to support high-concurrency user traffic.",
      "Spearheaded the development of a standardized C++ back-end testing suite for internal tools, establishing best practices for 200+ engineers and ensuring robust software quality across enterprise-level systems.",
      "Engineered high-performance automotive software modules using C++ and Python, optimizing low-latency data processing and real-time system communication for vehicle control units."
    ]
  }
];

const SKILLS = {
  frontend: ["HTML", "React", "Tailwind", "Next.js", "TypeScript", "JavaScript"],
  backend: ["Python", "Java", "PostgreSQL", "MySQL", "RESTful API", "AWS", "Docker"],
  tools: ["Git", "Django", "Flask", "VS Code", "Jenkins", "C++"]
};

const INTERESTS: Interest[] = [
  {
    title: "Programming",
    description: "Architecting scalable solutions and exploring the depths of systems design and performance engineering.",
    icon: Code2,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Soccer",
    description: "A lifelong passion for the game, valuing teamwork, strategy, and the high-energy competitive spirit on the pitch.",
    icon: Trophy,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Motorsport",
    description: "Fascinated by the intersection of engineering and speed. My work at GM bridges this passion with professional craft.",
    icon: Car,
    color: "from-red-500 to-orange-500"
  }
];

// --- Components ---

const Section = ({ 
  children, 
  title, 
  id, 
  className = "" 
}: { 
  children: ReactNode; 
  title?: string; 
  id: string;
  className?: string;
}) => (
  <section id={id} className={`py-20 px-6 max-w-7xl mx-auto scroll-mt-20 ${className}`}>
    {title && (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-2 block">
          /{id}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
        <div className="h-1 w-20 bg-brand-accent mt-4" />
      </motion.div>
    )}
    {children}
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-surface-dark text-slate-400 font-sans selection:bg-brand-accent selection:text-white overflow-x-hidden">
      {/* --- Studio Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* --- MIDNIGHT SIDEBAR --- */}
        <aside className="lg:w-[420px] lg:h-screen lg:fixed lg:left-0 lg:top-0 bg-surface-aside/50 backdrop-blur-2xl flex flex-col p-10 md:p-14 z-20 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-2xl shadow-brand-accent/20"
            >
              <span className="text-black font-serif italic text-2xl font-bold">JD</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif italic text-white mb-3">
                Jaime Diaz
              </h1>
              <p className="text-xs tracking-[0.4em] uppercase text-slate-500 font-bold">
                Software Engineer
              </p>
            </motion.div>
          </div>

          <nav className="flex-1 space-y-12 overflow-y-auto custom-scrollbar pr-4">
            <section className="space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-accent mb-4 block">Navigation</span>
              <ul className="space-y-4 text-sm font-medium">
                {["about", "experience", "interests"].map(item => (
                  <li key={item}>
                    <a href={`#${item}`} className="hover:text-white transition-colors flex items-center gap-4 group">
                      <span className="w-0 group-hover:w-8 h-[1px] bg-brand-accent transition-all duration-500" />
                      <span className="uppercase tracking-widest text-[11px]">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-accent mb-4 block">The Stack</span>
              <div className="flex flex-wrap gap-2">
                {[...SKILLS.frontend, ...SKILLS.backend.slice(0, 3)].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-slate-400">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </nav>

          <div className="mt-12 pt-8 border-t border-white/5">
            <motion.a 
              whileHover={{ x: 5 }}
              href="#"
              className="flex items-center justify-between text-white text-[11px] tracking-widest uppercase font-bold group"
            >
              Get in Touch <ChevronRight className="text-brand-accent" size={16} />
            </motion.a>
          </div>
        </aside>

        {/* --- MAIN STUDIO CONTENT --- */}
        <main className="flex-1 lg:ml-[420px] p-8 md:p-16 lg:p-24">
          {/* --- HERO --- */}
          <section id="about" className="mb-32 lg:mb-48 pt-20 lg:pt-0">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-brand-accent font-serif italic text-xl mb-6 block"
            >
              Refining digital complexity.
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl lg:text-9xl font-serif italic text-white mb-16 leading-[1.05]"
            >
              Building systems with <span className="text-slate-600">intent.</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
              <div className="space-y-8">
                <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-light">
                  Currently an engineer at <span className="text-white hover:text-brand-accent transition-colors duration-500 cursor-pointer">General Motors</span>, I translate intricate architectural requirements into seamless, performant realities.
                </p>
                <div className="flex gap-8 items-center">
                  <div className="text-center">
                    <p className="text-3xl font-serif italic text-white">3.4</p>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 mt-1">GPA</p>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <p className="text-3xl font-serif italic text-white">RIT</p>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 mt-1">Class of '25</p>
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  A perfect equilibrium of backend precision and competitive spirit, inspired by the high-stakes world of automotive engineering.
                </p>
              </div>
            </div>
          </section>

          {/* --- EXPERIENCE --- */}
          <section id="experience" className="mb-48">
            <div className="flex justify-between items-end mb-20">
              <h3 className="text-4xl md:text-5xl font-serif italic text-white">Selected Works</h3>
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-slate-600">01 — 03</span>
            </div>
            
            <div className="space-y-32">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute -left-12 top-0 text-7xl font-serif italic text-white/5 transition-colors group-hover:text-white/10">
                    0{idx + 1}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 relative z-10">
                    <div className="space-y-4">
                      <p className="text-xs font-mono text-brand-accent uppercase tracking-widest">{exp.period}</p>
                      <h4 className="text-3xl font-serif italic text-white">{exp.company}</h4>
                      <p className="text-sm uppercase tracking-widest text-slate-500">{exp.location}</p>
                    </div>
                    <div className="space-y-8">
                      <h5 className="text-xl text-slate-300 font-medium tracking-tight leading-snug">{exp.role}</h5>
                      <ul className="space-y-6">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-base text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* --- INTERESTS --- */}
          <section id="interests" className="mb-48">
             <div className="flex justify-between items-end mb-20">
              <h3 className="text-4xl md:text-5xl font-serif italic text-white">Ethos</h3>
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-slate-600">Curated Interests</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {INTERESTS.map((interest, idx) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="studio-card group h-full flex flex-col justify-between"
                >
                  <div className="space-y-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-accent transition-colors duration-500">
                      <interest.icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-serif italic text-white">{interest.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
                      {interest.description}
                    </p>
                  </div>
                  <div className="mt-12 text-[10px] font-mono text-slate-700 tracking-widest group-hover:text-brand-accent transition-colors">
                    VOL. {idx + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* --- STUDIO FOOTER --- */}
          <footer className="pt-24 border-t border-white/5">
            <div className="flex flex-col lg:flex-row justify-between gap-20">
              <div className="max-w-md space-y-10">
                <h2 className="text-5xl font-serif italic text-white leading-tight">Setting a new <br /> pace in software.</h2>
                <div className="flex gap-10">
                  <a href="https://github.com/jaimediaz387" className="text-slate-600 hover:text-white transition-colors"><Github size={24} /></a>
                  <a href="https://www.linkedin.com/in/jaime-diaz-4a96531b7/" className="text-slate-600 hover:text-white transition-colors"><Linkedin size={24} /></a>
                  <a href="mailto:jaimediaz387@gmail.com" className="text-slate-600 hover:text-white transition-colors"><Mail size={24} /></a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-20">
                <div className="space-y-6">
                  <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-accent">Direct</span>
                  <p className="text-sm font-sans text-white">jaimediaz387@gmail.com</p>
                  <p className="text-sm font-sans text-slate-500">914.325.8603</p>
                </div>
                <div className="space-y-6">
                  <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-accent">Archive</span>
                  <p className="text-sm font-sans text-slate-500 tracking-widest text-[10px] uppercase">© Jaime Diaz 2024</p>
                  <p className="text-sm font-sans text-slate-500 tracking-widest text-[10px] uppercase">All Rights Reserved</p>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

