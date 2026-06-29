"use client";

import { useEffect, useState } from "react";

// Bande de détection : du haut (TOP) au bas du viewport, exprimée en fractions.
// rootMargin "-25% 0px -55% 0px" → bande de 25 % à 45 % de la hauteur.
const BAND_TOP = 0.25;
const ROOT_MARGIN = "-25% 0px -55% 0px";

/**
 * Renvoie l'id de la section actuellement « active » au scroll, parmi `ids`.
 * Une section est active quand elle traverse une fine bande horizontale située
 * au tiers supérieur du viewport. Basé sur IntersectionObserver (observe la mise
 * en page, pas la position de scroll) → robuste au smooth-scroll (Lenis).
 *
 * - Au-dessus de la 1re section (haut de page) : aucun lien actif (`null`).
 * - Sous la dernière section (bas de page) : on garde la dernière active.
 * - On recalcule depuis l'ensemble COMPLET des sections croisant la bande (pas
 *   seulement les entrées modifiées du callback) → « la plus haute » fiable.
 */
export function useScrollSpy(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  // Clé stable pour les deps (un littéral de tableau change à chaque rendu).
  const key = ids.join(",");

  useEffect(() => {
    const elements = (key ? key.split(",") : [])
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    // État d'intersection courant de CHAQUE section (id → dans la bande ?).
    const inBand = new Map<string, boolean>();

    const recompute = () => {
      const hits = elements
        .filter((el) => inBand.get(el.id))
        .sort(
          (a, b) =>
            a.getBoundingClientRect().top - b.getBoundingClientRect().top
        );

      if (hits.length > 0) {
        setActiveId(hits[0].id); // section la plus haute dans la bande
        return;
      }
      // Aucune section dans la bande : au-dessus de la 1re → rien d'actif ;
      // sous la dernière → on garde la dernière section active.
      const bandTopPx = window.innerHeight * BAND_TOP;
      const firstAboveBand = elements[0].getBoundingClientRect().top > bandTopPx;
      setActiveId(firstAboveBand ? null : elements[elements.length - 1].id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => inBand.set(e.target.id, e.isIntersecting));
        recompute();
      },
      { rootMargin: ROOT_MARGIN, threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
