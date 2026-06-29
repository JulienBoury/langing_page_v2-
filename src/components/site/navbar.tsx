"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { useScrollSpy } from "@/lib/use-scroll-spy";
import { useT } from "@/lib/i18n";
import { Logo } from "./logo";
import { CtaLink } from "./cta-button";
import { LangToggle } from "./lang-toggle";

export function Navbar() {
  const t = useT();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll-spy : ids des sections internes (on ignore les liens externes).
  const spyIds = useMemo(
    () =>
      siteConfig.nav
        .filter((i) => i.href.startsWith("#"))
        .map((i) => i.href.slice(1)),
    []
  );
  const activeId = useScrollSpy(spyIds);

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

  // Barre toujours claire (texte navy) ; au sommet elle est translucide, au
  // scroll (ou menu ouvert) elle passe en blanc givré plus opaque + ombre fine
  // pour se détacher du contenu.
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border bg-white/80 shadow-sm shadow-foreground/5 backdrop-blur-xl"
          : "border-b border-border/40 bg-white/40 backdrop-blur-md"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-foreground transition-colors"
          aria-label={t.a11y.home}
        >
          <Logo />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const isActive = item.href === `#${activeId}`;
            return (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong",
                  isActive
                    ? "text-foreground"
                    : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                )}
              >
                {t.nav[item.key]}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-brand-strong"
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 34 }
                    }
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <LangToggle />
          <CtaLink
            href={siteConfig.cta.primary.href}
            size="md"
            className="shadow-md"
          >
            {t.actions.requestQuote}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </CtaLink>
        </div>

        {/* Mobile : bascule de langue + ouverture du menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-foreground/5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile panel — `inert` quand fermé : retiré de l'ordre de tabulation
          et de l'arbre d'accessibilité (sinon liens focalisables hors écran). */}
      <div
        inert={!open}
        className={cn(
          "lg:hidden overflow-hidden border-t border-border bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {siteConfig.nav.map((item) => {
            const isActive = item.href === `#${activeId}`;
            return (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong",
                  isActive
                    ? "bg-brand/10 text-brand-strong"
                    : "text-foreground hover:bg-foreground/5"
                )}
              >
                {t.nav[item.key]}
              </a>
            );
          })}
          <CtaLink
            href={siteConfig.cta.primary.href}
            size="lg"
            onClick={() => setOpen(false)}
            className="mt-2 w-full"
          >
            {t.actions.requestQuote}
            <ArrowRight className="size-4" />
          </CtaLink>
        </div>
      </div>
    </header>
  );
}
