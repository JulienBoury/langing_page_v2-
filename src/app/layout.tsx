import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
