import Image from "next/image";
import type { Img } from "@/config/site";
import styles from "./Photo.module.css";

type Props = {
  img: Img;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/** Real photo when `img.src` is set, otherwise a labeled placeholder frame (never a broken image). */
export default function Photo({ img, sizes = "100vw", priority, className = "" }: Props) {
  if (!img.src) {
    return (
      <div className={`${styles.placeholder} ${className}`} role="img" aria-label={img.alt}>
        <span>{img.label ?? img.alt}</span>
        <small>add photo · see README</small>
      </div>
    );
  }
  return (
    <div className={`${styles.wrap} ${className}`}>
      <Image src={img.src} alt={img.alt} fill sizes={sizes} priority={priority} className={styles.img} />
    </div>
  );
}
