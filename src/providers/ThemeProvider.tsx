"use client";
import { ReactNode } from "react";

/**
 * The active theme is applied as a class on <html> by ThemeContextProvider (and
 * by the inline no-flash script in layout). This provider is now just a
 * passthrough kept for backwards-compatible imports.
 */
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default ThemeProvider;
