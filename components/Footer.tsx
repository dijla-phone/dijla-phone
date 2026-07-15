import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">


        <div>
          <h2 className="text-2xl font-bold">
            📱 دجلة فون
          </h2>

          <p className="mt-4 text-gray-400 leading-8">
            متجر متخصص في بيع الهواتف الذكية الأصلية
            بأفضل الأسعار داخل العراق.
          </p>
        </div>



        <div>

          <h3 className="text-xl font-bold mb-4">
            روابط سريعة
          </h3>

          <div className="flex flex-col gap-3">

            <Link href="/">
              الرئيسية
            </Link>

            <Link href="/phones">
              الهواتف
            </Link>

            <Link href="/about">
              من نحن
            </Link>

            <Link href="/contact">
              تواصل معنا
            </Link>

          </div>

        </div>



        <div>

          <h3 className="text-xl font-bold mb-4">
            تواصل معنا
          </h3>

          <p className="text-gray-400">
            العراق
          </p>

          <p className="text-gray-400 mt-2">
            واتساب: 07700000000
          </p>

        </div>


      </div>


      <div className="border-t border-gray-700 text-center py-5 text-gray-400">

        © {new Date().getFullYear()} دجلة فون - جميع الحقوق محفوظة

      </div>


    </footer>
  );
}