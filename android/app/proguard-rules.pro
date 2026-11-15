# Keep kotlinx.serialization models for Retrofit JSON parsing
-keepattributes *Annotation*,InnerClasses
-dontnote kotlinx.serialization.SerializationKt
-keep,includedescriptorclasses class com.fruitscan.ai.data.model.**$$serializer { *; }
-keepclassmembers class com.fruitscan.ai.data.model.** {
    *** Companion;
}
-keepclasseswithmembers class com.fruitscan.ai.data.model.** {
    kotlinx.serialization.KSerializer serializer(...);
}
