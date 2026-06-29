"use client";

import Image from "next/image";
import { Fragment } from "react";
import heroArticle from "../../../public/hero-article.jpg";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  ArrowRight,
  Eye,
  Headphones,
  BadgeCheck,
  Sparkles,
  Languages,
  FileText,
} from "lucide-react";
import { Aurora } from "./aurora";
import { Waveform } from "./waveform";
import { CtaLink } from "./cta-button";
import { siteConfig } from "@/lib/site";

const headlineWords: { t: string; grad?: boolean }[] = [
  { t: "Valorisons" },
  { t: "votre" },
  { t: "congrès", grad: true },
  { t: "et" },
  { t: "vos" },
  { t: "sponsors", grad: true },
];

const headlineContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

export function Hero() {
  const reduce = useReducedMotion();

  const headlineWord: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-background text-foreground"
    >
      <Aurora variant="light" />

      {/* ---------- Contenu ---------- */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-32 lg:pt-40 lg:px-8">
        {/* Colonne texte */}
        <div className="max-w-2xl">
          <motion.a
            href="#congres"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-brand-strong" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-strong" />
            </span>
            Pour les sociétés savantes & congrès médicaux
          </motion.a>

          <motion.h1
            variants={headlineContainer}
            initial="hidden"
            animate="show"
            className="heading-display mt-6 text-balance text-4xl font-bold leading-[1.04] tracking-[-0.01em] text-foreground sm:text-5xl lg:text-6xl"
          >
            {headlineWords.map((w, i) => (
              <Fragment key={i}>
                <motion.span variants={headlineWord} className="inline-block">
                  {w.grad ? (
                    <span className="text-gradient">{w.t}</span>
                  ) : (
                    w.t
                  )}
                </motion.span>
                {i < headlineWords.length - 1 ? " " : null}
              </Fragment>
            ))}
          </motion.h1>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Notre équipe capte les conférences de vos congrès et les transforme
            en articles scientifiques : interactifs, traduits dans toutes les
            langues et disponibles en version audio, diffusés à tous vos
            congressistes en direct.
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CtaLink href="#contact" size="lg">
              Demander un devis
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </CtaLink>
            <CtaLink
              href={siteConfig.cta.secondary.href}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Eye className="size-4" />
              Voir un exemple
            </CtaLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="size-4 text-brand-strong" />
              Vérifié par la littérature (PubMed)
            </span>
            <span className="inline-flex items-center gap-2">
              <Languages className="size-4 text-brand-strong" />
              Traduit & version audio
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="size-4 text-brand-strong" />
              Aux couleurs de votre congrès
            </span>
          </motion.div>
        </div>

        {/* Colonne visuel */}
        <HeroVisual />
      </div>
    </section>
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
      {/* Halo doux */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-gray opacity-10 blur-2xl" />

      {/* Carte article épurée (sans barre de navigateur) */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-foreground/10 ring-1 ring-black/5">
        {/* En-tête léger : provenance de l'article */}
        <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-brand-strong" />
            Article AgoraLive
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent/25 px-2.5 py-1 text-[11px] font-medium text-brand-strong">
            Exemple
          </span>
        </div>

        {/* Visuel d'article (photo de conférence) avec écoute */}
        <div className="relative aspect-[16/8] bg-muted">
          <Image
            src={heroArticle}
            alt="Conférencière présentant lors d'un congrès médical"
            fill
            sizes="(max-width: 1024px) 100vw, 440px"
            priority
            className="object-cover object-[50%_30%]"
          />
          {/* Voile bas pour la lisibilité du bouton */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {/* Langues disponibles — l'article est traduit (FR · EN · ES) */}
          <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/35 p-1 backdrop-blur">
            <span className="rounded-full bg-white px-1.5 py-0.5 text-[10px] font-bold leading-none text-ink">
              FR
            </span>
            <span className="px-1 text-[10px] font-semibold leading-none text-white/70">
              EN
            </span>
            <span className="px-1 text-[10px] font-semibold leading-none text-white/70">
              ES
            </span>
          </div>
          <button className="group/play absolute left-4 bottom-4 inline-flex min-h-11 items-center gap-2.5 rounded-full bg-black/35 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur transition-colors hover:bg-black/50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
            <Waveform className="text-brand" bars={4} />
            Écouter l'article
          </button>
        </div>

        {/* Corps de l'article */}
        <div className="space-y-4 p-5">
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-accent/25 px-2 py-0.5 font-medium text-brand-strong">
              <BadgeCheck className="size-3" /> Vérifié
            </span>
            <span>6 min de lecture</span>
          </div>
          <h3 className="text-balance text-base font-semibold leading-snug text-foreground">
            Aligneurs et contrôle de l'ancrage : ce que disent les données
          </h3>
          <div className="flex items-center gap-2.5">
            <span className="size-7 rounded-full bg-brand-gradient" />
            <div className="text-[11px] leading-tight text-muted-foreground">
              <p className="font-medium text-foreground">Dr. Camille</p>
              <p>Orthodontiste · CHU de Paris</p>
            </div>
          </div>
          <div className="space-y-2 pt-1">
            <div className="h-2 w-full rounded-full bg-muted" />
            <div className="h-2 w-[92%] rounded-full bg-muted" />
            <div className="h-2 w-[78%] rounded-full bg-muted" />
          </div>
          {/* Quiz en lien avec l'article */}
          <div className="flex items-center justify-between rounded-xl border border-border bg-muted/40 p-3">
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="inline-flex size-6 items-center justify-center rounded-lg bg-brand-accent/25 text-brand-strong">
                <BadgeCheck className="size-3.5" />
              </span>
              Quiz · 5 questions
            </div>
            <span className="rounded-md bg-brand-accent/25 px-2 py-0.5 text-[10px] font-medium text-brand-strong">
              Commencer
            </span>
          </div>
        </div>
      </div>

      {/* Badges flottants — style clair */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-5 top-24 hidden items-center gap-2 rounded-xl border border-border bg-white/90 px-3 py-2 shadow-lg shadow-foreground/10 backdrop-blur sm:flex"
      >
        <FileText className="size-4 text-brand-strong" />
        <div className="text-[11px] leading-tight">
          <p className="font-semibold text-foreground">12 références</p>
          <p className="text-muted-foreground">croisées PubMed</p>
        </div>
      </motion.div>

      <motion.div
        animate={reduce ? undefined : { y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 bottom-10 hidden items-center gap-2 rounded-xl border border-border bg-white/90 px-3 py-2 shadow-lg shadow-foreground/10 backdrop-blur sm:flex"
      >
        <Headphones className="size-4 text-brand-strong" />
        <div className="text-[11px] leading-tight">
          <p className="font-semibold text-foreground">Version audio</p>
          <p className="text-muted-foreground">8 min d'écoute</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
