"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
  });

  // Fill height
  const fillHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  // FIX: stays visible after scroll
  const opacity = useTransform(scrollYProgress, [0, 0.03, 1], [0, 1, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 🔵 Top Progress Bar */}
      {/* <motion.div
        className="fixed top-0 left-0 right-0 h-0.75 z-60 origin-left"
        style={{
          scaleX: progress,
          background:
            "linear-gradient(to right, var(--color-light-primary), var(--color-light-primary-hover))",
        }}
      /> */}

      {/* 🔵 Floating Button */}
      <motion.button
        onClick={scrollToTop}
        style={{ opacity }}
        className="fixed bottom-6 right-6 z-60 w-12 h-12 rounded-full overflow-hidden backdrop-blur-md border border-white/10 shadow-lg bg-dark-bg/20 dark:bg-light-bg/20"
      >
        {/* 🌊 Water Fill */}
        <motion.div
          style={{ height: fillHeight }}
          className="absolute bottom-0 left-0 right-0 bg-light-primary dark:bg-dark-primary"
        >
          {/* 🌊 Wave Effect */}
          <motion.div
            className="absolute top-0 left-0 w-[200%] h-6 opacity-70"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 20%, transparent 21%)",
            }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* 🔼 Arrow */}
        <div className="relative flex items-center justify-center w-full h-full">
          <ArrowUp className="w-5 h-5 text-white mix-blend-difference" />
        </div>
      </motion.button>
    </>
  );
}
