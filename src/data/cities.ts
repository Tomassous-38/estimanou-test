import type { CityLanding } from "@/types/city";

export const cities: CityLanding[] = [
  // ─────────────────────────────────────────────
  // 1. SAINT-DENIS
  // ─────────────────────────────────────────────
  {
    slug: "saint-denis",
    name: "Saint-Denis",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=675&fit=crop",
    tagline: "Le cœur battant de La Réunion, entre océan et montagne",
    description:
      "Saint-Denis, chef-lieu de La Réunion, est le poumon économique et culturel de l'île. Le marché immobilier dionysien est particulièrement dynamique, porté par la présence de l'université, des administrations et d'un tissu économique dense. Les quartiers résidentiels de La Montagne et de Moufia attirent les familles en quête de calme et de verdure, tandis que le centre-ville concentre les appartements et les investissements locatifs. Le Chaudron, en pleine rénovation urbaine, offre des opportunités d'achat à des prix plus accessibles. Sainte-Clotilde, véritable ville dans la ville, séduit par ses commerces et sa proximité avec le littoral. Le prix moyen au mètre carré s'établit autour de 2 800 EUR, avec des disparités significatives selon les quartiers. La demande reste soutenue, alimentée par la croissance démographique et le statut administratif de la commune.",
    stats: {
      avgPricePerSqm: "2 800 EUR",
      estimationsCount: "180+",
      avgSaleTime: "75 jours",
      priceEvolution: "+3,2%",
    },
    neighborhoods: [
      {
        name: "Moufia",
        description:
          "Quartier universitaire et résidentiel prisé des jeunes actifs et des familles. Moufia offre un cadre de vie agréable avec ses espaces verts, la proximité du campus et un accès rapide au centre-ville.",
        avgPricePerSqm: "2 950 EUR",
      },
      {
        name: "Le Chaudron",
        description:
          "Quartier populaire en pleine mutation grâce aux programmes de rénovation urbaine. Le Chaudron attire les investisseurs avec des prix encore accessibles et un fort potentiel de valorisation à moyen terme.",
        avgPricePerSqm: "2 100 EUR",
      },
      {
        name: "Sainte-Clotilde",
        description:
          "Véritable pôle urbain au nord-est de Saint-Denis, Sainte-Clotilde dispose de tous les services et commerces. Le quartier offre un large choix de biens, des appartements en résidence aux maisons individuelles.",
        avgPricePerSqm: "2 750 EUR",
      },
      {
        name: "La Montagne",
        description:
          "Perché sur les hauteurs de Saint-Denis, La Montagne est le quartier résidentiel par excellence. Les villas avec vue sur l'océan et le climat plus frais en font un secteur très recherché par les cadres et les familles aisées.",
        avgPricePerSqm: "3 400 EUR",
      },
    ],
    testimonials: [
      {
        quote:
          "Estimanou m'a permis d'obtenir une estimation précise de mon appartement à Moufia en moins de 24 heures. Le prix suggéré correspondait parfaitement au marché et j'ai vendu en seulement 2 mois.",
        name: "Nathalie Hoarau",
        location: "Moufia, Saint-Denis",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
      {
        quote:
          "En tant qu'investisseur, j'avais besoin d'une vision claire du marché dionysien. L'estimation détaillée par quartier m'a aidé à cibler mon achat au Chaudron, un choix que je ne regrette pas.",
        name: "Jean-Marc Payet",
        location: "Le Chaudron, Saint-Denis",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
    ],
    faq: [
      {
        question: "Quel est le prix moyen au m² à Saint-Denis en 2025 ?",
        answer:
          "Le prix moyen au mètre carré à Saint-Denis s'établit autour de <strong>2 800 EUR</strong> en 2025. Ce prix varie significativement selon les quartiers : comptez environ 3 400 EUR/m² à La Montagne et 2 100 EUR/m² au Chaudron. La tendance est à la hausse avec une progression de +3,2% sur un an.",
      },
      {
        question:
          "Quels sont les quartiers les plus recherchés à Saint-Denis ?",
        answer:
          "La Montagne reste le quartier le plus prisé pour son cadre de vie exceptionnel et ses villas avec vue. Moufia attire les familles grâce à la proximité du campus universitaire et de ses écoles. Sainte-Clotilde séduit par son dynamisme commercial et sa vie de quartier.",
      },
      {
        question: "Combien de temps faut-il pour vendre un bien à Saint-Denis ?",
        answer:
          "Le délai moyen de vente à Saint-Denis est de <strong>75 jours</strong>, ce qui est inférieur à la moyenne nationale. Les biens correctement estimés dans les quartiers recherchés comme Moufia ou La Montagne se vendent généralement en 45 à 60 jours.",
      },
      {
        question:
          "Est-ce un bon moment pour investir dans l'immobilier à Saint-Denis ?",
        answer:
          "Saint-Denis présente un marché immobilier solide avec une croissance régulière de +3,2% par an. Le statut de chef-lieu, la présence universitaire et les projets de développement urbain garantissent une demande locative soutenue. Le Chaudron offre actuellement le meilleur potentiel de plus-value.",
      },
      {
        question:
          "Comment Estimanou estime-t-il les biens immobiliers à Saint-Denis ?",
        answer:
          "Notre algorithme analyse les transactions récentes dans chaque quartier de Saint-Denis, les caractéristiques du bien (surface, étage, exposition, état) et les tendances du marché local. Nous croisons ces données avec notre base de plus de 180 estimations réalisées sur la commune pour garantir une précision optimale.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. SAINT-PIERRE
  // ─────────────────────────────────────────────
  {
    slug: "saint-pierre",
    name: "Saint-Pierre",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=675&fit=crop",
    tagline: "La capitale du Sud, entre dynamisme urbain et art de vivre",
    description:
      "Saint-Pierre s'impose comme le pôle économique majeur du sud de La Réunion. Son front de mer animé, ses commerces et son marché forain célèbre en font une ville où il fait bon vivre et investir. Le marché immobilier saint-pierrois est porté par une demande constante, tant pour l'habitat principal que pour l'investissement locatif. Terre Sainte, ancien village de pêcheurs, offre un charme authentique avec ses petites maisons créoles. Ligne Paradis, sur les hauteurs, attire les familles avec ses lotissements récents. Ravine des Cabris propose des biens plus abordables avec un bon potentiel de valorisation, tandis que Bois d'Olives se développe rapidement avec de nouveaux programmes immobiliers. Le prix moyen de 2 600 EUR/m² reste attractif comparé à la côte ouest.",
    stats: {
      avgPricePerSqm: "2 600 EUR",
      estimationsCount: "145+",
      avgSaleTime: "82 jours",
      priceEvolution: "+2,8%",
    },
    neighborhoods: [
      {
        name: "Ravine des Cabris",
        description:
          "Quartier résidentiel en plein essor situé sur les hauteurs de Saint-Pierre. Ravine des Cabris offre un bon compromis entre prix accessibles et qualité de vie, avec de nombreux lotissements récents et une vue dégagée sur le littoral.",
        avgPricePerSqm: "2 300 EUR",
      },
      {
        name: "Terre Sainte",
        description:
          "Ancien village de pêcheurs au charme créole authentique, Terre Sainte est devenu un quartier très prisé pour son ambiance conviviale, ses restaurants en bord de mer et son architecture traditionnelle préservée.",
        avgPricePerSqm: "3 000 EUR",
      },
      {
        name: "Ligne Paradis",
        description:
          "Quartier résidentiel haut de gamme sur les hauteurs de Saint-Pierre. Ligne Paradis séduit les familles par ses écoles réputées, ses espaces verts et ses villas modernes avec vue sur l'océan Indien.",
        avgPricePerSqm: "2 900 EUR",
      },
      {
        name: "Bois d'Olives",
        description:
          "Secteur en plein développement au nord de Saint-Pierre, Bois d'Olives bénéficie de nombreux programmes neufs et d'une bonne desserte routière. Les prix encore modérés attirent les primo-accédants.",
        avgPricePerSqm: "2 200 EUR",
      },
    ],
    testimonials: [
      {
        quote:
          "Nous cherchions à vendre notre maison à Terre Sainte et l'estimation Estimanou nous a évité de sous-évaluer notre bien. Résultat : une vente au prix en 70 jours. Merci pour la précision de l'analyse !",
        name: "Sophie Grondin",
        location: "Terre Sainte, Saint-Pierre",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      },
      {
        quote:
          "Primo-accédant à Bois d'Olives, j'ai utilisé Estimanou pour vérifier que le prix demandé par le vendeur était cohérent. L'outil m'a donné confiance pour négocier et j'ai économisé près de 8 000 EUR.",
        name: "Fabrice Dijoux",
        location: "Bois d'Olives, Saint-Pierre",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      },
    ],
    faq: [
      {
        question: "Quel est le prix moyen de l'immobilier à Saint-Pierre ?",
        answer:
          "Le prix moyen au mètre carré à Saint-Pierre est de <strong>2 600 EUR</strong> en 2025. Les quartiers comme Terre Sainte et Ligne Paradis affichent des prix plus élevés (autour de 3 000 EUR/m²), tandis que Bois d'Olives et Ravine des Cabris restent plus accessibles autour de 2 200 EUR/m².",
      },
      {
        question:
          "Saint-Pierre est-elle une bonne ville pour l'investissement locatif ?",
        answer:
          "Oui, Saint-Pierre est très attractive pour l'investissement locatif grâce à sa population étudiante (IUT, écoles), son bassin d'emploi dynamique et son attractivité touristique. Les rendements locatifs bruts se situent entre 5% et 7% selon les quartiers et le type de bien.",
      },
      {
        question:
          "Quels types de biens trouve-t-on à Saint-Pierre ?",
        answer:
          "Le parc immobilier de Saint-Pierre est très diversifié : maisons créoles à Terre Sainte, villas modernes à Ligne Paradis, appartements en centre-ville, et programmes neufs à Bois d'Olives. Les T2 et T3 représentent la majorité des transactions en appartement.",
      },
      {
        question:
          "Comment évolue le marché immobilier dans le sud de La Réunion ?",
        answer:
          "Le marché immobilier du sud de La Réunion connaît une croissance stable de <strong>+2,8%</strong> par an à Saint-Pierre. Cette progression est soutenue par le développement des infrastructures, l'attractivité du front de mer rénové et l'arrivée de nouveaux programmes immobiliers.",
      },
      {
        question:
          "Quel est le délai de vente moyen pour un bien à Saint-Pierre ?",
        answer:
          "Le délai moyen de vente à Saint-Pierre est de <strong>82 jours</strong>. Ce délai peut être réduit à 50-60 jours pour les biens bien situés et correctement estimés, notamment dans les quartiers de Terre Sainte et du centre-ville où la demande est forte.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. SAINT-PAUL
  // ─────────────────────────────────────────────
  {
    slug: "saint-paul",
    name: "Saint-Paul",
    heroImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=675&fit=crop",
    tagline: "La plus grande commune de France, un marché immobilier d'exception",
    description:
      "Saint-Paul, plus grande commune de France par sa superficie, offre une diversité immobilière sans égale à La Réunion. Du littoral premium de la côte ouest aux hauteurs verdoyantes de Plateau Caillou, chaque quartier possède sa propre identité. Le centre-ville historique, avec son marché forain emblématique et son patrimoine créole, attire les amateurs d'authenticité. Plateau Caillou, perché à 800 mètres d'altitude, séduit les familles par son climat tempéré et ses lotissements récents. Vue Belle offre un panorama exceptionnel sur la côte. La Saline, à mi-chemin entre plage et montagne, constitue un compromis idéal. Le marché saint-paulois affiche une progression soutenue de +4,1%, portée par l'attractivité de la côte ouest et le développement des infrastructures routières.",
    stats: {
      avgPricePerSqm: "3 100 EUR",
      estimationsCount: "165+",
      avgSaleTime: "68 jours",
      priceEvolution: "+4,1%",
    },
    neighborhoods: [
      {
        name: "Centre-ville",
        description:
          "Le cœur historique de Saint-Paul avec son célèbre marché forain, ses bâtiments patrimoniaux et sa vie culturelle animée. Le centre-ville offre principalement des appartements et des maisons créoles de caractère, très recherchés pour leur charme authentique.",
        avgPricePerSqm: "3 200 EUR",
      },
      {
        name: "Plateau Caillou",
        description:
          "Quartier résidentiel d'altitude offrant un climat frais et agréable toute l'année. Plateau Caillou est très prisé des familles pour ses écoles, ses espaces verts et ses lotissements récents avec vue sur le littoral.",
        avgPricePerSqm: "2 800 EUR",
      },
      {
        name: "Vue Belle",
        description:
          "Comme son nom l'indique, Vue Belle offre des panoramas exceptionnels sur la côte ouest et l'océan Indien. Ce quartier résidentiel en plein développement attire les acheteurs en quête de calme et de nature, avec des terrains constructibles encore disponibles.",
        avgPricePerSqm: "2 600 EUR",
      },
      {
        name: "La Saline",
        description:
          "Située entre le littoral et les hauteurs, La Saline offre un compromis idéal entre plage et montagne. Le quartier se développe rapidement avec des programmes neufs et des lotissements familiaux à des prix encore raisonnables.",
        avgPricePerSqm: "2 900 EUR",
      },
    ],
    testimonials: [
      {
        quote:
          "Propriétaire d'une villa à Plateau Caillou, j'étais surpris par l'estimation Estimanou, supérieure à ce que je pensais. Après mise en vente, j'ai reçu 3 offres en un mois. L'outil reflète parfaitement le marché actuel.",
        name: "Laurent Rivière",
        location: "Plateau Caillou, Saint-Paul",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      },
      {
        quote:
          "Estimanou m'a aidée à comprendre les écarts de prix entre les quartiers de Saint-Paul. J'ai finalement acheté à La Saline, un choix parfait pour notre famille avec un excellent rapport qualité-prix.",
        name: "Marie-Louise Fontaine",
        location: "La Saline, Saint-Paul",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      },
    ],
    faq: [
      {
        question:
          "Pourquoi les prix sont-ils plus élevés à Saint-Paul qu'ailleurs à La Réunion ?",
        answer:
          "Saint-Paul bénéficie de la côte ouest, la plus ensoleillée de l'île, avec ses plages et son cadre de vie exceptionnel. La proximité de Saint-Gilles-les-Bains, le marché forain et le patrimoine historique contribuent à maintenir une forte demande qui tire les prix vers le haut, avec une moyenne de <strong>3 100 EUR/m²</strong>.",
      },
      {
        question:
          "Quels sont les quartiers les plus abordables de Saint-Paul ?",
        answer:
          "Vue Belle et les hauts de La Saline offrent les prix les plus accessibles de la commune, autour de 2 600 EUR/m². Ces quartiers en développement représentent d'excellentes opportunités pour les primo-accédants, avec des terrains constructibles encore disponibles et des programmes neufs à prix maîtrisé.",
      },
      {
        question:
          "Le marché immobilier de Saint-Paul est-il en hausse ?",
        answer:
          "Oui, le marché immobilier saint-paulois affiche une croissance de <strong>+4,1%</strong> sur un an, l'une des plus fortes de l'île. Cette dynamique est soutenue par l'attractivité touristique de la côte ouest, l'amélioration des infrastructures routières et une demande résidentielle soutenue.",
      },
      {
        question:
          "Quel budget prévoir pour acheter une maison à Saint-Paul ?",
        answer:
          "Le budget moyen pour une maison à Saint-Paul varie entre 250 000 EUR pour un T3 à Vue Belle et plus de 500 000 EUR pour une villa avec vue à Plateau Caillou ou en centre-ville. Les appartements neufs en résidence se négocient entre 180 000 et 320 000 EUR selon la surface et la localisation.",
      },
      {
        question:
          "Combien de temps pour vendre un bien immobilier à Saint-Paul ?",
        answer:
          "Le délai moyen de vente à Saint-Paul est de <strong>68 jours</strong>, l'un des plus courts de l'île. La forte demande sur la côte ouest accélère les transactions, surtout pour les biens situés en centre-ville ou à proximité du littoral. Une estimation précise est clé pour vendre rapidement.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. LE TAMPON
  // ─────────────────────────────────────────────
  {
    slug: "le-tampon",
    name: "Le Tampon",
    heroImage:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=675&fit=crop",
    tagline: "Les hauteurs du sud, un cadre de vie privilégié à prix doux",
    description:
      "Le Tampon, troisième ville de La Réunion, séduit par son climat tempéré et son cadre de vie verdoyant dans les hauteurs du sud. Cette commune résidentielle offre un marché immobilier accessible, idéal pour les familles et les primo-accédants. Le quartier du 14ème km, centre névralgique de la ville, concentre les commerces et les services. Trois Mares, plus en altitude, offre un environnement paisible et verdoyant. La Chatoire, en plein essor, accueille de nombreux programmes neufs. Bras-Creux, aux portes de la Plaine des Cafres, attire les amoureux de nature et de tranquillité. Avec un prix moyen de 2 200 EUR/m², Le Tampon reste l'une des communes les plus abordables de l'île pour accéder à la propriété, tout en offrant un cadre de vie exceptionnel entre mer et montagne.",
    stats: {
      avgPricePerSqm: "2 200 EUR",
      estimationsCount: "120+",
      avgSaleTime: "90 jours",
      priceEvolution: "+1,9%",
    },
    neighborhoods: [
      {
        name: "14ème km",
        description:
          "Centre-ville du Tampon et principal pôle commercial de la commune. Le 14ème km concentre les services, les écoles et les transports. On y trouve principalement des appartements et des maisons de ville, avec une bonne accessibilité.",
        avgPricePerSqm: "2 350 EUR",
      },
      {
        name: "Trois Mares",
        description:
          "Quartier résidentiel en altitude, Trois Mares offre un climat frais et une végétation luxuriante. Les familles apprécient le calme, les espaces verts et la proximité des sentiers de randonnée vers le Piton de la Fournaise.",
        avgPricePerSqm: "2 100 EUR",
      },
      {
        name: "La Chatoire",
        description:
          "Secteur en plein développement entre Le Tampon et Saint-Pierre, La Chatoire accueille de nombreux programmes neufs et lotissements. Sa situation stratégique à mi-chemin entre les deux villes en fait un quartier très recherché.",
        avgPricePerSqm: "2 400 EUR",
      },
      {
        name: "Bras-Creux",
        description:
          "Situé dans les hauts du Tampon, Bras-Creux offre un cadre de vie rural et authentique. Les terrains y sont plus grands et les prix plus accessibles, attirant les acheteurs en quête de tranquillité et d'espace.",
        avgPricePerSqm: "1 850 EUR",
      },
    ],
    testimonials: [
      {
        quote:
          "Grâce à Estimanou, nous avons pu estimer notre maison à Trois Mares avec précision. L'outil a pris en compte les spécificités des hauts du Tampon, ce qui nous a permis de fixer un prix juste et de vendre sereinement.",
        name: "Patrick Lebon",
        location: "Trois Mares, Le Tampon",
        avatar:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
      },
      {
        quote:
          "Primo-accédants avec un budget serré, Estimanou nous a aidé à identifier les meilleures opportunités au Tampon. Nous avons trouvé notre bonheur à Bras-Creux, dans notre budget, avec un terrain magnifique.",
        name: "Aurélie Morel",
        location: "Bras-Creux, Le Tampon",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
      },
    ],
    faq: [
      {
        question:
          "Pourquoi Le Tampon est-il moins cher que les villes côtières ?",
        answer:
          "Le Tampon est situé dans les hauteurs, à environ 550 mètres d'altitude, sans accès direct à la mer. Les prix plus modérés, autour de <strong>2 200 EUR/m²</strong>, s'expliquent par cette localisation intérieure. En contrepartie, la commune offre un climat tempéré agréable, des terrains plus grands et un cadre de vie verdoyant très apprécié des familles.",
      },
      {
        question:
          "Le Tampon est-il adapté pour un premier achat immobilier ?",
        answer:
          "Le Tampon est l'une des communes les plus adaptées aux primo-accédants à La Réunion. Avec des prix 30 à 40% inférieurs à la côte ouest, il est possible d'acheter une maison de 3 chambres avec jardin pour moins de 250 000 EUR. De nombreux programmes neufs éligibles au PTZ facilitent l'accès à la propriété.",
      },
      {
        question:
          "Quels sont les projets de développement au Tampon ?",
        answer:
          "Le Tampon bénéficie de plusieurs projets structurants : extension de la zone commerciale de La Chatoire, rénovation du centre-ville au 14ème km, et développement de nouveaux lotissements. Le projet de transport en commun reliant Le Tampon à Saint-Pierre renforcera encore l'attractivité de la commune.",
      },
      {
        question:
          "Quel est le profil des acheteurs au Tampon ?",
        answer:
          "Les acheteurs au Tampon sont majoritairement des familles avec enfants recherchant un cadre de vie calme et des surfaces plus grandes qu'en ville. On trouve également des jeunes couples primo-accédants attirés par les prix accessibles et des retraités séduits par le climat tempéré des hauteurs.",
      },
      {
        question:
          "Le Tampon est-il bien desservi malgré sa localisation en altitude ?",
        answer:
          "Oui, Le Tampon est relié à Saint-Pierre en 15 minutes par la RN3 et dispose de toutes les commodités : commerces, écoles, lycées, centre hospitalier, équipements sportifs et culturels. La commune est également un point de départ privilégié pour les excursions vers le volcan et la Plaine des Cafres.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. SAINT-LEU
  // ─────────────────────────────────────────────
  {
    slug: "saint-leu",
    name: "Saint-Leu",
    heroImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=675&fit=crop",
    tagline: "La côte ouest prisée, entre plages de sable et vagues légendaires",
    description:
      "Saint-Leu incarne l'art de vivre de la côte ouest réunionnaise. Célèbre pour ses spots de surf, son lagon protégé et son ensoleillement exceptionnel, cette commune attire une clientèle exigeante en quête de qualité de vie. Le centre-ville, avec ses restaurants et boutiques en bord de mer, concentre les appartements et petites maisons créoles. Piton Saint-Leu, sur les hauteurs, offre des vues panoramiques sur l'océan et des propriétés spacieuses. La Chaloupe, plus reculée, préserve un charme rural authentique. Stella, entre mer et montagne, se développe rapidement avec des résidences modernes. Le marché immobilier saint-leusien est dynamique avec une progression de +5,2% par an, porté par la rareté du foncier sur le littoral et une demande croissante de la part des métropolitains en quête de soleil.",
    stats: {
      avgPricePerSqm: "3 400 EUR",
      estimationsCount: "95+",
      avgSaleTime: "60 jours",
      priceEvolution: "+5,2%",
    },
    neighborhoods: [
      {
        name: "Centre-ville",
        description:
          "Le cœur de Saint-Leu, animé et convivial, avec ses commerces, restaurants et son front de mer. Le centre offre des appartements avec vue mer et des maisons créoles de caractère, dans un cadre de vie décontracté et branché.",
        avgPricePerSqm: "3 600 EUR",
      },
      {
        name: "Piton Saint-Leu",
        description:
          "Sur les hauteurs de la commune, Piton Saint-Leu offre des vues imprenables sur le littoral et un climat légèrement plus frais. Les grandes parcelles et les villas d'architecte en font un secteur haut de gamme très prisé.",
        avgPricePerSqm: "3 200 EUR",
      },
      {
        name: "La Chaloupe",
        description:
          "Village authentique dans les hauts de Saint-Leu, La Chaloupe conserve un caractère rural et une atmosphère paisible. Les prix plus accessibles et les grands terrains attirent les familles en quête d'espace et de nature.",
        avgPricePerSqm: "2 500 EUR",
      },
      {
        name: "Stella",
        description:
          "Quartier résidentiel en plein essor entre le littoral et les hauteurs. Stella accueille de nouveaux lotissements et programmes immobiliers modernes, offrant un bon compromis entre proximité des plages et budget maîtrisé.",
        avgPricePerSqm: "3 100 EUR",
      },
    ],
    testimonials: [
      {
        quote:
          "Nous avons utilisé Estimanou pour estimer notre villa à Piton Saint-Leu avant de la mettre en vente. L'estimation était non seulement précise mais aussi détaillée, avec une analyse du marché local qui nous a rassurés.",
        name: "Thierry Baret",
        location: "Piton Saint-Leu, Saint-Leu",
        avatar:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
      },
      {
        quote:
          "Arrivée de métropole, je ne connaissais pas les prix à La Réunion. Estimanou m'a donné une vision claire du marché de Saint-Leu et m'a permis de trouver un appartement en centre-ville au juste prix. Un outil indispensable !",
        name: "Camille Dubois",
        location: "Centre-ville, Saint-Leu",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      },
    ],
    faq: [
      {
        question:
          "Pourquoi Saint-Leu est-elle l'une des villes les plus chères de La Réunion ?",
        answer:
          "Saint-Leu bénéficie d'un emplacement privilégié sur la côte ouest, la plus ensoleillée de l'île, avec un lagon protégé et des plages magnifiques. La rareté du foncier constructible sur le littoral, combinée à une forte demande de la part des résidents locaux et des acquéreurs métropolitains, pousse les prix à la hausse avec une moyenne de <strong>3 400 EUR/m²</strong>.",
      },
      {
        question:
          "Quel est le potentiel locatif à Saint-Leu ?",
        answer:
          "Saint-Leu offre un excellent potentiel locatif, notamment en location saisonnière grâce à son attractivité touristique (surf, plongée, parapente). Les rendements en meublé touristique peuvent atteindre 7 à 9% brut. La location longue durée reste également rentable avec une forte demande dans le centre-ville.",
      },
      {
        question:
          "Quels types de biens sont les plus recherchés à Saint-Leu ?",
        answer:
          "Les biens les plus recherchés à Saint-Leu sont les appartements T2-T3 avec vue mer en centre-ville, les villas avec piscine à Piton Saint-Leu, et les maisons créoles de caractère. Les terrains constructibles sont également très demandés en raison de leur rareté sur la commune.",
      },
      {
        question:
          "Est-il encore possible de trouver des biens abordables à Saint-Leu ?",
        answer:
          "Oui, les quartiers de La Chaloupe et les hauts de Stella proposent des biens à des prix plus accessibles, autour de 2 500 EUR/m². Ces secteurs en développement offrent de bonnes opportunités pour les acheteurs avec un budget plus modéré tout en restant sur la commune de Saint-Leu.",
      },
      {
        question:
          "Comment évoluent les prix de l'immobilier à Saint-Leu ?",
        answer:
          "Les prix à Saint-Leu connaissent une hausse soutenue de <strong>+5,2%</strong> par an, l'une des plus fortes progressions de l'île. Cette tendance devrait se poursuivre avec le développement touristique de la côte ouest et la rareté croissante du foncier disponible sur le littoral.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. SAINT-GILLES-LES-BAINS
  // ─────────────────────────────────────────────
  {
    slug: "saint-gilles",
    name: "Saint-Gilles-les-Bains",
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=675&fit=crop",
    tagline: "Le joyau balnéaire de l'océan Indien, l'adresse la plus prisée de l'île",
    description:
      "Saint-Gilles-les-Bains est la station balnéaire la plus réputée de La Réunion et concentre les biens immobiliers les plus prestigieux de l'île. Rattachée administrativement à Saint-Paul, elle constitue un marché immobilier à part entière avec ses propres dynamiques. Boucan Canot, avec sa plage mythique, attire une clientèle haut de gamme pour ses villas pieds dans l'eau et ses résidences de standing. L'Hermitage, face au lagon turquoise, est le secteur le plus exclusif avec des propriétés d'exception. Roches Noires, plus accessible, offre un bon équilibre entre charme et budget. Saline-les-Bains, avec ses eaux calmes et son ambiance familiale, séduit les jeunes ménages. Le marché affiche une progression remarquable de +6,1%, signe d'une attractivité toujours croissante auprès des investisseurs et des amoureux de l'océan.",
    stats: {
      avgPricePerSqm: "4 100 EUR",
      estimationsCount: "110+",
      avgSaleTime: "55 jours",
      priceEvolution: "+6,1%",
    },
    neighborhoods: [
      {
        name: "Boucan Canot",
        description:
          "Quartier emblématique de Saint-Gilles, Boucan Canot est célèbre pour sa plage de sable blanc et ses restaurants branchés. Les villas et appartements de standing y sont très recherchés, avec des prix parmi les plus élevés de l'île.",
        avgPricePerSqm: "4 800 EUR",
      },
      {
        name: "L'Hermitage",
        description:
          "Face au plus beau lagon de La Réunion, L'Hermitage est le secteur le plus exclusif de Saint-Gilles. Les propriétés de prestige avec accès direct à la plage atteignent des prix records. C'est l'adresse de référence pour l'immobilier haut de gamme réunionnais.",
        avgPricePerSqm: "5 200 EUR",
      },
      {
        name: "Roches Noires",
        description:
          "Quartier animé au cœur de Saint-Gilles, Roches Noires offre un mélange de commerces, restaurants et résidences. Plus accessible que Boucan Canot ou L'Hermitage, il constitue une porte d'entrée sur le marché immobilier de la station balnéaire.",
        avgPricePerSqm: "3 600 EUR",
      },
      {
        name: "Saline-les-Bains",
        description:
          "Au sud de Saint-Gilles, Saline-les-Bains offre une ambiance plus familiale avec son lagon calme et peu profond. Les programmes immobiliers récents et les maisons avec jardin attirent les familles en quête de la vie balnéaire au quotidien.",
        avgPricePerSqm: "3 900 EUR",
      },
    ],
    testimonials: [
      {
        quote:
          "Vendre un bien à L'Hermitage demande une expertise pointue du marché haut de gamme. L'estimation Estimanou a parfaitement capturé la valeur de notre villa avec vue lagon. Nous avons vendu au prix fort en moins de 2 mois.",
        name: "Philippe de Villeneuve",
        location: "L'Hermitage, Saint-Gilles-les-Bains",
        avatar:
          "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop",
      },
      {
        quote:
          "Nous cherchions un investissement locatif saisonnier à Saint-Gilles. Estimanou nous a aidé à comparer les rendements potentiels entre Boucan Canot et Roches Noires. Un outil précieux pour prendre la bonne décision.",
        name: "Stéphanie Robert",
        location: "Roches Noires, Saint-Gilles-les-Bains",
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      },
    ],
    faq: [
      {
        question:
          "Pourquoi Saint-Gilles-les-Bains est-elle la commune la plus chère de La Réunion ?",
        answer:
          "Saint-Gilles-les-Bains concentre les plus belles plages et le lagon le plus spectaculaire de l'île. La rareté extrême du foncier en bord de mer, combinée à une demande internationale croissante, propulse les prix à une moyenne de <strong>4 100 EUR/m²</strong>, pouvant dépasser 5 000 EUR/m² à L'Hermitage.",
      },
      {
        question:
          "La location saisonnière est-elle rentable à Saint-Gilles ?",
        answer:
          "Saint-Gilles-les-Bains est la première destination touristique de La Réunion. La location saisonnière y est très rentable avec des rendements bruts pouvant atteindre <strong>8 à 12%</strong> pour les biens bien situés. La saison touristique s'étend pratiquement toute l'année grâce au climat tropical.",
      },
      {
        question:
          "Quel budget minimum pour acheter à Saint-Gilles-les-Bains ?",
        answer:
          "Pour un studio ou T2 à Roches Noires, comptez un budget minimum de 150 000 à 200 000 EUR. Un appartement T3 avec vue mer se négocie entre 300 000 et 450 000 EUR. Les villas à Boucan Canot ou L'Hermitage débutent autour de 600 000 EUR et peuvent dépasser 1,5 million d'euros pour les biens d'exception.",
      },
      {
        question:
          "Comment expliquer la hausse de +6,1% des prix à Saint-Gilles ?",
        answer:
          "Cette hausse s'explique par plusieurs facteurs : la rareté du foncier constructible, l'attractivité croissante auprès des investisseurs métropolitains et étrangers, le développement du tourisme haut de gamme, et la qualité de vie exceptionnelle. La demande dépasse largement l'offre, ce qui maintient une pression haussière sur les prix.",
      },
      {
        question:
          "Roches Noires est-il un bon choix pour un premier investissement ?",
        answer:
          "Roches Noires est un excellent point d'entrée sur le marché de Saint-Gilles-les-Bains. Avec des prix autour de <strong>3 600 EUR/m²</strong>, ce quartier animé offre un bon potentiel locatif toute l'année et bénéficie de la dynamique de valorisation de l'ensemble de la station balnéaire.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

export const getCityBySlug = (slug: string): CityLanding | undefined =>
  cities.find((c) => c.slug === slug);

export const getAllCities = (): CityLanding[] => cities;
