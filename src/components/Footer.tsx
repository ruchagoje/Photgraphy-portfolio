import Link from "next/link";
import { site, contactLinks } from "@/config/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const links = contactLinks();
  return (
    <footer className={styles.footer}>
      <Link href="/" className={`script ${styles.logo}`}>
        {site.name}
      </Link>
      <p>An Engineer by Profession. A Photographer by Passion.</p>
      <nav aria-label="Footer">
        {links.map((l) => (
          <a key={l.kind} href={l.href} target={l.kind === "email" ? undefined : "_blank"} rel="noopener noreferrer">
            {l.label}
          </a>
        ))}
        <Link href="/#home">Back to top ↑</Link>
      </nav>
      <small>
        © {new Date().getFullYear()} {site.fullName}. All photographs by {site.fullName}.
      </small>
    </footer>
  );
}
