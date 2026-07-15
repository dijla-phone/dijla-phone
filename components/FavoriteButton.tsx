"use client";

import { useFavorite } from "@/context/FavoriteContext";
import { useToast } from "@/components/Toast";


export default function FavoriteButton({
  id,
}: {
  id: number;
}) {


  const {
    toggleFavorite,
    isFavorite
  } = useFavorite();


  const { showToast } = useToast();



  const favorite = isFavorite(id);



  function handleFavorite(){


    toggleFavorite(id);


    if(favorite){

      showToast("تمت الإزالة من المفضلة 🤍");

    }else{

      showToast("تمت الإضافة إلى المفضلة ❤️");

    }

  }



  return (

    <button

      onClick={handleFavorite}

      className="text-3xl"

      title="إضافة للمفضلة"

    >

      {favorite ? "❤️" : "🤍"}

    </button>

  );

}