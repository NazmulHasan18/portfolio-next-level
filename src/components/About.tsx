"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Fan, Globe, Palette, Layers, Cpu, PenTool } from "lucide-react";

const skills = [
  { name: "Figma", icon: Fan, level: 95, color: "#F24E1E" },
  { name: "Web Design", icon: Globe, level: 88, color: "#3F72AF" },
  { name: "Branding", icon: Palette, level: 92, color: "#8B5CF6" },
  { name: "UI Systems", icon: Layers, level: 85, color: "#10B981" },
  { name: "Prototyping", icon: Cpu, level: 80, color: "#F59E0B" },
  { name: "Illustration", icon: PenTool, level: 75, color: "#EC4899" },
];

const tools = ["Figma", "Sketch", "Framer", "Adobe XD", "Photoshop", "Illustrator", "Principle", "InVision"];

const fadeUp = {
  inactive: { opacity: 0, y: 24 },
  active: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

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
          Crafting <span className="italic text-[#3F72AF] dark:text-[#3F8EFC]">experiences</span>
          <br />
          that people love
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
                Visual Designer with 7+ years of experience. I'm all about crafting user-friendly interfaces
                that are both functional and visually compelling.
              </p>
              <p className="font-body text-[#112D4E]/80 dark:text-[#9CA3AF] leading-relaxed">
                Born in Vilnius, graduated from the School of Arts. I love typography, deep-diving into design
                systems, and crafting brands that leave lasting impressions on users around the globe.
              </p>
            </motion.div>

            {/* Latest roles */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#112D4E]/40 dark:text-[#9CA3AF]/60 mb-3">
                Latest Roles
              </p>
              <div className="space-y-2">
                {[
                  { role: "UI Designer", company: "Figma Inc.", icon: "🎨" },
                  { role: "Interaction Designer", company: "Meta Apps", icon: "💡" },
                ].map((item, i) => (
                  <motion.div
                    key={item.role}
                    custom={4 + i}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/60 dark:bg-[#1F2937]/60 border border-[#DBE2EF] dark:border-[#374151]/50 hover:border-[#3F72AF]/30 dark:hover:border-[#3F8EFC]/30 transition-all"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-body text-sm font-semibold text-[#112D4E] dark:text-[#E5E7EB]">
                        {item.role}
                      </p>
                      <p className="font-body text-xs text-[#112D4E]/50 dark:text-[#9CA3AF]">
                        {item.company}
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
