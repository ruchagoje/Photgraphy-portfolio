import Link from "next/link";
import Photo from "./Photo";
import { Reveal, ImageReveal } from "./Reveal";
import { site } from "@/config/site";
import styles from "./About.module.css";

export default function About() {
  const a = site.about;
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={styles.collage}>
        <Reveal fade className={styles.main}>
          <ImageReveal className={styles.mainImg}>
            <Photo img={a.main} sizes="(max-width: 820px) 80vw, 34vw" />
          </ImageReveal>
        </Reveal>

        <Reveal fade index={1} className={styles.strip}>
          {a.filmStrip.map((f, i) => (
            <div key={i} className={styles.frame}>
              <Photo img={f} sizes="120px" />
            </div>
          ))}
        </Reveal>

        <Reveal fade index={2} className={styles.polaroid}>
          <div className={styles.polaroidImg}>
            <Photo img={a.polaroid} sizes="220px" />
          </div>
        </Reveal>

        <Reveal fade index={3} className={styles.taped}>
          <span className={styles.tape} aria-hidden="true" />
          <p>More than just photos</p>
        </Reveal>

        <Reveal fade index={4} className={styles.landscape}>
          <Photo img={a.landscape} sizes="(max-width: 820px) 60vw, 22vw" />
        </Reveal>
      </div>

      <div className={styles.text}>
        <Reveal>
          <p className="eyebrow">About me</p>
        </Reveal>
        <Reveal index={1}>
          <h2 id="about-title" className={styles.title}>
            Between Logic <em>&amp;</em> Light.
          </h2>
        </Reveal>
        <Reveal index={2}>
          <p className={styles.copy}>
            Engineering taught me to think in systems. Photography taught me to see beyond them. What began as a passion
            became my way of expressing creativity, capturing emotions, and turning fleeting moments into lasting
            memories.
          </p>
        </Reveal>
        <Reveal index={3}>
          <Link href="/#contact" className="btn btn-dark">
            Know more about me <span className="arrow">→</span>
          </Link>
        </Reveal>

        <Reveal index={4} className={styles.sign}>
          <svg viewBox="0 0 80 120" aria-hidden="true" className={styles.flower}>
            <path
              d="M40 118 C 40 90, 38 70, 42 40 M41 80 C 30 72, 20 74, 14 66 C 24 62, 34 66, 41 76 M42 60 C 52 52, 62 54, 68 46 C 58 42, 48 46, 42 56 M42 40 C 32 34, 32 18, 42 8 C 52 18, 52 34, 42 40 Z M42 40 C 36 30, 38 20, 42 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />
          </svg>
          <p className="script">
            Same person.
            <br />
            Two worlds. One story.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
