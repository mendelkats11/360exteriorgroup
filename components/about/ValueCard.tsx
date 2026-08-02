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
      <div className="group flex h-full flex-col items-center rounded-2xl border-2 border-slate-200 bg-white p-8 text-center shadow-sm shadow-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/10">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
          <Icon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </FadeIn>
  );
}
