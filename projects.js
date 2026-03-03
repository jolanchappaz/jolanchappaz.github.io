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
  photo: "images/about/01.jpeg",

  text: `Jolan Chappaz grew up in the Swiss alps surrounded by endless views. This has forever shaped the gentleness of his gaze. With an academic background, a master's degree in communication and journalism, he finds the needed balance by spending his free time in the mountains and his sketchbooks.
The direct writing and instinctive drawings that unfold there share a common characteristic: conveying a sensation in just a few words or gestures. That’s why he has always been drawn to poetry - and more recently songwriting. Visually, he draws his inspiration from Swiss folk art and the history of tattooing.
He currently works at Nuit Noire Tattoo in Geneva and from his home atelier in Villars-sur-Ollon, Switzerland.
For all inquiries:
Mail / Instagram`,

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
      { type: "image", src: "images/tattoo/1.webp" },
      { type: "text", content: "I work at Nuit Noire Tattoo in Geneva. All my tattoos are made without the aid of a machine." },
      { type: "image", src: "images/tattoo/2.webp" },      
      { type: "text", content: "Most of my designs are inspired by the history of tattooing and Swiss folk art, and can be tattooed several times." },
      { type: "image", src: "images/tattoo/3.webp" },
      { type: "image", src: "images/tattoo/4.webp" },
      { type: "text", content: "I also take some personal projects. If it’s too far from my work, I’ll do my best to recommend other tattooers." },
      { type: "image", src: "images/tattoo/5.webp" },
      { type: "image", src: "images/tattoo/6.webp" },
      { type: "image", src: "images/tattoo/7.webp" },
      { type: "text", content: "Discover more on my Instagram and don’t hesitate to contact me if you have any questions, by DM or by mail." },
      { type: "image", src: "images/tattoo/8.webp" },
      { type: "image", src: "images/tattoo/9.webp" },
      { type: "image", src: "images/tattoo/10.webp" },
    ],
  },

  {
    id: "paintings",
    title: "Paintings",
    slides: [
      { type: "image", src: "images/paintings/1.jpg" },
      { type: "text", content: "‘Quick and painless’ 1h max of painting Acrylic on cardboard 40x55 cm For all inquiries: mail Paintings 5, 7 and 8 are sold." },
      { type: "image", src: "images/paintings/2.jpg" },
      { type: "image", src: "images/paintings/3.jpg" },
      { type: "image", src: "images/paintings/4.jpg" },
      { type: "image", src: "images/paintings/5.jpg" },
      { type: "image", src: "images/paintings/6.jpg" },
      { type: "image", src: "images/paintings/7.jpg" },
      { type: "image", src: "images/paintings/8.jpg" },
    ],
  },

  {
    id: "bonne nuit 2025",
    title: "Bonne Nuit (2025)",
    slides: [
      { type: "image", src: "images/bonne nuit 2025/1.jpg" },
      { type: "text", content: "Bonne Nuit 30 poems: 2021 30 sheets of flashs: 2023-2025 Layout and printing: Kaleidoskop Editions (Jordan Espagne), Martigny, Switzerland, 2026" },
      { type: "image", src: "images/bonne nuit 2025/2.jpg" },
      { type: "image", src: "images/bonne nuit 2025/3.jpg" },
      { type: "text", content: "With this first collection of poems ~ flash book, I wanted to create a hand-assembled box set that includes: 1 set of stickers and 10 zines - each containing 3 poems, 3 sheets of flash tattoos, and unfolding into an A3 poster." },
      { type: "image", src: "images/bonne nuit 2025/4.jpg" },
      { type: "image", src: "images/bonne nuit 2025/5.jpg" },
      { type: "image", src: "images/bonne nuit 2025/6.jpg" },
      { type: "text", content: "Limited edition of 100 copies. 35 CHF (+ shipping costs). For all inquiries: mail" },
    ],
  },

  {
    id: "A La Fin 2024",
    title: "A La Fin (2024)",
    slides: [
      { type: "text", content: "Coming Soon" },
    ],
  },

  {
    id: "Merch",
    title: "Merch",
    slides: [
      { type: "image", src: "images/merch/1.jpg" },
      { type: "text", content: "Bandanas to wear or to hang at home. The design is inspired by the summers I spent haying at my grandparents. Every bandana has been manually screen printed in Switzerland by @sami_and_co_ch. Prints may contain imperfections and, therefore, have slight differences. That’s part of the process and beauty of working by hand. *54x54 cm *97% polyester, 3% cotton *Khaki with black ink / Khaki with off-white ink *SOLD OUT" },
      { type: "image", src: "images/merch/2.jpg" },
      { type: "image", src: "images/merch/3.jpg" },
      { type: "image", src: "images/merch/4.jpg" },
      { type: "image", src: "images/merch/5.jpg" },
      { type: "text", content: "J.C on Viagra’ 2025 A tribute to one of the best frontman ever: Sebastian Murphy from the band Viagra Boys. I painted it for the collective exhibition celebrating the 20th birthday of my all time favourite concert venue: les Docks in Lausanne. The painting reinterprets Murphy’s tattoos and blends some visuals from the band’s albums.* On the chair : original painting, 50x40cm, acrylic on cardboard* On the wall: high quality print, A2, on fine art paper 300 g/m2, serie of 11 signed For all inquiries: mail" },
      { type: "image", src: "images/merch/6.jpg" },
      { type: "image", src: "images/merch/7.jpg" },
    ],
  },
];


// ⚠️ NE TOUCHE PAS EN DESSOUS DE CETTE LIGNE ⚠️
