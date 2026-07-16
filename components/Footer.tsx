"use client";

import Link from "next/link";
import { useSettings } from "@/context/SettingsContext";

export default function Footer() {

  const settings = useSettings();

  return (

    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* معلومات المتجر */}

        <div>

          <h2 className="text-3xl font-bold text-blue-400">

            {settings.store_name}

          </h2>

          <p className="mt-4 text-gray-300">

            {settings.tagline}

          </p>

        </div>

        {/* معلومات التواصل */}

        <div>

          <h3 className="text-xl font-bold mb-5">

            تواصل معنا

          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>

              📞 {settings.phone}

            </li>

            <li>

              📧 {settings.email}

            </li>

            <li>

              📍 {settings.address}

            </li>

          </ul>

        </div>

        {/* وسائل التواصل */}

        <div>

          <h3 className="text-xl font-bold mb-5">

            تابعنا

          </h3>

          <div className="flex flex-col gap-3">

            <Link
              href={settings.facebook}
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              Facebook
            </Link>

            <Link
              href={settings.instagram}
              target="_blank"
              className="hover:text-pink-400 transition"
            >
              Instagram
            </Link>

            <Link
              href={settings.telegram}
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              Telegram
            </Link>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">

        © {new Date().getFullYear()} {settings.store_name}

      </div>

    </footer>

  );

}