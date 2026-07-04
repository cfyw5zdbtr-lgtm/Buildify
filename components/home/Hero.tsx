import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CornerMarks } from "@/components/ui/CornerMarks";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />

      <Container className="relative grid gap-16 py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-28">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-clay-light">
            Your New Build Broker
          </p>
          <h1 className="text-4xl leading-[1.15] text-paper sm:text-5xl lg:text-[3.25rem]">
            Compare builders. Protect your budget. Build with confidence.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-stone sm:text-lg">
            Building a new home is one of the biggest decisions you&apos;ll make. Buildify
            reviews tenders, contracts and pricing on your behalf — completely free for
            homeowners and investors across New Zealand.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Book a Free Consultation
            </Button>
            <Button href="/contact#eoi" variant="secondary">
              Submit an Expression of Interest
            </Button>
          </div>
        </div>

        {/* Signature visual: a real tender comparison, the core of what Buildify does */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative rounded-sm border border-stone/25 bg-ink-soft p-6 sm:p-8">
            <CornerMarks />
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-stone">
              Tender Comparison · Hamilton, 4 bed
            </p>

            <div className="mt-6 divide-y divide-stone/10">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-display text-lg text-paper">Builder A</p>
                  <p className="text-xs text-stone">220m² · standard spec</p>
                </div>
                <p className="font-display text-lg text-paper">$612,000</p>
              </div>

              <div className="-mx-3 my-1 flex items-center justify-between rounded-sm bg-clay/10 px-3 py-3">
                <div>
                  <p className="flex items-center gap-2 font-display text-lg text-paper">
                    Builder B
                    <span className="rounded-sm bg-clay px-2 py-0.5 text-[10px] font-sans font-semibold uppercase tracking-wider text-paper">
                      Recommended
                    </span>
                  </p>
                  <p className="text-xs text-stone">220m² · upgraded spec</p>
                </div>
                <p className="font-display text-lg text-clay-light">$579,000</p>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-display text-lg text-paper">Builder C</p>
                  <p className="text-xs text-stone">215m² · standard spec</p>
                </div>
                <p className="font-display text-lg text-paper">$648,000</p>
              </div>
            </div>

            <p className="mt-6 border-t border-stone/10 pt-4 text-xs leading-relaxed text-stone">
              Buildify reviewed three tenders for the same brief — identifying $69,000 in
              potential savings and flagging two contract clauses for negotiation.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
