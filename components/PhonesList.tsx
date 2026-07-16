"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useSearch } from "@/context/SearchContext";
import type { Product } from "@/types/product";

export default function PhonesList({
  products,
}: {
  products: Product[];
}) {
  const { search } = useSearch();

  const [brand, setBrand] = useState("الكل");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchMatch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase());

      const brandMatch =
        brand === "الكل" || product.brand === brand;

      return searchMatch && brandMatch;
    });
  }, [products, search, brand]);

  return (
    <section className="max-w-6xl mx-auto px-6">

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

      {filteredProducts.length === 0 ? (
        <p className="text-center text-xl text-gray-600">
          لا توجد نتائج 🔍
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}