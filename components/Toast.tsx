"use client";

import { createContext, useContext, useState } from "react";


type ToastContextType = {
  showToast: (message: string) => void;
};


const ToastContext = createContext<ToastContextType | null>(null);



export function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [message, setMessage] = useState("");


  function showToast(text: string) {

    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);

  }


  return (
    <ToastContext.Provider value={{ showToast }}>

      {children}


      {message && (
        <div className="
          fixed
          bottom-6
          right-6
          bg-green-600
          text-white
          px-6
          py-4
          rounded-xl
          shadow-xl
          z-50
          font-bold
        ">
          {message}
        </div>
      )}

    </ToastContext.Provider>
  );
}



export function useToast() {

  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToast must be inside ToastProvider"
    );
  }

  return context;
}