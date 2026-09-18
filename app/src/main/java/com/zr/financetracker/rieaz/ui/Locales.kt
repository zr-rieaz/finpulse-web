package com.zr.financetracker.rieaz.ui

object Locales {
    private val dictionary = mapOf(
        "appName" to Pair("FinPulse", "ফিনপালস"),
        "tabDashboard" to Pair("Dashboard", "ড্যাশবোর্ড"),
        "tabReports" to Pair("Reports", "বিলিং রিপোর্ট"),
        "tabLogs" to Pair("Transactions", "লেনদেন"),
        "tabBudgets" to Pair("Monthly", "মাসিক"),
        "tabSettings" to Pair("Settings", "সেটিংস"),
        "todaysSpent" to Pair("Today's Spend", "আজকের খরচ"),
        "monthlySavings" to Pair("Monthly Savings", "মাসিক সঞ্চয়"),
        "earned" to Pair("Earned", "মোট আয়"),
        "spent" to Pair("Spent", "মোট ব্যয়"),
        "netSavings" to Pair("Net Savings", "নেট সঞ্চয়"),
        "savingsPercent" to Pair("Savings %", "সঞ্চয় হার"),
        "spendPercent" to Pair("Spend %", "ব্যয় হার"),
        "topCategories" to Pair("Top Spending Categories", "সর্বোচ্চ খরচের ক্যাটাগরি সমূহ"),
        "addTransaction" to Pair("Add New Transaction", "নতুন লেনদেন যুক্ত করুন"),
        "expense" to Pair("Expense", "ব্যয় (খরচ)"),
        "income" to Pair("Income", "আয়"),
        "all" to Pair("All", "সব রেকর্ড"),
        "noTransactions" to Pair("No transaction records in this cycle", "এই চক্রে কোনো রেকর্ড নেই"),
        "billingReports" to Pair("Billing Reports", "বিলিং রিপোর্ট"),
        "statementLogs" to Pair("Statement Logs", "লেনদেন রেকর্ডসমূহ"),
        "monthlyBudgets" to Pair("Monthly Budgets", "মাসিক বাজেটসীমা"),
        "deviceOptions" to Pair("Device Options", "ডিভাইস সেটিংস"),
        "cycleRefreshes" to Pair("Cycle Refreshes in %d Days", "লিমিট চক্র রিফ্রেশ হবে %d দিনে"),
        "backupSaved" to Pair("Backup saved to Downloads!", "ডাউনলোডে ব্যাকআপ সেভ হয়েছে!"),
        "backupRestored" to Pair("Backup restored successfully!", "ব্যাকআপ সফলভাবে রিস্টোর হয়েছে!"),
        "searchPlaceholder" to Pair("Search transactions...", "লেনদেন রেকর্ড খুঁজুন..."),
        "factoryReset" to Pair("Factory Reset", "ফ্যাক্টরি রিসেট"),
        "exportJson" to Pair("Backup", "ব্যাকআপ"),
        "restoreFrom" to Pair("Restore", "রিস্টোর"),
        "restoreJson" to Pair("Restore", "রিস্টোর"),
        "settings" to Pair("Settings", "সেটিংস"),
        "dashboard" to Pair("Dashboard Overviews", "ড্যাশবোর্ড ওভারভিউ"),
        "today" to Pair("Today", "আজ"),
        "freeLifetimeUnl" to Pair("Free Lifetime Unlocked", "আজীবন ফ্রি আনলকড"),
        "proActive" to Pair("PRO Active", "প্রো অ্যাক্টিভ"),
        "activeCategoryBudgets" to Pair("Active Category Budgets", "চলতি ক্যাটাগরি বাজেট"),
        "category" to Pair("Category", "ক্যাটাগরি"),
        "merchant" to Pair("Merchant / Vendor", "মার্চেন্ট / ভেন্ডর"),
        "amount" to Pair("Amount", "পরিমাণ"),
        "date" to Pair("Date", "তারিখ"),
        "saveTransaction" to Pair("Save Transaction", "লেনদেন সংরক্ষণ করুন"),
        "editTransaction" to Pair("Edit Transaction", "লেনদেন সম্পাদনা করুন"),
        "cancel" to Pair("Cancel", "বাতিল"),
        "latestDailyActivity" to Pair("Latest Daily Activity", "সাম্প্রতিক লেনদেনসমূহ"),
        "titlePlaceholder" to Pair("e.g., Grocery Shopping, Uber ride", "যেমন: বাজার শপিং, উবার ভাড়া"),
        "merchantPlaceholder" to Pair("e.g., Shwapno, Foodpanda, Netflix", "যেমন: স্বপ্ন, ফুডপান্ডা, নেটফ্লিক্স"),
        "wipeLogs" to Pair("Wipe Logs", "লেনদেন রেকর্ড মুছুন"),
        "wipeConfirm" to Pair("Are you sure you want to clear all transaction records?", "আপনি কি নিশ্চিত যে সব লেনদেন রেকর্ড মুছে ফেলতে চান?"),
        "yesClear" to Pair("Yes, Clear All", "হ্যাঁ, সব মুছুন"),
        "categories" to Pair("CATEGORIES", "ক্যাটাগরি"),
        "merchants" to Pair("MERCHANTS", "মার্চেন্ট"),
        "profileSettings" to Pair("General Settings", "জেনারেল সেটিংস"),
        "username" to Pair("Name", "ইউজার নেম"),
        "currency" to Pair("Currency Options", "কারেন্সি সেটিংস"),
        "language" to Pair("Language Settings", "ভাষা"),
        "saveChanges" to Pair("Save Change", "সেভ চেঞ্জ"),
        "notificationsSection" to Pair("Notifications & Alerts", "নোটিফিকেশন ও অ্যালার্ট"),
        "reminderToggle" to Pair("Transaction Reminders", "দৈনিক লেনদেন রিমাইন্ডার"),
        "alertsToggle" to Pair("Budget Limit Warnings (>80%)", "বাজেট লিমিট সতর্কবার্তা"),
        "budgetCeilings" to Pair("Category Budget Ceilings", "ক্যাটাগরি বাজেটসীমা সেটিংস"),
        "backupRestore" to Pair("Data Backup & Restore", "ডেটা ব্যাকআপ ও রিস্টোর"),
        "backupRestoreDesc" to Pair("Download your data as a JSON file or restore from a previous backup.", "আপনার সকল ডেটা ব্যাকআপ JSON ফাইল হিসেবে সেভ করুন বা পূর্বের ব্যাকআপ রিস্টোর করুন।"),
        "factoryResetButton" to Pair("Factory Reset App", "ফ্যাক্টরি রিসেট করুন"),
        "dangerZone" to Pair("Danger Zone", "ঝুঁকিপূর্ণ সেটিংস"),
        "resetPrompt" to Pair("Please type \"RESET\" to confirm factory reset.", "ফ্যাক্টরি রিসেট নিশ্চিত করতে \"RESET\" লিখুন।"),
        "invalidBackup" to Pair("Invalid backup file! Please use a valid FinPulse JSON.", "অকার্যকর ব্যাকআপ ফাইল! সঠিক ফিনপালস JSON ফাইল ব্যবহার করুন।"),
        "restoreConfirm" to Pair("This will replace all your current data with the backup data. Continue?", "এটি আপনার বর্তমান সকল ডেটা ব্যাকআপ ফাইল দ্বারা প্রতিস্থাপন করবে। আপনি কি নিশ্চিত?"),
        "yesRestore" to Pair("Yes, Restore", "হ্যাঁ, রিস্টোর করুন"),
        "update" to Pair("Update", "আপডেট"),
        "budgetCeilingUpdated" to Pair("Budget ceiling updated!", "বাজেটসীমা আপডেট হয়েছে!"),
        "profileSavedSuccess" to Pair("Settings saved successfully!", "সেটিংস সংরক্ষিত হয়েছে!"),
        "cycleMonth" to Pair("Cycle Month", "হিসাব চক্র মাস"),
        "categoryBreakdown" to Pair("Category Breakdown", "ক্যাটাগরি বিস্তারিত"),
        "totalExpense" to Pair("Total Exp.", "মোট ব্যয়"),
        "addTransactionBtn" to Pair("+ Add Transaction", "+ লেনদেন যুক্ত করুন"),
        "undo" to Pair("Undo", "পুনশ্চ"),
        "deleted" to Pair("Transaction deleted", "লেনদেন ডিলিট করা হয়েছে"),
        "proBadge" to Pair("PRO Unlocked", "প্রো চমৎকার"),
        "deleteTransactionTitle" to Pair("Delete Transaction", "লেনদেন মুছে ফেলুন"),
        "deleteTransactionConfirm" to Pair("Are you sure you want to delete this transaction?", "আপনি কি নিশ্চিত যে আপনি এই লেনদেনটি মুছে ফেলতে চান?"),
        "ok" to Pair("OK", "ঠিক আছে"),
        "budgetTrend" to Pair("Spending Trend (Cumulative)", "ব্যয় বিবর্তন ট্রেইন্ড (যৌগিক)"),
        "cycleRefreshesDays" to Pair("Cycle Refreshes in %d Days", "লিমিট চক্র রিফ্রেশ হবে %d দিনে"),
        "balance" to Pair("Balance", "ব্যালেন্স"),
        "yearlySavings" to Pair("Yearly Savings", "বার্ষিক সঞ্চয়"),
        "changeYear" to Pair("Change Year", "বছর পরিবর্তন"),
        "tabNotepad" to Pair("Notepad", "নোটপ্যাড"),
        "notepadTitle" to Pair("Clean Notepad", "ক্লিন নোটপ্যাড"),
        "searchNotes" to Pair("Search notes...", "নোট খুঁজুন..."),
        "addNote" to Pair("Add New Note", "নতুন নোট লিখুন"),
        "editNote" to Pair("Edit Note", "নোট সম্পাদনা করুন"),
        "deleteNoteTitle" to Pair("Delete Note", "নোট মুছে ফেলুন"),
        "deleteNoteConfirm" to Pair("Are you sure you want to delete this note?", "আপনি কি নিশ্চিত যে এই নোটটি মুছে ফেলতে চান?"),
        "noteTitle" to Pair("Title", "শিরোনাম"),
        "noteTitlePlaceholder" to Pair("e.g., Grocery list, Investment plan", "যেমন: বাজারের তালিকা, বিনিয়োগ পরিকল্পনা"),
        "noteContent" to Pair("Note Content", "নোটের বিবরণ"),
        "noteContentPlaceholder" to Pair("Write your notes or thoughts here...", "এখানে আপনার বিস্তারিত নোট লিখুন..."),
        "noteCategory" to Pair("Category Tag", "ক্যাটাগরি ট্যাগ"),
        "saveNote" to Pair("Save Note", "নোট সংরক্ষণ করুন"),
        "updateNote" to Pair("Update Note", "আপডেট করুন"),
        "noNotesFound" to Pair("No notes found. Tap + to write a note.", "কোনো নোট পাওয়া যায়নি। নতুন নোট লিখতে + চাপুন।"),
        "contactUs" to Pair("Contact Us", "যোগাযোগ করুন"),
        "contactSubtitle" to Pair("Feel free to reach out directly", "সরাসরি যোগাযোগ করুন"),
        "chatOnWhatsApp" to Pair("WhatsApp: 01628403390", "হোয়াটসঅ্যাপ: ০১৬২৮৪০৩৩৯০"),
        "chatOnWhatsAppSub" to Pair("Tap to start direct chat", "ট্যাপ করলে সরাসরি চ্যাট চালু হবে"),
        "viewGitHub" to Pair("GitHub: https://github.com/zr-rieaz/", "গিটহাব: https://github.com/zr-rieaz/"),
        "viewGitHubSub" to Pair("Tap to visit developer profile", "প্রোফাইল ভিজিট করতে ট্যাপ করুন"),
        "remove" to Pair("Remove", "রিমুভ"),
        "removeConfirm" to Pair("Are you sure you want to remove this transaction?", "আপনি কি নিশ্চিত যে এই লেনদেনটি মুছে ফেলতে চান?"),
        "filterByDate" to Pair("Filter by date", "তারিখ দিয়ে খুঁজুন")
    )

    fun getString(key: String, languageCode: String): String {
        val entry = dictionary[key] ?: return key
        return if (languageCode == "bn") entry.second else entry.first
    }

    fun translateCategory(category: String, languageCode: String): String {
        val isBn = languageCode == "bn"
        return when (category.lowercase().trim()) {
            "food" -> if (isBn) "খাবার ও রেস্তোরাঁ" else "Food"
            "rent" -> if (isBn) "বাড়িভাড়া" else "Rent"
            "transport" -> if (isBn) "পরিবহন ও যাতায়াত" else "Transport"
            "health" -> if (isBn) "চিকিৎসা ও স্বাস্থ্য" else "Health"
            "education" -> if (isBn) "শিক্ষা ও পড়াশোনা" else "Education"
            "entertainment" -> if (isBn) "বিনোদন" else "Entertainment"
            "utility" -> if (isBn) "ইউটিলিটি বিল" else "Utility"
            "shopping" -> if (isBn) "কেনাকাটা ও শপিং" else "Shopping"
            "income" -> if (isBn) "আয় ও উপার্জিত বেতন" else "Income"
            "other" -> if (isBn) "অন্যান্য খরচ" else "Other"
            else -> category
        }
    }
}
