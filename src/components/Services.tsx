"use client";

import { motion } from "framer-motion";
import { Palette, Code2, Monitor, Zap, Search, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "User-Centered Design",
    description:
      "Placing the user at the heart of every design decision, creating intuitive and delightful interfaces.",
  },
  {
    icon: Layers,
    title: "Brand Identity & Strategy",
    description:
      "Building cohesive visual languages that communicate your values and differentiate your brand.",
  },
  {
    icon: Monitor,
    title: "Responsive & Modern UI",
    description: "Pixel-perfect interfaces that work flawlessly across all devices and screen sizes.",
  },
  {
    icon: Zap,
    title: "Seamless Prototyping",
    description:
      "Interactive prototypes that bring your product to life before a single line of code is written.",
  },
  {
    icon: Code2,
    title: "Design Systems",
    description: "Scalable component libraries and design tokens that accelerate your team's velocity.",
  },
  {
    icon: Search,
    title: "UX Research",
    description: "Data-driven insights through user interviews, usability testing, and analytics review.",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-[#112D4E] dark:bg-[#0D1B2E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(63,114,175,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(63,114,175,0.08)_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="text-center group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/20 border border-[#3F72AF]/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#3F72AF]/40 transition-all">
                <service.icon className="w-4 h-4 text-[#3F72AF]" />
              </div>
              <p className="font-body text-xs font-semibold text-white/70 group-hover:text-white transition-colors leading-tight">
                {service.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
