import { useContext } from "react";
import { TranslationContext } from "../context/TranslationContext";

export const useTranslation = () => {
  const { translate, toggleLanguage, language } =
    useContext(TranslationContext);
  return { translate, toggleLanguage, language };
};
