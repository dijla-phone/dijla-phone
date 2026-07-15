import Link from "next/link";
import FavoriteCount from "@/components/FavoriteCount";
import CartCount from "@/components/CartCount";
export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link
          href="/"
          className="text-3xl font-bold"
        >
          📱 دجلة فون
        </Link>


        <nav className="flex gap-5 text-lg">

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