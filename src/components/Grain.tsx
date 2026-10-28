import styles from "./Grain.module.css";

/** Subtle animated film grain over the whole site (decorative, ignores pointer). */
export default function Grain() {
  return <div className={styles.grain} aria-hidden="true" />;
}
