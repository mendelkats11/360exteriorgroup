import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/site-config";

export function ServiceArea() {
  return (
    <section className="relative overflow-hidden bg-ink py-24">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-400/15 blur-3xl" />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <FadeIn>
            <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-orange-400">
              Service Area
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Proudly serving Toronto &amp; the GTA
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              As a mobile exterior cleaning company, we bring our equipment and expertise directly
              to your property, wherever you are across the Greater Toronto Area.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {siteConfig.serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <MapPin className="h-4 w-4 shrink-0 text-orange-400" />
                  {area}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-amber-400/25 shadow-xl shadow-black/40 sm:aspect-[4/3]">
              <iframe
                title="360 Exterior Group service area map"
                src="https://www.google.com/maps?q=Toronto,ON&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
