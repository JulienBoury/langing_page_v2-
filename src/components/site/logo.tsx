import { cn } from "@/lib/utils";

/**
 * Logo AgoraLive (placeholder).
 * Le pictogramme suit automatiquement les couleurs de marque (--brand*).
 * 👉 Remplace ce composant par ton vrai logo quand il est prêt
 *    (ex: <img src="/logo.svg" .../> ou un SVG exporté).
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
      <LogoMark className="h-8 w-8 shrink-0" />
      {withWordmark && (
        <span className="font-heading text-[1.35rem] font-bold leading-none tracking-tight">
          Agora<span className="text-gradient">Live</span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="agl-mark" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--brand)" />
          <stop offset="0.55" stopColor="var(--brand-2)" />
          <stop offset="1" stopColor="var(--brand-accent)" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="36" height="36" rx="11" fill="url(#agl-mark)" />
      {/* point "live" + ondes de diffusion */}
      <circle cx="15" cy="20" r="3.2" fill="white" />
      <path
        d="M22 13.5a9 9 0 0 1 0 13"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.95"
      />
      <path
        d="M26.5 10a14 14 0 0 1 0 20"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
