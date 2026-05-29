# Portfolio Jolan Chappaz — Notes techniques

> ⚠️ Le contenu du site se modifie désormais **uniquement via le CMS** : `https://jolanchappaz.ch/admin/`
> Plus besoin de toucher au code.

## Ce qui a changé

Le contenu (anciennement codé en dur dans `projects.js`) vit maintenant dans des fichiers JSON éditables par Decap CMS :

```
content/
├── settings.json          ← favicon, icônes burger, vidéo d'accueil, SEO
├── about.json             ← page "À propos"
└── projects/
    ├── index.json         ← ⚙️ AUTO-GÉNÉRÉ (ne pas éditer à la main)
    ├── 01-tattoos.json
    ├── 02-paintings.json
    ├── 03-bonne-nuit-2025.json
    ├── 04-a-la-fin-2024.json
    └── 05-merch.json
```

`projects.js` est devenu un chargeur : il lit ces JSON et reconstruit le site
exactement comme avant. `app.js` / `styles.css` / `index.html` : fonctionnement
identique, juste enrichis (SEO, H1 caché, chargement asynchrone).

## À FAIRE DEMAIN — Brancher DecapBridge

Dans `admin/config.yml`, remplacer les 3 valeurs marquées `REMPLACER` par celles
fournies par DecapBridge (onglet de configuration de ton site) :

- `repo:` → `compte-github/nom-du-repo` de Jolan
- `identity_url:` → `https://auth.decapbridge.com/sites/<SITE_ID>`
- `branch:` → confirmer la branche publiée (`main` par défaut)

Vérifier aussi la branche dans `.github/workflows/generate-index.yml` (ligne `branches:`).

## Automatisation (GitHub Actions)

Quand Jolan crée / supprime un projet via le CMS, une Action régénère
automatiquement `content/projects/index.json` et `sitemap.xml`.
→ Activer les Actions sur le repo et donner les droits d'écriture
(Settings → Actions → General → Workflow permissions → Read and write).

## SEO livré

- `robots.txt`, `sitemap.xml`, `llms.txt`
- Meta enrichies : title, description, Open Graph, Twitter Card, canonical, JSON-LD (Person)
- `<h1>` + contenu textuel caché (accessible SEO/lecteurs d'écran) sur l'accueil
- Hiérarchie : `h1` (accueil) → `h2` (titre de catégorie)
- ⚠️ Ajouter une image `images/og-cover.jpg` (~1200×630) pour le partage réseaux sociaux.

## Important

- Le site **doit être servi en HTTP** (GitHub Pages le fait). Ouvrir `index.html`
  par double-clic (`file://`) ne chargera pas les JSON.
- Vérifier la **casse des dossiers d'images** sur le repo (Linux y est sensible) :
  `Tattoo/`, `Paintings/`, `Bonne Nuit (2025)/`, `A la fin/`, `Merch/`, `About/`.
