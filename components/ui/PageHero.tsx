import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  backgroundImage,
  backgroundAlt,
  children,
}: {
  backgroundImage: string;
  backgroundAlt: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      <Container className="relative">{children}</Container>
    </section>
  );
}
