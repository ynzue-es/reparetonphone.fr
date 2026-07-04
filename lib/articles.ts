/**
 * ============================================================================
 *  ARTICLES / CONSEILS · Contenu éditorial pour le référencement (SEO)
 * ============================================================================
 *  Chaque article devient une page /conseils/[slug], indexée par Google.
 *  Tu peux modifier, ajouter ou supprimer des articles ici librement.
 * ============================================================================
 */

export type Bloc =
  | { type: "p"; texte: string }
  | { type: "h2"; texte: string }
  | { type: "ul"; items: string[] }
  | { type: "cta"; texte: string };

export type Article = {
  slug: string;
  titre: string;
  description: string; // meta description + accroche
  image: string; // chemin dans /public
  imageAlt: string;
  date: string; // ISO (AAAA-MM-JJ)
  dateAffiche: string;
  lecture: string; // temps de lecture
  motsCles: string[];
  contenu: Bloc[];
};

export const articles: Article[] = [
  {
    slug: "reparation-ecran-telephone-oyonnax",
    titre: "Écran de téléphone cassé à Oyonnax : que faire (et combien ça coûte) ?",
    description:
      "Votre écran de téléphone est fissuré ou le tactile ne répond plus à Oyonnax ? Nos conseils pour réagir, protéger vos données et faire réparer votre écran rapidement dans le Haut-Bugey.",
    image: "/images/blog-ecran.jpg",
    imageAlt: "Réparation d'un écran de téléphone cassé par un technicien à Oyonnax",
    date: "2026-06-24",
    dateAffiche: "24 juin 2026",
    lecture: "4 min",
    motsCles: [
      "réparation écran téléphone Oyonnax",
      "écran cassé iPhone Oyonnax",
      "changer écran smartphone Haut-Bugey",
    ],
    contenu: [
      {
        type: "p",
        texte:
          "L'écran cassé, c'est de loin la panne la plus fréquente. Une chute, un coin de table, et voilà la vitre étoilée ou le tactile qui devient capricieux. Bonne nouvelle : à Oyonnax et dans le Haut-Bugey, un écran se remplace généralement en moins d'une heure. Voici comment bien réagir.",
      },
      { type: "h2", texte: "Vitre fissurée ou écran vraiment cassé ?" },
      {
        type: "p",
        texte:
          "Toutes les casses ne se valent pas. Avant de paniquer, regardez si :",
      },
      {
        type: "ul",
        items: [
          "seule la vitre est fêlée mais l'affichage et le tactile fonctionnent (réparation la plus simple) ;",
          "l'affichage présente des taches, des lignes de couleur ou des zones noires (la dalle est touchée) ;",
          "le tactile ne répond plus, en partie ou totalement (le digitaliseur est HS).",
        ],
      },
      {
        type: "p",
        texte:
          "Dans tous les cas, évitez de continuer à utiliser un écran fissuré : les micro-éclats peuvent blesser, s'infiltrer sous la dalle et aggraver la panne.",
      },
      { type: "h2", texte: "Les bons réflexes avant la réparation" },
      {
        type: "ul",
        items: [
          "Sauvegardez vos données si le téléphone s'allume encore (photos, contacts) via iCloud, Google ou un ordinateur.",
          "Posez un film ou un morceau de ruban adhésif transparent sur la vitre pour limiter la propagation des fissures.",
          "Notez votre code de déverrouillage : il sera utile au technicien pour tester l'écran après réparation.",
          "N'appuyez pas fort sur la zone abîmée pour éviter d'endommager la dalle en dessous.",
        ],
      },
      { type: "h2", texte: "Combien coûte un changement d'écran ?" },
      {
        type: "p",
        texte:
          "Le prix dépend surtout du modèle : un écran d'entrée de gamme coûte bien moins cher qu'une dalle OLED de dernier iPhone ou Samsung Galaxy. Le mieux reste de demander un devis gratuit : je vous annonce le tarif exact avant toute intervention, sans surprise.",
      },
      { type: "cta", texte: "Demandez votre devis écran gratuit" },
      { type: "h2", texte: "Réparation rapide, et même à domicile" },
      {
        type: "p",
        texte:
          "La plupart des remplacements d'écran se font dans la journée, souvent en 30 minutes. Et si vous ne pouvez pas vous déplacer, je viens récupérer votre téléphone à Oyonnax, Arbent, Bellignat ou dans les communes alentour, je le répare et je vous le ramène. Pratique quand on n'a pas le temps.",
      },
    ],
  },
  {
    slug: "batterie-telephone-se-decharge-vite",
    titre: "Batterie de téléphone qui se décharge vite : faut-il la changer ?",
    description:
      "Autonomie en chute libre, téléphone qui s'éteint tout seul ? Découvrez comment savoir si votre batterie est usée et quand la faire remplacer à Oyonnax et dans le Haut-Bugey.",
    image: "/images/blog-batterie.jpg",
    imageAlt: "Batterie d'un smartphone en cours de remplacement",
    date: "2026-06-12",
    dateAffiche: "12 juin 2026",
    lecture: "3 min",
    motsCles: [
      "changement batterie téléphone Oyonnax",
      "batterie iPhone qui se décharge vite",
      "remplacer batterie smartphone Haut-Bugey",
    ],
    contenu: [
      {
        type: "p",
        texte:
          "Une batterie de smartphone est un consommable : au bout de 2 à 3 ans, elle perd naturellement en capacité. Si vous rechargez plusieurs fois par jour ou si le téléphone s'éteint alors qu'il indique encore 30 %, il est sûrement temps de la remplacer.",
      },
      { type: "h2", texte: "Les signes d'une batterie usée" },
      {
        type: "ul",
        items: [
          "L'autonomie a nettement baissé par rapport à l'an dernier.",
          "Le téléphone s'éteint brutalement, surtout par temps froid.",
          "Il chauffe anormalement ou gonfle (dans ce cas, arrêtez de l'utiliser).",
          "Sur iPhone : Réglages › Batterie › État de la batterie affiche une capacité maximale sous 80 %.",
        ],
      },
      { type: "h2", texte: "Changer la batterie plutôt que le téléphone" },
      {
        type: "p",
        texte:
          "Avant de dépenser plusieurs centaines d'euros dans un nouveau modèle, un simple remplacement de batterie redonne souvent une seconde jeunesse à un téléphone qui fonctionne très bien par ailleurs. C'est plus économique et plus écologique.",
      },
      { type: "cta", texte: "Faites diagnostiquer votre batterie gratuitement" },
      { type: "h2", texte: "Combien de temps ça prend ?" },
      {
        type: "p",
        texte:
          "Le remplacement d'une batterie prend en général une trentaine de minutes. À Oyonnax et dans le Haut-Bugey, je peux intervenir dans la journée, et me déplacer à votre domicile pour récupérer et rapporter votre téléphone.",
      },
    ],
  },
  {
    slug: "telephone-tombe-dans-eau-que-faire",
    titre: "Téléphone tombé dans l'eau : les 6 réflexes qui sauvent",
    description:
      "Smartphone tombé dans l'eau, les toilettes ou la piscine ? Les bons gestes à faire immédiatement (et ceux à éviter) pour maximiser vos chances de le récupérer, avec l'aide d'un réparateur à Oyonnax.",
    image: "/images/blog-eau.jpg",
    imageAlt: "Diagnostic d'un téléphone tombé dans l'eau",
    date: "2026-05-30",
    dateAffiche: "30 mai 2026",
    lecture: "3 min",
    motsCles: [
      "téléphone tombé dans l'eau Oyonnax",
      "désoxydation smartphone Haut-Bugey",
      "réparation téléphone oxydé Ain",
    ],
    contenu: [
      {
        type: "p",
        texte:
          "Un téléphone dans l'eau, c'est la panique. Pourtant, ce sont les premières minutes qui comptent le plus. Voici les réflexes à adopter pour maximiser vos chances, et les erreurs à ne surtout pas commettre.",
      },
      { type: "h2", texte: "À faire tout de suite" },
      {
        type: "ul",
        items: [
          "Sortez le téléphone de l'eau et éteignez-le immédiatement (ne vérifiez pas s'il marche encore).",
          "Retirez la coque, la carte SIM et la carte mémoire.",
          "Essuyez-le délicatement et séchez l'extérieur avec un chiffon.",
          "Laissez-le sécher à l'air libre, à plat, dans un endroit sec et tempéré.",
        ],
      },
      { type: "h2", texte: "À NE PAS faire" },
      {
        type: "ul",
        items: [
          "Ne rallumez pas le téléphone et ne le mettez pas en charge : c'est le meilleur moyen de faire un court-circuit.",
          "N'utilisez pas de sèche-cheveux : la chaleur pousse l'eau plus profond et abîme les composants.",
          "Oubliez le mythe du riz : il est peu efficace et laisse de la poussière dans les connecteurs.",
        ],
      },
      { type: "h2", texte: "Pourquoi consulter un réparateur rapidement" },
      {
        type: "p",
        texte:
          "Même sec en apparence, un téléphone qui a pris l'eau s'oxyde de l'intérieur. Une désoxydation professionnelle (nettoyage de la carte mère) réalisée vite augmente nettement les chances de récupération. À Oyonnax et dans le Haut-Bugey, apportez-le ou faites-le récupérer sans attendre.",
      },
      { type: "cta", texte: "Faites vérifier votre téléphone au plus vite" },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
