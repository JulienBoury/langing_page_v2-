"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Play,
  BadgeCheck,
  Sparkles,
  FileText,
} from "lucide-react";
import { CtaLink } from "./cta-button";

/**
 * 👉 VIDÉO DU HERO
 * Déposez votre vidéo dans /public/videos/hero.mp4 puis renseignez le chemin
 * ci-dessous. Tant que c'est vide, un fond dégradé animé est utilisé.
 */
const HERO_VIDEO_SRC = "";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[oklch(0.16_0.02_280)] text-white"
    >
      {/* ---------- Arrière-plan ---------- */}
      <HeroBackground hasVideo={Boolean(HERO_VIDEO_SRC)} />

      {/* ---------- Contenu ---------- */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-32 lg:pt-40 lg:px-8">
        {/* Colonne texte */}
        <div className="max-w-2xl">
          <motion.a
            href="#congres"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur transition-colors hover:bg-white/10"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-brand-accent" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-accent" />
            </span>
            Pour les sociétés savantes & congrès médicaux
          </motion.a>

          <motion.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Vos conférences de congrès,{" "}
            <span className="text-gradient">transformées en articles scientifiques web.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/70"
          >
            AgoraLive capte les présentations de vos congrès et les transforme
            en articles interactifs, vérifiés par la littérature et lus par
            votre communauté — bien après la fin de l'événement.
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CtaLink href="#contact" size="lg">
              Demander une démo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </CtaLink>
            <CtaLink href="#showcase" variant="glass" size="lg">
              <Play className="size-4" />
              Voir un exemple
            </CtaLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55"
          >
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="size-4 text-brand-accent" />
              Vérifié par la littérature (PubMed)
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="size-4 text-brand-accent" />
              Aux couleurs de votre congrès
            </span>
          </motion.div>
        </div>

        {/* Colonne visuel */}
        <HeroVisual />
      </div>

      {/* Dégradé de transition vers la section suivante */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function HeroBackground({ hasVideo }: { hasVideo: boolean }) {
  return (
    <div className="absolute inset-0 -z-10">
      {hasVideo && (
        <video
          className="absolute inset-0 size-full object-cover opacity-40"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
        />
      )}
      {/* Blobs aurora */}
      <div className="absolute -left-40 -top-40 size-[42rem] rounded-full bg-brand opacity-30 blur-[120px] animate-aurora" />
      <div className="absolute -right-40 top-10 size-[38rem] rounded-full bg-brand-2 opacity-25 blur-[120px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 size-[34rem] rounded-full bg-brand-accent opacity-20 blur-[120px] animate-aurora [animation-delay:-12s]" />
      {/* Grille */}
      <div className="absolute inset-0 bg-grid opacity-[0.18] mask-fade-y" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,oklch(0.16_0.02_280)_85%)]" />
    </div>
  );
}

function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md lg:mx-0"
    >
      {/* Halo */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-gradient opacity-30 blur-2xl" />

      {/* Carte navigateur / article */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.21_0.02_280)] shadow-2xl shadow-black/40 ring-1 ring-white/5">
        {/* Barre de navigateur */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="size-2.5 rounded-full bg-red-400/70" />
          <span className="size-2.5 rounded-full bg-yellow-400/70" />
          <span className="size-2.5 rounded-full bg-green-400/70" />
          <div className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-white/40">
            agoralive.fr/article/sfodf-2026-aligneurs
          </div>
        </div>

        {/* Cover avec play */}
        <div className="relative aspect-[16/8] bg-brand-gradient">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_55%)]" />
          <button className="group/play absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur transition-colors hover:bg-black/45">
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-white text-[oklch(0.2_0.02_280)]">
              <Play className="size-3 fill-current" />
            </span>
            Revoir la conférence
          </button>
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
            <span className="size-1.5 rounded-full bg-red-400" />
            Congrès SFODF 2026
          </span>
        </div>

        {/* Corps de l'article */}
        <div className="space-y-4 p-5">
          <div className="flex items-center gap-2 text-[11px] text-white/45">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-accent/15 px-2 py-0.5 font-medium text-brand-accent">
              <BadgeCheck className="size-3" /> Vérifié
            </span>
            <span>6 min de lecture</span>
          </div>
          <h3 className="text-balance text-base font-semibold leading-snug text-white">
            Aligneurs et contrôle de l'ancrage : ce que disent les données
          </h3>
          <div className="flex items-center gap-2.5">
            <span className="size-7 rounded-full bg-brand-gradient" />
            <div className="text-[11px] leading-tight text-white/50">
              <p className="font-medium text-white/70">Dr. Camille Laurent</p>
              <p>Orthodontiste · CHU de Lyon</p>
            </div>
          </div>
          <div className="space-y-2 pt-1">
            <div className="h-2 w-full rounded-full bg-white/8" />
            <div className="h-2 w-[92%] rounded-full bg-white/8" />
            <div className="h-2 w-[78%] rounded-full bg-white/8" />
          </div>
          {/* Mini graphique */}
          <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-3">
            {[40, 68, 52, 84, 60, 72].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-brand to-brand-accent"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Badges flottants */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-5 top-24 hidden items-center gap-2 rounded-xl border border-white/10 bg-[oklch(0.21_0.02_280)]/90 px-3 py-2 shadow-xl backdrop-blur sm:flex"
      >
        <FileText className="size-4 text-brand-accent" />
        <div className="text-[11px] leading-tight">
          <p className="font-semibold text-white">12 références</p>
          <p className="text-white/45">croisées PubMed</p>
        </div>
      </motion.div>

      <motion.div
        animate={reduce ? undefined : { y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 bottom-10 hidden items-center gap-2 rounded-xl border border-white/10 bg-[oklch(0.21_0.02_280)]/90 px-3 py-2 shadow-xl backdrop-blur sm:flex"
      >
        <Sparkles className="size-4 text-brand-accent" />
        <div className="text-[11px] leading-tight">
          <p className="font-semibold text-white">1 240 lectures</p>
          <p className="text-white/45">cette semaine</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
