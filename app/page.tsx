import Header from "@/components/Header";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <Header />

      <section className="text-center py-12 px-6">
        <h2 className="text-4xl font-bold text-gray-800">
          أحدث الهواتف الذكية
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          اختر هاتفك المفضل وتواصل معنا عبر واتساب
        </p>
      </section>


      <section id="products" className="max-w-6xl mx-auto px-6 pb-12">

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </main>
  );
}