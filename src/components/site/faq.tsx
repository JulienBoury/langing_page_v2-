"use client";

import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useT } from "@/lib/i18n";
import { Eyebrow } from "./eyebrow";

export function Faq() {
  const t = useT();
  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {t.faq.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-5 text-left font-semibold tracking-tight transition-colors hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-4 focus-visible:ring-offset-card [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
