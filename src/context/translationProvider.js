import React, { createContext, useContext } from "react";
import { useTranslationManager } from "../hooks/useTranslationManager";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const { changeLanguage, loading } = useTranslationManager();

  return (
    <TranslationContext.Provider value={{ changeLanguage, loading }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => useContext(TranslationContext);