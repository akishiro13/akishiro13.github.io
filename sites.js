// ============================================================
//  SC ULTRA GUIDE — LISTE DES SITES VALIDÉS
//  
//  Pour AJOUTER un site : copie un bloc et modifie les infos.
//  Pour SUPPRIMER un site : supprime le bloc ou mets enabled: false.
//  
//  Catégories disponibles :
//    "outils", "guides", "trading", "minage", "combat",
//    "exploration", "vaisseaux", "communaute", "officiel"
//
//  Icônes : utilise un emoji comme icône
// ============================================================

const APPROVED_SITES = [

  // ──────────── SITES OFFICIELS ────────────
  {
    name: "Roberts Space Industries",
    description: "Site officiel de Star Citizen — Pledge store, news et compte joueur.",
    url: "https://robertsspaceindustries.com/",
    category: "officiel",
    icon: "🌐",
    color: "cyan",
    enabled: true
  },
  {
    name: "RSI Star Map",
    description: "Carte interactive officielle de tous les systèmes stellaires.",
    url: "https://robertsspaceindustries.com/starmap",
    category: "officiel",
    icon: "🗺️",
    color: "blue",
    enabled: true
  },
  {
    name: "RSI Issue Council",
    description: "Signaler et voter pour les bugs du jeu.",
    url: "https://issue-council.robertsspaceindustries.com/",
    category: "officiel",
    icon: "🐛",
    color: "red",
    enabled: true
  },
  {
    name: "RSI Spectrum",
    description: "Forums et chat officiels de la communauté Star Citizen.",
    url: "https://robertsspaceindustries.com/spectrum/community/SC",
    category: "officiel",
    icon: "💬",
    color: "purple",
    enabled: true
  },

  // ──────────── OUTILS ────────────
  {
    name: "Erkul DPS Calculator",
    description: "Calculateur de DPS, loadouts et composants pour tous les vaisseaux.",
    url: "https://www.erkul.games/",
    category: "outils",
    icon: "🎯",
    color: "blue",
    enabled: true
  },
  {
    name: "FleetYards",
    description: "Base de données complète des vaisseaux avec specs et comparaisons.",
    url: "https://www.fleetyards.net/",
    category: "vaisseaux",
    icon: "🚀",
    color: "purple",
    enabled: true
  },
  {
    name: "CCU Game",
    description: "Planificateur de CCU chains pour optimiser vos upgrades de vaisseaux.",
    url: "https://ccugame.app/",
    category: "outils",
    icon: "🔄",
    color: "gold",
    enabled: true
  },
  {
    name: "UNIVERSAL ITEM FINDER",
    description: "Base de données de toutes les armes, armures et équipements FPS.",
    url: "https://finder.cstone.space/",
    category: "combat",
    icon: "🔫",
    color: "red",
    enabled: true
  },
  // ──────────── TRADING ────────────
  {
    name: "UEX Corp",
    description: "Prix en temps réel, routes de trading et données économiques du verse.",
    url: "https://uexcorp.space/",
    category: "trading",
    icon: "💹",
    color: "gold",
    enabled: true
  },
  {
    name: "SC Trade Tools",
    description: "Calculateur de routes commerciales et profits optimisés.",
    url: "https://sc-trade.tools/",
    category: "trading",
    icon: "📊",
    color: "gold",
    enabled: true
  },

  // ──────────── MINAGE ────────────
  {
    name: "SC Mining Guide (YourSCMatey)",
    description: "Outil dédié au minage : spots, têtes de minage, techniques et profits.",
    url: "https://www.yourscmatey.com/",
    category: "minage",
    icon: "⛏️",
    color: "green",
    enabled: true
  },

  // ──────────── GUIDES ────────────

  {
    name: "Verse Guide (MAP) ",
    description: "Map interactif du verse : planètes, lunes, stations et POIs.",
    url: "https://verseguide.com/",
    category: "exploration",
    icon: "🌍",
    color: "cyan",
    enabled: true
  },

  // ──────────── COMMUNAUTÉ ────────────
  {
    name: "Reddit r/starcitizen",
    description: "La communauté Reddit de Star Citizen — News, memes et discussions.",
    url: "https://www.reddit.com/r/starcitizen/",
    category: "communaute",
    icon: "🗣️",
    color: "red",
    enabled: true
  },
  {
    name: "Star Citizen Wiki",
    description: "Wiki communautaire avec toutes les informations sur le lore et le gameplay.",
    url: "https://starcitizen.tools/",
    category: "guides",
    icon: "📚",
    color: "blue",
    enabled: true
  },

  // ──────────── EXEMPLE SITE DÉSACTIVÉ ────────────
  // {
  //   name: "Exemple Site",
  //   description: "Mets enabled: true quand tu valides ce site.",
  //   url: "https://exemple.com/",
  //   category: "outils",
  //   icon: "🔧",
  //   color: "cyan",
  //   enabled: false
  // },

];

// Catégories avec labels et icônes pour les filtres
const CATEGORIES = {
  all: { label: "Tous", icon: "🌟" },
  officiel: { label: "Officiels", icon: "🌐" },
  outils: { label: "Outils", icon: "🔧" },
  guides: { label: "Guides", icon: "📖" },
  vaisseaux: { label: "Vaisseaux", icon: "🚀" },
  trading: { label: "Trading", icon: "💰" },
  minage: { label: "Minage", icon: "⛏️" },
  combat: { label: "Combat", icon: "⚔️" },
  exploration: { label: "Exploration", icon: "🌍" },
  communaute: { label: "Communauté", icon: "🗣️" },
};
