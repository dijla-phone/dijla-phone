"use client";

import Image from "next/image";

import { products } from "@/data/products";
import { useFavorite } from "@/context/FavoriteContext";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/Toast";


export default function FavoritesList() {


  const {
    favorites,
    toggleFavorite
  } = useFavorite();



  const {
    addToCart
  } = useCart();



  const {
    showToast
  } = useToast();




  const favoriteProducts = products.filter(
    (product) =>
      favorites.includes(product.id)
  );




  function addProductToCart(product:any){

    addToCart(product);

    showToast(
      "تمت الإضافة إلى السلة 🛒"
    );

  }





  return (

    <div className="max-w-6xl mx-auto px-6">


      {favoriteProducts.length === 0 ? (


        <p className="text-center text-xl text-gray-600 py-10">

          لا توجد هواتف في المفضلة ❤️

        </p>


      ) : (



        <div className="grid md:grid-cols-3 gap-8">


          {favoriteProducts.map((product)=>(


            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-md p-6"
            >



              <div className="relative h-64 bg-gray-100 rounded-2xl">

                <Image

                  src={product.image}

                  alt={product.name}

                  fill

                  className="object-contain p-5"

                />

              </div>




              <h3 className="text-2xl font-bold mt-5">

                {product.name}

              </h3>




              <p className="text-green-600 font-bold text-xl mt-3">

                {product.price}

              </p>




              <button

                onClick={() =>
                  addProductToCart(product)
                }

                className="w-full mt-5 bg-blue-700 text-white py-3 rounded-xl"

              >

                🛒 أضف إلى السلة

              </button>





              <button

                onClick={() =>
                  toggleFavorite(product.id)
                }

                className="w-full mt-3 bg-red-600 text-white py-3 rounded-xl"

              >

                إزالة من المفضلة 🤍

              </button>



            </div>


          ))}


        </div>


      )}


    </div>

  );

}