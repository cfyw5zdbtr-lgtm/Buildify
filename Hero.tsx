import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const STEPS = [
  {
    number: "01",
    title: "Tell us about your project",
    description:
      "A quick enquiry about your goals, budget, location and timeline — it takes a few minutes.",
  },
  {
    number: "02",
    title: "We assess your options",
    description:
      "We match you with vetted, LBP-licensed builders and packages suited to your needs.",
  },
  {
    number: "03",
    title: "We compare and negotiate",
    description:
      "Tenders, pricing and contracts are reviewed side-by-side and explained in plain English.",
  },
  {
    number: "04",
    title: "We support you through the build",
    description:
      "From contract signing to variations, we're with you through to completion.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-ink py-20 text-paper lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A clear path from first enquiry to final handover"
          description="Buildify's process is built around four stages — each one designed to give you more clarity and more control."
          align="center"
          light
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative pl-0">
              <div className="flex items-baseline gap-4 lg:flex-col lg:items-start lg:gap-6">
                <span className="font-display text-4xl text-stone/40">{step.number}</span>
                <div>
                  <h3 className="text-lg text-paper">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{step.description}</p>
                </div>
              </div>
              {index < STEPS.length - 1 && (
                <div className="mt-8 hidden h-px bg-stone/15 lg:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/how-it-works" variant="secondary">
            See the full process
          </Button>
        </div>
      </Container>
    </section>
  );
}
