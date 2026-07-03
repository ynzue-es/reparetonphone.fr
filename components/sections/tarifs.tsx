import { Check, Star } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";
import { CallButton } from "@/components/cta";
import { tarifs } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Tarifs() {
  return (
    <section id="tarifs" className="section-tint py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des prix clairs, annoncés à l'avance"
          description="Voici une grille indicative des réparations les plus courantes. Le prix exact dépend du modèle : demandez-moi un devis gratuit, sans engagement."
        />

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-brand-500/5">
            <table className="w-full text-left">
              <caption className="sr-only">
                Grille de tarifs indicative des réparations de téléphone
              </caption>
              <thead>
                <tr className="bg-brand-gradient text-white">
                  <th scope="col" className="px-5 py-4 font-heading text-sm font-semibold sm:px-7">
                    Réparation
                  </th>
                  <th scope="col" className="px-5 py-4 text-right font-heading text-sm font-semibold sm:px-7">
                    Tarif indicatif
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {tarifs.map((t) => (
                  <tr
                    key={t.reparation}
                    className={cn(
                      "transition-colors hover:bg-brand-50/60",
                      t.populaire && "bg-brand-50/40",
                    )}
                  >
                    <td className="px-5 py-4 sm:px-7">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                          <Check className="size-3.5" strokeWidth={3} />
                        </span>
                        <span className="font-semibold text-foreground">{t.reparation}</span>
                        {t.populaire && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-brand-600/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-brand-700">
                            <Star className="size-3 fill-current" />
                            Populaire
                          </span>
                        )}
                      </div>
                      {t.detail && (
                        <span className="mt-0.5 block pl-7 text-xs text-muted-foreground">
                          {t.detail}
                        </span>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-right font-heading text-base font-bold text-foreground sm:px-7">
                      {t.prix}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-8 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            Prix susceptibles de varier selon le modèle et la disponibilité des pièces.
            Devis précis et gratuit avant toute intervention.
          </p>
          <CallButton label="Obtenir mon devis gratuit" showNumber={false} />
        </Reveal>
      </div>
    </section>
  );
}
