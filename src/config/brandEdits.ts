import type { Img } from "./site";

/**
 * Before/after brand edits. Put files in public/images/brand-edits/<project>/before.jpg & after.jpg.
 * The slider only appears when both before and after have a real src; otherwise labeled frames show.
 */
export const brandEdits: { title: string; before: Img; after: Img }[] = [
  {
    title: "Product retouch",
    before: { src: null, alt: "Product photo before editing", label: "Brand edit · Before" },
    after: { src: null, alt: "Product photo after editing", label: "Brand edit · After" },
  },
];

export const brandGallery: Img[] = [
  { src: null, alt: "Brand photograph", label: "Brand · 01" },
  { src: null, alt: "Brand photograph", label: "Brand · 02" },
  { src: null, alt: "Brand photograph", label: "Brand · 03" },
  { src: null, alt: "Brand photograph", label: "Brand · 04" },
];
