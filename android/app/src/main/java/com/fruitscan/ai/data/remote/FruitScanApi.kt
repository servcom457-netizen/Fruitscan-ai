package com.fruitscan.ai.data.remote

import com.fruitscan.ai.BuildConfig
import com.fruitscan.ai.data.model.FruitAnalysisResponse
import com.fruitscan.ai.data.model.IdentifyRequest
import com.jakewharton.retrofit2.converter.kotlinx.serialization.asConverterFactory
import kotlinx.serialization.json.Json
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.http.Body
import retrofit2.http.POST
import java.util.concurrent.TimeUnit

interface FruitScanApi {
    @POST("api/identify")
    suspend fun identifyFruit(@Body request: IdentifyRequest): FruitAnalysisResponse

    companion object {
        private val json = Json {
            ignoreUnknownKeys = true
            coerceInputValues = true
        }

        fun create(baseUrl: String = BuildConfig.API_BASE_URL): FruitScanApi {
            val client = OkHttpClient.Builder()
                .connectTimeout(20, TimeUnit.SECONDS)
                .readTimeout(45, TimeUnit.SECONDS)
                .writeTimeout(30, TimeUnit.SECONDS)
                .build()

            val normalizedBase = if (baseUrl.endsWith("/")) baseUrl else "$baseUrl/"

            return Retrofit.Builder()
                .baseUrl(normalizedBase)
                .client(client)
                .addConverterFactory(json.asConverterFactory("application/json".toMediaType()))
                .build()
                .create(FruitScanApi::class.java)
        }
    }
}
