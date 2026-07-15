export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          دجلة فون
        </h1>

        <nav className="flex gap-6">
          <a href="#" className="hover:text-yellow-300">
            الرئيسية
          </a>

          <a href="#products" className="hover:text-yellow-300">
            المنتجات
          </a>

          <a href="#" className="hover:text-yellow-300">
            العروض
          </a>

          <a href="#" className="hover:text-yellow-300">
            تواصل معنا
          </a>
        </nav>

      </div>
    </header>
  );
}