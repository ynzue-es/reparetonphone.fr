import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";
import { CallButton } from "@/components/cta";
import { engagements } from "@/lib/config";

export function Engagements() {
  return (
    <section id="engagements" className="section-tint py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Mes engagements"
          title="Ce sur quoi vous pouvez compter"
          description="Pas de promesses en l'air : des engagements concrets, tenus à chaque réparation."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {engagements.map((e, i) => {
            const Icon = e.icon;
            return (
              <Reveal key={e.titre} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                    {e.titre}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.texte}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            Une question avant de vous lancer&nbsp;? Le diagnostic et le devis sont gratuits.
          </p>
          <CallButton label="Demander mon devis gratuit" showNumber={false} />
        </Reveal>
      </div>
    </section>
  );
}
