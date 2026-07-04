"use client";

import { useEffect, useState } from "react";
import { PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { WhatsAppIcon } from "@/components/cta";
import { links, site } from "@/lib/config";
import { cn } from "@/lib/utils";

/**
 * Barre d'action flottante sur mobile : Appeler + WhatsApp toujours accessibles.
 * Apparaît après un léger scroll pour ne pas masquer le hero.
 */
export function FloatingCall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 will-change-transform lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <a
        href={links.tel}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-gradient py-3 text-sm font-semibold text-white shadow-md shadow-brand-900/25"
        aria-label={`Appeler le ${site.telephoneAffiche}`}
      >
        <PhoneIcon className="size-4" />
        Appeler
      </a>
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 py-3 text-sm font-semibold text-[#128C4B]"
        aria-label="Contacter par WhatsApp"
      >
        <WhatsAppIcon className="size-4" />
        WhatsApp
      </a>
    </div>
  );
}
