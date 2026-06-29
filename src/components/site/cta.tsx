"use client";

import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useT } from "@/lib/i18n";
import { Aurora } from "./aurora";
import { CtaLink } from "./cta-button";
import { siteConfig } from "@/lib/site";

export function Cta() {
  const t = useT();
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-20 overflow-hidden bg-ink py-24 text-white sm:py-32"
    >
      <Aurora variant="dark" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.cta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-white/70">
            {t.cta.subhead}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink href={`mailto:${siteConfig.email}`} variant="light" size="lg">
              {t.actions.requestQuote}
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

          <p className="mt-6 text-sm text-white/65">{t.cta.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
