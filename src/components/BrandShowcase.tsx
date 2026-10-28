import Link from "next/link";
import BrandReel from "./BrandReel";
import { Reveal } from "./Reveal";
import { brandVideos } from "@/config/brandEdits";
import styles from "./BrandShowcase.module.css";

export default function BrandShowcase() {
  return (
    <section className={styles.section} aria-labelledby="brand-title">
      <div className={styles.head}>
        <Reveal>
          <p className="eyebrow">Brand reels &amp; video editing</p>
          <h2 id="brand-title" className={styles.title}>
            Stories That Move, <em>Frame</em> by Frame.
          </h2>
        </Reveal>
        <Reveal index={1} className={styles.note}>
          <p>
            Reels I&apos;ve edited for clothing brands and restaurants — made to show your brand the way it
            deserves to be seen.
          </p>
          <Link href="/#contact" className="link-arrow">
            Get a reel for your brand <span>→</span>
          </Link>
        </Reveal>
      </div>

      <ul className={styles.reels}>
        {brandVideos.map((v, i) => (
          <Reveal as="li" index={i} key={v.src}>
            <BrandReel video={v} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
