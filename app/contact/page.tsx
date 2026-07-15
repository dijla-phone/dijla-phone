export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 text-center">

        <h1 className="text-4xl font-bold text-blue-700">
          تواصل معنا
        </h1>


        <p className="mt-6 text-lg text-gray-600">
          للاستفسار والطلبات تواصل معنا عبر واتساب
        </p>


        <a
          href="https://wa.me/9647700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-green-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-green-700"
        >
          💬 واتساب
        </a>


      </div>

    </main>
  );
}