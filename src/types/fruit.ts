export type LanguageCode = "en" | "fr" | "ht";

export type ScreenId =
  | "welcome"
  | "home"
  | "scanner"
  | "gallery"
  | "analyzing"
  | "results"
  | "nutrition"
  | "benefits"
  | "favorites"
  | "history"
  | "settings";

export interface AlternativeMatch {
  commonName: string;
  scientificName: string;
  confidence: number;
  reason: string;
}

export interface NutritionalComposition {
  servingSize: string;
  calories: number;
  carbohydratesG: number;
  fiberG: number;
  sugarsG: number;
  proteinG: number;
  fatG: number;
  waterPercent: number;
}

export interface VitaminMineral {
  name: string;
  amount: string;
  dailyValuePercent: number;
  role: string;
}

export interface HealthBenefit {
  title: string;
  explanation: string;
  evidenceNote: string;
}

export interface LocalNames {
  en: string;
  fr: string;
  ht: string;
}

export interface FruitAnalysisResult {
  id: string;
  isFruit: boolean;
  confidence: number;
  confidenceLevel: "high" | "medium" | "low";
  commonName: string;
  scientificName: string;
  localNames: LocalNames;
  alternativeMatches: AlternativeMatch[];
  originAndDistribution: string;
  description: string;
  nutritionalComposition: NutritionalComposition;
  vitaminsAndMinerals: VitaminMineral[];
  healthBenefits: HealthBenefit[];
  precautionsAndAllergies: string[];
  bestWaysToConsume: string[];
  storageRecommendations: string;
  uncertainReason: string;
  imageUrl?: string;
  analyzedAt: string;
  language: LanguageCode;
  isOfflineCatalog?: boolean;
}

export interface AppSettings {
  language: LanguageCode;
  lowBandwidthMode: boolean;
  hasSeenWelcome: boolean;
  saveScanHistory: boolean;
}

export interface OfflineFruitEntry {
  slug: string;
  category: "tropical" | "haitian" | "citrus" | "berry";
  imageUrl?: string;
  accentHex: string;
  scientificName: string;
  localNames: LocalNames;
  nutritionalComposition: NutritionalComposition;
  localized: Record<
    LanguageCode,
    {
      commonName: string;
      originAndDistribution: string;
      description: string;
      vitaminsAndMinerals: VitaminMineral[];
      healthBenefits: HealthBenefit[];
      precautionsAndAllergies: string[];
      bestWaysToConsume: string[];
      storageRecommendations: string;
    }
  >;
}
