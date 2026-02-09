import type {
  Property,
  PropertyFilter,
  PropertySortKey,
} from "@/types/property";

const properties: Property[] = [
  // ─── SAINT-DENIS ───────────────────────────────────────────────
  {
    slug: "appartement-t3-moufia",
    title: "Appartement T3 — Moufia",
    type: "appartement",
    status: "a-vendre",
    price: 185000,
    priceDisplay: "185 000 €",
    citySlug: "saint-denis",
    cityName: "Saint-Denis",
    neighborhood: "Moufia",
    images: [
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        alt: "Séjour lumineux avec baie vitrée",
      },
      {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        alt: "Cuisine aménagée moderne",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        alt: "Vue depuis le balcon sur Moufia",
      },
    ],
    surface: 65,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    yearBuilt: 2020,
    floor: "3ème étage",
    orientation: "Sud",
    description:
      "Magnifique appartement T3 récent situé au cœur du quartier universitaire de Moufia à Saint-Denis. Ce bien lumineux de 65 m² offre un séjour spacieux ouvert sur une cuisine aménagée et équipée, deux chambres confortables avec placards intégrés et une salle de bains moderne. Exposé plein sud au 3ème étage, il bénéficie d’une luminosité naturelle exceptionnelle toute la journée. Résidence sécurisée avec place de parking en sous-sol. Proximité immédiate des commerces, transports en commun et de l’université de La Réunion.",
    features: [
      "Climatisation",
      "Cuisine aménagée",
      "Placards intégrés",
      "Parking sous-sol",
      "Balcon",
      "Résidence sécurisée",
      "Interphone vidéo",
    ],
    estimationRange: "180 000 € — 195 000 €",
    dateAdded: "2025-01-15",
  },
  {
    slug: "maison-t5-la-montagne",
    title: "Maison T5 — La Montagne",
    type: "maison",
    status: "a-vendre",
    price: 395000,
    priceDisplay: "395 000 €",
    citySlug: "saint-denis",
    cityName: "Saint-Denis",
    neighborhood: "La Montagne",
    images: [
      {
        src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
        alt: "Façade de la maison avec jardin tropical",
      },
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        alt: "Terrasse extérieure avec vue",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        alt: "Salon spacieux avec parquet",
      },
    ],
    surface: 145,
    landSurface: 350,
    rooms: 5,
    bedrooms: 4,
    bathrooms: 2,
    yearBuilt: 1998,
    orientation: "Ouest",
    description:
      "Superbe maison familiale T5 nichée dans le quartier prisé de La Montagne à Saint-Denis. Avec ses 145 m² habitables sur un terrain de 350 m², cette propriété offre un cadre de vie exceptionnel en altitude. Le rez-de-chaussée comprend un vaste séjour-salon, une cuisine équipée ouverte et une suite parentale. À l'étage, trois chambres supplémentaires et une salle de bains complète. Le jardin tropical arboré procure une fraîcheur naturelle appréciable. Garage double et terrasse couverte avec vue dégagée sur l'océan Indien.",
    features: [
      "Garage double",
      "Jardin tropical",
      "Terrasse couverte",
      "Vue océan",
      "Cuisine équipée",
      "Suite parentale",
      "Parquet massif",
      "Portail électrique",
    ],
    estimationRange: "380 000 € — 415 000 €",
    dateAdded: "2024-11-20",
  },

  // ─── SAINT-PIERRE ──────────────────────────────────────────────
  {
    slug: "maison-t4-ligne-paradis",
    title: "Maison T4 — Ligne Paradis",
    type: "maison",
    status: "a-vendre",
    price: 320000,
    priceDisplay: "320 000 €",
    citySlug: "saint-pierre",
    cityName: "Saint-Pierre",
    neighborhood: "Ligne Paradis",
    images: [
      {
        src: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop",
        alt: "Maison de plain-pied avec jardin",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
        alt: "Salle à manger ouverte sur cuisine",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
        alt: "Chambre parentale lumineuse",
      },
    ],
    surface: 110,
    landSurface: 280,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 1,
    yearBuilt: 2005,
    description:
      "Charmante maison T4 de plain-pied située dans le quartier résidentiel de Ligne Paradis à Saint-Pierre. Cette propriété de 110 m² sur un terrain de 280 m² offre un séjour-salon lumineux, une cuisine aménagée, trois chambres dont une suite parentale et une salle de bains rénovée. Le jardin clôturé est idéal pour les familles avec enfants. Quartier calme et sécurisé, à proximité des écoles, commerces et de la plage. Bon état général avec toiture refaite en 2018.",
    features: [
      "Plain-pied",
      "Cuisine aménagée",
      "Jardin clôturé",
      "Terrasse",
      "Portail électrique",
      "Toiture rénovée",
      "Climatisation",
      "Place de parking",
    ],
    estimationRange: "305 000 € — 340 000 €",
    dateAdded: "2025-02-01",
  },
  {
    slug: "terrain-ravine-des-cabris",
    title: "Terrain — Ravine des Cabris",
    type: "terrain",
    status: "a-vendre",
    price: 95000,
    priceDisplay: "95 000 €",
    citySlug: "saint-pierre",
    cityName: "Saint-Pierre",
    neighborhood: "Ravine des Cabris",
    images: [
      {
        src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
        alt: "Terrain constructible avec vue dégagée",
      },
      {
        src: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&h=600&fit=crop",
        alt: "Vue aérienne du terrain",
      },
      {
        src: "https://images.unsplash.com/photo-1595880500386-4b33823b29cd?w=800&h=600&fit=crop",
        alt: "Environnement verdoyant du terrain",
      },
    ],
    surface: 0,
    landSurface: 450,
    rooms: 0,
    bedrooms: 0,
    bathrooms: 0,
    description:
      "Beau terrain constructible de 450 m² situé à Ravine des Cabris sur les hauteurs de Saint-Pierre. Parcelle viabilisée (eau, électricité, assainissement) avec un accès direct par voie communale goudronnée. Le terrain est plat et prêt à bâtir, offrant une vue dégagée sur les montagnes environnantes. Zone résidentielle calme, idéale pour un projet de construction de maison individuelle. Certificat d’urbanisme positif obtenu. Proximité des commodités du bourg de Ravine des Cabris.",
    features: [
      "Viabilisé",
      "Terrain plat",
      "Vue montagne",
      "Accès goudronné",
      "CU positif",
      "Zone résidentielle",
    ],
    estimationRange: "85 000 € — 105 000 €",
    dateAdded: "2024-09-10",
  },

  // ─── SAINT-PAUL ────────────────────────────────────────────────
  {
    slug: "villa-t5-vue-belle",
    title: "Villa T5 — Vue Belle",
    type: "villa",
    status: "a-vendre",
    price: 520000,
    priceDisplay: "520 000 €",
    citySlug: "saint-paul",
    cityName: "Saint-Paul",
    neighborhood: "Vue Belle",
    images: [
      {
        src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
        alt: "Villa contemporaine avec piscine",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
        alt: "Terrasse avec vue mer panoramique",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        alt: "Piscine à débordement",
      },
    ],
    surface: 180,
    landSurface: 600,
    rooms: 5,
    bedrooms: 4,
    bathrooms: 2,
    yearBuilt: 2015,
    orientation: "Ouest",
    description:
      "Splendide villa T5 contemporaine perchée sur les hauteurs de Vue Belle à Saint-Paul, offrant un panorama exceptionnel sur l’océan Indien et le coucher de soleil. Cette propriété d’exception de 180 m² sur un terrain de 600 m² dispose d’un vaste séjour cathédrale, d’une cuisine haut de gamme, de quatre chambres spacieuses et de deux salles de bains. La piscine à débordement et la terrasse panoramique font de cette villa un lieu de vie unique. Jardin paysager tropical et garage double.",
    features: [
      "Piscine à débordement",
      "Vue mer panoramique",
      "Garage double",
      "Jardin paysager",
      "Cuisine haut de gamme",
      "Climatisation réversible",
      "Alarme",
      "Terrasse panoramique",
      "Portail électrique",
    ],
    estimationRange: "500 000 € — 545 000 €",
    dateAdded: "2024-12-05",
  },
  {
    slug: "appartement-t2-centre-ville-saint-paul",
    title: "Appartement T2 — Centre-ville",
    type: "appartement",
    status: "sous-compromis",
    price: 145000,
    priceDisplay: "145 000 €",
    citySlug: "saint-paul",
    cityName: "Saint-Paul",
    neighborhood: "Centre-ville",
    images: [
      {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        alt: "Studio moderne avec salon lumineux",
      },
      {
        src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop",
        alt: "Chambre avec vue sur la ville",
      },
      {
        src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
        alt: "Salle de bains rénovée",
      },
    ],
    surface: 48,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    yearBuilt: 2018,
    floor: "1er étage",
    description:
      "Joli appartement T2 situé en plein centre-ville de Saint-Paul, au 1er étage d’une résidence récente et bien entretenue. Ce bien de 48 m² comprend un séjour avec coin cuisine aménagée, une chambre avec placard et une salle d’eau fonctionnelle. Idéal pour un premier achat ou un investissement locatif grâce à sa situation privilégiée à proximité du marché de Saint-Paul, des restaurants et des commerces. Actuellement sous compromis de vente.",
    features: [
      "Cuisine aménagée",
      "Placard intégré",
      "Résidence récente",
      "Proche commerces",
      "Balcon",
      "Place de parking",
    ],
    estimationRange: "138 000 € — 155 000 €",
    dateAdded: "2024-10-18",
  },

  // ─── LE TAMPON ─────────────────────────────────────────────────
  {
    slug: "maison-t4-trois-mares",
    title: "Maison T4 — Trois Mares",
    type: "maison",
    status: "a-vendre",
    price: 265000,
    priceDisplay: "265 000 €",
    citySlug: "le-tampon",
    cityName: "Le Tampon",
    neighborhood: "Trois Mares",
    images: [
      {
        src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
        alt: "Maison avec jardin arboré",
      },
      {
        src: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&h=600&fit=crop",
        alt: "Cuisine ouverte aménagée",
      },
      {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
        alt: "Chambre avec vue sur le jardin",
      },
    ],
    surface: 100,
    landSurface: 400,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 1,
    yearBuilt: 2010,
    orientation: "Sud-Ouest",
    description:
      "Agréable maison T4 située dans le quartier résidentiel de Trois Mares au Tampon, à 550 mètres d’altitude. Cette maison de 100 m² sur un terrain de 400 m² offre un climat tempéré toute l’année. Elle comprend un séjour-salon ouvert sur la terrasse, une cuisine aménagée, trois chambres et une salle de bains. Le jardin arboré avec arbres fruitiers est un véritable atout. Proche des écoles, du centre commercial et des axes routiers principaux. Orientation sud-ouest pour profiter de la lumière naturelle.",
    features: [
      "Jardin arboré",
      "Arbres fruitiers",
      "Terrasse",
      "Cuisine aménagée",
      "Climatisation",
      "Portail électrique",
      "Place de parking",
      "Proche écoles",
    ],
    estimationRange: "250 000 € — 280 000 €",
    dateAdded: "2025-01-08",
  },
  {
    slug: "maison-t3-14eme-km",
    title: "Maison T3 — 14ème km",
    type: "maison",
    status: "a-vendre",
    price: 210000,
    priceDisplay: "210 000 €",
    citySlug: "le-tampon",
    cityName: "Le Tampon",
    neighborhood: "14ème km",
    images: [
      {
        src: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&h=600&fit=crop",
        alt: "Petite maison créole avec varangue",
      },
      {
        src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop",
        alt: "Intérieur chaleureux du séjour",
      },
      {
        src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop",
        alt: "Jardin avec vue sur les montagnes",
      },
    ],
    surface: 85,
    landSurface: 250,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    yearBuilt: 2008,
    description:
      "Maison T3 de charme située au 14ème kilomètre du Tampon, dans un environnement calme et verdoyant. Ce bien de 85 m² sur un terrain de 250 m² offre un cadre de vie agréable avec sa varangue traditionnelle et son petit jardin. Le séjour est lumineux et ouvert sur la cuisine aménagée. Deux chambres confortables et une salle de bains complètent ce logement. Idéal pour un jeune couple ou un premier achat. Le quartier est apprécié pour sa fraîcheur et sa proximité avec la forêt du Tampon.",
    features: [
      "Varangue",
      "Jardin",
      "Cuisine aménagée",
      "Environnement calme",
      "Proximité forêt",
      "Place de parking",
    ],
    estimationRange: "195 000 € — 225 000 €",
    dateAdded: "2024-08-22",
  },

  // ─── SAINT-LEU ─────────────────────────────────────────────────
  {
    slug: "villa-t6-stella",
    title: "Villa T6 — Stella",
    type: "villa",
    status: "a-vendre",
    price: 680000,
    priceDisplay: "680 000 €",
    citySlug: "saint-leu",
    cityName: "Saint-Leu",
    neighborhood: "Stella",
    images: [
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        alt: "Villa de luxe avec piscine et vue océan",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        alt: "Séjour contemporain avec baies vitrées",
      },
      {
        src: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&h=600&fit=crop",
        alt: "Piscine avec terrasse en bois",
      },
    ],
    surface: 220,
    landSurface: 800,
    rooms: 6,
    bedrooms: 5,
    bathrooms: 3,
    yearBuilt: 2019,
    orientation: "Ouest",
    description:
      "Villa d’exception T6 située à Stella, dans le secteur le plus recherché de Saint-Leu. Avec ses 220 m² habitables sur un terrain de 800 m², cette propriété haut de gamme offre une vue imprenable sur l’océan Indien. La villa comprend un vaste séjour de 50 m², une cuisine aménagée de marque, cinq chambres dont deux suites parentales et trois salles de bains. La piscine à débordement, le pool house et le jardin tropical paysager en font une résidence d’exception. Finitions luxueuses et matériaux nobles.",
    features: [
      "Piscine à débordement",
      "Vue océan",
      "Pool house",
      "Garage double",
      "Jardin tropical paysager",
      "Cuisine de marque",
      "Domotique",
      "Climatisation gainable",
      "Alarme",
      "Portail électrique",
    ],
    estimationRange: "650 000 € — 710 000 €",
    dateAdded: "2024-11-02",
  },
  {
    slug: "local-commercial-centre-saint-leu",
    title: "Local commercial — Centre",
    type: "local-commercial",
    status: "a-vendre",
    price: 175000,
    priceDisplay: "175 000 €",
    citySlug: "saint-leu",
    cityName: "Saint-Leu",
    neighborhood: "Centre",
    images: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        alt: "Local commercial avec vitrine",
      },
      {
        src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&h=600&fit=crop",
        alt: "Intérieur du local aménagé",
      },
      {
        src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop",
        alt: "Espace de travail ouvert",
      },
    ],
    surface: 75,
    rooms: 2,
    bedrooms: 0,
    bathrooms: 0,
    description:
      "Local commercial de 75 m² idéalement situé en plein centre-ville de Saint-Leu, sur l’axe passant principal. Ce bien bénéficie d’une vitrine de 6 mètres linéaires offrant une excellente visibilité. Il se compose d’un espace de vente principal et d’une arrière-boutique avec sanitaires. Convient à de nombreuses activités commerciales : boutique, restaurant, bureau ou cabinet libéral. Fort passage piéton et proximité du marché forain. Les murs sont vendus libres de toute occupation.",
    features: [
      "Vitrine 6m linéaires",
      "Axe passant",
      "Sanitaires",
      "Arrière-boutique",
      "Climatisation",
      "Libre d’occupation",
    ],
    estimationRange: "160 000 € — 190 000 €",
    dateAdded: "2024-07-15",
  },

  // ─── SAINT-GILLES-LES-BAINS ───────────────────────────────────
  {
    slug: "appartement-t4-boucan-canot",
    title: "Appartement T4 — Boucan Canot",
    type: "appartement",
    status: "a-vendre",
    price: 425000,
    priceDisplay: "425 000 €",
    citySlug: "saint-gilles",
    cityName: "Saint-Gilles-les-Bains",
    neighborhood: "Boucan Canot",
    images: [
      {
        src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        alt: "Appartement de standing avec vue mer",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753376-12c8ab7c17a8?w=800&h=600&fit=crop",
        alt: "Terrasse panoramique vue océan",
      },
      {
        src: "https://images.unsplash.com/photo-1616137466211-f736a1f58b8a?w=800&h=600&fit=crop",
        alt: "Salon moderne et lumineux",
      },
    ],
    surface: 95,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    yearBuilt: 2022,
    floor: "4ème étage",
    orientation: "Ouest",
    description:
      "Superbe appartement T4 de standing situé au 4ème étage d’une résidence récente à Boucan Canot, le quartier le plus prisé de Saint-Gilles-les-Bains. Ce bien de 95 m² offre une vue mer imprenable depuis sa large terrasse. Trois chambres lumineuses dont une suite parentale avec salle d’eau, un séjour-salon d’angle et une cuisine aménagée haut de gamme. Prestations de qualité : climatisation réversible, parquet, volets roulants électriques. À deux pas de la plage de Boucan Canot et des restaurants.",
    features: [
      "Vue mer",
      "Terrasse panoramique",
      "Climatisation réversible",
      "Parquet",
      "Suite parentale",
      "Cuisine haut de gamme",
      "Volets roulants électriques",
      "Parking souterrain",
      "Résidence de standing",
    ],
    estimationRange: "410 000 € — 445 000 €",
    dateAdded: "2025-01-25",
  },
  {
    slug: "villa-t5-lhermitage",
    title: "Villa T5 — L’Hermitage",
    type: "villa",
    status: "sous-compromis",
    price: 590000,
    priceDisplay: "590 000 €",
    citySlug: "saint-gilles",
    cityName: "Saint-Gilles-les-Bains",
    neighborhood: "L’Hermitage",
    images: [
      {
        src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
        alt: "Villa tropicale avec piscine",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&h=600&fit=crop",
        alt: "Jardin tropical luxuriant",
      },
      {
        src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop",
        alt: "Espace de vie extérieur",
      },
    ],
    surface: 160,
    landSurface: 500,
    rooms: 5,
    bedrooms: 4,
    bathrooms: 2,
    yearBuilt: 2016,
    description:
      "Magnifique villa T5 située dans le quartier exclusif de L’Hermitage à Saint-Gilles-les-Bains, à quelques minutes à pied du lagon. Cette propriété de 160 m² sur un terrain de 500 m² offre un cadre de vie tropical d’exception. Le séjour cathédrale ouvre sur une terrasse couverte et la piscine. Quatre chambres dont deux en suite, cuisine aménagée et équipée. Le jardin tropical luxuriant assure une intimité totale. Actuellement sous compromis de vente. Proche du lagon, des commerces et des restaurants.",
    features: [
      "Piscine",
      "Proximité lagon",
      "Jardin tropical",
      "Terrasse couverte",
      "Cuisine équipée",
      "Climatisation",
      "Garage",
      "Portail électrique",
      "Alarme",
    ],
    estimationRange: "570 000 € — 615 000 €",
    dateAdded: "2024-10-30",
  },
];

// ─── HELPER FUNCTIONS ────────────────────────────────────────────

export const getAllProperties = (): Property[] => properties;

export const getPropertyBySlug = (
  citySlug: string,
  propertySlug: string
): Property | undefined =>
  properties.find(
    (p) => p.citySlug === citySlug && p.slug === propertySlug
  );

export const getPropertiesByCity = (citySlug: string): Property[] =>
  properties.filter((p) => p.citySlug === citySlug);

export const filterProperties = (filters: PropertyFilter): Property[] => {
  return properties.filter((p) => {
    if (filters.city && p.citySlug !== filters.city) return false;
    if (filters.type && p.type !== filters.type) return false;
    if (filters.priceMin !== undefined && p.price < filters.priceMin)
      return false;
    if (filters.priceMax !== undefined && p.price > filters.priceMax)
      return false;
    if (filters.roomsMin !== undefined && p.rooms < filters.roomsMin)
      return false;
    return true;
  });
};

export const sortProperties = (
  list: Property[],
  sortKey: PropertySortKey
): Property[] => {
  const sorted = [...list];
  switch (sortKey) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "date-desc":
      return sorted.sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
    case "surface-desc":
      return sorted.sort((a, b) => b.surface - a.surface);
    default:
      return sorted;
  }
};

export const getSimilarProperties = (
  property: Property,
  limit: number = 3
): Property[] => {
  const sameCityAndType = properties.filter(
    (p) =>
      p.slug !== property.slug &&
      p.citySlug === property.citySlug &&
      p.type === property.type
  );

  const sameCity = properties.filter(
    (p) =>
      p.slug !== property.slug &&
      p.citySlug === property.citySlug &&
      p.type !== property.type
  );

  const sameType = properties.filter(
    (p) =>
      p.slug !== property.slug &&
      p.citySlug !== property.citySlug &&
      p.type === property.type
  );

  const combined = [...sameCityAndType, ...sameCity, ...sameType];

  // Deduplicate by slug
  const seen = new Set<string>();
  const unique: Property[] = [];
  for (const p of combined) {
    if (!seen.has(p.slug)) {
      seen.add(p.slug);
      unique.push(p);
    }
  }

  return unique.slice(0, limit);
};
