import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function BestProducts() {

  const bestProducts = products.slice(0, 3);

  return (
    <section className="bg-white py-12">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-8">
          ⭐ الأكثر مبيعًا
        </h2>


        <p className="text-center text-gray-600 mb-10">
          أفضل الهواتف طلبًا من عملائنا
        </p>


        <div className="grid md:grid-cols-3 gap-8">

          {bestProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}