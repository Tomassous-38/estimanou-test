import { getCityBySlug } from "@/data/cities";
import { getArticleBySlug } from "@/data/articles";
import { getPropertyBySlug } from "@/data/properties";

// ── Homepage sections ──
import { Hero } from "@/sections/Hero";
import { Process } from "@/sections/Process";
import { Benefits } from "@/sections/Benefits";
import { Secteurs } from "@/sections/Secteurs";
import { CTABanner } from "@/sections/CTABanner";
import { About } from "@/sections/About";
import { Testimonials } from "@/sections/Testimonials";
import { Stats } from "@/sections/Stats";
import { Examples } from "@/sections/Examples";
import { PropertiesCarousel } from "@/sections/PropertiesCarousel";
import { Services } from "@/sections/Services";
import { CTAFinal } from "@/sections/CTAFinal";
import { Blog } from "@/sections/Blog";
import { HomeSEOText } from "@/sections/HomeSEOText";
import { BookNowBanner } from "@/sections/BookNowBanner";

// ── City Landing sections ──
import { CityHero } from "@/sections/CityLanding/CityHero";
import { CityStats } from "@/sections/CityLanding/CityStats";
import { CityNeighborhoods } from "@/sections/CityLanding/CityNeighborhoods";
import { CityProcess } from "@/sections/CityLanding/CityProcess";
import { CityMidCTA } from "@/sections/CityLanding/CityMidCTA";
import { CityMarketInsight } from "@/sections/CityLanding/CityMarketInsight";
import { CityTestimonials } from "@/sections/CityLanding/CityTestimonials";
import { CityPropertiesPreview } from "@/sections/CityLanding/CityPropertiesPreview";
import { CityFAQ } from "@/sections/CityLanding/CityFAQ";
import { CityCTA } from "@/sections/CityLanding/CityCTA";
import { CityLandingSEOText } from "@/sections/CityLanding/CityLandingSEOText";

// ── Mise en Valeur sections ──
import { MiseEnValeurHero } from "@/sections/MiseEnValeur/MiseEnValeurHero";
import { MiseEnValeurIntro } from "@/sections/MiseEnValeur/MiseEnValeurIntro";
import { MiseEnValeurVideo } from "@/sections/MiseEnValeur/MiseEnValeurVideo";
import { MiseEnValeurGallery } from "@/sections/MiseEnValeur/MiseEnValeurGallery";
import { MiseEnValeurCTA } from "@/sections/MiseEnValeur/MiseEnValeurCTA";

// ── Blog Article sections ──
import { ArticleHero } from "@/sections/BlogArticle/ArticleHero";
import { ArticleBody } from "@/sections/BlogArticle/ArticleBody";
import { ArticleSidebar } from "@/sections/BlogArticle/ArticleSidebar";
import { ReadingProgressBar } from "@/sections/BlogArticle/ReadingProgressBar";

// ── Property Detail sections ──
import { PropertyGallery } from "@/sections/PropertyDetail/PropertyGallery";
import { PropertyHeader } from "@/sections/PropertyDetail/PropertyHeader";
import { PropertyKeyFacts } from "@/sections/PropertyDetail/PropertyKeyFacts";
import { PropertyDescription } from "@/sections/PropertyDetail/PropertyDescription";
import { PropertyFeatures } from "@/sections/PropertyDetail/PropertyFeatures";
import { PropertyLocation } from "@/sections/PropertyDetail/PropertyLocation";
import { PropertyContact } from "@/sections/PropertyDetail/PropertyContact";
import { PropertySimilar } from "@/sections/PropertyDetail/PropertySimilar";
import { PropertyDetailCTA } from "@/sections/PropertyDetail/PropertyDetailCTA";

// ── Property List sections ──
import { PropertyCard } from "@/sections/PropertyList/PropertyCard";
import { PropertyListCTA } from "@/sections/PropertyList/PropertyListCTA";
import { PropertyEmptyState } from "@/sections/PropertyList/PropertyEmptyState";

// ── Estimation Wizard ──
import { WizardContainer } from "@/sections/Estimation/WizardContainer";

// ── Global components ──
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Breadcrumb } from "@/components/Breadcrumb";

// ── Blog Article blocks ──
import { KeyTakeawayBlock } from "@/sections/BlogArticle/blocks/KeyTakeawayBlock";
import { ExpertQuoteBlock } from "@/sections/BlogArticle/blocks/ExpertQuoteBlock";
import { StatHighlightBlock } from "@/sections/BlogArticle/blocks/StatHighlightBlock";
import { ImageCaptionBlock } from "@/sections/BlogArticle/blocks/ImageCaptionBlock";
import { InfoBoxBlock } from "@/sections/BlogArticle/blocks/InfoBoxBlock";
import { FAQBlock } from "@/sections/BlogArticle/blocks/FAQBlock";
import { ComparisonTableBlock } from "@/sections/BlogArticle/blocks/ComparisonTableBlock";
import { TimelineBlock } from "@/sections/BlogArticle/blocks/TimelineBlock";
import { CTABlock } from "@/sections/BlogArticle/blocks/CTABlock";

// ── Sidebar blocks ──
import { SidebarCTA } from "@/sections/BlogArticle/sidebar/SidebarCTA";
import { SidebarAuthorBio } from "@/sections/BlogArticle/sidebar/SidebarAuthorBio";

export const metadata = {
  title: "Blocks Library — Estimanou",
  robots: { index: false, follow: false },
};

/* ───────── Séparateur de section ───────── */
function BlockSeparator({ id, title, description }: { id: string; title: string; description?: string }) {
  return (
    <div id={id} className="scroll-mt-24 relative bg-navy text-white px-6 py-10 md:px-10 md:py-14">
      <div className="max-w-[1080px] mx-auto">
        <span className="text-gold text-[11px] font-mono uppercase tracking-[0.2em] mb-2 block">
          #{id}
        </span>
        <h2 className="text-2xl md:text-3xl font-cormorant font-light tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-white/60 text-sm font-light mt-2 max-w-xl">{description}</p>
        )}
      </div>
    </div>
  );
}

/* ───────── Séparateur de catégorie ───────── */
function CategorySeparator({ title }: { title: string }) {
  return (
    <div className="bg-navy/5 border-y border-navy/10 px-6 py-6 md:px-10">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="text-navy text-lg md:text-xl font-cormorant font-semibold tracking-tight uppercase">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function BlocksPage() {
  // Données de démo
  const city = getCityBySlug("saint-denis")!;
  const article = getArticleBySlug("bilan-2024-marche-immobilier-reunion")!;
  const property = getPropertyBySlug("saint-denis", "appartement-t3-moufia")!;

  const demoAuthor = {
    name: "Valentin Bourassin",
    role: "Expert immobilier — La Réunion",
    bio: "Spécialiste du marché immobilier réunionnais depuis plus de 10 ans.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  };

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════ */}
      {/*  TABLE OF CONTENTS                         */}
      {/* ═══════════════════════════════════════════ */}
      <div className="bg-white border-b border-navy/10 px-6 py-12 md:px-10 md:py-16">
        <div className="max-w-[1080px] mx-auto">
          <h1 className="text-navy text-3xl md:text-4xl font-cormorant font-light tracking-tight mb-2">
            Blocks Library
          </h1>
          <p className="text-neutral-500 text-sm font-light mb-8">
            Tous les composants du site Estimanou, affichés un par un.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 text-[12px]">
            <div>
              <h3 className="text-navy font-semibold uppercase tracking-wider mb-2 text-[11px]">Homepage</h3>
              <nav className="flex flex-col gap-1.5">
                <a href="#hero" className="text-navy/60 hover:text-navy transition-colors">Hero</a>
                <a href="#process" className="text-navy/60 hover:text-navy transition-colors">Process</a>
                <a href="#benefits" className="text-navy/60 hover:text-navy transition-colors">Benefits</a>
                <a href="#secteurs" className="text-navy/60 hover:text-navy transition-colors">Secteurs</a>
                <a href="#cta-banner" className="text-navy/60 hover:text-navy transition-colors">CTA Banner</a>
                <a href="#about" className="text-navy/60 hover:text-navy transition-colors">About</a>
                <a href="#testimonials" className="text-navy/60 hover:text-navy transition-colors">Testimonials</a>
                <a href="#stats" className="text-navy/60 hover:text-navy transition-colors">Stats</a>
                <a href="#examples" className="text-navy/60 hover:text-navy transition-colors">Examples</a>
                <a href="#properties-carousel" className="text-navy/60 hover:text-navy transition-colors">Properties Carousel</a>
                <a href="#services" className="text-navy/60 hover:text-navy transition-colors">Services</a>
                <a href="#cta-final" className="text-navy/60 hover:text-navy transition-colors">CTA Final</a>
                <a href="#blog" className="text-navy/60 hover:text-navy transition-colors">Blog</a>
                <a href="#home-seo-text" className="text-navy/60 hover:text-navy transition-colors">Home SEO Text</a>
                <a href="#book-now-banner" className="text-navy/60 hover:text-navy transition-colors">Book Now Banner</a>
              </nav>
            </div>
            <div>
              <h3 className="text-navy font-semibold uppercase tracking-wider mb-2 text-[11px]">City Landing</h3>
              <nav className="flex flex-col gap-1.5">
                <a href="#city-hero" className="text-navy/60 hover:text-navy transition-colors">City Hero</a>
                <a href="#city-stats" className="text-navy/60 hover:text-navy transition-colors">City Stats</a>
                <a href="#city-neighborhoods" className="text-navy/60 hover:text-navy transition-colors">City Neighborhoods</a>
                <a href="#city-process" className="text-navy/60 hover:text-navy transition-colors">City Process</a>
                <a href="#city-mid-cta" className="text-navy/60 hover:text-navy transition-colors">City Mid CTA</a>
                <a href="#city-market-insight" className="text-navy/60 hover:text-navy transition-colors">City Market Insight</a>
                <a href="#city-testimonials" className="text-navy/60 hover:text-navy transition-colors">City Testimonials</a>
                <a href="#city-properties-preview" className="text-navy/60 hover:text-navy transition-colors">City Properties Preview</a>
                <a href="#city-faq" className="text-navy/60 hover:text-navy transition-colors">City FAQ</a>
                <a href="#city-cta" className="text-navy/60 hover:text-navy transition-colors">City CTA</a>
                <a href="#city-seo-text" className="text-navy/60 hover:text-navy transition-colors">City SEO Text</a>
              </nav>
            </div>
            <div>
              <h3 className="text-navy font-semibold uppercase tracking-wider mb-2 text-[11px]">Mise en Valeur</h3>
              <nav className="flex flex-col gap-1.5">
                <a href="#mev-hero" className="text-navy/60 hover:text-navy transition-colors">MEV Hero</a>
                <a href="#mev-intro" className="text-navy/60 hover:text-navy transition-colors">MEV Intro</a>
                <a href="#mev-video" className="text-navy/60 hover:text-navy transition-colors">MEV Video</a>
                <a href="#mev-gallery" className="text-navy/60 hover:text-navy transition-colors">MEV Gallery</a>
                <a href="#mev-cta" className="text-navy/60 hover:text-navy transition-colors">MEV CTA</a>
              </nav>
              <h3 className="text-navy font-semibold uppercase tracking-wider mb-2 mt-4 text-[11px]">Property Detail</h3>
              <nav className="flex flex-col gap-1.5">
                <a href="#property-gallery" className="text-navy/60 hover:text-navy transition-colors">Gallery</a>
                <a href="#property-header" className="text-navy/60 hover:text-navy transition-colors">Header</a>
                <a href="#property-key-facts" className="text-navy/60 hover:text-navy transition-colors">Key Facts</a>
                <a href="#property-description" className="text-navy/60 hover:text-navy transition-colors">Description</a>
                <a href="#property-features" className="text-navy/60 hover:text-navy transition-colors">Features</a>
                <a href="#property-location" className="text-navy/60 hover:text-navy transition-colors">Location</a>
                <a href="#property-contact" className="text-navy/60 hover:text-navy transition-colors">Contact</a>
                <a href="#property-similar" className="text-navy/60 hover:text-navy transition-colors">Similar</a>
                <a href="#property-cta" className="text-navy/60 hover:text-navy transition-colors">Detail CTA</a>
              </nav>
            </div>
            <div>
              <h3 className="text-navy font-semibold uppercase tracking-wider mb-2 text-[11px]">Blog Blocks</h3>
              <nav className="flex flex-col gap-1.5">
                <a href="#article-hero" className="text-navy/60 hover:text-navy transition-colors">Article Hero</a>
                <a href="#key-takeaway" className="text-navy/60 hover:text-navy transition-colors">Key Takeaway</a>
                <a href="#expert-quote" className="text-navy/60 hover:text-navy transition-colors">Expert Quote</a>
                <a href="#stat-highlight" className="text-navy/60 hover:text-navy transition-colors">Stat Highlight</a>
                <a href="#image-caption" className="text-navy/60 hover:text-navy transition-colors">Image + Caption</a>
                <a href="#info-box" className="text-navy/60 hover:text-navy transition-colors">Info Box</a>
                <a href="#faq-block" className="text-navy/60 hover:text-navy transition-colors">FAQ Block</a>
                <a href="#comparison-table" className="text-navy/60 hover:text-navy transition-colors">Comparison Table</a>
                <a href="#timeline" className="text-navy/60 hover:text-navy transition-colors">Timeline</a>
                <a href="#cta-block" className="text-navy/60 hover:text-navy transition-colors">CTA Block</a>
                <a href="#sidebar-cta" className="text-navy/60 hover:text-navy transition-colors">Sidebar CTA</a>
                <a href="#sidebar-author" className="text-navy/60 hover:text-navy transition-colors">Sidebar Author</a>
              </nav>
              <h3 className="text-navy font-semibold uppercase tracking-wider mb-2 mt-4 text-[11px]">Autres</h3>
              <nav className="flex flex-col gap-1.5">
                <a href="#announcement" className="text-navy/60 hover:text-navy transition-colors">Announcement Banner</a>
                <a href="#breadcrumb" className="text-navy/60 hover:text-navy transition-colors">Breadcrumb</a>
                <a href="#property-card" className="text-navy/60 hover:text-navy transition-colors">Property Card</a>
                <a href="#property-list-cta" className="text-navy/60 hover:text-navy transition-colors">Property List CTA</a>
                <a href="#property-empty" className="text-navy/60 hover:text-navy transition-colors">Property Empty State</a>
                <a href="#wizard" className="text-navy/60 hover:text-navy transition-colors">Estimation Wizard</a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/*  1. HOMEPAGE SECTIONS                      */}
      {/* ═══════════════════════════════════════════ */}
      <CategorySeparator title="Homepage Sections" />

      <BlockSeparator id="hero" title="Hero" description="Section plein \u00e9cran avec image de fond, overlay et CTA principal" />
      <Hero />

      <BlockSeparator id="process" title="Process" description="Les 3 \u00e9tapes du processus d'estimation" />
      <Process />

      <BlockSeparator id="benefits" title="Benefits" description="3 avantages cl\u00e9s en colonnes" />
      <Benefits />

      <BlockSeparator id="secteurs" title="Secteurs" description="Onglets par r\u00e9gion avec carrousel de villes" />
      <Secteurs />

      <BlockSeparator id="cta-banner" title="CTA Banner" description="Banni\u00e8re CTA avec image de fond" />
      <CTABanner />

      <BlockSeparator id="about" title="About" description="Pr\u00e9sentation de l'expert" />
      <About />

      <BlockSeparator id="testimonials" title="Testimonials" description="T\u00e9moignages clients avec photo et note" />
      <Testimonials />

      <BlockSeparator id="stats" title="Stats" description="4 chiffres cl\u00e9s en colonnes" />
      <Stats />

      <BlockSeparator id="examples" title="Examples" description="Exemples d'estimations r\u00e9centes" />
      <Examples />

      <BlockSeparator id="properties-carousel" title="Properties Carousel" description="Carrousel de biens en vente" />
      <PropertiesCarousel />

      <BlockSeparator id="services" title="Services" description="6 cas d'usage du service" />
      <Services />

      <BlockSeparator id="cta-final" title="CTA Final" description="CTA final fond navy" />
      <CTAFinal />

      <BlockSeparator id="blog" title="Blog" description="3 derniers articles" />
      <Blog />

      <BlockSeparator id="home-seo-text" title="Home SEO Text" description="Contenu SEO avec liens internes" />
      <HomeSEOText />

      <BlockSeparator id="book-now-banner" title="Book Now Banner" description="Banni\u00e8re de r\u00e9servation horizontale" />
      <BookNowBanner />

      {/* ═══════════════════════════════════════════ */}
      {/*  2. CITY LANDING SECTIONS                  */}
      {/* ═══════════════════════════════════════════ */}
      <CategorySeparator title="City Landing Sections (Saint-Denis)" />

      <BlockSeparator id="city-hero" title="City Hero" description="Hero de page ville avec breadcrumb et image" />
      <CityHero city={city} />

      <BlockSeparator id="city-stats" title="City Stats" description="4 stats du march\u00e9 local" />
      <CityStats city={city} />

      <BlockSeparator id="city-neighborhoods" title="City Neighborhoods" description="Quartiers de la ville" />
      <CityNeighborhoods city={city} />

      <BlockSeparator id="city-process" title="City Process" description="Processus adapt\u00e9 \u00e0 la ville" />
      <CityProcess city={city} />

      <BlockSeparator id="city-mid-cta" title="City Mid CTA" description="CTA au milieu de page ville" />
      <CityMidCTA city={city} />

      <BlockSeparator id="city-market-insight" title="City Market Insight" description="Analyse de march\u00e9 local" />
      <CityMarketInsight city={city} />

      <BlockSeparator id="city-testimonials" title="City Testimonials" description="T\u00e9moignages sp\u00e9cifiques \u00e0 la ville" />
      <CityTestimonials city={city} />

      <BlockSeparator id="city-properties-preview" title="City Properties Preview" description="Aper\u00e7u des biens de la ville" />
      <CityPropertiesPreview city={city} />

      <BlockSeparator id="city-faq" title="City FAQ" description="FAQ sp\u00e9cifique \u00e0 la ville" />
      <CityFAQ city={city} />

      <BlockSeparator id="city-cta" title="City CTA" description="CTA final de page ville" />
      <CityCTA city={city} />

      <BlockSeparator id="city-seo-text" title="City SEO Text" description="Contenu SEO de la ville" />
      <CityLandingSEOText city={city} />

      {/* ═══════════════════════════════════════════ */}
      {/*  3. MISE EN VALEUR SECTIONS                */}
      {/* ═══════════════════════════════════════════ */}
      <CategorySeparator title="Mise en Valeur Sections" />

      <BlockSeparator id="mev-hero" title="Mise en Valeur Hero" description="Hero de la page mise en valeur" />
      <MiseEnValeurHero />

      <BlockSeparator id="mev-intro" title="Mise en Valeur Intro" description="Introduction et services" />
      <MiseEnValeurIntro />

      <BlockSeparator id="mev-video" title="Mise en Valeur Video" description="Section vid\u00e9o embarqu\u00e9e" />
      <MiseEnValeurVideo />

      <BlockSeparator id="mev-gallery" title="Mise en Valeur Gallery" description="Galerie avant/apr\u00e8s" />
      <MiseEnValeurGallery />

      <BlockSeparator id="mev-cta" title="Mise en Valeur CTA" description="CTA mise en valeur" />
      <MiseEnValeurCTA />

      {/* ═══════════════════════════════════════════ */}
      {/*  4. BLOG ARTICLE SECTIONS                  */}
      {/* ═══════════════════════════════════════════ */}
      <CategorySeparator title="Blog Article Sections" />

      <BlockSeparator id="article-hero" title="Article Hero" description="Hero d'article blog avec image, auteur, date" />
      <ArticleHero article={article} />

      {/* ═══════════════════════════════════════════ */}
      {/*  5. PROPERTY DETAIL SECTIONS               */}
      {/* ═══════════════════════════════════════════ */}
      <CategorySeparator title="Property Detail Sections (Appartement T3 Moufia)" />

      <BlockSeparator id="property-gallery" title="Property Gallery" description="Galerie d'images du bien" />
      <PropertyGallery images={property.images} title={property.title} />

      <BlockSeparator id="property-header" title="Property Header" description="Titre, statut, prix du bien" />
      <div className="max-w-[1080px] mx-auto px-5 py-10 md:px-8">
        <PropertyHeader property={property} />
      </div>

      <BlockSeparator id="property-key-facts" title="Property Key Facts" description="Caract\u00e9ristiques cl\u00e9s en grille" />
      <div className="max-w-[1080px] mx-auto px-5 py-10 md:px-8">
        <PropertyKeyFacts property={property} />
      </div>

      <BlockSeparator id="property-description" title="Property Description" description="Description du bien" />
      <div className="max-w-[1080px] mx-auto px-5 py-10 md:px-8">
        <PropertyDescription property={property} />
      </div>

      <BlockSeparator id="property-features" title="Property Features" description="Liste des \u00e9quipements" />
      <div className="max-w-[1080px] mx-auto px-5 py-10 md:px-8">
        <PropertyFeatures features={property.features} />
      </div>

      <BlockSeparator id="property-location" title="Property Location" description="Localisation du bien" />
      <div className="max-w-[1080px] mx-auto px-5 py-10 md:px-8">
        <PropertyLocation property={property} />
      </div>

      <BlockSeparator id="property-contact" title="Property Contact" description="Formulaire de contact" />
      <PropertyContact cityName={property.cityName} />

      <BlockSeparator id="property-similar" title="Property Similar" description="Biens similaires" />
      <PropertySimilar property={property} />

      <BlockSeparator id="property-cta" title="Property Detail CTA" description="CTA page bien" />
      <div className="max-w-[1080px] mx-auto px-5 py-10 md:px-8">
        <PropertyDetailCTA />
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/*  6. BLOG CONTENT BLOCKS                    */}
      {/* ═══════════════════════════════════════════ */}
      <CategorySeparator title="Blog Content Blocks" />

      <BlockSeparator id="key-takeaway" title="Key Takeaway Block" description="Encart points cl\u00e9s" />
      <div className="max-w-[700px] mx-auto px-5 py-10 md:px-8">
        <KeyTakeawayBlock
          title="Points cl\u00e9s \u00e0 retenir"
          points={[
            "Le march\u00e9 immobilier r\u00e9unionnais a progress\u00e9 de +4,2% en 2024",
            "L\u2019Ouest reste le secteur le plus tendu avec des prix au-del\u00e0 de 4 000 \u20ac/m\u00b2",
            "L\u2019Est offre les meilleures opportunit\u00e9s pour les primo-acc\u00e9dants",
          ]}
        />
      </div>

      <BlockSeparator id="expert-quote" title="Expert Quote Block" description="Citation d'expert" />
      <div className="max-w-[700px] mx-auto px-5 py-10 md:px-8">
        <ExpertQuoteBlock
          quote="Une estimation pr\u00e9cise est la cl\u00e9 d\u2019une vente r\u00e9ussie. Trop de propri\u00e9taires surestiment leur bien de 10 \u00e0 15%, ce qui allonge consid\u00e9rablement le d\u00e9lai de vente."
          author="Valentin Bourassin"
          role="Expert immobilier \u2014 La R\u00e9union"
        />
      </div>

      <BlockSeparator id="stat-highlight" title="Stat Highlight Block" description="Chiffre cl\u00e9 mis en avant" />
      <div className="max-w-[700px] mx-auto px-5 py-10 md:px-8">
        <StatHighlightBlock
          value="+4,2%"
          label="Hausse moyenne des prix en 2024"
          context="Source : Observatoire de l'immobilier \u2014 La R\u00e9union"
        />
      </div>

      <BlockSeparator id="image-caption" title="Image + Caption Block" description="Image avec l\u00e9gende" />
      <div className="max-w-[700px] mx-auto px-5 py-10 md:px-8">
        <ImageCaptionBlock
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=675&fit=crop"
          alt="Vue a\u00e9rienne de Saint-Denis"
          caption="Vue a\u00e9rienne du front de mer de Saint-Denis, capitale de La R\u00e9union"
          width="wide"
        />
      </div>

      <BlockSeparator id="info-box" title="Info Box Block" description="Encarts info / warning / success" />
      <div className="max-w-[700px] mx-auto px-5 py-10 md:px-8 flex flex-col gap-6">
        <InfoBoxBlock
          variant="info"
          title="Bon \u00e0 savoir"
          content="L\u2019estimation immobili\u00e8re est gratuite et sans engagement chez Estimanou."
        />
        <InfoBoxBlock
          variant="warning"
          title="Attention"
          content="Les prix peuvent varier significativement d\u2019un quartier \u00e0 l\u2019autre, m\u00eame au sein d\u2019une m\u00eame commune."
        />
        <InfoBoxBlock
          variant="tip"
          title="Bonne nouvelle"
          content="Les prix dans l\u2019Est de l\u2019\u00eele restent accessibles, avec un potentiel de valorisation important."
        />
      </div>

      <BlockSeparator id="faq-block" title="FAQ Block" description="Accord\u00e9on de questions/r\u00e9ponses" />
      <div className="max-w-[700px] mx-auto px-5 py-10 md:px-8">
        <FAQBlock
          questions={[
            { question: "Combien co\u00fbte une estimation immobili\u00e8re ?", answer: "L\u2019estimation est enti\u00e8rement gratuite et sans engagement." },
            { question: "Quel est le d\u00e9lai pour recevoir mon estimation ?", answer: "Vous recevez votre estimation d\u00e9taill\u00e9e sous 48 heures apr\u00e8s la visite du bien." },
            { question: "L\u2019estimation est-elle fiable ?", answer: "Nos estimations s\u2019appuient sur une analyse comparative de march\u00e9 et 10 ans d\u2019exp\u00e9rience locale." },
          ]}
        />
      </div>

      <BlockSeparator id="comparison-table" title="Comparison Table Block" description="Tableau comparatif" />
      <div className="max-w-[700px] mx-auto px-5 py-10 md:px-8">
        <ComparisonTableBlock
          headers={["Crit\u00e8re", "Ouest", "Nord", "Sud", "Est"]}
          rows={[
            ["Prix moyen/m\u00b2", "4 200 \u20ac", "2 800 \u20ac", "2 500 \u20ac", "1 900 \u20ac"],
            ["D\u00e9lai de vente", "45 jours", "75 jours", "80 jours", "95 jours"],
            ["\u00c9volution 2024", "+5,1%", "+3,2%", "+2,8%", "+1,5%"],
          ]}
        />
      </div>

      <BlockSeparator id="timeline" title="Timeline Block" description="Chronologie d'\u00e9v\u00e9nements" />
      <div className="max-w-[700px] mx-auto px-5 py-10 md:px-8">
        <TimelineBlock
          steps={[
            { number: "2020", title: "D\u00e9but de la hausse", description: "Les prix commencent \u00e0 augmenter apr\u00e8s la crise sanitaire." },
            { number: "2022", title: "Acc\u00e9l\u00e9ration", description: "Le march\u00e9 s\u2019emballe avec +8% sur l\u2019Ouest." },
            { number: "2024", title: "Stabilisation", description: "Le march\u00e9 se stabilise avec une croissance mod\u00e9r\u00e9e de +4,2%." },
          ]}
        />
      </div>

      <BlockSeparator id="cta-block" title="CTA Block" description="Call-to-action inline dans un article" />
      <div className="max-w-[700px] mx-auto px-5 py-10 md:px-8">
        <CTABlock
          title="Vous souhaitez conna\u00eetre la valeur de votre bien ?"
          description="Recevez une estimation gratuite et d\u00e9taill\u00e9e sous 48h par un expert local."
          buttonText="Demander mon estimation"
          buttonHref="/estimer"
        />
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/*  7. SIDEBAR BLOCKS                         */}
      {/* ═══════════════════════════════════════════ */}
      <CategorySeparator title="Sidebar Blocks" />

      <BlockSeparator id="sidebar-cta" title="Sidebar CTA" description="CTA dans la sidebar" />
      <div className="max-w-[320px] mx-auto px-5 py-10 md:px-8">
        <SidebarCTA />
      </div>

      <BlockSeparator id="sidebar-author" title="Sidebar Author Bio" description="Bio auteur dans la sidebar" />
      <div className="max-w-[320px] mx-auto px-5 py-10 md:px-8">
        <SidebarAuthorBio author={demoAuthor} />
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/*  8. GLOBAL COMPONENTS                      */}
      {/* ═══════════════════════════════════════════ */}
      <CategorySeparator title="Global Components" />

      <BlockSeparator id="announcement" title="Announcement Banner" description="Banni\u00e8re de notification en haut de page" />
      <AnnouncementBanner />

      <BlockSeparator id="breadcrumb" title="Breadcrumb" description="Fil d'Ariane (variante claire et sombre)" />
      <div className="max-w-[1080px] mx-auto px-5 py-10 md:px-8 flex flex-col gap-6">
        <div>
          <p className="text-navy/40 text-[11px] mb-2 uppercase tracking-wider">Variante claire (sur fond blanc)</p>
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Estimation immobili\u00e8re", href: "/estimation-immobiliere" },
            ]}
            current="Saint-Denis"
          />
        </div>
        <div className="bg-navy rounded-xl p-6">
          <p className="text-white/40 text-[11px] mb-2 uppercase tracking-wider">Variante sombre (sur fond navy)</p>
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Blog", href: "/blog" },
            ]}
            current="Bilan 2024"
            variant="light"
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/*  9. PROPERTY LIST COMPONENTS               */}
      {/* ═══════════════════════════════════════════ */}
      <CategorySeparator title="Property List Components" />

      <BlockSeparator id="property-card" title="Property Card" description="Carte de bien immobilier" />
      <div className="max-w-[400px] mx-auto px-5 py-10 md:px-8">
        <PropertyCard property={property} />
      </div>

      <BlockSeparator id="property-list-cta" title="Property List CTA" description="CTA dans la liste de biens" />
      <PropertyListCTA />

      <BlockSeparator id="property-empty" title="Property Empty State" description="\u00c9tat vide quand aucun bien ne correspond" />
      <div className="max-w-[1080px] mx-auto px-5 py-10 md:px-8">
        <PropertyEmptyState />
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/*  10. ESTIMATION WIZARD                     */}
      {/* ═══════════════════════════════════════════ */}
      <CategorySeparator title="Estimation Wizard" />

      <BlockSeparator id="wizard" title="Estimation Wizard" description="Formulaire d'estimation multi-\u00e9tapes" />
      <WizardContainer />
    </div>
  );
}
