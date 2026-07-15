import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        المنتج غير موجود
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        {/* زر الرجوع */}
        <Link
          href="/"
          className="inline-block mb-6 bg-gray-800 text-white px-5 py-2 rounded-xl"
        >
          ← العودة للمنتجات
        </Link>


        <div className="bg-white rounded-3xl shadow-xl p-8 grid md:grid-cols-2 gap-10">


          {/* صورة الهاتف */}
          <div className="relative h-96 bg-gray-100 rounded-2xl">

            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8"
            />

          </div>


          {/* معلومات الهاتف */}
          <div>

            <p className="text-blue-700 text-xl font-bold">
              {product.brand}
            </p>

            <h1 className="text-4xl font-extrabold mt-3">
              {product.name}
            </h1>


            <div className="mt-4 text-yellow-500 text-xl">
              ⭐⭐⭐⭐⭐
            </div>


            <p className="text-gray-600 text-lg mt-5">
              {product.description}
            </p>


            <p className="text-green-600 text-4xl font-bold mt-6">
              {product.price}
            </p>


            <a
              href={`https://wa.me/9647700000000?text=${encodeURIComponent(
  `السلام عليكم، أريد طلب ${product.name}
السعر: ${product.price}`
)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-8 bg-green-600 hover:bg-green-700 text-white text-center py-4 rounded-xl font-bold text-lg"
            >
              اطلب عبر واتساب
            </a>


          </div>

        </div>


        {/* المواصفات */}

        <div className="bg-white rounded-3xl shadow-xl mt-10 p-8">

          <h2 className="text-3xl font-bold mb-6 text-center">
            📋 مواصفات الهاتف
          </h2>


          <div className="grid md:grid-cols-2 gap-4 text-lg">

            <div className="bg-gray-100 p-4 rounded-xl">
              📱 الشاشة:
              <strong> {product.specs.screen}</strong>
            </div>


            <div className="bg-gray-100 p-4 rounded-xl">
              🧠 الرام:
              <strong> {product.specs.ram}</strong>
            </div>


            <div className="bg-gray-100 p-4 rounded-xl">
              💾 التخزين:
              <strong> {product.specs.storage}</strong>
            </div>


            <div className="bg-gray-100 p-4 rounded-xl">
              📸 الكاميرا:
              <strong> {product.specs.camera}</strong>
            </div>


            <div className="bg-gray-100 p-4 rounded-xl">
              🔋 البطارية:
              <strong> {product.specs.battery}</strong>
            </div>


          </div>

        </div>

      </div>

    </main>
  );
}