"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone/15 bg-paper/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-tight text-ink">
          Buildify<span className="text-clay">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="ghost">
            Book a Free Consultation
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-stone/15 bg-paper lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-sm font-medium text-slate transition-colors hover:bg-mist hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="mt-3 w-full">
              Book a Free Consultation
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
