"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    title: "🔥 عروض دجلة فون",
    text: "أفضل الأسعار على أحدث الهواتف الذكية",
    image: "/banners/iphone-banner.jpg",
  },
  {
    title: "📱 أحدث أجهزة Samsung",
    text: "أجهزة أصلية مع ضمان وجودة عالية",
    image: "/banners/samsung-banner.jpg",
  },
  {
    title: "⚡ هواتف Xiaomi",
    text: "تقنية قوية بأسعار مناسبة للجميع",
    image: "/banners/xiaomi-banner.jpg",
  },
];

export default function Slider() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gray-900 text-white py-16">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="text-center md:text-right">

            <h1 className="text-5xl font-bold">
              {slides[active].title}
            </h1>

            <p className="mt-6 text-xl text-gray-300">
              {slides[active].text}
            </p>

            <a
              href="#products"
              className="inline-block mt-8 bg-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-700"
            >
              تسوق الآن
            </a>

          </div>


          <div className="relative h-80">

            <Image
              src={slides[active].image}
              alt={slides[active].title}
              fill
              className="object-contain"
            />

          </div>

        </div>


        <div className="flex justify-center gap-3 mt-10">

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-4 h-4 rounded-full ${
                active === index
                  ? "bg-blue-500"
                  : "bg-gray-400"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}