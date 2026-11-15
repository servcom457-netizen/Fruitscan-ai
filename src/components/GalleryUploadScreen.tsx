import React, { useRef, useState } from "react";
import { ArrowLeft, ImagePlus, Upload, AlertCircle } from "lucide-react";
import { UITranslations } from "../data/translations";
import {
  isSupportedImageFile,
  optimizeImageSource,
  OptimizedImage,
} from "../utils/imageOptimizer";

interface GalleryUploadScreenProps {
  t: UITranslations;
  lowBandwidthMode: boolean;
  onBack: () => void;
  onAnalyzeImage: (img: OptimizedImage) => void;
}

export const GalleryUploadScreen: React.FC<GalleryUploadScreenProps> = ({
  t,
  lowBandwidthMode,
  onBack,
  onAnalyzeImage,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setErrorMsg(null);

    if (!isSupportedImageFile(file)) {
      setErrorMsg(t.gallery.unsupportedError);
      return;
    }

    setIsOptimizing(true);
    try {
      const optimized = await optimizeImageSource(file, lowBandwidthMode);
      onAnalyzeImage(optimized);
    } catch {
      setErrorMsg(t.gallery.unsupportedError);
    } finally {
      setIsOptimizing(false);
    }
  };

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

      <div className="space-y-1">
        <h1 className="font-display text-2xl sm:text-3xl font-semibold text-[#142219]">
          {t.gallery.title}
        </h1>
        <p className="text-sm text-[#526658]">{t.gallery.subtitle}</p>
      </div>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFile(e.dataTransfer.files?.[0]);
        }}
        className={`rounded-3xl border-2 border-dashed transition-colors bg-white p-8 sm:p-12 text-center space-y-5 ${
          isDragging
            ? "border-[#15803D] bg-[#F2F7F3]"
            : "border-[#C8D8CD] hover:border-[#8DB49A]"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />

        <div className="w-16 h-16 rounded-2xl bg-[#ECFDF3] text-[#15803D] flex items-center justify-center mx-auto">
          <ImagePlus className="w-8 h-8" />
        </div>

        <div className="space-y-1.5 max-w-md mx-auto">
          <h2 className="font-display text-xl font-semibold text-[#142219]">
            {isOptimizing ? t.gallery.optimizingNote : t.gallery.dropTitle}
          </h2>
          <p className="text-sm text-[#526658] leading-relaxed">
            {t.gallery.dropHint}
          </p>
        </div>

        <div className="pt-1">
          <button
            type="button"
            disabled={isOptimizing}
            onClick={() => inputRef.current?.click()}
            className="min-h-[48px] px-7 py-3 rounded-xl bg-[#15803D] hover:bg-[#166534] disabled:opacity-60 text-white text-sm font-semibold inline-flex items-center gap-2.5 cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            <span>{t.gallery.selectFileBtn}</span>
          </button>
        </div>

        <div className="text-xs text-[#5E7464] space-y-1">
          <p>{t.gallery.supportedFormats}</p>
          {lowBandwidthMode ? (
            <p className="text-[#15803D] font-medium">
              {t.gallery.lowBandwidthActive}
            </p>
          ) : null}
        </div>
      </div>

      {errorMsg ? (
        <div
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 flex items-start gap-3 text-sm text-red-900"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      ) : null}
    </div>
  );
};
