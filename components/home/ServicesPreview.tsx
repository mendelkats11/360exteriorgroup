import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";

export function ServicesPreview() {
  const preview = services.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-ink-light py-24">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
      <Container className="relative">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Our Services"
            title="Comprehensive exterior cleaning, done right"
            description="From sparkling windows to spotless driveways, we handle every corner of your property's exterior."
          />
          <Button href="/services" variant="ghost" className="shrink-0 px-0" icon={<ArrowRight className="h-4 w-4" />}>
            View All Services
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {preview.map((service, index) => {
            const Icon = Icons[service.icon] as Icons.LucideIcon;
            return (
              <FadeIn key={service.slug} delay={index * 0.06}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10"
                >
                  <div className="relative aspect-square w-full overflow-hidden sm:aspect-auto sm:h-52">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 hidden h-10 w-10 items-center justify-center rounded-full bg-white/95 text-orange-500 shadow-md sm:flex">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:hidden">
                      <p className="text-xs font-semibold text-white">{service.title}</p>
                    </div>
                  </div>
                  <div className="hidden flex-1 flex-col p-6 sm:flex">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
