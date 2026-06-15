import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-[3.25rem] px-7 text-[0.95rem]",
} as const;

const variants = {
  primary:
    "bg-brand-gradient text-white shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5",
  outline:
    "border border-border bg-background/70 backdrop-blur text-foreground hover:bg-muted hover:-translate-y-0.5",
  light:
    "bg-white text-[oklch(0.2_0.02_280)] shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:shadow-xl",
  glass:
    "border border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:-translate-y-0.5",
  ghost: "text-foreground/80 hover:text-foreground hover:bg-muted/60",
} as const;

type CtaLinkProps = ComponentProps<"a"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

/** Bouton-lien dimensionné pour une landing (plus grand que le Button shadcn). */
export function CtaLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CtaLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
