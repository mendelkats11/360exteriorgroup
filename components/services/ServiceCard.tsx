"use client";

import * as Icons from "lucide-react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service, className = "" }: { service: Service; className?: string }) {
  const Icon = Icons[service.icon] as Icons.LucideIcon;
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={service.slug}
      className={`group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-black/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-900/10 ${className}`}
    >
      <div className="relative aspect-square w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-56">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-orange-500 shadow-md sm:left-4 sm:top-4 sm:h-11 sm:w-11">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
      </div>

      <div className="flex flex-col p-4 sm:p-7">
        <h3 className="text-sm font-semibold text-slate-900 sm:text-xl">{service.title}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
          {service.shortDescription}
        </p>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            expanded ? "mt-2 grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">{service.description}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-2 inline-flex w-fit items-center gap-1 text-xs font-semibold text-orange-600 transition-colors hover:text-orange-700 sm:mt-3 sm:text-sm"
        >
          {expanded ? "Show Less" : "Read More"}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-300 sm:h-4 sm:w-4 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        <Link
          href={`/contact?service=${service.slug}`}
          className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600 transition-all duration-300 hover:bg-orange-500 hover:text-white sm:mt-4 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Learn More
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
        </Link>
      </div>
    </div>
  );
}
