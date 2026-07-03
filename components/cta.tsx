import { Phone } from "lucide-react";
import { links, site } from "@/lib/config";
import { cn } from "@/lib/utils";

/** Icône WhatsApp inline (lucide n'a pas les logos de marque). */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0 0 20.464 3.488" />
    </svg>
  );
}

/** Gros bouton d'appel — le CTA principal, présent partout. */
export function CallButton({
  className,
  label = "Appeler maintenant",
  showNumber = true,
}: {
  className?: string;
  label?: string;
  showNumber?: boolean;
}) {
  return (
    <a
      href={links.tel}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-brand-gradient px-6 py-3.5 text-base font-semibold text-white",
        "shadow-lg shadow-brand-500/30 transition-transform duration-200 will-change-transform",
        "hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/40 active:translate-y-0",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-400/50",
        className,
      )}
      aria-label={`${label} au ${site.telephoneAffiche}`}
    >
      <Phone className="size-5 transition-transform duration-300 group-hover:rotate-12" />
      <span>{label}</span>
      {showNumber && (
        <span className="hidden font-semibold tabular-nums sm:inline">
          · {site.telephoneAffiche}
        </span>
      )}
    </a>
  );
}

/** Bouton WhatsApp. */
export function WhatsAppButton({
  className,
  label = "WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 text-base font-semibold",
        "border border-[#25D366]/30 bg-[#25D366]/10 text-[#128C4B]",
        "shadow-sm transition-transform duration-200 will-change-transform",
        "hover:-translate-y-0.5 hover:bg-[#25D366]/15 active:translate-y-0",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30",
        className,
      )}
      aria-label={`Contacter par WhatsApp`}
    >
      <WhatsAppIcon className="size-5" />
      <span>{label}</span>
    </a>
  );
}
