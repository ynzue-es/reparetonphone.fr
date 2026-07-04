import Image from "next/image";
import { ShieldCheckIcon, MapPinIcon, WrenchIcon, HandHeartIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/config";

const points = [
  {
    icon: WrenchIcon,
    titre: "Pièces de qualité",
    texte: "Des composants soigneusement sélectionnés pour une réparation qui dure.",
  },
  {
    icon: ShieldCheckIcon,
    titre: "Travail garanti",
    texte: "Réparation testée devant vous, avec garantie sur l'intervention.",
  },
  {
    icon: MapPinIcon,
    titre: "Réparateur local",
    texte: `Un interlocuteur unique et humain, basé à ${site.ville}, pas une enseigne anonyme.`,
  },
  {
    icon: HandHeartIcon,
    titre: "Prix honnête",
    texte: "Devis gratuit et transparent, annoncé avant toute réparation.",
  },
];

export function APropos() {
  return (
    <section id="apropos" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Visuel */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-xl">
            <Image
              src="/images/atelier.jpg"
              alt="Réparation minutieuse de la carte mère d'un téléphone"
              width={1200}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[6/5] w-full object-cover"
            />
          </div>
          {/* Carte stat flottante */}
          <div className="absolute -bottom-5 -right-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl sm:-right-5">
            <p className="font-heading text-3xl font-extrabold text-gradient">7j/7</p>
            <p className="text-sm font-medium text-muted-foreground">à votre service</p>
          </div>
        </Reveal>

        {/* Texte */}
        <div>
          <Reveal>
            <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
              Pourquoi me faire confiance
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Un réparateur passionné, près de chez vous
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Je répare les téléphones avec méthode et honnêteté. Mon objectif&nbsp;: vous
              rendre un appareil comme neuf, rapidement, sans vous ruiner et sans jargon.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.titre} delay={i * 70} className="flex gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="font-heading text-base font-bold text-foreground">
                      {p.titre}
                    </span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                      {p.texte}
                    </span>
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
