"use client";

import { useCart } from "@/context/CartContext";


export default function CartPage() {

  const {
    cart,
    removeFromCart
  } = useCart();



  const total = cart.reduce(
    (sum, product) =>
      sum + Number(
        product.price
          .replace(/,/g, "")
          .replace(" د.ع", "")
      ),
    0
  );



  function whatsappOrder() {

    const message = `
السلام عليكم

أريد طلب:

${cart.map((product, index) => `
${index + 1}- ${product.name}
السعر: ${product.price}
`).join("")}

المجموع:
${total.toLocaleString()} د.ع
`;



    window.open(
      `https://wa.me/9647700000000?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  }



  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">


      <h1 className="text-4xl font-bold text-center mb-10">
        🛒 سلة الطلب
      </h1>



      <div className="max-w-4xl mx-auto">


        {cart.length === 0 ? (

          <p className="text-center text-xl text-gray-600">
            السلة فارغة
          </p>

        ) : (

          <>

          {cart.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-xl p-5 mb-4 flex justify-between items-center"
            >

              <div>

                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                <p className="text-green-600">
                  {product.price}
                </p>

              </div>


              <button
                onClick={() =>
                  removeFromCart(product.id)
                }
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                حذف
              </button>


            </div>

          ))}



          <div className="bg-white rounded-xl p-6 mt-8 text-center">

            <h2 className="text-2xl font-bold">
              المجموع:
              <span className="text-green-600">
                {" "}
                {total.toLocaleString()} د.ع
              </span>
            </h2>



            <button
              onClick={whatsappOrder}
              className="mt-6 bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-700"
            >
              📲 إرسال الطلب عبر واتساب
            </button>


          </div>


          </>

        )}


      </div>

    </main>
  );
}