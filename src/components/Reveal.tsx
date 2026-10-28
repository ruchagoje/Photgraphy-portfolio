"use client";

import { motion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  show: (i: number) => ({ opacity: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 } }),
};

/** Fade-up on scroll. Use `index` to stagger siblings; `fade` skips movement so CSS transforms (e.g. rotation) survive. */
export function Reveal({
  children,
  index = 0,
  className,
  as = "div",
  fade = false,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
  as?: "div" | "li" | "article";
  fade?: boolean;
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      variants={fade ? fadeOnly : variants}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </M>
  );
}

/** Curtain-style image reveal: an ivory panel slides away while the image settles from a slight zoom. */
export function ImageReveal({
  children,
  className,
  delay = 0,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  dark?: boolean;
}) {
  return (
    <motion.div
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.div
        style={{ width: "100%", height: "100%" }}
        variants={{ hidden: { scale: 1.12 }, show: { scale: 1, transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1], delay } } }}
      >
        {children}
      </motion.div>
      <motion.span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: dark ? "#171514" : "#f4eee4",
          transformOrigin: "top",
          zIndex: 2,
        }}
        variants={{ hidden: { scaleY: 1 }, show: { scaleY: 0, transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay } } }}
      />
    </motion.div>
  );
}
