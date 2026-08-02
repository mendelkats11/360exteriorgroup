import { CalendarCheck, ClipboardCheck, Sparkles, SprayCan } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Request a Free Quote",
    description: "Tell us about your property and what you need cleaned. We'll respond fast with a clear, no-obligation quote.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule Your Visit",
    description: "Pick a date and time that works for you. We offer flexible scheduling, including weekends.",
  },
  {
    icon: SprayCan,
    title: "We Clean, You Relax",
    description: "Our trained technicians arrive on time and get to work, treating your property with care.",
  },
  {
    icon: Sparkles,
    title: "Enjoy the Results",
    description: "Step back and admire a spotless exterior, backed by our 100% satisfaction guarantee.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-orange-100/55 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Our Process"
          title="Getting started is simple"
          description="From your first call to the final result, we make the entire experience effortless."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.08}>
              <div className="relative flex h-full flex-col items-center rounded-2xl bg-slate-50 p-8 text-center">
                <span className="absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-lg shadow-orange-500/30">
                  {index + 1}
                </span>
                <span className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                  <step.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
