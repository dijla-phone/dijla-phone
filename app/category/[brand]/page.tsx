import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {

  const { brand } = await params;


  const filteredProducts = products.filter(
    (product) =>
      product.brand.toLowerCase() === brand.toLowerCase()
  );


  return (
    <main className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-6xl mx-auto px-6">


        <h1 className="text-4xl font-bold text-center mb-10">
          📱 هواتف {brand}
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