"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { products } from "@/data/products";


type Product = typeof products[0];


type CartItem = Product & {
  quantity: number;
};


type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
};



const CartContext = createContext<CartContextType | null>(null);



export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [cart, setCart] = useState<CartItem[]>([]);



  useEffect(() => {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

  }, []);



  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);



  function addToCart(product: Product) {

    setCart((prev)=>{

      const existing = prev.find(
        item => item.id === product.id
      );


      if(existing){

        return prev.map(item =>
          item.id === product.id
          ? {
              ...item,
              quantity:item.quantity + 1
            }
          : item
        );

      }


      return [
        ...prev,
        {
          ...product,
          quantity:1
        }
      ];

    });

  }



  function removeFromCart(id:number){

    setCart(prev =>
      prev.filter(
        item => item.id !== id
      )
    );

  }



  function increaseQuantity(id:number){

    setCart(prev =>
      prev.map(item =>
        item.id === id
        ?
        {
          ...item,
          quantity:item.quantity + 1
        }
        :
        item
      )
    );

  }



  function decreaseQuantity(id:number){

    setCart(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
        ?
        {
          ...item,
          quantity:item.quantity - 1
        }
        :
        item
      )
    );

  }



  function clearCart(){

    setCart([]);

  }



  const totalItems = cart.reduce(
    (sum,item)=> sum + item.quantity,
    0
  );



  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems
      }}
    >

      {children}

    </CartContext.Provider>

  );

}




export function useCart(){

  const context = useContext(CartContext);


  if(!context){

    throw new Error(
      "useCart must be inside CartProvider"
    );

  }


  return context;

}