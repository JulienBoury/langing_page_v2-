"use client";

import { useT } from "@/lib/i18n";

/** Lien d'évitement (accessibilité) — visible au focus clavier uniquement. */
export function SkipLink() {
  const t = useT();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-strong"
    >
      {t.a11y.skipToContent}
    </a>
  );
}
