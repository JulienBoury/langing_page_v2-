"use client";

import { useEffect, useRef, useState } from "react";

// Chiffres placeholder — à remplacer par vos vraies métriques.
const stats = [
  { to: 120, suffix: "+", label: "Conférences valorisées" },
  { to: 50000, suffix: "+", label: "Professionnels de santé touchés" },
  { to: 85, suffix: " %", label: "Taux de complétion de lecture" },
  { to: 12, suffix: "", label: "Sociétés savantes partenaires" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/75 sm:text-base">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({
  to,
  duration = 1700,
  suffix = "",
}: {
  to: number;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setValue(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              setValue(to * easeOutCubic(p));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const formatted = Math.round(value).toLocaleString("fr-FR");

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}
