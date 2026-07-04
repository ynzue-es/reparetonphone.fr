import Image from "next/image";
import { ClockIcon, HouseIcon, ShieldCheckIcon, MapPinIcon, LightningIcon } from "@phosphor-icons/react/dist/ssr";
import { CallButton, WhatsAppButton } from "@/components/cta";
import { site } from "@/lib/config";
import { brandLogos, BrandGlyph } from "@/components/brand-logos";

const highlights = [
  { icon: HouseIcon, label: "Déplacement à domicile" },
  { icon: ClockIcon, label: "Réparé dans la journée" },
  { icon: ShieldCheckIcon, label: "Diagnostic gratuit" },
];

export function Hero() {
  return (
    <section id="top" className="hero-surface relative overflow-hidden">
      <div className="dots pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        {/* Colonne texte */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
            <MapPinIcon className="size-4 text-teal-600" />
            {site.ville} · {site.region} · {site.departement}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Réparation de téléphone
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient">à {site.ville}</span> et alentours
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Écran cassé, batterie fatiguée, connecteur HS&nbsp;? Je répare votre
            iPhone, Samsung et toutes marques{" "}
            <strong className="font-semibold text-foreground">rapidement</strong>, souvent{" "}
            <strong className="font-semibold text-foreground">dans la journée</strong>. Et je peux
            même venir chercher votre téléphone{" "}
            <strong className="font-semibold text-foreground">à domicile</strong>.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <WhatsAppButton />
          </div>

          {/* Bandeau de confiance */}
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheckIcon className="size-4 shrink-0 text-teal-600" aria-hidden />
            <span>
              <strong className="font-semibold text-foreground">Travail garanti</strong> · devis
              gratuit · vous payez une fois satisfait
            </span>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-3 text-sm font-medium text-foreground shadow-sm"
              >
                <Icon className="size-5 shrink-0 text-brand-600" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne visuelle : photo + cartes flottantes */}
        <div className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-brand-900/5">
              <Image
                src="/images/hero.jpg"
                alt="Réparateur remplaçant l'écran d'un smartphone à Oyonnax"
                width={900}
                height={1100}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Carte flottante : rapidité */}
            <div className="absolute -left-3 top-6 flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-left-6">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-gradient">
                <LightningIcon className="size-5 text-white" />
              </span>
              <span className="text-sm leading-tight text-foreground">
                <span className="block font-heading font-bold">≈ 30 min</span>
                <span className="block text-muted-foreground">écran &amp; batterie</span>
              </span>
            </div>

            {/* Carte flottante : disponibilité */}
            <div className="absolute -right-2 bottom-6 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-right-5">
              <span className="size-2.5 rounded-full bg-[#25D366]" />
              <span className="text-sm font-semibold text-foreground">Disponible aujourd&apos;hui</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bandeau marques — carrousel infini (défilement horizontal) */}
      <div className="relative border-t border-border bg-card/60 py-7">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Toutes marques réparées
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee items-center">
            {[0, 1].map((groupe) => (
              <div
                key={groupe}
                className="flex shrink-0 items-center gap-x-14 pr-14"
                aria-hidden={groupe === 1}
              >
                {brandLogos.map((logo) => (
                  <BrandGlyph
                    key={logo.nom}
                    logo={logo}
                    className="h-7 w-auto shrink-0 text-foreground/50 transition-colors hover:text-foreground"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
