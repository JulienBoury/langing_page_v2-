"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Égaliseur audio animé — décline le motif des 3 barres du logo AgoraLive en
 * version « live ». Couleur via `currentColor` (mettre `text-white`, `text-brand`…).
 * Boucle gardée par `useReducedMotion` : barres figées si l'utilisateur préfère.
 */
export function Waveform({
  bars = 4,
  className,
}: {
  bars?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <span
      className={cn("inline-flex h-4 items-center gap-[2.5px]", className)}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="block w-[2.5px] rounded-full bg-current"
          style={{ height: "100%" }}
          initial={{ scaleY: 0.4 }}
          animate={reduce ? { scaleY: 0.6 } : { scaleY: [0.3, 1, 0.5, 0.9, 0.35] }}
          transition={
            reduce
              ? undefined
              : {
                  duration: 1.1 + (i % 3) * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.12,
                }
          }
        />
      ))}
    </span>
  );
}
