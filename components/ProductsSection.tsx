"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { products } from "@/data/products";

export default function ProductsSection() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("الكل");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchBrand =
        brand === "الكل" || product.brand === brand;

      const matchSearch =
        product.name.toLowerCase().includes(search.toLowerCase());

      return matchBrand && matchSearch;
    });
  }, [search, brand]);

  return (
    <section
      id="products"
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        📱 أحدث الهواتف
      </h2>

      <input
        type="text"
        placeholder="🔎 ابحث عن هاتف..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-xl p-4 mb-6"
      />

      <div className="flex gap-3 justify-center flex-wrap mb-8">

        {["الكل", "Apple", "Samsung", "Xiaomi"].map((item) => (

          <button
            key={item}
            onClick={() => setBrand(item)}
            className={`px-5 py-2 rounded-xl ${
              brand === item
                ? "bg-blue-700 text-white"
                : "bg-white shadow"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

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