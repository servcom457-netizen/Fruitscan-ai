import React, { useMemo, useState } from "react";
import {
  Camera,
  Upload,
  Search,
  ChevronRight,
  Sparkles,
  WifiOff,
} from "lucide-react";
import { UITranslations } from "../data/translations";
import {
  FruitAnalysisResult,
  LanguageCode,
  OfflineFruitEntry,
} from "../types/fruit";
import {
  HERO_BANNER_IMAGE,
  OFFLINE_FRUITS,
  getDailyRecommendedFruit,
  toAnalysisResult,
} from "../data/offlineFruits";
import { FruitArtwork } from "./FruitArtwork";

interface HomeScreenProps {
  t: UITranslations;
  language: LanguageCode;
  isOnline: boolean;
  onScanFruit: () => void;
  onUploadPhoto: () => void;
  onSelectFruit: (fruit: FruitAnalysisResult) => void;
}

type FilterCategory = "all" | "haitian" | "tropical" | "citrus" | "berry";

export const HomeScreen: React.FC<HomeScreenProps> = ({
  t,
  language,
  isOnline,
  onScanFruit,
  onUploadPhoto,
  onSelectFruit,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<FilterCategory>("all");

  const dailyFruit = useMemo(
    () => getDailyRecommendedFruit(language),
    [language]
  );

  const filteredFruits = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return OFFLINE_FRUITS.filter((entry) => {
      if (category !== "all" && entry.category !== category) return false;
      if (!q) return true;
      const loc = entry.localized[language];
      return (
        loc.commonName.toLowerCase().includes(q) ||
        entry.scientificName.toLowerCase().includes(q) ||
        entry.localNames.en.toLowerCase().includes(q) ||
        entry.localNames.fr.toLowerCase().includes(q) ||
        entry.localNames.ht.toLowerCase().includes(q)
      );
    });
  }, [category, language, searchQuery]);

  const openCatalogFruit = (entry: OfflineFruitEntry) => {
    onSelectFruit(toAnalysisResult(entry, language));
  };

  const dailyLocalized = dailyFruit.localized[language];

  return (
    <div className="space-y-10">
      {!isOnline ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 flex items-center gap-3 text-sm text-amber-900">
          <WifiOff className="w-4 h-4 shrink-0" />
          <span>
            {t.common.offlineBadge} — {t.home.offlineReadyNote}
          </span>
        </div>
      ) : null}

      {/* Hero Recognition Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E2EAE4] p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#142219] leading-[1.15] text-balance">
              {t.home.heroTitle}
            </h1>
            <p className="text-sm sm:text-base text-[#526658] leading-relaxed max-w-xl">
              {t.home.heroSubtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={onScanFruit}
              className="min-h-[50px] px-6 py-3 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
            >
              <Camera className="w-5 h-5 shrink-0" />
              <span>{t.home.scanFruitBtn}</span>
            </button>
            <button
              type="button"
              onClick={onUploadPhoto}
              className="min-h-[50px] px-6 py-3 rounded-xl bg-[#F2F7F3] hover:bg-[#E4EFE7] text-[#14532D] border border-[#CFE0D4] font-semibold text-sm flex items-center justify-center gap-2.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Upload className="w-5 h-5 shrink-0" />
              <span>{t.home.uploadPhotoBtn}</span>
            </button>
          </div>
        </div>

        {/* Daily Fruit Recommendation */}
        <button
          type="button"
          onClick={() => openCatalogFruit(dailyFruit)}
          className="lg:col-span-5 text-left bg-white rounded-3xl border border-[#E2EAE4] hover:border-[#B6CEBE] transition-colors overflow-hidden flex flex-col cursor-pointer group"
        >
          <div className="h-44 sm:h-48 w-full overflow-hidden bg-[#EFF5F0]">
            <FruitArtwork
              imageUrl={dailyFruit.imageUrl ?? HERO_BANNER_IMAGE}
              name={dailyLocalized.commonName}
              scientificName={dailyFruit.scientificName}
              accentHex={dailyFruit.accentHex}
              className="w-full h-full group-hover:scale-[1.02] transition-transform duration-200"
            />
          </div>
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#15803D]">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>{t.home.dailyPickLabel}</span>
              </div>
              <h2 className="font-display text-xl font-semibold text-[#142219] mt-1">
                {dailyLocalized.commonName}
              </h2>
              <p className="text-xs text-[#5E7464] mt-0.5">
                <span className="italic">{dailyFruit.scientificName}</span>
                <span aria-hidden="true"> · </span>
                <span className="font-mono-tabular">
                  {dailyFruit.nutritionalComposition.calories} kcal / 100g
                </span>
              </p>
              <p className="text-sm text-[#4D6353] mt-2 line-clamp-2 leading-relaxed">
                {dailyLocalized.description}
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#F0F4F1] text-xs font-semibold text-[#15803D]">
              <span>{t.home.viewDetails}</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </div>
          </div>
        </button>
      </section>

      {/* Search & Offline Encyclopedia */}
      <section className="space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#142219]">
              {t.home.catalogTitle}
            </h2>
            <p className="text-xs text-[#5E7464] mt-0.5">
              {t.home.offlineReadyNote}
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-[#5E7464] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.home.searchPlaceholder}
              aria-label={t.home.searchPlaceholder}
              className="w-full min-h-[44px] pl-10 pr-4 py-2 rounded-xl bg-white border border-[#D8E3DB] text-sm text-[#142219] placeholder:text-[#768C7C] focus:outline-none focus:border-[#15803D] focus:ring-2 focus:ring-emerald-700/15"
            />
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {(
            [
              { id: "all", label: t.home.filterAll },
              { id: "haitian", label: t.home.filterHaitian },
              { id: "tropical", label: t.home.filterTropical },
              { id: "citrus", label: t.home.filterCitrus },
              { id: "berry", label: t.home.filterBerry },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCategory(tab.id)}
              className={`min-h-[40px] px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                category === tab.id
                  ? "bg-[#15803D] text-white"
                  : "bg-[#EFF4F0] text-[#425949] hover:bg-[#E2EBE4]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filteredFruits.length === 0 ? (
          <div className="rounded-2xl border border-[#E2EAE4] bg-white p-8 text-center space-y-3">
            <p className="text-sm text-[#526658]">{t.home.noSearchResults}</p>
            <button
              type="button"
              onClick={onScanFruit}
              className="min-h-[44px] px-5 py-2 rounded-xl bg-[#15803D] text-white text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              <Camera className="w-4 h-4" />
              <span>{t.home.scanFruitBtn}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFruits.map((entry) => {
              const loc = entry.localized[language];
              const topVitamin = loc.vitaminsAndMinerals[0];
              return (
                <button
                  key={entry.slug}
                  type="button"
                  onClick={() => openCatalogFruit(entry)}
                  className="text-left rounded-2xl border border-[#E2EAE4] bg-white hover:border-[#A8C4B0] transition-colors overflow-hidden flex flex-col cursor-pointer group"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFF5F0]">
                    <FruitArtwork
                      imageUrl={entry.imageUrl}
                      name={loc.commonName}
                      scientificName={entry.scientificName}
                      accentHex={entry.accentHex}
                      className="w-full h-full group-hover:scale-[1.02] transition-transform duration-200"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-[#142219]">
                        {loc.commonName}
                      </h3>
                      <p className="text-xs text-[#5E7464] mt-0.5 truncate">
                        <span className="italic">{entry.scientificName}</span>
                        <span aria-hidden="true"> · </span>
                        <span>{entry.localNames.ht}</span>
                      </p>
                      <p className="text-sm text-[#4D6353] mt-2 line-clamp-2 leading-relaxed">
                        {loc.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#F0F4F1] flex items-center justify-between text-xs text-[#526658]">
                      <span className="font-mono-tabular">
                        {entry.nutritionalComposition.calories} kcal
                        {topVitamin ? ` · ${topVitamin.name}` : ""}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#15803D] shrink-0" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
