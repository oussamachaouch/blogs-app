// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const storedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    lng: storedLanguage,
    fallbackLng: "en",
    resources: {}, // Start empty, we will inject translations manually
    interpolation: { escapeValue: false },
  });

export default i18n;