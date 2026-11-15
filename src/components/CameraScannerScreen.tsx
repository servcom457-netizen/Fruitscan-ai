import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Camera,
  RefreshCw,
  RotateCcw,
  ArrowLeft,
  Upload,
  Check,
  ShieldAlert,
} from "lucide-react";
import { UITranslations } from "../data/translations";
import { optimizeImageSource, OptimizedImage } from "../utils/imageOptimizer";

interface CameraScannerScreenProps {
  t: UITranslations;
  lowBandwidthMode: boolean;
  onBack: () => void;
  onSwitchToGallery: () => void;
  onAnalyzeImage: (img: OptimizedImage) => void;
}

type CameraStatus = "prompt" | "requesting" | "active" | "denied";

export const CameraScannerScreen: React.FC<CameraScannerScreenProps> = ({
  t,
  lowBandwidthMode,
  onBack,
  onSwitchToGallery,
  onAnalyzeImage,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [status, setStatus] = useState<CameraStatus>("prompt");
  const [facingMode, setFacingMode] = useState<"environment" | "user">(
    "environment"
  );
  const [captured, setCaptured] = useState<OptimizedImage | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  }, []);

  const startCamera = useCallback(
    async (mode: "environment" | "user") => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setStatus("denied");
        return;
      }

      stopCamera();
      setStatus("requesting");

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: mode },
            width: { ideal: 1280 },
            height: { ideal: 960 },
          },
          audio: false,
        });

        streamRef.current = stream;
        setStatus("active");

        requestAnimationFrame(() => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play().catch(() => {});
          }
        });
      } catch {
        setStatus("denied");
      }
    },
    [stopCamera]
  );

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  const handleCapture = async () => {
    if (!videoRef.current || isCapturing) return;
    setIsCapturing(true);
    try {
      const optimized = await optimizeImageSource(
        videoRef.current,
        lowBandwidthMode
      );
      setCaptured(optimized);
      stopCamera();
    } catch (err) {
      console.error("Failed to capture frame:", err);
    } finally {
      setIsCapturing(false);
    }
  };

  const handleRetake = () => {
    setCaptured(null);
    startCamera(facingMode);
  };

  const handleFlipCamera = () => {
    const nextMode = facingMode === "environment" ? "user" : "environment";
    setFacingMode(nextMode);
    if (status === "active") {
      startCamera(nextMode);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => {
            stopCamera();
            onBack();
          }}
          className="min-h-[44px] px-3 py-2 -ml-3 rounded-xl text-sm font-medium text-[#35523D] hover:bg-[#EFF4F0] inline-flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.common.back}</span>
        </button>

        <button
          type="button"
          onClick={() => {
            stopCamera();
            onSwitchToGallery();
          }}
          className="min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold text-[#15803D] bg-[#F2F7F3] hover:bg-[#E4EFE7] inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
        >
          <Upload className="w-4 h-4" />
          <span>{t.scanner.useGalleryInstead}</span>
        </button>
      </div>

      <div className="space-y-1">
        <h1 className="font-display text-2xl sm:text-3xl font-semibold text-[#142219]">
          {captured ? t.scanner.previewTitle : t.scanner.title}
        </h1>
        <p className="text-sm text-[#526658]">{t.scanner.subtitle}</p>
      </div>

      <div className="bg-white rounded-3xl border border-[#E2EAE4] overflow-hidden">
        {captured ? (
          <div className="space-y-5 p-5 sm:p-6">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#142219]">
              <img
                src={captured.dataUrl}
                alt="Captured fruit preview"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-xs text-[#526658]">
              {t.scanner.consentNote} ({Math.round(captured.sizeBytes / 1024)}{" "}
              KB · {captured.width}×{captured.height})
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleRetake}
                className="min-h-[48px] flex-1 px-5 py-3 rounded-xl border border-[#D8E3DB] bg-white hover:bg-[#F2F7F3] text-[#142219] text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.scanner.retakeBtn}</span>
              </button>
              <button
                type="button"
                onClick={() => onAnalyzeImage(captured)}
                className="min-h-[48px] flex-1 px-5 py-3 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>{t.scanner.analyzeBtn}</span>
              </button>
            </div>
          </div>
        ) : status === "prompt" || status === "requesting" ? (
          <div className="p-8 sm:p-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-[#ECFDF3] text-[#15803D] flex items-center justify-center mx-auto">
              <Camera className="w-8 h-8" />
            </div>
            <div className="max-w-md mx-auto space-y-2">
              <h2 className="font-display text-xl font-semibold text-[#142219]">
                {t.scanner.permissionTitle}
              </h2>
              <p className="text-sm text-[#526658] leading-relaxed">
                {t.scanner.permissionDesc}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                disabled={status === "requesting"}
                onClick={() => startCamera(facingMode)}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-[#15803D] hover:bg-[#166534] disabled:opacity-60 text-white text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
              >
                <Camera className="w-4 h-4" />
                <span>{t.scanner.grantPermission}</span>
              </button>
            </div>
          </div>
        ) : status === "denied" ? (
          <div className="p-8 sm:p-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <p className="text-sm text-[#4D6353] max-w-md mx-auto leading-relaxed">
              {t.scanner.permissionDenied}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => startCamera(facingMode)}
                className="min-h-[44px] px-5 py-2.5 rounded-xl border border-[#D8E3DB] text-sm font-semibold text-[#142219] hover:bg-[#F2F7F3] cursor-pointer"
              >
                {t.common.retry}
              </button>
              <button
                type="button"
                onClick={onSwitchToGallery}
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#15803D] text-white text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>{t.home.uploadPhotoBtn}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 sm:p-6 space-y-4">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              {/* Subtle viewfinder corner guides */}
              <div className="pointer-events-none absolute inset-6 border border-white/25 rounded-2xl" />
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleFlipCamera}
                className="min-h-[48px] px-4 py-2.5 rounded-xl border border-[#D8E3DB] bg-white hover:bg-[#F2F7F3] text-xs font-semibold text-[#142219] inline-flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{t.scanner.switchCamera}</span>
              </button>

              <button
                type="button"
                disabled={isCapturing}
                onClick={handleCapture}
                className="min-h-[48px] flex-1 sm:flex-initial sm:min-w-[200px] px-6 py-3 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Camera className="w-5 h-5" />
                <span>{t.scanner.captureBtn}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
