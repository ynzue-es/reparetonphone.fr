/**
 * ============================================================================
 *  CONFIGURATION DU SITE · Répare Ton Phone
 * ============================================================================
 *  👉 C'est ICI que tu modifies tout le contenu du site sans toucher au code.
 *     Tout le contenu (prix, téléphone, engagements...) se règle ici.
 * ============================================================================
 */

import type { Icon } from "@phosphor-icons/react/dist/lib/types";
import {
  DeviceMobileIcon,
  BatteryChargingIcon,
  PlugIcon,
  CameraIcon,
  StackIcon,
  ToggleRightIcon,
  DropIcon,
  WrenchIcon,
  FileTextIcon,
  ShieldCheckIcon,
  WalletIcon,
  HouseIcon,
  CpuIcon,
  CalendarCheckIcon,
} from "@phosphor-icons/react/dist/ssr";

/* ---------------------------------------------------------------------------
 *  1. INFOS GÉNÉRALES / CONTACT
 * ------------------------------------------------------------------------- */
export const site = {
  name: "Répare Ton Phone",
  // Baseline courte affichée un peu partout
  tagline: "Réparation de téléphone à Oyonnax et dans le Haut-Bugey",
  // Domaine de production (sans slash final)
  url: "https://reparetonphone.fr",
  ville: "Oyonnax",
  region: "Haut-Bugey",
  departement: "Ain",

  // ⚠️ REMPLACE par ton vrai numéro (format international pour tel: et WhatsApp)
  // Exemple : "+33612345678"
  telephone: "+33609630523",
  // Version affichée (jolie)
  telephoneAffiche: "06 09 63 05 23",

  // Numéro WhatsApp au format international SANS le "+" ni espaces (ex : 33612345678)
  whatsapp: "33609630523",

  // Email de contact (optionnel, utilisé en repli pour le formulaire)
  email: "yannis.nzuepro@gmail.com",

  // Horaires (affichés dans la section contact + JSON-LD)
  horaires: "Lun–Dim · 9h–19h",
} as const;

/* ---------------------------------------------------------------------------
 *  2. CE QUE JE RÉPARE (grille de services)
 * ------------------------------------------------------------------------- */
export type Service = {
  icon: Icon;
  titre: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: DeviceMobileIcon,
    titre: "Écran cassé",
    description:
      "Vitre fissurée, tactile qui ne répond plus, affichage KO : remplacement d'écran iPhone, Samsung et autres marques.",
  },
  {
    icon: BatteryChargingIcon,
    titre: "Batterie",
    description:
      "Autonomie en chute libre ou extinctions soudaines ? On remplace la batterie pour lui redonner une seconde jeunesse.",
  },
  {
    icon: PlugIcon,
    titre: "Connecteur de charge",
    description:
      "Le téléphone ne charge plus ou par intermittence : nettoyage ou remplacement du connecteur de charge.",
  },
  {
    icon: StackIcon,
    titre: "Vitre arrière",
    description:
      "Face arrière brisée : on remplace la vitre pour retrouver un téléphone comme neuf.",
  },
  {
    icon: CameraIcon,
    titre: "Caméra / photo",
    description:
      "Photos floues, objectif rayé ou caméra qui ne s'ouvre plus : réparation du module caméra avant ou arrière.",
  },
  {
    icon: ToggleRightIcon,
    titre: "Boutons",
    description:
      "Bouton power, volume ou home capricieux : on remet vos boutons en état de marche.",
  },
  {
    icon: DropIcon,
    titre: "Désoxydation",
    description:
      "Téléphone tombé dans l'eau ? Intervention rapide de nettoyage pour maximiser les chances de récupération.",
  },
  {
    icon: WrenchIcon,
    titre: "Diagnostic & autres pannes",
    description:
      "Un souci qui n'est pas dans la liste ? Diagnostic offert et devis clair avant toute réparation.",
  },
];

// Marques prises en charge (affichées en bandeau)
export const marques: string[] = [
  "iPhone",
  "Samsung",
  "Xiaomi",
  "Huawei",
  "Oppo",
  "Google Pixel",
  "OnePlus",
  "Honor",
];

/* ---------------------------------------------------------------------------
 *  3. GRILLE DE TARIFS INDICATIVE
 *     👉 Prix « à partir de », pièce compatible/premium garantie.
 *        Le prix exact dépend du modèle : devis gratuit avant intervention.
 * ------------------------------------------------------------------------- */
export type TarifLigne = {
  reparation: string;
  detail?: string;
  prix: string; // ex : "dès 65€"
  populaire?: boolean; // met en avant la ligne
};

export type TarifGroupe = {
  categorie: string;
  note?: string; // précision affichée à côté du titre de catégorie
  lignes: TarifLigne[];
};

export const tarifs: TarifGroupe[] = [
  {
    categorie: "Écrans iPhone",
    note: "Pièce compatible ou premium, garantie",
    lignes: [
      { reparation: "iPhone XR / 11", prix: "dès 65€", populaire: true },
      { reparation: "iPhone 12 / 12 Pro / 13", prix: "dès 90€", populaire: true },
      { reparation: "iPhone 13 Pro / 14 / 14 Pro", prix: "dès 120€" },
      { reparation: "iPhone 15 / 15 Pro", prix: "dès 150€" },
      { reparation: "iPhone 16 / 16 Pro", prix: "dès 180€" },
    ],
  },
  {
    categorie: "Batteries iPhone",
    note: "Autonomie retrouvée",
    lignes: [
      { reparation: "iPhone X à 11", prix: "dès 45€" },
      { reparation: "iPhone 12 à 13", prix: "dès 55€" },
      { reparation: "iPhone 14 à 16", prix: "dès 65€" },
    ],
  },
  {
    categorie: "Samsung",
    note: "Écrans AMOLED d'origine",
    lignes: [
      { reparation: "Écran Galaxy A (milieu de gamme)", prix: "dès 70€" },
      { reparation: "Écran Galaxy S récents", prix: "dès 130€" },
      { reparation: "Batterie Samsung", prix: "dès 50€" },
    ],
  },
  {
    categorie: "Autres réparations",
    note: "Toutes marques",
    lignes: [
      { reparation: "Vitre arrière", prix: "dès 40€" },
      { reparation: "Connecteur de charge", prix: "dès 45€" },
      { reparation: "Caméra (avant / arrière)", prix: "dès 45€" },
      { reparation: "Boutons (volume / power)", prix: "dès 40€" },
      {
        reparation: "Désoxydation",
        detail: "Téléphone tombé dans l'eau · diagnostic offert",
        prix: "dès 50€",
      },
      { reparation: "Diagnostic", detail: "Avant toute réparation", prix: "Gratuit" },
    ],
  },
];

/* ---------------------------------------------------------------------------
 *  4. ZONE DESSERVIE (SEO local)
 * ------------------------------------------------------------------------- */

// Déplacement à domicile : gratuit près d'Oyonnax, puis forfait fixe au-delà.
export const deplacement = {
  rayonGratuitKm: 15, // déplacement offert dans ce rayon autour d'Oyonnax
  forfaitAuDela: 10, // forfait fixe en € au-delà du rayon gratuit
};

export const communes: string[] = [
  "Oyonnax",
  "Arbent",
  "Bellignat",
  "Montréal-la-Cluse",
  "Nurieux-Volognat",
  "Groissiat",
  "Géovreisset",
  "Dortan",
  "Martignat",
  "Échallon",
  "Samognat",
  "Bénonces",
];

/* ---------------------------------------------------------------------------
 *  5. MES ENGAGEMENTS (ce sur quoi tu t'engages auprès du client)
 *     👉 Des promesses concrètes et honnêtes, à tenir à chaque intervention.
 * ------------------------------------------------------------------------- */
export type Engagement = {
  icon: Icon;
  titre: string;
  texte: string;
};

export const engagements: Engagement[] = [
  {
    icon: FileTextIcon,
    titre: "Devis gratuit et sans engagement",
    texte: "Diagnostic offert et prix annoncé à l'avance. Vous décidez en toute connaissance de cause.",
  },
  {
    icon: ShieldCheckIcon,
    titre: "Réparation garantie",
    texte: "Intervention testée devant vous et garantie. Si quelque chose ne va pas, je reprends l'appareil.",
  },
  {
    icon: WalletIcon,
    titre: "Vous payez une fois satisfait",
    texte: "Le règlement se fait après la réparation, quand le téléphone remarche sous vos yeux.",
  },
  {
    icon: HouseIcon,
    titre: "Déplacement à domicile",
    texte: `Offert dans un rayon de ${deplacement.rayonGratuitKm} km autour d'${site.ville}. Je viens à vous, vous ne perdez pas de temps.`,
  },
  {
    icon: CpuIcon,
    titre: "Pièces de qualité",
    texte: "Des composants compatibles ou premium soigneusement sélectionnés, pour une réparation qui dure.",
  },
  {
    icon: CalendarCheckIcon,
    titre: "Disponible 7j/7",
    texte: `Joignable ${site.horaires.toLowerCase()}, en semaine comme le week-end, pour dépanner vite.`,
  },
];

/* ---------------------------------------------------------------------------
 *  6. ARGUMENTS / DÉLAIS
 * ------------------------------------------------------------------------- */
export const delais = [
  {
    titre: "Écran & batterie",
    valeur: "≈ 30 min",
    description: "Les pannes les plus courantes réparées sur place, en un rien de temps.",
  },
  {
    titre: "La plupart des réparations",
    valeur: "Dans la journée",
    description: "Vous récupérez votre téléphone le jour même, sans rester des jours sans mobile.",
  },
  {
    titre: "Diagnostic",
    valeur: "Immédiat",
    description: "On identifie la panne et on vous donne un prix clair tout de suite.",
  },
];

/* ---------------------------------------------------------------------------
 *  7. LIENS PRÉ-CONSTRUITS (ne pas modifier, dérivés de la config)
 * ------------------------------------------------------------------------- */
export const links = {
  tel: `tel:${site.telephone.replace(/\s/g, "")}`,
  whatsapp: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Bonjour, je souhaite faire réparer mon téléphone.",
  )}`,
  email: `mailto:${site.email}`,
};
