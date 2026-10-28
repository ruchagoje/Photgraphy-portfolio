# Rucha Goje — Photography Portfolio

Next.js + TypeScript + Framer Motion. All content lives in `src/config/`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # checks every image path, then builds
npm start
```

## Adding or replacing photos

1. Put the photo in `public/images/...`, for example `public/images/portfolio/birthdays/cover.jpg`.
2. In the matching config file, set `src` to that path. The path starts at `/images/...` and does not include `public`.
   Any slot with `src: null` shows a labeled placeholder frame until you fill it.
3. Run `npm run check-images` to confirm every path exists.

| Where on the site         | Config                                        |
| ------------------------- | --------------------------------------------- |
| Hero photo + tilted print | `site.ts` → `hero.image`, `hero.inset`        |
| Portfolio covers/galleries | `portfolio.ts` → `cover`, `images[]`         |
| About collage             | `site.ts` → `about.*`                         |
| Brand before/after + grid | `brandEdits.ts`                               |
| Contact background/prints | `site.ts` → `contactSection.*`                |

Each gallery image takes `{ src, alt, caption? }`. Write a short, real description in `alt`.
To add a new category, add an object to `categories` in `portfolio.ts`. Its page `/portfolio/<slug>` is created automatically.

## Contact details

Fill these in `src/config/site.ts` → `contact`:

- `instagram`: your handle, e.g. `"rucha.clicks"`
- `email`: your email address
- `whatsapp`: country code + number, digits only, e.g. `"919876543210"`

An empty value shows "Coming soon" and creates no link. "Let's Work Together" opens the first contact method you fill in.

Set `showAvailability: false` to hide the "Available for selected projects" badge.
