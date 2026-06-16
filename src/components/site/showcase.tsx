"use client";

import { useState } from "react";
import { Play, Headphones, Image as ImageIcon, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

/**
 * 👉 VERSION AUDIO DE DÉMO (optionnel)
 * Déposez un fichier audio dans /public/audio/demo.mp3 (ou collez une URL)
 * et renseignez le chemin ci-dessous pour activer l'écoute. Vide = aperçu statique.
 */
const DEMO_AUDIO_SRC = "";

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

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-4xl">
          <ArticlePreview />
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

function ArticlePreview() {
  const [playing, setPlaying] = useState(false);
  const hasAudio = Boolean(DEMO_AUDIO_SRC);

  return (
    <div className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50 ring-1 ring-white/10">
      {/* Poster (visuel d'article) */}
      <div className="absolute inset-0 bg-brand-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Pill version audio */}
      <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
        <Headphones className="size-3.5" />
        Version audio · multilingue
      </span>

      {playing && hasAudio ? (
        <div className="absolute inset-x-6 bottom-6">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio className="w-full" src={DEMO_AUDIO_SRC} controls autoPlay />
        </div>
      ) : (
        <>
          {/* Bouton écouter */}
          <button
            type="button"
            onClick={() => hasAudio && setPlaying(true)}
            aria-label="Écouter la version audio de l'article"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <span className="relative flex size-20 items-center justify-center">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-white/40" />
              <span className="relative inline-flex size-20 items-center justify-center rounded-full bg-white text-ink shadow-xl transition-transform duration-300 group-hover:scale-105">
                <Play className="size-8 translate-x-0.5 fill-current" />
              </span>
            </span>
          </button>

          {/* Bas de cadre */}
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-left">
            <span className="text-white">
              <span className="block text-sm font-semibold sm:text-base">
                Aligneurs et contrôle de l'ancrage
              </span>
              <span className="block text-xs text-white/75 sm:text-sm">
                Dr. Camille Laurent · Congrès SFODF
              </span>
            </span>
            <span className="rounded-md bg-black/40 px-2 py-1 font-mono text-xs text-white/90 backdrop-blur">
              8:24
            </span>
          </span>
        </>
      )}
    </div>
  );
}
