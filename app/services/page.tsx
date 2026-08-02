import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { coreServices, featuredService } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore all 10 exterior cleaning services from 360 Exterior Group, including window cleaning, eavestrough cleaning, pressure washing, house washing, and more across Toronto.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Our Services | ${siteConfig.name}`,
    description:
      "Explore all 10 exterior cleaning services from 360 Exterior Group across Toronto and the GTA.",
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero backgroundImage="/images/20260415_162636.png" backgroundAlt="A beautifully maintained home exterior">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
            Our Services
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Complete exterior cleaning, top to bottom
          </h1>
          <p className="mt-5 text-lg text-slate-200">
            Ten specialized services, one trusted team. Every job is backed by our satisfaction
            guarantee and fully insured technicians.
          </p>
        </FadeIn>
      </PageHero>

      <section className="relative overflow-hidden bg-slate-50 py-24">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-orange-200/45 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-orange-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <Container className="relative">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="hidden lg:block" aria-hidden />
            <ServiceCard service={featuredService} />
            <div className="hidden lg:block" aria-hidden />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl" />
        <Container className="relative">
          <SectionHeading title="Not sure which service you need?" />
          <FadeIn delay={0.1} className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={siteConfig.phone.href} variant="primary" icon={<Phone className="h-4 w-4" />}>
              Call Now
            </Button>
            <Button href="/contact" variant="outline-dark">
              Get a Free Quote
            </Button>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
