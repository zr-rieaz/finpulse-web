/**
 * FinPulse - Smart Personal Finance Tracker (PWA)
 * Developed by Rieaz
 * All Rights Reserved © 2026 Rieaz
 */

(function () {
  'use strict';

  // --- 1. LOCALIZATION DICTIONARY ---
  const I18N = {
    en: {
      appName: "FinPulse",
      byDev: "by Rieaz",
      cycleMonth: "Cycle Month",
      proBadge: "PRO",
      totalBalance: "TOTAL BALANCE",
      todaySpend: "Today's Spend",
      monthlySavings: "Monthly Savings",
      earned: "Earned",
      spent: "Spent",
      savingsPct: "Savings",
      spendPct: "Spend",
      topCategories: "Top Spending Categories",
      spendingTrend: "Spending Trend (Cumulative)",
      recentActivity: "Latest Daily Activity",
      viewAll: "View All",
      categoryBreakdown: "Category Breakdown",
      detailedBreakdown: "Detailed Category Table",
      totalExp: "Total Exp.",
      searchPlaceholder: "Search transactions...",
      all: "All",
      expense: "Expense",
      income: "Income",
      noTransactions: "No transaction records found",
      activeBudgets: "Active Category Budgets",
      budgetSub: "Keep your monthly spending within defined ceilings.",
      spentOf: "spent of",
      profileSettings: "Profile Settings",
      userName: "Name",
      currency: "Currency Options",
      language: "Language Settings",
      saveProfile: "Save Profile Changes",
      profileSaved: "Profile settings saved successfully!",
      notifications: "Notifications & Alerts",
      reminders: "Transaction Reminders",
      budgetWarnings: "Budget Limit Warnings (>80%)",
      backupRestore: "Data Backup & Restore",
      backupDesc: "Download your data as a JSON file or restore from a previous backup.",
      exportJson: "Export JSON",
      restoreJson: "Restore JSON",
      dangerZone: "Danger Zone",
      factoryResetBtn: "Factory Reset App",
      resetConfirmPrompt: "Type \"RESET\" to confirm factory reset:",
      resetSuccess: "App factory reset complete!",
      addTxTitle: "Add New Transaction",
      editTxTitle: "Edit Transaction",
      txTitleLabel: "Title / Description",
      txTitlePlaceholder: "e.g., Grocery Shopping, Uber ride",
      txAmountLabel: "Amount",
      txCategoryLabel: "Category",
      txMerchantLabel: "Merchant / Vendor",
      txMerchantPlaceholder: "e.g., Shwapno, Foodpanda, Netflix",
      txDateLabel: "Date",
      saveTx: "Save Transaction",
      updateTx: "Update Transaction",
      txSaved: "Transaction saved successfully!",
      txDeleted: "Transaction deleted",
      deleteConfirm: "Are you sure you want to delete this transaction?",
      installHeader: "Install",
      installFinPulse: "Install FinPulse",
      installNow: "Install FinPulse",
      maybeLater: "Maybe Later",
      navDashboard: "Dashboard",
      navReports: "Reports",
      navLogs: "Transactions",
      navBudgets: "Monthly",
      navNotepad: "Notepad",
      navSettings: "Settings",
      notepadTitle: "Clean Notepad",
      notepadCount: "notes saved",
      addNoteBtn: "Add Note",
      searchNotesPlaceholder: "Search notes...",
      noNotesFound: "No notes found",
      emptyNotesHelp: "Keep track of your financial plans, thoughts, or shopping lists.",
      writeFirstNote: "Write First Note",
      modalAddNoteTitle: "Add New Note",
      modalEditNoteTitle: "Edit Note",
      noteCategoryLabel: "Category Tag",
      noteTitleLabel: "Title",
      noteTitlePlaceholder: "Note title...",
      noteContentLabel: "Content",
      noteContentPlaceholder: "Write your thoughts or financial plans here...",
      saveNoteBtn: "Save Note",
      updateNoteBtn: "Update Note",
      noteSaved: "Note saved successfully!",
      noteDeleted: "Note deleted successfully!",
      deleteNoteConfirm: "Are you sure you want to delete this note?",
      categories: {
        Food: "Food & Dining",
        Rent: "House Rent",
        Transport: "Transport",
        Health: "Health & Medical",
        Education: "Education",
        Entertainment: "Entertainment",
        Utility: "Utility Bills",
        Shopping: "Shopping",
        Income: "Salary & Income",
        Other: "Other Expenses"
      }
    },
    bn: {
      appName: "ফিনপালস",
      byDev: "রিয়াজ দ্বারা নির্মিত",
      cycleMonth: "হিসাব চক্র মাস",
      proBadge: "প্রো",
      totalBalance: "মোট ব্যালেন্স",
      todaySpend: "আজকের খরচ",
      monthlySavings: "মাসিক সঞ্চয়",
      earned: "মোট আয়",
      spent: "মোট ব্যয়",
      savingsPct: "সঞ্চয় হার",
      spendPct: "ব্যয় হার",
      topCategories: "সর্বোচ্চ খরচের ক্যাটাগরি",
      spendingTrend: "ব্যয় বিবর্তন ট্রেন্ড (যৌগিক)",
      recentActivity: "সাম্প্রতিক লেনদেনসমূহ",
      viewAll: "সব দেখুন",
      categoryBreakdown: "ক্যাটাগরি বিস্তারিত",
      detailedBreakdown: "ক্যাটাগরি তালিকা",
      totalExp: "মোট ব্যয়",
      searchPlaceholder: "লেনদেন রেকর্ড খুঁজুন...",
      all: "সব",
      expense: "ব্যয় (খরচ)",
      income: "আয়",
      noTransactions: "কোনো লেনদেন রেকর্ড পাওয়া যায়নি",
      activeBudgets: "চলতি ক্যাটাগরি বাজেট",
      budgetSub: "আপনার মাসিক খরচ বাজেট সীমার মধ্যে রাখুন।",
      spentOf: "ব্যয় হয়েছে / মোট",
      profileSettings: "প্রোফাইল সেটিংস",
      userName: "ইউজার নেম",
      currency: "কারেন্সি সেটিংস",
      language: "ভাষা সেটিংস",
      saveProfile: "প্রোফাইল তথ্য সংরক্ষণ",
      profileSaved: "প্রোফাইল তথ্য সফলভাবে সংরক্ষিত হয়েছে!",
      notifications: "নোটিফিকেশন ও অ্যালার্ট",
      reminders: "দৈনিক লেনদেন রিমাইন্ডার",
      budgetWarnings: "বাজেট লিমিট সতর্কবার্তা (>৮০%)",
      backupRestore: "ডেটা ব্যাকআপ ও রিস্টোর",
      backupDesc: "আপনার সকল ডেটা ব্যাকআপ JSON ফাইল হিসেবে সেভ করুন বা রিস্টোর করুন।",
      exportJson: "JSON এক্সপোর্ট",
      restoreJson: "JSON রিস্টোর",
      dangerZone: "ঝুঁকিপূর্ণ সেটিংস",
      factoryResetBtn: "ফ্যাক্টরি রিসেট করুন",
      resetConfirmPrompt: "ফ্যাক্টরি রিসেট নিশ্চিত করতে \"RESET\" লিখুন:",
      resetSuccess: "অ্যাপ সফলভাবে ফ্যাক্টরি রিসেট হয়েছে!",
      addTxTitle: "নতুন লেনদেন যুক্ত করুন",
      editTxTitle: "লেনদেন সম্পাদনা করুন",
      txTitleLabel: "শিরোনাম / বিবরণ",
      txTitlePlaceholder: "যেমন: বাজার খরচ, উবার ভাড়া",
      txAmountLabel: "পরিমাণ",
      txCategoryLabel: "ক্যাটাগরি",
      txMerchantLabel: "মার্চেন্ট / ভেন্ডর",
      txMerchantPlaceholder: "যেমন: স্বপ্ন, ফুডপান্ডা, নেটফ্লিক্স",
      txDateLabel: "তারিখ",
      saveTx: "লেনদেন সংরক্ষণ করুন",
      updateTx: "আপডেট করুন",
      txSaved: "লেনদেন সফলভাবে সংরক্ষণ হয়েছে!",
      txDeleted: "লেনদেন মুছে ফেলা হয়েছে",
      deleteConfirm: "আপনি কি এই লেনদেনটি মুছে ফেলতে চান?",
      installHeader: "ইনস্টল",
      installFinPulse: "ফিনপালস ইনস্টল করুন",
      installNow: "ফিনপালস ইনস্টল করুন",
      maybeLater: "পরে করব",
      navDashboard: "ড্যাশবোর্ড",
      navReports: "রিপোর্ট",
      navLogs: "লেনদেন",
      navBudgets: "মাসিক",
      navNotepad: "নোটপ্যাড",
      navSettings: "সেটিংস",
      notepadTitle: "ক্লিন নোটপ্যাড",
      notepadCount: "টি সংরক্ষিত নোট",
      addNoteBtn: "নতুন নোট",
      searchNotesPlaceholder: "নোট খুঁজুন...",
      noNotesFound: "কোনো নোট পাওয়া যায়নি",
      emptyNotesHelp: "আপনার আর্থিক পরিকল্পনা, বাজার তালিকা বা প্রয়োজনীয় তথ্য লিখে রাখতে নিচের বাটনে চাপুন।",
      writeFirstNote: "নতুন নোট লিখুন",
      modalAddNoteTitle: "নতুন নোট লিখুন",
      modalEditNoteTitle: "নোট সম্পাদনা করুন",
      noteCategoryLabel: "ক্যাটাগরি ট্যাগ",
      noteTitleLabel: "শিরোনাম",
      noteTitlePlaceholder: "নোটের শিরোনাম লিখুন...",
      noteContentLabel: "বিবরণ",
      noteContentPlaceholder: "এখানে বিস্তারিত নোট বা তথ্য লিখুন...",
      saveNoteBtn: "সংরক্ষণ করুন",
      updateNoteBtn: "আপডেট করুন",
      noteSaved: "নোট সফলভাবে সংরক্ষণ হয়েছে!",
      noteDeleted: "নোট মুছে ফেলা হয়েছে",
      deleteNoteConfirm: "আপনি কি নিশ্চিত যে এই নোটটি মুছে ফেলতে চান?",
      categories: {
        Food: "খাবার ও রেস্তোরাঁ",
        Rent: "বাড়িভাড়া",
        Transport: "পরিবহন ও যাতায়াত",
        Health: "চিকিৎসা ও স্বাস্থ্য",
        Education: "শিক্ষা ও পড়াশোনা",
        Entertainment: "বিনোদন",
        Utility: "ইউটিলিটি বিল",
        Shopping: "কেনাকাটা ও শপিং",
        Income: "আয় ও বেতন",
        Other: "অন্যান্য খরচ"
      }
    }
  };

  const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const CATEGORY_COLORS = {
    Food: "#f59e0b",
    Rent: "#6366f1",
    Transport: "#06b6d4",
    Health: "#ef4444",
    Education: "#8b5cf6",
    Entertainment: "#ec4899",
    Utility: "#10b981",
    Shopping: "#f97316",
    Income: "#10b981",
    Other: "#64748b"
  };

  const CATEGORY_ICONS = {
    Food: "🍔",
    Rent: "🏠",
    Transport: "🚗",
    Health: "💊",
    Education: "📚",
    Entertainment: "🎬",
    Utility: "💡",
    Shopping: "🛍️",
    Income: "💰",
    Other: "📦"
  };

  // --- 2. DEFAULT SEED DATA ---
  const DEFAULT_PROFILE = {
    name: "Rieaz",
    currency: "৳",
    language: "en",
    notifyTx: true,
    notifyBudget: true
  };

  const DEFAULT_BUDGETS = [
    { category: "Food", limit: 8000 },
    { category: "Rent", limit: 15000 },
    { category: "Transport", limit: 3500 },
    { category: "Health", limit: 2500 },
    { category: "Education", limit: 4000 },
    { category: "Entertainment", limit: 2000 },
    { category: "Utility", limit: 3500 },
    { category: "Shopping", limit: 5000 },
    { category: "Other", limit: 2500 }
  ];

  const INITIAL_TRANSACTIONS = [
    { id: "tx-1", title: "Monthly Salary", amount: 45000, type: "income", category: "Income", merchant: "Company Payroll", date: getFormattedDate(1), month: getMonthName(), year: new Date().getFullYear() },
    { id: "tx-2", title: "Apartment Rent", amount: 12000, type: "expense", category: "Rent", merchant: "Landlord", date: getFormattedDate(2), month: getMonthName(), year: new Date().getFullYear() },
    { id: "tx-3", title: "Supermarket Grocery", amount: 2450, type: "expense", category: "Food", merchant: "Shwapno", date: getFormattedDate(0), month: getMonthName(), year: new Date().getFullYear() },
    { id: "tx-4", title: "Electricity & Gas Bill", amount: 1800, type: "expense", category: "Utility", merchant: "DESCO", date: getFormattedDate(3), month: getMonthName(), year: new Date().getFullYear() },
    { id: "tx-5", title: "Ride Sharing", amount: 420, type: "expense", category: "Transport", merchant: "Uber", date: getFormattedDate(0), month: getMonthName(), year: new Date().getFullYear() }
  ];

  function getMonthName(date = new Date()) {
    return MONTH_NAMES[date.getMonth()];
  }

  function getFormattedDate(daysAgo = 0) {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return d.toISOString().split('T')[0];
  }

  // --- 3. STORAGE ADAPTER ---
  const STORAGE_KEYS = {
    TRANSACTIONS: 'finpulse_transactions_v2',
    BUDGETS: 'finpulse_budgets_v2',
    PROFILE: 'finpulse_profile_v2',
    THEME: 'finpulse_theme_v2',
    SELECTED_MONTH: 'finpulse_sel_month_v2',
    PWA_PROMPT_DISMISSED: 'finpulse_pwa_dismissed',
    NOTES: 'finpulse_notes_v2'
  };

  const DEFAULT_NOTES = [
    {
      id: "note-1",
      title: "মাসিক সঞ্চয় লক্ষ্য (Monthly Savings)",
      content: "প্রতি মাসের শুরুতে মোট আয়ের অন্তত ২০% সঞ্চয় ফান্ডে জমা রাখা। অতিরিক্ত কেনাকাটা নিয়ন্ত্রণ করা জরুরি।",
      category: "Finance",
      date: getFormattedDate(0),
      timestamp: Date.now()
    },
    {
      id: "note-2",
      title: "বাজার তালিকা ও নিত্যপ্রয়োজনীয় দ্রব্যাদি",
      content: "চাল, ডাল, তেল, চিনি, মসলা, তাজা শাকসবজি ও ফলমূল কেনার সময় বাজেট সীমা অনুসরণ করা।",
      category: "Shopping",
      date: getFormattedDate(1),
      timestamp: Date.now() - 86400000
    },
    {
      id: "note-3",
      title: "জরুরি ফান্ড ও ডিপিএস কিস্তি",
      content: "মেডিকেল ইমার্জেন্সি ও ভবিষ্যতের জন্য আলাদা সেভিংস একাউন্টে কিস্তি নিয়মিত জমা রাখা।",
      category: "Budget",
      date: getFormattedDate(2),
      timestamp: Date.now() - 172800000
    }
  ];

  const Store = {
    getTransactions: () => {
      try {
        const data = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
        return data ? JSON.parse(data) : INITIAL_TRANSACTIONS;
      } catch (e) {
        return INITIAL_TRANSACTIONS;
      }
    },
    saveTransactions: (txs) => {
      localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(txs));
    },
    getBudgets: () => {
      try {
        const data = localStorage.getItem(STORAGE_KEYS.BUDGETS);
        return data ? JSON.parse(data) : DEFAULT_BUDGETS;
      } catch (e) {
        return DEFAULT_BUDGETS;
      }
    },
    saveBudgets: (b) => {
      localStorage.setItem(STORAGE_KEYS.BUDGETS, JSON.stringify(b));
    },
    getNotes: () => {
      try {
        const data = localStorage.getItem(STORAGE_KEYS.NOTES);
        if (data) {
          const parsed = JSON.parse(data);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
        return DEFAULT_NOTES;
      } catch (e) {
        return DEFAULT_NOTES;
      }
    },
    saveNotes: (notes) => {
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
    },
    getProfile: () => {
      try {
        const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
        return data ? JSON.parse(data) : DEFAULT_PROFILE;
      } catch (e) {
        return DEFAULT_PROFILE;
      }
    },
    saveProfile: (p) => {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(p));
    },
    getTheme: () => localStorage.getItem(STORAGE_KEYS.THEME) || 'dark',
    saveTheme: (theme) => localStorage.setItem(STORAGE_KEYS.THEME, theme),
    getSelectedMonth: () => localStorage.getItem(STORAGE_KEYS.SELECTED_MONTH) || getMonthName(),
    saveSelectedMonth: (m) => localStorage.setItem(STORAGE_KEYS.SELECTED_MONTH, m)
  };

  // --- 4. APP STATE ---
  let state = {
    transactions: Store.getTransactions(),
    budgets: Store.getBudgets(),
    notes: Store.getNotes(),
    profile: Store.getProfile(),
    theme: Store.getTheme(),
    selectedMonth: Store.getSelectedMonth(),
    selectedYear: new Date().getFullYear(),
    activeTab: 'dashboard',
    txFilter: 'all',
    txSearchQuery: '',
    editingTxId: null,
    txModalType: 'expense',
    notesCategoryFilter: 'All',
    notesSearchQuery: '',
    editingNoteId: null,
    selectedNoteModalCat: 'Finance'
  };

  // --- 5. DOM ELEMENTS ---
  const el = {
    appContainer: document.getElementById('app-container'),
    splash: document.getElementById('splash-screen'),
    themeToggle: document.getElementById('btn-theme-toggle'),
    iconTheme: document.getElementById('icon-theme'),
    monthChipsContainer: document.getElementById('month-chips-container'),
    lblCycleMonth: document.getElementById('lbl-cycle-month'),
    
    // Screens
    screens: {
      dashboard: document.getElementById('screen-dashboard'),
      reports: document.getElementById('screen-reports'),
      transactions: document.getElementById('screen-transactions'),
      notepad: document.getElementById('screen-notepad'),
      settings: document.getElementById('screen-settings')
    },
    
    // Bottom Nav
    navItems: document.querySelectorAll('.bottom-nav .nav-item'),
    fabAddTx: document.getElementById('fab-add-tx'),
    
    // Dashboard fields
    valTotalBalance: document.getElementById('val-total-balance'),
    valTodaySpend: document.getElementById('val-today-spend'),
    valMonthlySavings: document.getElementById('val-monthly-savings'),
    valTotalIncome: document.getElementById('val-total-income'),
    valTotalExpense: document.getElementById('val-total-expense'),
    valSavingsPct: document.getElementById('val-savings-pct'),
    valSpendPct: document.getElementById('val-spend-pct'),
    dashboardCatBars: document.getElementById('dashboard-category-bars'),
    dashboardRecentTxs: document.getElementById('dashboard-recent-txs'),
    btnViewAllTx: document.getElementById('btn-view-all-tx'),
    trendSvg: document.getElementById('trend-svg'),

    // Reports fields
    donutSvg: document.getElementById('donut-svg'),
    valReportDonutTotal: document.getElementById('val-report-donut-total'),
    donutLegend: document.getElementById('donut-legend'),
    reportsCategoryDetails: document.getElementById('reports-category-details'),
    reportCycleTag: document.getElementById('report-cycle-tag'),

    // Transactions fields
    inputSearchTx: document.getElementById('input-search-tx'),
    filterPills: document.querySelectorAll('.filter-pills .filter-pill'),
    fullTxList: document.getElementById('full-transactions-list'),

    // Budgets fields
    budgetsContainer: document.getElementById('budgets-container'),

    // Notepad fields
    btnOpenAddNote: document.getElementById('btn-open-add-note'),
    lblNotepadTitle: document.getElementById('lbl-notepad-title'),
    lblNotepadCount: document.getElementById('lbl-notepad-count'),
    lblAddNoteBtn: document.getElementById('lbl-add-note-btn'),
    inputSearchNotes: document.getElementById('input-search-notes'),
    noteCatChips: document.querySelectorAll('#screen-notepad .note-cat-chip[data-cat]'),
    notesContainer: document.getElementById('notes-container'),
    modalNote: document.getElementById('modal-note'),
    btnCloseNoteModal: document.getElementById('btn-close-note-modal'),
    lblModalNoteTitle: document.getElementById('lbl-modal-note-title'),
    noteModalCatChips: document.querySelectorAll('#modal-note .note-cat-chip[data-form-cat]'),
    noteInputTitle: document.getElementById('note-input-title'),
    noteInputContent: document.getElementById('note-input-content'),
    btnSaveNote: document.getElementById('btn-save-note'),
    lblBtnSaveNote: document.getElementById('lbl-btn-save-note'),
    lblNoteFormCat: document.getElementById('lbl-note-form-cat'),
    lblNoteFormTitle: document.getElementById('lbl-note-form-title'),
    lblNoteFormContent: document.getElementById('lbl-note-form-content'),

    // Settings fields
    inputUserName: document.getElementById('input-user-name'),
    currencyButtons: document.querySelectorAll('#currency-segmented .btn-segmented'),
    languageButtons: document.querySelectorAll('#language-segmented .btn-segmented'),
    chkReminder: document.getElementById('chk-reminder'),
    chkBudgetAlerts: document.getElementById('chk-budget-alerts'),
    btnSaveProfile: document.getElementById('btn-save-profile'),
    btnExportBackup: document.getElementById('btn-export-backup'),
    btnImportBackup: document.getElementById('btn-import-backup'),
    fileImportInput: document.getElementById('file-import-input'),
    btnFactoryReset: document.getElementById('btn-factory-reset'),
    btnSettingsInstallPwa: document.getElementById('btn-settings-install-pwa'),

    // Modal Transaction
    modalTx: document.getElementById('modal-transaction'),
    lblModalTitle: document.getElementById('lbl-modal-title'),
    btnCloseModal: document.getElementById('btn-close-modal'),
    btnTypeExpense: document.getElementById('btn-type-expense'),
    btnTypeIncome: document.getElementById('btn-type-income'),
    txInputTitle: document.getElementById('tx-input-title'),
    txInputAmount: document.getElementById('tx-input-amount'),
    txInputCategory: document.getElementById('tx-input-category'),
    txInputMerchant: document.getElementById('tx-input-merchant'),
    txInputDate: document.getElementById('tx-input-date'),
    btnSaveTx: document.getElementById('btn-save-tx'),
    lblBtnSaveTx: document.getElementById('lbl-btn-save-tx'),

    // PWA Install Popup
    installPopup: document.getElementById('pwa-install-popup'),
    btnPopupInstall: document.getElementById('btn-popup-install'),
    btnPopupDismiss: document.getElementById('btn-popup-dismiss'),
    btnHeaderInstall: document.getElementById('btn-header-install'),
    iosInstallGuide: document.getElementById('ios-install-guide'),

    // Toast
    toast: document.getElementById('toast-message'),
    toastText: document.getElementById('toast-text')
  };

  // --- 6. INITIALIZATION & LIFECYCLE ---
  function init() {
    applyTheme(state.theme);
    applyLanguage(state.profile.language);
    renderMonthSlider();
    renderAll();
    setupEventListeners();
    setupPwaInstallation();
    registerServiceWorker();

    // Fast splash exit (900ms)
    setTimeout(() => {
      if (el.splash) el.splash.classList.add('hidden');
    }, 900);
  }

  // --- 7. FORMATTING & HELPERS ---
  function t(key) {
    const lang = state.profile.language || 'en';
    const dict = I18N[lang] || I18N.en;
    return dict[key] || I18N.en[key] || key;
  }

  function translateCat(catName) {
    const lang = state.profile.language || 'en';
    const dict = I18N[lang] || I18N.en;
    return dict.categories?.[catName] || catName;
  }

  function formatMoney(amount) {
    const num = Number(amount) || 0;
    const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `${state.profile.currency} ${formatted}`;
  }

  function showToast(msg, duration = 2500) {
    if (!el.toast) return;
    el.toastText.textContent = msg;
    el.toast.classList.add('show');
    clearTimeout(el.toastTimer);
    el.toastTimer = setTimeout(() => {
      el.toast.classList.remove('show');
    }, duration);
  }

  // --- 8. THEME & LANGUAGE ---
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    Store.saveTheme(theme);
    if (el.iconTheme) {
      if (theme === 'light') {
        el.iconTheme.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
      } else {
        el.iconTheme.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
      }
    }
  }

  function applyLanguage(lang) {
    state.profile.language = lang;
    const dict = I18N[lang] || I18N.en;

    // Update static labels in DOM safely
    const labelMapping = {
      'lbl-app-name': dict.appName,
      'lbl-pro-badge': dict.proBadge,
      'lbl-total-balance': dict.totalBalance,
      'lbl-today-spend': dict.todaySpend,
      'lbl-monthly-savings': dict.monthlySavings,
      'lbl-earned': dict.earned,
      'lbl-spent': dict.spent,
      'lbl-top-categories': dict.topCategories,
      'lbl-spending-trend': dict.spendingTrend,
      'lbl-recent-activity': dict.recentActivity,
      'btn-view-all-tx': dict.viewAll,
      'lbl-category-breakdown': dict.categoryBreakdown,
      'lbl-detailed-breakdown': dict.detailedBreakdown,
      'lbl-report-total': dict.totalExp,
      'filter-all': dict.all,
      'filter-expense': dict.expense,
      'filter-income': dict.income,
      'lbl-budget-header': dict.activeBudgets,
      'lbl-budget-sub': dict.budgetSub,
      'lbl-profile-settings': dict.profileSettings,
      'lbl-user-name': dict.userName,
      'lbl-currency': dict.currency,
      'lbl-language': dict.language,
      'lbl-save-profile': dict.saveProfile,
      'lbl-notifications-section': dict.notifications,
      'lbl-reminder-toggle': dict.reminders,
      'lbl-alerts-toggle': dict.budgetWarnings,
      'lbl-backup-restore': dict.backupRestore,
      'lbl-backup-desc': dict.backupDesc,
      'lbl-export-json': dict.exportJson,
      'lbl-restore-json': dict.restoreJson,
      'lbl-danger-zone': dict.dangerZone,
      'lbl-factory-reset-btn': dict.factoryResetBtn,
      'lbl-form-title': dict.txTitleLabel,
      'lbl-form-amount': dict.txAmountLabel,
      'lbl-form-category': dict.txCategoryLabel,
      'lbl-form-merchant': dict.txMerchantLabel,
      'lbl-form-date': dict.txDateLabel,
      'lbl-install-header': dict.installHeader,
      'lbl-install-now-btn': dict.installNow,
      'nav-dashboard': dict.navDashboard,
      'nav-reports': dict.navReports,
      'nav-logs': dict.navLogs,
      'nav-budgets': dict.navBudgets,
      'nav-notepad': dict.navNotepad,
      'nav-settings': dict.navSettings,
      'lbl-notepad-title': dict.notepadTitle,
      'lbl-add-note-btn': dict.addNoteBtn,
      'lbl-modal-note-title': dict.modalAddNoteTitle,
      'lbl-note-form-cat': dict.noteCategoryLabel,
      'lbl-note-form-title': dict.noteTitleLabel,
      'lbl-note-form-content': dict.noteContentLabel,
      'lbl-btn-save-note': dict.saveNoteBtn
    };

    for (const [id, text] of Object.entries(labelMapping)) {
      const node = document.getElementById(id);
      if (node) node.textContent = text;
    }

    if (el.inputSearchTx) el.inputSearchTx.placeholder = dict.searchPlaceholder;
    if (el.txInputTitle) el.txInputTitle.placeholder = dict.txTitlePlaceholder;
    if (el.txInputMerchant) el.txInputMerchant.placeholder = dict.txMerchantPlaceholder;
    if (el.inputSearchNotes) el.inputSearchNotes.placeholder = dict.searchNotesPlaceholder;
    if (el.noteInputTitle) el.noteInputTitle.placeholder = dict.noteTitlePlaceholder;
    if (el.noteInputContent) el.noteInputContent.placeholder = dict.noteContentPlaceholder;
  }

  // --- 9. MONTH SLIDER ---
  function renderMonthSlider() {
    if (!el.monthChipsContainer) return;
    el.monthChipsContainer.innerHTML = '';
    
    MONTH_NAMES.forEach(m => {
      const chip = document.createElement('button');
      chip.className = `month-chip ${m === state.selectedMonth ? 'active' : ''}`;
      chip.textContent = m;
      chip.addEventListener('click', () => {
        state.selectedMonth = m;
        Store.saveSelectedMonth(m);
        renderMonthSlider();
        renderAll();
      });
      el.monthChipsContainer.appendChild(chip);
    });

    if (el.lblCycleMonth) {
      el.lblCycleMonth.textContent = `${t('cycleMonth')}: ${state.selectedMonth}`;
    }
    if (el.reportCycleTag) {
      el.reportCycleTag.textContent = state.selectedMonth;
    }
  }

  // --- 10. CALCULATION & DATA PROCESSING ---
  function getCycleTransactions() {
    return state.transactions.filter(tx => tx.month === state.selectedMonth);
  }

  function getCalculatedStats() {
    const cycleTxs = getCycleTransactions();
    const todayStr = getFormattedDate(0);

    let totalIncome = 0;
    let totalExpense = 0;
    let todaySpend = 0;

    cycleTxs.forEach(tx => {
      const val = Number(tx.amount) || 0;
      if (tx.type === 'income') {
        totalIncome += val;
      } else {
        totalExpense += val;
        if (tx.date === todayStr) {
          todaySpend += val;
        }
      }
    });

    // Overall Lifetime Balance
    let totalBalance = 0;
    state.transactions.forEach(tx => {
      const val = Number(tx.amount) || 0;
      if (tx.type === 'income') totalBalance += val;
      else totalBalance -= val;
    });

    const netSavings = totalIncome - totalExpense;
    const savingsPct = totalIncome > 0 ? Math.max(0, Math.round((netSavings / totalIncome) * 100)) : 0;
    const spendPct = totalIncome > 0 ? Math.min(100, Math.round((totalExpense / totalIncome) * 100)) : (totalExpense > 0 ? 100 : 0);

    return {
      totalBalance,
      todaySpend,
      monthlySavings: netSavings,
      totalIncome,
      totalExpense,
      savingsPct,
      spendPct
    };
  }

  function getCategoryTotals() {
    const cycleTxs = getCycleTransactions().filter(tx => tx.type === 'expense');
    const totals = {};
    cycleTxs.forEach(tx => {
      const cat = tx.category || 'Other';
      totals[cat] = (totals[cat] || 0) + Number(tx.amount || 0);
    });
    return totals;
  }

  // --- 11. RENDERING VIEWS ---
  function renderAll() {
    renderDashboard();
    renderReports();
    renderTransactionsList();
    renderBudgets();
    renderNotepad();
    syncSettingsFields();
  }

  function renderDashboard() {
    const stats = getCalculatedStats();
    if (el.valTotalBalance) el.valTotalBalance.textContent = formatMoney(stats.totalBalance);
    if (el.valTodaySpend) el.valTodaySpend.textContent = formatMoney(stats.todaySpend);
    if (el.valMonthlySavings) el.valMonthlySavings.textContent = formatMoney(stats.monthlySavings);
    if (el.valTotalIncome) el.valTotalIncome.textContent = formatMoney(stats.totalIncome);
    if (el.valTotalExpense) el.valTotalExpense.textContent = formatMoney(stats.totalExpense);
    if (el.valSavingsPct) el.valSavingsPct.textContent = `${t('savingsPct')}: ${stats.savingsPct}%`;
    if (el.valSpendPct) el.valSpendPct.textContent = `${t('spendPct')}: ${stats.spendPct}%`;

    // Category progress bars
    const catTotals = getCategoryTotals();
    const sortedCats = Object.entries(catTotals).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const maxSpent = sortedCats.length > 0 ? sortedCats[0][1] : 1;

    if (el.dashboardCatBars) {
      if (sortedCats.length === 0) {
        el.dashboardCatBars.innerHTML = `<div class="empty-state" style="padding: 16px 0;">${t('noTransactions')}</div>`;
      } else {
        el.dashboardCatBars.innerHTML = sortedCats.map(([cat, amount]) => {
          const pct = Math.min(100, Math.round((amount / maxSpent) * 100));
          const color = CATEGORY_COLORS[cat] || '#6366f1';
          const icon = CATEGORY_ICONS[cat] || '🏷️';
          return `
            <div class="cat-bar-item">
              <div class="cat-bar-meta">
                <span>${icon} ${translateCat(cat)}</span>
                <span>${formatMoney(amount)}</span>
              </div>
              <div class="cat-progress-track">
                <div class="cat-progress-fill" style="width: ${pct}%; background-color: ${color};"></div>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Recent Transactions
    const recent = [...state.transactions].reverse().slice(0, 5);
    if (el.dashboardRecentTxs) {
      if (recent.length === 0) {
        el.dashboardRecentTxs.innerHTML = `<div class="empty-state">${t('noTransactions')}</div>`;
      } else {
        el.dashboardRecentTxs.innerHTML = recent.map(tx => renderTxItemHtml(tx)).join('');
        attachTxClickHandlers(el.dashboardRecentTxs);
      }
    }

    // Render Trend Graph
    renderTrendChart();
  }

  function renderTxItemHtml(tx) {
    const isExpense = tx.type === 'expense';
    const amountClass = isExpense ? 'expense' : 'income';
    const prefix = isExpense ? '-' : '+';
    const color = CATEGORY_COLORS[tx.category] || '#6366f1';
    const icon = CATEGORY_ICONS[tx.category] || (isExpense ? '💸' : '💰');

    return `
      <div class="tx-item" data-id="${tx.id}">
        <div class="tx-left">
          <div class="tx-icon-box" style="background: ${color}20; color: ${color};">
            ${icon}
          </div>
          <div class="tx-details">
            <div class="tx-title">${escapeHtml(tx.title)}</div>
            <div class="tx-sub">${translateCat(tx.category)} • ${escapeHtml(tx.merchant || 'General')}</div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-amount ${amountClass}">${prefix}${formatMoney(tx.amount)}</div>
          <div class="tx-date">${tx.date}</div>
        </div>
      </div>
    `;
  }

  function attachTxClickHandlers(container) {
    container.querySelectorAll('.tx-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        openEditTxModal(id);
      });
    });
  }

  function renderTrendChart() {
    if (!el.trendSvg) return;
    const cycleTxs = getCycleTransactions()
      .filter(tx => tx.type === 'expense')
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (cycleTxs.length === 0) {
      el.trendSvg.innerHTML = `<text x="200" y="90" text-anchor="middle" fill="#64748b" font-size="12">No expense activity in ${state.selectedMonth}</text>`;
      return;
    }

    // Compute cumulative daily spend
    let cumulative = 0;
    const points = [];
    cycleTxs.forEach((tx) => {
      cumulative += Number(tx.amount || 0);
      points.push(cumulative);
    });

    const maxVal = Math.max(...points, 1);
    const width = 400;
    const height = 180;
    const padX = 25;
    const padY = 25;

    const coords = points.map((val, idx) => {
      const x = padX + (idx / Math.max(points.length - 1, 1)) * (width - padX * 2);
      const y = height - padY - (val / maxVal) * (height - padY * 2);
      return { x, y, val };
    });

    const polylinePts = coords.map(c => `${c.x},${c.y}`).join(' ');
    const areaPts = `${coords[0].x},${height - padY} ${polylinePts} ${coords[coords.length - 1].x},${height - padY}`;

    el.trendSvg.innerHTML = `
      <defs>
        <linearGradient id="trendGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#6366f1" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#6366f1" stop-opacity="0.0" />
        </linearGradient>
      </defs>
      <!-- Grid line -->
      <line x1="${padX}" y1="${height - padY}" x2="${width - padX}" y2="${height - padY}" stroke="#334155" stroke-width="1" />
      <polygon points="${areaPts}" fill="url(#trendGrad)" />
      <polyline points="${polylinePts}" fill="none" stroke="#6366f1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      ${coords.map(c => `<circle cx="${c.x}" cy="${c.y}" r="4" fill="#38bdf8" stroke="#ffffff" stroke-width="2" />`).join('')}
    `;
  }

  function renderReports() {
    const catTotals = getCategoryTotals();
    const entries = Object.entries(catTotals).sort((a, b) => b[1] - a[1]);
    const totalExp = entries.reduce((acc, curr) => acc + curr[1], 0);

    if (el.valReportDonutTotal) {
      el.valReportDonutTotal.textContent = formatMoney(totalExp);
    }

    if (!el.donutSvg || !el.donutLegend) return;

    if (entries.length === 0 || totalExp === 0) {
      el.donutSvg.innerHTML = `<circle cx="95" cy="95" r="75" fill="none" stroke="#334155" stroke-width="24" />`;
      el.donutLegend.innerHTML = `<div style="grid-column: 1 / -1; text-align:center; color: var(--text-muted); font-size:12px;">No expenses for ${state.selectedMonth}</div>`;
      if (el.reportsCategoryDetails) el.reportsCategoryDetails.innerHTML = '';
      return;
    }

    // Donut SVG segments with stroke-dasharray
    const radius = 72;
    const circ = 2 * Math.PI * radius;
    let accumulatedAngle = 0;
    const svgSegments = [];

    entries.forEach(([cat, amount]) => {
      const pct = amount / totalExp;
      const strokeDash = pct * circ;
      const strokeGap = circ - strokeDash;
      const color = CATEGORY_COLORS[cat] || '#6366f1';

      svgSegments.push(`
        <circle cx="95" cy="95" r="${radius}" fill="none" stroke="${color}" stroke-width="22"
          stroke-dasharray="${strokeDash} ${strokeGap}"
          stroke-dashoffset="${-accumulatedAngle}"
          transform="rotate(-90 95 95)" />
      `);
      accumulatedAngle += strokeDash;
    });

    el.donutSvg.innerHTML = svgSegments.join('');

    // Legend
    el.donutLegend.innerHTML = entries.map(([cat, amount]) => {
      const pct = Math.round((amount / totalExp) * 100);
      const color = CATEGORY_COLORS[cat] || '#6366f1';
      return `
        <div style="display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600;">
          <span style="width: 10px; height: 10px; border-radius: 50%; background: ${color}; flex-shrink:0;"></span>
          <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${translateCat(cat)}</span>
          <span style="color: var(--text-muted); margin-left: auto;">${pct}%</span>
        </div>
      `;
    }).join('');

    // Detailed table
    if (el.reportsCategoryDetails) {
      el.reportsCategoryDetails.innerHTML = entries.map(([cat, amount]) => {
        const pct = Math.round((amount / totalExp) * 100);
        const color = CATEGORY_COLORS[cat] || '#6366f1';
        const icon = CATEGORY_ICONS[cat] || '🏷️';
        return `
          <div class="cat-bar-item" style="background: var(--bg-input); padding: 10px 12px; border-radius: 12px;">
            <div class="cat-bar-meta">
              <span>${icon} ${translateCat(cat)} (${pct}%)</span>
              <span style="font-weight: 800;">${formatMoney(amount)}</span>
            </div>
            <div class="cat-progress-track" style="margin-top: 6px; height: 6px;">
              <div class="cat-progress-fill" style="width: ${pct}%; background-color: ${color};"></div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  function renderTransactionsList() {
    if (!el.fullTxList) return;
    const query = state.txSearchQuery.toLowerCase().trim();

    let filtered = [...state.transactions];

    // Filter type
    if (state.txFilter !== 'all') {
      filtered = filtered.filter(tx => tx.type === state.txFilter);
    }

    // Filter search
    if (query) {
      filtered = filtered.filter(tx => {
        return tx.title.toLowerCase().includes(query) ||
               (tx.merchant && tx.merchant.toLowerCase().includes(query)) ||
               tx.category.toLowerCase().includes(query) ||
               tx.date.includes(query) ||
               String(tx.amount).includes(query);
      });
    }

    // Sort descending by date
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (filtered.length === 0) {
      el.fullTxList.innerHTML = `
        <div class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <div>${t('noTransactions')}</div>
        </div>
      `;
    } else {
      el.fullTxList.innerHTML = filtered.map(tx => renderTxItemHtml(tx)).join('');
      attachTxClickHandlers(el.fullTxList);
    }
  }

  function renderBudgets() {
    if (!el.budgetsContainer) return;
    const catTotals = getCategoryTotals();

    el.budgetsContainer.innerHTML = state.budgets.map(b => {
      const spent = catTotals[b.category] || 0;
      const limit = Number(b.limit) || 1;
      const pct = Math.min(150, Math.round((spent / limit) * 100));
      const isOver = spent >= limit;
      const isWarning = spent >= limit * 0.8 && !isOver;

      let statusBadge = `<span class="budget-status-pill status-ok">On Track (${pct}%)</span>`;
      let barColor = '#10b981';

      if (isOver) {
        statusBadge = `<span class="budget-status-pill status-danger">Exceeded (${pct}%)</span>`;
        barColor = '#ef4444';
      } else if (isWarning) {
        statusBadge = `<span class="budget-status-pill status-warn">Warning (${pct}%)</span>`;
        barColor = '#f59e0b';
      }

      const icon = CATEGORY_ICONS[b.category] || '🏷️';

      return `
        <div class="budget-card" data-cat="${b.category}">
          <div class="budget-header">
            <div class="budget-title">
              <span>${icon}</span>
              <span>${translateCat(b.category)}</span>
            </div>
            ${statusBadge}
          </div>
          <div class="cat-progress-track">
            <div class="cat-progress-fill" style="width: ${Math.min(100, pct)}%; background-color: ${barColor};"></div>
          </div>
          <div class="budget-header" style="font-size: 12px;">
            <span style="color: var(--text-muted);">${t('spentOf')}:</span>
            <span><strong>${formatMoney(spent)}</strong> / ${formatMoney(limit)}</span>
          </div>
        </div>
      `;
    }).join('');

    // Allow clicking budget card to edit ceiling
    el.budgetsContainer.querySelectorAll('.budget-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-cat');
        const current = state.budgets.find(b => b.category === cat);
        const newLimit = prompt(`Set new monthly budget limit for ${translateCat(cat)}:`, current ? current.limit : 5000);
        if (newLimit !== null && !isNaN(newLimit) && Number(newLimit) > 0) {
          if (current) current.limit = Number(newLimit);
          Store.saveBudgets(state.budgets);
          renderBudgets();
          showToast(`Budget for ${translateCat(cat)} updated!`);
        }
      });
    });
  }

  // --- 11B. NOTEPAD HANDLERS ---
  function renderNotepad() {
    if (!el.notesContainer) return;

    const q = (state.notesSearchQuery || '').toLowerCase().trim();
    const catFilter = state.notesCategoryFilter || 'All';

    const filtered = (state.notes || []).filter(note => {
      const matchCat = catFilter === 'All' || (note.category || '').toLowerCase() === catFilter.toLowerCase();
      const matchSearch = !q || (note.title || '').toLowerCase().includes(q) || (note.content || '').toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    if (el.lblNotepadCount) {
      if (state.profile.language === 'bn') {
        el.lblNotepadCount.textContent = `মোট ${(state.notes || []).length} ${t('notepadCount')}`;
      } else {
        el.lblNotepadCount.textContent = `${(state.notes || []).length} ${t('notepadCount')}`;
      }
    }

    if (el.noteCatChips) {
      el.noteCatChips.forEach(chip => {
        const cat = chip.getAttribute('data-cat') || 'All';
        chip.classList.toggle('active', cat.toLowerCase() === catFilter.toLowerCase());
      });
    }

    if (filtered.length === 0) {
      el.notesContainer.innerHTML = `
        <div class="card" style="text-align: center; padding: 40px 20px; border: 2px dashed var(--border-subtle); background: var(--bg-card);">
          <div style="font-size: 40px; margin-bottom: 12px;">📝</div>
          <h3 style="font-size: 15px; font-weight: 700; margin-bottom: 6px; color: var(--text-main);">
            ${t('noNotesFound')}
          </h3>
          <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 16px;">
            ${t('emptyNotesHelp')}
          </p>
          <button id="btn-empty-add-note" class="btn-primary" style="display: inline-flex; width: auto; padding: 10px 22px; margin: 0 auto; gap: 8px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span>${t('writeFirstNote')}</span>
          </button>
        </div>
      `;
      const btnEmpty = document.getElementById('btn-empty-add-note');
      if (btnEmpty) {
        btnEmpty.addEventListener('click', openAddNoteModal);
      }
      return;
    }

    el.notesContainer.innerHTML = filtered.map(note => {
      const catKey = (note.category || 'notes').toLowerCase();
      const catClass = `note-badge-${catKey}`;
      return `
        <div class="note-card" data-note-id="${note.id}">
          <div class="note-header-row">
            <span class="note-badge ${catClass}">${note.category || 'Notes'}</span>
            <div class="note-actions-group">
              <span class="note-date-text">${note.date || ''}</span>
              <button class="btn-note-action btn-note-edit" data-edit-note="${note.id}" title="Edit Note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              </button>
              <button class="btn-note-action btn-note-delete" data-delete-note="${note.id}" title="Delete Note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
          </div>
          <div class="note-card-title">${escapeHtml(note.title || 'Untitled')}</div>
          ${note.content ? `<div class="note-card-content">${escapeHtml(note.content)}</div>` : ''}
        </div>
      `;
    }).join('');

    // Attach edit and delete events
    el.notesContainer.querySelectorAll('[data-edit-note]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-edit-note');
        openEditNoteModal(id);
      });
    });

    el.notesContainer.querySelectorAll('[data-delete-note]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-delete-note');
        if (confirm(t('deleteNoteConfirm'))) {
          state.notes = state.notes.filter(n => n.id !== id);
          Store.saveNotes(state.notes);
          renderNotepad();
          showToast(t('noteDeleted'));
        }
      });
    });

    el.notesContainer.querySelectorAll('.note-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-note-id');
        openEditNoteModal(id);
      });
    });
  }

  function openAddNoteModal() {
    state.editingNoteId = null;
    state.selectedNoteModalCat = 'Finance';
    if (el.lblModalNoteTitle) {
      el.lblModalNoteTitle.textContent = t('modalAddNoteTitle');
    }
    if (el.lblBtnSaveNote) {
      el.lblBtnSaveNote.textContent = t('saveNoteBtn');
    }
    if (el.noteInputTitle) el.noteInputTitle.value = '';
    if (el.noteInputContent) el.noteInputContent.value = '';

    updateNoteModalCatChips();
    if (el.modalNote) el.modalNote.classList.add('active');
    setTimeout(() => {
      if (el.noteInputTitle) el.noteInputTitle.focus();
    }, 150);
  }

  function openEditNoteModal(id) {
    const note = (state.notes || []).find(n => n.id === id);
    if (!note) return;

    state.editingNoteId = id;
    state.selectedNoteModalCat = note.category || 'Finance';
    if (el.lblModalNoteTitle) {
      el.lblModalNoteTitle.textContent = t('modalEditNoteTitle');
    }
    if (el.lblBtnSaveNote) {
      el.lblBtnSaveNote.textContent = t('updateNoteBtn');
    }
    if (el.noteInputTitle) el.noteInputTitle.value = note.title || '';
    if (el.noteInputContent) el.noteInputContent.value = note.content || '';

    updateNoteModalCatChips();
    if (el.modalNote) el.modalNote.classList.add('active');
  }

  function closeNoteModal() {
    if (el.modalNote) el.modalNote.classList.remove('active');
    state.editingNoteId = null;
  }

  function updateNoteModalCatChips() {
    if (el.noteModalCatChips) {
      el.noteModalCatChips.forEach(chip => {
        const cat = chip.getAttribute('data-form-cat') || '';
        chip.classList.toggle('active', cat.toLowerCase() === (state.selectedNoteModalCat || 'Finance').toLowerCase());
      });
    }
  }

  function handleSaveNote() {
    const title = (el.noteInputTitle ? el.noteInputTitle.value : '').trim();
    const content = (el.noteInputContent ? el.noteInputContent.value : '').trim();
    const category = state.selectedNoteModalCat || 'Finance';

    if (!title && !content) {
      alert(state.profile.language === 'bn' ? 'অনুগ্রহ করে নোটের শিরোনাম বা বিবরণ লিখুন।' : 'Please enter a title or content for your note.');
      return;
    }

    const today = getFormattedDate(0);

    if (state.editingNoteId) {
      const idx = state.notes.findIndex(n => n.id === state.editingNoteId);
      if (idx !== -1) {
        state.notes[idx] = {
          ...state.notes[idx],
          title: title || (state.profile.language === 'bn' ? 'শিরোনামহীন নোট' : 'Untitled Note'),
          content: content,
          category: category
        };
      }
      showToast(t('noteSaved'));
    } else {
      const newNote = {
        id: 'note-' + Date.now(),
        title: title || (state.profile.language === 'bn' ? 'শিরোনামহীন নোট' : 'Untitled Note'),
        content: content,
        category: category,
        date: today,
        timestamp: Date.now()
      };
      if (!Array.isArray(state.notes)) state.notes = [];
      state.notes.unshift(newNote);
      showToast(t('noteSaved'));
    }

    Store.saveNotes(state.notes);
    closeNoteModal();
    renderNotepad();
  }

  function syncSettingsFields() {
    if (el.inputUserName) el.inputUserName.value = state.profile.name || 'Rieaz';
    if (el.chkReminder) el.chkReminder.checked = !!state.profile.notifyTx;
    if (el.chkBudgetAlerts) el.chkBudgetAlerts.checked = !!state.profile.notifyBudget;

    // Currency buttons
    el.currencyButtons.forEach(btn => {
      const curr = btn.getAttribute('data-curr');
      btn.classList.toggle('active', curr === state.profile.currency);
    });

    // Language buttons
    el.languageButtons.forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', lang === state.profile.language);
    });
  }

  // --- 12. TRANSACTION MODAL HANDLERS ---
  function openAddTxModal() {
    state.editingTxId = null;
    state.txModalType = 'expense';
    updateModalTypeSegment();
    if (el.lblModalTitle) el.lblModalTitle.textContent = t('addTxTitle');
    if (el.lblBtnSaveTx) el.lblBtnSaveTx.textContent = t('saveTx');

    el.txInputTitle.value = '';
    el.txInputAmount.value = '';
    el.txInputCategory.value = 'Food';
    el.txInputMerchant.value = '';
    el.txInputDate.value = getFormattedDate(0);

    el.modalTx.classList.add('active');
  }

  function openEditTxModal(txId) {
    const tx = state.transactions.find(t => t.id === txId);
    if (!tx) return;

    state.editingTxId = txId;
    state.txModalType = tx.type;
    updateModalTypeSegment();
    if (el.lblModalTitle) el.lblModalTitle.textContent = t('editTxTitle');
    if (el.lblBtnSaveTx) el.lblBtnSaveTx.textContent = t('updateTx');

    el.txInputTitle.value = tx.title;
    el.txInputAmount.value = tx.amount;
    el.txInputCategory.value = tx.category;
    el.txInputMerchant.value = tx.merchant || '';
    el.txInputDate.value = tx.date;

    el.modalTx.classList.add('active');
  }

  function closeModal() {
    el.modalTx.classList.remove('active');
    state.editingTxId = null;
  }

  function updateModalTypeSegment() {
    if (!el.btnTypeExpense || !el.btnTypeIncome) return;
    if (state.txModalType === 'expense') {
      el.btnTypeExpense.classList.add('active');
      el.btnTypeIncome.classList.remove('active');
    } else {
      el.btnTypeIncome.classList.add('active');
      el.btnTypeExpense.classList.remove('active');
    }
  }

  function saveTransactionFromModal() {
    const title = el.txInputTitle.value.trim();
    const amount = parseFloat(el.txInputAmount.value);
    const category = el.txInputCategory.value;
    const merchant = el.txInputMerchant.value.trim();
    const dateStr = el.txInputDate.value || getFormattedDate(0);

    if (!title) {
      alert('Please enter a description/title');
      return;
    }
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    const txDate = new Date(dateStr);
    const month = MONTH_NAMES[txDate.getMonth()] || state.selectedMonth;
    const year = txDate.getFullYear() || state.selectedYear;

    if (state.editingTxId) {
      // Edit
      const idx = state.transactions.findIndex(t => t.id === state.editingTxId);
      if (idx !== -1) {
        state.transactions[idx] = {
          ...state.transactions[idx],
          title,
          amount,
          type: state.txModalType,
          category,
          merchant,
          date: dateStr,
          month,
          year
        };
      }
    } else {
      // Add
      const newTx = {
        id: 'tx-' + Date.now(),
        title,
        amount,
        type: state.txModalType,
        category,
        merchant,
        date: dateStr,
        month,
        year
      };
      state.transactions.push(newTx);
    }

    Store.saveTransactions(state.transactions);
    closeModal();
    renderAll();
    showToast(t('txSaved'));
  }

  // --- 13. DATA BACKUP & RESTORE ---
  function exportJsonBackup() {
    const payload = {
      app: "FinPulse",
      version: "2.5.4",
      developer: "Rieaz",
      backupTimestamp: new Date().toISOString(),
      userProfile: state.profile,
      budgets: state.budgets,
      transactions: state.transactions,
      notes: state.notes
    };

    const jsonStr = JSON.stringify(payload, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `finpulse-backup-${getFormattedDate(0)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Backup JSON exported!');
  }

  function handleBackupImport(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (Array.isArray(data.transactions)) {
          state.transactions = data.transactions;
          Store.saveTransactions(state.transactions);
        }
        if (Array.isArray(data.budgets)) {
          state.budgets = data.budgets;
          Store.saveBudgets(state.budgets);
        }
        if (Array.isArray(data.notes)) {
          state.notes = data.notes;
          Store.saveNotes(state.notes);
        }
        if (data.userProfile) {
          state.profile = { ...state.profile, ...data.userProfile };
          Store.saveProfile(state.profile);
        }
        renderAll();
        showToast('Backup restored successfully!');
      } catch (err) {
        alert('Invalid JSON backup file.');
      }
    };
    reader.readAsText(file);
  }

  // --- 14. EVENT LISTENERS SETUP ---
  function setupEventListeners() {
    // Theme Toggle
    if (el.themeToggle) {
      el.themeToggle.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }

    // Bottom Navigation Tabs
    el.navItems.forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.getAttribute('data-tab');
        switchTab(tab);
      });
    });

    // View all transactions button from dashboard
    if (el.btnViewAllTx) {
      el.btnViewAllTx.addEventListener('click', () => switchTab('transactions'));
    }

    // FAB Add button (adds note if in notepad, or transaction otherwise)
    if (el.fabAddTx) {
      el.fabAddTx.addEventListener('click', () => {
        if (state.activeTab === 'notepad') {
          openAddNoteModal();
        } else {
          openAddTxModal();
        }
      });
    }

    // Modal Close
    if (el.btnCloseModal) {
      el.btnCloseModal.addEventListener('click', closeModal);
    }
    if (el.modalTx) {
      el.modalTx.addEventListener('click', (e) => {
        if (e.target === el.modalTx) closeModal();
      });
    }

    // Modal Expense / Income Type
    if (el.btnTypeExpense) {
      el.btnTypeExpense.addEventListener('click', () => {
        state.txModalType = 'expense';
        updateModalTypeSegment();
      });
    }
    if (el.btnTypeIncome) {
      el.btnTypeIncome.addEventListener('click', () => {
        state.txModalType = 'income';
        updateModalTypeSegment();
      });
    }

    // Save Tx button
    if (el.btnSaveTx) {
      el.btnSaveTx.addEventListener('click', saveTransactionFromModal);
    }

    // Transaction Search & Filter
    if (el.inputSearchTx) {
      el.inputSearchTx.addEventListener('input', (e) => {
        state.txSearchQuery = e.target.value;
        renderTransactionsList();
      });
    }

    el.filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        el.filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.txFilter = pill.getAttribute('data-filter');
        renderTransactionsList();
      });
    });

    // Notepad Event Listeners
    if (el.btnOpenAddNote) {
      el.btnOpenAddNote.addEventListener('click', openAddNoteModal);
    }
    if (el.btnCloseNoteModal) {
      el.btnCloseNoteModal.addEventListener('click', closeNoteModal);
    }
    if (el.modalNote) {
      el.modalNote.addEventListener('click', (e) => {
        if (e.target === el.modalNote) closeNoteModal();
      });
    }
    if (el.noteModalCatChips) {
      el.noteModalCatChips.forEach(chip => {
        chip.addEventListener('click', () => {
          const cat = chip.getAttribute('data-form-cat') || 'Finance';
          state.selectedNoteModalCat = cat;
          updateNoteModalCatChips();
        });
      });
    }
    if (el.btnSaveNote) {
      el.btnSaveNote.addEventListener('click', handleSaveNote);
    }
    if (el.inputSearchNotes) {
      el.inputSearchNotes.addEventListener('input', (e) => {
        state.notesSearchQuery = e.target.value;
        renderNotepad();
      });
    }
    if (el.noteCatChips) {
      el.noteCatChips.forEach(chip => {
        chip.addEventListener('click', () => {
          const cat = chip.getAttribute('data-cat') || 'All';
          state.notesCategoryFilter = cat;
          renderNotepad();
        });
      });
    }

    // Settings Profile Save
    if (el.btnSaveProfile) {
      el.btnSaveProfile.addEventListener('click', () => {
        state.profile.name = el.inputUserName.value.trim() || 'Rieaz';
        state.profile.notifyTx = el.chkReminder.checked;
        state.profile.notifyBudget = el.chkBudgetAlerts.checked;
        Store.saveProfile(state.profile);
        showToast(t('profileSaved'));
      });
    }

    // Currency selector
    el.currencyButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        el.currencyButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.profile.currency = btn.getAttribute('data-curr');
        Store.saveProfile(state.profile);
        renderAll();
      });
    });

    // Language selector
    el.languageButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        el.languageButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
        Store.saveProfile(state.profile);
        renderAll();
      });
    });

    // Backup & Restore
    if (el.btnExportBackup) {
      el.btnExportBackup.addEventListener('click', exportJsonBackup);
    }
    if (el.btnImportBackup && el.fileImportInput) {
      el.btnImportBackup.addEventListener('click', () => el.fileImportInput.click());
      el.fileImportInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          handleBackupImport(e.target.files[0]);
        }
      });
    }

    // Factory Reset
    if (el.btnFactoryReset) {
      el.btnFactoryReset.addEventListener('click', () => {
        const pin = prompt(t('resetConfirmPrompt'));
        if (pin && pin.trim().toUpperCase() === 'RESET') {
          state.transactions = [];
          state.budgets = JSON.parse(JSON.stringify(DEFAULT_BUDGETS));
          state.notes = JSON.parse(JSON.stringify(DEFAULT_NOTES));
          state.profile = JSON.parse(JSON.stringify(DEFAULT_PROFILE));
          Store.saveTransactions(state.transactions);
          Store.saveBudgets(state.budgets);
          Store.saveNotes(state.notes);
          Store.saveProfile(state.profile);
          renderAll();
          showToast(t('resetSuccess'));
        }
      });
    }
  }

  function switchTab(tab) {
    state.activeTab = tab;
    // Update nav active
    el.navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-tab') === tab);
    });
    // Update screens
    for (const [key, screenEl] of Object.entries(el.screens)) {
      if (screenEl) {
        screenEl.classList.toggle('active', key === tab);
      }
    }
    if (tab === 'notepad') {
      renderNotepad();
    }
    // Show FAB on dashboard, reports, transactions, and notepad
    if (el.fabAddTx) {
      el.fabAddTx.style.display = (tab === 'dashboard' || tab === 'reports' || tab === 'transactions' || tab === 'notepad') ? 'flex' : 'none';
    }
  }

  // --- 15. PWA INSTALL POPUP SYSTEM (User Specific Requirement) ---
  let deferredPrompt = null;

  function setupPwaInstallation() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    const isIos = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Detect browser install prompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;

      // Show header install button
      if (el.btnHeaderInstall) el.btnHeaderInstall.style.display = 'flex';

      // Automatically display the popup modal on visit if not previously dismissed
      const dismissed = sessionStorage.getItem(STORAGE_KEYS.PWA_PROMPT_DISMISSED);
      if (!isStandalone && !dismissed) {
        setTimeout(() => {
          showInstallPopup();
        }, 1200);
      }
    });

    // If on iOS and not standalone, show the custom iOS guide in popup
    if (isIos && !isStandalone) {
      if (el.btnHeaderInstall) el.btnHeaderInstall.style.display = 'flex';
      if (el.iosInstallGuide) el.iosInstallGuide.style.display = 'block';
      const dismissed = sessionStorage.getItem(STORAGE_KEYS.PWA_PROMPT_DISMISSED);
      if (!dismissed) {
        setTimeout(() => {
          showInstallPopup();
        }, 1500);
      }
    }

    // Header install button click
    if (el.btnHeaderInstall) {
      el.btnHeaderInstall.addEventListener('click', showInstallPopup);
    }

    // Settings screen install button click
    if (el.btnSettingsInstallPwa) {
      el.btnSettingsInstallPwa.addEventListener('click', showInstallPopup);
    }

    // Popup Install Action
    if (el.btnPopupInstall) {
      el.btnPopupInstall.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          const choice = await deferredPrompt.userChoice;
          if (choice.outcome === 'accepted') {
            showToast('Thank you for installing FinPulse!');
          }
          deferredPrompt = null;
        } else if (isIos) {
          if (el.iosInstallGuide) el.iosInstallGuide.style.display = 'block';
          showToast('Tap Share icon and "Add to Home Screen"');
          return;
        } else {
          showToast('Use browser menu to Add to Home Screen / Install');
        }
        hideInstallPopup();
      });
    }

    // Popup Dismiss Action
    if (el.btnPopupDismiss) {
      el.btnPopupDismiss.addEventListener('click', () => {
        sessionStorage.setItem(STORAGE_KEYS.PWA_PROMPT_DISMISSED, 'true');
        hideInstallPopup();
      });
    }

    window.addEventListener('appinstalled', () => {
      hideInstallPopup();
      if (el.btnHeaderInstall) el.btnHeaderInstall.style.display = 'none';
      showToast('FinPulse App successfully installed!');
    });
  }

  function showInstallPopup() {
    if (el.installPopup) el.installPopup.classList.add('show');
  }

  function hideInstallPopup() {
    if (el.installPopup) el.installPopup.classList.remove('show');
  }

  // --- 16. SERVICE WORKER REGISTRATION ---
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      // Auto-reload when new service worker takes control
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });

      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then((reg) => {
            // Check for updates on every page view
            reg.update();
            reg.addEventListener('updatefound', () => {
              const newWorker = reg.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // Force refresh to immediate latest version
                    window.location.reload();
                  }
                });
              }
            });
          })
          .catch((err) => {
            // Registration fallback
          });
      });
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // Run app on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
