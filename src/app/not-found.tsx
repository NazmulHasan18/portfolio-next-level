"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function NotFound() {
  const glitchRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Subtle glitch effect on the 404 number using GSAP-style interval
    const el = glitchRef.current;
    if (!el) return;

    const chars = "!@#$%^&*0123456789";
    let frame = 0;

    const glitch = setInterval(() => {
      frame++;
      if (frame % 60 === 0) {
        const orig = el.textContent;
        let iter = 0;
        const scramble = setInterval(() => {
          el.textContent = el
            .textContent!.split("")
            .map((c, i) => (i < iter ? ("404"[i] ?? c) : chars[Math.floor(Math.random() * chars.length)]))
            .join("");
          iter += 0.4;
          if (iter >= 3) {
            el.textContent = orig;
            clearInterval(scramble);
          }
        }, 40);
      }
    }, 1000 / 60);

    return () => clearInterval(glitch);
  }, []);

  // Only generate random values on the client to avoid hydration mismatch
  const [particles, setParticles] = useState<
    Array<{
      width: number;
      height: number;
      left: number;
      top: number;
      x: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      const arr = Array.from({ length: 18 }, () => ({
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        x: (Math.random() - 0.5) * 40,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
      }));
      setParticles(arr);
    }
  }, []);

  return (
    <div className="not-found-root">
      <style>{`
        .not-found-root {
          min-height: 100vh;
          background: var(--color-light-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          font-family: var(--font-body);
        }
        @media (prefers-color-scheme: dark) {
          .not-found-root { background: var(--color-dark-bg) !important; }
          .nf-404 { color: transparent !important; -webkit-text-stroke: 2px var(--color-dark-primary) !important; }
          .nf-title { color: var(--color-dark-text) !important; }
          .nf-desc { color: var(--color-dark-secondary) !important; }
          .nf-badge { background: var(--color-dark-surface) !important; color: var(--color-dark-primary) !important; }
          .nf-btn-primary { background: var(--color-dark-primary) !important; color: var(--color-dark-bg) !important; }
          .nf-btn-secondary { border-color: var(--color-dark-surface) !important; color: var(--color-dark-secondary) !important; }
          .nf-btn-secondary:hover { border-color: var(--color-dark-primary) !important; color: var(--color-dark-primary) !important; }
          .nf-divider { background: var(--color-dark-surface) !important; }
          .nf-particle { background: var(--color-dark-primary) !important; }
          .nf-grid-line { border-color: rgba(63,142,252,0.06) !important; }
        }
        .nf-btn-secondary { transition: border-color 0.2s, color 0.2s; }
        .nf-btn-secondary:hover { border-color: var(--color-light-primary); color: var(--color-light-primary); }
      `}</style>

      {/* Floating particles (client only, avoids hydration mismatch) */}
      {particles.map(
        (
          p: {
            width: number;
            height: number;
            left: number;
            top: number;
            x: number;
            duration: number;
            delay: number;
          },
          i: number,
        ) => (
          <motion.div
            key={i}
            className="nf-particle absolute rounded-full pointer-events-none"
            style={{
              width: p.width,
              height: p.height,
              background: "var(--color-light-primary)",
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: 0,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.35, 0],
              x: [0, p.x, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ),
      )}

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(63,114,175,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: "hidden" }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="nf-grid-line absolute top-0 bottom-0"
            style={{
              left: `${(i + 1) * 12.5}%`,
              borderLeft: "1px solid rgba(63,114,175,0.05)",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ maxWidth: 560 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="nf-badge mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
          style={{
            background: "var(--color-light-surface)",
            color: "var(--color-light-primary)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "currentColor",
              display: "inline-block",
            }}
          />
          ERROR 404
        </motion.div>

        {/* Giant 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <span
            ref={glitchRef}
            className="nf-404 select-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(96px, 22vw, 180px)",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "2px var(--color-light-primary)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              display: "block",
            }}
          >
            404
          </span>

          {/* Shadow ghost */}
          <span
            aria-hidden
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(96px, 22vw, 180px)",
              fontWeight: 700,
              color: "var(--color-light-primary)",
              opacity: 0.06,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              display: "block",
              position: "absolute",
              top: 8,
              left: 8,
              userSelect: "none",
            }}
          >
            404
          </span>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="nf-divider my-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            width: 60,
            height: 2,
            background: "var(--color-light-primary)",
            borderRadius: 2,
          }}
        />

        {/* Title */}
        <motion.h1
          className="nf-title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 5vw, 32px)",
            fontWeight: 400,
            color: "var(--color-light-text)",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          Lost in the void?
        </motion.h1>

        {/* Description */}
        <motion.p
          className="nf-desc mt-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "var(--color-light-text)",
            opacity: 0.6,
            lineHeight: 1.7,
            maxWidth: 400,
          }}
        >
          The page you're looking for has wandered off into the unknown. Let's get you back to somewhere
          familiar.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-3 mt-8 flex-wrap justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <Link href="/">
            <motion.button
              className="nf-btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "var(--color-light-primary)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "11px 28px",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                letterSpacing: "0.01em",
              }}
            >
              ← Back to Home
            </motion.button>
          </Link>

          <Link href="/#projects">
            <motion.button
              className="nf-btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "transparent",
                color: "var(--color-light-text)",
                opacity: 0.7,
                border: "1px solid var(--color-light-surface)",
                borderRadius: 8,
                padding: "11px 28px",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 400,
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              View Projects
            </motion.button>
          </Link>
        </motion.div>

        {/* Mono footer hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--color-light-primary)",
            opacity: 0.45,
            marginTop: 40,
            letterSpacing: "0.08em",
          }}
        >
          nazmulhasan18.github.io · 404
        </motion.p>
      </div>
    </div>
  );
}
