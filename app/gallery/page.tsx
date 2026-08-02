import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getGalleryImages } from "@/lib/gallery-images";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse recent exterior cleaning projects from 360 Exterior Group, including window cleaning, house washing, pressure washing, and eavestrough cleaning across Toronto.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: `Gallery | ${siteConfig.name}`,
    description: "Browse recent exterior cleaning projects from 360 Exterior Group across Toronto.",
    url: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <>
      <PageHero backgroundImage="/images/20260413_168910.png" backgroundAlt="A large, beautifully maintained home exterior">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
            Gallery
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Recent projects across the GTA
          </h1>
          <p className="mt-5 text-lg text-slate-200">
            A closer look at the results we deliver, one property at a time. Click any photo to
            view it larger.
          </p>
        </FadeIn>
      </PageHero>

      <section className="relative overflow-hidden bg-white py-20">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-orange-200/45 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-[40%] h-96 w-96 rounded-full bg-orange-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
        <Container className="relative">
          <GalleryGrid images={images} />
        </Container>
      </section>
    </>
  );
}
