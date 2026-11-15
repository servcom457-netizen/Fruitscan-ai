package com.fruitscan.ai.data.model

import kotlinx.serialization.Serializable

@Serializable
data class LocalNames(
    val en: String = "",
    val fr: String = "",
    val ht: String = ""
)

@Serializable
data class AlternativeMatch(
    val commonName: String,
    val scientificName: String,
    val confidence: Int,
    val reason: String
)

@Serializable
data class NutritionalComposition(
    val servingSize: String,
    val calories: Double,
    val carbohydratesG: Double,
    val fiberG: Double,
    val sugarsG: Double,
    val proteinG: Double,
    val fatG: Double,
    val waterPercent: Double
)

@Serializable
data class VitaminMineral(
    val name: String,
    val amount: String,
    val dailyValuePercent: Int,
    val role: String
)

@Serializable
data class HealthBenefit(
    val title: String,
    val explanation: String,
    val evidenceNote: String
)

@Serializable
data class IdentifyRequest(
    val imageBase64: String,
    val mimeType: String = "image/jpeg",
    val language: String = "en"
)

@Serializable
data class FruitAnalysisResponse(
    val isFruit: Boolean,
    val confidence: Int,
    val confidenceLevel: String,
    val commonName: String,
    val scientificName: String,
    val localNames: LocalNames,
    val alternativeMatches: List<AlternativeMatch> = emptyList(),
    val originAndDistribution: String,
    val description: String,
    val nutritionalComposition: NutritionalComposition,
    val vitaminsAndMinerals: List<VitaminMineral> = emptyList(),
    val healthBenefits: List<HealthBenefit> = emptyList(),
    val precautionsAndAllergies: List<String> = emptyList(),
    val bestWaysToConsume: List<String> = emptyList(),
    val storageRecommendations: String,
    val uncertainReason: String = "",
    val analyzedAt: String = "",
    val language: String = "en"
)
