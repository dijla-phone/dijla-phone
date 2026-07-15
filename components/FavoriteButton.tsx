"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/components/Toast";
export default function FavoriteButton({
  id,
}: {
  id: number;
}) {

  const [favorite, setFavorite] = useState(false);
const { showToast } = useToast();

  useEffect(() => {

    const saved = localStorage.getItem("favorites");

    if (saved) {
      const favorites = JSON.parse(saved);

      setFavorite(favorites.includes(id));
    }

  }, [id]);



  function toggleFavorite() {

    const saved = localStorage.getItem("favorites");

    let favorites = saved
      ? JSON.parse(saved)
      : [];


    if (favorites.includes(id)) {

      favorites = favorites.filter(
        (item: number) => item !== id
      );

      setFavorite(false);

      showToast("تمت الإزالة من المفضلة 🤍");


    } else {

      favorites.push(id);

      setFavorite(true);

      showToast("تمت الإضافة إلى المفضلة ❤️");

    }


    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

  }



  return (
    <button
      onClick={toggleFavorite}
      className="text-3xl"
      title="إضافة للمفضلة"
    >
      {favorite ? "❤️" : "🤍"}
    </button>
  );
}