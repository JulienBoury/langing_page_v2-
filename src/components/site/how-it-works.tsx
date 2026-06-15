"use client";

import { Upload, FileSearch, CheckCircle2, Rocket, type LucideIcon } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

type Step = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: Upload,
    step: "01",
    title: "Vous transmettez",
    description:
      "L'enregistrement de la conférence nous suffit. Audio ou vidéo, en présentiel ou en distanciel.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "On rédige & on vérifie",
    description:
      "Notre moteur rédige l'article, croise chaque source avec la littérature et applique votre charte graphique.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Vous validez",
    description:
      "L'intervenant relit et valide en un clic. Vous gardez le contrôle éditorial du premier au dernier mot.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "On publie & on diffuse",
    description:
      "L'article part en ligne, est diffusé à votre communauté, et son audience est mesurée en temps réel.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="process"
      className="relative scroll-mt-20 overflow-hidden bg-muted/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Comment ça marche
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            De la scène à l'article publié, en 4 étapes.
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            Un processus clé en main. Vous restez concentrés sur votre congrès,
            on s'occupe de transformer son contenu en or éditorial.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Ligne de liaison (desktop) */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block" />

          <StaggerGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="relative flex flex-col items-start">
                  <div className="relative z-10 inline-flex size-24 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                    <s.icon className="size-9 text-brand" />
                    <span className="absolute -right-2 -top-2 inline-flex size-7 items-center justify-center rounded-full bg-brand-gradient font-mono text-xs font-bold text-white shadow-md">
                      {s.step}
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
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
