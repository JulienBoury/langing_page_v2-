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
import { Eyebrow } from "./eyebrow";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Camera,
    title: "Captation clé en main",
    description:
      "Notre équipe se déplace sur votre congrès et capte les sessions. Vous ne préparez rien : on s'occupe de tout, de bout en bout.",
  },
  {
    icon: Wand2,
    title: "Rédaction scientifique assistée",
    description:
      "Notre moteur transforme la captation en article structuré, relu par nos équipes.",
  },
  {
    icon: ShieldCheck,
    title: "Vérifié par la littérature",
    description:
      "Chaque affirmation clé est croisée avec la littérature (PubMed) et accompagnée de ses références cliquables. La rigueur scientifique, par défaut.",
  },
  {
    icon: MousePointerClick,
    title: "Articles web interactifs",
    description:
      "Photos et diapositives clés des intervenants, et des quiz en lien avec l'article pour ancrer les connaissances. Loin du PDF figé que personne n'ouvre.",
  },
  {
    icon: Headphones,
    title: "Audio & multilingue",
    description:
      "Chaque article est aussi publié en version audio et traduit dans toutes les langues, pour une audience plus large, partout.",
  },
  {
    icon: BarChart3,
    title: "Diffusion & audience mesurée",
    description:
      "Optimisés pour le SEO et le partage, vos articles touchent votre communauté. Et vous savez précisément qui lit, quoi, et combien de temps.",
  },
];

export function Features() {
  return (
    <section id="congres" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Pour les congrès & sociétés savantes</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Le savoir de vos congrès ne devrait pas s'arrêter à la dernière
            diapo.
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            AgoraLive prolonge la vie de vos conférences et en fait un capital
            scientifique durable pour votre communauté.
          </p>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <FeatureCard {...feature} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }: Feature) {
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
