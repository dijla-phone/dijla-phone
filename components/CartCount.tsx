"use client";

import { useCart } from "@/context/CartContext";


export default function CartCount() {

  const { cart } = useCart();


  return (
    <>
      {cart.length > 0 && (
        <span className="text-yellow-300 mr-1">
          ({cart.length})
        </span>
      )}
    </>
  );
}