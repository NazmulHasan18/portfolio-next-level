"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Globe,
  Cpu,
  ShieldCheck,
  GitBranch,
  Layers,
  Wrench,
  Cloud,
  Rocket,
} from "lucide-react";

const skills = [
  // 🔵 Frontend Core
  { name: "Next.js", icon: Globe, level: 90, color: "#3F72AF" },
  { name: "React.js", icon: Code2, level: 88, color: "#61DAFB" },
  { name: "TypeScript", icon: Code2, level: 85, color: "#3178C6" },
  { name: "Tailwind CSS", icon: Layers, level: 87, color: "#38BDF8" },

  // 🟢 Backend Core
  { name: "Node.js", icon: Server, level: 85, color: "#22C55E" },
  { name: "Express.js", icon: Server, level: 83, color: "#6B7280" },
  { name: "REST API", icon: Cpu, level: 87, color: "#F59E0B" },

  // 🟣 Database
  { name: "MongoDB", icon: Database, level: 82, color: "#10B981" },

  // 🔐 Auth & Security
  { name: "JWT & Auth", icon: ShieldCheck, level: 80, color: "#EF4444" },

  // 🛠️ Dev Tools (VERY IMPORTANT for 2+ yrs look)
  { name: "Git & GitHub", icon: GitBranch, level: 88, color: "#F97316" },
  { name: "API Integration", icon: Wrench, level: 86, color: "#8B5CF6" },

  // ☁️ Bonus (makes you stand out)
  { name: "Deployment (Vercel)", icon: Cloud, level: 80, color: "#000000" },
];

const tools = [
  // 🟦 Frontend
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux",
  "Zustand",
  "TanStack Query",
  "Firebase",
  "OAuth",

  // 🟩 Backend
  "Node.js",
  "Express.js",
  "REST API",
  "Socket.io",
  "RabbitMQ",

  // 🟪 Database
  "NoSQL",
  "MongoDB",
  "SQL",
  "Prisma",

  // 🟧 Dev Tools
  "Git",
  "GitHub",
  "Postman",
  "Thunder Client",
  "VS Code",

  // 🟨 Debugging
  "Chrome DevTools",
  "React DevTools",

  // 🟥 Deployment
  "EasyPanel",
  "Vercel",
  "Netlify",
  "Docker",
  "AWS",
];

const fadeUp = {
  inactive: { opacity: 0, y: 24 },
  active: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const roles = [
  {
    role: "Full Stack Developer",
    icon: Rocket,
    note: "Promoted from Backend Developer",
  },
  {
    role: "Backend Developer",
    icon: Server,
    note: "Worked on APIs & system architecture",
  },
  {
    role: "Frontend Developer",
    icon: Code2,
    note: "Focused on UI & user experience",
  },
];

function SkillBar({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: `${skill.color}18` }}
          >
            <skill.icon className="w-3.5 h-3.5" style={{ color: skill.color }} />
          </div>
          <span className="font-body text-sm font-medium text-[#112D4E] dark:text-[#E5E7EB]">
            {skill.name}
          </span>
        </div>
        <span className="font-mono text-xs text-[#112D4E]/50 dark:text-[#9CA3AF]">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#DBE2EF] dark:bg-[#374151] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#3F72AF]/5 dark:bg-[#3F8EFC]/5 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-10 bg-[#3F72AF] dark:bg-[#3F8EFC]" />
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#3F72AF] dark:text-[#3F8EFC]">
            About Me
          </span>
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="font-display text-4xl sm:text-5xl text-[#112D4E] dark:text-[#E5E7EB] mb-16"
        >
          Building <span className="italic text-[#3F72AF] dark:text-[#3F8EFC]">scalable apps</span>
          <br />
          for modern web
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="p-6 rounded-2xl bg-[#DBE2EF]/50 dark:bg-[#1F2937] border border-white/60 dark:border-[#374151]/50 mb-6"
            >
              <p className="font-body text-[#112D4E]/80 dark:text-[#9CA3AF] leading-relaxed mb-4">
                Full Stack Developer with 2+ years of experience building scalable web applications using
                modern technologies.
              </p>

              <p className="font-body text-[#112D4E]/80 dark:text-[#9CA3AF] leading-relaxed">
                I specialize in Next.js, React, Node.js, and MongoDB — focusing on clean architecture,
                performance, and seamless user experiences. I enjoy turning complex problems into simple,
                efficient solutions.
              </p>
            </motion.div>

            {/* Latest roles */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#112D4E]/40 dark:text-[#9CA3AF]/60 mb-3">
                Latest Roles
              </p>
              <div className="space-y-2">
                {roles.map((item, i) => (
                  <motion.div
                    key={item.role}
                    custom={4 + i}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/60 dark:bg-[#1F2937]/60 border border-[#DBE2EF] dark:border-[#374151]/50 hover:border-[#3F72AF]/30 dark:hover:border-[#3F8EFC]/30 transition-all"
                  >
                    <item.icon className="w-6 h- text-[#3F72AF] dark:text-[#3F8EFC]" />
                    <div>
                      <p className="font-body text-sm font-semibold text-[#112D4E] dark:text-[#E5E7EB]">
                        {item.role}
                      </p>

                      {/* 🔥 Extra context */}
                      <p className="font-body text-[11px] text-[#3F72AF] dark:text-[#3F8EFC] mt-1">
                        {item.note}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="mt-6"
            >
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#112D4E]/40 dark:text-[#9CA3AF]/60 mb-3">
                Main Apps
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ scale: 1.06, y: -1 }}
                    className="px-3 py-1.5 rounded-lg bg-[#DBE2EF] dark:bg-[#1F2937] text-xs font-medium text-[#112D4E] dark:text-[#E5E7EB] border border-white/60 dark:border-[#374151]/50 cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="space-y-5">
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="font-body text-xs font-semibold uppercase tracking-widest text-[#112D4E]/40 dark:text-[#9CA3AF]/60 mb-6"
            >
              Skill Proficiency
            </motion.p>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
