"use client";

import * as Icons from "lucide-react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = Icons[service.icon] as Icons.LucideIcon;
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={service.slug}
      className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-black/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-900/10"
    >
      <div className="relative h-56 w-full shrink-0 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-orange-500 shadow-md">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <div className="flex flex-col p-7">
        <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.shortDescription}</p>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            expanded ? "mt-2 grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
        >
          {expanded ? "Show Less" : "Read More"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        <Link
          href={`/contact?service=${service.slug}`}
          className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-orange-50 px-5 py-2.5 text-sm font-semibold text-orange-600 transition-all duration-300 hover:bg-orange-500 hover:text-white"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
