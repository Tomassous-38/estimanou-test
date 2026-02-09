// ==========================================
// Constants — Estimation Form Estimanou
// ==========================================

import type { PropertyType, PropertySubType, EtatGeneral, AnneeConstruction, DPE, Objectif, Delai, OccupationBien, Topographie, Viabilise, AccesRoute, Occupation, ContactPreference } from './types';

// ==========================================
// Step 1 — Types de bien
// ==========================================

export const PROPERTY_TYPES: { value: PropertyType; label: string; icon: string; emoji: string }[] = [
  { value: 'maison', label: 'Maison', icon: 'Home', emoji: '🏠' },
  { value: 'appartement', label: 'Appartement', icon: 'Building2', emoji: '🏢' },
  { value: 'terrain', label: 'Terrain', icon: 'Trees', emoji: '🌴' },
  { value: 'immeuble', label: 'Immeuble', icon: 'Building', emoji: '🏗️' },
  { value: 'local_commercial', label: 'Local commercial', icon: 'Store', emoji: '🏪' },
];

export const PROPERTY_SUBTYPES: Record<PropertyType, { value: PropertySubType; label: string }[]> = {
  maison: [
    { value: 'villa', label: 'Villa' },
    { value: 'maison_de_ville', label: 'Maison de ville' },
    { value: 'case_creole', label: 'Case créole' },
    { value: 'maison_mitoyenne', label: 'Maison mitoyenne' },
  ],
  appartement: [
    { value: 'studio', label: 'Studio' },
    { value: 'f1', label: 'F1' },
    { value: 'f2', label: 'F2' },
    { value: 'f3', label: 'F3' },
    { value: 'f4', label: 'F4' },
    { value: 'f5_plus', label: 'F5+' },
  ],
  terrain: [
    { value: 'constructible', label: 'Constructible' },
    { value: 'agricole', label: 'Agricole' },
    { value: 'a_viabiliser', label: 'À viabiliser' },
  ],
  immeuble: [
    { value: 'rapport', label: 'Immeuble de rapport' },
    { value: 'mixte', label: 'Mixte (commerce + habitation)' },
  ],
  local_commercial: [
    { value: 'bureau', label: 'Bureau' },
    { value: 'commerce', label: 'Commerce' },
    { value: 'entrepot', label: 'Entrepôt / Local d\'activité' },
  ],
};

export const CONTEXTUAL_MESSAGES: Record<PropertyType, string> = {
  maison: '🏠 Parfait, on va estimer votre maison !',
  appartement: '🏢 C\'est noté, parlons de votre appartement !',
  terrain: '🌴 C\'est noté, parlons de votre terrain !',
  immeuble: '🏗️ Très bien, estimons votre immeuble !',
  local_commercial: '🏪 Parfait, estimons votre local commercial !',
};

// ==========================================
// Step 2 — Caractéristiques
// ==========================================

export const PIECES_OPTIONS = ['1', '2', '3', '4', '5', '6+'];
export const CHAMBRES_OPTIONS = ['1', '2', '3', '4', '5+'];
export const SDB_OPTIONS = ['1', '2', '3+'];
export const NIVEAUX_OPTIONS = ['1', '2', '3+'];
export const NIVEAUX_IMMEUBLE_OPTIONS = ['1', '2', '3', '4', '5+'];
export const ETAGE_OPTIONS = ['RDC', '1', '2', '3', '4', '5', 'Dernier étage'];
export const PARKINGS_OPTIONS = ['0', '1-5', '5-10', '10+'];

export const TOPOGRAPHIE_OPTIONS: { value: Topographie; label: string }[] = [
  { value: 'plat', label: 'Plat' },
  { value: 'legere_pente', label: 'Légère pente' },
  { value: 'forte_pente', label: 'Forte pente' },
];

export const VIABILISE_OPTIONS: { value: Viabilise; label: string }[] = [
  { value: 'oui', label: 'Oui' },
  { value: 'partiellement', label: 'Partiellement' },
  { value: 'non', label: 'Non' },
];

export const ACCES_ROUTE_OPTIONS: { value: AccesRoute; label: string }[] = [
  { value: 'communale', label: 'Route communale' },
  { value: 'chemin_prive', label: 'Chemin privé' },
  { value: 'servitude', label: 'Servitude de passage' },
];

// ==========================================
// Step 3 — État & Extras
// ==========================================

export const ETAT_OPTIONS: { value: EtatGeneral; label: string; color: string }[] = [
  { value: 'a_renover', label: 'À rénover', color: '#E57373' },
  { value: 'travaux', label: 'Travaux à prévoir', color: '#FFB74D' },
  { value: 'bon_etat', label: 'Bon état', color: '#81C784' },
  { value: 'renove', label: 'Rénové récemment', color: '#4CAF50' },
  { value: 'neuf', label: 'Neuf', color: '#42A5F5' },
];

export const ANNEE_OPTIONS: { value: AnneeConstruction; label: string }[] = [
  { value: 'avant_1970', label: 'Avant 1970' },
  { value: '1970_1990', label: '1970 – 1990' },
  { value: '1990_2010', label: '1990 – 2010' },
  { value: 'apres_2010', label: 'Après 2010' },
];

export const DPE_OPTIONS: { value: DPE; label: string; color: string }[] = [
  { value: 'A', label: 'A', color: '#2D9A2D' },
  { value: 'B', label: 'B', color: '#51B151' },
  { value: 'C', label: 'C', color: '#A4C955' },
  { value: 'D', label: 'D', color: '#F2E500' },
  { value: 'E', label: 'E', color: '#F0B400' },
  { value: 'F', label: 'F', color: '#EB6B24' },
  { value: 'G', label: 'G', color: '#D32F2F' },
  { value: 'inconnu', label: 'Je ne sais pas', color: '#9E9E9E' },
];

export const EXTRAS_MAISON: { value: string; label: string; icon: string }[] = [
  { value: 'piscine', label: 'Piscine', icon: '💦' },
  { value: 'garage', label: 'Garage', icon: '🚗' },
  { value: 'carport', label: 'Carport', icon: '🏎️' },
  { value: 'vue_mer', label: 'Vue mer', icon: '🌊' },
  { value: 'vue_montagne', label: 'Vue montagne', icon: '🏔️' },
  { value: 'terrasse', label: 'Terrasse', icon: '☀️' },
  { value: 'varangue', label: 'Varangue', icon: '🌿' },
  { value: 'jardin_clos', label: 'Jardin clos', icon: '🌳' },
  { value: 'climatisation', label: 'Climatisation', icon: '❄️' },
  { value: 'panneaux_solaires', label: 'Panneaux solaires', icon: '☀️' },
  { value: 'dependance', label: 'Dépendance / annexe', icon: '🏚️' },
];

export const EXTRAS_APPARTEMENT: { value: string; label: string; icon: string }[] = [
  { value: 'balcon', label: 'Balcon', icon: '🌅' },
  { value: 'terrasse', label: 'Terrasse', icon: '☀️' },
  { value: 'varangue', label: 'Varangue', icon: '🌿' },
  { value: 'vue_mer', label: 'Vue mer', icon: '🌊' },
  { value: 'vue_montagne', label: 'Vue montagne', icon: '🏔️' },
  { value: 'parking_privatif', label: 'Parking privatif', icon: '🅿️' },
  { value: 'cave_cellier', label: 'Cave / cellier', icon: '🍷' },
  { value: 'climatisation', label: 'Climatisation', icon: '❄️' },
  { value: 'gardien_securise', label: 'Gardien / résidence sécurisée', icon: '🔒' },
];

export const EXTRAS_TERRAIN: { value: string; label: string; icon: string }[] = [
  { value: 'vue_mer', label: 'Vue mer', icon: '🌊' },
  { value: 'vue_montagne', label: 'Vue montagne', icon: '🏔️' },
  { value: 'arbore', label: 'Arboré', icon: '🌳' },
  { value: 'cloture', label: 'Clôturé', icon: '🏗️' },
];

export const EXTRAS_LOCAL: { value: string; label: string; icon: string }[] = [
  { value: 'vitrine', label: 'Vitrine', icon: '🪟' },
  { value: 'acces_pmr', label: 'Accès PMR', icon: '♿' },
  { value: 'reserve_stock', label: 'Réserve / stock', icon: '📦' },
  { value: 'extraction_cuisine', label: 'Extraction cuisine', icon: '🍳' },
];

export const OCCUPATION_OPTIONS: { value: Occupation; label: string }[] = [
  { value: 'entierement_loue', label: 'Entièrement loué' },
  { value: 'partiellement_loue', label: 'Partiellement loué' },
  { value: 'vacant', label: 'Entièrement vacant' },
];

// ==========================================
// Step 5 — Projet
// ==========================================

export const OBJECTIF_OPTIONS: { value: Objectif; label: string; icon: string; description: string }[] = [
  { value: 'vendre', label: 'Je veux vendre', icon: '🚀', description: 'Obtenir le juste prix pour vendre sereinement' },
  { value: 'connaitre_valeur', label: 'Connaître la valeur', icon: '🔍', description: 'Savoir ce que vaut votre bien aujourd\'hui' },
  { value: 'succession', label: 'Succession / Donation', icon: '👨‍👩‍👧‍👦', description: 'Une évaluation pour vos démarches notariales' },
  { value: 'divorce', label: 'Divorce / Séparation', icon: '📋', description: 'Une estimation neutre et documentée' },
  { value: 'autre', label: 'Autre', icon: '💡', description: 'Renégociation de prêt, IFI, curiosité...' },
];

export const DELAI_OPTIONS: { value: Delai; label: string; message: string }[] = [
  { value: 'urgent', label: 'Urgent (< 3 mois)', message: 'Urgent ? On vous recontacte dans les 24h.' },
  { value: 'six_mois', label: 'Dans les 6 mois', message: 'On prépare une estimation soignée pour votre projet.' },
  { value: 'pas_presse', label: 'Pas pressé', message: 'On prend le temps de bien analyser votre bien.' },
  { value: 'curieux', label: 'Juste curieux', message: 'Aucune obligation, on vous tient informé.' },
];

export const OCCUPATION_BIEN_OPTIONS: { value: OccupationBien; label: string }[] = [
  { value: 'occupe_par_moi', label: 'Occupé par moi' },
  { value: 'en_location', label: 'En location' },
  { value: 'vacant', label: 'Vacant' },
];

// ==========================================
// Step 6 — Contact
// ==========================================

export const CONTACT_PREF_OPTIONS: { value: ContactPreference; label: string; icon: string }[] = [
  { value: 'telephone', label: 'Téléphone', icon: '📞' },
  { value: 'whatsapp', label: 'WhatsApp', icon: '💬' },
  { value: 'email', label: 'Email', icon: '📧' },
];

// ==========================================
// Step labels
// ==========================================

export const STEP_LABELS = [
  'Type de bien',
  'Caractéristiques',
  'État & extras',
  'Localisation',
  'Votre projet',
  'Coordonnées',
];
