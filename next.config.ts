import type { NextConfig } from "next";

// Déploiement GitHub Pages : le site est servi sous un sous-dossier
// (https://<user>.github.io/<repo>/), il faut donc préfixer les chemins.
// Activé uniquement quand la variable GITHUB_PAGES=true (dans le workflow CI),
// pour ne pas affecter `npm run dev` en local ni un futur domaine racine.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "langing_page_v2-";

const nextConfig: NextConfig = {
  output: "export", // génère un site statique dans `out/`
  images: {
    unoptimized: true, // pas de serveur d'optimisation d'images en statique
  },
  basePath: isGithubPages ? `/${repo}` : undefined,
  assetPrefix: isGithubPages ? `/${repo}/` : undefined,
  trailingSlash: true, // routes servies en /chemin/index.html (hébergement statique)
  // Exposé au client : pour préfixer à la main les liens vers des fichiers
  // STATIQUES de /public (ex. l'article exemple). basePath n'est PAS appliqué
  // automatiquement aux <a> ni aux assets statiques (cf. doc next basePath).
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repo}` : "",
  },
};

export default nextConfig;
