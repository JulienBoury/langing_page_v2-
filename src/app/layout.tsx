import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { SkipLink } from "@/components/site/skip-link";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Fraunces — serif éditorial (titres). Police variable : on charge les axes
// opsz (optique) et WONK (caractère, activé sur le seul hero). L'axe SOFT
// n'est jamais varié (toujours 0) → non chargé pour alléger le woff2.
const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "WONK"],
});

// JetBrains Mono — mono « lab-label » (eyebrows, pills, chiffres de données).
// Police variable → pas de poids à spécifier, perf optimale (cf. doc next/font).
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jet",
  subsets: ["latin"],
  display: "swap",
});

// URL canonique = là où le site est RÉELLEMENT servi (GitHub Pages, sous le
// sous-dossier du repo). À rebasculer vers https://agoralive.fr le jour où le
// domaine custom sera connecté (CNAME + DNS Hostinger). Les chemins sensibles
// au sous-dossier (canonical, og:url, og:image) sont donnés en ABSOLU car
// `new URL("/", base)` écraserait le sous-dossier.
const siteUrl = "https://julienboury.github.io/langing_page_v2-";
const ogImage = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AgoraLive — Vos congrès en articles scientifiques web",
    template: "%s · AgoraLive",
  },
  description:
    "AgoraLive transforme les conférences de vos congrès en articles scientifiques web interactifs, vérifiés par la littérature et diffusés à votre communauté.",
  alternates: { canonical: `${siteUrl}/` },
  robots: { index: true, follow: true },
  keywords: [
    "congrès médical",
    "société savante",
    "article scientifique",
    "contenu médical",
    "sponsoring congrès",
    "formation médicale continue",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/`,
    siteName: "AgoraLive",
    title: "AgoraLive — Vos congrès en articles scientifiques web",
    description:
      "Transformez les conférences de vos congrès en articles scientifiques web interactifs, vérifiés et diffusés à votre communauté.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "AgoraLive — vos congrès transformés en articles scientifiques web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgoraLive",
    description:
      "Vos congrès, transformés en articles scientifiques web interactifs et vérifiés.",
    images: [ogImage],
  },
};

// themeColor : déprécié dans `metadata` (Next 14+) → doit passer par `viewport`.
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// Données structurées (Organization + WebSite) — rendues côté serveur, donc
// présentes dans le HTML statique exporté. Aide au panneau de connaissances /
// à la reconnaissance de la marque par les moteurs.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "AgoraLive",
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      description:
        "AgoraLive transforme les conférences de vos congrès en articles scientifiques web interactifs, vérifiés par la littérature.",
      sameAs: ["https://www.linkedin.com/company/agoralive/"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "AgoraLive",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <SkipLink />
          <SmoothScroll>
            <Navbar />
            <main id="main" className="flex-1 scroll-mt-16">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
