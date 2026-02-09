# Estimanou — Estimation immobiliere a La Reunion

> Site vitrine React pour une agence d'estimation immobiliere a La Reunion.
> 7 templates de pages, design system complet, SEO avance, maillage interne dense.

---

## Stack technique

| Outil | Version | Role |
|-------|---------|------|
| React | 18.2 | UI |
| TypeScript | strict | Typage |
| Vite | 6.3.5 | Bundler + dev server |
| Tailwind CSS | 3.4.16 | Styling utility-first |
| React Router DOM | 6.8.1 | Routing SPA |
| Lucide React | 0.453 | Icones SVG |
| Radix UI | - | Toggle group, Slot |

---

## Installation

```bash
# Cloner le repo
git clone <url> && cd estimanou-test

# Installer les dependances
npm install

# Lancer le dev server (port 5173 par defaut)
npm run dev

# Build production
npm run build
```

**Alias TypeScript** : `@/` pointe vers `src/` (configure dans `vite.config.ts` + `tsconfig.app.json`).

---

## Architecture du projet

```
estimanou-test/
├── index.html                          # Point d'entree HTML (lang="fr")
├── tailwind.css                        # Styles globaux + classes custom
├── tailwind.config.js                  # Config Tailwind (couleurs, fonts, animations)
├── vite.config.ts                      # Config Vite (alias @/, PostCSS, publicDir)
├── tsconfig.json                       # Config TS (references app + node)
├── tsconfig.app.json                   # Config TS app (strict, paths @/*)
├── package.json                        # Dependances + scripts
│
├── static/                             # Fichiers statiques (publicDir)
│
└── src/
    ├── index.tsx                        # Point d'entree React (BrowserRouter)
    ├── App.tsx                          # Routes principales (8 routes)
    │
    ├── types/                           # Types TypeScript
    │   ├── blog.ts                      # BlogArticle, ContentBlock (12 types), Author
    │   ├── city.ts                      # CityLanding, CityNeighborhood, CityTestimonial
    │   └── property.ts                  # Property, PropertyFilter, PropertySortKey, enums
    │
    ├── data/                            # Donnees statiques (pas de backend)
    │   ├── articles.ts                  # 3 articles de blog complets
    │   ├── cities.ts                    # 6 villes de La Reunion
    │   └── properties.ts               # 12 biens + fonctions utilitaires
    │
    ├── hooks/                           # Custom hooks
    │   ├── useDocumentHead.ts           # Gestion <title>, meta, OG, canonical
    │   └── useScrollAnimations.ts       # IntersectionObserver pour animations scroll
    │
    ├── components/                      # Composants globaux reutilisables
    │   ├── AnnouncementBanner.tsx       # Bandeau d'annonce
    │   ├── Breadcrumb.tsx               # Fil d'Ariane generique + JSON-LD
    │   └── ScrollToTop.tsx              # Scroll to top au changement de route
    │
    ├── pages/                           # Assemblages de sections (1 par route)
    │   ├── HomePage.tsx                 # Page d'accueil
    │   ├── BlogListPage.tsx             # Liste des articles de blog
    │   ├── BlogArticlePage.tsx          # Article de blog
    │   ├── MiseEnValeurPage.tsx         # Page mise en valeur
    │   ├── CityLandingPage.tsx          # Landing ville
    │   ├── PropertyListPage.tsx         # Liste des biens
    │   └── PropertyDetailPage.tsx       # Detail d'un bien
    │
    └── sections/                        # Sections par template
        ├── Header/                      # Header global (sticky, scroll-aware)
        │   ├── index.tsx                # Conteneur Header + state mobile menu
        │   └── components/
        │       ├── Logo.tsx             # Logo texte Cormorant
        │       ├── DesktopNav.tsx       # Navigation desktop (ancres + pages)
        │       ├── MobileMenuButton.tsx # Bouton hamburger (toggle)
        │       ├── MobileMenu.tsx       # Menu mobile slide-in (panneau lateral)
        │       └── CTAButton.tsx        # Bouton CTA header
        ├── Footer/                      # Footer global
        │   └── components/
        │       ├── FooterColumn.tsx     # Colonne de liens (Link ou <a> auto)
        │       ├── FooterLinks.tsx      # 3 colonnes : Secteurs, Services, A propos
        │       └── ContactInfo.tsx      # Coordonnees de contact
        ├── Hero/                        # Hero homepage
        │   └── components/
        │       └── HeroContent.tsx      # H1, sous-titre, CTA
        ├── About/                       # A propos homepage
        ├── Benefits/                    # Avantages homepage
        ├── Blog/                        # Section blog homepage (3 articles)
        ├── BookNowBanner/               # CTA reservation + donnees marche
        ├── CTABanner/                   # CTA generique "Mal estimer, c'est perdre"
        ├── Examples/                    # Exemples homepage
        ├── HomeSEOText/                 # Zone texte SEO longue homepage
        ├── Process/                     # Processus 3 etapes
        ├── Secteurs/                    # 4 secteurs visuels + 2 pills + lien biens
        ├── Services/                    # 6 cas d'usage avec icones
        ├── Stats/                       # Statistiques chiffrees
        ├── Testimonials/                # Temoignages clients
        ├── BlogArticle/                 # 16 composants article blog
        │   ├── ReadingProgressBar.tsx   # Barre de progression + CTA sticky (z-200)
        │   ├── blocks/                  # 12 types de blocs de contenu
        │   └── sidebar/                 # 4 composants sidebar (TOC, CTA, Related, Author)
        ├── CityLanding/                 # 11 composants landing ville
        ├── PropertyList/                # 11 composants liste biens
        └── PropertyDetail/              # 11 composants detail bien
```

**Total : ~90+ fichiers de composants sections.**

---

## Design System

### Couleurs

| Nom | Hex | Variable Tailwind | Usage |
|-----|-----|-------------------|-------|
| Navy | `#1B3A4B` | `navy` / `text-navy` | Couleur principale, titres, fonds sombres |
| Navy 50 (Sage) | `#E8EDE6` | `navy-50` / `sage` | Fonds clairs alternance sections |
| Navy 100 | `#F8F6F2` | `navy-100` | Fonds tres clairs, SEO text zones |
| Gold | `#B8975A` | `gold` | Accents, CTA, liens, badges |
| Gold Light | `#D4C4A0` | `gold-light` | Variante claire du gold |

**Variables CSS (`:root`)** : `--primary: 200 45% 20%` (navy en HSL), `--background: 0 0% 100%`, etc.

### Typographies

| Font | Classe Tailwind | Usage |
|------|----------------|-------|
| Cormorant Garamond | `font-cormorant` / `font-serif` | Titres H1/H2/H3, `font-light` (300) |
| Outfit | `font-outfit` / `font-sans` | Corps de texte, labels, boutons |

**Chargement** : Google Fonts via `@import url(...)` dans `tailwind.css`.

### Logo

Le logo est un **texte seul** en Cormorant Garamond (pas d'image/icone). Rendu via le composant `Logo.tsx`.

### Tailles de titre

Les titres utilisent `clamp()` pour etre responsive sans media queries :

```css
/* H1 Hero */
font-size: clamp(2.5rem, 6vw, 4.5rem);  /* Hero homepage */
font-size: clamp(2rem, 5vw, 3.5rem);    /* Hero ville/blog */

/* H2 Section */
font-size: clamp(2rem, 4vw, 3rem);      /* via .section-title */

/* H3 */
font-size: 1.25rem;                     /* Sous-titres */
```

### Largeur max

Le site utilise `max-w-[1080px] mx-auto px-6` (et non le `container` Tailwind).

### Espacements sections

```
py-20 md:py-28   — Sections principales
py-16            — Sections secondaires
gap-16           — Ecart entre blocs dans une section
```

### Bordures et arrondis

```
rounded-2xl      — Cards principales
rounded-xl       — Images, sous-cards
rounded-full     — Boutons, pills, avatars
border-navy/8    — Bordure subtile separateur
```

---

## Routing

| Route | Page | Description |
|-------|------|-------------|
| `/` | `HomePage` | Accueil avec 14 sections |
| `/blog` | `BlogListPage` | Liste de tous les articles |
| `/blog/:slug` | `BlogArticlePage` | Article de blog complet |
| `/mise-en-valeur` | `MiseEnValeurPage` | Page mise en valeur du bien |
| `/estimation-immobiliere/:citySlug` | `CityLandingPage` | Landing SEO par ville |
| `/biens-a-vendre` | `PropertyListPage` | Catalogue de tous les biens |
| `/biens-a-vendre/:citySlug` | `PropertyListPage` | Catalogue filtre par ville |
| `/biens-a-vendre/:citySlug/:propertySlug` | `PropertyDetailPage` | Fiche detail d'un bien |

**Note** : `citySlug` correspond au champ `slug` dans `cities.ts` (ex: `saint-denis`, `saint-gilles`).

---

## Assemblage des pages

### HomePage

```
Header
Hero                    — H1: "Le vrai prix de votre bien. Sous 48h, gratuitement."
BookNowBanner           — Stats marche + CTA "Estimer gratuitement"
Stats                   — Chiffres cles
About                   — Valentin Bourassin, expert immobilier
Secteurs                — 4 villes visuelles + 2 pills (Saint-Denis, Saint-Pierre) + lien biens
Process                 — 3 etapes (formulaire, analyse DVF, rapport)
Services                — 6 cas d'usage avec icones Lucide
Benefits                — 3 avantages vs estimation en ligne
Examples                — Exemples d'estimations
Testimonials            — Temoignages clients
Blog                    — 3 articles recents
CTABanner               — "Mal estimer, c'est perdre de l'argent."
HomeSEOText             — Texte SEO long (marche 2025, FAQ, maillage interne dense)
Footer
```

### BlogListPage

```
Header
Liste de tous les articles (grille 3 colonnes)
Footer
```

### BlogArticlePage

```
Header
ReadingProgressBar       (Barre sticky z-200 : progression + CTA "Estimer gratuitement")
ArticleSEO              (JSON-LD Article)
ArticleHero              (Image, titre, auteur, date)
  Flex 2 colonnes :
    [65%] ArticleBody    (ContentBlockRenderer x N)
    [35%] ArticleSidebar (TOC, CTA, Related, AuthorBio)
Footer
```

### MiseEnValeurPage

```
Header
Page dediee mise en valeur immobiliere
Footer
```

### CityLandingPage

```
Header
CityLandingSEO           (JSON-LD LocalBusiness + FAQPage + BreadcrumbList)
Breadcrumb
CityHero                 (Image plein ecran + overlay + CTA)
CityStats                (4 chiffres cles)
CityMarketInsight        (Texte expert + image, 2 colonnes)
CityNeighborhoods        (Grille quartiers avec prix/m2)
CityProcess              (3 etapes, fond navy)
CityPropertiesPreview    (3 PropertyCard de la ville)
CityTestimonials         (2 temoignages locaux)
CityFAQ                  (Accordeon + FAQPage JSON-LD)
CityLandingSEOText       (Zone texte SEO longue, maillage interne)
CityCTA                  (CTA final fond navy)
Footer
```

### PropertyListPage

```
Header
PropertyListSEO          (JSON-LD ItemList + BreadcrumbList)
Breadcrumb
PropertyListHero         (H1, compteur, texte intro contextuel)
PropertyFilters          (Barre sticky : ville, type, prix, pieces)
PropertyActiveFilters    (Pilules filtres actifs)
PropertySort             (Compteur + select tri)
PropertyGrid / PropertyEmptyState
PropertyListNearbyCities (Pilules estimation toutes villes)
PropertyListSEOText      (Zone texte SEO, contenu conditionnel ville/global)
PropertyListCTA          (CTA "Vous vendez ?")
Footer
```

### PropertyDetailPage

```
Header
PropertyDetailSEO        (JSON-LD RealEstateListing + OG tags)
Breadcrumb
PropertyGallery          (Grande image + 3 thumbnails cliquables)
PropertyHeader           (Titre H1, prix, badges, localisation)
  Flex 2 colonnes :
    [65%] Principal
      PropertyKeyFacts   (Grid 2x3 icones : surface, pieces, etc.)
      PropertyDescription (Texte + fourchette estimation + lien)
      PropertyFeatures   (Check list 2 colonnes)
      PropertyLocation   (Quartier + description)
    [35%] Sidebar sticky
      PropertyContact    (Card navy "Demander une visite")
      SidebarCTA         (Reutilise le sidebar blog)
PropertySimilar          (3 biens similaires + 3 liens maillage)
PropertyDetailSEOText    (Zone texte SEO longue)
PropertyDetailCTA        (CTA final "Vous vendez aussi ?")
Footer
```

---

## Navigation et maillage interne

### Header — Navigation desktop

Le composant `DesktopNav.tsx` affiche deux types de liens :

**Ancres homepage** (vers des sections `#id` de la homepage) :
- Estimer → `#estimer`
- Secteurs → `#secteurs`
- A propos → `#apropos`
- Contact → `#contact`

Depuis la homepage, ces liens utilisent `<a href="#...">`. Depuis une autre page, ils utilisent `<Link to="/#...">` pour revenir a la homepage puis scroller.

**Liens de pages** (React Router `<Link>`) :
- Biens a vendre → `/biens-a-vendre`
- Blog → `/blog`
- Mise en valeur → `/mise-en-valeur`

Les liens de pages affichent un etat actif (text-navy) quand le pathname correspond.

### Header — Menu mobile

Le composant `MobileMenu.tsx` est un **panneau lateral slide-in** (z-250) avec :
- **Backdrop** blur + overlay navy/30 (ferme au clic)
- **3 sections** de liens :
  - Navigation (ancres homepage)
  - Pages (Blog, Biens a vendre, Mise en valeur)
  - Nos secteurs (6 villes)
- **CTA** "Faire estimer mon bien" en bas
- **Body scroll lock** quand le menu est ouvert
- **Bouton fermer** (icone X)

Le `MobileMenuButton.tsx` recoit un callback `onClick` pour toggler le menu. L'etat est gere dans `Header/index.tsx`.

### Footer — Liens complets

Le composant `FooterColumn.tsx` gere automatiquement le type de lien :
- **Liens internes** (`/path`) → `<Link>` React Router
- **Liens ancre** (`#...` ou `/#...`) → `<a href>`
- **Liens externes** (`http...`) → `<a target="_blank">`

Les 3 colonnes du footer (`FooterLinks.tsx`) :

| Colonne | Liens |
|---------|-------|
| **Secteurs** | Saint-Gilles, Saint-Leu, Saint-Paul, Saint-Denis, Saint-Pierre, Le Tampon (→ `/estimation-immobiliere/{slug}`) |
| **Services** | Estimer mon bien (→ `/#estimer`), Biens a vendre (→ `/biens-a-vendre`), Mise en valeur (→ `/mise-en-valeur`), Blog (→ `/blog`) |
| **A propos** | Qui suis-je (→ `/#apropos`), Actualites (→ `/blog`), Contact (→ `/#contact`) |

### Maillage interne — Schema complet

Le maillage est **bidirectionnel** entre tous les templates :

```
Homepage (/#estimer)
    ↕
CityLanding (/estimation-immobiliere/:slug)
    ↕                    ↕
PropertyList (/biens-a-vendre)    PropertyList ville (/biens-a-vendre/:slug)
    ↕                    ↕
PropertyDetail (/biens-a-vendre/:city/:property)
    ↕
Blog (/blog) → BlogArticle (/blog/:slug)
    ↕
MiseEnValeur (/mise-en-valeur)
```

**Liens croises implementes :**

| Depuis | Vers | Composant |
|--------|------|-----------|
| Homepage Secteurs | 4 villes visuelles | `Secteurs/index.tsx` (cards cliquables) |
| Homepage Secteurs | 2 villes pills | `Secteurs/index.tsx` (Saint-Denis, Saint-Pierre) |
| Homepage Secteurs | Tous les biens | `Secteurs/index.tsx` ("voir tous les biens a vendre") |
| Homepage Blog | 3 articles | `Blog/index.tsx` (cards + "tous les articles") |
| Homepage SEO Text | Toutes villes | `HomeSEOText/index.tsx` (liste avec prix) |
| Homepage SEO Text | Biens a vendre | `HomeSEOText/index.tsx` |
| City Landing | Biens de la ville | `CityMarketInsight`, `CityPropertiesPreview` |
| City Landing | Autres villes | `CityLandingSEOText` |
| City Landing | Estimation CTA | `CityCTA` |
| Property List | Estimation toutes villes | `PropertyListNearbyCities` |
| Property List | Detail bien | `PropertyCard` |
| Property Detail | Estimation ville | `PropertyDescription`, `PropertyDetailSEOText` |
| Property Detail | Biens meme ville | `PropertySimilar` |
| Property Detail | Tous les biens | `PropertySimilar` |
| Blog Article | CTA estimation | `ReadingProgressBar`, `SidebarCTA`, inline CTA blocks |
| Header (desktop) | Toutes pages et ancres | `DesktopNav.tsx` |
| Header (mobile) | Toutes pages, ancres et villes | `MobileMenu.tsx` |
| Footer | 6 villes, 4 services, 3 a propos | `FooterLinks.tsx` |
| SEO Texts | Toutes directions | `*SEOText.tsx` (liens denses) |

---

## Contenu V3 — Redaction optimisee SEO

Le contenu actuel de la homepage est la **V3 optimisee SEO** avec les elements suivants :

### H1 et Hero
- **H1** : "Le vrai prix de votre bien. Sous 48h, gratuitement."
- **Sous-titre** : "Pas un algorithme. Un expert du terrain reunionnais."
- **CTA principal** : "Faire estimer mon bien"

### Donnees marche 2025
Le contenu integre des donnees marche reelles :
- Prix median La Reunion : **2 880 EUR/m2**
- Fourchette : **2 100 EUR** (Hauts) a **4 500 EUR+** (littoral Ouest)
- Hausse 5 ans : **+30%**
- **7 vendeurs sur 10** doivent baisser leur prix apres mise en vente
- Donnees DVF (Demandes de Valeurs Foncieres) mentionnees
- Prix specifiques par ville (Saint-Paul ~4 584 EUR/m2, etc.)

### CTAs differencies par emplacement

| Emplacement | Accroche | Bouton |
|-------------|----------|--------|
| Header | — | Faire estimer mon bien |
| Barre sticky lecture blog (z-200) | Vous vendez ? Encore faut-il connaitre le bon prix. | Estimer gratuitement |
| Sidebar blog | Un expert terrain, pas un algorithme. | Me faire rappeler |
| CTA inline article 1 | Le marche reunionnais a bouge. Et votre bien ? | Verifier sa valeur |
| CTA inline article 2 | 48h. Gratuit. Par un expert qui connait votre quartier. | Recevoir mon estimation |
| CTA inline article 3 | Mal estimer, c'est perdre de l'argent. | Estimer au juste prix |

### Sections homepage detaillees

| Section | Pill label | H2 |
|---------|-----------|-----|
| Services | quand faire estimer son bien | Chaque situation merite une estimation *sur mesure* |
| Secteurs | nos secteurs d'expertise | L'Ouest reunionnais, *quartier par quartier* |
| About | — | Estimer un bien, c'est un metier. *Pas un formulaire.* |
| Benefits | pourquoi Estimanou | Ce qui nous differencie d'une *estimation en ligne* |
| Process | — | De la demande a l'estimation, *3 etapes* |
| Blog | actualites du marche | *Comprendre* le marche pour mieux decider |
| Stats | en chiffres | Des resultats construits sur le *terrain*, pas sur un ecran |
| CTABanner | — | Mal estimer, *c'est perdre de l'argent.* |

### Icones Services

Les 6 cas d'usage ont des icones Lucide thematiques :

| Cas d'usage | Icone Lucide |
|-------------|-------------|
| Vente de votre bien | `BadgeDollarSign` |
| Donation & succession | `ScrollText` |
| Renegociation de pret | `Landmark` |
| Divorce & partage | `Scale` |
| Declaration fiscale (IFI) | `Receipt` |
| Curiosite patrimoniale | `TrendingUp` |

Style : `w-[18px] h-[18px] text-gold/80 strokeWidth={1.5}` dans un conteneur `w-10 h-10 rounded-lg bg-gold/12`.

---

## Types TypeScript

### `types/blog.ts`

```typescript
ContentBlock = union de 12 types :
  paragraph | heading | key-takeaway | expert-quote | stat-highlight |
  image-caption | info-box | faq | related-articles | cta-block |
  comparison-table | timeline

BlogArticle {
  slug, title, excerpt, heroImage, author, category, tags,
  datePublished, dateModified, readingTimeMinutes, content: ContentBlock[]
}
```

### `types/city.ts`

```typescript
CityLanding {
  slug, name, heroImage, tagline, description,
  stats: { avgPricePerSqm, estimationsCount, avgSaleTime, priceEvolution },
  neighborhoods: CityNeighborhood[],
  testimonials: CityTestimonial[],
  faq: { question, answer }[]
}
```

### `types/property.ts`

```typescript
PropertyType = "appartement" | "maison" | "villa" | "terrain" | "local-commercial"
PropertyStatus = "a-vendre" | "sous-compromis" | "vendu"

Property {
  slug, title, type, status, price, priceDisplay,
  citySlug, cityName, neighborhood,
  images: PropertyImage[], surface, landSurface?,
  rooms, bedrooms, bathrooms, yearBuilt?, floor?, orientation?,
  description, features: string[], estimationRange, dateAdded
}

PropertyFilter { city?, type?, priceMin?, priceMax?, roomsMin? }
PropertySortKey = "price-asc" | "price-desc" | "date-desc" | "surface-desc"
```

---

## Couche de donnees

Toutes les donnees sont **statiques** (pas d'API, pas de backend). Elles se trouvent dans `src/data/`.

### `data/cities.ts`

**6 villes** de La Reunion avec donnees completes :

| Ville | Slug | Prix moyen/m2 |
|-------|------|---------------|
| Saint-Denis | `saint-denis` | 2 800 EUR/m2 |
| Saint-Pierre | `saint-pierre` | 2 600 EUR/m2 |
| Saint-Paul | `saint-paul` | 3 100 EUR/m2 |
| Le Tampon | `le-tampon` | 2 200 EUR/m2 |
| Saint-Leu | `saint-leu` | 3 400 EUR/m2 |
| Saint-Gilles | `saint-gilles` | 4 100 EUR/m2 |

Chaque ville contient : `tagline`, `description` (~150 mots), 4 `neighborhoods` avec prix/m2, 2 `testimonials`, 5 `faq`.

**Fonctions exportees :**
- `getAllCities(): CityLanding[]`
- `getCityBySlug(slug: string): CityLanding | undefined`

### `data/properties.ts`

**12 biens** (2 par ville), mix de types : 4 maisons, 3 appartements, 2 villas, 2 terrains, 1 local commercial. Prix de 95 000 EUR a 680 000 EUR. 3 images Unsplash par bien.

**Fonctions exportees :**
- `getAllProperties(): Property[]`
- `getPropertyBySlug(slug: string): Property | undefined`
- `getPropertiesByCity(citySlug: string): Property[]`
- `filterProperties(all: Property[], filters: PropertyFilter): Property[]`
- `sortProperties(all: Property[], key: PropertySortKey): Property[]`
- `getSimilarProperties(property: Property, limit?: number): Property[]`

### `data/articles.ts`

**3 articles de blog** complets avec blocs de contenu riches, auteur, tags, images.

**Fonctions exportees :**
- `getAllArticles(): BlogArticle[]`
- `getArticleBySlug(slug: string): BlogArticle | undefined`

---

## Custom Hooks

### `useDocumentHead(options)`

Gere dynamiquement le `<title>`, `<meta description>`, `<meta og:*>` et `<link rel="canonical">`.

```typescript
useDocumentHead({
  title: "Titre de la page",
  description: "Meta description",
  ogImage: "https://...",
  canonical: "/estimation-immobiliere/saint-denis",
});
```

**Cleanup** : remet les valeurs par defaut au unmount.

### `useScrollAnimations()`

Utilise `IntersectionObserver` pour ajouter la classe `.visible` aux elements `.animate-fade-in-up` quand ils entrent dans le viewport.

```typescript
// Dans un composant :
useScrollAnimations();
// Dans le JSX :
<div className="animate-fade-in-up">...</div>
<div className="animate-fade-in-up animate-delay-200">...</div>
```

---

## Classes CSS custom

Definies dans `tailwind.css` sous `@layer utilities` et `@layer base`.

| Classe | Description |
|--------|-------------|
| `.animate-fade-in-up` | Opacity 0 + translateY(20px), transition 0.8s cubic-bezier |
| `.animate-fade-in-up.visible` | Opacity 1 + translateY(0) |
| `.animate-delay-100` a `.animate-delay-500` | Delais d'animation par pas de 100ms |
| `.section-title` | H2 section : Cormorant, font-light, clamp(2rem,4vw,3rem) |
| `.gold-line::after` | Trait dore 40px sous un element |
| `.pill-label` | Petit label arrondi style pill : 11px, border subtile, tracking 0.1em |
| `.card-hover` | Transition shadow + translate-y au hover |
| `.animate-spin-slow` | Rotation 360deg en 20s (badge decoratif) |
| `.number-badge` | Badge carre gold/15 avec numero |
| `.line-clamp-2` / `.line-clamp-3` | Limitation lignes avec -webkit-line-clamp |
| `.prose-estimanou` | Styles typographiques pour le contenu editorial (h2, h3, p, a, ul, ol, strong, img) |
| `.filter-select` | Select natif style : rounded-full, fleche custom SVG, focus gold |

---

## SEO et JSON-LD

### Title et Meta

```html
<title>Estimation immobiliere gratuite a La Reunion | Estimanou — Resultat sous 48h</title>
<meta name="description" content="Estimation immobiliere gratuite a La Reunion par un expert local. Analyse terrain personnalisee, rapport argumente sous 48h. Sans engagement. +500 estimations realisees." />
```

### Schemas JSON-LD par page

| Page | Composant SEO | Schemas JSON-LD |
|------|--------------|-----------------|
| Blog | `ArticleSEO` | `Article`, `BreadcrumbList` |
| City Landing | `CityLandingSEO` | `LocalBusiness`, `FAQPage`, `BreadcrumbList` |
| Property List | `PropertyListSEO` | `ItemList`, `BreadcrumbList` |
| Property Detail | `PropertyDetailSEO` | `RealEstateListing`, `BreadcrumbList`, OG tags |

**Canonical** : toutes les pages definissent `<link rel="canonical">` via `useDocumentHead`.

**Breadcrumb** : le composant `Breadcrumb.tsx` genere a la fois le rendu visuel et le schema `BreadcrumbList` JSON-LD. Domaine de base : `https://estimanou.re`.

### Zones de texte SEO

Chaque template dispose d'un composant `*SEOText.tsx` en bas de page avec :
- Contenu textuel long et unique (H2, H3, paragraphes, listes)
- Maillage interne dense via `<Link>` React Router
- Contenu **conditionnel** : le texte s'adapte a la ville ou au bien affiche
- Style : `prose-estimanou` sur fond `bg-navy-100`

---

## Blog — Barre de progression et CTAs

### ReadingProgressBar (z-200)

La barre de lecture sticky apparait au scroll et contient :
- **Barre de progression** visuelle (largeur en % basee sur le scroll, transition cubic-bezier)
- **CTA** : "Vous vendez ? Encore faut-il connaitre le bon prix." + bouton "Estimer gratuitement"
- Fond navy, se superpose au header (z-200 > z-199)
- Utilise `useRef` + direct DOM manipulation pour la performance (pas de re-render React)

### SidebarCTA

- Accroche : "Un expert terrain, pas un algorithme."
- Bouton : "Me faire rappeler"

### CTAs inline dans les articles

3 blocs CTA integres dans le contenu des articles (`cta-block` dans `data/articles.ts`), chacun avec un wording unique.

---

## Conventions de code

### Nommage des fichiers

- **Pages** : `PascalCase` + suffixe `Page` → `CityLandingPage.tsx`
- **Sections** : `PascalCase` → `CityHero.tsx`, `PropertyCard.tsx`
- **Dossiers sections** : `PascalCase` par template → `CityLanding/`, `PropertyList/`
- **Types** : `camelCase` → `city.ts`, `property.ts`
- **Data** : `camelCase` → `cities.ts`, `properties.ts`

### Structure d'un composant section

```tsx
// Imports
import { ... } from "lucide-react";
import { Link } from "react-router-dom";
import type { CityLanding } from "@/types/city";

// Props interface
interface CityHeroProps {
  city: CityLanding;
}

// Export nomme (pas de default export)
export const CityHero = ({ city }: CityHeroProps) => {
  return (
    <section className="relative ...">
      {/* Contenu */}
    </section>
  );
};
```

### Regles generales

- **Exports nommes** uniquement (pas de `export default`)
- **Pas de state management** global (tout est props ou local useState)
- **Pas de fetching** — donnees importees directement depuis `data/`
- **Images** : Unsplash avec parametres `w=`, `h=`, `fit=crop`
- **Icones** : Lucide React, `strokeWidth={1.5}`, taille `w-4 h-4` ou `w-5 h-5`
- **Liens internes** : `<Link to="...">` de React Router (jamais `<a href>` sauf ancres `#`)
- **Animations** : classe `.animate-fade-in-up` + hook `useScrollAnimations()`

---

## Z-index stacking

| Element | z-index | Note |
|---------|---------|------|
| Header fixe | `z-[199]` | Toujours visible |
| ReadingProgressBar (blog) | `z-[200]` | Se superpose au header au scroll |
| MobileMenu | `z-[250]` | Au-dessus de tout |

---

## Ajouter du contenu

### Ajouter une ville

1. Ouvrir `src/data/cities.ts`
2. Ajouter un objet `CityLanding` au tableau `cities`
3. Remplir : slug, name, heroImage, tagline, description, stats (4), neighborhoods (4), testimonials (2), faq (5)
4. La route `/estimation-immobiliere/:slug` fonctionne automatiquement
5. **Penser a** :
   - Mettre a jour `FooterLinks.tsx` pour ajouter la ville au footer
   - Mettre a jour `MobileMenu.tsx` pour ajouter la ville au menu mobile
   - Mettre a jour `Secteurs/index.tsx` pour ajouter la ville a la homepage
   - Mettre a jour les textes SEO dans `CityLandingSEOText.tsx` et `PropertyListSEOText.tsx`

### Ajouter un bien

1. Ouvrir `src/data/properties.ts`
2. Ajouter un objet `Property` au tableau `properties`
3. Remplir tous les champs (voir le type `Property` pour reference)
4. S'assurer que `citySlug` correspond a un slug existant dans `cities.ts`
5. La route `/biens-a-vendre/:citySlug/:propertySlug` fonctionne automatiquement
6. Le bien apparaitra dans les filtres, les biens similaires, et la preview ville

### Ajouter un article de blog

1. Ouvrir `src/data/articles.ts`
2. Ajouter un objet `BlogArticle` au tableau
3. Le champ `content` est un tableau de `ContentBlock[]` — 12 types disponibles :
   - `paragraph`, `heading`, `key-takeaway`, `expert-quote`
   - `stat-highlight`, `image-caption`, `info-box`, `faq`
   - `related-articles`, `cta-block`, `comparison-table`, `timeline`
4. La route `/blog/:slug` fonctionne automatiquement
5. L'article apparaitra dans la `BlogListPage` et dans la section blog de la homepage (si dans les 3 derniers)

---

## Points d'attention pour le dev suivant

1. **Pas de backend** : toutes les donnees sont dans `src/data/`. Pour passer a une API, remplacer les imports statiques par des appels fetch/axios dans les pages.

2. **Images Unsplash** : toutes les images sont des URLs Unsplash avec parametres de redimensionnement. En production, utiliser un CDN propre et des images optimisees (WebP, srcset).

3. **Formulaire d'estimation** : le CTA principal (`/#estimer`) pointe vers une ancre sur la homepage. Le formulaire n'est pas encore fonctionnel — il faudra connecter a un backend (email, CRM, etc.).

4. **Pas de pagination** : la liste des biens affiche tous les resultats (12 max actuellement). Si le catalogue grandit, ajouter une pagination ou un infinite scroll.

5. **SEO server-side** : React SPA = pas de SSR. Pour un SEO optimal, envisager Vite SSG (vite-plugin-ssr) ou migrer vers Next.js/Remix. Les JSON-LD sont injectes via `dangerouslySetInnerHTML` et sont visibles uniquement si le crawler execute le JS.

6. **Max-width** : le site utilise `max-w-[1080px]` partout (pas le container Tailwind). Garder cette coherence.

7. **Responsive** : le design est mobile-first. Points de rupture principaux : `md:` (768px) pour 2 colonnes, `lg:` (1024px) pour le menu desktop.

8. **Fonts** : Cormorant Garamond est TOUJOURS en `font-light` (300) pour les titres. Ne jamais utiliser font-bold sur Cormorant, ca casse le design.

9. **Couleur des paragraphes** : les textes courants sont en `text-neutral-500` ou `text-neutral-700` (gris moyen). Le navy est reserve aux titres et elements forts. Le base body text est defini dans `App.tsx` en `text-neutral-700`.

10. **Animations** : les animations de scroll ne se declenchent qu'une fois (pas de re-trigger au scroll up). C'est voulu pour eviter les flashs.

11. **Breadcrumb** : le composant Breadcrumb genere automatiquement le JSON-LD BreadcrumbList. Le domaine de base est hardcode : `https://estimanou.re`.

12. **PropertyCard** : ce composant est reutilise dans PropertyGrid (liste), CityPropertiesPreview (landing ville) et PropertySimilar (detail). Toute modification impacte les 3 contextes.

13. **Slugs villes** : les slugs dans cities.ts et properties.ts doivent correspondre exactement (`saint-denis`, `saint-gilles`, etc.). Un mismatch provoquera une page 404 ou des biens manquants.

14. **Accents/caracteres speciaux** : les textes dans `cities.ts` contiennent des accents francais natifs (UTF-8). Les textes dans `properties.ts` utilisent des echappements Unicode (`\u00e9` pour e accent). Les deux approches fonctionnent, mais garder la coherence dans les futurs ajouts.

15. **Menu mobile** : le `MobileMenu` lock le body scroll via `document.body.style.overflow = "hidden"`. Si d'autres modales ou overlays sont ajoutees, gerer les conflits de scroll lock.

16. **FooterColumn** : ce composant determine automatiquement le type de lien (`Link` vs `<a>`) en fonction du href. Pas besoin de specifier le type manuellement.

17. **ReadingProgressBar** : utilise `useRef` et direct DOM pour animer la largeur de la barre de progression (performance). Ne pas convertir en state React, ca causerait des re-renders inutiles.

---

## Structure des URLs

```
https://estimanou.re/                                              → Accueil
https://estimanou.re/blog                                          → Liste blog
https://estimanou.re/blog/marche-immobilier-reunion-2025           → Article blog
https://estimanou.re/mise-en-valeur                                → Mise en valeur
https://estimanou.re/estimation-immobiliere/saint-denis             → Landing Saint-Denis
https://estimanou.re/estimation-immobiliere/saint-gilles            → Landing Saint-Gilles
https://estimanou.re/biens-a-vendre                                → Tous les biens
https://estimanou.re/biens-a-vendre/saint-gilles                   → Biens a Saint-Gilles
https://estimanou.re/biens-a-vendre/saint-gilles/villa-vue-mer     → Detail d'un bien
```

---

## Commandes utiles

```bash
# Dev server
npm run dev

# Build production
npm run build

# Verifier les types TypeScript
npx tsc --noEmit

# Preview du build
npx vite preview
```

---

## Licence

Projet prive — tous droits reserves.
