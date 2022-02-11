import * as Localization from "expo-localization";
import i18n from "i18n-js";
// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  tr: {
    training: {
      title: "Antreman Listesi",
      fullBody: {
        title: "Tüm Vücut Başlangıç Antremanı",
        level: "seviye 1",
      },
      chestBicepsBack: {
        title: "Göğüs - Ön Kol - Sırt Antremanı",
        level: "seviye 2",
      },
      shoulderTricepsLegs: {
        title: "Omuz - Arka Kol - Bacak Antremanı",
        level: "seviye 2",
      },
      movement: {
        set: "Set",
        setWeight: "Set Weight",
      },
    },
    nutrition: {
      title: "Sağlıklı Beslenme",
      proteinSources: {
        title: "Protein Kaynakları",
      },
      qualityCarbohydrate: {
        title: "Kaliteli Karbonhidralar",
      },
      oatBenefits: {
        title: "Yulaf Ezmesinin Faydaları",
      },
    },
  },
  en: {
    training: {
      title: "Training Lists",
      fullBody: {
        title: "Fullbody Trainig",
        level: "level 1",
      },
      chestBicepsBack: {
        title: "Chest - Biceps - Back Training",
        level: "level 2",
      },
      shoulderTricepsLegs: {
        title: "Shoulder - Triceps - Legs Training",
        level: "level 2",
      },
      movement: {
        set: "Set",
        setWeight: "Set Weight",
      },
    },
    nutrition: {
      title: "Healthy Nutrition",
      proteinSources: {
        title: "Protein Sources",
      },
      qualityCarbohydrate: {
        title: "Quality Carbohydrate",
      },
      oatBenefits: {
        title: "Oat Benefits",
      },
    },
  },
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

i18n.fallbacks = true;
