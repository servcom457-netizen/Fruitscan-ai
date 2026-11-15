import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Camera,
  Home,
  Bookmark,
  Clock,
  Settings,
  AlertCircle,
} from "lucide-react";
import { TRANSLATIONS } from "./data/translations";
import {
  AppSettings,
  FruitAnalysisResult,
  ScreenId,
} from "./types/fruit";
import {
  loadFavorites,
  loadHistory,
  loadSettings,
  saveFavorites,
  saveHistory,
  saveSettings,
} from "./utils/storage";
import { OptimizedImage } from "./utils/imageOptimizer";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { HomeScreen } from "./components/HomeScreen";
import { CameraScannerScreen } from "./components/CameraScannerScreen";
import { GalleryUploadScreen } from "./components/GalleryUploadScreen";
import { AnalyzingScreen } from "./components/AnalyzingScreen";
import { FruitDetailScreens } from "./components/FruitDetailScreens";
import {
  FavoritesScreen,
  HistoryScreen,
  SettingsScreen,
} from "./components/LibraryScreens";

export default function App() {
  const [settings, setSettings] = useState<AppSettings>(() => loadSettings());
  const [favorites, setFavorites] = useState<FruitAnalysisResult[]>(() =>
    loadFavorites()
  );
  const [history, setHistory] = useState<FruitAnalysisResult[]>(() =>
    loadHistory()
  );
  const [screen, setScreen] = useState<ScreenId>(() =>
    loadSettings().hasSeenWelcome ? "home" : "welcome"
  );
  const [previousScreen, setPreviousScreen] = useState<ScreenId>("home");
  const [activeFruit, setActiveFruit] = useState<FruitAnalysisResult | null>(
    null
  );
  const [analyzingPreview, setAnalyzingPreview] = useState<string | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState<boolean>(() =>
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  const abortRef = useRef<AbortController | null>(null);

  const t = TRANSLATIONS[settings.language];

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const updateSettings = (patch: Partial<AppSettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      saveSettings(next);
      return next;
    });
  };

  const navigate = (nextScreen: ScreenId) => {
    setAnalysisError(null);
    if (
      screen !== "analyzing" &&
      screen !== "welcome" &&
      nextScreen !== screen
    ) {
      setPreviousScreen(screen);
    }
    setScreen(nextScreen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenFruit = (fruit: FruitAnalysisResult) => {
    setPreviousScreen(screen === "analyzing" ? "home" : screen);
    setActiveFruit(fruit);
    setScreen("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleFavorite = (fruit: FruitAnalysisResult) => {
    setFavorites((prev) => {
      const exists = prev.some(
        (f) =>
          f.id === fruit.id ||
          (f.scientificName &&
            f.scientificName.toLowerCase() ===
              fruit.scientificName.toLowerCase())
      );
      const next = exists
        ? prev.filter(
            (f) =>
              f.id !== fruit.id &&
              f.scientificName.toLowerCase() !==
                fruit.scientificName.toLowerCase()
          )
        : [fruit, ...prev];
      saveFavorites(next);
      return next;
    });
  };

  const isFruitFavorited = useMemo(() => {
    if (!activeFruit) return false;
    return favorites.some(
      (f) =>
        f.id === activeFruit.id ||
        (f.scientificName &&
          f.scientificName.toLowerCase() ===
            activeFruit.scientificName.toLowerCase())
    );
  }, [activeFruit, favorites]);

  const handleAnalyzeImage = async (img: OptimizedImage) => {
    setAnalysisError(null);
    setAnalyzingPreview(img.dataUrl);
    setScreen("analyzing");

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch("/api/identify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: img.base64,
          mimeType: img.mimeType,
          language: settings.language,
        }),
        signal: controller.signal,
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.error || t.common.errorTitle);
      }

      const result: FruitAnalysisResult = {
        ...payload,
        id: `scan-${Date.now()}`,
        imageUrl: img.dataUrl,
      };

      setActiveFruit(result);
      if (settings.saveScanHistory) {
        setHistory((prev) => {
          const next = [result, ...prev];
          saveHistory(next);
          return next;
        });
      }
      setScreen("results");
    } catch (err) {
      if ((err as Error).name === "AbortError") {
        setScreen("home");
        return;
      }
      setAnalysisError((err as Error).message || t.common.errorTitle);
      setScreen("home");
    }
  };

  if (screen === "welcome") {
    return (
      <WelcomeScreen
        t={t}
        language={settings.language}
        onChangeLanguage={(lang) => updateSettings({ language: lang })}
        onContinue={() => {
          updateSettings({ hasSeenWelcome: true });
          setScreen("home");
        }}
        onStartScan={() => {
          updateSettings({ hasSeenWelcome: true });
          setScreen("scanner");
        }}
      />
    );
  }

  const isDetailScreen =
    screen === "results" || screen === "nutrition" || screen === "benefits";

  return (
    <div className="min-h-screen bg-[#FAFBF9] text-[#142219] flex flex-col">
      {/* Desktop & Mobile Top Navigation Contract: 3 zones */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E2EAE4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-8">
          <button
            type="button"
            onClick={() => navigate("home")}
            className="font-display text-lg font-semibold tracking-tight text-[#142219] whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.appName}
          </button>

          <nav
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4D6353]"
            aria-label="Primary"
          >
            {(
              [
                { id: "home", label: t.nav.home },
                { id: "gallery", label: t.nav.gallery },
                { id: "favorites", label: t.nav.favorites },
                { id: "history", label: t.nav.history },
                { id: "settings", label: t.nav.settings },
              ] as const
            ).map((item) => {
              const active = screen === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigate(item.id)}
                  className={`py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? "text-[#15803D] font-semibold border-b-2 border-[#15803D]"
                      : "hover:text-[#142219]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label={t.nav.settings}
              onClick={() => navigate("settings")}
              className="md:hidden min-h-[44px] min-w-[44px] rounded-xl text-[#35523D] hover:bg-[#EFF4F0] flex items-center justify-center cursor-pointer"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => navigate("scanner")}
              className="min-h-[40px] px-4 py-2 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Camera className="w-4 h-4 shrink-0" />
              <span>{t.home.scanFruitBtn}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-24 md:pb-12">
        {analysisError ? (
          <div
            role="alert"
            className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 flex items-start justify-between gap-3 text-sm text-red-900"
          >
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{t.common.errorTitle}</p>
                <p className="text-xs mt-0.5">{analysisError}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setAnalysisError(null)}
              className="text-xs font-semibold underline shrink-0 cursor-pointer"
            >
              {t.common.retry}
            </button>
          </div>
        ) : null}

        {screen === "home" ? (
          <HomeScreen
            t={t}
            language={settings.language}
            isOnline={isOnline}
            onScanFruit={() => navigate("scanner")}
            onUploadPhoto={() => navigate("gallery")}
            onSelectFruit={handleOpenFruit}
          />
        ) : null}

        {screen === "scanner" ? (
          <CameraScannerScreen
            t={t}
            lowBandwidthMode={settings.lowBandwidthMode}
            onBack={() => navigate("home")}
            onSwitchToGallery={() => navigate("gallery")}
            onAnalyzeImage={handleAnalyzeImage}
          />
        ) : null}

        {screen === "gallery" ? (
          <GalleryUploadScreen
            t={t}
            lowBandwidthMode={settings.lowBandwidthMode}
            onBack={() => navigate("home")}
            onAnalyzeImage={handleAnalyzeImage}
          />
        ) : null}

        {screen === "analyzing" ? (
          <AnalyzingScreen
            t={t}
            previewDataUrl={analyzingPreview}
            onCancel={() => {
              abortRef.current?.abort();
              navigate("home");
            }}
          />
        ) : null}

        {isDetailScreen && activeFruit ? (
          <FruitDetailScreens
            t={t}
            fruit={activeFruit}
            activeTab={screen}
            isFavorite={isFruitFavorited}
            onSwitchTab={(tab) => setScreen(tab)}
            onToggleFavorite={handleToggleFavorite}
            onScanAnother={() => navigate("scanner")}
            onBack={() =>
              navigate(
                previousScreen === "favorites" || previousScreen === "history"
                  ? previousScreen
                  : "home"
              )
            }
          />
        ) : null}

        {screen === "favorites" ? (
          <FavoritesScreen
            t={t}
            favorites={favorites}
            onSelectFruit={handleOpenFruit}
            onRemoveFavorite={(id) => {
              setFavorites((prev) => {
                const next = prev.filter((item) => item.id !== id);
                saveFavorites(next);
                return next;
              });
            }}
            onExplore={() => navigate("home")}
          />
        ) : null}

        {screen === "history" ? (
          <HistoryScreen
            t={t}
            history={history}
            onSelectFruit={handleOpenFruit}
            onDeleteItem={(id) => {
              setHistory((prev) => {
                const next = prev.filter((item) => item.id !== id);
                saveHistory(next);
                return next;
              });
            }}
            onClearAll={() => {
              setHistory([]);
              saveHistory([]);
            }}
          />
        ) : null}

        {screen === "settings" ? (
          <SettingsScreen
            t={t}
            settings={settings}
            onUpdateSettings={updateSettings}
            onClearHistory={() => {
              setHistory([]);
              saveHistory([]);
            }}
            onClearFavorites={() => {
              setFavorites([]);
              saveFavorites([]);
            }}
          />
        ) : null}
      </main>

      {/* Mobile Fixed Bottom Thumb Navigation (< md) — concise 4-tab layout */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2EAE4] pb-safe"
      >
        <div className="grid grid-cols-4 h-14 items-center">
          {(
            [
              { id: "home", label: t.nav.home, Icon: Home },
              { id: "scanner", label: t.nav.scan, Icon: Camera },
              { id: "favorites", label: t.nav.favorites, Icon: Bookmark },
              { id: "history", label: t.nav.history, Icon: Clock },
            ] as const
          ).map((tab) => {
            const active = screen === tab.id;
            const Icon = tab.Icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => navigate(tab.id)}
                className={`min-h-[44px] flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                  active ? "text-[#15803D]" : "text-[#5E7464]"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-semibold tracking-tight">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
