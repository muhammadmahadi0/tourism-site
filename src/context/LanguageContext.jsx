import React, { createContext, useContext, useState, useEffect } from 'react';

export const translations = {
  EN: {
    // Nav & Topbar
    topbarTitle: "Official Portal of the Ministry of Civil Aviation and Tourism",
    topbarAlert: "Live Travel Alert: Monsoon Updates",
    navHome: "Home",
    navPlaces: "Places to Visit",
    navEvents: "Events & Festivals",
    navAdvisory: "Travel Advisory",
    navMinistry: "Ministry Info",
    planTrip: "Plan Your Trip",
    brandName: "Visit Bangladesh",
    brandSubtitle: "National Tourism Board",
    navTitle: "Navigation",
    lightMode: "Light",
    darkMode: "Dark",
    switchToLight: "Switch to Light Mode",
    switchToDark: "Switch to Dark Mode",
    languageLabel: "Language:",

    // Hero Banner
    hero1Badge: "UNESCO World Heritage Site",
    hero1Location: "Khulna Division // Bay of Bengal",
    hero1Title: "Where Wild Mangroves Meet Tidal Waters",
    hero1Subtitle: "Navigate the world's largest mangrove delta, home to the elusive Royal Bengal Tiger and endless river labyrinths.",
    
    hero2Badge: "Coastal Paradise",
    hero2Location: "Chittagong Coast // 120 KM Shoreline",
    hero2Title: "The World's Longest Natural Sand Beach",
    hero2Subtitle: "Listen to the roar of Bay of Bengal tides, ocean sunsets along Marine Drive, and golden coral beaches.",

    hero3Badge: "Tea Capital",
    hero3Location: "Sylhet Division // Tea Country",
    hero3Title: "Rolling Emerald Hills & Rainforest Canopies",
    hero3Subtitle: "Immerse yourself in endless terraced tea gardens and pristine gibbon sanctuaries.",

    exploreDestination: "Explore Destination",
    viewAllPlaces: "View All Places",
    advisoryChipText: "Travel Update: Monsoon Advisory & Eco-Permits",

    // Section Headings
    famousLabel: "Top Destinations",
    famousTitle: "Famous Marvels of the Delta",
    famousSubtitle: "Explore the iconic UNESCO mangroves, unbroken sandy sea beaches, rainforest swamps, and misty hill estates.",
    exploreCatalogue: "Explore Catalogue",

    categoryLabel: "Category Browse",
    categoryTitle: "Curated Places to Explore",
    categorySubtitle: "Whether you crave ancient Buddhist monastic ruins, tranquil tea garden walks, or tidal rivers, discover destinations tailored to your passion.",

    eventsLabel: "Cultural Calendar",
    eventsTitle: "Festivals & Heritage Events",
    eventsSubtitle: "From the UNESCO Mangal Shobhajatra parade to full-moon island gatherings, immerse yourself in centuries of living tradition.",
    viewCalendar: "View Full Event Calendar",

    advisoryTitle: "Stay Informed Before You Journey",
    advisorySubtitle: "Check timely weather alerts, river vessel danger signals, eco-tourism permit deadlines, and visa-on-arrival guidelines issued by the Ministry.",
    readBulletins: "Read Official Bulletins",

    missionTitle: "Promoting Responsible & Eco-Friendly Tourism",
    missionSubtitle: "Our mission is to protect delicate mangrove sanctuaries, empower indigenous river communities, and provide seamless travel experiences for global guests.",
    learnMandate: "Learn About Ministry Mandate",

    // Categories
    catAll: "All Categories",
    catWildlife: "Wildlife & Mangroves",
    catBeaches: "Beaches & Coasts",
    catTea: "Tea Gardens & Hills",
    catHeritage: "Heritage & History",
    catRivers: "Rivers & Wetlands",

    // Places Page
    placesHeaderLabel: "National Destination Catalogue",
    placesHeaderTitle: "Explore Destinations Across Bangladesh",
    placesHeaderSub: "Filter by region, category, or search directly to discover mangrove sanctuaries, tea country, island reefs, and ancient ruins.",
    searchPlaceholder: "Search by destination name, region, or keyword...",
    allRegions: "All Regions / Divisions",
    sortPopular: "Sort: Most Popular",
    sortRating: "Sort: Highest Rated",
    sortAlpha: "Sort: Alphabetical (A-Z)",
    showing: "Showing",
    destinations: "destination(s)",
    resetFilters: "Reset Filters",
    noPlacesFound: "No Destinations Found",
    noPlacesSub: "Try adjusting your search keywords or clearing region filters.",

    // Detail Page
    backToDestinations: "Back to All Destinations",
    overviewHeritage: "Overview & Heritage",
    highlightsTitle: "Key Highlights & Attractions",
    howToGetThere: "How to Get There",
    bestTimeToVisit: "Best Time to Visit",
    geoPosition: "Geographic Position",
    checkAdvisories: "Check Travel Advisories",
    filterCategory: "Category:",

    // Events Page
    eventsHeaderLabel: "Cultural Heritage & Festivals",
    eventsHeaderTitle: "Festivals & Tourism Events",
    eventsHeaderSub: "Experience traditional Bengali New Year parades, indigenous hill water festivals, full-moon river gatherings, and folk music galas across the nation.",
    filterType: "Filter Event Type:",
    allEvents: "All Events",

    // Advisory Page
    advisoryHeaderLabel: "Official Government Bulletin Desk",
    advisoryHeaderTitle: "Travel Advisories & Safety Notices",
    advisoryHeaderSub: "Timely safety alerts, weather forecasts, visa-on-arrival policies, and eco-tourism permit guidelines issued by the Ministry of Tourism.",
    filterSeverity: "Filter Severity:",
    allNotices: "All Notices",
    published: "Published:",
    severityWarning: "WARNING",
    severityInfo: "INFO",

    // Ministry Page
    ministryHeaderLabel: "Official Mandate & Governance",
    ministryHeaderTitle: "Ministry of Civil Aviation & Tourism",
    ministryHeaderSub: "Government of the People's Republic of Bangladesh",
    visionTitle: "Our Vision & Core Mandate",
    visionSub: "The Ministry of Civil Aviation and Tourism is committed to developing Bangladesh into a premier sustainable tourism destination in South Asia. By safeguarding natural ecosystems like the Sundarbans mangrove forest and Lawachara rainforest while celebrating our rich riverine culture, we build trustworthy infrastructure for global travelers.",
    protectedEcosystems: "Protected Ecosystems",
    protectedEcosystemsSub: "Enforcing strict eco-tourism limits across tidal reserves and wildlife sanctuaries.",
    culturalHeritage: "Cultural Heritage",
    culturalHeritageSub: "Promoting ancient monuments, indigenous traditions, and UNESCO heritage sites.",
    digitalGovernance: "Digital Governance",
    digitalGovernanceSub: "Online entry permits, verified tour operators, and RTI public transparency.",
    secretariatTitle: "Ministry Secretariat",
    headOffice: "Head Office Address",
    helpline: "Helpline & Desk",
    officialEmail: "Official Email",
    inquiryForm: "Public Inquiry Form",
    fullName: "Full Name *",
    emailAddress: "Email Address *",
    subject: "Subject",
    message: "Message *",
    submitInquiry: "Submit Inquiry",
    inquirySuccess: "Inquiry Submitted Successfully",
    inquirySuccessSub: "Thank you. Your message has been logged with the Ministry Information Desk.",
    namePlaceholder: "Your official name",
    emailPlaceholder: "name@domain.com",
    subjectPlaceholder: "Permits, advisories, general inquiry",
    messagePlaceholder: "Type your question or inquiry here...",
    headOfficeValue: "Building 6 (19th Floor), Bangladesh Secretariat, Abdul Gani Road, Dhaka-1000",
    helplineValue: "+880 (2) 9574421 / Tourist Police Hotline: 138",
    emailValue: "info@tourismboard.gov.bd / rti@mocat.gov.bd",

    // Footer
    footerDesc: "Official portal promoting eco-tourism, cultural heritage, and natural wonders of Bangladesh — from the world's largest mangrove forest to serene hill tracts and coastal beaches.",
    footerVerified: "Government Seal Verified | gov.bd standard compliant",
    footerQuickLinks: "Explore",
    footerRegions: "Key Regions",
    footerContact: "Ministry Desk",
    footerBrandSubtitle: "Ministry of Civil Aviation & Tourism",
    footerAddress: "Building 6, Bangladesh Secretariat, Dhaka-1000",
    footerPhone: "+880 (2) 9574421",
    footerEmail: "info@tourismboard.gov.bd",
    regionSundarbans: "Sundarbans Mangrove Delta",
    regionCoxsBazar: "Cox's Bazar Coastal Strip",
    regionSylhetTea: "Sylhet Tea Estates & Swamps",
    regionHillTracts: "Chittagong Hill Tracts",
    regionRajshahi: "Rajshahi Heritage Circuit",
    copyright: "© " + new Date().getFullYear() + " Government of the People's Republic of Bangladesh. All rights reserved.",

    // Shared / Detail
    officialAdvisoryDesk: "Official Travel Advisory Desk",
    latitude: "Latitude:",
    longitude: "Longitude:",
    regionLabel: "Region:",
    featured: "Featured",
    details: "Details",

    // Regions (data values)
    regionKhulna: "Khulna Division",
    regionChittagong: "Chittagong Division",
    regionSylhet: "Sylhet Division",
    regionRangamatiHill: "Rangamati Hill District",
    regionRangamati: "Rangamati District",
    regionRajshahi: "Rajshahi Division",

    // Event Types (data values)
    eventTypeCultural: "Cultural Festival",
    eventTypeReligious: "Religious & Folk Festival",
    eventTypeIndigenous: "Indigenous Festival",
    eventTypeMusic: "Music & Arts",
    eventTypeTrade: "Trade & Culinary Expo",
  },
  BN: {
    // Nav & Topbar
    topbarTitle: "বেসামরিক বিমান পরিবহন ও পর্যটন মন্ত্রণালয় অফিসিয়াল পোর্টাল",
    topbarAlert: "লাইভ ট্রাভেল অ্যালার্ট: বর্ষা মৌসুম আপডেট",
    navHome: "হোম",
    navPlaces: "দর্শনীয় স্থান",
    navEvents: "উৎসব ও ইভেন্ট",
    navAdvisory: "ভ্রমণ নির্দেশিকা",
    navMinistry: "মন্ত্রণালয় তথ্য",
    planTrip: "ভ্রমণ পরিকল্পনা করুন",
    brandName: "ভিজিট বাংলাদেশ",
    brandSubtitle: "জাতীয় পর্যটন বোর্ড",
    navTitle: "নেভিগেশন",
    lightMode: "লাইট",
    darkMode: "ডার্ক",
    switchToLight: "লাইট মোডে স্যুইচ করুন",
    switchToDark: "ডার্ক মোডে স্যুইচ করুন",
    languageLabel: "ভাষা:",

    // Hero Banner
    hero1Badge: "ইউনেস্কো ওয়ার্ল্ড হেরিটেজ সাইট",
    hero1Location: "খুলনা বিভাগ // বঙ্গোপসাগর",
    hero1Title: "যেখানে ম্যানগ্রোভ বুনো প্রান্তর ও নদী মেলে",
    hero1Subtitle: "বিশ্বের সর্ববৃহৎ ম্যানগ্রোভ ডেল্টা ভ্রমণ করুন—রয়েল বেঙ্গল টাইগারের আবাসস্থল এবং অপরূপ নদী পথ।",

    hero2Badge: "উপকূলীয় স্বর্গ",
    hero2Location: "চট্টগ্রাম উপকূল // ১২০ কিমি সমুদ্র সৈকত",
    hero2Title: "বিশ্বের দীর্ঘতম প্রাকৃতিক বালুকাময় সমুদ্র সৈকত",
    hero2Subtitle: "বঙ্গোপসাগরের উত্তাল তরঙ্গমালা, মেরিন ড্রাইভের সূর্যাস্ত এবং সোনালী প্রাকৃতিক সৈকতের সৌন্দর্য উপভোগ করুন।",

    hero3Badge: "চায়ের রাজধানী",
    hero3Location: "সিলেট বিভাগ // চায়ের দেশ",
    hero3Title: "সবুজ চায়ের পাহাড় ও রেইনফরেস্ট",
    hero3Subtitle: "অনন্ত সবুজ চা বাগান এবং লাউয়াছড়া অভয়ারণ্যের প্রাকৃতিক সৌন্দর্যে মুগ্ধ হন।",

    exploreDestination: "গন্তব্য এক্সপ্লোর করুন",
    viewAllPlaces: "সব স্থান দেখুন",
    advisoryChipText: "ভ্রমণ আপডেট: বর্ষা সতর্কতা ও ইকো-পারমিট",

    // Section Headings
    famousLabel: "শীর্ষ আকর্ষণীয় গন্তব্য",
    famousTitle: "বাংলার প্রাকৃতিক ও ঐতিহাসিক বিস্ময়",
    famousSubtitle: "ইউনেস্কো ম্যানগ্রোভ, দীর্ঘতম সমুদ্র সৈকত, জলজ সোয়াম্প ফরেস্ট এবং পাহাড়ের সৌন্দর্য উপভোগ করুন।",
    exploreCatalogue: "ক্যাটালগ দেখুন",

    categoryLabel: "ক্যাটাগরি ব্রাউজ",
    categoryTitle: "পছন্দসই ভ্রমণের স্থান",
    categorySubtitle: "প্রাচীন বৌদ্ধ বিহারের ধ্বংসাবশেষ, চা বাগান, কিংবা নদী পথ—আপনার পছন্দের স্থান খুঁজে নিন।",

    eventsLabel: "সাংস্কৃতিক ক্যালেন্ডার",
    eventsTitle: "ঐতিহ্যবাহী উৎসব ও মেলা",
    eventsSubtitle: "ইউনেস্কো মঙ্গল শোভাযাত্রা থেকে রাস মেলা—শতবছরের সংস্কৃতি ও ঐতিহ্য অনুভব করুন।",
    viewCalendar: "পূর্ণাঙ্গ ইভেন্ট ক্যালেন্ডার",

    advisoryTitle: "ভ্রমণের পূর্বে তথ্য জেনে নিন",
    advisorySubtitle: "আবহাওয়া সতর্কতা, নদী পথের বিপদ সংকেত, ইকো-ট্যুরিজম পারমিট এবং ভিসা নির্দেশিকা আপডেট রাখুন।",
    readBulletins: "অফিসিয়াল বুলেটিন পড়ুন",

    missionTitle: "দায়িত্বশীল ও পরিবেশবান্ধব পর্যটন",
    missionSubtitle: "আমাদের লক্ষ্য ম্যানগ্রোভ ও রেইনফরেস্ট সংরক্ষণ করা এবং পর্যটকদের নিরবচ্ছিন্ন সেবা প্রদান করা।",
    learnMandate: "মন্ত্রণালয়ের লক্ষ্যসমূহ জানুন",

    // Categories
    catAll: "সকল ক্যাটাগরি",
    catWildlife: "বন্যপ্রাণী ও ম্যানগ্রোভ",
    catBeaches: "সমুদ্র সৈকত ও উপকূল",
    catTea: "চা বাগান ও পাহাড়",
    catHeritage: "ঐতিহ্য ও ইতিহাস",
    catRivers: "নদী ও জলাভূমি",

    // Places Page
    placesHeaderLabel: "জাতীয় গন্তব্য তালিকা",
    placesHeaderTitle: "বাংলাদেশজুড়ে দর্শনীয় স্থানসমূহ",
    placesHeaderSub: "বিভাগ, ক্যাটাগরি বা সার্চের মাধ্যমে আপনার কাঙ্ক্ষিত গন্তব্য নির্বাচন করুন।",
    searchPlaceholder: "স্থান, বিভাগ বা কিওয়ার্ড দিয়ে খুঁজুন...",
    allRegions: "সকল বিভাগ / অঞ্চল",
    sortPopular: "সাজান: জনপ্রিয়তা অনুসারে",
    sortRating: "সাজান: রেটিং অনুসারে",
    sortAlpha: "সাজান: বর্ণানুক্রমে (A-Z)",
    showing: "দেখাচ্ছে",
    destinations: "টি স্থান",
    resetFilters: "ফিল্টার রিসেট করুন",
    noPlacesFound: "কোন গন্তব্য পাওয়া যায়নি",
    noPlacesSub: "অনুগ্রহ করে অন্য কিওয়ার্ড বা ফিল্টার চেষ্টা করুন।",

    // Detail Page
    backToDestinations: "সকল গন্তব্যে ফিরে যান",
    overviewHeritage: "সংক্ষিপ্ত বিবরণ ও ঐতিহ্য",
    highlightsTitle: "প্রধান আকর্ষণ ও দর্শনীয় বস্তু",
    howToGetThere: "কীভাবে যাবেন",
    bestTimeToVisit: "ভ্রমণের উপযুক্ত সময়",
    geoPosition: "ভৌগোলিক অবস্থান",
    checkAdvisories: "ভ্রমণ নির্দেশিকা চেক করুন",
    filterCategory: "ক্যাটাগরি:",

    // Events Page
    eventsHeaderLabel: "সাংস্কৃতিক ঐতিহ্য ও উৎসব",
    eventsHeaderTitle: "জাতীয় উৎসব ও পর্যটন ইভেন্ট",
    eventsHeaderSub: "বাংলা নববর্ষ, পার্বত্য জুম জল উৎসব, পূর্ণিমা রাস মেলা এবং আন্তর্জাতিক লোক সংগীত উৎসবের আনন্দ নিন।",
    filterType: "ইভেন্ট ধরণ:",
    allEvents: "সকল ইভেন্ট",

    // Advisory Page
    advisoryHeaderLabel: "অফিসিয়াল সরকারি বুলেটিন ডেস্কা",
    advisoryHeaderTitle: "ভ্রমণ নির্দেশিকা ও নিরাপত্তা বিজ্ঞপ্তি",
    advisoryHeaderSub: "জরুরি আবহাওয়া বার্তা, ইকো-পারমিট নিয়মাবলী এবং অন-অ্যারাইভাল ভিসা সম্পর্কিত বুলেটিন।",
    filterSeverity: "সতর্কতার ধরণ:",
    allNotices: "সকল বিজ্ঞপ্তি",
    published: "প্রকাশিত:",
    severityWarning: "সতর্কতা",
    severityInfo: "তথ্য",

    // Ministry Page
    ministryHeaderLabel: "অফিসিয়াল লক্ষ্য ও পরিচালনা",
    ministryHeaderTitle: "বেসামরিক বিমান পরিবহন ও পর্যটন মন্ত্রণালয়",
    ministryHeaderSub: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
    visionTitle: "আমাদের দৃষ্টিভঙ্গি ও লক্ষ্য",
    visionSub: "সাসটেইনেবল ও পরিবেশবান্ধব পর্যটনের মাধ্যমে বাংলাদেশকে আন্তর্জাতিক অঙ্গনে তুলে ধরা আমাদের মূল লক্ষ্য।",
    protectedEcosystems: "সংরক্ষিত ইকোসিস্টেম",
    protectedEcosystemsSub: "ম্যানগ্রোভ ও অভয়ারণ্যে পরিবেশবান্ধব পর্যটন নিশ্চিতকরণ।",
    culturalHeritage: "সাংস্কৃতিক ঐতিহ্য",
    culturalHeritageSub: "প্রাচীন কৃতি ও ইউনেস্কো হেরিটেজ সাইটের প্রসার।",
    digitalGovernance: "ডিজিটাল সেবা",
    digitalGovernanceSub: "অনলাইন প্রবেশ অনুমতিপত্র ও সঠিক তথ্য প্রদান।",
    secretariatTitle: "মন্ত্রণালয় সচিবালয়",
    headOffice: "প্রধান কার্যালয়ের ঠিকানা",
    helpline: "হেল্পলাইন ও ডেস্কা",
    officialEmail: "অফিসিয়াল ইমেইল",
    inquiryForm: "জনসাধারণের আবেদন ফরম",
    fullName: "পূর্ণ নাম *",
    emailAddress: "ইমেইল ঠিকানা *",
    subject: "বিষয়",
    message: "বার্তা *",
    submitInquiry: "আবেদন জমা দিন",
    inquirySuccess: "আবেদন সফলভাবে জমা হয়েছে",
    inquirySuccessSub: "ধন্যবাদ। আপনার বার্তা তথ্য ডেস্কে সংরক্ষিত হয়েছে।",
    namePlaceholder: "আপনার দাপ্তরিক নাম",
    emailPlaceholder: "name@domain.com",
    subjectPlaceholder: "পারমিট, পরামর্শ, সাধারণ জিজ্ঞাসা",
    messagePlaceholder: "আপনার প্রশ্ন বা জিজ্ঞাসা লিখুন...",
    headOfficeValue: "বাংলাদেশ সচিবালয়, আব্দুল গনি রোড, ঢাকা-১০০০ (১৯ তলা, ভবন ৬)",
    helplineValue: "+৮৮০ (২) ৯৫৭৪৪২১ / ট্যুরিস্ট পুলিশ হটলাইন: ১৩৮",
    emailValue: "info@tourismboard.gov.bd / rti@mocat.gov.bd",

    // Footer
    footerDesc: "বাংলাদেশের ইকো-ট্যুরিজম, সাংস্কৃতিক ঐতিহ্য এবং প্রাকৃতিক সৌন্দর্যের অফিসিয়াল ওয়েব পোর্টাল।",
    footerVerified: "সরকারি সিল অনুমোদিত | gov.bd মান অনুসারী",
    footerQuickLinks: "নেভিগেশন",
    footerRegions: "গুরুত্বপূর্ণ অঞ্চল",
    footerContact: "মন্ত্রণালয় ডেস্ক",
    footerBrandSubtitle: "বেসামরিক বিমান পরিবহন ও পর্যটন মন্ত্রণালয়",
    footerAddress: "বাংলাদেশ সচিবালয়, ঢাকা-১০০০",
    footerPhone: "+৮৮০ (২) ৯৫৭৪৪২১",
    footerEmail: "info@tourismboard.gov.bd",
    regionSundarbans: "সুন্দরবন ম্যানগ্রোভ বদ্বীপ",
    regionCoxsBazar: "কক্সবাজার উপকূলীয় অঞ্চল",
    regionSylhetTea: "সিলেট চা বাগান ও জলাভূমি",
    regionHillTracts: "পার্বত্য চট্টগ্রাম",
    regionRajshahi: "রাজশাহী ঐতিহ্য সার্কিট",
    copyright: "© " + new Date().getFullYear() + " গণপ্রজাতন্ত্রী বাংলাদেশ সরকার। সর্বস্বত্ব সংরক্ষিত।",

    // Shared / Detail
    officialAdvisoryDesk: "অফিসিয়াল ট্রাভেল অ্যাডভাইজরি ডেস্ক",
    latitude: "অক্ষাংশ:",
    longitude: "দ্রাঘিমাংশ:",
    regionLabel: "অঞ্চল:",
    featured: "বৈশিষ্ট্যযুক্ত",
    details: "বিস্তারিত",

    // Regions (data values)
    regionKhulna: "খুলনা বিভাগ",
    regionChittagong: "চট্টগ্রাম বিভাগ",
    regionSylhet: "সিলেট বিভাগ",
    regionRangamatiHill: "রাঙ্গামাটি পার্বত্য জেলা",
    regionRangamati: "রাঙ্গামাটি জেলা",
    regionRajshahi: "রাজশাহী বিভাগ",

    // Event Types (data values)
    eventTypeCultural: "সাংস্কৃতিক উৎসব",
    eventTypeReligious: "ধর্মীয় ও লোক উৎসব",
    eventTypeIndigenous: "আদিবাসী উৎসব",
    eventTypeMusic: "সংগীত ও শিল্পকলা",
    eventTypeTrade: "বাণিজ্য ও রন্ধনশিল্প মেলা",
  }
};

export const CATEGORY_KEYS = {
  'Wildlife & Mangroves': 'catWildlife',
  'Beaches & Coasts': 'catBeaches',
  'Tea Gardens & Hills': 'catTea',
  'Heritage & History': 'catHeritage',
  'Rivers & Wetlands': 'catRivers',
};

export const REGION_KEYS = {
  'Khulna Division': 'regionKhulna',
  'Chittagong Division': 'regionChittagong',
  'Sylhet Division': 'regionSylhet',
  'Rangamati Hill District': 'regionRangamatiHill',
  'Rangamati District': 'regionRangamati',
  'Rajshahi Division': 'regionRajshahi',
};

export const EVENT_TYPE_KEYS = {
  'Cultural Festival': 'eventTypeCultural',
  'Religious & Folk Festival': 'eventTypeReligious',
  'Indigenous Festival': 'eventTypeIndigenous',
  'Music & Arts': 'eventTypeMusic',
  'Trade & Culinary Expo': 'eventTypeTrade',
};

export const LanguageContext = createContext({
  language: 'EN',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('app_lang') || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('app_lang', language);
    document.documentElement.lang = language === 'BN' ? 'bn' : 'en';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'EN' ? 'BN' : 'EN'));
  };

  const t = (key) => {
    const langDict = translations[language] || translations.EN;
    return langDict[key] || translations.EN[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
