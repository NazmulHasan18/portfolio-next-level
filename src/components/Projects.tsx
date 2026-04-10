"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, Eye } from "lucide-react";

const categories = ["All", "Web Design", "Branding", "Mobile", "Development"];

const projects = [
  {
    id: 1,
    title: "Lumino Dashboard",
    description:
      "A sophisticated SaaS analytics platform with real-time data visualization and custom reporting tools.",
    category: "Web Design",
    tags: ["Figma", "React", "D3.js"],
    color: "from-[#3F72AF]/20 to-[#DBE2EF]",
    darkColor: "dark:from-[#3F8EFC]/10 dark:to-[#1F2937]",
    accent: "#3F72AF",
    year: "2024",
  },
  {
    id: 2,
    title: "Folio Brand Identity",
    description:
      "Complete brand system for a creative agency — logo, typography, color palette, and motion guidelines.",
    category: "Branding",
    tags: ["Illustrator", "Brand System", "Motion"],
    color: "from-purple-500/20 to-[#DBE2EF]",
    darkColor: "dark:from-purple-500/10 dark:to-[#1F2937]",
    accent: "#8B5CF6",
    year: "2024",
  },
  {
    id: 3,
    title: "Nomad Travel App",
    description: "Mobile-first travel companion with AI-powered itinerary planning and offline maps.",
    category: "Mobile",
    tags: ["Figma", "iOS", "Prototype"],
    color: "from-emerald-500/20 to-[#DBE2EF]",
    darkColor: "dark:from-emerald-500/10 dark:to-[#1F2937]",
    accent: "#10B981",
    year: "2023",
  },
  {
    id: 4,
    title: "Craft E-commerce",
    description: "Full-stack e-commerce platform for artisan goods with custom CMS and payment integration.",
    category: "Development",
    tags: ["Next.js", "Stripe", "Sanity"],
    color: "from-amber-500/20 to-[#DBE2EF]",
    darkColor: "dark:from-amber-500/10 dark:to-[#1F2937]",
    accent: "#F59E0B",
    year: "2023",
  },
  {
    id: 5,
    title: "Pulse Health",
    description: "Health tracking dashboard with wearable device integration and personalized insights.",
    category: "Web Design",
    tags: ["Figma", "Design System", "Accessibility"],
    color: "from-rose-500/20 to-[#DBE2EF]",
    darkColor: "dark:from-rose-500/10 dark:to-[#1F2937]",
    accent: "#EC4899",
    year: "2023",
  },
  {
    id: 6,
    title: "Vibe Music Brand",
    description: "Vibrant brand identity for a next-gen music streaming startup targeting Gen Z.",
    category: "Branding",
    tags: ["Brand", "Figma", "Motion"],
    color: "from-cyan-500/20 to-[#DBE2EF]",
    darkColor: "dark:from-cyan-500/10 dark:to-[#1F2937]",
    accent: "#06B6D4",
    year: "2024",
  },
];

const fadeUp = {
  inactive: { opacity: 0, y: 24 },
  active: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
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
      className="group relative rounded-2xl overflow-hidden border border-[#DBE2EF] dark:border-[#374151]/50 bg-white/60 dark:bg-[#1F2937]/60 hover:border-[#3F72AF]/30 dark:hover:border-[#3F8EFC]/30 transition-all duration-500 cursor-pointer"
      whileHover={{ y: -6, boxShadow: `0 20px 60px ${project.accent}25` }}
    >
      {/* Card image area */}
      <div className={`relative h-48 bg-linear-to-br ${project.color} ${project.darkColor} overflow-hidden`}>
        {/* Decorative elements */}
        <motion.div
          animate={hovered ? { scale: 1.1, opacity: 0.8 } : { scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 right-4 w-24 h-24 rounded-2xl border-2 border-white/30 dark:border-white/10"
          style={{ background: `${project.accent}20` }}
        />
        <motion.div
          animate={hovered ? { scale: 1.2, opacity: 0.6 } : { scale: 1, opacity: 0.3 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-4 left-4 w-16 h-16 rounded-full"
          style={{ background: `${project.accent}30` }}
        />

        {/* Year badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/70 dark:bg-[#121212]/70 backdrop-blur-sm">
          <span className="font-mono text-xs font-medium text-[#112D4E] dark:text-[#E5E7EB]">
            {project.year}
          </span>
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#112D4E]/70 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center gap-3"
            >
              <motion.button
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.05 }}
                className="p-3 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all"
              >
                <Eye className="w-4 h-4" />
              </motion.button>
              <motion.button
                initial={{ scale: 0, rotate: 10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1 }}
                className="p-3 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.button>
              <motion.button
                initial={{ scale: 0, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.15 }}
                className="p-3 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all"
              >
                <GitBranch className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-lg text-[#112D4E] dark:text-[#E5E7EB] group-hover:text-[#3F72AF] dark:group-hover:text-[#3F8EFC] transition-colors">
            {project.title}
          </h3>
          <span
            className="px-2 py-0.5 rounded-lg text-xs font-medium"
            style={{ background: `${project.accent}18`, color: project.accent }}
          >
            {project.category}
          </span>
        </div>
        <p className="font-body text-sm text-[#112D4E]/60 dark:text-[#9CA3AF] leading-relaxed mb-4">
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-[#DBE2EF]/20 dark:bg-[#1F2937]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
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
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  active === cat
                    ? "bg-[#3F72AF] dark:bg-[#3F8EFC] text-white shadow-md shadow-[#3F72AF]/20"
                    : "bg-[#DBE2EF] dark:bg-[#1F2937] text-[#112D4E]/70 dark:text-[#9CA3AF] hover:text-[#3F72AF] dark:hover:text-[#3F8EFC]"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
