"use client";

import { motion } from "framer-motion";
import { GitBranch, LampIcon, X, Drill, Inspect, ArrowUp, Code2, Heart } from "lucide-react";

const socials = [
  { icon: GitBranch, href: "https://github.com", label: "GitHub" },
  { icon: LampIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: X, href: "https://twitter.com", label: "Twitter" },
  { icon: Drill, href: "https://dribbble.com", label: "Dribbble" },
  { icon: Inspect, href: "https://instagram.com", label: "Instagram" },
];

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#112D4E] dark:bg-[#0A0A0A] text-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#3F72AF]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#3F72AF]/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#3F72AF] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-lg">
                Solt<span className="text-[#3F72AF]">.</span>
              </span>
            </div>
            <p className="font-body text-sm text-white/50 max-w-xs leading-relaxed mb-6">
              Transforming ideas into stunning visuals — UI/UX and brand design that captivates, engages, and
              delivers results.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#3F72AF]/30 flex items-center justify-center text-white/50 hover:text-white transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
              Navigation
            </p>
            <div className="space-y-2">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="block font-body text-sm text-white/50 hover:text-white hover:translate-x-1 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact quick */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
              Contact
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hello@solt.design"
                className="block font-body text-sm text-white/50 hover:text-white transition-all"
              >
                hello@solt.design
              </a>
              <p className="font-body text-sm text-white/50">Vilnius, Lithuania</p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30 flex items-center gap-1">
            © {new Date().getFullYear()} Solt. Made with{" "}
            <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in Vilnius
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-[#3F72AF]/30 text-white/50 hover:text-white text-xs font-medium transition-all"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
