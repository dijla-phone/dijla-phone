"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";


export default function CartPage() {


  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  } = useCart();



  const getPrice = (price: string) => {

    return Number(
      price
        .replace(/,/g, "")
        .replace(" د.ع", "")
    );

  };



  const total = cart.reduce(
    (sum, product) =>
      sum + getPrice(product.price) * product.quantity,
    0
  );



  function whatsappOrder() {


    const message = `
السلام عليكم

📱 طلب جديد من متجر دجلة فون

${cart.map((product, index) => `

${index + 1}- ${product.name}

الكمية: ${product.quantity}

السعر:
${product.price}

الإجمالي:
${(
 getPrice(product.price) * product.quantity
).toLocaleString()} د.ع

`).join("")}


💰 المجموع النهائي:

${total.toLocaleString()} د.ع


شكراً لكم 🌹
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



      <div className="max-w-5xl mx-auto">


        {cart.length === 0 ? (

          <div className="bg-white rounded-2xl p-10 text-center shadow">

            <p className="text-xl text-gray-600">
              السلة فارغة
            </p>

          </div>


        ) : (


          <>


          {cart.map((product)=>(


            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 mb-5 shadow flex flex-col md:flex-row items-center gap-6"
            >


              <div className="relative w-32 h-32 bg-gray-100 rounded-xl overflow-hidden">

                <Image

                  src={product.image}

                  alt={product.name}

                  fill

                  className="object-contain p-3"

                />

              </div>





              <div className="flex-1">


                <h3 className="text-2xl font-bold">

                  {product.name}

                </h3>


                <p className="text-gray-500 mt-1">

                  {product.brand}

                </p>



                <p className="text-green-600 text-xl font-bold mt-3">

                  {product.price}

                </p>



                <p className="text-blue-600 mt-2">

                  إجمالي المنتج:

                  {" "}

                  {(
                    getPrice(product.price)
                    *
                    product.quantity
                  ).toLocaleString()}

                  {" د.ع"}

                </p>





                <div className="flex items-center gap-4 mt-5">


                  <button

                    onClick={() =>
                      decreaseQuantity(product.id)
                    }

                    className="bg-gray-300 px-4 py-2 rounded-lg text-xl"

                  >

                    -

                  </button>



                  <span className="text-xl font-bold">

                    {product.quantity}

                  </span>




                  <button

                    onClick={() =>
                      increaseQuantity(product.id)
                    }

                    className="bg-blue-700 text-white px-4 py-2 rounded-lg text-xl"

                  >

                    +

                  </button>


                </div>



              </div>





              <button

                onClick={() =>
                  removeFromCart(product.id)
                }

                className="bg-red-600 text-white px-5 py-3 rounded-xl"

              >

                حذف

              </button>



            </div>



          ))}





          <div className="bg-white rounded-2xl p-8 mt-8 text-center shadow">


            <h2 className="text-3xl font-bold">

              المجموع:

              <span className="text-green-600 mr-2">

                {total.toLocaleString()} د.ع

              </span>

            </h2>




            <button

              onClick={whatsappOrder}

              className="mt-6 bg-green-600 text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-green-700"

            >

              📲 إرسال الطلب عبر واتساب

            </button>




            <button

              onClick={clearCart}

              className="block mx-auto mt-5 text-red-600 font-bold"

            >

              🗑️ إفراغ السلة

            </button>



          </div>



          </>


        )}



      </div>


    </main>

  );

}