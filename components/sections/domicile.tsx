import Image from "next/image";
import { PackageIcon, WrenchIcon, TruckIcon, HouseIcon } from "@phosphor-icons/react/dist/ssr";
import { CallButton, WhatsAppButton } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/config";

const etapes = [
  {
    icon: TruckIcon,
    titre: "Je viens le chercher",
    texte: "Je me déplace chez vous, sur votre lieu de travail ou à l'endroit qui vous arrange.",
  },
  {
    icon: WrenchIcon,
    titre: "Je le répare",
    texte: "Réparation soignée avec des pièces de qualité, souvent le jour même.",
  },
  {
    icon: PackageIcon,
    titre: "Je vous le ramène",
    texte: "Je vous rapporte votre téléphone réparé, testé et prêt à l'emploi.",
  },
];

export function Domicile() {
  return (
    <section id="domicile" className="relative overflow-hidden bg-brand-50/40 py-20 sm:py-24">
      <div className="dots pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Visuel (à droite sur desktop — alternance avec la section À propos) */}
        <Reveal className="relative order-last">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-brand-900/5">
            <Image
              src="/images/domicile.jpg"
              alt="Réparateur récupérant un téléphone à domicile à Oyonnax"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          {/* Badge flottant */}
          <div className="absolute -bottom-4 left-6 flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg">
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-gradient">
              <HouseIcon className="size-5 text-white" />
            </span>
            <span className="text-sm font-semibold leading-tight text-foreground">
              Service à domicile
              <span className="block font-normal text-muted-foreground">
                sur {site.ville} &amp; alentours
              </span>
            </span>
          </div>
        </Reveal>

        {/* Texte + étapes */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
              <HouseIcon className="size-4" />
              L&apos;avantage qui change tout
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Je me déplace <span className="text-gradient">à domicile</span>
            </h2>
            <p className="mt-4 text-xl font-medium text-foreground">
              « Je viens chercher votre téléphone, je le répare, je vous le ramène. »
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Pas le temps de vous déplacer&nbsp;? Pas de boutique à proximité&nbsp;? Je m&apos;occupe
              de tout. Zéro contrainte, zéro perte de temps.
            </p>
          </Reveal>

          <ol className="mt-8 space-y-4">
            {etapes.map((etape, i) => {
              const Icon = etape.icon;
              return (
                <Reveal as="li" key={etape.titre} delay={i * 90} className="flex gap-4">
                  <span className="relative flex flex-col items-center">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand-900/10">
                      <Icon className="size-5" />
                    </span>
                    {i < etapes.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-border" aria-hidden />
                    )}
                  </span>
                  <span className="pb-2">
                    <span className="font-heading text-lg font-bold text-foreground">
                      {i + 1}. {etape.titre}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {etape.texte}
                    </span>
                  </span>
                </Reveal>
              );
            })}
          </ol>

          <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton label="Planifier un déplacement" showNumber={false} />
            <WhatsAppButton label="En parler sur WhatsApp" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
