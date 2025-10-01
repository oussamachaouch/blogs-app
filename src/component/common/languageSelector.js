import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa"; // Globe icon
//import { useTranslationContext } from "../../context/translationProvider";
import { AVAILABLE_LANGUAGES } from "../../config/languages";
import { useTranslationManager } from "../../hooks/useTranslationManager";

const LanguageSelector = () => {
  // const { changeLanguage, loading } = useTranslationContext();
  const { changeLanguage } = useTranslationManager();
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("language") || "en");

  const handleSelect = (lang) => {
    //if (loading) return; // prevent spam clicks
    changeLanguage(lang);
    setCurrentLanguage(lang);
    setOpen(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Globe icon */}
      <FaGlobe
        size={24}
        style={{ 
          cursor: "pointer", 
          // opacity: loading ? 0.5 : 1 
        }}
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: 0,
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            zIndex: 1000,
          }}
        >
          {AVAILABLE_LANGUAGES.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                backgroundColor: currentLanguage === lang.code ? "#f0f0f0" : "white",
                // opacity: loading ? 0.5 : 1,
                pointerEvents: "auto",
              }}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;