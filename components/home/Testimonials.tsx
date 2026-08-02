import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50 py-24">
      <Container className="relative">
        <SectionHeading
          eyebrow="Customer Testimonials"
          title="Loved by homeowners across the GTA"
          description="We measure our success one satisfied customer at a time."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm shadow-black/[0.03]">
                <Quote className="h-8 w-8 text-orange-200" />
                <div className="mt-4 flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">
                    {testimonial.location} &middot; {testimonial.service}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
