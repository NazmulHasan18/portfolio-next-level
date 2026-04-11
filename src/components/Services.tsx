"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Globe, Database, Zap, Network } from "lucide-react";
import { useState, useRef } from "react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building scalable end-to-end web applications using Next.js, React, Node.js, and MongoDB.",
  },
  {
    icon: Globe,
    title: "Frontend Engineering",
    description:
      "Crafting responsive, high-performance, and visually engaging user interfaces with modern UI practices.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Designing robust server-side logic, authentication systems, and scalable architecture using Node.js and Express.",
  },
  {
    icon: Network,
    title: "REST API Development",
    description:
      "Creating secure, well-structured, and scalable RESTful APIs with proper validation, authentication, and documentation.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Designing efficient and scalable database schemas with MongoDB and optimized query performance.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Enhancing application speed, SEO, and performance through best practices like caching and lazy loading.",
  },
];

function ServiceCard({ service, i }: { service: (typeof services)[0]; i: number }) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => setVisible(true), 500);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  };

  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative text-center group cursor-default"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-2xl bg-[#3F72AF]/20 border border-[#3F72AF]/30 flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-[#3F72AF]/40 group-hover:shadow-lg group-hover:shadow-[#3F72AF]/20">
        <service.icon className="w-5 h-5 text-[#3F72AF]" />
      </div>

      {/* Title */}
      <p className="font-body text-xs font-semibold text-white/70 group-hover:text-white transition-colors leading-tight">
        {service.title}
      </p>

      {/* Premium Tooltip */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 4, scale: 0.98, filter: "blur(2px)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-52 z-50"
          >
            {/* Glass card */}
            <div
              className="
        relative px-3.5 py-2.5 rounded-xl shadow-2xl
        bg-light-surface/90 border border-light-primary/20 shadow-light-text/10
        dark:bg-dark-surface/90 dark:border-white/10 dark:shadow-black/40
        backdrop-blur-xl
      "
            >
              {/* Inner highlight */}
              <div
                className="
          absolute inset-0 rounded-xl pointer-events-none
          bg-linear-to-b from-white/40 to-transparent
          dark:from-white/5 dark:to-transparent
        "
              />

              {/* Top accent line */}
              <div
                className="
          absolute top-0 left-4 right-4 h-px rounded-full
          bg-linear-to-r from-transparent via-light-primary/50 to-transparent
          dark:via-dark-primary/40
        "
              />

              <p
                className="
          relative text-[11px] leading-relaxed font-light tracking-wide
          text-light-text/80
          dark:text-dark-text/80
        "
              >
                {service.description}
              </p>
            </div>

            {/* Arrow */}
            <div
              className="
        absolute left-1/2 -translate-x-1/2 -bottom-1.25
        w-2.5 h-2.5 rotate-45 backdrop-blur-xl
        bg-light-surface/90 border-r border-b border-light-primary/20
        dark:bg-dark-surface/90 dark:border-white/10
      "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-16 bg-[#112D4E] dark:bg-[#0D1B2E] relative overflow-visible">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(63,114,175,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(63,114,175,0.08)_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
