import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="bg-ink py-20 text-paper lg:py-28">
      <Container className="flex flex-col items-center text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-clay-light">
          Free for homeowners and investors
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
          Ready to build with confidence?
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
          Talk to Buildify today. There&apos;s no cost and no obligation — just clearer
          decisions for your new build.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Book a Free Consultation
          </Button>
          <Button href="/contact#eoi" variant="secondary">
            Submit an Expression of Interest
          </Button>
        </div>
      </Container>
    </section>
  );
}
