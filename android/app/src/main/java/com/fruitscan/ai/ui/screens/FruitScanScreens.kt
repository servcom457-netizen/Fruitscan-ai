package com.fruitscan.ai.ui.screens

import android.content.Intent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.fruitscan.ai.R
import com.fruitscan.ai.data.local.SavedFruitEntity
import com.fruitscan.ai.data.model.FruitAnalysisResponse

@Composable
fun WelcomeScreen(
    onGetStarted: () -> Unit,
    onScanNow: () -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        verticalArrangement = Arrangement.SpaceBetween
    ) {
        Spacer(Modifier.height(16.dp))
        Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
            Text(
                text = "FruitScan AI",
                style = MaterialTheme.typography.headlineLarge,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.primary
            )
            Text(
                text = "Identify any fruit and understand what nourishes you.",
                style = MaterialTheme.typography.headlineSmall
            )
            Text(
                text = "Supports Haitian, tropical, and international fruits in English, French, and Haitian Creole — with offline access to saved favorites and history.",
                style = MaterialTheme.typography.bodyLarge,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
        Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
            Button(
                onClick = onScanNow,
                modifier = Modifier.fillMaxWidth().height(52.dp),
                shape = RoundedCornerShape(16.dp)
            ) {
                Icon(Icons.Default.CameraAlt, contentDescription = null)
                Spacer(Modifier.width(8.dp))
                Text(stringResource(R.string.scan_fruit))
            }
            OutlinedButton(
                onClick = onGetStarted,
                modifier = Modifier.fillMaxWidth().height(52.dp),
                shape = RoundedCornerShape(16.dp)
            ) {
                Text("Explore Home")
            }
        }
    }
}

@Composable
fun HomeScreen(
    onScanClick: () -> Unit,
    onUploadClick: () -> Unit,
    recentHistory: List<SavedFruitEntity>,
    onSelectSaved: (SavedFruitEntity) -> Unit
) {
    LazyColumn(
        modifier = Modifier.fillMaxSize().padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Card(
                shape = RoundedCornerShape(24.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
            ) {
                Column(
                    modifier = Modifier.padding(20.dp),
                    verticalArrangement = Arrangement.spacedBy(14.dp)
                ) {
                    Text(
                        text = "Discover Haitian & Global Fruits",
                        style = MaterialTheme.typography.titleLarge,
                        fontWeight = FontWeight.SemiBold
                    )
                    Text(
                        text = "Use your camera or photo picker to recognize fruits and view nutrients, precautions, and storage tips.",
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    Button(
                        onClick = onScanClick,
                        modifier = Modifier.fillMaxWidth().height(52.dp),
                        shape = RoundedCornerShape(14.dp)
                    ) {
                        Icon(Icons.Default.CameraAlt, contentDescription = null)
                        Spacer(Modifier.width(8.dp))
                        Text(stringResource(R.string.scan_fruit))
                    }
                    OutlinedButton(
                        onClick = onUploadClick,
                        modifier = Modifier.fillMaxWidth().height(50.dp),
                        shape = RoundedCornerShape(14.dp)
                    ) {
                        Icon(Icons.Default.PhotoLibrary, contentDescription = null)
                        Spacer(Modifier.width(8.dp))
                        Text(stringResource(R.string.upload_photo))
                    }
                }
            }
        }

        if (recentHistory.isNotEmpty()) {
            item {
                Text(
                    text = "Recent Scans (Offline Ready)",
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.SemiBold
                )
            }
            items(recentHistory.take(5)) { item ->
                Card(
                    onClick = { onSelectSaved(item) },
                    shape = RoundedCornerShape(16.dp),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Row(
                        modifier = Modifier.padding(16.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Column(modifier = Modifier.weight(1f)) {
                            Text(item.commonName, fontWeight = FontWeight.SemiBold)
                            Text(
                                "${item.scientificName} · ${item.confidence}% match",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                        Icon(Icons.Default.ChevronRight, contentDescription = null)
                    }
                }
            }
        }
    }
}

@Composable
fun AnalyzingScreen() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp),
            modifier = Modifier.padding(24.dp)
        ) {
            CircularProgressIndicator()
            Text(
                text = "Analyzing fruit image...",
                style = MaterialTheme.typography.titleMedium
            )
            Text(
                text = "Checking botanical traits, confidence, and nutritional profile.",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}

@Composable
fun ResultDetailScreens(
    fruit: FruitAnalysisResponse,
    isFavorite: Boolean,
    onToggleFavorite: () -> Unit,
    onBack: () -> Unit
) {
    val context = LocalContext.current
    var selectedTab by remember { mutableIntStateOf(0) } // 0 = Overview, 1 = Nutrition, 2 = Health Benefits

    LazyColumn(
        modifier = Modifier.fillMaxSize().padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                IconButton(onClick = onBack) {
                    Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Back")
                }
                Row {
                    IconButton(onClick = onToggleFavorite) {
                        Icon(
                            if (isFavorite) Icons.Default.Bookmark else Icons.Default.BookmarkBorder,
                            contentDescription = "Save to Favorites",
                            tint = MaterialTheme.colorScheme.primary
                        )
                    }
                    IconButton(onClick = {
                        val intent = Intent(Intent.ACTION_SEND).apply {
                            type = "text/plain"
                            putExtra(
                                Intent.EXTRA_TEXT,
                                "${fruit.commonName} (${fruit.scientificName}) - ${fruit.description}"
                            )
                        }
                        context.startActivity(Intent.createChooser(intent, "Share Fruit Info"))
                    }) {
                        Icon(Icons.Default.Share, contentDescription = "Share")
                    }
                }
            }
        }

        if (!fruit.isFruit || fruit.confidence < 35) {
            item {
                Card(shape = RoundedCornerShape(20.dp)) {
                    Column(modifier = Modifier.padding(20.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        Text("No fruit clearly detected", style = MaterialTheme.typography.titleLarge)
                        Text(fruit.uncertainReason.ifBlank { "Please capture a clearer, well-lit image." })
                    }
                }
            }
            return@LazyColumn
        }

        item {
            Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                Text(
                    text = "${fruit.scientificName} · ${fruit.confidence}% confidence",
                    style = MaterialTheme.typography.bodySmall,
                    fontStyle = FontStyle.Italic,
                    color = MaterialTheme.colorScheme.primary
                )
                Text(
                    text = fruit.commonName,
                    style = MaterialTheme.typography.headlineMedium,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = "EN: ${fruit.localNames.en} · FR: ${fruit.localNames.fr} · HT: ${fruit.localNames.ht}",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }

        item {
            TabRow(selectedTabIndex = selectedTab) {
                Tab(selected = selectedTab == 0, onClick = { selectedTab = 0 }, text = { Text("Overview") })
                Tab(selected = selectedTab == 1, onClick = { selectedTab = 1 }, text = { Text("Nutrition") })
                Tab(selected = selectedTab == 2, onClick = { selectedTab = 2 }, text = { Text("Benefits") })
            }
        }

        when (selectedTab) {
            0 -> {
                item {
                    Card(shape = RoundedCornerShape(20.dp)) {
                        Column(modifier = Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                            Text("Description", fontWeight = FontWeight.SemiBold)
                            Text(fruit.description)
                            Text("Origin & Distribution", fontWeight = FontWeight.SemiBold)
                            Text(fruit.originAndDistribution)
                            Text("Storage Recommendations", fontWeight = FontWeight.SemiBold)
                            Text(fruit.storageRecommendations)
                        }
                    }
                }
            }
            1 -> {
                item {
                    val n = fruit.nutritionalComposition
                    Card(shape = RoundedCornerShape(20.dp)) {
                        Column(modifier = Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                            Text("Per ${n.servingSize}", fontWeight = FontWeight.SemiBold)
                            Text("Calories: ${n.calories} kcal")
                            Text("Carbohydrates: ${n.carbohydratesG} g · Fiber: ${n.fiberG} g · Sugars: ${n.sugarsG} g")
                            Text("Protein: ${n.proteinG} g · Fat: ${n.fatG} g · Water: ${n.waterPercent}%")
                            HorizontalDivider(Modifier.padding(vertical = 8.dp))
                            Text("Vitamins & Minerals", fontWeight = FontWeight.SemiBold)
                            fruit.vitaminsAndMinerals.forEach { vm ->
                                Text("• ${vm.name}: ${vm.amount} (${vm.dailyValuePercent}% DV) — ${vm.role}")
                            }
                        }
                    }
                }
            }
            2 -> {
                item {
                    Card(
                        shape = RoundedCornerShape(20.dp),
                        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer)
                    ) {
                        Text(
                            text = stringResource(R.string.medical_disclaimer),
                            modifier = Modifier.padding(16.dp),
                            style = MaterialTheme.typography.bodySmall
                        )
                    }
                }
                items(fruit.healthBenefits) { benefit ->
                    Card(shape = RoundedCornerShape(16.dp), modifier = Modifier.fillMaxWidth()) {
                        Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(4.dp)) {
                            Text(benefit.title, fontWeight = FontWeight.SemiBold)
                            Text(benefit.explanation, style = MaterialTheme.typography.bodyMedium)
                        }
                    }
                }
                item {
                    Card(shape = RoundedCornerShape(16.dp), modifier = Modifier.fillMaxWidth()) {
                        Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(6.dp)) {
                            Text("Precautions & Allergies", fontWeight = FontWeight.SemiBold)
                            fruit.precautionsAndAllergies.forEach { Text("• $it") }
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun SavedListScreen(
    title: String,
    itemsList: List<SavedFruitEntity>,
    onSelect: (SavedFruitEntity) -> Unit,
    onDelete: (String) -> Unit,
    onClearAll: (() -> Unit)? = null
) {
    Column(modifier = Modifier.fillMaxSize().padding(16.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(title, style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.Bold)
            if (onClearAll != null && itemsList.isNotEmpty()) {
                TextButton(onClick = onClearAll) { Text("Clear All") }
            }
        }
        LazyColumn(verticalArrangement = Arrangement.spacedBy(10.dp)) {
            items(itemsList, key = { it.id }) { item ->
                Card(onClick = { onSelect(item) }, shape = RoundedCornerShape(16.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth().padding(16.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Column(modifier = Modifier.weight(1f)) {
                            Text(item.commonName, fontWeight = FontWeight.SemiBold)
                            Text(
                                "${item.scientificName} · ${item.confidence}%",
                                style = MaterialTheme.typography.bodySmall
                            )
                        }
                        IconButton(onClick = { onDelete(item.id) }) {
                            Icon(Icons.Default.Delete, contentDescription = "Delete")
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun SettingsScreen(
    selectedLanguage: String,
    lowBandwidthMode: Boolean,
    onSelectLanguage: (String) -> Unit,
    onToggleLowBandwidth: (Boolean) -> Unit,
    onClearHistory: () -> Unit
) {
    LazyColumn(
        modifier = Modifier.fillMaxSize().padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Text("Settings & Privacy", style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.Bold)
        }
        item {
            Card(shape = RoundedCornerShape(20.dp)) {
                Column(modifier = Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                    Text("Language", fontWeight = FontWeight.SemiBold)
                    listOf("en" to "English", "fr" to "Français", "ht" to "Kreyòl Ayisyen").forEach { (code, label) ->
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            RadioButton(selected = selectedLanguage == code, onClick = { onSelectLanguage(code) })
                            Text(label)
                        }
                    }
                }
            }
        }
        item {
            Card(shape = RoundedCornerShape(20.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth().padding(18.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text("Slow Internet / Low-End Optimization", fontWeight = FontWeight.SemiBold)
                        Text(
                            "Compresses photos to max 640px before sending.",
                            style = MaterialTheme.typography.bodySmall
                        )
                    }
                    Switch(checked = lowBandwidthMode, onCheckedChange = onToggleLowBandwidth)
                }
            }
        }
        item {
            Card(shape = RoundedCornerShape(20.dp)) {
                Column(modifier = Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Text("Privacy Policy", fontWeight = FontWeight.SemiBold)
                    Text("• Permissions requested only when scanning or picking a photo.")
                    Text("• Images are analyzed securely and never stored remotely.")
                    Text("• Favorites and scan history remain stored locally on this device.")
                    OutlinedButton(onClick = onClearHistory) {
                        Text("Delete Scan History")
                    }
                }
            }
        }
    }
}
