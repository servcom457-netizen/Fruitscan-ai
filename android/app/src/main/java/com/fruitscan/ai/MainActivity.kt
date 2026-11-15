package com.fruitscan.ai

import android.net.Uri
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.compose.setContent
import androidx.activity.result.PickVisualMediaRequest
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Bookmark
import androidx.compose.material.icons.filled.History
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import com.fruitscan.ai.data.local.FruitDatabase
import com.fruitscan.ai.data.local.SavedFruitEntity
import com.fruitscan.ai.data.model.FruitAnalysisResponse
import com.fruitscan.ai.data.model.IdentifyRequest
import com.fruitscan.ai.data.remote.FruitScanApi
import com.fruitscan.ai.ui.screens.*
import com.fruitscan.ai.ui.theme.FruitScanTheme
import com.fruitscan.ai.util.ImageOptimizer
import kotlinx.coroutines.launch
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val db = FruitDatabase.getInstance(applicationContext)
        val dao = db.fruitDao()
        val api = FruitScanApi.create()
        val json = Json { ignoreUnknownKeys = true }

        setContent {
            FruitScanTheme {
                val scope = rememberCoroutineScope()
                var currentRoute by remember { mutableStateOf("welcome") }
                var language by remember { mutableStateOf("en") }
                var lowBandwidth by remember { mutableStateOf(false) }
                var activeFruit by remember { mutableStateOf<FruitAnalysisResponse?>(null) }
                var activeEntityId by remember { mutableStateOf<String?>(null) }
                var errorMessage by remember { mutableStateOf<String?>(null) }

                val history by dao.observeHistory().collectAsState(initial = emptyList())
                val favorites by dao.observeFavorites().collectAsState(initial = emptyList())

                fun analyzeUri(uri: Uri) {
                    scope.launch {
                        currentRoute = "analyzing"
                        errorMessage = null
                        try {
                            val (base64, cachedFile) = ImageOptimizer.compressUriToBase64(
                                applicationContext,
                                uri,
                                lowBandwidth
                            )
                            val response = api.identifyFruit(
                                IdentifyRequest(imageBase64 = base64, language = language)
                            )
                            val id = "scan_${System.currentTimeMillis()}"
                            dao.upsert(
                                SavedFruitEntity(
                                    id = id,
                                    commonName = response.commonName,
                                    scientificName = response.scientificName,
                                    confidence = response.confidence,
                                    isFavorite = false,
                                    payloadJson = json.encodeToString(response),
                                    localImagePath = cachedFile.absolutePath,
                                    createdAtEpochMs = System.currentTimeMillis()
                                )
                            )
                            activeEntityId = id
                            activeFruit = response
                            currentRoute = "results"
                        } catch (e: Exception) {
                            errorMessage = e.localizedMessage ?: "Identification failed"
                            currentRoute = "home"
                        }
                    }
                }

                // Android Photo Picker (JPG, JPEG, PNG, WEBP)
                val photoPickerLauncher = rememberLauncherForActivityResult(
                    ActivityResultContracts.PickVisualMedia()
                ) { uri ->
                    if (uri != null) analyzeUri(uri)
                }

                val showBottomNav = currentRoute in listOf("home", "favorites", "history", "settings")

                Scaffold(
                    bottomBar = {
                        if (showBottomNav) {
                            NavigationBar {
                                NavigationBarItem(
                                    selected = currentRoute == "home",
                                    onClick = { currentRoute = "home" },
                                    icon = { Icon(Icons.Default.Home, contentDescription = null) },
                                    label = { Text(stringResource(R.string.nav_home)) }
                                )
                                NavigationBarItem(
                                    selected = currentRoute == "favorites",
                                    onClick = { currentRoute = "favorites" },
                                    icon = { Icon(Icons.Default.Bookmark, contentDescription = null) },
                                    label = { Text(stringResource(R.string.nav_favorites)) }
                                )
                                NavigationBarItem(
                                    selected = currentRoute == "history",
                                    onClick = { currentRoute = "history" },
                                    icon = { Icon(Icons.Default.History, contentDescription = null) },
                                    label = { Text(stringResource(R.string.nav_history)) }
                                )
                                NavigationBarItem(
                                    selected = currentRoute == "settings",
                                    onClick = { currentRoute = "settings" },
                                    icon = { Icon(Icons.Default.Settings, contentDescription = null) },
                                    label = { Text(stringResource(R.string.nav_settings)) }
                                )
                            }
                        }
                    }
                ) { padding ->
                    Box(modifier = Modifier.padding(padding)) {
                        when (currentRoute) {
                            "welcome" -> WelcomeScreen(
                                onGetStarted = { currentRoute = "home" },
                                onScanNow = { currentRoute = "scanner" }
                            )
                            "home" -> HomeScreen(
                                onScanClick = { currentRoute = "scanner" },
                                onUploadClick = {
                                    photoPickerLauncher.launch(
                                        PickVisualMediaRequest(ActivityResultContracts.PickVisualMedia.ImageOnly)
                                    )
                                },
                                recentHistory = history,
                                onSelectSaved = { entity ->
                                    activeEntityId = entity.id
                                    activeFruit = json.decodeFromString<FruitAnalysisResponse>(entity.payloadJson)
                                    currentRoute = "results"
                                }
                            )
                            "scanner" -> CameraScannerScreen(
                                onBack = { currentRoute = "home" },
                                onAnalyzeUri = ::analyzeUri
                            )
                            "analyzing" -> AnalyzingScreen()
                            "results" -> activeFruit?.let { fruit ->
                                val isFav = favorites.any { it.id == activeEntityId }
                                ResultDetailScreens(
                                    fruit = fruit,
                                    isFavorite = isFav,
                                    onToggleFavorite = {
                                        activeEntityId?.let { id ->
                                            scope.launch { dao.setFavorite(id, !isFav) }
                                        }
                                    },
                                    onBack = { currentRoute = "home" }
                                )
                            }
                            "favorites" -> SavedListScreen(
                                title = stringResource(R.string.nav_favorites),
                                itemsList = favorites,
                                onSelect = { entity ->
                                    activeEntityId = entity.id
                                    activeFruit = json.decodeFromString<FruitAnalysisResponse>(entity.payloadJson)
                                    currentRoute = "results"
                                },
                                onDelete = { id -> scope.launch { dao.setFavorite(id, false) } }
                            )
                            "history" -> SavedListScreen(
                                title = stringResource(R.string.nav_history),
                                itemsList = history,
                                onSelect = { entity ->
                                    activeEntityId = entity.id
                                    activeFruit = json.decodeFromString<FruitAnalysisResponse>(entity.payloadJson)
                                    currentRoute = "results"
                                },
                                onDelete = { id -> scope.launch { dao.deleteById(id) } },
                                onClearAll = { scope.launch { dao.clearNonFavoriteHistory() } }
                            )
                            "settings" -> SettingsScreen(
                                selectedLanguage = language,
                                lowBandwidthMode = lowBandwidth,
                                onSelectLanguage = { language = it },
                                onToggleLowBandwidth = { lowBandwidth = it },
                                onClearHistory = { scope.launch { dao.clearNonFavoriteHistory() } }
                            )
                        }
                    }
                }
            }
        }
    }
}
