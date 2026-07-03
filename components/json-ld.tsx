import { site, communes, services, notation, avis } from "@/lib/config";

/**
 * Données structurées Schema.org pour le référencement local (Google).
 * Type LocalBusiness spécialisé "MobilePhoneStore" avec zone desservie,
 * services proposés et note agrégée.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MobilePhoneStore"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description:
      "Réparation de téléphones et smartphones à Oyonnax et dans le Haut-Bugey : écran, batterie, connecteur de charge, vitre arrière, caméra. iPhone, Samsung et toutes marques. Déplacement à domicile.",
    url: site.url,
    telephone: site.telephone,
    email: site.email,
    priceRange: "€€",
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/icon.svg`,
    currenciesAccepted: "EUR",
    paymentAccepted: "Espèces, Carte bancaire, Virement",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.ville,
      addressRegion: site.region,
      postalCode: "01100",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.2578,
      longitude: 5.6558,
    },
    areaServed: communes.map((c) => ({
      "@type": "City",
      name: c,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${s.titre} — réparation téléphone ${site.ville}`,
        description: s.description,
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: notation.moyenne,
      reviewCount: notation.nombre,
      bestRating: 5,
      worstRating: 1,
    },
    review: avis.map((a) => ({
      "@type": "Review",
      author: { "@type": "Person", name: a.nom },
      reviewRating: {
        "@type": "Rating",
        ratingValue: a.note,
        bestRating: 5,
      },
      reviewBody: a.texte,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
