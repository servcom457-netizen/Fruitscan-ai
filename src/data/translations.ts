import { LanguageCode } from "../types/fruit";

export interface UITranslations {
  appName: string;
  nav: {
    home: string;
    scan: string;
    gallery: string;
    favorites: string;
    history: string;
    settings: string;
  };
  welcome: {
    kicker: string;
    headline: string;
    subtitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    getStarted: string;
    skipToScanner: string;
    privacyNote: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    scanFruitBtn: string;
    uploadPhotoBtn: string;
    dailyPickLabel: string;
    searchPlaceholder: string;
    filterAll: string;
    filterHaitian: string;
    filterTropical: string;
    filterCitrus: string;
    filterBerry: string;
    catalogTitle: string;
    noSearchResults: string;
    offlineReadyNote: string;
    viewDetails: string;
  };
  scanner: {
    title: string;
    subtitle: string;
    permissionTitle: string;
    permissionDesc: string;
    grantPermission: string;
    permissionDenied: string;
    captureBtn: string;
    switchCamera: string;
    retakeBtn: string;
    analyzeBtn: string;
    previewTitle: string;
    consentNote: string;
    useGalleryInstead: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    dropTitle: string;
    dropHint: string;
    selectFileBtn: string;
    supportedFormats: string;
    unsupportedError: string;
    optimizingNote: string;
    lowBandwidthActive: string;
  };
  analyzing: {
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    cancelBtn: string;
  };
  results: {
    title: string;
    confidenceLabel: string;
    highConfidence: string;
    mediumConfidence: string;
    lowConfidence: string;
    uncertainBannerTitle: string;
    notAFruitTitle: string;
    notAFruitFallback: string;
    tryAgainBtn: string;
    alternativeMatchesTitle: string;
    localNamesTitle: string;
    originTitle: string;
    descriptionTitle: string;
    consumptionTitle: string;
    storageTitle: string;
    viewNutritionBtn: string;
    viewBenefitsBtn: string;
    saveFavorite: string;
    savedFavorite: string;
    shareBtn: string;
    copiedShare: string;
    scanAnother: string;
    backToResults: string;
  };
  nutrition: {
    title: string;
    perServing: string;
    calories: string;
    carbohydrates: string;
    fiber: string;
    sugars: string;
    protein: string;
    fat: string;
    water: string;
    vitaminsTitle: string;
    dailyValue: string;
    sourceNote: string;
  };
  benefits: {
    title: string;
    medicalDisclaimerTitle: string;
    medicalDisclaimerBody: string;
    precautionsTitle: string;
    noPrecautions: string;
    consumeTitle: string;
    storageTitle: string;
  };
  favorites: {
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptyDesc: string;
    exploreBtn: string;
    removeBtn: string;
  };
  history: {
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptyDesc: string;
    clearAllBtn: string;
    confirmClear: string;
    cancelClear: string;
    deleteItem: string;
    scannedOn: string;
  };
  settings: {
    title: string;
    subtitle: string;
    languageTitle: string;
    languageDesc: string;
    performanceTitle: string;
    lowBandwidthLabel: string;
    lowBandwidthDesc: string;
    saveHistoryLabel: string;
    saveHistoryDesc: string;
    privacyTitle: string;
    privacySummary: string;
    privacyPoint1: string;
    privacyPoint2: string;
    privacyPoint3: string;
    privacyPoint4: string;
    dataControlsTitle: string;
    clearHistoryBtn: string;
    clearFavoritesBtn: string;
    dataCleared: string;
    aboutTitle: string;
    aboutDesc: string;
  };
  common: {
    back: string;
    offlineBadge: string;
    errorTitle: string;
    retry: string;
    english: string;
    french: string;
    creole: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, UITranslations> = {
  en: {
    appName: "FruitScan AI",
    nav: {
      home: "Home",
      scan: "Scan",
      gallery: "Upload",
      favorites: "Favorites",
      history: "History",
      settings: "Settings",
    },
    welcome: {
      kicker: "Botanical Vision & Nutrition",
      headline: "Identify any fruit and understand what nourishes you.",
      subtitle:
        "Point your camera or upload a photo to recognize Haitian, Caribbean, and international fruits with clear nutritional facts and evidence-based health insights.",
      feature1Title: "Honest AI Recognition",
      feature1Desc:
        "Identifies dozens of tropical and everyday fruits with transparent confidence scores and alternative matches when uncertain.",
      feature2Title: "Clear Nutrition & Safety",
      feature2Desc:
        "Separates verified nutritional composition from medical claims, highlighting allergies, precautions, and storage tips.",
      feature3Title: "Works in 3 Languages & Offline",
      feature3Desc:
        "Switch seamlessly between English, French, and Haitian Creole. Saved favorites and scan history remain accessible offline.",
      getStarted: "Open FruitScan AI",
      skipToScanner: "Scan a Fruit Now",
      privacyNote:
        "Images are analyzed only when you choose to scan or upload, and are never stored on remote servers.",
    },
    home: {
      heroTitle: "Discover fruits from Haiti and around the world.",
      heroSubtitle:
        "Capture a photo with your camera or upload from your gallery to view botanical identity, vitamins, and everyday health benefits.",
      scanFruitBtn: "SCAN FRUIT",
      uploadPhotoBtn: "UPLOAD PHOTO",
      dailyPickLabel: "Daily Fruit Recommendation",
      searchPlaceholder: "Search Haitian & international fruits (e.g. mango, zaboka, guava)...",
      filterAll: "All Fruits",
      filterHaitian: "Haitian Favorites",
      filterTropical: "Tropical",
      filterCitrus: "Citrus",
      filterBerry: "Berries",
      catalogTitle: "Offline Fruit Encyclopedia",
      noSearchResults: "No fruits matched your search. Try scanning a photo instead.",
      offlineReadyNote: "Available offline",
      viewDetails: "View Profile",
    },
    scanner: {
      title: "Camera Scanner",
      subtitle: "Frame a single fruit in clear natural light for best recognition.",
      permissionTitle: "Camera access needed",
      permissionDesc:
        "FruitScan AI only accesses your camera when you open the scanner. No photos are captured or sent without your action.",
      grantPermission: "Allow Camera Access",
      permissionDenied:
        "Camera permission was blocked or unavailable on this device. You can upload a photo from your gallery instead.",
      captureBtn: "Capture Photo",
      switchCamera: "Switch Camera",
      retakeBtn: "Retake",
      analyzeBtn: "Analyze Fruit",
      previewTitle: "Review captured photo",
      consentNote: "Tap Analyze Fruit to send this compressed image for identification.",
      useGalleryInstead: "Upload from gallery instead",
    },
    gallery: {
      title: "Upload Photo",
      subtitle: "Select a fruit image from your device gallery for automatic AI identification.",
      dropTitle: "Choose or drag a fruit photo here",
      dropHint: "Photos are automatically resized on your device to save mobile data.",
      selectFileBtn: "UPLOAD PHOTO",
      supportedFormats: "Supports JPG, JPEG, PNG, and WEBP",
      unsupportedError: "Unsupported file type. Please choose a JPG, JPEG, PNG, or WEBP image.",
      optimizingNote: "Optimizing image for fast upload...",
      lowBandwidthActive: "Low-data compression enabled (640px)",
    },
    analyzing: {
      title: "Analyzing fruit image",
      subtitle: "Comparing botanical traits, skin texture, color, and cultivar features.",
      step1: "Preparing optimized image",
      step2: "Evaluating botanical species and confidence",
      step3: "Compiling nutritional profile and precautions",
      cancelBtn: "Cancel",
    },
    results: {
      title: "Identification Results",
      confidenceLabel: "Confidence",
      highConfidence: "High confidence",
      mediumConfidence: "Moderate confidence",
      lowConfidence: "Low confidence",
      uncertainBannerTitle: "Uncertain identification — review carefully",
      notAFruitTitle: "No fruit clearly detected",
      notAFruitFallback:
        "We could not reliably recognize a fruit in this photo. Please take a sharper, well-lit picture showing the fruit clearly.",
      tryAgainBtn: "Scan or Upload Another",
      alternativeMatchesTitle: "Possible Alternative Matches",
      localNamesTitle: "Multilingual Names",
      originTitle: "Origin & Geographical Distribution",
      descriptionTitle: "Botanical Description & Characteristics",
      consumptionTitle: "Best Ways to Consume",
      storageTitle: "Storage Recommendations",
      viewNutritionBtn: "Nutritional Information",
      viewBenefitsBtn: "Health Benefits & Safety",
      saveFavorite: "Save to Favorites",
      savedFavorite: "Saved in Favorites",
      shareBtn: "Share",
      copiedShare: "Summary copied",
      scanAnother: "Scan Another Fruit",
      backToResults: "Overview",
    },
    nutrition: {
      title: "Nutritional Information",
      perServing: "Per serving",
      calories: "Energy",
      carbohydrates: "Carbohydrates",
      fiber: "Dietary Fiber",
      sugars: "Natural Sugars",
      protein: "Protein",
      fat: "Total Fat",
      water: "Water Content",
      vitaminsTitle: "Key Vitamins & Minerals",
      dailyValue: "Daily Value",
      sourceNote:
        "Values represent typical whole fresh fruit composition per 100 g edible portion and may vary slightly by ripeness and cultivar.",
    },
    benefits: {
      title: "Health Benefits & Safety",
      medicalDisclaimerTitle: "Nutritional education, not medical advice",
      medicalDisclaimerBody:
        "FruitScan AI distinguishes normal nutritional support from medical treatment. Fruits support everyday wellness as part of a balanced diet, but they do not cure, treat, or prevent diseases. Consult a qualified healthcare professional for medical conditions.",
      precautionsTitle: "Potential Precautions & Allergies",
      noPrecautions: "No common major allergen warnings noted for general consumption.",
      consumeTitle: "Best Ways to Enjoy",
      storageTitle: "Storage & Ripening",
    },
    favorites: {
      title: "Saved Favorites",
      subtitle: "Your bookmarked fruits remain stored locally for offline reading.",
      emptyTitle: "No favorite fruits saved yet",
      emptyDesc: "Tap Save to Favorites on any fruit profile to keep it available offline.",
      exploreBtn: "Explore Fruits",
      removeBtn: "Remove",
    },
    history: {
      title: "Scan History",
      subtitle: "Recent fruit identifications stored privately on this device.",
      emptyTitle: "No scans recorded yet",
      emptyDesc: "Photos you scan or upload will appear here so you can revisit them anytime.",
      clearAllBtn: "Delete All History",
      confirmClear: "Confirm Delete All",
      cancelClear: "Cancel",
      deleteItem: "Delete entry",
      scannedOn: "Scanned",
    },
    settings: {
      title: "Settings & Privacy",
      subtitle: "Customize language, data compression, and local privacy controls.",
      languageTitle: "Application Language",
      languageDesc: "Updates menus, fruit descriptions, nutrition notes, and AI responses.",
      performanceTitle: "Connection & Device Optimization",
      lowBandwidthLabel: "Slow Internet / Low-End Device Mode",
      lowBandwidthDesc:
        "Compresses scanned photos more aggressively (max 640px) for faster uploads on 3G/4G connections.",
      saveHistoryLabel: "Save Scan History Locally",
      saveHistoryDesc:
        "Keep a private offline log of your recent scans on this device.",
      privacyTitle: "Privacy Policy",
      privacySummary:
        "FruitScan AI is designed around minimal permissions and local-first storage.",
      privacyPoint1:
        "Camera and gallery access are requested only when you tap Scan Fruit or Upload Photo.",
      privacyPoint2:
        "Images are sent over HTTPS solely for real-time identification and are never permanently stored on our servers.",
      privacyPoint3:
        "Your favorites, language preference, and scan history stay locally on your device.",
      privacyPoint4:
        "You can delete individual history items or erase all local data at any time below.",
      dataControlsTitle: "Local Data Management",
      clearHistoryBtn: "Clear Scan History",
      clearFavoritesBtn: "Clear Saved Favorites",
      dataCleared: "Local data cleared.",
      aboutTitle: "About FruitScan AI",
      aboutDesc:
        "Built for fast, educational botanical recognition across Haitian, Caribbean, and international produce.",
    },
    common: {
      back: "Back",
      offlineBadge: "Offline catalog",
      errorTitle: "Analysis could not complete",
      retry: "Try Again",
      english: "English",
      french: "Français",
      creole: "Kreyòl Ayisyen",
    },
  },
  fr: {
    appName: "FruitScan AI",
    nav: {
      home: "Accueil",
      scan: "Scanner",
      gallery: "Importer",
      favorites: "Favoris",
      history: "Historique",
      settings: "Paramètres",
    },
    welcome: {
      kicker: "Vision Botanique & Nutrition",
      headline: "Identifiez chaque fruit et découvrez ses bienfaits nutritionnels.",
      subtitle:
        "Utilisez votre caméra ou importez une photo pour reconnaître les fruits haïtiens, tropicaux et internationaux avec des données fiables et éducatives.",
      feature1Title: "Reconnaissance IA Honnête",
      feature1Desc:
        "Identifie des dizaines de fruits tropicaux et courants avec indice de confiance et correspondances alternatives en cas de doute.",
      feature2Title: "Nutrition & Précautions Claires",
      feature2Desc:
        "Distingue l'information nutritionnelle des allégations médicales, avec alertes d'allergies et conseils de conservation.",
      feature3Title: "Trilingue & Hors Ligne",
      feature3Desc:
        "Passez facilement de l'anglais au français ou au créole haïtien. Vos favoris et votre historique restent accessibles hors ligne.",
      getStarted: "Ouvrir FruitScan AI",
      skipToScanner: "Scanner un Fruit",
      privacyNote:
        "Vos photos ne sont analysées que lorsque vous lancez un scan et ne sont jamais conservées sur des serveurs distants.",
    },
    home: {
      heroTitle: "Explorez les fruits d'Haïti et du monde entier.",
      heroSubtitle:
        "Prenez une photo ou importez depuis votre galerie pour découvrir l'identité botanique, les vitamines et les bienfaits du fruit.",
      scanFruitBtn: "SCANNER UN FRUIT",
      uploadPhotoBtn: "IMPORTER PHOTO",
      dailyPickLabel: "Recommandation du Jour",
      searchPlaceholder: "Rechercher un fruit (ex. mangue, avocat, goyave)...",
      filterAll: "Tous",
      filterHaitian: "Fruits d'Haïti",
      filterTropical: "Tropicaux",
      filterCitrus: "Agrumes",
      filterBerry: "Baies",
      catalogTitle: "Encyclopédie Hors Ligne",
      noSearchResults: "Aucun fruit trouvé. Essayez de scanner une photo.",
      offlineReadyNote: "Disponible hors ligne",
      viewDetails: "Voir la fiche",
    },
    scanner: {
      title: "Scanner Caméra",
      subtitle: "Cadrez un seul fruit sous une lumière naturelle claire pour plus de précision.",
      permissionTitle: "Accès à la caméra requis",
      permissionDesc:
        "FruitScan AI n'accède à la caméra que lorsque vous ouvrez le scanner. Aucune image n'est envoyée sans votre action.",
      grantPermission: "Autoriser la Caméra",
      permissionDenied:
        "L'autorisation caméra est refusée ou indisponible. Vous pouvez importer une photo depuis votre galerie.",
      captureBtn: "Prendre la Photo",
      switchCamera: "Changer de Caméra",
      retakeBtn: "Reprendre",
      analyzeBtn: "Analyser le Fruit",
      previewTitle: "Vérifier la photo",
      consentNote: "Appuyez sur Analyser pour identifier cette image compressée.",
      useGalleryInstead: "Importer depuis la galerie",
    },
    gallery: {
      title: "Importer une Photo",
      subtitle: "Choisissez une photo depuis votre appareil pour une analyse automatique.",
      dropTitle: "Sélectionnez ou déposez une photo de fruit",
      dropHint: "Les images sont redimensionnées localement pour économiser vos données.",
      selectFileBtn: "CHOISIR UNE PHOTO",
      supportedFormats: "Formats pris en charge : JPG, JPEG, PNG, WEBP",
      unsupportedError: "Format non pris en charge. Utilisez une image JPG, JPEG, PNG ou WEBP.",
      optimizingNote: "Optimisation de l'image en cours...",
      lowBandwidthActive: "Mode connexion lente activé (max 640px)",
    },
    analyzing: {
      title: "Analyse du fruit en cours",
      subtitle: "Examen des caractéristiques botaniques, de la peau et de la forme.",
      step1: "Préparation de l'image optimisée",
      step2: "Évaluation de l'espèce et du niveau de confiance",
      step3: "Rédaction du profil nutritionnel et des précautions",
      cancelBtn: "Annuler",
    },
    results: {
      title: "Résultat d'Identification",
      confidenceLabel: "Confiance",
      highConfidence: "Confiance élevée",
      mediumConfidence: "Confiance modérée",
      lowConfidence: "Confiance faible",
      uncertainBannerTitle: "Identification incertaine — à vérifier",
      notAFruitTitle: "Aucun fruit clairement détecté",
      notAFruitFallback:
        "Nous n'avons pas pu reconnaître un fruit de manière fiable. Essayez une photo plus nette et bien éclairée.",
      tryAgainBtn: "Scanner ou Importer",
      alternativeMatchesTitle: "Correspondances Alternatives Possibles",
      localNamesTitle: "Noms Multilingues",
      originTitle: "Origine & Répartition Géographique",
      descriptionTitle: "Description & Caractéristiques",
      consumptionTitle: "Meilleures Façons de Consommer",
      storageTitle: "Conseils de Conservation",
      viewNutritionBtn: "Infos Nutritionnelles",
      viewBenefitsBtn: "Bienfaits & Précautions",
      saveFavorite: "Ajouter aux Favoris",
      savedFavorite: "Enregistré en Favoris",
      shareBtn: "Partager",
      copiedShare: "Résumé copié",
      scanAnother: "Scanner un Autre Fruit",
      backToResults: "Aperçu",
    },
    nutrition: {
      title: "Composition Nutritionnelle",
      perServing: "Par portion",
      calories: "Énergie",
      carbohydrates: "Glucides",
      fiber: "Fibres alimentaires",
      sugars: "Sucres naturels",
      protein: "Protéines",
      fat: "Lipides totaux",
      water: "Teneur en eau",
      vitaminsTitle: "Vitamines & Minéraux Clés",
      dailyValue: "Valeur Quotidienne",
      sourceNote:
        "Valeurs moyennes pour 100 g de partie comestible fraîche ; peuvent varier selon la maturité et la variété.",
    },
    benefits: {
      title: "Bienfaits & Sécurité",
      medicalDisclaimerTitle: "Information nutritionnelle, pas un avis médical",
      medicalDisclaimerBody:
        "FruitScan AI distingue le soutien nutritionnel normal des traitements médicaux. Les fruits contribuent au bien-être dans une alimentation équilibrée mais ne guérissent ni ne préviennent aucune maladie.",
      precautionsTitle: "Précautions & Allergies Potentielles",
      noPrecautions: "Aucune alerte allergène majeure courante signalée.",
      consumeTitle: "Comment le Consommer",
      storageTitle: "Conservation & Maturation",
    },
    favorites: {
      title: "Mes Favoris",
      subtitle: "Vos fruits enregistrés restent disponibles localement même hors ligne.",
      emptyTitle: "Aucun fruit favori enregistré",
      emptyDesc: "Appuyez sur Ajouter aux Favoris sur une fiche fruit pour la consulter hors ligne.",
      exploreBtn: "Explorer les Fruits",
      removeBtn: "Retirer",
    },
    history: {
      title: "Historique des Scans",
      subtitle: "Identifications récentes enregistrées en privé sur cet appareil.",
      emptyTitle: "Aucun scan enregistré",
      emptyDesc: "Vos photos scannées ou importées apparaîtront ici.",
      clearAllBtn: "Tout Supprimer",
      confirmClear: "Confirmer la suppression",
      cancelClear: "Annuler",
      deleteItem: "Supprimer",
      scannedOn: "Scanné le",
    },
    settings: {
      title: "Paramètres & Confidentialité",
      subtitle: "Réglez la langue, l'optimisation réseau et la gestion des données.",
      languageTitle: "Langue de l'application",
      languageDesc: "Met à jour l'interface, les fiches et les analyses IA.",
      performanceTitle: "Optimisation Réseau & Appareil",
      lowBandwidthLabel: "Mode Connexion Lente / Appareil Modeste",
      lowBandwidthDesc:
        "Compresse davantage les photos (max 640px) pour accélérer l'envoi sur réseau mobile lent.",
      saveHistoryLabel: "Enregistrer l'historique localement",
      saveHistoryDesc: "Conserve un journal privé hors ligne de vos scans sur cet appareil.",
      privacyTitle: "Politique de Confidentialité",
      privacySummary:
        "FruitScan AI respecte votre vie privée avec des autorisations minimales.",
      privacyPoint1:
        "La caméra et la galerie ne sont utilisées que lorsque vous déclenchez une action.",
      privacyPoint2:
        "Les images sont transmises de façon sécurisée uniquement pour l'analyse et ne sont pas archivées sur le serveur.",
      privacyPoint3:
        "Vos favoris, préférences et historiques restent exclusivement sur votre appareil.",
      privacyPoint4:
        "Vous pouvez supprimer tout ou partie de vos données locales à tout moment.",
      dataControlsTitle: "Gestion des Données Locales",
      clearHistoryBtn: "Effacer l'Historique",
      clearFavoritesBtn: "Effacer les Favoris",
      dataCleared: "Données locales effacées.",
      aboutTitle: "À propos de FruitScan AI",
      aboutDesc:
        "Outil éducatif de reconnaissance botanique pour les fruits d'Haïti, des Caraïbes et du monde.",
    },
    common: {
      back: "Retour",
      offlineBadge: "Catalogue hors ligne",
      errorTitle: "L'analyse a échoué",
      retry: "Réessayer",
      english: "English",
      french: "Français",
      creole: "Kreyòl Ayisyen",
    },
  },
  ht: {
    appName: "FruitScan AI",
    nav: {
      home: "Akèy",
      scan: "Eskane",
      gallery: "Voye Foto",
      favorites: "Favori",
      history: "Istorik",
      settings: "Paramèt",
    },
    welcome: {
      kicker: "Rekonesans Botanik ak Nitrisyon",
      headline: "Idantifye nenpòt fwi epi konprann benefis li genyen pou sante w.",
      subtitle:
        "Sèvi ak kamera w oswa chwazi yon foto nan galri w pou rekonèt fwi Ayiti ak fwi entènasyonal yo, ak enfòmasyon egzak sou vitamin ak nitrisyon.",
      feature1Title: "Rekonesans IA Onèt",
      feature1Desc:
        "Li rekonèt plizyè kalite fwi twopikal ak fwi komen, li montre nivo konfyans lan ak lòt posibilite lè gen dout.",
      feature2Title: "Nitrisyon ak Prekosyon Klè",
      feature2Desc:
        "Li separe enfòmasyon nitrisyonèl ak pwomès medikal, epi li eksplike alèji ak fason pou konsève fwi a.",
      feature3Title: "Disponib an 3 Lang & San Entènèt",
      feature3Desc:
        "Chanje fasil ant Kreyòl Ayisyen, Fransè ak Anglè. Favori w yo ak istorik ou rete disponib menm san entènèt.",
      getStarted: "Kòmanse FruitScan AI",
      skipToScanner: "Eskane yon Fwi Kounye a",
      privacyNote:
        "Foto w yo analize sèlman lè w chwazi eskane oswa voye yo, epi yo pa janm estoke sou sèvè aletranje.",
    },
    home: {
      heroTitle: "Dekouvri fwi Ayiti ak fwi toupatou sou latè.",
      heroSubtitle:
        "Pran yon foto ak kamera w oswa chwazi youn nan galri w pou wè non syantifik la, vitamin yo ak bon pratik konsomasyon.",
      scanFruitBtn: "ESKANE FWI",
      uploadPhotoBtn: "VOYE FOTO",
      dailyPickLabel: "Rekòmandasyon Fwi Jounen an",
      searchPlaceholder: "Chèche yon fwi (egz. mango, zaboka, gwayav, kowòsòl)...",
      filterAll: "Tout Fwi",
      filterHaitian: "Fwi Ayiti",
      filterTropical: "Twopikal",
      filterCitrus: "Sitwon & Zoranj",
      filterBerry: "Bè",
      catalogTitle: "Ansiklopedi Fwi San Entènèt",
      noSearchResults: "Pa gen okenn fwi ki koresponn ak rechèch la. Eseye eskane yon foto pito.",
      offlineReadyNote: "Disponib san entènèt",
      viewDetails: "Wè Detay",
    },
    scanner: {
      title: "Eskanè Kamera",
      subtitle: "Mete yon sèl fwi nan bon limyè natirèl pou pi bon rezilta.",
      permissionTitle: "Otorizasyon kamera nesesè",
      permissionDesc:
        "FruitScan AI ouvri kamera a sèlman lè w mande sa. Pa gen okenn foto ki voye san konsantman w.",
      grantPermission: "Pèmèt Kamera a",
      permissionDenied:
        "Kamera a pa disponib oswa ou refize pèmisyon an. Ou ka chwazi yon foto nan galri w pito.",
      captureBtn: "Pran Foto",
      switchCamera: "Chanje Kamera",
      retakeBtn: "Reprann",
      analyzeBtn: "Analize Fwi a",
      previewTitle: "Verifye foto ou pran an",
      consentNote: "Peze Analize Fwi a pou idantifye foto konprese sa a.",
      useGalleryInstead: "Chwazi nan galri pito",
    },
    gallery: {
      title: "Voye Foto nan Galri",
      subtitle: "Chwazi yon foto fwi sou telefòn ou pou analiz otomatik.",
      dropTitle: "Chwazi oswa glise yon foto fwi isit la",
      dropHint: "Foto yo redui otomatikman sou aparèy ou a pou ekonomize done entènèt.",
      selectFileBtn: "CHWAZI FOTO",
      supportedFormats: "Sipòte JPG, JPEG, PNG ak WEBP",
      unsupportedError: "Kalite fichye sa a pa sipòte. Tanpri chwazi JPG, JPEG, PNG oswa WEBP.",
      optimizingNote: "Ap prepare foto a pou voye l vit...",
      lowBandwidthActive: "Mòd entènèt lan aktive (maks 640px)",
    },
    analyzing: {
      title: "Ap analize foto fwi a",
      subtitle: "Ap gade fòm, koulè, po ak karakteristik botanik fwi a.",
      step1: "Preparasyon foto optimize a",
      step2: "Evalyasyon espès la ak nivo konfyans",
      step3: "Preparasyon pwofil vitamin ak prekosyon yo",
      cancelBtn: "Anile",
    },
    results: {
      title: "Rezilta Idantifikasyon",
      confidenceLabel: "Konfyans",
      highConfidence: "Gwo konfyans",
      mediumConfidence: "Konfyans mwayen",
      lowConfidence: "Konfyans fèb",
      uncertainBannerTitle: "Idantifikasyon pa sèten — verifye ak prekosyon",
      notAFruitTitle: "Nou pa wè yon fwi klèman",
      notAFruitFallback:
        "Nou pa t kapab rekonèt yon fwi ak ase sètiti nan foto sa a. Tanpri pran yon foto ki pi klè nan bon limyè.",
      tryAgainBtn: "Eskane oswa Voye Lòt Foto",
      alternativeMatchesTitle: "Lòt Fwi Ki Sanble",
      localNamesTitle: "Non nan Plizyè Lang",
      originTitle: "Orijin ak Zòn Kote li Pouse",
      descriptionTitle: "Deskripsyon ak Karakteristik",
      consumptionTitle: "Pi Bon Fason pou Manje l",
      storageTitle: "Konsèy pou Konsève l",
      viewNutritionBtn: "Enfòmasyon Nitrisyonèl",
      viewBenefitsBtn: "Benefis & Prekosyon",
      saveFavorite: "Mete nan Favori",
      savedFavorite: "Nan Favori",
      shareBtn: "Pataje",
      copiedShare: "Rezime kopye",
      scanAnother: "Eskane yon Lòt Fwi",
      backToResults: "Apèsi",
    },
    nutrition: {
      title: "Konpozisyon Nitrisyonèl",
      perServing: "Pou chak pòsyon",
      calories: "Kalori",
      carbohydrates: "Glisid",
      fiber: "Fib alimantè",
      sugars: "Sik natirèl",
      protein: "Pwoteyin",
      fat: "Grès total",
      water: "Pousantaj dlo",
      vitaminsTitle: "Vitamin ak Mineral Prensipal",
      dailyValue: "Valè chak jou",
      sourceNote:
        "Valè sa yo se mwayèn pou 100 g pati manjab nan fwi fre ; yo ka chanje yon ti kras selon matirite ak varyete a.",
    },
    benefits: {
      title: "Benefis Sante & Sekirite",
      medicalDisclaimerTitle: "Enfòmasyon nitrisyonèl, se pa konsèy medikal",
      medicalDisclaimerBody:
        "FruitScan AI fè diferans ant bon nitrisyon ak tretman medikal. Fwi ede kenbe sante w nan yon rejim ekilibre, men yo pa geri ni anpeche maladi. Pale ak yon doktè pou pwoblèm sante.",
      precautionsTitle: "Prekosyon ak Alèji Posib",
      noPrecautions: "Pa gen gwo alèji komen ki siyalize pou konsomasyon nòmal.",
      consumeTitle: "Pi Bon Fason pou Konsome l",
      storageTitle: "Konsèvasyon & Matirite",
    },
    favorites: {
      title: "Fwi Favori Mwen",
      subtitle: "Fwi ou sove yo rete sou aparèy ou a menm lè pa gen entènèt.",
      emptyTitle: "Poko gen okenn fwi nan favori",
      emptyDesc: "Peze Mete nan Favori sou nenpòt fich fwi pou konsilte l nenpòt lè san entènèt.",
      exploreBtn: "Dekouvri Fwi yo",
      removeBtn: "Retire",
    },
    history: {
      title: "Istorik Eskanè",
      subtitle: "Dènye fwi ou te analize yo sove an prive sou aparèy sa a.",
      emptyTitle: "Poko gen okenn eskanè",
      emptyDesc: "Foto ou eskane oswa voye yo ap parèt isit la pou ka revize yo pita.",
      clearAllBtn: "Efase Tout Istorik",
      confirmClear: "Konfime Efasman",
      cancelClear: "Anile",
      deleteItem: "Efase",
      scannedOn: "Eskane jou",
    },
    settings: {
      title: "Paramèt & Konfidansyalite",
      subtitle: "Chwazi lang lan, optimize pou entènèt lan, epi jere done lokal ou yo.",
      languageTitle: "Lang Aplikasyon an",
      languageDesc: "Chanje tout meni, deskripsyon fwi, nitrisyon ak repons IA yo.",
      performanceTitle: "Optimizasyon Aparèy & Entènèt",
      lowBandwidthLabel: "Mòd Entènèt Lan / Telefòn Senp",
      lowBandwidthDesc:
        "Redui gwosè foto yo pi plis (maks 640px) pou voye yo pi vit sou koneksyon fèb.",
      saveHistoryLabel: "Sove Istorik Lokalman",
      saveHistoryDesc: "Kenbe yon lis prive dènye fwi ou eskane yo sou aparèy sa a.",
      privacyTitle: "Politik Konfidansyalite",
      privacySummary:
        "FruitScan AI pwoteje vi prive w ak otorizasyon minimòm.",
      privacyPoint1:
        "Kamera ak galri a itilize sèlman lè ou klike sou Eskane Fwi oswa Voye Foto.",
      privacyPoint2:
        "Foto yo voye yon fason sekirize pou idantifikasyon sèlman epi yo pa estoke sou sèvè nou yo.",
      privacyPoint3:
        "Favori w, lang ou chwazi ak istorik ou rete sèlman sou aparèy pa w.",
      privacyPoint4:
        "Ou ka efase nenpòt eleman nan istorik la oswa tout done yo nenpòt kilè.",
      dataControlsTitle: "Jesyon Done Lokal",
      clearHistoryBtn: "Efase Istorik la",
      clearFavoritesBtn: "Efase Favori yo",
      dataCleared: "Done lokal yo efase.",
      aboutTitle: "Konsènan FruitScan AI",
      aboutDesc:
        "Aplikasyon entèlijan pou rekonèt fwi Ayiti, Karayib la ak lemonn antye.",
    },
    common: {
      back: "Retounen",
      offlineBadge: "Katalòg san entènèt",
      errorTitle: "Analiz la pa t ka fini",
      retry: "Eseye Ankò",
      english: "English",
      french: "Français",
      creole: "Kreyòl Ayisyen",
    },
  },
};
