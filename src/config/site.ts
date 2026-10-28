/**
 * Site-wide settings. Edit these values to update the site.
 * Leave a contact value as "" to hide that link entirely — nothing is ever invented.
 */
export type Img = {
  /** Path under /public, e.g. "/images/hero/hero.jpg". Use null to show a labeled placeholder frame. */
  src: string | null;
  alt: string;
  /** Text shown on the placeholder frame until a real photo is added. */
  label?: string;
};

export const site = {
  name: "Rucha",
  fullName: "Rucha Goje",
  title: "Rucha Goje — Photography",
  description:
    "An Engineer by Profession. A Photographer by Passion. Maternity, birthday, pre-wedding and brand photography.",
  availability: "Available for selected projects",
  showAvailability: true,

  contact: {
    /** Instagram handle without "@", e.g. "rucha.clicks" */
    instagram: "shots_by_rucha",
    /** Email address, e.g. "hello@example.com" */
    email: "ruchagoje@gmail.com",
    /** WhatsApp number with country code, digits only, e.g. "919876543210" */
    whatsapp: "918688577334",
  },

  nav: [
    { label: "Home", href: "/#home" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],

  hero: {
    image: { src: "/images/hero/hero.jpg", alt: "Rucha holding a camera up to her eye" } as Img,
    inset: {
      src: "/images/hero/inset.jpg",
      alt: "Expecting mother in a navy gown on a forest bench, blowing bubbles",
      label: "Hero · Inset print",
    } as Img,
  },

  about: {
    main: { src: "/images/about/rucha.jpg", alt: "Rucha holding a camera up to her face against a green wall" } as Img,
    polaroid: { src: "/images/portfolio/maternity/02.jpg", alt: "Parents holding hands with tiny baby shoes" } as Img,
    landscape: { src: "/images/about/dimmi.jpg", alt: "Newborn baby sleeping on a blue blanket among cotton clouds" } as Img,
    filmStrip: [
      { src: "/images/portfolio/maternity/03.jpg", alt: "Expecting couple in plum outfits" },
      { src: "/images/portfolio/maternity/04.jpg", alt: "Expecting mother in a navy gown in a garden" },
      { src: "/images/portfolio/portraits/03.jpg", alt: "Girl watching red fireworks" },
    ] as Img[],
  },

  contactSection: {
    background: { src: null, alt: "", label: "Contact · Background" } as Img,
    prints: [
      { src: "/images/portfolio/birthdays/cover.jpg", alt: "Baby among red and white balloons" },
      { src: "/images/portfolio/portraits/01.jpg", alt: "Portrait in a black lehenga" },
    ] as Img[],
  },
};

export const contactLinks = () => {
  const c = site.contact;
  return [
    c.instagram && {
      kind: "instagram" as const,
      label: "Instagram",
      value: `@${c.instagram.replace(/^@/, "")}`,
      href: `https://instagram.com/${c.instagram.replace(/^@/, "")}`,
    },
    c.email && { kind: "email" as const, label: "Email", value: c.email, href: `mailto:${c.email}` },
    c.whatsapp && {
      kind: "whatsapp" as const,
      label: "WhatsApp",
      value: `+${c.whatsapp.replace(/\D/g, "")}`,
      href: `https://wa.me/${c.whatsapp.replace(/\D/g, "")}`,
    },
  ].filter(Boolean) as { kind: "instagram" | "email" | "whatsapp"; label: string; value: string; href: string }[];
};

/** Primary call-to-action target: first available contact method, else the contact section. */
export const primaryContactHref = () => contactLinks()[0]?.href ?? "/#contact";
