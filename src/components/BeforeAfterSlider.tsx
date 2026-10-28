"use client";

import { useCallback, useRef, useState } from "react";
import Photo from "./Photo";
import type { Img } from "@/config/site";
import styles from "./BeforeAfterSlider.module.css";

/** Drag, click or use arrow keys to compare. */
export default function BeforeAfterSlider({ before, after, title }: { before: Img; after: Img; title: string }) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromX = useCallback((clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const onKey = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    e.preventDefault();
  };

  return (
    <div
      ref={box}
      className={styles.box}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        setFromX(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && setFromX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <div className={styles.layer}>
        <Photo img={after} sizes="(max-width: 960px) 100vw, 55vw" />
      </div>
      <div className={styles.layer} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Photo img={before} sizes="(max-width: 960px) 100vw, 55vw" />
      </div>

      <span className={`${styles.tag} ${styles.left}`}>Before</span>
      <span className={`${styles.tag} ${styles.right}`}>After</span>

      <div className={styles.divider} style={{ left: `${pos}%` }}>
        <button
          type="button"
          role="slider"
          className={styles.handle}
          aria-label={`${title}: drag to compare before and after`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% before`}
          onKeyDown={onKey}
        >
          <span aria-hidden="true">‹ ›</span>
        </button>
      </div>
    </div>
  );
}
