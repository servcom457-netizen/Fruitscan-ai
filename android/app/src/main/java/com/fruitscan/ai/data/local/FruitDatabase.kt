package com.fruitscan.ai.data.local

import android.content.Context
import androidx.room.Dao
import androidx.room.Database
import androidx.room.Entity
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.PrimaryKey
import androidx.room.Query
import androidx.room.Room
import androidx.room.RoomDatabase
import kotlinx.coroutines.flow.Flow

@Entity(tableName = "saved_fruits")
data class SavedFruitEntity(
    @PrimaryKey val id: String,
    val commonName: String,
    val scientificName: String,
    val confidence: Int,
    val isFavorite: Boolean,
    val payloadJson: String,
    val localImagePath: String?,
    val createdAtEpochMs: Long
)

@Dao
interface FruitDao {
    @Query("SELECT * FROM saved_fruits ORDER BY createdAtEpochMs DESC")
    fun observeHistory(): Flow<List<SavedFruitEntity>>

    @Query("SELECT * FROM saved_fruits WHERE isFavorite = 1 ORDER BY createdAtEpochMs DESC")
    fun observeFavorites(): Flow<List<SavedFruitEntity>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsert(entity: SavedFruitEntity)

    @Query("UPDATE saved_fruits SET isFavorite = :favorite WHERE id = :id")
    suspend fun setFavorite(id: String, favorite: Boolean)

    @Query("DELETE FROM saved_fruits WHERE id = :id")
    suspend fun deleteById(id: String)

    @Query("DELETE FROM saved_fruits WHERE isFavorite = 0")
    suspend fun clearNonFavoriteHistory()

    @Query("DELETE FROM saved_fruits")
    suspend fun clearAll()
}

@Database(entities = [SavedFruitEntity::class], version = 1, exportSchema = false)
abstract class FruitDatabase : RoomDatabase() {
    abstract fun fruitDao(): FruitDao

    companion object {
        @Volatile
        private var instance: FruitDatabase? = null

        fun getInstance(context: Context): FruitDatabase {
            return instance ?: synchronized(this) {
                instance ?: Room.databaseBuilder(
                    context.applicationContext,
                    FruitDatabase::class.java,
                    "fruitscan_offline.db"
                ).build().also { instance = it }
            }
        }
    }
}
