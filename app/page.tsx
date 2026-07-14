export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* الهيدر */}
      <header className="bg-blue-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold">دجلة فون</h1>

          <nav className="flex gap-6">
            <a href="#" className="hover:text-yellow-300">الرئيسية</a>
            <a href="#" className="hover:text-yellow-300">الهواتف</a>
            <a href="#" className="hover:text-yellow-300">العروض</a>
            <a href="#" className="hover:text-yellow-300">تواصل معنا</a>
          </nav>
        </div>
      </header>

      {/* القسم الرئيسي */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold text-gray-800">
          مرحباً بكم في دجلة فون
        </h2>

        <p className="mt-6 text-xl text-gray-600">
          أحدث الهواتف الأصلية بأفضل الأسعار في العراق
        </p>

        <a
          href="https://wa.me/9647700000000"
          target="_blank"
          className="inline-block mt-10 bg-green-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-green-700 transition"
        >
          اطلب عبر واتساب
        </a>
      </section>

    </main>
  );
}