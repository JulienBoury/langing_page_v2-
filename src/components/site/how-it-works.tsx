"use client";

import { Camera, FileSearch, CheckCircle2, Rocket, type LucideIcon } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { useT } from "@/lib/i18n";
import { Eyebrow } from "./eyebrow";

// Icônes des 4 étapes (le texte vient du dictionnaire i18n, par index).
const stepIcons: LucideIcon[] = [Camera, FileSearch, CheckCircle2, Rocket];

export function HowItWorks() {
  const t = useT();
  return (
    <section
      id="process"
      className="surface-soft relative scroll-mt-20 overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{t.howItWorks.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.howItWorks.heading}
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            {t.howItWorks.subhead}
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Ligne de liaison (desktop) */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block" />

          <StaggerGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {t.howItWorks.steps.map((s, i) => {
              const Icon = stepIcons[i];
              const num = String(i + 1).padStart(2, "0");
              return (
                <StaggerItem key={i}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 inline-flex size-24 items-center justify-center rounded-2xl bg-brand shadow-md shadow-brand/25">
                      <Icon className="size-9 text-white" />
                      <span className="absolute -right-2 -top-2 inline-flex size-7 items-center justify-center rounded-full bg-white font-mono text-xs font-bold text-brand-strong ring-2 ring-inset ring-brand shadow-md">
                        {num}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
