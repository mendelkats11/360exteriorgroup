import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Gem, HandHeart, Handshake, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ValueCard } from "@/components/about/ValueCard";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 360 Exterior Group, Toronto's mobile exterior cleaning company. Licensed, insured, and proudly serving the GTA for over 3 years.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "Learn about 360 Exterior Group, Toronto's mobile exterior cleaning company, licensed, insured, and proudly serving the GTA.",
    url: `${siteConfig.url}/about`,
  },
};

const commitments = [
  "Showing up on time",
  "Professional workmanship",
  "Honest pricing",
  "Friendly service",
  "Attention to detail",
  "Fully licensed and insured",
  "Customer satisfaction",
];

const values = [
  {
    icon: Gem,
    title: "Quality",
    description: "We hold every job to the same high standard, no shortcuts, no matter the size.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "When we say we'll be there, we're there. Your schedule matters to us.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Honest quotes, transparent communication, and no surprise fees. Ever.",
  },
  {
    icon: HandHeart,
    title: "Customer Care",
    description: "Friendly, respectful service from the first call to the final walkthrough.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero backgroundImage="/images/20260424_162888.png" backgroundAlt="A modern home exterior in Toronto">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
            About 360 Exterior Group
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Toronto&apos;s mobile exterior cleaning experts
          </h1>
        </FadeIn>
      </PageHero>

      <section className="relative overflow-hidden bg-white py-24">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-orange-100/55 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <FadeIn>
              <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-orange-600">
                Who We Are
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                A local team, right at your doorstep
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                360 Exterior Group has proudly served Toronto and surrounding areas for over{" "}
                {siteConfig.yearsInBusiness} years. We are a mobile exterior cleaning company that
                comes directly to your home, bringing professional-grade equipment and expertise
                right to your doorstep.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">We pride ourselves on:</p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15} className="relative">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-orange-200/45 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full bg-orange-300/40 blur-2xl" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-orange-900/10">
                <Image
                  src="/images/20260319_167711.png"
                  alt="360 Exterior Group technician pressure washing a roofline in Toronto"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[32rem] -translate-x-1/2 rounded-full bg-orange-200/35 blur-3xl" />
        <Container className="relative">
          <div className="relative mx-auto max-w-3xl">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-orange-300/35 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-52 w-52 rounded-full bg-orange-200/40 blur-2xl" />
            <div className="pointer-events-none absolute -top-10 -right-10 -z-10 h-52 w-52 rounded-full bg-orange-200/40 blur-2xl" />
            <FadeIn className="rounded-3xl bg-ink px-8 py-14 text-center sm:px-16">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
                Our Mission
              </span>
              <p className="mt-6 text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
                &ldquo;Our mission is to make every home look its absolute best while providing an
                exceptional customer experience from start to finish.&rdquo;
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-orange-100/55 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-orange-100/45 blur-3xl" />
        <Container className="relative">
          <SectionHeading eyebrow="Our Values" title="What drives everything we do" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <ValueCard key={value.title} {...value} delay={index * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-24">
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-200/45 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <FadeIn delay={0.1} className="relative order-2 lg:order-1">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-orange-200/45 blur-2xl" />
              <div className="pointer-events-none absolute -top-8 -left-8 -z-10 h-40 w-40 rounded-full bg-orange-300/40 blur-2xl" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-orange-900/10">
                <Image
                  src="/images/20260406_167390.png"
                  alt="A beautifully maintained home exterior cleaned by 360 Exterior Group"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-orange-600">
                Why Customers Choose Us
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Trusted results, every single visit
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Homeowners across the GTA choose 360 Exterior Group because we combine premium
                results with a genuinely easy, stress-free experience. From transparent pricing to
                punctual, courteous technicians, we treat every property like our own.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" variant="primary">
                  Request a Free Quote
                </Button>
                <Button href={siteConfig.phone.href} variant="outline-dark" icon={<Phone className="h-4 w-4" />}>
                  Call Now
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
