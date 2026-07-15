"use client";

import { useFavorite } from "@/context/FavoriteContext";


export default function FavoriteCount() {


  const {
    totalFavorites
  } = useFavorite();



  return (

    <>

      {totalFavorites > 0 && (

        <span className="mr-1 text-yellow-300">

          ({totalFavorites})

        </span>

      )}

    </>

  );

}