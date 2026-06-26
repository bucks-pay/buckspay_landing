"use client";

import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { t } = useTranslation(["header"]);
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;

  const { theme, toggle } = ctx;
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("toggleTheme")}
      title={t("toggleTheme")}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 text-foreground/85 transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21dba9]"
    >
      {isDark ? (
        <FaSun className="h-4 w-4" />
      ) : (
        <FaMoon className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
