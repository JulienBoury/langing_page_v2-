export const siteConfig = {
  name: "AgoraLive",
  tagline:
    "Vos congrès, transformés en articles scientifiques web — interactifs, vérifiés et lus.",
  email: "contact@agoralive.fr",
  nav: [
    { label: "Comment ça marche", href: "#process" },
    { label: "Pour les congrès", href: "#congres" },
    { label: "Pour les sponsors", href: "#sponsors" },
    { label: "Exemples", href: "#showcase" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    primary: { label: "Demander une démo", href: "#contact" },
    secondary: { label: "Voir un exemple", href: "#showcase" },
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
