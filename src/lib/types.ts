// ==========================================
// Estimation Form Types — Estimanou
// ==========================================

export type PropertyType = 'maison' | 'appartement' | 'terrain' | 'immeuble' | 'local_commercial';

// Sous-types par type de bien
export type MaisonSubType = 'villa' | 'maison_de_ville' | 'case_creole' | 'maison_mitoyenne';
export type AppartementSubType = 'studio' | 'f1' | 'f2' | 'f3' | 'f4' | 'f5_plus';
export type TerrainSubType = 'constructible' | 'agricole' | 'a_viabiliser';
export type ImmeubleSubType = 'rapport' | 'mixte';
export type LocalSubType = 'bureau' | 'commerce' | 'entrepot';

export type PropertySubType = MaisonSubType | AppartementSubType | TerrainSubType | ImmeubleSubType | LocalSubType;

// État général
export type EtatGeneral = 'a_renover' | 'travaux' | 'bon_etat' | 'renove' | 'neuf';

// DPE
export type DPE = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'inconnu';

// Année de construction
export type AnneeConstruction = 'avant_1970' | '1970_1990' | '1990_2010' | 'apres_2010';

// Terrain spécifique
export type Topographie = 'plat' | 'legere_pente' | 'forte_pente';
export type Viabilise = 'oui' | 'partiellement' | 'non';
export type AccesRoute = 'communale' | 'chemin_prive' | 'servitude';

// Immeuble spécifique
export type Occupation = 'entierement_loue' | 'partiellement_loue' | 'vacant';

// Projet
export type Objectif = 'vendre' | 'connaitre_valeur' | 'succession' | 'divorce' | 'autre';
export type Delai = 'urgent' | 'six_mois' | 'pas_presse' | 'curieux';
export type OccupationBien = 'occupe_par_moi' | 'en_location' | 'vacant';

// Contact
export type ContactPreference = 'telephone' | 'whatsapp' | 'email';

// ==========================================
// Form Data
// ==========================================

export interface EstimationFormData {
  // Step 1 — Type de bien
  propertyType: PropertyType | null;
  propertySubType: PropertySubType | null;

  // Step 2 — Caractéristiques
  surfaceHabitable: number | null;
  surfaceTerrain: number | null;
  nombrePieces: number | null;
  nombreChambres: number | null;
  nombreSallesDeBain: number | null;
  nombreNiveaux: number | null;
  etage: string | null;
  ascenseur: boolean | null;
  topographie: Topographie | null;
  viabilise: Viabilise | null;
  accesRoute: AccesRoute | null;
  nombreLots: number | null;
  nombreParkings: string | null;
  typeActivite: string | null;
  surfaceUtile: number | null;

  // Step 3 — État & Extras
  etatGeneral: EtatGeneral | null;
  anneeConstruction: AnneeConstruction | null;
  dpe: DPE | null;
  extras: string[];
  permisDepose: boolean | null;
  occupation: Occupation | null;
  revenusLocatifs: number | null;
  bailCommercial: boolean | null;
  loyerMensuel: number | null;

  // Step 4 — Localisation
  adresse: string;
  coordinates: { lng: number; lat: number } | null;
  commune: string;
  quartier: string;

  // Step 5 — Projet
  objectif: Objectif | null;
  delai: Delai | null;
  occupationBien: OccupationBien | null;

  // Step 6 — Coordonnées
  prenom: string;
  nom: string;
  telephone: string;
  email: string;
  contactPreferences: ContactPreference[];
  commentaire: string;
}

export const initialFormData: EstimationFormData = {
  propertyType: null,
  propertySubType: null,
  surfaceHabitable: null,
  surfaceTerrain: null,
  nombrePieces: null,
  nombreChambres: null,
  nombreSallesDeBain: null,
  nombreNiveaux: null,
  etage: null,
  ascenseur: null,
  topographie: null,
  viabilise: null,
  accesRoute: null,
  nombreLots: null,
  nombreParkings: null,
  typeActivite: null,
  surfaceUtile: null,
  etatGeneral: null,
  anneeConstruction: null,
  dpe: null,
  extras: [],
  permisDepose: null,
  occupation: null,
  revenusLocatifs: null,
  bailCommercial: null,
  loyerMensuel: null,
  adresse: '',
  coordinates: null,
  commune: '',
  quartier: '',
  objectif: null,
  delai: null,
  occupationBien: null,
  prenom: '',
  nom: '',
  telephone: '',
  email: '',
  contactPreferences: [],
  commentaire: '',
};
