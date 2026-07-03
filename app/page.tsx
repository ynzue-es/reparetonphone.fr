import { SiteHeader } from "@/components/site-header";
import { FloatingCall } from "@/components/floating-call";
import { JsonLd } from "@/components/json-ld";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { APropos } from "@/components/sections/apropos";
import { Domicile } from "@/components/sections/domicile";
import { Rapidite } from "@/components/sections/rapidite";
import { Tarifs } from "@/components/sections/tarifs";
import { Zone } from "@/components/sections/zone";
import { Avis } from "@/components/sections/avis";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <APropos />
        <Domicile />
        <Rapidite />
        <Tarifs />
        <Zone />
        <Avis />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
      {/* Espace pour ne pas masquer le footer derrière la barre flottante mobile */}
      <div className="h-20 lg:hidden" aria-hidden />
    </>
  );
}
