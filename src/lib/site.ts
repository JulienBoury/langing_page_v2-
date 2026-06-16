export const siteConfig = {
  name: "AgoraLive",
  tagline:
    "Vos congrès, transformés en articles scientifiques interactifs, vérifiés, traduits et disponibles en audio.",
  email: "contact@agoralive.fr",
  nav: [
    { label: "Comment ça marche", href: "#process" },
    { label: "Pour les congrès", href: "#congres" },
    { label: "Pour les sponsors", href: "#sponsors" },
    { label: "Exemples", href: "#showcase" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    primary: { label: "Demander un devis", href: "#contact" },
    secondary: { label: "Voir un exemple", href: "#showcase" },
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
