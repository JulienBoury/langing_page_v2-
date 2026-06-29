"use client";

import Image, { type StaticImageData } from "next/image";
import { useT } from "@/lib/i18n";
import orthoplus from "../../../public/logos/orthoplus.png";
import dentalMonitoring from "../../../public/logos/dental-monitoring.png";
import sfodf from "../../../public/logos/sfodf.png";
import gc from "../../../public/logos/gc.png";

// Congrès & partenaires ayant déjà valorisé leurs contenus avec AgoraLive.
//  • image = logo officiel, en COULEURS D'ORIGINE
//  • text  = wordmark de secours tant qu'on n'a pas le fichier logo officiel
// `heightClass` est dosé par logo (ratios très différents) pour un équilibre optique.
type Partner =
  | { name: string; kind: "image"; src: StaticImageData; heightClass: string }
  | { name: string; kind: "text" };

const partners: Partner[] = [
  { name: "OrthoPlus", kind: "image", src: orthoplus, heightClass: "h-9" },
  {
    name: "Dental Monitoring",
    kind: "image",
    src: dentalMonitoring,
    heightClass: "h-[1.4rem]",
  },
  { name: "SFODF", kind: "image", src: sfodf, heightClass: "h-11" },
  { name: "GC", kind: "image", src: gc, heightClass: "h-7" },
  { name: "SFOPA", kind: "text" },
];

/**
 * Un groupe = la liste répétée assez de fois pour dépasser la largeur de
 * l'écran. La piste contient 2 groupes identiques et l'animation translate de
 * -50 % → boucle infinie sans couture (le `pr` final = l'espace entre groupes).
 */
function LogoGroup() {
  return (
    <ul className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
      {Array.from({ length: 4 }).flatMap((_, rep) =>
        partners.map((p, i) => (
          <li key={`${rep}-${i}`} className="flex items-center">
            {p.kind === "image" ? (
              <Image src={p.src} alt="" className={`${p.heightClass} w-auto`} />
            ) : (
              <span className="whitespace-nowrap font-heading text-xl font-semibold tracking-tight text-foreground">
                {p.name}
              </span>
            )}
          </li>
        ))
      )}
    </ul>
  );
}

export function TrustedBy() {
  const t = useT();
  return (
    <section className="border-y border-border/60 bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground">
          {t.trustedBy.heading}
        </p>
      </div>

      {/* Noms des partenaires pour les lecteurs d'écran (le marquee est décoratif). */}
      <ul className="sr-only">
        {partners.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="relative mt-10 overflow-hidden mask-fade-x"
      >
        <div className="flex w-max motion-safe:animate-marquee-slow hover:[animation-play-state:paused]">
          <LogoGroup />
          <LogoGroup />
        </div>
      </div>
    </section>
  );
}
