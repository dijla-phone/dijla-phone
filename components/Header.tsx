"use client";

import Link from "next/link";

import FavoriteCount from "@/components/FavoriteCount";
import CartCount from "@/components/CartCount";

import { useSearch } from "@/context/SearchContext";



export default function Header() {


  const {
    search,
    setSearch
  } = useSearch();




  return (

    <header className="bg-blue-700 text-white shadow-md">


      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row gap-5 justify-between items-center">



        <Link
          href="/"
          className="text-3xl font-bold"
        >
          📱 دجلة فون
        </Link>





        <div className="flex-1 max-w-md">


          <input

            type="text"

            value={search}

            onChange={(e)=>
              setSearch(e.target.value)
            }

            placeholder="ابحث عن هاتف..."

            className="w-full px-5 py-3 rounded-xl text-black outline-none"

          />


        </div>





        <nav className="flex flex-wrap justify-center gap-5 text-lg">


          <Link
            href="/"
            className="hover:text-yellow-300"
          >
            الرئيسية
          </Link>



          <Link
            href="/phones"
            className="hover:text-yellow-300"
          >
            الهواتف
          </Link>





          <Link
            href="/favorites"
            className="hover:text-yellow-300"
          >

            ❤️ المفضلة <FavoriteCount />

          </Link>





          <Link
            href="/cart"
            className="hover:text-yellow-300"
          >

            🛒 السلة <CartCount />

          </Link>





          <Link
            href="/#offers"
            className="hover:text-yellow-300"
          >
            العروض
          </Link>





          <Link
            href="/about"
            className="hover:text-yellow-300"
          >
            من نحن
          </Link>





          <Link
            href="/contact"
            className="hover:text-yellow-300"
          >
            تواصل معنا
          </Link>



        </nav>



      </div>


    </header>

  );

}