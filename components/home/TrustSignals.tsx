import { Clock, MapPin, ShieldCheck, Star, Users, Wallet } from "lucide-react";

const signals = [
  { icon: Star, label: "Rated 5.0 on Google" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Wallet, label: "Free Estimates" },
  { icon: Users, label: "Locally Owned" },
  { icon: MapPin, label: "Serving Toronto & Surrounding Areas" },
  { icon: Clock, label: "Reliable & On-Time" },
];

export function TrustSignals() {
  return (
    <section className="border-b border-white/10 bg-ink-light">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
            <span className="flex shrink-0 items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </span>
            <span className="text-sm font-medium text-slate-300">Rated 5.0 on Google</span>
          </div>
          {signals.slice(1).map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-slate-300">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
