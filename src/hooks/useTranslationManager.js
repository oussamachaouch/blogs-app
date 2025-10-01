// src/hooks/useTranslationManager.js
import { useCallback, useEffect } from "react";
import i18n from "../i18n/i18n";
import { AVAILABLE_LANGUAGES } from "../config/languages";

export function useTranslationManager() {
  //  const [loading, setLoading] = useState(true);

  const fetchAndSetLanguage = useCallback(async (lng) => {
    // setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/translate/${lng}?sync=false`);
      if (!response.ok) throw new Error("Failed to fetch translations");
      if(response.status === 202) throw new Error("Translation is still running on server. Please try again later.");

      const data = await response.json();
      localStorage.setItem(`translations_${lng}`, JSON.stringify(data));
      localStorage.setItem("language", lng);

      i18n.addResourceBundle(lng, "translation", data, true, true);
      i18n.changeLanguage(lng);
    } catch (err) {
      console.error(`Error translations for ${lng}:`, err);
      alert(`${lng} Translation is still running on server. Please try again later.`);
    }
    // finally {
    //   setLoading(false);
    // }
  }, []);

  const fetchAllLanguages = useCallback(async () => {
    try 
    {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/translate/all?sync=false`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codes: AVAILABLE_LANGUAGES.filter(lang => lang.code !== "en").map(lang => lang.code) })
      });
      if (!response.ok) throw new Error("Failed to fetch available languages");
    } catch (err) {
      console.error("Error fetching available languages:", err);
    }
  }, []);
      

  // Load language on mount (for first time)
  useEffect(() => {
    const currentLang = localStorage.getItem("language") || "en";
    const cached = localStorage.getItem(`translations_${currentLang}`);

    if (cached) {
      i18n.addResourceBundle(currentLang, "translation", JSON.parse(cached), true, true);
      i18n.changeLanguage(currentLang);
      // setLoading(false);
    } else {
      fetchAndSetLanguage(currentLang); // Fetch from backend if not cached
      fetchAllLanguages(); // Pre-fetch available languages
    }
  }, [fetchAndSetLanguage]);

  const changeLanguage = useCallback(
    async (lng) => {
      // setLoading(true);
      const cached = localStorage.getItem(`translations_${lng}`);

      if (cached) {
        i18n.addResourceBundle(lng, "translation", JSON.parse(cached), true, true);
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng);
        // setLoading(false);
      } else {
        fetchAndSetLanguage(lng);
      }
    },
    [fetchAndSetLanguage]
  );

  return { changeLanguage, /*loading*/ };
}