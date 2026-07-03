import { MapPin, Navigation, Car } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";
import { communes, deplacement, site } from "@/lib/config";

const prixKmAffiche = deplacement.prixKm.toFixed(2).replace(".", ",");

export function Zone() {
  return (
    <section id="zone" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Zone desservie"
          title={
            <>
              J&apos;interviens à {site.ville} et dans tout le {site.region}
            </>
          }
          description="Réparation en boutique de proximité ou à domicile, dans un rayon large autour d'Oyonnax."
        />

        <Reveal className="mt-12">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
            <div className="flex items-center justify-center gap-2 text-brand-600">
              <Navigation className="size-5" />
              <span className="font-heading font-semibold">Communes couvertes</span>
            </div>
            <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
              {communes.map((commune, i) => (
                <li
                  key={commune}
                  data-reveal=""
                  className="is-visible inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50/70 px-3.5 py-1.5 text-sm font-medium text-brand-800 transition-transform duration-200 hover:-translate-y-0.5 hover:border-brand-300"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <MapPin className="size-3.5 text-brand-500" />
                  {commune}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-start justify-center gap-3 rounded-2xl border border-brand-100 bg-brand-50/50 px-5 py-4 text-left">
              <Car className="mt-0.5 size-5 shrink-0 text-brand-600" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Déplacement à domicile offert</span> dans un rayon
                de {deplacement.rayonGratuitKm} km autour d&apos;{site.ville}. Au-delà,{" "}
                {prixKmAffiche} €/km (aller-retour) pour couvrir le carburant et les frais du
                véhicule — annoncé à l&apos;avance, jamais de surprise.
              </p>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Votre commune n&apos;est pas dans la liste&nbsp;? Elle est sûrement dans ma zone —{" "}
              <span className="font-medium text-foreground">appelez pour vérifier</span>, c&apos;est sans engagement.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
