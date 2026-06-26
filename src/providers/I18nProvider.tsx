"use client";

import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

/**
 * Provides the (synchronously initialized) i18next instance to the whole tree.
 * Mounting this at the layout root guarantees translations are ready before any
 * component calls useTranslation — instead of relying on i18n.ts being pulled in
 * as a side effect of some deep component (e.g. the language switcher).
 */
export default function I18nProvider({ children }: { children: ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
