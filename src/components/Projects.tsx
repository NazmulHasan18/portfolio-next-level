"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, Eye, X, Globe, Server } from "lucide-react";

const categories = ["All", "Full Stack", "Frontend"];

const projects = [
  {
    id: 1,
    title: "Translingua Institute",
    image: "https://i.ibb.co/HpFTRjf/Translingua.jpg",
    description:
      "A language learning website where students can enroll in summer camp classes remotely and learn languages online.",
    category: "Full Stack",
    tags: ["React", "Node.js", "Stripe", "JWT", "MongoDB"],
    color: "from-[#3F72AF]/20 to-[#DBE2EF]",
    darkColor: "dark:from-[#3F8EFC]/10 dark:to-[#1F2937]",
    accent: "#3F72AF",
    year: "2024",
    liveUrl: "https://translingua-institute.web.app/",
    clientUrl: "https://github.com/NazmulHasan18/Translingua-client",
    serverUrl: "https://github.com/NazmulHasan18/Translingua-server",
    features: [
      "Stripe JS payment integration to collect enrollment fees, with transaction IDs stored server-side.",
      "JSON Web Token (JWT) verification to authenticate valid users across protected routes.",
      "Three-role system (Admin, Instructor, Student) with distinct dashboards, validations, and route guards.",
    ],
  },
  {
    id: 2,
    title: "Taste Haven",
    image: "https://i.ibb.co/ngjhQHB/Taste-haven.jpg",
    description:
      "A Bangladeshi cuisine restaurant website showcasing recipes from master chefs with a rich, immersive UI.",
    category: "Full Stack",
    tags: ["React", "Firebase", "Node.js", "MongoDB"],
    color: "from-emerald-500/20 to-[#DBE2EF]",
    darkColor: "dark:from-emerald-500/10 dark:to-[#1F2937]",
    accent: "#10B981",
    year: "2024",
    liveUrl: "https://taste-haven-auth.web.app/",
    clientUrl: "https://github.com/NazmulHasan18/taste-haven-client",
    serverUrl: "https://github.com/NazmulHasan18/taste-haven-server",
    features: [
      "Fully responsive home page for smooth mobile and desktop viewing with great user experience.",
      "Beautiful carousel banner with enticing copy designed to attract and retain visitors.",
      "Firebase authentication for secure account creation and personalized login access.",
    ],
  },
  {
    id: 3,
    title: "Tiny Driver Toy",
    image: "https://i.ibb.co/tDQhBk8/Tiny-Driver-Toy.jpg",
    description:
      "A toy car store where users can browse, review, and purchase toys. Admins can manage inventory when logged in.",
    category: "Full Stack",
    tags: ["React", "Firebase", "Node.js", "MongoDB"],
    color: "from-amber-500/20 to-[#DBE2EF]",
    darkColor: "dark:from-amber-500/10 dark:to-[#1F2937]",
    accent: "#F59E0B",
    year: "2023",
    liveUrl: "https://tiny-driver-toy.web.app/",
    clientUrl: "https://github.com/NazmulHasan18/tiny-driver-toy-client",
    serverUrl: "https://github.com/NazmulHasan18/Tiny-driver-toy-server",
    features: [
      "Responsive layout optimized for mobile and desktop with detailed information sections.",
      "Interactive toy browsing experience with a playful and engaging digital interface.",
      "Firebase authentication ensures secure account creation and browser-level user security.",
    ],
  },
  {
    id: 4,
    title: "Developers Job",
    image: "https://i.ibb.co/2N56CQ7/Developers-Job.jpg",
    description:
      "A job hunting demo platform where developers can explore listings, apply to featured companies, and track applications.",
    category: "Frontend",
    tags: ["React", "Local Storage", "Firebase"],
    color: "from-purple-500/20 to-[#DBE2EF]",
    darkColor: "dark:from-purple-500/10 dark:to-[#1F2937]",
    accent: "#8B5CF6",
    year: "2023",
    liveUrl: "https://stellar-kelpie-f5bd93.netlify.app/",
    clientUrl: "https://github.com/NazmulHasan18/Devolopers-job",
    serverUrl: null,
    features: [
      "Fully responsive home page with a clean layout and rich company information.",
      "Developers can apply to featured companies and view detailed job and application info.",
      "Local storage used to persist applied jobs across sessions on the user's device.",
    ],
  },
  {
    id: 5,
    title: "MediBridge – Patient Platform",
    image: "/projects/medibridge-patient.png", // replace
    description:
      "A modern hospital management platform where patients can explore services, book appointments, and make secure payments. Built with performance, scalability, and seamless user experience in mind.",
    category: "Full Stack",
    tags: [
      "Next.js",
      "Redux",
      "TanStack Query",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Redis",
      "RabbitMQ",
    ],
    color: "from-blue-500/20 to-[#DBE2EF]",
    darkColor: "dark:from-blue-500/10 dark:to-[#1F2937]",
    accent: "#3F72AF",
    year: "2025",
    liveUrl: "https://your-live-link.com",
    clientUrl: "https://github.com/your-client-repo",
    serverUrl: "https://github.com/your-server-repo",
    features: [
      "Dynamic hospital landing page with service listings, doctor profiles, and appointment booking system.",
      "Secure authentication and authorization with seamless user experience.",
      "Integrated Stripe payment gateway for safe and reliable online payments.",
      "Optimized data fetching and caching using TanStack Query for high performance.",
      "Redis caching for faster response times and improved scalability.",
      "RabbitMQ-based queue system for handling background jobs like notifications and reports.",
    ],
  },
  {
    id: 6,
    title: "MediBridge – Admin Dashboard",
    image: "/projects/medibridge-admin.png", // replace
    description:
      "A powerful admin dashboard for managing hospital operations including appointments, doctors, blogs, and analytics with real-time insights and scalable backend architecture.",
    category: "Full Stack",
    tags: ["Next.js", "Redux", "Node.js", "Express", "MongoDB", "Redis", "RabbitMQ"],
    color: "from-purple-500/20 to-[#DBE2EF]",
    darkColor: "dark:from-purple-500/10 dark:to-[#1F2937]",
    accent: "#8B5CF6",
    year: "2025",
    liveUrl: "https://your-admin-link.com",
    clientUrl: "https://github.com/your-admin-client",
    serverUrl: "https://github.com/your-server-repo",
    features: [
      "Comprehensive dashboard to manage appointments, doctors, patients, and blog content.",
      "Real-time data updates and analytics for better decision making.",
      "Role-based access control for secure admin operations.",
      "Queue-based background processing using RabbitMQ for heavy tasks.",
      "Efficient caching layer with Redis to handle high traffic.",
      "Scalable backend architecture using Node.js and Express.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type Project = (typeof projects)[0];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-999 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#112D4E]/60 dark:bg-black/70 backdrop-blur-md" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: 16, scale: 0.97, filter: "blur(4px)" }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg z-10"
      >
        {/* Glass card */}
        <div className="relative max-h-[90vh] rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl shadow-black/40 bg-white/80 dark:bg-[#1F2937]/80 backdrop-blur-2xl flex flex-col">
          {/* Top accent gradient bar */}
          <div
            className="h-1 w-full"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
          />

          {/* Inner top highlight */}
          <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/30 to-transparent dark:from-white/5 pointer-events-none" />

          {/* Screenshot */}
          <div className="relative h-52 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
            {/* Gradient fade into card body */}
            <div className="absolute inset-0 bg-linear-to-t from-white/90 dark:from-[#1F2937]/90 via-transparent to-transparent" />

            {/* Floating year badge on image */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm">
              <span className="font-mono text-xs font-medium text-white">{project.year}</span>
            </div>

            {/* Live site quick-link on image */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-white backdrop-blur-sm transition-all hover:opacity-80"
              style={{ background: `${project.accent}cc` }}
            >
              <Globe className="w-3 h-3" />
              Live
            </a>
          </div>

          {/* Header */}
          <div className="relative px-6 pt-4 pb-3 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full" style={{ background: project.accent }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: project.accent }}
                >
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl font-display font-semibold text-[#112D4E] dark:text-[#E5E7EB] leading-tight">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="shrink-0 mt-1 p-2 rounded-xl bg-[#DBE2EF]/60 dark:bg-[#374151]/60 hover:bg-[#DBE2EF] dark:hover:bg-[#374151] text-[#112D4E]/60 dark:text-[#9CA3AF] hover:text-[#112D4E] dark:hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-linear-to-r from-transparent via-[#DBE2EF] dark:via-[#374151] to-transparent" />

          {/* Body */}
          <div className="px-6 py-5 space-y-5 flex-1 overflow-y-auto">
            <p className="text-sm text-[#112D4E]/70 dark:text-[#9CA3AF] leading-relaxed">
              {project.description}
            </p>

            {/* Features */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#112D4E]/40 dark:text-[#9CA3AF]/50 mb-3">
                Key Features
              </p>
              <ul className="space-y-2.5">
                {project.features.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-3 text-sm text-[#112D4E]/80 dark:text-[#E5E7EB]/80 leading-relaxed"
                  >
                    <span
                      className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: project.accent }}
                    />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-[#DBE2EF]/60 dark:bg-[#374151]/50 text-xs font-medium text-[#112D4E]/70 dark:text-[#9CA3AF]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-linear-to-r from-transparent via-[#DBE2EF] dark:via-[#374151] to-transparent" />

          {/* Footer actions */}
          <div className="px-6 py-4 flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: project.accent, boxShadow: `0 4px 20px ${project.accent}40` }}
            >
              <Globe className="w-3.5 h-3.5" />
              Live Site
            </a>
            <a
              href={project.clientUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-[#DBE2EF] dark:bg-[#374151] text-[#112D4E] dark:text-[#E5E7EB] hover:bg-[#DBE2EF]/80 dark:hover:bg-[#374151]/80 transition-all"
            >
              <GitBranch className="w-3.5 h-3.5" />
              Client Repo
            </a>
            {project.serverUrl && (
              <a
                href={project.serverUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-[#DBE2EF] dark:bg-[#374151] text-[#112D4E] dark:text-[#E5E7EB] hover:bg-[#DBE2EF]/80 dark:hover:bg-[#374151]/80 transition-all"
              >
                <Server className="w-3.5 h-3.5" />
                Server Repo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onView }: { project: Project; index: number; onView: () => void }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative h-full rounded-2xl overflow-hidden border border-[#DBE2EF] dark:border-[#374151]/50 bg-white/60 dark:bg-[#1F2937]/60 hover:border-[#3F72AF]/30 dark:hover:border-[#3F8EFC]/30 transition-all duration-500 cursor-pointer flex flex-col"
      whileHover={{ y: -6, boxShadow: `0 20px 60px ${project.accent}25` }}
    >
      {/* Card image area */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          animate={hovered ? { scale: 1.07 } : { scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover object-top"
        />

        {/* Always-on vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

        {/* Year badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm">
          <span className="font-mono text-xs font-medium text-white">{project.year}</span>
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 backdrop-blur-sm flex items-center justify-center gap-3"
              style={{ background: `${project.accent}99` }}
            >
              <motion.button
                initial={{ scale: 0, filter: "blur(4px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={onView}
                className="p-3 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all"
              >
                <Eye className="w-4 h-4" />
              </motion.button>
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, filter: "blur(4px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.1, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="p-3 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={project.clientUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, filter: "blur(4px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.15, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="p-3 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all"
              >
                <GitBranch className="w-4 h-4" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2 gap-2">
          <h3 className="font-display text-lg text-[#112D4E] dark:text-[#E5E7EB] group-hover:text-[#3F72AF] dark:group-hover:text-[#3F8EFC] transition-colors">
            {project.title}
          </h3>
          <span
            className="shrink-0 px-2 py-0.5 rounded-lg text-xs font-medium"
            style={{ background: `${project.accent}18`, color: project.accent }}
          >
            {project.category}
          </span>
        </div>
        <p className="font-body text-sm text-[#112D4E]/60 dark:text-[#9CA3AF] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-[#DBE2EF]/60 dark:bg-[#374151]/50 text-xs font-medium text-[#112D4E]/70 dark:text-[#9CA3AF]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const counts: Record<string, number> = { All: projects.length };
  categories.slice(1).forEach((cat) => {
    counts[cat] = projects.filter((p) => p.category === cat).length;
  });

  return (
    <section id="projects" className="py-24 bg-[#DBE2EF]/20 dark:bg-[#1F2937]/20">
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
            Portfolio
          </span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="font-display text-4xl sm:text-5xl text-[#112D4E] dark:text-[#E5E7EB]"
          >
            My Creative
            <br />
            <span className="italic text-[#3F72AF] dark:text-[#3F8EFC]">Works.</span>
          </motion.h2>

          {/* Filter tabs */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  active === cat
                    ? "bg-[#3F72AF] dark:bg-[#3F8EFC] text-white shadow-md shadow-[#3F72AF]/20"
                    : "bg-[#DBE2EF] dark:bg-[#1F2937] text-[#112D4E]/70 dark:text-[#9CA3AF] hover:text-[#3F72AF] dark:hover:text-[#3F8EFC]"
                }`}
              >
                {cat}
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono transition-all ${
                    active === cat
                      ? "bg-white/20 text-white"
                      : "bg-[#112D4E]/8 dark:bg-white/8 text-[#112D4E]/50 dark:text-[#9CA3AF]/70"
                  }`}
                >
                  {counts[cat]}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                className="h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={project} index={i} onView={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
