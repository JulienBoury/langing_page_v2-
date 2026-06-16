"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Délai d'apparition en secondes (utile pour échelonner une liste). */
  delay?: number;
  /** Décalage vertical initial. */
  y?: number;
  /** Si `true`, l'animation ne joue qu'une fois. Par défaut elle se rejoue
   *  à chaque fois que le bloc revient dans le champ de vision. */
  once?: boolean;
};

/**
 * Enveloppe un bloc pour le faire apparaître en fondu + glissé au scroll.
 * Respecte `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  once = false,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Conteneur qui échelonne l'apparition de ses enfants `StaggerItem`. */
export function StaggerGroup({
  children,
  className,
  delayChildren = 0.05,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  stagger?: number;
}) {
  const variants: Variants = {
    hidden: {},
    show: {
      transition: { delayChildren, staggerChildren: stagger },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
    },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
