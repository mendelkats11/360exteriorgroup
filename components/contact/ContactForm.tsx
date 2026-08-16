"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = services.find((s) => s.slug === searchParams.get("service"));
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      serviceArea: formData.get("serviceArea"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-orange-500/20 bg-orange-500/10 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-400 text-ink">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-white">Request received!</h3>
        <p className="mt-3 max-w-sm text-slate-300">
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
          <label htmlFor="name" className="text-sm font-medium text-slate-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-300">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(416) 555-0123"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-300">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="serviceArea" className="text-sm font-medium text-slate-300">
          Service Area
        </label>
        <select
          id="serviceArea"
          name="serviceArea"
          required
          defaultValue=""
          className="cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
        >
          <option value="" disabled className="bg-ink-light text-slate-900">
            Select your area
          </option>
          {siteConfig.serviceAreas.map((area) => (
            <option key={area} value={area} className="bg-white text-slate-900">
              {area}
            </option>
          ))}
          <option value="Other" className="bg-white text-slate-900">
            Other
          </option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-300">
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
          className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
        />
      </div>

      {status === "error" ? (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Something went wrong sending your request. Please try again, or call us directly.
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-4 text-base font-bold text-ink shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30 disabled:cursor-not-allowed disabled:opacity-70"
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
