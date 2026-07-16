"use client";

"use client";

import Image from "next/image";
import Link from "next/link";

import FavoriteButton from "@/components/FavoriteButton";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/Toast";

import type { Product } from "@/types/product";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {

  const { addToCart } = useCart();
  const { showToast } = useToast();

  function handleCart() {
    addToCart(product);
    showToast("تمت الإضافة إلى السلة 🛒");
  }

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden">

      <Link href={`/products/${product.id}`}>

        <div className="relative h-64 bg-gray-100">

          {product.image ? (

            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6 hover:scale-105 transition"
            />

          ) : (

            <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
              لا توجد صورة
            </div>

          )}

        </div>

      </Link>

      <div className="flex justify-between items-center px-6 pt-5">
        <FavoriteButton id={product.id} />
      </div>

      <div className="p-6">

        <p className="text-blue-700 font-bold">
          {product.brand}
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {product.name}
        </h3>

        <p className="text-gray-600 mt-3">
          {product.description}
        </p>

        <p className="text-green-600 text-2xl font-bold mt-5">
          {product.price}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="block text-center mt-5 bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800"
        >
          عرض التفاصيل
        </Link>

        <button
          onClick={handleCart}
          className="block w-full text-center mt-3 bg-yellow-500 text-white py-3 rounded-xl hover:bg-yellow-600"
        >
          🛒 أضف إلى السلة
        </button>

        <a
          href={`https://wa.me/9647700000000?text=${encodeURIComponent(
            `السلام عليكم، أريد طلب ${product.name}
السعر: ${product.price}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-3 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
        >
          اطلب عبر واتساب
        </a>

      </div>

    </div>
  );
}