"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { links, site } from "@/lib/config";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/#services", label: "Réparations" },
  { href: "/#domicile", label: "À domicile" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/#zone", label: "Zone" },
  { href: "/conseils", label: "Conseils" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-white shadow-sm"
          : "border-transparent bg-white/95",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label={`${site.name} — accueil`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={links.tel}
          className="group inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-3.5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/25 transition-transform duration-200 hover:-translate-y-0.5 sm:px-4"
          aria-label={`Appeler le ${site.telephoneAffiche}`}
        >
          <Phone className="size-4 transition-transform duration-300 group-hover:rotate-12" />
          <span className="hidden sm:inline">{site.telephoneAffiche}</span>
          <span className="sm:hidden">Appeler</span>
        </a>
      </div>
    </header>
  );
}
