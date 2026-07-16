import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { FavoriteProvider } from "@/context/FavoriteContext";
import { SearchProvider } from "@/context/SearchContext";
import { SettingsProvider } from "@/context/SettingsContext";

import { ToastProvider } from "@/components/Toast";

import { getSettings } from "@/lib/settings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "دجلة فون | متجر الهواتف الذكية في العراق",
  description:
    "دجلة فون متجر لبيع الهواتف الأصلية بأفضل الأسعار مع خدمة التوصيل داخل العراق",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const settings = await getSettings();

  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >

      <body>

        <SettingsProvider settings={settings}>

          <CartProvider>

            <FavoriteProvider>

              <SearchProvider>

                <ToastProvider>

                  {children}

                </ToastProvider>

              </SearchProvider>

            </FavoriteProvider>

          </CartProvider>

        </SettingsProvider>

      </body>

    </html>
  );
}