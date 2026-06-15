import { Hero } from "@/components/site/hero";
import { TrustedBy } from "@/components/site/trusted-by";
import { Features } from "@/components/site/features";
import { HowItWorks } from "@/components/site/how-it-works";
import { Showcase } from "@/components/site/showcase";
import { Sponsors } from "@/components/site/sponsors";
import { Stats } from "@/components/site/stats";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Showcase />
      <Sponsors />
      <Stats />
      <Faq />
      <Cta />
    </>
  );
}
