# FruitScan AI — Android Studio Setup & APK Build Guide

This repository contains both:
1. **Live Full-Stack Web App & Secure AI Backend** (`server.ts` + `src/`), running Gemini Vision (`gemini-4-hydrogen`) on the server so API keys are never exposed in client apps.
2. **Native Kotlin + Jetpack Compose Android Studio Project** (`android/`), using CameraX, Android Photo Picker, Room offline database, and Retrofit.

## 1. Prerequisites
- Android Studio Ladybug (2024.2.1) or newer
- JDK 17
- Android SDK 35 (`compileSdk = 35`, `minSdk = 24`)
- A deployed instance of the `server.ts` backend (for example, your Cloud Run URL or local machine IP on the same Wi-Fi).

## 2. Configure the Secure Backend URL
1. Open `android/app/build.gradle.kts`.
2. Replace `https://your-fruitscan-backend.run.app` in `buildConfigField("String", "API_BASE_URL", ...)` with your deployed backend URL.
3. Keep `GEMINI_API_KEY` solely in the backend environment variables — never inside the Android APK.

## 3. Open and Run in Android Studio
1. Launch Android Studio and select **File > Open**.
2. Choose the `android/` folder inside this project.
3. Let Gradle sync all dependencies (Jetpack Compose, CameraX 1.4.0, Room 2.6.1, Retrofit 2.11.0).
4. Connect a physical Android device (recommended for CameraX) or start an emulator, then click **Run (`Shift+F10`)**.

## 4. Build Debug & Release APKs

### Debug APK (for direct device testing)
```bash
cd android
./gradlew assembleDebug
```
Output APK: `android/app/build/outputs/apk/debug/app-debug.apk`

### Signed Release APK / Play Store AAB
1. In Android Studio, open **Build > Generate Signed App Bundle / APK**.
2. Choose **APK** or **Android App Bundle (AAB)** for Google Play Store.
3. Create or select your upload keystore (`.jks`), enter key alias and passwords.
4. Select the `release` build variant (ProGuard/R8 minification and resource shrinking are pre-configured in `app/build.gradle.kts`).

Or via CLI after configuring signing in `signingConfigs`:
```bash
cd android
./gradlew assembleRelease
./gradlew bundleRelease
```

## 5. Multilingual Support
Resource files are included for:
- English: `app/src/main/res/values/strings.xml`
- French: `app/src/main/res/values-fr/strings.xml`
- Haitian Creole: `app/src/main/res/values-ht/strings.xml`
