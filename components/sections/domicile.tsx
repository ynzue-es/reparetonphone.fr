import Image from "next/image";
import { PackageCheck, Wrench, Truck, Home } from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/config";

const etapes = [
  {
    icon: Truck,
    titre: "Je viens le chercher",
    texte: "Je me déplace chez vous, sur votre lieu de travail ou à l'endroit qui vous arrange.",
  },
  {
    icon: Wrench,
    titre: "Je le répare",
    texte: "Réparation soignée avec des pièces de qualité, souvent le jour même.",
  },
  {
    icon: PackageCheck,
    titre: "Je vous le ramène",
    texte: "Je vous rapporte votre téléphone réparé, testé et prêt à l'emploi.",
  },
];

export function Domicile() {
  return (
    <section id="domicile" className="relative overflow-hidden py-20 sm:py-24">
      <div className="hero-surface absolute inset-0" aria-hidden />
      <div className="dots pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 text-white sm:px-6 lg:grid-cols-2">
        {/* Visuel */}
        <Reveal className="relative order-last lg:order-first">
          <div
            className="absolute -inset-4 rounded-[2.5rem] opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 40% 40%, oklch(0.58 0.24 292 / 0.45), transparent 70%)",
            }}
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl">
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
          <div className="absolute -bottom-4 left-6 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-[oklch(0.2_0.03_265)] px-4 py-3 shadow-xl">
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-gradient">
              <Home className="size-5 text-white" />
            </span>
            <span className="text-sm font-semibold leading-tight">
              Service à domicile
              <span className="block font-normal text-white/70">sur {site.ville} &amp; alentours</span>
            </span>
          </div>
        </Reveal>

        {/* Texte + étapes */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-cyan">
              <Home className="size-4" />
              L&apos;avantage qui change tout
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Je me déplace <span className="text-gradient">à domicile</span>
            </h2>
            <p className="mt-4 text-xl font-medium text-white/90">
              « Je viens chercher votre téléphone, je le répare, je vous le ramène. »
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/70">
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
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-lg">
                      <Icon className="size-5" />
                    </span>
                    {i < etapes.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-white/15" aria-hidden />
                    )}
                  </span>
                  <span className="pb-2">
                    <span className="font-heading text-lg font-bold">
                      {i + 1}. {etape.titre}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-white/70">
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
