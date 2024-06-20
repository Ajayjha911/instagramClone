import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome!",
      data: "i18next is an internationalization-framework written in and for JavaScript. But it's much more than that!",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue!",
      data: "i18next est un framework d'internationalisation écrit en et pour JavaScript. Mais c'est bien plus que ça !,",
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "en", // Default language

  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
