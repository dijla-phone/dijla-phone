"use client";

import { useEffect, useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function FavoritesList() {

  const [favorites, setFavorites] = useState<number[]>([]);


  useEffect(() => {

    const saved = localStorage.getItem("favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }

  }, []);



  const favoriteProducts = products.filter(
    (product) => favorites.includes(product.id)
  );


  return (
    <div className="max-w-6xl mx-auto px-6">

      {favoriteProducts.length === 0 ? (

        <p className="text-center text-xl text-gray-600">
          لا توجد هواتف في المفضلة ❤️
        </p>

      ) : (

        <div className="grid md:grid-cols-3 gap-8">

          {favoriteProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      )}

    </div>
  );
}