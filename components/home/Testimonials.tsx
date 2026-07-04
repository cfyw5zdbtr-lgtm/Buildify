import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Placeholder testimonials — replace with real client feedback once
// available. Kept illustrative rather than overly specific.
const TESTIMONIALS = [
  {
    quote:
      "Buildify found two clauses in our contract we would have signed without question. Having someone on our side made the whole process far less stressful.",
    name: "Sarah & Daniel",
    location: "Cambridge",
  },
  {
    quote:
      "We compared three builders side by side and finally felt like we understood what we were actually paying for.",
    name: "Aroha",
    location: "Hamilton",
  },
  {
    quote:
      "Every variation was explained before we signed off. No surprises, and no awkward conversations with the builder.",
    name: "Mark",
    location: "Te Awamutu",
  },
];

export function Testimonials() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="What clients say" title="Built on trust" align="center" />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col justify-between border border-stone/20 bg-paper p-8"
            >
              <blockquote className="text-base leading-relaxed text-slate">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-stone/15 pt-4 text-sm">
                <span className="font-medium text-ink">{testimonial.name}</span>
                <span className="text-stone-dark"> · {testimonial.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
