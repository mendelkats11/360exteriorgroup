import { readdirSync } from "node:fs";
import path from "node:path";

export type GalleryImage = {
  src: string;
  alt: string;
  aspect: number;
};

const EXCLUDED_EXACT = new Set(["logo.png"]);

const EXCLUDED_PREFIXES = ["placeholder-"];

const SERVICE_IMAGE_FILES = new Set([
  "window washing.png",
  "eaves cleaning.png",
  "powerwashing.png",
  "facade cleaning.png",
  "gutter clenaing.jpg",
  "roof cleaning.jpg",
  "softwashing.jpg",
  "storefront cleaning.jpg",
  "fence cleaning.jpg",
  "solar panel cleaning.jpg",
]);

const ASPECT_RATIOS = [4 / 3, 1, 3 / 4, 16 / 10, 5 / 4, 3 / 2];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function getGalleryImages(): GalleryImage[] {
  const imagesDir = path.join(process.cwd(), "public", "images");
  const files = readdirSync(imagesDir);

  return files
    .filter((file) => {
      if (EXCLUDED_EXACT.has(file)) return false;
      if (SERVICE_IMAGE_FILES.has(file)) return false;
      if (EXCLUDED_PREFIXES.some((prefix) => file.startsWith(prefix))) return false;
      return /\.(png|jpe?g|webp)$/i.test(file);
    })
    .sort()
    .map((file) => ({
      src: `/images/${file}`,
      alt: "360 Exterior Group project photo of a professionally cleaned home exterior",
      aspect: ASPECT_RATIOS[hashString(file) % ASPECT_RATIOS.length],
    }));
}
