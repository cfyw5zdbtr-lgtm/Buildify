import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { BrokerExplainer } from "@/components/home/BrokerExplainer";
import { Benefits } from "@/components/home/Benefits";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedBuilds } from "@/components/home/FeaturedBuilds";
import { Testimonials } from "@/components/home/Testimonials";
import { InvestorTeaser } from "@/components/home/InvestorTeaser";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Buildify | New Build Broker NZ — Compare Builders & Protect Your Budget",
  description:
    "Buildify is New Zealand's independent new build broker. Compare builders, review contracts and tenders, and protect your budget — free for homeowners and investors.",
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Buildify",
  description:
    "Independent new build broker helping homeowners and investors compare builders, review contracts and tenders, and protect their budget across New Zealand.",
  slogan: "Your new build broker",
  areaServed: {
    "@type": "Country",
    name: "New Zealand",
  },
  url: "https://www.buildify.co.nz",
  priceRange: "Free for homeowners and investors",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
      <Hero />
      <BrokerExplainer />
      <Benefits />
      <HowItWorks />
      <FeaturedBuilds />
      <Testimonials />
      <InvestorTeaser />
      <FinalCta />
    </>
  );
}
