import Link from "next/link";
import Photo from "./Photo";
import { Reveal, ImageReveal } from "./Reveal";
import { categories } from "@/config/portfolio";
import styles from "./PortfolioGrid.module.css";

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className={styles.section} aria-labelledby="portfolio-title">
      <div className={styles.head}>
        <Reveal>
          <p className="eyebrow">Portfolio</p>
          <h2 id="portfolio-title" className={styles.title}>
            Stories Through <em>My Lens</em>
          </h2>
        </Reveal>
        <Reveal index={1} className={styles.sub}>
          <p>Every frame holds a feeling. Every story deserves to be remembered.</p>
          <Link href="/portfolio" className="link-arrow">
            [ View all <span>→</span> ]
          </Link>
        </Reveal>
      </div>

      <ul className={styles.row}>
        {categories.map((c, i) => (
          <Reveal as="li" index={i} key={c.slug} className={i % 2 ? styles.offset : undefined}>
            <Link href={`/portfolio/${c.slug}`} className={styles.link}>
              <ImageReveal className={styles.media} delay={i * 0.1}>
                <div className={styles.zoom}>
                  <Photo img={c.cover} sizes="(max-width: 600px) 100vw, (max-width: 1080px) 50vw, 25vw" />
                </div>
              </ImageReveal>
              <div className={styles.caption}>
                <small>0{i + 1}</small>
                <h3>{c.title}</h3>
                <p>{c.tagline}</p>
                <span className="link-arrow">
                  Explore <span>→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
