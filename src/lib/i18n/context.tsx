"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Dictionary, type Lang } from "./dictionary";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Dictionnaire de la langue active. */
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "agoralive-lang";

/**
 * Détecte la langue préférée du navigateur en respectant l'ORDRE de préférence :
 * on renvoie la première langue supportée (en/fr) rencontrée. Ainsi `["fr","en"]`
 * → FR (le français prime), `["en","fr"]` → EN, `["es","en"]` → EN, sinon FR.
 */
function detectBrowserLang(): Lang {
  try {
    const candidates = [
      ...(navigator.languages ?? []),
      navigator.language,
    ].filter(Boolean);
    for (const l of candidates) {
      const lower = l.toLowerCase();
      if (lower.startsWith("en")) return "en";
      if (lower.startsWith("fr")) return "fr";
    }
  } catch {
    /* navigator indisponible (SSR) */
  }
  return "fr";
}

/**
 * Fournit la langue active à tout l'arbre (FR par défaut). Premier rendu = FR
 * (= rendu serveur statique) pour éviter tout mismatch d'hydratation. Juste
 * après le montage : on applique le choix sauvegardé s'il existe (il prime),
 * sinon on détecte la langue du navigateur (un visiteur anglophone arrive en EN).
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "fr" || saved === "en") {
        setLangState(saved); // choix explicite de l'utilisateur → priorité
        return;
      }
    } catch {
      /* localStorage indisponible (mode privé strict) */
    }
    // Pas de choix mémorisé → on s'aligne sur la langue du navigateur.
    const detected = detectBrowserLang();
    if (detected !== "fr") setLangState(detected);
  }, []);

  // Reflète la langue sur <html lang> et le <title> (l'export statique fige le
  // HTML en FR ; on le met à jour côté client pour la cohérence a11y/SEO onglet).
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translations[lang].meta.title;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(
    () => setLang(lang === "fr" ? "en" : "fr"),
    [lang, setLang]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggle, t: translations[lang] }),
    [lang, setLang, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a <LanguageProvider>");
  }
  return ctx;
}

/** Raccourci : récupère uniquement le dictionnaire de la langue active. */
export function useT(): Dictionary {
  return useLanguage().t;
}
