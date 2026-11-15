import { AppSettings, FruitAnalysisResult } from "../types/fruit";

const FAVORITES_KEY = "fruitscan_favorites_v1";
const HISTORY_KEY = "fruitscan_history_v1";
const SETTINGS_KEY = "fruitscan_settings_v1";

const DEFAULT_SETTINGS: AppSettings = {
  language: "en",
  lowBandwidthMode: false,
  hasSeenWelcome: false,
  saveScanHistory: true,
};

export function loadSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: AppSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (err) {
    console.warn("Unable to save settings locally:", err);
  }
}

export function loadFavorites(): FruitAnalysisResult[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveFavorites(items: FruitAnalysisResult[]): void {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(items.slice(0, 50)));
  } catch (err) {
    console.warn("Unable to save favorites locally:", err);
  }
}

export function loadHistory(): FruitAnalysisResult[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveHistory(items: FruitAnalysisResult[]): void {
  // Strip overly large image data URLs if storage quota gets tight
  const capped = items.slice(0, 40);
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(capped));
  } catch {
    try {
      const lightweight = capped.map((item) => ({
        ...item,
        imageUrl:
          item.imageUrl && item.imageUrl.startsWith("data:")
            ? undefined
            : item.imageUrl,
      }));
      localStorage.setItem(HISTORY_KEY, JSON.stringify(lightweight));
    } catch (err) {
      console.warn("Unable to persist scan history:", err);
    }
  }
}
