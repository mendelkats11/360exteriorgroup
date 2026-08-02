import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-white to-white py-10 sm:py-14 lg:py-10">
      <div className="absolute inset-0">
        <Image
          src="/images/20260301_162013.png"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.08] grayscale"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-ink/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-10">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-orange-600 shadow-sm ring-1 ring-orange-100">
            Residential &amp; Commercial Exterior Cleaning
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
            Toronto&apos;s Trusted{" "}
            <span className="relative whitespace-nowrap text-orange-500">
              Exterior Cleaning
              <svg
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                aria-hidden
                className="absolute -bottom-1 left-0 h-3 w-full text-orange-300"
              >
                <path d="M2 15 Q150 2 298 15" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Professionals
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600 sm:text-xl">
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
            <span className="text-sm font-medium text-slate-600">
              Rated 5.0 on Google &middot; Licensed &amp; Insured
            </span>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-lg animate-fade-in-up sm:max-w-xl lg:mx-0 lg:max-w-2xl">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-orange-200/50 to-transparent blur-2xl" />

          <div className="absolute left-0 top-0 z-10 h-[74%] w-[74%] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-slate-900/15 ring-4 ring-white">
            <Image
              src="/images/20260413_168910.png"
              alt="A large, beautifully maintained home exterior"
              fill
              priority
              sizes="(min-width: 1024px) 500px, 74vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-0 z-20 h-[62%] w-[62%] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-slate-900/15 ring-4 ring-white">
            <Image
              src="/images/window washing.png"
              alt="Technician washing a window with a squeegee"
              fill
              sizes="(min-width: 1024px) 420px, 62vw"
              className="object-cover"
            />
          </div>

          <div className="absolute right-0 top-[2%] z-30 h-[36%] w-[36%] overflow-hidden rounded-2xl shadow-xl shadow-slate-900/15 ring-4 ring-white">
            <Image
              src="/images/eaves cleaning.png"
              alt="Cleaning leaves and debris from an eavestrough"
              fill
              sizes="(min-width: 1024px) 240px, 36vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl bg-white px-5 py-4 shadow-xl shadow-slate-900/10 ring-1 ring-black/5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold leading-none text-slate-900">Licensed &amp; Insured</p>
              <p className="mt-1 text-xs text-slate-500">{siteConfig.yearsInBusiness}+ years serving the GTA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
