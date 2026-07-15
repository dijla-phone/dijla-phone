import PhonesList from "@/components/PhonesList";
import Link from "next/link";

export default function PhonesPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">


      <h1 className="text-4xl font-bold text-center mb-10">
        📱 جميع الهواتف
      </h1>


      <div className="flex justify-center gap-4 mb-10 flex-wrap">

        <Link
          href="/category/Apple"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          🍎 Apple
        </Link>


        <Link
          href="/category/Samsung"
          className="bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          Samsung
        </Link>


        <Link
          href="/category/Xiaomi"
          className="bg-orange-600 text-white px-6 py-3 rounded-xl"
        >
          Xiaomi
        </Link>

      </div>


      <PhonesList />


    </main>
  );
}