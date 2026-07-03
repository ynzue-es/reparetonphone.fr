import Image from "next/image";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";
import { services, marques } from "@/lib/config";

export function Services() {
  return (
    <section id="services" className="section-tint py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Ce que je répare"
          title="Toutes les pannes de téléphone, un seul réparateur"
          description="Des réparations soignées avec des pièces de qualité, sur iPhone, Samsung et la plupart des marques du marché."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.titre}
                delay={(i % 4) * 80}
                className="group h-full"
              >
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand-500/25 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                    {service.titre}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bandeau "toutes marques" avec visuel */}
        <Reveal className="mt-8">
          <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm sm:grid-cols-2">
            <div className="relative min-h-56 sm:min-h-full">
              <Image
                src="/images/modeles.jpg"
                alt="Réparation iPhone, Samsung et téléphones toutes marques"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-3 p-7 sm:p-9">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                iPhone, Samsung… et toutes les autres marques
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Quel que soit votre modèle, il y a de fortes chances que je puisse le réparer.
                Un doute&nbsp;? Demandez-moi, le diagnostic est gratuit.
              </p>
              <ul className="mt-1 flex flex-wrap gap-2">
                {marques.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-brand-100 bg-brand-50/70 px-3 py-1 text-xs font-semibold text-brand-800"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
