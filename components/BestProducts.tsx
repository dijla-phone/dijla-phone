import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export default async function BestProducts() {
  const products = await getProducts();

  const bestProducts = products.slice(0, 3);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          ⭐ الأكثر مبيعًا
        </h2>

        <p className="text-center text-gray-600 text-lg mb-12">
          أفضل الهواتف التي يفضلها عملاؤنا
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