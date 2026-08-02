import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "outline-dark" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5",
  secondary:
    "bg-white text-slate-900 shadow-lg shadow-black/5 hover:bg-slate-50 hover:-translate-y-0.5",
  outline:
    "border-2 border-white/70 text-white hover:bg-white hover:text-slate-900 hover:-translate-y-0.5",
  "outline-dark":
    "border-2 border-orange-200 text-orange-600 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:-translate-y-0.5",
  ghost: "text-orange-600 hover:text-orange-700 hover:bg-orange-50",
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-300 ease-out ${variantClasses[variant]} ${className}`;

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
