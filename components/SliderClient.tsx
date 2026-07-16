"use client";

import Image from "next/image";
import { useState } from "react";

type Banner = {
  id: number;
  title: string;
  image: string;
  active: boolean;
  sort_order: number;
};

export default function SliderClient({
  banners,
}: {
  banners: Banner[];
}) {

  const [active, setActive] = useState(0);

  if (banners.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-900 text-white py-16">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="text-center md:text-right">

            <h1 className="text-5xl font-bold">
              {banners[active].title}
            </h1>

            <a
              href="#products"
              className="inline-block mt-8 bg-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-700"
            >
              تسوق الآن
            </a>

          </div>

          <div className="relative h-80">

            <Image
              src={banners[active].image}
              alt={banners[active].title}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain"
              priority
            />

          </div>

        </div>

        <div className="flex justify-center gap-3 mt-10">

          {banners.map((banner, index) => (

            <button
              key={banner.id}
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