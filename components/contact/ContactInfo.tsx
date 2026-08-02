import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ContactInfo() {
  return (
    <div className="h-full">
      <div className="rounded-3xl bg-ink p-8 text-white sm:p-10">
        <h3 className="text-xl font-semibold">Contact Information</h3>
        <ul className="mt-6 flex flex-col gap-5">
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Phone className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Phone</p>
              <a href={siteConfig.phone.href} className="text-base font-medium hover:text-orange-300">
                {siteConfig.phone.display}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Mail className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-base font-medium hover:text-orange-300">
                {siteConfig.email}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Address</p>
              <p className="text-base font-medium">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Clock className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Business Hours</p>
              <ul className="mt-1 flex flex-col gap-0.5 text-sm text-slate-200">
                {siteConfig.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span className="font-medium text-white">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteConfig.phone.href}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
          >
            <Mail className="h-4 w-4" />
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
