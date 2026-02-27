// ============================================================
//  FICHIER DE DONNÉES — C'EST ICI QUE TU MODIFIES TON SITE
//  Jolan, tu n'as besoin de toucher QUE ce fichier !
// ============================================================


// ============================================================
//  1. PERSONNALISATION DU SITE
// ============================================================

// Favicon — la petite icône dans l'onglet du navigateur
// Formats recommandés : .png, .ico, .svg (32x32px ou 64x64px)
const FAVICON = "images/favicon.png";

// Icône du menu burger (version mobile)
// C'est l'image qui remplace le menu hamburger classique
// Formats recommandés : .png, .svg (environ 28x28px)

// Icône burger pour les pages intérieures (fond blanc)
const BURGER_ICON = "images/burger-icon-dark.png";

// Icône burger pour la home (fond vidéo sombre)
const BURGER_ICON_HOME = "images/burger-icon-light.png";


// ============================================================
//  2. PAGE D'ACCUEIL — La vidéo ou image plein écran
// ============================================================

const HOME = {
  type: "video",                    // "video" ou "image"
  src: "videos/video.mp4",          // chemin vers ta vidéo ou image
  poster: "images/home-poster.jpg", // image pendant le chargement
};


// ============================================================
//  3. À PROPOS
// ============================================================

const ABOUT = {
  photo: "images/portrait.jpg",

  text: `Tatoueur, artiste graphique et poète, je vis et travaille entre l'encre et le papier.

Mon travail explore les frontières entre le permanent et l'éphémère. Chaque trait est une intention, chaque motif raconte une histoire.

Formé aux arts graphiques, j'ai trouvé dans le tatouage un moyen d'expression unique — un art qui vit et évolue avec la personne qui le porte.`,

  email: "workwithjolan@outlook.com",
  instagram: "https://instagram.com/jolan_chappaz",
  // Ajoute d'autres réseaux si tu veux :
  // tiktok: "https://tiktok.com/@jolanchappaz",
};


// ============================================================
//  4. CATÉGORIES DE PROJETS
// ============================================================
//
//  Chaque slide est soit une IMAGE, soit un TEXTE :
//  { type: "image", src: "images/tattoo/01.jpg" }
//  { type: "text", content: "Ton texte ici..." }
//
// ============================================================

const CATEGORIES = [
  {
    id: "tattoo",
    title: "Tattoo",
    slides: [
      { type: "image", src: "images/tattoo/01.PNG" },
      { type: "text", content: "Chaque tatouage est une pièce unique, pensée en collaboration avec la personne qui le porte. Mon style puise dans les traditions graphiques tout en cherchant une écriture personnelle." },
      { type: "image", src: "images/tattoo/02.PNG" },
      { type: "image", src: "images/tattoo/03.PNG" },
      { type: "text", content: "Je travaille principalement au dotwork et en lignes fines. Chaque motif est dessiné à la main avant d'être transposé sur la peau." },
      { type: "image", src: "images/tattoo/04.PNG" },
      { type: "image", src: "images/tattoo/05.PNG" },
    ],
  },

  {
    id: "exposition",
    title: "Exposition",
    slides: [
      { type: "text", content: "Mes expositions explorent le dialogue entre le dessin traditionnel et l'art contemporain. Chaque série est une réflexion sur le trait et la forme." },
      { type: "image", src: "images/exposition/01.jpg" },
      { type: "image", src: "images/exposition/02.jpg" },
      { type: "text", content: "L'espace d'exposition devient lui-même partie de l'œuvre — les murs blancs accueillent l'encre comme la peau accueille le tatouage." },
      { type: "image", src: "images/exposition/03.jpg" },
      { type: "image", src: "images/exposition/04.jpg" },
    ],
  },

  {
    id: "poemes",
    title: "Poèmes",
    slides: [
      { type: "image", src: "images/poemes/01.jpg" },
      { type: "text", content: "La poésie comme tatouage de l'esprit — des mots qui restent gravés bien après la lecture. Chaque poème est un fragment, une respiration entre deux traits." },
      { type: "image", src: "images/poemes/02.jpg" },
      { type: "image", src: "images/poemes/03.jpg" },
      { type: "text", content: "J'écris comme je dessine : par accumulation de détails infimes qui finissent par former un tout." },
    ],
  },

  {
    id: "peintures",
    title: "Peintures",
    slides: [
      { type: "image", src: "images/peintures/01.jpg" },
      { type: "image", src: "images/peintures/02.jpg" },
      { type: "text", content: "Acrylique, encre, aquarelle — je travaille sur différents supports en cherchant toujours la spontanéité du geste. La peinture est un espace de liberté totale." },
      { type: "image", src: "images/peintures/03.jpg" },
      { type: "image", src: "images/peintures/04.jpg" },
    ],
  },
];


// ⚠️ NE TOUCHE PAS EN DESSOUS DE CETTE LIGNE ⚠️
