package com.fruitscan.ai.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

val ForestGreen = Color(0xFF15803D)
val DeepLeaf = Color(0xFF14532D)
val SoftMint = Color(0xFFECFDF3)
val BotanicalCanvas = Color(0xFFFAFBF9)
val BotanicalCard = Color(0xFFFFFFFF)
val BotanicalBorder = Color(0xFFE2EAE4)
val BotanicalInk = Color(0xFF142219)
val BotanicalMuted = Color(0xFF526658)

private val FruitScanLightColors = lightColorScheme(
    primary = ForestGreen,
    onPrimary = Color.White,
    primaryContainer = SoftMint,
    onPrimaryContainer = DeepLeaf,
    background = BotanicalCanvas,
    onBackground = BotanicalInk,
    surface = BotanicalCard,
    onSurface = BotanicalInk,
    surfaceVariant = Color(0xFFEFF4F0),
    onSurfaceVariant = BotanicalMuted,
    outline = BotanicalBorder
)

@Composable
fun FruitScanTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = FruitScanLightColors,
        content = content
    )
}
