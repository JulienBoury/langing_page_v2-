import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const faqs = [
  {
    q: "Qui rédige réellement les articles ?",
    a: "Notre moteur éditorial produit une première version structurée à partir de l'enregistrement, qui est ensuite affinée et relue. Surtout : l'intervenant valide l'article avant toute publication. Le résultat n'est jamais une transcription brute, mais un article scientifique abouti.",
  },
  {
    q: "Les intervenants gardent-ils le contrôle éditorial ?",
    a: "Totalement. Rien n'est publié sans la validation de l'orateur. Il peut relire, corriger et approuver en un clic. Son nom, ses idées et sa rigueur restent entre ses mains.",
  },
  {
    q: "Comment garantissez-vous la rigueur scientifique ?",
    a: "Chaque affirmation clé est croisée avec la littérature (PubMed) et accompagnée de ses références, cliquables et vérifiables. La vérification des sources est au cœur de notre processus, pas une option.",
  },
  {
    q: "Proposez-vous une traduction des articles dans d'autres langues ?",
    a: "Oui. Chaque article est aussi publié et traduit dans toutes les langues pour toucher une audience internationale, sans effort supplémentaire de votre part.",
  },
  {
    q: "À qui appartiennent les contenus produits ?",
    a: "À vous. La société savante ou l'organisateur du congrès reste propriétaire de ses contenus. AgoraLive est l'outil qui les valorise, pas le détenteur de votre savoir.",
  },
  {
    q: "Combien de temps entre la conférence et la publication ?",
    a: "Comptez quelques heures, le temps de la rédaction, de la vérification et de la validation par l'intervenant : bien plus rapide qu'une publication classique.",
  },
  {
    q: "Est-ce conforme au RGPD ?",
    a: "Oui. Hébergement en Europe, traitement des données maîtrisé et conformité RGPD font partie de notre cahier des charges. Vos données et celles de votre communauté sont protégées.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            FAQ
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Les questions que l'on nous pose.
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((item) => (
            <details key={item.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold tracking-tight transition-colors hover:text-brand-strong [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
