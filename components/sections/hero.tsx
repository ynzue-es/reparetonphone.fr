import Image from "next/image";
import { Clock, Home, ShieldCheck, MapPin, Star, Zap } from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/cta";
import { site, marques, notation } from "@/lib/config";

const highlights = [
  { icon: Home, label: "Déplacement à domicile" },
  { icon: Clock, label: "Réparé dans la journée" },
  { icon: ShieldCheck, label: "Diagnostic gratuit" },
];

export function Hero() {
  return (
    <section id="top" className="hero-surface relative overflow-hidden text-white">
      <div className="dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        {/* Colonne texte */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
            <MapPin className="size-4 text-cyan" />
            {site.ville} · {site.region} · {site.departement}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Réparation de téléphone
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient">à {site.ville}</span> et alentours
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Écran cassé, batterie fatiguée, connecteur HS&nbsp;? Je répare votre
            iPhone, Samsung et toutes marques{" "}
            <strong className="font-semibold text-white">rapidement</strong>, souvent{" "}
            <strong className="font-semibold text-white">dans la journée</strong>. Et je peux même
            venir chercher votre téléphone{" "}
            <strong className="font-semibold text-white">à domicile</strong>.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <WhatsAppButton />
          </div>

          {/* Preuve sociale rapide */}
          <div className="mt-6 flex items-center gap-2 text-sm text-white/75">
            <span className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span>
              <strong className="font-semibold text-white">
                {notation.moyenne.toFixed(1).replace(".", ",")}/5
              </strong>{" "}
              · {notation.nombre} clients satisfaits
            </span>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-3 text-sm font-medium"
              >
                <Icon className="size-5 shrink-0 text-cyan" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne visuelle : vraie photo + cartes flottantes */}
        <div className="relative">
          <div className="relative mx-auto max-w-md">
            {/* Halo (gradient, pas de blur) */}
            <div
              className="absolute -inset-5 rounded-[2.5rem] opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 35%, oklch(0.72 0.15 210 / 0.45), transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Réparateur remplaçant l'écran d'un smartphone à Oyonnax"
                width={900}
                height={1100}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, oklch(0.16 0.03 265 / 0.55), transparent 45%)",
                }}
                aria-hidden
              />
            </div>

            {/* Carte flottante : rapidité */}
            <div className="absolute -left-3 top-6 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-[oklch(0.2_0.03_265)] px-4 py-3 shadow-xl sm:-left-6">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-gradient">
                <Zap className="size-5 text-white" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-heading font-bold">≈ 30 min</span>
                <span className="block text-white/70">écran &amp; batterie</span>
              </span>
            </div>

            {/* Carte flottante : disponibilité */}
            <div className="absolute -right-2 bottom-6 flex items-center gap-2 rounded-2xl border border-white/15 bg-[oklch(0.2_0.03_265)] px-4 py-3 shadow-xl sm:-right-5">
              <span className="size-2.5 rounded-full bg-[#25D366]" />
              <span className="text-sm font-semibold">Disponible aujourd&apos;hui</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bandeau marques */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-sm text-white/60 sm:px-6">
          <span className="font-medium text-white/80">Toutes marques&nbsp;:</span>
          {marques.map((m) => (
            <span key={m} className="font-medium">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
