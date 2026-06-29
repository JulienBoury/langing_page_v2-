"use client";

import { useLanguage } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LANGS: Lang[] = ["fr", "en"];

/**
 * Bascule FR / EN. Segmenté, mis aux couleurs de la barre :
 * `solid` = barre sombre (au scroll / menu mobile), sinon barre claire au sommet.
 */
export function LangToggle({
  solid = false,
  className,
}: {
  solid?: boolean;
  className?: string;
}) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.a11y.languageSwitcher}
      className={cn(
        "inline-flex items-center rounded-full p-0.5",
        solid ? "bg-white/10" : "bg-foreground/[0.06]",
        className
      )}
    >
      {LANGS.map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            lang={l}
            className={cn(
              "inline-flex h-8 min-w-9 items-center justify-center rounded-full px-2.5 text-xs font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60",
              active
                ? "bg-brand text-ink shadow-sm"
                : solid
                  ? "text-white/70 hover:text-white"
                  : "text-foreground/55 hover:text-foreground"
            )}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
