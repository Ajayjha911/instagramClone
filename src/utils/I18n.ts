import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome!",
      data: "i18next is an internationalization-framework written in and for JavaScript. But it's much more than that!",
    },
  },
  hi: {
    translation: {
      welcome: "Bienvenue!",
      data: "i18next जावास्क्रिप्ट में और उसके लिए लिखा गया एक अंतर्राष्ट्रीयकरण-ढांचा है। लेकिन यह उससे कहीं अधिक है!",
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;

export const setLanguage = ({ langCode }: { langCode: string }) => {
  i18n.changeLanguage(langCode);
};
