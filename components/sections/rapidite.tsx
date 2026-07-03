import { Zap } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";
import { delais } from "@/lib/config";

export function Rapidite() {
  return (
    <section id="rapidite" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Rapidité"
          title={
            <>
              Votre téléphone réparé <span className="text-gradient">sans attendre</span>
            </>
          }
          description="On sait à quel point rester sans téléphone est pénible. Objectif : vous le rendre au plus vite."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {delais.map((d, i) => (
            <Reveal key={d.titre} delay={i * 90}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Zap className="size-6" />
                </span>
                <p className="mt-5 font-heading text-3xl font-extrabold text-gradient">
                  {d.valeur}
                </p>
                <p className="mt-2 font-heading text-base font-semibold text-foreground">
                  {d.titre}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
