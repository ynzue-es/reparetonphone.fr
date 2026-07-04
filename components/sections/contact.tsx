import { PhoneIcon, ClockIcon, MapPinIcon, EnvelopeIcon } from "@phosphor-icons/react/dist/ssr";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { WhatsAppIcon } from "@/components/cta";
import { links, site } from "@/lib/config";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Un téléphone à réparer ? Parlons-en"
          description="Appelez, écrivez sur WhatsApp ou remplissez le formulaire : je réponds vite et le devis est gratuit."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Coordonnées */}
          <Reveal className="flex flex-col gap-4">
            <a
              href={links.tel}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md">
                <PhoneIcon className="size-6" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Appelez-moi</span>
                <span className="block font-heading text-xl font-bold text-foreground">
                  {site.telephoneAffiche}
                </span>
              </span>
            </a>

            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/[0.07] p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md">
                <WhatsAppIcon className="size-6" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Écrivez-moi sur</span>
                <span className="block font-heading text-xl font-bold text-foreground">WhatsApp</span>
              </span>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <ClockIcon className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <span>
                  <span className="block text-sm text-muted-foreground">Horaires</span>
                  <span className="block font-semibold text-foreground">{site.horaires}</span>
                </span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <MapPinIcon className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <span>
                  <span className="block text-sm text-muted-foreground">Secteur</span>
                  <span className="block font-semibold text-foreground">
                    {site.ville} & {site.region}
                  </span>
                </span>
              </div>
            </div>

            <a
              href={links.email}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-sm transition-colors hover:border-brand-200"
            >
              <EnvelopeIcon className="size-5 shrink-0 text-brand-600" />
              <span className="font-medium text-foreground">{site.email}</span>
            </a>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
