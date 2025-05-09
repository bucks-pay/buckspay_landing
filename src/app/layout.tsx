import "./globals.css";
import type { Metadata } from "next";

import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

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
      <head>
        {/* Configuración del favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.ico" sizes="96x96" />
        <link rel="icon" href="/favicon.ico" sizes="144x144" />
      </head>
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="containerMain">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}