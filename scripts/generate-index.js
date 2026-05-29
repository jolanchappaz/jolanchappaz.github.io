#!/usr/bin/env node
/* ============================================================
   Génère automatiquement :
   - content/projects/index.json  (liste des fichiers projets)
   - sitemap.xml                  (avec date du jour)
   Lancé par GitHub Actions à chaque modification du contenu.
   Aucune dépendance externe (Node standard).
   ============================================================ */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PROJECTS_DIR = path.join(ROOT, "content", "projects");
const INDEX_FILE = path.join(PROJECTS_DIR, "index.json");
const SITEMAP_FILE = path.join(ROOT, "sitemap.xml");
const SITE_URL = "https://jolanchappaz.ch/";

// ---- 1. Index des projets ----
const files = fs
  .readdirSync(PROJECTS_DIR)
  .filter((f) => f.endsWith(".json") && f !== "index.json")
  .sort();

fs.writeFileSync(INDEX_FILE, JSON.stringify(files, null, 2) + "\n");
console.log(`index.json mis à jour (${files.length} projet(s)).`);

// ---- 2. Sitemap (site mono-page : une seule URL) ----
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
fs.writeFileSync(SITEMAP_FILE, sitemap);
console.log(`sitemap.xml mis à jour (${today}).`);
