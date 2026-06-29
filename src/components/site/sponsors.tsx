"use client";

import {
  Check,
  TrendingUp,
  Eye,
  Clock,
  MousePointerClick,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useT } from "@/lib/i18n";
import { Eyebrow } from "./eyebrow";
import { CtaLink } from "./cta-button";

// Lien vers l'article sponsorisé exemple (fichier statique de /public).
// On préfixe à la main le basePath car il n'est pas appliqué aux <a> ni aux
// assets statiques (cf. next.config + doc next basePath).
const sponsoredExampleHref = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/exemples/article-orthoplus.html`;

export function Sponsors() {
  const t = useT();
  return (
    <section id="sponsors" className="surface-soft relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texte */}
          <Reveal>
            <Eyebrow align="start">{t.sponsors.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t.sponsors.heading}
            </h2>
            <p className="mt-5 text-pretty text-lg text-muted-foreground">
              {t.sponsors.subhead}
            </p>

            <ul className="mt-8 space-y-4">
              {t.sponsors.benefits.map((b) => (
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

            <div className="mt-9">
              <CtaLink
                href={sponsoredExampleHref}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="size-4" />
                {t.sponsors.cta}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </CtaLink>
            </div>
          </Reveal>

          {/* Visuel : panneau de performance */}
          <Reveal delay={0.1} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand-gray opacity-[0.08] blur-2xl" />
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="label-mono text-[11px] text-muted-foreground">
                      {t.sponsors.panel.perf}
                    </p>
                    <span className="label-mono rounded-full bg-brand-accent/25 px-2 py-0.5 text-[10px] text-brand-strong">
                      {t.sponsors.panel.example}
                    </span>
                  </div>
                  <p className="mt-1 font-heading text-lg font-bold">
                    {t.sponsors.panel.sponsoredBy}{" "}
                    <span className="text-gradient">
                      {t.sponsors.panel.yourBrand}
                    </span>
                  </p>
                </div>
                <span className="rounded-full bg-brand/10 px-3 py-1 font-mono text-xs font-medium text-brand-strong">
                  {t.sponsors.panel.last30}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <MetricTile
                  icon={Eye}
                  value="1292"
                  label={t.sponsors.panel.impressions}
                />
                <MetricTile
                  icon={TrendingUp}
                  value="439"
                  label={t.sponsors.panel.reads}
                />
                <MetricTile
                  icon={MousePointerClick}
                  value="312"
                  label={t.sponsors.panel.clicks}
                />
                <MetricTile
                  icon={Clock}
                  value="4:50"
                  label={t.sponsors.panel.avgTime}
                />
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
                  <span className="label-mono text-[10px]">
                    {t.sponsors.panel.perDay}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono font-medium text-brand-strong">
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
      <p className="mt-2 font-mono text-xl font-bold tracking-tight tabular-nums">
        {value}
      </p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
