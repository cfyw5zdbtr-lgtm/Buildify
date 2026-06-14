import { Scale, FileSearch, PiggyBank, ClipboardCheck, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CornerMarks } from "@/components/ui/CornerMarks";

const BENEFITS = [
  {
    icon: Scale,
    title: "Compare with confidence",
    description:
      "We benchmark quotes from vetted, LBP-licensed builders so you know what's fair for your build.",
  },
  {
    icon: FileSearch,
    title: "Understand every contract",
    description:
      "We review your building contract line by line and flag anything that could cost you later.",
  },
  {
    icon: PiggyBank,
    title: "Protect your budget",
    description:
      "From initial pricing through to variations, we help you avoid surprises along the way.",
  },
  {
    icon: ClipboardCheck,
    title: "Manage variations",
    description:
      "We review and explain every variation request, so you understand the cost and the reason for it.",
  },
  {
    icon: Clock,
    title: "Save time and stress",
    description:
      "One point of contact instead of juggling multiple builders, advisers and paperwork.",
  },
  {
    icon: MapPin,
    title: "Free, local NZ expertise",
    description:
      "Our service costs nothing, and we know how new builds work on the ground in New Zealand.",
  },
];

export function Benefits() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Buildify"
          title="A trusted advocate for every step of your build"
          description="From your first enquiry to the final code of compliance, Buildify works on your behalf — not the builder's."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="relative border border-stone/20 bg-paper p-8"
            >
              <CornerMarks tone="stone" />
              <benefit.icon className="h-6 w-6 text-clay" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 text-lg text-ink">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
