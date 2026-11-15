import React, { useState } from "react";
import {
  ArrowLeft,
  Bookmark,
  Camera,
  Share2,
  Check,
  AlertTriangle,
  ShieldAlert,
  HeartPulse,
  Apple,
  Utensils,
  ThermometerSnowflake,
  Globe2,
} from "lucide-react";
import { UITranslations } from "../data/translations";
import { FruitAnalysisResult, ScreenId } from "../types/fruit";
import { FruitArtwork } from "./FruitArtwork";

interface FruitDetailScreensProps {
  t: UITranslations;
  fruit: FruitAnalysisResult;
  activeTab: "results" | "nutrition" | "benefits";
  isFavorite: boolean;
  onSwitchTab: (screen: Extract<ScreenId, "results" | "nutrition" | "benefits">) => void;
  onToggleFavorite: (fruit: FruitAnalysisResult) => void;
  onScanAnother: () => void;
  onBack: () => void;
}

export const FruitDetailScreens: React.FC<FruitDetailScreensProps> = ({
  t,
  fruit,
  activeTab,
  isFavorite,
  onSwitchTab,
  onToggleFavorite,
  onScanAnother,
  onBack,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareText = `${fruit.commonName} (${fruit.scientificName})\n\n${fruit.description}\n\n${fruit.nutritionalComposition.servingSize}: ${fruit.nutritionalComposition.calories} kcal`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${fruit.commonName} — ${t.appName}`,
          text: shareText,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Ignore clipboard failures
    }
  };

  // Honest non-fruit or very low confidence screen
  if (!fruit.isFruit || fruit.confidence < 35) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <button
          type="button"
          onClick={onBack}
          className="min-h-[44px] px-3 py-2 -ml-3 rounded-xl text-sm font-medium text-[#35523D] hover:bg-[#EFF4F0] inline-flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.common.back}</span>
        </button>

        <div className="bg-white rounded-3xl border border-[#E2EAE4] p-6 sm:p-8 space-y-6">
          {fruit.imageUrl ? (
            <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#EFF5F0]">
              <FruitArtwork
                imageUrl={fruit.imageUrl}
                name={t.results.notAFruitTitle}
                className="w-full h-full"
              />
            </div>
          ) : null}

          <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h1 className="font-display text-xl font-semibold">
                {t.results.notAFruitTitle}
              </h1>
              <p className="text-sm text-amber-900 leading-relaxed">
                {fruit.uncertainReason || t.results.notAFruitFallback}
              </p>
            </div>
          </div>

          {fruit.alternativeMatches && fruit.alternativeMatches.length > 0 ? (
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-[#142219]">
                {t.results.alternativeMatchesTitle}
              </h2>
              <div className="divide-y divide-[#EDF2EE] border border-[#E2EAE4] rounded-2xl">
                {fruit.alternativeMatches.map((alt) => (
                  <div
                    key={`${alt.commonName}-${alt.scientificName}`}
                    className="p-4 flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#142219]">
                        {alt.commonName}
                      </p>
                      <p className="text-xs italic text-[#5E7464]">
                        {alt.scientificName}
                      </p>
                      <p className="text-xs text-[#4D6353] mt-1">{alt.reason}</p>
                    </div>
                    <span className="font-mono-tabular text-xs font-medium text-[#526658] shrink-0">
                      {alt.confidence}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <button
            type="button"
            onClick={onScanAnother}
            className="min-h-[48px] w-full px-6 py-3 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Camera className="w-4 h-4" />
            <span>{t.results.tryAgainBtn}</span>
          </button>
        </div>
      </div>
    );
  }

  const confidenceLabel =
    fruit.confidenceLevel === "high"
      ? t.results.highConfidence
      : fruit.confidenceLevel === "medium"
      ? t.results.mediumConfidence
      : t.results.lowConfidence;

  const isUncertain =
    fruit.confidenceLevel !== "high" || fruit.confidence < 80;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="min-h-[44px] px-3 py-2 -ml-3 rounded-xl text-sm font-medium text-[#35523D] hover:bg-[#EFF4F0] inline-flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.common.back}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleFavorite(fruit)}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-2 border transition-colors cursor-pointer whitespace-nowrap ${
              isFavorite
                ? "bg-[#ECFDF3] border-[#9FD5B3] text-[#14532D]"
                : "bg-white border-[#D8E3DB] text-[#142219] hover:bg-[#F2F7F3]"
            }`}
          >
            <Bookmark
              className={`w-4 h-4 ${isFavorite ? "fill-[#15803D] text-[#15803D]" : ""}`}
            />
            <span>
              {isFavorite ? t.results.savedFavorite : t.results.saveFavorite}
            </span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-[#D8E3DB] text-[#142219] hover:bg-[#F2F7F3] inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            {copied ? (
              <Check className="w-4 h-4 text-[#15803D]" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
            <span>{copied ? t.results.copiedShare : t.results.shareBtn}</span>
          </button>
        </div>
      </div>

      {/* Hero Summary Card */}
      <section className="bg-white rounded-3xl border border-[#E2EAE4] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
        <div className="md:col-span-5 min-h-[240px] bg-[#EFF5F0]">
          <FruitArtwork
            imageUrl={fruit.imageUrl}
            name={fruit.commonName}
            scientificName={fruit.scientificName}
            className="w-full h-full"
          />
        </div>

        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            {/* Unboxed Metadata Line */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#526658]">
              <span className="italic">{fruit.scientificName}</span>
              <span aria-hidden="true">·</span>
              <span
                className={`font-semibold font-mono-tabular ${
                  fruit.confidenceLevel === "high"
                    ? "text-[#15803D]"
                    : "text-amber-700"
                }`}
              >
                {fruit.isOfflineCatalog
                  ? t.common.offlineBadge
                  : `${t.results.confidenceLabel}: ${fruit.confidence}% (${confidenceLabel})`}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#142219] leading-tight">
              {fruit.commonName}
            </h1>

            <p className="text-sm sm:text-base text-[#3D5244] leading-relaxed">
              {fruit.description}
            </p>
          </div>

          <div className="pt-4 border-t border-[#EDF2EE] grid grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-[#697F70] block">English</span>
              <span className="font-semibold text-[#142219]">
                {fruit.localNames.en}
              </span>
            </div>
            <div>
              <span className="text-[#697F70] block">Français</span>
              <span className="font-semibold text-[#142219]">
                {fruit.localNames.fr}
              </span>
            </div>
            <div>
              <span className="text-[#697F70] block">Kreyòl</span>
              <span className="font-semibold text-[#142219]">
                {fruit.localNames.ht}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Low / Medium Confidence Advisory */}
      {isUncertain && !fruit.isOfflineCatalog ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5 space-y-3">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-amber-950">
                {t.results.uncertainBannerTitle}
              </p>
              {fruit.uncertainReason ? (
                <p className="text-xs text-amber-900 leading-relaxed">
                  {fruit.uncertainReason}
                </p>
              ) : null}
            </div>
          </div>

          {fruit.alternativeMatches.length > 0 ? (
            <div className="pt-2 border-t border-amber-200/70 space-y-2">
              <p className="text-xs font-semibold text-amber-950">
                {t.results.alternativeMatchesTitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {fruit.alternativeMatches.map((alt) => (
                  <div
                    key={`${alt.commonName}-${alt.scientificName}`}
                    className="rounded-xl bg-white/80 border border-amber-200/80 p-3 flex items-start justify-between gap-2"
                  >
                    <div>
                      <p className="text-xs font-semibold text-[#142219]">
                        {alt.commonName}
                      </p>
                      <p className="text-[11px] italic text-[#5E7464]">
                        {alt.scientificName}
                      </p>
                      <p className="text-[11px] text-[#4D6353] mt-1">
                        {alt.reason}
                      </p>
                    </div>
                    <span className="font-mono-tabular text-xs font-semibold text-amber-800 shrink-0">
                      {alt.confidence}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {/* Screen Switcher Tabs (Results / Nutrition / Health Benefits) */}
      <div
        className="flex items-center gap-1 p-1 bg-[#EFF4F0] rounded-xl overflow-x-auto"
        role="tablist"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "results"}
          onClick={() => onSwitchTab("results")}
          className={`min-h-[44px] flex-1 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === "results"
              ? "bg-white text-[#142219] shadow-sm"
              : "text-[#4D6353] hover:text-[#142219]"
          }`}
        >
          <Globe2 className="w-4 h-4 shrink-0" />
          <span>{t.results.backToResults}</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "nutrition"}
          onClick={() => onSwitchTab("nutrition")}
          className={`min-h-[44px] flex-1 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === "nutrition"
              ? "bg-white text-[#142219] shadow-sm"
              : "text-[#4D6353] hover:text-[#142219]"
          }`}
        >
          <Apple className="w-4 h-4 shrink-0" />
          <span>{t.results.viewNutritionBtn}</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "benefits"}
          onClick={() => onSwitchTab("benefits")}
          className={`min-h-[44px] flex-1 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === "benefits"
              ? "bg-white text-[#142219] shadow-sm"
              : "text-[#4D6353] hover:text-[#142219]"
          }`}
        >
          <HeartPulse className="w-4 h-4 shrink-0" />
          <span>{t.results.viewBenefitsBtn}</span>
        </button>
      </div>

      {/* Screen 6: Overview & Botanical Profile */}
      {activeTab === "results" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E2EAE4] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="font-display text-xl font-semibold text-[#142219]">
                {t.results.originTitle}
              </h2>
              <p className="text-sm text-[#3D5244] leading-relaxed">
                {fruit.originAndDistribution}
              </p>
            </div>

            <div className="pt-6 border-t border-[#EDF2EE] space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#142219] flex items-center gap-2">
                <Utensils className="w-5 h-5 text-[#15803D]" />
                <span>{t.results.consumptionTitle}</span>
              </h2>
              <ul className="space-y-2 text-sm text-[#3D5244]">
                {fruit.bestWaysToConsume.map((tip) => (
                  <li key={tip} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-2 shrink-0" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#EDF2EE] space-y-2">
              <h2 className="font-display text-xl font-semibold text-[#142219] flex items-center gap-2">
                <ThermometerSnowflake className="w-5 h-5 text-[#15803D]" />
                <span>{t.results.storageTitle}</span>
              </h2>
              <p className="text-sm text-[#3D5244] leading-relaxed">
                {fruit.storageRecommendations}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-[#E2EAE4] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold text-[#142219]">
                  {t.nutrition.title}
                </h2>
                <span className="text-xs text-[#5E7464]">
                  {fruit.nutritionalComposition.servingSize}
                </span>
              </div>

              <div className="divide-y divide-[#F0F4F1] text-sm">
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#4D6353]">{t.nutrition.calories}</span>
                  <span className="font-mono-tabular font-semibold">
                    {fruit.nutritionalComposition.calories} kcal
                  </span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#4D6353]">
                    {t.nutrition.carbohydrates}
                  </span>
                  <span className="font-mono-tabular font-semibold">
                    {fruit.nutritionalComposition.carbohydratesG} g
                  </span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#4D6353]">{t.nutrition.fiber}</span>
                  <span className="font-mono-tabular font-semibold">
                    {fruit.nutritionalComposition.fiberG} g
                  </span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#4D6353]">{t.nutrition.water}</span>
                  <span className="font-mono-tabular font-semibold">
                    {fruit.nutritionalComposition.waterPercent}%
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => onSwitchTab("nutrition")}
                  className="min-h-[44px] px-3 py-2 rounded-xl bg-[#F2F7F3] hover:bg-[#E4EFE7] text-[#14532D] text-xs font-semibold cursor-pointer"
                >
                  {t.results.viewNutritionBtn}
                </button>
                <button
                  type="button"
                  onClick={() => onSwitchTab("benefits")}
                  className="min-h-[44px] px-3 py-2 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-xs font-semibold cursor-pointer"
                >
                  {t.results.viewBenefitsBtn}
                </button>
              </div>
            </div>

            {fruit.alternativeMatches.length > 0 && !isUncertain ? (
              <div className="bg-white rounded-3xl border border-[#E2EAE4] p-6 space-y-3">
                <h3 className="text-sm font-semibold text-[#142219]">
                  {t.results.alternativeMatchesTitle}
                </h3>
                <div className="divide-y divide-[#F0F4F1]">
                  {fruit.alternativeMatches.map((alt) => (
                    <div
                      key={`${alt.commonName}-${alt.scientificName}`}
                      className="py-2.5 flex items-start justify-between gap-2 text-xs"
                    >
                      <div>
                        <span className="font-semibold text-[#142219] block">
                          {alt.commonName}
                        </span>
                        <span className="italic text-[#5E7464]">
                          {alt.scientificName}
                        </span>
                      </div>
                      <span className="font-mono-tabular text-[#526658]">
                        {alt.confidence}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* Screen 7: Nutritional Information */}
      {activeTab === "nutrition" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E2EAE4] p-6 sm:p-8 space-y-5">
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="font-display text-2xl font-semibold text-[#142219]">
                {t.nutrition.title}
              </h2>
              <span className="text-xs font-medium text-[#526658]">
                {t.nutrition.perServing}:{" "}
                {fruit.nutritionalComposition.servingSize}
              </span>
            </div>

            <div className="divide-y divide-[#EDF2EE] text-sm">
              {[
                {
                  label: t.nutrition.calories,
                  val: `${fruit.nutritionalComposition.calories} kcal`,
                },
                {
                  label: t.nutrition.carbohydrates,
                  val: `${fruit.nutritionalComposition.carbohydratesG} g`,
                },
                {
                  label: t.nutrition.fiber,
                  val: `${fruit.nutritionalComposition.fiberG} g`,
                },
                {
                  label: t.nutrition.sugars,
                  val: `${fruit.nutritionalComposition.sugarsG} g`,
                },
                {
                  label: t.nutrition.protein,
                  val: `${fruit.nutritionalComposition.proteinG} g`,
                },
                {
                  label: t.nutrition.fat,
                  val: `${fruit.nutritionalComposition.fatG} g`,
                },
                {
                  label: t.nutrition.water,
                  val: `${fruit.nutritionalComposition.waterPercent}%`,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="py-3 flex items-center justify-between"
                >
                  <span className="text-[#425949]">{row.label}</span>
                  <span className="font-mono-tabular font-semibold text-[#142219]">
                    {row.val}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#697F70] leading-relaxed pt-2">
              {t.nutrition.sourceNote}
            </p>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E2EAE4] p-6 sm:p-8 space-y-5">
            <h2 className="font-display text-2xl font-semibold text-[#142219]">
              {t.nutrition.vitaminsTitle}
            </h2>

            <div className="divide-y divide-[#EDF2EE]">
              {fruit.vitaminsAndMinerals.map((vm) => {
                const barWidth = Math.min(100, Math.max(4, vm.dailyValuePercent));
                return (
                  <div key={vm.name} className="py-4 first:pt-1 last:pb-1 space-y-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-semibold text-[#142219]">
                        {vm.name}
                      </span>
                      <span className="font-mono-tabular text-xs font-medium text-[#15803D]">
                        {vm.amount} · {vm.dailyValuePercent}% {t.nutrition.dailyValue}
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#EFF4F0] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#15803D]"
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>
                    <p className="text-xs text-[#526658] leading-relaxed">
                      {vm.role}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      {/* Screen 8: Health Benefits & Precautions */}
      {activeTab === "benefits" ? (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#CFE0D4] bg-[#F2F7F3] p-5 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#142219]">
                {t.benefits.medicalDisclaimerTitle}
              </p>
              <p className="text-xs sm:text-sm text-[#3D5244] leading-relaxed">
                {t.benefits.medicalDisclaimerBody}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E2EAE4] p-6 sm:p-8 space-y-5">
              <h2 className="font-display text-2xl font-semibold text-[#142219]">
                {t.benefits.title}
              </h2>

              <div className="divide-y divide-[#EDF2EE]">
                {fruit.healthBenefits.map((b) => (
                  <div key={b.title} className="py-4 first:pt-1 last:pb-1 space-y-1.5">
                    <h3 className="text-base font-semibold text-[#142219]">
                      {b.title}
                    </h3>
                    <p className="text-sm text-[#3D5244] leading-relaxed">
                      {b.explanation}
                    </p>
                    <p className="text-xs text-[#697F70]">{b.evidenceNote}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl border border-[#E2EAE4] p-6 space-y-3">
                <h2 className="font-display text-xl font-semibold text-[#142219] flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>{t.benefits.precautionsTitle}</span>
                </h2>
                {fruit.precautionsAndAllergies.length === 0 ? (
                  <p className="text-sm text-[#526658]">
                    {t.benefits.noPrecautions}
                  </p>
                ) : (
                  <ul className="space-y-2.5 text-sm text-[#3D5244]">
                    {fruit.precautionsAndAllergies.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="bg-white rounded-3xl border border-[#E2EAE4] p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-[#142219]">
                    {t.benefits.consumeTitle}
                  </h3>
                  <ul className="space-y-1.5 text-sm text-[#4D6353]">
                    {fruit.bestWaysToConsume.map((way) => (
                      <li key={way} className="leading-relaxed">
                        · {way}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#EDF2EE] space-y-1.5">
                  <h3 className="text-sm font-semibold text-[#142219]">
                    {t.benefits.storageTitle}
                  </h3>
                  <p className="text-sm text-[#4D6353] leading-relaxed">
                    {fruit.storageRecommendations}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="pt-2 flex justify-center">
        <button
          type="button"
          onClick={onScanAnother}
          className="min-h-[48px] px-6 py-3 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
        >
          <Camera className="w-4 h-4" />
          <span>{t.results.scanAnother}</span>
        </button>
      </div>
    </div>
  );
};
