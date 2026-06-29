"use client";

import {
  Camera,
  Wand2,
  ShieldCheck,
  MousePointerClick,
  Headphones,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { useT } from "@/lib/i18n";
import { Eyebrow } from "./eyebrow";

// Icônes des fonctionnalités (le texte vient du dictionnaire i18n, par index).
const featureIcons: LucideIcon[] = [
  Camera,
  Wand2,
  ShieldCheck,
  MousePointerClick,
  Headphones,
  BarChart3,
];

export function Features() {
  const t = useT();
  return (
    <section id="congres" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{t.features.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.features.heading}
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            {t.features.subhead}
          </p>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((feature, i) => (
            <StaggerItem key={i}>
              <FeatureCard
                icon={featureIcons[i]}
                title={feature.title}
                description={feature.description}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5">
      <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-brand-gray opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10" />
      <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-brand/25 transition-transform group-hover:scale-105">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
