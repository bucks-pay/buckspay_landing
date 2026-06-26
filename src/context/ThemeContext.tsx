"use client";
import { createContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  }
  // Dark-first by default (matches the inline no-flash script in layout).
  return "dark";
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggle = () =>
    setTheme((current) => (current === "light" ? "dark" : "light"));

  // Persist and reflect the theme as a class on <html> so CSS tokens (and the
  // page/body background) update everywhere, including fixed header/footer.
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
