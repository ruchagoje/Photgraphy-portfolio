"use client";

import { motion } from "framer-motion";

/** Cinematic page transition: re-runs on every navigation (template.tsx remounts per route). */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ position: "fixed", inset: 0, background: "#171514", zIndex: 800, transformOrigin: "top", pointerEvents: "none" }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.25 }}>
        {children}
      </motion.div>
    </>
  );
}
