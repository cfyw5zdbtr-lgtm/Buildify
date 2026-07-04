import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const INVESTOR_POINTS = [
  {
    title: "Yield-focused options",
    description:
      "Access new build opportunities selected with rental yield and tenant demand in mind.",
  },
  {
    title: "Built for growth",
    description:
      "Locations and property types chosen with long-term capital growth in mind.",
  },
  {
    title: "A simpler path in",
    description:
      "One broker managing comparison, contracts and communication — so your next investment is less hassle.",
  },
];

export function InvestorTeaser() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start lg:gap-20">
          <SectionHeading
            eyebrow="For investors"
            title="Smarter new build investment, without the legwork"
            description="Whether it's your first rental property or your fifth, Buildify gives you independent comparison and local market knowledge — at no cost."
          />

          <div>
            <div className="grid gap-6 sm:grid-cols-3">
              {INVESTOR_POINTS.map((point) => (
                <div key={point.title} className="border-t border-clay pt-4">
                  <h3 className="text-base text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/investors" variant="ghost">
                Learn more for investors
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
