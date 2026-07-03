import { ImageResponse } from "next/og";
import { site } from "@/lib/config";

export const alt = `${site.name} — Réparation de téléphone à ${site.ville} (${site.region})`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0E1B3A",
          backgroundImage:
            "radial-gradient(600px 500px at 12% 0%, rgba(59,84,232,0.6), transparent), radial-gradient(500px 500px at 95% 20%, rgba(31,198,198,0.45), transparent), radial-gradient(600px 500px at 80% 110%, rgba(124,58,237,0.4), transparent)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="96" height="96" viewBox="0 0 48 48" fill="none">
            <rect x="10" y="3" width="28" height="42" rx="8" fill="#2B8FE0" />
            <rect x="13" y="8" width="22" height="32" rx="4.5" fill="#0E1B3A" />
            <path d="M26.5 12.5 18.5 25.2h5.2l-2.2 9.3 9.4-13.6h-5.6l2.9-8.4Z" fill="#E6F7FF" />
          </svg>
          <div
            style={{
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Répare Ton Phone
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          {`Réparation de téléphone à ${site.ville} et alentours`}
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "rgba(255,255,255,0.82)",
            display: "flex",
            gap: 20,
          }}
        >
          <span>📱 Écran · Batterie · Toutes marques</span>
        </div>

        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 16,
          }}
        >
          {["Déplacement à domicile", "Réparé dans la journée", "Devis gratuit"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 26,
                fontWeight: 600,
                padding: "14px 26px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.2)",
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
