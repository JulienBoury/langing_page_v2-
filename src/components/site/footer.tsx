import { Mail } from "lucide-react";
import { Logo } from "./logo";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Plateforme",
    links: [
      { label: "Comment ça marche", href: "#process" },
      { label: "Pour les congrès", href: "#congres" },
      { label: "Pour les sponsors", href: "#sponsors" },
      { label: "Exemples d'articles", href: "#showcase" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Le blog AgoraLive", href: "#" },
      { label: "Études de cas", href: "#" },
      { label: "Demander une démo", href: "#contact" },
    ],
  },
  {
    title: "Société",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Confidentialité (RGPD)", href: "#" },
      { label: "CGU", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo className="text-white" />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href="#" label="LinkedIn">
                <IconLinkedin className="size-[18px]" />
              </SocialLink>
              <SocialLink href="#" label="YouTube">
                <IconYoutube className="size-[18px]" />
              </SocialLink>
              <SocialLink href={`mailto:${siteConfig.email}`} label="Email">
                <Mail className="size-4.5" />
              </SocialLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-white">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© 2026 AgoraLive. Tous droits réservés.</p>
          <p className="flex items-center gap-1.5">
            Conçu avec soin en France 🇫🇷
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23h-4V8z" />
    </svg>
  );
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}
