import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="relative h-16 w-64">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              fill
              sizes="260px"
              className="object-contain object-left"
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            Toronto&apos;s trusted exterior cleaning professionals. Mobile, licensed, and insured
            &mdash; we bring premium results straight to your door.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Sitemap</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`} className="transition-colors hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <a href={siteConfig.phone.href} className="flex items-start gap-3 transition-colors hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                {siteConfig.phone.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:px-8 lg:px-10">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Licensed &amp; Insured &middot; Proudly Serving the Greater Toronto Area</p>
        </div>
      </div>
    </footer>
  );
}
