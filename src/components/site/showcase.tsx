"use client";

import { useState } from "react";
import { Play, Film, BarChartBig, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

/**
 * 👉 VIDÉO DE DÉMO
 * Déposez votre vidéo dans /public/videos/demo.mp4 (ou collez une URL),
 * puis renseignez le chemin ci-dessous pour activer le lecteur.
 */
const DEMO_VIDEO_SRC = "";

const highlights = [
  {
    icon: Film,
    title: "La conférence intégrée",
    text: "La vidéo de l'intervention est encapsulée dans l'article, au bon endroit.",
  },
  {
    icon: BadgeCheck,
    title: "Références vérifiées",
    text: "Chaque source est cliquable et croisée avec la littérature.",
  },
  {
    icon: BarChartBig,
    title: "Figures interactives",
    text: "Graphiques et données reprennent vie, bien au-delà de la diapositive.",
  },
];

export function Showcase() {
  return (
    <section
      id="showcase"
      className="relative scroll-mt-20 overflow-hidden bg-[oklch(0.16_0.02_280)] py-24 text-white sm:py-32"
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
            la vidéo, les données et la science se rencontrent.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-4xl">
          <VideoPlayer />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
            >
              <h.icon className="size-5 text-brand-accent" />
              <h3 className="mt-3 font-semibold text-white">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                {h.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(DEMO_VIDEO_SRC);

  return (
    <div className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50 ring-1 ring-white/10">
      {playing && hasVideo ? (
        <video
          className="absolute inset-0 size-full object-cover"
          src={DEMO_VIDEO_SRC}
          controls
          autoPlay
          playsInline
        />
      ) : (
        <button
          type="button"
          onClick={() => hasVideo && setPlaying(true)}
          className="absolute inset-0 size-full cursor-pointer"
          aria-label="Lire la vidéo de démonstration"
        >
          {/* Poster (dégradé + UI factice) */}
          <div className="absolute inset-0 bg-brand-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_55%)]" />
          <div className="absolute inset-0 bg-black/25" />

          {/* Bouton play */}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="relative flex size-20 items-center justify-center">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-white/40" />
              <span className="relative inline-flex size-20 items-center justify-center rounded-full bg-white text-[oklch(0.2_0.02_280)] shadow-xl transition-transform duration-300 group-hover:scale-105">
                <Play className="size-8 translate-x-0.5 fill-current" />
              </span>
            </span>
          </span>

          {/* Bas de cadre */}
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-left">
            <span className="text-white">
              <span className="block text-sm font-semibold sm:text-base">
                Aligneurs et contrôle de l'ancrage
              </span>
              <span className="block text-xs text-white/70 sm:text-sm">
                Dr. Camille Laurent · Congrès SFODF 2026
              </span>
            </span>
            <span className="rounded-md bg-black/40 px-2 py-1 font-mono text-xs text-white/90 backdrop-blur">
              18:24
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
