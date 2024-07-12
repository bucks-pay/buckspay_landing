import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enLading from "../public/locales/en/landing.json";
import enHeader from "../public/locales/en/header.json";

import esLading from "../public/locales/es/landing.json";
import esHeader from "../public/locales/es/header.json";

const resources = {
  en: {
    landing: enLading,
    header: enHeader,
  },
  es: {
    landing: esLading,
    header: esHeader,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
