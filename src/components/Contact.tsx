import Photo from "./Photo";
import { Reveal } from "./Reveal";
import { site, contactLinks, primaryContactHref } from "@/config/site";
import styles from "./Contact.module.css";

const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.6" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 6l8.5 7 8.5-7" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20l1.3-4A8 8 0 1 1 8.4 19z" />
      <path d="M9 8.5c.3 2.6 2.4 4.9 5 5.5l1.2-1.2 1.8.8-.4 1.6c-3.8.4-8.4-4-8-8l1.6-.4.8 1.8z" />
    </svg>
  ),
};

const kinds = ["instagram", "email", "whatsapp"] as const;
const names = { instagram: "Instagram", email: "Email", whatsapp: "WhatsApp" };

export default function Contact() {
  const links = contactLinks();
  const bg = site.contactSection.background;

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      {bg.src && (
        <div className={styles.bg} aria-hidden="true">
          <Photo img={bg} sizes="100vw" />
        </div>
      )}

      <div className={styles.inner}>
        <div className={styles.text}>
          <Reveal>
            <p className={`eyebrow ${styles.eyebrow}`}>Contact</p>
          </Reveal>
          <Reveal index={1}>
            <h2 id="contact-title" className={styles.title}>
              Have a Story <em>to Tell?</em>
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className={styles.copy}>
              Whether it is a celebration, a beautiful beginning, or a creative collaboration, let&apos;s create something
              worth remembering.
            </p>
          </Reveal>
          <Reveal index={3}>
            <a href={primaryContactHref()} className="btn btn-solid-light">
              Let&apos;s Work Together <span className="arrow">→</span>
            </a>
          </Reveal>
        </div>

        <ul className={styles.list}>
          {kinds.map((k, i) => {
            const l = links.find((x) => x.kind === k);
            return (
              <Reveal as="li" index={i} key={k}>
                {l ? (
                  <a
                    href={l.href}
                    className={styles.row}
                    target={k === "email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    <span className={styles.icon}>{icons[k]}</span>
                    <span>
                      <small>{names[k]}</small>
                      {l.value}
                    </span>
                    <span className={styles.go} aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ) : (
                  <div className={`${styles.row} ${styles.muted}`}>
                    <span className={styles.icon}>{icons[k]}</span>
                    <span>
                      <small>{names[k]}</small>
                      Coming soon
                    </span>
                  </div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </div>

      <div className={styles.prints} aria-hidden="true">
        {site.contactSection.prints.map((p, i) => (
          <div key={i} className={styles.print}>
            <div className={styles.printImg}>
              <Photo img={p} sizes="180px" />
            </div>
          </div>
        ))}
        <p className={`script ${styles.scriptNote}`}>Let&apos;s make memories</p>
      </div>
    </section>
  );
}
