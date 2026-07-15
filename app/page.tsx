import Slider from "@/components/Slider";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BestProducts from "@/components/BestProducts";


export default function Home() {

  return (

    <main className="min-h-screen bg-gray-100">


      <Slider />



      <section
        id="offers"
        className="bg-blue-700 text-white py-14 px-6"
      >


        <div className="max-w-6xl mx-auto text-center">


          <h2 className="text-4xl font-bold">
            🔥 عروض دجلة فون
          </h2>


          <p className="mt-4 text-lg">
            أفضل الأسعار والعروض على أحدث الهواتف
          </p>



          <div className="grid md:grid-cols-3 gap-6 mt-10">



            <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg">

              <div className="text-5xl">
                💰
              </div>

              <h3 className="text-xl font-bold mt-4">
                خصومات خاصة
              </h3>

              <p className="mt-2">
                عروض يومية وأسعار منافسة
              </p>

            </div>




            <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg">

              <div className="text-5xl">
                ✅
              </div>

              <h3 className="text-xl font-bold mt-4">
                أجهزة أصلية
              </h3>

              <p className="mt-2">
                هواتف أصلية مع ضمان
              </p>

            </div>





            <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg">

              <div className="text-5xl">
                🚚
              </div>

              <h3 className="text-xl font-bold mt-4">
                توصيل سريع
              </h3>

              <p className="mt-2">
                لجميع المحافظات داخل العراق
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