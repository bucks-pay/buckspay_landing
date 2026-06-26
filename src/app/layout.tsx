import "./globals.css";
import type { Metadata } from "next";

import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import I18nProvider from "@/providers/I18nProvider";
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
        {/* Apply the saved theme before paint to avoid a flash (dark-first). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        {/* Configuración del favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.ico" sizes="96x96" />
        <link rel="icon" href="/favicon.ico" sizes="144x144" />
      </head>
      <body>
        <I18nProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="containerMain">
                <Header />
                <main>{children}</main>
                <Footer />
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </I18nProvider>
      </body>
    </html>
  );
}