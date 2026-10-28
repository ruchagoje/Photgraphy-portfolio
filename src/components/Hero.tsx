"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Photo from "./Photo";
import { site } from "@/config/site";
import styles from "./Hero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;
const up = (delay: number) => ({
  initial: { opacity: 0, y: 34 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease, delay },
});

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <motion.div
        className={styles.photo}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease }}
      >
        <Photo img={site.hero.image} priority sizes="(max-width: 820px) 100vw, 72vw" />
      </motion.div>
      <div className={styles.shade} aria-hidden="true" />

      <div className={styles.content}>
        <motion.p className={`eyebrow ${styles.eyebrow}`} {...up(0.3)}>
          Rucha Goje · Photography
        </motion.p>
        <h1 className={styles.title}>
          <motion.span {...up(0.45)}>An Engineer by Profession.</motion.span>
          <motion.span {...up(0.6)}>
            A Photographer <em>by Passion.</em>
          </motion.span>
        </h1>
        <motion.p className={styles.lede} {...up(0.8)}>
          I capture moments, emotions, and stories through my lens — creating photographs that feel as beautiful as the
          memories behind them.
        </motion.p>
        <motion.div className={styles.actions} {...up(0.95)}>
          <Link href="/#portfolio" className="btn btn-solid-light">
            Explore My Work <span className="arrow">→</span>
          </Link>
          <Link href="/#contact" className="btn btn-ghost-light">
            Get in Touch
          </Link>
        </motion.div>
      </div>

      <motion.ol className={styles.index} aria-hidden="true" {...up(1.1)}>
        <li className={styles.active}>01</li>
        <li>02</li>
        <li>03</li>
      </motion.ol>

      <motion.figure
        className={styles.inset}
        initial={{ opacity: 0, y: 40, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: 6 }}
        transition={{ duration: 1.4, ease, delay: 1.1 }}
      >
        <div className={styles.insetImg}>
          <Photo img={site.hero.inset} sizes="200px" />
        </div>
      </motion.figure>
      <motion.p className={`script ${styles.note}`} {...up(1.3)}>
        Behind the lens
        <svg viewBox="0 0 60 30" aria-hidden="true">
          <path d="M2 4 C 20 4, 40 10, 54 24 M54 24 l-9 -1 M54 24 l-1 -9" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.p>

      <motion.a href="#portfolio" className={styles.scroll} {...up(1.4)}>
        <span className={styles.mouse} aria-hidden="true">
          <i />
        </span>
        Scroll to explore
      </motion.a>
    </section>
  );
}
