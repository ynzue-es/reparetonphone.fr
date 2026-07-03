import type { Metadata, Viewport } from "next";
import { Inter, Sora, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `Réparation téléphone Oyonnax (Haut-Bugey) — ${site.name}`;
const description =
  "Réparation de téléphone à Oyonnax et dans le Haut-Bugey : écran cassé, batterie, connecteur de charge… iPhone, Samsung et toutes marques. Déplacement à domicile, réparation rapide dans la journée. Devis gratuit.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "réparation téléphone Oyonnax",
    "réparation smartphone Oyonnax",
    "réparation écran Oyonnax",
    "changement batterie téléphone Oyonnax",
    "réparation iPhone Oyonnax",
    "réparation Samsung Oyonnax",
    "réparation téléphone Haut-Bugey",
    "réparation téléphone Ain",
    "réparateur mobile à domicile Oyonnax",
    "réparation téléphone Arbent Bellignat",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  category: "Réparation de téléphones mobiles",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#2b3fd6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${sora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
