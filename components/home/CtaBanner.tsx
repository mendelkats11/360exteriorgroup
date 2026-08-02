import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <Container className="relative">
        <FadeIn className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready for a spotless exterior? Let&apos;s get started.
          </h2>
          <p className="max-w-xl text-lg text-slate-300">
            Get a free, no-obligation quote today. Our friendly team is standing by to answer your
            questions and get you on the schedule.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={siteConfig.phone.href} variant="primary" icon={<Phone className="h-4 w-4" />}>
              Call Now
            </Button>
            <Button href="/contact" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
              Get a Free Quote
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
