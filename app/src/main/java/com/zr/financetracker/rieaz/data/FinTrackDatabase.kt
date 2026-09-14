package com.zr.financetracker.rieaz.data

import android.content.Context
import androidx.room.*
import androidx.sqlite.db.SupportSQLiteDatabase
import com.squareup.moshi.JsonClass
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.launch

@JsonClass(generateAdapter = true)
@Entity(tableName = "notes")
data class Note(
    @PrimaryKey val id: String,
    val title: String,
    val content: String,
    val category: String, // "Finance", "Budget", "Shopping", "Personal", "Notes"
    val date: String,
    val timestamp: Long = System.currentTimeMillis()
)

@Entity(tableName = "transactions")
data class Transaction(
    @PrimaryKey val id: String, // e.g. "t-1718000000000"
    val title: String,
    val amount: Double,
    val category: String, // Food | Rent | Transport | Health | Education | Entertainment | Utility | Shopping | Income | Other
    val type: String, // "expense" | "income"
    val date: String, // "YYYY-MM-DD"
    val month: String, // "January", "February" ... "December"
    val merchant: String? = null
)

@Entity(tableName = "budgets")
data class Budget(
    @PrimaryKey val category: String, // matches Transaction category
    val limitAmount: Double,
    val spentAmount: Double,
    val icon: String,
    val statusMessage: String
)

@Entity(tableName = "merchant_budgets")
data class MerchantBudget(
    @PrimaryKey val merchant: String, // case-insensitive main ID
    val limitAmount: Double,
    val spentAmount: Double,
    val icon: String,
    val statusMessage: String
)

@Entity(tableName = "user_profile")
data class UserProfile(
    @PrimaryKey val id: Int = 1,
    val name: String,
    val currency: String, // default: "৳"
    val language: String, // "en" or "bn"
    val notifyTransactions: Boolean,
    val notifyBudgetAlerts: Boolean
)

@Dao
interface TransactionDao {
    @Query("SELECT * FROM transactions ORDER BY date DESC, id DESC")
    fun getAllTransactionsFlow(): Flow<List<Transaction>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertTransaction(transaction: Transaction)

    @Query("SELECT * FROM transactions WHERE id = :id LIMIT 1")
    suspend fun getTransactionById(id: String): Transaction?

    @Query("DELETE FROM transactions WHERE id = :id")
    suspend fun deleteTransactionById(id: String)

    @Query("DELETE FROM transactions")
    suspend fun clearAllTransactions()
}

@Dao
interface BudgetDao {
    @Query("SELECT * FROM budgets")
    fun getAllBudgetsFlow(): Flow<List<Budget>>

    @Query("SELECT * FROM budgets")
    suspend fun getAllBudgetsDirect(): List<Budget>

    @Query("SELECT * FROM budgets WHERE category = :category LIMIT 1")
    suspend fun getBudgetByCategory(category: String): Budget?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertBudget(budget: Budget)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertBudgets(budgets: List<Budget>)

    @Query("UPDATE budgets SET spentAmount = :spent, statusMessage = :status WHERE category = :category")
    suspend fun updateSpentAmount(category: String, spent: Double, status: String)

    @Query("DELETE FROM budgets")
    suspend fun clearAllBudgets()
}

@Dao
interface MerchantBudgetDao {
    @Query("SELECT * FROM merchant_budgets")
    fun getAllMerchantBudgetsFlow(): Flow<List<MerchantBudget>>

    @Query("SELECT * FROM merchant_budgets")
    suspend fun getAllMerchantBudgetsDirect(): List<MerchantBudget>

    @Query("SELECT * FROM merchant_budgets WHERE merchant = :merchant LIMIT 1")
    suspend fun getMerchantBudget(merchant: String): MerchantBudget?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertMerchantBudget(merchantBudget: MerchantBudget)

    @Query("DELETE FROM merchant_budgets WHERE merchant = :merchant")
    suspend fun deleteMerchantBudget(merchant: String)

    @Query("DELETE FROM merchant_budgets")
    suspend fun clearAllMerchantBudgets()
}

@Dao
interface UserProfileDao {
    @Query("SELECT * FROM user_profile WHERE id = 1 LIMIT 1")
    fun getUserProfileFlow(): Flow<UserProfile?>

    @Query("SELECT * FROM user_profile WHERE id = 1 LIMIT 1")
    suspend fun getUserProfileDirect(): UserProfile?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun saveUserProfile(profile: UserProfile)

    @Query("DELETE FROM user_profile")
    suspend fun clearUserProfile()
}

@Dao
interface NoteDao {
    @Query("SELECT * FROM notes ORDER BY timestamp DESC")
    fun getAllNotesFlow(): Flow<List<Note>>

    @Query("SELECT * FROM notes ORDER BY timestamp DESC")
    suspend fun getAllNotesDirect(): List<Note>

    @Query("SELECT * FROM notes WHERE id = :id LIMIT 1")
    suspend fun getNoteById(id: String): Note?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertNote(note: Note)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertNotes(notes: List<Note>)

    @Query("DELETE FROM notes WHERE id = :id")
    suspend fun deleteNoteById(id: String)

    @Query("DELETE FROM notes")
    suspend fun clearAllNotes()
}

@Database(
    entities = [Transaction::class, Budget::class, MerchantBudget::class, UserProfile::class, Note::class],
    version = 2,
    exportSchema = false
)
abstract class AppDatabase : RoomDatabase() {
    abstract fun transactionDao(): TransactionDao
    abstract fun budgetDao(): BudgetDao
    abstract fun merchantBudgetDao(): MerchantBudgetDao
    abstract fun userProfileDao(): UserProfileDao
    abstract fun noteDao(): NoteDao

    companion object {
        @Volatile
        private var INSTANCE: AppDatabase? = null

        fun getDatabase(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "fintrack_db"
                )
                .fallbackToDestructiveMigration()
                .addCallback(DatabaseCallback())
                .build()
                INSTANCE = instance
                instance
            }
        }

        private class DatabaseCallback : Callback() {
            override fun onCreate(db: SupportSQLiteDatabase) {
                super.onCreate(db)
                // Seeding initial budget data in IO thread
                CoroutineScope(Dispatchers.IO).launch {
                    val database = INSTANCE
                    if (database != null) {
                        seedBudgets(database.budgetDao())
                        seedUserProfile(database.userProfileDao())
                        seedNotes(database.noteDao())
                    }
                }
            }

            private suspend fun seedBudgets(budgetDao: BudgetDao) {
                val initialBudgets = listOf(
                    Budget("Food", 25000.0, 0.0, "Food", "Your Food spending is on track"),
                    Budget("Rent", 15000.0, 0.0, "Rent", "Your Rent spending is on track"),
                    Budget("Transport", 5000.0, 0.0, "Transport", "Your Transport spending is on track"),
                    Budget("Health", 10000.0, 0.0, "Health", "Your Health spending is on track"),
                    Budget("Education", 8000.0, 0.0, "Education", "Your Education spending is on track"),
                    Budget("Entertainment", 3000.0, 0.0, "Entertainment", "Your Entertainment spending is on track"),
                    Budget("Utility", 4000.0, 0.0, "Utility", "Your Utility spending is on track"),
                    Budget("Shopping", 7000.0, 0.0, "Shopping", "Your Shopping spending is on track"),
                    Budget("Other", 2000.0, 0.0, "Other", "Your Other spending is on track")
                )
                budgetDao.insertBudgets(initialBudgets)
            }

            private suspend fun seedNotes(noteDao: NoteDao) {
                val initialNotes = listOf(
                    Note(
                        id = "note-default-1",
                        title = "Monthly Financial Target",
                        content = "Aim to save at least 20% of monthly salary. Limit dining out to weekends and monitor transport expenses.",
                        category = "Finance",
                        date = "2026-09-13",
                        timestamp = System.currentTimeMillis()
                    ),
                    Note(
                        id = "note-default-2",
                        title = "Grocery & Pantry Checklist",
                        content = "Rice, lentils, olive oil, organic vegetables, oats, and dairy products.",
                        category = "Shopping",
                        date = "2026-09-13",
                        timestamp = System.currentTimeMillis() - 60000
                    )
                )
                noteDao.insertNotes(initialNotes)
            }

            private suspend fun seedUserProfile(profileDao: UserProfileDao) {
                val initialProfile = UserProfile(
                    id = 1,
                    name = "User",
                    currency = "৳",
                    language = "en",
                    notifyTransactions = true,
                    notifyBudgetAlerts = true
                )
                profileDao.saveUserProfile(initialProfile)
            }
        }
    }
}
