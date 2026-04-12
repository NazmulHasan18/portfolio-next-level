"use client";

import { motion } from "framer-motion";

export default function Loading() {
  const dots = [0, 1, 2, 3, 4];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "var(--color-light-bg)" }}
    >
      {/* Dark mode support */}
      <style>{`
        @media (prefers-color-scheme: dark) {
          .loading-root { background: var(--color-dark-bg) !important; }
          .loading-title { color: var(--color-dark-text) !important; }
          .loading-sub { color: var(--color-dark-secondary) !important; }
          .loading-bar-track { background: var(--color-dark-surface) !important; }
          .loading-bar-fill { background: var(--color-dark-primary) !important; }
          .loading-dot { background: var(--color-dark-primary) !important; }
          .loading-ring { border-color: var(--color-dark-primary) !important; }
          .loading-ring-faint { border-color: var(--color-dark-surface) !important; }
        }
      `}</style>

      <div
        className="loading-root fixed inset-0 flex flex-col items-center justify-center"
        style={{ background: "var(--color-light-bg)" }}
      >
        {/* Ambient background glow */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(63,114,175,0.12) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Outer spinning ring */}
        <div className="relative flex items-center justify-center" style={{ width: 120, height: 120 }}>
          <motion.div
            className="loading-ring-faint absolute inset-0 rounded-full"
            style={{
              border: "1.5px solid var(--color-light-surface)",
            }}
          />
          <motion.div
            className="loading-ring absolute inset-0 rounded-full"
            style={{
              border: "2px solid transparent",
              borderTopColor: "var(--color-light-primary)",
              borderRightColor: "var(--color-light-primary)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner counter-spin ring */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 80,
              height: 80,
              border: "1.5px solid transparent",
              borderBottomColor: "var(--color-light-primary)",
              opacity: 0.5,
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Center monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "backOut" }}
            className="relative z-10 flex items-center justify-center rounded-full"
            style={{
              width: 48,
              height: 48,
              background: "var(--color-light-primary)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              N
            </span>
          </motion.div>
        </div>

        {/* Title */}
        <motion.h1
          className="loading-title mt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28,
            fontWeight: 400,
            color: "var(--color-light-text)",
            letterSpacing: "-0.03em",
          }}
        >
          Nazmul Hasan
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="loading-sub mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "var(--color-light-primary)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </motion.p>

        {/* Dot loader */}
        <motion.div
          className="flex gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {dots.map((i) => (
            <motion.span
              key={i}
              className="loading-dot rounded-full"
              style={{
                width: i === 2 ? 8 : 5,
                height: i === 2 ? 8 : 5,
                background: "var(--color-light-primary)",
                display: "block",
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                y: [0, -6, 0],
                scale: [1, i === 2 ? 1.4 : 1.2, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.12,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="loading-bar-track mt-6 overflow-hidden rounded-full"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 160 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            height: 3,
            background: "var(--color-light-surface)",
          }}
        >
          <motion.div
            className="loading-bar-fill h-full rounded-full"
            style={{ background: "var(--color-light-primary)" }}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.2,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
