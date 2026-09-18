# FinPulse - Smart Personal Finance Tracker (PWA)
**Developed by Rieaz**

A modern, responsive, offline-first Progressive Web App (PWA) for complete personal financial management.

---

## 🌟 মূল বৈশিষ্ট্যসমূহ (Key Features)
1. **PWA অটোমেটিক ইনস্টল পপআপ (Automatic Install Popup)**:
   - ওয়েবসাইটে ভিজিট করলেই ব্যবহারকারীর সামনে সুন্দর "Install FinPulse" পপআপ আসবে।
   - ইনস্টল করলে ফোনে বা কম্পিউটারে কোনো অ্যাপ স্টোর ছাড়াই সরাসরি নেটিভ অ্যাপ হিসেবে হোম স্ক্রিনে চলে আসবে।
   - iOS / iPhone Safari ব্যবহারকারীদের জন্য শেয়ার আইকন থেকে "Add to Home Screen" গাইড সংযুক্ত।
2. **অফলাইন সাপোর্ট (100% Offline Ready)**:
   - Service Worker (`sw.js`) এবং LocalStorage এর মাধ্যমে ইন্টারনেট সংযোগ ছাড়াই সম্পূর্ণ অ্যাপ চলবে।
3. **মাল্টি-ল্যাঙ্গুয়েজ (দ্বিভাষিক)**:
   - সম্পূর্ণ বাংলা (বাংলা) ও ইংরেজি (English) ইন্টারফেস।
4. **মাল্টি-কারেন্সি (Multi-Currency)**:
   - ৳ BDT, $ USD, € EUR, £ GBP, ₹ INR ইত্যাদি পছন্দসই মুদ্রা নির্বাচন।
5. **স্মার্ট বাজেট ও অ্যালার্ট**:
   - ক্যাটাগরি ভিত্তিক বাজেট সীমা ও ৮০% ক্রস করলে সতর্কবার্তা।
6. **ডেটা ব্যাকআপ ও রিস্টোর**:
   - ১ ক্লিকে সম্পূর্ণ ডেটা JSON ফাইল হিসেবে ডাউনলোড ও রিস্টোর করার সুবিধা।

---

## 🚀 কীভাবে যেকোনো ওয়েবসাইটে হোস্ট করবেন (How to Host Anywhere)

এই ফোল্ডারের সকল ফাইল (`index.html`, `manifest.json`, `sw.js`, `style.css`, `app.js`, `icons/`) আপনি যেকোনো হোস্টিং সার্ভিসে সরাসরি আপলোড করলেই সাইট লাইভ হয়ে যাবে:

### অপশন ১: Vercel / Netlify (সবচেয়ে সহজ - ফ্রি HTTPS সহ)
1. [vercel.com](https://vercel.com) অথবা [netlify.com](https://netlify.com) এ যান।
2. এই `pwa` ফোল্ডারটি Drag & Drop করে দিন।
3. কয়েক সেকেন্ডের মধ্যে আপনার লাইভ সাইট লিংক পেয়ে যাবেন এবং PWA রেডি হয়ে যাবে!

### অপশন ২: GitHub Pages (ফ্রি)
1. GitHub-এ একটি রিপোজিটরি তৈরি করুন।
2. এই ফাইলের কোড পুশ করুন।
3. Settings > Pages এ গিয়ে Root ব্রাঞ্চ নির্বাচন করে Save করুন।

### অপশন ৩: সাধারণ cPanel / Apache / Nginx
1. আপনার হোস্টিং cPanel-এর `public_html` ফোল্ডারে এই ফাইলগুলো আপলোড করে দিন।
2. নিশ্চিত করুন আপনার ডোমেইনে SSL (HTTPS) সক্রিয় আছে (PWA ইন্সটল পপআপের জন্য HTTPS বাধ্যতামূলক)।

---

## 👤 স্বত্বাধিকার (Ownership)
- **Developer**: Rieaz
- **Version**: 2.5.3 (PWA Edition)
- **Copyright**: © 2026 Rieaz. All rights reserved.
