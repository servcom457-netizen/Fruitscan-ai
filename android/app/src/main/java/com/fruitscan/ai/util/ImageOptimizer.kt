package com.fruitscan.ai.util

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.net.Uri
import android.util.Base64
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.io.ByteArrayOutputStream
import java.io.File
import kotlin.math.max

/**
 * Memory-safe image downscaler and JPEG compressor optimized for
 * low-end Android devices and slow mobile connections.
 */
object ImageOptimizer {
    suspend fun compressUriToBase64(
        context: Context,
        uri: Uri,
        lowBandwidthMode: Boolean
    ): Pair<String, File> = withContext(Dispatchers.IO) {
        val maxDimension = if (lowBandwidthMode) 640 else 1024
        val quality = if (lowBandwidthMode) 70 else 82

        val bounds = BitmapFactory.Options().apply { inJustDecodeBounds = true }
        context.contentResolver.openInputStream(uri)?.use {
            BitmapFactory.decodeStream(it, null, bounds)
        }

        val sampleSize = calculateInSampleSize(bounds.outWidth, bounds.outHeight, maxDimension)
        val decodeOpts = BitmapFactory.Options().apply { inSampleSize = sampleSize }

        val bitmap = context.contentResolver.openInputStream(uri)?.use {
            BitmapFactory.decodeStream(it, null, decodeOpts)
        } ?: error("Unable to decode selected image")

        val scaled = scaleBitmapIfNeeded(bitmap, maxDimension)
        if (scaled !== bitmap) bitmap.recycle()

        val outputStream = ByteArrayOutputStream()
        scaled.compress(Bitmap.CompressFormat.JPEG, quality, outputStream)
        val bytes = outputStream.toByteArray()

        val cachedFile = File(context.cacheDir, "scan_${System.currentTimeMillis()}.jpg")
        cachedFile.writeBytes(bytes)
        scaled.recycle()

        val base64 = Base64.encodeToString(bytes, Base64.NO_WRAP)
        base64 to cachedFile
    }

    private fun calculateInSampleSize(width: Int, height: Int, reqSize: Int): Int {
        var inSampleSize = 1
        while ((width / inSampleSize) > reqSize * 2 || (height / inSampleSize) > reqSize * 2) {
            inSampleSize *= 2
        }
        return inSampleSize
    }

    private fun scaleBitmapIfNeeded(bitmap: Bitmap, maxDim: Int): Bitmap {
        val largest = max(bitmap.width, bitmap.height)
        if (largest <= maxDim) return bitmap
        val ratio = maxDim.toFloat() / largest.toFloat()
        return Bitmap.createScaledBitmap(
            bitmap,
            (bitmap.width * ratio).toInt().coerceAtLeast(1),
            (bitmap.height * ratio).toInt().coerceAtLeast(1),
            true
        )
    }
}
