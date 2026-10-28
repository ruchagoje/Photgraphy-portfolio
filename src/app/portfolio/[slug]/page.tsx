import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import GalleryLightbox from "@/components/GalleryLightbox";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { categories, getCategory } from "@/config/portfolio";
import { site } from "@/config/site";
import styles from "../category.module.css";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const c = getCategory((await params).slug);
  return c ? { title: `${c.title} — ${site.title}`, description: `${c.tagline} ${c.description}` } : {};
}

export default async function CategoryPage({ params }: Params) {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) notFound();

  const i = categories.indexOf(c);
  const prev = categories[(i - 1 + categories.length) % categories.length];
  const next = categories[(i + 1) % categories.length];
  const count = c.images.filter((x) => x.src).length;

  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <ImageReveal className={styles.lead}>
          <Photo img={c.cover} priority sizes="(max-width: 820px) 100vw, 50vw" />
        </ImageReveal>
        <div className={styles.text}>
          <Reveal>
            <Link href="/#portfolio" className={styles.back}>
              ← All stories
            </Link>
          </Reveal>
          <Reveal index={1}>
            <p className="eyebrow">{c.title}</p>
          </Reveal>
          <Reveal index={2}>
            <h1 className={styles.title}>{c.tagline}</h1>
          </Reveal>
          <Reveal index={3}>
            <p className={styles.desc}>{c.description}</p>
          </Reveal>
          {count > 0 && (
            <Reveal index={4}>
              <p className={styles.count}>
                {String(count).padStart(2, "0")} {count === 1 ? "frame" : "frames"}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <GalleryLightbox images={c.images} />

      <nav className={styles.next} aria-label="More stories">
        <Link href={`/portfolio/${prev.slug}`}>
          <small>← Previous story</small>
          <strong>{prev.title}</strong>
        </Link>
        <Link href={`/portfolio/${next.slug}`}>
          <small>Next story →</small>
          <strong>{next.title}</strong>
        </Link>
      </nav>
    </div>
  );
}
