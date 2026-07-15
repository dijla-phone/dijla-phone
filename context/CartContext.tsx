"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { products } from "@/data/products";


type Product = typeof products[0];


type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};


const CartContext = createContext<CartContextType | null>(null);



export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [cart, setCart] = useState<Product[]>([]);



  // تحميل السلة عند فتح الموقع
  useEffect(() => {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

  }, []);



  // حفظ السلة عند أي تغيير
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);




  function addToCart(product: Product) {

    setCart((prev) => {

      const exists = prev.some(
        (item) => item.id === product.id
      );


      if (exists) {
        return prev;
      }


      return [
        ...prev,
        product
      ];

    });

  }




  function removeFromCart(id: number) {

    setCart((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  }




  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}




export function useCart() {

  const context = useContext(CartContext);


  if (!context) {
    throw new Error(
      "useCart must be inside CartProvider"
    );
  }


  return context;
}