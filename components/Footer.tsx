export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-2xl font-bold mb-4">
            📱 دجلة فون
          </h3>

          <p className="text-gray-300">
            متجر متخصص ببيع الهواتف الأصلية والإكسسوارات
            داخل العراق بأفضل الأسعار.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            روابط سريعة
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>الرئيسية</li>
            <li>المنتجات</li>
            <li>العروض</li>
            <li>تواصل معنا</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            معلومات التواصل
          </h3>

          <p className="text-gray-300">
            📞 07700000000
          </p>

          <p className="text-gray-300 mt-2">
            📍 العراق - بغداد
          </p>

          <p className="text-gray-300 mt-2">
            ✉️ info@dijlaphone.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 py-6 text-center text-gray-400">
        © 2026 دجلة فون - جميع الحقوق محفوظة
      </div>
    </footer>
  );
}