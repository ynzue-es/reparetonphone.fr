import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ArticleCard } from "@/components/sections/blog";
import { CallButton, WhatsAppButton } from "@/components/cta";
import { articles } from "@/lib/articles";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "Conseils réparation téléphone à Oyonnax — guides pratiques",
  description:
    "Tous nos conseils pour réparer et entretenir votre téléphone à Oyonnax et dans le Haut-Bugey : écran cassé, batterie, téléphone dans l'eau… Guides pratiques par votre réparateur local.",
  alternates: { canonical: "/conseils" },
  openGraph: {
    title: "Conseils réparation téléphone à Oyonnax",
    description:
      "Guides pratiques pour réparer et entretenir votre smartphone dans le Haut-Bugey.",
    url: `${site.url}/conseils`,
    type: "website",
  },
};

export default function ConseilsPage() {
  return (
    <>
      {/* En-tête */}
      <section className="hero-surface relative overflow-hidden text-white">
        <div className="dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
          <nav className="flex items-center gap-1.5 text-sm text-white/60" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-white/90">Conseils</span>
          </nav>
          <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            Conseils & astuces <span className="text-gradient">réparation téléphone</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Les guides pratiques de votre réparateur à {site.ville} et dans le {site.region}.
            Réagissez au bon moment et prolongez la vie de votre smartphone.
          </p>
        </div>
      </section>

      {/* Liste des articles */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((article, i) => (
              <ArticleCard key={article.slug} article={article} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-10">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Un problème avec votre téléphone&nbsp;?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Ne restez pas avec un doute : le diagnostic est gratuit et je réponds vite.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallButton />
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
