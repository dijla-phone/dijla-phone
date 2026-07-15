import Link from "next/link";

const brands = [
  { name: "Apple", icon: "🍎" },
  { name: "Samsung", icon: "📱" },
  { name: "Xiaomi", icon: "⚡" },
  { name: "Honor", icon: "⭐" },
  { name: "Oppo", icon: "💚" },
  { name: "Realme", icon: "🟡" },
];

export default function Brands() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          تصفح حسب الشركة
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/category/${brand.name}`}
              className="bg-gray-100 hover:bg-blue-600 hover:text-white rounded-2xl p-6 text-center transition duration-300 shadow"
            >
              <div className="text-5xl mb-3">
                {brand.icon}
              </div>

              <h3 className="font-bold">
                {brand.name}
              </h3>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}