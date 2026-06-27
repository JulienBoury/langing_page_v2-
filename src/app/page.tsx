import { Hero } from "@/components/site/hero";
import { TrustedBy } from "@/components/site/trusted-by";
import { Features } from "@/components/site/features";
import { HowItWorks } from "@/components/site/how-it-works";
import { Sponsors } from "@/components/site/sponsors";
import { Stats } from "@/components/site/stats";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Features />
      <Stats />
      <Sponsors />
      <Faq />
      <Cta />
    </>
  );
}
