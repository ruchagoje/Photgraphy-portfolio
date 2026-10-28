"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Photo from "./Photo";
import { Reveal } from "./Reveal";
import type { Category } from "@/config/portfolio";
import styles from "@/app/portfolio/category.module.css";
import lb from "./GalleryLightbox.module.css";

/** Image grid + keyboard-accessible lightbox (Esc closes, ← → navigate). */
export default function GalleryLightbox({ images }: { images: Category["images"] }) {
  const shown = images.filter((i) => i.src);
  const [open, setOpen] = useState<number | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const go = useCallback(
    (d: number) => setOpen((o) => (o === null ? o : (o + d + shown.length) % shown.length)),
    [shown.length],
  );
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) {
      lastFocus.current?.focus();
      return;
    }
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go, close]);

  if (!shown.length) {
    return <p className={styles.empty}>New stories are being added to this collection soon.</p>;
  }

  const cur = open !== null ? shown[open] : null;

  return (
    <>
      <ul className={styles.grid}>
        {shown.map((img, i) => (
          <Reveal as="li" index={i % 4} key={img.src} className={styles.cell}>
            <figure style={{ margin: 0 }}>
              <button
                type="button"
                onClick={(e) => {
                  lastFocus.current = e.currentTarget;
                  setOpen(i);
                }}
                aria-label={`Open photo ${i + 1} of ${shown.length}: ${img.alt}`}
              >
                <div className={styles.thumb} style={{ position: "relative", overflow: "hidden" }}>
                  <div className={styles.zoom}>
                    <Photo img={img} sizes="(max-width: 820px) 50vw, (max-width: 1080px) 33vw, 25vw" />
                  </div>
                </div>
              </button>
              {img.caption && <figcaption>{img.caption}</figcaption>}
            </figure>
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {cur && (
          <motion.div
            className={lb.overlay}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <button ref={closeBtn} className={lb.close} onClick={close} aria-label="Close viewer">
              Close ✕
            </button>
            <motion.div
              key={cur.src}
              className={lb.stage}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src={cur.src!} alt={cur.alt} fill sizes="90vw" className={lb.img} />
            </motion.div>
            {shown.length > 1 && (
              <>
                <button className={`${lb.nav} ${lb.prev}`} onClick={() => go(-1)} aria-label="Previous photo">
                  ←
                </button>
                <button className={`${lb.nav} ${lb.next}`} onClick={() => go(1)} aria-label="Next photo">
                  →
                </button>
              </>
            )}
            <p className={lb.counter}>
              {String(open! + 1).padStart(2, "0")} / {String(shown.length).padStart(2, "0")}
              {cur.caption ? ` — ${cur.caption}` : ""}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
