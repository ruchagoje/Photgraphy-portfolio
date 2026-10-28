"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/config/site";
import styles from "./Nav.module.css";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overDark = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`${styles.nav} ${overDark ? styles.dark : styles.light} ${scrolled ? styles.scrolled : ""} ${open ? styles.isOpen : ""}`}>
      <Link href="/" className={`script ${styles.logo}`} aria-label={`${site.fullName} — home`}>
        {site.name}
      </Link>

      <nav aria-label="Primary" className={styles.links}>
        {site.nav.map((n) => (
          <Link key={n.href} href={n.href}>
            {n.label}
          </Link>
        ))}
      </nav>

      {site.showAvailability && (
        <p className={styles.badge}>
          <i aria-hidden="true" />
          {site.availability}
        </p>
      )}

      <button
        className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className={styles.menu}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile">
              {site.nav.map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={n.href} onClick={() => setOpen(false)}>
                    <small>0{i + 1}</small>
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            {site.showAvailability && (
              <p className={styles.menuBadge}>
                <i aria-hidden="true" />
                {site.availability}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
