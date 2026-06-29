import { cn } from "@/lib/utils";

/**
 * Champ « aurora » — signature visuelle AgoraLive.
 * Deux halos teal déphasés (animate-aurora) + une grille masquée sur les sections
 * claires. L'animation CSS est gardée par `motion-safe:` → respecte reduced-motion.
 *
 * - `variant="light"` : sections sur fond clair (hero) — teal très discret pour
 *   ne jamais casser le contraste AA du texte (opacité ≤ 0.16).
 * - `variant="dark"`  : sections `bg-ink` (stats, cta) — le teal vif devient enfin
 *   de la lumière sur le fond sombre, en remplacement des anciens halos gris.
 *
 * À placer en premier enfant d'une section `relative isolate overflow-hidden`.
 */
export function Aurora({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const dark = variant === "dark";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute rounded-full motion-safe:animate-aurora",
          dark
            ? "-left-40 -top-40 size-[42rem] bg-brand opacity-[0.16] blur-[120px]"
            : "-left-56 -top-72 size-[34rem] bg-brand-gradient opacity-[0.05] blur-[140px]"
        )}
      />
      <div
        className={cn(
          "absolute rounded-full motion-safe:animate-aurora [animation-delay:-9s]",
          dark
            ? "-right-32 top-8 size-[34rem] bg-brand-2 opacity-[0.13] blur-[130px]"
            : "-right-64 top-16 size-[30rem] bg-brand opacity-[0.04] blur-[150px]"
        )}
      />
      {/* Grille fine — uniquement sur fond clair (les lignes navy disparaissent sur sombre). */}
      {!dark && <div className="absolute inset-0 bg-grid mask-fade-y opacity-40" />}
    </div>
  );
}
