export interface OptimizedImage {
  dataUrl: string;
  base64: string;
  mimeType: string;
  width: number;
  height: number;
  sizeBytes: number;
}

const ALLOWED_EXTENSIONS = /\.(jpe?g|png|webp)$/i;
const ALLOWED_MIME = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
]);

export function isSupportedImageFile(file: File): boolean {
  if (file.type && ALLOWED_MIME.has(file.type.toLowerCase())) {
    return true;
  }
  return ALLOWED_EXTENSIONS.test(file.name);
}

/**
 * Downscales and compresses images on-device before upload.
 * Optimized for low-end devices and slow mobile connections.
 */
export async function optimizeImageSource(
  source: File | HTMLVideoElement | string,
  lowBandwidthMode: boolean
): Promise<OptimizedImage> {
  const maxDimension = lowBandwidthMode ? 640 : 1024;
  const quality = lowBandwidthMode ? 0.72 : 0.84;

  const imgOrVideo = await loadDrawable(source);
  const srcWidth =
    imgOrVideo instanceof HTMLVideoElement
      ? imgOrVideo.videoWidth
      : imgOrVideo.naturalWidth;
  const srcHeight =
    imgOrVideo instanceof HTMLVideoElement
      ? imgOrVideo.videoHeight
      : imgOrVideo.naturalHeight;

  if (!srcWidth || !srcHeight) {
    throw new Error("Invalid image dimensions");
  }

  let targetWidth = srcWidth;
  let targetHeight = srcHeight;
  if (srcWidth > maxDimension || srcHeight > maxDimension) {
    const ratio = Math.min(maxDimension / srcWidth, maxDimension / srcHeight);
    targetWidth = Math.round(srcWidth * ratio);
    targetHeight = Math.round(srcHeight * ratio);
  }

  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas 2D context unavailable");
  }

  ctx.drawImage(imgOrVideo, 0, 0, targetWidth, targetHeight);

  const mimeType = "image/jpeg";
  const dataUrl = canvas.toDataURL(mimeType, quality);
  const base64 = dataUrl.split(",")[1] ?? "";
  const sizeBytes = Math.round((base64.length * 3) / 4);

  return {
    dataUrl,
    base64,
    mimeType,
    width: targetWidth,
    height: targetHeight,
    sizeBytes,
  };
}

function loadDrawable(
  source: File | HTMLVideoElement | string
): Promise<HTMLImageElement | HTMLVideoElement> {
  if (source instanceof HTMLVideoElement) {
    return Promise.resolve(source);
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    let objectUrl: string | null = null;

    img.onload = () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      resolve(img);
    };
    img.onerror = () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      reject(new Error("Failed to load image"));
    };

    if (typeof source === "string") {
      img.src = source;
    } else {
      objectUrl = URL.createObjectURL(source);
      img.src = objectUrl;
    }
  });
}
