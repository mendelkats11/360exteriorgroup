"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = services.find((s) => s.slug === searchParams.get("service"));
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-orange-50 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-slate-900">Request received!</h3>
        <p className="mt-3 max-w-sm text-slate-600">
          Thanks for reaching out. A member of our team will contact you shortly to confirm your
          free quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(416) 555-0123"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="serviceArea" className="text-sm font-medium text-slate-700">
          Service Area
        </label>
        <select
          id="serviceArea"
          name="serviceArea"
          required
          defaultValue=""
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        >
          <option value="" disabled>
            Select your area
          </option>
          {siteConfig.serviceAreas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          What can we help you with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          defaultValue={
            preselectedService ? `I'm interested in getting a quote for ${preselectedService.title}.` : ""
          }
          placeholder="Tell us about your property and what you'd like cleaned..."
          className="resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Request Free Quote
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
