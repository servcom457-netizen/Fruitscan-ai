import React, { useState } from "react";
import { Leaf } from "lucide-react";

interface FruitArtworkProps {
  imageUrl?: string;
  name: string;
  scientificName?: string;
  accentHex?: string;
  className?: string;
}

export const FruitArtwork: React.FC<FruitArtworkProps> = ({
  imageUrl,
  name,
  scientificName = "",
  accentHex = "#15803D",
  className = "w-full h-full",
}) => {
  const [imgError, setImgError] = useState(false);

  if (imageUrl && !imgError) {
    return (
      <img
        src={imageUrl}
        alt={name}
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className={`${className} object-cover`}
      />
    );
  }

  // Clean botanical illustration fallback when no image or offline item without photo
  return (
    <div
      className={`${className} relative flex flex-col items-center justify-center overflow-hidden bg-[#EFF5F0] text-[#142219] p-4`}
      role="img"
      aria-label={name}
    >
      <svg
        viewBox="0 0 120 120"
        className="w-20 h-20 mb-2 shrink-0"
        aria-hidden="true"
      >
        <circle cx="60" cy="66" r="34" fill={accentHex} fillOpacity="0.14" />
        <circle
          cx="60"
          cy="66"
          r="26"
          fill={accentHex}
          fillOpacity="0.24"
          stroke={accentHex}
          strokeWidth="2.5"
        />
        <path
          d="M60 40 C60 28, 72 18, 84 22 C82 34, 70 42, 60 40 Z"
          fill="#15803D"
          fillOpacity="0.85"
        />
        <path
          d="M60 40 L60 26"
          stroke="#14532D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xs font-medium text-[#35523D] text-center line-clamp-1">
        {name}
      </span>
      {scientificName ? (
        <span className="text-[11px] italic text-[#5E7464] text-center line-clamp-1 mt-0.5 flex items-center gap-1">
          <Leaf className="w-3 h-3 text-emerald-700 shrink-0" />
          {scientificName}
        </span>
      ) : null}
    </div>
  );
};
