import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "outline-dark" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-orange-500 to-amber-400 text-ink font-bold shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5",
  secondary:
    "bg-white text-ink shadow-lg shadow-black/20 hover:bg-slate-100 hover:-translate-y-0.5",
  outline:
    "border-2 border-white/70 text-white hover:bg-white hover:text-ink hover:-translate-y-0.5",
  "outline-dark":
    "border-2 border-orange-400/40 text-white hover:border-orange-400 hover:bg-orange-500/10 hover:-translate-y-0.5",
  ghost: "text-orange-400 hover:text-orange-300 hover:bg-orange-500/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-300 ease-out ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
