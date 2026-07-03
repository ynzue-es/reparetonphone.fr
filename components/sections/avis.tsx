import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";
import { avis, notation } from "@/lib/config";

function Stars({ note }: { note: number }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${note} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < note ? "size-4 fill-amber-400 text-amber-400" : "size-4 text-muted-foreground/30"
          }
        />
      ))}
    </span>
  );
}

export function Avis() {
  return (
    <section id="avis" className="section-tint py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Avis clients"
          title="Ils m'ont fait confiance"
          description={
            <span className="inline-flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1">
                <Stars note={Math.round(notation.moyenne)} />
              </span>
              <span className="font-semibold text-foreground">
                {notation.moyenne.toFixed(1).replace(".", ",")}/5
              </span>
              <span>· {notation.nombre} avis de clients à Oyonnax et alentours</span>
            </span>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {avis.map((a, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Quote className="size-8 text-brand-200" aria-hidden />
                <Stars note={a.note} />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                  {a.texte}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-gradient font-heading text-sm font-bold text-white">
                    {a.nom.replace(/\[|\]/g, "").trim().charAt(0).toUpperCase() || "?"}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-foreground">{a.nom}</span>
                    <span className="block text-muted-foreground">{a.ville}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
