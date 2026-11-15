import React from "react";
import { Camera, ShieldCheck, Globe, Sparkles, ArrowRight } from "lucide-react";
import { UITranslations } from "../data/translations";
import { LanguageCode } from "../types/fruit";
import { HERO_BANNER_IMAGE } from "../data/offlineFruits";

interface WelcomeScreenProps {
  t: UITranslations;
  language: LanguageCode;
  onChangeLanguage: (lang: LanguageCode) => void;
  onContinue: () => void;
  onStartScan: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  t,
  language,
  onChangeLanguage,
  onContinue,
  onStartScan,
}) => {
  return (
    <div className="min-h-screen bg-[#FAFBF9] text-[#142219] flex flex-col">
      <header className="max-w-6xl w-full mx-auto px-5 sm:px-8 py-5 flex items-center justify-between gap-4">
        <span className="font-display text-xl font-semibold tracking-tight text-[#142219] whitespace-nowrap shrink-0">
          {t.appName}
        </span>

        <div
          className="flex items-center gap-1 p-1 bg-[#EFF4F0] rounded-lg"
          role="group"
          aria-label="Language"
        >
          {(
            [
              { code: "en", label: "EN" },
              { code: "fr", label: "FR" },
              { code: "ht", label: "HT" },
            ] as const
          ).map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => onChangeLanguage(item.code)}
              className={`min-h-[36px] px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                language === item.code
                  ? "bg-white text-[#142219] shadow-sm"
                  : "text-[#4D6353] hover:text-[#142219]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-5 sm:px-8 py-6 lg:py-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <p className="text-sm font-medium text-[#15803D]">
              {t.welcome.kicker}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[#142219] leading-[1.12] text-balance">
              {t.welcome.headline}
            </h1>
            <p className="text-base sm:text-lg text-[#4D6353] leading-relaxed max-w-xl">
              {t.welcome.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={onStartScan}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Camera className="w-4 h-4 shrink-0" />
                <span>{t.welcome.skipToScanner}</span>
              </button>
              <button
                type="button"
                onClick={onContinue}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-white hover:bg-[#F1F6F2] text-[#142219] border border-[#D8E3DB] font-semibold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t.welcome.getStarted}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            <p className="text-xs text-[#5E7464] leading-relaxed pt-1">
              {t.welcome.privacyNote}
            </p>
          </div>

          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-3xl overflow-hidden border border-[#E2EAE4] bg-white shadow-sm flex flex-col">
              <div className="aspect-[16/10] lg:flex-1 relative overflow-hidden bg-[#EFF5F0]">
                <img
                  src={HERO_BANNER_IMAGE}
                  alt="Fresh tropical and Haitian fruits including Francique mango, papaya, avocado, guava, and passion fruit"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white border-t border-[#EDF2EE]">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#15803D] font-semibold text-sm">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>{t.welcome.feature1Title}</span>
                  </div>
                  <p className="text-xs text-[#526658] leading-relaxed">
                    {t.welcome.feature1Desc}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#15803D] font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>{t.welcome.feature2Title}</span>
                  </div>
                  <p className="text-xs text-[#526658] leading-relaxed">
                    {t.welcome.feature2Desc}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#15803D] font-semibold text-sm">
                    <Globe className="w-4 h-4 shrink-0" />
                    <span>{t.welcome.feature3Title}</span>
                  </div>
                  <p className="text-xs text-[#526658] leading-relaxed">
                    {t.welcome.feature3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
