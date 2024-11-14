import { createContext, useEffect, useState } from "react";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

const translations = { en, ar };

// eslint-disable-next-line react-refresh/only-export-components
export const TranslationContext = createContext();

// eslint-disable-next-line react/prop-types
export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translate = (key) => {
    return (
      key.split(".").reduce((o, i) => o?.[i], translations[language]) || key
    );
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  useEffect(() => {
    // Set body direction based on the selected language
    document.body.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
  }, [language]);

  return (
    <TranslationContext.Provider
      value={{ language, translate, toggleLanguage }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
