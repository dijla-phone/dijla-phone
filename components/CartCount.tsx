"use client";

import { useCart } from "@/context/CartContext";


export default function CartCount() {

  const { totalItems } = useCart();


  return (
    <>
      {totalItems > 0 && (
        <span className="text-yellow-300 mr-1">
          ({totalItems})
        </span>
      )}
    </>
  );

}