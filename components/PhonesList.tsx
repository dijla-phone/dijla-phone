"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function PhonesList() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("الكل");


  const filteredProducts = useMemo(() => {

    return products.filter((product) => {

      const searchMatch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());


      const brandMatch =
        brand === "الكل" || product.brand === brand;


      return searchMatch && brandMatch;

    });

  }, [search, brand]);


  return (
    <section className="max-w-6xl mx-auto px-6">

      <input
        type="text"
        placeholder="🔎 ابحث عن هاتف..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl border mb-6"
      />


      <div className="flex justify-center gap-3 flex-wrap mb-8">

        {["الكل", "Apple", "Samsung", "Xiaomi"].map((item) => (

          <button
            key={item}
            onClick={() => setBrand(item)}
            className={`px-6 py-2 rounded-xl font-bold ${
              brand === item
                ? "bg-blue-700 text-white"
                : "bg-white shadow"
            }`}
          >
            {item}
          </button>

        ))}

      </div>


      <p className="text-center text-gray-600 mb-8">
        عدد الهواتف: {filteredProducts.length}
      </p>


      <div className="grid md:grid-cols-3 gap-8">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}