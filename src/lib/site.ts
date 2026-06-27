// Exemple public : magazine SFOPA 2026 (article réel hébergé sur l'app).
const EXAMPLE_URL = "https://app.agoralive.ai/magazine/sfopa2026";

export const siteConfig = {
  name: "AgoraLive",
  tagline:
    "Vos congrès, transformés en articles scientifiques interactifs, vérifiés, traduits et disponibles en audio.",
  email: "contact@agoralive.fr",
  exampleUrl: EXAMPLE_URL,
  nav: [
    { label: "Comment ça marche", href: "#process" },
    { label: "Pour les congrès", href: "#congres" },
    { label: "Pour les sponsors", href: "#sponsors" },
    { label: "Exemples", href: EXAMPLE_URL },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    primary: { label: "Demander un devis", href: "#contact" },
    secondary: { label: "Voir un exemple", href: EXAMPLE_URL },
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
