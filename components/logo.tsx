import { site } from "@/lib/config";
import { cn } from "@/lib/utils";

/**
 * Logo "Répare Ton Phone" — 100% SVG inline, aucune image externe.
 * Smartphone stylisé dont l'écran forme un éclair (rapidité) + coche (fiabilité).
 */
export function LogoMark({
  className,
  id = "logo",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role="img"
      aria-label={`Logo ${site.name}`}
    >
      <defs>
        <linearGradient id={`${id}-body`} x1="8" y1="2" x2="40" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B54E8" />
          <stop offset="0.55" stopColor="#2B8FE0" />
          <stop offset="1" stopColor="#1FC6C6" />
        </linearGradient>
        <linearGradient id={`${id}-bolt`} x1="20" y1="12" x2="30" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E6F7FF" />
        </linearGradient>
      </defs>

      {/* Corps du téléphone */}
      <rect x="10" y="3" width="28" height="42" rx="8" fill={`url(#${id}-body)`} />
      {/* Écran plus sombre */}
      <rect x="13" y="8" width="22" height="32" rx="4.5" fill="#0E1B3A" fillOpacity="0.9" />
      {/* Haut-parleur */}
      <rect x="21" y="5.4" width="6" height="1.4" rx="0.7" fill="#FFFFFF" fillOpacity="0.55" />

      {/* Éclair = rapidité de réparation */}
      <path
        d="M26.5 12.5 18.5 25.2h5.2l-2.2 9.3 9.4-13.6h-5.6l2.9-8.4Z"
        fill={`url(#${id}-bolt)`}
      />
    </svg>
  );
}

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0 drop-shadow-sm" />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-[1.05rem] font-extrabold tracking-tight">
            Répare&nbsp;Ton&nbsp;<span className="text-gradient">Phone</span>
          </span>
          <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
            {site.ville} · {site.region}
          </span>
        </span>
      )}
    </span>
  );
}
