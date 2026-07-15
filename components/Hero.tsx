export default function Hero() {
  return (
    <section className="bg-gradient-to-l from-blue-700 to-blue-500 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-extrabold">
          📱 دجلة فون
        </h1>

        <p className="mt-6 text-xl">
          أحدث الهواتف الأصلية بأفضل الأسعار داخل العراق
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <a
            href="#products"
            className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold"
          >
            تصفح الهواتف
          </a>

          <a
            href="https://wa.me/9647700000000"
            className="bg-green-600 px-8 py-3 rounded-xl font-bold hover:bg-green-700"
          >
            واتساب
          </a>

        </div>

      </div>
    </section>
  );
}