"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { WhatsAppIcon } from "@/components/cta";
import { site } from "@/lib/config";

/**
 * Formulaire de contact sans backend : il compose un message pré-rempli
 * envoyé via WhatsApp (ou e-mail en repli). Idéal pour un déploiement
 * statique Vercel, fonctionne immédiatement sans configuration serveur.
 */
export function ContactForm() {
  const [form, setForm] = useState({ nom: "", tel: "", modele: "", panne: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const message = `Bonjour, je souhaite faire réparer mon téléphone.
- Nom : ${form.nom || "—"}
- Téléphone : ${form.tel || "—"}
- Modèle : ${form.modele || "—"}
- Panne : ${form.panne || "—"}`;

  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Demande de réparation téléphone",
  )}&body=${encodeURIComponent(message)}`;

  return (
    <form
      className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waHref, "_blank", "noopener,noreferrer");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="nom">Votre nom</Label>
          <Input id="nom" name="nom" placeholder="Prénom Nom" value={form.nom} onChange={update("nom")} autoComplete="name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="tel">Votre téléphone</Label>
          <Input id="tel" name="tel" type="tel" inputMode="tel" placeholder="06 12 34 56 78" value={form.tel} onChange={update("tel")} autoComplete="tel" />
        </div>
      </div>

      <div className="mt-4 space-y-1.5">
        <Label htmlFor="modele">Modèle du téléphone</Label>
        <Input id="modele" name="modele" placeholder="iPhone 13, Samsung Galaxy S22…" value={form.modele} onChange={update("modele")} />
      </div>

      <div className="mt-4 space-y-1.5">
        <Label htmlFor="panne">Décrivez la panne</Label>
        <Textarea id="panne" name="panne" rows={4} placeholder="Ex : écran fissuré, le tactile ne répond plus en bas…" value={form.panne} onChange={update("panne")} />
      </div>

      <button
        type="submit"
        className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-brand-gradient px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-400/50"
      >
        <WhatsAppIcon className="size-5" />
        Envoyer ma demande via WhatsApp
        <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        Pas de WhatsApp&nbsp;?{" "}
        <a href={mailHref} className="font-medium text-brand-600 underline underline-offset-2">
          Envoyer par e-mail
        </a>{" "}
        ou appelez directement le {site.telephoneAffiche}.
      </p>
    </form>
  );
}
