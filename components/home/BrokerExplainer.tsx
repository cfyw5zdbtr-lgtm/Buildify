import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrokerExplainer() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-20">
        <SectionHeading eyebrow="What we do" title="What is a new build broker?" />
        <div className="space-y-6 text-base leading-relaxed text-slate sm:text-lg">
          <p>
            You wouldn&apos;t take the first mortgage offer without comparing your options —
            so why take the first builder&apos;s quote?
          </p>
          <p>
            A new build broker works the way a mortgage broker does. Instead of comparing
            home loans, we compare builders: their pricing, their contracts, their
            reputation, and the value they offer for your budget. We sit on your side of
            the table, not the builder&apos;s.
          </p>
          <p>
            Buildify is completely independent and free for homeowners and investors.
            We&apos;re backed by our builder and industry partners, so you get expert
            guidance without paying for it.
          </p>
        </div>
      </Container>
    </section>
  );
}
