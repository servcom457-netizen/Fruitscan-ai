import {
  FruitAnalysisResult,
  LanguageCode,
  OfflineFruitEntry,
} from "../types/fruit";

export const HERO_BANNER_IMAGE =
  "/src/assets/images/hero_tropical_fruits_1794616374452.jpg";

export const OFFLINE_FRUITS: OfflineFruitEntry[] = [
  {
    slug: "mango-francique",
    category: "haitian",
    imageUrl: "/src/assets/images/fruit_mango_1794616373880.jpg",
    accentHex: "#D97706",
    scientificName: "Mangifera indica",
    localNames: {
      en: "Francique Mango",
      fr: "Mangue Francique",
      ht: "Mango Fransik",
    },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 60,
      carbohydratesG: 15.0,
      fiberG: 1.6,
      sugarsG: 13.7,
      proteinG: 0.8,
      fatG: 0.4,
      waterPercent: 83.5,
    },
    localized: {
      en: {
        commonName: "Francique Mango",
        originAndDistribution:
          "Originally domesticated in South Asia and cultivated extensively across Haiti, where the Madame Francique cultivar is prized for its fiber-free golden flesh.",
        description:
          "Oblong tropical stone fruit with golden-yellow skin blushed with orange when ripe. Aromatic, silky, sweet flesh surrounding a flat fibrous seed.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "36.4 mg",
            dailyValuePercent: 40,
            role: "Supports normal immune defense and collagen formation",
          },
          {
            name: "Vitamin A (Beta-carotene)",
            amount: "54 µg RAE",
            dailyValuePercent: 6,
            role: "Supports normal vision and healthy skin maintenance",
          },
          {
            name: "Folate (Vitamin B9)",
            amount: "43 µg",
            dailyValuePercent: 11,
            role: "Contributes to normal cell division and tissue growth",
          },
          {
            name: "Potassium",
            amount: "168 mg",
            dailyValuePercent: 4,
            role: "Helps maintain normal fluid balance and muscle function",
          },
        ],
        healthBenefits: [
          {
            title: "Immune & Skin Support",
            explanation:
              "Provides substantial vitamin C and provitamin A carotenoids that support everyday immune function and skin integrity.",
            evidenceNote: "Established nutritional role of vitamins A and C",
          },
          {
            title: "Gentle Digestive Fiber",
            explanation:
              "Contains soluble dietary fiber and natural digestive enzymes (amylases) that assist regular digestion.",
            evidenceNote: "Nutritional composition data",
          },
        ],
        precautionsAndAllergies: [
          "Mango skin contains trace urushiol compounds that can irritate sensitive lips or skin (contact dermatitis).",
          "People with latex sensitivity may occasionally experience cross-reactive allergies.",
        ],
        bestWaysToConsume: [
          "Enjoy fresh and chilled, sliced away from the flat central pit.",
          "Blend into smoothies with lime juice or pair with diced avocado in tropical salads.",
        ],
        storageRecommendations:
          "Ripen firm mangoes at room temperature away from direct sun; once soft and fragrant, refrigerate for up to 5 days.",
      },
      fr: {
        commonName: "Mangue Francique",
        originAndDistribution:
          "Originaire d'Asie du Sud et largement cultivée en Haïti, où la variété Madame Francique est réputée pour sa chair dorée sans fibres.",
        description:
          "Fruit tropical oblong à peau jaune doré teintée d'orange à maturité. Chair veloutée, très parfumée et sucrée autour d'un noyau plat.",
        vitaminsAndMinerals: [
          {
            name: "Vitamine C",
            amount: "36,4 mg",
            dailyValuePercent: 40,
            role: "Soutient le fonctionnement normal du système immunitaire",
          },
          {
            name: "Vitamine A (Bêta-carotène)",
            amount: "54 µg EAF",
            dailyValuePercent: 6,
            role: "Contribue au maintien d'une vision normale et de la peau",
          },
          {
            name: "Folates (Vitamine B9)",
            amount: "43 µg",
            dailyValuePercent: 11,
            role: "Participe au renouvellement cellulaire normal",
          },
          {
            name: "Potassium",
            amount: "168 mg",
            dailyValuePercent: 4,
            role: "Contribue à la fonction musculaire normale",
          },
        ],
        healthBenefits: [
          {
            title: "Soutien Immunitaire et Visuel",
            explanation:
              "Riche en vitamines C et A, qui participent aux défenses naturelles de l'organisme et au maintien de la vision.",
            evidenceNote: "Rôle nutritionnel reconnu des vitamines A et C",
          },
          {
            title: "Apport en Fibres Douces",
            explanation:
              "Apporte des fibres solubles favorisant le confort digestif quotidien.",
            evidenceNote: "Analyse nutritionnelle standard",
          },
        ],
        precautionsAndAllergies: [
          "La peau contient de faibles traces d'urushiol pouvant irriter les peaux très sensibles.",
          "Allergie croisée possible chez les personnes sensibles au latex.",
        ],
        bestWaysToConsume: [
          "Déguster fraîche en tranches ou en dés, nature ou avec un filet de citron vert.",
          "Incorporer dans les salades tropicales, smoothies ou sorbets maison.",
        ],
        storageRecommendations:
          "Laisser mûrir à température ambiante puis conserver au réfrigérateur 4 à 5 jours une fois souple au toucher.",
      },
      ht: {
        commonName: "Mango Fransik",
        originAndDistribution:
          "Li soti ann Azi disid epi li kiltive anpil ann Ayiti, kote varyete Madame Fransik la selèb pou chè jòn dous li ki pa gen fil.",
        description:
          "Fwi twopikal ki gen po jòn klè ak yon ti koulè zoranj lè l mi. Chè li mou, santi bon anpil epi li vlope yon sèl grenn plat.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "36.4 mg",
            dailyValuePercent: 40,
            role: "Ede defans natirèl kò a ak fòmasyon kolajèn",
          },
          {
            name: "Vitamin A (Beta-karotèn)",
            amount: "54 µg RAE",
            dailyValuePercent: 6,
            role: "Ede kenbe bon vizyon ak po an sante",
          },
          {
            name: "Folat (Vitamin B9)",
            amount: "43 µg",
            dailyValuePercent: 11,
            role: "Kontribye nan devlopman nòmal selil kò yo",
          },
          {
            name: "Potasyòm",
            amount: "168 mg",
            dailyValuePercent: 4,
            role: "Ede misk yo ak ekilib dlo nan kò a fonksyone byen",
          },
        ],
        healthBenefits: [
          {
            title: "Sipò pou Iminite ak Vizyon",
            explanation:
              "Mango bay vitamin A ak C ki ede sistèm iminitè a travay nòmalman epi pwoteje je yo.",
            evidenceNote: "Wòl nitrisyonèl etabli pou vitamin A ak C",
          },
          {
            title: "Fib pou Dijesyon",
            explanation:
              "Li gen fib alimantè natirèl ki ede vant la dijere manje pi fasil.",
            evidenceNote: "Konpozisyon nitrisyonèl estanda",
          },
        ],
        precautionsAndAllergies: [
          "Lèt ki nan po mango vèt la ka irite bouch oswa po moun ki sansib.",
          "Moun ki gen alèji ak latèks ka pafwa fè reyaksyon ak mango.",
        ],
        bestWaysToConsume: [
          "Manje l fre, koupe an tranch ak yon ti ji sitwon.",
          "Melanje l nan ji natirèl oswa salad fwi.",
        ],
        storageRecommendations:
          "Kite mango vèt yo mi nan tanperati chanm; lè yo mou, mete yo nan frijidè pou 4 a 5 jou.",
      },
    },
  },
  {
    slug: "avocado-zaboka",
    category: "haitian",
    imageUrl: "/src/assets/images/fruit_avocado_1794616375091.jpg",
    accentHex: "#3F6212",
    scientificName: "Persea americana",
    localNames: {
      en: "Caribbean Avocado",
      fr: "Avocat Antillais",
      ht: "Zaboka",
    },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 160,
      carbohydratesG: 8.5,
      fiberG: 6.7,
      sugarsG: 0.7,
      proteinG: 2.0,
      fatG: 14.7,
      waterPercent: 73.2,
    },
    localized: {
      en: {
        commonName: "Caribbean Avocado (Zaboka)",
        originAndDistribution:
          "Native to Mesoamerica and widely grown across Haitian gardens and hillsides. West Indian varieties are larger with smooth green skin and creamy flesh.",
        description:
          "Pear-shaped berry with smooth, glossy green skin and buttery pale-green flesh enclosing a large spherical seed.",
        vitaminsAndMinerals: [
          {
            name: "Folate (Vitamin B9)",
            amount: "81 µg",
            dailyValuePercent: 20,
            role: "Supports normal blood formation and cell renewal",
          },
          {
            name: "Vitamin K",
            amount: "21 µg",
            dailyValuePercent: 18,
            role: "Supports normal blood clotting and bone health",
          },
          {
            name: "Potassium",
            amount: "485 mg",
            dailyValuePercent: 10,
            role: "Supports normal blood pressure balance and nerve signaling",
          },
          {
            name: "Vitamin E",
            amount: "2.1 mg",
            dailyValuePercent: 14,
            role: "Protects cell membranes from oxidative stress",
          },
        ],
        healthBenefits: [
          {
            title: "Heart-Friendly Monounsaturated Fats",
            explanation:
              "Rich in oleic acid (monounsaturated fat) and soluble/insoluble fiber, helping sustain fullness and balanced lipid intake when replacing saturated fats.",
            evidenceNote: "Dietary lipid nutrition guidance",
          },
          {
            title: "Nutrient Absorption Partner",
            explanation:
              "Natural healthy fats help your body absorb fat-soluble vitamins (A, D, E, K) from leafy greens and vegetables.",
            evidenceNote: "Established physiological absorption mechanism",
          },
        ],
        precautionsAndAllergies: [
          "Individuals with latex-fruit allergy syndrome may react to avocado.",
          "People on blood-thinning medications (e.g., warfarin) should keep vitamin K intake consistent.",
        ],
        bestWaysToConsume: [
          "Slice alongside Haitian kasav (cassava flatbread), rice and beans, or grilled plantains.",
          "Mash with lime juice, salt, and scallions for fresh spread.",
        ],
        storageRecommendations:
          "Ripen unripe avocados on the counter; refrigerate ripe avocados whole for up to 4 days or press citrus juice over cut halves.",
      },
      fr: {
        commonName: "Avocat (Zaboka)",
        originAndDistribution:
          "Originaire d'Amérique centrale et très cultivé en Haïti. Les variétés antillaises ont une peau verte lisse et une chair tendre.",
        description:
          "Fruit crémeux en forme de poire à peau verte souple, chair vert pâle onctueuse et gros noyau central.",
        vitaminsAndMinerals: [
          {
            name: "Folates (Vitamine B9)",
            amount: "81 µg",
            dailyValuePercent: 20,
            role: "Soutient le renouvellement cellulaire normal",
          },
          {
            name: "Vitamine K",
            amount: "21 µg",
            dailyValuePercent: 18,
            role: "Participe à la coagulation normale et à la santé osseuse",
          },
          {
            name: "Potassium",
            amount: "485 mg",
            dailyValuePercent: 10,
            role: "Contribue à l'équilibre hydrique et musculaire",
          },
          {
            name: "Vitamine E",
            amount: "2,1 mg",
            dailyValuePercent: 14,
            role: "Antioxydant protégeant les cellules",
          },
        ],
        healthBenefits: [
          {
            title: "Bons Lipides Monoinsaturés & Fibres",
            explanation:
              "Riche en acide oléique et en fibres alimentaires (6,7 g / 100 g), favorisant la satiété et un bon équilibre alimentaire.",
            evidenceNote: "Recommandations nutritionnelles standards",
          },
          {
            title: "Absorption des Vitamines",
            explanation:
              "Ses lipides naturels facilitent l'absorption des vitamines liposolubles contenues dans les légumes.",
            evidenceNote: "Mécanisme digestif établi",
          },
        ],
        precautionsAndAllergies: [
          "Réaction croisée possible chez les personnes allergiques au latex.",
          "En cas de traitement anticoagulant, maintenir un apport stable en vitamine K.",
        ],
        bestWaysToConsume: [
          "Servir en tranches avec du riz, des pois, du pain ou de la cassave.",
          "Écraser avec du jus de citron vert et des herbes fraîches.",
        ],
        storageRecommendations:
          "Conserver à température ambiante jusqu'à maturité, puis au réfrigérateur 3 à 4 jours.",
      },
      ht: {
        commonName: "Zaboka",
        originAndDistribution:
          "Li soti Amerik Santral epi li pouse toupatou nan jaden ann Ayiti. Varyete karibeyen yo gwo, yo gen po vèt lis ak chè krèm.",
        description:
          "Fwi ki gen po vèt klè, chè mou koulè vèt pal ki gen bon gou krèm, ak yon sèl gwo grenn won nan mitan l.",
        vitaminsAndMinerals: [
          {
            name: "Folat (Vitamin B9)",
            amount: "81 µg",
            dailyValuePercent: 20,
            role: "Ede kò a fòme nouvo selil ak san an sante",
          },
          {
            name: "Vitamin K",
            amount: "21 µg",
            dailyValuePercent: 18,
            role: "Ede nan koagulasyon san ak sante zo yo",
          },
          {
            name: "Potasyòm",
            amount: "485 mg",
            dailyValuePercent: 10,
            role: "Ede misk, nè ak tansyon rete nan bon ekilib",
          },
          {
            name: "Vitamin E",
            amount: "2.1 mg",
            dailyValuePercent: 14,
            role: "Pwoteje selil kò yo",
          },
        ],
        healthBenefits: [
          {
            title: "Bon Grès Natirèl ak Fib",
            explanation:
              "Zaboka rich nan bon grès monoensatire ak fib alimantè ki kenbe w vant plen epi sipòte sante kè nan yon rejim ekilibre.",
            evidenceNote: "Done nitrisyonèl verifye",
          },
          {
            title: "Ede Absòbe Lòt Vitamin",
            explanation:
              "Grès natirèl zaboka a ede kò a absòbe vitamin A, D, E, K ki soti nan salad ak legim.",
            evidenceNote: "Fonksyon dijestif nòmal",
          },
        ],
        precautionsAndAllergies: [
          "Moun ki fè alèji ak latèks ka pafwa gen sansibilite ak zaboka.",
          "Moun k ap pran medikaman pou san (tankou warfarin) dwe siveye kantite vitamin K yo konsome.",
        ],
        bestWaysToConsume: [
          "Manje l ak kasav, pen, diri ak pwa oswa bannann bouyi.",
          "Kraze l ak yon ti ji sitwon ak sèl pou fè sòs krèm.",
        ],
        storageRecommendations:
          "Kite zaboka vèt la mi deyò frijidè; lè l mou, mete l nan frijidè pou 3 a 4 jou.",
      },
    },
  },
  {
    slug: "soursop-kowosol",
    category: "haitian",
    imageUrl: "/src/assets/images/fruit_soursop_1794616375921.jpg",
    accentHex: "#15803D",
    scientificName: "Annona muricata",
    localNames: {
      en: "Soursop",
      fr: "Corossol",
      ht: "Kowòsòl",
    },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 66,
      carbohydratesG: 16.8,
      fiberG: 3.3,
      sugarsG: 13.5,
      proteinG: 1.0,
      fatG: 0.3,
      waterPercent: 81.2,
    },
    localized: {
      en: {
        commonName: "Soursop (Kowòsòl)",
        originAndDistribution:
          "Native to the tropical Americas and Caribbean, deeply cherished in Haiti for refreshing juices and creamy desserts.",
        description:
          "Large heart-shaped green fruit covered in soft fleshy spines, containing fragrant snow-white fibrous pulp and glossy black seeds.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "20.6 mg",
            dailyValuePercent: 23,
            role: "Supports immune health and tissue repair",
          },
          {
            name: "Potassium",
            amount: "278 mg",
            dailyValuePercent: 6,
            role: "Maintains normal cellular fluid balance",
          },
          {
            name: "Magnesium",
            amount: "21 mg",
            dailyValuePercent: 5,
            role: "Supports normal muscle relaxation and energy metabolism",
          },
        ],
        healthBenefits: [
          {
            title: "Hydration & Vitamin C",
            explanation:
              "Over 80% water with natural vitamin C and dietary fiber, making it a refreshing source of everyday hydration and micronutrients.",
            evidenceNote: "Nutritional composition analysis",
          },
          {
            title: "Dietary Fiber Support",
            explanation:
              "Provides 3.3 g of fiber per 100 g, contributing to healthy daily bowel regularity.",
            evidenceNote: "Standard food composition data",
          },
        ],
        precautionsAndAllergies: [
          "Always remove and discard the black seeds; do not crush or chew seeds, as they contain compounds unsafe to ingest.",
          "Excessive consumption of concentrated soursop leaf extracts or large amounts over time is discouraged in medical literature due to neurotoxicity concerns; enjoy the fresh fruit pulp in normal food amounts.",
        ],
        bestWaysToConsume: [
          "Press the pulp through a strainer with water, nutmeg, and a touch of lime or milk for traditional Haitian ji kowòsòl.",
          "Scoop fresh chilled pulp directly with a spoon, discarding seeds.",
        ],
        storageRecommendations:
          "Ripen until it yields gently to finger pressure, then refrigerate and consume within 2–3 days.",
      },
      fr: {
        commonName: "Corossol (Kowòsòl)",
        originAndDistribution:
          "Originaire des Amériques tropicales et des Caraïbes, très apprécié en Haïti pour ses jus onctueux et sorbets.",
        description:
          "Gros fruit vert recouvert de petites pointes souples, renfermant une pulpe blanche fibreuse, acidulée et sucrée avec des graines noires.",
        vitaminsAndMinerals: [
          {
            name: "Vitamine C",
            amount: "20,6 mg",
            dailyValuePercent: 23,
            role: "Soutient les défenses immunitaires normales",
          },
          {
            name: "Potassium",
            amount: "278 mg",
            dailyValuePercent: 6,
            role: "Participe à l'équilibre hydrique",
          },
          {
            name: "Magnésium",
            amount: "21 mg",
            dailyValuePercent: 5,
            role: "Contribue au métabolisme énergétique normal",
          },
        ],
        healthBenefits: [
          {
            title: "Hydratation & Vitamine C",
            explanation:
              "Composé à plus de 80 % d'eau, il apporte vitamine C et minéraux dans une collation rafraîchissante.",
            evidenceNote: "Composition nutritionnelle standard",
          },
          {
            title: "Apport en Fibres",
            explanation:
              "Fournit 3,3 g de fibres pour 100 g, utiles à la digestion quotidienne.",
            evidenceNote: "Données alimentaires",
          },
        ],
        precautionsAndAllergies: [
          "Retirer et jeter systématiquement les graines noires (ne pas les mâcher ni les mixer).",
          "Consommer la pulpe en quantité alimentaire normale ; éviter les extraits concentrés non contrôlés.",
        ],
        bestWaysToConsume: [
          "Préparer en jus frais filtré avec un peu de muscade, de vanille ou de citron vert.",
          "Déguster bien frais à la cuillère ou en sorbet.",
        ],
        storageRecommendations:
          "Laisser mûrir jusqu'à légère souplesse puis réfrigérer 2 à 3 jours maximum.",
      },
      ht: {
        commonName: "Kowòsòl",
        originAndDistribution:
          "Li soti nan rejyon twopikal Amerik ak Karayib la ; yo renmen l anpil ann Ayiti pou fè bon ji kowòsòl krèm.",
        description:
          "Gwo fwi vèt ki gen ti pikan mou sou po li, ak chè blan ki gen fil dous-tounen epi grenn nwa klere anndan l.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "20.6 mg",
            dailyValuePercent: 23,
            role: "Sipòte defans kò a ak reparasyon tisi yo",
          },
          {
            name: "Potasyòm",
            amount: "278 mg",
            dailyValuePercent: 6,
            role: "Ede kenbe bon ekilib likid nan kò a",
          },
          {
            name: "Manyezyòm",
            amount: "21 mg",
            dailyValuePercent: 5,
            role: "Ede misk yo rilaks epi pwodui enèji nòmalman",
          },
        ],
        healthBenefits: [
          {
            title: "Idratasyon ak Vitamin C",
            explanation:
              "Kowòsòl gen plis pase 80% dlo ak vitamin C ki rafrechi kò a epi ede iminite w.",
            evidenceNote: "Konpozisyon nitrisyonèl",
          },
          {
            title: "Bon Sous Fib",
            explanation:
              "Chak 100 g bay 3.3 g fib ki bon pou tranzit ak dijesyon.",
            evidenceNote: "Done alimantè",
          },
        ],
        precautionsAndAllergies: [
          "Toujou retire epi jete grenn nwa yo ; pa janm kraze oswa vale grenn kowòsòl.",
          "Manje kaka fwi a nan kantite nòmal ; evite bwè ekstrè konsantre fèy oswa grenn nan gwo kantite.",
        ],
        bestWaysToConsume: [
          "Peze chè a nan paswa ak dlo, yon ti miskad, vaniy oswa lèt pou fè ji kowòsòl.",
          "Manje l fre ak kiyè lè l byen frèt.",
        ],
        storageRecommendations:
          "Kite l vin mou sou tab la, epi mete l nan frijidè pou 2 a 3 jou.",
      },
    },
  },
  {
    slug: "pineapple-zannanna",
    category: "tropical",
    imageUrl: "/src/assets/images/fruit_pineapple_1794616374162.jpg",
    accentHex: "#CA8A04",
    scientificName: "Ananas comosus",
    localNames: {
      en: "Pineapple",
      fr: "Ananas",
      ht: "Zannanna",
    },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 50,
      carbohydratesG: 13.1,
      fiberG: 1.4,
      sugarsG: 9.9,
      proteinG: 0.5,
      fatG: 0.1,
      waterPercent: 86.0,
    },
    localized: {
      en: {
        commonName: "Pineapple",
        originAndDistribution:
          "Indigenous to South America and grown widely across the Caribbean, Hawaii, Costa Rica, and tropical lowlands.",
        description:
          "Multiple-fruit berry with diamond-patterned golden-amber rind, a spiky green leaf crown, and bright yellow juicy flesh.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "47.8 mg",
            dailyValuePercent: 53,
            role: "Supports immune function and iron absorption",
          },
          {
            name: "Manganese",
            amount: "0.93 mg",
            dailyValuePercent: 40,
            role: "Supports bone formation and antioxidant enzyme activity",
          },
          {
            name: "Vitamin B6",
            amount: "0.11 mg",
            dailyValuePercent: 6,
            role: "Assists normal protein metabolism",
          },
        ],
        healthBenefits: [
          {
            title: "High Vitamin C & Manganese",
            explanation:
              "A single 100 g serving delivers over half the daily vitamin C target alongside manganese for connective tissue health.",
            evidenceNote: "USDA nutritional profile",
          },
          {
            title: "Natural Bromelain Enzymes",
            explanation:
              "Fresh pineapple contains bromelain, a group of protein-digesting enzymes active in raw fruit.",
            evidenceNote: "Biochemical composition of fresh pineapple",
          },
        ],
        precautionsAndAllergies: [
          "Bromelain and fruit acids can cause temporary tongue tingling if eaten in large amounts.",
          "People with citrus or latex sensitivities may occasionally react.",
        ],
        bestWaysToConsume: [
          "Slice fresh rings or chunks and chill before serving.",
          "Grill slices lightly or blend with ginger and mint for a refreshing drink.",
        ],
        storageRecommendations:
          "Store whole pineapples at room temperature for 2–3 days; refrigerate cut chunks in an airtight container for up to 4 days.",
      },
      fr: {
        commonName: "Ananas",
        originAndDistribution:
          "Originaire d'Amérique du Sud et cultivé dans toutes les Caraïbes, en Haïti, au Costa Rica et en Afrique de l'Ouest.",
        description:
          "Fruit tropical à écorce géométrique jaune doré, couronne de feuilles vertes et chair jaune juteuse et parfumée.",
        vitaminsAndMinerals: [
          {
            name: "Vitamine C",
            amount: "47,8 mg",
            dailyValuePercent: 53,
            role: "Soutient le système immunitaire et l'absorption du fer",
          },
          {
            name: "Manganèse",
            amount: "0,93 mg",
            dailyValuePercent: 40,
            role: "Contribue à la santé des os et des tissus conjonctifs",
          },
          {
            name: "Vitamine B6",
            amount: "0,11 mg",
            dailyValuePercent: 6,
            role: "Participe au métabolisme normal des protéines",
          },
        ],
        healthBenefits: [
          {
            title: "Source Majeure de Vitamine C et Manganèse",
            explanation:
              "Apporte plus de la moitié des besoins quotidiens en vitamine C pour 100 g.",
            evidenceNote: "Table nutritionnelle USDA",
          },
          {
            title: "Présence de Bromélaïne",
            explanation:
              "L'ananas frais contient de la bromélaïne, une enzyme naturelle facilitant la dégradation des protéines.",
            evidenceNote: "Biochimie alimentaire",
          },
        ],
        precautionsAndAllergies: [
          "L'acidité et la bromélaïne peuvent picoter la langue ou les lèvres sensibles.",
          "Possible réaction croisée chez certaines personnes allergiques au latex.",
        ],
        bestWaysToConsume: [
          "Déguster frais en tranches, nature ou avec un peu de menthe.",
          "Ajouter aux salades salées-sucrées ou mixer avec du gingembre.",
        ],
        storageRecommendations:
          "Garder entier 2 à 3 jours à température ambiante ; une fois coupé, réfrigérer en boîte hermétique jusqu'à 4 jours.",
      },
      ht: {
        commonName: "Zannanna",
        originAndDistribution:
          "Li soti Amerik disid epi li kiltive anpil nan Karayib la ak tout zòn twopikal yo.",
        description:
          "Fwi ki gen po jòn-lò ak ti karo, yon kouwòn fèy vèt anlè l, ak chè jòn ki gen anpil ji dous-tounen.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "47.8 mg",
            dailyValuePercent: 53,
            role: "Ede defans natirèl kò a epi ede kò a absòbe fè",
          },
          {
            name: "Manganèz",
            amount: "0.93 mg",
            dailyValuePercent: 40,
            role: "Sipòte sante zo ak tisi kò yo",
          },
          {
            name: "Vitamin B6",
            amount: "0.11 mg",
            dailyValuePercent: 6,
            role: "Ede kò a itilize pwoteyin yo byen",
          },
        ],
        healthBenefits: [
          {
            title: "Rich nan Vitamin C ak Manganèz",
            explanation:
              "Yon ti pòsyon 100 g bay plis pase mwatye vitamin C ou bezwen chak jou.",
            evidenceNote: "Done nitrisyonèl USDA",
          },
          {
            title: "Anzim Natirèl Bwòmelayin",
            explanation:
              "Zannanna fre gen bwòmelayin, yon anzim natirèl ki ede kraze pwoteyin lè w ap dijere.",
            evidenceNote: "Konpozisyon natirèl fwi fre a",
          },
        ],
        precautionsAndAllergies: [
          "Si w manje twòp zannanna fre alafwa, li ka pike lang ou yon ti kras.",
          "Moun ki fè alèji ak latèks ka pafwa gen sansibilite ak zannanna.",
        ],
        bestWaysToConsume: [
          "Manje l fre koupe an moso byen frèt.",
          "Fè ji zannanna ak jenjanm oswa fèy mant.",
        ],
        storageRecommendations:
          "Kite l antye 2 a 3 jou nan tanperati chanm ; lè w fin koupe l, mete l nan bwat fèmen nan frijidè pou 4 jou.",
      },
    },
  },
  {
    slug: "banana-fig",
    category: "tropical",
    accentHex: "#EAB308",
    scientificName: "Musa acuminata",
    localNames: { en: "Banana", fr: "Banane", ht: "Fig-bannann" },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 89,
      carbohydratesG: 22.8,
      fiberG: 2.6,
      sugarsG: 12.2,
      proteinG: 1.1,
      fatG: 0.3,
      waterPercent: 74.9,
    },
    localized: {
      en: {
        commonName: "Banana",
        originAndDistribution:
          "Domesticated in Southeast Asia and New Guinea; staple fruit across Haiti (fig-bannann) and global tropics.",
        description:
          "Curved elongated fruit with peel shifting from green to golden yellow, offering soft, creamy, mildly sweet starch-rich flesh.",
        vitaminsAndMinerals: [
          {
            name: "Potassium",
            amount: "358 mg",
            dailyValuePercent: 8,
            role: "Supports normal muscle contraction, nerve signaling, and fluid balance",
          },
          {
            name: "Vitamin B6",
            amount: "0.37 mg",
            dailyValuePercent: 22,
            role: "Supports energy metabolism and red blood cell formation",
          },
          {
            name: "Vitamin C",
            amount: "8.7 mg",
            dailyValuePercent: 10,
            role: "Contributes to normal immune function",
          },
        ],
        healthBenefits: [
          {
            title: "Potassium & Vitamin B6 Energy",
            explanation:
              "Provides accessible carbohydrates alongside potassium and vitamin B6, supporting normal muscle recovery and daily energy.",
            evidenceNote: "Established nutritional role",
          },
        ],
        precautionsAndAllergies: [
          "Individuals with advanced kidney disease needing potassium restriction should follow medical guidance on portion sizes.",
          "Can trigger cross-reactions in people with latex-fruit allergy.",
        ],
        bestWaysToConsume: [
          "Eat fresh as a quick snack or slice over oatmeal and yogurt.",
          "Freeze ripe slices for creamy smoothies without added sugar.",
        ],
        storageRecommendations:
          "Keep at room temperature away from direct sunlight; refrigerating ripe bananas darkens the skin while preserving flesh freshness for a few days.",
      },
      fr: {
        commonName: "Banane",
        originAndDistribution:
          "Originaire d'Asie du Sud-Est et cultivée partout dans les Caraïbes (figue-banane) et les zones tropicales.",
        description:
          "Fruit allongé à peau jaune à maturité et chair tendre, sucrée et nourrissante.",
        vitaminsAndMinerals: [
          {
            name: "Potassium",
            amount: "358 mg",
            dailyValuePercent: 8,
            role: "Soutient la fonction musculaire et nerveuse normale",
          },
          {
            name: "Vitamine B6",
            amount: "0,37 mg",
            dailyValuePercent: 22,
            role: "Participe au métabolisme énergétique normal",
          },
        ],
        healthBenefits: [
          {
            title: "Potassium et Vitamine B6",
            explanation:
              "Fournit potassium et vitamine B6 utiles aux muscles et à l'énergie quotidienne.",
            evidenceNote: "Données nutritionnelles",
          },
        ],
        precautionsAndAllergies: [
          "Modérer en cas de régime strict pauvre en potassium prescrit par un médecin.",
          "Allergie croisée possible avec le latex.",
        ],
        bestWaysToConsume: [
          "Nature en collation, dans les céréales ou mixée en smoothie.",
        ],
        storageRecommendations:
          "Conserver à température ambiante ; la peau noircit au froid mais la chair reste bonne.",
      },
      ht: {
        commonName: "Fig-bannann",
        originAndDistribution:
          "Li kiltive toupatou ann Ayiti ak nan rejyon twopikal yo kòm youn nan fwi ki pi popilè.",
        description:
          "Fwi ki gen po jòn lè l mi, fasil pou kale, ak chè mou ki dous.",
        vitaminsAndMinerals: [
          {
            name: "Potasyòm",
            amount: "358 mg",
            dailyValuePercent: 8,
            role: "Ede misk yo ak kè a fonksyone nòmalman",
          },
          {
            name: "Vitamin B6",
            amount: "0.37 mg",
            dailyValuePercent: 22,
            role: "Ede kò a transfòme manje an enèji",
          },
        ],
        healthBenefits: [
          {
            title: "Bon Sous Potasyòm ak Vitamin B6",
            explanation:
              "Fig-bannann bay enèji rapid ak potasyòm ki sipòte misk yo apre travay oswa espò.",
            evidenceNote: "Konpozisyon nitrisyonèl",
          },
        ],
        precautionsAndAllergies: [
          "Moun ki gen maladi ren ki bezwen limite potasyòm dwe mande doktè yo konsèy.",
          "Ka bay reyaksyon lakay moun ki fè alèji ak latèks.",
        ],
        bestWaysToConsume: [
          "Manje l fre, ak labouyi, oswa nan ji lèt.",
        ],
        storageRecommendations:
          "Kite l nan tanperati chanm ; si l nan frijidè po a ap nwa men anndan an rete bon.",
      },
    },
  },
  {
    slug: "papaya-papay",
    category: "haitian",
    accentHex: "#EA580C",
    scientificName: "Carica papaya",
    localNames: { en: "Papaya", fr: "Papaye", ht: "Papay" },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 43,
      carbohydratesG: 10.8,
      fiberG: 1.7,
      sugarsG: 7.8,
      proteinG: 0.5,
      fatG: 0.3,
      waterPercent: 88.1,
    },
    localized: {
      en: {
        commonName: "Papaya",
        originAndDistribution:
          "Native to southern Mexico and Central America; abundant in Haitian home gardens and markets.",
        description:
          "Pear-shaped or oblong fruit turning yellow-orange when ripe, with sweet salmon-orange flesh and a central cavity of peppery black seeds.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "60.9 mg",
            dailyValuePercent: 68,
            role: "Supports immune defense and skin collagen synthesis",
          },
          {
            name: "Folate",
            amount: "37 µg",
            dailyValuePercent: 9,
            role: "Supports normal blood cell formation",
          },
          {
            name: "Vitamin A",
            amount: "47 µg RAE",
            dailyValuePercent: 5,
            role: "Supports normal vision",
          },
        ],
        healthBenefits: [
          {
            title: "Rich Vitamin C & Papain Enzyme",
            explanation:
              "Low in calories and rich in vitamin C and lycopene carotenoids, plus the natural digestive enzyme papain.",
            evidenceNote: "Standard food nutrition data",
          },
        ],
        precautionsAndAllergies: [
          "Unripe green papaya contains high latex/papain levels and should be avoided raw during pregnancy.",
          "People with latex allergy may react to fresh papaya.",
        ],
        bestWaysToConsume: [
          "Scoop out seeds, squeeze fresh lime over ripe flesh, and enjoy chilled.",
          "Blend ripe papaya into traditional Haitian ji papay with milk or orange juice.",
        ],
        storageRecommendations:
          "Ripen at room temperature until mostly yellow; refrigerate ripe papaya up to 5 days.",
      },
      fr: {
        commonName: "Papaye",
        originAndDistribution:
          "Originaire d'Amérique centrale, très présente dans les jardins en Haïti et sous les tropiques.",
        description:
          "Fruit à peau jaune-orangé à maturité, chair orange fondante et graines noires centrales.",
        vitaminsAndMinerals: [
          {
            name: "Vitamine C",
            amount: "60,9 mg",
            dailyValuePercent: 68,
            role: "Soutient l'immunité normale et la formation de collagène",
          },
          {
            name: "Folates",
            amount: "37 µg",
            dailyValuePercent: 9,
            role: "Contribue au renouvellement cellulaire",
          },
        ],
        healthBenefits: [
          {
            title: "Vitamine C & Enzyme Papaïne",
            explanation:
              "Apporte beaucoup de vitamine C pour peu de calories et contient de la papaïne naturelle.",
            evidenceNote: "Données nutritionnelles",
          },
        ],
        precautionsAndAllergies: [
          "Éviter la papaye verte crue pendant la grossesse en raison de sa teneur en latex.",
          "Allergie croisée possible avec le latex.",
        ],
        bestWaysToConsume: [
          "Fraîche avec un jus de citron vert, ou mixée en jus onctueux.",
        ],
        storageRecommendations:
          "Laisser jaunir à température ambiante puis réfrigérer 4 à 5 jours.",
      },
      ht: {
        commonName: "Papay",
        originAndDistribution:
          "Li soti Amerik Santral epi li pouse anpil nan lakou ak mache ann Ayiti.",
        description:
          "Gwo fwi ki vin jòn-zoranj lè l mi, ak chè koulè zoranj dous epi anpil ti grenn nwa nan mitan l.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "60.9 mg",
            dailyValuePercent: 68,
            role: "Ranfòse defans natirèl kò a epi ede po a",
          },
          {
            name: "Folat",
            amount: "37 µg",
            dailyValuePercent: 9,
            role: "Ede nan fòmasyon selil kò yo",
          },
        ],
        healthBenefits: [
          {
            title: "Anpil Vitamin C ak Papayin",
            explanation:
              "Papay bay anpil vitamin C ak dlo, ansanm ak papayin ki ede dijesyon.",
            evidenceNote: "Konpozisyon nitrisyonèl",
          },
        ],
        precautionsAndAllergies: [
          "Fanm ansent dwe evite manje papay vèt kri akòz lèt li genyen.",
          "Moun ki gen alèji ak latèks ka fè reyaksyon ak papay.",
        ],
        bestWaysToConsume: [
          "Retire grenn yo, mete yon ti ji sitwon sou li epi manje l frèt, oswa fè ji papay.",
        ],
        storageRecommendations:
          "Kite l mi deyò frijidè epi konsève l nan frijidè 4 a 5 jou lè l mi.",
      },
    },
  },
  {
    slug: "guava-gwayav",
    category: "haitian",
    accentHex: "#DB2777",
    scientificName: "Psidium guajava",
    localNames: { en: "Guava", fr: "Goyave", ht: "Gwayav" },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 68,
      carbohydratesG: 14.3,
      fiberG: 5.4,
      sugarsG: 8.9,
      proteinG: 2.6,
      fatG: 1.0,
      waterPercent: 80.8,
    },
    localized: {
      en: {
        commonName: "Guava",
        originAndDistribution:
          "Native to tropical America and widely grown across Haiti for fresh fruit, juice, and guava paste (pate gwayav).",
        description:
          "Round or oval green-to-yellow fruit with fragrant pink or white flesh packed with small edible seeds.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "228.3 mg",
            dailyValuePercent: 254,
            role: "Exceptional antioxidant supporting normal immune defense",
          },
          {
            name: "Potassium",
            amount: "417 mg",
            dailyValuePercent: 9,
            role: "Supports normal blood pressure and muscle activity",
          },
        ],
        healthBenefits: [
          {
            title: "Extraordinary Vitamin C & Fiber",
            explanation:
              "Contains over twice the daily vitamin C requirement per 100 g along with 5.4 g of dietary fiber.",
            evidenceNote: "USDA nutrient database",
          },
        ],
        precautionsAndAllergies: [
          "Chew carefully as the small seeds are very hard.",
          "Wash skin thoroughly before eating whole.",
        ],
        bestWaysToConsume: [
          "Eat whole when slightly soft, blend and strain for fresh juice, or prepare guava paste.",
        ],
        storageRecommendations:
          "Store ripe guavas in the refrigerator for 3–4 days.",
      },
      fr: {
        commonName: "Goyave",
        originAndDistribution:
          "Originaire d'Amérique tropicale, très répandue en Haïti pour le jus et la pâte de goyave.",
        description:
          "Fruit rond à peau vert-jaune renfermant une pulpe rose ou blanche très aromatique et de petites graines.",
        vitaminsAndMinerals: [
          {
            name: "Vitamine C",
            amount: "228,3 mg",
            dailyValuePercent: 254,
            role: "Soutient fortement le système immunitaire normal",
          },
          {
            name: "Potassium",
            amount: "417 mg",
            dailyValuePercent: 9,
            role: "Contribue à l'équilibre musculaire",
          },
        ],
        healthBenefits: [
          {
            title: "Championne de la Vitamine C et des Fibres",
            explanation:
              "Fournit plus de 2 fois l'apport journalier recommandé en vitamine C pour 100 g.",
            evidenceNote: "Base nutritionnelle USDA",
          },
        ],
        precautionsAndAllergies: [
          "Mâcher doucement à cause des petites graines dures.",
        ],
        bestWaysToConsume: [
          "Croquer fraîche, presser en jus filtré ou cuisiner en pâte de goyave.",
        ],
        storageRecommendations:
          "Conserver au réfrigérateur 3 à 4 jours à maturité.",
      },
      ht: {
        commonName: "Gwayav",
        originAndDistribution:
          "Li soti Amerik twopikal epi li pouse toupatou ann Ayiti pou manje fre, fè ji oswa pate gwayav.",
        description:
          "Fwi won ki vèt oswa jòn deyò, ak chè woz oswa blan santi bon ki gen anpil ti grenn di anndan l.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "228.3 mg",
            dailyValuePercent: 254,
            role: "Youn nan pi gwo sous vitamin C pou defans natirèl kò a",
          },
          {
            name: "Potasyòm",
            amount: "417 mg",
            dailyValuePercent: 9,
            role: "Ede misk ak kè travay byen",
          },
        ],
        healthBenefits: [
          {
            title: "Ekstraòdinè nan Vitamin C ak Fib",
            explanation:
              "100 g gwayav bay plis pase de fwa vitamin C ou bezwen chak jou, plis 5.4 g fib.",
            evidenceNote: "Done nitrisyonèl USDA",
          },
        ],
        precautionsAndAllergies: [
          "Moulen ti grenn di yo ak prekosyon lè w ap manje gwayav fre.",
        ],
        bestWaysToConsume: [
          "Lave po a byen epi manje l fre, oswa pase l nan paswa pou fè ji gwayav.",
        ],
        storageRecommendations:
          "Mete gwayav mi yo nan frijidè pou 3 a 4 jou.",
      },
    },
  },
  {
    slug: "passion-fruit-grenadia",
    category: "haitian",
    accentHex: "#7C3AED",
    scientificName: "Passiflora edulis",
    localNames: { en: "Passion Fruit", fr: "Fruit de la Passion", ht: "Grenadia" },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 97,
      carbohydratesG: 23.4,
      fiberG: 10.4,
      sugarsG: 11.2,
      proteinG: 2.2,
      fatG: 0.7,
      waterPercent: 72.9,
    },
    localized: {
      en: {
        commonName: "Passion Fruit",
        originAndDistribution:
          "Native to South America and cherished across Haiti as grenadia for bright, tart, fragrant juices.",
        description:
          "Round purple or yellow shell filled with aromatic golden-orange gelatinous pulp and crunchy edible seeds.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "30 mg",
            dailyValuePercent: 33,
            role: "Supports immune defense and antioxidant protection",
          },
          {
            name: "Dietary Fiber",
            amount: "10.4 g",
            dailyValuePercent: 37,
            role: "Promotes digestive regularity and satiety",
          },
        ],
        healthBenefits: [
          {
            title: "High Fiber & Aromatic Polyphenols",
            explanation:
              "Eating the pulp with seeds supplies 10.4 g of dietary fiber per 100 g alongside vitamin C and vitamin A.",
            evidenceNote: "Food composition data",
          },
        ],
        precautionsAndAllergies: [
          "Rare cross-reactivity with latex allergy has been reported.",
        ],
        bestWaysToConsume: [
          "Scoop pulp into water with a touch of cane sugar for ji grenadia, or spoon over yogurt.",
        ],
        storageRecommendations:
          "Wrinkled skin indicates peak sweetness; refrigerate ripe fruits up to 1 week.",
      },
      fr: {
        commonName: "Fruit de la Passion (Grenadia)",
        originAndDistribution:
          "Originaire d'Amérique du Sud, très populaire en Haïti pour les jus parfumés.",
        description:
          "Coque ronde violette ou jaune renfermant une pulpe gélatineuse dorée acidulée et des graines croquantes.",
        vitaminsAndMinerals: [
          {
            name: "Vitamine C",
            amount: "30 mg",
            dailyValuePercent: 33,
            role: "Soutient le système immunitaire",
          },
          {
            name: "Fibres",
            amount: "10,4 g",
            dailyValuePercent: 37,
            role: "Favorise le transit intestinal",
          },
        ],
        healthBenefits: [
          {
            title: "Très Riche en Fibres",
            explanation:
              "Les graines comestibles et la pulpe offrent 10,4 g de fibres pour 100 g.",
            evidenceNote: "Composition alimentaire",
          },
        ],
        precautionsAndAllergies: [
          "Rares réactions croisées possibles avec le latex.",
        ],
        bestWaysToConsume: [
          "En jus frais allongé d'eau, sur un yaourt ou en salade de fruits.",
        ],
        storageRecommendations:
          "Une peau légèrement fripée indique une bonne maturité ; conserver au frais 5 à 7 jours.",
      },
      ht: {
        commonName: "Grenadia",
        originAndDistribution:
          "Li soti Amerik disid epi li popilè anpil ann Ayiti pou ji grenadia fre.",
        description:
          "Fwi won ak po koulè jòn oswa mov ki gen yon kaka jòn santi bon ak ti grenn kroustiyan anndan l.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "30 mg",
            dailyValuePercent: 33,
            role: "Ede defans natirèl kò a",
          },
          {
            name: "Fib Alimantè",
            amount: "10.4 g",
            dailyValuePercent: 37,
            role: "Bon anpil pou dijesyon ak tranzit",
          },
        ],
        healthBenefits: [
          {
            title: "Anpil Fib ak Vitamin C",
            explanation:
              "Kaka grenadia ak ti grenn li yo bay anpil fib pou vant la ak vitamin C.",
            evidenceNote: "Done nitrisyonèl",
          },
        ],
        precautionsAndAllergies: [
          "Moun ki gen alèji ak latèks ka pafwa gen ti sansibilite.",
        ],
        bestWaysToConsume: [
          "Bat li nan dlo frèt ak yon ti sik pou fè ji grenadia.",
        ],
        storageRecommendations:
          "Lè po a kòmanse rido, li pi dous ; mete l nan frijidè pou jiska 1 semèn.",
      },
    },
  },
  {
    slug: "orange-zoranj",
    category: "citrus",
    accentHex: "#F97316",
    scientificName: "Citrus × sinensis",
    localNames: { en: "Sweet Orange", fr: "Orange Douce", ht: "Zoranj Dous" },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 47,
      carbohydratesG: 11.8,
      fiberG: 2.4,
      sugarsG: 9.4,
      proteinG: 0.9,
      fatG: 0.1,
      waterPercent: 86.8,
    },
    localized: {
      en: {
        commonName: "Orange",
        originAndDistribution:
          "Cultivated worldwide across warm subtropical and tropical regions, including Haitian mountain groves.",
        description:
          "Round citrus fruit with aromatic dimpled peel (green-orange in tropical climates) and segmented juicy pulp.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "53.2 mg",
            dailyValuePercent: 59,
            role: "Supports immune defense and iron absorption",
          },
          {
            name: "Folate",
            amount: "30 µg",
            dailyValuePercent: 8,
            role: "Supports normal cell division",
          },
        ],
        healthBenefits: [
          {
            title: "Vitamin C & Dietary Fiber",
            explanation:
              "Whole orange segments deliver vitamin C alongside pectin fiber, supporting immune health and steady digestion.",
            evidenceNote: "Established nutritional role",
          },
        ],
        precautionsAndAllergies: [
          "Citrus acidity may aggravate acid reflux or sensitive mouth sores.",
        ],
        bestWaysToConsume: [
          "Eat whole segments with the white pith for maximum fiber, rather than strained juice alone.",
        ],
        storageRecommendations:
          "Store at cool room temperature for 1 week or refrigerate up to 2–3 weeks.",
      },
      fr: {
        commonName: "Orange",
        originAndDistribution:
          "Cultivée dans les régions chaudes du monde entier et dans les mornes d'Haïti.",
        description:
          "Agrume rond à écorce parfumée (parfois verte sous les tropiques même à maturité) et quartiers juteux.",
        vitaminsAndMinerals: [
          {
            name: "Vitamine C",
            amount: "53,2 mg",
            dailyValuePercent: 59,
            role: "Soutient le système immunitaire normal",
          },
        ],
        healthBenefits: [
          {
            title: "Vitamine C et Fibres",
            explanation:
              "Consommée entière, l'orange associe vitamine C et fibres douces (pectine).",
            evidenceNote: "Rôle nutritionnel établi",
          },
        ],
        precautionsAndAllergies: [
          "L'acidité peut gêner en cas de reflux gastrique.",
        ],
        bestWaysToConsume: [
          "Manger en quartiers entiers pour profiter des fibres.",
        ],
        storageRecommendations:
          "Conserver 1 semaine à température ambiante ou 2 à 3 semaines au frais.",
      },
      ht: {
        commonName: "Zoranj Dous",
        originAndDistribution:
          "Li kiltive nan mòn Ayiti ak toupatou nan peyi cho yo.",
        description:
          "Fwi won ak po santi bon (pafwa po a rete vèt menm lè l mi ann Ayiti) ak grenn ki gen anpil ji.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "53.2 mg",
            dailyValuePercent: 59,
            role: "Sipòte defans kò a epi ede absòbe fè",
          },
        ],
        healthBenefits: [
          {
            title: "Vitamin C ak Fib Alimantè",
            explanation:
              "Manje zoranj ak tout kòs li bay vitamin C plis bon fib pou vant la.",
            evidenceNote: "Wòl nitrisyonèl etabli",
          },
        ],
        precautionsAndAllergies: [
          "Asidite a ka bay ti boule lestomak lakay moun ki gen refli.",
        ],
        bestWaysToConsume: [
          "Manje tranch yo antye pito pase ji sèlman pou jwenn fib yo.",
        ],
        storageRecommendations:
          "Konsève l nan kote fre pou 1 semèn oswa nan frijidè pou 2 a 3 semèn.",
      },
    },
  },
  {
    slug: "coconut-kokoye",
    category: "tropical",
    accentHex: "#0D9488",
    scientificName: "Cocos nucifera",
    localNames: { en: "Coconut", fr: "Noix de Coco", ht: "Kokoye" },
    nutritionalComposition: {
      servingSize: "100 g (fresh meat)",
      calories: 354,
      carbohydratesG: 15.2,
      fiberG: 9.0,
      sugarsG: 6.2,
      proteinG: 3.3,
      fatG: 33.5,
      waterPercent: 47.0,
    },
    localized: {
      en: {
        commonName: "Coconut",
        originAndDistribution:
          "Iconic coastal palm fruit across the Caribbean, Pacific, and tropical coastlines worldwide.",
        description:
          "Fibrous husk enclosing a hard shell with refreshing electrolyte-rich coconut water when young and firm white meat when mature.",
        vitaminsAndMinerals: [
          {
            name: "Manganese",
            amount: "1.5 mg",
            dailyValuePercent: 65,
            role: "Supports bone metabolism and antioxidant enzymes",
          },
          {
            name: "Copper",
            amount: "0.44 mg",
            dailyValuePercent: 49,
            role: "Supports normal red blood cell and nerve function",
          },
        ],
        healthBenefits: [
          {
            title: "Natural Electrolytes & Fiber",
            explanation:
              "Young coconut water provides natural potassium for hydration, while mature coconut meat is high in dietary fiber.",
            evidenceNote: "Nutritional composition data",
          },
        ],
        precautionsAndAllergies: [
          "Coconut meat is high in saturated fat and calories; enjoy in moderate portions.",
          "Rare coconut allergies can occur.",
        ],
        bestWaysToConsume: [
          "Drink chilled fresh green coconut water, or grate mature meat into rice, desserts, and sauces.",
        ],
        storageRecommendations:
          "Refrigerate opened coconut water and fresh meat; consume within 2–3 days.",
      },
      fr: {
        commonName: "Noix de Coco",
        originAndDistribution:
          "Emblématique des côtes tropicales d'Haïti, des Caraïbes et du Pacifique.",
        description:
          "Fruit du cocotier offrant une eau désaltérante jeune, puis une chair blanche ferme et parfumée.",
        vitaminsAndMinerals: [
          {
            name: "Manganèse",
            amount: "1,5 mg",
            dailyValuePercent: 65,
            role: "Participe au métabolisme osseux",
          },
        ],
        healthBenefits: [
          {
            title: "Hydratation et Fibres",
            explanation:
              "L'eau de coco apporte du potassium naturel et la pulpe fournit beaucoup de fibres.",
            evidenceNote: "Table nutritionnelle",
          },
        ],
        precautionsAndAllergies: [
          "La chair est riche en acides gras saturés : à consommer avec modération.",
        ],
        bestWaysToConsume: [
          "Boire l'eau de coco verte bien fraîche ; râper la chair mûre en cuisine.",
        ],
        storageRecommendations:
          "Réfrigérer après ouverture et consommer sous 2 à 3 jours.",
      },
      ht: {
        commonName: "Kokoye",
        originAndDistribution:
          "Li pouse tout bò lanmè ak plèn ann Ayiti ak tout peyi twopikal yo.",
        description:
          "Kokoye vèt bay dlo fre ki gen bon gou, epi kokoye sèk gen nannan blan ki rich.",
        vitaminsAndMinerals: [
          {
            name: "Manganèz",
            amount: "1.5 mg",
            dailyValuePercent: 65,
            role: "Ede sante zo yo ak pwoteksyon selil yo",
          },
        ],
        healthBenefits: [
          {
            title: "Dlo Natirèl & Fib",
            explanation:
              "Dlo kokoye vèt ede idrate kò a ak potasyòm natirèl, pandan nannan an bay anpil fib.",
            evidenceNote: "Done nitrisyonèl",
          },
        ],
        precautionsAndAllergies: [
          "Nannan kokoye sèk la gen anpil grès satirre ; manje l ak moderasyon.",
        ],
        bestWaysToConsume: [
          "Bwè dlo kokoye vèt frèt ; graje kokoye sèk pou fè dous oswa lèt kokoye.",
        ],
        storageRecommendations:
          "Mete dlo a ak nannan louvri a nan frijidè epi konsome l nan 2 a 3 jou.",
      },
    },
  },
  {
    slug: "watermelon-melon",
    category: "tropical",
    accentHex: "#E11D48",
    scientificName: "Citrullus lanatus",
    localNames: { en: "Watermelon", fr: "Pastèque", ht: "Melon dlo" },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 30,
      carbohydratesG: 7.6,
      fiberG: 0.4,
      sugarsG: 6.2,
      proteinG: 0.6,
      fatG: 0.2,
      waterPercent: 91.5,
    },
    localized: {
      en: {
        commonName: "Watermelon",
        originAndDistribution:
          "Originated in northeastern Africa and cultivated worldwide across sunny warm climates.",
        description:
          "Large striped green gourd with crisp, vibrant red-pink flesh and black or white seeds.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "8.1 mg",
            dailyValuePercent: 9,
            role: "Supports everyday immune health",
          },
          {
            name: "Potassium",
            amount: "112 mg",
            dailyValuePercent: 2,
            role: "Assists hydration balance",
          },
        ],
        healthBenefits: [
          {
            title: "91% Hydration & Lycopene",
            explanation:
              "Refreshing low-calorie hydration source containing natural lycopene and L-citrulline.",
            evidenceNote: "USDA nutrient database",
          },
        ],
        precautionsAndAllergies: [
          "Very high intake in one sitting may cause mild bloating in sensitive individuals (FODMAPs).",
        ],
        bestWaysToConsume: [
          "Serve cold in wedges or blend with lime and mint.",
        ],
        storageRecommendations:
          "Refrigerate cut watermelon covered for up to 4 days.",
      },
      fr: {
        commonName: "Pastèque",
        originAndDistribution:
          "Originaire d'Afrique du Nord-Est, cultivée dans les régions chaudes du monde entier.",
        description:
          "Gros fruit vert rayé à chair rouge croquante et très juteuse.",
        vitaminsAndMinerals: [
          {
            name: "Vitamine C",
            amount: "8,1 mg",
            dailyValuePercent: 9,
            role: "Contribue à l'immunité normale",
          },
        ],
        healthBenefits: [
          {
            title: "Hydratation à 91 % et Lycopène",
            explanation:
              "Très faible en calories, idéale pour se réhydrater par temps chaud.",
            evidenceNote: "Base nutritionnelle USDA",
          },
        ],
        precautionsAndAllergies: [
          "Une consommation excessive peut provoquer un léger inconfort digestif.",
        ],
        bestWaysToConsume: [
          "Bien fraîche en tranches ou en jus avec du citron vert.",
        ],
        storageRecommendations:
          "Couvrir et réfrigérer une fois coupée jusqu'à 4 jours.",
      },
      ht: {
        commonName: "Melon dlo",
        originAndDistribution:
          "Li soti ann Afrik epi li kiltive nan tout zòn cho, tankou nan plèn ann Ayiti.",
        description:
          "Gwo fwi vèt ki gen chè wouj kroustiyan ak anpil dlo fre.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "8.1 mg",
            dailyValuePercent: 9,
            role: "Sipòte sante jeneral kò a",
          },
        ],
        healthBenefits: [
          {
            title: "91% Dlo pou Rafrechi Kò a",
            explanation:
              "Melon dlo gen anpil dlo ak trè kèk kalori, li ekselan pou idratasyon lè fè cho.",
            evidenceNote: "Done nitrisyonèl USDA",
          },
        ],
        precautionsAndAllergies: [
          "Manje twòp alafwa ka bay yon ti gonfleman vant lakay kèk moun.",
        ],
        bestWaysToConsume: [
          "Koupe l an tranch byen frèt oswa fè ji fre.",
        ],
        storageRecommendations:
          "Kouvri moso koupe yo epi mete yo nan frijidè pou 3 a 4 jou.",
      },
    },
  },
  {
    slug: "lemon-sitwon",
    category: "citrus",
    accentHex: "#65A30D",
    scientificName: "Citrus × limon / Citrus aurantiifolia",
    localNames: { en: "Lemon / Key Lime", fr: "Citron / Citron Vert", ht: "Sitwon" },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 29,
      carbohydratesG: 9.3,
      fiberG: 2.8,
      sugarsG: 2.5,
      proteinG: 1.1,
      fatG: 0.3,
      waterPercent: 89.0,
    },
    localized: {
      en: {
        commonName: "Lemon & Tropical Lime",
        originAndDistribution:
          "Native to Asia; Haitian small aromatic sitwon (Key lime) is essential across Caribbean kitchens.",
        description:
          "Bright yellow or green aromatic citrus with tart juice rich in citric acid and vitamin C.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "53 mg",
            dailyValuePercent: 59,
            role: "Supports immune health and enhances plant-based iron absorption",
          },
        ],
        healthBenefits: [
          {
            title: "Vitamin C & Iron Absorption",
            explanation:
              "Adding fresh lemon or lime juice to meals helps the body absorb non-heme iron from beans and leafy greens.",
            evidenceNote: "Established nutritional synergy",
          },
        ],
        precautionsAndAllergies: [
          "High acidity can erode tooth enamel if sipped undiluted frequently; rinse with plain water after.",
          "Citrus oil on skin combined with strong sunlight can cause phytophotodermatitis.",
        ],
        bestWaysToConsume: [
          "Dilute fresh juice in water or squeeze over salads, grilled fish, and tropical fruits.",
        ],
        storageRecommendations:
          "Store in the refrigerator crisper for 2–3 weeks.",
      },
      fr: {
        commonName: "Citron / Citron Vert",
        originAndDistribution:
          "Originaire d'Asie, incontournable dans la cuisine haïtienne et mondiale.",
        description:
          "Agrume jaune ou vert très parfumé au jus acide riche en vitamine C.",
        vitaminsAndMinerals: [
          {
            name: "Vitamine C",
            amount: "53 mg",
            dailyValuePercent: 59,
            role: "Favorise l'absorption du fer végétal",
          },
        ],
        healthBenefits: [
          {
            title: "Vitamine C & Absorption du Fer",
            explanation:
              "Un filet de citron aide l'organisme à mieux absorber le fer des légumes secs.",
            evidenceNote: "Synergie nutritionnelle connue",
          },
        ],
        precautionsAndAllergies: [
          "L'acidité pure peut fragiliser l'émail dentaire ; diluer dans l'eau.",
        ],
        bestWaysToConsume: [
          "En citronnade peu sucrée, sur les salades ou les plats cuisinés.",
        ],
        storageRecommendations:
          "Conserver au bac à légumes du réfrigérateur 2 à 3 semaines.",
      },
      ht: {
        commonName: "Sitwon",
        originAndDistribution:
          "Li soti ann Azi men sitwon vèt ayisyen an endispansab nan tout kuizin ann Ayiti.",
        description:
          "Ti fwi vèt oswa jòn ki santi bon anpil epi ki gen ji asid ki rich nan vitamin C.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "53 mg",
            dailyValuePercent: 59,
            role: "Ede kò a absòbe fè ki nan pwa ak fèy vèt yo",
          },
        ],
        healthBenefits: [
          {
            title: "Vitamin C ak Absòpsyon Fè",
            explanation:
              "Mete yon ti ji sitwon sou salad oswa manje ede kò a pran fè ki nan legim ak pwa yo pi fasil.",
            evidenceNote: "Sinerji nitrisyonèl etabli",
          },
        ],
        precautionsAndAllergies: [
          "Bwè ji sitwon san dlo twò souvan ka abime emay dan yo ; melanje l ak dlo.",
          "Lè ji sitwon sou po w rankontre gwo solèy, li ka tache po a.",
        ],
        bestWaysToConsume: [
          "Fè sitwonad fre oswa peze l sou salad, pwason ak lòt fwi.",
        ],
        storageRecommendations:
          "Mete sitwon yo nan frijidè pou yo dire 2 a 3 semèn.",
      },
    },
  },
  {
    slug: "strawberry-frez",
    category: "berry",
    accentHex: "#DC2626",
    scientificName: "Fragaria × ananassa",
    localNames: { en: "Strawberry", fr: "Fraise", ht: "Frèz" },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 32,
      carbohydratesG: 7.7,
      fiberG: 2.0,
      sugarsG: 4.9,
      proteinG: 0.7,
      fatG: 0.3,
      waterPercent: 91.0,
    },
    localized: {
      en: {
        commonName: "Strawberry",
        originAndDistribution:
          "Hybridized in 18th-century France; grown worldwide in temperate climates and highland farms such as Kenscoff, Haiti.",
        description:
          "Bright red conical berry speckled with tiny surface achenes and topped by a green leafy calyx.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "58.8 mg",
            dailyValuePercent: 65,
            role: "Supports immune function and collagen production",
          },
          {
            name: "Manganese",
            amount: "0.39 mg",
            dailyValuePercent: 17,
            role: "Supports normal antioxidant defenses",
          },
        ],
        healthBenefits: [
          {
            title: "Low-Sugar Berry Rich in Anthocyanins",
            explanation:
              "Provides vitamin C, folate, and anthocyanin antioxidants with naturally modest sugar content.",
            evidenceNote: "Nutritional composition data",
          },
        ],
        precautionsAndAllergies: [
          "Strawberries can trigger mild oral allergy symptoms in pollen-sensitive individuals.",
        ],
        bestWaysToConsume: [
          "Rinse just before eating fresh whole, sliced over oats, or blended in smoothies.",
        ],
        storageRecommendations:
          "Keep unwashed in the refrigerator in a breathable container and eat within 3 days.",
      },
      fr: {
        commonName: "Fraise",
        originAndDistribution:
          "Créée au XVIIIe siècle en Europe et cultivée dans les régions tempérées et en altitude (comme Kenscoff en Haïti).",
        description:
          "Petit fruit rouge parfumé parsemé d'akènes et coiffé d'un calice vert.",
        vitaminsAndMinerals: [
          {
            name: "Vitamine C",
            amount: "58,8 mg",
            dailyValuePercent: 65,
            role: "Soutient les défenses immunitaires",
          },
        ],
        healthBenefits: [
          {
            title: "Riche en Vitamine C et Peu Sucrée",
            explanation:
              "Apporte vitamine C et polyphénols tout en restant légère en sucres.",
            evidenceNote: "Table nutritionnelle",
          },
        ],
        precautionsAndAllergies: [
          "Peut parfois provoquer une sensibilité orale ou de l'urticaire chez les personnes allergiques.",
        ],
        bestWaysToConsume: [
          "Laver juste avant dégustation, nature ou avec du yaourt.",
        ],
        storageRecommendations:
          "Conserver non lavée au réfrigérateur et consommer sous 2 à 3 jours.",
      },
      ht: {
        commonName: "Frèz",
        originAndDistribution:
          "Li pouse nan klima fre ak nan mòn wo tankou Kenskòf ann Ayiti.",
        description:
          "Ti fwi wouj klere ki gen ti grenn sou po li ak fèy vèt anlè tèt li.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "58.8 mg",
            dailyValuePercent: 65,
            role: "Sipòte iminite ak sante po a",
          },
        ],
        healthBenefits: [
          {
            title: "Anpil Vitamin C ak Ti Kalori",
            explanation:
              "Frèz gen anpil vitamin C ak antioksidan natirèl san twòp sik.",
            evidenceNote: "Done nitrisyonèl",
          },
        ],
        precautionsAndAllergies: [
          "Kèk moun ki gen alèji ka gen gratèl nan bouch lè yo manje frèz kri.",
        ],
        bestWaysToConsume: [
          "Lave yo jis anvan w manje yo fre oswa melanje yo nan yogout.",
        ],
        storageRecommendations:
          "Sere yo nan frijidè san lave yo, epi manje yo nan 2 a 3 jou.",
      },
    },
  },
  {
    slug: "star-apple-kayimit",
    category: "haitian",
    accentHex: "#6D28D9",
    scientificName: "Chrysophyllum cainito",
    localNames: { en: "Star Apple", fr: "Caïmite", ht: "Kayimit" },
    nutritionalComposition: {
      servingSize: "100 g",
      calories: 67,
      carbohydratesG: 14.6,
      fiberG: 3.3,
      sugarsG: 8.5,
      proteinG: 1.5,
      fatG: 1.6,
      waterPercent: 81.8,
    },
    localized: {
      en: {
        commonName: "Star Apple (Kayimit)",
        originAndDistribution:
          "Native to the Greater Antilles and Central America; beloved courtyard tree fruit across Haiti.",
        description:
          "Glossy purple or pale-green sphere whose cross-section reveals a star-shaped arrangement of sweet milky-translucent pulp and glossy brown seeds.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "14.5 mg",
            dailyValuePercent: 16,
            role: "Supports everyday immune health",
          },
          {
            name: "Calcium",
            amount: "21 mg",
            dailyValuePercent: 2,
            role: "Contributes to bone maintenance",
          },
        ],
        healthBenefits: [
          {
            title: "Hydrating Tropical Fiber",
            explanation:
              "Offers natural dietary fiber, vitamin C, and refreshing hydration with a delicate sweet flavor.",
            evidenceNote: "Tropical food composition records",
          },
        ],
        precautionsAndAllergies: [
          "Do not eat the skin or bitter milky latex beneath the rind; scoop out only the inner pulp.",
        ],
        bestWaysToConsume: [
          "Chill, halve horizontally to see the star pattern, and spoon out the sweet pulp.",
        ],
        storageRecommendations:
          "Store ripe star apples in the refrigerator for 3–5 days.",
      },
      fr: {
        commonName: "Caïmite (Kayimit)",
        originAndDistribution:
          "Originaire des Grandes Antilles et d'Amérique centrale, très appréciée dans les jardins haïtiens.",
        description:
          "Fruit rond violet ou vert clair dont la coupe transversale dessine une étoile dans une pulpe laiteuse et sucrée.",
        vitaminsAndMinerals: [
          {
            name: "Vitamine C",
            amount: "14,5 mg",
            dailyValuePercent: 16,
            role: "Participe aux défenses naturelles",
          },
        ],
        healthBenefits: [
          {
            title: "Fibres et Douceur Hydratante",
            explanation:
              "Riche en eau et en fibres alimentaires douces.",
            evidenceNote: "Données botaniques tropicales",
          },
        ],
        precautionsAndAllergies: [
          "Ne pas consommer l'écorce ni le latex amer sous la peau ; manger uniquement la pulpe interne.",
        ],
        bestWaysToConsume: [
          "Couper en deux bien frais et déguster la pulpe à la cuillère.",
        ],
        storageRecommendations:
          "Conserver au réfrigérateur 3 à 5 jours.",
      },
      ht: {
        commonName: "Kayimit",
        originAndDistribution:
          "Li soti nan Gwo Zantiy yo epi li pouse anpil nan lakou ann Ayiti.",
        description:
          "Fwi won koulè vyolèt oswa vèt pal ; lè w koupe l nan mitan, chè blan dous li a fè fòm yon zetwal.",
        vitaminsAndMinerals: [
          {
            name: "Vitamin C",
            amount: "14.5 mg",
            dailyValuePercent: 16,
            role: "Ede defans natirèl kò a",
          },
        ],
        healthBenefits: [
          {
            title: "Fib ak Idratasyon Natirèl",
            explanation:
              "Kayimit bay bon fib ak dlo ki rafrechi kò a ak yon gou dous.",
            evidenceNote: "Done sou fwi twopikal",
          },
        ],
        precautionsAndAllergies: [
          "Pa manje po a ni lèt anmè ki anba po a ; manje sèlman kaka dous anndan an.",
        ],
        bestWaysToConsume: [
          "Mete l frèt, koupe l an de pou wè zetwal la, epi manje kaka a ak kiyè.",
        ],
        storageRecommendations:
          "Sere kayimit mi yo nan frijidè pou 3 a 5 jou.",
      },
    },
  },
];

export function toAnalysisResult(
  entry: OfflineFruitEntry,
  language: LanguageCode
): FruitAnalysisResult {
  const loc = entry.localized[language];
  return {
    id: `catalog-${entry.slug}-${language}`,
    isFruit: true,
    confidence: 100,
    confidenceLevel: "high",
    commonName: loc.commonName,
    scientificName: entry.scientificName,
    localNames: entry.localNames,
    alternativeMatches: [],
    originAndDistribution: loc.originAndDistribution,
    description: loc.description,
    nutritionalComposition: entry.nutritionalComposition,
    vitaminsAndMinerals: loc.vitaminsAndMinerals,
    healthBenefits: loc.healthBenefits,
    precautionsAndAllergies: loc.precautionsAndAllergies,
    bestWaysToConsume: loc.bestWaysToConsume,
    storageRecommendations: loc.storageRecommendations,
    uncertainReason: "",
    imageUrl: entry.imageUrl,
    analyzedAt: new Date().toISOString(),
    language,
    isOfflineCatalog: true,
  };
}

export function getDailyRecommendedFruit(
  language: LanguageCode
): OfflineFruitEntry {
  const now = new Date();
  const dayIndex = Math.floor(now.getTime() / 86_400_000);
  const index = dayIndex % OFFLINE_FRUITS.length;
  return OFFLINE_FRUITS[index];
}
