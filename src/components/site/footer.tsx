import { Mail } from "lucide-react";
import { Logo } from "./logo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background text-foreground">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          {/* Logo normal (Agora navy + Live teal) sur fond clair */}
          <Logo className="text-foreground" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
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

          <p className="mt-10 text-center text-sm text-muted-foreground">
            © 2026 AgoraLive. Tous droits réservés.
          </p>
        </div>

        <div className="mt-8 border-t border-border" />
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
      className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted hover:text-foreground active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
