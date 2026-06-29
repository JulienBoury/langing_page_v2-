"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { Logo } from "./logo";
import { CtaLink } from "./cta-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Verrouille le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Hero clair : au sommet la barre est transparente et le logo/liens passent
  // en navy ; au scroll (ou menu ouvert) la barre devient navy glassy → blanc.
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "border-b border-border/40 bg-white/40 backdrop-blur-md"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className={cn(
            "transition-colors",
            solid ? "text-white" : "text-foreground"
          )}
          aria-label="AgoraLive — accueil"
        >
          <Logo />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                solid
                  ? "text-white hover:bg-white/10"
                  : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <CtaLink
            href={siteConfig.cta.primary.href}
            size="md"
            className="shadow-md"
          >
            {siteConfig.cta.primary.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </CtaLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-lg transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 lg:hidden",
            solid
              ? "text-white hover:bg-white/10"
              : "text-foreground hover:bg-foreground/5"
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
          <CtaLink
            href={siteConfig.cta.primary.href}
            size="lg"
            onClick={() => setOpen(false)}
            className="mt-2 w-full"
          >
            {siteConfig.cta.primary.label}
            <ArrowRight className="size-4" />
          </CtaLink>
        </div>
      </div>
    </header>
  );
}
