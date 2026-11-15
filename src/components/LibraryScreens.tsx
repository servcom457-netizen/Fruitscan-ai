import React, { useState } from "react";
import {
  Bookmark,
  Trash2,
  ChevronRight,
  Clock,
  Globe,
  Wifi,
  ShieldCheck,
  Check,
} from "lucide-react";
import { UITranslations } from "../data/translations";
import {
  AppSettings,
  FruitAnalysisResult,
  LanguageCode,
} from "../types/fruit";
import { FruitArtwork } from "./FruitArtwork";

interface FavoritesScreenProps {
  t: UITranslations;
  favorites: FruitAnalysisResult[];
  onSelectFruit: (fruit: FruitAnalysisResult) => void;
  onRemoveFavorite: (id: string) => void;
  onExplore: () => void;
}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = ({
  t,
  favorites,
  onSelectFruit,
  onRemoveFavorite,
  onExplore,
}) => {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold text-[#142219]">
          {t.favorites.title}
        </h1>
        <p className="text-sm text-[#526658] mt-1">{t.favorites.subtitle}</p>
      </div>

      {favorites.length === 0 ? (
        <div className="bg-white rounded-3xl border border-[#E2EAE4] p-10 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#ECFDF3] text-[#15803D] flex items-center justify-center mx-auto">
            <Bookmark className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h2 className="font-display text-xl font-semibold text-[#142219]">
              {t.favorites.emptyTitle}
            </h2>
            <p className="text-sm text-[#526658] max-w-md mx-auto">
              {t.favorites.emptyDesc}
            </p>
          </div>
          <button
            type="button"
            onClick={onExplore}
            className="min-h-[44px] px-6 py-2.5 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-sm font-semibold cursor-pointer"
          >
            {t.favorites.exploreBtn}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-[#E2EAE4] bg-white overflow-hidden flex flex-col"
            >
              <button
                type="button"
                onClick={() => onSelectFruit(item)}
                className="text-left flex-1 flex flex-col cursor-pointer group"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFF5F0]">
                  <FruitArtwork
                    imageUrl={item.imageUrl}
                    name={item.commonName}
                    scientificName={item.scientificName}
                    className="w-full h-full group-hover:scale-[1.02] transition-transform duration-200"
                  />
                </div>
                <div className="p-5 flex-1 space-y-1.5">
                  <h2 className="font-display text-lg font-semibold text-[#142219]">
                    {item.commonName}
                  </h2>
                  <p className="text-xs italic text-[#5E7464]">
                    {item.scientificName}
                  </p>
                  <p className="text-sm text-[#4D6353] line-clamp-2 pt-1">
                    {item.description}
                  </p>
                </div>
              </button>

              <div className="px-5 py-3 border-t border-[#F0F4F1] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onRemoveFavorite(item.id)}
                  className="min-h-[38px] px-2.5 py-1 rounded-lg text-xs font-medium text-red-700 hover:bg-red-50 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t.favorites.removeBtn}</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectFruit(item)}
                  className="min-h-[38px] px-2.5 py-1 rounded-lg text-xs font-semibold text-[#15803D] hover:bg-[#F2F7F3] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{t.home.viewDetails}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface HistoryScreenProps {
  t: UITranslations;
  history: FruitAnalysisResult[];
  onSelectFruit: (fruit: FruitAnalysisResult) => void;
  onDeleteItem: (id: string) => void;
  onClearAll: () => void;
}

export const HistoryScreen: React.FC<HistoryScreenProps> = ({
  t,
  history,
  onSelectFruit,
  onDeleteItem,
  onClearAll,
}) => {
  const [confirmingClear, setConfirmingClear] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-[#142219]">
            {t.history.title}
          </h1>
          <p className="text-sm text-[#526658] mt-1">{t.history.subtitle}</p>
        </div>

        {history.length > 0 ? (
          confirmingClear ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  onClearAll();
                  setConfirmingClear(false);
                }}
                className="min-h-[44px] px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold cursor-pointer"
              >
                {t.history.confirmClear}
              </button>
              <button
                type="button"
                onClick={() => setConfirmingClear(false)}
                className="min-h-[44px] px-4 py-2 rounded-xl border border-[#D8E3DB] bg-white text-xs font-semibold text-[#142219] cursor-pointer"
              >
                {t.history.cancelClear}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmingClear(true)}
              className="min-h-[44px] px-4 py-2 rounded-xl border border-red-200 bg-white hover:bg-red-50 text-red-700 text-xs font-semibold inline-flex items-center gap-2 cursor-pointer self-start sm:self-auto"
            >
              <Trash2 className="w-4 h-4" />
              <span>{t.history.clearAllBtn}</span>
            </button>
          )
        ) : null}
      </div>

      {history.length === 0 ? (
        <div className="bg-white rounded-3xl border border-[#E2EAE4] p-10 text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-[#ECFDF3] text-[#15803D] flex items-center justify-center mx-auto">
            <Clock className="w-6 h-6" />
          </div>
          <h2 className="font-display text-xl font-semibold text-[#142219]">
            {t.history.emptyTitle}
          </h2>
          <p className="text-sm text-[#526658] max-w-md mx-auto">
            {t.history.emptyDesc}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-[#E2EAE4] divide-y divide-[#EDF2EE] overflow-hidden">
          {history.map((item) => {
            const dateStr = new Date(item.analyzedAt).toLocaleDateString();
            return (
              <div
                key={item.id}
                className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-[#FAFBF9] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => onSelectFruit(item)}
                  className="flex-1 flex items-center gap-4 text-left min-w-0 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#EFF5F0] shrink-0 border border-[#E2EAE4]">
                    <FruitArtwork
                      imageUrl={item.imageUrl}
                      name={item.commonName}
                      scientificName={item.scientificName}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-lg font-semibold text-[#142219] truncate">
                      {item.isFruit ? item.commonName : t.results.notAFruitTitle}
                    </h2>
                    <p className="text-xs text-[#5E7464] truncate">
                      <span className="italic">{item.scientificName || "—"}</span>
                      <span aria-hidden="true"> · </span>
                      <span className="font-mono-tabular">
                        {item.confidence}% {t.results.confidenceLabel}
                      </span>
                      <span aria-hidden="true"> · </span>
                      <span>
                        {t.history.scannedOn} {dateStr}
                      </span>
                    </p>
                  </div>
                </button>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    aria-label={t.history.deleteItem}
                    onClick={() => onDeleteItem(item.id)}
                    className="min-h-[44px] min-w-[44px] rounded-xl text-[#697F70] hover:text-red-700 hover:bg-red-50 flex items-center justify-center cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={t.home.viewDetails}
                    onClick={() => onSelectFruit(item)}
                    className="min-h-[44px] min-w-[44px] rounded-xl text-[#15803D] hover:bg-[#F2F7F3] flex items-center justify-center cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

interface SettingsScreenProps {
  t: UITranslations;
  settings: AppSettings;
  onUpdateSettings: (patch: Partial<AppSettings>) => void;
  onClearHistory: () => void;
  onClearFavorites: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  t,
  settings,
  onUpdateSettings,
  onClearHistory,
  onClearFavorites,
}) => {
  const [notice, setNotice] = useState<string | null>(null);

  const showClearedNotice = () => {
    setNotice(t.settings.dataCleared);
    window.setTimeout(() => setNotice(null), 2500);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold text-[#142219]">
          {t.settings.title}
        </h1>
        <p className="text-sm text-[#526658] mt-1">{t.settings.subtitle}</p>
      </div>

      {/* Language Selector */}
      <section className="bg-white rounded-3xl border border-[#E2EAE4] p-6 space-y-4">
        <div className="flex items-start gap-3">
          <Globe className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
          <div>
            <h2 className="font-display text-xl font-semibold text-[#142219]">
              {t.settings.languageTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#526658] mt-0.5">
              {t.settings.languageDesc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {(
            [
              { code: "en", label: t.common.english },
              { code: "fr", label: t.common.french },
              { code: "ht", label: t.common.creole },
            ] as { code: LanguageCode; label: string }[]
          ).map((lang) => {
            const active = settings.language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => onUpdateSettings({ language: lang.code })}
                className={`min-h-[48px] px-4 py-3 rounded-xl border text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                  active
                    ? "bg-[#ECFDF3] border-[#15803D] text-[#14532D]"
                    : "bg-white border-[#D8E3DB] text-[#142219] hover:bg-[#F7FAF8]"
                }`}
              >
                <span>{lang.label}</span>
                {active ? <Check className="w-4 h-4 text-[#15803D]" /> : null}
              </button>
            );
          })}
        </div>
      </section>

      {/* Performance & Offline Options */}
      <section className="bg-white rounded-3xl border border-[#E2EAE4] p-6 space-y-5">
        <div className="flex items-start gap-3">
          <Wifi className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
          <h2 className="font-display text-xl font-semibold text-[#142219]">
            {t.settings.performanceTitle}
          </h2>
        </div>

        <div className="divide-y divide-[#EDF2EE]">
          <label className="py-3 first:pt-0 flex items-center justify-between gap-4 cursor-pointer">
            <div>
              <span className="text-sm font-semibold text-[#142219] block">
                {t.settings.lowBandwidthLabel}
              </span>
              <span className="text-xs text-[#526658] block mt-0.5">
                {t.settings.lowBandwidthDesc}
              </span>
            </div>
            <input
              type="checkbox"
              checked={settings.lowBandwidthMode}
              onChange={(e) =>
                onUpdateSettings({ lowBandwidthMode: e.target.checked })
              }
              className="w-5 h-5 accent-[#15803D] shrink-0 cursor-pointer"
            />
          </label>

          <label className="py-3 last:pb-0 flex items-center justify-between gap-4 cursor-pointer">
            <div>
              <span className="text-sm font-semibold text-[#142219] block">
                {t.settings.saveHistoryLabel}
              </span>
              <span className="text-xs text-[#526658] block mt-0.5">
                {t.settings.saveHistoryDesc}
              </span>
            </div>
            <input
              type="checkbox"
              checked={settings.saveScanHistory}
              onChange={(e) =>
                onUpdateSettings({ saveScanHistory: e.target.checked })
              }
              className="w-5 h-5 accent-[#15803D] shrink-0 cursor-pointer"
            />
          </label>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="bg-white rounded-3xl border border-[#E2EAE4] p-6 space-y-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
          <div>
            <h2 className="font-display text-xl font-semibold text-[#142219]">
              {t.settings.privacyTitle}
            </h2>
            <p className="text-sm text-[#4D6353] mt-1">
              {t.settings.privacySummary}
            </p>
          </div>
        </div>

        <ul className="space-y-2 text-sm text-[#3D5244] pl-1">
          {[
            t.settings.privacyPoint1,
            t.settings.privacyPoint2,
            t.settings.privacyPoint3,
            t.settings.privacyPoint4,
          ].map((pt) => (
            <li key={pt} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-2 shrink-0" />
              <span className="leading-relaxed">{pt}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-[#EDF2EE] space-y-3">
          <h3 className="text-sm font-semibold text-[#142219]">
            {t.settings.dataControlsTitle}
          </h3>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                onClearHistory();
                showClearedNotice();
              }}
              className="min-h-[44px] px-4 py-2 rounded-xl border border-red-200 text-red-700 hover:bg-red-50 text-xs font-semibold cursor-pointer"
            >
              {t.settings.clearHistoryBtn}
            </button>
            <button
              type="button"
              onClick={() => {
                onClearFavorites();
                showClearedNotice();
              }}
              className="min-h-[44px] px-4 py-2 rounded-xl border border-red-200 text-red-700 hover:bg-red-50 text-xs font-semibold cursor-pointer"
            >
              {t.settings.clearFavoritesBtn}
            </button>
          </div>
          {notice ? (
            <p className="text-xs font-semibold text-[#15803D]">{notice}</p>
          ) : null}
        </div>
      </section>

      <section className="px-2 py-2 text-xs text-[#5E7464] space-y-1">
        <p className="font-semibold text-[#35523D]">{t.settings.aboutTitle}</p>
        <p>{t.settings.aboutDesc}</p>
      </section>
    </div>
  );
};
