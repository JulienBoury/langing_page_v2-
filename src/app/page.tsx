import { Hero } from "@/components/site/hero";
import { TrustedBy } from "@/components/site/trusted-by";
import { Features } from "@/components/site/features";
import { HowItWorks } from "@/components/site/how-it-works";
import { Sponsors } from "@/components/site/sponsors";
import { Stats } from "@/components/site/stats";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { SectionSeam } from "@/components/site/section-seam";

/**
 * Cadence des surfaces (rythme clair → teinté → sombre pour éviter la page plate) :
 *   Hero ............ clair (aurora)
 *   TrustedBy ....... clair (bande encadrée, mur de logos)
 *   HowItWorks ...... teinté (surface-soft)
 *   Features ........ clair
 *   Stats ........... SOMBRE (bg-ink, aurora)
 *   Sponsors ........ teinté (surface-soft)
 *   Faq ............. clair
 *   Cta ............. SOMBRE (bg-ink, aurora)
 * Les coutures (SectionSeam) ponctuent les frontières claires/teintées ;
 * sur les frontières sombres, c'est le changement de couleur qui fait la coupure.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <SectionSeam />
      <Features />
      <Stats />
      <Sponsors />
      <SectionSeam />
      <Faq />
      <Cta />
    </>
  );
}
