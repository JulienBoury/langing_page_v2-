// Dictionnaire de traduction de la landing (FR ⇄ EN).
//
// Le site est en export statique (`output: export`) : pas de serveur, donc pas
// de routing i18n natif. La traduction se fait côté client via un contexte React
// (cf. context.tsx) et un bouton FR/EN. Ce fichier est la SEULE source de vérité
// pour tout le texte affiché — chaque composant lit ses chaînes via `useT()`.
//
// L'interface `Dictionary` garantit que `en` couvre exactement les mêmes clés
// que `fr` (TypeScript échoue à la compilation si une clé EN manque).

export type Lang = "fr" | "en";

/** Un mot du titre hero ; `grad` = mis en avant via le dégradé de marque. */
export type HeadlineWord = { t: string; grad?: boolean };

export interface Dictionary {
  nav: {
    howItWorks: string;
    forCongresses: string;
    forSponsors: string;
    examples: string;
    faq: string;
  };
  actions: { requestQuote: string; seeExample: string };
  a11y: {
    skipToContent: string;
    home: string;
    openMenu: string;
    closeMenu: string;
    languageSwitcher: string;
  };
  hero: {
    badge: string;
    headline: HeadlineWord[];
    subhead: string;
    trust: { pubmed: string; audio: string; branded: string };
    card: {
      source: string;
      example: string;
      listen: string;
      verified: string;
      readTime: string;
      imageAlt: string;
      title: string;
      author: string;
      authorRole: string;
      quiz: string;
      start: string;
      refsValue: string;
      refsLabel: string;
      audioTitle: string;
      audioSub: string;
    };
  };
  trustedBy: { heading: string };
  stats: { items: { value: number; suffix: string; label: string }[] };
  howItWorks: {
    eyebrow: string;
    heading: string;
    subhead: string;
    steps: { title: string; description: string }[];
  };
  features: {
    eyebrow: string;
    heading: string;
    subhead: string;
    items: { title: string; description: string }[];
  };
  sponsors: {
    eyebrow: string;
    heading: string;
    subhead: string;
    benefits: { title: string; text: string }[];
    cta: string;
    panel: {
      perf: string;
      example: string;
      sponsoredBy: string;
      yourBrand: string;
      last30: string;
      impressions: string;
      reads: string;
      clicks: string;
      avgTime: string;
      perDay: string;
    };
  };
  faq: { eyebrow: string; heading: string; items: { q: string; a: string }[] };
  cta: { heading: string; subhead: string; note: string };
  footer: { tagline: string; rights: string };
  meta: { title: string; description: string };
}

const fr: Dictionary = {
  nav: {
    howItWorks: "Comment ça marche",
    forCongresses: "Pour les congrès",
    forSponsors: "Pour les sponsors",
    examples: "Exemples",
    faq: "FAQ",
  },
  actions: { requestQuote: "Demander un devis", seeExample: "Voir un exemple" },
  a11y: {
    skipToContent: "Aller au contenu",
    home: "AgoraLive — accueil",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    languageSwitcher: "Choisir la langue",
  },
  hero: {
    badge: "Pour les congrès & sociétés savantes",
    headline: [
      { t: "Valorisons" },
      { t: "votre" },
      { t: "congrès", grad: true },
      { t: "et" },
      { t: "vos" },
      { t: "sponsors", grad: true },
    ],
    subhead:
      "Notre équipe capte les conférences de vos congrès et les transforme en articles scientifiques : interactifs, traduits dans toutes les langues et disponibles en version audio, diffusés à tous vos congressistes en direct.",
    trust: {
      pubmed: "Vérifié par la littérature (PubMed)",
      audio: "Traduit & version audio",
      branded: "Aux couleurs de votre congrès",
    },
    card: {
      source: "Article AgoraLive",
      example: "Exemple",
      listen: "Écouter l'article",
      verified: "Vérifié",
      readTime: "6 min de lecture",
      imageAlt: "Conférencière présentant lors d'un congrès médical",
      title: "Aligneurs et contrôle de l'ancrage : ce que disent les données",
      author: "Dr. Camille",
      authorRole: "Orthodontiste · CHU de Paris",
      quiz: "Quiz · 5 questions",
      start: "Commencer",
      refsValue: "12 références",
      refsLabel: "croisées PubMed",
      audioTitle: "Version audio",
      audioSub: "8 min d'écoute",
    },
  },
  trustedBy: {
    heading: "Ils valorisent déjà les contenus de leurs congrès avec AgoraLive",
  },
  stats: {
    items: [
      { value: 60, suffix: "", label: "Conférences valorisées" },
      { value: 1500, suffix: "", label: "Professionnels de santé touchés" },
      { value: 100, suffix: " %", label: "Articles validés par l'intervenant" },
    ],
  },
  howItWorks: {
    eyebrow: "Comment ça marche",
    heading: "De la scène à l'article publié, en 4 étapes.",
    subhead:
      "Un processus clé en main. Vous restez concentrés sur votre congrès, on transforme son contenu en mémoire durable.",
    steps: [
      {
        title: "On capte",
        description:
          "Notre équipe se déplace sur votre congrès et capte les sessions, audio et visuels des intervenants. Vous n'avez rien à préparer.",
      },
      {
        title: "On rédige & on vérifie",
        description:
          "Notre moteur rédige l'article, croise chaque source avec la littérature et applique votre charte graphique.",
      },
      {
        title: "Vous validez",
        description:
          "L'intervenant relit et valide en un clic. Vous gardez le contrôle éditorial du premier au dernier mot.",
      },
      {
        title: "On publie & on diffuse",
        description:
          "L'article part en ligne, traduit dans toutes les langues et en version audio, diffusé à votre communauté, audience mesurée en temps réel.",
      },
    ],
  },
  features: {
    eyebrow: "Pour les congrès & sociétés savantes",
    heading:
      "Le savoir de vos congrès ne devrait pas s'arrêter à la dernière diapo.",
    subhead:
      "AgoraLive prolonge la vie de vos conférences et en fait un capital scientifique durable pour votre communauté.",
    items: [
      {
        title: "Photos & diapositives clés",
        description:
          "Les visuels marquants de chaque session : photos des intervenants et diapositives essentielles, intégrées au fil de l'article.",
      },
      {
        title: "Quiz pour ancrer le savoir",
        description:
          "Des quiz en lien avec l'article invitent le lecteur à se tester et fixent durablement les messages clés de la conférence.",
      },
      {
        title: "Take home message",
        description:
          "Un document de synthèse unique qui rassemble l'essentiel de tous les articles du congrès : toute la connaissance partagée, condensée en une seule référence.",
      },
      {
        title: "Publié en quelques minutes",
        description:
          "L'article est disponible quelques minutes après la fin de chaque conférence : votre communauté lit pendant que le congrès vit encore.",
      },
      {
        title: "Audio & multilingue",
        description:
          "Chaque article est aussi publié en version audio et traduit dans toutes les langues, pour une audience plus large, partout.",
      },
      {
        title: "Vos sponsors mis en valeur",
        description:
          "Nous rédigeons aussi des articles sponsorisés sur-mesure pour mettre en avant les partenaires de votre congrès : une nouvelle façon de valoriser vos sponsors.",
      },
    ],
  },
  sponsors: {
    eyebrow: "Pour les sponsors & l'industrie",
    heading: "Sponsorisez du savoir, pas du bruit.",
    subhead:
      "Associez votre marque à un contenu scientifique de référence, lu et partagé par votre cœur de cible. AgoraLive produit des articles sponsorisés sur-mesure, vérifiés source par source, et les intègre au journal.",
    benefits: [
      {
        title: "Une visibilité de valeur, pas une bannière ignorée",
        text: "Votre marque est associée à un contenu scientifique utile, que les praticiens choisissent de lire.",
      },
      {
        title: "Une audience ultra-qualifiée",
        text: "Vous touchez précisément les professionnels de santé de votre spécialité, au bon moment.",
      },
      {
        title: "La rigueur comme image de marque",
        text: "Contenus vérifiés par la littérature et conformes : votre sérieux devient un atout différenciant.",
      },
      {
        title: "Un ROI réellement mesurable",
        text: "Reach, lectures, temps passé, complétion : vous savez exactement ce que votre investissement génère.",
      },
    ],
    cta: "Découvrir un exemple d'article sponsorisé",
    panel: {
      perf: "Performance du contenu",
      example: "Exemple",
      sponsoredBy: "Sponsorisé par",
      yourBrand: "Votre Marque",
      last30: "30 derniers jours",
      impressions: "Impressions",
      reads: "Lectures",
      clicks: "Clics vers votre site",
      avgTime: "Temps moyen",
      perDay: "Lectures / jour",
    },
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Les questions que l'on nous pose.",
    items: [
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
    ],
  },
  cta: {
    heading: "Prêt à donner une seconde vie à vos congrès ?",
    subhead:
      "Réservez une démo de 10 minutes. On vous montre ce qu'AgoraLive peut produire.",
    note: "Démo personnalisée · Réponse sous 24 h · Conçu pour tous les congrès",
  },
  footer: {
    tagline:
      "Vos congrès, transformés en articles scientifiques interactifs, vérifiés, traduits et disponibles en audio.",
    rights: "© 2026 AgoraLive. Tous droits réservés.",
  },
  meta: {
    title: "AgoraLive — Vos congrès, transformés en articles scientifiques web",
    description:
      "AgoraLive transforme les conférences de vos congrès en articles scientifiques web interactifs, vérifiés par la littérature et diffusés à votre communauté médicale.",
  },
};

const en: Dictionary = {
  nav: {
    howItWorks: "How it works",
    forCongresses: "For congresses",
    forSponsors: "For sponsors",
    examples: "Examples",
    faq: "FAQ",
  },
  actions: { requestQuote: "Request a quote", seeExample: "See an example" },
  a11y: {
    skipToContent: "Skip to content",
    home: "AgoraLive — home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageSwitcher: "Choose language",
  },
  hero: {
    badge: "For congresses & learned societies",
    headline: [
      { t: "Showcase" },
      { t: "your" },
      { t: "congress", grad: true },
      { t: "and" },
      { t: "your" },
      { t: "sponsors", grad: true },
    ],
    subhead:
      "Our team captures the talks at your congresses and turns them into scientific articles — interactive, translated into every language, and available as audio — distributed live to all your attendees.",
    trust: {
      pubmed: "Verified against the literature (PubMed)",
      audio: "Translated & audio version",
      branded: "Branded to match your congress",
    },
    card: {
      source: "AgoraLive article",
      example: "Example",
      listen: "Listen to the article",
      verified: "Verified",
      readTime: "6 min read",
      imageAlt: "Speaker presenting at a medical congress",
      title: "Aligners and anchorage control: what the data show",
      author: "Dr. Camille",
      authorRole: "Orthodontist · Paris University Hospital",
      quiz: "Quiz · 5 questions",
      start: "Start",
      refsValue: "12 references",
      refsLabel: "cross-checked on PubMed",
      audioTitle: "Audio version",
      audioSub: "8 min listen",
    },
  },
  trustedBy: {
    heading: "They already turn their congress content into value with AgoraLive",
  },
  stats: {
    items: [
      { value: 60, suffix: "", label: "Talks turned into articles" },
      { value: 1500, suffix: "", label: "Healthcare professionals reached" },
      { value: 100, suffix: "%", label: "Articles approved by the speaker" },
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    heading: "From the stage to a published article, in 4 steps.",
    subhead:
      "A turnkey process. You stay focused on your congress; we turn its content into a lasting record.",
    steps: [
      {
        title: "We capture",
        description:
          "Our team comes to your congress and captures the sessions, audio, and speaker visuals. There's nothing for you to prepare.",
      },
      {
        title: "We write & verify",
        description:
          "Our engine writes the article, cross-checks every source against the literature, and applies your brand guidelines.",
      },
      {
        title: "You approve",
        description:
          "The speaker reviews and approves in one click. You keep editorial control from the first word to the last.",
      },
      {
        title: "We publish & distribute",
        description:
          "The article goes live — translated into every language and as an audio version — distributed to your community, with readership measured in real time.",
      },
    ],
  },
  features: {
    eyebrow: "For congresses & learned societies",
    heading: "The knowledge from your congresses shouldn't end on the last slide.",
    subhead:
      "AgoraLive extends the life of your talks and turns them into lasting scientific capital for your community.",
    items: [
      {
        title: "Key photos & slides",
        description:
          "The standout visuals from every session: speaker photos and the essential slides, woven right into the article.",
      },
      {
        title: "Quizzes that lock in knowledge",
        description:
          "Quizzes tied to the article invite readers to test themselves and make the talk's key messages stick for good.",
      },
      {
        title: "Take-home message",
        description:
          "A single summary document that brings together the essence of every article from the congress: all the knowledge shared, condensed into one reference to keep.",
      },
      {
        title: "Live within minutes",
        description:
          "The article is available a few minutes after each talk ends: your community reads while the congress is still happening.",
      },
      {
        title: "Audio & multilingual",
        description:
          "Every article is also published as an audio version and translated into any language, for a wider audience, everywhere.",
      },
      {
        title: "Your sponsors, showcased",
        description:
          "We also craft bespoke sponsored articles to spotlight your congress's partners: a new way to give your sponsors real value.",
      },
    ],
  },
  sponsors: {
    eyebrow: "For sponsors & industry",
    heading: "Sponsor knowledge, not noise.",
    subhead:
      "Tie your brand to authoritative scientific content, read and shared by the audience that matters to you. AgoraLive produces custom sponsored articles, verified source by source, and integrates them into the journal.",
    benefits: [
      {
        title: "Visibility that earns attention, not a banner that's ignored",
        text: "Your brand is tied to useful scientific content that clinicians choose to read.",
      },
      {
        title: "A highly qualified audience",
        text: "You reach exactly the healthcare professionals in your specialty, at the right moment.",
      },
      {
        title: "Rigor as a brand asset",
        text: "Content verified against the literature and fully compliant: your credibility becomes a differentiator.",
      },
      {
        title: "Truly measurable ROI",
        text: "Reach, reads, time spent, completion: you know exactly what your investment delivers.",
      },
    ],
    cta: "See an example sponsored article",
    panel: {
      perf: "Content performance",
      example: "Example",
      sponsoredBy: "Sponsored by",
      yourBrand: "Your Brand",
      last30: "Last 30 days",
      impressions: "Impressions",
      reads: "Reads",
      clicks: "Clicks to your site",
      avgTime: "Avg. time",
      perDay: "Reads / day",
    },
  },
  faq: {
    eyebrow: "FAQ",
    heading: "The questions we get asked.",
    items: [
      {
        q: "Who actually writes the articles?",
        a: "Our editorial engine produces a first structured draft from the recording, which is then refined and proofread. Above all, the speaker validates the article before it is published. The result is never a raw transcript, but a polished scientific article.",
      },
      {
        q: "Do speakers keep editorial control?",
        a: "Completely. Nothing is published without the speaker's approval. They can review, edit, and approve in a single click. Their name, their ideas, and their rigor stay in their hands.",
      },
      {
        q: "How do you guarantee scientific rigor?",
        a: "Every key claim is cross-checked against the literature (PubMed) and backed by its references, which are clickable and verifiable. Source verification is at the heart of our process, not an optional extra.",
      },
      {
        q: "Do you translate the articles into other languages?",
        a: "Yes. Every article is also published and translated into all languages to reach an international audience, with no extra effort on your part.",
      },
      {
        q: "Who owns the content produced?",
        a: "You do. The learned society or congress organizer remains the owner of its content. AgoraLive is the tool that gives it value, not the owner of your knowledge.",
      },
      {
        q: "How long between the talk and publication?",
        a: "Expect a few hours, the time it takes to write, verify, and have the speaker approve the article: far faster than traditional publishing.",
      },
      {
        q: "Is it GDPR-compliant?",
        a: "Yes. Hosting in Europe, controlled data processing, and GDPR compliance are built into our requirements. Your data, and your community's, are protected.",
      },
    ],
  },
  cta: {
    heading: "Ready to give your congresses a second life?",
    subhead: "Book a 10-minute demo. We'll show you what AgoraLive can produce.",
    note: "Personalized demo · Reply within 24h · Built for every congress",
  },
  footer: {
    tagline:
      "Your congresses, transformed into interactive scientific articles — verified, translated, and available in audio.",
    rights: "© 2026 AgoraLive. All rights reserved.",
  },
  meta: {
    title: "AgoraLive — Your congresses, transformed into scientific web articles",
    description:
      "AgoraLive turns your congress talks into interactive scientific web articles, verified against the literature and distributed to your medical community.",
  },
};

export const translations: Record<Lang, Dictionary> = { fr, en };
