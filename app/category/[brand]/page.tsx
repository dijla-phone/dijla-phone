import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/product.service";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {

  const { brand } = await params;

  const products = await getProducts();

  const filteredProducts = products.filter(
    (product) =>
      product.brand.toLowerCase() === decodeURIComponent(brand).toLowerCase()
  );

  return (
    <main className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-10">
          📱 هواتف {decodeURIComponent(brand)}
        </h1>

        {filteredProducts.length === 0 ? (

          <p className="text-center text-xl">
            لا توجد منتجات
          </p>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        )}

      </div>

    </main>
  );
}