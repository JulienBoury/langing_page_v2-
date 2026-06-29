import Image, { type StaticImageData } from "next/image";
import orthoplus from "../../../public/logos/orthoplus.png";
import dentalMonitoring from "../../../public/logos/dental-monitoring.png";

// Congrès & partenaires ayant déjà valorisé leurs contenus avec AgoraLive.
//  • image = logo officiel fourni (niveaux de gris au repos, couleur au survol)
//  • text  = wordmark de secours tant qu'on n'a pas le fichier logo officiel
// `heightClass` est dosé par logo pour un équilibre optique (les ratios diffèrent).
type Partner =
  | { name: string; kind: "image"; src: StaticImageData; heightClass: string }
  | { name: string; kind: "text" };

const partners: Partner[] = [
  { name: "Top Ortho", kind: "text" },
  { name: "OrthoPlus", kind: "image", src: orthoplus, heightClass: "h-10" },
  {
    name: "Dental Monitoring",
    kind: "image",
    src: dentalMonitoring,
    heightClass: "h-[1.45rem]",
  },
  { name: "SFODF", kind: "text" },
  { name: "SFOPA", kind: "text" },
];

const wordmark =
  "whitespace-nowrap font-heading text-xl font-semibold tracking-tight";

export function TrustedBy() {
  return (
    <section className="border-y border-border/60 bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Ils valorisent déjà les contenus de leurs congrès avec AgoraLive
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
          {partners.map((p) =>
            p.kind === "image" ? (
              <div key={p.name} className="group flex items-center">
                <Image
                  src={p.src}
                  alt={p.name}
                  className={`${p.heightClass} w-auto opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0`}
                />
              </div>
            ) : (
              <div key={p.name} className="flex items-center">
                <span
                  className={`${wordmark} select-none text-muted-foreground transition-colors duration-300 hover:text-foreground`}
                >
                  {p.name}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
