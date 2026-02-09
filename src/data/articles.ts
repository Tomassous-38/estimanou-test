import type { BlogArticle } from "@/types/blog";

const author = {
  name: "Valentin Bourassin",
  role: "Expert immobilier — La Réunion",
  bio: "Spécialiste du marché immobilier réunionnais depuis plus de 10 ans, Valentin accompagne les propriétaires de l’Ouest dans l’estimation et la valorisation de leur patrimoine.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
};

export const articles: BlogArticle[] = [
  {
    slug: "bilan-2024-marche-immobilier-reunion",
    title: "Bilan 2024 du marché immobilier à La Réunion : tendances et perspectives",
    excerpt: "Analyse complète des tendances du marché immobilier réunionnais en 2024 : prix au m², secteurs porteurs et perspectives pour les propriétaires de l’Ouest.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=675&fit=crop",
      alt: "Vue aérienne de maisons à La Réunion",
      width: 1200,
      height: 675,
      caption: "Le marché immobilier réunionnais poursuit sa dynamique en 2024",
    },
    author,
    category: "Marché",
    tags: ["Marché immobilier", "La Réunion", "Prix au m²", "2024", "Investissement"],
    datePublished: "2025-01-15T10:00:00+04:00",
    dateModified: "2025-01-20T14:30:00+04:00",
    readingTimeMinutes: 8,
    content: [
      {
        type: "paragraph",
        content: "L’année 2024 a été marquée par des <strong>évolutions significatives</strong> sur le marché immobilier réunionnais. Entre la stabilisation des taux d’intérêt, la demande soutenue dans l’Ouest et les nouvelles dynamiques urbaines, le paysage immobilier de l’île s’est profondément transformé.",
      },
      {
        type: "key-takeaway",
        title: "À retenir",
        points: [
          "Le prix moyen au m² dans l’Ouest a progressé de <strong>4,2 %</strong> en 2024",
          "Saint-Gilles-les-Bains reste le secteur le plus demandé de l’île",
          "Les délais de vente se sont réduits à <strong>72 jours en moyenne</strong>",
          "La demande de maisons avec terrain dépasse largement l’offre disponible",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Un marché en croissance modérée mais résiliente",
        id: "marche-croissance",
      },
      {
        type: "paragraph",
        content: "Contrairement aux craintes liées à la hausse des taux d’emprunt en début d’année, le marché réunionnais a fait preuve d’une résilience remarquable. La demande, portée par l’attractivité de l’île et le dynamisme démographique, a permis de maintenir une activité soutenue sur l’ensemble du territoire.",
      },
      {
        type: "stat-highlight",
        value: "3 200 €/m²",
        label: "Prix moyen dans l’Ouest réunionnais",
        context: "Source : Notaires de La Réunion, décembre 2024",
      },
      {
        type: "paragraph",
        content: "Cette hausse modérée s’explique par plusieurs facteurs convergents : la stabilisation progressive des taux bancaires au second semestre, l’attrait constant pour le cadre de vie de la côte Ouest, et une offre qui reste structurellement inférieure à la demande sur les biens de qualité.",
      },
      {
        type: "heading",
        level: 2,
        content: "Les secteurs les plus dynamiques",
        id: "secteurs-dynamiques",
      },
      {
        type: "paragraph",
        content: "L’analyse par secteur révèle des disparités intéressantes. Si l’Ouest concentre toujours la majorité des transactions haut de gamme, d’autres zones connaissent un développement accéléré.",
      },
      {
        type: "comparison-table",
        headers: ["Secteur", "Prix moyen/m²", "Évolution 2024", "Délai moyen"],
        rows: [
          ["Saint-Gilles-les-Bains", "4 100 €", "+5,8 %", "45 jours"],
          ["Saint-Leu", "3 400 €", "+4,1 %", "62 jours"],
          ["La Possession", "2 800 €", "+3,5 %", "78 jours"],
          ["Les Avirons", "2 600 €", "+6,2 %", "55 jours"],
          ["Étang-Salé", "2 900 €", "+3,8 %", "68 jours"],
        ],
      },
      {
        type: "expert-quote",
        quote: "L’Ouest réunionnais bénéficie d’un micro-climat et d’une qualité de vie exceptionnels qui en font la zone la plus recherchée de l’île. Les biens bien positionnés et correctement estimés trouvent preneur en moins de deux mois.",
        author: "Valentin Bourassin",
        role: "Expert immobilier",
      },
      {
        type: "heading",
        level: 2,
        content: "Quels types de biens sont les plus recherchés ?",
        id: "types-biens",
      },
      {
        type: "paragraph",
        content: "En 2024, la demande s’est fortement concentrée sur les maisons individuelles avec terrain, particulièrement dans les zones résidentielles de l’Ouest. Les appartements en résidence récente avec vue mer restent également très prisés.",
      },
      {
        type: "image-caption",
        src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=675&fit=crop",
        alt: "Villa avec piscine à La Réunion",
        caption: "Les villas avec piscine dans l’Ouest restent les biens les plus recherchés du marché réunionnais",
      },
      {
        type: "info-box",
        variant: "tip",
        title: "Conseil pour les propriétaires",
        content: "Si vous envisagez de vendre, c’est le moment idéal pour faire estimer votre bien. Un marché dynamique combiné à des délais de vente réduits permet d’obtenir les meilleures conditions de vente. Une estimation précise est la clé pour fixer le juste prix.",
      },
      {
        type: "heading",
        level: 2,
        content: "Les étapes pour estimer correctement votre bien",
        id: "etapes-estimation",
      },
      {
        type: "paragraph",
        content: "Une estimation immobilière rigoureuse suit une méthodologie précise. Voici les étapes clés que nous suivons chez Estimanou pour vous fournir une évaluation fiable.",
      },
      {
        type: "timeline",
        steps: [
          {
            number: "01",
            title: "Analyse du marché local",
            description: "Étude des transactions récentes dans votre quartier et comparaison avec des biens similaires vendus au cours des 12 derniers mois.",
          },
          {
            number: "02",
            title: "Visite et diagnostic du bien",
            description: "Évaluation de l’état général, des équipements, de la surface habitable et du terrain. Identification des points forts et des axes d’amélioration.",
          },
          {
            number: "03",
            title: "Calcul de la valeur vénale",
            description: "Croisement de trois méthodes d’estimation (comparative, par capitalisation et par le coût de remplacement) pour déterminer un prix juste.",
          },
          {
            number: "04",
            title: "Rapport détaillé et recommandations",
            description: "Remise d’un rapport complet avec argumentation de la valeur, photos et recommandations pour optimiser la vente.",
          },
        ],
      },
      {
        type: "cta-block",
        title: "Le marché réunionnais a bougé. Et votre bien ?",
        description: "Recevez une analyse détaillée et argumentée par un expert du marché réunionnais. Résultat sous 48h.",
        buttonText: "Vérifier sa valeur",
        buttonHref: "/#estimer",
      },
      {
        type: "heading",
        level: 2,
        content: "Perspectives pour 2025",
        id: "perspectives-2025",
      },
      {
        type: "paragraph",
        content: "Les indicateurs actuels laissent entrevoir une année 2025 positive pour le marché immobilier réunionnais. La poursuite de la baisse des taux d’intérêt devrait soutenir la demande, tandis que l’offre restera contrainte dans les secteurs les plus prisés.",
      },
      {
        type: "info-box",
        variant: "info",
        content: "Les taux d’emprunt moyens sont passés de 4,2 % en janvier 2024 à 3,4 % en décembre, une tendance qui devrait se poursuivre au premier semestre 2025 selon les analystes du marché.",
      },
      {
        type: "heading",
        level: 3,
        content: "Les facteurs à surveiller",
        id: "facteurs-surveiller",
      },
      {
        type: "paragraph",
        content: "Plusieurs éléments pourraient influencer le marché dans les mois à venir : l’évolution de la politique du logement, les projets d’aménagement urbain (nouvelle route du littoral, extension du tramway) et la dynamique touristique de l’île.",
      },
      {
        type: "info-box",
        variant: "warning",
        title: "À surveiller",
        content: "Les nouvelles réglementations thermiques (RE 2020 adaptée aux DOM) pourraient impacter les coûts de construction et, par ricochet, les prix de l’immobilier neuf à La Réunion.",
      },
      {
        type: "related-articles",
        articleSlugs: ["pourquoi-faire-estimer-avant-de-vendre", "erreurs-qui-font-baisser-la-valeur"],
      },
      {
        type: "faq",
        questions: [
          {
            question: "Quel est le prix moyen au m² à La Réunion en 2024 ?",
            answer: "Le prix moyen au m² varie considérablement selon les secteurs. Dans l’Ouest, il s’établit autour de <strong>3 200 €/m²</strong>, avec des pics à 4 100 €/m² à Saint-Gilles-les-Bains. Le Nord (Saint-Denis) affiche environ 2 500 €/m², tandis que le Sud est généralement plus abordable.",
          },
          {
            question: "Est-ce le bon moment pour vendre à La Réunion ?",
            answer: "Les conditions actuelles sont favorables à la vente : la demande reste soutenue, les délais de vente se réduisent (72 jours en moyenne) et la baisse des taux d’intérêt augmente le pouvoir d’achat des acquéreurs. Une estimation précise reste néanmoins essentielle pour fixer le juste prix.",
          },
          {
            question: "Comment est calculée l’estimation d’un bien immobilier ?",
            answer: "L’estimation repose sur trois méthodes complémentaires : la méthode comparative (analyse des ventes similaires récentes), la méthode par capitalisation (pour les biens locatifs) et la méthode par le coût de remplacement. Le croisement de ces approches permet de déterminer la valeur vénale la plus juste.",
          },
          {
            question: "Combien de temps faut-il pour vendre un bien dans l’Ouest ?",
            answer: "En 2024, le délai moyen de vente dans l’Ouest réunionnais est de <strong>72 jours</strong>. Ce délai peut varier de 45 jours pour les biens les mieux situés (Saint-Gilles) à 78 jours pour les secteurs périphériques. Un bien correctement estimé se vend généralement plus rapidement.",
          },
        ],
      },
    ],
  },
  {
    slug: "pourquoi-faire-estimer-avant-de-vendre",
    title: "Pourquoi faire estimer votre bien avant de vendre ?",
    excerpt: "Les 3 erreurs les plus courantes qui font perdre de l’argent aux vendeurs. Découvrez pourquoi une estimation professionnelle est indispensable.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&h=675&fit=crop",
      alt: "Expertise immobilière à La Réunion",
      width: 1200,
      height: 675,
    },
    author,
    category: "Conseils",
    tags: ["Estimation", "Vente", "Conseils", "La Réunion"],
    datePublished: "2025-01-08T09:00:00+04:00",
    dateModified: "2025-01-08T09:00:00+04:00",
    readingTimeMinutes: 5,
    content: [
      {
        type: "paragraph",
        content: "Vous envisagez de vendre votre bien immobilier à La Réunion ? La première étape, et sans doute la plus importante, est de <strong>faire estimer correctement votre propriété</strong>. Trop de vendeurs fixent leur prix de vente au feeling, ce qui leur coûte souvent cher.",
      },
      {
        type: "heading",
        level: 2,
        content: "Les 3 erreurs les plus courantes",
        id: "erreurs-courantes",
      },
      {
        type: "paragraph",
        content: "Après des centaines d’estimations réalisées dans l’Ouest réunionnais, voici les erreurs que nous observons le plus fréquemment chez les propriétaires vendeurs.",
      },
      {
        type: "key-takeaway",
        title: "Les 3 pièges à éviter",
        points: [
          "<strong>Surestimer son bien</strong> — Un prix trop élevé fait fuir les acheteurs et allonge le délai de vente",
          "<strong>Sous-estimer les travaux</strong> — Des défauts non anticipés peuvent faire chuter le prix lors de la négociation",
          "<strong>Ignorer le marché local</strong> — Chaque quartier a sa propre dynamique de prix",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "L’estimation professionnelle : un investissement rentable",
        id: "estimation-rentable",
      },
      {
        type: "paragraph",
        content: "Une estimation professionnelle ne se limite pas à donner un chiffre. C’est une analyse complète qui prend en compte l’état du bien, sa localisation exacte, les tendances du marché et les transactions récentes dans le quartier.",
      },
      {
        type: "stat-highlight",
        value: "15 %",
        label: "Écart moyen entre le prix souhaité et le prix réel",
        context: "Source : étude interne Estimanou, 2024",
      },
      {
        type: "cta-block",
        title: "48h. Gratuit. Par un expert qui connaît votre quartier.",
        description: "Ne laissez pas le hasard décider du prix de votre bien.",
        buttonText: "Recevoir mon estimation",
        buttonHref: "/#estimer",
      },
    ],
  },
  {
    slug: "erreurs-qui-font-baisser-la-valeur",
    title: "Les erreurs qui font baisser la valeur de votre bien",
    excerpt: "Mauvais entretien, travaux non déclarés, aménagements inadaptés… Ce qui coûte cher lors de l’estimation de votre propriété.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=675&fit=crop",
      alt: "Rénovation immobilière",
      width: 1200,
      height: 675,
    },
    author,
    category: "Guide",
    tags: ["Estimation", "Rénovation", "Valeur", "Erreurs"],
    datePublished: "2024-12-22T09:00:00+04:00",
    dateModified: "2024-12-22T09:00:00+04:00",
    readingTimeMinutes: 6,
    content: [
      {
        type: "paragraph",
        content: "Certains choix ou négligences peuvent <strong>réduire significativement</strong> la valeur de votre bien immobilier. Voici les erreurs les plus fréquentes que nous constatons lors de nos estimations à La Réunion.",
      },
      {
        type: "heading",
        level: 2,
        content: "Le mauvais entretien : ennemi n°1 de la valeur",
        id: "mauvais-entretien",
      },
      {
        type: "paragraph",
        content: "Le climat tropical de La Réunion est particulièrement exigeant pour les bâtiments. Humidité, sel marin, cyclones : les agressions sont nombreuses. Un bien mal entretenu perd rapidement de sa valeur sur le marché.",
      },
      {
        type: "info-box",
        variant: "warning",
        title: "Impact sur la valeur",
        content: "Un défaut d’entretien visible (peinture écaillée, toiture abîmée, humidité) peut faire baisser la valeur de votre bien de <strong>10 à 20 %</strong> par rapport à un bien comparable en bon état.",
      },
      {
        type: "heading",
        level: 2,
        content: "Les travaux non déclarés",
        id: "travaux-non-declares",
      },
      {
        type: "paragraph",
        content: "Extensions, vérandas, piscines… Les travaux réalisés sans permis ou déclaration préalable constituent un risque juridique majeur pour l’acheteur. Ils ne sont pas comptabilisés dans la surface légale et peuvent même entraîner une obligation de démolition.",
      },
      {
        type: "cta-block",
        title: "Mal estimer, c'est perdre de l'argent.",
        description: "Nos experts identifient les points forts et les faiblesses de votre propriété.",
        buttonText: "Estimer au juste prix",
        buttonHref: "/#estimer",
      },
    ],
  },
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined =>
  articles.find((a) => a.slug === slug);

export const getRelatedArticles = (currentSlug: string, limit = 3): BlogArticle[] =>
  articles.filter((a) => a.slug !== currentSlug).slice(0, limit);
