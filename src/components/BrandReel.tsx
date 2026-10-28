"use client";

import { useEffect, useRef, useState } from "react";
import type { BrandVideo } from "@/config/brandEdits";
import styles from "./BrandShowcase.module.css";

/** Vertical reel: autoplays muted while in view; tap toggles sound. */
export default function BrandReel({ video }: { video: BrandVideo }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? el.play().catch(() => {}) : el.pause()),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (!el.muted) el.play().catch(() => {});
  };

  return (
    <button type="button" className={styles.reel} onClick={toggleSound} aria-label={`${video.title} — ${muted ? "unmute" : "mute"}`}>
      <video
        ref={ref}
        className={styles.video}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <span className={styles.tag}>{video.kind}</span>
      <span className={styles.sound}>{muted ? "Sound off" : "Sound on"}</span>
    </button>
  );
}
