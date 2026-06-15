"use client";

import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { CtaLink } from "./cta-button";
import { siteConfig } from "@/lib/site";

export function Cta() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-20 overflow-hidden bg-ink py-24 text-white sm:py-32"
    >
      {/* Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 size-[34rem] -translate-x-1/2 rounded-full bg-brand opacity-30 blur-[120px] animate-aurora" />
        <div className="absolute right-1/4 bottom-0 size-[30rem] rounded-full bg-brand-2 opacity-25 blur-[120px] animate-aurora [animation-delay:-8s]" />
        <div className="absolute inset-0 bg-grid opacity-10 mask-fade-y" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Prêt à donner une seconde vie à vos congrès ?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-white/70">
            Réservez une démo de 20 minutes. On vous montre, sur l'une de vos
            propres sessions, ce qu'AgoraLive peut produire — sans engagement.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink href={`mailto:${siteConfig.email}`} variant="light" size="lg">
              Demander une démo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </CtaLink>
            <CtaLink
              href={`mailto:${siteConfig.email}`}
              variant="glass"
              size="lg"
            >
              <Mail className="size-4" />
              {siteConfig.email}
            </CtaLink>
          </div>

          <p className="mt-6 text-sm text-white/45">
            Démo personnalisée · Réponse sous 24 h · Conçu pour les sociétés
            savantes
          </p>
        </Reveal>
      </div>
    </section>
  );
}
