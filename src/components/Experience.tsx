"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    role: "Senior UI/UX Designer",
    company: "Figma Inc.",
    period: "2022 – Present",
    description:
      "Leading design for enterprise product suite. Established design system adopted by 50+ engineers. Improved user retention by 34% through UX research-driven redesign.",
    tags: ["Design Systems", "Leadership", "User Research"],
  },
  {
    id: 2,
    type: "work",
    role: "Interaction Designer",
    company: "Meta Platforms",
    period: "2020 – 2022",
    description:
      "Designed core interaction patterns for Meta's family of apps. Collaborated with cross-functional teams across 3 time zones to ship features to 2B+ users.",
    tags: ["Mobile Design", "Cross-platform", "Prototyping"],
  },
  {
    id: 3,
    type: "work",
    role: "Brand & UI Designer",
    company: "Freelance",
    period: "2018 – 2020",
    description:
      "Delivered brand identities and web designs for 40+ clients across Europe and North America. Built long-term relationships with 15 retained clients.",
    tags: ["Branding", "Web Design", "Client Management"],
  },
  {
    id: 4,
    type: "education",
    role: "Bachelor of Visual Arts",
    company: "Vilnius Academy of Arts",
    period: "2014 – 2018",
    description:
      "Focused on graphic design, typography, and digital media. Graduated with distinction. Winner of the national student design competition.",
    tags: ["Typography", "Graphic Design", "Fine Arts"],
  },
];

const awards = [
  { name: "Awwwards SOTD", year: "2024", icon: "🏆" },
  { name: "CSS Design Award", year: "2023", icon: "🥇" },
  { name: "Dribbble Top Shot", year: "2023", icon: "🎯" },
  { name: "Behance Feature", year: "2022", icon: "⭐" },
];

const fadeUp = {
  inactive: { opacity: 0, y: 24 },
  active: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function TimelineItem({ item, index }: { item: (typeof experiences)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const Icon = item.type === "education" ? GraduationCap : Briefcase;

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="relative pl-12"
    >
      {/* Line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-3.75 top-8 bottom-0 w-0.5 bg-linear-to-b from-[#3F72AF]/40 dark:from-[#3F8EFC]/30 to-transparent" />
      )}

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.15 }}
        className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#3F72AF] dark:bg-[#3F8EFC] flex items-center justify-center shadow-md shadow-[#3F72AF]/30 dark:shadow-[#3F8EFC]/20 z-10"
      >
        <Icon className="w-3.5 h-3.5 text-white" />
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ x: 4 }}
        className="mb-8 p-5 rounded-2xl bg-white/60 dark:bg-[#1F2937]/60 border border-[#DBE2EF] dark:border-[#374151]/50 hover:border-[#3F72AF]/30 dark:hover:border-[#3F8EFC]/30 transition-all shadow-sm hover:shadow-md hover:shadow-[#3F72AF]/5 dark:hover:shadow-[#3F8EFC]/5"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
          <div>
            <h3 className="font-display text-lg text-[#112D4E] dark:text-[#E5E7EB]">{item.role}</h3>
            <p className="font-body text-sm text-[#3F72AF] dark:text-[#3F8EFC] font-medium">{item.company}</p>
          </div>
          <span className="font-mono text-xs text-[#112D4E]/50 dark:text-[#9CA3AF] bg-[#DBE2EF]/60 dark:bg-[#374151]/50 px-2.5 py-1 rounded-lg whitespace-nowrap">
            {item.period}
          </span>
        </div>
        <p className="font-body text-sm text-[#112D4E]/70 dark:text-[#9CA3AF] leading-relaxed mb-4">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-[#3F72AF]/8 dark:bg-[#3F8EFC]/10 text-xs font-medium text-[#3F72AF] dark:text-[#3F8EFC]"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#3F72AF]/5 dark:bg-[#3F8EFC]/5 blur-3xl" />

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
            Journey
          </span>
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="font-display text-4xl sm:text-5xl text-[#112D4E] dark:text-[#E5E7EB] mb-16"
        >
          Experience &
          <br />
          <span className="italic text-[#3F72AF] dark:text-[#3F8EFC]">Education</span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            {experiences.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Awards sidebar */}
          <div>
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="sticky top-24"
            >
              <div className="flex items-center gap-2 mb-5">
                <Award className="w-4 h-4 text-[#3F72AF] dark:text-[#3F8EFC]" />
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#112D4E]/40 dark:text-[#9CA3AF]/60">
                  Awards & Recognition
                </p>
              </div>
              <div className="space-y-3">
                {awards.map((award, i) => (
                  <motion.div
                    key={award.name}
                    custom={3 + i}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-[#DBE2EF]/50 dark:bg-[#1F2937] border border-white/60 dark:border-[#374151]/50 hover:border-[#3F72AF]/30 dark:hover:border-[#3F8EFC]/30 transition-all"
                  >
                    <span className="text-2xl">{award.icon}</span>
                    <div>
                      <p className="font-body text-sm font-semibold text-[#112D4E] dark:text-[#E5E7EB]">
                        {award.name}
                      </p>
                      <p className="font-mono text-xs text-[#112D4E]/50 dark:text-[#9CA3AF]">{award.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                custom={8}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="mt-6 p-5 rounded-2xl bg-linear-to-br from-[#3F72AF] to-[#2C5A91] dark:from-[#3F8EFC] dark:to-[#2D7AE4] text-white"
              >
                <p className="font-display text-xl mb-2">Ready to work together?</p>
                <p className="font-body text-sm text-white/70 mb-4">Let's create something extraordinary.</p>
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-sm font-semibold transition-all"
                >
                  Get in touch →
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
