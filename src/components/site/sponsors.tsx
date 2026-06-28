"use client";

import { Check, TrendingUp, Eye, Clock, MousePointerClick } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const benefits = [
  {
    title: "Une visibilité de valeur, pas une bannière ignorée",
    text: "Votre marque est associée à un contenu scientifique utile, que les praticiens choisissent de lire.",
  },
  {
    title: "Une audience ultra-qualifiée",
    text: "Vous touchez précisément les professionnels de santé de votre spécialité, au bon moment.",
  },
  {
    title: "La rigueur comme image de marque",
    text: "Contenus vérifiés par la littérature et conformes : votre sérieux devient un atout différenciant.",
  },
  {
    title: "Un ROI réellement mesurable",
    text: "Reach, lectures, temps passé, complétion : vous savez exactement ce que votre investissement génère.",
  },
];

export function Sponsors() {
  return (
    <section id="sponsors" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texte */}
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Pour les sponsors & l'industrie
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Sponsorisez du savoir, pas du bruit.
            </h2>
            <p className="mt-5 text-pretty text-lg text-muted-foreground">
              Associez votre marque à un contenu scientifique de référence, lu et
              partagé par votre cœur de cible. AgoraLive produit aussi des revues
              de littérature sur-mesure, vérifiées source par source.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((b) => (
                <li key={b.title} className="flex items-center gap-3.5">
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand-strong ring-1 ring-inset ring-brand/20">
                    <Check className="size-3.5" />
                  </span>
                  <div>
                    <p className="font-semibold tracking-tight">{b.title}</p>
                    <p className="mt-0.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {b.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Visuel : panneau de performance */}
          <Reveal delay={0.1} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand-gray opacity-[0.08] blur-2xl" />
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Performance du contenu
                  </p>
                  <p className="mt-1 font-heading text-lg font-bold">
                    Sponsorisé par{" "}
                    <span className="text-gradient">Votre Marque</span>
                  </p>
                </div>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand-strong">
                  30 derniers jours
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <MetricTile icon={Eye} value="1292" label="Impressions" />
                <MetricTile icon={TrendingUp} value="439" label="Lectures" />
                <MetricTile
                  icon={MousePointerClick}
                  value="312"
                  label="Clics vers votre site"
                />
                <MetricTile icon={Clock} value="4:50" label="Temps moyen" />
              </div>

              {/* Mini graphique */}
              <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-4">
                <div className="flex items-end gap-1.5">
                  {[35, 48, 42, 61, 55, 72, 68, 84, 79, 92, 88, 100].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-brand/40 to-brand-accent"
                        style={{ height: `${h * 0.9 + 10}px` }}
                      />
                    )
                  )}
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Lectures / jour</span>
                  <span className="inline-flex items-center gap-1 font-medium text-brand-strong">
                    <TrendingUp className="size-3.5" /> +186%
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MetricTile({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <Icon className="size-4 text-brand-strong" />
      <p className="mt-2 font-heading text-xl font-bold tracking-tight">
        {value}
      </p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
