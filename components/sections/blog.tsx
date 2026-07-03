import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";
import { articles } from "@/lib/articles";

export function ArticleCard({
  article,
  delay = 0,
}: {
  article: (typeof articles)[number];
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="group h-full">
      <Link
        href={`/conseils/${article.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Clock className="size-3.5" />
            {article.lecture} de lecture · {article.dateAffiche}
          </span>
          <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-foreground group-hover:text-brand-700">
            {article.titre}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {article.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
            Lire l&apos;article
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function Blog() {
  return (
    <section id="conseils" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Conseils & astuces"
          title="Le blog du réparateur"
          description="Écran cassé, batterie, téléphone dans l'eau… Nos guides pratiques pour prendre soin de votre smartphone à Oyonnax et dans le Haut-Bugey."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} delay={i * 90} />
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/conseils"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-brand-200"
          >
            Tous les conseils
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
