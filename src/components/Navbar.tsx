"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 glass shadow-lg shadow-black/5 dark:shadow-black/20" : "py-5 bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a href="#" className="flex items-center gap-2 group" whileHover={{ scale: 1.03 }}>
            <div className="w-8 h-8 rounded-lg bg-[#3F72AF] dark:bg-[#3F8EFC] flex items-center justify-center shadow-md">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-lg font-medium text-[#112D4E] dark:text-[#E5E7EB]">
              Solt<span className="text-[#3F72AF] dark:text-[#3F8EFC]">.</span>
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="relative px-4 py-2 text-sm font-medium text-[#112D4E]/70 dark:text-[#9CA3AF] hover:text-[#3F72AF] dark:hover:text-[#3F8EFC] transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#3F72AF] dark:bg-[#3F8EFC] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-xl bg-[#DBE2EF]/60 dark:bg-[#1F2937] text-[#112D4E] dark:text-[#E5E7EB] hover:bg-[#3F72AF]/10 dark:hover:bg-[#3F8EFC]/10 transition-all"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4 text-[#3F8EFC]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4 text-[#3F72AF]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            {/* CTA */}
            <motion.button
              onClick={() => handleNavClick("#contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:flex px-4 py-2 text-sm font-semibold rounded-xl bg-[#3F72AF] dark:bg-[#3F8EFC] text-white hover:bg-[#2C5A91] dark:hover:bg-[#2D7AE4] transition-all shadow-md shadow-[#3F72AF]/20 dark:shadow-[#3F8EFC]/20"
            >
              Hire Me
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl bg-[#DBE2EF]/60 dark:bg-[#1F2937] text-[#112D4E] dark:text-[#E5E7EB]"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl glass shadow-2xl shadow-black/10 dark:shadow-black/40 p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 text-left text-sm font-medium text-[#112D4E] dark:text-[#E5E7EB] hover:text-[#3F72AF] dark:hover:text-[#3F8EFC] hover:bg-[#3F72AF]/5 dark:hover:bg-[#3F8EFC]/10 rounded-xl transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 px-4 py-3 text-sm font-semibold rounded-xl bg-[#3F72AF] dark:bg-[#3F8EFC] text-white"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
