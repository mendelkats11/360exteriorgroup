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
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-slate-50 to-slate-50 py-24">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-orange-200/45 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The premium exterior cleaning experience you deserve"
          description="From the first phone call to the final walkthrough, we make it easy to trust us with your home."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 0.08}>
              <div className="group h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-sm shadow-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <reason.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{reason.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
