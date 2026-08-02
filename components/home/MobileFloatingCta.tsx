"use client";

import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function MobileFloatingCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-white/10 bg-ink/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm lg:hidden">
      <a
        href={siteConfig.phone.href}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-3 text-sm font-bold text-ink shadow-lg shadow-orange-500/20"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <a
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-orange-400/40 px-4 py-3 text-sm font-semibold text-white"
      >
        Get a Free Quote
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
