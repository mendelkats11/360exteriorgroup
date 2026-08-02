import { Award, Clock3, Leaf, ShieldCheck, Wallet, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Full liability coverage on every job, so your property is always protected.",
  },
  {
    icon: Award,
    title: "100% Satisfaction Guarantee",
    description: "If you're not happy with the results, we'll make it right, no questions asked.",
  },
  {
    icon: Clock3,
    title: "On-Time, Every Time",
    description: "We respect your schedule and show up when we say we will, every visit.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description: "Biodegradable cleaning products that are safe for your family, pets, and plants.",
  },
  {
    icon: Wallet,
    title: "Honest, Upfront Pricing",
    description: "Transparent free quotes with no hidden fees or surprise charges, ever.",
  },
  {
    icon: Wrench,
    title: "Skilled, Careful Technicians",
    description: "Trained professionals who treat every property like it's their own.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-24">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The premium exterior cleaning experience you deserve"
          description="From the first phone call to the final walkthrough, we make it easy to trust us with your home."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 0.08}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-orange-500/10 sm:p-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-400 group-hover:text-ink sm:h-12 sm:w-12">
                  <reason.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-white sm:mt-6 sm:text-lg">{reason.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:mt-2 sm:text-sm">{reason.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
