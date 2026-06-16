"use client";

import Image from "next/image";
import {
  Headphones,
  Image as ImageIcon,
  BadgeCheck,
  ThumbsUp,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const highlights = [
  {
    icon: ImageIcon,
    title: "Photos & diapos clés",
    text: "Les visuels forts de l'intervention — photos et diapositives — intégrés au bon endroit.",
  },
  {
    icon: Headphones,
    title: "Quiz & version audio",
    text: "Des quiz liés à l'article pour ancrer les connaissances, et une version audio à écouter partout.",
  },
  {
    icon: BadgeCheck,
    title: "Références vérifiées",
    text: "Chaque source est cliquable et croisée avec la littérature.",
  },
];

/** Tags réels de l'article (magazine SFOPA 2026). */
const ARTICLE_TAGS = [
  "Orthodontie",
  "Aligneurs",
  "Télémédecine",
  "Intelligence artificielle",
  "Observance",
  "Suivi à distance",
];

export function Showcase() {
  return (
    <section
      id="showcase"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-24 text-white sm:py-32"
    >
      {/* fond */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 size-[34rem] rounded-full bg-brand opacity-20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 size-[30rem] rounded-full bg-brand-2 opacity-20 blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-10 mask-fade-y" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
            AgoraLive en action
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Voyez ce que reçoit votre communauté.
          </h2>
          <p className="mt-5 text-pretty text-lg text-white/65">
            Pas un compte-rendu de plus : une expérience de lecture moderne, où
            les visuels, l'audio et la science se rencontrent.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 w-full max-w-4xl">
          <ArticleCard />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
            >
              <h.icon className="size-5 text-brand-accent" />
              <h3 className="mt-3 font-semibold text-white">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                {h.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Carte d'article telle que la reçoit la communauté — reproduction fidèle de
 * l'article sponsorisé « DentalMonitoring » du magazine SFOPA 2026.
 */
function ArticleCard() {
  return (
    <article className="grid overflow-hidden rounded-3xl bg-white text-ink shadow-2xl shadow-black/50 ring-1 ring-black/5 sm:grid-cols-[1.15fr_1fr]">
      {/* Visuel hero — dashboard DentalMonitoring */}
      <div className="relative aspect-[16/10] bg-[#eef1f3] sm:aspect-auto">
        <Image
          src="/showcase/dental-monitoring-dashboard.webp"
          alt="Dashboard DentalMonitoring : suivi à distance d'un traitement par aligneurs"
          fill
          sizes="(max-width: 768px) 100vw, 440px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-7">
        {/* Rubriques */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="rounded-full bg-brand-strong px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
            À la une
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-strong">
            Orthodontie · SFOPA
          </span>
        </div>

        {/* Titre */}
        <h3 className="mt-3 font-serif text-xl font-semibold leading-tight tracking-tight text-ink sm:text-2xl">
          DentalMonitoring : l&apos;aligneur sous l&apos;œil de l&apos;IA
        </h3>

        {/* Chapô */}
        <p className="mt-3 text-sm leading-relaxed text-ink/80">
          Le traitement par aligneurs repose sur une coopération étroite entre
          praticien et patient, parfois fragilisée par l&apos;espacement des
          rendez-vous. Cette revue examine ce que la littérature scientifique dit
          aujourd&apos;hui du monitoring à distance, de la précision de la
          détection par intelligence artificielle à son effet sur l&apos;observance,
          le tracking des gouttières et l&apos;organisation du cabinet.
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {ARTICLE_TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-brand/25 bg-brand/[0.06] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-brand-strong"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Pied de carte */}
        <div className="mt-5 flex items-center gap-3 border-t border-black/[0.07] pt-4 text-xs text-ink/50">
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-ink/5 text-sm text-ink/40">
            ?
          </span>
          <span>~7 min de lecture</span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-2.5 py-1 font-medium text-ink/60">
            <ThumbsUp className="size-3.5" />2
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700">
            <Check className="size-3.5" />
            Déjà lu
          </span>
        </div>
      </div>
    </article>
  );
}
