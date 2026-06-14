import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS, LEGAL_LINKS, REGION_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-stone">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="font-display text-2xl text-paper">
            Buildify<span className="text-clay">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Your new build broker. Independent guidance comparing builders, contracts and
            pricing — free for homeowners and investors across New Zealand.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-paper">Buildify</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-paper">
            New builds by region
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {REGION_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-paper">
            Get in touch
          </h3>
          <p className="mt-4 text-sm">Waikato, New Zealand</p>
          <p className="mt-2 text-sm">hello@buildify.co.nz</p>
          <Link
            href="/contact"
            className="mt-4 inline-block text-sm font-medium text-clay transition-colors hover:text-clay-light"
          >
            Submit an enquiry →
          </Link>
        </div>
      </Container>

      <div className="border-t border-stone/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-stone/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Buildify. All rights reserved.</p>
          <div className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-paper">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
