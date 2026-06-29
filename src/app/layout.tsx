import type { Metadata } from "next";
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
// opsz (optique), SOFT (douceur) et WONK (caractère) pour piloter le hero.
const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

// JetBrains Mono — mono « lab-label » (eyebrows, pills, chiffres de données).
// Police variable → pas de poids à spécifier, perf optimale (cf. doc next/font).
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jet",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://agoralive.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AgoraLive — Vos congrès, transformés en articles scientifiques web",
    template: "%s · AgoraLive",
  },
  description:
    "AgoraLive transforme les conférences de vos congrès en articles scientifiques web interactifs, vérifiés par la littérature et diffusés à votre communauté médicale.",
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
    url: siteUrl,
    siteName: "AgoraLive",
    title: "AgoraLive — Vos congrès, transformés en articles scientifiques web",
    description:
      "Transformez les conférences de vos congrès en articles scientifiques web interactifs, vérifiés et diffusés à votre communauté.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgoraLive",
    description:
      "Vos congrès, transformés en articles scientifiques web interactifs et vérifiés.",
  },
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
