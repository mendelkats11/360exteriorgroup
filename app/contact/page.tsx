import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free, no-obligation quote from 360 Exterior Group. Call, email, or fill out our contact form to schedule your exterior cleaning service today.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: "Get a free, no-obligation quote from 360 Exterior Group.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero backgroundImage="/images/20260406_167390.png" backgroundAlt="A beautifully maintained brick home exterior">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
            Contact Us
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get your free quote today
          </h1>
          <p className="mt-5 text-lg text-slate-200">
            Fill out the form below or give us a call. We&apos;ll get back to you fast with a
            clear, no-obligation quote.
          </p>
        </FadeIn>
      </PageHero>

      <section className="relative overflow-hidden bg-ink py-20">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
        <Container className="relative">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <FadeIn className="rounded-3xl border-2 border-white/10 bg-white/5 p-8 shadow-sm shadow-black/20 lg:col-span-3 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-bold text-white">Request a Free Quote</h2>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  We respond quickly
                </span>
              </div>
              <p className="mt-2 text-slate-300">
                Tell us a bit about your project and we&apos;ll follow up within one business day.
              </p>
              <div className="mt-8">
                <Suspense fallback={null}>
                  <ContactForm />
                </Suspense>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-2">
              <ContactInfo />
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
