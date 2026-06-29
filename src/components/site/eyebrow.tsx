import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BarsIcon } from "./logo";

/**
 * Sur-titre de section, préfixé du motif AgoraLive (3 barres / égaliseur).
 * Standardise les eyebrows et installe le motif récurrent sur toute la page.
 */
export function Eyebrow({
  children,
  align = "center",
  className,
}: {
  children: ReactNode;
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-strong",
        align === "center" ? "justify-center" : "justify-start",
        className
      )}
    >
      <BarsIcon className="h-3.5 w-auto" />
      {children}
    </p>
  );
}
