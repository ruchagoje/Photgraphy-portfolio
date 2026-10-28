"use client";

import { MotionConfig } from "framer-motion";

/** Framer Motion respects the visitor's prefers-reduced-motion setting everywhere. */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
