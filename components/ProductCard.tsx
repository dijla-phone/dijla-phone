import Image from "next/image";

type Product = {
  name: string;
  price: string;
  brand: string;
  image: string;
  description: string;
};

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

      {/* الصورة */}
      <div className="relative bg-gray-100 h-64 overflow-hidden">

        <span className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full z-10">
          جديد
        </span>

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 group-hover:scale-110 transition duration-500"
        />

      </div>

      {/* المعلومات */}

      <div className="p-6">

        <p className="text-blue-700 font-bold">
          {product.brand}
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {product.name}
        </h3>

        <p className="text-gray-600 mt-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-6">

          <span className="text-3xl font-extrabold text-green-600">
            {product.price}
          </span>

          <span className="text-yellow-500">
            ⭐⭐⭐⭐⭐
          </span>

        </div>

        <a
          href="https://wa.me/9647700000000"
          target="_blank"
          className="block mt-6 bg-green-600 hover:bg-green-700 text-center text-white py-3 rounded-xl font-bold transition"
        >
          اطلب عبر واتساب
        </a>

      </div>

    </div>
  );
}