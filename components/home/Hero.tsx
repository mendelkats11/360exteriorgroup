"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const collageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink py-10 sm:py-14 lg:py-10">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="/images/20260301_162013.png"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.14] grayscale"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-500/25 blur-3xl"
      />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-10"
      >
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-orange-300 backdrop-blur-sm">
            Residential &amp; Commercial Exterior Cleaning
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Toronto&apos;s Trusted{" "}
            <span className="relative whitespace-nowrap bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Exterior Cleaning
              <svg
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                aria-hidden
                className="absolute -bottom-1 left-0 h-3 w-full text-amber-400"
              >
                <path d="M2 15 Q150 2 298 15" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Professionals
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-300 sm:text-xl">
            Professional window cleaning, eavestrough cleaning, and exterior washing services
            across Toronto and surrounding areas.
          </p>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <Button href={siteConfig.phone.href} variant="primary" icon={<Phone className="h-4 w-4" />}>
              Call Now
            </Button>
            <Button href="/contact" variant="outline-dark" icon={<ArrowRight className="h-4 w-4" />}>
              Get a Free Quote
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <span className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-medium text-slate-300">
              Rated 5.0 on Google &middot; Licensed &amp; Insured
            </span>
          </div>
        </div>

        <motion.div
          style={{ y: collageY }}
          className="relative mx-auto aspect-square w-full max-w-lg animate-fade-in-up sm:max-w-xl lg:mx-0 lg:max-w-2xl"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-orange-500/30 via-amber-400/10 to-transparent blur-2xl" />

          <div className="absolute left-0 top-0 z-10 h-[74%] w-[74%] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/40 ring-4 ring-white/90">
            <Image
              src="/images/20260413_168910.png"
              alt="A large, beautifully maintained home exterior"
              fill
              priority
              sizes="(min-width: 1024px) 500px, 74vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-0 z-20 h-[62%] w-[62%] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/40 ring-4 ring-white/90">
            <Image
              src="/images/window washing.png"
              alt="Technician washing a window with a squeegee"
              fill
              sizes="(min-width: 1024px) 420px, 62vw"
              className="object-cover"
            />
          </div>

          <div className="absolute right-0 top-[2%] z-30 h-[36%] w-[36%] overflow-hidden rounded-2xl shadow-xl shadow-black/40 ring-4 ring-white/90">
            <Image
              src="/images/eaves cleaning.png"
              alt="Cleaning leaves and debris from an eavestrough"
              fill
              sizes="(min-width: 1024px) 240px, 36vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl border border-white/10 bg-ink-light/95 px-5 py-4 shadow-xl shadow-black/40 backdrop-blur-sm sm:bottom-8">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-400 text-ink">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold leading-none text-white">Licensed &amp; Insured</p>
              <p className="mt-1 text-xs text-slate-400">{siteConfig.yearsInBusiness}+ years serving the GTA</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
