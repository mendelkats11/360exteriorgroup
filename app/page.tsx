import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustSignals } from "@/components/home/TrustSignals";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceArea } from "@/components/home/ServiceArea";
import { CtaBanner } from "@/components/home/CtaBanner";
import { MobileFloatingCta } from "@/components/home/MobileFloatingCta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <WhyChooseUs />
      <ServicesPreview />
      <BeforeAfter />
      <Process />
      <Testimonials />
      <ServiceArea />
      <CtaBanner />
      <div className="h-20 lg:hidden" aria-hidden />
      <MobileFloatingCta />
    </>
  );
}
