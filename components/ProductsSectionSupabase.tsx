import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/products";

export default async function ProductsSectionSupabase() {
  const products = await getProducts();

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        📱 أحدث الهواتف
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}