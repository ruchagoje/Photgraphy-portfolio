/**
 * Brand video edits. Put files in public/videos/brand/NN.mp4 with a poster frame at NN.jpg.
 */
export type BrandVideo = { src: string; poster: string; title: string; kind: "Clothing" | "Restaurant" };

export const brandVideos: BrandVideo[] = [
  { src: "/videos/brand/03.mp4", poster: "/videos/brand/03.jpg", title: "Clothing brand · Reel 01", kind: "Clothing" },
  { src: "/videos/brand/01.mp4", poster: "/videos/brand/01.jpg", title: "Restaurant · Reel 01", kind: "Restaurant" },
  { src: "/videos/brand/04.mp4", poster: "/videos/brand/04.jpg", title: "Clothing brand · Reel 02", kind: "Clothing" },
  { src: "/videos/brand/02.mp4", poster: "/videos/brand/02.jpg", title: "Restaurant · Reel 02", kind: "Restaurant" },
];
