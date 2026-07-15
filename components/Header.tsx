"use client";

import Link from "next/link";
import Image from "next/image";
import FavoriteCount from "@/components/FavoriteCount";
import CartCount from "@/components/CartCount";
import { useSearch } from "@/context/SearchContext";

export default function Header() {
  const { search, setSearch } = useSearch();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between gap-8">

        {/* الشعار */}
        <Link
          href="/"
          className="flex items-center gap-4 group"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg transition duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="دجلة فون"
              width={72}
              height={72}
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl font-extrabold text-blue-700 leading-none">
              دجلة فون
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              جودة تثق بها • أسعار تنافسية
            </p>
          </div>
        </Link>

        {/* البحث */}
        <div className="flex-1 max-w-xl relative">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث عن هاتف أو شركة..."
            className="w-full rounded-full border border-gray-300 bg-gray-50 px-6 py-3 pr-12 text-gray-700 shadow-sm transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-200 outline-none"
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
            🔍
          </span>

        </div>

        {/* القائمة */}
        <nav className="flex items-center gap-6 font-semibold text-gray-700">

          <Link
            href="/"
            className="hover:text-blue-700 transition"
          >
            الرئيسية
          </Link>

          <Link
            href="/phones"
            className="hover:text-blue-700 transition"
          >
            الهواتف
          </Link>

          <Link
            href="/#offers"
            className="hover:text-blue-700 transition"
          >
            العروض
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-700 transition"
          >
            من نحن
          </Link>

          <Link
            href="/contact"
            className="hover:text-blue-700 transition"
          >
            تواصل
          </Link>

          <Link
            href="/favorites"
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-red-50 hover:bg-red-100 transition"
          >
            ❤️
            <div className="absolute -top-2 -left-2">
              <FavoriteCount />
            </div>
          </Link>

          <Link
            href="/cart"
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-green-50 hover:bg-green-100 transition"
          >
            🛒
            <div className="absolute -top-2 -left-2">
              <CartCount />
            </div>
          </Link>

        </nav>

      </div>
    </header>
  );
}