import "./globals.css";
import type { Metadata } from "next";

import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import ThemeSwitcher from "@/components/themeSwitcher/ThemeSwitcher";

export const metadata: Metadata = {
  title: "BucksPay",
  description: "Easy Pay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="containerMain">
              <Header />
              <main>{children}</main>
              <Footer />
              <ThemeSwitcher />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
