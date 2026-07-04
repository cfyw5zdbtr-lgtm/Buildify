import { BedDouble, Bath, SquareDot } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CornerMarks } from "@/components/ui/CornerMarks";

// Placeholder opportunities from Buildify's builder network.
// Replace with live data from the listings database once builder
// partners are onboarded — see the listings schema in /lib.
const FEATURED_BUILDS = [
  {
    title: "Riverside Terrace",
    location: "Cambridge, Waikato",
    price: "From $789,000",
    beds: 4,
    baths: 2,
    area: "210m²",
  },
  {
    title: "Peacockes Landing",
    location: "Hamilton, Waikato",
    price: "From $649,000",
    beds: 3,
    baths: 2,
    area: "165m²",
  },
  {
    title: "Rototuna Heights",
    location: "Hamilton, Waikato",
    price: "From $899,000",
    beds: 5,
    baths: 3,
    area: "260m²",
  },
];

export function FeaturedBuilds() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Find new builds"
            title="Featured opportunities from our builder network"
            description="A selection of new build opportunities currently available through Buildify's vetted builder partners."
          />
          <Button href="/new-builds" variant="ghost" className="shrink-0">
            View all new builds
          </Button>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_BUILDS.map((listing) => (
            <article key={listing.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden border border-stone/20 bg-mist">
                <CornerMarks tone="stone" />
                <div className="flex h-full items-center justify-center">
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-stone">
                    Image coming soon
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-lg text-ink">{listing.title}</h3>
                <p className="mt-1 text-sm text-stone-dark">{listing.location}</p>

                <div className="mt-4 flex items-center gap-5 text-sm text-slate">
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4 text-clay" strokeWidth={1.5} />
                    {listing.beds}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4 text-clay" strokeWidth={1.5} />
                    {listing.baths}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <SquareDot className="h-4 w-4 text-clay" strokeWidth={1.5} />
                    {listing.area}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="font-display text-lg text-ink">{listing.price}</p>
                  <Button href="/contact" variant="ghost" className="px-4 py-2 text-xs">
                    Enquire via Buildify
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
