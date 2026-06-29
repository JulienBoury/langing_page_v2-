import { Activity } from "lucide-react";

// Congrès & partenaires ayant déjà valorisé leurs contenus avec AgoraLive.
const partners = [
  "Top Ortho",
  "OrthoPlus",
  "Dental Monitoring",
  "SFODF",
  "SFOPA",
];

// Défilement infini sans couture : l'animation translate de -50%, donc la
// première moitié de la piste doit dépasser la largeur de l'écran. On répète
// donc la liste assez de fois pour remplir le viewport quelle que soit sa taille.
const marqueeItems = [...partners, ...partners, ...partners, ...partners];

export function TrustedBy() {
  return (
    <section className="border-b border-border/60 bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Ils valorisent déjà les contenus de leurs congrès avec AgoraLive
        </p>

        <div className="relative mt-8 overflow-hidden mask-fade-x">
          <div className="flex w-max items-center gap-12 motion-safe:animate-marquee-slow hover:[animation-play-state:paused]">
            {marqueeItems.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Activity className="size-5" />
                <span className="whitespace-nowrap font-heading text-lg font-semibold tracking-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
