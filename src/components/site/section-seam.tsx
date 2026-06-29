import { cn } from "@/lib/utils";
import { BarsIcon } from "./logo";

/**
 * Couture de section — fin filet dégradé centré sur le motif « barres » AgoraLive.
 * Marque proprement la transition entre deux sections claires/teintées, et
 * réinstalle la signature visuelle (l'égaliseur) comme ponctuation de page.
 *
 * À placer ENTRE deux sections dans la page. Réservé aux frontières claires :
 * pour les sections sombres (bg-ink), c'est le changement de couleur lui-même
 * qui fait la couture.
 */
export function SectionSeam({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("relative", className)}>
      <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
        <BarsIcon className="mx-3 h-2.5 w-auto text-brand-strong/40" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
      </div>
    </div>
  );
}
