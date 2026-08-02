"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-ink/95 shadow-lg shadow-black/10 backdrop-blur-sm" : "bg-ink"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link href="/" className="relative z-10 flex h-14 w-56 shrink-0 items-center sm:h-16 sm:w-64">
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            fill
            priority
            sizes="260px"
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
          >
            Free Quote
          </Link>
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-20 z-40 flex flex-col bg-ink transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "[transform:translateX(0)]" : "[transform:translateX(100%)]"
        }`}
      >
        <nav className="flex flex-1 flex-col gap-1 px-6 pt-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-4 text-lg font-medium transition-colors ${
                  isActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-6">
          <a
            href={siteConfig.phone.href}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-orange-600"
          >
            <Phone className="h-5 w-5" />
            Call Now: {siteConfig.phone.display}
          </a>
          <Link
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-4 text-base font-semibold text-white transition-colors hover:bg-white/5"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
