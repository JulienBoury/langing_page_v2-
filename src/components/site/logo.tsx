import { cn } from "@/lib/utils";

/**
 * Logo AgoraLive — recréation vectorielle fidèle au logo officiel.
 * - Pictogramme : 3 barres (teal / navy / gris), façon equalizer.
 * - Wordmark : « Agora » (couleur du texte courant) + « Live » (teal).
 * La barre du milieu et « Agora » suivent `currentColor` → s'adaptent
 * automatiquement au fond (navy sur clair, blanc sur sombre).
 *
 * 👉 Pour le fichier officiel exact : dépose ton SVG dans /public et
 *    remplace ce composant par <img src="/logo-agoralive.svg" .../>.
 */
export function Logo({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-7 w-auto shrink-0" />
      {withWordmark && (
        <span className="font-heading text-[1.4rem] font-bold leading-none tracking-tight">
          Agora<span className="text-brand">Live</span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 34 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* barre gauche — teal */}
      <rect x="1.5" y="14" width="7" height="22" rx="3.5" fill="var(--brand)" />
      {/* barre centrale — navy / adaptative */}
      <rect x="13" y="4" width="7" height="32" rx="3.5" fill="currentColor" />
      {/* barre droite — gris */}
      <rect x="24.5" y="10" width="7" height="26" rx="3.5" fill="#9aa6b2" />
    </svg>
  );
}
