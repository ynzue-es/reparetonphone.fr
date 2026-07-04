import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaretRightIcon, ClockIcon, CalendarIcon, ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { CallButton, WhatsAppButton } from "@/components/cta";
import { getArticle, articles } from "@/lib/articles";
import { site } from "@/lib/config";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `${site.url}/conseils/${article.slug}`;
  return {
    title: article.titre,
    description: article.description,
    keywords: article.motsCles,
    alternates: { canonical: `/conseils/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.titre,
      description: article.description,
      url,
      publishedTime: article.date,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.titre,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const autres = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.titre,
    description: article.description,
    image: `${site.url}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Person", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/icon.svg` },
    },
    mainEntityOfPage: `${site.url}/conseils/${article.slug}`,
  };

  return (
    <article className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* En-tête article */}
      <header className="hero-surface relative overflow-hidden border-b border-border">
        <div className="dots pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-16">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-foreground">
              Accueil
            </Link>
            <CaretRightIcon className="size-4" />
            <Link href="/conseils" className="hover:text-foreground">
              Conseils
            </Link>
            <CaretRightIcon className="size-4" />
            <span className="text-foreground">{article.titre}</span>
          </nav>
          <h1 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            {article.titre}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarIcon className="size-4" /> {article.dateAffiche}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="size-4" /> {article.lecture} de lecture
            </span>
          </div>
        </div>
      </header>

      {/* Image de couverture */}
      <div className="mx-auto -mt-8 max-w-3xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
          <Image
            src={article.image}
            alt={article.imageAlt}
            width={1400}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </div>

      {/* Contenu */}
      <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6">
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-foreground/90">
          {article.contenu.map((bloc, i) => {
            if (bloc.type === "h2")
              return (
                <h2 key={i} className="pt-4 font-heading text-2xl font-bold text-foreground">
                  {bloc.texte}
                </h2>
              );
            if (bloc.type === "ul")
              return (
                <ul key={i} className="space-y-2 pl-1">
                  {bloc.items.map((it, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            if (bloc.type === "cta")
              return (
                <div
                  key={i}
                  className="my-8 flex flex-col items-center gap-4 rounded-2xl border border-border bg-brand-50/50 p-6 text-center sm:flex-row sm:justify-between sm:text-left"
                >
                  <p className="font-heading text-lg font-bold text-foreground">{bloc.texte}</p>
                  <CallButton label="Appeler" showNumber={false} className="shrink-0" />
                </div>
              );
            return (
              <p key={i}>{bloc.texte}</p>
            );
          })}
        </div>

        {/* Retour + CTA final */}
        <div className="mt-12 rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
          <h2 className="font-heading text-2xl font-bold">
            Besoin d&apos;une réparation à {site.ville}&nbsp;?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Diagnostic gratuit, réparation rapide et déplacement à domicile possible dans tout le{" "}
            {site.region}.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>

        {/* Autres articles */}
        {autres.length > 0 && (
          <div className="mt-14">
            <h2 className="font-heading text-xl font-bold text-foreground">À lire aussi</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {autres.map((a) => (
                <Link
                  key={a.slug}
                  href={`/conseils/${a.slug}`}
                  className="group flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                    <Image src={a.image} alt={a.imageAlt} fill sizes="80px" className="object-cover" />
                  </div>
                  <span className="flex flex-col justify-center">
                    <span className="font-heading text-sm font-bold leading-snug text-foreground group-hover:text-brand-700">
                      {a.titre}
                    </span>
                    <span className="mt-1 text-xs text-muted-foreground">{a.lecture} de lecture</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/conseils"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            <ArrowLeftIcon className="size-4" />
            Retour aux conseils
          </Link>
        </div>
      </div>
    </article>
  );
}
