/**
 * ============================================================================
 *  CONFIGURATION DU SITE — Répare Ton Phone
 * ============================================================================
 *  👉 C'est ICI que tu modifies tout le contenu du site sans toucher au code.
 *     Remplace les [À REMPLIR] par tes vraies infos (prix, téléphone, avis...).
 * ============================================================================
 */

import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  BatteryCharging,
  Cable,
  Camera,
  Layers,
  ToggleRight,
  Droplets,
  Wrench,
} from "lucide-react";

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

  // Email de contact (optionnel — utilisé en repli pour le formulaire)
  email: "yannis.nzuepro@gmail.com",

  // Horaires (affichés dans la section contact + JSON-LD)
  horaires: "Lun–Dim · 9h–19h",
} as const;

/* ---------------------------------------------------------------------------
 *  2. CE QUE JE RÉPARE (grille de services)
 * ------------------------------------------------------------------------- */
export type Service = {
  icon: LucideIcon;
  titre: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Smartphone,
    titre: "Écran cassé",
    description:
      "Vitre fissurée, tactile qui ne répond plus, affichage KO : remplacement d'écran iPhone, Samsung et autres marques.",
  },
  {
    icon: BatteryCharging,
    titre: "Batterie",
    description:
      "Autonomie en chute libre ou extinctions soudaines ? On remplace la batterie pour lui redonner une seconde jeunesse.",
  },
  {
    icon: Cable,
    titre: "Connecteur de charge",
    description:
      "Le téléphone ne charge plus ou par intermittence : nettoyage ou remplacement du connecteur de charge.",
  },
  {
    icon: Layers,
    titre: "Vitre arrière",
    description:
      "Face arrière brisée : on remplace la vitre pour retrouver un téléphone comme neuf.",
  },
  {
    icon: Camera,
    titre: "Caméra / photo",
    description:
      "Photos floues, objectif rayé ou caméra qui ne s'ouvre plus : réparation du module caméra avant ou arrière.",
  },
  {
    icon: ToggleRight,
    titre: "Boutons",
    description:
      "Bouton power, volume ou home capricieux : on remet vos boutons en état de marche.",
  },
  {
    icon: Droplets,
    titre: "Désoxydation",
    description:
      "Téléphone tombé dans l'eau ? Intervention rapide de nettoyage pour maximiser les chances de récupération.",
  },
  {
    icon: Wrench,
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

// Déplacement à domicile : gratuit près d'Oyonnax, puis participation aux
// frais au km (carburant + assurance + usure du véhicule).
export const deplacement = {
  rayonGratuitKm: 15, // déplacement offert dans ce rayon autour d'Oyonnax
  prixKm: 0.4, // €/km au-delà (aller-retour) — couvre essence, assurance, entretien
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
 *  5. AVIS / TÉMOIGNAGES
 *     👉 Remplace par tes vrais avis clients.
 * ------------------------------------------------------------------------- */
export type Avis = {
  nom: string;
  ville: string;
  note: number; // sur 5
  texte: string;
};

export const avis: Avis[] = [
  {
    nom: "[À REMPLIR — Prénom]",
    ville: "Oyonnax",
    note: 5,
    texte:
      "[À REMPLIR] Exemple : écran d'iPhone changé en 30 minutes, il est passé le chercher au boulot et me l'a ramené réparé le soir même. Service top !",
  },
  {
    nom: "[À REMPLIR — Prénom]",
    ville: "Bellignat",
    note: 5,
    texte:
      "[À REMPLIR] Exemple : batterie de mon Samsung remplacée à domicile, rapide, propre et moins cher qu'en boutique. Je recommande.",
  },
  {
    nom: "[À REMPLIR — Prénom]",
    ville: "Arbent",
    note: 5,
    texte:
      "[À REMPLIR] Exemple : très arrangeant, ponctuel et de bon conseil. Ça fait du bien d'avoir un réparateur de confiance dans le coin.",
  },
];

// Note moyenne affichée + utilisée dans le JSON-LD (mets tes vrais chiffres)
export const notation = {
  moyenne: 5, // [À REMPLIR]
  nombre: 27, // [À REMPLIR] nombre d'avis
};

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
 *  7. LIENS PRÉ-CONSTRUITS (ne pas modifier — dérivés de la config)
 * ------------------------------------------------------------------------- */
export const links = {
  tel: `tel:${site.telephone.replace(/\s/g, "")}`,
  whatsapp: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Bonjour, je souhaite faire réparer mon téléphone.",
  )}`,
  email: `mailto:${site.email}`,
};
