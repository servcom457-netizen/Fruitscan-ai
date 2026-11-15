import React, { useEffect, useState } from "react";
import { Loader2, CheckCircle2, X } from "lucide-react";
import { UITranslations } from "../data/translations";

interface AnalyzingScreenProps {
  t: UITranslations;
  previewDataUrl: string | null;
  onCancel: () => void;
}

export const AnalyzingScreen: React.FC<AnalyzingScreenProps> = ({
  t,
  previewDataUrl,
  onCancel,
}) => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const t1 = window.setTimeout(() => setStepIndex(1), 650);
    const t2 = window.setTimeout(() => setStepIndex(2), 1800);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  const steps = [t.analyzing.step1, t.analyzing.step2, t.analyzing.step3];

  return (
    <div className="max-w-xl mx-auto py-8 sm:py-12">
      <div className="bg-white rounded-3xl border border-[#E2EAE4] p-6 sm:p-8 space-y-6 text-center">
        {previewDataUrl ? (
          <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden border border-[#E2EAE4] bg-[#EFF5F0]">
            <img
              src={previewDataUrl}
              alt="Fruit being analyzed"
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}

        <div className="space-y-2">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ECFDF3] text-[#15803D]">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
          <h1 className="font-display text-2xl font-semibold text-[#142219]">
            {t.analyzing.title}
          </h1>
          <p className="text-sm text-[#526658] max-w-md mx-auto">
            {t.analyzing.subtitle}
          </p>
        </div>

        <ol className="text-left max-w-sm mx-auto space-y-3 pt-2">
          {steps.map((label, idx) => {
            const done = idx < stepIndex;
            const current = idx === stepIndex;
            return (
              <li
                key={label}
                className={`flex items-center gap-3 text-sm ${
                  done
                    ? "text-[#15803D] font-medium"
                    : current
                    ? "text-[#142219] font-semibold"
                    : "text-[#8BA091]"
                }`}
              >
                {done ? (
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                ) : current ? (
                  <Loader2 className="w-4 h-4 text-[#15803D] animate-spin shrink-0" />
                ) : (
                  <span className="w-4 h-4 rounded-full border border-[#D1DDD4] shrink-0" />
                )}
                <span>{label}</span>
              </li>
            );
          })}
        </ol>

        <div className="pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="min-h-[44px] px-5 py-2 rounded-xl border border-[#D8E3DB] text-sm font-medium text-[#4D6353] hover:bg-[#F2F7F3] inline-flex items-center gap-1.5 cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span>{t.analyzing.cancelBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
