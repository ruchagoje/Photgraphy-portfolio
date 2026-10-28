import type { Img } from "./site";

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  cover: Img;
  images: (Img & { caption?: string })[];
};

/**
 * Portfolio categories. Each one gets its own page at /portfolio/<slug>.
 * To add a photo: drop it in public/images/portfolio/<slug>/ and add an entry to `images`.
 */
export const categories: Category[] = [
  {
    slug: "maternity",
    title: "Maternity",
    tagline: "A beautiful beginning.",
    description:
      "Soft light, quiet anticipation and the tender in-between moments of waiting for someone new.",
    cover: { src: "/images/portfolio/maternity/cover.jpg", alt: "Expecting mother in a golden silk saree" },
    images: [
      { src: "/images/portfolio/maternity/cover.jpg", alt: "Expecting mother in a golden silk saree, hand on her bump" },
      { src: "/images/portfolio/maternity/01.jpg", alt: "Black and white portrait of an expecting mother resting against her partner" },
      { src: "/images/portfolio/maternity/02.jpg", alt: "Parents holding hands with tiny baby shoes" },
      { src: "/images/portfolio/maternity/03.jpg", alt: "Expecting couple in plum outfits, mother wearing a 'Mom to be' sash" },
      { src: "/images/portfolio/maternity/04.jpg", alt: "Expecting mother in a navy gown cradling her bump in a garden" },
      { src: "/images/portfolio/maternity/05.jpg", alt: "Couple holding a \"We're expecting twins\" card" },
    ],
  },
  {
    slug: "birthdays",
    title: "Birthdays",
    tagline: "Little moments. Big memories.",
    description: "Candles, laughter and the small, unrepeatable details of a day worth celebrating.",
    cover: { src: "/images/portfolio/birthdays/01.jpg", alt: "Little boy in a white sherwani at his first birthday" },
    images: [
      { src: "/images/portfolio/birthdays/01.jpg", alt: "Little boy in a white sherwani at his first birthday, elephant-themed decor behind him" },
      { src: "/images/portfolio/birthdays/cover.jpg", alt: "Baby sitting among red and white balloons, looking up" },
    ],
  },
  {
    slug: "pre-wedding",
    title: "Pre-Wedding",
    tagline: "Two stories becoming one.",
    description: "Unhurried portraits of two people, just before the beginning of forever.",
    cover: { src: "/images/portfolio/pre-wedding/cover.jpg", alt: "Couple on a veranda, groom kneeling to adjust the bride's silk saree" },
    images: [
      { src: "/images/portfolio/pre-wedding/cover.jpg", alt: "Bride in a gold and pink silk saree smiling down at the groom in a maroon kurta, kneeling to adjust her pleats on a veranda" },
    ],
  },
  {
    slug: "portraits",
    title: "Portraits",
    tagline: "Faces, moods and the stories in between.",
    description: "Honest, unhurried portraits that capture who you are — in natural light and quiet moments.",
    cover: { src: "/images/portfolio/portraits/02.jpg", alt: "Woman laughing under a shower of Holi colours" },
    images: [
      { src: "/images/portfolio/portraits/02.jpg", alt: "Woman laughing under a shower of Holi colours against a red wall" },
      { src: "/images/portfolio/portraits/01.jpg", alt: "Woman in a black lehenga smiling over her shoulder, a streak of red colour on her cheek" },
      { src: "/images/portfolio/portraits/04.jpg", alt: "Bride in a maroon silk saree showing her mehendi, one hand covering an eye" },
      { src: "/images/portfolio/portraits/05.jpg", alt: "Close portrait of an elderly woman with silver hair in a pink blouse and striped saree" },
      { src: "/images/portfolio/portraits/03.jpg", alt: "Girl with long hair watching red fireworks light up the night" },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
