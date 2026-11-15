import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;

const SUPPORTED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
]);

function getAiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

const fruitAnalysisSchema = {
  type: Type.OBJECT,
  properties: {
    isFruit: {
      type: Type.BOOLEAN,
      description:
        "True ONLY if a real fruit (whole, cut, or clustered) is clearly visible and recognizable in the image. False if not a fruit, too blurry, dark, or unrecognizable.",
    },
    confidence: {
      type: Type.INTEGER,
      description:
        "Confidence score from 0 to 100. Must be honest and conservative. Below 55 if uncertain or obscured.",
    },
    confidenceLevel: {
      type: Type.STRING,
      description: "One of: high, medium, low",
    },
    commonName: {
      type: Type.STRING,
      description: "Primary common name in the requested language.",
    },
    scientificName: {
      type: Type.STRING,
      description: "Botanical Latin binomial name (e.g., Mangifera indica).",
    },
    localNames: {
      type: Type.OBJECT,
      properties: {
        en: { type: Type.STRING },
        fr: { type: Type.STRING },
        ht: { type: Type.STRING },
      },
      required: ["en", "fr", "ht"],
    },
    alternativeMatches: {
      type: Type.ARRAY,
      description:
        "Other plausible fruit species when confidence is medium/low or visually similar cultivars exist.",
      items: {
        type: Type.OBJECT,
        properties: {
          commonName: { type: Type.STRING },
          scientificName: { type: Type.STRING },
          confidence: { type: Type.INTEGER },
          reason: { type: Type.STRING },
        },
        required: ["commonName", "scientificName", "confidence", "reason"],
      },
    },
    originAndDistribution: {
      type: Type.STRING,
      description:
        "Geographical origin and tropical/international distribution, noting Haitian and Caribbean relevance where applicable.",
    },
    description: {
      type: Type.STRING,
      description:
        "Clear botanical description, appearance, flavor profile, and distinguishing traits.",
    },
    nutritionalComposition: {
      type: Type.OBJECT,
      properties: {
        servingSize: { type: Type.STRING },
        calories: { type: Type.NUMBER },
        carbohydratesG: { type: Type.NUMBER },
        fiberG: { type: Type.NUMBER },
        sugarsG: { type: Type.NUMBER },
        proteinG: { type: Type.NUMBER },
        fatG: { type: Type.NUMBER },
        waterPercent: { type: Type.NUMBER },
      },
      required: [
        "servingSize",
        "calories",
        "carbohydratesG",
        "fiberG",
        "sugarsG",
        "proteinG",
        "fatG",
        "waterPercent",
      ],
    },
    vitaminsAndMinerals: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          amount: { type: Type.STRING },
          dailyValuePercent: { type: Type.INTEGER },
          role: { type: Type.STRING },
        },
        required: ["name", "amount", "dailyValuePercent", "role"],
      },
    },
    healthBenefits: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          explanation: { type: Type.STRING },
          evidenceNote: { type: Type.STRING },
        },
        required: ["title", "explanation", "evidenceNote"],
      },
    },
    precautionsAndAllergies: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    bestWaysToConsume: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    storageRecommendations: {
      type: Type.STRING,
    },
    uncertainReason: {
      type: Type.STRING,
      description:
        "Explanation when isFruit is false or confidence is low; empty string if high confidence.",
    },
  },
  required: [
    "isFruit",
    "confidence",
    "confidenceLevel",
    "commonName",
    "scientificName",
    "localNames",
    "alternativeMatches",
    "originAndDistribution",
    "description",
    "nutritionalComposition",
    "vitaminsAndMinerals",
    "healthBenefits",
    "precautionsAndAllergies",
    "bestWaysToConsume",
    "storageRecommendations",
    "uncertainReason",
  ],
};

function getLanguageInstruction(language: string): string {
  switch (language) {
    case "fr":
      return "French (Français). Write every descriptive field, name, benefit, precaution, and advice in natural, clear French.";
    case "ht":
      return "Haitian Creole (Kreyòl Ayisyen). Write every descriptive field, common name, benefit, precaution, and advice in natural, authentic Haitian Creole (e.g., Mango Fransik, Zaboka, Kowòsòl, Papay, Zannanna, Gwayav, Grenadia, Kokoye, Kenèp, Lamveritab, Kayimit). Keep scientific Latin binomials in Latin.";
    default:
      return "English. Write every descriptive field, name, benefit, precaution, and advice in clear, accessible English.";
  }
}

async function analyzeWithRetry(
  ai: GoogleGenAI,
  imageBase64: string,
  mimeType: string,
  language: string
) {
  const languageDirective = getLanguageInstruction(language);

  const systemInstruction = `You are FruitScan AI, a senior tropical botanist, agricultural specialist (with deep expertise in Haitian, Caribbean, and international fruits), and registered nutrition educator.

CRITICAL RULES:
1. HONESTY & ANTI-HALLUCINATION:
   - Inspect the image carefully. If the image does NOT show a fruit (e.g., it shows a person, car, wall, text, blank screen, cooked dish with no identifiable fruit), or if the image is too blurry, dark, or obstructed to identify reliably, you MUST set "isFruit": false (or "confidenceLevel": "low" with confidence < 50) and explain why in "uncertainReason". NEVER guess or invent a fruit name when confidence is low.
   - If the fruit is recognizable but visually close to related species or cultivars (e.g., mango vs papaya, lime vs green orange, soursop vs sugar apple, quenepa vs lychee), set "confidenceLevel" to "medium" or "low" and populate "alternativeMatches" with up to 3 plausible alternatives and why they might match.
   - Only use "high" confidence (>= 80) when key botanical features (skin texture, stem, leaf, flesh, seeds, shape) are clearly visible.

2. SCIENTIFIC & MEDICAL ACCURACY:
   - Provide standard nutritional data per 100g edible portion (set servingSize clearly, e.g., "100 g edible portion").
   - Distinguish nutritional support from medical treatment. Explain health benefits in plain, approachable language (e.g., "Rich in vitamin C, which supports normal immune function and collagen synthesis").
   - NEVER claim that any fruit cures, treats, or prevents cancer, diabetes, hypertension, or any disease. Include balanced precautions (e.g., latex-fruit cross-reactivity, citrus acid sensitivity, high potassium caution for kidney conditions, seed toxicity if chewed).

3. HAITIAN & TROPICAL EXPERTISE:
   - Accurately recognize Haitian and Caribbean fruits and cultivars: Mango Francique (Mango Fransik), Zaboka (West Indian Avocado), Fig-bannann (Banana), Zannanna (Pineapple), Papay (Papaya), Kokoye (Coconut), Gwayav (Guava), Grenadia (Passion Fruit), Kowòsòl (Soursop / Graviola), Lamveritab (Breadfruit), Kayimit (Star Apple / Caimito), Kenèp (Quenepa / Spanish Lime), Tamaren (Tamarind), Pòm Kajou (Cashew Apple), Sitwon (Key Lime / Lemon), Zoranj (Orange), Melon dlo (Watermelon), Frèz (Strawberry), Cherry / Siwèl (Acerola), etc.

4. OUTPUT LANGUAGE:
   - Respond in: ${languageDirective}`;

  const promptText = `Identify the fruit in this photograph and provide complete botanical, nutritional, health-benefit, precaution, consumption, and storage information. Populate localNames with the English (en), French (fr), and Haitian Creole (ht) common names.`;

  let lastError: unknown;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents: {
          parts: [
            {
              inlineData: {
                mimeType,
                data: imageBase64,
              },
            },
            { text: promptText },
          ],
        },
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: fruitAnalysisSchema,
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        },
      });

      const rawText = (response.text ?? "").trim();
      if (!rawText) {
        throw new Error("Empty model response");
      }
      return JSON.parse(rawText);
    } catch (err) {
      lastError = err;
      const status = (err as { status?: number })?.status;
      // Do not retry 400 / 403 / 404 configuration errors
      if (status === 400 || status === 403 || status === 404) {
        throw err;
      }
      if (attempt < 2) {
        await new Promise((r) => setTimeout(r, 600 * (attempt + 1)));
      }
    }
  }
  throw lastError;
}

async function startServer() {
  const app = express();

  app.use(express.json({ limit: "12mb" }));

  // CORS headers so native Android client can also connect directly if configured
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      res.sendStatus(204);
      return;
    }
    next();
  });

  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      service: "FruitScan AI Backend",
      hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    });
  });

  app.post("/api/identify", async (req, res) => {
    try {
      const { imageBase64, mimeType, language = "en" } = req.body ?? {};

      if (!imageBase64 || typeof imageBase64 !== "string") {
        res.status(400).json({ error: "Missing image data." });
        return;
      }

      const normalizedMime =
        typeof mimeType === "string" ? mimeType.toLowerCase() : "image/jpeg";
      const safeMime =
        normalizedMime === "image/jpg" ? "image/jpeg" : normalizedMime;

      if (!SUPPORTED_MIME_TYPES.has(safeMime)) {
        res.status(400).json({
          error: "Unsupported image format. Please use JPG, JPEG, PNG, or WEBP.",
        });
        return;
      }

      const cleanBase64 = imageBase64.replace(
        /^data:image\/[a-zA-Z+]+;base64,/,
        ""
      );

      const ai = getAiClient();
      if (!ai) {
        res.status(503).json({
          error:
            "AI recognition service is not configured yet. Please check Settings > Secrets for GEMINI_API_KEY.",
        });
        return;
      }

      const validLang = ["en", "fr", "ht"].includes(language) ? language : "en";
      const result = await analyzeWithRetry(ai, cleanBase64, safeMime, validLang);

      res.json({
        ...result,
        analyzedAt: new Date().toISOString(),
        language: validLang,
      });
    } catch (error: unknown) {
      console.error("Fruit identification error:", error);
      const errObj = error as { status?: number; message?: string };
      const status = errObj?.status;

      if (status === 403 || status === 400) {
        res.status(502).json({
          error:
            "AI service authentication or request error. Verify GEMINI_API_KEY in Settings > Secrets.",
        });
        return;
      }
      if (status === 429) {
        res.status(429).json({
          error:
            "AI service quota reached temporarily. Please wait a moment and try again.",
        });
        return;
      }
      res.status(500).json({
        error: "Unable to analyze the fruit image right now. Please try again.",
      });
    }
  });

  if (process.env.NODE_ENV === "production") {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`FruitScan AI running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
