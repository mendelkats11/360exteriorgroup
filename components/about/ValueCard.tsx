import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function ValueCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="group flex h-full flex-col items-center rounded-2xl border-2 border-white/10 bg-white/5 p-8 text-center shadow-sm shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-400 group-hover:text-ink">
          <Icon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
      </div>
    </FadeIn>
  );
}
