import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/sections/footer";
import { FloatingCall } from "@/components/floating-call";

export default function ConseilsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCall />
      <div className="h-20 lg:hidden" aria-hidden />
    </>
  );
}
