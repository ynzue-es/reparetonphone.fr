import Link from "next/link";
import { PhoneIcon, ClockIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/cta";
import { links, site, communes } from "@/lib/config";
import { articles } from "@/lib/articles";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Réparation de téléphone à {site.ville} et dans le {site.region} :
              écran, batterie, connecteur… iPhone, Samsung et toutes marques.
              Déplacement à domicile et réparation rapide.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={links.tel}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5"
              >
                <PhoneIcon className="size-4" />
                Appeler
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2.5 text-sm font-semibold text-[#128C4B]"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Coordonnées
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="size-4 text-brand-600" />
                <a href={links.tel} className="hover:text-foreground">
                  {site.telephoneAffiche}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ClockIcon className="size-4 text-brand-600" />
                {site.horaires}
              </li>
              <li className="flex items-center gap-2.5">
                <MapPinIcon className="size-4 text-brand-600" />
                {site.ville}, {site.departement} ({site.region})
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Conseils
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/conseils/${a.slug}`} className="hover:text-foreground">
                    {a.titre}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/conseils" className="font-medium text-brand-600 hover:text-brand-700">
                  Tous les conseils →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
            Zone d&apos;intervention
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {communes.join(" · ")}
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name} · Réparation téléphone {site.ville} ({site.region}).
          </p>
          <p>Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
