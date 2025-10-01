// src/components/common/TranslationLoader.js
import { useTranslation } from "react-i18next";

const TranslationLoader = () => {
  const { t } = useTranslation();
  return(
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.5rem",
      fontWeight: "bold",
      zIndex: 9999,
    }}
  >
    {t('Common.loading')}
  </div>
);
}

export default TranslationLoader;