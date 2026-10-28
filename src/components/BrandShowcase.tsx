import Link from "next/link";
import Photo from "./Photo";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { Reveal } from "./Reveal";
import { brandEdits, brandGallery } from "@/config/brandEdits";
import styles from "./BrandShowcase.module.css";

export default function BrandShowcase() {
  const edit = brandEdits[0];
  return (
    <section className={styles.section} aria-labelledby="brand-title">
      <div className={styles.head}>
        <Reveal>
          <p className="eyebrow">Brand photography &amp; editing</p>
          <h2 id="brand-title" className={styles.title}>
            Visuals That Make <em>Brands</em> Stand Out.
          </h2>
        </Reveal>
        <Reveal index={1} className={styles.note}>
          <p>
            From product shots to creative edits — every image is shaped to tell a brand&apos;s story. Drag the slider to
            see the edit.
          </p>
          <Link href="/#contact" className="link-arrow">
            Start a brand project <span>→</span>
          </Link>
        </Reveal>
      </div>

      <div className={styles.body}>
        {edit && (
          <Reveal className={styles.slider}>
            <BeforeAfterSlider before={edit.before} after={edit.after} title={edit.title} />
          </Reveal>
        )}
        <ul className={styles.grid}>
          {brandGallery.map((g, i) => (
            <Reveal as="li" index={i} key={i} className={styles.cell}>
              <div className={styles.zoom}>
                <Photo img={g} sizes="(max-width: 960px) 50vw, 20vw" />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
