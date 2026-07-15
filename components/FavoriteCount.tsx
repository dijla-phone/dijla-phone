"use client";

import { useEffect, useState } from "react";

export default function FavoriteCount() {

  const [count, setCount] = useState(0);


  useEffect(() => {

    function updateCount() {

      const saved = localStorage.getItem("favorites");

      if (saved) {
        setCount(JSON.parse(saved).length);
      } else {
        setCount(0);
      }

    }


    updateCount();


    window.addEventListener(
      "storage",
      updateCount
    );


    return () => {
      window.removeEventListener(
        "storage",
        updateCount
      );
    };

  }, []);


  return (
    <>
      {count > 0 && (
        <span className="mr-1 text-yellow-300">
          ({count})
        </span>
      )}
    </>
  );
}