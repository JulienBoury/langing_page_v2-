import { cn } from "@/lib/utils";

/**
 * Logo officiel AgoraLive (SVG fourni — variante blanc/cyan pour fonds sombres).
 * Les parties blanches (barre centrale + « Agora ») suivent `currentColor` :
 * mets `text-white` sur fond sombre, `text-foreground` (navy) sur fond clair.
 * Le gris (#95a3a5) et le teal (#24ebc3) sont fixes, fidèles à la charte.
 *
 * Fichier brut disponible dans /public/agoralive-logo.svg
 */

/** Pictogramme — 3 barres (source unique, partagée par Logo et LogoMark). */
function Bars() {
  return (
    <>
      <rect x="671.39" y="206.67" width="158.34" height="731.15" rx="50.19" ry="50.19" fill="#95a3a5" />
      <rect x="415.6" y="114.21" width="158.34" height="823.6" rx="50.19" ry="50.19" fill="currentColor" />
      <rect x="159.89" y="313.19" width="158.34" height="624.7" rx="50.19" ry="50.19" fill="#24ebc3" />
    </>
  );
}

export function Logo({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  if (!withWordmark) return <LogoMark className={className} />;

  return (
    <svg
      viewBox="0 0 4662.39 1193.27"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block h-7 w-auto", className)}
      role="img"
      aria-label="AgoraLive"
    >
      <Bars />

      {/* « Agora » — suit currentColor */}
      <path fill="currentColor" d="M1380.04,831.79h-229.98l-43.87,106.1h-117.42l220.07-534.49h113.2l222.18,534.49h-120.3l-43.87-106.1ZM1343.97,744.75l-77.48-230.97-79.59,230.97h157.07Z" />
      <path fill="currentColor" d="M1939,557.23v316.95c0,141.53-76.43,206.57-213.67,206.57-72.14,0-142.24-17.72-186.81-52.38l43.87-79.24c32.55,26.16,85.64,43.17,134.43,43.17,77.83,0,111.79-35.37,111.79-103.99v-16.24c-29.04,31.85-70.73,47.39-120.3,47.39-105.39,0-190.33-72.91-190.33-183.93s84.93-183.93,190.33-183.93c53.08,0,96.96,17.72,125.92,54.49v-48.79h104.69l.07-.07ZM1830.02,735.54c0-55.9-41.76-93.37-99.77-93.37s-100.47,37.47-100.47,93.37,42.47,93.37,100.47,93.37,99.77-37.47,99.77-93.37Z" />
      <path fill="currentColor" d="M1975.07,747.56c0-114.6,88.45-196.02,209.45-196.02s208.75,81.35,208.75,196.02-87.75,196.02-208.75,196.02-209.45-81.35-209.45-196.02ZM2281.41,747.56c0-65.81-41.76-105.39-96.96-105.39s-97.66,39.65-97.66,105.39,42.47,105.39,97.66,105.39,96.96-39.65,96.96-105.39Z" />
      <path fill="currentColor" d="M2664.88,551.61v101.88c-9.21-.7-16.24-1.41-24.75-1.41-60.82,0-101.18,33.26-101.18,106.1v179.71h-110.39v-380.66h105.39v50.2c26.86-36.77,72.14-55.9,130.92-55.9v.07Z" />
      <path fill="currentColor" d="M3027.18,720.7v217.19h-103.28v-47.39c-20.53,34.66-60.11,53.08-116.01,53.08-89.15,0-142.24-49.5-142.24-115.31s47.39-113.9,163.47-113.9h87.75c0-47.39-28.26-75.02-87.75-75.02-40.36,0-82.05,13.43-109.68,35.37l-39.58-77.13c41.76-29.74,103.28-45.98,164.17-45.98,116.01,0,183.23,53.79,183.23,169.09h-.07ZM2916.8,817.59v-38.88h-75.72c-51.68,0-67.92,19.12-67.92,44.58,0,27.56,23.34,45.98,62.29,45.98,36.77,0,68.62-17.01,81.35-51.68Z" />

      {/* « Live » — teal */}
      <path fill="#24ebc3" d="M3096.51,403.39h114.6v441.05h248.33v93.37h-362.94V403.39Z" />
      <rect fill="#24ebc3" x="3501.28" y="557.23" width="110.39" height="380.66" />
      <rect fill="#24ebc3" x="3501.28" y="403.39" width="110.39" height="110.39" rx="35.63" ry="35.63" />
      <path fill="#24ebc3" d="M4100.12,551.92l-165.12,391.34h-117.11l-164.39-391.34h117.11l108.38,266.23,112.02-266.23h109.11Z" />
      <path fill="#24ebc3" d="M4478.14,775.33h-283.2c10.44,46.62,50.1,75.15,107.16,75.15,39.66,0,68.19-11.83,93.94-36.18l57.75,62.62c-34.79,39.66-86.98,60.54-154.47,60.54-129.42,0-213.62-81.41-213.62-192.74s85.59-192.74,199.7-192.74,194.83,73.76,194.83,194.14c0,8.35-1.39,20.18-2.09,29.22ZM4193.54,712.01h184.39c-7.65-47.32-43.14-77.93-91.85-77.93s-84.89,29.92-92.54,77.93Z" />
    </svg>
  );
}

/** Pictogramme seul (3 barres). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="130 90 730 880"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block h-8 w-auto", className)}
      role="img"
      aria-label="AgoraLive"
    >
      <Bars />
    </svg>
  );
}
