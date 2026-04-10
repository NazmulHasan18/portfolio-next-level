"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "50+", label: "Projects Built" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "10+", label: "Technologies Mastered" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
];

const roles = [
  "Full Stack Developer",
  2000,
  "Next.js Developer",
  2000,
  "React Developer",
  2000,
  "Backend Engineer",
  2000,
];

const container = {
  inactive: {},
  active: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const fadeUp = {
  inactive: { opacity: 0, y: 32 },
  active: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#3F72AF]/20 dark:bg-[#3F8EFC]/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#DBE2EF]/60 dark:bg-[#1F2937]/60 blur-3xl"
        />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(63,114,175,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(63,114,175,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(63,142,252,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(63,142,252,0.04)_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div variants={container} initial="inactive" animate="active">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBE2EF] dark:bg-[#1F2937] text-[#3F72AF] dark:text-[#3F8EFC] text-sm font-medium mb-6 border border-[#3F72AF]/20 dark:border-[#3F8EFC]/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Available for new projects
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3F72AF] dark:bg-[#3F8EFC] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3F72AF] dark:bg-[#3F8EFC]" />
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={fadeUp}
              className="font-body text-sm sm:text-base text-[#112D4E]/60 dark:text-[#9CA3AF] mb-3 tracking-wide"
            >
              Hey, I&apos;m 👋
            </motion.p>

            {/* Name → PRIMARY (H1) */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-4 bg-linear-to-r to-[#3F72AF] from-[#3F8EFC] bg-clip-text text-transparent"
            >
              Nazmul Hasan
            </motion.h1>

            {/* Role → SECONDARY */}
            <motion.div
              variants={fadeUp}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#3F72AF] dark:text-[#3F8EFC] mb-6"
            >
              <span className="inline-block min-w-65 sm:min-w-[320px] lg:min-w-95">
                <TypeAnimation sequence={roles} speed={50} repeat={Infinity} cursor={true} />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="font-body text-base text-[#112D4E]/60 dark:text-[#9CA3AF] max-w-md mb-8 leading-relaxed"
            >
              Transforming ideas into stunning visuals — UI/UX and brand design that captivates, engages, and
              delivers results for global clients.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <motion.button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(63,114,175,0.3)" }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#3F72AF] dark:bg-[#3F8EFC] text-white font-semibold text-sm shadow-lg shadow-[#3F72AF]/25 dark:shadow-[#3F8EFC]/20 hover:bg-[#2C5A91] dark:hover:bg-[#2D7AE4] transition-all"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-[#DBE2EF] dark:border-[#1F2937] text-[#112D4E] dark:text-[#E5E7EB] font-semibold text-sm hover:border-[#3F72AF] dark:hover:border-[#3F8EFC] hover:text-[#3F72AF] dark:hover:text-[#3F8EFC] transition-all"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="text-xs text-[#112D4E]/40 dark:text-[#9CA3AF]/60 font-body uppercase tracking-widest">
                Follow
              </span>
              <div className="h-px w-8 bg-[#112D4E]/20 dark:bg-[#9CA3AF]/30" />
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-xl bg-[#DBE2EF] dark:bg-[#1F2937] flex items-center justify-center text-[#112D4E]/60 dark:text-[#9CA3AF] hover:text-[#3F72AF] dark:hover:text-[#3F8EFC] hover:bg-[#3F72AF]/10 dark:hover:bg-[#3F8EFC]/10 transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Image + stats */}
          <div className="relative flex flex-col items-center lg:items-end gap-6">
            {/* Profile image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0, 3, 0],
                rotate: [0, -1.1, 0, 0.9, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                y: {
                  duration: 13,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                  times: [0, 0.3, 0.55, 0.8, 1],
                },
                rotate: {
                  duration: 13,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                  times: [0, 0.3, 0.55, 0.8, 1],
                },
              }}
              className="relative"
              style={{ willChange: "transform" }}
            >
              {/* Floating ring */}
              <motion.div
                animate={{ rotate: 360, y: [0, -2.5, 0, 1.2, 0] }}
                transition={{
                  rotate: { duration: 28, repeat: Infinity, ease: "linear" },
                  y: { duration: 17, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                }}
                className="absolute -inset-4 rounded-full border border-dashed border-[#3F72AF]/30 dark:border-[#3F8EFC]/20"
              />
              <motion.div
                animate={{ rotate: -360, y: [0, -1.8, 0, 0.9, 0] }}
                transition={{
                  rotate: { duration: 34, repeat: Infinity, ease: "linear" },
                  y: { duration: 19, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                }}
                className="absolute -inset-8 rounded-full border border-[#DBE2EF] dark:border-[#1F2937]/60"
              />
              {/* Avatar */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[#DBE2EF] dark:border-[#1F2937] shadow-2xl shadow-[#3F72AF]/20 dark:shadow-[#3F8EFC]/10">
                <div className="absolute inset-0 bg-linear-to-br from-[#3F72AF]/20 to-[#DBE2EF] dark:from-[#3F8EFC]/10 dark:to-[#1F2937]" />
                {/* Placeholder initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl text-[#3F72AF]/40 dark:text-[#3F8EFC]/30">S</span>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-6 px-3 py-2 rounded-2xl bg-white dark:bg-[#1F2937] shadow-xl shadow-black/10 dark:shadow-black/40 border border-[#DBE2EF] dark:border-[#374151]"
              >
                <p className="font-body text-xs font-semibold text-[#112D4E] dark:text-[#E5E7EB]">
                  Full Stack Developer
                </p>
                <p className="font-body text-[10px] text-[#112D4E]/50 dark:text-[#9CA3AF]">
                  2+ yrs experience
                </p>
              </motion.div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-2 gap-3 w-full max-w-xs"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="p-4 rounded-2xl bg-[#DBE2EF] dark:bg-[#1F2937] border border-white/60 dark:border-[#374151]/50 shadow-sm"
                >
                  <p className="font-display text-2xl text-[#3F72AF] dark:text-[#3F8EFC] font-bold">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-[#112D4E]/60 dark:text-[#9CA3AF] mt-0.5">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 mt-16"
        >
          <p className="font-body text-xs text-[#112D4E]/40 dark:text-[#9CA3AF]/50 uppercase tracking-widest">
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-[#112D4E]/20 dark:border-[#9CA3AF]/30 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#3F72AF] dark:bg-[#3F8EFC]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
