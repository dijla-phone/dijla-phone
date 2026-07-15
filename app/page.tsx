import Header from "@/components/Header";
import Slider from "@/components/Slider";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BestProducts from "@/components/BestProducts";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <Header />

      <Slider />

      <section id="offers" className="bg-blue-700 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            🔥 عروض دجلة فون
          </h2>

          <p className="mt-3 text-lg">
            أفضل الأسعار والعروض على أحدث الهواتف
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="text-5xl mb-4">💰</div>

              <h3 className="text-xl font-bold">
                خصومات خاصة
              </h3>

              <p className="mt-2">
                عروض يومية وأسعار منافسة
              </p>
            </div>

            <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="text-5xl mb-4">✅</div>

              <h3 className="text-xl font-bold">
                أجهزة أصلية
              </h3>

              <p className="mt-2">
                جميع الأجهزة أصلية مع ضمان
              </p>
            </div>

            <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="text-5xl mb-4">🚚</div>

              <h3 className="text-xl font-bold">
                توصيل لجميع المحافظات
              </h3>

              <p className="mt-2">
                خدمة توصيل سريعة وآمنة داخل العراق
              </p>
            </div>

          </div>

        </div>
      </section>

<BestProducts />

      <ProductsSection />

      <Footer />

<WhatsAppButton />

    </main>
  );
}