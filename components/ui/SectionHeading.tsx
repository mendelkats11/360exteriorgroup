import { FadeIn } from "./FadeIn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <FadeIn className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <span className="inline-flex w-fit items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-orange-400">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-lg text-slate-300">{description}</p> : null}
    </FadeIn>
  );
}
