"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function MobileFloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showAt = window.innerHeight * 0.75;
    const hideAt = window.innerHeight * 0.45;

    const onScroll = () => {
      const y = window.scrollY;
      setVisible((prev) => {
        if (!prev && y > showAt) return true;
        if (prev && y < hideAt) return false;
        return prev;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.7 }}
          className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-white/10 bg-ink/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm lg:hidden"
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
