import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enLanding from "../public/locales/en/landing.json";
import enHeader from "../public/locales/en/header.json";
import enFooter from "../public/locales/en/footer.json";
import enPrivacy from "../public/locales/en/privacy.json";

import esLanding from "../public/locales/es/landing.json";
import esHeader from "../public/locales/es/header.json";
import esFooter from "../public/locales/es/footer.json";
import esPrivacy from "../public/locales/es/privacy.json";

export const resources = {
  en: { landing: enLanding, header: enHeader, footer: enFooter, privacy: enPrivacy },
  es: { landing: esLanding, header: esHeader, footer: esFooter, privacy: esPrivacy },
} as const;

export const defaultNS = "landing";
export const namespaces = ["landing", "header", "footer", "privacy"] as const;

// Guard against re-initialization (Fast Refresh / multiple imports).
if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    resources,
    lng: "es",
    fallbackLng: "es",
    ns: namespaces as unknown as string[],
    defaultNS,
    // Synchronous init so translations are ready on the very first render
    // (the async default left `t()` returning raw keys until a re-render).
    initImmediate: false,
    debug: process.env.NODE_ENV === "development",
    interpolation: { escapeValue: false },
    // No Suspense boundary in the tree — render with translations directly.
    react: { useSuspense: false },
  });
} else {
  // Already initialized (Fast Refresh re-evaluated this module, e.g. after a
  // locale edit). The init guard above would otherwise keep the *old* bundles
  // in memory, so `t()` returns raw keys for any newly added key until a full
  // server/browser restart. Re-add the bundles with overwrite and notify
  // consumers so locale edits hot-reload without a restart.
  for (const [lng, nsMap] of Object.entries(resources)) {
    for (const [ns, data] of Object.entries(nsMap)) {
      i18next.addResourceBundle(lng, ns, data, true, true);
    }
  }
  // `loaded` makes react-i18next's useTranslation consumers re-render.
  i18next.emit("loaded");
}

export default i18next;
