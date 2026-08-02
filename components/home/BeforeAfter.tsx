import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function BeforeAfter() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-orange-50/40 to-slate-50 py-24">
      <Container className="relative">
        <SectionHeading
          eyebrow="Real Results"
          title="See the 360 difference"
          description="One pass from our team and years of built-up grime disappear. Here's an actual project, captured mid-clean."
        />

        <FadeIn className="mt-14" delay={0.1}>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl shadow-2xl shadow-orange-900/10">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
              <Image
                src="/images/20260512_168095.png"
                alt="Interlock paver walkway before and after a professional cleaning"
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
