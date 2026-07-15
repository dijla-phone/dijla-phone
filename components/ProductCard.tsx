import Image from "next/image";

type Product = {
  name: string;
  price: string;
  brand: string;
  image: string;
  description: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition">

      <div className="relative h-56 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>


      <div className="p-6">

        <p className="text-blue-600 font-semibold">
          {product.brand}
        </p>

        <h3 className="text-xl font-bold mt-2 text-gray-800">
          {product.name}
        </h3>

        <p className="text-gray-600 mt-3">
          {product.description}
        </p>

        <p className="text-2xl font-bold mt-4">
          {product.price}
        </p>


        <a
          href="https://wa.me/9647700000000"
          target="_blank"
          className="block text-center bg-green-600 text-white mt-5 py-3 rounded-xl hover:bg-green-700 transition"
        >
          اطلب عبر واتساب
        </a>

      </div>

    </div>
  );
}