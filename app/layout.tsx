import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { FavoriteProvider } from "@/context/FavoriteContext";
import { SearchProvider } from "@/context/SearchContext";
import { ToastProvider } from "@/components/Toast";


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
  keywords: [
    "دجلة فون",
    "هواتف العراق",
    "iPhone العراق",
    "Samsung العراق",
    "شراء موبايلات"
  ],
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">


        <CartProvider>

          <FavoriteProvider>

            <SearchProvider>

              <ToastProvider>

                {children}

              </ToastProvider>

            </SearchProvider>

          </FavoriteProvider>

        </CartProvider>


      </body>

    </html>

  );

}