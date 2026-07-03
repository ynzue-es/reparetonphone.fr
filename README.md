# Répare Ton Phone — Site vitrine

Site vitrine pour un service de réparation de téléphones à **Oyonnax** et dans le **Haut-Bugey** (Ain).

**Stack :** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · déploiement Vercel.

---

## ✏️ Modifier le contenu (l'essentiel)

Tout le contenu éditable est centralisé dans **un seul fichier** :

### 👉 [`lib/config.ts`](lib/config.ts)

Tu y trouves, avec des commentaires, tout ce que tu peux changer sans toucher au code :

| Section | Quoi remplacer |
|---|---|
| `site` | ☎️ **Téléphone**, **WhatsApp**, e-mail, horaires, ville |
| `services` | Les réparations proposées (titre, description, icône) |
| `tarifs` | 💶 **Les prix** (`à partir de [À REMPLIR]€`) |
| `communes` | Les communes de la zone desservie |
| `avis` | ⭐ **Les vrais témoignages clients** + note moyenne |
| `delais` | Les arguments de rapidité |

> 🔎 Cherche les mentions **`[À REMPLIR]`** dans ce fichier : ce sont les valeurs à personnaliser (prix, numéro de téléphone, WhatsApp, avis).

### 📝 Les articles de blog (SEO)

Les articles « Conseils » sont dans [`lib/articles.ts`](lib/articles.ts). Chaque article y est décrit
(titre, description, image, date, mots-clés, contenu) et génère automatiquement une page
`/conseils/[slug]` indexée par Google. Tu peux en modifier, ajouter ou supprimer librement.

### 🖼️ Les images

Les photos sont dans [`public/images/`](public/images/). Pour en changer une, remplace simplement
le fichier par le tien **en gardant le même nom** (ex. `hero.jpg`). Formats conseillés : JPG/WebP,
largeur ≥ 1200 px. Elles sont automatiquement optimisées par Next.js (`next/image`).

**Points prioritaires à remplir avant la mise en ligne :**
1. `site.telephone` (format `+33612345678`) et `site.telephoneAffiche` (`06 12 34 56 78`)
2. `site.whatsapp` (format `33612345678`, sans `+` ni espaces)
3. Les `tarifs` (remplace chaque `[À REMPLIR]` par ton prix)
4. Les `avis` (remplace par de vrais témoignages) + `notation`

Les icônes proviennent de [lucide-react](https://lucide.dev/icons) — change simplement le nom importé en haut de `lib/config.ts`.

---

## 🚀 Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres commandes :

```bash
npm run build    # build de production
npm run start    # sert le build de production
npm run lint     # vérifie le code
```

---

## ☁️ Déploiement sur Vercel

### Option A — via l'interface (recommandé, le plus simple)

1. Pousse ce projet sur un dépôt **GitHub / GitLab / Bitbucket** :
   ```bash
   git add -A
   git commit -m "Site Répare Ton Phone"
   git push
   ```
2. Va sur [vercel.com/new](https://vercel.com/new), connecte ton compte Git et **importe le dépôt**.
3. Vercel détecte automatiquement Next.js — laisse tous les réglages par défaut et clique **Deploy**.
4. En ~1 minute, le site est en ligne sur une URL `*.vercel.app`.

### Option B — via la CLI

```bash
npm i -g vercel
vercel          # déploiement de preview
vercel --prod   # déploiement en production
```

---

## 🌐 Brancher le domaine `reparetonphone.fr`

> ⚠️ Le domaine utilisé partout est **reparetonphone.fr** (voir `site.url` dans `lib/config.ts`).
> Si ton vrai domaine diffère, modifie `site.url` **avant** de déployer.

1. Dans Vercel, ouvre ton projet → **Settings → Domains**.
2. Clique **Add**, saisis `reparetonphone.fr`, puis ajoute aussi `www.reparetonphone.fr`.
3. Vercel affiche les enregistrements DNS à créer. Deux cas :

   **A. Tu gères le DNS chez ton registrar (OVH, Gandi, IONOS…)** — ajoute :
   | Type | Nom | Valeur |
   |---|---|---|
   | `A` | `@` | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

   **B. Tu délègues à Vercel** — remplace les *nameservers* du domaine par ceux indiqués par Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`).

4. Attends la propagation DNS (quelques minutes à quelques heures). Vercel génère automatiquement le **certificat HTTPS**.
5. Définis `reparetonphone.fr` comme domaine principal (redirection du `www` incluse).

---

## 🔍 SEO — ce qui est déjà en place

- **Balises méta** complètes (title, description, Open Graph, Twitter Card) — `app/layout.tsx`
- **Données structurées JSON-LD** `LocalBusiness` / `MobilePhoneStore` avec zone desservie, services et avis — `components/json-ld.tsx`
- **`/sitemap.xml`** et **`/robots.txt`** générés automatiquement — `app/sitemap.ts`, `app/robots.ts`
- **Image Open Graph** générée dynamiquement (partage sur réseaux / SMS) — `app/opengraph-image.tsx`
- **`<h1>` unique** contenant les mots-clés locaux, hiérarchie sémantique propre
- **Favicon SVG** de marque — `app/icon.svg`

### Après la mise en ligne
- Ajoute le site à **[Google Search Console](https://search.google.com/search-console)** et soumets le sitemap `https://reparetonphone.fr/sitemap.xml`.
- Crée une fiche **[Google Business Profile](https://www.google.com/business/)** pour Oyonnax : c'est le levier n°1 du référencement local.
- Vérifie le rendu du partage avec le [validateur de résultats enrichis Google](https://search.google.com/test/rich-results).

---

## 🎨 Détails techniques

- **Couleurs & animations** : définies dans `app/globals.css` (palette de marque bleu→cyan→violet).
- **Contrainte de performance mobile respectée** : **aucun `backdrop-blur` / `filter: blur()`** (bug de perf WebKit/Safari iOS). La profondeur repose sur des ombres, gradients, bordures et opacités. Les animations n'utilisent que `transform` et `opacity` (accélérées GPU).
- **Accessibilité** : les animations sont désactivées pour les utilisateurs avec `prefers-reduced-motion`.
- **Formulaire de contact** : sans backend, il compose un message pré-rempli envoyé via WhatsApp (repli e-mail). Aucune configuration serveur nécessaire.

### Structure

```
app/
  layout.tsx          → métadonnées SEO globales, polices
  page.tsx            → assemblage des sections
  globals.css         → thème & animations
  icon.svg            → favicon
  opengraph-image.tsx → image de partage
  sitemap.ts / robots.ts
components/
  logo.tsx, cta.tsx, reveal.tsx, site-header.tsx, floating-call.tsx, json-ld.tsx
  sections/           → hero, services, domicile, rapidite, tarifs, zone, avis, contact, footer
  ui/                 → composants shadcn/ui
  articles.ts         → ⭐ Les articles de blog (SEO)
  config.ts           → ⭐ TOUT le contenu éditable (tarifs, contact, avis…)
public/
  images/             → photos du site (remplaçables à l'identique)
```

---

## 📷 Crédits photos

Les photos d'illustration proviennent de **[Unsplash](https://unsplash.com)** (libres de droit,
usage commercial autorisé, sans attribution obligatoire). Tu peux les remplacer par tes propres
photos de réparation à tout moment — c'est même recommandé pour renforcer la confiance locale.
