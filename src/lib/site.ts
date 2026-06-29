import type { Dictionary } from "./i18n/dictionary";

// Exemple public : magazine SFOPA 2026 (article réel hébergé sur l'app).
const EXAMPLE_URL = "https://app.agoralive.ai/magazine/sfopa2026";

// Le libellé affiché de chaque entrée de nav vient du dictionnaire i18n
// (`t.nav[key]`) — ici on ne garde que la structure (clé + destination).
type NavConfig = { key: keyof Dictionary["nav"]; href: string };

export const siteConfig = {
  name: "AgoraLive",
  email: "contact@agoralive.fr",
  exampleUrl: EXAMPLE_URL,
  nav: [
    { key: "howItWorks", href: "#process" },
    { key: "forCongresses", href: "#congres" },
    { key: "forSponsors", href: "#sponsors" },
    { key: "examples", href: EXAMPLE_URL },
    { key: "faq", href: "#faq" },
  ] satisfies NavConfig[],
  cta: {
    primary: { href: "#contact" },
    secondary: { href: EXAMPLE_URL },
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
