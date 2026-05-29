// ============================================================
//  CHARGEUR DE CONTENU — NE PAS MODIFIER
//  Le contenu du site se modifie désormais via l'interface
//  d'administration ( /admin ) propulsée par Decap CMS.
//  Ce fichier lit les fichiers JSON du dossier /content
//  et reconstruit les données utilisées par le site.
//
//  ⚠️ Doit être servi en HTTP (GitHub Pages, serveur local).
//     Un simple double-clic sur index.html (file://) bloquera
//     le chargement des JSON pour des raisons de sécurité.
// ============================================================

// Variables globales attendues par app.js (mêmes noms qu'avant)
var FAVICON = "";
var BURGER_ICON = "";
var BURGER_ICON_HOME = "";
var HOME = { type: "video", src: "" };
var ABOUT = {};
var CATEGORIES = [];
var SEO = {};

// Promise résolue quand tout le contenu est chargé.
// app.js attend cette promise avant de s'initialiser.
window.CONTENT_READY = (async function loadContent() {
  const bust = "?v=" + Date.now(); // évite le cache pendant l'édition

  async function getJSON(path) {
    const res = await fetch(path + bust, { cache: "no-store" });
    if (!res.ok) throw new Error("Échec chargement " + path + " (" + res.status + ")");
    return res.json();
  }

  try {
    // 1. Settings globaux (favicon, burger, home, seo)
    const settings = await getJSON("content/settings.json");
    FAVICON = settings.favicon || "";
    BURGER_ICON = settings.burger_icon_dark || "";
    BURGER_ICON_HOME = settings.burger_icon_light || "";
    HOME = settings.home || HOME;
    SEO = settings.seo || {};

    // 2. About
    ABOUT = await getJSON("content/about.json");

    // 3. Projets : on lit l'index puis chaque fichier
    const index = await getJSON("content/projects/index.json");
    const projects = await Promise.all(
      index.map((file) => getJSON("content/projects/" + file))
    );

    // Tri par "order" (puis titre si égalité), comme l'ordre voulu par Jolan
    projects.sort((a, b) => {
      const oa = typeof a.order === "number" ? a.order : 999;
      const ob = typeof b.order === "number" ? b.order : 999;
      if (oa !== ob) return oa - ob;
      return (a.title || "").localeCompare(b.title || "");
    });

    // Reconstruit CATEGORIES au format attendu par app.js (id + title + slides)
    CATEGORIES = projects.map((p) => ({
      id: p.slug || p.title,
      title: p.title,
      slides: Array.isArray(p.slides) ? p.slides : [],
    }));
  } catch (err) {
    console.error("[Portfolio] Erreur de chargement du contenu :", err);
    // En cas d'échec, on laisse des structures vides : le site ne plante pas.
  }
})();
